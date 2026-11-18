export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/announcements', label: 'Announcements', pageFile: 'AnnouncementsPage' },
  { path: '/faith-bible', label: 'Bible & AI Assistant', pageFile: 'FaithBiblePage' },
  { path: '/church-directory', label: 'Church Directory', pageFile: 'ChurchDirectoryPage' },
  { path: '/events', label: 'Camps & Events', pageFile: 'EventsCampsPage' },
  { path: '/community', label: 'Community', pageFile: 'CommunityPage' },
  { path: '/about', label: 'About Us', pageFile: 'AboutPage' },
  { path: '/guidance', label: 'Guidance & Support', pageFile: 'GuidanceSupportPage' },
  { path: '/resources', label: 'Resources', pageFile: 'ResourcesPage' },
  { path: '/contact', label: 'Contact', pageFile: 'ContactPage' },
];
