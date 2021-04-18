import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import StoryboardModal from "../components/StoryboardModal";
import Footer from "../components/Footer";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const Content = ({ data }) => {
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
      <div className="btnsDiv">
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
        <header className="pageTitle">The {family}'s</header>

        <div className="textContent">
          {family === "Chan" ? (
            <Content data={chans} />
          ) : family === "Lee" ? (
            <Content data={lees} />
          ) : family === "Wong" ? (
            <Content data={wongs} />
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
    "http://localhost:3000/assets/_data/storyboardData.json"
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
