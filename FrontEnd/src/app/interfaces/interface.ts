import { TPropertiesImage, TSellRent } from "../constants/routesConstants";

export interface IPropertyCard {
  id: number;
  name: string;
  price: number;
  type: string;
  sellRent: TSellRent;
  imageName?: TPropertiesImage;
}
export interface IRegisterUser {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  mobile: string;
}
export interface ILoginUser {
  userName: string;
  password: string;
}
