import Head from 'next/head'
import Navbar from '../components/Navbar'
import Icons from '@/components/Icons'
import Header from '../components/Header'
import About from '../components/About'
import Loader from '../components/Loader'
import SomeThingIveBuild from '@/components/SomeThingIveBuild'
import OtherProjects from '@/components/OtherProjects'
import WhatNext from '../components/whatNext'
import DesignedBy from '@/components/DesignedBy'
import { useRef, useState, useEffect } from 'react'
import Experience from '@/components/Experience'

export default function Home() {
  const [loader, setLoader] = useState(true)
  const variable = useRef(null)
  const variable2 = useRef(null)
  const [hideNavbar, setHideNavbar] = useState('')
  const [filter, setFilter] = useState(false)

  const changeFilter = (bool = false) => {
    setFilter(!bool)
  }

  const logging = (e) => {
    variable2.current = variable.current
    variable.current = e.target.scrollTop

    if (variable2.current < variable.current) {
      setHideNavbar('-70px')
    }
    if (variable2.current > variable.current) {
      setHideNavbar('0px')
    }
    if (0 === variable.current) {
      setHideNavbar('15px')
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])

  return (
    <>
      <Head>
        <title>my portfolio</title>
        <meta name="Tolkinxon" content="about tesla company" />
      </Head>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Navbar scroll={hideNavbar} changeFilter={changeFilter} />

          <div
            className="container"
            onScroll={(e) => logging(e)}
            style={
              filter
                ? {
                    filter: 'blur(5px) brightness(0.7)',
                    overflow: 'hidden',
                  }
                : {
                    filter: 'blur(0px) brightness(1)',
                    overflow: 'scroll',
                  }
            }
          >
            <div className="content">
              <Icons />
              <Header />
              <About />
              <Experience />
              <SomeThingIveBuild />
              <OtherProjects />
              <WhatNext />
              <DesignedBy />
            </div>
          </div>
        </>
      )}
    </>
  )
}
