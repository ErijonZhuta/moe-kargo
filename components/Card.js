import Image from "next/future/image";

export const Card = ({ image, text, width, height }) => {
  return (
    <div className="flex flex-col items-center border-solid border-4 space-y-6 pt-8 pb-2 rounded-3xl lg:shadow-2xl md:shadow-lg shadow-md lg:shadow-blue-400 md:shadow-blue-400 shadow-blue-400 ">
      <Image src={image} alt="text" width={width} height={height} />
      <p className="text-center text-2xl">{text}</p>
    </div>
  );
};
