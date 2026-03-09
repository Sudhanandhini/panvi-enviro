import client1 from "../assets/clients/1.jpg";
import client2 from "../assets/clients/2.jpg";
import client3 from "../assets/clients/3.jpg";
import client4 from "../assets/clients/4.jpg";
import client5 from "../assets/clients/5.jpg";
import client6 from "../assets/clients/6.jpg";
import client7 from "../assets/clients/7.jpg";
import client8 from "../assets/clients/8.jpg";
import client9 from "../assets/clients/9.jpg";
import client10 from "../assets/clients/10.jpg";

const clients = [
  { img: client1, alt: "AMRUT" },
  { img: client2, alt: "HiKAL" },
  { img: client3, alt: "MEEPL" },
  { img: client4, alt: "Robust" },
  { img: client5, alt: "Jristi Innovations" },
  { img: client6, alt: "SOLARA" },
  { img: client7, alt: "AT-IA" },
  { img: client8, alt: "Chaitra Group" },
  { img: client9, alt: "PAI AND PAI CHEMICALS" },
  { img: client10, alt: "RECYCLER INDIA" },
];

export default function Clients() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2
          className="text-primary text-2xl font-bold mb-8"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          Our Clients
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {clients.map((client, i) => (
            <div
              key={i}
              className=" p-6 flex items-center justify-center hover:shadow-md hover:border-primary transition-all duration-200  bg-white"
            >
              <img
                src={client.img}
                alt={client.alt}
                className=" object-contain transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}