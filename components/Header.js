import Image from "next/future/image";
import Link from "next/link";
function Header() {
  return (
    <div className="container flex flex-row lg:justify-between justify-between px-4 py-4 lg:items-center">
      <div className="cursor-pointer logo flex lg:space-x-5 items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="text"
            width="100"
            height="100"
            className="w-[50px] h-[50px]"
          />
        </Link>
        <Link href="/" className="">
          <div className="font-semibold -space-y-2 ">
            <p>Moe</p>
            <p>Kargo</p>
          </div>
        </Link>
      </div>
      <div className="flex lg:flex-row flex-col text-center lg:space-y-0 space-y-2 space-x-5">
        <div className="login">
          <Link href="/Login">
            <a className="font-semibold text-blue-500">Логирај се</a>
          </Link>
        </div>
        <div className="register">
          <Link href="/Register">
            <a className="font-semibold text-blue-500 border-solid border-2 border-blue-500 rounded-md px-4 py-1">
              Регистрирај се
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
