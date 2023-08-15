import { useState } from 'react';
import './App.css';
import Header from './Components/Header'
import data from './data.json'
import Card from './Components/Card';

console.log(data)
const colors = ['hsl(15, 100%, 70%)','hsl(195, 74%, 62%)',
'hsl(348, 100%, 68%)','hsl(145, 58%, 55%)','hsl(264, 64%, 52%)','hsl(43, 84%, 65%)']
const icons = ['icon-work','icon-play','icon-study','icon-exercise','icon-social','icon-self-care']

function App() {

  const [clickOn, setClickOn] = useState("Weekly");

  function handleClick(e) {
    setClickOn(e.target.innerText);
    console.log(clickOn);
  }



  return (
    <div className="App">
      <Header click={clickOn} clickfunc={handleClick} />
      <div className="grid-container">
        {
          data.map((card,index) => {
            return(
              <Card key={index} card={card} index={index} colors={colors} icons={icons} clickOn={clickOn}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
