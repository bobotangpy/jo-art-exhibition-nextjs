// import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const cardStyle = {
  marginBottom: "15px",
  backgroundColor: "#fafafa",
  padding: "15px 30px",
  borderRadius: "0",
  // border: "#797979 1px solid",
  border: "none",
  fontFamily: "Marko One",
  fontWeight: "normal",
};

export default function VideoLayout({ data, color }) {

  return (
    data &&
    data.map((item, index) => (
      <Card className="videoCard" key={index} style={cardStyle}>
        <CardContent style={{ display: "flex", flexDirection: "row" }}>
          <CardMedia className="videoCardMedia" component="iframe" src={item.src} height="330" />
          <div
            style={
              item.transcription
                ? {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "500px"
                  }
                : { display: "block" }
            }
          >
            <h3 style={{ paddingLeft: "40px", color: color }}>{item.title}</h3>

            {item.transcription ? (
              <a href={`http://docs.google.com/gview?url=${item.transcription}`} target="_blank">
                <button className="transcriptBtn">
                  See Transciption
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
