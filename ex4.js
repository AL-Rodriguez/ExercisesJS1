const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character'

const dataHumansRickandMorty =async () => {

    let data = (await axios.get(URL)).data
    let results = data.results
    let humans = results
                        .filter(array => array.species === 'Human')
                        .map(obj => obj.name)
    console.log(humans.toString())
    return results
}

dataHumansRickandMorty()

