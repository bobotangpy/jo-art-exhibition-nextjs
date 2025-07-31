import { Modal, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/StoryboardModal.module.scss";

export default function StoryboardModal({ openModal, handleOpenModal, data }) {
  return (
    <Modal
      open={openModal}
      key={data.person}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleOpenModal}
      closeAfterTransition
    >
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
    </Modal>
  );
}
