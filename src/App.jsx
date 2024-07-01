import { useState } from "react";

import "./App.css";
import StudentForm from "./components/StudentForm";
import ShowLists from "./components/ShowLists";

function App() {
  const [studentName, setStudentName] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  // const presentList = studentList.filter(
  //   (student) => student.isPresent === true
  // );
  // const absentList = studentList.filter(
  //   (student) => student.isPresent === false
  // );

  // const inputHandler = (event) => {
  //   setStudentName(event.target.value);
  // };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   if (studentName.trim() === "") {
  //     return alert("Please Enter a valid student name");
  //   }
  //   editMode ? updateHandler() : createHandler();
  // };

  // const updateHandler = () => {
  //   const tempStudent = studentList.map((std) => {
  //     if (std.id === editableStudent.id) {
  //       return { ...std, name: studentName };
  //     }
  //     return std;
  //   });
  //   setStudentList(tempStudent);
  //   setStudentName("");
  //   setEditMode(false);
  //   setEditableStudent(null);
  // };

  // const createHandler = () => {
  //   const aStudent = {
  //     id: Date.now() + "",
  //     name: studentName,
  //     isPresent: undefined,
  //   };
  //   setStudentList([aStudent, ...studentList]);
  //   setStudentName("");
  // };

  // const editHandler = (std) => {
  //   setEditMode(true);
  //   setStudentName(std.name);
  //   setEditableStudent(std);
  // };

  // const deleteHandler = (id) => {
  //   const updatedStudentList = studentList.filter((std) => std.id !== id);
  //   setStudentList(updatedStudentList);
  // };

  // const setToPresentList = (student) => {
  //   if (student.isPresent !== undefined) {
  //     return alert(
  //       `The student is already in the ${
  //         student.isPresent === true ? "Present List" : "Absent List"
  //       }`
  //     );
  //   }
  //   const tempStudent = studentList.map((item) => {
  //     if (item.id === student.id) {
  //       return { ...item, isPresent: true };
  //     }
  //     return item;
  //   });
  //   setStudentList(tempStudent);
  // };

  // const setToAbsentList = (student) => {
  //   if (student.isPresent !== undefined) {
  //     return alert(
  //       `The student is already in the ${
  //         student.isPresent === false ? "Absent List" : "Present List"
  //       }`
  //     );
  //   }
  //   const tempStudent = studentList.map((item) => {
  //     if (item.id === student.id) {
  //       return { ...item, isPresent: false };
  //     }
  //     return item;
  //   });
  //   setStudentList(tempStudent);
  // };

  // const toggleListHandler = (student) => {
  // const tempStudent = studentList.map((item) => {
  //   if (item.id === student.id) {
  //     if (item.isPresent === true) {
  //       return { ...item, isPresent: false };
  //     } else if (item.isPresent === false) {
  //       return { ...item, isPresent: true };
  //     }
  //   }
  //   return item;
  // });
  //   const tempStudent = studentList.map((item) => {
  //     if (item.id === student.id) {
  //       return { ...item, isPresent: !item.isPresent };
  //     }
  //     return item;
  //   });
  //   setStudentList(tempStudent);
  // };

  return (
    <div className="app">
      <StudentForm
        studentName={studentName}
        setStudentName={setStudentName}
        studentList={studentList}
        setStudentList={setStudentList}
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
      />
      <ShowLists
        studentName={studentName}
        setStudentName={setStudentName}
        studentList={studentList}
        setStudentList={setStudentList}
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
      />
    </div>
  );
}

export default App;
