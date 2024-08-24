// dto : data transfer object , defines how the data will be sent over the network

import { IsEnum, IsNumber, IsString, MinLength } from "class-validator"

export class CreateNinjaDto{
    
    // now the name key must be at least have 3 digits
    @MinLength(3 , {message : "name must be at least 3 digits"})
    @IsString()
    name : string
    
    // now the wepon key must be one of the enum array values
    @IsEnum(["stars" , "nunchucks"] , {message : "use valid wepon type"})
    @IsString()
    wepon : "stars" | "nunchucks" 
    
}