import {
  SectionContent,
  RadioStationsData,
  PublicRadioData,
  MusicFocusedSectionData,
  CityRadioStations,
  RadioGenresData,
  FAQItem,
} from "../interfaces";
import {
  ListSectionData,
  ParagraphSectionData,
  GenreSectionData,
} from "./interfaces";
export const INDIAN_RADIO_DATA: SectionContent = {
  title: {
    text: "Indian Radio Online ",
    size: "6xl",
    weight: "900",
  },
  subtitle: "Listen to Live Radio Stations from India",
  paragraphs: [
    "India has always had a special and emotional relationship with radio. From devotional bhajans playing in the morning to Bollywood hits giving us company late at night, the radio has been an integral part of the country. Today, Indian radio online brings the same familiar experience to the digital world, making it even easier to stay connected through sound.",

    "With live radio stations available online, listeners can now explore a variety of music, news, talk shows, and regional programs, whether you are driving, doing household work, or relaxing at home.",

    "Whether you enjoy Hindi FM radio, regional language stations, or city-specific broadcasts, online radio allows you to experience India’s diversity. This page helps you discover and listen to live radio stations in India, organised by language, city, and genre, so you can tune in instantly and enjoy Indian radio anytime, anywhere. Here is what you are going to get from this page: ",
  ],
};

export const WHY_STILL_RADIO: SectionContent = {
  title: {
    text: "Why Radio Still Matters in India",
    size: "3xl",
    weight: "600",
  },
  paragraphs: [
    "In today's modern India, radio can be seen in daily indian life, whether it is in tea stalls, buses, homes, or even driving a car. Indians trust the radio for a variety of music, legitimate and true news, and even for companionship.",
    "In today's time, we have seen a shift from traditional FM to online radio, where you don't need any radio hardware; just visit the website or station and start listening.",
  ],
};

export const EXPLORE_INDIAN_RADIO: SectionContent = {
  title: {
    text: "Explore Indian Radio Stations Online by Category",
    size: "3xl",
    weight: "600",
  },
  paragraphs: ["Some of the popular radio stations online by category are:"],
};

export const RADIO_STATIONS_IN_INDIA: SectionContent = {
  title: {
    text: "1. FM Radio Stations in India",
    weight: "500",
    size: "2xl",
  },
  paragraphs: [
    "India has numerous popular FM radio stations, including commercial networks like Radio Mirchi, Red FM, Radio City, Big FM, and Fever FM, alongside public broadcaster All India Radio (AIR) channels such as Vividh Bharati, FM Gold, and FM Rainbow, offering music, news, and regional content on a variety of frequencies, with specific popular stations often varying by city and language (Hindi, English, Kannada, Tamil, etc.) showcasing its popular FM culture in metro & tier-2 cities of India.",
  ],
};

export const radioStationsData: RadioStationsData = {
  title: "1. FM Radio Stations in India",
  description:
    "India has numerous popular FM radio stations, including commercial networks like Radio Mirchi, Red FM, Radio City, Big FM, and Fever FM, alongside public broadcaster All India Radio (AIR) channels such as Vividh Bharati, FM Gold, and FM Rainbow, offering music, news, and regional content on a variety of frequencies, with specific popular stations often varying by city and language (Hindi, English, Kannada, Tamil, etc.) showcasing its popular FM culture in metro & tier-2 cities of India.",
  subheading: "Some popular radio stations across India are:",
  content: [
    {
      name: "Radio Mirchi",
      content: {
        Country: "India",
        Genre: ["Non-stop Hindi music"],
        Frequency: "98.3 FM",
        Languages: [
          "Punjabi",
          "Malayalam",
          "Tamil",
          "Bengali",
          "Gujarati",
          "Multilingual",
          "International",
          "Marathi",
        ],
      },
    },
    {
      name: "Red FM",
      content: {
        Country: "India",
        Genre: ["Bollywood", "talk", "rock", "dance"],
        Frequency: "93.5 FM",
        Languages: [
          "Telugu",
          "Punjabi",
          "Malayalam",
          "Tamil",
          "Kannada",
          "Bengali",
          "Gujarati",
          "Multilingual",
          "International",
          "Marathi",
        ],
      },
    },
    {
      name: "Big FM",
      content: {
        Country: "India",
        Genre: ["News", "talk"],
        Frequency: "92.7 FM",
        Languages: ["Hindi", "Telugu"],
      },
    },
    {
      name: "Fever FM",
      content: {
        Country: "India",
        Genre: ["Country"],
        Frequency:
          "104.0 MHz (Delhi, Mumbai, Bengal); Other frequencies 91.9 MHz (Chennai), 104.1 MHz (Bengaluru), 90.4 MHz (Hyderabad AIR)",
        Languages: ["Hindi", "English"],
      },
    },
    {
      name: "All India Radio (AIR Gold/Rainbow)",
      content: {
        Country: "India",
        Genre: ["Bollywood", "Western pop"],
        Frequency: "103.5 MHz, 101 MHz, 100.7 MHz, 101.9 MHz (Karnataka)",
        Languages: [
          "Hindi",
          "English",
          "Regional languages (e.g., Marathi Mumbai, Tamil Chennai, Kannada)",
        ],
      },
    },
    {
      name: "Vividh Bharati (AIR)",
      content: {
        Country: "India",
        Genre: ["Bollywood", "shows", "comedy"],
        Frequency: "104.5 MHz",
        Languages: ["Hindi and other regional languages"],
      },
    },
    {
      name: "Radio Nasha",
      content: {
        Country: "India",
        Genre: ["Country"],
        Frequency: "107.2 FM, 91.9 FM, 98.3 FM",
        Languages: ["Hindi"],
      },
    },
    {
      name: "My FM",
      content: {
        Country: "India",
        Genre: ["Bollywood"],
        Frequency: "94.3 FM",
        Languages: ["Hindi"],
      },
    },
  ],
};

export const publicRadioData: PublicRadioData = {
  title: "2. FM & Public Stations",
  description:
    "Public & widely accessible radio stations in India, dominated by national broadcaster All India Radio (AIR) and major commercial networks, including Akashvani, Vividh Bharati, FM Gold, Rainbow, Radio Mirchi and Red FM. These stations offer a mix of national, regional content and popular Bollywood songs.",
  subheading: "Some of the popular radio stations are:",
  stations: [
    {
      name: "Vividh Bharati (AIR) / Akashvani",
    },
    {
      name: "AIR FM Gold / Rainbow",
    },
    {
      name: "Radio Mirchi 98.3 FM",
    },
    {
      name: "Red FM 93.5 FM",
    },
  ],
};

export const musicFocusedData: MusicFocusedSectionData = {
  title: "3. Music-focused radio stations",
  description:
    "Music-focused radio stations, reach and focus on music programming (Bollywood, regional, retro), there are top 8:",
  stations: [
    { name: "Radio Mirchi 98.3 FM" },
    { name: "Red FM 93.5 FM" },
    { name: "Big City 104.8 FM" },
    { name: "AIR Rainbow (AIR FM)" },
    { name: "My FM 94.3" },
  ],
};

export const talkNewsCommunity: MusicFocusedSectionData = {
  title: "4. Talk, News & Community Radio",
  description:
    "Based on recent reports, awards, and the impact of radio in India, here is the list of five prominent talk, news, and community radio entities. These include national broadcasters and grassroots community stations that are influencing public dialogue:",
  stations: [
    { name: "All India Radio (AIR) / Akashvani" },
    { name: "Radio Mewat 90.4 FM (Haryana)" },
    { name: "Radio Bundelkhand 90.4 FM (Bundelkhand)" },
    { name: "Gurgaon ki Awaaz 107.8 FM (NCR)" },
    { name: "Radio Sharda 90.4 FM (Jammu & Kashmir)" },
  ],
};

// City Radio Stations
export const cityRadioStations: CityRadioStations = {
  title: "Indian Radio Stations by City & Region",
  description:
    "You can also find regional voices and city vibes through Indian radio online. A list of popular Indian radio stations by city and voice is as follows:",
  cities: [
    {
      name: "Delhi NCR Radio Stations",
      stations: [
        "1. Red FM 93.5 FM",
        "2. Red FM 93.5 FM",
        "3. Fever 104 FM",
        "4. BIG FM 92.7 FM",
        "5. Big FM 92.7 FM",
        "6. AIR FM Gold",
        "7. Ishq FM Gold",
      ],
    },
    {
      name: "Mumbai Radio Stations",
      stations: [
        "1. Red FM 93.5 FM",
        "2. Radio City 91.1 FM",
        "3. Radio Mirchi 98.3 FM",
        "4. Fever 104 FM",
        "5. Fever 104.7 FM",
        "6. Akashvani (AIR)",
        "7. Vividh Bharti",
      ],
    },
    {
      name: "Bangalore Radio Stations",
      stations: [
        "1. Red FM 93.5 FM",
        "2. Fever 91.1 FM",
        "3. Fever 104 FM",
        "4. BIG FM 92.7 FM",
        "5. Radio Mirchi 98.3 FM",
      ],
    },
    {
      name: "Chennai Radio Stations",
      stations: ["1. Hello FM 106.4 FM", "4. Red FM 93.7 FM", "4. BIG FM"],
    },
    {
      name: "Hyderabad Radio Stations",
      stations: [
        "1. Red FM 93.5 FM",
        "2. Mirchi 95.8 FM",
        "3. Fever 91 FM",
        "4. AIR FM 97 FM",
      ],
    },
    {
      name: "Kochi Radio Stations",
      stations: [
        "1. Radio Mirchi 98.3 FM",
        "2. Red FM 93.7 FM",
        "3. Fever 91 FM",
        "4. AIR FM Rainbow",
        "5. Radio City 91 FM",
      ],
    },
    {
      name: "Pune Radio Stations",
      stations: [
        "1. Radio City 91 FM",
        "2. Red FM 93.5 FM",
        "3. BIG 98.3 FM",
        "4. Fever 91 FM",
        "5. AIR FM Rainbow",
      ],
    },
    {
      name: "Ahmedabad Radio Stations",
      stations: ["1. Red FM 93.5 FM", "2. Fever 104 FM", "3. AIR FM Rainbow"],
    },
  ],
};

// Radio Genres

export const radioGenresData: RadioGenresData = {
  title: "Non-stop & Bhakti Radio",
  genres: [
    {
      name: "Bollywood",
      description:
        "Charts, film tracks that keep listeners engaged throughout the day",
    },
    {
      name: "Non-stop Bollywood",
      description:
        "Charts, film tracks that keep listeners engaged throughout the day",
    },
    {
      name: "Spiritual & Bhakti",
      description:
        "Radio stations featuring bhajans, kirtans, and religious music from different traditions",
    },
    {
      name: "News & Talk",
      description:
        "Live news updates, talks, interviews, and discussions on current affairs, lifestyle, social topics",
    },
    {
      name: "Retro & Old",
      description:
        "Songs from past decades that are timeless masterpieces and bring nostalgia",
    },
    {
      name: "Regional Folk",
      description:
        "Music from various Indian states, celebrating regional culture and heritage",
    },
    {
      name: "Youth & Indie",
      description:
        "Fresh independent artists and contemporary music for younger trend-seeking listeners",
    },
  ],
};

export const faqData: FAQItem[] = [
  {
    question: "Can I listen to FM online?",
    answer:
      "Yes, you can listen to FM radio online using Tales FM. Our app streams live FM stations from around the world directly to your device without needing any special hardware.",
  },
  {
    question: "How to listen FM on mobile?",
    answer:
      "Download Tales FM from your app store, open the app, browse or search for FM stations, and tap to start streaming instantly. No setup required!",
  },
  {
    question: "Do I need an FM receiver to listen?",
    answer:
      "No FM receiver needed! Tales FM streams radio stations over the internet, so you can listen on any smartphone, tablet, or computer with an internet connection.",
  },
  {
    question: "Which Indian radio stations are popular?",
    answer:
      "Popular Indian stations on Tales FM include Radio Mirchi, Red FM, All India Radio, Radio City, and BIG FM. Search for your city or favorite station in the app.",
  },
  {
    question: "Can I listen Indian radio stations for free?",
    answer:
      "Absolutely! Tales FM lets you listen to all Indian radio stations completely free with no subscriptions, ads interrupting your listening, or hidden costs.",
  },
];

export const SIMPLE_STEPS_DATA: ListSectionData = {
  heading: "Simple steps to listen to Indian radio online",
  description:
    "To experience vast Indian radio content online, just follow these easy steps and pick your mood -",
  items: [
    "Open the Tales FM website or app",
    "Choose a station by language, city, or genre",
    "Tap play and listen instantly",
    "Works on mobile, tablet, and desktop",
  ],
};

export const BENEFITS_DATA: ListSectionData = {
  heading: "Benefits of Listening to Indian Radio Online",
  description:
    "Listening to the radio online has many benefits compared to listening to traditional radio:",
  items: [
    "Free access to Indian radio stations",
    "No FM receiver needed",
    "Listen anytime, anywhere",
    "Wide variety of languages & genres",
    "Perfect for travel, work, relaxation, and many more...",
  ],
};

export const NRI_SECTION_DATA: ParagraphSectionData = {
  heading: "Indian Radio Online for NRIs & Global Listeners",
  paragraphs: [
    "For Indians living abroad, radio is often the easiest way to feel closer to home. With Indian Radio Online for NRI listeners, familiar voices, languages, and music help bridge the distance between countries and cultures.",
    "It's popular among students, professionals, and frequent travellers who want to stay in touch with their favourite music and shows.",
    "No matter where you are in the world, you can listen to Indian radio abroad and relive memories through songs, news, and shows that reflect India's diverse culture and spirit.",
  ],
};

export const INDIAN_GENRES_DATA: GenreSectionData = {
  heading: "Popular Indian Radio Genres",
  intro:
    "Indian online radio is as diverse as its culture. Whether you want to listen to Bollywood hits, or want to listen to bhajans, or are in the mood for thoughtful conversations, there is always a genre that matches your taste.",
  subIntro: "Here are some popular Indian radio genres:",
  genres: [
    {
      title: "Bollywood Radio",
      description:
        "Non-stop Bollywood hits, chartbusters, and film soundtracks that keep listeners engaged throughout the day.",
    },
    {
      title: "Devotional & Bhakti Radio",
      description:
        "Spiritual and peaceful radio stations featuring bhajans, kirtans, and religious music from different traditions.",
    },
    {
      title: "News & Talk Radio",
      description:
        "Live news updates, talk shows, interviews, and discussions on current affairs, lifestyle, and social topics.",
    },
    {
      title: "Retro & Old Songs",
      description:
        "Classic tracks from past decades that are timeless masterpieces and bring nostalgia.",
    },
    {
      title: "Regional Folk Music",
      description:
        "Local rhythms and traditional music from various Indian states, celebrating regional culture and heritage.",
    },
    {
      title: "Youth & Indie Music",
      description:
        "Fresh sounds, independent artists, and contemporary music for younger and trend-seeking listeners.",
    },
  ],
};
