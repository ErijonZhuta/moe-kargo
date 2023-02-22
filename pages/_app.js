import { ProductProvider } from "../context/ProductContext";
import "../styles/globals.css";
import { UserProvider } from "./../context/UserContext";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <UserProvider>
      <ProductProvider>
        <Component {...pageProps} />
      </ProductProvider>
    </UserProvider>
  );
}

export default MyApp;
