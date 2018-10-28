// NOTE: API に従って定義する
export interface Restaurant {
  id: string;
  name: string;
  cal: number;
  url: string;
  address: string;
  lat: number;
  lng: number;
  img_url: string;
}

export interface RestaurantResponse {
  restaurants: Restaurant[];
}
