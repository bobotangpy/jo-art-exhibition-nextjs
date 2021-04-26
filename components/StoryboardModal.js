import { Modal, Divider, Fade, Backdrop } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styles from "../styles/StoryboardModal.module.scss";

export default function StoryboardModal({ openModal, handleOpenModal, data }) {
  return (
    <Modal
      open={openModal}
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
      <Fade in={openModal}>
        <>
          <CloseIcon className={styles.closeIcon} onClick={handleOpenModal} />
          <div className={styles.modal}>
            {data &&
              data.questions.map((item, index) => (
                <>
                  <h4 key={index}>
                    <b>{Object.values(item)}</b>
                  </h4>
                  <p>{Object.values(data.answers[index])}</p>
                  <Divider light />
                </>
              ))}
          </div>
        </>
      </Fade>
    </Modal>
  );
}
