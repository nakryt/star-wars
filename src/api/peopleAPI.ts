import { IPeopleResponse } from "../typings/people";

const baseURL = "https://swapi.dev/api/people";

const getPeople = async (url: string | null): Promise<IPeopleResponse> => {
  try {
    const response = await fetch(url || baseURL);
    return (await response.json()) as IPeopleResponse;
  } catch (e) {
    throw new Error(e.message);
  }
};

const peopleAPI = {
  getPeople,
};

export default peopleAPI;
