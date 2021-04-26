import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const indentStyle = {
  marginLeft: "10%",
};

export default function Reference({ data }) {
  const [dataset, setDataSet] = useState(null);

  useEffect(() => {
    setDataSet(Object.values(JSON.parse(data)));
  }, []);

  return (
    <>
      <div className="pageContent fadeIn">
        <header className="pageTitle">Reference</header>

        <div className="textContent">
          {dataset &&
            dataset.map((line, index) => (
              <p key={index}>
                {line.map((part) =>
                  part.includes(">>") ? (
                    <span key={part} style={{ fontStyle: "italic" }}>
                      {part.split(">>")[1]}
                    </span>
                  ) : part.includes("^^") ? (
                    <>
                      <br />
                      <span key={part} style={indentStyle}>
                        {part.split("^^")[1]}
                      </span>
                    </>
                  ) : part.includes("^^") && part.includes(">>") ? (
                    <>
                      <br />
                      <span key={part} style={indentStyle}>
                        <i>{part.split(">>")[1]}</i>
                      </span>
                    </>
                  ) : (
                    <span>{part}</span>
                  )
                )}
              </p>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const url =
    "https://raw.githubusercontent.com/bobotangpy/home/master/docs/webData/jo/_data/reference.json";
  // const url = "http://localhost:3000/assets/_data/reference.json";
  const getData = await fetch(url);
  const data = await getData.text();

  return {
    props: {
      data,
    },
  };
}
