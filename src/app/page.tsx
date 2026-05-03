"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { useState } from "react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  const [numChildren, setNumChildren] = useState(10);

  const calculatePrice = (n: number) => {
    if (n <= 10) return 1100;
    if (n <= 14) return 1100 + (n - 10) * 80;
    if (n <= 15) return 1400;
    if (n <= 20) return 1400 + (n - 15) * 80;
    if (n <= 35) return 1700 + (n - 20) * 80;
    return 1700 + (35 - 20) * 80;
  };

  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="medium"
        background="grid"
        cardStyle="glass-elevated"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Acasă", id: "home" },
        { name: "Despre", id: "about" },
        { name: "Prețuri", id: "pricing" },
        { name: "Calculator", id: "booking" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="MAISON PLAY"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardRotatedCarousel
      background={{ variant: "rotated-rays-animated" }}
      title="Petreceri aniversare de neuitat la Maison Play"
      description="Locație premium, mâncare delicioasă și distracție fără limite pentru micuții tăi."
      buttons={[{ text: "Rezervă Petrecerea Visurilor", href: "#contact" }]}
      carouselItems={[
        { id: "c1", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D5csfS2eM56HgjLvoOJW5Mm44W/uploaded-1777578825685-oyshi19x.jpg" },
        { id: "c2", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D5csfS2eM56HgjLvoOJW5Mm44W/uploaded-1777578546831-esmkhuyd.jpg" },
        { id: "c3", imageSrc: "http://img.b2bpic.net/free-photo/confetti-made-circle-center-put-party_23-2147593120.jpg" },
        { id: "c4", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D5csfS2eM56HgjLvoOJW5Mm44W/uploaded-1777578699890-mxrrboe1.jpg" },
        { id: "c5", imageSrc: "http://img.b2bpic.net/free-photo/balloons-triangle-shape-paper-yellow-background_23-2147889765.jpg" },
        { id: "c6", imageSrc: "http://img.b2bpic.net/free-photo/close-up-dinosaurs-animal-figure-toys-sweet-candy-sprinkles_53876-41760.jpg" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout title="Experiență de excelență la Maison Play" useInvertedBackground={false} />
  </div>

  <div id="booking" data-section="booking" className="py-20 bg-[var(--background-accent)]">
    <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-8 text-center">Calculator Preț Petrecere</h2>
        <div className="bg-[var(--card)] p-8 rounded-lg shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block mb-2">Număr Copii</label>
                    <input type="number" value={numChildren} onChange={(e) => setNumChildren(Number(e.target.value))} className="w-full p-3 rounded border" />
                </div>
                <div>
                    <label className="block mb-2">Vârsta Copilului</label>
                    <input type="number" className="w-full p-3 rounded border" />
                </div>
            </div>
            <div className="mt-8 text-center">
                <p className="text-2xl font-bold">Total: {calculatePrice(numChildren)} RON</p>
                <p className="text-sm text-gray-500 mt-2">*Prețul include mâncare (pizza/pui) și băuturi.</p>
            </div>
        </div>
    </div>
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      description="Alegeți pachetul potrivit pentru petrecerea micuțului tău."
      plans={[
        { id: "p1", badge: "Standard", price: "1100 RON", subtitle: "Pentru 10 copii", features: ["Mâncare inclusă", "Băuturi incluse"], buttons: [{ text: "Rezervă", href: "#contact" }] },
        { id: "p2", badge: "Premium", price: "1400 RON", subtitle: "Pentru 15 copii", features: ["Toate beneficiile", "Gazdă"], buttons: [{ text: "Rezervă", href: "#contact" }] },
      ]}
      title="Prețuri flexibile"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Rezervă petrecerea"
      description="Trimite solicitarea ta"
      inputs={[{ name: "name", type: "text", placeholder: "Nume" }, { name: "message", type: "text", placeholder: "Detalii" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[{ items: [{ label: "Acasă", href: "#home" }, { label: "Calculator", href: "#booking" }] }]}
      logoText="MAISON PLAY"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}