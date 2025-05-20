import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import FrameworkList from "./FrameworkList";
import './tailwind.css';
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";
import ProductList from "./ProductList";

createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkListSearchFilter/>
            <ResponsiveDesign/> */}
            <ProductList/>

        </div>
    )