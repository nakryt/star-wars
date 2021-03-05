import React, { useCallback, useEffect, useRef } from "react";
import "./People.scss";

import { useDispatch, useSelector } from "react-redux";
import { getPeopleData } from "../../redux/people/peopleThunk";
import {
  countSelector,
  itemsSelector,
  loadingSelector,
} from "../../redux/people/peopleSlice";

import Loader from "../ui/Loader/Loader";
import CharacterCard from "./CharacterCard/CharacterCard";

const People = () => {
  const dispatch = useDispatch();
  const people = useSelector(itemsSelector);
  const count = useSelector(countSelector);
  const loading = useSelector(loadingSelector);
  const sectionRef = useRef<HTMLElement>(null);

  const getData = useCallback(() => {
    dispatch(getPeopleData());
  }, [dispatch]);

  useEffect(() => {
    let isCancel = false;
    if (!isCancel) getData();
    return () => {
      isCancel = true;
    };
  }, [dispatch]);

  const scrollHandler = useCallback(() => {
    const { current } = sectionRef;
    if (people.length >= count) return;
    if (
      !loading &&
      current &&
      current?.offsetHeight <= Number(window.scrollY) + 1000
    ) {
      getData();
    }
  }, [sectionRef, getData, loading, people.length, count]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <section className="people" ref={sectionRef}>
      <h1>Characters</h1>
      <div className="people__list">
        {people.length > 0
          ? people.map((character) => (
              <CharacterCard
                key={character.name + character.url}
                {...character}
              />
            ))
          : null}
        {loading && <Loader />}
      </div>
    </section>
  );
};

export default People;
