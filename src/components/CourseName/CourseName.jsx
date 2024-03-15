import { CiCircleRemove } from "react-icons/ci";
import PropTypes from "prop-types";

const CourseName = ({ credit, handleDeleteCourseBtn }) => {
  const { name, id, credit: cre } = credit;
  console.log(cre);
  return (
    <div>
      <div className="pb-4">
        <p>
          <span>{name}</span>{" "}
          <span>
            <button
              onClick={() => handleDeleteCourseBtn(id, cre)}
              className="text-xl text-red-600"
            >
              <CiCircleRemove />
            </button>
          </span>
        </p>
      </div>
    </div>
  );
};

CourseName.propTypes={

    credit: PropTypes.object.isRequired,
    handleDeleteCourseBtn: PropTypes.func
}

export default CourseName;
