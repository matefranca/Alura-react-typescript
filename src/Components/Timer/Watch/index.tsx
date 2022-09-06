import React from "react"
import style from './Watch.module.scss'

export default function Watch() {
    return(
        <>
            <span className={style.clockNumber}>0</span>
            <span className={style.clockNumber}>0</span>
            <span className={style.clockDivision}>:</span>
            <span className={style.clockNumber}>0</span>
            <span className={style.clockNumber}>0</span>
        </>
    )
}