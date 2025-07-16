import Image from "next/image";


export default function MeetWorkersSection() {
  const agents = [
    { name: "Mylo", role: "Product Sale Worker", image: "/new-img/mylo.svg" },
    { name: "Ehiz", role: "Hiring Manager", image: "/new-img/ehiz.svg" },
    { name: "Neo", role: "Sales Service Worker", image: "/new-img/neo.svg" },
    { name: "Agora", role: "Event Manager", image: "/new-img/agora.svg" },
  ];

  return (
    <section className="bg-white px-4 py-4 text-[#0B0A0A] sm:px-6 lg:px-8">
      <div className="container mx-auto mb-12 text-center">
        <h2 className="mb-4 text-2xl lg:text-4xl font-medium">Meet our AI workforce</h2>
        <p className="mx-auto max-w-2xl px-8 text-lg text-gray-600 lg:px-28">
          Skilled, specialized, and always ready, these AI workers are built to
          work for you.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {agents.map((agent, index) => (
          <div key={index} className="group relative overflow-hidden">
            {/* Agent Image */}
            <Image
              src={agent.image}
              alt={agent.name}
              width={250}
              height={300}
              className="object-fit h-auto w-full rounded-t-xl object-center shadow-xl"
            />
            {/* Name and Role Overlay */}
            {/* <div className="absolute right-0 bottom-0 left-0 m-3 rounded-xl bg-gray-300 px-4 py-3 text-center text-[#0B0A0A] opacity-50">
              <h4 className="text-xl font-semibold">{agent.name}</h4>
               <hr style={{ border: 'none', height: '2px', backgroundColor: '#7D73C3', }} className="px-8"/>
              <p className="text-sm py-1">{agent.role}</p>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
