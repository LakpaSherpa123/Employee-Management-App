import "./PostUser.css"
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const PostUser = () =>{

    const [message, setMessage] = useState("Create New Employee");
    const employeeForm = useForm();

    const onSubmitEmployeeForm= (data)=>{
        console.log(data);
        addEmployee(data);
    } 

    const addEmployee=async (info)=>{
        try {
            const API_URL = "http://localhost:8080/api/employee";
      
            const res = await axios.post(API_URL, info);
            console.log(res.data);
          } catch (error) {
            console.error("Error", error);
          }
    }
    return(
        <div>
            <h1>Create New Employee</h1>
            <form onSubmit={employeeForm.handleSubmit(onSubmitEmployeeForm)}>
            <label for="blank" class="text-indicator no_marg">
              Name
            </label>
            <input defaultValue="" {...employeeForm.register("name")} />

            <label for="blank" class="text-indicator no_marg">
              E-Mail
            </label>
            <input defaultValue="" {...employeeForm.register("email")} />

            <label for="blank" class="text-indicator no_marg">
              Phone Number
            </label>
            <input defaultValue="" {...employeeForm.register("phone")} />
            <label for="blank" class="text-indicator no_marg">
              Department
            </label>
            <input defaultValue="" {...employeeForm.register("department")} />

            <input type="submit" value={"Create"} />
          </form>
        </div>
    )
}
export default PostUser;