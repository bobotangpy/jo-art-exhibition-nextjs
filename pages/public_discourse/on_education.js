import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import VideoLayout from "../../components/VideoLayout";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

export default function OnEducation({ data }) {
  const [pageData, setPageData] = useState("");

  useEffect(() => {
    if (data) setPageData(data);
  }, []);

  return (
    <>
      <div className="pageContent fadeIn">
        <Breadcrumbs aria-label="breadcrumb" style={{ marginTop: "70px" }}>
          <Link color="inherit" href="/">
            Home
          </Link>
          <Link color="inherit" href="/public_discourse">
            Public Discourse
          </Link>
          <p>On Education</p>
        </Breadcrumbs>

        <header
          className="pageTitle"
          style={{ color: "#e07e71", marginTop: "30px" }}
        >
          On Education
        </header>

        <div className="textContent" style={{ marginTop: "20px" }}>
          <VideoLayout data={pageData} color={"#e07e71"} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const url =
    "https://raw.githubusercontent.com/bobotangpy/home/master/docs/webData/jo/_data/videoData.json";
  const getData = await fetch(url);
  const res = await getData.json();
  let data;

  if (res) {
    for (const [key, val] of Object.entries(res)) {
      if (key === "edu") {
        data = val;
      }
    }
  }

  return {
    props: {
      data,
    },
  };
}
