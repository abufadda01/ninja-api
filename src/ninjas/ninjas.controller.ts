import { NinjasService } from './ninjas.service';
import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';


@Controller('ninjas')
export class NinjasController {

    // const service = new NinjasService() 
    // define property in the constructor called ninjasService and its type : NinjasService
    // to not keep define new instances for each route method , we define only once in the constructor
    // the shared thing between private , readonly that i can't modify and update the value , but the difference is where i can access this value (private : only within the class) , (readonly : inside , outside the class)
    constructor(private readonly ninjasService : NinjasService){}
    

    @Get() // /ninjas?wepon=stars
    // wepon type must be one of the defined unions that we define them in the service
    getNinjas(@Query("wepon") wepon : "stars" | "nunchucks"){
        return this.ninjasService.getNinjas(wepon)
    }


    @Get("/:id") // /ninjas/:id
    getOneNinja(@Param("id") id : number){
        try {
            return this.ninjasService.getNinjaById(id)
        } catch (error) {
            throw new NotFoundException("ninja not found") // build in exception handler to handle cases where data been not found , what we send inside the ("error_message")
        }
    }


    @Post()
    // to make sure that we have some defined structure of our parsed req body data so the createNinjaDto that cames from the req body will and must be as the CreateNinjaDto class type (dto) , match its requirments
    createNinja(@Body() createNinjaDto : CreateNinjaDto){ 
        return this.ninjasService.createNewNinja(createNinjaDto)
    }


    @Patch("/:ninjaId") // /ninjas/:id
    updateNinja(@Param("ninjaId") ninjaId : number , @Body() updateNinjaDto : UpdateNinjaDto){
        return this.ninjasService.updateNinja(ninjaId  , updateNinjaDto)
    } 


    @Delete(":id") // /ninjas/:id
    deleteNinja(@Param("id") id : number){
        return this.ninjasService.deleteNinja(id)
    }


}



// ALL OF ROUTES IN THIS CONTROLLER WILL BE PRE FIXED WITH /ninjas string because its added to @Controller('ninjas')
// AND INSIDE THE class NinjasController{} WE DEFINE APIS METHODS FOR EACH ROUTE
// AND TO DEFINE THE ROUTE API TYPE WE ADD SPECIFIC DECORATER @Get , @Post , ... ABOVE OF THE FUNCTION THE USED TO HANDLE THIS ROUTE
// AND WE CAN ADD EXTRA ROUTE PATH DEFINITION INSIDE THE API TYPE DECORATER IT SELF Get("/:id") TO BECOME /ninjas/:id
// AND HOW WE CAN ACCESS THIS URL EXTRA PARAMS IN THE FUNCTION THAT HANDLE THIS ROUTE BY USING THE @Param decorater in the function definition (to parse and access the param outside from our url)
// @Param("param_name_from_url") param_name : its_type , then we can use it , access any place in our function that handle this req
// ALSO WE CAN DO SAME THING FOR QUERIES AND ACCESS THEM BY @Query("query_name_from_url") query_name : its_type
// ALSO WE CAN ACCESS THE REQ BODY USING @Body decorater , @Body object_that_came_from_req object_dto/expected_type
// GET /ninjas --> []
// GET /ninjas/:id --> {...}
// POST /ninjas
// PUT/PATCH /ninjas/:id --> {...}
// DELETE /ninjas/:id 