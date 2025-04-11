import { Product } from "@prisma/client";

export type CardTypes = {
  id: string;
  title: string;
  brand: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

export type userType = {
  id: number;
  name: string;
  image: string;
  angle: number;
}[];

export type ProductType = {
  message: {
    allProducts: Product[];
    count: number;
  };
};
export type SingleProductType = {
  getSingleFetch: Product;
};

export type ProductOrder = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
};

export type CreatedComment = {
  id: string;
  productId: string;
  userId: string;
  value: number;
  comment: string | null;
  createdAt: Date;
  user: {
    id: string;
    name: string | null;
    image: string | null;
  };
};
