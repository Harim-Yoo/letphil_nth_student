"use client";

import AnswerView from "@/components/AnswerView";
import ProblemView from "@/components/ProblemView";
import TimerView from "@/components/TimerView";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Questions {
    id: number,
    text: string,
    choiceA: string,
    choiceB: string,
    choiceC: string,
    choiceD: string,
    answer: string
}

export default function ExamPage() {
    const router = useRouter();
    const Questions: Questions[] =
        [

            {
                id: 1,
                text: "If 3x+12=24, what is the value of x+4?",
                choiceA: "4",
                choiceB: "8",
                choiceC: "5",
                choiceD: "9",
                answer: "D"
            },
            {
                id: 2,
                text: "problem 2",
                choiceA: "4",
                choiceB: "8",
                choiceC: "5",
                choiceD: "9",
                answer: "D"
            }
            ,
            {
                id: 3,
                text: "problem 3",
                choiceA: "4",
                choiceB: "8",
                choiceC: "5",
                choiceD: "9",
                answer: "D"
            }
        ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
    const handleSelect = (questionId: number, choice: string) => {
        setUserAnswers(prev => ({ ...prev, [questionId]: choice }))
    };
    const nextIndex = () => {
        const last = Questions.length - 1;
        setCurrentIndex(prev => (prev < last ? prev + 1 : last));

    };
    const prevIndex = () => {
        setCurrentIndex(prev => (prev > 0 ? prev - 1 : 0))
    };

    const submitBtn = () => {
        let count = 0;
        Questions.forEach((q)=>{
            const myAnswer = userAnswers[q.id]
            if (myAnswer && myAnswer === q.answer) {
                count+= 1
            }
        });
        alert(`Your score is ${count}.`)
        router.push(`/result?score=${count}`);
    }

    let currentQuestion = Questions[currentIndex];

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
            <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                <div className="bg-white p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 z-10">
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">Section 1: Math</h1>
                        <p className="text-sm text-gray-500">Question {currentIndex + 1} of {Questions.length}</p>
                    </div>
                    
                    <div className="bg-gray-100 px-5 py-2 rounded-lg font-mono font-bold text-black-600">
                        <TimerView id={currentQuestion.id} />
                    </div>
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="flex flex-col justify-center">
                         <div className="text-xl font-medium text-gray-900 leading-relaxed">
                            <ProblemView text={currentQuestion.text} />
                         </div>
                    </div>

                
                    <div>
                        <p className="text-sm font-bold text-gray-400 mb-3 uppercase">Select an Answer</p>
                        <AnswerView
                            choiceA={currentQuestion.choiceA}
                            choiceB={currentQuestion.choiceB}
                            choiceC={currentQuestion.choiceC}
                            choiceD={currentQuestion.choiceD}
                            selected={userAnswers[currentQuestion.id]}
                            onSelect={(choice) => handleSelect(currentQuestion.id, choice)}
                        />
                    </div>
                </div>

                <div className="bg-gray-50 p-6 border-t border-gray-200 flex justify-between items-center">
                    <button
                        onClick = {prevIndex}
                        disabled = {currentIndex === 0}
                        className = {`px-6 py-2.5 rounded-lg font-medium transtion-all duration-200
                            ${currentIndex === 0
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 hover:shadow-sm'
                            }`
                        }>
                            Back
                    </button>
                    
                    <div className="hidden sm:flex gap-2">
                        {Questions.map((q, idx) => (
                            <div key={q.id} className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                        ))}
                    </div>

                    {currentIndex === Questions.length - 1 ? (
                        <button 
                            onClick={submitBtn}
                            className="px-8 py-2.5 bg-green-600 text-white rounded-lg font-bold shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                        >
                            Finish Exam check ✓
                        </button>
                    ) : (
                        <button 
                            onClick={nextIndex}
                            className="px-8 py-2.5 bg-blue-600 text-white rounded-lg font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                        >
                            Next Question →
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}