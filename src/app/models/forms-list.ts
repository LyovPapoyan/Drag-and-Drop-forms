import { IConfig } from "./config";

export interface IFormsList {
  type: string;
  label: string;
  multy: boolean;
  config: IConfig
}
