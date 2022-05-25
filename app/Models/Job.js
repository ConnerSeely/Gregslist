import { generateId } from "../Utils/generateId.js"

export class Job {
  constructor(jobData) {
    // NOTE need id to have something unique on each job
    this.id = generateId()
    this.employer = jobData.employer
    this.address = jobData.address
    this.description = jobData.description
    this.wage = jobData.wage
    this.startDate = jobData.startDate
    this.imgUrl = jobData.imgUrl
  }


  get Template() {
    return `
  <div class=" col-6 col-md-3">
    <div class="rounded shadow p-2" ">
      <img class="img-fluid" src="${this.imgUrl}" alt="">
      <h5 class="text-center">${this.employer} | ${this.address} | ${this.startDate}</h5>
      <h4 class="text-center">$${this.wage}</h4>
      <p>${this.description}</p>
      <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')"><i class="mdi mdi-delete"></i></button>
    </div>
  </div>
    `
  }
}