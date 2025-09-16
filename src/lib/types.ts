export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  ingredients: string[];
  price: number;
  image: string;
  category: 'Classic' | 'Gourmet' | 'Vegetarian';
}

export interface CartItem extends Product {
  quantity: number;
}
