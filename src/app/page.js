import Image from "next/image";

import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Email from "./Components/Email/Email";
import Footer from "./Components/Footer/Footer";


export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar/>
        <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <About/>
        <Projects/>
        <Email/>
        <Footer/>
        
        </div>
      </main>
      
   
  );
}
