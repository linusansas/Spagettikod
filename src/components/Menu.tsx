import { Link } from "react-router-dom";

export function Menu() {
   return (
      <aside className="bg-gray-200 w-full h-auto md:w-20 md:h-screen md:flex md:flex-col md:justify-between fixed left-0 top-0 overflow-y-auto">
         <div className="flex flex-wrap justify-center md:justify-between items-center p-2 md:flex-col">
            <Link to="/page1">
               <p>1</p>
            </Link>
            <Link to="/page2">
               <p>2</p>
            </Link>
            <Link to="/page3">
               <p>3</p>
            </Link>
            <Link to="/page4">
               <p>4</p>
            </Link>
            <Link to="/page5">
               <p>5</p>
            </Link>
            <Link to="/page6">
               <p>6</p>
            </Link>
            <Link to="/page7">
               <p>7</p>
            </Link>
            <Link to="/page8">
               <p>8</p>
            </Link>
            <Link to="/page9">
               <p>9</p>
            </Link>
            <Link to="/page10">
               <p>10</p>
            </Link>
         </div>
      </aside>
   );
}
