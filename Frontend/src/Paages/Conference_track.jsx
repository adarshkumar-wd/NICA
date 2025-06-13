import React from "react";
import ConferenceCards from "../Components/ConferenceCards";
import NavBar from "../Components/NavBar";
import RegisterButton from "../Components/RegisterButton";

function Conference_track() {
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
    {
      title: "Track 7: AI ESSENTIAL FOR MANAGEMENT",
      items: [
        "The role of AI in liquidity and market efficiency",
        "Role of AI in designing and delivering Choice Architecture to Consumers",
        "AI driven personalization & customer experience",
        "Digital marketing & influencer economy in the AI age",
        "AI and Automation: Opportunities and Challenges for Employment",
        "Social Entrepreneurship and Digital solutions for global challenges",
        "Startups in the age of disruption",
      ],
    },
    {
      title: "Track 8: AI IN HEALTHCARE AND HOSPITAL MANAGEMENT",
      items: [
        "AI-driven diagnostics and predictive analytics",
        "AI-assisted precision medicine and personalized treatment",
        "AI in robotic-assisted surgeries and automation",
        "AI-powered innovations in drug discovery and development",
        "Ethical challenges in AI-driven healthcare",
        "Regulatory frameworks for AI in hospital management",
        "AI and bias: Ensuring fairness in healthcare AI",
        "AI-driven ICU monitoring and alerts",
      ],
    },
    {
      title:
        "Track 9: Innovative Approaches to Teaching and Learning in Engineering Education with AI and ML Integration",
      items: [
        "AI-Driven Teaching and Learning Styles in Engineering",
        "Blended, Online, and AI-Augmented Laboratory Learning",
        "Curriculum Development in Engineering with Emerging Technologies",
        "Assessment Strategies Enhanced by AI and Learning Analytics",
        "Lifelong and Self-Directed Learning in the Era of AI",
        "Faculty Development in AI-Powered Pedagogical Techniques",
      ],
    },
    {
      title:
        "Track 10: Ethical, Inclusive, and Global Practices in Engineering Education in the Age of AI",
      items: [
        "Ethics and Responsible Use of AI in Engineering Pedagogy",
        "Inclusion and Equity in AI-Integrated Engineering Education",
        "Sustainability and AI for Sustainable Engineering Solutions",
        "Globalization and the International Reach of AI in Engineering Education",
        "Professional Practice and Industry-Linked AI Applications in Pedagogy",
        "Quality Assurance in AI-Enhanced Engineering Education",
      ],
    },
  ];

  return ( 
    <>
      <NavBar />
      <div className="text-center mt-10 mb-6">
        <h1 className="text-3xl font-bold text-blue-800">Conference Tracks</h1>
        <p className="text-gray-600 text-sm mt-2 max-w-xl mx-auto">
          Explore our diverse conference tracks covering cutting-edge topics in
          technology, AI, healthcare, and more.
        </p>
      </div>

      <RegisterButton />

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {arr.map((el, i) => (
          <ConferenceCards i={i} el={el} />
        ))}
      </div>
    </>
  );
}

export default Conference_track;
