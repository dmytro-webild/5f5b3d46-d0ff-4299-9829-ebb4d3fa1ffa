import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import GalleryTiltCards from "@/components/sections/gallery/GalleryTiltCards";
import FeaturesBentoWidgets from "@/components/sections/features/FeaturesBentoWidgets";
import ContactDarkFormCard from "@/components/sections/contact/ContactDarkFormCard";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";

export default function ResourcesPage() {
  return (
    <>
      <ScrollToneBackdrop />

      {/* Resources Hero */}
      <div id="resources-hero" data-webild-section="ResourcesHero" data-section="resources-hero">
        <HeroBoardFrame
          className="bg-transparent"
          tag="Ministry & Devotional Assets"
          title="Empower Your Church with Premium Resources"
          description="Access downloadable Sabbath School teacher guides, youth workbooks, sermon slide templates, choir media, and church leadership toolkits."
          primaryButton={{
            text: "Browse Resource Library",
            href: "#library"
          }}
          secondaryButton={{
            text: "Request Custom Material",
            href: "#resource-request"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/young-woman-writing-planner-cafe-table-morning_1098-20099.jpg"
          imageAlt="Ministry resource planning and study materials"
          introDelay={0.2}
          kpis={[
            {
              label: "Free Resources",
              value: "500+",
              delta: "PDF & Media"
            },
            {
              label: "Monthly Downloads",
              value: "45,000+",
              delta: "+18%"
            },
            {
              label: "Churches Served",
              value: "850+",
              delta: "Active"
            }
          ]}
        />
      </div>

      {/* Featured Resource Library Grid */}
      <div id="library" data-webild-section="GalleryTiltCards" data-section="library">
        <GalleryTiltCards
          tag="Digital Library"
          title="Featured Devotional & Ministry Toolkits"
          description="Curated study materials, lesson aids, and administrative templates."
          items={[
            {
              title: "Sabbath School Lesson Teacher Toolkit (Q4)",
              tag: "Lesson Prep",
              date: "PDF & AI Prompts",
              description: "Complete lesson outlines, icebreaker questions, historical maps, and Sevenfold AI study prompts.",
              href: "#resource-request",
              imageSrc: "https://img.b2bpic.net/free-photo/lady-holds-tablet-with-mockup-template_482257-81554.jpg",
              imageAlt: "Sabbath school toolkit"
            },
            {
              title: "Youth & Pathfinder Honor Workbook",
              tag: "Youth Ministry",
              date: "Interactive PDF",
              description: "Comprehensive study guide covering Christian leadership, outdoor survival, and Bible memory honors.",
              href: "#resource-request",
              imageSrc: "https://img.b2bpic.net/free-photo/lovely-girl-with-tablet-sitting-sofa_23-2147833837.jpg",
              imageAlt: "Pathfinder workbook"
            },
            {
              title: "Church Event & Volunteer Management Kit",
              tag: "Administration",
              date: "Excel & Notion Templates",
              description: "Ready-to-use templates for event budgeting, volunteer scheduling, and Sabbath potluck organization.",
              href: "#resource-request",
              imageSrc: "https://img.b2bpic.net/free-photo/two-smiling-male-office-workers-working-with-laptop_171337-5836.jpg",
              imageAlt: "Church admin kit"
            },
            {
              title: "Worship & Choir Hymnal Slides",
              tag: "Worship Media",
              date: "PowerPoint & Keynote",
              description: "High-definition, dark-theme lyrics slides designed specifically for church sanctuary projectors.",
              href: "#resource-request",
              imageSrc: "https://img.b2bpic.net/free-photo/adult-businesswoman-checking-tablet_23-2148452642.jpg",
              imageAlt: "Worship hymnal slides"
            }
          ]}
          linkLabel="Download Resource"
          ariaLabel="Sevenfold resources list"
        />
      </div>

      {/* Resource Categories Bento */}
      <div id="resource-categories" data-webild-section="FeaturesBentoWidgets" data-section="resource-categories">
        <FeaturesBentoWidgets
          className="bg-transparent"
          tag="Resource Categories"
          title="Everything your ministry needs to excel"
          description="Explore resources categorized by ministry department and target audience."
          backgroundImageSrc="https://img.b2bpic.net/free-photo/young-woman-writing-planner-cafe-table-morning_1098-20099.jpg"
          items={[
            {
              tag: "Scripture Study",
              title: "Sabbath School & Devotional Guides",
              description: "Weekly teacher aids, commentary digests, and small group discussion guides.",
              tags: ["Study", "Devotional", "Sabbath"]
            },
            {
              title: "Youth & Student Workbooks",
              description: "Interactive workbooks designed for high school and university fellowship groups.",
              value: "Free",
              valueLabel: "for all registered members"
            },
            {
              title: "Church Administration Toolkits",
              description: "Financial templates, policy guidelines, announcement graphics, and volunteer onboarding checklists.",
              imageSrc: "https://img.b2bpic.net/free-photo/two-smiling-male-office-workers-working-with-laptop_171337-5836.jpg",
              imageAlt: "Administration toolkits"
            },
            {
              title: "Digital Media & Worship Backgrounds",
              description: "High-resolution slide backgrounds, sermon series graphic packs, and video intros.",
              rows: [
                { label: "Sermon Graphics", value: "100+ Packs" },
                { label: "Lyric Slides", value: "500+ Songs" },
                { label: "Social Media Kits", value: "Updated" }
              ]
            }
          ]}
        />
      </div>

      {/* Resource Download & Request Form */}
      <div id="resource-request" data-webild-section="ContactDarkFormCard" data-section="resource-request">
        <ContactDarkFormCard
          title="Download Materials or Request Custom Resources"
          formTitle="Resource Download Request"
          fields={{
            name: "Full Name",
            email: "Email Address",
            company: "Church or Ministry Name",
            message: "Requested Resource Title or Custom Need"
          }}
          placeholders={{
            name: "Mihle Ncube",
            email: "support@veltrixtechnologies.com",
            company: "Grace Community Church",
            message: "Please send the Q4 Sabbath School Teacher Pack and Worship Lyric Slides..."
          }}
          submitText="Get Resource Pack"
          successText="Your resource download link has been sent to your email! Enjoy your study materials."
          imageSrc="https://img.b2bpic.net/free-photo/woman-using-digital-tablet-technology_23-2149491795.jpg"
          imageAlt="Resource download form"
        />
      </div>
    </>
  );
}
