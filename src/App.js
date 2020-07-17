import React from 'react';

import './App.css';
import Layout from './container/Layout'
import EmployeeHome from './component/EmployeeHome'
import EmployeeForm from './component/EmployeeForm'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  state = {
    isAddEmployee: false,
    isEditEmployee: false,
    Emp: {
      _id:'',
      Name: '',
      Age: '',
      Salary: ''
    }
  }
  onCreate = () => {
    this.setState({ isAddEmployee: true, isEditEmployee: false });
  }

  EditEmployee = empid => {

    const url = "http://localhost:8888/" + empid;
   fetch(url).then(res => res.json()).then((result) => {
     console.log(result._id)
      this.setState({
        Emp:{
          _id:result._id,
          Name:result.Name,
          Age:result.Age,
          Salary:result.Salary
        },
        isAddEmployee: true,
        isEditEmployee: true
      });
    })
  

  }



  onFormSubmit = (data) => {
    console.log(data)
    if (this.state.isEditEmployee) {

      const url = "http://localhost:8888/" + data._id
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        mode: 'cors',
        cache: 'default'
      })
        .then(res => res.json())
        .then(result => { this.setState({ Emp:null,isAddEmployee: false, isEditEmployee: false }) })
    }
   else  {
      const url = "http://localhost:8888/"
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        mode: 'cors',
        cache: 'default'
      })
        .then(res => res.json())
        .then(result => { this.setState({ isAddEmployee: false, isEditEmployee: false }) })
    }

 



  }

  render() {
    return (
      <div className="App">
        <Layout>

          {this.state.isAddEmployee ? '' : <button onClick={this.onCreate} className="btn btn-info" style={{ marginBottom: "10px" }}>Add Employee</button>}
          {this.state.isAddEmployee ? '' : <EmployeeHome EditBtn={this.EditEmployee} />}
          {!this.state.isAddEmployee ? '' : <EmployeeForm EditEmps={this.state.Emp} onFormSubmit={this.onFormSubmit} />}
        </Layout>
      </div>
    )
  }
}

export default App;
