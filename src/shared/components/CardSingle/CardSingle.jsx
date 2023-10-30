import { useLocation } from "react-router";
import BtnStart from "../Buttons/BtnStart";
import CardTitle from "../CardTitle/CardTitle";
import {
  CardWrapper,
  FiHeartS,
  FiUsersS,
  IconUsersWrapper,  
  RatingStars,
  TextRatingWrapper,
  TextWrapper,
  ThemesS,
  TopIconBox,
  UsersNumber,
} from "./CardSingleStyled";

const CardSingle = ({type}) => {
  const location = useLocation()
  
  const newClassName = location.pathname === '/favorite'?"favorite": '';
  return (
    <>
      <CardWrapper className={type}>
        <TopIconBox>
          <IconUsersWrapper>
            <FiUsersS />
            <UsersNumber>485</UsersNumber>
          </IconUsersWrapper>
          <FiHeartS className={newClassName}/>
        </TopIconBox>
        <TextRatingWrapper>
          <TextWrapper>
            <ThemesS>Themes</ThemesS>
            <CardTitle>General Science</CardTitle>
          </TextWrapper>
          <RatingStars>*****</RatingStars>
        </TextRatingWrapper>
        <BtnStart />
      </CardWrapper>
    </>
  );
};

export default CardSingle;
