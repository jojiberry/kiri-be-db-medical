import Koa, { HttpError } from "koa";
import bodyParser from "koa-bodyparser";
import { createPatient, testVisit, testPatient, deletePatient, updatePatient, createVisit, deleteVisit, updateVisit, updateVisitAddress, testUser, createUser, deleteUser, updateUser } from "./test";
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

  //warehouse stuff
  let warehouseAPI = testPatient();
  app.use(warehouseAPI.routes());
  app.use(warehouseAPI.allowedMethods());

  let createwarehouseAPI = createPatient();
  app.use(createwarehouseAPI.routes());
  app.use(createwarehouseAPI.allowedMethods());

  let deletewarehouseAPI = deletePatient();
  app.use(deletewarehouseAPI.routes());
  app.use(deletewarehouseAPI.allowedMethods());

  let updatewarehouseAPI = updatePatient();
  app.use(updatewarehouseAPI.routes());
  app.use(updatewarehouseAPI.allowedMethods());

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

  //user stuff
  let userAPI = testUser();
  app.use(userAPI.routes());
  app.use(userAPI.allowedMethods());

  let createUserAPI = createUser();
  app.use(createUserAPI.routes());  
  app.use(createUserAPI.allowedMethods());

  let deleteuserAPI = deleteUser();
  app.use(deleteuserAPI.routes());
  app.use(deleteuserAPI.allowedMethods());

  let updateuserAPI = updateUser();
  app.use(updateuserAPI.routes());
  app.use(updateuserAPI.allowedMethods());

  return app;

}

export default routesApi;