import { useNavigate } from "react-router-dom";
import {
  getImages,
  convertNumberInNumerals,
} from "@utils/commonUtils";
import StarRatings from "react-star-ratings";
import { routes } from "@config/routes.js";
import { useSelector } from "react-redux";
import { addToCart } from "@api/cart/index.js";
import PropTypes from "prop-types";

