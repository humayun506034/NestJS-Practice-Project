import { IsInt, IsString } from "class-validator";

export class CreateCustomerDto {

    @IsString({ message: 'name must be a string' })
    name: string;
    @IsInt({ message: 'age must be a number' })
    age: number;
}