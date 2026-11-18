import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import GalleryTiltCards from "@/components/sections/gallery/GalleryTiltCards";
import FeaturesBentoWidgets from "@/components/sections/features/FeaturesBentoWidgets";
import ContactDarkFormCard from "@/components/sections/contact/ContactDarkFormCard";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";

export default function AnnouncementsPage() {
  return (
    <>
      <ScrollToneBackdrop />

      {/* Announcements Hero */}
      <div id="announcements-hero" data-webild-section="AnnouncementsHero" data-section="announcements-hero">
        <HeroBoardFrame
          className="bg-transparent"
          tag="Latest Updates & Bulletins"
          title="Announcements & News Across the Sevenfold Ecosystem"
          description="Stay updated with official bulletins from Veltrix Technologies, church network announcements, new devotional releases, and upcoming international gatherings."
          primaryButton={{
            text: "Subscribe to Updates",
            href: "#subscribe"
          }}
          secondaryButton={{
            text: "Submit Church Bulletin",
            href: "#subscribe"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/abstract-technology-background-concept_1194-617406.jpg?_wi=2"
          imageAlt="Sevenfold announcements feed"
          introDelay={0.2}
          kpis={[
            {
              label: "Weekly Bulletins",
              value: "100+",
              delta: "Verified"
            },
            {
              label: "Network Reach",
              value: "850+",
              delta: "Churches"
            },
            {
              label: "Platform Releases",
              value: "v2.4",
              delta: "Latest"
            }
          ]}
        />
      </div>

      {/* Featured Announcements Grid */}
      <div id="latest-news" data-webild-section="GalleryTiltCards" data-section="latest-news">
        <GalleryTiltCards
          tag="Recent Bulletins"
          title="Official Platform & Ministry Announcements"
          description="Read the latest news from Veltrix Technologies and our participating church networks."
          items={[
            {
              title: "Sevenfold AI 2.0 Released: Sabbath School Insights",
              tag: "Platform Update",
              date: "November 2026",
              description: "Veltrix Technologies has launched AI 2.0 with deeper contextual scripture insights, multilingual support, and automated Sabbath School lesson prep.",
              href: "#subscribe",
              imageSrc: "https://img.b2bpic.net/free-photo/lady-holds-tablet-with-mockup-template_482257-81554.jpg?_wi=1",
              imageAlt: "AI 2.0 launch"
            },
            {
              title: "2026 International Pathfinder Camporee Registration Open",
              tag: "Events & Camps",
              date: "November 2026",
              description: "Official registration for the upcoming regional youth camporee is now live in the Sevenfold Events portal. Early bird passes available.",
              href: "#subscribe",
              imageSrc: "https://img.b2bpic.net/free-photo/lovely-girl-with-tablet-sitting-sofa_23-2147833837.jpg?_wi=2",
              imageAlt: "Pathfinder Camporee registration"
            },
            {
              title: "New Youth Devotional Series: 'Walking with Purpose'",
              tag: "Devotionals",
              date: "November 2026",
              description: "A 30-day interactive devotional series curated for high school and university students, featuring daily audio reflections.",
              href: "#subscribe",
              imageSrc: "https://img.b2bpic.net/free-photo/fitness-yoga-tourist-leisure-natural_1150-1004.jpg?_wi=1",
              imageAlt: "Youth devotional series"
            },
            {
              title: "Multi-Campus Church Administration Suite Launch",
              tag: "Church Leadership",
              date: "October 2026",
              description: "Church administrators can now manage multiple campuses, synchronize announcements, and coordinate pastoral care teams seamlessly.",
              href: "#subscribe",
              imageSrc: "https://img.b2bpic.net/free-photo/two-smiling-male-office-workers-working-with-laptop_171337-5836.jpg?_wi=3",
              imageAlt: "Church administration suite"
            },
            {
              title: "Global Prayer & Fasting Weekend Scheduled",
              tag: "Community News",
              date: "October 2026",
              description: "Join thousands of believers worldwide for our quarterly 48-hour united prayer initiative starting this Friday evening.",
              href: "#subscribe",
              imageSrc: "https://img.b2bpic.net/free-photo/sad-contemplative-person-near-lake_23-2150420650.jpg?_wi=1",
              imageAlt: "Global prayer weekend"
            },
            {
              title: "Veltrix Technologies Announces Founders' Grant for Youth",
              tag: "Veltrix News",
              date: "October 2026",
              description: "Mihle Ncube and Munyaradzi Gaadzikwa unveil a new digital grant initiative supporting youth ministry software adoption in underserved areas.",
              href: "#subscribe",
              imageSrc: "https://img.b2bpic.net/free-photo/woman-working-from-home_23-2148916096.jpg?_wi=1",
              imageAlt: "Veltrix Founders Grant"
            }
          ]}
          linkLabel="Read Full Bulletin"
          ariaLabel="Sevenfold announcements list"
        />
      </div>

      {/* Announcement Categories Bento */}
      <div id="announcement-types" data-webild-section="FeaturesBentoWidgets" data-section="announcement-types">
        <FeaturesBentoWidgets
          className="bg-transparent"
          tag="Bulletin Channels"
          title="Stay connected with specialized news feeds"
          description="Filter announcements based on what matters most to your church, family, or ministry role."
          backgroundImageSrc="https://img.b2bpic.net/free-photo/adult-businesswoman-checking-tablet_23-2148452642.jpg"
          items={[
            {
              tag: "Software Releases",
              title: "Platform & AI Updates",
              description: "Direct release notes from the Veltrix engineering team regarding new features, security updates, and AI enhancements.",
              tags: ["Release Notes", "Veltrix", "AI"]
            },
            {
              title: "Local Church Bulletins",
              description: "Custom feeds for your registered local congregation including Sabbath service times, potluck schedules, and member updates.",
              value: "Live",
              valueLabel: "real-time church notifications"
            },
            {
              title: "Youth & Pathfinder Rallies",
              description: "Camp dates, honor requirements, drill competitions, and youth leader training announcements.",
              imageSrc: "https://img.b2bpic.net/free-photo/lovely-girl-with-tablet-sitting-sofa_23-2147833837.jpg?_wi=3",
              imageAlt: "Youth rally announcements"
            },
            {
              title: "Devotional & Study Plan Drops",
              description: "Be the first to access newly published reading plans, Sabbath School lesson guides, and pastoral podcasts.",
              rows: [
                { label: "Quarterly Study Guide", value: "Available" },
                { label: "Youth Audio Devotional", value: "Weekly" },
                { label: "Leader Study Briefing", value: "Bi-Weekly" }
              ]
            }
          ]}
        />
      </div>

      {/* Subscribe to Announcements */}
      <div id="subscribe" data-webild-section="ContactDarkFormCard" data-section="subscribe">
        <ContactDarkFormCard
          title="Never Miss a Sevenfold Bulletin"
          formTitle="Subscribe to Official Announcements"
          fields={{
            name: "Full Name",
            email: "Email Address",
            company: "Church or Ministry Name",
            message: "Announcement Preferences (e.g. AI updates, Youth camps, Leadership news)"
          }}
          placeholders={{
            name: "Mihle Ncube",
            email: "support@veltrixtechnologies.com",
            company: "Grace Community Church",
            message: "I want to receive weekly Sabbath bulletins and Veltrix feature updates..."
          }}
          submitText="Subscribe to Bulletins"
          successText="You are subscribed! You will receive official Sevenfold updates directly in your inbox."
          imageSrc="https://img.b2bpic.net/free-photo/woman-using-digital-tablet-technology_23-2149491795.jpg?_wi=1"
          imageAlt="Subscribing to announcements"
        />
      </div>
    </>
  );
}
