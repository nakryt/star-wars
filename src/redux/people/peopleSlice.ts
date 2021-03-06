import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICharacter, IComment, IPeople } from "../../typings/people";

interface IPeopleState extends IPeople {
  loading: boolean;
  error: string;
}

const initialState: IPeopleState = {
  count: 0,
  previous: null,
  next: null,
  results: [],
  loading: false,
  error: "",
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
    setCount: (state, { payload }: PayloadAction<number>) => {
      state.count = payload;
    },
    setPreviousPage: (state, { payload }: PayloadAction<string | null>) => {
      state.previous = payload;
    },
    setNextPage: (state, { payload }: PayloadAction<string | null>) => {
      state.next = payload;
    },
    setPeopleItems: (state, { payload }: PayloadAction<ICharacter[]>) => {
      if (payload.length === 0) {
        state.results = [];
      } else {
        state.results = [...state.results, ...payload];
      }
    },
    setComment: (
      state,
      { payload }: PayloadAction<{ characterId: number; comment: IComment }>
    ) => {
      const character = state.results.find(
        (item) => item.id === payload.characterId
      );
      if (character) {
        character.comments = [payload.comment, ...character.comments];
      }
    },
  },
});

export const {
  setLoading,
  setError,
  setCount,
  setPreviousPage,
  setNextPage,
  setPeopleItems,
  setComment,
} = peopleSlice.actions;

export const loadingSelector = ({ people }: RootState) => people.loading;
export const errorSelector = ({ people }: RootState) => people.error;
export const countSelector = ({ people }: RootState) => people.count;
export const previousPageSelector = ({ people }: RootState) => people.previous;
export const nextPageSelector = ({ people }: RootState) => people.next;
export const peopleSelector = ({ people }: RootState) => people.results;

export default peopleSlice.reducer;
