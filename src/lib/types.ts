export interface Nutrition {
  calories: string;
  protein: string;
  fat: string;
  carbohydrates: string;
  sodium: string;
}

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
  nutrition: Nutrition;
}

export interface CartItem extends Product {
  quantity: number;
}
