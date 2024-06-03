import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService{

    public characters: Character[] = [{  // sin osabeosa el tipo de dato, lo creamos la interfaz
        name: 'Krillin',
        power: 1000
    },{
        name:'Goku',
        power: 9500
    },
    {
        name: 'Vegeta',
        power: 8500
    }];            
    
    
    onNewCharacter(character: Character): void{
        //console.log('Main Page Component');
        //console.log(character);
        this.characters.push(character);

    }

    onDeleteCharacter(index: number): void{

        this.characters.splice(index,1);
    }



    constructor() { }
    
}