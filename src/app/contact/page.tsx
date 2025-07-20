const Contact = () => {
  return (
    <div className="bg-white md:pb-18 text-gray-800">
      {/* 1. Hero Section for Contact Page */}
      <section className="relative overflow-hidden bg-white px-4 pt-36 pb-8 text-[#222831] sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
          <h1 className="mb-6 pt-10 md:mt-0 text-center text-[40px] leading-[46px] font-black -tracking-wide text-[#222831] md:text-[4rem] md:leading-[72px]">
            Talk with our team
          </h1>
          <p className="max-w-sm text-center text-lg leading-[28px] -tracking-wide text-gray-600 md:text-xl md:leading-[34px] px-4">
            Have questions? we&apos;re here to help you figure things out.
          </p>
        </div>
      </section>

      {/* 2. Contact Form Section */}
      <section className="bg-white px-1 py-5 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl rounded-lg bg-white p-8">
          {" "}
          {/* Removed shadow/border as per design */}
          <form className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-1 block pb-2 text-sm font-semibold text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter first name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-base placeholder-gray-400 focus:border-0 focus:border-[#7D73C3] focus:ring-[#7D73C3]"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-1 block pb-2 text-sm font-semibold text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter last name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-base placeholder-gray-400 focus:border-0 focus:border-[#7D73C3] focus:ring-[#7D73C3]"
                />
              </div>
            </div>

            {/* Company Field */}
            <div>
              <label
                htmlFor="company"
                className="mb-1 block pb-2 text-sm font-semibold text-gray-700"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter company name"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-base placeholder-gray-400 focus:border-0 focus:border-[#7D73C3] focus:ring-[#7D73C3]"
              />
            </div>

            {/* Role Field */}
            <div>
              <label
                htmlFor="role"
                className="mb-1 block pb-2 text-sm font-semibold text-gray-700"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                placeholder="Enter your role at the company"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-base placeholder-gray-400 focus:border-0 focus:border-[#7D73C3] focus:ring-[#7D73C3]"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="mb-1 block pb-2 text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-base placeholder-gray-400 focus:border-0 focus:border-[#7D73C3] focus:ring-[#7D73C3]"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="mb-1 block pb-2 text-sm font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Leave us a message..."
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-base placeholder-gray-400 focus:border-0 focus:border-[#7D73C3] focus:ring-[#7D73C3]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full rounded-lg bg-[#6a5acd] px-12 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#9747FF]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
