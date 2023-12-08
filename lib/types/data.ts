export interface UserData {
  id?: 1;
  created_at?: string;
  name?: string;
  imageSource: string;
  email: string;
  auth_id?: string;
}

export interface LinksData {
  id?: number;
  created_at?: string;
  createdAt?: string;
  updated_at?: string | null;
  url?: string;
  title?: string;
  description?: string;
  image_source?: string;
  imageSource?: string;
  folder_id?: number;
}

export interface Links {
  data: LinksData[];
}

export interface LinkCount {
  count: number;
}

export interface FoldersData {
  id?: number;
  created_at?: string;
  name: string;
  user_id?: number;
  link: LinkCount;
}

export interface Folders {
  data: FoldersData[];
}

export interface SampleLinks {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export interface SampleFolderData {
  folderName: string;
  ownerName: string;
  ownerImage: string;
  data: SampleLinks[];
}