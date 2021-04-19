import { useEffect, useState, useMemo } from "react";
import Footer from "../components/Footer";
import styles from "../styles/LocalGlobalResponse.module.scss";

const TableData = ({ data }) => {
  // console.log(data);
  let arr = Object.values(data);
  let group = [];

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
                width={120}
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
  const [identity, setiDentity] = useState(null);
  const [art, setArt] = useState(null);
  const [migration, setMigration] = useState(null);
  const [education, setEducation] = useState(null);
  const [images, setImages] = useState([]);
  const [hideDiv, setHideDiv] = useState(false);

  useEffect(() => {
    if (data) {
      setiDentity(identityData);
      setArt(artData);
      setMigration(migrationData);
      setEducation(educationData);
    }
  }, []);

  useEffect(() => {
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
        className={styles.container}
        onMouseEnter={() => setHideDiv(true)}
        onMouseLeave={() => setHideDiv(false)}
      >
        <div className={hideDiv ? styles.hideDiv : styles.overlay}>
          i&nbsp;&nbsp;&nbsp;a&nbsp;m...
        </div>
        <div className={styles.images}>
          {images.map((item, index) => (
            <table
              className={styles.table}
              key={index}
              className={Object.values(item)[0].category.substring(2)}
            >
              <tbody>
                <TableData data={item} />
              </tbody>
            </table>
          ))}
        </div>
      </div>
      <Footer />
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
