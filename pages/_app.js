import "../styles/globals.scss";
import SimpleReactLightbox from "simple-react-lightbox";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Navbar />
      <Component {...pageProps} />
    </SimpleReactLightbox>
  );
}

export default MyApp;
