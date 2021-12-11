export interface Customer{
    id: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    bio: string;
    imageUrl: string;
}

export const CUSTOMERS: Customer[] = [
  {
    id: 1,
    firstName: "beimnet",
    lastName: "abebe",
    birthDate: "12/12/12",
    bio: "this is a typical bio i want to add to demonstate that the bio work",
    imageUrl: "assets/images/pro-thumbnail.png"
  },
  {
    id: 2,
    firstName: "kirubel",
    lastName: "tariku",
    birthDate: '12/12/12',
    bio: "this is a typical bio i want to add to demonstate that the bio work",
    imageUrl: "assets/images/pro-thumbnail.png"
  },
  {
    id: 3,
    firstName: "abel",
    lastName: "kebede",
    birthDate: "12/12/12",
    bio: "this is a typical bio i want to add to demonstate that the bio work",
    imageUrl: "assets/images/pro-thumbnail.png"
  },

];
