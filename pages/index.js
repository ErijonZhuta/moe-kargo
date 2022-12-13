import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/future/image";
import Link from "next/link";
import { Card2 } from "../components/Card2";
import logo from "../public/logo.svg";
import { Card } from "../components/Card";
import { MainLayout } from "../layouts/MainLayout";

function Home() {
  return (
    <div>
      <div className="flex md:flex-col sm:flex-col lg:flex-row flex-col justify-around lg:items-center md:items-start sm:items:start container mt-4 bg-gray-200 rounded-md">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center  lg:text-left">
          <div className="px-4 sm:px-8  ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">
                Заштеди на достава со групирање на твоите нарачки.
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-blue-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Една достава, едно карго.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                >
                  Нова Пратка
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-blue-500 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Следни Пратка
                </a>
              </div>
            </div>
            <div className="flex lg:flex-row lg:items-center md:items-start text-gray-400 my-5">
              <svg
                className="svgColor mr-2"
                width="15px"
                height="15px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
              <p className="">Дознај Повеќе.</p>
            </div>
          </div>
        </div>
        <div className="flex sm:items-start place-content-center h-96 w-full sm:h-96 md:h-96 ">
          <Image
            src="/pic2.png"
            alt="text"
            width="200"
            height="200"
            className=" h-[400px] w-[500px] sm:h-[350px] border-solid border-2 rounded-md"
          />
        </div>
      </div>
      <div>
        <h2 className="container text-center font-semibold text-blue-500 pt-12 text-6xl">
          Нашите Услуги
        </h2>
        <div className="container grid lg:grid-cols-4 gap-16 py-16 px-16">
          <Card text="Транспаренти цени" image={logo} height={50} width={50} />
          <Card
            text="Индивидуално и заедницко групирање"
            image={logo}
            height={50}
            width={50}
          />
          <Card text="Cлeдeњe на достава" image={logo} height={50} width={50} />
          <Card
            text="Зачувај ги омилените продавници"
            image={logo}
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="bg-gray-100 container rounded-lg ">
        <h2 className="text-center font-semibold text-blue-500 pt-12 text-6xl pb-20">
          Како?
        </h2>
        <div className="justify-items-center grid lg:grid-cols-4 md:grid-cols-2 px-24 text-center md:mt-4 lg:justify-around pb-16">
          <Card2 link={"/Register"} text="Креирај Профил" image={logo} />
          <Card2 text="Внеси инфо од твоите нарачки" image={logo} />
          <Card2 text="Избери датум на група дoставa" image={logo} />
          <Card2 text="Cледи ја доставата" image={logo} />
        </div>
      </div>
      <div className="container py-5 px-20">
        <h2 className="text-center font-semibold text-blue-500 pt-12 text-5xl pb-20">
          Едноставен Ценовник
        </h2>
        <div className="container flex flex-row justify-around  bg-blue-200 rounded-md py-16">
          <div className="price 1 text-center">
            <h1 className="font-semibold text-blue-500">1 Нарачка</h1>
            <div className="flex flex-row">
              <h1 className="font-semibold text-blue-500 text-6xl">100</h1>
              <h1 className=" flex flex-col-reverse font-bold text-blue-500">
                МКД
              </h1>
            </div>
            <h1 className="font-semibold text-blue-500 pt-2">За Скопје</h1>
            <div>
              <h1 className="font-semibold text-blue-500 pt-4 pb-4">
                +20мкд за друг зград
              </h1>
            </div>
          </div>
          <div className="price 2 border-r-2 border-l-2 px-32 border-blue-600 text-center">
            <h1 className="font-semibold text-blue-500">2 Нарачка</h1>
            <div className="flex flex-row">
              <h1 className="font-semibold text-blue-500 text-6xl">+60</h1>
              <h1 className=" flex flex-col-reverse font-bold text-blue-500">
                МКД
              </h1>
            </div>
            <h1 className="font-semibold text-blue-500 pt-2">
              Зa сите градови
            </h1>
          </div>
          <div className="price 3 text-center">
            <h1 className="font-semibold text-blue-500">3+ Нарачка</h1>
            <div className="flex flex-row">
              <h1 className="font-semibold text-blue-500 text-6xl">+60</h1>
              <h1 className=" flex flex-col-reverse font-bold text-blue-500">
                МКД
              </h1>
            </div>
            <h1 className="font-semibold text-blue-500 pt-2">
              Зa сите градови
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
