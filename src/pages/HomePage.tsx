import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import FeaturesBentoWidgets from "@/components/sections/features/FeaturesBentoWidgets";
import GalleryTiltCards from "@/components/sections/gallery/GalleryTiltCards";
import PricingTrayPlans from "@/components/sections/pricing/PricingTrayPlans";
import TestimonialSpotlightCarousel from "@/components/sections/testimonial/TestimonialSpotlightCarousel";
import FaqTrayAccordion from "@/components/sections/faq/FaqTrayAccordion";
import ContactDarkFormCard from "@/components/sections/contact/ContactDarkFormCard";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import LoaderChipFill from "@/components/loaders/LoaderChipFill";

export default function HomePage() {
  return (
    <>
      <ScrollToneBackdrop

      />

      <LoaderChipFill
        label="Sevenfold"
      />

      <div id="home" data-webild-section="HeroBoardFrame" data-webild-section-id="HeroBoardFrame-1" data-section="home">
        <HeroBoardFrame
          className="bg-transparent"
          tag="Faith. Community. Growth."
          title="Your faith. Your community. Your growth."
          description="Sevenfold brings your Christian journey into one connected experience. Grow spiritually, connect with community, and explore scripture."
          primaryButton={{
            text: "Get started",
            href: "#contact-dark-form-card"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/abstract-technology-background-concept_1194-617406.jpg"
          imageAlt="glowing network nodes on dark background"
          introDelay={1.2}
          kpis={[
            {
              label: "Active believers",
              value: "50,000+",
              delta: "+24%",
              trend: [
                12,
                18,
                24,
                32,
                41,
                50
              ]
            },
            {
              label: "Study satisfaction",
              value: "98%",
              delta: "+4 pts"
            },
            {
              label: "Churches connected",
              value: "850+",
              trend: [
                20,
                35,
                50,
                68,
                85
              ]
            }
          ]}
        />
      </div>

      <div id="services" data-webild-section="FeaturesBentoWidgets" data-webild-section-id="FeaturesBentoWidgets-1" data-section="services" data-tone="deep" data-gallery>
        <FeaturesBentoWidgets
          className="bg-transparent"
          tag="Core platform"
          title="Every tool for your spiritual journey"
          description="Purpose-built resources designed for personal reflection, small groups, and church leadership."
          backgroundImageSrc="https://img.b2bpic.net/free-photo/sad-contemplative-person-near-lake_23-2150420650.jpg"
          items={[
            {
              tag: "Scripture",
              title: "Bible & Devotionals",
              description: "Daily devotionals, verse reflections, and structured reading plans.",
              tags: [
                "Scripture",
                "Devotionals",
                "Plans"
              ]
            },
            {
              title: "Sevenfold AI Assistant",
              description: "Biblical learning assistant for Sabbath School prep and scripture insights.",
              value: "24/7",
              valueLabel: "spiritual guidance & study help"
            },
            {
              title: "Fellowship & Groups",
              description: "Connect with local church members, life stage groups, and youth ministries.",
              imageSrc: "https://img.b2bpic.net/free-photo/preadolescent-girls-focused-literary-analysis-essay-writing-library_482257-123624.jpg",
              imageAlt: "Preadolescent girls focused on literary analysis essay writing in the library"
            },
            {
              title: "Church Leadership",
              description: "Organize events, manage announcements, and coordinate ministry teams.",
              rows: [
                {
                  label: "Youth Ministry Event",
                  value: "Scheduled"
                },
                {
                  label: "Sabbath School Lesson",
                  value: "Ready"
                },
                {
                  label: "Prayer Request Hub",
                  value: "Active"
                }
              ]
            },
            {
              title: "Tailored Growth Pathways",
              description: "Personalized recommendations tuned to your selected life stage.",
              imageSrc: "https://img.b2bpic.net/free-photo/young-woman-writing-planner-cafe-table-morning_1098-20099.jpg",
              imageAlt: "Young woman writing in a planner at the cafe table in the morning"
            },
            {
              title: "Unified Platform",
              description: "Connecting churches, ministries, and young adults across one ecosystem.",
              value: "100%",
              valueLabel: "integrated spiritual experience"
            }
          ]}
        />
      </div>

      <div id="gallery-tilt-cards" data-webild-section="GalleryTiltCards" data-webild-section-id="GalleryTiltCards-1" data-section="gallery-tilt-cards">
        <GalleryTiltCards
          tag="Ecosystem Hub"
          title="Explore the Sevenfold Digital Experience"
          description="Discover how Sevenfold connects scripture, community engagement, and spiritual growth tools."
          items={[
            {
              title: "Intelligent Scripture & Lesson Assistant",
              tag: "AI Assistant",
              date: "2026 Release",
              description: "Contextual answers for Bible study, lesson preparation, and daily devotional reflections.",
              href: "#services",
              imageSrc: "https://img.b2bpic.net/free-photo/lady-holds-tablet-with-mockup-template_482257-81554.jpg",
              imageAlt: "Lady holds tablet with mockup template"
            },
            {
              title: "Connected Ministry Networks",
              tag: "Community Hub",
              date: "2026 Release",
              description: "Unite youth, adults, and ministry leaders across interactive group feeds and local church announcements.",
              href: "#services",
              imageSrc: "https://img.b2bpic.net/free-photo/adult-businesswoman-checking-tablet_23-2148452642.jpg",
              imageAlt: "Adult businesswoman checking a tablet"
            },
            {
              title: "Personalized Daily Scripture Plans",
              tag: "Devotionals",
              date: "2026 Release",
              description: "Tailored reading plans and quiet-time guides structured around your life stage and personal goals.",
              href: "#services",
              imageSrc: "https://img.b2bpic.net/free-photo/fitness-yoga-tourist-leisure-natural_1150-1004.jpg",
              imageAlt: "fitness yoga tourist leisure natural"
            },
            {
              title: "Engaging Youth & Pathfinder Tracks",
              tag: "Youth Programs",
              date: "2026 Release",
              description: "Specialized pathways designed to foster spiritual mentorship and active community involvement.",
              href: "#services",
              imageSrc: "https://img.b2bpic.net/free-photo/lovely-girl-with-tablet-sitting-sofa_23-2147833837.jpg",
              imageAlt: "Lovely girl with tablet sitting on sofa"
            },
            {
              title: "Church Management & Analytics",
              tag: "Administration",
              date: "2026 Release",
              description: "Streamlined tools for church leaders to plan events, manage ministry teams, and track engagement.",
              href: "#services",
              imageSrc: "https://img.b2bpic.net/free-photo/two-smiling-male-office-workers-working-with-laptop_171337-5836.jpg",
              imageAlt: "Two smiling male office workers working with laptop"
            },
            {
              title: "Sabbath & Ministry Calendars",
              tag: "Event Planner",
              date: "2026 Release",
              description: "Coordinate community gatherings, Sabbath School schedules, and ministry events effortlessly.",
              href: "#services",
              imageSrc: "https://img.b2bpic.net/free-photo/woman-working-from-home_23-2148916096.jpg",
              imageAlt: "Woman working from home"
            }
          ]}
          linkLabel="Get Started"
          ariaLabel="Sevenfold ecosystem feature showcase"
        />
      </div>

      <div id="pricing" data-webild-section="PricingTrayPlans" data-webild-section-id="PricingTrayPlans-1" data-section="pricing">
        <PricingTrayPlans
          tag="Subscription Plans"
          title="Simple pricing for"
          highlight="every church"
          description="Empower your spiritual growth and connect your ministry with tailored platform access."
          items={[
            {
              name: "Personal",
              description: "For individuals seeking spiritual study and daily devotional tools.",
              price: "Free",
              period: "forever, single user",
              features: [
                "Sevenfold AI study assistant",
                "Daily Bible verses & devotionals",
                "Personal prayer journaling",
                "Access to public events"
              ],
              cta: {
                text: "Get Started Free",
                href: "#contact-dark-form-card"
              }
            },
            {
              name: "Ministry",
              description: "For active ministry groups and small group leaders.",
              price: "$29",
              period: "per month",
              highlighted: true,
              includesPrevious: true,
              features: [
                "Everything in Personal",
                "Group devotional creation",
                "Ministry event coordination",
                "Sabbath School lesson prep",
                "Priority AI response time"
              ],
              cta: {
                text: "Start 14-Day Trial",
                href: "#contact-dark-form-card"
              }
            },
            {
              name: "Church Network",
              description: "For congregations expanding digital community reach.",
              price: "$99",
              period: "per campus, per month",
              includesPrevious: true,
              features: [
                "Everything in Ministry",
                "Unlimited member accounts",
                "Custom church dashboard",
                "Community announcements",
                "Dedicated onboarding support"
              ],
              cta: {
                text: "Connect Your Church",
                href: "#contact-dark-form-card"
              }
            }
          ]}
          enterprise={{
            label: "Enterprise",
            title: "Need multi-campus church administration tools?",
            description: "Custom integrations, dedicated support, and administrative security built by Veltrix Technologies for large church networks.",
            cta: {
              text: "Contact Veltrix Sales",
              href: "#contact-dark-form-card"
            }
          }}
        />
      </div>

      <div id="customers" data-webild-section="TestimonialSpotlightCarousel" data-webild-section-id="TestimonialSpotlightCarousel-1" data-section="customers">
        <TestimonialSpotlightCarousel
          tag="Community Stories"
          title="Loved by members and church leaders"
          items={[
            {
              company: "Grace Community",
              quote: "Sevenfold transformed how our youth group connects throughout the week. Daily devotionals and interactive Bible study features keep everyone engaged beyond Sunday service.",
              name: "Kevin Bennett",
              role: "Youth Director",
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-smiley-man-with-backpack_23-2149915917.jpg",
              imageAlt: "Front view smiley man with backpack",
              stats: [
                {
                  label: "Youth engagement",
                  value: "Up 85%"
                },
                {
                  label: "Weekly active members",
                  value: "450 members"
                }
              ]
            },
            {
              company: "Veltrix Network",
              quote: "The Sevenfold AI assistant helps me break down complex scripture into relatable discussion points every single week. It has revitalized our small group meetings completely.",
              name: "Molly Barnes",
              role: "Small Group Leader",
              imageSrc: "https://img.b2bpic.net/free-photo/cheerful-young-businesswoman-wearing-eyeglasses_1262-4761.jpg",
              imageAlt: "Cheerful young businesswoman wearing eyeglasses",
              stats: [
                {
                  label: "Group participation",
                  value: "Doubled"
                },
                {
                  label: "Study efficiency",
                  value: "3x faster"
                }
              ]
            },
            {
              company: "Hope Fellowship",
              quote: "Managing ministry announcements, event schedules, and community outreach in one unified space saves our leadership team countless hours every month.",
              name: "Ethan Carter",
              role: "Church Administrator",
              imageSrc: "https://img.b2bpic.net/free-photo/stylish-bearded-male-with-backpack-city-park_613910-11363.jpg",
              imageAlt: "man with beard and backpack",
              stats: [
                {
                  label: "Admin time saved",
                  value: "15 hrs weekly"
                },
                {
                  label: "Event attendance",
                  value: "Up 40%"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="faq-tray-accordion-1" data-webild-section="FaqTrayAccordion" data-webild-section-id="FaqTrayAccordion-1" data-section="faq-tray-accordion-1">
        <FaqTrayAccordion
          tag="Common questions"
          title="Everything you need to"
          highlight="know"
          items={[
            {
              title: "What is Sevenfold AI?",
              description: "Sevenfold AI is a Christian learning assistant that helps explain scripture, generate custom study plans, and organize lesson materials."
            },
            {
              title: "Can church leaders manage ministries here?",
              description: "Yes. Sevenfold provides administration tools for hosting announcements, organizing ministry groups, and managing church events."
            },
            {
              title: "Is Sevenfold designed for individual believers?",
              description: "Yes. Individuals can access personal devotionals, track reading plans, and connect with their local church community."
            },
            {
              title: "How do youth and young adults engage on Sevenfold?",
              description: "Young people can join specialized ministry groups, participate in faith discussions, and access tailored study guides for their age group."
            },
            {
              title: "Who developed the Sevenfold platform?",
              description: "Sevenfold is the Christian digital ecosystem developed by Veltrix Technologies, founded by Mihle Ncube and Munyaradzi Gaadzikwa."
            }
          ]}
          help={{
            label: "Support team",
            title: "Still have questions?",
            description: "Kevin Bennett, Support Lead at Veltrix, is here to assist your community.",
            cta: {
              text: "Contact support",
              href: "#contact-dark-form-card"
            },
            imageSrc: "https://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1631.jpg",
            imageAlt: "young businessman happy expression"
          }}
        />
      </div>

      <div id="contact-dark-form-card" data-webild-section="ContactDarkFormCard" data-webild-section-id="ContactDarkFormCard-1" data-section="contact-dark-form-card">
        <ContactDarkFormCard
          title="Begin Your Spiritual Journey with Sevenfold"
          formTitle="Get Started Today"
          fields={{
            name: "Full Name",
            email: "Email Address",
            company: "Church or Ministry",
            message: "How can we help?"
          }}
          placeholders={{
            name: "Mihle Ncube",
            email: "support@veltrixtechnologies.com",
            company: "Grace Community Church",
            message: "Tell us about your spiritual growth goals..."
          }}
          submitText="Create Account"
          successText="Thank you! Our team will reach out shortly."
          imageSrc="https://img.b2bpic.net/free-photo/woman-using-digital-tablet-technology_23-2149491795.jpg"
          imageAlt="Woman using digital tablet technology"
          ariaLabel="Sevenfold account creation contact form"
        />
      </div>
    </>
  );
}
