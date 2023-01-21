import React from 'react';
import imgheader from './images/bg-pattern-card.svg';
import imgperfil from './images/perfil.jpg';
import Stack from './Stack';


const Card = () => {
    return ( 
        <div className='card'>
            <header className='card__header'>
                <img className="card__header__imgPortada" src={imgheader} alt="" />
            </header>
            <div className="card__perfil">
                <img className='card__perfil__img' src={imgperfil} />
            </div>
            <div className="card__datos">
                <p  className='datos__nombre'>Jhair Infanzon <span className='datos__edad'>28</span></p>
                <span className='datos__ciudad'>EL Agustino </span>
            </div>

            <div className="card__stacks">
                <Stack number="80k" description="FOLLOWERS" />
                <Stack number="80k" description="FOLLOWERS" />
                <Stack number="80k" description="FOLLOWERS" />
            </div>
        </div>
     );
}
 
export default Card;