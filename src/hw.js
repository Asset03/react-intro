import React from 'react';
import './App.css';
import image_src from "./logo.png";
import {format} from "date-fns";

function hw(){ 
    return(
        <div>

        <header>
            <div className='head1'>
                <img src={image_src} width={45} height={40}/>
                <input type="text" placeholder='Any else' />
            </div>
            <div className='time'>{format (new Date(),"dd.MM.yyyy HH:MM")} </div>

        </header>

        <div className='all'>
            <div id='i1' className='part'>Hey</div>
            <div id='i2' className='part'>Let's</div>
            <div id='i3' className='part'>Give</div>
            <div id='i4' className='part'>All</div>
            <div id='i5' className='part'>You Can</div>
        </div>
    
    </div>
    ); 
}
export default hw;