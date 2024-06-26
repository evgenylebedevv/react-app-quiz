// Импорт стилей для приложения
import './index.scss';
import React from "react";

// Массив вопросов с ответами
const questions = [
    {
        title: 'Москва - это ... ?',
        variants: ['Это город', 'Это страна', 'Это континент'],
        correct: 0,
    },
    {
        title: 'Россия - это ... ',
        variants: ['Это направление', 'Это страна', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое Волга?',
        variants: [
            'Это город',
            'Это сторона света',
            'Это река',
        ],
        correct: 2,
    },
];

// Компонент для отображения результата
function Result({correct}) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            <a href="/">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
}

// Компонент для игры
function Game({step, question, onClickVariant}) {
    const percentage = Math.round((step / questions.length) * 100)

    return (
        <>
            <div className="progress">
                <div style={{width: `${percentage}%`}} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((text, index) => <li onClick={() => onClickVariant(index)}
                 key={text}>{text}</li>)}
            </ul>
        </>
    );
}

// Основной компонент приложения
function App() {
    const [step, setStep] = React.useState(0)
    const [correct, setCorrect] = React.useState(0)
    const question = questions[step] // step - номер индекса массива

    // Обработчик клика по варианту ответа
    const onClickVariant = (index) => {
        setStep(step + 1)
        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }

    return (
        <div className="App">
            {step !== questions.length ?
                <Game step={step} question={question} onClickVariant={onClickVariant}/> :
                <Result correct={correct}/>
            }
        </div>
    );
}

export default App;
