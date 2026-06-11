import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly repo: Repository<Estudiante>,
  ) {}

  create(dto: CreateEstudianteDto): Promise<Estudiante> {
    const estudiante = this.repo.create(dto);
    return this.repo.save(estudiante);
  }

  findAll(): Promise<Estudiante[]> {
    return this.repo.find();
  }
}