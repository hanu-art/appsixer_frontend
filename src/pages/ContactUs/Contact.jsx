import { useRef } from "react";

import ContactHero from "./section/ContactHero";
import ContactForm from "./section/ContactForm";
import OfficesSection from "./section/OfficesSection";
import ContactCTA from "./section/ContactCTA";

const Contact = () => {
  // 🔗 Form reference (scroll ke liye)
  const formRef = useRef(null);

  // 🎯 Scroll handler (Hero + CTA dono use karenge)
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* HERO */}
      <ContactHero onCTAClick={scrollToForm} />

      {/* FORM */}
      <ContactForm ref={formRef} />

      {/* OFFICES */}
      <OfficesSection />

      {/* FINAL CTA */}
      <ContactCTA onCTAClick={scrollToForm} />
    </>
  );
};

export default Contact
