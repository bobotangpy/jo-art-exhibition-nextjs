import Footer from "../components/Footer";
import styles from '../styles/PublicDiscourse.module.scss'

export default function PublicDiscourse() {
  return (
    <>
      <div className="pageContent fadeIn">
        <header className="pageTitle">Public Discourse</header>

        <div className="textContent">
          <p>“We are different from the mainland Chinese.”</p>

          <p>
            When one asks a Hong Konger regarding the perception of Hong
            Kong(ers) and the mainland(ers), this line will probably appear
            sooner or later in the conversation. Where does this collective
            understanding come from? What exactly are the differences that have
            been referred to?
          </p>

          <p>
            Let’s attempt to explore these questions by examining the public
            discourses on education and Hong Kong v.mainland China from
            different perspectives through the following videos.
          </p>

          {/* <div className="btnsDiv"> */}
          <div className={styles.discourseBtns}>
            <a href="/public_discourse/on_education">
              {/* <button className="option">On Education</button> */}
              <button className={styles.edu}>On Education</button>
            </a>

            <a href="/public_discourse/on_hkandchina">
              {/* <button className="option">On Hong Kong And China</button> */}
              <button className={styles.hkchina}>On Hong Kong And China</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
