import styles from "./Item.module.css";

const Item = ({ foodItems,handleBuyButton }) => {

const hendleBuyButtonClicked = (event)=>{
  console.log(event)
  console.log(` ${foodItems} being bought`)
}

  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <samp className={styles["kg-spam"]}>{foodItems}</samp>
       <button 
       className={`${styles.button} btn btn-info`}
       onClick={handleBuyButton}
       >
        Buy
       
       </button>
    </li>
  );
};

export default Item;
