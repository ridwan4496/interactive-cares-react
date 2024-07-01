/* eslint-disable react/prop-types */
const PresentStudents = (props) => {
  const { studentList, toggleListHandler } = props;

  const presentList = studentList.filter(
    (student) => student.isPresent === true
  );

  return (
    <div className="list present-student-list">
      <h2>Present Students List</h2>
      {presentList.map((student) => (
        <li key={student.id}>
          <span>{student.name}</span>
          <button className="btn" onClick={() => toggleListHandler(student)}>
            Add to Absent List
          </button>
        </li>
      ))}
    </div>
  );
};

export default PresentStudents;
