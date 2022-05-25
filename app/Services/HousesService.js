import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";


class HousesService {
    createHouse(houseData) {
        console.log('arrived at service un-damaged', houseData);
        ProxyState.houses = [...ProxyState.houses, new House(houseData)]
        console.log(ProxyState.houses);
    }
    deleteHouse(id) {
        ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
        ProxyState.houses = ProxyState.houses
    }

}

export const housesService = new HousesService()