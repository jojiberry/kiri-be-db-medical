class VisitModel{
    skucode!: number;
    visit_name!: string;
    height!: number;
    width!: number;
    length!: number;
    threed_obj!: string;
    patientId!: number;
    user_id! : number
}

class VisitDelete{
    id!:number;
    user_id! : number
}

class VisitUpdate{
    id!: number;
    skucode!: number;
    visit_name!: string;
    height!: number;
    width!: number;
    length!: number;
    threed_obj!: string;
    updated!: Date;
    patientId!: number;
    user_id! : number
}

class VisitUpdateAddress{
    id!: number;
    user_id! : number
    threed_obj!: string;
}

export {VisitModel, VisitDelete, VisitUpdate, VisitUpdateAddress}
