import { TPropertiesImage, TSellRent } from "../constants/routesConstants";

export interface IPropertyCard {
  id: number;
  name: string;
  price: number;
  type: string;
  sellRent: TSellRent;
  imageName?: TPropertiesImage;
}
