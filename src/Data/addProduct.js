import axios from 'axios';
export const SEND_URL = `blablabla/api/v2/save-and-send`;



export const sendProduct = async (request) => {
  let response = null;

  try {
    response = await axios.post(SEND_URL, request);

    if (response) {
      return { done: true };
    }
  } catch (error) {
    return { done: false, error: 'fuuuuu' };
  }

};

export default sendProduct;