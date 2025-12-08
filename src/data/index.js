import { getGaleriaData } from "./pages/Galeria";
import { getHombresData } from "./pages/hombre.js";
import { getMujeresData } from "./pages/mujeres.js";

export const getData = (page) => {
    console.log("Getting Context Data for page", page);

    let contextData = {};

    switch (page) {

        case "/index.html":
            contextData = getGaleriaData();
            break;

        case "/hombre.html":
            contextData = getHombresData ? getHombresData() : {};
            break;

        case "/mujere.html":
            contextData = getMujeresData ? getMujeresData() : {};
            break;

        default:
            contextData = {};
            break;
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