'use client';
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import ConversationsSection from "@/components/ConversationsSection";
import DemocracysSection from "@/components/democracy";
import { motion } from "framer-motion";
import PeopleSection from "@/components/PeopleSection";
import QuestionsSection from "@/components/QuestionsSection";
import Footer from "@/components/Footer";
const HomeScreen = () => {
    return (<div>
        <Header />
        <div className="my-10 md:my-0" />
        <Hero />
        <div className="-mt-[190px] md:mt-0">
            <WelcomeSection />
        </div>
        <div className="-mt-[70px] md:mt-0">
            <ConversationsSection />
        </div>
        <motion.hr
            className="w-full border-t border-black my-0 lg:my-6 "
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
        />
          <div className="">
        <DemocracysSection />
        </div>
        <div className="-mt-[30px] md:mt-0">
        <WelcomeSection />
        </div>
        <PeopleSection />
        <QuestionsSection />
        <Footer />
    </div>)

};

export default HomeScreen;


