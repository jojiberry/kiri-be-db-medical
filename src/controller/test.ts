// all new functions are under here, everything runs here, router j connects it
import { Context } from "koa";
import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { errorResponse, successResponse } from "../utils/responses";
import { PatientDelete, PatientModel, PatientUpdate } from "../model/patients";
import { VisitModel, VisitDelete, VisitUpdate , VisitUpdateAddress } from "../model/visit";
import { DoctorModel, DoctorDelete, DoctorUpdate } from "../model/doctors";
import { RequestInvalidError } from "../error/request-invalid";




class PatientController {
  public async getPatient(context : Context) {
    const data = await prisma.patient.findMany({})
    return successResponse(context, {data: data}, StatusCodes.OK);
  }   
  public async createPatient(context : Context) {
    try{
      let payload = context.request.body as PatientModel;
      let data = await prisma.patient.create({data:payload})

      return successResponse(context, {data: data}, StatusCodes.OK);
    }
    catch(error){
      if (error instanceof RequestInvalidError){
        return errorResponse(
          context,
          { error: error.message },
          StatusCodes.BAD_REQUEST
        );
      }
      return errorResponse(
        context,
        {
          error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
        }
      )
    }
  }   
  public async deletePatient(context : Context) {
    try{
      let patientiddelete = context.request.body as PatientDelete;
      console.log(patientiddelete)
      let data = await prisma.patient.delete({where:({
        id:patientiddelete.id
      })})

      return successResponse(context, {data: data}, StatusCodes.OK);
    }
    catch(error){
      if (error instanceof RequestInvalidError){
        return errorResponse(
          context,
          { error: error.message },
          StatusCodes.BAD_REQUEST
        );
      }
      return errorResponse(
        context,
        {
          error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
        }
      )
    }
  }    
  public async updatePatient(context : Context) {
    try{
      let payload = context.request.body as PatientUpdate;
      console.log(payload)
      let data = await prisma.patient.update({
        where: {
          id: payload.id,
        },
        data: {
          location: payload.location,
          height: payload.height,
          width: payload.width,
          length: payload.length,
        },
      })

      return successResponse(context, {data: data}, StatusCodes.OK);
    }
    catch(error){
      if (error instanceof RequestInvalidError){
        return errorResponse(
          context,
          { error: error.message },
          StatusCodes.BAD_REQUEST
        );
      }
      return errorResponse(
        context,
        {
          error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
        }
      )
    }
  }   
}

class VisitController {
  public async getVisit(context : Context) {
      const data = await prisma.visit.findMany({})
      return successResponse(context, {data: data}, StatusCodes.OK);
    }
  public async createVisit(context : Context) {
      try{
        let payload = context.request.body as VisitModel;
        let data = await prisma.visit.create({
          data: ({
            visitcode: payload.visitcode,
            visit_name: payload.visit_name,
            height:payload.height,
            width: payload.width,
            length:payload.length,
            threed_obj:payload.threed_obj,
            patientId: payload.patientId,
            date:''
        })
      })
  
        console.log(data.id)
        
        let date = new Date()
        await prisma.logger.create({
          data:({
            id_doctor: payload.doctor_id,
            id_patient: data.id,
            time : date
          })
        })
        return successResponse(context, {data: data}, StatusCodes.OK);
      }
  
      catch(error){
        console.log(error)
        if (error instanceof RequestInvalidError){
          return errorResponse(
            context,
            { error: error.message },
            StatusCodes.BAD_REQUEST
          );
        }}
        
        return errorResponse(
          context,
          {
            error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
          }
        )
    }
  public async deleteVisit(context : Context) {
        try{
          let visitiddelete = context.request.body as VisitDelete;
          console.log(visitiddelete)
    
          let data = await prisma.visit.update({
            where:{id: visitiddelete.id},
            data:{
              date : ""
            }
          })
    
          let date = new Date()
          await prisma.logger.create({
            data:({
              id_doctor: visitiddelete.doctor_id,
              id_patient: data.id,
              time: date
            })
          })
    
          return successResponse(context, {data: data}, StatusCodes.OK);
        }
        catch(error){
          console.log
          if (error instanceof RequestInvalidError){
            return errorResponse(
              context,
              { error: error.message },
              StatusCodes.BAD_REQUEST
            );
          }
          return errorResponse(
            context,
            {
              error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
            }
          )
        }
    } 
  public async updateVisit(context : Context) {
      try{
        let payload = context.request.body as VisitUpdate;
        console.log(payload)
        let data = await prisma.visit.update({
          where: {
            id: payload.id,
          },
          data: {
            visitcode: payload.visitcode,
            visit_name: payload.visit_name,
            height:payload.height,
            width: payload.width,
            length:payload.length,
            threed_obj:payload.threed_obj,
            patientId: payload.patientId,
          },})
  
        let date = new Date()
        await prisma.logger.create({
          data:({
            id_doctor: payload.doctor_id,
            id_patient: data.id,
            time : date
          })
        })
  
        return successResponse(context, {data: data}, StatusCodes.OK);
      }
      catch(error){
        if (error instanceof RequestInvalidError){
          return errorResponse(
            context,
            { error: error.message },
            StatusCodes.BAD_REQUEST
          );
        }
        return errorResponse(
          context,
          {
            error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
          }
        )
      }
    }   
  public async updateVisitAddress(context : Context) {
      try{
        let payload = context.request.body as VisitUpdateAddress;
        console.log(payload)
        let data = await prisma.visit.update({
          where: {
            id: payload.id,
          },
          data: {
            threed_obj: payload.threed_obj,
          },})
  
        let date = new Date()
        await prisma.logger.create({
          data:({
            id_doctor: payload.doctor_id,
            id_patient: data.id,
            time : date
          })
        })
  
        return successResponse(context, {data: data}, StatusCodes.OK);
      }
      catch(error){
        if (error instanceof RequestInvalidError){
          return errorResponse(
            context,
            { error: error.message },
            StatusCodes.BAD_REQUEST
          );
        }
        return errorResponse(
          context,
          {
            error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
          }
        )
      }
    }   
}

class DoctorController {
  public async getDoctor(context : Context) {
      const data = await prisma.doctor.findMany({})
      return successResponse(context, {data: data}, StatusCodes.OK);
    }
  public async createDoctor(context : Context) {
      try{
        let date = new Date()
        
        let payload = context.request.body as DoctorModel;
        console.log(Date())
        let data = await prisma.doctor.create({data: payload})
        return successResponse(context, {data: {
          id: payload.id,
          username: payload.username,
          password: payload.password,
          timelogged: date,
          rndm: payload.rndm
        }}, StatusCodes.OK);
      }
      catch(error){
        if (error instanceof RequestInvalidError){
          return errorResponse(
            context,
            { error: error.message },
            StatusCodes.BAD_REQUEST
          );
        }
        return errorResponse(
          context,
          {
            error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
          }
        )
      }
    }  
  public async deleteDoctor(context : Context) {
      try{
        let doctoriddelete = context.request.body as DoctorDelete;
        console.log(doctoriddelete)
        let data = await prisma.doctor.delete({where:({
          id:doctoriddelete.id
        })})
  
        return successResponse(context, {data: data}, StatusCodes.OK);
      }
      catch(error){
        if (error instanceof RequestInvalidError){
          return errorResponse(
            context,
            { error: error.message },
            StatusCodes.BAD_REQUEST
          );
        }
        return errorResponse(
          context,
          {
            error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
          }
        )
      }
    }   
  public async updateDoctor(context : Context) {
      try{
        let date = new Date()
        let payload = context.request.body as DoctorUpdate;
        console.log(payload)
        let data = await prisma.doctor.update({
          where: {
            id: payload.id,
          },
          data: {
            username: payload.username,
            password: payload.password,
            timelogged: date
          },
        })
        return successResponse(context, {data: data}, StatusCodes.OK);
      }
      catch(error){
        if (error instanceof RequestInvalidError){
          return errorResponse(
            context,
            { error: error.message },
            StatusCodes.BAD_REQUEST
          );
        }
        return errorResponse(
          context,
          {
            error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
          }
        )
      }
    }      
}


export { PatientController, VisitController, DoctorController };
