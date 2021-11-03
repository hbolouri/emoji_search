
import React, {useState} from 'react';
import EmojiContainer from './components/EmojiContainer';
import Header from './components/Header';
import data from './json/emoji.json'

function App() {

  const [emojisList, setEmojisList] = useState(data)

  // const [inputValue, setInputValue] = useState("")

  const searchEmojis = (e) => {
    console.log(e.target.value);
    let searchedEmojis= data.filter(emoji=> emoji.keywords.includes(e.target.value))

    setEmojisList(searchedEmojis) // set state

  }

  return (
    <div className="App">
      <Header/>
      <div style={{ textAlign: "center"}}>
        <input type="text" name="search" onChange={searchEmojis} style={{display:"inline-block", width:"30%", padding:"8px"}}/>
      </div>
      <EmojiContainer emojisList= {emojisList}/>
    </div>
  );
}


export default App;