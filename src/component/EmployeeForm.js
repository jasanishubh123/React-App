import React from 'react'
class EmployeeForm  extends React.Component {

    constructor(props)
    {
        super(props)
        if(props.EditEmps!==null){
            console.log(JSON.stringify (props.EditEmps)+"EDIT EMPS")
            this.state={
                _id:props.EditEmps._id,
                Name:props.EditEmps.Name,
                Age:props.EditEmps.Age,
                Salary:props.EditEmps.Salary
            }
        }
        else{
            this.state={
                _id:'',
                Name:'',
                Age:'',
                Salary:''
            }
        }
      
        this.onHandleChange=this.onHandleChange.bind(this)
        this.onHandleSubmit=this.onHandleSubmit.bind(this)
    }
 
    

   onHandleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;

        this.setState({
            [name]:value
        })

    }

    onHandleSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state)
       this.setState({
        _id:'',   
        Name:'',
        Age:'',
        Salary:''
       })
    }
    render(){
    return (
        <form onSubmit={this.onHandleSubmit}>
            <div className="form-row">
                <div className="col">
                    <input type="text" required={true}  name="Name" value={this.state.Name} onChange={this.onHandleChange} className="form-control" placeholder="Name" />
                </div>
                <div className="col">
                    <input type="text"  required={true} name="Age" value={this.state.Age} onChange={this.onHandleChange} className="form-control" placeholder="Age" />
                </div>
                <div className="col">
                    <input type="text"  required={true} name="Salary" value={this.state.Salary}  onChange={this.onHandleChange} className="form-control" placeholder="Salary" />
                </div>
            </div>
            <div className="mt-5">
                <input type="submit"  value="Add Employee" className="btn btn-success" />
            </div>
        </form>
    )}

}

export default EmployeeForm