import { NavLink } from "react-router-dom";

export default function Footer() {

    return (
        <>
            <div className="bg-gray-200 py-4">
                <div className="max-w-6xl my-0 mx-auto py-4 flex justify-between  items-center">
                    <div className="">
                        <NavLink
                            to="/home">
                            <img className="w-20 h-20 rounded-full" src="../../../image/rit_weblingo.png" alt="" />
                        </NavLink>
                        <p className="pt-1">Dwarka sector-14,</p>
                        <p className="pt-1">New Delhi, India</p>
                    </div>
                    <div>
                        <p className="pt-1 "> Designed@<span className="text-blue">Rit</span>©2023</p>
                        <p className="pt-1 ">Website design,</p>
                        <p className="pt-1 ">localization,</p>
                        <p className="pt-1 ">web hosting</p>

                    </div>
                </div>
            </div>
        </>
    )
}