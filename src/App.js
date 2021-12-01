import React , {useState, useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from './components/NewsCards/NewsCards';
import { ClassNames } from '@emotion/react';
import useStyles from './styles';
import { Container, Box, Grid } from '@material-ui/core';
import { Link } from '@material-ui/core';
import {FaGithub,FaFacebook,FaLinkedin,FaInstagram} from 'react-icons/fa';
import {FiRefreshCcw} from 'react-icons/fi';
import {AiOutlineHeart} from 'react-icons/ai';
// import './App.css';

import wordsToNumbers from 'words-to-numbers';
const alanKey= '8567b3589c0c9863b09d1f948a34c1412e956eca572e1d8b807a3e2338fdd0dc/stage';

const App= () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle]=useState(-1);
    const classes = useStyles();
useEffect(() => {alanBtn({key: alanKey,
                 onCommand: ({command, articles,number}) => {
                    if(command === 'newHeadlines'){
                        setNewsArticles(articles);
                        // setNewsArticles(-1);
                    }
                    else if(command === 'highlight'){
                        setActiveArticle((prvActiveArticle) => (prvActiveArticle + 1));
                    }
                else if(command === 'open'){
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}) : number;
                        
                        const article = articles[parsedNumber-1];

                        if(parsedNumber > 20){
                            alanBtn().playText('Please try again');
                        }
                        else if(article) {
                            window.open(article.url, '_blank');
                            alanBtn().playText('Opening...');
                        }
                    }
                }})}, [])

    return(
        <div>
            <div className={classes.logoContainer}>
                <img src="https://www.conversationdesigninstitute.com/assets/images/academy/POP/cover-card-EXT-Alan@2x.png" className={classes.alanLogo} alt="alanLogo"/>
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
            

            {/* <Box className="box">

   
    <div className="Social">
    
 <a href="https://github.com/kumabhinav" className="github"><FaGithub size={35}/></a>
 <a href="" className="insta"><FaInstagram size={35} /></a>
 <a href="" className="facebook"><FaFacebook size={35}/></a>
 <a href="https://www.linkedin.com/in/kumar-abhinav14/" className="Linkden"><FaLinkedin size={35}/></a>
 </div>
    <div className="footer">Made with <AiOutlineHeart/> @Kumar Abhinav</div> 

    </Box> */}
    </div>
      

        
        
    );
}

export default App;
