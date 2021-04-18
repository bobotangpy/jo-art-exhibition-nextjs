import Footer from "../../components/Footer";

export default function Family({ name }) {
  return (
    <>
      <div className="pageContent fadeIn">
        <header className="pageTitle">{name}</header>

        <div className="textContent"></div>
      </div>
      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  const getData = await fetch(
    "https://raw.githubusercontent.com/bobotangpy/home/master/docs/webData/jo/_data/storyboardData.json"
  );
  const res = await getData.json();

  const paths = Object.keys(res).map((fam) => {
    return {
      params: { name: fam },
    };
  });

  return { paths };
};

export const getStaticProps = async ({ params }) => {
  const getData = await fetch(
    "https://raw.githubusercontent.com/bobotangpy/home/master/docs/webData/jo/_data/storyboardData.json"
  );
  const res = await getData.json();
  let chans, lees, wongs;

  for (let [key, val] of Object.entries(res)) {
    switch (key) {
      case "chans":
        chans = val;
        break;
      case "lees":
        lees = val;
        break;
      case "wongs":
        wongs = val;
        break;
      default:
        break;
    }
  }

  return {
    props: {
      chans,
      lees,
      wongs,
    },
  };
};
