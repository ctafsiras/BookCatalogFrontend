export interface IBook {
  id: string;
  title: string;
  genre: string;
  publicationYear: number;
  author: string;
  reviews?: string[];
}
