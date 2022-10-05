import React from 'react'
import Dashboardmid from './Dashboardmid'
import Footer from './Footer'
import Header from './Header'
import Headerb from './Headerb'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
    <Header/>
    <Headerb/>
    <Dashboardmid/>
    <Footer/>
      
    </div>
  )
}

export default Dashboard
