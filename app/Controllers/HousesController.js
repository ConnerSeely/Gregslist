import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";

function _drawHouses() {
  // get all the houses and build a template
  let houses = ProxyState.houses
  let template = ''
  houses.forEach(h => {
    template += h.Template
    // console.log(template);
  })
  document.getElementById('listings').innerHTML = template
}


export class HousesController {
  constructor() {
    console.log('houses controller loaded', ProxyState.houses);
    ProxyState.on('houses', _drawHouses)
  }

  // NOTE view houses handles drawing the houses and injecting the new house form
  viewHouses() {
    let form = getHouseForm()
    // console.log(form);
    document.getElementById('form-body').innerHTML = form
    _drawHouses()
  }


  createHouse() {
    // NOTE prevent default keeps the form submit event from reloading the page
    window.event.preventDefault()
    let form = window.event.target
    console.log('form submitted', form);
    // NOTE controller will collect all the information from the form...
    // NOTE the red underlines between form and value are ok
    let houseData = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value,
      color: form.color.value
    }
    console.log('the new house', houseData);
    // ... and pass it to the service
    housesService.createHouse(houseData)
    form.reset()
    // NOTE don't look at boostrap docs they give a way that doesn't work as good look at this
    // it's best to close the modal here once the method is complete, closing it with the button click will not work later when things get more complicated
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
  }

  deleteHouse(id) {
    console.log('deleting house', id);
    housesService.deleteHouse(id)
  }
}