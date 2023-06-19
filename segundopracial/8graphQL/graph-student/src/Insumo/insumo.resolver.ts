import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { NotaService } from './insumo.service';
import { Insumo } from './entities/insumo.entity';
import { UpdateInsumoInput, CreateInsumoInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Insumo)
export class NotaResolver {
  constructor(private readonly notaService: NotaService) {}

  @Mutation(() => Insumo)
  async createInsumo(@Args('createInsumoInput') createNotaInput: CreateInsumoInput)
  :Promise<Insumo> {
    return this.notaService.create(createNotaInput);
  }

  @Query(() => [Insumo], { name: 'Insumos' })
  async findAll():Promise<Insumo[]> {
    return this.notaService.findAll();
  }

  @Query(() => Insumo, { name: 'Insumo' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Insumo> {
    return this.notaService.findOne(id);
  }

  @Mutation(() => Insumo)
  updateInsumo(@Args('updateInsumoInput') updateInsumoInput: UpdateInsumoInput): Promise<Insumo> {
    return this.notaService.update(updateInsumoInput.id, updateInsumoInput);
  }

  @Mutation(() => Insumo)
  removeInsumo(@Args('id', { type: () => ID }) id: string): Promise<Insumo> {
    return this.notaService.remove(id);
  }
}
