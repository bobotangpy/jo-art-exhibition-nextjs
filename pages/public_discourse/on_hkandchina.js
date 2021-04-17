import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import VideoLayout from "../../components/VideoLayout";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

export default function OnHkAndChina({ data }) {
  const [pageData, setPageData] = useState("");

  useEffect(() => {
    if (data) console.log(data);
    setPageData(data);
  }, []);

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
          <p>On Hong Kong and China</p>
        </Breadcrumbs>

        <header className="pageTitle">On Hong Kong and China</header>

        <div className="textContent" style={{ marginTop: "20px" }}>
          <VideoLayout data={pageData} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const url = "https://visualizing-the-civic-identity-struggle-in-hk.vercel.app/assets/_data/videoData.json";
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
