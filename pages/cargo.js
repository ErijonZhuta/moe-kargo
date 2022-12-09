import Link from "next/link";
import DashLayout from "../layouts/DashLayout";
import qrcode from "../public/qrcode.svg";
import Image from "next/future/image";

function Cargo() {
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
                <div>
                  <Image
                    className=""
                    src={qrcode}
                    alt=""
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
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
        <div>Tabela</div>
      </main>
    </DashLayout>
  );
}

export default Cargo;
