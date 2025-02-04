import Footer from "../../components/Footer";
import VideoLayout from "../../components/VideoLayout";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function OnHkAndChina({ data }) {
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
          <VideoLayout data={data} color={"#33699f"} />
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
