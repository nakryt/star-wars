import { AppThunk } from "../store";
import {
  setLoading,
  setError,
  setCount,
  setNextPage,
  setPreviousPage,
  setPeopleItems,
  setComment as setCommentAC,
} from "./peopleSlice";
import peopleAPI from "../../api/peopleAPI";
import { serializePeople } from "../../utils/serialize";
import { IComment } from "../../typings/people";

export const getPeopleData = (): AppThunk => async (dispatch, getState) => {
  const { people } = getState();
  dispatch(setLoading(true));
  dispatch(setError(""));
  try {
    if (people.loading) return;
    const data = await peopleAPI.getPeople(people.next);

    dispatch(setCount(data.count));
    dispatch(setNextPage(data.next));
    dispatch(setPreviousPage(data.previous));
    dispatch(setPeopleItems(serializePeople(data.results)));
    dispatch(setLoading(false));
  } catch (e) {
    dispatch(setLoading(false));
    dispatch(setError(`${e.message}. Try again later...`));
  }
};

export const resetPeopleData = (): AppThunk => async (dispatch, getState) => {
  dispatch(setError(""));
  try {
    dispatch(setPeopleItems([]));
    dispatch(setNextPage(null));
    dispatch(setPreviousPage(null));
  } catch (e) {
    dispatch(setError(`${e.message}. Try again later...`));
  }
};

export const setComment = (
  characterId: number,
  comment: string
): AppThunk => async (dispatch, getState) => {
  try {
    const newComment: IComment = {
      createdAt: new Date().toISOString(),
      id: Date.now(),
      text: comment,
      likes: 0,
      dislikes: 0,
    };
    dispatch(setCommentAC({ characterId, comment: newComment }));
  } catch (e) {}
};
