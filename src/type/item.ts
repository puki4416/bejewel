export interface ItemFormType {
  brand: string;
  category: string;
  name: string;
  price: string;
  size: string;
  content: string;
  images: string[];
}

export interface getItemType extends ItemFormType {
  id: number;
}

export type getItemsType = getItemType[];
