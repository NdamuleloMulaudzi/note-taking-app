export interface LoginInterface {
  email: string;
  password: string;
}

export interface registerInterface extends LoginInterface {
  firstName: string;
  lastname: string;
}

export interface UserInterface {
  userId: number;
  firstName: string;
  lastname: string;
  email: string;
  password: string;
}
