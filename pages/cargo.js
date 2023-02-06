import { DashLayout } from "../layouts/DashLayout";
import QRCode from "react-qr-code";
import axios from "axios";
import { useState, useEffect } from "react";
import api from "../lib/api";

function Cargo() {
  // const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // ti lexojm pe ne api
    getData();
  }, []);
  useEffect(() => {
    // ekzekutohet sa here qe orders ndryshon
    console.log({ orders });
  }, [orders]);
  const getData = () => {
    api.get("/products").then((res) => {
      console.log(res);
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
                  <h1 className="text-2xl font-bold">Тереза Лозановска</h1>
                  <div className="flex justify-between">
                    <p>Адреса:</p>
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
                <div class="w-50 h-50">
                  <QRCode value="hoyo.tech" />
                </div>
              </div>
            </div>
            <div className="flex flex-col py-4 ">
              <h3 className="text-blue-600 font-semibold pb-2">Продавници: </h3>
              <p>Cacatua-Urban Look</p>
              <li className="pb-3">Битола</li>
              <p>MyModa.mk</p>
              <li>Скопје</li>
            </div>
          </div>
          <div className="col-span-4">
            <button className="bg-white rounded-2xl text-xl font-bold text-blue-600 p-10 shadow-lg">
              Следи достава
            </button>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </main>
    </DashLayout>
  );
}

export default Cargo;
