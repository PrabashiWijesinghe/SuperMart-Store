import React, { useState,useEffect } from "react"
import axios from "axios";
import "./AddSalary.css"

export default function AddSalary() {

    const [EmployeeID, setEmployeeID] = useState("");
    const [EmployeeName, setEmployeeName] = useState("");
    const [DepartmentName, setDepartmentName] = useState("");
    const [Designation, setDesignation] = useState("");
    const [BasicSalary, setBasicSalary] = useState("");
    const [Date, setDate] = useState("");
    const [AccountNo, setAccountNo] = useState("");
    const [DearnessAllowance, setDearnessAllowance] = useState("");
    const [EntertainmentAllowance, setEntertainmentAllowance] = useState("");
    const [MedicalAllowance, setMedicalAllowance] = useState("");
    const [NetSalary, setNetSalary] = useState("");

    const [Salary, setSalary] = useState('')
    
    const Calculation=(e)=>{
        e.preventDefault();
        setNetSalary(parseInt(BasicSalary) + parseInt(DearnessAllowance )+ parseInt(EntertainmentAllowance)+ parseInt  (MedicalAllowance))
        
    }

    const Go = (e) => {
        e.preventDefault();
        // Get();
        // alert("Department");
        
        setEmployeeName(Salary[0].EmployeeName);
        setDepartmentName(Salary[0].DepartmentName);
        setDesignation(Salary[0].Designation);
        setBasicSalary(Salary[0].BasicSalary);
        setAccountNo(Salary[0].AccountNo);
       
        // console.log(Department[0].BasicSalary);
      }
    
    
      useEffect(()=>{axios.get(`http://localhost:5000/employee/get/${EmployeeID}`).then((res) => {
        setSalary(res.data)
      }).catch((err)=>console.log(err))},[EmployeeID])
    


    function sendData(e) {

        e.preventDefault();

        //alert("Insert");
        const newSalary = {
            
            EmployeeID,
            EmployeeName,
            DepartmentName,
            Designation,
            BasicSalary,
            Date,
            AccountNo,
            DearnessAllowance,
            EntertainmentAllowance,
            MedicalAllowance,
            NetSalary
        }

        axios.post("http://localhost:5000/salary/add", newSalary).then(() => {
            alert("Salary Added")
        }).catch((err) => {
            alert(err);
        })


        //console.log(newEmployee);
    }


    // class AddSalaryClass extends React.Component{
    //     constructor(){
    //         super();
    //         this.Calculation = this.Calculation.bind(this)
    //         this.state = {
    //           NetSalary:0
    //         }
    //     }

    //     Calculation(){
    //         this.setState({
    //          NetSalary: this.state.BasicSalary + this.state.DearnessAllowance +this.state.EntertainmentAllowance + this.state.MedicalAllowance   
    //         })
    
    //     }

    //     render()

        
    
    // }



    return (
        <div className="container" id="container4">

            <div className="row">
                <div className="col-md-8 mx-auto">

                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col" id="header2">
                                    <center>
                                        <h3 >SALARY CALCULATION</h3>
                                    </center>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <hr />
                                </div>
                            </div>
                            <form className="row g-3" id="form-color4">
                                <div className="col-md-6">
                                    <label for="validationDefault01" className="form-label">Employee ID
                                    <button class="btn btn-primary" onClick={(e)=>Go(e)}>Go</button></label> 
                                    <input type="text" name="EmployeeID" className="form-control" id="validationDefault01" 
                                        onChange={(e) => {
                                            setEmployeeID(e.target.value);
                                        }} required />
                                </div>
                                
                                <div className="col-md-6">
                                    <label for="validationDefault02" className="form-label">Employee Name</label>
                                    <input type="text" name="EmployeeName" className="form-control" value={EmployeeName} id="validationDefault02" 
                                        onChange={(e) => {
                                            setEmployeeName(e.target.value);
                                        }}readOnly required />

                                </div>
                                {/* <div className="col-md-7">
                                    <label for="validationDefault03" className="form-label">Code ID <button class="btn btn-primary"
                                        type="Go">Go</button></label>
                                    <input type="text" name="CodeID" className="form-control" id="validationDefault03"
                                        onChange={(e) => {
                                            setCodeID(e.target.value);
                                        }} required />

                                </div> */}
                                <div></div>
                                <div className="col-md-4">
                                    <label for="validationDefault04" className="form-label">DepartmentName</label>
                                    <input type="text" name="DepartmentName" className="form-control" value={DepartmentName} id="validationDefault04"
                                        onChange={(e) => {
                                            setDepartmentName(e.target.value);
                                        }}readOnly required />

                                </div>
                                <div className="col-md-4">
                                    <label for="validationDefault05" className="form-label">Designation</label>
                                    <input type="text" name="Designation" className="form-control" value={Designation} id="validationDefault05"
                                        onChange={(e) => {
                                            setDesignation(e.target.value);
                                        }}readOnly required />

                                </div>
                                <div className="col-md-4">
                                    <label for="validationDefault06" className="form-label">Basic Salary</label>
                                    <input type="text" name="BasicSalary" className="form-control" value={BasicSalary} id="validationDefault06"
                                        onChange={(e) => {
                                            setBasicSalary(e.target.value);
                                        }}readOnly required />

                                </div>
                                <div className="col-md-6">
                                    <label for="validationDefault07" className="form-label">Date</label>
                                    <input type="text" name="Date" className="form-control" id="validationDefault07" TextMode="Date"
                                        onChange={(e) => {
                                            setDate(e.target.value);
                                        }} required />

                                </div>
                                <div className="col-md-6">
                                    <label for="validationDefault13" className="form-label">AccountNo</label>
                                    <input type="text" name="AccountNo" class="form-control" value={AccountNo} id="validationDefault13"
                                        onChange={(e) => {
                                            setAccountNo(e.target.value);
                                        }} readOnly  required />

                                </div>

                                <div className="col-md-4">
                                    <label for="validationDefault08" className="form-label">DearnessAllowance</label>
                                    <input type="text" name="DearnessAllowance" className="form-control" id="validationDefault08"
                                        onChange={(e) => {
                                            setDearnessAllowance(e.target.value);
                                        }} required />

                                </div>
                                <div className="col-md-4">
                                    <label for="validationDefault09" className="form-label">EntertainmentAllowance</label>
                                    <input type="text" name="EntertainmentAllowance" className="form-control" id="validationDefault09"
                                        onChange={(e) => {
                                            setEntertainmentAllowance(e.target.value);
                                        }} required />

                                </div>
                                <div className="col-md-4">
                                    <label for="validationDefault10" className="form-label">MedicalAllowance </label>
                                    <input type="text" name="MedicalAllowance " className="form-control" id="validationDefault10"
                                        onChange={(e) => {
                                            setMedicalAllowance(e.target.value);
                                        }} required />
                                    
                                </div>
                                <div className="col-md-6"> 
                                    <label for="validationDefault11" className="form-label"> NetSalary</label>
                                    <input type="text" name="NetSalary" className="form-control" value={NetSalary}  id="validationDefault11" 
                                        onChange={(e) => {
                                            setNetSalary(e.target.value);
                                        }} readOnly/> 
                                       
                                        
                                    
                                </div><button className="btn btn-secondary" onClick={Calculation}>Calculation</button>
                                
                                
                                <div className="col">
                                    
                                    
                                </div><button className="btn btn-primary" type="submit" onClick={sendData}>Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div >

        </div>

    )
}

