export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  handle: string;
}

export const siteConfig = {
  name: "Sanatbek Bokijonov",
  headline: "Apple Developer Academy student in Naples, building apps with a backend engineer’s mindset.",
  bio: "I’m a developer from Tashkent, Uzbekistan, starting my journey at the Apple Developer Academy in Naples. My background is in backend development with Python, Django, APIs, and databases, and now I’m focused on turning that technical foundation into thoughtful apps and real products.",
  shortBio: "Turning a robust backend foundation into thoughtful apps and real mobile products at the Apple Developer Academy.",
  location: "Naples, Italy · Tashkent, Uzbekistan",
  currentRole: "Apple Developer Academy Student",
  statusBadge: "Apple Developer Academy · Naples",
  academy: "Apple Developer Academy @ Federico II",
  email: "bokijonovs@gmail.com",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/BokijonovS",
      iconName: "Github",
      handle: "github.com/BokijonovS",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bokijonovs/",
      iconName: "Linkedin",
      handle: "linkedin.com/in/bokijonovs",
    },
    {
      name: "Telegram",
      url: "https://t.me/bokijonov_s",
      iconName: "Send",
      handle: "@bokijonov_s",
    },
  ],
  navItems: [
    { label: "Overview", href: "#overview" },
    { label: "Apps", href: "#apps" },
    { label: "Backend Core", href: "#backend" },
    { label: "Academy Log", href: "#journey" },
    { label: "Skills", href: "#skills" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ],
};
