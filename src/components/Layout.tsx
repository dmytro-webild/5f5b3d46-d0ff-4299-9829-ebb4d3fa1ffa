import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavbarFloatingPill from "@/components/navbars/NavbarFloatingPill";
import FooterTrayWordmark from "@/components/sections/footer/FooterTrayWordmark";
import CinematicLogoReveal from "@/components/CinematicLogoReveal";
import AuthModal, { type UserProfile } from "@/components/AuthModal";

const SEVENFOLD_LOGO = "https://storage.googleapis.com/webild/users/user_3MBwI3XVBvHxlYLTnmPGfX8TZQZ/uploaded-1794908799837-b1l2ehmp.png";

export default function Layout() {
  const [showForceReveal, setShowForceReveal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("sevenfold_active_user");
    if (stored) {
      try {
        setUserProfile(JSON.parse(stored));
      } catch {
        // ignore parse error
      }
    }
  }, []);

  const handleAuthSuccess = (user: UserProfile) => {
    setUserProfile(user);
  };

  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="chip" data-card="deep" data-pattern="glow">
      {/* Cinematic Logo Reveal Animation Component */}
      <CinematicLogoReveal
        forceShow={showForceReveal}
        onClose={() => setShowForceReveal(false)}
      />

      {/* User Authentication & Registration Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAuthSuccess={handleAuthSuccess}
      />

      <header data-webild-section="Header">
        <NavbarFloatingPill
          brand="Sevenfold"
          logoSrc={SEVENFOLD_LOGO}
          navItems={[
            { name: "Home", href: "/" },
            { name: "Announcements", href: "/announcements" },
            { name: "Bible & AI", href: "/faith-bible" },
            { name: "Directory", href: "/church-directory" },
            { name: "Camps & Events", href: "/events" },
            { name: "Community", href: "/community" },
            { name: "About Us", href: "/about" },
            { name: "Contact", href: "/contact" },
          ]}
          cta={{
            text: "Get Started",
            href: "/contact"
          }}
          introDelay={0.4}
          userProfile={userProfile}
          onOpenAuth={() => setShowAuthModal(true)}
          onReplayIntro={() => setShowForceReveal(true)}
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
              title: "SDA Ecosystem",
              links: [
                { text: "Home Overview", href: "/" },
                { text: "Announcements Hub", href: "/announcements" },
                { text: "Bible & AI Assistant", href: "/faith-bible" },
                { text: "Church Directory", href: "/church-directory" },
                { text: "Camps & Events", href: "/events" },
              ]
            },
            {
              title: "Ministries & Support",
              links: [
                { text: "Community & Fellowship", href: "/community" },
                { text: "About Sevenfold", href: "/about" },
                { text: "Guidance & Pastoral", href: "/guidance" },
                { text: "Resources & Toolkits", href: "/resources" },
                { text: "Church Onboarding", href: "/contact" },
              ]
            },
            {
              title: "Study & Growth",
              links: [
                { text: "Sabbath School Prep", href: "/faith-bible" },
                { text: "Youth & Pathfinder", href: "/events" },
                { text: "Leadership Suite", href: "/resources" },
                { text: "Global SDA Directory", href: "/church-directory" },
              ]
            },
            {
              title: "Veltrix Technologies",
              links: [
                { text: "Founders: Mihle & Munyaradzi", href: "/about" },
                { text: "support@veltrixtechnologies.com", href: "mailto:support@veltrixtechnologies.com" },
                { text: "Register Church", href: "/church-directory#register-church" },
              ]
            }
          ]}
          copyright="© 2026 Veltrix Technologies. All rights reserved. SEVENFOLD — FAITH. COMMUNITY. GROWTH."
          topText="Back to top"
        />
      </footer>
    </div>
  );
}
