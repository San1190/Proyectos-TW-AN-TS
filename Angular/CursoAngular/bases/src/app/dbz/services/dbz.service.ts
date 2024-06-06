import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService{

    public characters: Character[] = [{  // sin osabeosa el tipo de dato, lo creamos la interfaz
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },{
        id: uuid(),
        name:'Goku',
        power: 9500
    },
    {
        id: uuid(),
        name: 'Vegeta',
        power: 8500
    }];            
    
    
    addCharacter(character: Character): void{
        //console.log('Main Page Component');
        //console.log(character);


        const newCharacter = {
            id: uuid(), 
            ...character // con los tres puntos se desglosa el objeto y se copia
        }

        this.characters.push(newCharacter);

    }

    //onDeleteCharacter(index: number): void{

        //this.characters.splice(index,1);
        
    deleteCharacterById(id: string){
        this.characters = this.characters.filter(character => character.id !== id);



    }
    



    constructor() { }
    
}