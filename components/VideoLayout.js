import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import styles from "../styles/VideoLayout.module.scss";

// const cardStyle = {
//   marginBottom: "15px",
//   backgroundColor: "#fafafa",
//   padding: "15px 30px",
//   borderRadius: "0",
//   // border: "#797979 1px solid",
//   border: "none",
//   fontFamily: "Marko One",
//   fontWeight: "normal",
// };

export default function VideoLayout({ data, color }) {
  return (
    data &&
    data.map((item, index) => (
      <Card className={styles.videoCard} key={index}>
        <CardContent className={styles.cardContent}>
          <CardMedia
            className="videoCardMedia"
            component="iframe"
            src={item.src}
            height="330"
          />
          <div className={styles.desc}
            style={
              item.transcription
                ? {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "500px",
                  }
                : { display: "block" }
            }
          >
            <h3 style={{ paddingLeft: "40px", color: color }}>{item.title}</h3>

            {item.transcription ? (
              <a href={`http://docs.google.com/gview?url=${item.transcription}`} target="_blank">
                <button className={styles.transcriptBtn}>
                  See Transcription
                </button>
              </a>
            ) : (
              <></>
            )}
          </div>
        </CardContent>
      </Card>
    ))
  );
}
