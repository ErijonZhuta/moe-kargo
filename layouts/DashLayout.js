import { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  AdjustmentsHorizontalIcon,
  Bars3BottomLeftIcon,
  LockClosedIcon,
  PlayCircleIcon,
  PlusCircleIcon,
  TruckIcon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { getUser } from "../lib/user";
import { UserContext } from "../context/UserContext";

const nav1 = [
  {
    name: "Нова достава",
    href: "/dashboard",
    icon: PlusCircleIcon,
    current: true,
  },
  {
    name: "Зацувани продавници",
    href: "/shops",
    icon: ShoppingCartIcon,
    current: false,
  },
  { name: "Мое карго", href: "/cargo", icon: TruckIcon, current: false },
];

const nav2 = [
  {
    name: "Туторијал",
    href: "/tutorial",
    icon: PlayCircleIcon,
    current: false,
  },
  {
    name: "Пермисии",
    href: "/permissions",
    icon: LockClosedIcon,
    current: false,
  },
  {
    name: "Подесувања",
    href: "/settings",
    icon: AdjustmentsHorizontalIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const DashLayout = (props) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useContext(UserContext);
  // const { name } = user;

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUser();
        console.log(res.data);
        setUser(res.data);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        router.push("/login");
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="cursor-pointer logo flex lg:space-x-5 items-center">
                  <Image
                    src="/logo.svg"
                    alt="text"
                    width="100"
                    height="100"
                    className="w-12 h-12"
                  />
                  <div className="font-semibold -space-y-2 ">
                    <p>Moe</p>
                    <p>Kargo</p>
                  </div>
                </div>
                <div className="mt-5 h-0 flex-1 overflow-y-auto">
                  <nav className="flex-1 space-y-4 px-2 pb-4">
                    {nav1.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-red-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                          "cursor-pointer"
                        )}
                      >
                        <div className="flex items-center cursor-pointer">
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-3 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </div>
                      </Link>
                    ))}
                    <hr />
                    <p className="text-gray-600 text-sm font-medium py-4">
                      Информации
                    </p>
                    {nav2.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer"
                        )}
                      >
                        <div className="flex items-center cursor-pointer">
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-3 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-grow flex-col overflow-y-auto border-gray-200 bg-white pt-5">
          <div className="cursor-pointer logo flex lg:space-x-5 items-center">
            <Image
              src="/logo.svg"
              alt="text"
              width="100"
              height="100"
              className="w-12 h-12"
            />
            <div className="font-semibold -space-y-2 ">
              <p>Moe</p>
              <p>Kargo</p>
            </div>
          </div>
          <div className="mt-5 flex flex-grow flex-col">
            <nav className="flex-1 space-y-4 px-2 pb-4">
              {nav1.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                    "cursor-pointer"
                  )}
                >
                  <div className="flex items-center cursor-pointer">
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </div>
                </Link>
              ))}
              <hr />
              <p className="text-gray-600 text-sm font-medium py-4">
                Информации
              </p>
              {nav2.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer"
                  )}
                >
                  <div className="flex items-center cursor-pointer">
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col md:pl-64">
        <div className="flex items-center justify-between flex-shrink-0 bg-gradient-to-r from-purple-500 to-blue-400 shadow px-8 py-12">
          <div className="space-y-3 text-white">
            <p className="text-5xl"> Здраво {user?.fullName}</p>
            <p className="text-xl">Твои Зачувани Продавници</p>
          </div>
          <div className="flex flex-shrink justify-between px-4">
            <div className="flex">
              <form className="flex w-full md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-50">
                  <div className="pointer-events-none absolute inset-y-0 left-1 flex items-center">
                    <MagnifyingGlassIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search-field"
                    className="block bg-transparent w-full rounded-lg border-gray-50 py-2 pl-8 pr-3 text-gray-50 placeholder-gray-50 focus:border-white sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                    autoComplete="off"
                  />
                </div>
              </form>
              <button
                onClick={handleLogout}
                id="logout-btn"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-2"
              >
                Logout
              </button>
            </div>
          </div>
          <button
            type="button"
            className="px-4 text-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
};

const getServerSideProps = async (context) => {
  const cookies = context.req.headers.cookie;

  return {
    props: { cookies },
  };
};
