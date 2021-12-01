export interface IHero {
  id: number;
  name: string;
  sourcePowers?: {
    id: number;
    power: string;
  }[];
  powers?: string;
  rating: number;
  description: string;
}
