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
