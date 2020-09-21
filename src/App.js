import React from 'react';
import { Header } from './Componets/Header/Header';
import styles from './App.module.css'
import { Main } from './Componets/Main/Main';
import DataBaseServer from './Componets/FireBase/getMonthDataBase'
import PostMonthDataBase from './Componets/FireBase/postMonthDataBase';

function App() {
  

  return (
   
   <div className={styles.app}>
     <Header/>
     <Main />
     <DataBaseServer/>
     <PostMonthDataBase/>
   </div>
  
  )
}

export default App;
