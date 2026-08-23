export const foundationConfig = {
  name: "Survijay Foundation",
  cin: "U85320UP2022NPL167131",
  registrationNumber: "167131",
  incorporationDate: "06 July 2022",
  establishedYear: "2022",
  status: "Active",
  registrar: "RoC Kanpur",
  classification: "Non-government company",
  activity: "Social work activities without accommodation",
  location: "Rampur, Uttar Pradesh",
  address:
    "House No-17, Village Faizulla Nagar, Post Lamwa Kheda, Tehsil Tanda, Rampur, Uttar Pradesh - 244925",
  directors: [
    { name: "Sachin Kumar Gautam", role: "Director", photo: "" },
    { name: "Vijay Laxmi", role: "Director", photo: "" },
  ],
  phone: "",
  whatsapp: "",
  email: "",
  googleMapsUrl: "",
  facebook: "",
  instagram: "",
  youtube: "",
};

export const navigationItems = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Our Work", "/programs"],
  ["Get Involved", "/get-involved"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export const purposeContent = [
  {
    title: "Our Mission",
    text: "To contribute toward meaningful social welfare initiatives and support communities through responsible and compassionate action.",
  },
  {
    title: "Our Vision",
    text: "To help create communities where people have greater access to support, opportunity and dignity.",
  },
  {
    title: "Our Approach",
    text: "Working closely with communities and focusing on initiatives that can create practical and lasting value.",
  },
];

// Confirm actual Survijay Foundation programs before production.
export const focusAreas = [
  {
    title: "Community Welfare",
    text: "Broad social welfare efforts aligned with the foundation's registered activity.",
  },
  {
    title: "Social Support",
    text: "Practical support pathways for communities that need care, guidance, and connection.",
  },
  {
    title: "Community Development",
    text: "Community-focused initiatives shaped around local needs and responsible participation.",
  },
];

export const workAreas = [
  {
    title: "Community Initiatives",
    description:
      "Verified community-level initiatives will be documented here with dates, locations, and activity details.",
    location: "",
    date: "",
    image: "",
  },
  {
    title: "Social Welfare Activities",
    description:
      "Field activities connected to social work and community welfare will be added with official records.",
    location: "",
    date: "",
    image: "",
  },
  {
    title: "Support & Outreach",
    description:
      "Outreach notes and photographs will be published with clear source details once confirmed.",
    location: "",
    date: "",
    image: "",
  },
];

export const getInvolvedOptions = [
  {
    title: "Volunteer",
    text: "Give your time and skills to support community initiatives.",
  },
  {
    title: "Partner With Us",
    text: "Organisations and individuals can connect with us to explore opportunities to work together.",
  },
  {
    title: "Support Our Work",
    text: "Get in touch to learn how you can support Survijay Foundation's initiatives.",
  },
];

export const foundationImages = {
  // Replace with real Survijay Foundation activity photograph.
  hero: "/images/community-hero.png",
  about: "/images/banner-community.png",
  // REPLACE WITH REAL SURVIJAY FOUNDATION PHOTOS.
  gallery: [
    {
      src: "/images/banner-community.png",
      alt: "Community welfare visual for Survijay Foundation website",
      caption: "Community welfare",
      date: "",
      location: "Rampur, Uttar Pradesh",
    },
    {
      src: "/images/banner-education.png",
      alt: "Community support visual for Survijay Foundation website",
      caption: "Social support",
      date: "",
      location: "Rampur, Uttar Pradesh",
    },
    {
      src: "/images/banner-empowerment.png",
      alt: "Community development visual for Survijay Foundation website",
      caption: "Community development",
      date: "",
      location: "Rampur, Uttar Pradesh",
    },
  ],
};

export const organisationDetails = [
  ["Organisation", foundationConfig.name],
  ["CIN", foundationConfig.cin],
  ["Registration Number", foundationConfig.registrationNumber],
  ["Incorporated", foundationConfig.incorporationDate],
  ["Registrar", foundationConfig.registrar],
  ["Status", foundationConfig.status],
  ["Registered Address", foundationConfig.address],
];
