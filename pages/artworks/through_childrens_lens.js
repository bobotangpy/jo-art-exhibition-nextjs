import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import BrushIcon from "@mui/icons-material/Brush";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MoreIcon from "@mui/icons-material/More";
import { Category } from "@mui/icons-material";
import styles from "../../styles/ChildrensLens.module.scss";

const linkStyle = {
  color: "#33699f",
};

const activeStyle = {
  // color: "#2d3757",
  color: "#33699f",
};

const inactiveStyle = {
  // color: "#2d3757b5",
  color: "#33699fb5",
};

const Linksss = ({ items }) => {
  return items.map((item, index) => (
    <div className="links" key={index} style={{ paddingBottom: "20px" }}>
      <a href={item.src} target="_blank" rel="noreferrer" style={linkStyle}>
        {item.title}
      </a>
    </div>
  ));
};

export default function ChildrensLens({ data }) {
  const [activeCat, setActiveCat] = useState(null);
  const [links, setLinks] = useState(null);

  useEffect(() => {
    setActiveCat("drawing");
  }, []);

  useEffect(() => {
    if (data)
      switch (activeCat) {
        case "drawing":
          Object.values(data).map((items) => {
            if (items[0].category === "drawing") setLinks(items);
          });
          break;
        case "photography":
          Object.values(data).map((items) => {
            if (items[0].category === "photography") setLinks(items);
          });
          break;
        case "creative":
          Object.values(data).map((items) => {
            if (items[0].category === "creative") setLinks(items);
          });
          break;
        case "more":
          Object.values(data).map((items) => {
            if (items[0].category === "more") setLinks(items);
          });
          break;
        default:
          break;
      }
  }, [activeCat]);

  return (
    <>
      <div className="pageContent fadeIn">
        <Breadcrumbs aria-label="breadcrumb" style={{ marginTop: "70px" }}>
          <Link color="inherit" href="/">
            Home
          </Link>
          <Link color="inherit" href="/artworks">
            Artworks
          </Link>
          <p>Through Children's Lens</p>
        </Breadcrumbs>
        <header
          className="pageTitle"
          style={{ color: "#33699f", marginTop: "30px" }}
        >
          Through Children's Lens
        </header>

        <div className="textContent">
          <div className={styles.categories}>
            <div className={styles.left}>
              <header
                onClick={() => setActiveCat("drawing")}
                style={activeCat === "drawing" ? activeStyle : inactiveStyle}
              >
                <BrushIcon
                  style={{ marginRight: "30px", marginBottom: "-3px" }}
                />
                Drawing Competition
              </header>
              <header
                onClick={() => setActiveCat("photography")}
                style={
                  activeCat === "photography" ? activeStyle : inactiveStyle
                }
              >
                <CameraAltIcon
                  style={{ marginRight: "30px", marginBottom: "-3px" }}
                />
                Photography Competition
              </header>
              <header
                onClick={() => setActiveCat("creative")}
                style={activeCat === "creative" ? activeStyle : inactiveStyle}
              >
                <Category
                  style={{ marginRight: "30px", marginBottom: "-3px" }}
                />
                Creative Showcase
              </header>
              <header
                onClick={() => setActiveCat("more")}
                style={activeCat === "more" ? activeStyle : inactiveStyle}
              >
                <MoreIcon
                  style={{ marginRight: "30px", marginBottom: "-3px" }}
                />
                More
              </header>
            </div>

            <div className={styles.right}>
              {data && links ? <Linksss items={links} /> : <></>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const getData = await fetch(
    "http://raw.githubusercontent.com/bobotangpy/home/master/docs/webData/jo/_data/childrensArtwork.json"
  );
  const data = await getData.json();

  return {
    props: { data },
  };
};
