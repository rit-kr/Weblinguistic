// import "../utils/stylesheets/header.scss";
import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <>
            <div className="bg-gray-50 my-4 sticky top-0">
                <div className="max-w-6xl my-0 mx-auto py-4 flex justify-between  items-center">
                    <div className="">
                        <NavLink
                            to="/home">
                            <h1>git remote add origin https://github.com/rit-kr/Weblinguistic.git</h1>
                        </NavLink>
                    </div>
                    <div className="">
                        <nav>

                            <NavLink
                                to="/website"
                                className="pr-2"
                            >
                                website
                            </NavLink>
                            <NavLink
                                to="/localization"
                                className="pr-2"
                            >
                                Localization
                            </NavLink>
                            <NavLink
                                to="/maintenance"
                                className="pr-2"
                            >
                                Maintenance
                            </NavLink>
                            <NavLink
                                to="/portfolio"
                                className="pr-2"
                            >
                                Portfolio
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className="pr-2"
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