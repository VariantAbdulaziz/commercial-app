export interface Product{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "nike",
    price: 60,
    imageUrl: "assets/images/nike.jpeg",
    description: "this is the shoe that you always dreamed of having!",
  },
  {
    id: 2,
    name: "puma",
    price: 7,
    imageUrl: "assets/images/puma.png",
    description: "this is the shoe that you always dreamed of having!",
  },
  {
    id: 3,
    name: "jordan",
    price: 25,
    imageUrl: "assets/images/jordan.jpg",
    description: "this is the shoe that you always dreamed of having!",
  },
  {
    id: 4,
    name: "jordan-v1.0",
    price: 2,
    imageUrl: "assets/images/jordan.jpg",
    description: "this is the shoe that you always dreamed of having!",
  },

];
