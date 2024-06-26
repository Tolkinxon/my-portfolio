
import { useState, useEffect } from 'react'

const Experience = () => {
  const [active, setActive] = useState({})
  const [select, setSelect] = useState([])
  const [content, setContent] = useState([])
  const [display, setDisplay] = useState(false)

  const Active = (e, id, element) => {
    let h = 0
    if (e !== null) {
      h = getComputedStyle(e.target).height
    } else {
      h = getComputedStyle(element).height
    }

    setTimeout(() => {
      setDisplay(true)
    }, 200)
    setDisplay(false)

    setActive({
      scrol: {
        transform: e !== null ? `translateY(${parseInt(h) * id}px)` : null,
        height: h,
      },
      id: id,
    })
  }

  useEffect(() => {
    setSelect(['Mohirdev', 'Home', 'IT centre', 'goods'])
    setContent([
      {
        companyName: 'Mohirdev',
        date: 'January - june 2017',
        whatDoing: [
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
        corporis error at ut ipsam ipsa ad repellendus vero dolore amet
        exercitationem, dolores commodi deleniti ratione similique
        sapiente, saepe quod facilis!`,
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
        corporis error at ut ipsam ipsa ad repellendus vero dolore amet
        exercitationem, dolores commodi deleniti ratione similique
        sapiente, saepe quod facilis!`,
        ],
      },
      {
        companyName: 'Home',
        date: 'January - june 2021',
        whatDoing: [
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
        corporis error at ut ipsam ipsa ad repellendus vero dolore amet
        exercitationem, dolores commodi deleniti ratione similique
        sapiente, saepe quod facilis!`,
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
        corporis error at ut ipsam ipsa ad repellendus vero dolore amet
        exercitationem, dolores commodi deleniti ratione similique
        sapiente, saepe quod facilis!`,
        ],
      },
      {
        companyName: 'It centre',
        date: 'January - june 2022',
        whatDoing: [
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
        corporis error at ut ipsam ipsa ad repellendus vero dolore amet
        exercitationem, dolores commodi deleniti ratione similique
        sapiente, saepe quod facilis!`,
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
        corporis error at ut ipsam ipsa ad repellendus vero dolore amet
        exercitationem, dolores commodi deleniti ratione similique
        sapiente, saepe quod facilis!`,
        ],
      },
      {
        companyName: 'Goods',
        date: 'January - june 2023',
        whatDoing: [
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
        corporis error at ut ipsam ipsa ad repellendus vero dolore amet
        exercitationem, dolores commodi deleniti ratione similique
        sapiente, saepe quod facilis!`,
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
        corporis error at ut ipsam ipsa ad repellendus vero dolore amet
        exercitationem, dolores commodi deleniti ratione similique
        sapiente, saepe quod facilis!`,
        ],
      },
    ])
    setTimeout(() => {
      const element = document.getElementById('hello')
      Active(null, null, element)
    }, 100)
  }, [])

  return (
    <div className='experience'>
      <h1>
        <span>02.</span> Where I've Worked <span className='line'></span>
      </h1>
      <div>
        <div className='selecting'>
          <div className='box' style={active.scrol}></div>
          {select.map((item, idx) => (
            <>
              <p
                id="hello"
                key={idx}
                onClick={(e) => Active(e, idx)}
                className={idx === active.id ? 'p active' : 'p'}
                style={
                  idx === 0 && active.id === null ? { color: '#64ffda' } : null
                }
              >
                {item}
              </p>
            </>
          ))}
        </div>
        <div className='selecting_about' style={{opacity: display ? '1' : '0'}}>
          {content.map((item, idx) => (
            <>
              {idx === (active.id === null ? 0 : active.id) && (
                <>
                  <h2>{item.companyName}</h2>
                  <p>{item.date}</p>
                  <ul>
                    {item.whatDoing.map((item) => (
                      <>
                        <li>{item}</li>
                      </>
                    ))}
                  </ul>
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
