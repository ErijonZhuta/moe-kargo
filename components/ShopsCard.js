import Image from "next/image";

export const ShopsCard = ({
  image,
  text,
  id,
  width,
  height,
  onClickHandler,
  handleDelete,
  handleEdit,
  noButton,
  noDelete,
}) => {
  return (
    <div
      className="flex flex-col items-center bg-white border-solid space-y-4 p-4 rounded-3xl shadow-md cursor-pointer hover:drop-shadow-xl"
      onClick={onClickHandler}
    >
      {!noDelete ? (
        <span
          onClick={handleDelete}
          className="self-end text-lg text-red-500 cursor-pointer hover:text-red-700"
        >
          X
        </span>
      ) : (
        <></>
      )}
      <Image src={image} alt="text" width={50} height={50} />
      <p className="text-center text-2xl py-8">
        {text}
        {id}
      </p>
      {!noButton ? (
        <div className="flex">
          <button
            onClick={handleEdit}
            className="edit bg-blue-600 rounded-md text-white p-2"
          >
            Измени
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
