import { IsEmail } from '@nestjs/class-validator';

export class CreateUserDto {
  id: number;

  name: string;

  @IsEmail()
  email: string;

  password: string;
}
