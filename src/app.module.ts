import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteController } from './estudiante/estudiante.controller';
import { ProductosController } from './productos/productos.controller';
import { ProductosService } from './productos/productos.service';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [ProductosModule],
  controllers: [AppController, EstudianteController, ProductosController],
  providers: [AppService, ProductosService],
})
export class AppModule {}
