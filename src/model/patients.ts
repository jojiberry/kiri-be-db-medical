class PatientModel{
    id!: number;
    firstname!: string;
    lastname!: string;
    height!: number;
    weight!: number;
    age!: number;
    sex!: string
}

class PatientDelete{
    id!:number;
}

class PatientUpdate{
    id!: number;
    firstname!: string;
    lastname!: string;
    height!: number;
    weight!: number;
    age!: number;
    sex!: string
}

export {PatientModel, PatientDelete, PatientUpdate}
