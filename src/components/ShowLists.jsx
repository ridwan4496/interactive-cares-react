/* eslint-disable react/prop-types */
import AbsentStudents from "./AbsentStudents";
import AllStudents from "./AllStudents";
import PresentStudents from "./PresentStudents";

const ShowLists = (props) => {
  const {
    setStudentName,
    studentList,
    setStudentList,
    setEditMode,
    setEditableStudent,
  } = props;

  const toggleListHandler = (student) => {
    const tempStudent = studentList.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: !item.isPresent };
      }
      return item;
    });
    setStudentList(tempStudent);
  };

  return (
    <div className="student-info">
      <AllStudents
        setStudentName={setStudentName}
        studentList={studentList}
        setStudentList={setStudentList}
        setEditMode={setEditMode}
        setEditableStudent={setEditableStudent}
      />
      <PresentStudents
        studentList={studentList}
        toggleListHandler={toggleListHandler}
      />
      <AbsentStudents
        studentList={studentList}
        toggleListHandler={toggleListHandler}
      />
    </div>
  );
};

export default ShowLists;
