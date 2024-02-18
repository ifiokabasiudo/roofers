export default function ContactUs() {
  const services = [
    { name: "Skylights" },
    { name: "Waterproofing" },
    { name: "Industrial Roofing" },
    { name: "Residential Roofing" },
    { name: "Gutter Cleaning" },
    { name: "Commercial Roofing" },
  ];

  return (
    <div className="w-full min-h-[50vh] bg-[#1E3941] px-8 lg:px-32 py-16 text-center">
      <div className="flex justify-center lg:justify-between w-full gap-5 text-left flex-wrap lg:flex-nowrap">
        <div className="flex flex-col gap-5 w-full md:w-[40%] lg:w-1/4 py-5 lg:pr-5">
          <h1 className="flex items-end">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width={"25px"}
              height={"25px"}
            >
              <path
                d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5V480c0 17.7-14.3 32-32 32H120c-17.7 0-32-14.3-32-32V441.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3h19.5c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3h19.5c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6h19.5c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5V480c0 17.7-14.3 32-32 32H472c-17.7 0-32-14.3-32-32V441.5l-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5V400c0 17.7-14.3 32-32 32H296c-17.7 0-32-14.3-32-32V345.5l-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z"
                fill="#7DBF29"
              />
            </svg>
            <span className="ml-3 text-xl font-semibold">ROOFING</span>
          </h1>
          <p className="">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="flex flex-col w-full md:w-[40%] lg:w-1/4 p-5 gap-5">
          <h1 className="font-semibold text-xl">Services</h1>
          <ul>
            {services.map((service, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width={"20"}
                  height={"15"}
                >
                  <path
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    fill="#7DBF29"
                  />
                </svg>
                {service.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-full md:w-[40%] lg:w-1/4 p-5 gap-5">
          <h1 className="font-semibold text-xl">Business Hours</h1>
          <div>
            <h3 className="text-[#7DBF29]">OPENING DAYS:</h3>
            <ul className="pl-4">
              <li>Monday - Friday : 9am to 20 pm</li>
              <li>Saturday : 9am to 17 pm</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#7DBF29]">VACATIONS:</h3>
            <p className="pl-4">All Sunday Days All Official Holidays</p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[40%] lg:w-1/4 pl-5 py-5 gap-5">
          <h1 className="font-semibold text-xl">Contact Information</h1>
          <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center gap-4">
            <svg
            className=" self-start"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width={"20"}
              height={"20"}
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" fill="#FFFFFF"/>
            </svg>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>
          <div className="flex items-center gap-4 hover:text-[#7DBF29] hover:cursor-pointer">
            <svg
            
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={"20"}
              height={"12"}
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" fill="#FFFFFF"/>
            </svg>
            <p>+2 392 3929 210</p>
          </div>
          <div className="flex items-center gap-4 hover:text-[#7DBF29] hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"20"} height={"15"}><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" fill="#FFFFFF"/></svg>
            <p>info@yourdomain.com</p>
          </div>
        </div>
          </div>
      </div>

      <div className="pb-24 pt-16">
        <p>Copyright © 2024 All rights reserved | This template is made with Love by OakWeb</p>
      </div>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z" />
      </svg> */}
    </div>
  );
}
