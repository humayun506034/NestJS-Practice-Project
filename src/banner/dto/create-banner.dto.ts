import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBannerDto {
  @IsString({ message: 'name must be a string' })
  @IsNotEmpty({ message: 'name is required' })
  name: string;
}
