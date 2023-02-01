import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

export const ShopModal = ({
  id: itemId,
  image: itemImage,
  text: itemText,
  isOpen: isModalOpen,
  addItem,
  closeModal,
  show: Show,
  handleUpdate: handleUpdate,

}) => {
  const [id, setId] = useState(itemId);
  const [text, setText] = useState(itemText);
  const [image, setImage] = useState(itemImage);

  const [show, setShow] = useState(Show);
  const [isOpen, setIsOpen] = useState(isModalOpen);

  //   const [shops, setShops] = useState(shopsApi);
  useEffect(() => {
    setIsOpen(isModalOpen);
  }, [isModalOpen]);

  useEffect(() => {
    setImage(itemImage)
  }, [itemImage])

  useEffect(() => {
    setText(itemText)
  }, [itemText])

  const onClose = () => {
    setImage("");
    setText("");
    closeModal();
  };

  const handleAdd = () => {
    setImage("");
    setText("");
    if (!id) addItem({ image, text });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Нова достава
                </Dialog.Title>
                <div className="flex flex-col mt-4"></div>
                <div className="mt-4">
                  <input
                    type="url"
                    id="image"
                    src="image.png"
                    accept="image/png,image/jpg/image/jpeg"
                    onChange={(e) => setImage(e.target.value)}
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    name="имаге"
                    required
                    value={image}
                  />
                  <input
                    type="text"
                    id="text"
                    onChange={(e) => setText(e.target.value)}
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    placeholder="Shop.."
                    name="текст"
                    required
                    autoComplete="off"
                    value={text}
                  />
                  <div className="mt-4">
                  
                    <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleAdd}
                    disabled={!text.length && !image.length}
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed"
                      onClick={() => handleUpdate({text, image})}
                    >
                      Update
                    </button>
                  
                </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
