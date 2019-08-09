import React from 'react';
import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'
import './Main.css'

export default function Main({match}){
    return (
<div className="main-container">
    <img src={logo} alt="Tindev"/>
    <ul>
        <li>
            <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt=""/>
       
        <footer>
            <strong>Diego 3G</strong>
            <p>Teste de perfil </p>
        </footer>

        <div className="buttons">
            <button type="button">
                <img src={like} alt=""/>
            </button>

            <button type="button">
                <img src={dislike} alt=""/>
            </button>
        </div>    
        </li> 

        <li>
            <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt=""/>
       
        <footer>
            <strong>Diego 3G</strong>
            <p>Teste de perfil </p>
        </footer>

        <div className="buttons">
            <button type="button">
                <img src={like} alt=""/>
            </button>

            <button type="button">
                <img src={dislike} alt=""/>
            </button>
        </div>    
        </li> 

        <li>
            <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt=""/>
       
        <footer>
            <strong>Diego 3G</strong>
            <p>Teste de perfil </p>
        </footer>

        <div className="buttons">
            <button type="button">
                <img src={like} alt=""/>
            </button>

            <button type="button">
                <img src={dislike} alt=""/>
            </button>
        </div>    
        </li> 

        <li>
            <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt=""/>
       
        <footer>
            <strong>Diego 3G</strong>
            <p>Teste de perfil </p>
        </footer>

        <div className="buttons">
            <button type="button">
                <img src={like} alt=""/>
            </button>

            <button type="button">
                <img src={dislike} alt=""/>
            </button>
        </div>    
        </li>  
    </ul>



</div>
    );
};