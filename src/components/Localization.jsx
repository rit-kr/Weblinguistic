import { BsGlobeAmericas } from "react-icons/bs";
import { RiUserVoiceLine } from "react-icons/ri";
import { MdOutlineDiversity1 } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { BiRun } from "react-icons/bi";


export default function Localization() {
    return (
        <>
            <div className="">
                <div className="max-w-6xl xl:max-w-4xl lg:max-w-3xl md:max-w-xl sm:max-w-md xs:max-w-sm xxs:max-w-xs my-0 mx-auto py-12">
                    <div className="flex justify-between items-center xxs:max-lg:flex-col">
                        <div className="basis-2/5 px-3 xxs:max-lg:basis-full">
                            <p className="text-2xl xs:max-md:text-xl xxs:max-md:text-lg ">You think your business is ready for international growth</p>
                            <p className="py-4  xs:max-md:text-md xxs:max-md:text-sm">
                                website localization enables you to connect with a global audience, deliver personalized experiences, and drive business growth in international markets
                            </p>
                        </div>
                        <div className="">
                            <img src="../../../image/social_language.png" alt="language pic" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50">
                    <div className="max-w-6xl my-0 mx-auto">
                        <div className="text-center py-8">
                            <p className="text-4xl my-6 xxs:max-md:text-xl">Why do we need localization</p>
                            <ul className="flex flex-wrap xxs:max-lg:flex-col">
                                <li className="basis-2/6 my-4">
                                    <BsGlobeAmericas className="mx-auto text-4xl text-fuchsia-500" />
                                    <h2 className="text-lg py-2">Expansion</h2>
                                    <p>Localization helps reach a wider audience globally.</p>
                                </li>
                                <li className="basis-2/6 my-4">
                                    <RiUserVoiceLine className="mx-auto text-4xl text-fuchsia-500" />
                                    <h2 className="text-lg py-2">User Experience</h2>
                                    <p>Improved navigation and understanding for international visitors.</p>
                                </li>
                                <li className="basis-2/6 my-4">
                                    <MdOutlineDiversity1 className="mx-auto text-4xl text-fuchsia-500" />
                                    <h2 className="text-lg py-2">Cultural Relevance</h2>
                                    <p>Adapting content to align with local norms and values.</p>
                                </li>
                                <li className="basis-2/6 my-4">
                                    <TbSeo className="mx-auto text-4xl text-fuchsia-500" />
                                    <h2 className="text-lg py-2">SEO</h2>
                                    <p>Enhanced search rankings in specific regions.</p>
                                </li>
                                <li className="basis-2/6 my-4">
                                    <BiRun className="mx-auto text-4xl text-fuchsia-500" />
                                    <h2 className="text-lg py-2">Competitive Advantage</h2>
                                    <p>Standing out and building loyalty in international markets.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}