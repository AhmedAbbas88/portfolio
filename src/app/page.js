import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.min.css'

import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Email from "./Components/Email/Email";
import Achievements from "./Components/Achievements/Achievements";
import Footer from "./Components/Footer/Footer";


export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar/>
        <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        {/* <Achievements/> */}
        <About/>
        <Projects/>
        <Email/>
        <Footer/>
        
        </div>
      </main>
      
   
  );
}
