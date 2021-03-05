import { ICharacter, ICharacterResponse } from "../typings/people";

export const serializePeople = (
  results: ICharacterResponse[]
): ICharacter[] => {
  return results.map((item) => {
    const id = item.url.match(/\/(?<id>[0-9])\/+$/)?.groups?.id;
    return {
      ...item,
      comments: [],
      id: id ? parseInt(id) : Date.now() + Math.floor(Math.random() * 1000),
    };
  });
};
