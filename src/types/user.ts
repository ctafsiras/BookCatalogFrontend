export interface IUser {
  id: string;
  username: string;
  password: string;
  name: string;
  wishList?: string[];
  readingList: { bookId: string; finished: boolean }[];
}
