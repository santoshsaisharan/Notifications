import React from "react";
import "../App.css";

function Head({ markRead, peopleData }) {
  const userCount = peopleData.filter((user) => user.read === false).length;

  return (
    <div className="flex head">
      <div className="flex head">
        <h1>Notifications</h1>
      </div>
      <div className="count countPosition">
        {userCount > 0 ? userCount : ""}
      </div>
      <div>
        <button onClick={markRead} className="mark">
          Mark all as read
        </button>
      </div>
    </div>
  );
}

export default Head;
