import DashLayout from "../layouts/DashLayout";
import Card from "../components/Card";
import ShopsCard from "../components/ShopsCard";
import circle from "../public/plus_circle.svg";
import logo from "../public/logo.svg";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

const shopsApi = [
  {
    text: "Посети Продавница",
    image: logo,
    height: 50,
    width: 50,
  },
  {
    text: "Посети Продавница",
    image: logo,
    height: 50,
    width: 50,
  },
  {
    text: "Посети Продавница",
    image: logo,
    height: 50,
    width: 50,
  },
  {
    text: "Посети Продавница",
    image: logo,
    height: 50,
    width: 50,
  },
  {
    text: "Посети Продавница",
    image: logo,
    height: 50,
    width: 50,
  },
];

function Shops() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const [shops, setShops] = useState(shopsApi);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // ekzekutohet sa here qe orders ndryshon
    console.log(shops);
  }, [shops]);

  const onClickHandler = () => {
    setIsOpen((oldModal) => !oldModal);
  };

  function addItem() {
    // Ktu vondoe logjiken a artikullit te ri
    // shti produkt te ri
    {
      shops.push({ text: text, image: image });
    }
    setIsOpen(false);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <DashLayout>
      <main className="flex-1 bg-gradient-to-l to-gray-100 from-purple-100 min-h-screen">
        <div className="py-6">
          <div className=" max-w-7xl px-4 sm:px-6 md:px-8">
            {/* <h1 className="text-2xl font-semibold text-gray-900">Shops</h1> */}
          </div>
          {/* <div className="flex flex-row justify-between mx-auto max-w-7xl px-16 sm:px-6 md:px-8"> */}
          {/* Permbajtja e faqes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 md:px-8">
            <ShopsCard
              text="Додај Нова Продавница"
              image={circle}
              height={50}
              width={50}
              onClickHandler={onClickHandler}
            />
            {shopsApi.map(({ text, image, height, width }, index) => (
              <ShopsCard
                key={index}
                text={text}
                image={image}
                height={height}
                width={width}
              />
            ))}
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                        <div className="flex flex-col mt-4">
                          {/* <input
                            type="text"
                            id="text"
                            onChange={(e) => setText(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                            placeholder="текст"
                            name="текст"
                            required
                          />
                          <input
                            type="text"
                            id="address"
                            onChange={(e) => setAddress(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                            placeholder="адреса"
                            name="адреса"
                            required
                          />
                          <input
                            type="text"
                            id="цена"
                            onChange={(e) => setPrice(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                            placeholder="цена"
                            name="цена"
                            required
                          /> */}
                        </div>
                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={addItem}
                          >
                            Нова достава
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
          {/* </div> */}
        </div>
      </main>
    </DashLayout>
  );
}

export default Shops;
