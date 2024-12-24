export interface LoginInterface {
  email: string| null |undefined;
  password: string |null|undefined;
}

export interface registerInterface extends LoginInterface {
  firstName: string | null |undefined;
  lastName: string |null |undefined;
}

export interface UserInterface {
  userId: number;
  firstName: string;
  lastname: string;
  email: string;
  password: string;
}
