import React from 'react';

const MytestimoniesRow = ({ testimony, index, setDltModal }) => {
    return (
        <tr className='text-white'>
            <th>{index + 1}</th>
            <td>{testimony.name}</td>
            <td>{testimony.testimony}</td>
            <td className='py-2'><label onClick={() => setDltModal(testimony)} for="myTestimonyDltModal" className='p-1 rounded-full bg-red-500'>Delete</label></td>
        </tr>
    );
};

export default MytestimoniesRow;