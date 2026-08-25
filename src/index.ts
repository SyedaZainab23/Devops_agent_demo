interface Item {
  id: string;
  name: string;
  price: number;
}

export function createItem(id: string, name: string, price: number): Item {
  return { id, name, price };
}
 functio
