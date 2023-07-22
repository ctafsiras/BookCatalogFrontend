export interface IUser {
  username: string;
  password: string;
  name: string;
  wishList?: string[];
  readingList: { bookId: string; finished: boolean }[];
}
