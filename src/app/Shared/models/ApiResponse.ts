import { ApiResponseCodes } from './enums';


export class ApiResponse<T> {
  description: string;
  message: string;
  payload: T;
  totalCount: number;
  Code: ApiResponseCodes;
}
