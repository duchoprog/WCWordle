const computeStats = (stats)=>{
    let computedStats= {
            "1":0,
            "2":0,
            "3":0,
            "4":0,
            "5":0,
            "6":0,
            "0":0,
        }
    for (let i =0; i < stats.length; i++){
        let ch = stats[i]
        console.log(typeof ch);
        computedStats[ch]++
    }
    return computedStats
}

export default computeStats