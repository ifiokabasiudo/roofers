"use client";

import { useState } from "react";
import Image from "next/image";
import ManStanding from "../../../public/man-standing.png";

export default function OurServices() {
  const [heading, setHeading] = useState("Skylights");

  const items = [
    {
      item: "Skylights",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut magna laoreet, facilisis turpis vitae, tempor ligula. Aenean id sem non libero facilisis sagittis eget ac arcu. Donec porttitor, libero nec pulvinar porta, nisi urna faucibus quam, vel semper metus sapien et leo. Aliquam eleifend massa id aliquet tincidunt. ",
      lists: [
        { pos: "Nunc interdum velit ut magna fringilla" },
        { pos: "Sed vitae scelerisque lorem" },
        { pos: "Praesent ultrices nulla sed sagittis porttitor" },
        { pos: "Vestibulum blandit odio quis nulla laoreet" },
        { pos: "Curabitur ornare ante at mi interdum iaculis" },
      ],
    },
    {
      item: "Waterproofing",
      content:
        "Integer ut magna laoreet, facilisis turpis vitae, tempor ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sem non libero facilisis sagittis eget ac arcu. Donec porttitor, libero nec pulvinar porta, nisi urna faucibus quam, vel semper metus sapien et leo. Aliquam eleifend massa id aliquet tincidunt. ",
      lists: [
        { pos: "Vestibulum blandit odio quis nulla laoreet" },
        { pos: "Curabitur ornare ante at mi interdum iaculis" },
        { pos: "Nunc interdum velit ut magna fringilla" },
        { pos: "Sed vitae scelerisque lorem" },
      ],
    },
    {
      item: "Industrial Roofing",
      content:
        "Aliquam eleifend massa id aliquet tincidunt. Integer ut magna laoreet, facilisis turpis vitae, tempor ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sem non libero facilisis sagittis eget ac arcu. Donec porttitor, libero nec pulvinar porta, nisi urna faucibus quam, vel semper metus sapien et leo. ",
      lists: [
        { pos: "Nunc interdum velit ut magna fringilla" },
        { pos: "Vestibulum blandit odio quis nulla laoreet" },
        { pos: "Curabitur ornare ante at mi interdum iaculis" },
        { pos: "Integer ut magna laoreet, facilisis" },
        { pos: "Sed vitae scelerisque lorem" },
      ],
    },
    {
      item: "Residential Roofing",
      content:
        "Libero nec pulvinar porta, nisi urna faucibus quam, Integer ut magna laoreet, facilisis turpis vitae, tempor ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sem non libero facilisis sagittis eget ac arcu. Donec porttitor, libero nec pulvinar porta, nisi urna faucibus quam, vel semper metus sapien et leo. Aliquam eleifend massa id aliquet tincidunt. ",
      lists: [
        { pos: "Vestibulum blandit odio quis nulla laoreet" },
        { pos: "Curabitur ornare ante at mi interdum iaculis" },
        { pos: "Nunc interdum velit ut magna fringilla" },
        { pos: "Sed vitae scelerisque lorem" },
      ],
    },
    {
      item: "Gutter Cleaning",
      content:
        "Donec porttitor, libero nec pulvinar porta, nisi urna faucibus quam, vel semper metus sapien et leo. Integer ut magna laoreet, facilisis turpis vitae, tempor ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sem non libero facilisis sagittis eget ac arcu. Aliquam eleifend massa id aliquet tincidunt. ",
      lists: [
        { pos: "Nunc interdum velit ut magna fringilla" },
        { pos: "Sed vitae scelerisque lorem" },
        { pos: "Praesent ultrices nulla sed sagittis porttitor" },
        { pos: "Vestibulum blandit odio quis nulla laoreet" },
        { pos: "Curabitur ornare ante at mi interdum iaculis" },
      ],
    },
    {
      item: "Commercial Roofing",
      content:
        "Integer ut magna laoreet, facilisis turpis vitae, tempor ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sem non libero facilisis sagittis eget ac arcu. Donec porttitor, libero nec pulvinar porta, nisi urna faucibus quam, vel semper metus sapien et leo. Aliquam eleifend massa id aliquet tincidunt. ",
      lists: [
        { pos: "Vestibulum blandit odio quis nulla laoreet" },
        { pos: "Curabitur ornare ante at mi interdum iaculis" },
        { pos: "Nunc interdum velit ut magna fringilla" },
        { pos: "Sed vitae scelerisque lorem" },
      ],
    },
  ];

  const handleClick = (item: any) => {
    setHeading(item);
  };

  return (
    <div className="w-full min-h-[90vh] flex flex-col text-center text-[#535353] py-16 px-8 lg:px-32 transition-all bg-white">
      <h1 className="text-3xl">Our Best Services</h1>
      <div className="flex flex-col md:flex-row text-left font-medium mt-16 gap-10">
        <ul className="md:w-[25%] text-black">
          {items.map((item, index) => (
            <li
              onClick={() => handleClick(item.item)}
              key={index}
              className={`${index !== 0 ? `` : `border-t`} ${
                item.item === heading ? `` : `border-r`
              } border-b border-[#b8b7b7] p-7 hover:cursor-pointer`}
            >
              {item.item}
            </li>
          ))}
        </ul>
        <div className="flex flex-col md:w-[75%] lg:w-[50%]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 ease-in-out ${heading === item.item ? `opacity-1` : `opacity-0`}`}
            >
              {heading === item.item && (
                <div key={index}>
                  <h1 className="text-3xl text-black">{item.item}</h1>
                  <p className="mt-5">{item.content}</p>
                  <ul className="mt-5 text-center">
                    {item.lists?.map((list, index) => (
                      <li
                        key={index}
                        className="border border-[#b8b7b7] p-3 my-3"
                      >
                        {list.pos}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-[25%] hidden lg:block">
          <Image
            className="h-full w-[70%]"
            src={ManStanding}
            width={1440}
            alt="man standing, folded arms"
            // layout="fill" // or layout="fill" depending on your use case
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
