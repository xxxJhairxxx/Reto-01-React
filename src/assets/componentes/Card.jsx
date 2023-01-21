import React from 'react';
import imgheader from './images/bg-pattern-card.svg';
import Stack from './Stack';


const Card = () => {
    return ( 
        <div className='card'>
            <header className='card__header'>
                <img className="card__header__imgPortada" src={imgheader} alt="" />
            </header>
            <div className="card__perfil">
                <img className='card__perfil__img' src="https://media.spainbs.com/recursos_www/blog_img_autores/17/20200420093047-Darlis-Darian.jpg" />
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