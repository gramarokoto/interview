const input = ['Mardi', 'Mercredi', 'Lundi', 'Dimanche', 'Jeudi'];

const getOpeningDays = (input) => {

    if(!input || input.length === 0 || !Array.isArray(input)) return null

    const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    let arrangedArray = []

    for (day of days) {
        if(input.includes(day)) {
            arrangedArray.push(day)
        }
    }

    let dividedArray = []
    let temp = []

    for(let i = 0; i < arrangedArray.length; i++) {
        if(arrangedArray[i + 1] && arrangedArray[i + 1] === days[i + 1]) {
            temp.push(arrangedArray[i])
        } else {
            if (arrangedArray[i] !== null) {
                temp.push(arrangedArray[i])
            }
            dividedArray.push(temp)
            temp = []
        }
    }

    return dividedArray
}

const getOpeningDaysMessage = input => {
    let message = 'Ouvert '
    input.forEach((arrayOfDays, index) => {
        if(arrayOfDays.length > 1) {
            message += 'du ' + arrayOfDays[0] + ' au ' + arrayOfDays[arrayOfDays.length - 1]
            input.length - 1 === index ? message += '.' : message += ', '
        } else {
            message += arrayOfDays[0]
            input.length - 1 === index ? message += '.' : message += ', '
        }
    })

    return message

}
/*
const openingDays = getOpeningDays(input)
console.log(openingDays)

console.log(getOpeningDaysMessage(openingDays))
*/

exports.getOpeningDays = getOpeningDays
exports.getOpeningDaysMessage = getOpeningDaysMessage

