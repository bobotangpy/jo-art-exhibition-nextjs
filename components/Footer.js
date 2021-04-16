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
            <a href="/background_objective">Background</a>
          </label>
          <label>
            <a href="/public_discourse">Public Discourse</a>
          </label>
          <label>
            <a href="/artwork">Artwork</a>
          </label>
        </div>
        <div className={styles.column}>
          <p style={{ paddingTop: "30px" }}></p>
          <label>
            <a href="/local_global_response">Local and Global Response</a>
          </label>
          <label>
            <a href="/interactive_storyboard">Interactive Storyboard</a>
          </label>
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
