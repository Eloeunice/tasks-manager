import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { User } from 'generated/prisma';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(user: CreateUserDto) {
    const newUser: User = await this.prisma.user.create({ data: user });
    return newUser;
  }

  async findAll() {
    const users: User[] = await this.prisma.user.findMany();
    return users;
  }

  async findOne(id: number) {
    const userFound: User | null = await this.prisma.user.findUnique({
      where: { id: id },
    });
    return userFound;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userUpdated = await this.prisma.user.update({
      where: { id: id },
      data: { email: updateUserDto.email, name: updateUserDto.name },
    });
    return userUpdated;
  }

  async remove(id: number) {
    await this.prisma.user.delete({ where: { id: id } });
    return `User removed with success!`;
  }
}
