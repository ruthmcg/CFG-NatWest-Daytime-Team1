import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team 1 Introductions</h1>

      <div id="ruthDiv">
        <h2 id="ruthHeading">Ruth</h2>
        <ul>
          <li>My favourite hobby is hillwalking ⛰️</li>
          <li>I enjoy it because it gets me out in the fresh air, and it's a good opportunity to chat with my sons while we explore 👩‍👦‍👦</li>
        </ul>
        </div>

       <div id = 'caityDiv'>
        <h2 id="caityHeading"> Caity </h2>
        <ul>
          <li>My favourite hobby is playing fiddle 🎻</li>
          <li> I love it because I get to make great music with friends and learn about other cultures, as well as travelling the world! </li>
        </ul>
        </div> 

        <div id="selinaDiv">
          <h1 style={{color: "#FF1493"}}>Selina</h1>

          <ul>
            <li style={{color: "#FFB6C1"}}>My hobby is baking cakes 🧁</li>

            <li>I enjoy baking because:
              <ul>
                <li> Decorating the cakes is really fun and creative</li>
                <li> I like trying out new flavours</li> 
                <li> Cakes brighten someone's day when I share them!</li>
              </ul>
            </li>
         </ul>

       </div>
        <div id = 'taniaDiv'>
          <h2 style={{color: "#38761d"}}> Tania </h2>
           <ul style={{color: "#a42162"}}>
             My main hobby is cooking 🍝
            <p>
              I love cooking because I love food and the traditions connected to it!
            <p>
              It allows me to be creative and experiment (not always with the best results 😶‍🌫️) 
            </p>
          </p>
        </ul>
      </div> 
     </header>
   </div>
);
}

export default App;
