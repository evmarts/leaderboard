import React from "react";
import axios from "axios";

export default class UserSearch extends React.Component {
  state = {
    query: ""
  };

  userInfo = () => {
    return (
      <div style={{ backgroundColor: "#f8f8f8" }}>
        <p>𝙐𝙨𝙚𝙧: {this.state.result.data.username}</p>
        <p>𝙋𝙤𝙞𝙣𝙩𝙨: {this.state.result.data.points}</p>
        <p>
          𝘾𝙝𝙖𝙣𝙘𝙚 𝙤𝙛 𝙒𝙞𝙣𝙣𝙞𝙣𝙜 𝙂𝙞𝙫𝙚𝙖𝙬𝙖𝙮:{" "}
          {Math.round(this.state.result.data.chance * 10000) / 100}%
        </p>
      </div>
    );
  };

  handleInputChange = async () => {
    await this.setState({
      query: this.search.value
    });
  };

  handleSubmit = async () => {
    const params = { username: this.state.query };
    try {
      const response = await axios.get(
        "http://secure-anchorage-54009.herokuapp.com/api/search",
        {
          params
        }
      );
      await this.setState({ result: response });
    } catch (e) {
      return;
    }
  };

  render() {
    return (
      <div>
        <h3>🔎 𝙎𝙚𝙖𝙧𝙘𝙝 𝙛𝙤𝙧 𝙮𝙤𝙪𝙧 𝙪𝙨𝙚𝙧𝙣𝙖𝙢𝙚:</h3>
        <input
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <input type="submit" onClick={this.handleSubmit} />
        {this.state.result ? <this.userInfo /> : <div />}
      </div>
    );
  }
}
