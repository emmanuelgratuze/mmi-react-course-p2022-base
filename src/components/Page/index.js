import React from 'react'
import Footer from '../Footer';
import Menu from '../../components/Menu'

import './styles.css'

const Page = (props) => {
  const { children } = props;
  return (
    <div className="layout">

      <Menu />

      {children}

      <Footer />
    </div>
  )
}

export default Page
