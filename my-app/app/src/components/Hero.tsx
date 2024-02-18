export default function Hero() {
  return (
    <div
      id="Hero"
      className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-[url('/hero-bg.png')] bg-no-repeat bg-cover bg-center px-8"
    >
      <a className="absolute top-10 right-10 ml-6 font-bold text-[1rem] sm:hidden bg-[#7DBF29] rounded-md py-1 px-3 z-[51]">+1 xxx xxx xxx</a>
      <h3 className="text-xl md:text-3xl text-[#7DBF29]">LOREM IPSUM DOLOR SIT AMET</h3>
      <h1 className="text-2xl md:text-5xl mt-3 w-[60%] font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
      <button className="bg-[#7DBF29] hover:transition-all  hover:-translate-y-1 text-[.7.5rem] px-4 p-2 rounded-md font-medium mt-16">
        BOOK AN APPOINTMENT
      </button>
    </div>
  );
}
