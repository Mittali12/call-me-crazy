"use client"
import { useState } from "react";
const initalDetails = {
    name: "",
    email: "",
    datetime: "",
    people: "",
    specialreq: ""
}
const Reservation = () => {
    const [userDetails, setUserDetails] = useState(initalDetails);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [tableData, setTableData] = useState([])



    const handleUserDetails = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTableData([...tableData, userDetails])
        setUserDetails(initalDetails)
    };

    const handleDelete = (i) => {
        const newTableData = [...tableData];
        newTableData.splice(i, 1);
        setTableData(newTableData)

    }
    const handleEdit=(()=>{
        
    })
    return (
        <div className="my-auto overflow-hidden">
            <p className="text-center text-2xl font-medium mt-10">
                We're already excited to welcome you at Bevri in Delhi
            </p>
            <div className="mt-10 flex mx-[15vw] gap-0">
                <img
                    src="https://static.wixstatic.com/media/a560a5_16f9a06f75494d109e247cf5203cbde9~mv2.jpg/v1/fill/w_744,h_558,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/building.jpg"
                    alt="view-image"
                    className="w-[600px] h-[600px]"
                />
                <div className="p-10 bg-black w-[600px] h-[600px]">
                    <h3 className="text-[#FFD700] text-xl font-semibold">
                        Reservation <sup>___</sup>
                    </h3>
                    <p className="mt-2 font-bold text-3xl text-white">
                        Book A Table Online
                    </p>
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="flex gap-3 pt-8 w-full">
                            <input
                                type="text"
                                className="bg-white px-4 py-3 w-1/2"
                                placeholder="Name"
                                name="name"
                                value={userDetails.name}
                                onChange={handleUserDetails}
                                required
                            />
                            <input
                                type="email"
                                className="bg-white px-4 py-3 w-1/2"
                                placeholder="Your Email"
                                name="email"
                                value={userDetails.email}
                                onChange={handleUserDetails}
                                required
                            />
                        </div>
                        <div className="flex gap-3 pt-5 w-full">
                            <input
                                type="text"
                                className="bg-white px-4 py-3 w-1/2"
                                placeholder="Date & time"
                                name="datetime"
                                value={userDetails.datetime}
                                onChange={handleUserDetails}
                                required
                            />
                            <select
                                className="bg-white px-4 w-1/2 text-gray-500"
                                placeholder=""
                                name="people"
                                value={userDetails.people}
                                onChange={handleUserDetails}
                                required
                            >
                                <option className="text-gray-300">
                                    No. of People
                                </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <textarea
                            id="story"
                            name="specialreq"
                            rows="5"
                            className="bg-white mt-5 w-full p-4"
                            placeholder="Special request"
                            value={userDetails.specialreq}
                            onChange={handleUserDetails}
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full px-4 py-3 font-semibold text-center text-xl mt-5 bg-[#FF8000] cursor-pointer text-white"
                        >
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
            {isSubmitted && (
                <div className="mt-10">
                    <h3 className="text-xl font-semibold text-center">View Your Details</h3>
                    <table className="mt-3 table-auto border-white p-3 w-full m-3 text-center bg-black text-[#C7C7C7] overflow-hidden">
                        <thead className="text-xl">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date & Time</th>
                                <th>No. of People</th>
                                <th>Special Request</th>
                                <th>Edit</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody className="text-lg">
                            {
                                tableData.map((itm, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{itm.name}</td>
                                            <td>{itm.email}</td>
                                            <td>{itm.datetime}</td>
                                            <td>{itm.people}</td>
                                            <td>{itm.specialreq}</td>
                                            <td>
                                                <button onClick={() => handleEdit(index)}>Edit</button>
                                            </td>
                                            <td>
                                                <button onClick={() => handleDelete(index)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Reservation;
