


export interface OnboardingUser{
    firstName: string;
    surName: string;
    DateOfBirth: Date;
    gender: Genders;
    phoneNumber: string;
    otherNames: string;
    countryCode: string;
    email: string;
}

export enum Genders {
        Male = 1,
        Female = 2
}