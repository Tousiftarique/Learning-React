import styles from "./Item.module.css";




const Item = ({foodItems}) =>{
   
return (<li  className={`${styles['kg-item']} `}>
           <samp className={styles["kg-spam"]}>{foodItems}</samp>
            </li>
)
}

export default Item;