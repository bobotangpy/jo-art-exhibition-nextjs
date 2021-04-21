import { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";
import styles from "../styles/LocalGlobalResponse.module.scss";

const TableData = ({ data, setWindow }) => {
  let arr = Object.values(data);
  let group = [];
  let imgWidth;

  if (window.innerWidth < 770 && window.innerWidth > 480) {
    imgWidth = 80;
    setWindow("tablet");
  } else if (window.innerWidth < 481) {
    imgWidth = 40;
    setWindow("mobile");
  } else {
    imgWidth = 120;
    setWindow("desktop");
  }

  for (let i = 0, end = arr.length / 2; i < end; ++i) {
    group.push(arr.slice(i * 2, (i + 1) * 2));
  }
  return (
    group &&
    group.map((item, index) => (
      <tr key={index}>
        {item.map((image, index) => (
          <td key={index}>
            <a href={`${image.link}`} target="_blank">
              <img
                src={`/assets/localGlobal/${image.category}/${image.name}.jpg`}
                alt={`${image.alt}`}
                title={`${image.alt}`}
                width={imgWidth}
                className={styles.image}
              />
            </a>
          </td>
        ))}
      </tr>
    ))
  );
};

export default function LocalGlobalResponses({
  data,
  identityData,
  artData,
  migrationData,
  educationData,
}) {
  const divRef = useRef(null);
  const [win, setWin] = useState("desktop");
  const [identity, setiDentity] = useState(null);
  const [art, setArt] = useState(null);
  const [migration, setMigration] = useState(null);
  const [education, setEducation] = useState(null);
  const [images, setImages] = useState([]);
  const [hideDiv, setHideDiv] = useState(false);

  const checkMouse = (e) => {
    let tableW = 246;
    let identity = document.querySelectorAll("table.identity")[0].offsetLeft;
    let art = document.querySelectorAll("table.art")[0].offsetLeft;
    let migration = document.querySelectorAll("table.migration")[0].offsetLeft;
    let edu = document.querySelectorAll("table.education")[0].offsetLeft;

    let divTop = document.getElementsByClassName("content")[0].offsetTop;
    let divHeight = document.getElementsByClassName("content")[0].clientHeight;

    const withinDiv = e.clientY > divTop && e.clientY < divTop + divHeight;

    // console.log(identity, art, migration, edu);
    // console.log(document.querySelectorAll("div#overlay")[0].hidden);

    if (e.clientY < divTop && e.clientY > divTop + divHeight) {
      return document
        .querySelectorAll("table")
        .map((el) => (el.style.opacity = 100));
    }

    if (e.clientX > identity && e.clientX < identity + tableW && withinDiv) {
      document.querySelectorAll("table")[0].style.opacity = 100;
      document.querySelectorAll("table")[1].style.opacity = 0;
      document.querySelectorAll("table")[2].style.opacity = 0;
      document.querySelectorAll("table")[3].style.opacity = 0;
    } else if (e.clientX > art && e.clientX < art + tableW && withinDiv) {
      document.querySelectorAll("table")[0].style.opacity = 0;
      document.querySelectorAll("table")[1].style.opacity = 100;
      document.querySelectorAll("table")[2].style.opacity = 0;
      document.querySelectorAll("table")[3].style.opacity = 0;
    } else if (
      e.clientX > migration &&
      e.clientX < migration + tableW &&
      withinDiv
    ) {
      document.querySelectorAll("table")[0].style.opacity = 0;
      document.querySelectorAll("table")[1].style.opacity = 0;
      document.querySelectorAll("table")[2].style.opacity = 100;
      document.querySelectorAll("table")[3].style.opacity = 0;
    } else if (e.clientX > edu && e.clientX < edu + tableW && withinDiv) {
      document.querySelectorAll("table")[0].style.opacity = 0;
      document.querySelectorAll("table")[1].style.opacity = 0;
      document.querySelectorAll("table")[2].style.opacity = 0;
      document.querySelectorAll("table")[3].style.opacity = 100;
    } else {
      let arr = Array.from(document.querySelectorAll("table"));
      return arr.map((el) => (el.style.opacity = 100));
    }
  };

  const eventListner = (e) => {
    if (divRef) {
      checkMouse(e);
    }
  };

  useEffect(() => {
    // if (typeof window !== undefined && window.innerWidth) {
    //   if (window.innerWidth < 770 && window.innerWidth > 480) {
    //     setWindow("tablet");
    //   } else if (window.innerWidth < 481) {
    //     setWindow("mobile");
    //   } else setWindow(desktop);
    // }

    if (data) {
      setiDentity(identityData);
      setArt(artData);
      setMigration(migrationData);
      setEducation(educationData);
    }
  }, []);

  useEffect(() => {
    let widthMatch = window.matchMedia("(min-width: 770px)");
    if (divRef && widthMatch) {
      window.addEventListener("mousemove", (e) => eventListner(e));
      return () =>
        window.removeEventListener("mousemove", (e) => eventListner(e));
    }
  }, [eventListner]);

  useEffect(() => {
    // if (window.innerWidth < 770 && window.innerWidth > 480) {
    //   setWindow("tablet");
    // } else if (window.innerWidth < 481) {
    //   setWindow("mobile");
    // } else setWindow(desktop);

    if (identity && art && migration && education)
      setImages((images) => images.concat(identity, art, migration, education));
  }, [identity]);

  return (
    <>
      <div className="pageContent fadeIn">
        <header className="pageTitle">Local and Global Responses</header>

        <div className="textContent">
          <p>
            How have the local and global media been covering and interpreting
            issues on Hong Konger’s civil identity struggle?
          </p>
          <p>
            Around the concepts of home, identity, citizenship, and social
            responsibility, below is a compilation of news articles which allows
            one to discuss the struggle from the perspectives of
            identity/language (I), artistic expression (A), migration (M), and
            education (...).
          </p>
        </div>
      </div>

      <div
        className={`${styles.container} content`}
        onMouseEnter={() => setHideDiv(true)}
        onMouseLeave={() => setHideDiv(false)}
      >
        {win === "mobile" ? (
          <div
            className={hideDiv ? styles.hideDiv : styles.overlay}
            id="overlay"
          >
            &nbsp;i&nbsp;&nbsp;&nbsp;a&nbsp;m&nbsp;...
          </div>
        ) : win === "tablet" ? (
          <div
            className={hideDiv ? styles.hideDiv : styles.overlay}
            id="overlay"
          >
            &nbsp;i&nbsp;&nbsp;a&nbsp;m&nbsp;...
          </div>
        ) : (
          <div
            className={hideDiv ? styles.hideDiv : styles.overlay}
            id="overlay"
          >
            i&nbsp;am...
          </div>
        )}
        <div className={styles.images} ref={divRef}>
          {images.map((item, index) => (
            <table
              className={styles.table}
              key={index}
              className={Object.values(item)[0].category.substring(2)}
            >
              <tbody>
                <TableData data={item} setWindow={setWin} />
              </tbody>
            </table>
          ))}
        </div>
      </div>
      <Footer className="footer" />
    </>
  );
}

export async function getStaticProps() {
  const url =
    "https://raw.githubusercontent.com/bobotangpy/home/master/docs/webData/jo/_data/localGlobalImages.json";
  const getData = await fetch(url);
  const data = await getData.json();
  let identityData, artData, migrationData, educationData;

  for (let [key, val] of Object.entries(data)) {
    key === "identity"
      ? (identityData = val)
      : key === "art"
      ? (artData = val)
      : key === "migration"
      ? (migrationData = val)
      : key === "education"
      ? (educationData = val)
      : "";
  }

  return {
    props: {
      data,
      identityData,
      artData,
      migrationData,
      educationData,
    },
  };
}
