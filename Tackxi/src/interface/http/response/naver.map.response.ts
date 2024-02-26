export interface GetSearchLocationResponse {
  lastBuildDate: Date;
  total: number;
  start: number;
  display: number;
  items: Item[];
}

export interface Item {
  title: string;
  link: string;
  category: string;
  description: string;
  telephone: string;
  address: string;
  roadAddress: string;
  mapx: number;
  mapy: number;
}

export interface Address {
  roadAddress?: string;
  jibunAddress?: string;
  englishAddress?: string;
  x?: string;
  y?: string;
  distance?: number;
  addressElements?: string[];
}
