import React from 'react';
import { Header } from './Componets/Header/Header';
import styles from './App.module.css'
import { Main } from './Componets/Main/Main';


function App() {
  

  return (
   
   <div className={styles.app}>
     <Header/>
     <Main />
   </div>
  
  )
}

export default App;
