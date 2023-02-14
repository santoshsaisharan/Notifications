import React, { Component } from "react";
import "../App.css";
import Head from "./Head";
import Users from "./Users";
import { people } from "./people";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      people: people,
    };
  }

  markAllRead = () => {
    const updatedPeople = this.state.people.map((user) => {
      return { ...user, read: true };
    });
    this.setState({ people: updatedPeople });
  };

  render() {
    return (
      <div className="container card">
        <Head markRead={this.markAllRead} peopleData={this.state.people} />
        {this.state.people.map((user) => {
          return (
            <Users
              key={user.id}
              className={user.read ? "read" : "unread"}
              fname={user.fname}
              lname={user.lname}
              avatar={user.avatar}
              activity={user.activity}
              post={user.post}
              postClass={user.post === "Chess Club" ? "chess" : "post"}
              comment={user.comment}
              time={user.time}
              dot={user.read ? "dot_read" : "dot_unread"}
              image={user.image}
              imagePath={user.imagePath}
            />
          );
        })}
      </div>
    );
  }
}
