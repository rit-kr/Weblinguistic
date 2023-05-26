import { BsGlobeAmericas } from "react-icons/bs";
import { RiUserVoiceLine } from "react-icons/ri";
import { MdOutlineDiversity1 } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { BiRun } from "react-icons/bi";


export default function Localization() {
    return (
        <>
            <div className="max-w-6xl my-0 mx-auto py-4">
                <div className="flex justify-between items-center">
                    <div className="basis-2/5">
                        <p className="text-xl py-2">You think your business is ready for international growth</p>
                        <p className="">
                            website localization enables you to connect with a global audience, deliver personalized experiences, and drive business growth in international markets
                        </p>
                    </div>
                    <div className="">
                        <img src="../../../image/social_language.png" alt="language pic" />
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <p className="text-4xl my-6">Why do we need localization</p>
                        <ul className="flex flex-wrap">
                            <li className="basis-2/6 my-4">
                                <BsGlobeAmericas className="mx-auto text-4xl text-fuchsia-500" />
                                <h2 className="text-lg py-2">Expansion</h2>
                                <p>Localization helps reach a wider audience globally.</p>
                            </li>
                            <li className="basis-2/6 my-4">
                                <RiUserVoiceLine className="mx-auto text-4xl text-fuchsia-500"/>
                                <h2 className="text-lg py-2">User Experience</h2>
                                <p>Improved navigation and understanding for international visitors.</p>
                            </li>
                            <li className="basis-2/6 my-4">
                                <MdOutlineDiversity1 className="mx-auto text-4xl text-fuchsia-500"/>
                                <h2 className="text-lg py-2">Cultural Relevance</h2>
                                <p>Adapting content to align with local norms and values.</p>
                            </li>
                            <li className="basis-2/6 my-4">
                                <TbSeo className="mx-auto text-4xl text-fuchsia-500"/>
                                <h2 className="text-lg py-2">SEO</h2>
                                <p>Enhanced search rankings in specific regions.</p>
                            </li>
                            <li className="basis-2/6 my-4">
                                <BiRun className="mx-auto text-4xl text-fuchsia-500"/>
                                <h2 className="text-lg py-2">Competitive Advantage</h2>
                                <p>Standing out and building loyalty in international markets.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}