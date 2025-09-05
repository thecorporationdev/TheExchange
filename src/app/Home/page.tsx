'use client';
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import ConversationsSection from "@/components/ConversationsSection";
import DemocracysSection from "@/components/democracy";
import { motion} from "framer-motion";
import PeopleSection from "@/components/PeopleSection";
import QuestionsSection from "@/components/QuestionsSection";
import Footer from "@/components/Footer";

// import IbizaSection from "@/components/IbizaSection";
// import Footer from "./Footer/Footer";
// import FeaturesPage from "./FeaturesPage/FeaturesPage";
// import BikeCategories from "@/components/BikeCategories";
// import Faq from "./faq/faq";
const HomeScreen = () => {
    return(<div>
        <Header />
        <div className="my-24 md:my-0" /> 
        <Hero/>
<WelcomeSection />
<ConversationsSection />
<motion.hr
            className="w-full border-t border-black my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          />
<DemocracysSection />
<WelcomeSection />
<PeopleSection />
<QuestionsSection />

        {/* <IbizaSection /> */}
        {/* <FeaturesPage /> */}
        {/* <BikeCategories /> */}
        {/* <Faq/> */}
        <Footer />
    </div>)

};

export default HomeScreen;


