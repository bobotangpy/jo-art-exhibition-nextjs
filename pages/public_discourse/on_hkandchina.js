import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import VideoLayout from "../../components/VideoLayout";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

export default function OnHkAndChina() {
  const [data, setData] = useState("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  const getData = async () => {
    const getData = await fetch("/assets/_data/videoData.json");
    const res = await getData.json();

    if (res) {
      for (const [key, val] of Object.entries(res)) {
        if (key === "hkchina") {
          setData(val);
        }
      }
    }
  };

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
          <VideoLayout  data={data} />
        </div>
      </div>
      <Footer />
    </>
  );
}
ƒ