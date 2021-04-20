import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import VideoLayout from "../../components/VideoLayout";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

export default function OnHkAndChina({ data }) {
  const [pageData, setPageData] = useState("");

  useEffect(() => {
    // getData();
    if (data) setPageData(data);
  }, []);

  // const getData = async () => {
  //   const url = "https://raw.githubusercontent.com/bobotangpy/wbb-fanpage/master/jo/_data/videoData.json";
  //   const getData = await fetch(url);
  //   const res = await getData.json();
  //   let data;

  //   if (res) {
  //     for (const [key, val] of Object.entries(res)) {
  //       if (key === "hkchina") {
  //         setPageData(val);
  //       }
  //     }
  //   }
  // }

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
          <p>On Hong Kong and China</p>
        </Breadcrumbs>

        <header
          className="pageTitle"
          style={{ color: "#33699f", marginTop: "30px" }}
        >
          On Hong Kong and China
        </header>

        <div className="textContent" style={{ marginTop: "20px" }}>
          <VideoLayout data={pageData} color={"#33699f"} />
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
      if (key === "hkchina") {
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
