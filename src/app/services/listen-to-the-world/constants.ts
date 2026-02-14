import {FAQItem, ReviewTestimonial} from '../interfaces'
import { SectionContent } from '../interfaces';

export const heroSectionContent: SectionContent = {
  title: {
    text: "Tales FM – Your completely Free Online Radio App",
    size: "2xl",
    weight: "500",
  },
  paragraphs: [
    "Listen to live news, talk shows, sports radio, and music from every genre with a single radio app. Tales FM lets you stream FM stations from around the world with no ads and no subscriptions.",
    "Just open the app or website, choose a station, and start listening. It's radio the way it should be — simple, fast, and uninterrupted."
  ],
};


export const faqData: FAQItem[] = [
  {
    question: "Which radio app is free?",
    answer:
      "A reliable option is Tales FM, a free online radio app that lets you stream live FM radio, music, news, and talk shows without subscriptions. It works globally and offers uninterrupted listening with no hidden costs.",
  },
  {
    question: "Is there an app for FM radio?",
    answer:
      "Yes, there are several apps for FM radio. Tales FM is a popular choice that allows you to listen to FM radio stations from around the world on your mobile device or computer.",
  },
  {
    question: "How to listen FM radio on mobile?",
    answer:
      "To listen to FM radio on mobile, download a radio app like Tales FM from your app store. Open the app, browse or search for your favorite stations, and start streaming instantly.",
  },
  {
    question: "Where can I download a reliable free radio app for my device?",
    answer:
      "You can download Tales FM from the Apple App Store for iOS devices or Google Play Store for Android devices. It's completely free with no subscription required.",
  },
  {
    question: "How to download a free radio app for smartphones?",
    answer:
      "Simply visit your device's app store (App Store for iPhone or Play Store for Android), search for 'Tales FM' or your preferred radio app, and tap the download/install button. The app is free to download and use.",
  },
];

// reviews
export const testimonials:ReviewTestimonial[] = [
  {
    quote:
      "It has definitely given me access to radio stations all over the world. This app is very intuitive and user-friendly, setting it apart from other popular radio apps that are prone to crashing. This is highly recommended for anyone who frequently travels or commutes.",
    name: "TOM DAVIS",
    title: "Frequent Traveler",
  },
  {
    quote:
      "Best radio app I have tried so far. It keeps playing even when I use my GPS or other apps at the same time. No matter where my drive takes me, I can now tune into my beloved sports stations",
    name: "THOMAS",
    title: "Sports Enthusiast",
  },
  {
    quote: "I listen daily without ads. Clean and very simple.",
    name: "AVNEESH KUMAR",
    title: "Daily Listener",
  },
  {
    quote:
      "A reliable radio is essential for remote workers. I consider this free online FM radio my constant daily companion. It keeps me always productive and entertained throughout the day",
    name: "JAMES MITCHELL",
    title: "Remote Worker",
  },
  {
    quote:
      "The app, a treasure trove for music enthusiasts, it has opened up a world of global radio stations I was previously unaware of. It felt like having a dedicated, personal DJ who genuinely understood and anticipated my listening tastes",
    name: "MICHAEL WEBER",
    title: "Music Enthusiast",
  },
];
