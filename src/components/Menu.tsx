import { Link } from "react-router-dom";

export function Menu() {
   return (
      <aside className="bg-gray-200 w-full h-auto md:w-20 md:h-screen md:flex md:flex-col md:justify-between fixed left-0 top-0 overflow-y-auto">
         <div className="flex flex-wrap justify-center md:justify-between items-center p-2 md:flex-col">
            <Link to="/shoppinglist">
               <p>Shop</p>
            </Link>
         </div>
      </aside>
   );
}
