import React, { FC, useState } from "react";
import "./CharacterCard.scss";

import { Input, Card } from "antd";
import { setComment } from "../../../redux/people/peopleThunk";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { IComment } from "../../../typings/people";
import AppComment from "../AppComment/AppComment";

const { Search } = Input;

interface IProps {
  id: number;
  name: string;
  birth_year: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  gender: string;
  comments: IComment[];
  url: string;
}

const CharacterCard: FC<IProps> = ({
  id,
  name,
  birth_year,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  gender,
  comments,
  url,
}) => {
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();
  const sendCommentHandler = () => {
    if (commentText.trim()) {
      dispatch(setComment(id, commentText));
      setCommentText("");
    }
  };

  const title = (
    <p className="characterCard__title">
      <strong>{name}</strong>
      <Link to={`/people/${id}`}>More</Link>
    </p>
  );
  return (
    <Card title={title} hoverable className="characterCard">
      <ul className="character__options">
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
