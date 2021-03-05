export interface IPeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ICharacterResponse[];
}

export interface ICharacterResponse {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface IComment {
  id: number;
  text: string;
  createdAt: string;
  likes: number;
  dislikes: number;
  // userId: string;
  // username: string;
}

export interface ICharacter extends ICharacterResponse {
  comments: IComment[];
  id: number;
}

export interface IPeople extends IPeopleResponse {
  results: ICharacter[];
}
