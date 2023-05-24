import { BsLaptop } from "react-icons/bs";
import { BiMobile } from "react-icons/bi";
import { HiOutlineTranslate } from "react-icons/hi";
import { SiMoleculer } from "react-icons/si";
import { GrHostMaintenance } from "react-icons/gr";
import { TbSeo } from "react-icons/tb";






export default function Business() {
    return (
        <>
            <h3 className="my-4 text-center text-4xl">Business</h3>
            <div className="max-w-4xl my-0 mx-auto py-4 flex justify-between  items-center">
                <div className="basis-2/5 ">
                    <div  className="">
                        <BsLaptop  className="text-3xl"/>
                        {/* <BiMobile /> */}
                    </div>
                    <p className="text-lg pb-4">Website</p>
                </div>
                <div className="basis-2/5 ">
                    <div  className="">
                        <HiOutlineTranslate  className="text-3xl"/>
                        {/* <BiMobile /> */}
                    </div>
                    <p className="text-lg pb-4">Localization</p>
                </div>
                <div className="basis-2/5 ">
                    <div  className="">
                        <SiMoleculer  className="text-3xl"/>
                        {/* <BiMobile /> */}
                    </div>
                    <p className="text-lg pb-4">Domain</p>
                </div>
                <div className="basis-2/5 ">
                    <div  className="">
                        <GrHostMaintenance  className="text-3xl"/>
                        {/* <BiMobile /> */}
                    </div>
                    <p className="text-lg pb-4">Maintenance</p>
                </div>
                <div className="basis-2/5 ">
                    <div  className="">
                        <TbSeo  className="text-3xl"/>
                        {/* <BiMobile /> */}
                    </div>
                    <p className="text-lg pb-4">Coming soon...</p>
                </div>
            </div>
        </>
    )
}