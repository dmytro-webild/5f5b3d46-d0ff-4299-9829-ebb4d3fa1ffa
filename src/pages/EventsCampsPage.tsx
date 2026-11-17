import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import GalleryTiltCards from "@/components/sections/gallery/GalleryTiltCards";
import FeaturesBentoWidgets from "@/components/sections/features/FeaturesBentoWidgets";
import ContactDarkFormCard from "@/components/sections/contact/ContactDarkFormCard";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";

export default function EventsCampsPage() {
  return (
    <>
      <ScrollToneBackdrop />

      {/* Events Hero */}
      <div id="events-hero" data-webild-section="EventsHero" data-section="events-hero">
        <HeroBoardFrame
          className="bg-transparent"
          tag="Gatherings & Retreats"
          title="Connect at Inspiring Events, Camps & Retreats"
          description="Discover upcoming youth camporees, Pathfinder rallies, Sabbath retreats, and international leadership conferences across the Sevenfold network."
          primaryButton={{
            text: "Register for Camp 2026",
            href: "#event-register"
          }}
          secondaryButton={{
            text: "View Event Calendar",
            href: "#upcoming-events"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/lovely-girl-with-tablet-sitting-sofa_23-2147833837.jpg"
          imageAlt="Youth gathering at Christian retreat camp"
          introDelay={0.2}
          kpis={[
            {
              label: "Annual Events",
              value: "250+",
              delta: "Global"
            },
            {
              label: "Camp Registrations",
              value: "14,000+",
              delta: "Active"
            },
            {
              label: "Participating Youth",
              value: "35k+",
              delta: "+40%"
            }
          ]}
        />
      </div>

      {/* Upcoming Events Grid */}
      <div id="upcoming-events" data-webild-section="GalleryTiltCards" data-section="upcoming-events">
        <GalleryTiltCards
          tag="Featured Gathering Schedule"
          title="Upcoming Camps, Conventions & Retreats"
          description="Reserve your place at spiritual conferences and youth camps hosted by participating church networks."
          items={[
            {
              title: "2026 International Pathfinder & Youth Camporee",
              tag: "Youth Camporee",
              date: "July 14-19, 2026 • Pine Valley Grounds",
              description: "5 days of spiritual workshops, honor testing, campfire praise, outdoor wilderness challenges, and international fellowship.",
              href: "#event-register",
              imageSrc: "https://img.b2bpic.net/free-photo/lovely-girl-with-tablet-sitting-sofa_23-2147833837.jpg",
              imageAlt: "Youth camporee"
            },
            {
              title: "National Young Adult Leadership Summit",
              tag: "Leadership",
              date: "August 21-23, 2026 • Hybrid / Austin TX",
              description: "Empowering university students and young professionals to lead with Christian integrity in technology, business, and ministry.",
              href: "#event-register",
              imageSrc: "https://img.b2bpic.net/free-photo/two-smiling-male-office-workers-working-with-laptop_171337-5836.jpg",
              imageAlt: "Leadership summit"
            },
            {
              title: "Sabbath Rest & Family Mountain Retreat",
              tag: "Family Retreat",
              date: "September 11-13, 2026 • Blue Ridge Lodge",
              description: "A serene weekend focused on family worship, marriage renewal, nature walks, and uninterrupted Sabbath peace.",
              href: "#event-register",
              imageSrc: "https://img.b2bpic.net/free-photo/fitness-yoga-tourist-leisure-natural_1150-1004.jpg",
              imageAlt: "Family mountain retreat"
            },
            {
              title: "Global Worship & Evangelism Conference",
              tag: "Worship & Praise",
              date: "October 02-04, 2026 • Online Stream",
              description: "Bringing together worship leaders, choir directors, and digital evangelists to share tools for gospel reach.",
              href: "#event-register",
              imageSrc: "https://img.b2bpic.net/free-photo/adult-businesswoman-checking-tablet_23-2148452642.jpg",
              imageAlt: "Worship conference"
            }
          ]}
          linkLabel="Register for Event"
          ariaLabel="Sevenfold upcoming events list"
        />
      </div>

      {/* Event Categories Bento */}
      <div id="event-types" data-webild-section="FeaturesBentoWidgets" data-section="event-types">
        <FeaturesBentoWidgets
          className="bg-transparent"
          tag="Event Pathways"
          title="Events tailored for every ministry group"
          description="Whether you are seeking outdoor youth adventures or quiet spiritual retreats, find your event here."
          backgroundImageSrc="https://img.b2bpic.net/free-photo/adult-businesswoman-checking-tablet_23-2148452642.jpg"
          items={[
            {
              tag: "Teens & Pathfinders",
              title: "Summer Camps & Honors Rallies",
              description: "Wilderness survival training, team building, spiritual mentorship, and badge honor certification.",
              tags: ["Youth", "Camps", "Pathfinders"]
            },
            {
              title: "Pastoral & Church Leadership",
              description: "Training seminars on church technology adoption, Veltrix platform tools, and sermon delivery.",
              value: "Bi-Monthly",
              valueLabel: "leadership briefings"
            },
            {
              title: "Regional Sports & Fellowship Fairs",
              description: "Promoting physical health, sportsmanship, and inter-church camaraderie across volleyball, soccer, and track.",
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-smiley-man-with-backpack_23-2149915917.jpg",
              imageAlt: "Youth sports and fellowship"
            },
            {
              title: "Virtual Prayer & Fasting Retainers",
              description: "Quarterly online prayer vigils connecting international believers in live video rooms.",
              rows: [
                { label: "Q1 Global Vigil", value: "Completed" },
                { label: "Q2 Youth Rally", value: "Completed" },
                { label: "Q3 Camporee", value: "Open for Reg" }
              ]
            }
          ]}
        />
      </div>

      {/* Registration Form */}
      <div id="event-register" data-webild-section="ContactDarkFormCard" data-section="event-register">
        <ContactDarkFormCard
          title="Reserve Your Spot at Upcoming Events"
          formTitle="Event & Camp Registration"
          fields={{
            name: "Full Name",
            email: "Email Address",
            company: "Selected Event / Camp Name",
            message: "Special Requirements or Group Count"
          }}
          placeholders={{
            name: "Mihle Ncube",
            email: "support@veltrixtechnologies.com",
            company: "2026 International Pathfinder Camporee",
            message: "Registering a youth group of 15 members..."
          }}
          submitText="Submit Registration"
          successText="Registration received! Confirmation details and event passes have been sent to your email."
          imageSrc="https://img.b2bpic.net/free-photo/woman-using-digital-tablet-technology_23-2149491795.jpg"
          imageAlt="Event registration form"
        />
      </div>
    </>
  );
}
