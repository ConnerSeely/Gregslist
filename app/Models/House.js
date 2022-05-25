import { generateId } from "../Utils/generateId.js"

export class House {
    constructor(houseData) {
        // NOTE need id to have something unique on each car
        this.id = generateId()
        this.bedrooms = houseData.bedrooms
        this.bathrooms = houseData.bathrooms
        this.description = houseData.description
        this.price = houseData.price
        this.year = houseData.year
        this.color = houseData.color
        this.imgUrl = houseData.imgUrl
    }


    get Template() {
        return `
  <div class=" col-6 col-md-3">
    <div class="rounded shadow p-2" ">
      <img class="img-fluid" src="${this.imgUrl}" alt="">
      <h5 class="text-center">${this.bedrooms} | ${this.bathrooms} | ${this.year}</h5>
      <h4 class="text-center">$${this.price}</h4>
      <p>${this.description}</p>
      <input class="w-100" type="color" value="${this.color}">
      <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete"></i></button>
    </div>
  </div>
    `
    }
}