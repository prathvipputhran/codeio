import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import LoginPage from './LoginPage';
import DeanLogin from './DeanLogin';
import StudentLogin from './StudentLogin';
import CourseList from './CourseList';
import StudentPage from './StudentPage';
import FacultyLogin from './FacultyLogin'; 
import FacultyPage from './FacultyPage';




function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/api/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const handleApprove = (courseId) => {
    fetch(`/api/courses/approve/${courseId}`, { method: 'POST' })
      .then(() => {
        setCourses(courses.map(course => 
          course.id === courseId ? { ...course, approved: true } : course
        ));
      })
      .catch(error => console.error('Error approving course:', error));
  };

  const handleReject = (courseId) => {
    fetch(`/api/courses/reject/${courseId}`, { method: 'POST' })
      .then(() => {
        setCourses(courses.map(course => 
          course.id === courseId ? { ...course, approved: false } : course
        ));
      })
      .catch(error => console.error('Error rejecting course:', error));
  };

  const handleStudentApprove = (courseId, studentId) => {
    fetch(`/api/courses/${courseId}/approve/student/${studentId}`, { method: 'POST' })
      .then(() => {
        setCourses(courses.map(course => {
          if (course.id === courseId) {
            return {
              ...course,
              students: course.students.map(student => 
                student.id === studentId ? { ...student, approved: true } : student
              )
            };
          }
          return course;
        }));
      })
      .catch(error => console.error('Error approving student:', error));
  };

  const handleStudentReject = (courseId, studentId) => {
    fetch(`/api/courses/${courseId}/reject/student/${studentId}`, { method: 'POST' })
      .then(() => {
        setCourses(courses.map(course => {
          if (course.id === courseId) {
            return {
              ...course,
              students: course.students.map(student => 
                student.id === studentId ? { ...student, approved: false } : student
              )
            };
          }
          return course;
        }));
      })
      .catch(error => console.error('Error rejecting student:', error));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dean-login" element={<DeanLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        

        <Route path="/main" element={
          <main>
            <CourseList 
              courses={courses} 
              onApprove={handleApprove} 
              onReject={handleReject} 
              onStudentApprove={handleStudentApprove} 
              onStudentReject={handleStudentReject} 
            />
          </main>
        } />
        <Route path="/student-page" element={<StudentPage />} />
        {/* Add more routes for other roles and functionalities */
        <Route path="/faculty-page" element={<FacultyPage />} />}
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;