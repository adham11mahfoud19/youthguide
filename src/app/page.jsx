import Image from "next/image";
import ThemeToggle from "./(components)/Navbar/ThemeToggle/ThemeToggle";
import LcdSection from "./(components)/LcdSection/LcdSection";
import VofMonth from "./(components)/VofMonth/VofMonth";
import FofMonth from "./(components)/FofMonth/FofMonth";
import LatestVid from "./(components)/LatestVid/LatestVid";
import LatestArtc from "./(components)/LatestArtc/LatestArtc";
import Events from "./(components)/Events/Events";
import Sharakat from "./(components)/Sharakat/Sharakat";
import Footer from "./(components)/Footer/Footer";

export default function Home() {
  return (
    <div className="dark:bg-black ">
        <LcdSection />
        <hr className="h-[2px] bg-greenPrime dark:bg-white" />
        <VofMonth />
        <FofMonth />
        <hr className="h-[2px] bg-greenPrime dark:bg-white" />
        <LatestVid />
        <hr className="h-[2px] bg-greenPrime dark:bg-white" />
        <LatestArtc />
        <hr className="h-[2px] bg-greenPrime dark:bg-white" />
        <Events />
        <hr className="h-[2px] bg-greenPrime dark:bg-white" />
        <Sharakat />
        <Footer />
    </div>
  );
}
