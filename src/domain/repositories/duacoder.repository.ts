import { Duacoder } from "../models/duacoder.model";

export interface DuacoderRepository {
  create(duacoder: Duacoder): Promise<Duacoder>;
  findAll(filter: any, skip: number, take: number): Promise<Duacoder[]>;
  findById(nif: string): Promise<Duacoder | null>;
  update(nif: string, duacoder: Duacoder): Promise<Duacoder | null>;
  delete(nifs: string[]): Promise<void>;
}
