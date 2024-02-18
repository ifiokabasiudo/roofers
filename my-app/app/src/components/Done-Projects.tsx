import Image from "next/image";
import Image1 from "../../../public/image1.jpg";
import Image2 from "../../../public/image2.jpg";
import Image3 from "../../../public/image3.jpg";
import Image4 from "../../../public/image4.jpg";
import Image5 from "../../../public/image5.jpg";
import Image6 from "../../../public/image6.jpg";
import Image7 from "../../../public/image7.jpg";
import Image8 from "../../../public/image8.jpg";

export default function DoneProjects() {
  const images1: any[] = [
    // {item: Image1},
    // {item: Image2},
    // {item: Image3},
    // {item: Image4},
    { item: "bg-1" },
    { item: "bg-2" },
    { item: "bg-3" },
    { item: "bg-4" },
    { item: "bg-5" },
    { item: "bg-6" },
    { item: "bg-7" },
    { item: "bg-8" },
  ];
  const images2: any[] = [
    { item: "bg-5" },
    { item: "bg-6" },
    { item: "bg-7" },
    { item: "bg-8" },
  ];

  return (
    <div className="w-full min-h-[90vh] flex flex-col text-center text-[#535353] py-16 transition-all bg-white">
      <div className="font-semibold text-[#7DBF29]">PROJECTS</div>
      <h1 className="text-3xl mb-16 text-black">Done Projects</h1>
      <div className="flex w-full overflow-hidden flex-wrap">
        {images1.map((image, index) => (
          <div
            key={index}
            className={`w-full sm:w-1/2 md:w-1/4 h-52 
            ${`bg-` + image.item}
            bg-cover bg-no-repeat bg-center`}
          ></div>
        ))}
      </div>
      {/* <div className="flex w-full overflow-hidden">
            {
                images2.map((image, index) => (
                    <div key={index} className="w-1/4 h-44">
                        <Image 
                            src={image.item}
                            alt={`image-` + index.toString} 
                            // height={500}
                            // width={1440}
                            objectFit="cover"
                        />
                    </div>
                ))
            }
        </div> */}
    </div>
  );
}
