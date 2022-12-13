import logo from "../public/logo.svg";
import Image from "next/future/image";
const navigation = {
  solutions: [
    { name: "Вработување", href: "#" },
    { name: "Вести и Прес", href: "#" },
    { name: "Реклама", href: "#" },
    { name: "Центар за Помош", href: "#" },
  ],
  support: [
    { name: "Контакт", href: "#" },
    { name: "Услови на Користење", href: "#" },
    { name: "Заштита на Купувачи", href: "#" },
    { name: "Приватност", href: "#" },
  ],
  downloads: [
    { name: "App Store", href: "#" },
    { name: "Google Play", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="flex container bg-gradient-to-t from-slate-300 to-white mx-auto py-18 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="logo flex flex-col justify-evenly lg:space-x-5 items-center ">
            <div className="flex items-center">
              <div>
                <Image
                  src="/logo.svg"
                  alt="text"
                  width="100"
                  height="100"
                  className="w-[50px] h-[50px]"
                />
              </div>
              <div className="font-semibold -space-y-2 ">
                <p>Moe</p>
                <p>Kargo</p>
              </div>
            </div>
            <div className="flex lg:flex-row lg:items-center md:items-start text-gray-400 my-5">
              <p className="text-base text-gray-500">Македонски</p>
              <svg
                className="svgColor ml-2"
                width="15px"
                height="15px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
            <div>
              <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
                &copy; Беда Експрес ДОО 2021
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-5 text-gray-900">
                  Мое Карго МК
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-2xl font-semibold mb-5">Правни</h3>
                <ul role="list" className="mt-4 space-y-4 text-black">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-center text-gray-900">
                Преземи Апп
              </h3>
              <div className="flex flex-col mt-4 space-y-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-4 py-2 mt-2 space-x-3 text-md text-center bg-black text-white transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-apple"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />{" "}
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                  </svg>
                  <span className="text-lg text-white dark:text-gray-200">
                    <h1>Download on the</h1>
                    <h1 className="text-2xl">App Store</h1>
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center w-full py-1 text-md text-center bg-red-500 text-white transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-red-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="60"
                    width="150"
                    className="pl-24"
                    id="svg60"
                    version="1.1"
                    viewBox="-4.12599 -7.65905 35.75858 45.9543"
                  >
                    <defs id="defs38">
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        y2="21.86"
                        x2="-5.9"
                        y1="1.87"
                        x1="14.09"
                        id="linear-gradient"
                      >
                        <stop id="stop4" stop-color="#008eff" offset="0" />
                        <stop id="stop6" stop-color="#008fff" offset=".01" />
                        <stop id="stop8" stop-color="#00acff" offset=".26" />
                        <stop id="stop10" stop-color="#00c0ff" offset=".51" />
                        <stop id="stop12" stop-color="#00cdff" offset=".76" />
                        <stop id="stop14" stop-color="#00d1ff" offset="1" />
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        y2="15.32"
                        x2="-2.37"
                        y1="15.32"
                        x1="26.45"
                        id="linear-gradient-2"
                      >
                        <stop id="stop17" stop-color="#ffd800" offset="0" />
                        <stop id="stop19" stop-color="#ff8a00" offset="1" />
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        y2="45.15"
                        x2="-9.41"
                        y1="18.05"
                        x1="17.69"
                        id="linear-gradient-3"
                      >
                        <stop id="stop22" stop-color="#ff3a44" offset="0" />
                        <stop id="stop24" stop-color="#b11162" offset="1" />
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        y2="3.81"
                        x2="8.92"
                        y1="-8.29"
                        x1="-3.19"
                        id="linear-gradient-4"
                      >
                        <stop id="stop27" stop-color="#328e71" offset="0" />
                        <stop id="stop29" stop-color="#2d9571" offset=".07" />
                        <stop id="stop31" stop-color="#15bd74" offset=".48" />
                        <stop id="stop33" stop-color="#06d575" offset=".8" />
                        <stop id="stop35" stop-color="#00de76" offset="1" />
                      </linearGradient>
                      <style id="style2 .cls-7{opacity: .07}"></style>
                    </defs>
                    <g transform="translate(.004)" id="g58">
                      <g id="g56">
                        <path
                          id="path40"
                          d="M.55.48A2.39 2.39 0 000 2.15v26.34a2.41 2.41 0 00.55 1.67l.09.09 14.75-14.76v-.35L.64.39z"
                          fill="url(#linear-gradient)"
                        />
                        <path
                          id="path42"
                          d="M20.31 20.41l-4.92-4.92v-.35l4.92-4.91.11.06 5.83 3.31c1.67.94 1.67 2.49 0 3.44l-5.83 3.31z"
                          fill="url(#linear-gradient-2)"
                        />
                        <path
                          id="path44"
                          d="M20.42 20.35l-5-5L.55 30.16a2 2 0 002.45.07l17.39-9.88"
                          fill="url(#linear-gradient-3)"
                        />
                        <path
                          id="path46"
                          d="M20.42 10.29L3 .4A1.93 1.93 0 00.55.48l14.84 14.84z"
                          fill="url(#linear-gradient-4)"
                        />
                        <path
                          id="path48"
                          d="M20.31 20.24L3 30.06a2 2 0 01-2.39 0l-.09.09.09.09a2 2 0 002.39 0l17.39-9.88z"
                          opacity=".1"
                        />
                        <path
                          id="path50"
                          d="M.55 30A2.43 2.43 0 010 28.32v.17a2.41 2.41 0 00.55 1.67l.09-.09z"
                          class="cls-7"
                        />
                        <path
                          id="path52"
                          d="M26.25 16.86l-5.94 3.38.11.11L26.25 17a2.11 2.11 0 001.25-1.72 2.21 2.21 0 01-1.25 1.58z"
                          class="cls-7"
                        />
                        <path
                          id="path54"
                          d="M3 .58l23.25 13.19a2.2 2.2 0 011.25 1.55 2.09 2.09 0 00-1.25-1.72L3 .4C1.36-.54 0 .24 0 2.15v.17C0 .42 1.36-.37 3 .58z"
                          fill="#fff"
                          opacity=".3"
                        />
                      </g>
                    </g>
                  </svg>
                  <span className="text-lg text-white dark:text-gray-200">
                    <h1>Get it on</h1>
                    <h1 className="text-2xl"> Google Play</h1>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
