import { useEffect } from "react";
import { useState } from "react"

export default function Main() {
    const [languageIndex, setLanguageIndex] = useState(0);

    let languageArray = ["한국어", "English", "中文", "日本語", "Deutsch", "русский", "తెలుగు", "العربية", "français", "italiano", "עִבְרִית"];

    useEffect(() => {
        const interval = setInterval(() => {
            let currentIdx = languageIndex;
            setLanguageIndex(currentIdx => currentIdx + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    let textChanges = languageArray[languageIndex % languageArray.length];
    return (
        <>
            <div className="bg-typing bg-no-repeat bg-cover sm:max-lg:bg-gradient-to-r from-sky-500 to-indigo-500">
                <div className="max-w-6xl xl:max-w-4xl lg:max-w-3xl md:max-w-xl sm:max-w-md xs:max-w-sm xxs:max-w-xs my-0 mx-auto pt-40 py-80 flex">
                    <div className="basis-2/5 xxs:max-lg:basis-full text-white xxs:max-md:px-4">
                        <h2 className="text-4xl xs:max-md:text-xl xxs:max-md:text-lg pb-4">Make beautiful website for any device, in <span>{textChanges}</span></h2>
                        <p className="text-lg xs:max-md:text-md xxs:max-md:text-sm pb-4">
                            Quickly create a professional website that looks stunning on desktops, tablets and even mobile devices with us in <span>{textChanges}</span>.
                        </p>
                    </div>
                    {/* <div className="basis-2/5">
                        <img src="../../../image/web.jpg" alt="main pic" />
                    </div> */}
                </div>
            </div>
        </>
    )
}