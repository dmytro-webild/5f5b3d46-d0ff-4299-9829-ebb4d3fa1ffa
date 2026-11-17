import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import FaqTrayAccordion from "@/components/sections/faq/FaqTrayAccordion";
import ContactDarkFormCard from "@/components/sections/contact/ContactDarkFormCard";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";

const SEVENFOLD_LOGO = "https://storage.googleapis.com/webild/users/user_3MBwI3XVBvHxlYLTnmPGfX8TZQZ/uploaded-1794908799837-b1l2ehmp.png";

export default function ContactPage() {
  return (
    <>
      <ScrollToneBackdrop />

      {/* Contact Hero */}
      <div id="contact-hero" data-webild-section="ContactHero" data-section="contact-hero">
        <div className="pt-8 text-center flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-3 bg-[#101B35]/80 border border-[#1C2B4B] px-4 py-2 rounded-full shadow-lg backdrop-blur-md mb-2">
            <img src={SEVENFOLD_LOGO} alt="Sevenfold Logo" className="h-8 w-auto object-contain" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F0BB5D]">VELTRIX TECHNOLOGIES</span>
          </div>
        </div>

        <HeroBoardFrame
          className="bg-transparent pt-4"
          tag="Get in Touch"
          title="We Are Here to Connect & Support Your Ministry"
          description="Have questions about onboarding your church, integrating Sevenfold AI, or joining our community network? The Veltrix Technologies team is ready to assist."
          primaryButton={{
            text: "Send a Message",
            href: "#contact-form-main"
          }}
          secondaryButton={{
            text: "Explore FAQ",
            href: "#contact-faq"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/two-smiling-male-office-workers-working-with-laptop_171337-5836.jpg"
          imageAlt="Veltrix Technologies support team"
          introDelay={0.2}
          kpis={[
            {
              label: "Average Response Time",
              value: "< 2 Hours",
              delta: "Fast"
            },
            {
              label: "Support Rating",
              value: "99.4%",
              delta: "Top Tier"
            },
            {
              label: "Direct Founders Line",
              value: "Veltrix",
              delta: "Available"
            }
          ]}
        />
      </div>

      {/* Direct Contact Cards */}
      <section className="py-12 bg-[#101B35]/50 border-y border-[#1C2B4B]">
        <div className="w-[var(--container)] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#101B35] border border-[#1C2B4B] rounded-2xl p-6 text-center shadow-lg hover:border-[#F0BB5D] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#010519] border border-[#F0BB5D] text-[#F0BB5D] flex items-center justify-center text-xl mx-auto mb-3">
              ✉️
            </div>
            <h3 className="font-serif text-xl text-[#FEF9EE]">Email Support</h3>
            <p className="text-xs text-muted-foreground mt-1">For general inquiries, AI assistance, & church onboarding</p>
            <a href="mailto:support@veltrixtechnologies.com" className="inline-block mt-3 text-sm font-semibold text-[#F0BB5D] hover:underline">
              support@veltrixtechnologies.com
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-[#101B35] border border-[#1C2B4B] rounded-2xl p-6 text-center shadow-lg hover:border-[#F0BB5D] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#010519] border border-[#F0BB5D] text-[#F0BB5D] flex items-center justify-center text-xl mx-auto mb-3">
              👥
            </div>
            <h3 className="font-serif text-xl text-[#FEF9EE]">Leadership & Founders</h3>
            <p className="text-xs text-muted-foreground mt-1">Mihle Ncube & Munyaradzi Gaadzikwa</p>
            <p className="mt-3 text-sm font-semibold text-[#FEF9EE]">
              Veltrix Technologies Innovation Hub
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#101B35] border border-[#1C2B4B] rounded-2xl p-6 text-center shadow-lg hover:border-[#F0BB5D] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#010519] border border-[#F0BB5D] text-[#F0BB5D] flex items-center justify-center text-xl mx-auto mb-3">
              📞
            </div>
            <h3 className="font-serif text-xl text-[#FEF9EE]">Phone & Helpline</h3>
            <p className="text-xs text-muted-foreground mt-1">Pastoral care helpline & church sales</p>
            <a href="tel:+18005547383" className="inline-block mt-3 text-sm font-semibold text-[#F0BB5D] hover:underline">
              +1 (800) 554-7383
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <div id="contact-form-main" data-webild-section="ContactDarkFormCard" data-section="contact-form-main">
        <ContactDarkFormCard
          title="Connect with Veltrix Technologies"
          formTitle="Send Us a Direct Message"
          fields={{
            name: "Full Name",
            email: "Email Address",
            company: "Church / Ministry / Organization",
            message: "How can Veltrix Technologies assist you?"
          }}
          placeholders={{
            name: "Mihle Ncube",
            email: "support@veltrixtechnologies.com",
            company: "Grace Community Church",
            message: "We would like a demo of the Sevenfold AI assistant for our Sabbath School leaders..."
          }}
          submitText="Submit Inquiry"
          successText="Thank you! The Veltrix Technologies team has received your message and will reply shortly."
          imageSrc="https://img.b2bpic.net/free-photo/woman-using-digital-tablet-technology_23-2149491795.jpg"
          imageAlt="Contact form background"
        />
      </div>

      {/* Contact FAQ */}
      <div id="contact-faq" data-webild-section="FaqTrayAccordion" data-section="contact-faq">
        <FaqTrayAccordion
          tag="Support FAQ"
          title="Frequently Asked Questions about"
          highlight="getting started"
          items={[
            {
              title: "How long does church onboarding take?",
              description: "Most churches complete setup in under 24 hours. Our team at Veltrix Technologies provides direct assistance to upload member directories, setup announcement channels, and train leadership."
            },
            {
              title: "Can we request custom features for our church network?",
              description: "Yes! Veltrix Technologies works closely with church conferences and multi-campus networks to build custom integrations and administrative modules."
            },
            {
              title: "How can I reach Mihle Ncube or Munyaradzi Gaadzikwa?",
              description: "You can submit an inquiry through our contact form above or email support@veltrixtechnologies.com directly with the subject line 'Attention: Founders'."
            }
          ]}
          help={{
            label: "Dedicated Support",
            title: "Prefer a live phone consultation?",
            description: "Schedule a 15-minute call with our Veltrix Technologies team.",
            cta: {
              text: "Call +1 (800) 554-7383",
              href: "tel:+18005547383"
            },
            imageSrc: "https://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1631.jpg",
            imageAlt: "Support specialist"
          }}
        />
      </div>
    </>
  );
}
