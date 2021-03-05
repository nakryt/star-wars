import React, { FC } from "react";
import "./AppComment.scss";

import moment from "moment";
import { Tooltip, Comment } from "antd";

interface IProps {
  text: string;
  createdAt: string;
  likes: number;
  dislikes: number;
}

const AppComment: FC<IProps> = ({ text, createdAt, likes, dislikes }) => {
  return (
    <Comment
      content={<p>{text}</p>}
      datetime={
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment(createdAt).fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default AppComment;
