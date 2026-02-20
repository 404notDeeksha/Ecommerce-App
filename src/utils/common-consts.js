export const SIDEBAR_STATE = {
  NONE: `none`,
  CLOSE: `closed`,
  OPEN: `OPEN`,
};

const sidebarCategories = [
  {
    category: "Trending",
    subCategories: [
      { id: "BES-BES-QW2J8", subCategory: "Best Sellers" },
      { id: "NEW-REL-QD8MK", subCategory: "New Releases" },
      { id: "MOV-MOV-MG6P3", subCategory: "Movers and Shakers" },
    ],
  },
  {
    category: "Digital Content",
    subCategories: [
      { id: "AMA-MIN-1D9F4", subCategory: "Amazon miniTV- FREE entertainment" },
      { id: "ECH-ALX-X9G76", subCategory: "Echo & Alexa" },
      { id: "FIR-FIR-0H2J9", subCategory: "Fire TV" },
      { id: "KIN-ERE-4G3K1", subCategory: "Kindle E-Readers & eBooks" },
      { id: "AUD-AUD-LP8Z5", subCategory: "Audible Audiobooks" },
      { id: "AMA-PRI-K7D3A", subCategory: "Amazon Prime Video" },
      { id: "AMA-PRI-X8N5F", subCategory: "Amazon Prime Music" },
    ],
  },

  {
    category: "Shop Category",
    subCategories: [
      { id: "MOB-MOB-F3QW7", subCategory: "Mobiles, Computers" },
      { id: "TVA-APL-M2J10", subCategory: "TV, Appliances, Electronics" },
      { id: "MEN-MEN-S0V6E", subCategory: "Men's Fashion" },
      { id: "WOM-WOM-K5D8R", subCategory: "Women's Fashion" },
      { id: "HOM-HOM-Q2T4Z", subCategory: "Home, Kitchen, Pets" },
      { id: "BEA-BEA-L8S5Y", subCategory: "Beauty, Health, Grocery" },
      { id: "SPO-SPO-M5V3H", subCategory: "Sports, Fitness, Bags, Luggage" },
      {
        id: "TOY-TOY-N1K2P",
        subCategory: "Toys, Baby Products, Kids' Fashion",
      },
      { id: "CAR-CAR-D4P0M", subCategory: "Car, Motorbike, Industrial" },
      { id: "BOO-BOO-B9Q2E", subCategory: "Books" },
      { id: "MOV-MOV-K0H8A", subCategory: "Movies, Music & Video Games" },
    ],
  },

  {
    category: "Programs & Features",
    subCategories: [
      { id: "AMA-AMA-L7D6P", subCategory: "Amazon Pay" },
      { id: "GIF-GIF-A9F1K", subCategory: "Gift Cards & Mobile Recharges" },
      { id: "AMA-LAU-H5P2Y", subCategory: "Amazon Launchpad" },
      { id: "AMA-BUS-J3R0F", subCategory: "Amazon Business" },
      { id: "HAN-HAN-9F2V5", subCategory: "Handloom and Handicrafts" },
      { id: "AMA-SA-4G9V3", subCategory: "Amazon Saheli" },
      { id: "AMA-COM-W5P6F", subCategory: "Amazon Combos" },
      { id: "AMA-CUS-K9A8T", subCategory: "Amazon Custom" },
      { id: "FLI-FLI-M7L2A", subCategory: "Flight Tickets" },
      { id: "BUY-BUY-S6M5O", subCategory: "Buy more, Save more" },
      { id: "CLE-CLE-R9T8V", subCategory: "Clearance store" },
      { id: "INT-INT-J0B5P", subCategory: "International Brands" },
    ],
  },

  {
    category: "Help & Settings",
    subCategories: [{ id: "CUS-CUS-Z4G2X", subCategory: "Customer Service" }],
  },
];

export const getCategoryData = () => {
  return sidebarCategories;
};

export const languages = [
  { id: 615221, value: "EN", category: "English" },
  { id: 339942, value: "HI", category: "हिंदी" },
  { id: 443921, value: "TA", category: "தமிழ்" },
  { id: 717569, value: "TE", category: "తెలుగు" },
  { id: 945110, value: "KN", category: "ಕನ್ನಡ" },
  { id: 733527, value: "MA", category: "മലയാളം" },
  { id: 128451, value: "BN", category: "বাংলা" },
  { id: 294583, value: "MR", category: "मराठी" },
];

export const accountMenu = [
  {
    section: "left",
    title: "Your Lists",
    items: [
      {
        value: "wishlist",
        category: "Create a Wish List",
      },
      {
        value: "wishlist_Other",
        category: "Wish from Any Website",
      },
      {
        value: "baby_Wishlist",
        category: "Baby Wishlist",
      },
      {
        value: "style",
        category: "Discover Your Style",
      },
      {
        value: "showroom",
        category: "Explore Showroom",
      },
    ],
  },
  {
    section: "right",
    title: "Your Account",
    items: [
      {
        value: "account",
        category: "Your Account",
      },
      {
        value: "orders",
        category: "Your Orders",
      },
      {
        value: "wishlist",
        category: "Your Wish List",
      },
      {
        value: "recommendations",
        category: "Your Recommendations",
      },
      {
        value: "prime",
        category: "Your Prime Membership",
      },
      {
        value: "prime_vedio",
        category: "Your Prime Vedio",
      },
      {
        value: "subscribe",
        category: "Your Subscribe",
      },
      {
        value: "memberships",
        category: "Memberships & Subscriptions",
      },
      {
        value: "seller_account",
        category: "Your Seller Account",
      },
    ],
  },
];

const searchList = [
  { value: "allCategories", category: "All Categories" },
  { value: "alexa-skills", category: " Alexa Skills" },
  { value: "amazon-devices", category: "Amazon Devices" },
  { value: "fashion", category: "Amazon Fashion" },
  { value: "nowstore", category: "Amazon Fresh" },
  { value: "amazon-pharmacy", category: "Amazon Pharmacy" },
  { value: "appliances", category: "Appliances" },
  { value: "mobile-apps", category: "Apps & Games" },
  { value: "audible", category: "Audible Audiobooks" },
  { value: "baby", category: "Baby" },
  { value: "stripbooks", category: "Beauty" },
  { value: "automotive", category: "Car & Motorbike" },
  { value: "apparel", category: "Clothing & Accessories" },
  { value: "collectibles", category: "Collectibles" },
  { value: "computers", category: "Computers & Accessories" },
  { value: "todays-deals", category: "Deals" },
  { value: "electronics", category: "Electronics" },
  { value: "furniture", category: "Furniture" },
  { value: "lawngarden", category: "Garden & Outdoors" },
  { value: "gift-cards", category: "Gift Cards" },
  { value: "grocery", category: "Grocery & Gourmet Foods" },
  { value: "hpc", category: "Health & Personal Care" },
  { value: "kitchen", category: "Home & Kitchen" },
  { value: "industrial", category: "Industrial & Scientific" },
  { value: "jewelry", category: "Jewellery" },
  { value: "digital-text", category: "Kindle Store" },
  { value: "luggage", category: "Luggage & Bags" },
  { value: "luxury-beauty", category: "Luxury Beauty" },
  { value: "dvd", category: "Movies & TV Shows" },
  { value: "digital-music", category: "MP3 Music" },
  { value: "popular", category: "Music" },
  { value: "mi", category: "Musical Instruments" },
  { value: "office-products", category: "Office Products" },
  { value: "pets", category: "Pet Supplies" },
  { value: "instant-vedio", category: "Prime Vedio" },
  { value: "shoes", category: "Shoes & Handbags" },
  { value: "software", category: "Software" },
  { value: "sporting", category: "Sports, Fitness & Outdoors" },
  { value: "speciality-aps-sns", category: "Subscribe & Save" },
  { value: "home-improvement", category: "Tools & Home Improvement" },
  { value: "toys", category: "Toys & Games" },
  { value: "under-ten-dollars", category: "Under 500 " },
  { value: "videogames", category: "Video Games" },
  { value: "watches", category: "Watches" },
];

export const getSearchList = () => {
  return searchList;
};

export const categoriesList = [
  { id: 609590, name: "Sell" },
  { id: 136772, name: "BestSellers" },
  { id: 320305, name: "Today's Deals" },
  { id: 456664, name: "Mobiles" },
  { id: 983054, name: "Fashion" },
  { id: 564414, name: "Electronics" },
  { id: 604007, name: "Home & Kitchen" },
  { id: 976824, name: "New Releases" },
  { id: 258009, name: "Customer Service" },
  { id: 364335, name: "Amazon Pay" },
  { id: 631972, name: "Computers" },
  { id: 350163, name: "Books" },
  { id: 894891, name: "Car & Motorbikes" },
  { id: 242028, name: "Gift Ideas" },
  { id: 136610, name: "Home Improvement" },
  { id: 838831, name: "Beauty & Personal Care" },
  { id: 524057, name: "Toys & Games" },
  { id: 327567, name: "Sports, Fitness & Outdoors" },
  { id: 779947, name: "Custom Products" },
  { id: 433498, name: "Gift Cards" },
  { id: 914945, name: "Grocery & Gourmet Foods" },
  { id: 477545, name: "Health, Household & Personal Care" },
  { id: 652816, name: "Baby" },
  { id: 242039, name: "Video Games" },
  { id: 463012, name: "Pet Supplies" },
  { id: 904810, name: "Audible" },
  { id: 405603, name: "AmazonBasics" },
  { id: 515543, name: "Subscribe & Save" },
  { id: 956902, name: "Coupons" },
];

export const footer1Links = [
  {
    title: "Get to Know Us",
    data: [
      { id: 989435, name: "About Us", path: "/about-us" },
      { id: 347078, name: "Careers", path: "" },
      { id: 217399, name: "Privacy", path: "/privacy" },
      { id: 762217, name: "Terms and Conditions", path: "/terms-and-conditions" },
    ],
  },
  {
    title: "Connect with Us",
    data: [
      { id: 206520, name: "Facebook" },
      { id: 543685, name: "Twitter" },
      { id: 580212, name: "Instagram" },
    ],
  },
  {
    title: "Make Money with Us",
    data: [
      { id: 265864, name: "Sell on Amazon" },
      { id: 613861, name: "Sell under Amazon Accelerator" },
      { id: 468963, name: "Protect and Build Your Brand" },
      { id: 522041, name: "Amazon Global Selling" },
      { id: 513571, name: "Become an Affiliate" },
      { id: 676145, name: "Fulfilment by Amazon" },
      { id: 942538, name: "Advertise Your Products" },
      { id: 422272, name: "Amazon Pay on Merchants" },
    ],
  },
  {
    title: "Let Us Help You",
    data: [
      { id: 647087, name: "COVID-19 and Amazon" },
      { id: 891210, name: "Your Account" },
      { id: 449463, name: "Returns Centre" },
      { id: 643948, name: "Recalls and Product Safety Alerts" },
      { id: 131554, name: "100% Purchase Protection" },
      { id: 732165, name: "Amazon App Download" },
      { id: 985489, name: "Help" },
    ],
  },
];

export const footer2Links = [
  { id: 627783, title: "AbeBooks", desc: "Books, art\n& collectibles" },
  {
    id: 499130,
    title: "Amazon Web Services",
    desc: "Scalable Cloud \nComputing Services",
  },
  { id: 364163, title: "Audible", desc: "Download Audio\nBooks" },
  { id: 267713, title: "IMDb", desc: "Movies, TV\n& Celebrities" },
  { id: 987773, title: "Shopbop", desc: "Designer\nFashion Brands" },
  {
    id: 205823,
    title: "Amazon Business",
    desc: "Everything For\nYour Business",
  },
  {
    id: 327892,
    title: "Prime Now",
    desc: "2-Hour Delivery\non Everyday Items",
  },
  {
    id: 828267,
    title: "Amazon Prime Music",
    desc: "100 million songs, ad-\nfree\nOver 15 million podcast episodes",
  },
];
