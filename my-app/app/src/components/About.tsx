"use client";

import GetAQuote from "./Get-A-Quote";
import { useState } from "react";

export default function About() {
  const [motto1, setMotto] = useState("Our Mission");

  const mottos = [
    { name: "Our Mission" },
    { name: "Our Vision" },
    { name: "Our Value" },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[80vh] relative px-8 lg:px-32 text-[#535353]">
      <div className="w-full lg:w-[65%] lg:pr-12 py-16">
        <div className="w-full">
          <h1 className="text-3xl font-semibold text-[#3f3f3f] w-[80%] mb-7">
            We help more than 45 years installing your roof
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
            magna laoreet, facilisis turpis vitae, tempor ligula. Aenean id sem
            non libero facilisis sagittis eget ac arcu. Donec porttitor, libero
            nec pulvinar porta, nisi urna faucibus quam, vel semper metus sapien
            et leo. Aliquam eleifend massa id aliquet tincidunt. Aenean cursus
            rhoncus nibh, quis elementum velit lacinia a.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 mt-16">
          {mottos.map((motto: any, index) => (
            <button
              className={`tranition-all duration-300 ${motto.name === motto1 ? "bg-[#7DBF29] text-white" : "bg-white text-black"} p-4 w-full md:w-1/3 rounded-md font-medium`}
              key={index}
              onClick={() => {
                setMotto(motto.name);
              }}
            >
              {motto.name}
            </button>
          ))}
        </div>
        <div className="bg-white p-4 rounded-md w-full mt-2 min-h-28 text-[.8rem]">
          {motto1 === "Our Mission" ? (
            <span>
              Duis non vulputate ipsum. Curabitur vestibulum fermentum
              consectetur. Quisque turpis magna, semper in elit vitae, mattis
              pulvinar lectus. Duis sit amet sodales erat.
            </span>
          ) : motto1 === "Our Vision" ? (
            <span>
              Quisque turpis magna, semper in elit vitae, mattis pulvinar
              lectus. Duis sit amet sodales erat. Duis non vulputate ipsum.
              Curabitur vestibulum fermentum consectetur.
            </span>
          ) : (
            <span>
              Curabitur vestibulum fermentum. Duis non vulputate ipsum
              consectetur. Quisque turpis magna, semper in elit vitae, mattis
              pulvinar lectus. Duis sit amet sodales erat.
            </span>
          )}
        </div>
      </div>
      <GetAQuote />
    </div>
  );
}
