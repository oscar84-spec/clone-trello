export type Board = {
  userId: string;
  title: string;
};

export type List = {
  title: string;
};

export type Card = {
  _id: string;
  title: string;
  description: string;
  priority: string;
  createdAt: string;
};

export type ListIndex = {
  oldIndex: number;
  newIndex: number;
};

export type CardIndex = {
  oldIndex: number;
  newIndex: number;
};
