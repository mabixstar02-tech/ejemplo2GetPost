import { Body, Controller, Get , Post } from '@nestjs/common';

@Controller('estudiante')
export class EstudianteController {
    /*Recibe la solicitud get*/
    @Get()
    mensaje(){
        return{
            "mensaje":"estudiante registrado"
        }
    }
    @Post()
    registrar(@Body() dato:any){
        console.log(dato)
        return {
            "mensaje":"los datos son "+dato.nombre
        }
    }
}