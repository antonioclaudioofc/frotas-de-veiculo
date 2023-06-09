import { Injectable } from '@nestjs/common';
import { CreateViagemDto } from './dto/create-viagem.dto';
import { UpdateViagemDto } from './dto/update-viagem.dto';

@Injectable()
export class ViagemService {
  create(createViagemDto: CreateViagemDto) {
    return 'This action adds a new viagem';
  }

  findAll() {
    return `This action returns all viagem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} viagem`;
  }

  update(id: number, updateViagemDto: UpdateViagemDto) {
    return `This action updates a #${id} viagem`;
  }

  remove(id: number) {
    return `This action removes a #${id} viagem`;
  }
}
