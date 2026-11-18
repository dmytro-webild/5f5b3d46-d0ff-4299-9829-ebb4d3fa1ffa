import { useState } from "react";
import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import FeaturesBentoWidgets from "@/components/sections/features/FeaturesBentoWidgets";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import { Calendar, MapPin, Users, Ticket, CheckCircle2, Sparkles } from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  category: "Youth Camporee" | "Leadership Summit" | "Family Retreat" | "Worship & Praise";
  date: string;
  location: string;
  capacity: string;
  price: string;
  description: string;
  image: string;
}

const EVENTS_LIST: EventItem[] = [
  {
    id: "evt-1",
    title: "2026 International Pathfinder & Youth Camporee",
    category: "Youth Camporee",
    date: "July 14–19, 2026",
    location: "Pine Valley Grounds, UK & Streaming",
    capacity: "2,500 Spots Available",
    price: "Free Registration",
    description: "5 days of spiritual workshops, honor testing, campfire praise, outdoor wilderness challenges, and international fellowship.",
    image: "https://img.b2bpic.net/free-photo/lovely-girl-with-tablet-sitting-sofa_23-2147833837.jpg"
  },
  {
    id: "evt-2",
    title: "National Young Adult Leadership Summit",
    category: "Leadership Summit",
    date: "August 21–23, 2026",
    location: "Austin Convention Center, TX / Hybrid",
    capacity: "800 Spots",
    price: "SDA Member Sponsored",
    description: "Empowering university students and young professionals to lead with Christian integrity in technology, business, and ministry.",
    image: "https://img.b2bpic.net/free-photo/two-smiling-male-office-workers-working-with-laptop_171337-5836.jpg"
  },
  {
    id: "evt-3",
    title: "Sabbath Rest & Family Mountain Retreat",
    category: "Family Retreat",
    date: "September 11–13, 2026",
    location: "Blue Ridge Lodge, North Carolina",
    capacity: "150 Families",
    price: "Registration Open",
    description: "A serene weekend focused on family worship, marriage renewal, nature walks, and uninterrupted Sabbath peace.",
    image: "https://img.b2bpic.net/free-photo/fitness-yoga-tourist-leisure-natural_1150-1004.jpg"
  },
  {
    id: "evt-4",
    title: "Global Worship & Digital Evangelism Conference",
    category: "Worship & Praise",
    date: "October 02–04, 2026",
    location: "Online Sevenfold Live Portal",
    capacity: "Unlimited Online",
    price: "Free Admission",
    description: "Bringing together worship leaders, choir directors, and digital evangelists to share AI and modern media tools for gospel reach.",
    image: "https://img.b2bpic.net/free-photo/adult-businesswoman-checking-tablet_23-2148452642.jpg"
  }
];

export default function EventsCampsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [ticketSuccess, setTicketSuccess] = useState<boolean>(false);
  const [regForm, setRegForm] = useState({ name: "", email: "", attendees: "1", church: "" });

  const filteredEvents = EVENTS_LIST.filter(
    (e) => activeCategory === "All" || e.category === activeCategory
  );

  const handleRegisterEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regForm.name || !regForm.email) return;

    setTicketSuccess(true);
    setTimeout(() => {
      setTicketSuccess(false);
      setSelectedEvent(null);
      setRegForm({ name: "", email: "", attendees: "1", church: "" });
    }, 3000);
  };

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
            text: "Browse Events",
            href: "#events-list"
          }}
          secondaryButton={{
            text: "Event Pathways",
            href: "#event-types"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/lovely-girl-with-tablet-sitting-sofa_23-2147833837.jpg?_wi=5"
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

      {/* Interactive Events Directory & RSVP */}
      <section id="events-list" className="py-16 bg-[#010519] border-t border-[#1C2B4B]">
        <div className="w-[var(--container)] mx-auto">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#F0BB5D]">EVENT MANAGEMENT SYSTEM</span>
              <h2 className="text-3xl font-serif text-[#FEF9EE] mt-1">Upcoming Camps & Gatherings</h2>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2 bg-[#101B35] p-1.5 rounded-xl border border-[#1C2B4B]">
              {["All", "Youth Camporee", "Leadership Summit", "Family Retreat", "Worship & Praise"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    activeCategory === cat
                      ? "bg-[#F0BB5D] text-[#010519] shadow-md"
                      : "text-[#FEF9EE]/80 hover:text-[#FEF9EE] hover:bg-[#1C2B4B]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-[#101B35] border border-[#1C2B4B] hover:border-[#F0BB5D]/60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-56 relative overflow-hidden bg-[#010519]">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101B35] via-transparent to-transparent opacity-90" />
                  
                  <span className="absolute top-4 left-4 bg-[#010519]/90 border border-[#F0BB5D]/50 text-[#F0BB5D] text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                    {evt.category}
                  </span>

                  <span className="absolute top-4 right-4 bg-[#F0BB5D] text-[#010519] text-xs font-bold px-3 py-1 rounded-full shadow">
                    {evt.price}
                  </span>
                </div>

                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#FEF9EE] group-hover:text-[#F0BB5D] transition-colors leading-snug mb-3">
                      {evt.title}
                    </h3>

                    <div className="space-y-2 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-2 text-[#FEF9EE]">
                        <Calendar className="w-4 h-4 text-[#F0BB5D]" />
                        <span className="font-semibold">{evt.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#F0BB5D]" />
                        <span>{evt.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#F0BB5D]" />
                        <span>{evt.capacity}</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#C0C9DC] leading-relaxed mb-6">
                      {evt.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1C2B4B] flex items-center justify-between">
                    <span className="text-xs text-[#F0BB5D] font-medium flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Instant Confirmation
                    </span>

                    <button
                      onClick={() => setSelectedEvent(evt)}
                      className="btn-primary px-5 py-2.5 text-xs font-bold rounded-xl shadow-lg flex items-center gap-2"
                    >
                      <Ticket className="w-4 h-4" />
                      <span>Register & RSVP</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-smiley-man-with-backpack_23-2149915917.jpg?_wi=2",
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

      {/* RSVP Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-[#010519]/80 backdrop-blur-md">
          <div className="bg-[#101B35] border border-[#1C2B4B] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-[#FEF9EE]">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-[#FEF9EE] text-sm"
            >
              ✕
            </button>

            <span className="text-xs font-semibold uppercase text-[#F0BB5D] tracking-widest">RSVP CONFIRMATION</span>
            <h3 className="font-serif text-2xl font-bold text-[#FEF9EE] mt-1 mb-2">{selectedEvent.title}</h3>
            <p className="text-xs text-muted-foreground mb-4">
              {selectedEvent.date} • {selectedEvent.location}
            </p>

            {ticketSuccess ? (
              <div className="text-center py-8 text-emerald-400 space-y-3">
                <CheckCircle2 className="w-16 h-16 mx-auto text-emerald-400 animate-bounce" />
                <h4 className="text-xl font-serif font-bold text-emerald-400">Registration Reserved!</h4>
                <div className="bg-[#010519] p-4 rounded-xl border border-[#1C2B4B] text-xs text-[#FEF9EE] text-left space-y-1">
                  <p><span className="text-muted-foreground">Ticket Code:</span> 7FOLD-EVT-2026-X99</p>
                  <p><span className="text-muted-foreground">Attendee:</span> {regForm.name}</p>
                  <p><span className="text-muted-foreground">Confirmation Email:</span> {regForm.email}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRegisterEvent} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={regForm.name}
                    onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                    placeholder="e.g. Mihle Nxumalo"
                    className="w-full bg-[#010519] border border-[#1C2B4B] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#F0BB5D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={regForm.email}
                    onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                    placeholder="name@church.org"
                    className="w-full bg-[#010519] border border-[#1C2B4B] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#F0BB5D]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1">Number of Attendees</label>
                    <select
                      value={regForm.attendees}
                      onChange={(e) => setRegForm({ ...regForm, attendees: e.target.value })}
                      className="w-full bg-[#010519] border border-[#1C2B4B] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F0BB5D]"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="5">Family Group (5)</option>
                      <option value="10">Youth Group (10+)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">Local SDA Church</label>
                    <input
                      type="text"
                      value={regForm.church}
                      onChange={(e) => setRegForm({ ...regForm, church: e.target.value })}
                      placeholder="e.g. Berean SDA"
                      className="w-full bg-[#010519] border border-[#1C2B4B] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F0BB5D]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3 text-sm font-bold rounded-xl mt-4 shadow-lg"
                >
                  Confirm Event Registration
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
