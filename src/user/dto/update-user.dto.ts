
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {

    @IsOptional()
    image? : any

    @IsString()
    firstName : string
    
    @IsString()
    lastName : string
    

    @IsString()
    about : string
    

    @IsString()
    facebook : string
    

    @IsString()
    twitter : string
    

    @IsString()
    instagram : string
    

    @IsString()
    linkedIn : string
    
}