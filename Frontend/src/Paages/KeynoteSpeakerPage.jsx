import NavBar from "../Components/NavBar";
import Contect from "../Components/Contect";

function KeynoteSpeakerPage() {
  const keynoteSpeakers = [
    {
      Name: "Prof. (Dr.) Fernando Ortiz-Rodríguez",
      College: "Universidad Autonoma de Tamaulipas",
      Address: "Reynosa, Tamaulipas, Mexico",
    },
    {
      Name: "Prof. (Dr.) Daba Chowdhury",
      College: "Canterbury Christ Church University",
      Address: "United Kingdom",
    },
    {
      Name: "Dr. Rahaman Hasan",
      College: "Canterbury Christ Church University",
      Address: "Canterbury, United Kingdom",
    },
    {
      Name: "Prof. (Dr.) B. K Dass (Retired)",
      College: "University of Delhi",
      Address: "New Delhi, India",
    },
    {
      Name: "Dr. Miguel Sahagun",
      College: "High Point University",
      Address: "North Carolina, United States",
    },
    {
      Name: "Dr. Lanita Winata",
      College: "Griffith University",
      Address: "Greater Brisbane, Queensland, Australia",
    },
    {
      Name: "Dr. Pushan Kumar Dutta",
      College: "Amity University",
      Address: "Kolkata, West Bengal, India",
    },
    {
      Name: "Prof. (Dr.) Anuj Kumar",
      College: "Rushford Business School",
      Address: "Switzerland",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="w-[100vw] min-h-[100vh] flex items-center justify-center my-10">
        <section className="w-full h-full flex flex-wrap justify-center px-3  gap-[2rem]">
          {keynoteSpeakers.map((speakers, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[13rem] h-[16rem] bg-gray-400 rounded-lg"></div>
              <div className="w-[20rem] min-h-[6rem] bg-[var(--orange)] rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="font-bold text-[1.1rem]">{speakers.Name}</h2>
                  <p className="text-[1rem] tracking-tight">
                    {speakers.College}
                  </p>
                  <p className="text-[1rem] tracking-tight">
                    {speakers.Address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Contect />
    </>
  );
}

export default KeynoteSpeakerPage;
