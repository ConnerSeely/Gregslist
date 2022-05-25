import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";


class JobsService {
    createJob(jobData) {
        console.log('arrived at service un-damaged', jobData);
        ProxyState.jobs = [...ProxyState.jobs, new Job(jobData)]
        console.log(ProxyState.jobs);
    }
    deleteJob(id) {
        // console.log('arrived in service', id);
        // NOTE find is cool but not necessary here
        // let job = ProxyState.jobs.find(c => c.id == id)
        // console.log('job found',job);
        // NOTE filter creates a copy of the jobs array but only includes jobs that don't have the id selected
        // effectively removing the one we selected from the array AND triggering our listener with =
        ProxyState.jobs = ProxyState.jobs.filter(j => j.id != id)
        ProxyState.jobs = ProxyState.jobs
    }

}

export const jobsService = new JobsService()