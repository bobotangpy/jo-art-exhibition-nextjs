import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Fade } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import styles from "../styles/Navbar.module.scss";
import Head from "next/head";

const openMenuStyle = {
  position: "fixed",
  top: "0",
  right: "0",
  zIndex: "50",
  height: "100vh",
  width: "30%",
  padding: "20px",
  backgroundColor: "#2d3757",
};

const accordionStyle = {
  display: "flex",
  flexDirection: "column",
};

export default function Navbar() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Head>
        <title>
          Visualizing the Civic Identity Struggle in Hong Kong: An Art
          Exhibition
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <nav className={styles.navbar}>
        <a href="/">
          <p>
            Visualizing the Civic Identity Struggle in Hong Kong: <br />
            An Art Exhibition
          </p>
        </a>
        <MenuIcon className={styles.menuIcon} onClick={handleOpenMenu} />
      </nav>

      <Modal
        open={openMenu}
        key={"nav"}
        className={styles.navModal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        onClose={handleOpenMenu}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openMenu}>
          <div style={openMenu ? openMenuStyle : { display: "none" }}>
            <div className={`${styles.menu} navMenu`}>
              <CloseIcon className={styles.back} onClick={handleOpenMenu} />

              <Link href="/" exact onClick={handleOpenMenu}>
                <a
                  className={
                    router.pathname == "/" ? styles.activeLink : styles.link
                  }
                >
                  Home
                </a>
              </Link>

              <Link href="/background" onClick={handleOpenMenu}>
                <a
                  className={
                    router.pathname == "/background"
                      ? styles.activeLink
                      : styles.link
                  }
                >
                  Background
                </a>
              </Link>

              <Accordion style={{ alignSelf: "center", width: "fit-content" }}>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={{ color: "#ffffff", padding: "0" }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Link href="/public_discourse" onClick={handleOpenMenu}>
                    <a
                      className={
                        router.pathname == "/public_discourse"
                          ? styles.activeLink
                          : styles.link
                      }
                    >
                      Public Discourse
                    </a>
                  </Link>
                </AccordionSummary>
                <AccordionDetails style={accordionStyle}>
                  <Link
                    href="/public_discourse/on_education"
                    onClick={handleOpenMenu}
                  >
                    <a
                      className={
                        router.pathname == "/public_discourse/on_education"
                          ? styles.activeLink
                          : styles.link
                      }
                    >
                      On Education
                    </a>
                  </Link>

                  <Link
                    href="/public_discourse/on_hkandchina"
                    onClick={handleOpenMenu}
                  >
                    <a
                      className={
                        router.pathname == "/public_discourse/on_hkandchina"
                          ? styles.activeLink
                          : styles.link
                      }
                    >
                      On Hong Kong and China
                    </a>
                  </Link>
                </AccordionDetails>
              </Accordion>

              <Accordion style={{ alignSelf: "center", width: "fit-content" }}>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={{ color: "#ffffff", padding: "0" }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Link href="/artwork" onClick={handleOpenMenu}>
                    <a
                      className={
                        router.pathname == "/artwork"
                          ? styles.activeLink
                          : styles.link
                      }
                    >
                      Artworks
                    </a>
                  </Link>
                </AccordionSummary>
                <AccordionDetails style={accordionStyle}>
                  <Link
                    href="/artwork/through_adults_lens"
                    onClick={handleOpenMenu}
                  >
                    <a
                      className={
                        router.pathname == "/artwork/through_adults_lens"
                          ? styles.activeLink
                          : styles.link
                      }
                    >
                      Through Adult's Lens
                    </a>
                  </Link>

                  <Link
                    href="/artwork/through_childrens_lens"
                    onClick={handleOpenMenu}
                  >
                    <a
                      className={
                        router.pathname == "/artwork/through_childrens_lens"
                          ? styles.activeLink
                          : styles.link
                      }
                    >
                      Through Children's Lens
                    </a>
                  </Link>
                </AccordionDetails>
              </Accordion>

              <Link href="/local_global_response" onClick={handleOpenMenu}>
                <a
                  className={
                    router.pathname == "/local_global_response"
                      ? styles.activeLink
                      : styles.link
                  }
                >
                  Local and Global Response
                </a>
              </Link>

              <Link href="/interactive_storyboard" onClick={handleOpenMenu}>
                <a
                  className={
                    router.pathname == "/interactive_storyboard"
                      ? styles.activeLink
                      : styles.link
                  }
                >
                  Interactive Storyboard
                </a>
              </Link>

              <Link href="/comment" onClick={handleOpenMenu}>
                <a
                  className={
                    router.pathname == "/comment"
                      ? styles.activeLink
                      : styles.link
                  }
                >
                  Comment
                </a>
              </Link>

              <Link href="/reference" onClick={handleOpenMenu}>
                <a
                  className={
                    router.pathname == "/reference"
                      ? styles.activeLink
                      : styles.link
                  }
                >
                  Reference
                </a>
              </Link>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}