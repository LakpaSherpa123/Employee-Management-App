import "./Employee.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "react-bootstrap";

const UpdateUser=()=>{

    const {id} = useParams();
    const updateEmployeeForm = useForm();
    const { register, handleSubmit, reset } = useForm();
    const [employees, setEmployee] = useState({});
    var [updatedValues, setUpdatedValues] = useState({});
    const navigate = useNavigate();

    
    useEffect( ()=> {

        const populateTable = async () =>{
        try {
            const API_URL = `http://localhost:8080/api/employee/${id}`;
            const res = await axios.get(API_URL);
            const datas = await res.data;
            setEmployee(datas);
            setUpdatedValues(datas);
        }catch(error){
            console.log(error.message);
        }
    }

    populateTable();
} , []);

    const onSubmitUpdateForm= async(data)=>{
        console.log(data);
        try {
           // console.log("Updated calue temp" + updatedValues);
           // const updatedEmployee = { ...updatedValues, ...data }; // merge updated values with existing data
            const API_URL = `http://localhost:8080/api/employee/${id}`;

           // console.log(updatedEmployee);
            const res = await axios.put(API_URL,data);
          
            navigate(`/`);
            
        }catch(error){
            console.log(error.message);
        }
       
    } 

    const onCancelForm = () =>{
        navigate(`/`);
    }


    return(

        
    <div>
        <div className="updateTable">
        <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>E-Mail</th>
                <th>Phone</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              
                <tr>
                  <td>{employees.id}</td>
                  <td>{employees.name}</td>
                  <td>{employees.email}</td>
                  <td>{employees.phone}</td>
                  <td>{employees.department}</td>
                </tr>
            </tbody>
        </Table>
        </div>
       <div  className="formContainer">
            <h1>Update Employee</h1>
            <form>

            <label for="blank" class="text-indicator no_marg">
              Name
            </label>
            <input defaultValue="" {...updateEmployeeForm.register("name")} />
          
            <label for="blank" class="text-indicator no_marg">
              E-Mail
            </label>
            <input defaultValue="" {...updateEmployeeForm.register("email")} />

            <label for="blank" class="text-indicator no_marg">
              Phone Number
            </label>
            <input defaultValue="" {...updateEmployeeForm.register("phone")} />

            <label for="blank" class="text-indicator no_marg">
              Department
            </label>
            <input defaultValue="" {...updateEmployeeForm.register("department")} />

           
            <input type="button" className= "button" value={"Update"} onClick={updateEmployeeForm.handleSubmit(onSubmitUpdateForm)} />
            <input type="button" className= "button" value={"Cancel"} onClick={handleSubmit(onCancelForm)} />
          </form>
        </div>

    </div>
    )
}
export default UpdateUser;