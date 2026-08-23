export const foundationConfig = {
  name: "Survijay Foundation",
  legalName: "SURVIJAY FOUNDATION",
  cin: "U85320UP2022NPL167131",
  registrationNumber: "167131",
  incorporationDate: "06 July 2022",
  establishedYear: "2022",
  status: "Active",
  registrar: "RoC Kanpur",
  classification: "Non-government company",
  activity: "Social work activities without accommodation",
  city: "Rampur",
  state: "Uttar Pradesh",
  location: "Rampur, Uttar Pradesh",
  address:
    "House No-17, Village Faizulla Nagar, Post Lamwa Kheda, Tehsil Tanda, Rampur, Uttar Pradesh - 244925",
  directors: [
    { name: "Sachin Kumar Gautam", role: "Director", photo: "" },
    { name: "Vijay Laxmi", role: "Director", photo: "" },
  ],
  phone: "+91 94580 24905",
  whatsapp: "919458024905",
  email: "survijayfoundation@gmail.com",
  mapsUrl: "",
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
    title: "Mission",
    text: "To support meaningful social welfare initiatives and contribute toward stronger, more supported communities.",
  },
  {
    title: "Vision",
    text: "To encourage a society where people have greater access to support, opportunity and dignity.",
  },
  {
    title: "Approach",
    text: "To understand local needs, work responsibly and focus on initiatives that create practical value for communities.",
  },
];

// Confirm actual Survijay Foundation programs before production.
export const focusAreas = [
  {
    title: "Community Welfare",
    text: "Supporting initiatives that respond to local community needs.",
  },
  {
    title: "Social Support",
    text: "Connecting people with support, awareness and community-focused initiatives.",
  },
  {
    title: "Community Development",
    text: "Encouraging long-term social participation and stronger local communities.",
  },
  {
    title: "Outreach & Awareness",
    text: "Creating opportunities for communication, participation and social awareness.",
  },
];

export const workAreas = [
  {
    title: "Community Initiatives",
    description:
      "Supporting activities designed around identified community needs.",
    location: "",
    date: "",
    image: "",
  },
  {
    title: "Social Outreach",
    description:
      "Encouraging participation, awareness and stronger connections within communities.",
    location: "",
    date: "",
    image: "",
  },
  {
    title: "Welfare Support",
    description:
      "Contributing to initiatives that support individuals, families and local communities.",
    location: "",
    date: "",
    image: "",
  },
];

export const getInvolvedOptions = [
  {
    title: "Volunteer",
    text: "Connect with us if you would like to contribute your time and skills to community initiatives.",
  },
  {
    title: "Partner With Us",
    text: "We welcome conversations with individuals and organisations interested in collaborative social initiatives.",
  },
  {
    title: "Support Our Work",
    text: "Get in touch to learn more about ways to support Survijay Foundation and its activities.",
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
      location: "",
    },
    {
      src: "/images/banner-education.png",
      alt: "Community support visual for Survijay Foundation website",
      caption: "Social support",
      date: "",
      location: "",
    },
    {
      src: "/images/banner-empowerment.png",
      alt: "Community development visual for Survijay Foundation website",
      caption: "Community development",
      date: "",
      location: "",
    },
  ],
};

export const organisationDetails = [
  ["Legal Name", foundationConfig.legalName],
  ["CIN", foundationConfig.cin],
  ["Registration Number", foundationConfig.registrationNumber],
  ["Incorporated", foundationConfig.incorporationDate],
  ["Registrar", foundationConfig.registrar],
  ["Status", foundationConfig.status],
  ["Registered Address", foundationConfig.address],
];
