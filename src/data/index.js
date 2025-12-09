import { getGaleriaData } from "./pages/Galeria";
import { getHombresData } from "./pages/hombre.js";
import { getMujeresData } from "./pages/mujeres.js";
import { getEventosData } from "./pages/Eventos";

export const getData = (page) => {
    console.log("Getting Context Data for page", page);

    let contextData = {};

    switch (page) {
        case "/galeria.html":
            contextData = getGaleriaData();
            break;

        case "/eventos.html":
            contextData = getEventosData();
            break;

        case "/hombre.html":
            contextData = getHombresData ? getHombresData() : {};
            break;

        case "/mujere.html":
            contextData = getMujeresData ? getMujeresData() : {};
            break;

        default:
            contextData = {};
    }

    return {
        ...contextData,
        ...getAllPageContext()
    };
};

function getAllPageContext() {
    return {
        currentYear: new Date().getFullYear().toString(),
        lastBuild: new Date().toLocaleString()
    };
}
