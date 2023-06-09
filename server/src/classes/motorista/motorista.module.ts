import { Module } from '@nestjs/common';
import { MotoristaService } from './motorista.service';
import { MotoristaController } from './motorista.controller';

@Module({
  controllers: [MotoristaController],
  providers: [MotoristaService]
})
export class MotoristaModule {}
