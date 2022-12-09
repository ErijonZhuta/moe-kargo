import React, { useState } from "react";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [tel, setTel] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    // console.log(e.target.value);
    if (id === "fullName") {
      setFullName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "tel") {
      setTel(value);
    }
    if (id === "pass") {
      setPass(value);
    }
  };

  return (
    <div className="py-20">
      <div className="grid py-24 grid-cols-2 bg-gradient-to-r from-violet-400 to-blue-600 container items-center justify-items-center">
        <div className="flex flex-col gap-4 p-24">
          <div className="text-white font-semibold text-4xl ">
            Можеш да креираш група со твоите пријатели и да ги намалите
            трошоците за достава.
          </div>
          <p className="text-white text-2xl">
            Бројот на групираната достава е <strong>лимитиран </strong>на
            максимално <strong>10 нарачки.</strong>
          </p>
        </div>
        <div
          className="flex flex-col p-24 gap-6 bg-blue-200 rounded-lg"
          onSubmit={handleInputChange}
        >
          <div className="text-white text-5xl font-semibold">
            Креирај Профил
          </div>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => handleInputChange(e)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Име и Презиме"
            name="name"
            required
          />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => handleInputChange(e)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Емаил"
            name="email"
            required
          />
          <input
            type="tel"
            id="tel"
            value={tel}
            onChange={(e) => handleInputChange(e)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Телефон"
            name="tel"
            required
          />
          <input
            type="password"
            id="pass"
            value={pass}
            onChange={(e) => handleInputChange(e)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Лозинка"
            name="password"
            required
          />
          <button
            type="submit"
            onSubmit={handleInputChange}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-md"
          >
            Најави се
          </button>
          <div className="flex justify-evenly">
            <a
              href="#"
              className="flex items-center justify-center w-full px-4 py-2 mt-2 space-x-3 text-md text-center bg-blue-500 text-white transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
              <span className="text-lg text-white dark:text-gray-200">
                Најава со Facebook
              </span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-full px-4 py-2 mt-2 space-x-3 text-md text-center bg-red-500 text-white transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
              <span className="text-lg text-white dark:text-gray-200">
                Најава со <br /> Google
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
