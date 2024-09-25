import {AnswerSheetObjType} from '../components/mcqExaminer.tsx';
type questionObjType = {
    no: number;
    question: string;
    option: {id: number; label: string}[];
    answer: {optionId: number};
};
let UseCheckAns = (questionPaper: questionObjType[], answerPaper: AnswerSheetObjType[]) => {
    let correctAns = 0;
    let incorrectAns = 0;
    console.log('questionPaper', questionPaper);

    questionPaper.map(sig => {
        answerPaper.map(sigAns => {
            if (sig.no === sigAns.questionNo) {
                if (sig.answer.optionId === sigAns.answer.optionId) {
                    correctAns = correctAns + 1;
                } else {
                    incorrectAns = incorrectAns + 1;
                }
            }
        });
    });
    return {correctAns, incorrectAns};
};

export default UseCheckAns;
