import { MdOutlinePriceCheck } from "react-icons/md";
import { GoBook } from "react-icons/go";
import PropTypes from "prop-types";
const Course = ({ course, handleSelectBtn }) => {
  const { id, credit, description, name, photo, price } = course;
  return (
    <div>
      <div className=" bg-base-100 shadow-xl py-6 rounded-xl space-y-4 px-4">
        <figure className="px-3 pt-4">
          <img src={photo} />
        </figure>
        <div className=" items-center text-start space-y-2">
          <h2 className="text-xl font-bold">{name}</h2>
          <p>{description}</p>
          <div className="flex justify-between">
            <p className="flex gap-1">
              <span className="text-2xl">
                {" "}
                <MdOutlinePriceCheck />
              </span>
              <span className="font-semibold">Price : {price}</span>
            </p>
            <p className="flex gap-1">
              <span className="text-2xl text-transparen">
                {" "}
                <GoBook />
              </span>
              <span className="font-semibold">Credit : {credit}</span>
            </p>
          </div>
          <div className="">
            <button
              onClick={() => handleSelectBtn(course, id)}
              className="btn w-full rounded-lg py-2 bg-blue-500 text-white font-semibold"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
  handleSelectBtn: PropTypes.func,
};
export default Course;
