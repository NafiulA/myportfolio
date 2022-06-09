import React from 'react';

const Modal = ({ result, setOpenModal, setResult }) => {
    const handleSubmit = () => {
        setOpenModal(false);
        setResult("");
    }
    return (
        <div>
            <input type="checkbox" checked id="Contactmodal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-[#2D2E32]">
                    {result === "OK" && <>
                        <h3 className="font-bold text-lg text-white">Message sent!</h3>
                        <p className="py-4 text-gray-400">Thank you for contacting me!</p>
                        <div className="modal-action">
                            <label onClick={handleSubmit} for="Contactmodal" className="btn btn-sm bg-[#57c78e]">Yay!</label>
                        </div>
                    </>}
                    {result !== "OK" && <>
                        <h3 className="font-bold text-lg text-white">Oops!</h3>
                        <p className="py-4 text-gray-400">Something wrong has happend! Please contact me through socials if necessary! Sorry for your inconvenience!</p>
                        <div className="modal-action">
                            <label onClick={handleSubmit} className="btn btn-sm bg-red-500">Oh no!</label>
                        </div>
                    </>}
                </div>
            </div>
        </div>
    );
};

export default Modal;