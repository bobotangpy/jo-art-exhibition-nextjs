import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Home.module.scss";

/* TODO:
- @media
- local & global response !!!
*/

const sliderSetting = {
  dots: true,
  fade: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  adaptiveHeight: false,
};

export default function Home() {
  return (
    <>
      <div
        style={{
          margin: "0px auto",
          width: "auto",
          height: "600px",
          overflow: "hidden",
        }}
      >
        <div className={styles.landing}>
          <header className={styles.title}>
            Visualizing the Civic Identity Struggle in Hong Kong: <br />
            An Art Exhibition
          </header>

          <Slider {...sliderSetting} className={styles.slider}>
            <div className={styles.carouselCard}>
              <div className={styles.overlay}>
                <img
                  // className={styles.image}
                  src="/assets/homepage/1.jpeg"
                  alt="1"
                  width="100%"
                  height="600px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={styles.carouselCard}>
              <div className={styles.overlay}>
                <img
                  // className={styles.image}
                  src="/assets/homepage/2.jpg"
                  alt="2"
                  width="100%"
                  height="600px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={styles.carouselCard}>
              <div className={styles.overlay}>
                <img
                  // className={styles.image}
                  src="/assets/homepage/3.jpg"
                  alt="3"
                  width="100%"
                  height="600px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={styles.carouselCard}>
              <div className={styles.overlay}>
                <img
                  // className={styles.image}
                  src="/assets/homepage/4.jpg"
                  alt="4"
                  width="100%"
                  height="600px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={styles.carouselCard}>
              <div className={styles.overlay}>
                <img
                  // className={styles.image}
                  src="/assets/homepage/5.jpg"
                  alt="5"
                  width="100%"
                  height="600px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={styles.carouselCard}>
              <div className={styles.overlay}>
                <img
                  // className={styles.image}
                  src="/assets/homepage/6.jpg"
                  alt="6"
                  width="100%"
                  height="600px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  );
}
