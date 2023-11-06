import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

// export const = styled
export const TitleQuestion = styled.h2`
  color: var(--text-color-100);
  font-size: 24px;

  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.24px;
  margin-bottom: 40px;
`;

export const NextButton = styled.button`
  padding: 16px 62px;
  border-radius: 30px;
  background: var(--blue-background);

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.01em;

  color: var(--text-color-100);
`;

export const AnswersContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
`;

export const ButtonText = styled.p`
  color: var(--text-color-100);
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.01em;
`;

export const AnswerLabels = styled.span`
  font-style: normal;
  font-weight: 700;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: 14px;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: var(--text-color-100);
  border-bottom: 2px solid var(--text-color-100);
`;

export const DownContainer = styled.div`
  position: relative;
  margin-top: 40px;
`;

export const AnswersCounter = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0; /* Убираем внешние отступы */
`;

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  width: 295px;
  @media (min-width: 768px) {
    width: 222px;
  }

  text-align: left;
  padding: 14px 0 14px 18px;
  border-radius: 30px;
  border: 1px solid rgba(244, 244, 244, 0.6);
  background-color: transparent;
  cursor: pointer;
  background-color: ${(props) =>
    props.isCorrect === "correct"
      ? "green"
      : props.isCorrect === "incorrect"
      ? "red"
      : "transparent"};
  color: ${(props) =>
    props.isCorrect === "correct"
      ? "white"
      : props.isCorrect === "incorrect"
      ? "white"
      : "black"};
`;
