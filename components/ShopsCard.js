import Image from "next/future/image";

function ShopsCard({ image, text, width, height, onClickHandler }) {
  // const onClickHandler = () => {
  //   console.log("adsf");
  // };
  return (
    <div className="flex flex-col items-center bg-white border-solid space-y-4 pt-12 pb-1 rounded-3xl shadow-md">
      <Image
        onClick={onClickHandler}
        src={image}
        alt="text"
        width={width}
        height={height}
        style={{ cursor: "pointer" }}
      />
      <p className="text-center text-2xl py-8">{text}</p>
    </div>
  );
}

export default ShopsCard;
