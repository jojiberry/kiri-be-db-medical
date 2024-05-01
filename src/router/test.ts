import Router from "koa-router";
import { PatientController, VisitController, UserController} from "../controller/test";
import { VisitUpdateAddress } from "../model/visit";

const TEST_PATH = "/test";


// function testrouter() {
//   let router = new Router({ prefix: TEST_PATH });
//   let controller = new VisitController();

//   router.get("/data", controller.getVisit.bind(controller));
//   return router;
// }
  

//patient routing
function testPatient() {
  let router = new Router({ prefix: "/patient" });
  let controller = new PatientController();

  router.get("/data", controller.getPatient.bind(controller));
  return router;
}

function createPatient() {
  let router = new Router({ prefix: "/patient" });
  let controller = new PatientController();

  router.post("/create", controller.createPatient.bind(controller));
  return router;
}

function deletePatient() {
  let router = new Router({ prefix: "/patient" });
  let controller = new PatientController();

  router.delete("/delete", controller.deletePatient.bind(controller));
  return router;
}

function updatePatient() {
  let router = new Router({ prefix: "/patient" });
  let controller = new PatientController();

  router.put("/update", controller.updatePatient.bind(controller));
  return router;
}



//visit routing
function testVisit() {
  let router = new Router({ prefix: "/visit" });
  let controller = new VisitController();

  router.get("/data", controller.getVisit.bind(controller));
  return router;
}

function createVisit() {
  let router = new Router({ prefix: "/visit" });
  let controller = new VisitController();

  router.post("/create", controller.createVisit.bind(controller));
  return router;
}

function updateVisit() {
  let router = new Router({ prefix: "/visit" });
  let controller = new VisitController();

  router.put("/update", controller.updateVisit.bind(controller));
  return router;
}

function updateVisitAddress() {
  let router = new Router({ prefix: "/visit" });
  let controller = new VisitController();

  router.put("/updateaddress", controller.updateVisitAddress.bind(controller));
  return router;
}

function deleteVisit() {
  let router = new Router({ prefix: "/visit" });
  let controller = new VisitController();

  router.delete("/delete", controller.deleteVisit.bind(controller));
  return router;
}


// user routing
function testUser() {
  let router = new Router({ prefix: "/user" });
  let controller = new UserController();

  router.get("/data", controller.getUser.bind(controller));
  return router;
}

function createUser() {
  let router = new Router({ prefix: "/user" });
  let controller = new UserController();

  router.post("/create", controller.createUser.bind(controller));
  return router;
}

function updateUser () {
  let router = new Router({ prefix: "/user" });
  let controller = new UserController();

  router.put("/update", controller.updateUser.bind(controller));
  return router;
}

function deleteUser() {
  let router = new Router({ prefix: "/user" });
  let controller = new UserController();

  router.delete("/delete", controller.deleteUser.bind(controller));
  return router;
}

export { testVisit, createPatient, testPatient, deletePatient, updatePatient, createVisit, deleteVisit, updateVisit, updateVisitAddress, testUser, createUser, deleteUser, updateUser };

