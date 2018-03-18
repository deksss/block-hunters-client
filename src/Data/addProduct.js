import axios from "axios";
export const SEND_URL = `http://localhost:80/set-product/ `;

export const sendProduct = async request => {
  let response = null;
  const requestNormalized = {
    name: request.title,
    category: "shoes",
    sku_number: ('' + Math.random()).replace(".", "").replace("0", ""),
    url: request.url
  };
  console.log(requestNormalized);
  try {
    response = await axios.post(SEND_URL, request);

    if (response) {
      return { done: true };
    }
  } catch (error) {
    return { done: false, error: "fuuuuu" };
  }
};

export default sendProduct;
