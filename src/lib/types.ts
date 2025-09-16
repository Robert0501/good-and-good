export interface Nutrition {
  calories: string;
  protein: string;
  fat: string;
  carbohydrates: string;
  sodium: string;
}

export type PizzaSize = 'Normal' | 'Large' | 'Party';
export type ProductCategory = 'Toate' | 'Pizza' | 'Panini' | 'Desert' | 'Cafea' | 'Bauturi' | 'Clasice' | 'Gourmet' | 'Vegetariene';


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
  category: ProductCategory;
  nutrition: Nutrition | null;
}

export interface CartItem extends Product {
  quantity: number;
  size: PizzaSize;
  cartItemId: string; // Unique identifier for a product of a specific size
}
