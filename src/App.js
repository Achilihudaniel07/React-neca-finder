import './App.css';
import CardList2 from './CardList/CardList2';
import users from './users.json';




function App() {
  return (
    <div className="App">
    <CardList2 userss ={users}/>
    </div>
  );
}

export default App;
