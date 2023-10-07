"use client"
import { useRouter } from "next/navigation"
import { HeaderConfig } from "./config"
const Header = ()=>{
  const router = useRouter();
    return(
        <div className="top-0 left-0 py-5 bg-black flex justify-around w-screen shadow-lg border-white sticky z-50">
            <div className="shadow-md text-[#C7C7C7] border-dashed rounded-xl border-white border-y text-xl p-2 flex gap-2">
               <i>Call me Crazy </i>
            </div>
            
            <ul className="text-white flex gap-12 justify-center items-center">
              {
                HeaderConfig?.navList?.map((item,i)=>{
                    return <li key={i} className="text-[#C7C7C7] cursor-pointer font-medium text-xl hover:text-white">{item?.text}</li>
                })
              }
            </ul>
            <button className="text-[#C7C7C7] hover:text-white cursor-pointer rounded-bl-xl rounded-t-xl p-2 border shadow-2xl border-white font-bold text-base" 
            onClick={()=>router.push("/reservation")}>
              Reserve a Table
            </button>
        
        </div>
    )
}
export default Header