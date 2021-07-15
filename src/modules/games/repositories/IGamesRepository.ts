import { User } from '../../users/entities/User';
import { Game } from '../entities/Game';

interface ICreateGameDTO {
  genres: Array<string>;
  title: string;
}

export interface IGamesRepository {
  create({ title, genres }: ICreateGameDTO): Promise<Game>;
  findByTitleContaining(title: string): Promise<Game[]>;
  countAllGames(): Promise<[{ count: string }]>;
  findUsersByGameId(id: string): Promise<User[]>;
}
