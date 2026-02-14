import { SectionContent } from "../interfaces";
import { MusicFocusedSectionData } from "../interfaces";
import { FAQItem } from "../interfaces";

export const LIVE_RADIO_STATIONS: SectionContent = {
  title: {
    text: "Listen to Live Radio Stations from anywhere around the Globe",
    size: "4xl",
    weight: "700",
  },
  paragraphs: [
    "Tales FM offers seamless, real-time streaming of global live radio stations. Access everything from well-known FM channels to exclusive internet broadcasters, enjoying content from major countries and the rest of the world, all consolidated in a single platform.",
  ],
};

export const musicFocusedSectionData: MusicFocusedSectionData = {
  title: "What you can listen to:",
  description:
    "Listen to live radio stations from anywhere around the globe. Access known FM broadcasters, enjoying content from major countries and the rest of the world, all consolidated in a single platform.",
  stations: [
    { name: "Music radio stations (pop, rock, jazz, classical, indie & more)" },
    { name: "Live news & talk shows" },
    { name: "Pop, Jazz, Classical & more" },
    { name: "Sports & live radio stations" },
    { name: "Cultural community radio" },
  ],
};

export const browseRadioStations: MusicFocusedSectionData = {
  title: "Browse Radio Stations Your Way",
  description: "Finding the perfect station is super easy here.",
  stations: [
    { name: "Browse by Genre – music, news, sports, talk & more" },
    { name: "Browse by country & region" },
    { name: "Discover Trending Stations – popular and editor-picked channels" },
    { name: "Save Favorites – instant access anytime" },
  ],
};

export const howTalesFMWorks: MusicFocusedSectionData = {
  title: "How Tales FM Works",
  description: "Listening to live radio on Tales FM is seamless:",
  stations: [
    { name: "Open Tales FM on the web or mobile" },
    { name: "Browse or search by genre or country" },
    { name: "Tap a station and start listening live" },
    { name: "Save favorites for quick access later" },
  ],
};

export const popularRadioCategories: MusicFocusedSectionData = {
  title: "Popular Radio Categories on Tales FM",
  description: "Explore radio stations based on what you love:",
  stations: [
    { name: "Trending Music Stations" },
    { name: "International & Regional Radio" },
    { name: "News & Talk Radio" },
    { name: "Chill & Relaxing Stations" },
    { name: "Energy & Workout Radio" },
    { name: "Community & Cultural Radio" },
  ],
};

export const faqData: FAQItem[] = [
  {
    question: "What is meant by a radio station?",
    answer:
      "A radio station is a broadcasting service that transmits audio content over radio waves or the internet. Radio stations can feature various formats including music, news, talk shows, sports coverage, and cultural programming. Traditional stations broadcast via AM/FM frequencies, while online radio stations stream content directly through the internet, making them accessible worldwide on any device.",
  },
  {
    question: "How to Listen to FM Radio?",
    answer:
      "You can listen to FM radio in several ways: using a traditional FM radio receiver, through your smartphone with apps like Tales FM, or via online streaming platforms. For the easiest experience, download Tales FM - a free app that lets you access thousands of FM radio stations from around the world. Simply open the app, browse or search for your favorite station, and start listening instantly without any subscriptions or fees.",
  },
  {
    question: "Which free apps stream international radio?",
    answer:
      "Tales FM is a leading free app for streaming international radio stations. It offers ad-free access to thousands of live radio stations from countries around the globe, covering music, news, talk shows, and cultural broadcasts. The app works on both web and mobile platforms, requires no subscription, and lets you discover stations by genre, country, or region with just a single tap.",
  },
  {
    question: "How to find local radio stations online?",
    answer:
      "Finding local radio stations online is simple with Tales FM. Open the app and use the 'Browse by Country & Region' feature to filter stations by your location. You can also search directly for your city or region name to discover local stations. Tales FM provides instant access to local news, music, and community broadcasts from your area, all available for free on your device.",
  },
  {
    question: "Which radio is popular?",
    answer:
      "Popular radio stations vary by region and genre, but Tales FM helps you discover trending stations worldwide. The app features a 'Trending Stations' section showcasing the most popular and editor-picked channels across different categories including music, news, sports, and talk radio. From global hits to local favorites, you can explore what's popular in your area or discover trending stations from around the world.",
  },
];
