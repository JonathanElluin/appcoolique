export class Alcoolique {
  constructor() {
      this.appcooliquescore = 1;
      this.address = {
          address: null,
          city: null,
          zipcode: null,
          country: null,
          coordinates: null
      };
      this.pictures = null
  }

  id?: string;
  firstname: string;
  lastname: string;
  sex: string;
  appcooliquescore: number;
  birthday: Date;
  pictures: string;
  address: {
    address: string;
    city: string;
    zipcode: number;
    country: string;
    coordinates?: any;
  };

}
