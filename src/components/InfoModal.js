import React from 'react'
import styles from "./Modal.module.css";


function InfoModal({setInfoIsOpen}) {
  return (
    <>
        <div className={styles.darkBG} onClick = {()=> setInfoIsOpen(false)}>
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Info</h5>
                    </div>
                    <button className={styles.closeBtn} onClick={() => setInfoIsOpen(false)}>
                        <h3 style={{ marginBottom: "-3px" }}> X </h3>
                    </button>
                    <div className={styles.info}>
                        <p>Try to guess the 5-letter ANSWER, which is the last name of a FIFA WC 2022.</p>
                        <p>To guess, type a 5-letter word, and press send. It may be any English word, or a FIFA WC 2022 player's last name.</p>
                        <p>Letters that turn yellow are used in the ANSWER, but are in the wrong position.</p>
                        <p>Letters that turn green are used in the ANSWER, and are in the right position.</p>
                        <p>Have fun!</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default InfoModal