export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: "Fertilizantes" | "Sedas" | "Bandejas" | "Bongs" | "Macetas" | "Sustratos";
}

export const products: Product[] = [
  {
    id: 1,
    name: "Comadreja 100% Orgánico",
    price: 4200,
    image: "/img/fertilizante-organico-comadreja.jpg",
    description: "Fertilizante orgánico premium para todas las etapas",
    category: "Fertilizantes"
  },
  {
    id: 2,
    name: "Sedas OCB Slim",
    price: 800,
    image: "/img/sedas-1.jpg",
    description: "Papel de liar OCB ultra fino",
    category: "Sedas"
  },
  {
    id: 3,
    name: "Bandeja de Germinación",
    price: 4500,
    image: "/img/bandeja-1.jpg",
    description: "Bandeja profesional para germinación de semillas",
    category: "Bandejas"
  },
  {
    id: 4,
    name: "Sustrato Premium Mix",
    price: 1800,
    image: "/img/sustrato-1.jpg",
    description: "Mezcla de sustrato premium para cultivo",
    category: "Sustratos"
  },
  {
    id: 5,
    name: "Fertilizante Floración",
    price: 3200,
    image: "/img/fertilizante-2.jpg",
    description: "Especial para etapa de floración",
    category: "Fertilizantes"
  },
  {
    id: 6,
    name: "Sedas Raw King Size",
    price: 1200,
    image: "/img/sedas-2.jpg",
    description: "Papel Raw tamaño king size",
    category: "Sedas"
  },
  {
    id: 7,
    name: "Bong de Vidrio Premium",
    price: 2800,
    image: "/img/bong-1.jpg",
    description: "Bong de vidrio resistente y portátil",
    category: "Bongs"
  },
  {
    id: 8,
    name: "Sustrato Coco Perlita",
    price: 2200,
    image: "/img/sustrato-2.jpg",
    description: "Mezcla de fibra de coco y perlita",
    category: "Sustratos"
  },
  {
    id: 9,
    name: "Fertilizante Enraizante",
    price: 1900,
    image: "/img/fertilizante-3.jpg",
    description: "Estimulador de raíces para esquejes",
    category: "Fertilizantes"
  },
  {
    id: 10,
    name: "Sedas Elements Rice",
    price: 950,
    image: "/img/sedas-3.jpg",
    description: "Papel de arroz ultra delgado",
    category: "Sedas"
  },
  {
    id: 11,
    name: "Maceta Textil 20L",
    price: 3500,
    image: "/img/maceta-1.jpg",
    description: "Maceta de tela transpirable para cultivo",
    category: "Macetas"
  },
  {
    id: 12,
    name: "Sustrato Turba Rubia",
    price: 1600,
    image: "/img/sustrato-3.jpg",
    description: "Turba rubia de alta calidad",
    category: "Sustratos"
  },
  {
    id: 13,
    name: "Fertilizante Calcio-Magnesio",
    price: 2800,
    image: "/img/fertilizante-4.jpg",
    description: "Suplemento de calcio y magnesio",
    category: "Fertilizantes"
  },
  {
    id: 14,
    name: "Sedas Smoking Brown",
    price: 750,
    image: "/img/sedas-4.jpg",
    description: "Papel marrón natural sin blanquear",
    category: "Sedas"
  },
  {
    id: 15,
    name: "Bong Cerámico Decorado",
    price: 5200,
    image: "/img/bong-2.jpg",
    description: "Bong de cerámica con diseños únicos",
    category: "Bongs"
  },
  {
    id: 16,
    name: "Sustrato Perlita Expandida",
    price: 1400,
    image: "/img/sustrato-4.jpg",
    description: "Perlita para mejorar drenaje",
    category: "Sustratos"
  },
  {
    id: 17,
    name: "Fertilizante Potasio Plus",
    price: 3600,
    image: "/img/fertilizante-5.jpg",
    description: "Alto contenido en potasio para floración",
    category: "Fertilizantes"
  },
  {
    id: 18,
    name: "Sustrato Vermiculita",
    price: 1750,
    image: "/img/sustrato-5.jpg",
    description: "Vermiculita para retención de humedad",
    category: "Sustratos"
  },

];