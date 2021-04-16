import * as React from "react";
import Footer from "../components/Footer";
// import styles from "../style/artwork.module.scss";

export default function Artwork() {
  return (
    <>
      <div className="pageContent fadeIn">
        <header className="pageTitle">Artwork</header>

        <div className="textContent">
          <p>
            Under such an unstable socio-political environment, how do citizens
            reflect on their conceptions of home, identity, citizenship, and
            social responsibility? For students, based on their learning and
            lived experiences, how do they interact with the ideas of home,
            identity, citizenship, and social responsibility?
          </p>

          <p>
            Four artists with various levels of teaching engagements are invited
            to share their artworks and reflect on the theme. From daily life
            encounters to general social issues, to recent protests, one would
            engage with the different facets of the conceptions of home,
            identity, citizenship, and social responsibility “Through Adult’s
            Lens”.
          </p>

          <p>
            By reviewing student artworks and portfolios submitted for
            competitions and graduation over the years, one might realize how
            the dynamics between students’ learning and lived experiences would
            be manifested “Through Children’s Lens”.
          </p>

          <div className="btnsDiv">
            <a href="/artwork/through_adults_lens">
              <button className="option">Through Adult's Lens</button>
            </a>

            <a href="/artwork/through_childrens_lens">
              <button className="option">Through Children's Lens</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
