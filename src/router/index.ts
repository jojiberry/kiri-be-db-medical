import Koa, { HttpError } from "koa";
import bodyParser from "koa-bodyparser";
import { createPatient, testVisit, testPatient, deletePatient, updatePatient, createVisit, deleteVisit, updateVisit, updateVisitAddress, testDoctor, createDoctor, deleteDoctor, updateDoctor } from "./test";
import cors from "koa-cors";


function routesApi() {
  let app = new Koa();
  
  app.use(cors())
  app.use(bodyParser());
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err: unknown) {
      if (err instanceof HttpError) {
        err.status = err.status || err.statusCode || 500;
        ctx.status = err.status;
        ctx.body = err;
        ctx.app.emit("error", err, ctx);
      }
    }
  });

  //patient stuff
  let patientAPI = testPatient();
  app.use(patientAPI.routes());
  app.use(patientAPI.allowedMethods());

  let createpatientAPI = createPatient();
  app.use(createpatientAPI.routes());
  app.use(createpatientAPI.allowedMethods());

  let deletepatientAPI = deletePatient();
  app.use(deletepatientAPI.routes());
  app.use(deletepatientAPI.allowedMethods());

  let updatepatientAPI = updatePatient();
  app.use(updatepatientAPI.routes());
  app.use(updatepatientAPI.allowedMethods());

  //visit stuff
  let visitAPI = testVisit();
  app.use(visitAPI.routes());
  app.use(visitAPI.allowedMethods());

  let createvisitAPI = createVisit();
  app.use(createvisitAPI.routes());
  app.use(createvisitAPI.allowedMethods());

  let deletevisitAPI = deleteVisit();
  app.use(deletevisitAPI.routes());
  app.use(deletevisitAPI.allowedMethods());

  let updatevisitAPI = updateVisit();
  app.use(updatevisitAPI.routes());
  app.use(updatevisitAPI.allowedMethods());

  let updatevisitaddressAPI = updateVisitAddress();
  app.use(updatevisitaddressAPI.routes());
  app.use(updatevisitaddressAPI.allowedMethods());

  //doctor stuff
  let doctorAPI = testDoctor();
  app.use(doctorAPI.routes());
  app.use(doctorAPI.allowedMethods());

  let createDoctorAPI = createDoctor();
  app.use(createDoctorAPI.routes());  
  app.use(createDoctorAPI.allowedMethods());

  let deletedoctorAPI = deleteDoctor();
  app.use(deletedoctorAPI.routes());
  app.use(deletedoctorAPI.allowedMethods());

  let updatedoctorAPI = updateDoctor();
  app.use(updatedoctorAPI.routes());
  app.use(updatedoctorAPI.allowedMethods());

  return app;

}

export default routesApi;