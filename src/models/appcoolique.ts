export class Appcoolique {
    id?: string;
    firstname: string;
    lastname: string;
    sex: string;
    appcooliquescore: number;
    birthday: Date;
    address: {
        address: string;
        city: string;
        zipcode: number;
        country: string;
        coordinates?: any;
    };
    pictures: [{
        addeddate: Date;
        url: string;
    }];
}