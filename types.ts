export interface Product {
  id: number;
  name: string;
  description: string;
  priceList: { weight: string; price: number | string }[];
  category: 'konafa' | 'basbousa' | 'gollash' | 'western' | 'ice_cream' | 'oriental_delights';
  image: string;
  tags?: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum ViewState {
  HOME = 'HOME',
  MENU = 'MENU',
  CONTACT = 'CONTACT',
  ABOUT = 'ABOUT'
}