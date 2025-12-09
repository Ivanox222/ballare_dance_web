import { getGaleriaData } from "./pages/Galeria";

// Define los datos específicos del Hero Panel
const getHeroPanelData = () => {
    return {
        // Objeto que coincida con el nombre que usarás en home.hbs
        hero: { 
            imageUrl: "/images/hero-background.jpg",
            title: "Soluciones de Alto Rendimiento",
            subtitle: "La plataforma que su negocio necesita, hoy.",
            ctaText: "Ver Nuestros Servicios",
            ctaUrl: "/servicios.html"
        }
    };
};

export const getData = (page) => {
    console.log("Getting Context Data for page", page);
    let contextData = {};

    switch (page) {
        case "/index.html":
            // Combina los datos de la Galería y los datos del Hero Panel
            contextData = {
                ...getGaleriaData(),
                ...getHeroPanelData() // AÑADIDO: Incluye el objeto de datos del Hero
            };
            break;
        default:
            contextData = { ...contextData };
    }

    // Combina los datos específicos de la página con los datos globales (año, build)
    return { ...contextData, ...getAllPageContext() };
}

function getAllPageContext() {
    return {
        currentYear: new Date().getFullYear().toString(),
        lastBuild: new Date().toLocaleString()
    }
}