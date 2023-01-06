export const Item = ({
  text,
  address,
  price,
  handleEdit,
  handleDelete,
  noButton,
}) => {
  return (
    <div className="flex flex-col bg-white items-center border-solid border-1 p-6 rounded-3xl shadow-md ">
      <span
        onClick={handleDelete}
        className="self-end text-lg text-red-500 cursor-pointer hover:text-red-700"
      >
        X
      </span>
      <div className="flex-1 text-center">
        <h1 className="font-semibold text-2xl">{text}</h1>
        <h1 className="font-semibold text-2xl">{address}</h1>
        <h1 className="text-gray-400 text-xl">Цена:{price}</h1>
      </div>
      {!noButton ? (
        <div className="flex pt-5">
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
