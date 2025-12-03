import { getWalkers,getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener("click",(clickEvt) => {
        const cityTarget = clickEvt.target

            if (cityTarget.dataset.type === "city" ){
                const cityId = parseInt(cityTarget.dataset.cityid)

                //Find all walkers for the city
                const walkersInCity = walkers.filter(walker => walker.cityId === cityId)

                //Create list of walker names
                const walkerNames = walkersInCity.map(walker => walker.name).join(", ")

                window.alert(`${walkerNames} is servicing this city`)
            }
        })

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li data-type="city" data-cityid ="${city.id}">${city.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

