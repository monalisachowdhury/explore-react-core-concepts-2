import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';


function App() {
  
  function handleClick(){
    alert('button clicked');
  }

  function addFive(num){
    alert(num + 5);
  }

  return (
    <>
      <h2>Explore React Core Concepts Part 2</h2>
      <Counter></Counter> 
      <Team></Team>
      <Users></Users>
      <Friends></Friends>
      

      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => {alert('button 2 clicked')}}>Click Me</button>
      <button onClick={() => addFive(3)}>Click Me</button>
      
    </>
  )
}
 
export default App
