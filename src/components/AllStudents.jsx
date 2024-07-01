/* eslint-disable react/prop-types */
const AllStudents = (props) => {
  const {
    setStudentName,
    studentList,
    setStudentList,
    setEditMode,
    setEditableStudent,
  } = props;

  const editHandler = (std) => {
    setEditMode(true);
    setStudentName(std.name);
    setEditableStudent(std);
  };

  const deleteHandler = (id) => {
    const updatedStudentList = studentList.filter((std) => std.id !== id);
    setStudentList(updatedStudentList);
  };

  const setToPresentList = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `The student is already in the ${
          student.isPresent === true ? "Present List" : "Absent List"
        }`
      );
    }
    const tempStudent = studentList.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: true };
      }
      return item;
    });
    setStudentList(tempStudent);
  };

  const setToAbsentList = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `The student is already in the ${
          student.isPresent === false ? "Absent List" : "Present List"
        }`
      );
    }
    const tempStudent = studentList.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: false };
      }
      return item;
    });
    setStudentList(tempStudent);
  };

  return (
    <div className="list student-list">
      <h2>All Students List</h2>
      <ul>
        {studentList.map((std) => (
          <li key={std.id}>
            <span>{std.name}</span>
            <button className="btn" onClick={() => editHandler(std)}>
              Edit
            </button>
            <button className="btn" onClick={() => deleteHandler(std.id)}>
              Delete
            </button>
            <button className="btn" onClick={() => setToPresentList(std)}>
              Add to Present
            </button>
            <button className="btn" onClick={() => setToAbsentList(std)}>
              Add to Absent
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllStudents;
