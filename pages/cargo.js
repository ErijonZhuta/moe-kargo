import { DashLayout } from "../layouts/DashLayout";
import { useState, useEffect, useContext } from "react";
import api from "../lib/api";
import QRCode from "react-qr-code";
import { UserContext } from "../context/UserContext";

function Cargo() {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useContext(UserContext);
  useEffect(() => {
    // ti lexojm pe ne api
    getData();
  }, []);

  useEffect(() => {
    // ekzekutohet sa here qe orders ndryshon
    console.log({ orders });
  }, [orders]);

  useEffect(() => {
    // ekzekutohet sa here qe orders ndryshon
    console.log({ orders });
  }, [orders]);
  const getData = () => {
    api.get("/products").then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });
  };

  return (
    <DashLayout>
      <main className="flex-1 bg-gradient-to-l to-gray-100 from-purple-100 min-h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 py-20 items-center">
          <div className="grid grid-cols-3 col-span-8 gap-10 bg-white rounded-2xl">
            <div className="col-span-2 p-6">
              <div className="col-span-2 border-dashed border-2 p-3">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold">{user?.fullName}</h1>
                  <div className="flex justify-between">
                    <p>Адреса: {user?.address}</p>
                    <p>ул.Црвена Вода бр.6</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Град:</p>
                    <p>Скопје</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Тел:</p>
                    <p>078366708</p>
                  </div>
                </div>
                <div>
                  <QRCode className="w-[20%] h-[20%]" value="hoyo.tech" />
                </div>
              </div>
            </div>
            <div className="flex flex-col py-4 ">
              <h3 className="text-blue-600 font-semibold pb-2">Продавници:</h3>
              {orders &&
                orders.map((order, index) => (
                  <div key={index}>
                    <p>{order.name}</p>
                    <li>{order.description}</li>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-span-4">
            <button className="bg-white rounded-2xl text-xl font-bold text-blue-600 p-10 shadow-lg">
              Следи достава
            </button>
          </div>
        </div>
      </main>
    </DashLayout>
  );
}

export default Cargo;
