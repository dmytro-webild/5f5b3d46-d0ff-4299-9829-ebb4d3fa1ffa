import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import FeaturesBentoWidgets from "@/components/sections/features/FeaturesBentoWidgets";
import GalleryTiltCards from "@/components/sections/gallery/GalleryTiltCards";
import FaqTrayAccordion from "@/components/sections/faq/FaqTrayAccordion";
import ContactDarkFormCard from "@/components/sections/contact/ContactDarkFormCard";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";

export default function GuidanceSupportPage() {
  return (
    <>
      <ScrollToneBackdrop />

      {/* Guidance Hero */}
      <div id="guidance-hero" data-webild-section="GuidanceHero" data-section="guidance-hero">
        <HeroBoardFrame
          className="bg-transparent"
          tag="Pastoral Care & Support"
          title="Compassionate Guidance & Spiritual Support"
          description="You are never alone on your journey. Access confidential pastoral counseling, mental wellness encouragement, prayer support, and practical life advice grounded in faith."
          primaryButton={{
            text: "Request Pastoral Counseling",
            href: "#counseling-form"
          }}
          secondaryButton={{
            text: "Explore Guidance Topics",
            href: "#topics"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/sad-contemplative-person-near-lake_23-2150420650.jpg?_wi=4"
          imageAlt="Quiet reflection and spiritual support"
          introDelay={0.2}
          kpis={[
            {
              label: "Confidentiality",
              value: "100%",
              delta: "Secure"
            },
            {
              label: "Pastoral Counselors",
              value: "120+",
              delta: "Available"
            },
            {
              label: "Support Articles",
              value: "300+",
              delta: "Curated"
            }
          ]}
        />
      </div>

      {/* Support Topics Bento */}
      <div id="topics" data-webild-section="FeaturesBentoWidgets" data-section="topics">
        <FeaturesBentoWidgets
          className="bg-transparent"
          tag="Support Pathways"
          title="Guidance for every season of trial & growth"
          description="Holistic spiritual and emotional encouragement structured around specific life situations."
          backgroundImageSrc="https://img.b2bpic.net/free-photo/young-woman-writing-planner-cafe-table-morning_1098-20099.jpg"
          items={[
            {
              tag: "Emotional Wellness",
              title: "Anxiety, Stress & Mental Health",
              description: "Faith-informed mental health resources combining Biblical encouragement, Christian counseling tools, and practical stress reduction.",
              tags: ["Mental Health", "Peace", "Hope"]
            },
            {
              title: "Grief, Loss & Hope",
              description: "Support groups and devotionals designed to comfort those mourning the loss of a loved one or undergoing major life transitions.",
              value: "24/7",
              valueLabel: "grief counseling access"
            },
            {
              title: "Marriage & Family Counseling",
              description: "Restorative marriage guides, communication workshops, and Christian parenting advice for raising grounded children.",
              imageSrc: "https://img.b2bpic.net/free-photo/preadolescent-girls-focused-literary-analysis-essay-writing-library_482257-123624.jpg?_wi=2",
              imageAlt: "Family counseling and guidance"
            },
            {
              title: "Youth Identity & Purpose",
              description: "Dedicated mentorship tracks for teenagers and young adults navigating career, peer pressure, and spiritual identity.",
              rows: [
                { label: "Youth Mentorship", value: "Available" },
                { label: "Career Guidance", value: "Active" },
                { label: "Peer Encouragement", value: "Weekly" }
              ]
            },
            {
              title: "Financial Stewardship",
              description: "Biblical principles on budgeting, debt freedom, tithing, and generous living in modern economic times.",
              imageSrc: "https://img.b2bpic.net/free-photo/lady-holds-tablet-with-mockup-template_482257-81554.jpg?_wi=4",
              imageAlt: "Financial stewardship resources"
            },
            {
              title: "Pastoral Care Helpline",
              description: "Direct, private communication channel with verified pastors and trained Christian counselors.",
              value: "100%",
              valueLabel: "private & confidential"
            }
          ]}
        />
      </div>

      {/* Guidance Resources Showcase */}
      <div id="guidance-resources" data-webild-section="GalleryTiltCards" data-section="guidance-resources">
        <GalleryTiltCards
          tag="Curated Help Guides"
          title="Recommended Reading & Spiritual Guides"
          description="Explore curated articles and audio guides to support you in difficult moments."
          items={[
            {
              title: "Overcoming Fear in Uncertain Times",
              tag: "Mental Wellness",
              date: "Audio & Guide",
              description: "A 5-part audio series exploring how scripture addresses fear, anxiety, and panic with divine peace.",
              href: "#counseling-form",
              imageSrc: "https://img.b2bpic.net/free-photo/fitness-yoga-tourist-leisure-natural_1150-1004.jpg?_wi=5",
              imageAlt: "Peace and reflection guide"
            },
            {
              title: "Navigating Grief: Finding Comfort in God's Promises",
              tag: "Grief Support",
              date: "Devotional Guide",
              description: "Practical steps and biblical promises to help process sorrow while anchoring in everlasting hope.",
              href: "#counseling-form",
              imageSrc: "https://img.b2bpic.net/free-photo/sad-contemplative-person-near-lake_23-2150420650.jpg?_wi=5",
              imageAlt: "Grief support guide"
            },
            {
              title: "Restoring Communication in Marriage",
              tag: "Family Support",
              date: "Workshop Brief",
              description: "Key Biblical principles for conflict resolution, forgiveness, and deeper emotional intimacy.",
              href: "#counseling-form",
              imageSrc: "https://img.b2bpic.net/free-photo/woman-working-from-home_23-2148916096.jpg?_wi=2",
              imageAlt: "Marriage communication guide"
            },
            {
              title: "Youth Mentorship & Career Purpose",
              tag: "Youth Guidance",
              date: "Mentorship Path",
              description: "Helping young adults align their talents, career aspirations, and spiritual calling.",
              href: "#counseling-form",
              imageSrc: "https://img.b2bpic.net/free-photo/lovely-girl-with-tablet-sitting-sofa_23-2147833837.jpg?_wi=8",
              imageAlt: "Youth mentorship guide"
            }
          ]}
          linkLabel="Read Guide"
          ariaLabel="Sevenfold guidance guides list"
        />
      </div>

      {/* Guidance FAQ */}
      <div id="guidance-faq" data-webild-section="FaqTrayAccordion" data-section="guidance-faq">
        <FaqTrayAccordion
          tag="Pastoral Support FAQ"
          title="Everything you need to know about"
          highlight="pastoral care"
          items={[
            {
              title: "Is pastoral counseling through Sevenfold confidential?",
              description: "Yes. All counseling requests submitted to Veltrix Pastoral Support are strictly confidential and shared only with ordained pastors or certified Christian counselors."
            },
            {
              title: "Does Sevenfold offer 24/7 crisis support?",
              description: "While our digital helpline operates 24/7 for prayer and spiritual encouragement, we immediately provide direct contact numbers for professional crisis lines in urgent emergencies."
            },
            {
              title: "Is there any cost for spiritual guidance?",
              description: "No. Pastoral guidance, prayer support, and spiritual encouragement resources on Sevenfold are entirely free."
            }
          ]}
          help={{
            label: "Confidential Support",
            title: "Need immediate prayer?",
            description: "Our Pastoral Support Lead is available to listen and pray with you.",
            cta: {
              text: "Request Urgent Call",
              href: "#counseling-form"
            },
            imageSrc: "https://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1631.jpg?_wi=3",
            imageAlt: "Pastoral support representative"
          }}
        />
      </div>

      {/* Counseling Request Form */}
      <div id="counseling-form" data-webild-section="ContactDarkFormCard" data-section="counseling-form">
        <ContactDarkFormCard
          title="Request Confidential Pastoral Guidance"
          formTitle="Connect with a Counselor or Pastor"
          fields={{
            name: "Full Name",
            email: "Email or Phone Number",
            company: "Preferred Support Topic (e.g. Grief, Marriage, Youth, Anxiety)",
            message: "Briefly share your request or concern"
          }}
          placeholders={{
            name: "Mihle Ncube",
            email: "support@veltrixtechnologies.com",
            company: "Personal Support & Prayer",
            message: "I am seeking confidential advice on navigating family challenges..."
          }}
          submitText="Submit Confidential Request"
          successText="Your request has been securely delivered to our pastoral team. We will reach out with care and speed."
          imageSrc="https://img.b2bpic.net/free-photo/woman-using-digital-tablet-technology_23-2149491795.jpg?_wi=5"
          imageAlt="Confidential guidance request"
        />
      </div>
    </>
  );
}
