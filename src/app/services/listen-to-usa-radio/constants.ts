import { WhyAmericanRadioContent } from "./interfaces";
import { FAQItem } from "../interfaces";

export const whyAmericanRadioData: WhyAmericanRadioContent = {
  heading: "Why American Radio Remains Popular Worldwide",

  introduction:
    "American radio has shaped global entertainment for decades. It is still popular among a large number of people in today's era due to many reasons.",

  subIntro: "Some of them are discussed below:",

  reasons: [
    {
      title: "Accessible Content & Global Appeal",
      description:
        "American radio stations offer a diverse range of formats from pop music to news talk. It also draws a huge audience across the world because it is free and requires only a single device.",
    },
    {
      title: "Strong Personalities and Local Feel",
      description:
        "Even with globalization, listeners value the 'local feel' that American radio provides through local, personable, and, at times, iconic on-air personalities.",
    },
    {
      title: "Convenience and In-Car Usage",
      description:
        "69% of the radio listening happens outside the home, especially during commutes, showing its ability to adapt and be relevant in this digital world.",
    },
    {
      title: "Information and Reliability",
      description:
        "In the era of misinformation for views and TRP, American radio is seen as a trustworthy, reliable, and quick source for news and emergency updates.",
    },
    {
      title: "Adaptability",
      description:
        "Radio has evolved with time, and now it includes new, digital, and online formats, thus allowing it to maintain its reach and engagement in multiple generations.",
    },
  ],

  conclusion:
    "Hence, many reasons are responsible for the popularity of the USA radio stations live, and it continues to attract listeners globally.",
};

// data/genres.ts



// 
// constants.ts
export const genres = [
  {
    id: 1,
    label: "Genre 1",
    title: "Pop & Top 40",
    icon: "Music",
    description: "Your description here...",
    stations: [
      { name: "Station 1" },
      { name: "Station 2" },
    ],
  },
  {
    id: 2,
    label: "Genre 2",
    title: "Rock & Alternative",
    icon: "Guitar",
    description: "Your description here...",
    stations: [
      { name: "Station 1" },
      { name: "Station 2" },
    ],
  },
  {
    id: 3,
    label: "Genre 3",
    title: "Hip-Hop & R&B",
    icon: "Mic2",
    description: "Your description here...",
    stations: [],
  },
  {
    id: 4,
    label: "Genre 4",
    title: "Jazz & Blues",
    icon: "Music2",
    description: "Your description here...",
    stations: [],
  },
  {
    id: 5,
    label: "Genre 5",
    title: "Country Music",
    icon: "Guitar",
    description: "Your description here...",
    stations: [],
  },
  {
    id: 6,
    label: "Genre 6",
    title: "News & Talk Radio",
    icon: "Radio",
    description: "Your description here...",
    stations: [],
  },
  {
    id: 7,
    label: "Genre 7",
    title: "Christian & Gospel",
    icon: "Heart",
    description: "Your description here...",
    stations: [],
  },
  {
    id: 8,
    label: "Genre 8",
    title: "EDM & Dance",
    icon: "Zap",
    description: "Your description here...",
    stations: [],
  },
];

export const faqData: FAQItem[] = [
  {
    question: "What is the most popular radio station in the US?",
    answer:
      "The most popular radio stations in the US vary by region and format, but nationally recognized stations include NPR, iHeartRadio stations, and major market leaders like WLTW (New York), KIIS-FM (Los Angeles), and WGN (Chicago). Popularity also depends on the genre—news, talk, or music.",
  },
  {
    question: "Is there FM radio in the USA?",
    answer:
      "Yes, FM radio is widely available throughout the USA. There are thousands of FM radio stations broadcasting across the country, covering music, news, talk shows, sports, and more. You can listen via traditional FM receivers or stream them online through apps like Tales FM.",
  },
  {
    question: "How to listen to online radio for free?",
    answer:
      "You can listen to online radio for free by downloading a radio streaming app like Tales FM. Simply install the app on your device, browse available stations, and start streaming instantly without any subscription fees or ads.",
  },
  {
    question: "What are the top 10 most listened to radio stations?",
    answer:
      "The top 10 most listened to radio stations in the US include a mix of news, talk, and music formats such as NPR stations, iHeartRadio network stations, WLTW (New York), KIIS-FM (Los Angeles), WBEZ (Chicago), and major sports talk stations. Rankings vary by market and listening demographics.",
  },
  {
    question: "Which music genres are popular on US radio?",
    answer:
      "Popular music genres on US radio include Pop & Top 40, Country, Rock, Hip-Hop & R&B, Alternative, Classic Rock, Jazz, Blues, and EDM. News & Talk radio formats are also extremely popular across the country.",
  },
];