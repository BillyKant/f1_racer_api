// Listen for Form Submission from user (season, round)
const form = document.querySelector("#form1")
form.addEventListener('submit', (event) => {
    event.preventDefault()
    let season = document.querySelector("#seasonSearch")
    let round = document.querySelector('#roundSearch')
    console.log(season.value)
    console.log(round.value)
    loadData(season.value, round.value)
})

// get data from the API 
const getData = async (season, round) => {
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    console.log(response.data.MRData.StandingsTable.StandingsLists['0'].DriverStandings)
    console.log(response.data.MRData.StandingsTable.StandingsLists['0'].DriverStandings[0].position)
}

const loadData = async (season, round) => {
    // todo: add clear function
    let roundInfo = await getData(season, round)
    let position = roundInfo.MRData.StandingsTable.StandingsLists['0'].DriverStandings[0].position
    let first = roundInfo.MRData.StandingsTable.StandingsLists['0'].DriverStandings[0].Driver.givenName
    let last = roundInfo.MRData.StandingsTable.StandingsLists['0'].DriverStandings[0].Driver.givenName
    let name = `${first} ${last}`
    let nationality = roundInfo.MRData.StandingsTable.StandingsLists['0'].DriverStandings[0].Driver.nationality
}


const getDataTest = async () => {
    let response = await axios.get(`https://ergast.com/api/f1/2020/1/driverStandings.json`)
    console.log(response.data)
    console.log(response)
    // // Position
    // console.log(response.data.MRData.StandingsTable.StandingsLists['0'].DriverStandings[0].position)
    // // First Name
    // console.log(response.data.MRData.StandingsTable.StandingsLists['0'].DriverStandings[0].Driver.givenName)
    // // Last Name
    // console.log(response.data.MRData.StandingsTable.StandingsLists['0'].DriverStandings[0].Driver.familyName)
    // // Nationality
    // console.log(response.data.MRData.StandingsTable.StandingsLists['0'].DriverStandings[0].Driver.nationality)
    // // Sponsor
    // console.log(response.data.MRData.StandingsTable.StandingsLists['0'].DriverStandings[0].Constructors[0].name)
    // // Points
    // console.log(response.data.MRData.StandingsTable.StandingsLists['0'].DriverStandings[0].points)
}

const loadDataTest = async () => {
    const roundInfo = await getDataTest();
    console.log(roundInfo.data);
    console.log('test');
}

const DOM_Elements = {
    widget: '#test'
}

const htmlTest = (test) => {
    const html =`<p>${test}</p>`
}