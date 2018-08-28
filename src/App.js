import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        id: "asdasdasdasdasdsa",
        name: "Sean",
        age: 28
      },
      {
        id: "asdasdasdasd34534534534asdsa",
        name: "Charlene",
        age: 28
      },
      {
        id: "asdasdasdasdfghghgdasdsa",
        name: "Anthony",
        age: 30
      }
    ],
    showPersons: false
  }

  onChangeNameHandler = (event) => {
    this.setState({persons: [
      {
        name: "Sean",
        age: 28
      },
      {
        name: event.target.value,
        age: 38
      },
      {
        name: "Anthonio",
        age: 35
      }
    ]
  }
  )
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;   
    this.setState({showPersons: !doesShow});    
  }

  deletePersonHander = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '9px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
          <div>
            {this.state.persons.map((person, personIndex) => {
              return <Person 
                      click={() => this.deletePersonHander(personIndex)} 
                      name={person.name} 
                      age={person.age}
                      key={person.id}
                      />
            })
            }            
          </div>  
      );
    }

    return (
      <div className="App">
        <button onClick={this.togglePersonHandler} style={style}>Switch name</button>
        {persons}        
      </div>
    );
  }
}

export default App;
