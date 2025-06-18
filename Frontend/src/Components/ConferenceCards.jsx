import React from "react";

function ConferenceCards(props) {
  

  return (
    <div
            key={props.i}
            className="bg-white shadow-md rounded-lg p-5 border border-[var(--orange)]
               hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
          >
            <h2 className="text-blue-800 font-bold text-lg mb-3">{props.el.title}</h2>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
              {props.el.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
  );
}

export default ConferenceCards;
