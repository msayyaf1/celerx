import Game from './src/modules/Game';
import celerx from './celerx';
import seed from "seed-random";

window.celerx = celerx;


var playerName = "John";
var playerId = "1234";
var playerPhoto = "https://randomuser.me/api/portraits/lego/6.jpg";

function startGame() {
  let game = new Game({
    spritesheet: 'sprites.json'
  }).load();

  // window.loadIntAd().then(()=>{
  //   console.log("first ad loaded")
  // }).catch((e)=>{
  //   console.log("error loading ad",e)
  // });
}

document.addEventListener('DOMContentLoaded', function () {
  var match = celerx.getMatch();
  seed(match && match.sharedRandomSeed, { global: true });
  celerx.start();
  startGame();  //to start in dev server without fb sdk
}, false);


// https://www.facebook.com/embed/instantgames/400205377330473/player?game_url=https://localhost:8080