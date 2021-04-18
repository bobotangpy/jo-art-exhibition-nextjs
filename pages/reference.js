// import { useEffect } from "react";
// import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function Reference({data}) {
  // const [ref, setRef] = useState(null);

  // useEffect(() => {
    // console.log(data);
    // getData()
  // }, []);

  // const getData = async () => {
  //   const url = "https://visualizing-the-civic-identity-struggle-in-hk.vercel.app/assets/_data/Reference.txt";
  //   const getData = await fetch(url);
  //   const data = await getData.text();

  //   if (data) setRef(data);
  // }

  return (
    <>
      <div className="pageContent fadeIn">
        <header className="pageTitle">Reference</header>

        <div className="textContent">
          {data && data.split("##").map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const url = "https://raw.githubusercontent.com/bobotangpy/wbb-fanpage/master/jo/_data/Reference.txt";
  const getData = await fetch(url);
  const data = await getData.text();

  return {
    props: {
      data,
    },
  };
}
