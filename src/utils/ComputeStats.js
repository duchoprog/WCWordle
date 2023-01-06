const computeStats = (stats)=>{
    let computedStats= [0,0,0,0,0,0,0]
    for (let i =0; i < stats.length; i++){
        computedStats[stats[i]-1]+=1
    }
    return computedStats
}

export default computeStats