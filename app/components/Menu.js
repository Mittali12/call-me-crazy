import React, { useState } from 'react';
import { BsCartFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Menu = () => {
    const menuData = [
        { id: 1, category: 'Starters', name: 'Paw Bhaji', price: 9.99, image: 'images/foodplate1.png' },
        { id: 2, category: 'Starters', name: 'French Fries', price: 7.99, image: 'images/foodplate2.png' },
        { id: 3, category: 'Starters', name: 'Noodles', price: 7.99, image: 'images/foodplate6.png' },
        { id: 4, category: 'Main Courses', name: 'Grilled Salmon', price: 17.99, image: 'images/foodplate3.png' },
        { id: 5, category: 'Main Courses', name: 'Pasta Alfredo', price: 12.99, image: 'images/foodplate4.png' },
        { id: 6, category: 'Main Courses', name: 'Veg Roles', price: 12.99, image: 'images/foodplate2.png' },
        { id: 7, category: 'Main Courses', name: 'Pasta Alfredo', price: 12.99, image: 'images/foodplate3.png' },
        // Add more menu items
    ];
    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addToCart = (menuItem) => {
        setCart([...cart, menuItem]);
    };
    const [filter, setFilter] = useState('All');

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    };

    const removeFromCartMinus = (idx) => {
        const updatedCart = [...cart];
        let isFirstRemoved = false;
        const filteredMenu = updatedCart.filter(item => {
            if (!isFirstRemoved && item.id === idx) {
                isFirstRemoved = true;
                return false;
            }
            return true;
        });
        setCart(filteredMenu);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className="flex text-white bg-black w-full  border-white border-b-2 " >
            {/* Sidebar */}
            <div className="w-1/5 border-r-2 border-white text-white p-4 pl-5">
                <h2 className="text-xl font-bold ">Filter by Category</h2>
                <ul className='flex flex-col gap-4 mt-4'>
                    <li onClick={() => handleFilterChange('All')} className={`cursor-pointer ${filter === 'All' ? 'text-orange-500' : 'text-white'}`}>All</li>
                    <li onClick={() => handleFilterChange('Starters')} className={`cursor-pointer ${filter === 'Starters' ? 'text-orange-500' : 'text-white'}`}>Starters</li>
                    <li onClick={() => handleFilterChange('Main Courses')} className={`cursor-pointer ${filter === 'Main Courses' ? 'text-orange-500' : 'text-white'}`}>Main Courses</li>
                    {/* Add more categories */}
                </ul>
            </div>

            {/* Menu */}
            <div className="flex-1 p-8">
                <h1 className="text-4xl flex justify-between font-bold mb-8 text-center">
                    Our Menu
                    <span className='ml-auto relative'>
                        <BsCartFill onClick={openModal} />
                        <span className='absolute text-lg -top-2 -right-2 bg-orange-500 text-white px-2 rounded-full'>
                            {cart.length}
                        </span>
                    </span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuData
                        .filter(item => filter === 'All' ? true : item.category === filter)
                        .map(item => (
                            <div key={item.id} className="bg-white rounded-lg p-6 flex flex-col justify-center items-stretch ">
                                <div>
                                    <img src={item.image} alt={item.name} className="rounded-lg max-h-[300px] w-auto h-40 max-w-[250px]" />
                                </div>
                                <h2 className="text-md text-black font-bold">{item.name}</h2>
                                <p className="text-gray-600">${item.price}</p>
                                {
                                    (cart.length > 0 && cart.filter((food, _) => food.id === item.id).length > 0)
                                        ?
                                        <div className='w-full flex items-center justify-between text-black px-4 py-2 mt-4 rounded-md overflow-hidden'>
                                            <span className='w-full text-white font-bold px-4 py-2 rounded-xl flex justify-center items-center bg-orange-500 hover:bg-orange-600'>
                                                <CiCircleMinus
                                                    size={20}
                                                    className='cursor-pointer'
                                                    onClick={() => removeFromCartMinus(item.id)}
                                                />
                                            </span>
                                            <span className='px-4 py-2 rounded-xl'>
                                                {
                                                    cart.filter((food, _) => food.id === item.id).length
                                                }
                                            </span>
                                            <span className='w-full text-white font-bold px-4 py-2 rounded-xl flex justify-center items-center bg-orange-500 hover:bg-orange-600'>
                                                <CiCirclePlus
                                                    size={20}
                                                    className='cursor-pointer'
                                                    onClick={() => addToCart(item)}
                                                />
                                            </span>
                                        </div>
                                        :
                                        <button onClick={() => addToCart(item)} className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-orange-600">Add to Cart</button>


                                }
                            </div>
                        ))}
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75" onClick={(e) => e.stopPropagation()}>
                    <div className="bg-white p-8 max-w-md rounded-lg">
                        <h2 className="text-lg font-bold">Shopping Cart</h2>
                        <ul>
                            {cart.length > 0 ?
                                cart.map((item, index) => (
                                    <li key={index} className="flex justify-between items-center gap-5 mb-2">
                                        <div className='flex items-center gap-2'>
                                            <img src={item?.image} alt="" className='w-16 border-2 rounded-xl' />
                                            <span className='text-black'>{item.name} - ${item.price}</span>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(index)}
                                            className="text-black text-xs"
                                        >
                                            <MdDelete size={20} />
                                        </button>
                                    </li>
                                ))
                                :
                                <span className='text-black'>Cart is empty</span>
                            }
                        </ul>
                        <button onClick={closeModal} className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-orange-600">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;
