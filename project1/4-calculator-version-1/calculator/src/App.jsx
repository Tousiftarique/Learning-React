import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import styles from'./App.module.css'

function App() {

  return (
    
   <div className={styles.calculator}>
    
    <Display></Display>
    <ButtonsContainer></ButtonsContainer>
    {/* <div className={styles.buttonsContainer}>
      <button className={styles.button}>C</button>
      <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>3</button>
      <button className={styles.button}>4</button>
      <button className={styles.button}>6</button>
      <button className={styles.button}>7</button>
    </div> */}



   </div>
  )
}

export default App
