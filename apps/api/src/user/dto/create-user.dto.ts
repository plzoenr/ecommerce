import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({ message: 'Field first name must be added' })
    @IsString()
    firstName: string;

    @IsNotEmpty({ message: 'Field last name must be added' })
    @IsString()
    lastName: string;

    @IsNotEmpty({ message: 'Field email must be added' })
    @IsString()
    email: string;
}
