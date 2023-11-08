import {
  BtnSearch,
  FiSearchS,
  FormWrapper,
  InputStyled,
} from "./QuizSearchStyled";

const QuizeSearch = ({ filteredQuizeCards }) => {
  const handleSearchBtnClick = () => {
    console.log("handleSearchBtnClick");
  };
  return (
    <FormWrapper>
      <BtnSearch type="button" onClick={handleSearchBtnClick}>
        <FiSearchS />
      </BtnSearch>
      <InputStyled
        placeholder="Search"
        name="quizCollectionName"
        // value={quizCollectionName}
        type="text"
        autoComplete="on"
        autoFocus
        onChange={(evt) => filteredQuizeCards(evt.target.value)}
      />
    </FormWrapper>
  );
};

export default QuizeSearch;
