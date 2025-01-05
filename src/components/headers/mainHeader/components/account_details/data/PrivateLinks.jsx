import { AddId } from "../../../../../../utils/AddId";
const yourLists = [
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
];

const yourAccount = [
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
    category: "Your Subscribe & Save Items",
  },
  {
    value: "memberships",
    category: "Memberships & Subscriptions",
  },
  {
    value: "seller_account",
    category: "Your Seller Account",
  },
  {
    value: "content_devices",
    category: "Manage Your Content and Devices",
  },
  {
    value: "freeAmazonBusinessAccount",
    category: "Your Free Amazon Business Account",
  },
];

export const getYourLists = () => {
  return yourLists;
};

export const getAccountDetails = () => {
  return yourAccount;
};
