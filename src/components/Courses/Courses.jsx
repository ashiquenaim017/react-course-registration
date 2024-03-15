import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({ handleSelectBtn }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("courses.json");
      const data = await res.json();
      setCourses(data);
    };
    fetchCourses();
  }, []);
  return (
    <div className="w-4/5">
      <div className="grid grid-cols-3 gap-6">
        {courses.map((course) => (
          <Course
            handleSelectBtn={handleSelectBtn}
            key={course.id}
            course={course}
          ></Course>
        ))}
      </div>
    </div>
  );
};
Courses.propTypes = {
  handleSelectBtn: PropTypes.func,
};

export default Courses;
