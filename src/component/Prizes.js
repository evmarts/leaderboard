import React from "react";

export default class Prizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Prizes:</h3>
        <a href="https://www.playstation.com/en-us/explore/playstationnetwork/psn-cards/">
          PLAYSTATION®STORE Cash Cards
        </a>
        <br />
        <a href="https://www.microsoft.com/en-ca/p/xbox-gift-card-digital-code/CFQ7TTC0K56J/0003?icid=XboxCat-Nav_5-GiftCard-081018&activetab=pivot%3aoverviewtab">
          Xbox Digital Gift Card
        </a>
      </div>
    );
  }
}
