import React, { useEffect, useState } from "react";
import "./CharacterDetails.scss";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { peopleSelector } from "../../../redux/people/peopleSlice";
import { ICharacter } from "../../../typings/people";
import Loader from "../../ui/Loader/Loader";

const CharacterDetails = () => {
  const [character, setCharacter] = useState<ICharacter>();

  const people = useSelector(peopleSelector);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const item = people.find((c) => c.id === Number(id));
    if (item) setCharacter(item);
  }, [id]);

  if (!character) return <Loader />;
  const {
    name,
    birth_year,
    created,
    gender,
    height,
    mass,
    eye_color,
    skin_color,
    hair_color,
    comments,
    species,
    starships,
    vehicles,
    films,
    homeworld,
  } = character;
  return (
    <section className="characterDetails container">
      <h1>{name}</h1>
      <ul>
        <li>
          <p>
            <strong>Year of birth: </strong>
            {birth_year}
          </p>
        </li>
        <li>
          <p>
            <strong>Gender: </strong>
            {gender}
          </p>
        </li>
        <li>
          <p>
            <strong>Height: </strong>
            {height}
          </p>
        </li>
        <li>
          <p>
            <strong>Mass: </strong>
            {mass}
          </p>
        </li>
        <li>
          <p>
            <strong>Eye color: </strong>
            {eye_color}
          </p>
        </li>
        <li>
          <p>
            <strong>Hair color: </strong>
            {hair_color}
          </p>
        </li>
        <li>
          <p>
            <strong>Skin color: </strong>
            {skin_color}
          </p>
        </li>
        <li>
          <p>
            <strong>Homeworld: </strong>
            {homeworld}
          </p>
        </li>
        {/*<li>*/}
        {/*  <p>*/}
        {/*    <strong>Species: </strong>*/}
        {/*    {species.length > 0*/}
        {/*      ? species.map((sp) => <span key={sp}>{sp}</span>)*/}
        {/*      : "none"}*/}
        {/*  </p>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <p>*/}
        {/*    <strong>Starships: </strong>*/}
        {/*    {starships.length > 0*/}
        {/*      ? starships.map((sh) => <span key={sh}>{sh}</span>)*/}
        {/*      : "none"}*/}
        {/*  </p>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <p>*/}
        {/*    <strong>Vehicles: </strong>*/}
        {/*    {vehicles.length > 0*/}
        {/*      ? vehicles.map((v) => <span key={v}>{v}</span>)*/}
        {/*      : "none"}*/}
        {/*  </p>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <p>*/}
        {/*    <strong>Films: </strong>*/}
        {/*    {films.length > 0*/}
        {/*      ? films.map((f) => <span key={f}>{f}</span>)*/}
        {/*      : "none"}*/}
        {/*  </p>*/}
        {/*</li>*/}
      </ul>
    </section>
  );
};

export default CharacterDetails;
