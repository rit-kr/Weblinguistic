export default function HomePortfolio() {
    return (
        <>
            <h3 className="my-4 py-8 text-center text-4xl">Portfolio</h3>
            <div className="max-w-6xl xl:max-w-4xl lg:max-w-3xl md:max-w-xl sm:max-w-md xs:max-w-sm xxs:max-w-xs my-0 mx-auto py-4 flex justify-between  items-center flex-wrap ">
                <div className="basis-1/4 xxs:max-lg:basis-full mx-2">
                    <div className="hover:translate-y-1 shadow-xl">
                        <img src="../../../image/site1.png" alt="main pic" />
                    </div>
                    <div className="text-center py-2">
                        <h2 className="py-1">E commerce</h2>
                        <p className="mb-2">
                            Professional website that looks stunning for Ecommerce.
                        </p>
                    </div>
                </div>
                <div className="basis-1/4 xxs:max-lg:basis-full mx-2">
                    <div className="hover:translate-y-1 ">
                        <img className="" src="../../../image/site2.png" alt="main pic" />
                    </div>
                    <div className="text-center py-2">
                        <h2 className="py-1">Hotel booking</h2>
                        <p className="mb-2">
                            Professional website that looks stunning for hotel booking.
                        </p>
                    </div>
                </div>
                <div className="basis-1/4 xxs:max-lg:basis-full mx-2">
                    <div className="hover:translate-y-1 shadow-xl rounded-xl">
                        <img className="" src="../../../image/site3.jpg" alt="main pic" />
                    </div>
                    <div className="text-center pt-10">
                        <h2 className="py-1">Health care</h2>
                        <p className="mb-2">
                            Professional website that looks stunning for your health care.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}