import React from 'react'
import styles from './WorkSection.module.css'
import TopButtons from './TopButtons/TopButtons'
import  AllWorklogs  from './AllWorklogs/AllWorklogs'
import FavoritesWorklogs from './FavoritesWorklogs/FavoritesWorklogs'
import { useState } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

const WorkSection = () => {

  
    return (
        <BrowserRouter>
        <div className={styles.workSection}>
            <div className={styles.wrapper}>
                <TopButtons />
                <Route path='/allworklogs' component={AllWorklogs}/>
                <Route path='/favoritesWorklogs' component={FavoritesWorklogs}/>
{/* 
                <AllWorklogs state={state} />
                <FavoritesWorklogs state={state} /> */}
            </div>
        </div>
        </BrowserRouter>
    )
}



export default WorkSection
