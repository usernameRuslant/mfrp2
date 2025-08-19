export interface Article {
  objectID: string;
  title: string;
  url: string;
}

export interface Task {
  description: string;
  title: string;
  updatedAt: string;
  id: string;
  createdAt: string;
  status: string;
}
export interface NewTask {
  description: string;
  title: string;
  status: string;
}
