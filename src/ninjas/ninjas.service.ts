import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { Injectable } from '@nestjs/common';


// means that it could be injected to any class that depends on it , and use the defined logic inside it , by define new instance from this class
@Injectable() 
export class NinjasService {

    
    private ninjas = [
        {id : 0 , name : "ninjaA" , wepon : "stars"},
        {id : 1 , name : "ninjaB" , wepon : "nunchucks"},
    ]


    // the allowed wepon values will be only one of stars or nunchucks , when the getNinjas function is used 
    // get all ninjas
    getNinjas(wepon? : "stars" | "nunchucks"){

        if(wepon){
            return this.ninjas.filter(ninja => ninja.wepon === wepon)
        }

        return this.ninjas
    }




    // get specific ninja by id
    getNinjaById(id : number){

        if(!id){
            throw new Error("ninja id must provided")
        }

        const specificNinja = this.ninjas.find((ninja) => {
            return ninja.id.toString() === id.toString()
        })
 

        if(!specificNinja){
            throw new Error("ninja not exist")
        }

        return specificNinja

    }




    // create new ninja
    createNewNinja(createNinjaDto : CreateNinjaDto){

        const newNinja = {
            ...createNinjaDto ,
            id : Date.now()
        }

        this.ninjas.push(newNinja)

        return newNinja
    }




    // update specific ninja by id
    updateNinja(id : number , updateNinjaDto : UpdateNinjaDto){

        this.ninjas = this.ninjas.map((ninja) => {

            if(ninja.id.toString() === id.toString()){
                return {...ninja , ...updateNinjaDto}
            }

            return ninja

        })

        return this.getNinjaById(id)

    }

 



    // delete specific ninja by id
    deleteNinja(id : number){

        const ninjaToRemoved = this.ninjas.find((ninja) => {
            return ninja.id.toString() === id.toString()
        })

        if(!ninjaToRemoved){
            throw new Error("ninja not exist")
        }

        this.ninjas = this.ninjas.filter((ninja) => {
            return ninja.id !== id
        })

        return ninjaToRemoved
 
    }


}
