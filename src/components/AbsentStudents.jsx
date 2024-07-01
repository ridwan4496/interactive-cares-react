/* eslint-disable react/prop-types */
const AbsentStudents = (props) => {
  const { studentList, toggleListHandler } = props;

  const absentList = studentList.filter(
    (student) => student.isPresent === false
  );

  return (
    <div className="list absent-student-list">
      <h2>Absent Students List</h2>
      {absentList.map((student) => (
        <li key={student.id}>
          <span>{student.name}</span>
          <button className="btn" onClick={() => toggleListHandler(student)}>
            Add to Present List
          </button>
        </li>
      ))}
    </div>
  );
};

export default AbsentStudents;
