import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Loading...",
        location: "Fetching...",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6 text-center">
        <img
          src={avatar_url}
          alt="User avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-xl font-bold text-gray-800 mb-1">Name: {name}</h2>
        <h3 className="text-md text-gray-600 mb-1">Location: {location}</h3>
        <h4 className="text-sm text-gray-500">Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;
