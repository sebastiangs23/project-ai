import { homeCardRepository } from "../../infrastructure/repositories/home-card.repository";

export function getHomeCardsUseCase() {
  return homeCardRepository;
}