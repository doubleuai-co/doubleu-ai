(function () {
  // Define extensions
  const FileUploadExtension = {
    name: "FileUpload",
    type: "response",
    match: ({ trace }) =>
      trace.type === "ext_fileUpload" ||
      trace.payload?.name === "ext_fileUpload",
    render: ({ element }) => {
      const container = document.createElement("div");
      container.innerHTML = `
        <style>
          .file-upload-box {
            border: 2px dashed rgba(46, 110, 225, 0.5);
            padding: 16px;
            text-align: center;
            cursor: pointer;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            color: #2e6ee1;
            background-color: rgba(46, 110, 225, 0.05);
            transition: all 0.2s ease;
          }
          .file-upload-box:hover {
            background-color: rgba(46, 110, 225, 0.15);
            border-color: rgba(46, 110, 225, 0.7);
          }
          .file-upload-box:active {
            background-color: rgba(46, 110, 225, 0.2);
          }
        </style>
        <div class='file-upload-box'>Click to upload</div>
        <input type='file' hidden>
      `;
      const fileInput = container.querySelector('input[type="file"]');
      const uploadBox = container.querySelector(".file-upload-box");

      uploadBox.addEventListener("click", () => fileInput.click());
      fileInput.addEventListener("change", async function () {
        const file = this.files[0];
        if (!file) return;

        container.innerHTML = `<div>Uploading ${file.name}...</div>`;
        try {
          const formData = new FormData();
          formData.append("file", file);

          const response = await fetch("https://tmpfiles.org/api/v1/upload", {
            method: "POST",
            body: formData,
          });
          const result = await response.json();

          if (!response.ok || !result.data?.url) {
            throw new Error("Failed to upload file");
          }

          const fileUrl = result.data.url.replace(
            "https://tmpfiles.org/",
            "https://tmpfiles.org/dl/",
          );
          container.innerHTML = `<div>Analyzing ${file.name}...</div>`;

          window.voiceflow.chat.interact({
            type: "complete",
            payload: { file: fileUrl },
          });
        } catch (error) {
          console.error("Upload Error:", error);
          container.innerHTML =
            "<div>Error during upload. Please try again.</div>";
        }
      });

      element.appendChild(container);
    },
  };

  const FormExtension = {
    name: "Forms",
    type: "response",
    match: ({ trace }) =>
      trace.type === "Custom_Form" ||
      trace.payload?.name === "Custom_Form" ||
      trace.type === "Custom_Form1" ||
      trace.payload?.name === "Custom_Form1" ||
      trace.type === "Custom_Form2" ||
      trace.payload?.name === "Custom_Form2",
    render: ({ trace, element }) => {
      const formContainer = document.createElement("form");
      const formType =
        trace.type === "Custom_Form1" || trace.payload?.name === "Custom_Form1"
          ? "Custom_Form1"
          : trace.type === "Custom_Form2" ||
              trace.payload?.name === "Custom_Form2"
            ? "Custom_Form2"
            : "Custom_Form";

      // Shared styles for all forms
      formContainer.innerHTML = `
        <style>
          label {
            font-size: 0.8em;
            color: #888;
            font-weight: bold;
          }
          input[type="text"], input[type="number"], input[type="email"], input[type="tel"], select {
            width: 100%;
            border: none;
            border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
            background: transparent;
            margin: 5px 0;
            outline: none;
            padding: 8px 0;
          }
          .phone {
            width: 150px;
          }
          .invalid {
            border-color: red;
          }
          .submit {
            background: linear-gradient(to right, #2e6ee1, #2e7ff1);
            border: none;
            color: white;
            padding: 10px;
            border-radius: 5px;
            width: 100%;
            cursor: pointer;
            font-size: 1em;
            font-weight: bold;
            text-transform: uppercase;
            margin-top: 15px;
          }
          .submit:hover {
            background: linear-gradient(to right, #2259c7, #2670d8);
          }
          select {
            appearance: none;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 0.7em top 50%;
            background-size: 0.65em auto;
          }
        </style>
      `;

      // Form content based on form type
      let formContent = "";
      let formFields = [];

      if (formType === "Custom_Form1") {
        // Power bill form
        formContent = `
          <label for="billAmount">Bill Amount (currency included)</label>
          <input type="text" class="billAmount" name="billAmount" required><br><br>
          <label for="powerConsumption">Power Consumption (kWh)</label>
          <input type="number" class="powerConsumption" name="powerConsumption" required min="0"><br><br>
          <label for="ratePerKwh">Rate per kWh</label>
          <input type="number" class="ratePerKwh" name="ratePerKwh" step="0.0001" required min="0"><br><br>
          <label for="phaseType">Phase Type</label>
          <select class="phaseType" name="phaseType" required>
            <option value="">-- Select an option --</option>
            <option value="Single-Phase">Single-Phase</option>
            <option value="Three-Phase">Three-Phase</option>
          </select><br><br>
        `;
        formFields = [
          "billAmount",
          "powerConsumption",
          "ratePerKwh",
          "phaseType",
        ];
      } else if (formType === "Custom_Form2") {
        // Contact information form
        formContent = `
          <label for="name">Name</label>
          <input type="text" class="name" name="name" required><br><br>
          <label for="email">Email</label>
          <input type="email" class="email" name="email" required 
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" 
            title="Invalid email address"><br><br>
          <label for="phone">Phone Number</label>
          <input type="tel" class="phone" name="phone" required 
            pattern="\\d+" 
            title="Invalid phone number, please enter only numbers"><br><br>
          <label for="address">Street Address</label>
          <input type="text" class="address" name="address" required><br><br>
          <label for="city">City</label>
          <input type="text" class="city" name="city" required><br><br>
          <label for="state">State/Province</label>
          <input type="text" class="state" name="state" required><br><br>
          <label for="zipCode">Zip/Postal Code</label>
          <input type="text" class="zipCode" name="zipCode" required><br><br>
          <label for="country">Country</label>
          <input type="text" class="country" name="country" required><br><br>
        `;
        formFields = [
          "name",
          "email",
          "phone",
          "address",
          "city",
          "state",
          "zipCode",
          "country",
        ];
      } else {
        // Original generator form
        formContent = `
          <label for="brand">Manufacturer/Brand</label>
          <input type="text" class="brand" name="brand" required><br><br>
          <label for="capacity">kVA & kW Capacity</label>
          <input type="text" class="capacity" name="capacity" required><br><br>
          <label for="hours">Total Running Hours</label>
          <input type="text" class="hours" name="hours" required 
            pattern="\\d*\\.?\\d*" 
            title="Please enter a valid number"><br><br>
          <label for="fuel">Type of Fuel Used</label>
          <input type="text" class="fuel" name="fuel" required><br><br>
          <label for="cost">Local Fuel Cost</label>
          <input type="text" class="cost" name="cost" required
            pattern="\\d*\\.?\\d*" 
            title="Please enter a valid number"><br><br>
          <label for="year">Purchase Year</label>
          <input type="text" class="year" name="year" required
            pattern="\\d{4}" 
            title="Please enter a 4-digit year"><br><br>
          <label for="runningHours">Running Hours Per Day</label>
          <input type="text" class="runningHours" name="runningHours" required
            pattern="\\d*\\.?\\d*" 
            title="Please enter a valid number"><br><br>
        `;
        formFields = [
          "brand",
          "capacity",
          "hours",
          "fuel",
          "cost",
          "year",
          "runningHours",
        ];
      }

      // Combine styles, form content, and submit button
      formContainer.innerHTML += `
        ${formContent}
        <input type="submit" class="submit" value="Submit">
      `;

      // Add input validation event listener
      formContainer.addEventListener("input", function () {
        // Remove 'invalid' class when input becomes valid
        formFields.forEach((field) => {
          const element = formContainer.querySelector("." + field);
          if (element && element.checkValidity()) {
            element.classList.remove("invalid");
          }
        });
      });

      // Add form submission event handler with validation
      formContainer.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validate all fields
        let isValid = true;
        const formData = {};

        formFields.forEach((field) => {
          const element = formContainer.querySelector("." + field);
          if (element) {
            formData[field] = element.value;

            if (!element.checkValidity()) {
              element.classList.add("invalid");
              isValid = false;
            }
          }
        });

        if (!isValid) {
          return;
        }

        // Remove submit button to prevent multiple submissions
        const submitBtn = formContainer.querySelector(".submit");
        if (submitBtn) submitBtn.remove();

        // Submit the form data
        window.voiceflow.chat.interact({
          type: "complete",
          payload: formData,
        });
      });

      element.appendChild(formContainer);
    },
  };

  // Initialize Voiceflow widget
  const v = document.createElement("script");
  v.type = "text/javascript";
  v.onload = function () {
    window.voiceflow.chat.load({
      verify: { projectID: "68f9a2b8b9abe8c36ec95e86" },
      url: "https://general-runtime.voiceflow.com",
      versionID: "production",
      voice: {
        url: "https://runtime-api.voiceflow.com",
      },
      assistant: {
        extensions: [FileUploadExtension, FormExtension],
        persistence: "memory",
      },
    }).then(() => {
      window.voiceflow.chat.proactive.push(  
        { type: 'text', payload: { message: 'Hi! I’m your guide to DoubleU AI’s world. So ask me any question you’ve got!' } }
      )
    });
  };
  v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";

  // Insert script
  const s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(v, s);

  // Add click event listener to the CTA widget
  document.getElementById("chat-widget").addEventListener("click", function () {
    window.voiceflow.chat.open();
  });
})();
