// #1. We will use this component at the client side.
"use client";

// #3. We will set the interface for Answers.

interface Answers {
    choiceA: string,
    choiceB: string,
    choiceC: string,
    choiceD: string,
    selected: string | null,
    onSelect: (choice: string) => void
}

export default function AnswerView({ choiceA, choiceB, choiceC, choiceD, selected, onSelect }: Answers) {
   const getButtonStyle = (choiceChar: string) => {
        const isSelected = selected === choiceChar;
        return `
            w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 group
            ${isSelected 
                ? 'border-blue-600 bg-blue-50 shadow-md transform scale-[1.02]' // 선택됐을 때
                : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-gray-50' // 평소 & 마우스 호버
            }
        `;
    };

    // 원(Circle) 안에 A, B, C, D 글자 스타일
    const getCircleStyle = (choiceChar: string) => {
        const isSelected = selected === choiceChar;
        return `
            w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold transition-colors
            ${isSelected
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
            }
        `;
    };

    return (
        <div className="flex flex-col gap-3 w-full">
            {/* A 버튼 */}
            <button onClick={() => onSelect('A')} className={getButtonStyle('A')}>
                <span className={getCircleStyle('A')}>A</span>
                <span className={`font-medium ${selected === 'A' ? 'text-blue-900' : 'text-gray-700'}`}>
                    {choiceA}
                </span>
            </button>

            {/* B 버튼 */}
            <button onClick={() => onSelect('B')} className={getButtonStyle('B')}>
                <span className={getCircleStyle('B')}>B</span>
                <span className={`font-medium ${selected === 'B' ? 'text-blue-900' : 'text-gray-700'}`}>
                    {choiceB}
                </span>
            </button>

            {/* C 버튼 */}
            <button onClick={() => onSelect('C')} className={getButtonStyle('C')}>
                <span className={getCircleStyle('C')}>C</span>
                <span className={`font-medium ${selected === 'C' ? 'text-blue-900' : 'text-gray-700'}`}>
                    {choiceC}
                </span>
            </button>

            {/* D 버튼 */}
            <button onClick={() => onSelect('D')} className={getButtonStyle('D')}>
                <span className={getCircleStyle('D')}>D</span>
                <span className={`font-medium ${selected === 'D' ? 'text-blue-900' : 'text-gray-700'}`}>
                    {choiceD}
                </span>
            </button>
        </div>
    )
}