import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import Artikel from "./Artikel";

import './custom.css';

createRoot(document.getElementById("root"))
    .render(
        <Container>
            <Artikel/>
        </Container>
    )