import React from "react";
import "../App.css";

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
  
  return (
    <div className={`notification ${className}`} key={id}>
      <img
        className="avatar"
        src={process.env.PUBLIC_URL + '/components/images/avatar-angela-gray.webp'}
        // src={"./images/avatar-angela-gray.webp"}
        // src={`./images/avatar-${fname}-${lname}.webp`}
        // src={avatar}
        // src={`${process.env.PUBLIC_URL}/images/avatar-${fname}-${lname}.webp`}
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
          {image && (
            <img className="show-image" src={imagePath} alt="chess player" />
          )}
          <p className="comment-box">{comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Users;
