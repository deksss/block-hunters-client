import axios from 'axios';
export const BET_URL = `blablabla/api/v2/bet`;



export const sendBed = async (request) => {
  let response = null;

  try {
    response = await axios.post(BET_URL, request);

    if (response) {
      return { done: true };
    }
  } catch (error) {
    return { done: false, error: 'fuuuuu' };
  }

};

export default sendBed;