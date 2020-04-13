import React from 'react';
import styled from 'styled-components';
import casa from '../img/casa.png';
import corazon from '../img/corazon.png';
import persona from '../img/persona.png';

const Nav = styled.nav `
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      

        p {
            font-size: 20px;
            color: rgb(36, 34, 34);
        }

        form {
            input {
                background-color: rgba(240, 239, 239, 0.89);
                text-align: center;
                border: 1px solid rgba(240, 239, 239);
                padding: 5px;
            }
        }

        div {
            display: flex;
            align-items: center; 
            img {
                width: 25px;
                height: 25px;
            }
            .persona {
                width: 20px;
                height: 20px;
            }
        }
`

const titulo = "Stylagram"

const NavBar = () => {
    return (
        <Nav>
            <p>{titulo}</p>
            <form>
                <input type="text" placeholder="Search"/>
            </form>
            <div> 
                <img src={casa} alt="casa"/>
                <img src={corazon} alt="corazon"/>
                <img src={persona} alt="persona" className="persona"/>
               
            </div>
        </Nav>
    );
}

export default NavBar;