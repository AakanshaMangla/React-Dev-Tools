import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts.js";
import Avatar from "./Avatar.jsx";

function App() {
  return (
    <div>
      <h1 className="name">My Contacts</h1>

      <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1pf6QTIk9XGstXpCCDGe5LjZBQSILtoCxQw&usqp=CAU" />

      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
