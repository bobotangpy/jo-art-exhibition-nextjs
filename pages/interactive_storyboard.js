import { useEffect, useState } from "react";
import Link from "next/link";
import StoryboardModal from "../components/StoryboardModal";
import Footer from "../components/Footer";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const avatarStyle = {
  width: "auto",
  height: "auto",
  padding: "45px 20px",
  fontSize: "90px",
  fontWeight: "bold",
  fontFamily: "Marko One",
  color: "#fafafa",
};

const constentStyle = {
  textAlign: "center",
  fontSize: "18px",
  fontWeight: "bold",
  paddingTop: "10px",
  paddingBottom: "10px",
  color: "#2d3757",
  cursor: "pointer",
};

const btnStyle = {
  color: "#2d3757",
  fontFamily: "Muli",
  padding: "3px 5px",
};

const Cards = ({ data, name }) => {
  const [openModal, setOpenModal] = useState(false);
  const [itemData, setItemData] = useState("");

  // useEffect(() => {
  //   if (itemData) console.log(itemData);
  // }, [itemData]);

  // const handleOpenModal = () => {
  //   setOpenModal(!openModal);
  // };

  const AvatarIcon = ({ name }) => {
    return name[0] === "C" ? (
      <Avatar
        variant="square"
        className="avatar"
        style={{ ...avatarStyle, backgroundColor: "#88cbdb" }}
      >
        {name[0]}
      </Avatar>
    ) : name[0] === "L" ? (
      <Avatar
        variant="square"
        className="avatar"
        style={{ ...avatarStyle, backgroundColor: "#eca499" }}
      >
        {name[0]}
      </Avatar>
    ) : (
      <Avatar
        variant="square"
        className="avatar"
        style={{ ...avatarStyle, backgroundColor: "#33699f" }}
      >
        {name[0]}
      </Avatar>
    );
  };

  return (
    <>
      <Card style={{ minWidth: "250px", maxWidth: "250px" }}>
        <AvatarIcon name={name} />
        {/* <Link href={`/interactive_stroyboard/${name.toLowerCase()}s`}> */}
        <Link
          href={{ pathname: "/familyNarrative", query: { family: `${name}` } }}
          as={`/familyNarrative/${name.toLowerCase()}s`}
        >
          <CardContent className="name" style={constentStyle}>
            <h3>The {name}'s</h3>
          </CardContent>
        </Link>

        {/* <CardActions style={{ justifyContent: "center", flexWrap: "wrap" }}>
          {data.map((item, index) => (
            <Button
              size="small"
              key={index}
              style={btnStyle}
              onClick={() => {
                handleOpenModal();
                setItemData(item);
              }}
            >
              {item.person}
            </Button>
          ))}
        </CardActions> */}
      </Card>

      {/* {itemData ? (
        <StoryboardModal
          openModal={openModal}
          handleOpenModal={handleOpenModal}
          data={itemData}
        />
      ) : (
        <></>
      )} */}
    </>
  );
};

export default function InterActiveStoryboard({ res, chans, lees, wongs }) {
  // const [data, setData] = useState(null);
  const [chansData, setChansData] = useState(chans);
  const [leesData, setLeesData] = useState(lees);
  const [wongsData, setWongsData] = useState(wongs);

  useEffect(() => {
    // getData();
  }, []);

  // useEffect(() => {
  //   if (data) {
  //     // console.log(data);

  //     for (let [key, val] of Object.entries(data)) {
  //       switch (key) {
  //         case "chans":
  //           setChansData(val);
  //           break;
  //         case "lees":
  //           setLeesData(val);
  //           break;
  //         case "wongs":
  //           setWongsData(val);
  //           break;
  //         default:
  //           break;
  //       }
  //     }
  //   }
  // }, [data]);

  // const getData = async () => {
  //   const getData = await fetch("/assets/_data/storyboardData.json");
  //   const res = await getData.json();

  //   if (res) setData(res);
  // };

  return (
    <>
      <div className="pageContent fadeIn">
        <header className="pageTitle">Interactive Storyboard</header>

        <div className="textContent">
          <p>
            While it is valuable to understand the public discourses and
            different individuals’ perceptions, family, as a social unit, is
            also an interesting place for us to zoom in. It is of particular
            significance since the 2019 protests have either fractured families
            on generational lines or strengthened the familial bonds.
          </p>

          <p>
            Three family stories are shared here. Let’s learn how each member of
            the families interprets the interplays among the concepts of home,
            identity, citizenship, social responsibility, and education.
          </p>

          <div className="flexRow">
            {chansData && leesData && wongsData ? (
              <>
                <Cards data={chansData} name={"Chan"} />
                <Cards data={leesData} name={"Lee"} />
                <Cards data={wongsData} name={"Wong"} />
              </>
            ) : (
              <></>
            )}
          </div>
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
      res,
      chans,
      lees,
      wongs,
    },
  };
};
