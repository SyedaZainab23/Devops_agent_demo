interface Item {
  id: string;
  name: string;
  price: number;
}

export function createItem(id: string, name: string, price: number): Item {
  return { id, name, price };
}
export function createItem(id: string, name: string, price: number): Item {
  return { id, name, price, trackingId: "ABC-123" }; // ← TS error!
console.log(createItem("1", "Widget", 9.99));
