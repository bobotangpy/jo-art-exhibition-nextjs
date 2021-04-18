import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import StoryboardModal from "../components/StoryboardModal";
import Footer from "../components/Footer";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const Content = ({ data, family }) => {
  const [openModal, setOpenModal] = useState(false);
  const [itemData, setItemData] = useState(null);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <p>{data[0].narrative}</p>

      {/* {data.map((item) =>
        item.hasOwnProperty("narrative") ? (
          <p>{item.narrative}</p>
        ) : (
          <></>
        )
      )} */}
      <div className={`btnsDiv ${family}`}>
        {data.map((item, index) =>
          item.hasOwnProperty("person") ? (
            <button
              className="option"
              key={index}
              onClick={() => {
                handleOpenModal;
                setItemData(item);
              }}
            >
              {item.person.charAt(0).toUpperCase()}
              {item.person.slice(1)}
            </button>
          ) : (
            <></>
          )
        )}
      </div>

      {itemData ? (
        <StoryboardModal
          openModal={openModal}
          handleOpenModal={handleOpenModal}
          data={itemData}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default function FamilyNarrative({ chans, lees, wongs }) {
  const router = useRouter();
  const [family, setFamily] = useState(null);
  const [color, setColor] = useState(null);

  useEffect(() => {
    setFamily(router.query.family);
  }, []);

  return (
    <>
      <div className="pageContent fadeIn">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Link color="inherit" href="/interactive_storyboard">
            Interactive Storyboard
          </Link>
          <p>The {family}'s</p>
        </Breadcrumbs>
        <header className={`pageTitle ${family}`}>The {family}'s</header>

        <div className="textContent">
          {family === "Chan" ? (
            <Content data={chans} family={family} />
          ) : family === "Lee" ? (
            <Content data={lees} family={family} />
          ) : family === "Wong" ? (
            <Content data={wongs} family={family} />
          ) : (
            <></>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
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
