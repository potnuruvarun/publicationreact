import React, { Component, useState } from "react";
import { useReducer } from "react";
import Facultyservice from "../../Services/Facultyservice";
import { useEffect } from "react";

function Demo(props) {
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, { age: 23 });
  const [student, setStudent] = useState([]);
  const [newarray,setnewArray]=useState([]);
  const [statedata, setStatedata] = useState([
    {
      stateid: 1,
      statename: 'chennai',
    },
    {
      stateid: 2,
      statename: 'Andhra'
    }
  ]);

  const [citydata, setCitydata] = useState([
    {
      cityid: 10,
      cityname: 'aaa',
      stateid: 1
    },
    {
      cityid: 11,
      cityname: 'bbb',
      stateid: 1
    },
    {
      cityid: 12,
      cityname: 'cccc',
      stateid: 1
    },
    {
      cityid: 13,
      cityname: '111',
      stateid: 2
    },
    {
      cityid: 14,
      cityname: '222',
      stateid: 2
    },
    {
      cityid: 15,
      cityname: '333',
      stateid: 2
    }
  ]);

  function newcity(e) {
    const data = e.target.value;
    console.log(data)
    console.log(citydata)
    // const cdata = citydata.find(item => item.stateid == data);
    const cdata =citydata.filter(item=>item.stateid==data);
    console.log(cdata)
    setnewArray( cdata);
  }


  useEffect(() => {
    Facultyservice.getstudentdata().then((res) => {
      setStudent(res.data);
      console.log(res.data)
    })
  }, []);
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
      <p>Hello! You are {props.brand}.</p>

      <select name="student" id="student">
        {student.map((std, index) => (
          <option key={index} value={std.id}>{std.publishername}</option>
        ))}
      </select>
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
      <div>
        <select name="state" id="state" onChange={newcity}>
          <option value={0} >Select Statename..</option>
          {statedata.map((std, index) => (
            <option key={index} value={std.stateid}>{std.statename} </option>
          ))}
        </select>
        <select name="city" id="city">
          {newarray.map((std, index) => (
            <option key={index} value={std.cityid}>{std.cityname}</option>
          ))}
        </select>

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
