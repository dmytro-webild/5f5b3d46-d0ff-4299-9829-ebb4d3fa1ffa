import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import FeaturesBentoWidgets from "@/components/sections/features/FeaturesBentoWidgets";
import TestimonialSpotlightCarousel from "@/components/sections/testimonial/TestimonialSpotlightCarousel";
import ContactDarkFormCard from "@/components/sections/contact/ContactDarkFormCard";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";

const SEVENFOLD_LOGO = "https://storage.googleapis.com/webild/users/user_3MBwI3XVBvHxlYLTnmPGfX8TZQZ/uploaded-1794908799837-b1l2ehmp.png";

export default function AboutPage() {
  return (
    <>
      <ScrollToneBackdrop />

      {/* About Hero */}
      <div id="about-hero" data-webild-section="AboutHero" data-section="about-hero">
        <div className="pt-8 text-center flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-3 bg-[#101B35]/80 border border-[#1C2B4B] px-4 py-2 rounded-full shadow-lg backdrop-blur-md mb-2">
            <img src={SEVENFOLD_LOGO} alt="Sevenfold Logo" className="h-8 w-auto object-contain" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F0BB5D]">VELTRIX TECHNOLOGIES</span>
          </div>
        </div>

        <HeroBoardFrame
          className="bg-transparent pt-4"
          tag="Our Vision & Identity"
          title="Empower Faith. Build Community. Inspire Growth."
          description="Sevenfold is a next-generation Christian digital ecosystem developed by Veltrix Technologies. We bridge timeless Biblical truths with modern, intuitive SaaS technology to connect believers worldwide."
          primaryButton={{
            text: "Explore Community",
            href: "/community"
          }}
          secondaryButton={{
            text: "Contact Founders",
            href: "/contact"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/two-smiling-male-office-workers-working-with-laptop_171337-5836.jpg?_wi=1"
          imageAlt="Veltrix Technologies team developing Sevenfold platform"
          introDelay={0.2}
          kpis={[
            {
              label: "Founding Vision",
              value: "2026",
              delta: "Veltrix"
            },
            {
              label: "Global Believers",
              value: "50k+",
              delta: "Growing"
            },
            {
              label: "Connected Ministries",
              value: "850+",
              delta: "Active"
            }
          ]}
        />
      </div>

      {/* Founder Spotlight */}
      <section className="py-16 bg-[#101B35]/50 border-y border-[#1C2B4B]">
        <div className="w-[var(--container)] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F0BB5D]">LEADERSHIP & FOUNDERS</span>
            <h2 className="text-3xl sm:text-4xl font-serif mt-2 text-[#FEF9EE]">Pioneered by Veltrix Technologies</h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Founded by visionary engineers and Christian leaders Mihle Ncube and Munyaradzi Gaadzikwa, Sevenfold was born out of a desire to create a digital home that feels as refined as Apple, as intuitive as Notion, and deeply rooted in faith.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder 1 */}
            <div className="bg-[#101B35] border border-[#1C2B4B] rounded-2xl p-8 flex flex-col items-center text-center shadow-xl hover:border-[#F0BB5D] transition-all">
              <div className="w-24 h-24 rounded-full bg-[#010519] border-2 border-[#F0BB5D] flex items-center justify-center text-3xl font-serif text-[#F0BB5D] mb-4">
                MN
              </div>
              <h3 className="text-2xl font-serif text-[#FEF9EE]">Mihle Ncube</h3>
              <p className="text-xs uppercase tracking-wider text-[#F0BB5D] font-semibold mt-1">Co-Founder & Technology Architect</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                "We built Sevenfold to eliminate digital friction between churches, members, and ministries. Our goal is to provide software that elevates spiritual practice, fellowship, and personal devotions."
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-[#101B35] border border-[#1C2B4B] rounded-2xl p-8 flex flex-col items-center text-center shadow-xl hover:border-[#F0BB5D] transition-all">
              <div className="w-24 h-24 rounded-full bg-[#010519] border-2 border-[#F0BB5D] flex items-center justify-center text-3xl font-serif text-[#F0BB5D] mb-4">
                MG
              </div>
              <h3 className="text-2xl font-serif text-[#FEF9EE]">Munyaradzi Gaadzikwa</h3>
              <p className="text-xs uppercase tracking-wider text-[#F0BB5D] font-semibold mt-1">Co-Founder & Ecosystem Strategist</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                "Sevenfold is designed for a connected generation. By combining Biblical principles with AI-assisted learning and community networks, we empower youth and leadership alike."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values & Principles */}
      <div id="about-values" data-webild-section="FeaturesBentoWidgets" data-section="about-values">
        <FeaturesBentoWidgets
          className="bg-transparent"
          tag="Brand Identity & Pillars"
          title="Designed for modern spiritual clarity"
          description="We avoid clutter, generic clip art, and outdated systems in favor of clean typography, serene midnight navy tones, and warm gold accents."
          backgroundImageSrc="https://img.b2bpic.net/free-photo/young-woman-writing-planner-cafe-table-morning_1098-20099.jpg"
          items={[
            {
              tag: "Spiritual Depth",
              title: "Biblical Integrity",
              description: "Rooted in scripture, offering reliable daily devotionals, Sabbath study aids, and pastoral support tools.",
              tags: ["Scripture", "Truth", "Devotions"]
            },
            {
              title: "SaaS-Level Engineering",
              description: "High-performance architecture built for instant responsiveness across iPhone, Android, iPad, and desktop.",
              value: "99.9%",
              valueLabel: "uptime & encrypted data privacy"
            },
            {
              title: "Minimalist Elegance",
              description: "Deep midnight navy (#010519), radiant gold (#F0BB5D), and ivory (#FEF9EE) visual aesthetics.",
              imageSrc: "https://img.b2bpic.net/free-photo/abstract-technology-background-concept_1194-617406.jpg?_wi=1",
              imageAlt: "Minimalist dark aesthetic interface"
            },
            {
              title: "Sevenfold Symbolism",
              description: "Inspired by the number seven—representing completion, spiritual perfection, and total rest in God.",
              rows: [
                { label: "1. Faith", value: "Foundation" },
                { label: "2. Community", value: "Fellowship" },
                { label: "3. Growth", value: "Maturity" }
              ]
            },
            {
              title: "Youth & Pathfinder Focus",
              description: "Engaging interactive pathways crafted specifically for teens, young adults, and student leaders.",
              imageSrc: "https://img.b2bpic.net/free-photo/lovely-girl-with-tablet-sitting-sofa_23-2147833837.jpg?_wi=1",
              imageAlt: "Youth engaging on digital tablet"
            },
            {
              title: "Veltrix Innovation Hub",
              description: "Continuously adding state-of-the-art AI assistance and church management tools.",
              value: "2026+",
              valueLabel: "future-proofed platform roadmap"
            }
          ]}
        />
      </div>

      {/* Leadership Stories */}
      <div id="about-testimonials" data-webild-section="TestimonialSpotlightCarousel" data-section="about-testimonials">
        <TestimonialSpotlightCarousel
          tag="Partner Endorsements"
          title="What pastors and leaders say about Veltrix"
          items={[
            {
              company: "Grace Community Fellowship",
              quote: "Veltrix Technologies has achieved something rare: software that feels reverent yet technologically cutting-edge. Sevenfold is the platform we have been waiting for.",
              name: "Pastor David Miller",
              role: "Senior Pastor",
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-smiley-man-with-backpack_23-2149915917.jpg?_wi=1",
              imageAlt: "Pastor David Miller",
              stats: [
                { label: "Church Growth", value: "35% higher" },
                { label: "Active Families", value: "1,200+" }
              ]
            },
            {
              company: "African Youth Ministries Network",
              quote: "Mihle Ncube and Munyaradzi Gaadzikwa understood the exact needs of our young people. Sevenfold brings energy, clarity, and deep community to youth ministry.",
              name: "Sarah Jenkins",
              role: "Youth Director",
              imageSrc: "https://img.b2bpic.net/free-photo/cheerful-young-businesswoman-wearing-eyeglasses_1262-4761.jpg?_wi=1",
              imageAlt: "Sarah Jenkins",
              stats: [
                { label: "Youth Engaged", value: "8,500+" },
                { label: "Retention Rate", value: "94%" }
              ]
            }
          ]}
        />
      </div>

      {/* Contact Section */}
      <div id="about-contact" data-webild-section="ContactDarkFormCard" data-section="about-contact">
        <ContactDarkFormCard
          title="Connect with Veltrix Technologies"
          formTitle="Partner with Sevenfold"
          fields={{
            name: "Your Name",
            email: "Email Address",
            company: "Organization / Church",
            message: "Message to Founders"
          }}
          placeholders={{
            name: "Mihle Ncube",
            email: "support@veltrixtechnologies.com",
            company: "Grace Community Church",
            message: "I would like to discuss implementing Sevenfold for our church network..."
          }}
          submitText="Send Inquiry to Veltrix"
          successText="Thank you for reaching out! Mihle and Munyaradzi will be in touch shortly."
          imageSrc="https://img.b2bpic.net/free-photo/two-smiling-male-office-workers-working-with-laptop_171337-5836.jpg?_wi=2"
          imageAlt="Veltrix team contact background"
        />
      </div>
    </>
  );
}
