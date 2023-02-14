import React from "react";
import "../App.css";
// import avatarangelagray from './images/avatar-angela-gray.webp';

function Users({
  id,
  className,
  fname,
  lname,
  avatar,
  activity,
  post,
  postClass,
  comment,
  time,
  dot,
  image,
  imagePath,
}) {
  const displayImage = { image } === true ? "show-image" : "none";
  return (
    <div className={`notification ${className}`} key={id}>
      <img
        className="avatar"
        // src={`../images/avatar-${fname}-${lname}.webp`}
        src={avatar}
        alt={`${fname} ${lname}`}
      />
      <div className="notification_content">
        <span className="notification_name">
          {fname} {lname}
        </span>
        <span className="action">{activity}</span>

        <span className={postClass}>{post}</span>

        <span className={dot}></span>

        <div>
          <span className="time">{time}</span>
        </div>
        <div>
          <img
            className={displayImage}
            src={imagePath}
            alt="chess player"
          ></img>
          <p className="comment-box">{comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Users;
