export const SIDEBAR_STATE = {
  NONE: `none`,
  CLOSE: `closed`,
  OPEN: `OPEN`,
};

const categories = [
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
  return categories;
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
