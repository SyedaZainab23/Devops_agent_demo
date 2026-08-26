 interface Item {
   id: string;
   name: string;
   price: number;
   trackingId: string;
 }

export function createItem(id: string, name: string, price: number): Item {
  return { id, name, price, trackingId: "ABC-123" };
}

console.log(createItem("1", "Widget", 9.99));
