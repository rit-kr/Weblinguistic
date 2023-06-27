import { NavLink } from "react-router-dom";

export default function Footer() {

    return (
        <>
            <div className="bg-gray-200 py-4">
                <div className="max-w-6xl xl:max-w-4xl lg:max-w-3xl md:max-w-xl sm:max-w-md xs:max-w-sm xxs:max-w-xs my-0 mx-auto py-4 flex justify-between  items-center xxs:max-sm:flex-col xxs:max-sm:text-center">
                    <div className="">
                        <NavLink className="xxs:max-md:hidden"
                            to="/home">
                            <img className="w-20 h-20 rounded-full" src="../../../image/rit_weblingo.png" alt="" />
                        </NavLink>
                        <p className="pt-1">Dwarka sector-14,</p>
                        <p className="pt-1">New Delhi, India</p>
                    </div>
                        <p className="pt-1 "> Designed@<span className="text-fuchsia-600">Rit</span>©2023</p>
                    <div>
                        <p className="pt-1 ">Website design,</p>
                        <p className="pt-1 ">localization,</p>
                        <p className="pt-1 ">web hosting</p>

                    </div>
                </div>
            </div>
        </>
    )
}