import Item from "../components/Item";
import DashLayout from "../layouts/DashLayout";
import ShopsCard from "../components/ShopsCard";
import circle from "../public/plus_circle.svg";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

// kjo do veje pi API
const ordersApi = [
  { id: 1, text: "Cacatua-Urban Look", price: "900 ден.", address: "Битола" },
  { id: 2, text: "MyModa.mk", price: "400 ден.", address: "Скопје" },
];

function Dashboard() {
  const [text, setText] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");

  const [orders, setOrders] = useState(ordersApi);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // ekzekutohet sa here qe orders ndryshon
    console.log(orders);
  }, [orders]);

  const handleEdit = () => {
    setIsOpen((oldModal) => !oldModal);
    // Ktu vondoe logjiken a artikullit te ri
    // shti produkt te ri
    console.log();
  };

  const handleDelete = (id) => {
    // Ktu vondoe logjiken a artikullit te ri
    // shti produkt te ri
    setOrders(orders.filter((order) => order.id != id));
    // setIsOpen(true);
  };

  const onClickHandler = () => {
    setIsOpen((oldModal) => !oldModal);
  };

  function addItem() {
    // Ktu vondoe logjiken a artikullit te ri
    // shti produkt te ri
    {
      orders.push({ text: text, price: price, address: address });
    }
    setIsOpen(false);
    setText("");
    setAddress("");
    setPrice("");
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <DashLayout>
      <main className="bg-gradient-to-l to-gray-100 from-purple-100 min-h-screen">
        <div className="py-6">
          {/* <div className="mx-
          auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-full px-4 sm:px-6">
            {/* Permbajtja e faqes */}
            {orders.map(({ id, text, price, address }, index) => (
              <Item
                key={id}
                text={text}
                price={price}
                address={address}
                handleEdit={handleEdit}
                handleDelete={() => handleDelete(id)}
              />
            ))}
            <ShopsCard
              text="Внеси нарачка "
              image={circle}
              height={50}
              width={50}
              onClickHandler={onClickHandler}
            />
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
                        <div className="flex flex-col mt-4 space-y-3">
                          <input
                            type="text"
                            id="text"
                            onChange={(e) => setText(e.target.value)}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                            placeholder="Текст"
                            name="текст"
                            required
                            autoComplete="off"
                          />
                          <input
                            type="text"
                            id="address"
                            onChange={(e) => setAddress(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                            placeholder="Адреса"
                            name="адреса"
                            required
                            autoComplete="off"
                          />
                          <input
                            type="text"
                            id="Цена"
                            onChange={(e) => setPrice(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                            placeholder="Цена"
                            name="цена"
                            required
                            autoComplete="off"
                          />
                        </div>
                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed"
                            onClick={() =>
                              text && address && price ? addItem() : null
                            }
                            disabled={
                              !text.length && !address.length && !price.length
                            }
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
          <div className="m-6 float-right bg-blue-600 rounded-md text-white p-3 inline space-x-1">
            <button className="inline">Кон достава</button>
            <ArrowLongRightIcon className="h-5 w-5 inline" />
          </div>
        </div>
      </main>
    </DashLayout>
  );
}

export default Dashboard;
