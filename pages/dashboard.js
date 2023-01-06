import { Item } from "../components/dashboard/Item";
import { DashLayout } from "../layouts/DashLayout";
import { ShopsCard } from "../components/ShopsCard";
import circle from "../public/plus_circle.svg";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

import { ProductModal } from "../components/dashboard/ProductModal";

// kjo do veje pi API
const ordersApi = [
  { id: 1, text: "Cacatua-Urban Look", price: "900 ден.", address: "Битола" },
  { id: 2, text: "MyModa.mk", price: "400 ден.", address: "Скопје" },
];

function Dashboard() {
  const [text, setText] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");

  const [orders, setOrders] = useState(ordersApi);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // ekzekutohet sa here qe orders ndryshon
    console.log({ orders });
  }, [orders]);

  const handleEdit = (idd) => {
    setShow(true);
    openModal();

    const order = orders.find((order) => order.id === idd);
    // const { id, text, address, price } = order;
    setText(order.text);
    setAddress(order.address);
    setPrice(order.price);
    setId(order.id);

    // setShow(true);
    // setOrders(orders[id]);
  };
  const handleUpdate = (order) => {
    console.log(id);
    // setShow(true);
    // const order = orders.((order) => order.id === id);
    const updatedOrders = orders.map((ord) => {
      if (ord.id === order.id) {
        return order;
      }

      return ord;
    });

    setOrders(updatedOrders);

    closeModal();
  };

  const handleDelete = (id) => {
    // Ktu vondoe logjiken a artikullit te ri
    // shti produkt te ri
    setOrders(orders.filter((order) => order.id != id));
    // setIsOpen(true);
  };

  const onClickHandler = () => {
    setShow(false);
    setIsOpen((oldModal) => !oldModal);
  };

  function addItem(newItem) {
    orders.push({
      id: orders.at(-1).id + 1,
      text: newItem.text,
      price: newItem.price,
      address: newItem.address,
    });
    closeModal();
  }

  const closeModal = () => {
    setIsOpen(false);
    setText("");
    setAddress("");
    setPrice("");
    setId("");
  };

  const openModal = () => {
    setIsOpen(true);
  };

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
            <ShopsCard
              text="Внеси нарачка "
              image={circle}
              height={50}
              width={50}
              onClickHandler={onClickHandler}
              noButton={true}
              noDelete={true}
            />
            {orders.map(({ id, text, price, address }, index) => (
              <Item
                key={`${id}${index}`}
                text={text}
                price={price}
                address={address}
                handleEdit={() => handleEdit(id)}
                handleDelete={() => handleDelete(id)}
              />
            ))}
            {isOpen && (
              <ProductModal
                id={id}
                text={text}
                address={address}
                price={price}
                isOpen={isOpen}
                closeModal={closeModal}
                handleUpdate={handleUpdate}
                addItem={addItem}
                show={show}
              />
            )}
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
