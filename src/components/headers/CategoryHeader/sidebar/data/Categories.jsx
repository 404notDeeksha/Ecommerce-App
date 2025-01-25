import { addUniqueIdToElements } from "../../../../../utils/common-utils";

const trending = [
  { value: "bestSellers", category: "Best Sellers" },
  { value: "releases", category: "New Releases" },
  { value: "moversShakers", category: "Movers and Shakers" },
];

const digitalContent = [
  { value: "miniTv", category: "Amazon miniTV- FREE entertainment" },
  { value: "alexa", category: "Echo & Alexa" },
  { value: "fireTv", category: "Fire TV" },
  { value: "eReaders", category: "Kindle E-Readers & eBooks" },
  { value: "audiobook", category: "Audible Audiobooks" },
  { value: "primeVedio", category: "Amazon Prime Video" },
  { value: "primeMusic", category: "Amazon Prime Music" },
];

const shopCategory = [
  { value: "mobilesComputers", category: "Mobiles, Computers" },
  { value: "appliances", category: "TV, Appliances, Electronics" },
  { value: "Men's Fashion", category: "Men's Fashion" },
  { value: "Women's Fashion", category: "Women's Fashion" },
];

const shopCategoryExtra = [
  { value: "homeKitchenPets", category: "Home, Kitchen, Pets" },
  { value: "Beauty, Health, Grocery", category: "Beauty, Health, Grocery" },
  {
    value: "Sports, Fitness, Bags, Luggage",
    category: "Sports, Fitness, Bags, Luggage",
  },
  {
    value: "Toys, Baby Products, Kids' Fashion",
    category: "Toys, Baby Products, Kids' Fashion",
  },
  {
    value: "Car, Motorbike, Industrial",
    category: "Car, Motorbike, Industrial",
  },
  { value: "Books", category: "Books" },
  {
    value: "Movies, Music & Video Games",
    category: "Movies, Music & Video Games",
  },
];

const programsFeatures = [
  { value: "Amazon Pay", category: "Amazon Pay" },
  {
    value: "Gift Cards & Mobile Recharges",
    category: "Gift Cards & Mobile Recharges",
  },
  { value: "Amazon Launchpad", category: "Amazon Launchpad" },
  { value: "Amazon Business", category: "Amazon Business" },
];

const programsFeaturesExtra = [
  { value: "Handloom and Handicrafts", category: "Handloom and Handicrafts" },
  { value: "Amazon Saheli", category: "Amazon Saheli" },
  { value: "Amazon Combos", category: "Amazon Combos" },
  { value: "Amazon Custom", category: "Amazon Custom" },
  { value: "Flight Tickets", category: "Flight Tickets" },
  { value: "Buy more, Save more", category: "Buy more, Save more" },
  { value: "Clearance store", category: "Clearance store" },
  { value: "International Brands", category: "International Brands" },
];

const helpSettings = [
  { value: "Your Account", category: "Your Account" },
  { value: "Customer Service", category: "Customer Service" },
  { value: "Sign in", category: "Sign in" },
];

export const getTrending = () => {
  const IdArray = addUniqueIdToElements(trending);
  return IdArray;
};

export const getProgramFeatures = () => {
  const IdArray = addUniqueIdToElements(programsFeatures);
  return IdArray;
};

export const getProgramFeaturesExtra = () => {
  const IdArray = addUniqueIdToElements(programsFeaturesExtra);
  return IdArray;
};

export const getDigitalContent = () => {
  const IdArray = addUniqueIdToElements(digitalContent);
  return IdArray;
};

export const getShopCategory = () => {
  const IdArray = addUniqueIdToElements(shopCategory);
  return IdArray;
};

export const getExtraShopCategory = () => {
  const IdArray = addUniqueIdToElements(shopCategoryExtra);
  return IdArray;
};

export const getHelpSettings = () => {
  const IdArray = addUniqueIdToElements(helpSettings);
  return IdArray;
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
