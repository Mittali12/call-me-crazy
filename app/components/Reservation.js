"use client"
import { useState, useEffect } from "react";
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

    useEffect(() => {
        if (localStorage.getItem('reservations')) {
            setTableData(JSON.parse(localStorage.getItem('reservations')))
        }
    }, [])




    const handleUserDetails = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        const newReservations = [...tableData, userDetails];
        setTableData(newReservations)
        setUserDetails(initalDetails)
        localStorage.setItem('reservations', JSON.stringify(newReservations))
    };

    const handleDelete = (i) => {
        const newTableData = [...tableData];
        newTableData.splice(i, 1);
        setTableData(newTableData)
        localStorage.setItem('reservations', JSON.stringify(newTableData))

    }
    const handleEdit = (() => {

    })
    return (
        <div className="w-full overflow-hidden flex flex-col mb-4">
            <p className="text-center text-2xl font-medium py-5">
                We're already excited to welcome you at Bevri in Delhi
            </p>
            <div className="flex mx-[15vw] gap-0 rounded-xl overflow-hidden">
                <img
                    src="https://static.wixstatic.com/media/a560a5_16f9a06f75494d109e247cf5203cbde9~mv2.jpg/v1/fill/w_744,h_558,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/building.jpg"
                    alt="view-image"
                    className="w-[40vw] h-[60vh]"
                />
                <div className="p-4 bg-black w-[40vw] h-[60vh]">
                    <h3 className="text-[#FFD700] text-xl font-semibold">
                        Reservation <sup>___</sup>
                    </h3>
                    <p className="font-bold text-2xl text-white">
                        Book A Table Online
                    </p>
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="flex gap-2 pt-4 w-full">
                            <input
                                type="text"
                                className="bg-white p-2 w-1/2"
                                placeholder="Name"
                                name="name"
                                value={userDetails.name}
                                onChange={handleUserDetails}
                                required
                            />
                            <input
                                type="email"
                                className="bg-white p-2 w-1/2"
                                placeholder="Your Email"
                                name="email"
                                value={userDetails.email}
                                onChange={handleUserDetails}
                                required
                            />
                        </div>
                        <div className="flex gap-2 pt-5 w-full">
                            <input
                                type="text"
                                className="bg-white p-2 w-1/2"
                                placeholder="Date & time"
                                name="datetime"
                                value={userDetails.datetime}
                                onChange={handleUserDetails}
                                required
                            />
                            <select
                                className="bg-white px-1     w-1/2 text-gray-500"
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
                            rows="1"
                            className="bg-white mt-5  w-full p-2"
                            placeholder="Special request"
                            value={userDetails.specialreq}
                            onChange={handleUserDetails}
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full p-2 font-semibold text-center text-xl mt-3 bg-[#FF8000] cursor-pointer text-white"
                        >
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
            {tableData.length > 0 && tableData && (
                <div className="w-full mt-4">
                    <h3 className="text-xl font-semibold text-center">View Your Details</h3>
                    <table className="mt-3 table-auto border-white p-3 w-[98%] m-3 text-center bg-black text-[#C7C7C7] overflow-hidden rounded-xl border-2">
                        <thead className="text-xl">
                            <tr className="border-2 ">
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date & Time</th>
                                <th>No. of People</th>
                                <th>Special Request</th>
                                {/* <th>Edit</th> */}
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody className="text-lg ">
                            {
                                tableData?.map((itm, index) => {
                                    return (
                                        <tr key={index} className="border">
                                            <td className="py-2">{itm.name}</td>
                                            <td className="py-2">{itm.email}</td>
                                            <td className="py-2">{itm.datetime}</td>
                                            <td className="py-2">{itm.people}</td>
                                            <td className="py-2">{itm.specialreq}</td>
                                            {/* <td className="py-2">
                                                <button className="bg-white rounded-xl px-4 text-black" onClick={() => handleEdit(index)}>Edit</button>
                                            </td> */}
                                            <td className="py-2">
                                                <button className="bg-white rounded-xl px-4 text-black" onClick={() => handleDelete(index)}>Delete</button>
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
