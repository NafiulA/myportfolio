import React from 'react';

const Modal = ({ result, setOpenModal, setResult }) => {
    const handleSubmit = () => {
        setOpenModal(false);
        setResult("");
    }
    return (
        <div>
            <input type="checkbox" checked id="Contactmodal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box bg-[#2D2E32]">
                    {result === "OK" && <>
                        <h3 class="font-bold text-lg text-white">Message sent!</h3>
                        <p class="py-4 text-gray-400">Thank you for contacting me!</p>
                        <div class="modal-action">
                            <label onClick={handleSubmit} for="Contactmodal" class="btn btn-sm bg-[#57c78e]">Yay!</label>
                        </div>
                    </>}
                    {result !== "OK" && <>
                        <h3 class="font-bold text-lg text-white">Oops!</h3>
                        <p class="py-4 text-gray-400">Something wrong has happend! Please contact me through socials if necessary! Sorry for your inconvenience!</p>
                        <div class="modal-action">
                            <label onClick={handleSubmit} class="btn btn-sm bg-red-500">Oh no!</label>
                        </div>
                    </>}
                </div>
            </div>
        </div>
    );
};

export default Modal;