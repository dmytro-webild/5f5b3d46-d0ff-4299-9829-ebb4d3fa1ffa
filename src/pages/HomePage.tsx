import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import FeaturesBentoWidgets from "@/components/sections/features/FeaturesBentoWidgets";
import GalleryTiltCards from "@/components/sections/gallery/GalleryTiltCards";
import PricingTrayPlans from "@/components/sections/pricing/PricingTrayPlans";
import TestimonialSpotlightCarousel from "@/components/sections/testimonial/TestimonialSpotlightCarousel";
import FaqTrayAccordion from "@/components/sections/faq/FaqTrayAccordion";
import ContactDarkFormCard from "@/components/sections/contact/ContactDarkFormCard";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import LoaderChipFill from "@/components/loaders/LoaderChipFill";
import { Link } from "react-router-dom";

const SEVENFOLD_LOGO = "https://storage.googleapis.com/webild/users/user_3MBwI3XVBvHxlYLTnmPGfX8TZQZ/uploaded-1794908799837-b1l2ehmp.png";

export default function HomePage() {
  return (
    <>
      <ScrollToneBackdrop />
      <LoaderChipFill label="Sevenfold" />

      {/* Hero Header with Logo Showcase */}
      <div id="home" data-webild-section="HeroBoardFrame" data-webild-section-id="HeroBoardFrame-1" data-section="home">
        <div className="pt-8 text-center flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-3 bg-[#101B35]/80 border border-[#1C2B4B] px-4 py-2 rounded-full shadow-lg backdrop-blur-md mb-2">
            <img src={SEVENFOLD_LOGO} alt="Sevenfold Logo" className="h-8 w-auto object-contain" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F0BB5D]">BY VELTRIX TECHNOLOGIES</span>
          </div>
        </div>

        <HeroBoardFrame
          className="bg-transparent pt-4"
          tag="Faith. Community. Growth."
          title="One Faith. One Community. A Connected Generation."
          description="Sevenfold is a next-generation Christian digital ecosystem developed by Veltrix Technologies. Connect churches, believers, and ministries across a beautifully unified platform."
          primaryButton={{
            text: "Explore Ecosystem",
            href: "/community"
          }}
          secondaryButton={{
            text: "About Sevenfold",
            href: "/about"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/abstract-technology-background-concept_1194-617406.jpg"
          imageAlt="Sevenfold Christian digital network interface"
          introDelay={0.3}
          kpis={[
            {
              label: "Active Believers",
              value: "50,000+",
              delta: "+24%",
              trend: [12, 18, 24, 32, 41, 50]
            },
            {
              label: "Study Satisfaction",
              value: "98%",
              delta: "+4 pts"
            },
            {
              label: "Churches Connected",
              value: "850+",
              trend: [20, 35, 50, 68, 85]
            }
          ]}
        />
      </div>

      {/* Quick Access Quick Nav Banner */}
      <section className="py-8 bg-[#101B35]/40 border-y border-[#1C2B4B]/60">
        <div className="w-[var(--container)] mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
          {[
            { label: "About Us", path: "/about", icon: "🏛️" },
            { label: "Community", path: "/community", icon: "🤝" },
            { label: "Announcements", path: "/announcements", icon: "📢" },
            { label: "Faith & AI", path: "/faith-bible", icon: "📖" },
            { label: "Guidance", path: "/guidance", icon: "🕊️" },
            { label: "Events & Camps", path: "/events", icon: "⛺" },
            { label: "Resources", path: "/resources", icon: "📚" },
            { label: "Contact Us", path: "/contact", icon: "✉️" },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#101B35] border border-[#1C2B4B] hover:border-[#F0BB5D] hover:bg-[#101B35]/90 transition-all duration-300 group"
            >
              <span className="text-xl mb-1 group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="text-xs font-medium text-[#FEF9EE] group-hover:text-[#F0BB5D] truncate w-full">{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Core Features Bento */}
      <div id="services" data-webild-section="FeaturesBentoWidgets" data-webild-section-id="FeaturesBentoWidgets-1" data-section="services" data-tone="deep" data-gallery>
        <FeaturesBentoWidgets
          className="bg-transparent"
          tag="Core Platform Modules"
          title="Every tool for your spiritual journey"
          description="Purpose-built digital architecture for personal devotionals, small groups, youth networks, and church leadership."
          backgroundImageSrc="https://img.b2bpic.net/free-photo/sad-contemplative-person-near-lake_23-2150420650.jpg"
          items={[
            {
              tag: "Scripture & AI",
              title: "Bible & Devotionals",
              description: "Structured scripture reading plans, verse reflections, and instant AI Sabbath School study prep.",
              tags: ["Scripture", "AI Study", "Devotionals"]
            },
            {
              title: "Sevenfold AI Assistant",
              description: "Intelligent Biblical assistant for contextual answers, sermon prep, and young adult mentorship.",
              value: "24/7",
              valueLabel: "AI spiritual guidance & study help"
            },
            {
              title: "Fellowship & Groups",
              description: "Connect with local church members, life stage groups, and youth & Pathfinder ministries.",
              imageSrc: "https://img.b2bpic.net/free-photo/preadolescent-girls-focused-literary-analysis-essay-writing-library_482257-123624.jpg",
              imageAlt: "Believers engaging in Bible study"
            },
            {
              title: "Church Leadership Suite",
              description: "Organize events, push live announcements, and coordinate ministry teams effortlessly.",
              rows: [
                { label: "Youth Ministry Event", value: "Scheduled" },
                { label: "Sabbath School Lesson", value: "Ready" },
                { label: "Prayer Request Hub", value: "Active" }
              ]
            },
            {
              title: "Tailored Growth Pathways",
              description: "Personalized spiritual growth pathways tuned for teens, young adults, and senior leaders.",
              imageSrc: "https://img.b2bpic.net/free-photo/young-woman-writing-planner-cafe-table-morning_1098-20099.jpg",
              imageAlt: "Personal prayer journal and planner"
            },
            {
              title: "Unified Ecosystem",
              description: "Connecting churches, ministries, and young adults into one seamless digital experience.",
              value: "100%",
              valueLabel: "integrated Christian platform"
            }
          ]}
        />
      </div>

      {/* Gallery Showcase */}
      <div id="gallery-tilt-cards" data-webild-section="GalleryTiltCards" data-webild-section-id="GalleryTiltCards-1" data-section="gallery-tilt-cards">
        <GalleryTiltCards
          tag="Ecosystem Highlights"
          title="Explore the Sevenfold Digital Experience"
          description="Discover how Sevenfold connects scripture, community engagement, and youth mentorship."
          items={[
            {
              title: "Intelligent Scripture & Lesson Assistant",
              tag: "Sevenfold AI",
              date: "Faith & Bible",
              description: "Contextual answers for Bible study, lesson preparation, and daily devotional reflections.",
              href: "/faith-bible",
              imageSrc: "https://img.b2bpic.net/free-photo/lady-holds-tablet-with-mockup-template_482257-81554.jpg",
              imageAlt: "Sevenfold AI scripture interface"
            },
            {
              title: "Connected Ministry Networks",
              tag: "Community Hub",
              date: "Community",
              description: "Unite youth, adults, and ministry leaders across interactive group feeds and church announcements.",
              href: "/community",
              imageSrc: "https://img.b2bpic.net/free-photo/adult-businesswoman-checking-tablet_23-2148452642.jpg",
              imageAlt: "Community ministry network"
            },
            {
              title: "Personalized Daily Scripture Plans",
              tag: "Devotionals",
              date: "Faith & Bible",
              description: "Tailored reading plans and quiet-time guides structured around your life stage and personal goals.",
              href: "/faith-bible",
              imageSrc: "https://img.b2bpic.net/free-photo/fitness-yoga-tourist-leisure-natural_1150-1004.jpg",
              imageAlt: "Daily scripture devotionals"
            },
            {
              title: "Youth Camps & Pathfinder Tracks",
              tag: "Events & Camps",
              date: "Events",
              description: "Specialized youth retreats, camporee registration, and mentorship tracks designed for young believers.",
              href: "/events",
              imageSrc: "https://img.b2bpic.net/free-photo/lovely-girl-with-tablet-sitting-sofa_23-2147833837.jpg",
              imageAlt: "Youth camps and events"
            },
            {
              title: "Church Administration & Leadership",
              tag: "Leadership",
              date: "About Sevenfold",
              description: "Streamlined tools for church leaders to plan events, manage teams, and publish Sabbath announcements.",
              href: "/about",
              imageSrc: "https://img.b2bpic.net/free-photo/two-smiling-male-office-workers-working-with-laptop_171337-5836.jpg",
              imageAlt: "Church administration dashboard"
            },
            {
              title: "Guidance & Spiritual Support",
              tag: "Spiritual Support",
              date: "Guidance",
              description: "Pastoral care helplines, prayer chain requests, and encouraging articles for life challenges.",
              href: "/guidance",
              imageSrc: "https://img.b2bpic.net/free-photo/woman-working-from-home_23-2148916096.jpg",
              imageAlt: "Guidance and support counseling"
            }
          ]}
          linkLabel="Explore Section"
          ariaLabel="Sevenfold ecosystem feature showcase"
        />
      </div>

      {/* Pricing Plans */}
      <div id="pricing" data-webild-section="PricingTrayPlans" data-webild-section-id="PricingTrayPlans-1" data-section="pricing">
        <PricingTrayPlans
          tag="Community & Church Access"
          title="Simple access for"
          highlight="every congregation"
          description="Empower your spiritual growth and connect your ministry with tailored platform access."
          items={[
            {
              name: "Personal Believer",
              description: "For individuals seeking personal devotionals, scripture study, and community connections.",
              price: "Free",
              period: "forever, single user",
              features: [
                "Sevenfold AI study assistant",
                "Daily Bible verses & devotionals",
                "Personal prayer journaling",
                "Community forum & events access"
              ],
              cta: {
                text: "Get Started Free",
                href: "/contact"
              }
            },
            {
              name: "Ministry & Small Group",
              description: "For small group leaders, youth directors, and Sabbath School teachers.",
              price: "$29",
              period: "per month",
              highlighted: true,
              includesPrevious: true,
              features: [
                "Everything in Personal",
                "Group devotional creation",
                "Ministry event coordination",
                "Sabbath School lesson prep",
                "Priority Sevenfold AI processing"
              ],
              cta: {
                text: "Start 14-Day Trial",
                href: "/contact"
              }
            },
            {
              name: "Church Campus Network",
              description: "For congregations expanding digital community reach and administration.",
              price: "$99",
              period: "per campus / month",
              includesPrevious: true,
              features: [
                "Everything in Ministry",
                "Unlimited member accounts",
                "Custom church dashboard",
                "Community announcements portal",
                "Dedicated Veltrix onboarding"
              ],
              cta: {
                text: "Connect Your Church",
                href: "/contact"
              }
            }
          ]}
          enterprise={{
            label: "Multi-Campus Enterprise",
            title: "Need custom multi-campus church administration?",
            description: "Custom integrations, dedicated support, and administrative security built by Veltrix Technologies (Founders: Mihle Ncube & Munyaradzi Gaadzikwa).",
            cta: {
              text: "Contact Veltrix Sales",
              href: "/contact"
            }
          }}
        />
      </div>

      {/* Testimonials */}
      <div id="customers" data-webild-section="TestimonialSpotlightCarousel" data-webild-section-id="TestimonialSpotlightCarousel-1" data-section="customers">
        <TestimonialSpotlightCarousel
          tag="Member Stories"
          title="Loved by believers and church leaders"
          items={[
            {
              company: "Grace Community Church",
              quote: "Sevenfold transformed how our youth group connects throughout the week. Daily devotionals and interactive Bible study features keep everyone engaged beyond Sunday service.",
              name: "Kevin Bennett",
              role: "Youth Director",
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-smiley-man-with-backpack_23-2149915917.jpg",
              imageAlt: "Kevin Bennett, Youth Director",
              stats: [
                { label: "Youth Engagement", value: "Up 85%" },
                { label: "Weekly Active Members", value: "450 members" }
              ]
            },
            {
              company: "Veltrix Fellowship",
              quote: "The Sevenfold AI assistant helps me break down complex scripture into relatable discussion points every single week. It has revitalized our small group meetings completely.",
              name: "Molly Barnes",
              role: "Small Group Leader",
              imageSrc: "https://img.b2bpic.net/free-photo/cheerful-young-businesswoman-wearing-eyeglasses_1262-4761.jpg",
              imageAlt: "Molly Barnes, Small Group Leader",
              stats: [
                { label: "Group Participation", value: "Doubled" },
                { label: "Study Efficiency", value: "3x faster" }
              ]
            },
            {
              company: "Hope Fellowship Network",
              quote: "Managing ministry announcements, event schedules, and community outreach in one unified space saves our leadership team countless hours every month.",
              name: "Ethan Carter",
              role: "Church Administrator",
              imageSrc: "https://img.b2bpic.net/free-photo/stylish-bearded-male-with-backpack-city-park_613910-11363.jpg",
              imageAlt: "Ethan Carter, Church Administrator",
              stats: [
                { label: "Admin Time Saved", value: "15 hrs weekly" },
                { label: "Event Attendance", value: "Up 40%" }
              ]
            }
          ]}
        />
      </div>

      {/* FAQ */}
      <div id="faq-tray-accordion-1" data-webild-section="FaqTrayAccordion" data-webild-section-id="FaqTrayAccordion-1" data-section="faq-tray-accordion-1">
        <FaqTrayAccordion
          tag="Common Questions"
          title="Everything you need to"
          highlight="know"
          items={[
            {
              title: "What is Sevenfold AI?",
              description: "Sevenfold AI is an intelligent Christian learning assistant built into the platform that helps explain scripture, generate custom study plans, and organize Sabbath School lesson materials."
            },
            {
              title: "Can church leaders publish announcements and events?",
              description: "Yes. Sevenfold provides specialized church dashboard tools for publishing community announcements, organizing ministry groups, and managing event registrations."
            },
            {
              title: "Is Sevenfold designed for individual believers?",
              description: "Yes! Individuals access daily devotionals, track reading plans, engage in community prayer chains, and connect with local fellowship groups."
            },
            {
              title: "How do youth and Pathfinder groups engage on Sevenfold?",
              description: "Young believers can join dedicated youth ministry spaces, participate in guided faith discussions, and register for regional camps and retreats."
            },
            {
              title: "Who developed the Sevenfold platform?",
              description: "Sevenfold is developed by Veltrix Technologies, founded by Mihle Ncube and Munyaradzi Gaadzikwa, with a mission to empower Christian digital engagement globally."
            }
          ]}
          help={{
            label: "Veltrix Support",
            title: "Have questions about onboarding?",
            description: "The Veltrix Technologies team is here to assist your church or ministry group.",
            cta: {
              text: "Contact Veltrix Team",
              href: "/contact"
            },
            imageSrc: "https://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1631.jpg",
            imageAlt: "Veltrix support representative"
          }}
        />
      </div>

      {/* Contact CTA */}
      <div id="contact-dark-form-card" data-webild-section="ContactDarkFormCard" data-webild-section-id="ContactDarkFormCard-1" data-section="contact-dark-form-card">
        <ContactDarkFormCard
          title="Begin Your Spiritual Journey with Sevenfold"
          formTitle="Connect with Veltrix Technologies"
          fields={{
            name: "Full Name",
            email: "Email Address",
            company: "Church or Ministry",
            message: "How can we assist your community?"
          }}
          placeholders={{
            name: "Mihle Ncube",
            email: "support@veltrixtechnologies.com",
            company: "Grace Community Church",
            message: "Tell us about your church or spiritual growth goals..."
          }}
          submitText="Join Sevenfold Ecosystem"
          successText="Thank you! The Veltrix Technologies team will reach out shortly."
          imageSrc="https://img.b2bpic.net/free-photo/woman-using-digital-tablet-technology_23-2149491795.jpg"
          imageAlt="Believer interacting with Sevenfold digital platform"
          ariaLabel="Sevenfold account creation and inquiry form"
        />
      </div>
    </>
  );
}
