import { useState } from "react";
import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import { Search, MapPin, Users, Globe, Clock, CheckCircle2, Building2, PlusCircle } from "lucide-react";

interface Church {
  id: string;
  name: string;
  division: string;
  conference: string;
  city: string;
  country: string;
  address: string;
  pastor: string;
  members: string;
  serviceTimes: { sabbathSchool: string; divineService: string; youth: string };
  category: "Congregation" | "Youth Ministry" | "Pathfinder Club" | "School / College";
  image: string;
  website: string;
}

const SAMPLE_CHURCHES: Church[] = [
  {
    id: "1",
    name: "Berean Seventh-day Adventist Church",
    division: "Trans-European Division",
    conference: "South England Conference",
    city: "London",
    country: "United Kingdom",
    address: "33 Standen Road, Southfields, London SW18 5QU",
    pastor: "Pastor David Ndlovu",
    members: "450+",
    serviceTimes: { sabbathSchool: "09:30 AM", divineService: "11:00 AM", youth: "04:30 PM" },
    category: "Congregation",
    image: "https://images.pexels.com/photos/39393254/pexels-photo-39393254.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    website: "https://bereansda.org"
  },
  {
    id: "2",
    name: "Johannesburg Central SDA Church",
    division: "Southern Africa-Indian Ocean Division",
    conference: "Trans-Orange Conference",
    city: "Johannesburg",
    country: "South Africa",
    address: "120 De Korte St, Braamfontein, Johannesburg",
    pastor: "Pastor Michael Khumalo",
    members: "820+",
    serviceTimes: { sabbathSchool: "09:00 AM", divineService: "10:45 AM", youth: "03:30 PM" },
    category: "Congregation",
    image: "https://img.b2bpic.net/free-photo/suburban-house-architectural-detail_1398-3238.jpg",
    website: "https://joburgcentralsda.co.za"
  },
  {
    id: "3",
    name: "Sevenfold Global Youth & Pathfinder Fellowship",
    division: "General Conference Network",
    conference: "Youth Ministries Dept.",
    city: "Silver Spring",
    country: "United States / Global",
    address: "12501 Old Columbia Pike, Silver Spring, MD",
    pastor: "Elder Emmanuel Moyo",
    members: "2,500+ Youth",
    serviceTimes: { sabbathSchool: "10:00 AM", divineService: "11:30 AM", youth: "05:00 PM" },
    category: "Youth Ministry",
    image: "https://img.b2bpic.net/free-photo/preadolescent-girls-focused-literary-analysis-essay-writing-library_482257-123624.jpg",
    website: "https://sevenfoldyouth.org"
  },
  {
    id: "4",
    name: "Cape Town Adventist Academy & Church",
    division: "Southern Africa-Indian Ocean Division",
    conference: "Cape Conference",
    city: "Cape Town",
    country: "South Africa",
    address: "Helderberg College Rd, Somerset West, Cape Town",
    pastor: "Dr. Jonathan Smith",
    members: "600+",
    serviceTimes: { sabbathSchool: "09:15 AM", divineService: "11:00 AM", youth: "04:00 PM" },
    category: "School / College",
    image: "https://img.b2bpic.net/free-photo/abstract-technology-background-concept_1194-617406.jpg",
    website: "https://helderberg.ac.za"
  },
  {
    id: "5",
    name: "Nairobi Central SDA Church (Maxwell)",
    division: "East-Central Africa Division",
    conference: "Central Kenya Conference",
    city: "Nairobi",
    country: "Kenya",
    address: "Jakaya Kikwete Rd, Nairobi",
    pastor: "Pastor Samuel Otieno",
    members: "3,100+",
    serviceTimes: { sabbathSchool: "08:30 AM", divineService: "10:30 AM", youth: "02:30 PM" },
    category: "Congregation",
    image: "https://img.b2bpic.net/free-photo/architectural-building-facade-concept_23-2149023450.jpg",
    website: "https://maxwellsda.org"
  },
  {
    id: "6",
    name: "Atlanta Berean Youth & Pathfinder Command",
    division: "North American Division",
    conference: "South Atlantic Conference",
    city: "Atlanta",
    country: "United States",
    address: "291 Hamilton E Holmes Dr NW, Atlanta, GA",
    pastor: "Elder Marcus Vance",
    members: "1,200+",
    serviceTimes: { sabbathSchool: "09:30 AM", divineService: "11:00 AM", youth: "04:30 PM" },
    category: "Pathfinder Club",
    image: "https://img.b2bpic.net/free-photo/happy-youths-group-taking-photo-together_23-2149033333.jpg",
    website: "https://atlantaberean.com"
  }
];

export default function ChurchDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [divisionFilter, setDivisionFilter] = useState<string>("All");

  // Registration modal form state
  const [showRegModal, setShowRegModal] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [formData, setFormData] = useState({
    churchName: "",
    conference: "",
    pastor: "",
    city: "",
    country: "",
    email: "",
    category: "Congregation"
  });

  const filteredChurches = SAMPLE_CHURCHES.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.pastor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || c.category === categoryFilter;
    const matchesDivision = divisionFilter === "All" || c.division.includes(divisionFilter);
    return matchesSearch && matchesCategory && matchesDivision;
  });

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.churchName || !formData.email) return;
    setRegSuccess(true);
    setTimeout(() => {
      setShowRegModal(false);
      setRegSuccess(false);
      setFormData({
        churchName: "",
        conference: "",
        pastor: "",
        city: "",
        country: "",
        email: "",
        category: "Congregation"
      });
    }, 2000);
  };

  return (
    <>
      <ScrollToneBackdrop />

      {/* Directory Hero */}
      <div id="directory-hero" data-webild-section="DirectoryHero" data-section="directory-hero">
        <HeroBoardFrame
          className="bg-transparent"
          tag="Global Adventist Network"
          title="SDA Church & Ministry Directory"
          description="Find local Seventh-day Adventist congregations, youth fellowships, Pathfinder clubs, and conferences connected across the Sevenfold global ecosystem."
          primaryButton={{
            text: "Register Your Church",
            href: "#register-church"
          }}
          secondaryButton={{
            text: "Explore Directory",
            href: "#directory-list"
          }}
          imageSrc="https://images.pexels.com/photos/39393254/pexels-photo-39393254.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Seventh-day Adventist Church Building"
          introDelay={0.2}
          kpis={[
            {
              label: "Connected Churches",
              value: "850+",
              delta: "Global"
            },
            {
              label: "World Divisions",
              value: "13",
              delta: "GC Network"
            },
            {
              label: "Active Fellowships",
              value: "3,400+",
              delta: "Verified"
            }
          ]}
        />
      </div>

      {/* Search & Filter Section */}
      <section id="directory-list" className="py-12 bg-[#010519] border-t border-[#1C2B4B]">
        <div className="w-[var(--container)] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#F0BB5D]">SEARCH & FILTER</span>
              <h2 className="text-3xl font-serif text-[#FEF9EE] mt-1">Adventist Church Directory</h2>
            </div>
            
            <button
              onClick={() => setShowRegModal(true)}
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Register New Congregation</span>
            </button>
          </div>

          {/* Search Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 bg-[#101B35] p-4 rounded-2xl border border-[#1C2B4B]">
            <div className="relative">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search church name, city, pastor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#010519] border border-[#1C2B4B] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#FEF9EE] focus:outline-none focus:border-[#F0BB5D]"
              />
            </div>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-[#010519] border border-[#1C2B4B] rounded-xl px-4 py-2.5 text-sm text-[#FEF9EE] focus:outline-none focus:border-[#F0BB5D]"
            >
              <option value="All">All Ministry Types</option>
              <option value="Congregation">Local Congregations</option>
              <option value="Youth Ministry">Youth Ministries</option>
              <option value="Pathfinder Club">Pathfinder Clubs</option>
              <option value="School / College">Adventist Schools & Colleges</option>
            </select>

            <select
              value={divisionFilter}
              onChange={(e) => setDivisionFilter(e.target.value)}
              className="bg-[#010519] border border-[#1C2B4B] rounded-xl px-4 py-2.5 text-sm text-[#FEF9EE] focus:outline-none focus:border-[#F0BB5D]"
            >
              <option value="All">All Divisions</option>
              <option value="Trans-European">Trans-European Division</option>
              <option value="Southern Africa-Indian Ocean">Southern Africa Division</option>
              <option value="North American">North American Division</option>
              <option value="East-Central Africa">East-Central Africa Division</option>
            </select>
          </div>

          {/* Directory Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChurches.map((church) => (
              <div
                key={church.id}
                className="bg-[#101B35] border border-[#1C2B4B] hover:border-[#F0BB5D]/60 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-44 relative overflow-hidden bg-[#010519]">
                  <img
                    src={church.image}
                    alt={church.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101B35] via-transparent to-transparent opacity-90" />
                  <span className="absolute top-3 left-3 bg-[#010519]/90 border border-[#F0BB5D]/50 text-[#F0BB5D] text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                    {church.category}
                  </span>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#FEF9EE] group-hover:text-[#F0BB5D] transition-colors leading-tight mb-2">
                      {church.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-[#F0BB5D] font-medium mb-3">
                      <Building2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{church.conference}</span>
                    </div>

                    <div className="space-y-2 text-xs text-muted-foreground mb-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#F0BB5D] shrink-0 mt-0.5" />
                        <span>{church.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-[#F0BB5D] shrink-0" />
                        <span>Pastor: {church.pastor} ({church.members} members)</span>
                      </div>
                    </div>

                    {/* Service Times */}
                    <div className="bg-[#010519]/80 border border-[#1C2B4B] p-3 rounded-xl mb-4 text-xs space-y-1 text-[#FEF9EE]">
                      <div className="font-semibold text-[#F0BB5D] mb-1 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Sabbath Worship Schedule</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sabbath School:</span>
                        <span>{church.serviceTimes.sabbathSchool}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Divine Service:</span>
                        <span>{church.serviceTimes.divineService}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">AY Youth Program:</span>
                        <span>{church.serviceTimes.youth}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#1C2B4B] flex items-center justify-between">
                    <a
                      href={church.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#F0BB5D] hover:underline font-semibold"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Visit Church Site</span>
                    </a>

                    <button
                      onClick={() => alert(`Connect request sent to ${church.name}. Church clerk will reach out to you via email.`)}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#010519] border border-[#1C2B4B] text-[#FEF9EE] hover:border-[#F0BB5D] transition-colors"
                    >
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredChurches.length === 0 && (
            <div className="text-center py-12 bg-[#101B35] rounded-2xl border border-[#1C2B4B]">
              <Building2 className="w-12 h-12 text-[#F0BB5D] mx-auto mb-3 opacity-60" />
              <p className="text-lg text-[#FEF9EE] font-serif">No SDA churches found matching your filter</p>
              <p className="text-xs text-muted-foreground mt-1">Try expanding your search terms or registering your local church.</p>
            </div>
          )}
        </div>
      </section>

      {/* Church Onboarding Form Banner */}
      <section id="register-church" className="py-16 bg-[#101B35]/60 border-t border-[#1C2B4B]">
        <div className="w-[var(--container)] mx-auto max-w-4xl bg-[#010519] border border-[#1C2B4B] p-8 rounded-3xl shadow-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F0BB5D]">EXPAND THE NETWORK</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#FEF9EE] mt-2">Is Your SDA Church Connected on Sevenfold?</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto mt-2">
            Join hundreds of Adventist churches and youth ministries around the globe utilizing Sevenfold for sermon archives, Sabbath School prep, and member engagement.
          </p>
          <button
            onClick={() => setShowRegModal(true)}
            className="mt-6 btn-primary px-8 py-3 text-sm font-bold rounded-xl shadow-lg"
          >
            Register Your SDA Church Now
          </button>
        </div>
      </section>

      {/* Registration Modal */}
      {showRegModal && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-[#010519]/80 backdrop-blur-md">
          <div className="bg-[#101B35] border border-[#1C2B4B] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
            <button
              onClick={() => setShowRegModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-[#FEF9EE] text-sm"
            >
              ✕
            </button>

            <h3 className="font-serif text-2xl font-bold text-[#FEF9EE] mb-1">Register SDA Congregation</h3>
            <p className="text-xs text-muted-foreground mb-6">Connect your church to the Sevenfold global ecosystem built by Veltrix Technologies.</p>

            {regSuccess ? (
              <div className="text-center py-8 text-emerald-400 space-y-2">
                <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-400 animate-bounce" />
                <p className="font-semibold text-lg">Registration Submitted Successfully!</p>
                <p className="text-xs text-muted-foreground">Our team will verify your church credentials with your conference clerk.</p>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs text-[#FEF9EE] mb-1 font-medium">Church / Ministry Name</label>
                  <input
                    type="text"
                    required
                    value={formData.churchName}
                    onChange={(e) => setFormData({ ...formData, churchName: e.target.value })}
                    placeholder="e.g. Berean SDA Church"
                    className="w-full bg-[#010519] border border-[#1C2B4B] rounded-xl px-4 py-2.5 text-sm text-[#FEF9EE] focus:outline-none focus:border-[#F0BB5D]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-[#FEF9EE] mb-1 font-medium">Conference / Union</label>
                    <input
                      type="text"
                      required
                      value={formData.conference}
                      onChange={(e) => setFormData({ ...formData, conference: e.target.value })}
                      placeholder="e.g. Cape Conference"
                      className="w-full bg-[#010519] border border-[#1C2B4B] rounded-xl px-4 py-2.5 text-sm text-[#FEF9EE] focus:outline-none focus:border-[#F0BB5D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#FEF9EE] mb-1 font-medium">Pastor / Elder in Charge</label>
                    <input
                      type="text"
                      required
                      value={formData.pastor}
                      onChange={(e) => setFormData({ ...formData, pastor: e.target.value })}
                      placeholder="e.g. Pastor David"
                      className="w-full bg-[#010519] border border-[#1C2B4B] rounded-xl px-4 py-2.5 text-sm text-[#FEF9EE] focus:outline-none focus:border-[#F0BB5D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-[#FEF9EE] mb-1 font-medium">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. London"
                      className="w-full bg-[#010519] border border-[#1C2B4B] rounded-xl px-4 py-2.5 text-sm text-[#FEF9EE] focus:outline-none focus:border-[#F0BB5D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#FEF9EE] mb-1 font-medium">Country</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. United Kingdom"
                      className="w-full bg-[#010519] border border-[#1C2B4B] rounded-xl px-4 py-2.5 text-sm text-[#FEF9EE] focus:outline-none focus:border-[#F0BB5D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#FEF9EE] mb-1 font-medium">Official Contact Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="clerk@church.org"
                    className="w-full bg-[#010519] border border-[#1C2B4B] rounded-xl px-4 py-2.5 text-sm text-[#FEF9EE] focus:outline-none focus:border-[#F0BB5D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3 text-sm font-bold rounded-xl mt-4"
                >
                  Submit Church Registration
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
