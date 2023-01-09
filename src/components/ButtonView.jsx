import React, {useState} from "react";
import Modal from './Modal';

function ButtonView(props) {
    const [isModal, setModal] = useState(false);

    return (
        <>
            <button className="button_card" onClick={() => setModal(true)}>View</button>
            <Modal
                isVisible={isModal}
                title=<h3 className="modal-title">{props.title}</h3>
                text=<div className="modal-content">{props.body}</div>
                email=<div className="modal-content">{props.email}</div>
                phone=<div className="modal-content">{props.phone}</div>
                footer={<button>Cancel</button>}
                onClose={() => setModal(false)}
            />
        </>
    )
}

export default ButtonView;