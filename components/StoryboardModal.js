import { useEffect, useState } from "react";
import { Modal, Divider, Fade, Backdrop } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styles from "../styles/StoryboardModal.module.scss";

export default function StoryboardModal({ openModal, handleOpenModal, data }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(data);
    if (data) console.log(data.person);
  }, []);

  useEffect(() => {
    if (open !== openModal) setOpen(openModal);
  }, [openModal]);

  return (
    <Modal
      open={open}
      key={data.person}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      onClose={handleOpenModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <>
          <CloseIcon className={styles.closeIcon} onClick={handleOpenModal} />
          <div className={styles.modal}>
            {data &&
              data.questions.map((item, index) => (
                <>
                  <h4 key={index}>
                    <b>{Object.values(item)}</b>
                  </h4>

                  {data.answers.map((item, index) => (
                    <p key={index}>{Object.values(item)}</p>
                  ))}
                  <Divider light />
                </>
              ))}
          </div>
        </>
      </Fade>
    </Modal>
  );
}
