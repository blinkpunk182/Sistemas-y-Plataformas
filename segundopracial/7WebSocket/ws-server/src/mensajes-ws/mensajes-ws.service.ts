import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { InsumooService } from '../insumoo/insumoo.service'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {Insumoo} from "../insumoo/entities/insumoo.entity"
import { SerieService } from 'src/serie/serie.service';
import { Serie } from 'src/serie/entities/serie.entity';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       estudiante: Serie
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( 
     private readonly estudianteService: SerieService,
     private readonly serieService: SerieService
      ){}

    async registerClient(client:Socket, name: string){
        
        const estudiante =await  this.estudianteService.findOneByName( name );
        if (!estudiante) throw new Error('Estudiante no encontrado');
        



        
        this.connectedClients[client.id]= {socket:client, estudiante: estudiante};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getStudentFullName(id:string){
        return this.connectedClients[id].estudiante.nombre;
    }
}
