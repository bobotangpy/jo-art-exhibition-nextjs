import { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Footer from "../../components/Footer";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import styles from "../../styles/AdultsLens.module.scss";

const options = {
  settings: {
    autoplaySpeed: 0,
    lightboxTransitionSpeed: 0.1,
  },
  caption: {
    captionFontSize: "18px",
  },
  buttons: {
    showThumbnailsButton: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
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
    ${details.description}
    `;
    // ${details.title}, ${details.year}, ${details.medium}
  };

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
          <p>Through Adult's Lens</p>
        </Breadcrumbs>
        <header
          className={`pageTitle ${styles.header}`}
          style={{ color: "#e07e71", marginTop:"30px" }}
        >
          Through Adult's Lens
        </header>

        <SRLWrapper setting={options}>
          {artworkData &&
            Object.values(artworkData).map((author, index) => (
              <div className={styles.wrapper} key={index}>
                {author.map((work, index) => (
                  <a href={work.src} key={index}>
                    {work.medium !== "video" ? (
                      <img
                        src={work.src}
                        alt={caption(work)}
                        width={280}
                        height={185}
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
                    <div style={{ textAlign: "left" }}>
                      <label>{`${work.author} `}</label>
                      <br />
                      <label>
                        <i>{`${work.title} `}</i>
                      </label>
                      <br />
                      <label>{`${work.year}`}</label>
                      <br />
                      <label>{`${work.medium}`}</label>
                    </div>
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
