import { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Footer from "../../components/Footer";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import styles from "../../styles/AdultsLens.module.scss";
// import ReactFancyBox from "react-fancybox";
// import "react-fancybox/lib/fancybox.css";

const options = {
  settings: {
    autoplaySpeed: 0,
    lightboxTransitionSpeed: 0.1,
  },
  caption: {
    captionFontSize: "18px",
  },
  buttons: {},
  thumbnails: {},
  progressBar: {},
};

export default function AdultsLens() {
  const [artworkData, setArtworkData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const getData = await fetch("/assets/_data/adultsArtwork.json");
    const data = await getData.json();

    if (data) setArtworkData(data);
  };

  const caption = (details) => {
    //   FIXME: new paragraph
    return `
        ${details.title}, ${details.year}, ${details.medium} \n
        ${details.description}
        `;
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
          <p>Through Adult's Lens</p>
        </Breadcrumbs>
        <header className="pageTitle">Through Adult's Lens</header>

        {/* {artworkData &&
          Object.values(artworkData).map((author, index) =>
            author.map((work, index) => (
              <ReactFancyBox
                key={index}
                // thumbnail="https://loremflickr.com/320/240"
                image={work.src}
                defaultThumbnailWidth={360}
                defaultThumbnailHeight={240}
                caption={caption(work)}
              />
            ))
          )} */}

        <SRLWrapper setting={options}>
          {artworkData &&
            Object.values(artworkData).map((author, index) => (
              <div className={styles.wrapper} key={index}>
                {author.map((work, index) => (
                  <a href={work.src} key={index} >
                    {work.medium !== "video" ? (
                      <img
                        src={work.src}
                        alt={caption(work)}
                        width={260}
                        height={190}
                        objectfit="contain"
                        srl_gallery_image="true"
                      />
                    ) : (
                      <iframe
                        src={work.src}
                        frameBorder="0"
                        allowFullScreen
                        width={360}
                        height={240}
                        name={work.title}
                      ></iframe>
                    )}
                    <br />
                    <label>{`${work.title}, ${work.medium}`}</label>
                  </a>
                ))}

                <br />
              </div>
            ))}
        </SRLWrapper>
      </div>
      <Footer />
    </>
  );
}
