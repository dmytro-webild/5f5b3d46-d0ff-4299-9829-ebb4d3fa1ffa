import { Outlet } from "react-router-dom";
import NavbarFloatingPill from "@/components/navbars/NavbarFloatingPill";
import FooterTrayWordmark from "@/components/sections/footer/FooterTrayWordmark";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="chip" data-card="deep" data-pattern="glow">
      <header data-webild-section="Header">
        <NavbarFloatingPill
          brand="Sevenfold"
          navItems={[
            {
              name: "Overview",
              href: "#home"
            },
            {
              name: "Features",
              href: "#services"
            },
            {
              name: "Pricing",
              href: "#pricing"
            },
            {
              name: "Community",
              href: "#customers"
            },
            {
              name: "FAQ",
              href: "#faq-tray-accordion-1"
            }
          ]}
          cta={{
            text: "Get Started",
            href: "#contact-dark-form-card"
          }}
          introDelay={1.2}
        />
      </header>
      <main className="flex-grow" data-button="chip" data-card="deep" data-pattern="glow">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterTrayWordmark
          brand="Sevenfold"
          wordmark="Sevenfold"
          columns={[
            {
              title: "Ecosystem",
              links: [
                {
                  text: "Core Features",
                  href: "#services"
                },
                {
                  text: "Sevenfold AI",
                  href: "#services"
                },
                {
                  text: "Plans & Pricing",
                  href: "#pricing"
                },
                {
                  text: "Community Showcase",
                  href: "#customers"
                }
              ]
            },
            {
              title: "Ministries",
              links: [
                {
                  text: "Youth & Young Adults",
                  href: "#services"
                },
                {
                  text: "Church Leaders",
                  href: "#services"
                },
                {
                  text: "Bible & Devotionals",
                  href: "#home"
                }
              ]
            },
            {
              title: "Resources",
              links: [
                {
                  text: "Frequently Asked Questions",
                  href: "#faq-tray-accordion-1"
                },
                {
                  text: "Veltrix Support",
                  href: "#contact-dark-form-card"
                },
                {
                  text: "Privacy & Terms",
                  href: "#"
                }
              ]
            },
            {
              title: "Contact",
              links: [
                {
                  text: "support@veltrixtechnologies.com",
                  href: "mailto:support@veltrixtechnologies.com"
                },
                {
                  text: "+1 (800) 554-7383",
                  href: "tel:+18005547383"
                },
                {
                  text: "100 Innovation Way, Austin, TX",
                  href: "#"
                }
              ]
            }
          ]}
          copyright="© 2026 Veltrix Technologies. All rights reserved."
          topText="Back to top"
        />
      </footer>
    </div>
  );
}
