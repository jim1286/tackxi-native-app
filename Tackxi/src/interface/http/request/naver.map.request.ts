export interface GetSearchLocationRequest {
  query: string;
  display?: number;
  start?: number;
  sort?: 'random' | 'comment';
}
