import style from "./Time.module.css"
function Time(){
    return(
        <div className={style.container}>
                <div className={style.indicadorRelogio}>
                    <p className={style.texto}>Days</p>
                    <h1>03</h1>
                </div>
                <h1 className={style.delimitador}>:</h1>
                <div className={style.indicadorRelogio}>
                    <p className={style.texto}>Hours</p>
                    <h1>23</h1>
                </div>
                <h1 className={style.delimitador}>:</h1>
                <div className={style.indicadorRelogio}>
                    <p className={style.texto}>Minutes</p>
                    <h1>44</h1>
                </div>
                <h1 className={style.delimitador}>:</h1>
                <div className={style.indicadorRelogio}>
                    <p className={style.texto}>Seconds</p>
                    <h1>12</h1>
                </div>
        </div>
    )
}
export default Time;