import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const cardStyle = {
  marginBottom: "15px",
  backgroundColor: "#fafafa",
  padding: "15px 30px",
  borderRadius: "0",
  border: "#797979 1px solid",
  fontFamily: "Prata",
  fontWeight: "normal",
};

// const btnStyle = {
//   backgroundColor: "#2d3757",
//   color: "#fafafa",
//   margin: "30px 15px",
//   padding: "20px 30px",
//   borderRadius: "4px",
//   border: "none",
//   fontWeight: "bold",
//   fontSize: "14px",
//   cursor: "pointer",
// };

export default function VideoLayout({ data }) {
  //   const [vidData, setVidData] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (data) {
      data.map((item) => {
        if (item.transcription && !Array.isArray(item.transcription)) {
          console.log(item.transcription);
          getTranscript(item.transcription);
        }
      });
    }
  }, []);

  //   TODO: open transcript in new window
  const handleBtnClick = () => {
    setOpenModal(true);
  };

  const getTranscript = async (src) => {
    console.log(src);
    fetch(src)
      .then((res) => res.text())
      .then((script) => console.log(script));

    // if (res) console.log(res);
  };

  return (
    data &&
    data.map((item, index) => (
      <Card key={index} style={cardStyle}>
        <CardContent style={{ display: "flex", flexDirection: "row" }}>
          <CardMedia component="iframe" src={item.src} height="330" />
          <div
            style={
              item.transcription
                ? {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }
                : { display: "block" }
            }
          >
            <h3 style={{ paddingLeft: "40px" }}>{item.title}</h3>
            {/* {item.title.split("\n").map((line) => (
              <h3 key={line} style={{ paddingLeft: "40px" }}>
                {item.title}
              </h3>
            ))} */}

            {item.transcription ? (
              <button className="transcriptBtn" onClick={handleBtnClick}>
                See Transciption
              </button>
            ) : (
              <></>
            )}
          </div>
        </CardContent>
      </Card>
    ))
  );
}
