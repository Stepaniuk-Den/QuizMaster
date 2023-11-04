import { Link } from "react-router-dom";
import QuizListItem from "../QuizListItem/QuizListItem";
import { CardList } from "./QuizesListStyled";

const QuizesList = ({ quizzesArr, className, updateFavoriteQuizes }) => {
  // console.log('quizzesArr: ', quizzesArr);
  return (
    <>
      <CardList className={className}>
        {quizzesArr?.length > 0 && quizzesArr.map(quiz =>
          <li key={quiz._id}>
          <Link to={`/quiz/${quiz._id}`}>
            <QuizListItem
              key={quiz._id}
              quiz={quiz}
              updateFavoriteQuizes={updateFavoriteQuizes}
            />
          </Link>
        </li>)}
      </CardList>
    </>
  );
};

export default QuizesList;
