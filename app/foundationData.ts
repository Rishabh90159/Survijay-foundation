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
    {
      name: "Sachin Kumar Gautam",
      role: "Director",
      photo: "/images/sachin-kumar-gautam-director.jpeg",
    },
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
    text: "To support education, community welfare and meaningful social initiatives that contribute toward stronger and more supported communities.",
  },
  {
    title: "Vision",
    text: "To help create communities where people have access to learning, support, opportunity and dignity.",
  },
  {
    title: "Approach",
    text: "To understand local needs, engage responsibly and focus on practical initiatives that create positive value.",
  },
];

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
    category: "Education",
    title: "Education & Learning",
    description:
      "Supporting education-focused activities and encouraging opportunities for continued learning.",
    image: "/images/banner-education.png",
  },
  {
    category: "Community",
    title: "Community Support",
    description:
      "Contributing to welfare activities designed around local community needs.",
    image: "/images/banner-community.png",
  },
  {
    category: "Awareness",
    title: "Awareness & Outreach",
    description:
      "Encouraging participation, awareness and stronger community connections.",
    image: "/images/banner-empowerment.png",
  },
];

export const heroSlides = [
  {
    src: "/images/carousel-education.png",
    alt: "Children studying in a learning environment",
    desktopPosition: "center",
    mobilePosition: "center",
  },
  {
    src: "/images/banner-education.png",
    alt: "Students reading and learning together",
    desktopPosition: "center",
    mobilePosition: "center",
  },
  {
    src: "/images/community-hero.png",
    alt: "Education support activity with children",
    desktopPosition: "center",
    mobilePosition: "center",
  },
  {
    src: "/images/banner-community.png",
    alt: "Community outreach and support activity",
    desktopPosition: "center",
    mobilePosition: "center",
  },
  {
    src: "/images/carousel-empowerment.png",
    alt: "Families and community participation",
    desktopPosition: "center",
    mobilePosition: "center",
  },
];

export const aboutImages = [
  {
    src: "/images/banner-education.png",
    alt: "Children and students in an education-focused setting",
  },
  {
    src: "/images/banner-community.png",
    alt: "Community support visual",
  },
  {
    src: "/images/carousel-health.png",
    alt: "People-focused social support visual",
  },
];

export const educationFocusItems = [
  "Learning Support",
  "Educational Awareness",
  "Continued Learning",
];

export const communityFocusItems = [
  "Community Welfare",
  "Family & Community Support",
  "Social Awareness",
  "Local Participation",
];

export const galleryImages = [
  {
    src: "/images/carousel-education.png",
    alt: "Students learning together",
    caption: "Education support",
  },
  {
    src: "/images/banner-community.png",
    alt: "Community engagement visual",
    caption: "Community engagement",
  },
  {
    src: "/images/banner-education.png",
    alt: "Children reading and studying",
    caption: "Learning environment",
  },
  {
    src: "/images/carousel-empowerment.png",
    alt: "Community participation visual",
    caption: "Community participation",
  },
  {
    src: "/images/banner-empowerment.png",
    alt: "Social support visual",
    caption: "Social support",
  },
  {
    src: "/images/community-hero.png",
    alt: "Education and community welfare visual",
    caption: "Community welfare",
  },
  {
    src: "/images/carousel-health.png",
    alt: "People-focused support visual",
    caption: "Welfare support",
  },
  {
    src: "/images/banner-health.png",
    alt: "Local support and awareness visual",
    caption: "Awareness",
  },
];

// Replace representative imagery with verified Survijay Foundation activity photos.
export const galleryConfig = {
  hero: "/images/carousel-education.png",
  intro: ["/images/banner-community.png", "/images/banner-education.png"],
  story: "/images/community-hero.png",
  categories: [
    { label: "All", value: "all" },
    { label: "Education", value: "education" },
    { label: "Community Support", value: "community" },
    { label: "Social Awareness", value: "awareness" },
    { label: "Participation", value: "participation" },
  ],
  featured: [
    {
      id: 1,
      type: "image",
      image: "/images/carousel-education.png",
      alt: "Children participating in a learning activity",
      category: "education",
      categoryLabel: "Education & Learning",
      title: "Learning Together",
      description: "Encouraging participation in learning-focused activities.",
    },
    {
      id: 2,
      type: "image",
      image: "/images/banner-community.png",
      alt: "Community members participating together",
      category: "community",
      categoryLabel: "Community Support",
      title: "Community Connection",
      description: "Community engagement built around practical local needs.",
    },
    {
      id: 3,
      type: "image",
      image: "/images/carousel-empowerment.png",
      alt: "People taking part in a community setting",
      category: "participation",
      categoryLabel: "Social Participation",
      title: "Working Together",
      description: "Bringing people together through awareness and involvement.",
    },
  ],
  items: [
    {
      id: 101,
      type: "image",
      image: "/images/carousel-education.png",
      alt: "Students learning together",
      category: "education",
      categoryLabel: "Education",
      title: "Learning Together",
      description: "A moment focused on learning and participation.",
    },
    {
      id: 102,
      type: "image",
      image: "/images/banner-education.png",
      alt: "Children reading and studying",
      category: "education",
      categoryLabel: "Education",
      title: "Supporting Education",
      description: "Encouraging continued interest in learning.",
    },
    {
      id: 103,
      type: "image",
      image: "/images/community-hero.png",
      alt: "Children learning outdoors",
      category: "education",
      categoryLabel: "Education",
      title: "Growing Through Learning",
      description: "Education-focused participation in a community setting.",
    },
    {
      id: 104,
      type: "image",
      image: "/images/banner-community.png",
      alt: "Community engagement visual",
      category: "community",
      categoryLabel: "Community Support",
      title: "Community Support",
      description: "People-centred community engagement.",
    },
    {
      id: 105,
      type: "image",
      image: "/images/carousel-empowerment.png",
      alt: "Community participation visual",
      category: "participation",
      categoryLabel: "Participation",
      title: "Community Participation",
      description: "People taking part in positive community action.",
    },
    {
      id: 106,
      type: "image",
      image: "/images/banner-empowerment.png",
      alt: "Social support visual",
      category: "community",
      categoryLabel: "Community Support",
      title: "Local Support",
      description: "A focus on welfare and responsible support.",
    },
    {
      id: 107,
      type: "image",
      image: "/images/carousel-health.png",
      alt: "People-focused support visual",
      category: "awareness",
      categoryLabel: "Social Awareness",
      title: "Social Awareness",
      description: "Encouraging awareness and shared responsibility.",
    },
    {
      id: 108,
      type: "image",
      image: "/images/banner-health.png",
      alt: "Local support and awareness visual",
      category: "awareness",
      categoryLabel: "Social Awareness",
      title: "Awareness",
      description: "Supporting communication and participation.",
    },
    {
      id: 109,
      type: "image",
      image: "/images/banner-community.png",
      alt: "Community members in a learning environment",
      category: "participation",
      categoryLabel: "Participation",
      title: "Working Together",
      description: "Community connection through participation.",
    },
    {
      id: 110,
      type: "image",
      image: "/images/banner-education.png",
      alt: "Students and learning materials",
      category: "education",
      categoryLabel: "Education",
      title: "Learning Environment",
      description: "A learning-focused community moment.",
    },
    {
      id: 111,
      type: "image",
      image: "/images/banner-empowerment.png",
      alt: "People gathered for community support",
      category: "community",
      categoryLabel: "Community Support",
      title: "Community Care",
      description: "Supporting practical local needs.",
    },
    {
      id: 112,
      type: "image",
      image: "/images/carousel-empowerment.png",
      alt: "Community interaction and participation",
      category: "participation",
      categoryLabel: "Participation",
      title: "Participation",
      description: "People coming together around shared needs.",
    },
    {
      id: 113,
      type: "image",
      image: "/images/community-hero.png",
      alt: "Children taking part in learning",
      category: "education",
      categoryLabel: "Education",
      title: "Learning Moment",
      description: "A simple moment around education and participation.",
    },
    {
      id: 114,
      type: "image",
      image: "/images/banner-community.png",
      alt: "People gathered in a community setting",
      category: "community",
      categoryLabel: "Community Support",
      title: "Community Connection",
      description: "Community support shaped around shared needs.",
    },
    {
      id: 115,
      type: "image",
      image: "/images/banner-health.png",
      alt: "People-focused awareness visual",
      category: "awareness",
      categoryLabel: "Social Awareness",
      title: "Awareness Moment",
      description: "Encouraging awareness and communication.",
    },
    {
      id: 116,
      type: "image",
      image: "/images/carousel-empowerment.png",
      alt: "Community participation and connection",
      category: "participation",
      categoryLabel: "Participation",
      title: "Shared Participation",
      description: "People taking part in community-focused activity.",
    },
  ],
};

// Replace representative imagery with verified Survijay Foundation activity photographs.
export const workImages = {
  hero: "/images/community-hero.png",
  introduction: [
    "/images/banner-education.png",
    "/images/banner-community.png",
    "/images/carousel-empowerment.png",
  ],
  education: [
    "/images/carousel-education.png",
    "/images/banner-education.png",
    "/images/community-hero.png",
  ],
  community: [
    "/images/banner-community.png",
    "/images/carousel-empowerment.png",
  ],
  welfare: "/images/banner-empowerment.png",
  storyBreak: "/images/carousel-health.png",
  gallery: galleryImages,
};

export const initiatives = [
  {
    category: "Education",
    title: "Education Support",
    description:
      "Encouraging learning opportunities, educational awareness and continued participation in education.",
    image: "/images/carousel-education.png",
    date: "",
    location: "",
  },
  {
    category: "Community",
    title: "Social & Community Support",
    description:
      "Supporting stronger community connections and participation in local welfare initiatives.",
    image: "/images/banner-community.png",
    date: "",
    location: "",
  },
  {
    category: "Welfare",
    title: "Community Welfare",
    description:
      "Focusing on practical local needs and responsible community engagement.",
    image: "/images/banner-empowerment.png",
    date: "",
    location: "",
  },
  {
    category: "Awareness",
    title: "Awareness & Participation",
    description:
      "Encouraging awareness, communication and responsible participation.",
    image: "/images/banner-health.png",
    date: "",
    location: "",
  },
];

export const involvementImages = {
  hero: "/images/banner-community.png",
  intro: "/images/carousel-empowerment.png",
  volunteer: "/images/carousel-education.png",
  partner: "/images/banner-education.png",
  support: "/images/banner-empowerment.png",
  finalCta: "/images/community-hero.png",
};

export const involvementOptions = [
  {
    title: "Volunteer",
    value: "Volunteer",
    description:
      "Contribute your time and skills to education, awareness and community-focused activities.",
    cta: "Become a Volunteer",
  },
  {
    title: "Partner With Us",
    value: "Partner With Survijay Foundation",
    description:
      "Connect with us to explore opportunities for collaboration around education and community welfare.",
    cta: "Explore Partnership",
  },
  {
    title: "Support Our Work",
    value: "Support an Initiative",
    description:
      "Help strengthen our initiatives through participation, resources, awareness or other forms of responsible support.",
    cta: "Support an Initiative",
  },
];

export const foundationImages = {
  hero: "/images/community-hero.png",
  about: "/images/banner-community.png",
  gallery: galleryImages.slice(0, 3).map((image) => ({
    ...image,
    date: "",
    location: "",
  })),
};

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

export const organisationDetails = [
  ["Legal Name", foundationConfig.legalName],
  ["CIN", foundationConfig.cin],
  ["Registration Number", foundationConfig.registrationNumber],
  ["Incorporated", foundationConfig.incorporationDate],
  ["Registrar", foundationConfig.registrar],
  ["Status", foundationConfig.status],
  ["Registered Address", foundationConfig.address],
];
