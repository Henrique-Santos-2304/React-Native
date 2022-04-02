export interface Icons {
  icon: "shopping-bag" | "coffee" | "dollar-sign" |
   "crosshair" | "heart" | "book" | "home" | "clipboard" | string ;
}

export interface CategoryItemsProps extends Icons {
  key: string;
  name: string;
  color: string;
}

export const categories: CategoryItemsProps[] = [
  {key: "purchase", name: "Compras", icon:"shopping-cart", color: "#5636d3"},
  {key: "sale", name: "Vendas", icon:"shopping-bag", color: "#15BBAE"},
  {key: "food", name: "Alimentação", icon: "coffee", color: "#ff872c"},
  {key: "salary", name: "Salário", icon: "dollar-sign", color: "#0CB422"},
  {key: "car", name: "Carro", icon: "crosshair", color: "#e83f5b"},
  {key: "leisure", name: "lazer", icon: "heart", color: "#26195c"},
  {key: "studies", name: "Estudos", icon: "book", color: "#9c001a"},
  {key: "home", name: "Casa", icon: "home", color: "#CA0FC8"},
  {key: "service", name: "Serviços", icon: "dollar-sign", color: "#469A51"},
  {key: "freelance", name: "Freelance", icon: "clipboard", color: "#BBB515"},
]