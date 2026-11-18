import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import FeaturesBentoWidgets from "@/components/sections/features/FeaturesBentoWidgets";
import GalleryTiltCards from "@/components/sections/gallery/GalleryTiltCards";
import FaqTrayAccordion from "@/components/sections/faq/FaqTrayAccordion";
import ContactDarkFormCard from "@/components/sections/contact/ContactDarkFormCard";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import { useState } from "react";

export default function FaithBiblePage() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAskAI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setResponse(null);
    setTimeout(() => {
      setLoading(false);
      setResponse(`Sevenfold AI Insight on "${query}":\n\nScripture provides rich wisdom on this topic. "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." (Proverbs 3:5-6). For Sabbath School discussion, consider exploring how faith translates into practical daily action.`);
    }, 900);
  };

  return (
    <>
      <ScrollToneBackdrop />

      {/* Faith & Bible Hero */}
      <div id="faith-hero" data-webild-section="FaithHero" data-section="faith-hero">
        <HeroBoardFrame
          className="bg-transparent"
          tag="Scripture & AI Study"
          title="Deepen Your Walk with Scripture & Sevenfold AI"
          description="Explore daily devotionals, structured Bible reading plans, and our intelligent AI assistant built to guide your Sabbath School prep and personal quiet time."
          primaryButton={{
            text: "Ask Sevenfold AI",
            href: "#ai-assistant"
          }}
          secondaryButton={{
            text: "Daily Devotionals",
            href: "#devotionals"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/lady-holds-tablet-with-mockup-template_482257-81554.jpg?_wi=3"
          imageAlt="Digital Bible study on Sevenfold"
          introDelay={0.2}
          kpis={[
            {
              label: "Bible Translations",
              value: "25+",
              delta: "KJV, NIV, NKJV"
            },
            {
              label: "AI Queries Answered",
              value: "1.2M+",
              delta: "24/7 active"
            },
            {
              label: "Reading Plans",
              value: "150+",
              delta: "Curated"
            }
          ]}
        />
      </div>

      {/* Interactive AI Assistant Demo */}
      <section id="ai-assistant" className="py-16 bg-[#101B35]/70 border-y border-[#1C2B4B]">
        <div className="w-[var(--container)] mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F0BB5D]">INTERACTIVE SEVENFOLD AI ASSISTANT</span>
            <h2 className="text-3xl sm:text-4xl font-serif mt-2 text-[#FEF9EE]">Biblical Intelligence at Your Fingertips</h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              Test the Sevenfold AI assistant built by Veltrix Technologies for Sabbath School teachers, pastors, and individual believers.
            </p>
          </div>

          <div className="bg-[#010519] border border-[#1C2B4B] rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#1C2B4B]">
              <div className="w-10 h-10 rounded-full bg-[#101B35] border border-[#F0BB5D] flex items-center justify-center text-[#F0BB5D] font-bold text-lg">
                7
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#FEF9EE]">Sevenfold Biblical Assistant</h3>
                <p className="text-xs text-[#F0BB5D]">Powered by Veltrix Technologies AI Engine</p>
              </div>
            </div>

            <form onSubmit={handleAskAI} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask any Biblical question (e.g. 'What is the theme of Romans 8?' or 'Give me a Sabbath School starter for youth')..."
                className="flex-grow bg-[#101B35] border border-[#1C2B4B] rounded-xl px-4 py-3 text-sm text-[#FEF9EE] focus:outline-none focus:border-[#F0BB5D] placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary py-3 px-6 whitespace-nowrap text-sm font-semibold shrink-0"
              >
                {loading ? "Analyzing Scripture..." : "Ask Sevenfold AI"}
              </button>
            </form>

            {/* Suggested Prompts */}
            <div className="flex flex-wrap items-center gap-2 mt-4 text-xs text-muted-foreground">
              <span className="text-[#F0BB5D]">Try sample prompts:</span>
              {[
                "Meaning of Sevenfold in scripture",
                "Youth discussion questions on Proverbs 3",
                "Sabbath School Quarter 4 summary",
                "Encouragement for anxiety"
              ].map((sample, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setQuery(sample);
                    handleAskAI({ preventDefault: () => {} } as React.FormEvent);
                  }}
                  className="bg-[#101B35] hover:bg-[#1C2B4B] hover:text-[#FEF9EE] border border-[#1C2B4B] px-3 py-1 rounded-full transition-colors"
                >
                  {sample}
                </button>
              ))}
            </div>

            {/* AI Response Display */}
            {response && (
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#101B35]/95 border border-[#F0BB5D]/50 text-sm leading-relaxed text-[#FEF9EE] shadow-2xl animate-fade-in relative">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-[#1C2B4B]">
                  <div className="inline-flex items-center gap-2 bg-[#F0BB5D]/15 border border-[#F0BB5D]/60 text-[#F0BB5D] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <span>🤖 AI-GENERATED RESPONSE</span>
                  </div>
                  <span className="text-[11px] text-[#C0C9DC]">Sevenfold AI Engine v2.6 • Veltrix Tech</span>
                </div>
                <p className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-[#FEF9EE] font-serif">{response}</p>
                <div className="mt-4 pt-3 border-t border-[#1C2B4B]/80 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>*AI-generated guidance based on Seventh-day Adventist theological resources.</span>
                  <span className="text-[#F0BB5D] font-semibold">Verified Scripture References</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Scripture & Devotional Modules Bento */}
      <div id="devotionals" data-webild-section="FeaturesBentoWidgets" data-section="devotionals">
        <FeaturesBentoWidgets
          className="bg-transparent"
          tag="Devotional Suite"
          title="Tools for daily spiritual nourishment"
          description="Build a lasting daily reading habit with structured guides, audio devotionals, and reflection journals."
          backgroundImageSrc="https://img.b2bpic.net/free-photo/young-woman-writing-planner-cafe-table-morning_1098-20099.jpg"
          items={[
            {
              tag: "Daily Quiet Time",
              title: "Verse of the Day & Audio Reflections",
              description: "Start each morning with curated scripture passages, contextual commentary, and 3-minute audio reflections.",
              tags: ["Verse of Day", "Audio", "Quiet Time"]
            },
            {
              title: "Sabbath School Prep Hub",
              description: "Interactive quarterly lesson guides with teacher notes, cross-references, and student discussion prompts.",
              value: "Weekly",
              valueLabel: "updated lesson materials"
            },
            {
              title: "Youth & Pathfinder Study Tracks",
              description: "Age-specific study modules that break down complex theology into engaging, practical life lessons.",
              imageSrc: "https://img.b2bpic.net/free-photo/lovely-girl-with-tablet-sitting-sofa_23-2147833837.jpg?_wi=6",
              imageAlt: "Youth reading scripture"
            },
            {
              title: "Comprehensive Reading Plans",
              description: "Track your progress through chronological, thematic, or book-by-book Bible reading plans.",
              rows: [
                { label: "Bible in a Year", value: "365 Days" },
                { label: "Gospel Study", value: "30 Days" },
                { label: "Psalms of Comfort", value: "14 Days" }
              ]
            },
            {
              title: "Personal Prayer Journal",
              description: "Private digital journal to write reflections, log answered prayers, and save favorite verses.",
              imageSrc: "https://img.b2bpic.net/free-photo/fitness-yoga-tourist-leisure-natural_1150-1004.jpg?_wi=3",
              imageAlt: "Journaling and prayer"
            },
            {
              title: "Multi-Translation Parallel Reader",
              description: "Compare verses across KJV, NIV, NKJV, ESV, and original Greek/Hebrew lexicons.",
              value: "25+",
              valueLabel: "translations supported"
            }
          ]}
        />
      </div>

      {/* Featured Reading Plans */}
      <div id="reading-plans" data-webild-section="GalleryTiltCards" data-section="reading-plans">
        <GalleryTiltCards
          tag="Curated Study Paths"
          title="Explore Featured Bible Reading Plans"
          description="Choose a reading plan designed for your current season of life."
          items={[
            {
              title: "Walking in Wisdom: Proverbs for Daily Life",
              tag: "30-Day Plan",
              date: "Proverbs Focus",
              description: "Daily practical wisdom for decision making, relationships, work ethic, and spiritual discernment.",
              href: "#ai-assistant",
              imageSrc: "https://img.b2bpic.net/free-photo/young-woman-writing-planner-cafe-table-morning_1098-20099.jpg?_wi=2",
              imageAlt: "Wisdom study plan"
            },
            {
              title: "The Life & Teachings of Jesus Christ",
              tag: "Gospels Track",
              date: "Matthew - John",
              description: "An immersive journey through the parables, miracles, death, and resurrection of Christ.",
              href: "#ai-assistant",
              imageSrc: "https://img.b2bpic.net/free-photo/sad-contemplative-person-near-lake_23-2150420650.jpg?_wi=3",
              imageAlt: "Gospels study plan"
            },
            {
              title: "Sabbath Rest & Renewal",
              tag: "7-Day Devotional",
              date: "Sabbath Focus",
              description: "Rediscover the blessing of holy rest, spiritual rejuvenation, and family worship on the Sabbath.",
              href: "#ai-assistant",
              imageSrc: "https://img.b2bpic.net/free-photo/fitness-yoga-tourist-leisure-natural_1150-1004.jpg?_wi=4",
              imageAlt: "Sabbath rest plan"
            },
            {
              title: "Foundations of Faith for Young Adults",
              tag: "Youth Track",
              date: "Apologetics",
              description: "Tackling hard questions about God, science, suffering, and purpose with biblical clarity.",
              href: "#ai-assistant",
              imageSrc: "https://img.b2bpic.net/free-photo/lovely-girl-with-tablet-sitting-sofa_23-2147833837.jpg?_wi=7",
              imageAlt: "Youth apologetics plan"
            }
          ]}
          linkLabel="Start Reading Plan"
          ariaLabel="Sevenfold reading plans list"
        />
      </div>

      {/* Faith & Bible FAQ */}
      <div id="faith-faq" data-webild-section="FaqTrayAccordion" data-section="faith-faq">
        <FaqTrayAccordion
          tag="Scripture & AI FAQ"
          title="Questions about Sevenfold"
          highlight="Bible tools"
          items={[
            {
              title: "How does Sevenfold AI handle Biblical accuracy?",
              description: "Sevenfold AI is engineered by Veltrix Technologies with strict theological guardrails. It references established Scripture translations, cross-references, and historical commentary without inventing non-Biblical doctrines."
            },
            {
              title: "Can I use Sevenfold for Sabbath School lesson prep?",
              description: "Absolutely. Thousands of Sabbath School teachers use Sevenfold AI to generate discussion questions, retrieve memory verse context, and prepare engaging handouts."
            },
            {
              title: "Are the Bible translations free to access?",
              description: "Yes. Core Scripture reading, daily devotionals, and basic Sevenfold AI queries are completely free for all registered users."
            }
          ]}
          help={{
            label: "Pastoral Assistance",
            title: "Need personalized study guidance?",
            description: "Reach out to our spiritual advisory board at Veltrix Technologies.",
            cta: {
              text: "Contact Study Team",
              href: "/contact"
            },
            imageSrc: "https://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1631.jpg?_wi=2",
            imageAlt: "Study team representative"
          }}
        />
      </div>

      {/* Devotional CTA Form */}
      <div id="faith-contact" data-webild-section="ContactDarkFormCard" data-section="faith-contact">
        <ContactDarkFormCard
          title="Receive Daily Scripture Devotionals in Your Inbox"
          formTitle="Subscribe to Daily Faith & Bible Feed"
          fields={{
            name: "Full Name",
            email: "Email Address",
            company: "Preferred Bible Translation",
            message: "Personal Study Goal or Prayer Request"
          }}
          placeholders={{
            name: "Mihle Ncube",
            email: "support@veltrixtechnologies.com",
            company: "NIV / NKJV",
            message: "I want to complete the Bible in one year..."
          }}
          submitText="Subscribe to Scripture Feed"
          successText="Subscribed! Check your inbox every morning for your daily devotional."
          imageSrc="https://img.b2bpic.net/free-photo/woman-using-digital-tablet-technology_23-2149491795.jpg?_wi=4"
          imageAlt="Devotional subscriber background"
        />
      </div>
    </>
  );
}
