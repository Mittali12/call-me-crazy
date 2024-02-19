const AddressPage = () => {
    return (
        <div className="w-full px-20 py-10">
            <div className="flex justify-center items-center gap-20 ">
                <div className="">
                    <h1 className="text-4xl font-semibold">India</h1>
                    <p className="py-10 text-gray-500">India, nestled in South Asia, boasts a captivating cultural heritage shaped by centuries of interactions with diverse civilizations. From the Himalayan peaks to the Indian Ocean shores, its geography mirrors its diversity. As the birthplace of major religions and a hub of art and cuisine, India's rich tapestry of cultures thrives in a democratic and pluralistic society, captivating the world with its iconic landmarks and timeless heritage.
                    </p>
                    <button className="bg-black text-white py-3 px-4 cursor-point font-medium text-base">Read More</button>

                </div>
                <div className="relative text-right w-96 h-96">
                    <div className="overflow-hidden bg-none w-96 h-96">
                        <iframe
                            className="w-[350px] h-[350px] border-2 rounded-xl"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            src="https://maps.google.com/maps?width=600&amp;height=600&amp;hl=en&amp;q=sector 48 gurgaon sr prem&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        ></iframe>
                        <a href="https://connectionsgame.org/" className="absolute top-0 left-0 p-4 text-blue-500 hover:underline">Connections Puzzle</a>
                    </div>
                </div>
            </div>
            <div className="flex pt-10 gap-20 justify-center items-center ">
                <img
                    src="https://static.wixstatic.com/media/a560a5_4a4c686df7ed46b7ac7671d2c0b19599~mv2_d_3600_2400_s_4_2.jpg/v1/fill/w_1260,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bevri_website_supra.jpg"
                    alt="wine-icon"
                    className="w-[400px] h-[400px] border-2 rounded-xl"
                />
                <div className="">
                    <h1 className="text-4xl font-semibold">Indian Wines</h1>
                    <p className="py-10 text-gray-500 text-xl font-medium">"India uses methods of winemaking that you couldn't invent in the modern world; you could only inherit them through the mists of time…" Oz Clarke
                    </p>
                    <button className="bg-black text-white py-3 px-4 cursor-point font-medium text-base">Shop Now</button>

                </div>
            </div>
        </div>
    );
}

export default AddressPage;
