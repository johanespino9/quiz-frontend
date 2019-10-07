/* import React from 'react';
import Card from '../components/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';

const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios.get(
      'https://rocky-fjord-76906.herokuapp.com/quiz/'
    );
    setData(result.data);
    console.log(result.data);
  });


function QuizList(){

  return(
    data.quizzes.map(quiz =>{
      return(<Card>{quiz.title} </Card>)
    })
    
  )
} */

export default QuizList;