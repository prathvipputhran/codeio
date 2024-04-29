import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './FacultyPage.css';
import Header from './Header';
import Footer from './Footer';

function FacultyPage() {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Course 1', selected: false, faculty: '' },
    { id: 2, name: 'Course 2', selected: false, faculty: '' },
    { id: 3, name: 'Course 3', selected: false, faculty: '' },
    { id: 4, name: 'Course 4', selected: false, faculty: '' },
    { id: 5, name: 'Course 5', selected: false, faculty: '' },
  ]);

  const faculties = ['Faculty A', 'Faculty B', 'Faculty C', 'Faculty D', 'Faculty E'];

  const handleCourseSelect = (courseId) => {
    setCourses(courses.map(course => {
      if (course.id === courseId) {
        return { ...course, selected: !course.selected };
      }
      return course;
    }));
  };

  const handleFacultySelect = (event, courseId) => {
    const selectedFaculty = event.target.value;
    setCourses(courses.map(course => {
      if (course.id === courseId) {
        return { ...course, faculty: selectedFaculty };
      }
      return course;
    }));
  };

  const handleCourseNameChange = (event, courseId) => {
    const newName = event.target.value;
    setCourses(courses.map(course => {
      if (course.id === courseId) {
        return { ...course, name: newName };
      }
      return course;
    }));
  };

  const handleFacultyNameChange = (event, courseId) => {
    const newFaculty = event.target.value;
    setCourses(courses.map(course => {
      if (course.id === courseId) {
        return { ...course, faculty: newFaculty };
      }
      return course;
    }));
  };

  return (
    <div className="FacultyPage">
     
      <h1>Department of Computer Science And Engineering</h1>

      <table className="course-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Faculty Name</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>
                <input
                  type="text"
                  value={course.name}
                  onChange={(e) => handleCourseNameChange(e, course.id)} // Handle name change
                />
                <input
                  type="checkbox"
                  id={`course-${course.id}`}
                  checked={course.selected}
                  onChange={() => handleCourseSelect(course.id)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={course.faculty}
                  onChange={(e) => handleFacultyNameChange(e, course.id)} // Handle faculty name change
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => console.log('Selected Courses:', courses.filter(course => course.selected))}>
        Submit
      </button>
      <Footer />
    </div>
  );
}

export default FacultyPage;
