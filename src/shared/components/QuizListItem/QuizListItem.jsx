import {
  CardWrapper,  
  FiUsersS,
  GeneralScienceS,
  IconUsersWrapper,  
  TextRatingWrapper,
  TextWrapper,
  ThemesS,
  TopIconBox,
  UsersNumber,
} from "./QuizListItemStyled";
import BtnStart from "../Buttons/BtnStart";
import RatingStars from "../RatingStars/RatingStars";
import BtnHeart from "../Buttons/BtnHeart/BtnHeart";
import { Link } from "react-router-dom";

const QuizListItem = ({ quiz, updateFavoriteQuizes }) => {
  const { _id, quizCategory, quizName, rate, totalPassed, owner } = quiz;  
  
  return (
    <>
      <CardWrapper>
        <TopIconBox>
          <IconUsersWrapper>
            <FiUsersS />            
            <UsersNumber>{totalPassed}</UsersNumber>
          </IconUsersWrapper>          
          <BtnHeart id={_id} owner={owner} updateFavoriteQuizes={updateFavoriteQuizes}/>
        </TopIconBox>
        <TextRatingWrapper>
          <TextWrapper>            
            <ThemesS>{quizCategory?.categoryName}</ThemesS>            
            <GeneralScienceS>{quizName}</GeneralScienceS>
          </TextWrapper>            
          <RatingStars rate={rate}/>
        </TextRatingWrapper>
        <Link to={`/quiz/${quiz._id}`}><BtnStart /></Link>
      </CardWrapper>
    </>
  );
};

export default QuizListItem;
