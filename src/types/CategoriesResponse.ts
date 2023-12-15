export type categoriesResponse = {
  id: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
};

export type OffersResponse = {
  id: string;
  name: string;
  title: string;
  image: string;
  images: string;
  oldPrice: number;
  newPrice: number;
  price: number;
};

export type DemandResponse = {
  id: string;
  name: string;
  title: string;
  image: string;
  images: string;
  price: string;
};

export type LatestProducts = {
  id: string;
  name: string;
  image: string[];
};

export type Products = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string;
  brand: string;
  model: string;
  categoryId: string;
  oldPrice: number;
  newPrice: number;
};
