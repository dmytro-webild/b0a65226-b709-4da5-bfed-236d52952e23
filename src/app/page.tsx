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
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="MAISON PLAY"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Unforgettable Birthday Parties at Maison Play"
      description="Premium venue, delicious food, and endless fun for your little ones. Book the perfect party experience today."
      buttons={[
        {
          text: "Book Now",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "c1",
          imageSrc: "http://img.b2bpic.net/free-photo/soft-pastel-hues-room-kids_23-2151690358.jpg",
        },
        {
          id: "c2",
          imageSrc: "http://img.b2bpic.net/free-photo/mandala-artwork-colorful-pattern-background-3d_58702-7036.jpg",
        },
        {
          id: "c3",
          imageSrc: "http://img.b2bpic.net/free-photo/confetti-made-circle-center-put-party_23-2147593120.jpg",
        },
        {
          id: "c4",
          imageSrc: "http://img.b2bpic.net/free-photo/kids-teenagers-birthday-party_23-2147783758.jpg",
        },
        {
          id: "c5",
          imageSrc: "http://img.b2bpic.net/free-photo/balloons-triangle-shape-paper-yellow-background_23-2147889765.jpg",
        },
        {
          id: "c6",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-dinosaurs-animal-figure-toys-sweet-candy-sprinkles_53876-41760.jpg",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Experience Excellence at Maison Play"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Fresh Pizza & Chicken",
          author: "Maison Play",
          description: "Tasty food options including pizza or fried chicken, tailored for hungry kids.",
          tags: [
            "Food",
            "Fresh",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/happy-little-girl-looks-pizza-with-appetite_169016-18836.jpg",
        },
        {
          id: "f2",
          title: "Refreshing Drinks",
          author: "Maison Play",
          description: "Complimentary drinks on the house for everyone at the party.",
          tags: [
            "Drinks",
            "Included",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/family-eating-pizza-outdoors-high-angle_23-2149931076.jpg",
        },
        {
          id: "f3",
          title: "Stress-Free Booking",
          author: "Maison Play",
          description: "Simple online calculator and booking process for transparent pricing.",
          tags: [
            "Easy",
            "Fast",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/young-family-moving-into-new-home-eating-pizza_23-2149196318.jpg",
        },
      ]}
      title="Everything You Need Included"
      description="Our birthday packages come fully equipped for your convenience and your child's joy."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          badge: "Standard",
          price: "1100 RON",
          subtitle: "For 10 children",
          features: [
            "Food included",
            "Drinks included",
            "Birthday fun",
          ],
          buttons: [
            {
              text: "Book 10",
              href: "#contact",
            },
          ],
        },
        {
          id: "p2",
          badge: "Premium",
          price: "1400 RON",
          subtitle: "For 15 children",
          features: [
            "All standard features",
            "Extra space",
            "Party host",
          ],
          buttons: [
            {
              text: "Book 15",
              href: "#contact",
            },
          ],
        },
        {
          id: "p3",
          badge: "Ultimate",
          price: "1700 RON",
          subtitle: "For 20 children",
          features: [
            "All premium features",
            "Full venue access",
            "Priority booking",
          ],
          buttons: [
            {
              text: "Book 20",
              href: "#contact",
            },
          ],
        },
      ]}
      title="Flexible Birthday Pricing"
      description="Starting from 10 children, our plans scale perfectly to your needs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Elena",
          handle: "@elena",
          testimonial: "Best party ever, kids loved the pizza!",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-woman-looking-red-gift-box-given-by-her-senior-mother_23-2148041444.jpg",
        },
        {
          id: "t2",
          name: "Andrei",
          handle: "@andrei",
          testimonial: "Everything was perfectly organized.",
          imageSrc: "http://img.b2bpic.net/free-photo/family-beach_1303-3578.jpg",
        },
        {
          id: "t3",
          name: "Maria",
          handle: "@maria",
          testimonial: "Truly a stress-free experience for parents.",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-smiling-woman-with-glass-whiskey_23-2148037539.jpg",
        },
        {
          id: "t4",
          name: "Ion",
          handle: "@ion",
          testimonial: "Great venue, professional staff.",
          imageSrc: "http://img.b2bpic.net/free-photo/children-motherhood-fun-hobby-concept-indoor-portrait-excited-emotional-dark-skinned-little-boy-standing-bed-with-hand-up_343059-3866.jpg",
        },
        {
          id: "t5",
          name: "Ana",
          handle: "@ana",
          testimonial: "My child had the birthday of their dreams.",
          imageSrc: "http://img.b2bpic.net/free-photo/fathers-day-celebration-with-kid_23-2151175729.jpg",
        },
      ]}
      title="Parent Stories"
      description="See why parents love celebrating with us."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How is price calculated?",
          content: "10 children are 1100 RON, each extra child up to 14 is 80 RON. Same scaling applies to larger groups.",
        },
        {
          id: "q2",
          title: "Is food included?",
          content: "Yes, pizza or chicken, plus drinks on the house.",
        },
        {
          id: "q3",
          title: "Can I bring my own cake?",
          content: "Yes, you are welcome to bring your own birthday cake!",
        },
      ]}
      title="Frequently Asked Questions"
      description="Have more questions? We are here to help."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Book Your Party"
      description="Provide the details, and we will get back to you with a price quote."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
        },
        {
          name: "child_age",
          type: "number",
          placeholder: "Child's Age",
        },
        {
          name: "num_children",
          type: "number",
          placeholder: "Number of Children",
        },
        {
          name: "num_parents",
          type: "number",
          placeholder: "Number of Parents",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/attractive-happy-young-bearded-man-trendy-hat-texting-messages-via-social-networks-browsing-internet-using-free-wifi-his-electronic-device-coffee-break-restaurant_273609-1934.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#home",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="MAISON PLAY"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
