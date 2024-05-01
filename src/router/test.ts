import Router from "koa-router";
import { PatientController, VisitController, DoctorController} from "../controller/test";
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
function testDoctor() {
  let router = new Router({ prefix: "/doctor" });
  let controller = new DoctorController();

  router.get("/data", controller.getDoctor.bind(controller));
  return router;
}

function createDoctor() {
  let router = new Router({ prefix: "/doctor" });
  let controller = new DoctorController();

  router.post("/create", controller.createDoctor.bind(controller));
  return router;
}

function updateDoctor () {
  let router = new Router({ prefix: "/doctor" });
  let controller = new DoctorController();

  router.put("/update", controller.updateDoctor.bind(controller));
  return router;
}

function deleteDoctor() {
  let router = new Router({ prefix: "/doctor" });
  let controller = new DoctorController();

  router.delete("/delete", controller.deleteDoctor.bind(controller));
  return router;
}

export { testVisit, createPatient, testPatient, deletePatient, updatePatient, createVisit, deleteVisit, updateVisit, updateVisitAddress, testDoctor, createDoctor, deleteDoctor, updateDoctor };

