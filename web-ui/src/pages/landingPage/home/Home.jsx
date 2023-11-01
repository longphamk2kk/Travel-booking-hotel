import Featured from "../../../components/landingPage/featured/Featured";
import FeaturedProperties from "../../../components/landingPage/featuredProperties/FeaturedProperties";
import Footer from "../../../components/landingPage/footer/Footer";
import Header from "../../../components/landingPage/header/Header";
import MailList from "../../../components/landingPage/mailList/MailList";
import Navbar from "../../../components/landingPage/navbar/Navbar";
import PropertyList from "../../../components/landingPage/propertyList/PropertyList"
import "./home.css";
import LoginModal from "../../../components/modals/LoginModal";
import RegisterModal from "../../../components/modals/RegisterModal";

const Home = () => {
  return (
    <div>
        <LoginModal/>
        <RegisterModal/>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
            <Featured />
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList />
            <h1 className="homeTitle">Homes guests love</h1>
            <FeaturedProperties />
            <MailList />
            <Footer />
        </div>
    </div>
  );
};

export default Home;
