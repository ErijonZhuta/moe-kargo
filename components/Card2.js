import Image from "next/future/image";

export const Card2 = ({ image, text, link }) => {
  return (
    <div className="flex flex-wrap gap-8 flex-col items-center justify-around">
      <div className="py-20 px-20 rounded-full bg-gray-200">
        <Image src={image} alt="text" width={80} height={80} />
      </div>
      <a
        href={link}
        className="text-2xl text-blue-500 md:pb-14 pb-14 lg:max-w-[60%] md:max-w-[70%] max-w-[80%] md:justify-center font-bold"
      >
        {text}
      </a>
    </div>
  );
};
