export interface LoginInterface {
  email: string| null |undefined;
  password: string |null|undefined;
}

export interface registerInterface extends LoginInterface {
  firstName: string | null |undefined;
  lastName: string |null |undefined;
}

export interface UserInterface {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
