export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/about', label: 'About Sevenfold', pageFile: 'AboutPage' },
  { path: '/community', label: 'Community', pageFile: 'CommunityPage' },
  { path: '/announcements', label: 'Announcements', pageFile: 'AnnouncementsPage' },
  { path: '/faith-bible', label: 'Faith & Bible', pageFile: 'FaithBiblePage' },
  { path: '/guidance', label: 'Guidance & Support', pageFile: 'GuidanceSupportPage' },
  { path: '/events', label: 'Events & Camps', pageFile: 'EventsCampsPage' },
  { path: '/resources', label: 'Resources', pageFile: 'ResourcesPage' },
  { path: '/contact', label: 'Contact', pageFile: 'ContactPage' },
];
