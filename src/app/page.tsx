"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
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
        {
          name: "Acasă",          id: "home"},
        {
          name: "Despre",          id: "about"},
        {
          name: "Prețuri",          id: "pricing"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="MAISON PLAY"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated"}}
      title="Petreceri aniversare de neuitat la Maison Play"
      description="Locație premium, mâncare delicioasă și distracție fără limite pentru micuții tăi. Rezervă experiența perfectă pentru petrecere chiar azi."
      buttons={[
        {
          text: "Rezervă Acum",          href: "#contact"},
      ]}
      carouselItems={[
        { id: "c1", imageSrc: "http://img.b2bpic.net/free-photo/soft-pastel-hues-room-kids_23-2151690358.jpg" },
        { id: "c2", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D5csfS2eM56HgjLvoOJW5Mm44W/uploaded-1777578546831-esmkhuyd.jpg" },
        { id: "c3", imageSrc: "http://img.b2bpic.net/free-photo/confetti-made-circle-center-put-party_23-2147593120.jpg" },
        { id: "c4", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D5csfS2eM56HgjLvoOJW5Mm44W/uploaded-1777578699890-mxrrboe1.jpg" },
        { id: "c5", imageSrc: "http://img.b2bpic.net/free-photo/balloons-triangle-shape-paper-yellow-background_23-2147889765.jpg" },
        { id: "c6", imageSrc: "http://img.b2bpic.net/free-photo/close-up-dinosaurs-animal-figure-toys-sweet-candy-sprinkles_53876-41760.jpg" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Experiență de excelență la Maison Play"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { id: "f1", title: "Pizza și Pui Proaspăt", author: "Maison Play", description: "Opțiuni gustoase de mâncare, inclusiv pizza sau pui prăjit, special pentru micii gurmanzi.", tags: ["Mâncare", "Proaspăt"], imageSrc: "http://img.b2bpic.net/free-photo/happy-little-girl-looks-pizza-with-appetite_169016-18836.jpg" },
        { id: "f2", title: "Băuturi Răcoritoare", author: "Maison Play", description: "Băuturi din partea casei pentru toți invitații la petrecere.", tags: ["Băuturi", "Incluse"], imageSrc: "http://img.b2bpic.net/free-photo/family-eating-pizza-outdoors-high-angle_23-2149931076.jpg" },
        { id: "f3", title: "Rezervare Fără Stres", author: "Maison Play", description: "Calculator online simplu și proces de rezervare transparent.", tags: ["Simplu", "Rapid"], imageSrc: "http://img.b2bpic.net/free-photo/young-family-moving-into-new-home-eating-pizza_23-2149196318.jpg" },
      ]}
      title="Tot ce ai nevoie, inclus"
      description="Pachetele noastre aniversare sunt complet echipate pentru confortul tău și bucuria copilului tău."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",          badge: "Standard",          price: "1100 RON",          subtitle: "Pentru 10 copii",          features: ["Mâncare inclusă", "Băuturi incluse", "Distracție aniversară"],
          buttons: [{ text: "Rezervă 10", href: "#contact" }],
        },
        {
          id: "p2",          badge: "Premium",          price: "1400 RON",          subtitle: "Pentru 15 copii",          features: ["Toate beneficiile Standard", "Spațiu suplimentar", "Gazdă petrecere"],
          buttons: [{ text: "Rezervă 15", href: "#contact" }],
        },
        {
          id: "p3",          badge: "Ultimate",          price: "1700 RON",          subtitle: "Pentru 20 copii",          features: ["Toate beneficiile Premium", "Acces total locație", "Rezervare prioritară"],
          buttons: [{ text: "Rezervă 20", href: "#contact" }],
        },
      ]}
      title="Prețuri flexibile pentru petreceri"
      description="Pornind de la 10 copii, planurile noastre se adaptează perfect nevoilor tale."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "t1", name: "Elena", handle: "@elena", testimonial: "Cea mai bună petrecere, copiii au adorat pizza!", imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-woman-looking-red-gift-box-given-by-her-senior-mother_23-2148041444.jpg" },
        { id: "t2", name: "Andrei", handle: "@andrei", testimonial: "Totul a fost perfect organizat.", imageSrc: "http://img.b2bpic.net/free-photo/family-beach_1303-3578.jpg" },
        { id: "t3", name: "Maria", handle: "@maria", testimonial: "O experiență fără stres pentru părinți.", imageSrc: "http://img.b2bpic.net/free-photo/pretty-smiling-woman-with-glass-whiskey_23-2148037539.jpg" },
        { id: "t4", name: "Ion", handle: "@ion", testimonial: "Locație excelentă, personal profesionist.", imageSrc: "http://img.b2bpic.net/free-photo/children-motherhood-fun-hobby-concept-indoor-portrait-excited-emotional-dark-skinned-little-boy-standing-bed-with-hand-up_343059-3866.jpg" },
        { id: "t5", name: "Ana", handle: "@ana", testimonial: "Copilul meu a avut petrecerea visurilor sale.", imageSrc: "http://img.b2bpic.net/free-photo/fathers-day-celebration-with-kid_23-2151175729.jpg" },
      ]}
      title="Poveștile părinților"
      description="Vezi de ce părinții adoră să sărbătorească cu noi."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Cum se calculează prețul?", content: "10 copii costă 1100 RON, fiecare copil extra până la 14 costă 80 RON. Același sistem se aplică grupurilor mai mari." },
        { id: "q2", title: "Mâncarea este inclusă?", content: "Da, pizza sau pui, plus băuturi din partea casei." },
        { id: "q3", title: "Pot aduce tortul meu?", content: "Da, ești binevenit să aduci tortul tău aniversar!" },
      ]}
      title="Întrebări Frecvente"
      description="Mai ai întrebări? Suntem aici să ajutăm."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Rezervă petrecerea ta"
      description="Oferă detaliile necesare și îți vom trimite o ofertă de preț."
      inputs={[
        { name: "name", type: "text", placeholder: "Numele Tău" },
        { name: "child_age", type: "number", placeholder: "Vârsta Copilului" },
        { name: "num_children", type: "number", placeholder: "Număr Copii" },
        { name: "num_parents", type: "number", placeholder: "Număr Părinți" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/attractive-happy-young-bearded-man-trendy-hat-texting-messages-via-social-networks-browsing-internet-using-free-wifi-his-electronic-device-coffee-break-restaurant_273609-1934.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "Acasă", href: "#home" }, { label: "Prețuri", href: "#pricing" }] },
        { items: [{ label: "Contact", href: "#contact" }] },
      ]}
      logoText="MAISON PLAY"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}