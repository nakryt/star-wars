import { ICharacter, ICharacterResponse } from "../typings/people";

export const serializePeople = (
  results: ICharacterResponse[]
): ICharacter[] => {
  return results.map((item) => {
    return { ...item, comments: [] };
  });
};
