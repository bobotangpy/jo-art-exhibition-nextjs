import * as React from "react";
import Footer from "../components/Footer";

export default function PublicDiscourse() {
  return (
    <>
      <div className="pageContent fadeIn">
        <header className="pageTitle">Public Discourse</header>

        <div className="textContent">
          <p>“We are different from the mainland Chinese.”</p>

          <p>
            When one asks a Hong Konger regarding the perception of Hong
            Kong(ers) and the mainland(ers), this line will probably appear
            sooner or later in the conversation. Where does this collective
            understanding come from? What exactly are the differences that have
            been referred to?
          </p>

          <p>
            Let’s attempt to explore these questions by examining the public
            discourses on education and Hong Kong v.mainland China from
            different perspectives through the following videos.
          </p>

          <div className="btnsDiv">
            <a href="/public_discourse/on_education">
              <button className="option">On Education</button>
            </a>

            <a href="/public_discourse/on_hkandchina">
              <button className="option">On Hong Kong And China</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
