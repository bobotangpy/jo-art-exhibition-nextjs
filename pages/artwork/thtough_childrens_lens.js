import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BrushIcon from "@material-ui/icons/Brush";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import MoreIcon from "@material-ui/icons/More";
import { Category } from "@material-ui/icons";
import styles from "../styles/ChildrensLens.module.scss";

const linkStyle = {
  padding: "10px 20px",
  color: "#33699f",
};

const Drawing = ({ items }) => {
  return (
    <Accordion className="childLensAccord">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <header style={{ color: "#2d3757" }}>
          <BrushIcon style={{ marginRight: "10px" }} />
          Drawing Competition
        </header>
      </AccordionSummary>
      <AccordionDetails style={{ flexDirection: "column" }}>
        {items.map((item, index) => (
          <a
            href={item.src}
            key={index}
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            {item.title}
          </a>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

const Photography = ({ items }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <header style={{ color: "#2d3757" }}>
          <CameraAltIcon style={{ marginRight: "10px" }} />
          Photography Competition
        </header>
      </AccordionSummary>
      <AccordionDetails style={{ flexDirection: "column" }}>
        {items.map((item, index) => (
          <a
            href={item.src}
            key={index}
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            {item.title}
          </a>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

const Creative = ({ items }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <header style={{ color: "#2d3757" }}>
          <img
            src="/assets/creativeMedia.png"
            alt="creative_icon"
            width={20}
            style={{ marginRight: "10px" }}
          />
          Creative Showcase
        </header>
      </AccordionSummary>
      <AccordionDetails style={{ flexDirection: "column" }}>
        {items.map((item, index) => (
          <a
            href={item.src}
            key={index}
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            {item.title}
          </a>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

const More = ({ items }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <header style={{ color: "#2d3757" }}>
          <MoreIcon style={{ marginRight: "10px" }} />
          More
        </header>
      </AccordionSummary>
      <AccordionDetails style={{ flexDirection: "column" }}>
        {items.map((item, index) => (
          <a
            href={item.src}
            key={index}
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            {item.title}
          </a>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default function ChildrensLens() {
  const [artworkData, setArtworkData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (artworkData) {
      let cat = Object.values(artworkData);

      cat.map((item, index) => {
        console.log(item);
      });
    }
  }, [artworkData]);

  const getData = async () => {
    const getData = await fetch("/assets/_data/childrensArtwork.json");
    const data = await getData.json();

    if (data) setArtworkData(data);
  };

  return (
    <>
      <div className="pageContent fadeIn">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Link color="inherit" href="/artwork">
            Artwork
          </Link>
          <p>Through Children's Lens</p>
        </Breadcrumbs>
        <header className="pageTitle">Through Children's Lens</header>

        <div className="textContent">
          {artworkData &&
            Object.values(artworkData).map((items, index) =>
              items[0].category === "drawing" ? (
                <Drawing items={items} />
              ) : items[0].category === "photography" ? (
                <Photography items={items} />
              ) : items[0].category === "creative" ? (
                <Creative items={items} />
              ) : items[0].category === "more" ? (
                <More items={items} />
              ) : (
                <></>
              )
            )}
        </div>
      </div>
      <Footer />
    </>
  );
}
