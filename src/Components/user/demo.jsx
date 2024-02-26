import React, { Component, useState } from "react";
import { useReducer } from "react";

function Demo() {
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  function submitHandler(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    setData([...data, { Name: name, Age: age }]);
    console.log(data)
  }

  function reducer(state, action) {
    if (action.type === 'incremented_age') {
      return {
        age: state.age + 1
      };
    }
    throw Error('Unknown action.');
  }
  

  return (
    <div>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
      <form>
        <label>
          Enter your name:
          <input type="text" id="name" />
        </label>
        <label>
          Enter your age:
          <input type="number" id="age" />
        </label>
        <button onClick={submitHandler}>Submit</button>
      </form>
      <div>
        <table className="fl-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// class Demo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       age: ''
//     };
//     this.changenameHandler=this.changenameHandler.bind(this);
//     this.changeageHandler=this.changeageHandler.bind(this);
//     this.submitt = this.submitt.bind(this);

//   }
//   changenameHandler = (event) => {
//     this.setState({ name: event.target.value });
//   }
//   changeageHandler = (event) => {
//     this.setState({ age: event.target.value });
//   }

//   submitt(event) {
//     event.preventDefault();

//     console.log('Name:', this.state.name);
//     console.log('Age:', this.state.age);
//   }
//   render() {
//     return (
//       <form>
//         <label>
//           Enter your name:
//           <input type="text" id="name"  value={this.state.name}   onChange={this.changenameHandler}/>
//         </label>
//         <label>
//           Enter your age:
//           <input type="number" id="age"  value={this.state.age}  onChange={this.changeageHandler}/>
//         </label>
//         <button onClick={this.submitt}>Submit</button>
//       </form>
//     );
//   }
// }
export default Demo;
