class VisitModel{
    visitcode!: number;
    visit_name!: string;
    height!: number;
    width!: number;
    length!: number;
    threed_obj!: string;
    patientId!: number;
    doctor_id! : number
}

class VisitDelete{
    id!:number;
    doctor_id! : number
}

class VisitUpdate{
    id!: number;
    visitcode!: number;
    visit_name!: string;
    height!: number;
    width!: number;
    length!: number;
    threed_obj!: string;
    updated!: Date;
    patientId!: number;
    doctor_id! : number
}

class VisitUpdateAddress{
    id!: number;
    doctor_id! : number
    threed_obj!: string;
}

export {VisitModel, VisitDelete, VisitUpdate, VisitUpdateAddress}
