export function getJobForm() {
  return `
  
  <form class="mb-3 col-12 bg-white p-3 mt-4" onsubmit="app.jobsController.createJob()">
              <h3> List a Job </h3>
                <div class="row">
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Employer</label>
                    <input required type="text" name="employer" id="employer" placeholder="Enter Employer..." maxlength="15"
                      minlength="3" class="form-control" placeholder="" aria-describedby="helpId"
                      title="please enter a employer">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Address</label>
                    <input required type="text" name="address" id="address" placeholder="Enter an address..."
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Start Date</label>
                    <input required type="text" name="startDate" id="startDate" placeholder="Enter a start date..."
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Wage</label>
                    <input required type="number" name="wage" id="wage" value="1" min="1" class="form-control"
                      placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-12 mb-2">
                    <label for="" class="form-label">description</label>
                    <input required type="text" name="description" id="description"
                      placeholder="Tell us about the job..." class="form-control" maxlength="75" placeholder=""
                      aria-describedby="helpId">
                  </div>
                  <div class="col-6">
                    <label for="" class="form-label">Image Url</label>
                    <input required type="text" name="imgUrl" id="imgUrl" class="form-control" placeholder=""
                      aria-describedby="helpId">
                  </div>
                </div>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary px-3 py-2" title="create a car"><i
                    class="mdi mdi-plus"></i>
                  Create</button>
              </form>`
}