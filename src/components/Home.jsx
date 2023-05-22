
import Header from "./Header";
import Main from "./Main";
import HomePortfolio from "./HomePortfolio";
import Business from "./Business";
import Footer from "./Footer";
import Contact from "./Contact";



export default function Home(){
    return(
        <>
            <Header/>
            <Main />
            <HomePortfolio />
            <Business />
            <Contact/>
            <Footer/>
        </>
    )
}