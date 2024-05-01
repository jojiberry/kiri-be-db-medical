class PatientModel{
    id!: number;
    location!: string;
    height!: number;
    width!: number;
    length!: number;
}

class PatientDelete{
    id!:number;
}

class PatientUpdate{
    id!: number;
    location!: string;
    height!: number;
    width!: number;
    length!: number;
}

export {PatientModel, PatientDelete, PatientUpdate}
