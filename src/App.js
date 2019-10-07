import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form';
import useAxios from 'axios-hooks';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Main from './components/Main';
import Chip from '@material-ui/core/Chip';
import GridList from '@material-ui/core/GridList';
import CreateQuiz from './views/CreateQuiz';



function App() {
  
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    async function traerDetalles() {
      const data = await Axios.get('https://rocky-fjord-76906.herokuapp.com/quiz/');
      console.log(data.data)
      setQuizzes(data.data);
    }
    traerDetalles();
  }, []) 
 


  const useStyles = makeStyles({
    card: {
      width: 345,
      height: 300,
      margin: 10
    },
  });
  const classes = useStyles();
  
    
  return (
    <>
    <NavBar/>
    <Main>
      <CreateQuiz></CreateQuiz>
    <GridList>
    { quizzes.map(item => (
      <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Creado por: {item.createdBy}
          </Typography>
          
          <CardActions>
        { item.options.map( option => (
          <Button size="small" color="secondary">
           {option.title}
          </Button>
        ))
        
        }
      </CardActions>
        </CardContent>
      </CardActionArea>
      
    </Card>))
    
    }
    </GridList>
    
    </Main>
    
    
    {/* <ul>
      {data.hits.map(item => (
        <li key={item}>
          <a href={item}>{item}</a>
        </li>
      ))}
    </ul> */}
    </>
  );
}

export default App;


