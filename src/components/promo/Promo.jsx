import styles from "./Promo.module.css"

function Promo(){
    return(
        <div className={styles.fundo}>
            <p className={styles.texto}>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="">Shop Now</a>
            </p>

            <div className={styles.container}>
            <label for="options">Idioma</label>
            <select className={styles.dropdown} id="options">
                <option value="eng">English</option>
                <option value="pt">Português</option>
            </select>
            </div>

        </div>
    )
}
export default Promo;