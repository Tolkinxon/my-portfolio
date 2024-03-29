import React, { useEffect, useState } from 'react'
import styles from '../styles/navbar.module.css'

const Navbar = ({ scroll, changeFilter }) => {
  const [clicking, setClicking] = useState(false)
  const [elemWidth, setElemWidth] = useState(0)
  const [otherScrollElems, setOtherScrollElems] = useState({})

  window.addEventListener('resize', () => {
    setElemWidth(window.innerWidth / 2)
  })

  const hideAndShow = () => {
    setClicking(!clicking)
    changeFilter(clicking)
  }

  useEffect(() => {
    if (scroll === '15px') {
      setOtherScrollElems({
        backgroundColor: '#0A192F',
        boxShadow: '0 10px 30px -10px #0A192F',
        backdropFilter: 'blur(0px);',
        top: scroll,
      })
    } else {
      setOtherScrollElems({ top: scroll })
    }
  }, [scroll])

  useEffect(() => {
    setElemWidth(window.innerWidth / 2)
  }, [])

  return (
    <nav className={styles.navbar} style={otherScrollElems}>
      <div className={styles.box_container}>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}>S</div>
      </div>

      <div
        className={styles.selects_wrapper}
        style={
          clicking
            ? { transform: `translateX(-${elemWidth}px)` }
            : { transform: 'translateX(0px)' }
        }
      >
        <div className={styles.selects}>
          <a href="#">
            <span>01. </span> About
          </a>
          <a href="#">
            <span>02. </span> Experience
          </a>
          <a href="#">
            <span>03. </span> Work
          </a>
          <a href="#">
            <span>04. </span> Contact
          </a>
          <button className="button">Resume</button>
        </div>
      </div>


       
      <input type="checkbox" id="checkbox"  onClick={hideAndShow}/>
      <label for="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
      </label>
    </nav>
  )
}

export default Navbar
