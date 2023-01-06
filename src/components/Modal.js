import React  from 'react'
import styles from "./Modal.module.css";
import computeStats from '../utils/ComputeStats';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid,   ResponsiveContainer } from 'recharts';

const Modal = ({setIsOpen}) => {
  let   maxData = 0;
  let stats  = JSON.parse(localStorage.getItem("Ordle"))
  let computedStats=computeStats(stats)
  const chartData= computedStats.map((dataPoint, index)=>{
    if (dataPoint>=maxData){maxData=dataPoint}
    if(index<6){index+=1}else{index="Loss"}
    return {name:index, guesses:dataPoint}

  })
  
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
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                        width={600}
                        height={500}
                        data={chartData}
                        margin={{
                            top: 5,
                            right: 20,
                            left: 10,
                            bottom: 50,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis type="number" domain={[0, maxData]} allowDecimals={false}/>
                        <Bar dataKey="guesses" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>    
        </div>
    </>
  )
}

export default Modal