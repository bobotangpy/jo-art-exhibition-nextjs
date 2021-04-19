import Footer from "../components/Footer";

const indentStyle = {
  marginLeft: "10%",
};

export default function Reference({ data }) {
  return (
    <>
      <div className="pageContent fadeIn">
        <header className="pageTitle">Reference</header>

        <div className="textContent">
          {data &&
            data.split("##").map((line) => (
              <p key={line}>
                {line.split("^^").map((span, index) => (
                  <>
                    <span
                      key={span}
                      style={index !== 0 ? indentStyle : { margin: "0" }}
                    >
                      {span}
                    </span>
                    <br />
                  </>
                ))}
              </p>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // const url = "https://raw.githubusercontent.com/bobotangpy/home/master/docs/webData/jo/_data/Reference.txt";
  const url = "http://localhost:3000/assets/_data/Reference.txt";
  const getData = await fetch(url);
  const data = await getData.text();

  return {
    props: {
      data,
    },
  };
}
