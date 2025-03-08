import { IAlbum } from './album';

export interface IPhoto {
  albumId: number;
  album: IAlbum;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
