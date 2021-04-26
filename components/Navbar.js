import { useState } from "react";
import { useRouter } from "next/router";
import WebHead from "./Head";
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
      <WebHead />

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
          <div
            className="navWrapper"
            style={openMenu ? openMenuStyle : { display: "none" }}
          >
            <div className={`${styles.menu} navMenu`}>
              <CloseIcon className={styles.back} onClick={handleOpenMenu} />

              <Link href="/" exact>
                <a
                  className={
                    router.pathname == "/" ? styles.activeLink : styles.link
                  }
                  onClick={handleOpenMenu}
                >
                  Home
                </a>
              </Link>

              <Link href="/background">
                <a
                  className={
                    router.pathname == "/background"
                      ? styles.activeLink
                      : styles.link
                  }
                  onClick={handleOpenMenu}
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
                  <Link href="/public_discourse">
                    <a
                      className={
                        router.pathname == "/public_discourse"
                          ? styles.activeLink
                          : styles.link
                      }
                      onClick={handleOpenMenu}
                    >
                      Public Discourse
                    </a>
                  </Link>
                </AccordionSummary>
                <AccordionDetails style={accordionStyle}>
                  <Link href="/public_discourse/on_education">
                    <a
                      className={
                        router.pathname == "/public_discourse/on_education"
                          ? styles.activeLink
                          : styles.link
                      }
                      onClick={handleOpenMenu}
                    >
                      On Education
                    </a>
                  </Link>

                  <Link href="/public_discourse/on_hkandchina">
                    <a
                      className={
                        router.pathname == "/public_discourse/on_hkandchina"
                          ? styles.activeLink
                          : styles.link
                      }
                      onClick={handleOpenMenu}
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
                  <Link href="/artworks">
                    <a
                      className={
                        router.pathname == "/artworks"
                          ? styles.activeLink
                          : styles.link
                      }
                      onClick={handleOpenMenu}
                    >
                      Artworks
                    </a>
                  </Link>
                </AccordionSummary>
                <AccordionDetails style={accordionStyle}>
                  <Link href="/artworks/through_adults_lens">
                    <a
                      className={
                        router.pathname == "/artworks/through_adults_lens"
                          ? styles.activeLink
                          : styles.link
                      }
                      onClick={handleOpenMenu}
                    >
                      Through Adult's Lens
                    </a>
                  </Link>

                  <Link href="/artworks/through_childrens_lens">
                    <a
                      className={
                        router.pathname == "/artworks/through_childrens_lens"
                          ? styles.activeLink
                          : styles.link
                      }
                      onClick={handleOpenMenu}
                    >
                      Through Children's Lens
                    </a>
                  </Link>
                </AccordionDetails>
              </Accordion>

              <Link href="/local_global_responses">
                <a
                  className={
                    router.pathname == "/local_global_responses"
                      ? styles.activeLink
                      : styles.link
                  }
                  onClick={handleOpenMenu}
                >
                  Local and Global Responses
                </a>
              </Link>

              <Link href="/family_case_studies">
                <a
                  className={
                    router.pathname == "/family_case_studies"
                      ? styles.activeLink
                      : styles.link
                  }
                  onClick={handleOpenMenu}
                >
                  3 Family Case Studies
                </a>
              </Link>

              <Link href="/comment">
                <a
                  className={
                    router.pathname == "/comment"
                      ? styles.activeLink
                      : styles.link
                  }
                  onClick={handleOpenMenu}
                >
                  Comment
                </a>
              </Link>

              <Link href="/reference">
                <a
                  className={
                    router.pathname == "/reference"
                      ? styles.activeLink
                      : styles.link
                  }
                  onClick={handleOpenMenu}
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
