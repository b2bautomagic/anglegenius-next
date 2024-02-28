import AppFooter from "./ui/AppFooter";
import AppNavbar from "./ui/AppNavbar";
import HeroSection from "./ui/HeroSection";
import ReviewSection from "./ui/ReviewSection";
import StartingSection from "./ui/StartingSection";

import './index.css'

export default function App() {
  return (
    <>
    <section><AppNavbar /></section>

    <section><HeroSection /></section>

    <section className="px-6 py-4"><StartingSection /></section>

    <section className="px-6 py-2"><ReviewSection /></section>

    <section><AppFooter /></section>
    </>
  );
}
