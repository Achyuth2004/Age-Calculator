import React from 'react'
import { useState } from 'react'
import './AgeCalc.css'
const AgeCalc = () => {
  const[birthdate,setBirthdate]=useState('');
  const[age,setAge]=useState(0);
  const ageCalculate = ()=>{
    const today = new Date();
    const birthdateDate=new Date(birthdate);

    let age=today.getFullYear()-birthdateDate.getFullYear();
    setAge(age);
  }
  const resetAge=()=>{
    setBirthdate('');
    setAge(0);
  }
  return (
    <div className='container'>
        <div className='heading container_title'>Age Calculator</div>
        <div className='para container_title'>Find your age at ease of time with our age calculator💕</div>
        <div className='middle'>
            <div className='right'>
                <div className='right-para'>Your Age is</div>
                <h2>{age}</h2>
            </div>
            <div className='left'>
                <h3>Date of birth</h3>
                <input className='date' type='date' value={birthdate} onChange={e=>setBirthdate(e.target.value)}/>
                <button className='find' onClick={ageCalculate}> Calculate</button>
                <button className='reset'onClick={resetAge}>Reset</button>
            </div>
        </div>
        <footer>Made By Achyuth</footer>
    </div>
  )
}

export default AgeCalc
