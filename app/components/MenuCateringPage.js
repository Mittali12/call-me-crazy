import Link from "next/link";
import { useRouter } from "next/navigation"

const MenuCateringPage = () => {
    const router = useRouter();
    return (
        <div className="bg-white p-10 ">
            <h1 className=" text-5xl font-bold text-center">
                Discover Indian Cuisine
            </h1>
            <div className="pt-10 flex gap-20 justify-center items-center">
                <Link href="/menu">
                    <img className="border-2 rounded-xl" src="https://static.wixstatic.com/media/a560a5_433372453339404ebb21fd73cb6083ad~mv2_d_2400_3600_s_4_2.jpg/v1/fill/w_317,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bevri_website_gift_card2.jpg" alt="menu-image" />
                    <p className="text-3xl font-semibold text-center mt-2">Menu</p>
                </Link>
                <Link href="/menu">
                    <img className="border-2 rounded-xl" src="https://static.wixstatic.com/media/a560a5_a0ce25551b654359947482c3688ba1a0~mv2_d_2400_3600_s_4_2.jpg/v1/fill/w_317,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bevri_website_lunch_and_dinner.jpg" alt="store-image" />
                    <p className="text-3xl font-semibold text-center mt-2">Store</p>
                </Link>
                <Link href="/catering">
                    <img className="border-2 rounded-xl" src="https://static.wixstatic.com/media/a560a5_7e7bc9bca5bc41a8b67f34adb1676e7e~mv2_d_2400_3600_s_4_2.jpg/v1/fill/w_317,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bevri_website_gift_card.jpg" alt="catering-image" />
                    <p className="text-3xl font-semibold text-center mt-2">Catering</p>
                </Link>
            </div>
            <div className="mt-10 bg-black p-3 w-fit text-white font-medium text-2xl mx-auto rounded-md cursor-pointer" onClick={() => { router.push("/reservation") }}>
                Book a Table
            </div>
        </div>
    )
}
export default MenuCateringPage