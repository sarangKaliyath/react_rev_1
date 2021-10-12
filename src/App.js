import logo from "./logo.svg";
import "./App.css";
import { Card } from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Card
        link={"./people.png"}
        style_2={"bold_text"}
        text_1={"There are approximately"}
        text_2={"3.04 Billion"}
        text_3={"active social media"}
        text_4={"users worldwide"}
      />
      <Card
        link={"./phone.png"}
        style_3={"bold_text"}
        text_1={"The total number of active mobile"}
        text_2={"social media users is almost"}
        text_3={"3.04 Billion"}
      />
      <Card
        link={"./building.png"}
        style_1={"bold_text"}
        text_1={"90%"}
        text_2={"of social media users try to reach"}
        text_3={"brands or retailers"}
      />
      <Card
        link={"./flag.png"}
        style_2={"bold_text"}
        text_1={"In the United States,"}
        text_2={"77%"}
        text_3={"of people own at least one"}
        text_4={"social media profile"}
      />
      <Card
        link={"./clock.png"}
        style_1={"bold_text"}
        text_1={"135 minutes"}
        text_2={"are spent on social media everyday"}
        text_3={"by global internet users"}
      />
      <Card
        link={"./user.png"}
        style_4={"bold_text"}
        text_1={"Youtube, Instagram, and Snapchat"}
        text_2={"are the most popular social media"}
        text_3={"platforms among"}
        text_4={"Teens"}
      />
    </div>
  );
}

export default App;
