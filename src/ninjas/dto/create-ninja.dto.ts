// dto : data transfer object , defines how the data will be sent over the network , and how its structure will be

import { IsEnum, IsNumber, IsString, MinLength } from "class-validator"

export class CreateNinjaDto{
    
    // now the name key must be at least have 3 digits , and a string value
    @MinLength(3 , {message : "name must be at least 3 digits"})
    @IsString()
    name : string
    
    // now the wepon key must be one of the enum array values , and a string value
    @IsEnum(["stars" , "nunchucks"] , {message : "use valid wepon type"})
    @IsString()
    wepon : "stars" | "nunchucks" 

}