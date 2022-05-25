import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({ make: 'Chevrolet', model: 'Impala', description: 'It balla', price: 10, year: 1964, color: '#000', imgUrl: 'https://m.media-amazon.com/images/I/51IpgyJ3GmL._AC_SX466_.jpg' }),
    new Car({ make: 'Buick', model: 'Grand National', description: 'It is grand', price: 15, year: 1984, color: '#ff0000', imgUrl: 'http://www.deansgarage.com/wp-content/uploads/GNpropsals.jpg' })
  ]
  houses = [
    new House({ bedrooms: 6, bathrooms: 2, description: 'wow - owen wilson', price: 10, year: 2000, color: '#000', imgUrl: 'https://image.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-260nw-529108441.jpg' }),
    new House({ bedrooms: 4, bathrooms: 1, description: 'You would be wise to surrender - Darth Vader', price: 5, year: 1995, color: '#ff0000', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Death_star1.png/220px-Death_star1.png' })
  ]

  jobs = [
    new Job({ employer: 'Kiryu Kazuma', address: 'Kamurocho', description: '完全に死ぬことを決意した戦闘に従事し、あなたは生きているでしょう。戦いで生き残りたいと願うなら、きっと死に会うでしょう。', wage: 100, startDate: '5/25', imgUrl: 'https://i.kym-cdn.com/entries/icons/original/000/038/058/Kazuma_Kiryu_in_Yakuza_6.jpg' }),
    new Job({ employer: 'Goro Majima', address: 'Sotenbori', description: '真実に至る道には、無知な者の体が散らばっています。', wage: 500, startDate: '5/29', imgUrl: 'https://www.giantbomb.com/a/uploads/scale_medium/20/208795/2988106-yakuza-kiwami-2_official_09-22-17_001.jpg' })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
