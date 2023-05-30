// import "../utils/stylesheets/header.scss";
import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <>
            <div className="bg-gray-200 sticky top-0">
                <div className="max-w-6xl my-0 mx-auto py-6 flex justify-between  items-center text-fuchsia-600">
                    <div className="">
                        <NavLink
                            to="/home">
                            <img className="w-20 h-20 rounded-full" src="../../../image/rit_weblingo.png" alt="" />
                        </NavLink>
                    </div>
                    <div className="">
                        <nav>

                            <NavLink
                                to="/website"
                                className="pr-6"
                            >
                                Website
                            </NavLink>
                            <NavLink
                                to="/localization"
                                className="pr-6"
                            >
                                Localization
                            </NavLink>
                            {/* <NavLink
                                to="/maintenance"
                                className="pr-6"
                            >
                                Maintenance
                            </NavLink> */}
                            {/* <NavLink
                                to="/portfolio"
                                className="pr-6"
                            >
                                Portfolio
                            </NavLink> */}
                            <NavLink
                                to="/contact"
                                className="pr-6"
                            >
                                Contact US
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}