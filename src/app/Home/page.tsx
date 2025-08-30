'use client';
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import AboutSection from "@/components/AboutSection";
import IbizaSection from "@/components/IbizaSection";
import Footer from "./Footer/Footer";
import FeaturesPage from "./FeaturesPage/FeaturesPage";
import BikeCategories from "@/components/BikeCategories";
import Faq from "./faq/faq";
const HomeScreen = () => {
    return(<div>
        <Header />
        <Hero/>
        <AboutSection />
        <IbizaSection />
        <FeaturesPage />
        <BikeCategories />
        <Faq/>
        <Footer />
    </div>)

};

export default HomeScreen;


