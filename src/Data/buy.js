import axios from 'axios';
export const BUY_URL = `blablabla/api/v2/buytoken`;



export const buyTokens = async (request) => {
  let response = null;

  try {
    response = await axios.post(BUY_URL, request);

    if (response) {
      return { done: true };
    }
  } catch (error) {
    return { done: false, error: 'fuuuuu' };
  }

};

export default buyTokens;