import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail } from '@nestjs/class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  name?: string | undefined;
  @IsEmail()
  email?: string | undefined;
}
