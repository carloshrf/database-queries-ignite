import { getRepository, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';
import Genre from '../../entities/Genre';

import { IGamesRepository } from '../IGamesRepository';

interface CreateGameDTO {
  genres: Array<string>;
  title: string;
}

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async create({ genres, title }: CreateGameDTO): Promise<Game> {
    const game = this.repository.create({ genres, title });

    await this.repository.save(game);

    return game;
  }

  async findByTitleContaining(param: string): Promise<Game[]> {

    return this.repository
    .createQueryBuilder('game')
    .where(
      "game.title ilike :value", 
      { value: `%${param}%` }
    )
    .getMany()
      // Complete usando query builder
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return this.repository.query(
      `SELECT COUNT(*) FROM games`
    ); // Complete usando raw query
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    return this.repository
      .createQueryBuilder('game')
      .relation(Game, 'users')
      .of(id)
      .loadMany()
      // Complete usando query builder
  }
}
