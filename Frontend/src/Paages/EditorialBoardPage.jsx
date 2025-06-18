import React from "react";
import NavBar from "../Components/NavBar";
import Contect from "../Components/Contect";
import { RiRecordCircleFill } from "react-icons/ri";

function EditorialBoardPage() {
  const editorialCommittee = [
    {
      Name: "Prof. (Dr.) Anuj Kumar",
      College: "Rushford Business School, Switzerland",
    },
    {
      Name: "Prof. (Dr.) Fernando Ortiz- Rodriguez",
      College: "Universidad Autonoma de Tamaulipas, Mexico",
    },
    {
      Name: "Prof. (Dr.) Leo Paul Dana",
      College: "Ecole de management de la Sorbonne, France",
    },
    { Name: "Prof. (Dr.) A.K. Haghi", College: "University of Guilan, Iran" },
    {
      Name: "Prof. (Dr.) Alvaro Rocha",
      College: "ISEG Lisbon School of Economics and Management, Portugal",
    },
    { Name: "Dr. Miguel Sahagun", College: "High Point University, USA" },
    { Name: "Dr. Haipeng Liu", College: "Coventry University, United Kingdom" },
    {
      Name: "Prof. (Dr.) Deepali Bhatnagar",
      College: "Amity University Rajasthan, India",
    },
    {
      Name: "Dr. José Melchor Medina-Quintero",
      College: "Universidad Autonoma de Tamaulipas, Mexico",
    },
    {
      Name: "Dr. Norma Angélica Pedraza Melo",
      College: "Universidad Autonoma de Tamaulipas, Mexico",
    },
    { Name: "Dr. Rasheedul Haque", College: "Mahsa University, Malaysia" },
    {
      Name: "Prof. (Dr.) Tareq Hashem",
      College: "Applied Science Private University, Jordan",
    },
    {
      Name: "Dr. Sinisa Bogdan",
      College:
        "University of Rijeka, Faculty of Tourism and Hospitality Management",
    },
    {
      Name: "Assoc. Prof. (Dr.) Ahmad Albattat",
      College: "Asia Pacific University of Technology and Innovation, Malaysia",
    },
    {
      Name: "Prof. (Dr.) Marko Peric",
      College:
        "University of Rijeka, Faculty of Tourism and Hospitality Management",
    },
    {
      Name: "Dr. Arshi Naim",
      College:
        "European Union Global Institute of Innovation and Technology, Malta",
    },
    { Name: "Dr. Shad Ahmad Khan", College: "University of Buraimi, Oman" },
    {
      Name: "Dr. Shreyas J.",
      College: "Manipal Institute of Technology, Bengaluru, Karnataka",
    },
    {
      Name: "Prof. (Dr.) Purvi Pujari",
      College: "Vijay Patil School of Management, Navi Mumbai, India",
    },
    {
      Name: "Dr. Pushan Kumar Dutta",
      College: "Associate Professor, Amity University Kolkata, India",
    },
    {
      Name: "Prof. (Dr.) Zoran Mastilo",
      College: "University of East Sarajevo, Serb Republic",
    },
    {
      Name: "Prof. (Dr.) Anoop Pandey",
      College: "HNB Garhwal University, Uttarakhand, India",
    },
    {
      Name: "Prof. (Dr.) Murugesan Selvam",
      College: "Chief Editor, SMART Journal",
    },
    {
      Name: "Prof. (Dr.) Gagandeep Kaur Nagra",
      College: "Amity University, Mumbai",
    },
    {
      Name: "Dr. Sonal Trivedi",
      College: "VIT Bhopal University, Sehore, India",
    },
    {
      Name: "Md. Rahat Khan",
      College: "Bangladesh University of Professionals, Bangladesh",
    },
    { Name: "Dr. Wasswa Shafik", College: "Yazd University, Iran" },
    {
      Name: "Prof. (Dr.) Shamik Tiwari",
      College: "IILM University, Gurugram, India",
    },
    { Name: "Dr. Satinder Kumar", College: "Punjabi University, India" },
    { Name: "Dr. Devi Manikeswari", College: "School of Business, Bahrain" },
    { Name: "Dr. Sidar Atalay Simsek", College: "Batman University, Turkey" },
    {
      Name: "Dr. Rashi Taggar",
      College: "Shri Mata Vaishno Devi University, Jammu, India",
    },
    {
      Name: "Dr. Shirmila T.",
      College: "Madras Christian College, Chennai, India",
    },
    { Name: "Dr. Millo Yaja", College: "IIT Madras, Chennai" },
    {
      Name: "Dr. Birendra Kumar Saraswat",
      College: "Associate Professor, RKGIT, India",
    },
    {
      Name: "Dr. Venkata Naga Manjula. P",
      College: "Roots Degree College, Hyderabad, India",
    },
    {
      Name: "Dr. Gurpreet Kaur Chhabra",
      College: "MERI College, Delhi, India",
    },
    { Name: "Prof. (Dr.) Deepshika Kalra", College: "MERI, Delhi, India" },
    {
      Name: "Prof. (Dr.) Kamal Kant Sharma",
      College: "Chandigarh University, India",
    },
    {
      Name: "Prof. (Dr.) A. Ibemcha Chanu Chanu",
      College: "Bodoland University, Assam",
    },
    {
      Name: "Dr. Shaista Anwar",
      College: "Liwa College, United Arab Emirates",
    },
  ];

  return (
    <>
      <NavBar />

      <section className="py-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--blue)] mb-6">
          Editorial Committee
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto text-[var(--deepgray)]">
          {editorialCommittee.map((member, index) => (
            <div
              key={index}
              className="bg-[#d3b195] px-6 py-4 rounded-md flex items-center gap-4"
            >
              <RiRecordCircleFill className="text-black text-2xl flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-[var(--black)]">{member.Name}</h3>
                <p className="text-sm italic text-[var(--deepgray)]">{member.College}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Contect />
    </>
  );
}

export default EditorialBoardPage;
