/* eslint-disable react/prop-types */
const StudentForm = (props) => {
  const {
    studentName,
    setStudentName,
    studentList,
    setStudentList,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
  } = props;

  const inputHandler = (event) => {
    setStudentName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (studentName.trim() === "") {
      return alert("Please Enter a valid student name");
    }
    editMode ? updateHandler() : createHandler();
  };

  const updateHandler = () => {
    const tempStudent = studentList.map((std) => {
      if (std.id === editableStudent.id) {
        return { ...std, name: studentName };
      }
      return std;
    });
    setStudentList(tempStudent);
    setStudentName("");
    setEditMode(false);
    setEditableStudent(null);
  };

  const createHandler = () => {
    const aStudent = {
      id: Date.now() + "",
      name: studentName,
      isPresent: undefined,
    };
    setStudentList([aStudent, ...studentList]);
    setStudentName("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <input onChange={inputHandler} type="text" value={studentName} />
        <button className="btn" type="submit">
          {editMode ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
