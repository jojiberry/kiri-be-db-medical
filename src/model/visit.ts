class VisitModel{
    visitcode!: number;
    visit_name!: string;
    date!: string;
    threed_obj!: string;
    patientId!: number;
    doctorId! : number
}

class VisitDelete{
    id!:number;
    doctorId! : number
}

class VisitUpdate{
    id!: number;
    visitcode!: number;
    visit_name!: string;
    date!: string;
    threed_obj!: string;
    patientId!: number;
    doctorId! : number
}

class VisitUpdateAddress{
    id!: number;
    doctorId! : number
    threed_obj!: string;
}

export {VisitModel, VisitDelete, VisitUpdate, VisitUpdateAddress}
