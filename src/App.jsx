import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import Creditsection from "./components/Creditsection/Creditsection";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [credits, setCredits] = useState([]);
  const [creditNumbers, setCreditnumbers] = useState([]);

  const handleSelectBtn = (course) => {
    const totalCredits =
      course.credit +
      creditNumbers.reduce((accumulator, current) => accumulator + current, 0);
     if(totalCredits>25)
     {
      toast.error("You can't add more than 25 credits")
     }
    const alreadyExist = credits.find((e) => e.id === course.id);

    if (!alreadyExist && totalCredits <= 25) {
      const newArray = [...credits, course];
      setCredits(newArray);
      toast.success("Successfully Added Your Course")
      const newArrayOfCredits = [...creditNumbers, course.credit];
      setCreditnumbers(newArrayOfCredits);
    }
  };

  const handleDeleteCourseBtn = (id, credit) => {
    setCredits(credits.filter((credit) => credit.id !== id));
    for (let i = 0; i < creditNumbers.length; i++) {
      if (creditNumbers[i] === credit) {
        creditNumbers.splice(i, 1);
        setCreditnumbers(creditNumbers);
        return 0;
      }
    }
  };

  return (
    <>
      <Header></Header>
      <div className="container mx-auto px-6 flex gap-4 justify-between ">
        <Courses handleSelectBtn={handleSelectBtn}></Courses>
        <Creditsection
          creditNumbers={creditNumbers}
          credits={credits}
          handleDeleteCourseBtn={handleDeleteCourseBtn}
        ></Creditsection>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
