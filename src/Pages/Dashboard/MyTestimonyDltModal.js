import React from 'react';
import toast from 'react-hot-toast';

const MyTestimonyDltModal = ({ dltModal, setDltModal, refetch }) => {
    const handleDelete = () => {
        fetch(`http://localhost:5000/reviews/${dltModal._id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },

        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setDltModal(null);
                    toast.success("Testimony Deleted", { id: "testimonyDelete" });
                    refetch();
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="myTestimonyDltModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box bg-[#2D2E32]">
                    <h3 class="font-bold text-lg text-gray-400">Are you sure you want to delete this testimony?</h3>
                    <div class="modal-action">
                        <button onClick={handleDelete} className='py-1 px-3 rounded text-white bg-[#57c78e]'>Yes</button>
                        <label onClick={() => setDltModal(null)} for="myTestimonyDltModal" class="p-1 rounded text-white bg-red-500">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTestimonyDltModal;