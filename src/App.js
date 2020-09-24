import React from 'react';
import { Header } from './Componets/Header/Header';
import styles from './App.module.css'
import { Main } from './Componets/Main/Main';
import DataBaseServer from './Componets/FireBase/getMonthDataBase'
import PostMonthDataBase from './Componets/FireBase/postMonthDataBase';
import DeleteWorklogFromDatabase from './Componets/FireBase/deleteWorklogFromDatabase';

function App() {
  

  return (
   
   <div className={styles.app}>
     <Header/>
     <Main />
     <DataBaseServer/>
     <PostMonthDataBase/>
     <DeleteWorklogFromDatabase/>
   </div>
  
  )
}

export default App;
