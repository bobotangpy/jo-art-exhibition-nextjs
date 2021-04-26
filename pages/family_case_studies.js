import Link from "next/link";
import Footer from "../components/Footer";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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

// const btnStyle = {
//   color: "#2d3757",
//   fontFamily: "Muli",
//   padding: "3px 5px",
// };

const Cards = ({ name }) => {
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
        <Link
          href={{
            pathname: "/family_narrative",
            query: { family: `${name}` },
          }}
          as={`/family_case_studies/${name.toLowerCase()}s`}
        >
          <CardContent className="name" style={constentStyle}>
            <h3>The {name}'s</h3>
          </CardContent>
        </Link>
      </Card>
    </>
  );
};

export default function FamilyCaseStudies({ chans, lees, wongs }) {
  return (
    <>
      <div className="pageContent fadeIn">
        <header className="pageTitle">3 Family Case Studies</header>

        <div className="textContent">
          <p>
            While it is valuable to understand the public discourses and
            different individuals’ perceptions, family, as a social unit, is
            also an interesting place for us to zoom in. It is of particular
            significance since the 2019 protests have either fractured families
            on generational lines or strengthened the familial bonds.
          </p>

          <p>
            Three family stories are shared here, each representing different
            family dynamics. You will read the narratives from the young adults
            in the families, then explore how each of the participating family
            members interprets the interplays among the concepts of home,
            identity, citizenship, social responsibility, and education.
          </p>

          <div className="flexRow">
            {chans && lees && wongs ? (
              <>
                <Cards data={chans} name={"Chan"} />
                <Cards data={lees} name={"Lee"} />
                <Cards data={wongs} name={"Wong"} />
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
    "https://raw.githubusercontent.com/bobotangpy/home/master/docs/webData/jo/_data/storyboardData.json"
  );
  // const getData = await fetch(
  //   "http://localhost:3000/assets/_data/storyboardData.json"
  // );
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
