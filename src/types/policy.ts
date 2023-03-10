export type HomeInsurance = {
    address: string;
};

export type CarInsurance = {
    carNickname: string;
    makeModel: string;
    licensePlate: string;
    coverage: string;
    bonus: number;
};

export type PetInsurance = {
    petName: string;
};

export type HealthInsurance = {
    personName: string;
};

export type Policy = {
    number: string;
    insurancePeriod: {
        start: string;
        end: string;
    };
    premium: number;
    policyHolder: {
        name: string;
        phoneNumber: string;
        address: string;
    };

    homeInsurance?: HomeInsurance;
    carInsurance?: CarInsurance;
    petInsurance?: PetInsurance;
    healthInsurance?: HealthInsurance;
};

export type CarInsuranceMutableFields = {
    address: string;
    phoneNumber: string;
    carNickname: string;
};
