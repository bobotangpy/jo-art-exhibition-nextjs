import Footer from "../components/Footer";
import styles from "../styles/Comment.module.scss";
import Disqus from "disqus-react";

const disqusShortname = "visualizing-civic-identity-struggle-in-hk";
const disqusConfig = {
  url: "https://visualizing-the-civic-identity-struggle-in-hk.vercel.app/",
  identifier: "comment",
  title: "Comment Page",
};

export default function Comment() {
  return (
    <>
      <div className="pageContent fadeIn">
        <header className="pageTitle">Comment</header>

        <div className="textContent">
          Thank you so much for visiting
          <i>
            Visualizing the Civil Identity Struggle in Hong Kong: An Art
            Exhibition
          </i>
          . We hope you enjoyed it. Please feel free to leave any comments
          and/or questions regarding your experience below.
        </div>

        <div className={styles.commentSection}>
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
