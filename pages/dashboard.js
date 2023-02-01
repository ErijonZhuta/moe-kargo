import { Item } from "../components/dashboard/Item";
import { DashLayout } from "../layouts/DashLayout";
import { ShopsCard } from "../components/ShopsCard";
import circle from "../public/plus_circle.svg";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { ProductModal } from "../components/dashboard/ProductModal";
import api from "../lib/api";
import axios from "axios";

function Dashboard() {
  const [text, setText] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");

  const [orders, setOrders] = useState([]);
  const [updatedOrders, setUpdatedOrders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // ti lexojm pe ne api
    getData();
  }, []);

  const getData = () => {
    api.get("/products").then((res) => {
      console.log(res);
      setOrders(res.data);
    });
  };

  useEffect(() => {
    // ekzekutohet sa here qe orders ndryshon
    console.log({ orders });
  }, [orders]);

  useEffect(() => {
    setOrders(updatedOrders);
  }, [updatedOrders]);

  const handleEdit = (idd) => {
    setShow(true);
    openModal();

    const order = orders.find((order) => order.id === idd);

    setText(order.name);
    setAddress(order.description);
    setPrice(order.price);
    setId(order.id);
  };
  const handleUpdate = (order) => {
    const token = localStorage.getItem("token");
    api
      .put(
        `/addProduct${id}`,
        {
          name: order.text,
          description: order.address,
          price: order.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        getData();
        closeModal();
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    // Ktu vondoe logjiken a artikullit te ri
    // console.log({ token: localStorage.getItem("token") });
    const token = localStorage.getItem("token");
    console.log("TOKEN: ", token);
    api
      .delete(`/deleteProduct${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOrders(orders.filter((order) => order.id != id));
      })
      .catch((error) => console.error(error));
  };

  const onClickHandler = () => {
    setShow(false);
    setIsOpen((oldModal) => !oldModal);
  };

  const addItem = (newItem) => {
    const token = localStorage.getItem("token");
    api
      .post(
        "/addProduct",
        {
          name: newItem.text,
          description: newItem.address,
          price: newItem.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        orders.push({
          id: orders.at(-1) ? orders.at(-1).id + 1 : 1,
          name: newItem.text,
          description: newItem.address,
          price: newItem.price,
        });
        closeModal();
      })
      .catch((error) => console.error(error));
  };

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
            {orders.map(({ id, name, price, description }, index) => (
              <Item
                key={`${id}${index}`}
                text={name}
                address={description}
                price={price}
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
