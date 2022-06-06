import React from 'react';

const MyTestimonyDltModal = ({ setDltModal }) => {
    return (
        <div>
            <input type="checkbox" id="myTestimonyDltModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete this testimony?</h3>
                    <div class="modal-action">
                        <button className='p-1 text-white bg-[#57c78e]'>Yes</button>
                        <label onClick={() => setDltModal(false)} for="myTestimonyDltModal" class="p-1 text-white bg-red-500">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTestimonyDltModal;