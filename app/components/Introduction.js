import Link from "next/link";

const Introduction = () => {
    return (
        <div className="w-full grid grid-cols-12 gap-5 justify-center p-10 bg-black py-10 align-middle overflow-hidden">
            <div className="col-span-4">
                <img src="https://static.wixstatic.com/media/a560a5_7e7bc9bca5bc41a8b67f34adb1676e7e~mv2_d_2400_3600_s_4_2.jpg/v1/fill/w_570,h_855,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bevri_website_gift_card.jpg" className="w-[500px] h-[500px] rounded-xl" />
            </div>
            <div className="col-span-5 text-center ">
                <h1 className="text-5xl font-bold  text-[#228B22]"><i>Call me Crazy</i></h1>
                <h3 className="mt-10 text-white font-medium text-2xl">Indian Food and Wine Experience</h3>
                <p className="text-lg mt-5 text-[#C7C7C7] font-medium">
                    Call me Crazy is a Indian restaurant, famous for its hot gooey cheese bread khachapuri, juicy and flavorful dumplings khinkali, mouth-watering grilled meats and, of course, unique luscious Indian wines.
                </p>
                <p className="py-10 text-lg mt-5 text-[#C7C7C7] font-medium">
                    Ready to try our satisfying Indian food and gorgeous wine? Find us in Mumbai or Delhi (reservations recommended) or order delivery.
                </p>
                <Link href="/menu" className=" text-[#C7C7C7] hover:text-white  hover:bg-[#FF8000] hover:border-none cursor-pointer rounded-bl-xl rounded-t-xl px-6 py-3 border shadow-2xl border-white font-bold text-xl ">
                    Menu
                </Link>
            </div>
            <div className="col-span-3 ">
                <img src="https://static.wixstatic.com/media/a560a5_b853391614784564812f6615dcee4971~mv2.png/v1/crop/x_0,y_36,w_2655,h_2656/fill/w_367,h_367,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/greens.png" className="w-[400px] h-[500px]" />
            </div>
        </div>
    )
}
export default Introduction;