import React from 'react'
// import EmployeeForm from './EmployeeForm'

class EmployeeManage extends React.Component {

    

    
    constructor(props){
        super(props)
        this.state = {
            Employee: null,
            TempEmp:null
            
        }
    }

    async componentDidMount() {
        const url = "http://localhost:8888/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({ Employee: data,TempEmp:data })
    }



    DeleteEmployee=(id)=>{
         const url = "http://localhost:8888/"+id;
         const response =  fetch(url,{
             method:'DELETE',
             
         });
         
      this.setState({ Employee: this.state.Employee.filter(e=>e._id !==id) ,TempEmp:this.state.Employee.filter(e=>e._id !==id) })
        
       
    }
    Searchdata=(event)=>{
        console.log(event.target.value)
        
        const SearchEmp=this.state.TempEmp.filter(e=>e.Name.toUpperCase().includes(event.target.value.toUpperCase()));
        this.setState({
            Employee:SearchEmp
        })
    }

    render() {
        return (

            <>
                {this.state.Employee == null ? (<div>Loading...</div>) :
                    (
                        <>
                        <input className="form-control" onChange={this.Searchdata} type="text" placeholder="Search Employee Name.." />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.Employee.map(emp =>
                                    <tr key={emp._id}>

                                        <td>{emp.Name}</td>
                                        <td>{emp.Age}</td>
                                        <td>{emp.Salary}</td>
                                        
                                        <td ><button style={{marginRight:"10px"}} className="btn btn-warning" onClick={()=>this.props.EditBtn(emp._id)} >Edit</button
                                        ><button className="btn btn-danger" onClick={()=>this.DeleteEmployee(emp._id)} >DELETE</button></td>
                                    </tr>
                                )}



                            </tbody>
                        </table>
                        </>
                    )}

            </>

        )
    }

}

export default EmployeeManage
