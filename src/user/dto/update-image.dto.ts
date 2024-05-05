
import { IsOptional, IsString } from 'class-validator';

export class UpdateImageDto {

    @IsOptional()
    image? : any

    @IsString()
    name : string
    
    @IsString()
    role : string
    
}
