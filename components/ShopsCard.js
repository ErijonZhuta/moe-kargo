import Image from "next/future/image";

export const ShopsCard = ({ image, text, width, height, onClickHandler }) => {
  return (
    <div
      className="flex flex-col items-center bg-white border-solid space-y-4 pt-12 pb-1 rounded-3xl shadow-md cursor-pointer hover:drop-shadow-xl"
      onClick={onClickHandler}
    >
      <Image src={image} alt="text" width={width} height={height} />
      <p className="text-center text-2xl py-8">{text}</p>
    </div>
  );
};
