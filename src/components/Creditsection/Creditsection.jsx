import CourseName from "../CourseName/CourseName";
import PropTypes from "prop-types";
const Creditsection = ({ credits, creditNumbers, handleDeleteCourseBtn }) => {
  console.log(creditNumbers);

  const toTalCredit = creditNumbers.reduce(
    (accumulator, current) => accumulator + current,
    0
  );

  return (
    <div className="w-1/5">
      <div className="mt-3 bg-white rounded-xl text-center">
        <div className="border-b-2 pb-4">
          Credit Houres Remaining :{" "}
          <span className="font-medium">
            {toTalCredit ? 25 - toTalCredit : 25}
          </span>{" "}
          hr
        </div>

        <p className="text-base font-bold border-b-2 pb-4">Course Name</p>

        {credits.map((credit) => (
          <CourseName
            key={credit.id}
            credit={credit}
            handleDeleteCourseBtn={handleDeleteCourseBtn}
          ></CourseName>
        ))}

        <div>
          <p className="border-t-2 py-4">
            Total Credit Hours :{" "}
            <span className="font-medium">{toTalCredit}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Creditsection.propTypes={

    credits: PropTypes.array,
    creditNumbers: PropTypes.array,
    handleDeleteCourseBtn: PropTypes.func
}

export default Creditsection;
