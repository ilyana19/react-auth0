import React, { Component } from "react";

class Courses extends Component {
  state = {
    courses: [],
    admin: ""
  };

  componentDidMount() {
    fetch("/course", {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
    })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ courses: response.courses }))
      .catch(error => this.setState({ message: error.message }));

    fetch("/admin", {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
    })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ admin: response.message }))
      .catch(error => this.setState({ message: error.message }));
  }

  render() {
    return (
      <div>
        <h1>Message: {this.state.admin}</h1>

        <ul> {this.state.courses.map(course => {
          return <li key={course.id}>{course.title}</li>
        })}
        </ul>
      </div>
    );
  }
}

export default Courses;
