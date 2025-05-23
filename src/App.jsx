import "./styles/theme.css";
import "./styles/global.css";
import { MyText } from "./components/MyText";

export default function App() {

  const texts = [
    {title: "meu titulo 1", text: "meu texto 1"},
    {title: "meu titulo 2", text: "meu texto 2"},
    {title: "meu titulo 3", text: "meu texto 3"},
    {title: "meu titulo 4", text: "meu texto 4"},
    {title: "meu titulo 5", text: "meu texto 5"},
  ];


  return (
    // React Fragment
    <> 
    {texts.map((text, index) => (
      <MyText key={index} title={text.title}>{text.text}</MyText>
    ))}
    </>
  );
}   