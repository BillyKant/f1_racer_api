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
    return response.data.MRData.StandingsTable.StandingsLists['0'].DriverStandings
}

const loadData = async (season, round) => {
    clearData()
    
    const roundInfo = await getData(season, round)
    for ( let i = 0; i < 7; i++) {
    let position = roundInfo[i].position
    let first = roundInfo[i].Driver.givenName
    let last = roundInfo[i].Driver.familyName
    let full = `${first} ${last}`
    let nationality = roundInfo[i].Driver.nationality
    let sponsor = roundInfo[i].Constructors[0].name 
    let points = roundInfo[i].points
    createStanding(position, full, nationality, sponsor, points)}
}

const DOM_Elements = {
    tables: '.jsData'
}

const clearData = () => document.querySelector(DOM_Elements.tables).innerHTML = ''

const createStanding = (position, fullName, nationality, sponsor, points) => {
    const html = `<tr><th>${position}</th><th>${fullName}</th><th>${nationality}</th><th>${sponsor}</th><th>${points}</th></th>`
    document.querySelector(DOM_Elements.tables).insertAdjacentHTML('beforeend',html)
}

const loadDataTest = async () => {
    clear
    const roundInfo = await getDataTest()
    let position = roundInfo
}



const getDataTest = async () => {
    let response = await axios.get(`https://ergast.com/api/f1/2020/1/driverStandings.json`)
    console.log(response.data)
    console.log(response.data.MRData.StandingsTable.StandingsLists['0'].DriverStandings)
    return response.data.MRData.StandingsTable.StandingsLists['0'].DriverStandings
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




const htmlTest = (test) => {
    const html =`<p>${test}</p>`
}