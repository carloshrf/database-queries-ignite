import { getRepository } from "typeorm";
import Genre from "../entities/Genre";
import { IGamesRepository } from "../repositories/IGamesRepository";
import { GamesRepository } from "../repositories/implementations/GamesRepository";

interface IRequest {
  title: string;
  genres: Array<string>;
}

export class CreateGameUseCase {
  constructor(
    private gamesRepository: IGamesRepository
  ) {}

  async execute({ genres, title }: IRequest) {
    this.gamesRepository.create({ genres, title });

  }
}