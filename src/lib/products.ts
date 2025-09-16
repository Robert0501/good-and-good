import type { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Margherita Clasic',
    slug: 'margherita-classic',
    description: 'Clasicul nemuritor cu mozzarella proaspătă, roșii San Marzano și busuioc.',
    longDescription: 'Un gust adevărat al Napoli, Margherita Clasic este o dovadă a ingredientelor simple, de înaltă calitate. Folosim roșii autentice San Marzano pentru sos, mozzarella fior di latte cremoasă, un strop de ulei de măsline extra virgin și frunze proaspete de busuioc.',
    ingredients: ['Roșii San Marzano', 'Mozzarella Proaspătă', 'Busuioc', 'Ulei de Măsline Extra Virgin'],
    price: { Normal: 14.99, Large: 18.99, Party: 25.99 },
    image: 'margherita',
    category: 'Clasice',
    nutrition: { calories: '250', protein: '12g', fat: '10g', carbohydrates: '28g', sodium: '640mg' }
  },
  {
    id: '2',
    name: 'Festin Pepperoni',
    slug: 'pepperoni-feast',
    description: 'Un strat generos de pepperoni picant și mozzarella bogată.',
    longDescription: 'Pentru cei care iubesc un pic de iuțeală, Festinul nostru Pepperoni este încărcat cu felii de pepperoni premium, picante, peste un pat de sos de roșii și brânză mozzarella topită. Un favorit universal iubit.',
    ingredients: ['Sos de Roșii', 'Mozzarella', 'Pepperoni Picant'],
    price: { Normal: 16.99, Large: 21.99, Party: 29.99 },
    image: 'pepperoni',
    category: 'Clasice',
    nutrition: { calories: '320', protein: '15g', fat: '18g', carbohydrates: '30g', sodium: '980mg' }
  },
  {
    id: '3',
    name: 'Grădina de Legume',
    slug: 'garden-veggie',
    description: 'Un amestec colorat de ardei gras proaspăt, ceapă roșie, măsline și ciuperci.',
    longDescription: 'O încântare pentru vegetarieni! Pizza noastră Grădina de Legume este acoperită cu un sortiment vibrant de legume proaspete, inclusiv ardei gras crocant, ceapă roșie dulce, măsline negre savuroase și ciuperci, toate pe baza noastră clasică de roșii și mozzarella.',
    ingredients: ['Ardei Gras', 'Ceapă Roșie', 'Măsline Negre', 'Ciuperci', 'Mozzarella'],
    price: { Normal: 15.99, Large: 20.99, Party: 27.99 },
    image: 'veggie',
    category: 'Vegetariene',
    nutrition: { calories: '230', protein: '10g', fat: '8g', carbohydrates: '32g', sodium: '590mg' }
  },
  {
    id: '4',
    name: 'Pui BBQ',
    slug: 'bbq-chicken',
    description: 'Sos BBQ acrișor, pui la grătar, ceapă roșie și coriandru proaspăt.',
    longDescription: 'O opțiune afumată și savuroasă, această pizza conține pui fraged la grătar, ceapă roșie tăioasă și coriandru proaspăt pe o bază de sos barbecue acrișor, acoperită cu brânzeturi mozzarella și provolone.',
    ingredients: ['Sos BBQ', 'Pui la Grătar', 'Ceapă Roșie', 'Coriandru', 'Mozzarella'],
    price: { Normal: 18.99, Large: 24.99, Party: 32.99 },
    image: 'bbq-chicken',
    category: 'Gourmet',
    nutrition: { calories: '350', protein: '20g', fat: '14g', carbohydrates: '38g', sodium: '890mg' }
  },
  {
    id: '5',
    name: 'Paradis Hawaiian',
    slug: 'hawaiian-paradise',
    description: 'O combinație dulce și savuroasă de ananas suculent și șuncă afumată.',
    longDescription: 'Iubește-o sau urăște-o, Paradisul nostru Hawaiian este perfect echilibrat. Bucățile dulci și suculente de ananas și șunca afumată savuroasă creează un contrast delicios care a cucerit legiuni de fani.',
    ingredients: ['Sos de Roșii', 'Mozzarella', 'Șuncă Afumată', 'Ananas'],
    price: { Normal: 16.99, Large: 21.99, Party: 29.99 },
    image: 'hawaiian',
    category: 'Clasice',
    nutrition: { calories: '290', protein: '14g', fat: '11g', carbohydrates: '35g', sodium: '910mg' }
  },
  {
    id: '6',
    name: 'Iubitorii de Carne',
    slug: 'meat-lovers',
    description: 'Plină cu pepperoni, cârnați italieni, bacon și șuncă afumată.',
    longDescription: 'Un festin absolut pentru carnivori. Această pizza este încărcată cu patru tipuri de carne: pepperoni picant, cârnați italieni savuroși, bacon crocant și șuncă afumată. O masă cu adevărat copioasă și satisfăcătoare.',
    ingredients: ['Pepperoni', 'Cârnați Italieni', 'Bacon', 'Șuncă Afumată', 'Mozzarella'],
    price: { Normal: 19.99, Large: 25.99, Party: 34.99 },
    image: 'meat-lovers',
    category: 'Gourmet',
    nutrition: { calories: '410', protein: '22g', fat: '25g', carbohydrates: '31g', sodium: '1250mg' }
  },
  {
    id: '7',
    name: 'Quattro Formaggi',
    slug: 'quattro-formaggi',
    description: 'Un amestec decadent de patru brânzeturi: mozzarella, gorgonzola, parmezan și ricotta.',
    longDescription: 'Pizza noastră Patru Brânzeturi este visul oricărui iubitor de brânză. O bază de pizza albă acoperită cu un amestec bogat și cremos de mozzarella fior di latte, gorgonzola picantă, parmezan tăios și ricotta fină. Indulgență pură.',
    ingredients: ['Mozzarella', 'Gorgonzola', 'Parmezan', 'Ricotta'],
    price: { Normal: 17.99, Large: 23.99, Party: 31.99 },
    image: 'four-cheese',
    category: 'Vegetariene',
    nutrition: { calories: '380', protein: '18g', fat: '22g', carbohydrates: '29g', sodium: '820mg' }
  },
  {
    id: '8',
    name: 'Ciuperci & Trufe',
    slug: 'mushroom-truffle',
    description: 'Ciuperci de pădure, mascarpone cremos și ulei de trufe albe aromat.',
    longDescription: 'O experiență de pizza elegantă și gourmet. Această pizza albă prezintă un amestec de ciuperci sălbatice, brânză mascarpone cremoasă și este finisată cu un strop de ulei luxos de trufe albe pentru o aromă și un gust de neuitat.',
    ingredients: ['Ciuperci Sălbatice', 'Mascarpone', 'Mozzarella', 'Ulei de Trufe Albe', 'Pătrunjel'],
    price: { Normal: 20.99, Large: 26.99, Party: 36.99 },
    image: 'mushroom-truffle',
    category: 'Gourmet',
    nutrition: { calories: '360', protein: '16g', fat: '20g', carbohydrates: '30g', sodium: '750mg' }
  },
];
