
import React from 'react';
import react from 'react';
import { render } from 'react-dom';
import './styles.css';


// function App() {
//   return (
//    <div className="game">
//      <div className="board">
//        <div className="board-row">
//           <button className="square"></button>
//           <button className="square"></button>
//           <button className="square"></button>
//         </div>
//         <div className="board-row">
//           <button className="square"></button>
//           <button className="square"></button>
//           <button className="square"></button>
//         </div>
//         <div className="board-row">
//           <button className="square"></button>
//           <button className="square"></button>
//           <button className="square"></button>
//         </div>
       
//      </div>
//    </div>
//   );
// }



// function Board(props){
//   let board = Array(9).fill(null)
//   return(
//       <div className="board">
//        <div className="board-row">
//           <Square value="0" />
//           <Square value="1" />
//           <Square value="2" />
//         </div>
//         <div className="board-row">
//           <Square value="3" /> 
//           <Square value="4" />
//           <Square value="5" />
//         </div>
//         <div className="board-row">
//           <Square value="6" onClick={()=>value}/>
//           <Square value="7" />
//           <Square value="8" />
//         </div>
//       </div>);
// }




// function Square(props){
//   return(
//   <button className="square" >{props.value}</button>);
// }





  function Slide(props){
    console.log(props)
    return (
      
    <li className="splide__slide">
      <div className="splide__slide__container">;
        <img src={`./images/${props.shipImage}`}/>
        <div className="about-ship">
          <h1>{props.shipName}</h1>
          <p>{props.shipInfo}</p>
        </div>
      </div>
    </li>
    )
  }
  

class SlideContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ships:[{
        name:"TIE Fighter",
        description:"One of the original starships of Star Wars, the TIE Fighter is the backbone of the Imperial Fleet. It does not sport the sleekest design or coolest abilities but it is quick and nimble. The Empire is built on the back of the TIE Fighter and it continues to improve and be reinvented all throughout Star Wars. The TIE has no landing gear, but some versions allow the wings to fold in on themselves as they come in to land.",
        image: "TIE-Fighter.jpg"
      },
      {
        name:"X-Wing",
        description: "While it may be the most popular ship in Star Wars, it is not the coolest looking. With its shields and fast maneuverability, it quickly began to dominate space as the superior fighter between the Rebels and the Empire. It was then further used by the New Republic and Resistance fighters. Its four blaster cannons and torpedoes make it a terror to go up against, but its design is purely for function.",
        image:"X-Wing.jpg"
      },
      {
        name:"B-Wing",
        description:"The B-Wing is another great Rebel ship that is a little more unique than some others. Designed so it can fly upright or on its side, the B-Wing's T-shape hull allows for a very powerful laser blast, and some can even disable large Star Destroyers. Its gyroscopic cockpit allows the pilot to stay upright regardless of what angle they need to fly at. The B-Wing was instrumental in the Rebellion's success against Imperial blockades.",
        image:"B-Wing.jpg"
      },
      {
        name:"Hammerhead Corvette",
        description:"The Hammerhead Corvette is a real powerhouse of a starship and it is not to be trifled with. Its design is very interesting since it was made to be a ramming vessel, as seen in Rogue One: A Star Wars Story. The oversized front of the ship is made to dig into its target and push it along, as well as be extremely durable. The Hammerhead Corvette made its first in-canon appearance in Star Wars: Rebels.",
        image:"Hammerhead-Corvette.jpg"
      },
      {
        name:"TIE Silencer",
        description:"The TIE Silencer is an extremely fast and agile TIE Fighter. It's longer and more streamlined design allows for better maneuverability and more speed.",
        image:"TIE-Silencer.jpg"
      },
      {
        name:"U-Wing",
        description:"The U-Wing was introduced in Rogue One: A Star Wars Story and is a very cool Rebel Alliance transport ship. Its wings are moveable and fold out to form a V-shape when travelling, but when coming into land or skim over the ground they fold back in, forming its classic U-shape. The functionality of the ship is great and the design is very cool and interesting— hopefully a similar ship will pop up in Patty Jenkins' Rogue Squadron.",
        image:"U-Wing.png"
      },
      {
        name:"The Ghost",
        description:"The Ghost is the beloved ship from Star Wars: Rebels and it is pretty sweet. Featuring a top notch cloaking system and scrambler, the Ghost is able to slip by almost an entire Imperial blockade unnoticed. It also helps that it has one of the best pilots at the helm, Hera Syndulla. It also has a second smaller ship, the Phantom, that can detach from the main hull. It has powerful weapons and surprising speed for a ship of its size.",
        image:"The-Ghost.jpg"
      },
      {
        name:"Razor Crest",
        description:"The ship of Din Djarin from The Mandalorian is quite the vessel. It is fast enough to outrun most ships in the galaxy and can hold its own in firepower as well. On top of that is has a roomy cargo hold with plenty of space for those unfortunate enough to end up in its onboard carbonate freezing chamber. Much to the fans' dismay, the Razor Crest is no more since it was blow up by Moff Gideon in a recent episode of The Mandalorian.",
        image:"Razor-Crest.jpg"
      },
      {
        name:"Slave 1",
        description:"The legendary Slave 1 is almost as famous as its pilot, Boba Fett, who only recently got the ship back. The Slave 1 is one of the most deadly ships in the galaxy. It is outfitted with numerous special weapons the best being a seismic charge, like what was seen in the most recent episode of The Mandalorian. The Slave 1 has great maneuverability and its cockpit rotates which allows the pilot to always be upright. It is as intimidating as it is practical.",
        image:"Slave-1.png"
      },
      {
        name:"Millennium Falcon",
        description:"By far one of the most iconic ships in all of science fiction, the Millennium Falcon truly is the fastest hunk of junk in the galaxy. It is a design that is instantly recognizable, and fans love to see it. The trusted ship of Han Solo and Chewbacca features twin blasters on the top and bottom, as well as special spaces for smuggled goods and the oh so important lounge area complete with holo-chess. It is truly one of the great starships ever seen on screen.",
        image:"Millenium-Falcon.jpg"
      }
      ]
    }
  }
  renderSlides(shipName,shipInfo,shipImage){
    return (
      <Slide
     shipName = {shipName}
     shipInfo = {shipInfo}
     shipImage = {shipImage}
    />
    )
  }
  render(){
   let shipsNames = this.state.ships.map((el)=>el.name);
   let shipsDescription = this.state.ships.map((el)=>el.description);
   let shipsImage = this.state.ships.map((el)=>el.image)
    return (
      <div className="splide">
      <div className="splide__track">
        <ul className="splide__list">
        {this.renderSlides(shipsNames[0], shipsDescription[0], shipsImage[0])}
        {this.renderSlides(shipsNames[1], shipsDescription[1], shipsImage[1])}
        {this.renderSlides(shipsNames[2], shipsDescription[2], shipsImage[2])}
        {this.renderSlides(shipsNames[3], shipsDescription[3], shipsImage[3])}
        {this.renderSlides(shipsNames[4], shipsDescription[4], shipsImage[4])}
        {this.renderSlides(shipsNames[5], shipsDescription[5], shipsImage[5])}
        {this.renderSlides(shipsNames[6], shipsDescription[6], shipsImage[6])}
        {this.renderSlides(shipsNames[7], shipsDescription[7], shipsImage[7])}
        {this.renderSlides(shipsNames[8], shipsDescription[8], shipsImage[8])}
        {this.renderSlides(shipsNames[9], shipsDescription[9], shipsImage[9])}
        </ul>
      </div>
      </div>
    )
  }
}

class Product{
  render(props){
    return (
     <div className="about-member">
      <img className="member-avatar" src={props.avatar}/>
      <div className="text-about">
        <h3 className="member-name">{props.name}</h3>
        <p className="it-skills">{props.itSkills}</p>
      </div>
    </div>
    )
  }
}

class Earnings{
  render(props){
    return (
     <div className="earnings">
      <h3 className="earnings-amount">{props.earnings}</h3>
      <p className="earnings-progress">{props.earningProcess}</p>
    </div>
    )
  }
}

class Comission{
  render(props){
    return (
      <div className="comission">
        <h3 className="comission-amount">{props.comission}</h3>
        <p className="comission-progress">{props.comissionProgress}</p>
      </div>
    )
  }
}

class Company{
  render(props){
    return (
      <div className="company">
        <h3 className="company-name">{props.company}</h3>
        <p className="field-of-activity">{props.fieldOfActivity}</p>
      </div>
    )
  }
}

class Rate{
  render(props){
    return (
      <div className="rating">
        <h3 className="rating-data">{props.rating+"%"}</h3>
        <p className="rating-description">{this.getRatingDescription(props.rating)}</p>
      </div>
    )
  }
  getRatingDescription(ratingPercent){
    switch (ratingPercent){
      case ratingPercent >= 90:
        return "Best Rated";
      case ratingPercent >= 75:
        return "Above Average";
      case ratingPercent >=50:
        return "Average";
      case ratingPercent >=25:
        return "Mixed Rating";
      case ratingPercent < 25:
        return "Bad Rated";
      }
    }
  }



class Header{
  render(){
    return (
      <header>
        <div className="header-text">
          <h1 className="table-name"></h1>
          <p className="table-about"></p>
        </div>
      </header>
    )
  }
}

class TableBar{
  render(){
    return (
      <nav className="table-bar">
        <h1 className="bar-titles">PRODUCTS</h1>
        <h1 className="bar-titles">EARNINGS</h1>
        <h1 className="bar-titles">COMISSION</h1>
        <h1 className="bar-titles">COMPANY</h1>
        <h1 className="bar-titles">RATING</h1>
      </nav>
    )
  }
}




class Table extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      members:[]
    }
  }

  componentDidMount(){
    fetch("https://6129ebf1068adf001789b975.mockapi.io/api/users")
    .then(response=>response.json())
    .then(
      (result)=>{
        this.setState({
          members: result
        })
      }
    )
  }

  render(){
    return (
      <div className="app">
      <header>
        <div>
          <h1>New Arrivals</h1>
          <p>More than 400+ new members</p>
        </div>
          <div>
            <button className="tool-button">New Report</button>
            <button className="tool-button">Create</button>
          </div>
      </header>
      <table>
        <tr id="table-header">
          <th colSpan="2">PRODUCTS</th>
          <th>EARNINGS</th>
          <th>COMISSION</th>
          <th>COMPANY</th>
          <th>RATING</th>
          <th></th>
        </tr>
        {this.state.members.map(memberObj=>
          <tr key={memberObj.id}>
            <td><img src={memberObj.avatar} alt={memberObj.name}></img></td>
            <td className="about-member">
              <h3>{memberObj.name}</h3>
              <p>{memberObj.itSkills}</p>
            </td>
            <td className="earnings">
              <h3>{memberObj.earnings.toLocaleString()+ "$"}</h3>
              <p>{memberObj.earningProgress}</p>
            </td>
            <td className="comission">
              <h3>{memberObj.comission.toLocaleString()+"$"}</h3>
              <p>{memberObj.comissionProgress}</p>
            </td>
            <td className="company">
              <h3>{memberObj.company}</h3>
              <p>{memberObj.fieldOfActivity}</p>
            </td>
            <td className="rating">
              <h3>{memberObj.rating+"%"}</h3>
              <p>{this.getRatingDescription(memberObj.rating)}</p>
            </td>
            <td>
            <button className="offer-button">View Offer</button>
            </td>
          </tr>
          )}
      </table>
      </div>

    )
  }
  getRatingDescription(ratingPercent){
    switch (true){
    
      case ratingPercent >=90:
        return "Best Rated";
      case ratingPercent >= 75:
        return "Above Average";
      case ratingPercent >=50:
        return "Average";
      case ratingPercent >=25:
        return "Mixed Rating";
      case ratingPercent < 25:
        return "Bad Rated";
      }
    }

}





class Excel{
  render(){
    return (
      <table>
        <tr>
          <th colSpan="2">PRODUCTS</th>
          <th>EARNINGS</th>
          <th>COMISSION</th>
          <th>COMPANY</th>
          <th>RATING</th>
        </tr>
        {this.state.members.map(memberObj=>
          <tr key={memberObj.id}>
            <th><img className="member-avatar" src={memberObj.avatar}></img></th>
            <th className="about-member">
              <h3 className="member-name">{memberObj.name}</h3>
              <p className="it-skills">{memberObj.itSkills}</p>
            </th>
            <th className="earnings">
              <h3 className="earnings-amount">{memberObj.earnings+ "$"}</h3>
              <p className="earnings-progress">{memberObj.earningProgress}</p>
            </th>
            <th className="comission">
              <h3 className="comission-amount">{memberObj.comission+"$"}</h3>
              <p className="comission-progress">{memberObj.comissionProgress}</p>
            </th>
            <th className="company">
              <h3 className="company-name">{memberObj.company}</h3>
              <p className="field-of-activity">{memberObj.fieldOfActivity}</p>
            </th>
            <th className="rating">
              <h3 className="rating-data">{memberObj.rating+"%"}</h3>
              <p className="rating-description" value={this.getRatingDescription(memberObj.rating)}></p>
            </th>
            <button className="offer-button">View Offer</button>
          </tr>
          )}
      </table>
    )
  }
}





export default Table