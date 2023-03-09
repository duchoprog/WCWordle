const playersList = []
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc185994bbmsh25d9f2af0669dc7p1b66d2jsn5521bc0b9b30',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

const getTeams= ()=>{ fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?league=1&season=2022', options)
	.then(response => response.json())
	.then(response =>queryTeams(response.response) )
	.catch(err => console.error(err));
}

const fetchPlayers = (fixtureId)=>{
    fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures/lineups?fixture=${fixtureId} `, options)
	.then(response => response.json())
	.then(response =>  
        {response.response.map((team)=>{
                team.startXI.map((pl) => {
                    console.log(pl.player.name)
                    const choppedName=pl.player.name.trim().split(' ')
                    if(choppedName[choppedName.length-1].length===5 && !playersList.includes(choppedName[choppedName.length-1])){
                        playersList.push (removeAccents(choppedName[choppedName.length-1]))
                        console.log(playersList)
                    }
                    return null
        })
            
            }) 
            
        })
	.catch(err => console.error(err));
}


const wcFixtures = []
const getPlayers = (fixtures) => { 
    fixtures.map( (fixture) => {
       fetchPlayers(fixture)
    }) 
    
}


const queryTeams =  (fixtures) =>  {
    fixtures.map(async(fixture)=>{await  wcFixtures.push(fixture.fixture.id)
                    })
     getPlayers(wcFixtures) 
}

export default getTeams