import React from 'react'
import styles from "./Modal.module.css";
import computeStats from '../utils/ComputeStats'

const Modal = ({setIsOpen}) => {
  let stats  = localStorage.getItem("Ordle")
  console.log(computeStats(stats))
  console.log(stats)
  return (
    < >
        <div className={styles.darkBG} onClick = {()=> setIsOpen(false)}>
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Stats</h5>
                    </div>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                        <h3 style={{ marginBottom: "-3px" }}> X </h3>
                    </button>
                    <div className={styles.modalContent}>
                        {stats[0]}, {stats[1]}, {stats[stats.length-1]}
                    </div>
                </div>
            </div>    
        </div>
    </>
  )
}

export default Modal