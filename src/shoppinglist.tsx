// 1. Bulletproof - Project Structure 
// Enligt principerna om Projektstruktur skall vi bryta ut funktioner och komponenter till egna filer och placera dom i tillhörande mappar under SRC. 
// Desto mer organiserat desto bättre men det är viktigt att placera filerna så nära användningen som möjligt.  
// Här ligger allt på samma sida.

// 2. Bulletproof - Components
// För närvarande finns alla funktioner och data inom ShoppingList-komponenten.
// Vi kan bryta ner alla funktioner relaterat till hantering av produkter till en egen komponent.

// 5. no-duplicate-imports - borde slås ihop till en import rad
import { useEffect } from "react";
import { useState } from "react";

function ShoppingList() {
  // 3. Clean-code - Variabelnamn - inside är inte ett bra namn på en variabel - skall beskriva vad den innehåller
  const [inside, setShoppingProducts] = useState([
    // 1. ES-lint - Dubbla nycklar - lösningen är att ta bort en av nycklarna
    { product: "banana", product: "banana", quantity: 2 },
    { product: "apple", quantity:  4},
    { product: "carrot", quantity: 1 },
  ]);

// 2. ES-lint - Oanvänd variabel
  var payments = ['Card','Cash']

  const addProduct = (newProduct) => {
    setShoppingProducts([...inside, newProduct]);
  };

  const removeProduct = (indexToRemove) => {
    setShoppingProducts(inside.filter((_, index) => index !== indexToRemove));
  };

// 3. ES-lint - Indentation problem
// 3. Clean-code - Funktionen xamount är inte en bra namngivning - skall beskriva vad den gör
const xamount = (indexToUpdate, newQuantity) => {
setShoppingProducts(
inside.map((item, index) =>
index === indexToUpdate ? { ...item, quantity: newQuantity } : item
)
);; // 4. ES-lint - Ett extra och onödigt semicolon 
}

  useEffect(() => {
    console.log("Antal produkter:", inside.length);
  }, [inside]); // Uppdatera bara när inside ändras

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-md w-full">
        <h2 className="mb-4 text-2xl font-bold">Food List</h2>
        <ul>
          {/*5. Clean-code - mental mapping på l - Explicit är bättre än implicit, lösning är att använda ett mer beskrivande variabelnamn som index*/}
          {inside.map((item, l) => (
            <li key={l} className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <p className="mr-4">Product: {item.product}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className='flex'>
                <button onClick={() => removeProduct(l)} className="ml-2 px-2 py-1 bg-red-500 text-white rounded">Remove</button>
                <button onClick={() => xamount(l, item.quantity + 1)} className="ml-2 px-2 py-1 bg-green-500 text-white rounded">Increase</button>
                <button onClick={() => xamount(l, item.quantity - 1)} className="ml-2 px-2 py-1 bg-yellow-500 text-white rounded">Decrease</button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={() => addProduct({ product: "new product", quantity: 1 })} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Add Product</button>
      </div>
    </div>
  );
}

export default ShoppingList;
