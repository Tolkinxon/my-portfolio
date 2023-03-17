import React from 'react'
import style from '../styles/experience.module.css'
import { useState, useEffect } from 'react'

const Experience = () => {
  const [active, setActive] = useState({})
  const [content, setContent] = useState([])

  const Active = (id) => {
    setActive({
      property : { backgroundColor: '#112240',
      color: '#64ffda'},
      id: id
    })

  }

  useEffect(() => {
    setContent(['Mohirdev', 'Home', 'IT centre'])
  },[])
  



  return (
    <div className={style.experience}>
      <h1>
        <span>02.</span> Where I've Worked <span className={style.line}></span>
      </h1>
      <div>
        <div className={style.selecting}>
          {content.map((item, idx) => (
            <>
              <p key={idx} onClick={() => Active(idx)} style={idx === active.id && active.property}>{item}</p>
            </>
          ))}
        </div>
        <div className={style.selecting_about}>
          <h2>Mohirdev</h2>
          <p>January - june 2017</p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              corporis error at ut ipsam ipsa ad repellendus vero dolore amet
              exercitationem, dolores commodi deleniti ratione similique
              sapiente, saepe quod facilis!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              corporis error at ut ipsam ipsa ad repellendus vero dolore amet
              exercitationem, dolores commodi deleniti ratione similique
              sapiente, saepe quod facilis!
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
