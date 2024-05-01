class DoctorModel{
    id!: number;
    username!: string;
    password!: string;
    timelogged!: Date;
    rndm!: string
}

class DoctorDelete{
    id!:number;
}


class DoctorUpdate{
    id!: number;
    username!: string;
    password!: string;
    rndm!: string
}

export {DoctorModel, DoctorDelete, DoctorUpdate}
