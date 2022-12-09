function NewItems({ text, address, price, handleEdit, handleDelete }) {
  return (
    <div className="flex flex-col bg-white items-center border-solid border-1 space-y-6 pt-8 pb-4 rounded-3xl shadow-md ">
      <div className="flex-1 text-center py-4">
        {/* <div className="grid justify-end pb-2">
          <button className="text-md">X</button>
        </div> */}
        <h1 className="font-semibold text-2xl">{text}</h1>
        <h1 className="font-semibold text-2xl">{address}</h1>
        <h1 className="text-gray-400 text-xl">Цена:{price}</h1>
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleEdit}
          className="edit bg-blue-600 rounded-md text-white p-2"
        >
          Измени
        </button>
        <button
          onClick={handleDelete}
          className="edit bg-blue-600 rounded-md text-white p-2"
        >
          Избриши
        </button>
      </div>
    </div>
  );
}

export default NewItems;
