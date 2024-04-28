import React, { useState } from 'react';

function StudentPage() {
  // Sample open electives data
  const openElectives = [
    { id: 1, name: 'Open Elective 1', department: 'Department 1', faculty: 'Faculty 1' },
    { id: 2, name: 'Open Elective 2', department: 'Department 2', faculty: 'Faculty 2' },
    { id: 3, name: 'Open Elective 3', department: 'Department 3', faculty: 'Faculty 3' },
    // Add more open electives as needed
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleSubmit = () => {
    if (selectedCourse) {
      setSuccessMessage(`Successfully selected: ${selectedCourse.name}`);
    } else {
      setSuccessMessage('Please select a course first.');
    }
  };

  return (
    <div className="open-electives-container">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Open Electives</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Open Elective</th>
            <th>Department</th>
            <th>Faculty</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {openElectives.map(elective => (
            <tr key={elective.id}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{elective.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{elective.department}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{elective.faculty}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                <input
                  type="radio"
                  name="selectedElective"
                  onClick={() => handleSelectCourse(elective)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={handleSubmit}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </div>
      {successMessage && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>{successMessage}</p>
        </div>
      )}
    </div>
  );
}

export default StudentPage;
