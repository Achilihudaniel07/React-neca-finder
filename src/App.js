// import Records from './records.json';
import './App.css';
import React, {Component} from 'react';
import Nav from './components/Nav';
import NavList from './components/NavList';
import CardList2 from './CardList/CardList2';
import users from './users.json';
import Card from './components/Card'
class App extends Component{
  constructor(){
    super();
    this.state = {
      searchInput: '',
      searchUsers: [],
      data: false,
    }
  }
  updateSearch = (e) => {
    let target = e.target.value;
    this.setState({searchInput: target});
    const filtered = target ? users.filter((user) => (user.name.toLowerCase().includes(target.toLowerCase()))) : []
    this.setState({searchUsers: [...filtered]})
  }
  setData = () => {
    this.setState({data: !this.state.data})
  }
  render(){
    return (
      <div className="App">
        <div className="content">
          <Nav onchange = {this.updateSearch} search ={this.state.searchInput}/>
          <NavList />
          {
            this.state.data ? <CardList2 userss ={users}/> : <Card Records = {this.state.searchInput ? this.state.searchUsers : users} onhover = {this.setData}/>
          }
        </div>
      </div>
    );
  }
}
// import './App.css';
// import CardList2 from './CardList/CardList2';
// import users from './users.json';




// function App() {
//   return (
//     <div className="App">
//     <CardList2 userss ={users}/>
//     </div>
//   );
// }

export default App;
