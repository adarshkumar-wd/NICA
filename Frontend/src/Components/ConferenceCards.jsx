import React from "react";

function ConferenceCards() {
  const arr = [
    {
      title: "Track 1: AI, ML, AND DATA ANALYTICS",
      items: [
        "AI Algorithms",
        "Data Mining & Machine Learning Tools",
        "Big Data and Data Warehousing",
        "Hybrid Intelligence Systems Intelligent System Architectures",
        "Neural Networks",
        "Computer Visions and Applications",
      ],
    },
    {
      title: "Track 2: NETWORK/CYBER SECURITY",
      items: [
        "Cloud Computing",
        "Authentication, Privacy, and Security Models",
        "Intelligent Data Analysis for Security",
        "Intrusion, Anomaly, and Fraud Detection",
        "Security and Privacy of Mobile Computing",
        "Cryptosystems",
      ],
    },
    {
      title: "Track 3: EMBEDDED SYSTEM AND IOT",
      items: [
        "Security and Privacy for IOT",
        "IOT Applications and Services",
        "Electronics and Signal Processing for IOT",
        "Embedded Computing with Applications",
        "Positioning and Theming Technologies",
      ],
    },
    {
      title: "Track 4: INTELLIGENT SENSORS AND WIRELESS SENSOR NETWORKS",
      items: [
        "Security and Privacy in Sensor Networks",
        "Wireless Sensor Networks and Architectures",
        "Nanostructures and nanotechnology in biomedical electronics",
        "Next Generation Communication Technology",
      ],
    },
    {
      title: "Track 5: BIO-MEDICAL ENGINEERING",
      items: [
        "Bio components and Nano systems",
        "Digital Analysis of biomedical signals",
        "Imaging and visualization devices",
        "Biomedical equipment and Instrumentation",
      ],
    },
    {
      title: "Track 6: EMERGING AREAS IN MODERN COMPUTING",
      items: [
        "Web services & performance Connected Machines",
        "Quantum Computing",
        "4G/5G network",
        "Mobile ad-hoc network - Block Chain",
        "Evolutionary Computation",
        "Edge and Fog Computing",
      ],
    },
  ];

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {arr.map((el, i) => (
        <div
          key={i}
          className="bg-white shadow-md rounded-lg p-5 border border-gray-200 
               hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
        >
          <h2 className="text-blue-800 font-bold text-lg mb-3">{el.title}</h2>
          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
            {el.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ConferenceCards;
