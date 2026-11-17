import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import FeaturesBentoWidgets from "@/components/sections/features/FeaturesBentoWidgets";
import GalleryTiltCards from "@/components/sections/gallery/GalleryTiltCards";
import TestimonialSpotlightCarousel from "@/components/sections/testimonial/TestimonialSpotlightCarousel";
import ContactDarkFormCard from "@/components/sections/contact/ContactDarkFormCard";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";

export default function CommunityPage() {
  return (
    <>
      <ScrollToneBackdrop />

      {/* Hero Header */}
      <div id="community-hero" data-webild-section="CommunityHero" data-section="community-hero">
        <HeroBoardFrame
          className="bg-transparent"
          tag="Connected Believers"
          title="A Vibrant Community Rooted in Faith & Fellowship"
          description="Find your spiritual family. Connect with local church members, join age-tailored fellowship groups, submit prayer requests, and build meaningful relationships."
          primaryButton={{
            text: "Join a Fellowship Group",
            href: "#groups"
          }}
          secondaryButton={{
            text: "Submit Prayer Request",
            href: "#prayer-request"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/preadolescent-girls-focused-literary-analysis-essay-writing-library_482257-123624.jpg"
          imageAlt="Believers gathering in small group fellowship"
          introDelay={0.2}
          kpis={[
            {
              label: "Active Fellowship Groups",
              value: "3,400+",
              delta: "Worldwide"
            },
            {
              label: "Prayer Chains Answered",
              value: "120k+",
              delta: "99% active"
            },
            {
              label: "Youth Members",
              value: "18,500+",
              delta: "+32% MoM"
            }
          ]}
        />
      </div>

      {/* Community Groups Bento */}
      <div id="groups" data-webild-section="FeaturesBentoWidgets" data-section="groups">
        <FeaturesBentoWidgets
          className="bg-transparent"
          tag="Fellowship Circles"
          title="Groups tuned for every life stage"
          description="Discover supportive Christian communities tailored to your interests, age, and spiritual growth goals."
          backgroundImageSrc="https://img.b2bpic.net/free-photo/adult-businesswoman-checking-tablet_23-2148452642.jpg"
          items={[
            {
              tag: "Gen Z & Millennial",
              title: "Young Adult Ministries",
              description: "Weekly hybrid gatherings, career discussions, and spiritual Q&A sessions designed for students & young professionals.",
              tags: ["Youth", "Young Adults", "Fellowship"]
            },
            {
              title: "Pathfinder & Youth Clubs",
              description: "Interactive badge tracking, spiritual outdoor adventures, and leadership development for teens.",
              value: "12,000+",
              valueLabel: "active Pathfinder participants"
            },
            {
              title: "Sabbath School Circles",
              description: "Deep-dive lesson discussions with shared study notes and Sevenfold AI assistant prompts.",
              imageSrc: "https://img.b2bpic.net/free-photo/lady-holds-tablet-with-mockup-template_482257-81554.jpg",
              imageAlt: "Digital Bible study notes"
            },
            {
              title: "Global Prayer Wall",
              description: "Submit confidential or public prayer requests and receive real-time notifications when believers pray for you.",
              rows: [
                { label: "Healing & Guidance", value: "4.2k active" },
                { label: "Family & Youth", value: "3.1k active" },
                { label: "Global Missions", value: "1.8k active" }
              ]
            },
            {
              title: "Married & Family Life",
              description: "Marriage encouragement guides, parenting devotional tracks, and family retreat organizing.",
              imageSrc: "https://img.b2bpic.net/free-photo/young-woman-writing-planner-cafe-table-morning_1098-20099.jpg",
              imageAlt: "Family devotional resources"
            },
            {
              title: "Church Outreach Teams",
              description: "Coordinate community service projects, food drives, and local neighborhood evangelism.",
              value: "500+",
              valueLabel: "active outreach initiatives"
            }
          ]}
        />
      </div>

      {/* Active Community Showcase */}
      <div id="community-showcase" data-webild-section="GalleryTiltCards" data-section="community-showcase">
        <GalleryTiltCards
          tag="Community Highlights"
          title="Life inside the Sevenfold Network"
          description="See how believers across the globe connect, share scripture, and support one another."
          items={[
            {
              title: "Friday Evening Vespers Online",
              tag: "Worship & Devotions",
              date: "Every Friday, 7 PM",
              description: "Live acoustic praise, testimony sharing, and weekend Sabbath welcome streams.",
              href: "#groups",
              imageSrc: "https://img.b2bpic.net/free-photo/fitness-yoga-tourist-leisure-natural_1150-1004.jpg",
              imageAlt: "Vespers prayer gathering"
            },
            {
              title: "Inter-Church Youth Rally",
              tag: "Youth Event",
              date: "Monthly Gathering",
              description: "Bringing together young people from over 50 regional congregations for worship and sports.",
              href: "#groups",
              imageSrc: "https://img.b2bpic.net/free-photo/lovely-girl-with-tablet-sitting-sofa_23-2147833837.jpg",
              imageAlt: "Youth rally gathering"
            },
            {
              title: "24/7 Prayer & Fasting Hub",
              tag: "Prayer Chain",
              date: "Continuous",
              description: "Join virtual prayer rooms around the clock or post your personal prayer requests.",
              href: "#prayer-request",
              imageSrc: "https://img.b2bpic.net/free-photo/sad-contemplative-person-near-lake_23-2150420650.jpg",
              imageAlt: "Quiet time prayer"
            },
            {
              title: "Sabbath School Teacher Network",
              tag: "Leadership",
              date: "Weekly Exchange",
              description: "Resource sharing, lesson plans, and discussion ideas curated by experienced instructors.",
              href: "#groups",
              imageSrc: "https://img.b2bpic.net/free-photo/two-smiling-male-office-workers-working-with-laptop_171337-5836.jpg",
              imageAlt: "Sabbath school teachers"
            }
          ]}
          linkLabel="Join Discussion"
          ariaLabel="Sevenfold community showcase"
        />
      </div>

      {/* Member Testimonials */}
      <div id="community-testimonials" data-webild-section="TestimonialSpotlightCarousel" data-section="community-testimonials">
        <TestimonialSpotlightCarousel
          tag="Community Voices"
          title="Stories of connection and encouragement"
          items={[
            {
              company: "Austin Young Adults Fellowship",
              quote: "Moving to a new city was daunting, but Sevenfold instantly connected me with a warm small group nearby. I felt welcomed from day one.",
              name: "Rachel Vance",
              role: "Community Member",
              imageSrc: "https://img.b2bpic.net/free-photo/cheerful-young-businesswoman-wearing-eyeglasses_1262-4761.jpg",
              imageAlt: "Rachel Vance",
              stats: [
                { label: "Community Rating", value: "5 / 5" },
                { label: "Connected Group", value: "Austin Fellowship" }
              ]
            },
            {
              company: "Global Prayer Network",
              quote: "When my father was in critical surgery, I posted a prayer request on Sevenfold. Within minutes, over 300 believers left messages praying for him. Praise God!",
              name: "Marcus Thorne",
              role: "Believer",
              imageSrc: "https://img.b2bpic.net/free-photo/stylish-bearded-male-with-backpack-city-park_613910-11363.jpg",
              imageAlt: "Marcus Thorne",
              stats: [
                { label: "Prayers Received", value: "340+" },
                { label: "Recovery Outcome", value: "Full Healing" }
              ]
            }
          ]}
        />
      </div>

      {/* Prayer Request & Join Form */}
      <div id="prayer-request" data-webild-section="ContactDarkFormCard" data-section="prayer-request">
        <ContactDarkFormCard
          title="Join the Community or Request Prayer"
          formTitle="Submit a Prayer Request or Join Group"
          fields={{
            name: "Full Name",
            email: "Email Address",
            company: "Group Interest (e.g. Youth, Prayer Wall, Local Church)",
            message: "Your Prayer Request or Introduction"
          }}
          placeholders={{
            name: "Mihle Ncube",
            email: "mihle@veltrixtechnologies.com",
            company: "Young Adults & Prayer Wall",
            message: "Please pray for our upcoming youth retreat and exams..."
          }}
          submitText="Submit to Community"
          successText="Your request has been shared with our prayer team. May God bless you abundantly!"
          imageSrc="https://img.b2bpic.net/free-photo/woman-using-digital-tablet-technology_23-2149491795.jpg"
          imageAlt="Believer praying with digital tablet"
        />
      </div>
    </>
  );
}
