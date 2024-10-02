// export const textureData = {
//     "RAYA-2 ULTRAFINO": {
//         description: "Revestimiento acrílico que otorga al muro una imagen rústica con textura ultrafina. Ideal para interiores y exteriores.",
//         performance: "Raya-2 Ultrafino rinde: 1.8 KG /m²",
//         colors: ["Verde Ibera", "Azul Cielo", "Gris Claro", "Beige", "Amarillo Suave", "Marrón Claro"],
//         idealFor: ["Interiores con acabado suave", "Exteriores que requieren protección sin textura pronunciada", "Áreas residenciales y comerciales de bajo tráfico"]
//     },
//     "RAYA-2 FINO": {
//         description: "Revestimiento acrílico que otorga al muro una imagen rústica con textura fina. Excelente para fachadas y paredes interiores.",
//         performance: "Raya-2 Fino rinde: 2.0 KG /m²",
//         colors: ["Terracota", "Naranja Pastel", "Gris Medio", "Rosa Pálido", "Rojo Tenue", "Lavanda"],
//         idealFor: ["Fachadas residenciales", "Paredes interiores que requieren textura sutil", "Áreas de tráfico moderado"]
//     },
//     "RAYA-2 MEDIANO": {
//         description: "Revestimiento acrílico de textura mediana que proporciona un acabado rústico y duradero. Perfecto para exteriores.",
//         performance: "Raya-2 Mediano rinde: 2.2 KG /m²",
//         colors: ["Coral", "Borgoña", "Blanco Hueso", "Crema", "Azul Grisáceo", "Marrón Oscuro"],
//         idealFor: ["Exteriores de edificios comerciales", "Fachadas que requieren mayor durabilidad", "Áreas de alto tráfico"]
//     },
//     "RAYA-2 GRUESO": {
//         description: "Revestimiento acrílico de textura gruesa que ofrece un acabado rústico pronunciado. Ideal para fachadas con carácter.",
//         performance: "Raya-2 Grueso rinde: 2.5 KG /m²",
//         colors: ["Gris Oscuro", "Gris Pizarra", "Rojo Ladrillo", "Marrón Rojizo", "Azul Acero", "Azul Marino"],
//         idealFor: ["Fachadas de edificios industriales", "Muros exteriores que requieren alta resistencia", "Proyectos arquitectónicos con énfasis en textura"]
//     }
// }
interface Texture {
    description: string;
    performance: string;
    colors: string[];
    idealFor: string[];
}

type TextureData = {
    [key: string]: Texture;
};


export const textureData: TextureData = {
    "RAYA-2 ULTRAFINO": {
        description:
            "Revestimiento acrílico que otorga al muro una imagen rústica con textura ultrafina. Ideal para interiores y exteriores.",
        performance: "Raya-2 Ultrafino rinde: 1.8 KG /m²",
        colors: [
            "Verde Ibera",
            "Azul Cielo",
            "Gris Claro",
            "Beige",
            "Amarillo Suave",
            "Marrón Claro",
        ],
        idealFor: [
            "Interiores con acabado suave",
            "Exteriores que requieren protección sin textura pronunciada",
            "Áreas residenciales y comerciales de bajo tráfico",
        ],
    },
    "RAYA-2 FINO": {
        description:
            "Revestimiento acrílico que otorga al muro una imagen rústica con textura fina. Excelente para fachadas y paredes interiores.",
        performance: "Raya-2 Fino rinde: 2.0 KG /m²",
        colors: [
            "Terracota",
            "Naranja Pastel",
            "Gris Medio",
            "Rosa Pálido",
            "Rojo Tenue",
            "Lavanda",
        ],
        idealFor: [
            "Fachadas residenciales",
            "Paredes interiores que requieren textura sutil",
            "Áreas de tráfico moderado",
        ],
    },
    "RAYA-2 MEDIANO": {
        description:
            "Revestimiento acrílico de textura mediana que proporciona un acabado rústico y duradero. Perfecto para exteriores.",
        performance: "Raya-2 Mediano rinde: 2.2 KG /m²",
        colors: [
            "Coral",
            "Borgoña",
            "Blanco Hueso",
            "Crema",
            "Azul Grisáceo",
            "Marrón Oscuro",
        ],
        idealFor: [
            "Exteriores de edificios comerciales",
            "Fachadas que requieren mayor durabilidad",
            "Áreas de alto tráfico",
        ],
    },
    "RAYA-2 GRUESO": {
        description:
            "Revestimiento acrílico de textura gruesa que ofrece un acabado rústico pronunciado. Ideal para fachadas con carácter.",
        performance: "Raya-2 Grueso rinde: 2.5 KG /m²",
        colors: [
            "Gris Oscuro",
            "Gris Pizarra",
            "Rojo Ladrillo",
            "Marrón Rojizo",
            "Azul Acero",
            "Azul Marino",
        ],
        idealFor: [
            "Fachadas de edificios industriales",
            "Muros exteriores que requieren alta resistencia",
            "Proyectos arquitectónicos con énfasis en textura",
        ],
    },
}