import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./DashBoard.css"
import { useNavigate } from "react-router-dom";


const DashBoard = () =>{

    var [employees, setEmployee] = useState([]);
    const navigate = useNavigate()

    useEffect( ()=> {

        console.log("Inside the list");
        const fetchEmployee = async () =>{
            try {
                const API_URL = "http://localhost:8080/api/view-employees";
                const res = await axios.get(API_URL);
                const datas = await res.data;
                setEmployee(datas);
            }catch(error){
                console.log(error.message);
            }
        }

        fetchEmployee();
    } , [])

    const handleDelete = async (employeeID) =>{
        try {

                
                const url = `http://localhost:8080/api/employee/${employeeID}`;
                const res = await axios.delete(url);

                console.log(`Employee ${employeeID} deleted Successfully`);
                if(res.status === 200 ){
                    setEmployee((prevEmployee) =>
                        prevEmployee.filter((e) => e.id !== employeeID));
                }
   
        }catch(error){
            console.log(error.message); 
        }
    }

    const handleUpdate = async (employeeID) =>{

         navigate(`/employee/${employeeID}`);   

    }

    return (
      <div>
        <Container className="tableContainer">
          <h1>Employee List</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>E-Mail</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.department}</td>
                  <td>
                    <Button variant="outline-secondary" onClick={()=>handleUpdate(employee.id)}>Edit</Button>{" "}
                    <Button variant="outline-danger" onClick={()=> handleDelete(employee.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
}
export default DashBoard;
