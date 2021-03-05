import React, { FC, useState } from "react";
import "./CharacterCard.scss";

import { Input, Card } from "antd";
import { setComment } from "../../../redux/people/peopleThunk";
import { useDispatch } from "react-redux";
import { IComment } from "../../../typings/people";
import AppComment from "../AppComment/AppComment";

const { Search } = Input;

interface IProps {
  name: string;
  birth_year: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  gender: string;
  comments: IComment[];
}

const CharacterCard: FC<IProps> = ({
  name,
  birth_year,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  gender,
  comments,
}) => {
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();
  const sendCommentHandler = () => {
    if (commentText.trim()) {
      dispatch(setComment(name, commentText));
      setCommentText("");
    }
  };

  const nameNode = (
    <p className="characterCard__title">
      <strong>{name}</strong>
      <span className="birth-date">
        <strong>year of birth: </strong>
        {birth_year}
      </span>
    </p>
  );
  return (
    <Card title={nameNode} hoverable className="characterCard">
      <ul className="character__options">
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
            <strong>Eye color: </strong>
            {eye_color}
          </p>
        </li>
      </ul>
      <Search
        placeholder="input comment..."
        enterButton="Send"
        size="large"
        onSearch={sendCommentHandler}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      {comments.length > 0
        ? comments.map((c) => <AppComment key={c.id} {...c} />)
        : null}
    </Card>
  );
};

export default CharacterCard;
