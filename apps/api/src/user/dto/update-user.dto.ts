import { IsString, IsUrl, IsNotEmpty,IsOptional, IsNumber, IsPositive } from 'class-validator';

export class UpdateUserDto {
    @IsNotEmpty({ message: 'field first name must be added' })
    @IsString()
    firstName?: string;

    @IsNotEmpty({ message: 'field last name must be added' })
    @IsString()
    lastName?: string;

    @IsNotEmpty({ message: 'Field email must be added' })
    @IsString()
    email?: string;
}
