import { Outlet } from "react-router-dom";
import NavbarFloatingPill from "@/components/navbars/NavbarFloatingPill";
import FooterTrayWordmark from "@/components/sections/footer/FooterTrayWordmark";

const SEVENFOLD_LOGO = "https://storage.googleapis.com/webild/users/user_3MBwI3XVBvHxlYLTnmPGfX8TZQZ/uploaded-1794908799837-b1l2ehmp.png";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="chip" data-card="deep" data-pattern="glow">
      <header data-webild-section="Header">
        <NavbarFloatingPill
          brand="Sevenfold"
          logoSrc={SEVENFOLD_LOGO}
          navItems={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Community", href: "/community" },
            { name: "Announcements", href: "/announcements" },
            { name: "Faith & Bible", href: "/faith-bible" },
            { name: "Guidance & Support", href: "/guidance" },
            { name: "Events & Camps", href: "/events" },
            { name: "Resources", href: "/resources" },
            { name: "Contact", href: "/contact" },
          ]}
          cta={{
            text: "Get Started",
            href: "/contact"
          }}
          introDelay={0.4}
        />
      </header>
      <main className="flex-grow pt-[4.5rem]" data-button="chip" data-card="deep" data-pattern="glow">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterTrayWordmark
          brand="SEVENFOLD"
          logoSrc={SEVENFOLD_LOGO}
          wordmark="SEVENFOLD"
          columns={[
            {
              title: "Ecosystem",
              links: [
                { text: "Home Overview", href: "/" },
                { text: "About Sevenfold", href: "/about" },
                { text: "Community Hub", href: "/community" },
                { text: "Faith & Bible AI", href: "/faith-bible" },
                { text: "Announcements", href: "/announcements" },
              ]
            },
            {
              title: "Ministries & Support",
              links: [
                { text: "Guidance & Support", href: "/guidance" },
                { text: "Events & Youth Camps", href: "/events" },
                { text: "Spiritual Resources", href: "/resources" },
                { text: "Church Onboarding", href: "/contact" },
              ]
            },
            {
              title: "Resources",
              links: [
                { text: "Sabbath School Prep", href: "/faith-bible" },
                { text: "Youth Mentorship", href: "/community" },
                { text: "Leadership Toolkits", href: "/resources" },
                { text: "Pastoral Helpline", href: "/guidance" },
              ]
            },
            {
              title: "Veltrix Technologies",
              links: [
                { text: "Founders: Mihle & Munyaradzi", href: "/about" },
                { text: "support@veltrixtechnologies.com", href: "mailto:support@veltrixtechnologies.com" },
                { text: "Get Started", href: "/contact" },
              ]
            }
          ]}
          copyright="© 2026 Veltrix Technologies. All rights reserved. SEVENFOLD — Faith. Community. Growth."
          topText="Back to top"
        />
      </footer>
    </div>
  );
}
