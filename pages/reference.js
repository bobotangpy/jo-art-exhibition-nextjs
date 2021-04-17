// import { useEffect } from "react";
import Footer from "../components/Footer";

export default function Reference({ data }) {
//   useEffect(() => {
//     console.log(data);
//   }, []);

  return (
    <>
      <div className="pageContent fadeIn">
        <header className="pageTitle">Reference</header>

        <div className="textContent">
          {data.split("##").map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const url = "http://localhost:3000/assets/_data/Reference.txt";
  const getData = await fetch(url);
  const data = await getData.text();

  return {
    props: {
      data,
    },
  };
}
