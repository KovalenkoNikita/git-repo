export class Product {
  imgUrl: string;
  title: string;
  price: number;
  filters: {
    gender: string;
    category: string;
    color: string;
    size: string[];
    brand: string;
  };
}
