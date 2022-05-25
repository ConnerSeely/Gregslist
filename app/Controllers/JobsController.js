import { ProxyState } from "../AppState.js";
import { getJobForm } from "../Components/JobForm.js";
import { jobsService } from "../Services/JobsService.js";

function _drawJobs() {
    // get all the jobs and build a template
    let jobs = ProxyState.jobs
    let template = ''
    jobs.forEach(j => {
        template += j.Template
        // console.log(template);
    })
    document.getElementById('listings').innerHTML = template
}

export class JobsController {
    constructor() {
        console.log('jobs controller loaded', ProxyState.jobs);
        ProxyState.on('jobs', _drawJobs)
    }

    // NOTE view jobs handles drawing the jobs and injecting the new job form
    viewJobs() {
        let form = getJobForm()
        // console.log(form);
        document.getElementById('form-body').innerHTML = form
        _drawJobs()
    }


    createJob() {
        // NOTE prevent default keeps the form submit event from reloading the page
        window.event.preventDefault()
        let form = window.event.target
        console.log('form submitted', form);
        // NOTE controller will collect all the information from the form...
        // NOTE the red underlines between form and value are ok
        let jobData = {
            employer: form.employer.value,
            address: form.address.value,
            startDate: form.startDate.value,
            wage: form.wage.value,
            description: form.description.value,
            imgUrl: form.imgUrl.value,
        }
        console.log('the new job', jobData);
        // ... and pass it to the service
        jobsService.createJob(jobData)
        form.reset()
        // NOTE don't look at boostrap docs they give a way that doesn't work as good look at this
        // it's best to close the modal here once the method is complete, closing it with the button click will not work later when things get more complicated
        bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
    }

    deleteJob(id) {
        console.log('deleting job', id);
        jobsService.deleteJob(id)
    }
}