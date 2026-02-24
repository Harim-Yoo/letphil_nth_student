// ==========================================
// 8. Quiz Game
// ==========================================

import { useState } from "react";

/**
 * Components: QuizManager (Parent), QuestionCard (Child)
 * Requirements:
 * - Parent stores: currentQuestionIndex (number), score (number)
 * - Child receives: question text, choices array, onAnswer function
 * - Child action: Clicking a choice passes the selected answer back to parent. 
 * Parent checks if correct, updates score, and increments question index.
 */

type QuizType = {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: string;
};

const QuestionCard = (props: {
  question: string;
  choices: string[];
  onAnswer: (choice:string)=>void;
}) => {
  const {question, choices, onAnswer} = props;
  return(
    <>
    <div className="flex flex-col justify-center items-center gap-5">
      <span>{question}</span>
      {choices.map((choice)=><button key={choice} onClick={()=>onAnswer(choice)}>{choice}</button>)}
    </div>
    </>
  ); };

type QuizCurrent = {
  currentQuestionIndex: number;
  score:number;
}
export const QuizManager = () => {
  const [current, setCurrent] = useState<QuizCurrent>({currentQuestionIndex:0,score:0})
  
  const updateScore = (choice:string) => {
    const {currentQuestionIndex, score} = current;
    const newscore = (Quiz[currentQuestionIndex].correctAnswer === choice ? score+1 : score)
    return setCurrent({...current, currentQuestionIndex: current.currentQuestionIndex+1, score: newscore})
  }

  const Quiz: QuizType[] = [
  {
    id: 1,
    question: "React에서 상태(State)를 관리하기 위해 사용하는 훅(Hook)은 무엇인가요?",
    choices: ["useEffect", "useState", "useContext", "useRef"],
    correctAnswer: "useState"
  },
  {
    id: 2,
    question: "다음 중 자바스크립트의 데이터 타입이 아닌 것은?",
    choices: ["string", "boolean", "number", "character"],
    correctAnswer: "character"
  },
  {
    id: 3,
    question: "CSS에서 글자 색상을 바꾸는 속성은 무엇인가요?",
    choices: ["color", "font-color", "text-color", "background-color"],
    correctAnswer: "color"
  }
];

  const currentQuestion = Quiz[current.currentQuestionIndex];

  return(
  <div className="flex flex-col justify-center py-5">
    {current.currentQuestionIndex < Quiz.length ? 
    (<QuestionCard
      question = {currentQuestion.question}
      choices = {currentQuestion.choices}
      onAnswer = {(choice:string)=>updateScore(choice)}
    />)
    : (<span>Current Score : {current.score}</span>) }
  </div>
  ); 
};
