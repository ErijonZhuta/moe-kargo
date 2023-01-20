import { DashLayout } from "../layouts/DashLayout";
import { ShopsCard } from "../components/ShopsCard";
import circle from "../public/plus_circle.svg";
import logo from "../public/logo.svg";
import { Fragment, useState, useEffect } from "react";

import { ShopModal } from "../components/dashboard/ShopModal";

const shopsApi = [
  {
    id: 1,
    text: "Zara",
    image: logo,
    height: 50,
    width: 50,
  },
  {
    id: 2,
    text: "Pull&Bear",
    image: logo,
    height: 50,
    width: 50,
  },
  { id: 3, text: "Bershka", image: logo, height: 50, width: 50 },
  {
    id: 4,
    text: "Nike",
    image: logo,
    height: 50,
    width: 50,
  },
  {
    id: 5,
    text: "Adidas",
    image: logo,
    height: 50,
    width: 50,
  },
];

function Shops() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");

  const [shops, setShops] = useState(shopsApi);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // ekzekutohet sa here qe orders ndryshon
    console.log(shops);
  }, [shops]);

  const handleEdit = (id) => {
    setShow(true);
    setIsOpen(true);

    const shop = shops.find((shop) => shop.id === id);
    setImage(shop.image);
    setText(shop.text);
    setId(shop.id);

  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const onClickHandler = () => {
    setShow(false);
    setIsOpen(true);
    setText("");
    setImage("");
    setId("");
  };

  function addItem(newItem) {
    shops.push({
      id: shops.at(-1) ? shops.at(-1).id + 1 : 1,
      text: newItem.text,
      image: newItem.image,
    });
    closeModal();
  }

  const closeModal = () => {
    setIsOpen(false);
    setText("");
    setImage("");
    setId("");
  };

  const handleDelete = (id) => {
    setShops(shops.filter((shop) => shop.id != id));
  };

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
              // height={50}
              // width={50}
              onClickHandler={onClickHandler}
              noButton={true}
              noDelete={true}
            />
            {shops.map(({ text, image, id, height, width }, index) => (
              <ShopsCard
                key={`${id}${index}`}
                text={text}
                image={image}
                id={id}
                handleEdit={() => handleEdit(id)}
                handleDelete={() => handleDelete(id)}
                // height={height}
                // width={width}
              />
            ))}
            <ShopModal
              id={id}
              text={text}
              image={image}
              closeModal={closeModal}
              isOpen={isOpen}
              addItem={addItem}
              show={show}
            />
          </div>
          {/* </div> */}
        </div>
      </main>
    </DashLayout>
  );
}

export default Shops;
