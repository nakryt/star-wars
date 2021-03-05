import { AppThunk } from "../store";
import {
  setLoading,
  setError,
  setCount,
  setNextPage,
  setPreviousPage,
  setResults,
  setComment as setCommentAC,
} from "./peopleSlice";
import peopleAPI from "../../api/peopleAPI";
import { serializePeople } from "../../utils/serialize";
import { IComment } from "../../typings/people";

export const getPeopleData = (): AppThunk => async (dispatch, getState) => {
  const { people } = getState();
  dispatch(setLoading(true));
  try {
    if (people.loading) return;
    const data = await peopleAPI.getPeople(people.next);
    if (data) {
      dispatch(setCount(data.count));
      dispatch(setNextPage(data.next));
      dispatch(setPreviousPage(data.previous));
      dispatch(setResults(serializePeople(data.results)));
    }
    dispatch(setLoading(false));
  } catch (e) {
    dispatch(setLoading(false));
    dispatch(setError(e.message));
  }
};

export const setComment = (
  characterName: string,
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
    dispatch(setCommentAC({ characterName, comment: newComment }));
  } catch (e) {}
};
