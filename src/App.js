import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const restaurantName = ['Star Kabab', 'Kacchi Vai', 'Crimson Lake'];
  const ratingStatus = ['Excellent restaurant of the bangladesh', 'Good Quality restaurant in the city', 'Best Restaurant in the world']
  return (
    <div className="App">
      <header className="App-header">

        <RestaurantCounter></RestaurantCounter>

        <Restaurant name={restaurantName[0]} rate={ratingStatus[0]}></Restaurant>
        <Restaurant name={restaurantName[1]} rate={ratingStatus[1]}></Restaurant>
        <Restaurant name={restaurantName[2]} rate={ratingStatus[2]}></Restaurant>
        

        {/* <Restaurant name="Star Kabab" rate="Excellent restaurant of the bangladesh"></Restaurant>
        <Restaurant name="Kacchi Vai" rate="Good Quality restaurant in the city"></Restaurant>
        <Restaurant name="Crimson Cup" rate="Best Restaurant in the world"></Restaurant>        
        */}
      </header>
    </div>
  );
}

function RestaurantCounter(){
  const [count, setCount] = useState(0);
  const increaseHandleClick = () => setCount(count + 1);
  const decreaseHandleClick = () => setCount(count - 1);
  return (
    <div>
      <button onClick={increaseHandleClick}>Add Restaurant</button>
      <button onClick={decreaseHandleClick}>Delete Restaurant</button>
      <h3>No. Of Restaurants: {count}</h3>
      <RestaurantDisplay restaurant={count + 5}></RestaurantDisplay>
      <RestaurantDisplay restaurant={count + 2}></RestaurantDisplay>
      <RestaurantDisplay restaurant={count}></RestaurantDisplay>
    </div>
  )
}
function RestaurantDisplay(props){
  return <h3>Restaurent In Dhaka City: {props.restaurant}</h3>
}

function Restaurant(props){
  const restaurantStyle = {
    border: '1px solid lightblue',
    borderRadius: '5px',
    margin: '10px',
    width: '500px',
    backgroundColor: 'orange',
    color: 'white'
  }
  return (
    <div style={restaurantStyle}>
      <h2>Restaurant: {props.name}</h2>
      <p>Rating: {props.rate}</p>
    </div>
  )
}

export default App;
