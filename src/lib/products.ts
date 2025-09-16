import type { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Margherita Classic',
    slug: 'margherita-classic',
    description: 'The timeless classic with fresh mozzarella, San Marzano tomatoes, and basil.',
    longDescription: 'A true taste of Naples, our Margherita Classic is a testament to simple, high-quality ingredients. We use authentic San Marzano tomatoes for the sauce, creamy fior di latte mozzarella, a drizzle of extra virgin olive oil, and fresh basil leaves.',
    ingredients: ['San Marzano Tomatoes', 'Fresh Mozzarella', 'Basil', 'Extra Virgin Olive Oil'],
    price: 14.99,
    image: 'margherita',
    category: 'Classic',
    nutrition: { calories: '250', protein: '12g', fat: '10g', carbohydrates: '28g', sodium: '640mg' }
  },
  {
    id: '2',
    name: 'Pepperoni Feast',
    slug: 'pepperoni-feast',
    description: 'A generous layer of spicy pepperoni and rich mozzarella cheese.',
    longDescription: 'For those who love a bit of spice, our Pepperoni Feast is loaded with premium, spicy pepperoni slices over a bed of our signature tomato sauce and melted mozzarella cheese. A universally loved favorite.',
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Spicy Pepperoni'],
    price: 16.99,
    image: 'pepperoni',
    category: 'Classic',
    nutrition: { calories: '320', protein: '15g', fat: '18g', carbohydrates: '30g', sodium: '980mg' }
  },
  {
    id: '3',
    name: 'Garden Veggie',
    slug: 'garden-veggie',
    description: 'A colorful mix of fresh bell peppers, red onions, olives, and mushrooms.',
    longDescription: 'A vegetarian\'s delight! Our Garden Veggie pizza is topped with a vibrant assortment of fresh vegetables including crisp bell peppers, sweet red onions, savory black olives, and earthy mushrooms, all on our classic tomato and mozzarella base.',
    ingredients: ['Bell Peppers', 'Red Onions', 'Black Olives', 'Mushrooms', 'Mozzarella'],
    price: 15.99,
    image: 'veggie',
    category: 'Vegetarian',
    nutrition: { calories: '230', protein: '10g', fat: '8g', carbohydrates: '32g', sodium: '590mg' }
  },
  {
    id: '4',
    name: 'BBQ Chicken',
    slug: 'bbq-chicken',
    description: 'Tangy BBQ sauce, grilled chicken, red onions, and fresh cilantro.',
    longDescription: 'A smoky and savory option, this pizza features tender grilled chicken, sharp red onions, and fresh cilantro on a base of tangy barbecue sauce, all covered with mozzarella and provolone cheeses.',
    ingredients: ['BBQ Sauce', 'Grilled Chicken', 'Red Onions', 'Cilantro', 'Mozzarella'],
    price: 18.99,
    image: 'bbq-chicken',
    category: 'Gourmet',
    nutrition: { calories: '350', protein: '20g', fat: '14g', carbohydrates: '38g', sodium: '890mg' }
  },
  {
    id: '5',
    name: 'Hawaiian Paradise',
    slug: 'hawaiian-paradise',
    description: 'A sweet and savory combination of juicy pineapple and smoked ham.',
    longDescription: 'Love it or hate it, our Hawaiian Paradise is perfectly balanced. Sweet, juicy pineapple chunks and savory smoked ham create a delicious contrast that has won over legions of fans.',
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Smoked Ham', 'Pineapple'],
    price: 16.99,
    image: 'hawaiian',
    category: 'Classic',
    nutrition: { calories: '290', protein: '14g', fat: '11g', carbohydrates: '35g', sodium: '910mg' }
  },
  {
    id: '6',
    name: 'Meat Lovers',
    slug: 'meat-lovers',
    description: 'Packed with pepperoni, Italian sausage, bacon, and smoked ham.',
    longDescription: 'An absolute feast for the carnivore. This pizza is loaded with four types of meat: spicy pepperoni, savory Italian sausage, crispy bacon, and smoked ham. A truly hearty and satisfying meal.',
    ingredients: ['Pepperoni', 'Italian Sausage', 'Bacon', 'Smoked Ham', 'Mozzarella'],
    price: 19.99,
    image: 'meat-lovers',
    category: 'Gourmet',
    nutrition: { calories: '410', protein: '22g', fat: '25g', carbohydrates: '31g', sodium: '1250mg' }
  },
  {
    id: '7',
    name: 'Quattro Formaggi',
    slug: 'quattro-formaggi',
    description: 'A decadent blend of four cheeses: mozzarella, gorgonzola, parmesan, and ricotta.',
    longDescription: 'Our Four Cheese pizza is a cheese lover\'s dream. A white pizza base topped with a rich and creamy blend of fior di latte mozzarella, tangy gorgonzola, sharp parmesan, and smooth ricotta. Pure indulgence.',
    ingredients: ['Mozzarella', 'Gorgonzola', 'Parmesan', 'Ricotta'],
    price: 17.99,
    image: 'four-cheese',
    category: 'Vegetarian',
    nutrition: { calories: '380', protein: '18g', fat: '22g', carbohydrates: '29g', sodium: '820mg' }
  },
  {
    id: '8',
    name: 'Mushroom & Truffle',
    slug: 'mushroom-truffle',
    description: 'Earthy mushrooms, creamy mascarpone, and aromatic white truffle oil.',
    longDescription: 'An elegant and gourmet pizza experience. This white pizza features a mix of wild mushrooms, creamy mascarpone cheese, and is finished with a drizzle of luxurious white truffle oil for an unforgettable aroma and flavor.',
    ingredients: ['Wild Mushrooms', 'Mascarpone', 'Mozzarella', 'White Truffle Oil', 'Parsley'],
    price: 20.99,
    image: 'mushroom-truffle',
    category: 'Gourmet',
    nutrition: { calories: '360', protein: '16g', fat: '20g', carbohydrates: '30g', sodium: '750mg' }
  },
];
