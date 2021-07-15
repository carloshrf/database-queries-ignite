import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { CreateGameUseCase } from './CreateGameUseCase';
import { IGamesRepository } from '../repositories/IGamesRepository';
import { GamesRepository } from '../repositories/implementations/GamesRepository';

class CreateGameController {
  constructor(
    private createGamesUseCase: CreateGameUseCase
  ) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, genres } = request.body;

    const game = await this.createGamesUseCase.execute({ title, genres });

    return response.send(games);
  }
}