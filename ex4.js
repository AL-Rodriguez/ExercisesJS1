const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character'

const dataHumansRickandMorty =async () => {

    const data = (await axios.get(URL)).data
    const results = data.results
    const humans = results
                        .filter(array => array.species === 'Human')
                        .map(obj => obj.name)
    console.log(humans.toString())
    return results
}

dataHumansRickandMorty()

