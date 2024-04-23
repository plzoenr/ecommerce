import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "./user.entity";
import { CreateUserDto } from './dto/create-user.dto';
import {UpdateUserDto} from "./dto/update-user.dto";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post() // Handle HTTP POST requests to create a user
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }

    @Get() // requests to retrieve all menus
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id') // requests to retrieve a menu by ID
    findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(+id);
    }

    @Put(':id') // PUT requests to update menu by ID
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.userService.update(+id, updateUserDto);
    }

    @Delete(':id') // HTTP DELETE requests to remove a menu by ID
    remove(@Param('id') id: string) {
        return this.userService.remove( +id);
    }
}
