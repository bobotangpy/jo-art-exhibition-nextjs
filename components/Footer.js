import Divider from "@material-ui/core/Divider";
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Divider light />
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <h3 style={{ paddingLeft: "10px" }}>Site Links</h3>
          <label>
            <a href="/">Home</a>
          </label>
          <label>
            <a href="/background">Background</a>
          </label>
          <label>
            <a href="/public_discourse">Public Discourse</a>
          </label>
        </div>
        <div className={styles.column}>
          <p style={{ paddingTop: "30px" }}></p>
          <label>
            <a href="/artworks">Artworks</a>
          </label>
          <label>
            <a href="/local_global_responses">Local and Global Responses</a>
          </label>
          <label>
            <a href="/family_case_studies">3 Family Case Studies</a>
          </label>
        </div>
        <div className={styles.column}>
          <p style={{ paddingTop: "25px" }}></p>
          <label>
            <a href="/comment">Comment</a>
          </label>
          <label>
            <a href="/reference">Reference</a>
          </label>
        </div>
      </div>
    </div>
  );
}
