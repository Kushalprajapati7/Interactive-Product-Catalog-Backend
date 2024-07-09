export interface IProduct extends Document {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  category: string;
}
