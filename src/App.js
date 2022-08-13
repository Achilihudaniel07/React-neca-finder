import Records from './records.json';
import './App.css';
import React, {Component} from 'react';
import Nav from './components/Nav';
import NavList from './components/NavList';
import Card from './components/Card'
class App extends Component{
  constructor(){
    super();
    this.state = {
      searchInput: '',
      searchUsers: []
    }
  }
  updateSearch = (e) => {
    let target = e.target.value;
    this.setState({searchInput: target});
    const filtered = target ? Records.filter((record) => (record.caption.toLowerCase().includes(target.toLowerCase()))) : []
    this.setState({searchUsers: [...filtered]})
  }
  render(){
    return (
      <div className="App">
        <div className="content">
          <Nav onchange = {this.updateSearch} search ={this.state.searchInput}/>
          <NavList />
          <Card Records = {this.state.searchInput ? this.state.searchUsers : Records}/>
        </div>
      </div>
    );
  }
}
export default App;
