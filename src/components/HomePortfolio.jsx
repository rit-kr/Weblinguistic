import { Nav, Card } from 'react-bootstrap';

export default function HomePortfolio() {
    return (
        <>
            <h3 className="my-4 py-8 text-center text-4xl">Portfolio</h3>
            {/* <div className="max-w-6xl xl:max-w-4xl lg:max-w-3xl md:max-w-xl sm:max-w-md xs:max-w-sm xxs:max-w-xs my-0 mx-auto py-4 flex justify-between  items-center flex-wrap ">
                <div className="basis-1/4 xxs:max-lg:basis-full mx-2">
                    <div className=" shadow-xl">
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
                    <div className=" ">
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
                    <div className=" shadow-xl">
                        <img src="../../../image/site1.png" alt="main pic" />
                    </div>
                    <div className="text-center py-2">
                        <h2 className="py-1">E commerce</h2>
                        <p className="mb-2">
                            Professional website that looks stunning for Ecommerce.
                        </p>
                    </div>
                </div>
            </div> */}
            <div className='max-w-6xl xl:max-w-4xl lg:max-w-3xl md:max-w-xl sm:max-w-md xs:max-w-sm xxs:max-w-xs my-0 mx-auto flex justify-between items-center flex-wrap'>
                <Card className='m-2 basis-1/4 xxs:max-lg:basis-full'>
                    <Card.Link href="https://ecommerce-shop-five-ebon.vercel.app">
                        <div className='img_wrap'>
                            <Card.Img className='w-20 h-30' variant="top" src="../../../image/site1.png" />
                            <div class="img_preview">
                                <p className='img_preview_tag'>Preview</p>
                            </div>
                        </div>
                    </Card.Link>
                    <Card.Body>
                        {/* <Card.Title>Introduction web development & HTML</Card.Title> */}
                        <Card.Text>
                            <small className="text-muted">E commerce</small>
                            <p>
                            Professional website that looks stunning for Ecommerce.
                            </p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> <span>  </span></small>
                    </Card.Footer>
                </Card>
                <Card className='m-2 basis-1/4 xxs:max-lg:basis-full'>
                    <Card.Link href="https://real-estate-app-bay-six.vercel.app/">
                        <div className='img_wrap'>
                            <Card.Img className='top_course_img' variant="top" src="../../../image/site2.png" />
                            <div class="img_preview">
                                <p className='img_preview_tag'>Preview</p>
                            </div>
                        </div>
                    </Card.Link>
                    <Card.Body>
                        {/* <Card.Title>Introduction web development & HTML</Card.Title> */}
                        <Card.Text>
                            <small className="text-muted">Hotel booking</small>
                            <p>
                            Professional website that looks stunning for hotel booking
                            </p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> <span>  </span></small>
                    </Card.Footer>
                </Card>
                <Card className='top_course m-2 basis-1/4 xxs:max-lg:basis-full'>
                    <Card.Link href="/website">
                        <div className='img_wrap'>
                            <Card.Img className='top_course_img' variant="top" src="../../../image/site1.png" />
                            <div class="img_preview">
                                <p className='img_preview_tag'>Preview</p>
                            </div>
                        </div>
                    </Card.Link>
                    <Card.Body>
                        {/* <Card.Title>Introduction web development & HTML</Card.Title> */}
                        <Card.Text>
                            <small className="text-muted">real estate</small>
                            <p>
                            Professional website that looks stunning for real estate
                            </p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> <span>  </span></small>
                    </Card.Footer>
                </Card>
            </div>
        </>
    )
}