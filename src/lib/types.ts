export interface Nutrition {
  calories: string;
  protein: string;
  fat: string;
  carbohydrates: string;
  sodium: string;
}

export type PizzaSize = 'Normal' | 'Large' | 'Party';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  ingredients: string[];
  price: {
    Normal: number;
    Large: number;
    Party: number;
  };
  image: string;
  category: 'Classic' | 'Gourmet' | 'Vegetarian';
  nutrition: Nutrition;
}

export interface CartItem extends Product {
  quantity: number;
  size: PizzaSize;
  cartItemId: string; // Unique identifier for a product of a specific size
}
