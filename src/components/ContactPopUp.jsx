import React from "react";
import { Modal, Backdrop, Fade } from '@mui/material';


const [modalIsOpen, setModalIsOpen] = useState(false);

const ContactPopUp = (props) => {
    const { formData } = props;
    setModalIsOpen(true);



    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={modalIsOpen}>
                <div>
                    <h2>Form Data</h2>
                    <p>First name: {values.firstname}</p>
                    <p>Last name: {values.lastname}</p>
                    <p>Email: {values.email}</p>
                    ...
                </div>
            </Fade>
        </Modal>
    );
}
export default ContactPopUp;