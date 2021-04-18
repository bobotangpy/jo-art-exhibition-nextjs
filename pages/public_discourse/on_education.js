import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import VideoLayout from "../../components/VideoLayout";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

export default function OnEducation({data}) {
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
  //       if (key === "edu") {
  //         setPageData(val);
  //       }
  //     }
  //   }
  // }

  return (
    <>
      <div className="pageContent fadeIn">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Link color="inherit" href="/public_discourse">
            Public Discourse
          </Link>
          <p>On Education</p>
        </Breadcrumbs>

        <header className="pageTitle">On Education</header>

        <div className="textContent" style={{ marginTop: "20px" }}>
          <VideoLayout data={pageData} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const url = "https://raw.githubusercontent.com/bobotangpy/wbb-fanpage/master/jo/_data/videoData.json";
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
