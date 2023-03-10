import { Policy } from '../../types/policy';

interface PoliciesSliceState {
    all: Policy[];
}

export const initialState: PoliciesSliceState = {
    all: [
        {
            number: '1',
            policyHolder: {
                name: 'John Doe',
                address: 'Example Road 7, Stockholm',
                phoneNumber: '44 532 879',
            },
            insurancePeriod: { start: '2022-12-01', end: '2023-12-31' },
            premium: 1000,
            homeInsurance: {
                address: 'Example Road 7, Stockholm',
            },
        },
        {
            number: '2',
            policyHolder: {
                name: 'John Doe',
                address: 'Example Road 7, Stockholm',
                phoneNumber: '44 532 879',
            },
            insurancePeriod: { start: '2022-12-01', end: '2023-12-31' },
            premium: 1148.36,
            carInsurance: {
                carNickname: 'Bumblebee',
                makeModel: 'Peugeot 206 XR 5D 1,4',
                bonus: 30,
                coverage: 'KASKO + Traffic',
                licensePlate: 'AAA-000',
            },
        },
        {
            number: '3',
            policyHolder: {
                name: 'John Doe',
                address: 'Example Road 7, Stockholm',
                phoneNumber: '44 532 879',
            },
            insurancePeriod: { start: '2022-12-01', end: '2023-12-31' },
            premium: 1000,
            petInsurance: {
                petName: 'John Doe',
            },
        },
        {
            number: '4',
            policyHolder: {
                name: 'John Doe',
                address: 'Example Road 7, Stockholm',
                phoneNumber: '44 532 879',
            },
            insurancePeriod: { start: '2022-12-01', end: '2023-12-31' },
            premium: 1000,
            healthInsurance: {
                personName: 'John Doe',
            },
        },
    ],
};
