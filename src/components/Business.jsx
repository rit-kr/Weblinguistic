import { BsLaptop } from "react-icons/bs";
import { BiMobile } from "react-icons/bi";
import { HiOutlineTranslate } from "react-icons/hi";
import { SiMoleculer } from "react-icons/si";
import { GrHostMaintenance } from "react-icons/gr";
import { TbSeo } from "react-icons/tb";






export default function Business() {
    return (
        <>
            <div className="my-4 py-4 text-center bg-gray-50">

                <h3 className="my-4 text-4xl">Business</h3>
                <div className="max-w-4xl my-0 mx-auto py-4 flex justify-between  items-center">
                    <div className="basis-2/5 ">
                        <BsLaptop className="mx-auto text-4xl text-fuchsia-500" />
                        <p className="text-lg py-4">Web/Mobile</p>
                    </div>
                    <div className="basis-2/5">
                        <HiOutlineTranslate className="mx-auto text-4xl text-fuchsia-500" />
                        <p className="text-lg py-4">Localization</p>
                    </div>
                    <div className="basis-2/5">
                        <SiMoleculer className="mx-auto text-4xl text-fuchsia-500" />
                        <p className="text-lg py-4">Domain</p>
                    </div>
                    <div className="basis-2/5">
                        <GrHostMaintenance className="mx-auto text-4xl text-fuchsia-500" />
                        <p className="text-lg py-4">Maintenance</p>
                    </div>
                    <div className="basis-2/5">
                        <TbSeo className="mx-auto text-4xl text-fuchsia-500" />
                        <p className="text-lg py-4">Coming soon...</p>
                    </div>
                </div>
            </div>
        </>
    )
}