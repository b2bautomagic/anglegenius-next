import AppFooter from "./ui/AppFooter";
import AppNavbar from "./ui/AppNavbar";
import HeroSection from "./ui/HeroSection";
import ReviewSection from "./ui/ReviewSection";
import StartingSection from "./ui/StartingSection";
import VideoGuide from "./ui/VideoGuide";

import './index.css'

export default function App() {
  return (
    <>
    <section><AppNavbar /></section>

    <section className="mt-24 mb-12"><HeroSection /></section>

    <section className="px-6 py-4"><VideoGuide /></section>

    <section className="px-6 py-4"><StartingSection /></section>

    <section className="hidden px-6 py-2"><ReviewSection /></section>

    <section><AppFooter /></section>
    </>
  );
}
