import { getGaleriaData } from "./pages/Galeria";
import { getEventosData } from "./pages/Eventos";

export const getData = (page) => {
    console.log("Getting Context Data for page", page);
    let contextData = {};
    switch (page) {
        case "/index.html":
            contextData = getGaleriaData();
            break;
        case "/eventos.html":
            contextData = getEventosData();
            break;
        default:
            contextData = { ...contextData };
    }
    return { ...contextData, ...getAllPageContext() };
};


function getAllPageContext() {
    return {
        currentYear: new Date().getFullYear().toString(),
        lastBuild: new Date().toLocaleString()
    }
}