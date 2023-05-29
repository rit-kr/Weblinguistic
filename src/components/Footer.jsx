import { NavLink } from "react-router-dom";

export default function Footer() {

    return (
        <>
            <div className="bg-gray-200 py-4">
                <div className="max-w-6xl my-0 mx-auto py-4 flex justify-between  items-center">
                    <div className="">
                        <NavLink
                            to="/home">
                            <h1>Weblinguistic</h1>
                        </NavLink>
                        <p>Dwarka sector 14</p>
                        <p>New Delhi, India</p>
                    </div>
                    <p className="text-center">Designed@<span className="text-blue">Rit</span></p>
                </div>
            </div>
        </>
    )
}