import React, { useEffect, useState } from 'react';
import './Contents.css';
import { ReactMediaRecorder } from 'react-media-recorder';
import DarkModeToggle from "react-dark-mode-toggle";
// import useDarkMode from 'use-dark-mode';

const contents = [
  {
    id: '1',
    bangla: 'তুমি কি বইখানা পড়ে শেষ করেছ',
    record: '',
    answer: 'Have you finished reading the book',
  },
  {
    id: '2',
    bangla: 'সে কেবল ঘুমাত আর কেছুই করত না',
    record: '',
    answer: 'He did nothing but sleep',
  },
  {
    id: '3',
    bangla: 'আমি এখানে থেকে কিভাবে এয়ারপোর্টে যাবো?',
    record: '',
    answer: 'How do I get to the airport from here?',
  },
  {
    id: '4',
    bangla: 'তুমি যতক্ষণ না ফের, ততক্ষণ আমি অপেক্ষা করব ',
    record: '',
    answer: 'I shall wait until you come back',
  },
  {
    id: '4',
    bangla: 'তুমি যতক্ষণ না ফের, ততক্ষণ আমি অপেক্ষা করব ',
    record: '',
    answer: 'I shall wait until you come back',
  },
  {
    id: '4',
    bangla: 'তুমি যতক্ষণ না ফের, ততক্ষণ আমি অপেক্ষা করব ',
    record: '',
    answer: 'I shall wait until you come back',
  },
  {
    id: '4',
    bangla: 'তুমি যতক্ষণ না ফের, ততক্ষণ আমি অপেক্ষা করব ',
    record: '',
    answer: 'I shall wait until you come back',
  },
  {
    id: '4',
    bangla: 'তুমি যতক্ষণ না ফের, ততক্ষণ আমি অপেক্ষা করব ',
    record: '',
    answer: 'I shall wait until you come back',
  },
  {
    id: '4',
    bangla: 'তুমি যতক্ষণ না ফের, ততক্ষণ আমি অপেক্ষা করব ',
    record: '',
    answer: 'I shall wait until you come back',
  },
];
const Contents = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  //  const darkMode = useDarkMode(false);
  const [show, setShow] = useState(null);
  const [show2, setShow2] = useState(true);
  const [check, setCheck] = useState();

  function checkAnswer(event) {
    event.preventDefault();
  }
   useEffect(() => {
    // 👇 add class to body element
     if(isDarkMode == 1 ) return
    document.body.classList.add('bg-salmon');
  }, []);
  return (
    <div className={`${!isDarkMode ? "body" : ""} content-section`}>
      <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
        size={80}
    />
      {contents.map((content, i) => (
        <>
          <div className='content-main' onClick={() => setShow2(i)}>
            <p className={`${isDarkMode ? 'para-dark' : ''}`}>
              {i + 1}. {content.bangla}
            </p>
            <div className='write-content'>
              <form onSubmit={checkAnswer}>
                <input
                  className={`${
                    (content.answer.toLowerCase() == check && i == show2) ||
                    (content.answer == check && i == show2)
                      ? 'back-green'
                      : ''
                  }`}
                  type='text'
                  placeholder='Write your answer here...'
                  onChange={(e) => {
                    setCheck(e.target.value);
                  }}
                />
                <div onClick={() => setShow(i == show ? 'tgg' : i)}>
                  <button
                    className='button-start'
                    onClick={() => setShow(i == show ? 'tgg' : i)}
                  >
                    Check
                  </button>
                </div>
              </form>
            </div>
            <div className='content-btn'>
              <ReactMediaRecorder
                audio
                render={({
                  status,
                  startRecording,
                  stopRecording,
                  mediaBlobUrl,
                }) => (
                  <div>
                    <audio src={mediaBlobUrl} controls autoPlay />
                    <br />
                    <button className='button-start' onClick={startRecording}>
                      {status === 'recording' ? (
                        <div class='container'>
                          <div class='recording-circle'></div>
                          <div class='recording-text'>Recording</div>
                        </div>
                      ) : (
                        'Start Recording'
                      )}
                    </button>
                    <button className='button-stop' onClick={stopRecording}>
                      Stop Recording
                    </button>
                  </div>
                )}
              />

            </div>
            {i == show ? (
              <div
                className='answer-btn'
                onClick={() => setShow(i == show ? 'tgg' : i)}
              >
                {' '}
                <p>{content.answer}</p>
              </div>
            ) : (
              <div
                onClick={() => setShow(i == show ? 'tgg' : i)}
                className='tap-btn'
              >
                <p>Tap to see your answer</p>
              </div>
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default Contents;
