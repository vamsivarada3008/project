import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";
  
// CreateStudent Component
const CreateStudent = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '', rollno: '' });
  
  // onSubmit handler
  const onSubmit = async (studentObject) => {

    try {
      const response = await axios.post('http://localhost:4000/students/create-student', studentObject);
      if (response.status === 200) {
        alert('Student successfully created');
      } else {
        Promise.reject();
      }
    } catch (err) {
      alert(err);
    }
  }
    
  // Return student form
  return (
    <StudentForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Create Student
    </StudentForm>
  )
}
  
// Export CreateStudent Component
export default CreateStudent;
