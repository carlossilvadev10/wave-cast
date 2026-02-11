import brandIcon1 from "@/public/brand-icon-1.png";
import brandIcon2 from "@/public/brand-icon-2.png";
import brandIcon3 from "@/public/brand-icon-3.png";
import brandIcon4 from "@/public/brand-icon-4.png";
import brandIcon5 from "@/public/brand-icon-5.png";
import topListens1 from "@/public/top-listens-1.png";
import topListens2 from "@/public/top-listens-2.png";
import topListens3 from "@/public/top-listens-3.png";
import topListens4 from "@/public/top-listens-4.png";
import host1 from "@/public/host-profile-1.png";
import host2 from "@/public/host-profile-2.png";
import host3 from "@/public/host-profile-3.png";
import host4 from "@/public/host-profile-4.png";
import host5 from "@/public/host-profile-5.png";
import host6 from "@/public/host-profile-6.png";
import host7 from "@/public/host-profile-7.png";
import host8 from "@/public/host-profile-8.png";
import host9 from "@/public/host-profile-9.png";
import host10 from "@/public/host-profile-10.png";
import test1 from "@/public/testimonial-card-1.png";
import test2 from "@/public/testimonial-card-2.png";
import test3 from "@/public/testimonial-card-3.png";
import test4 from "@/public/testimonial-card-4.png";
import test5 from "@/public/testimonial-card-5.png";
import musicWavesImg from "@/public/music-waves.png";
import { StaticImageData } from "next/image";

export type NavLink = {
    label: string;
    href: string;
    dropdown?: {
        label: string;
        href: string;
    }[];
}

export type WhyChooseUsItem = {
    id: number;
    text: string;
}

export type Host = {
    id: number;
    img: StaticImageData;
    name: string;
    role: string;
};

export type FooterLink = {
    label: string;
    href: string;
    icon?: string;
}

export type EpisodeProps = {
    id: number;
    image: string;
    host: string;
    guest: string;
    time: string;
    title: string;
    description: string;
    details: string;
    episode: string;
    tags: string[];
    transcript: string;
    quiz: {
        question: string;
        answer: string;
    }[];
}

export type PricingFeature = {
    text: string;
    enabled: boolean;
}

export type PricingPlan = {
    id: number;
    name: string;
    monthlyPrice: number;
    yearlyPrice: number;
    description: string;
    features: PricingFeature[];
    featured?: boolean;
    featuredImage?: StaticImageData;
}

export type ContactCardData = {
    id: number;
    icon: string;
    title: string;
    lines: string[];
    linkText: string;
}

export type BlogProps = {
    id: number;
    image: string;
    title: string;
    description: string;
    details: string;
    type: string;
    date: string;
    author: string;
    tags: string[];
    quiz: {
        question: string;
        answer: string;
    }[];
}

export const brandIcons = [
    {
        id: 1,
        src: brandIcon1,
        alt: "brand-icon-1",
    },
    {
        id: 2,
        src: brandIcon2,
        alt: "brand-icon-2",
    },
    {
        id: 3,
        src: brandIcon3,
        alt: "brand-icon-3",
    },
    {
        id: 4,
        src: brandIcon4,
        alt: "brand-icon-4",
    },
    {
        id: 5,
        src: brandIcon5,
        alt: "brand-icon-5",
    },
]

export const navLinks: NavLink[] = [
    {
        label: "Inicio",
        href: "/",
    },
    {
        label: "Episodios",
        href: "/episode",
        dropdown: [
            {
                label: "Más recientes",
                href: "/episode/latest-episode",
            },
            {
                label: "Mis favoritos",
                href: "/episode/favorite-episode",
            },
            {
                label: "Detalles",
                href: "/episode/2",
            },
        ]
    },
    {
        label: "Blogs",
        href: "/blog",
    },
    {
        label: "Más",
        href: "/about",
        dropdown: [
            {
                label: "Acerca de",
                href: "/about",
            },
            {
                label: "Nuestros hosts",
                href: "/host-profile",
            },
            {
                label: "Planes",
                href: "/pricing",
            },
            {
                label: "Preguntas frecuentes",
                href: "/faq",
            },
            {
                label: "Contáctanos",
                href: "/contact",
            },
            {
                label: "Error 404",
                href: "/not-found",
            },
        ]
    }
]

export const topListensData = [
    {
        id: 1,
        title: "Escucharte lo cambia todo por dentro",
        img: topListens1,
        episode: "Episodio 06",
        hostName: "Devon Lane",
    },
    {
        id: 2,
        title: "Charlas incómodas (pero necesarias)",
        img: topListens2,
        episode: "Episodio 09",
        hostName: "Harry McKenzie",
    },
    {
        id: 3,
        title: "Grandes decisiones, historias reales",
        img: topListens3,
        episode: "Episodio 14",
        hostName: "Kenneth Hayes",
    },
    {
        id: 4,
        title: "El arte de crear conexiones significativas",
        img: topListens4,
        episode: "Episodio 18",
        hostName: "Evans Stewart",
    },
]

export const episodeSortOptions = [
    {
        value: "recent",
        label: "Más recientes"
    },
    {
        value: "oldest",
        label: "Más antiguos"
    },
    {
        value: "popular",
        label: "Más populares"
    },
    {
        value: "title-asc",
        label: "Título: A - Z"
    },
    {
        value: "title-desc",
        label: "Título: Z - A"
    },
]

export const blogSortOptions = [
    {
        value: "recent",
        label: "Más recientes"
    },
    {
        value: "oldest",
        label: "Más antiguos"
    },
    {
        value: "title-asc",
        label: "Título: A - Z"
    },
    {
        value: "title-desc",
        label: "Título: Z - A"
    },
]

export const hostSortOptions = [
    {
        value: "name-asc",
        label: "Nombre: A - Z"
    },
    {
        value: "name-desc",
        label: "Nombre: Z - A"
    },
];

export const whyChooseUsData: WhyChooseUsItem[] = [
    {
        id: 1,
        text: "Contenido auténtico y de calidad",
    },
    {
        id: 2,
        text: "Expertos en cada episodio",
    },
    {
        id: 3,
        text: "Comunidad activa y comprometida",
    },
    {
        id: 4,
        text: "Nuevos episodios semanales",
    },
]

export const recentEpisodesData = [
    {
        id: 1,
        host: "Devon Lane",
        duration: "1hr 06m",
        title: "El futuro de la inteligencia artificial",
        description: "Exploramos cómo la IA está transformando industrias y qué nos espera en los próximos años.",
        episodeNumber: 23,
        featured: true,
        image: "/episode-card-banner.png"
    },
    {
        id: 2,
        host: "Jordan Davis",
        duration: "1hr 22m",
        title: "Productividad sin estrés en la era digital",
        description: "Estrategias prácticas para mantener el enfoque y el equilibrio en un mundo hiperconectado.",
        episodeNumber: 24,
        featured: false
    },
    {
        id: 3,
        host: "Kamala Holquist",
        duration: "1hr 22m",
        title: "Creatividad: del bloqueo a la inspiración",
        description: "Descubre técnicas para superar bloqueos creativos y mantener el flujo de ideas.",
        episodeNumber: 25,
        featured: false
    }
]

export const hostProfilesData: Host[] = [
    {
        id: 1,
        img: host1,
        name: "Kamala Holquist",
        role: "Host principal",
    },
    {
        id: 2,
        img: host2,
        name: "Devon Lane",
        role: "Productor ejecutivo",
    },
    {
        id: 3,
        img: host3,
        name: "Jordan Davis",
        role: "Creadora de contenido",
    },
    {
        id: 4,
        img: host4,
        name: "Harry McKenzie",
        role: "Cantante profesional",
    },
    {
        id: 5,
        img: host5,
        name: "Kenneth Hayes",
        role: "Productor técnico",
    },
    {
        id: 6,
        img: host6,
        name: "Evans Stewart",
        role: "Director creativo",
    },
    {
        id: 7,
        img: host7,
        name: "Sofía Morales",
        role: "Host invitada",
    },
    {
        id: 8,
        img: host8,
        name: "Lucía Bennett",
        role: "Editora de audio",
    },
    {
        id: 9,
        img: host9,
        name: "Valeria Cruz",
        role: "Narradora",
    },
    {
        id: 10,
        img: host10,
        name: "Mateo Brooks",
        role: "Periodista",
    },
]

export const testimonialData = [
    {
        id: 1,
        img: test1,
        testimonial: "Este podcast cambió por completo mis mañanas. Las conversaciones, la profundidad y la calidad son excepcionales.",
        name: "Valentina Williams",
        role: "Emprendedora Digital",
    },
    {
        id: 2,
        img: test2,
        testimonial: "Cada episodio se siente cuidadosamente pensado. Es inspirador, relajante y motivador al mismo tiempo.",
        name: "Matthew Warren",
        role: "Creador de Contenido",
    },
    {
        id: 3,
        img: test3,
        testimonial: "He aprendido muchísimo solo escuchando en el camino al trabajo. Las conversaciones son profundas y bien estructuradas.",
        name: "Sophia Lane",
        role: "Coach de Vida",
    },
    {
        id: 4,
        img: test4,
        testimonial: "Los hosts crean una atmósfera tan cálida y auténtica que sientes que estás parte de la conversación.",
        name: "Diego Brown",
        role: "Psicólogo",
    },
    {
        id: 5,
        img: test5,
        testimonial: "Contenido de alta calidad, narrativa envolvente y valor consistente en cada episodio. Totalmente recomendado.",
        name: "Camila Parker",
        role: "Periodista",
    },
]

export const footerPages: FooterLink[] = [
    {
        label: "Inicio",
        href: "/"
    },
    {
        label: "Acerca de",
        href: "/about"
    },
    {
        label: "Episodios",
        href: "/episode"
    },
    {
        label: "Blog",
        href: "/blogs"
    },
]

export const footerContact: FooterLink[] = [
    {
        label: "+51 987 654 321",
        href: "tel:+51987654321", icon: "bi bi-telephone"
    },
    {
        label: "info@wavecast.com",
        href: "mailto:info@wavecast.com", icon: "bi bi-envelope"
    },
    {
        label: "Lima, Perú",
        href: "#", icon: "bi bi-geo-alt"
    },
]

export const footerResources: FooterLink[] = [
    {
        label: "Preguntas frecuentes",
        href: "/faqs"
    },
    {
        label: "Colabora con nosotros",
        href: "/collaborate"
    },
    {
        label: "Conviértete en sponsor",
        href: "/sponsors"
    },
    {
        label: "Centro de ayuda",
        href: "/help"
    },
]

export const aboutFeatures = [
    {
        icon: "bi-people",
        title: "Empoderamos oyentes",
        description: "Creamos contenido que inspira, educa y transforma vidas"
    },
    {
        icon: "bi-chat-heart",
        title: "Construimos comunidad",
        description: "Un espacio donde las voces auténticas encuentran su lugar"
    }
]

export const statsData = [
    {
        value: 200,
        suffix: "K+",
        label: "Episodios"
    },
    {
        value: 595,
        suffix: "K+",
        label: "Suscriptores"
    },
    {
        value: 150,
        suffix: "M+",
        label: "Oyentes felices"
    },
    {
        value: 18,
        suffix: "+",
        label: "Premios"
    }
]

export const pricingPlans: PricingPlan[] = [
    {
        id: 1,
        name: "Gratuito",
        monthlyPrice: 0,
        yearlyPrice: 0,
        description: "Descubre grandes podcasts y explora nuevas ideas sin costo.",
        features: [
            { text: "Últimos episodios gratuitos", enabled: true },
            { text: "Presentadores seleccionados", enabled: true },
            { text: "Acceso a contenido gratuito", enabled: true },
            { text: "Disponible en todas las plataformas", enabled: true },
            { text: "Suscripción hasta 20 canales", enabled: false },
            { text: "Episodios ilimitados", enabled: false }
        ]
    },
    {
        id: 2,
        name: "Premium",
        monthlyPrice: 29,
        yearlyPrice: 240,
        description: "Desbloquea podcasts premium y disfruta de escucha sin anuncios e ininterrumpida.",
        featured: true,
        featuredImage: musicWavesImg,
        features: [
            { text: "Últimos episodios y premium", enabled: true },
            { text: "Presentadores expertos seleccionados", enabled: true },
            { text: "Acceso completo al contenido", enabled: true },
            { text: "Disponible en todas las plataformas", enabled: true },
            { text: "Suscripción hasta 20 canales", enabled: true },
            { text: "Episodios ilimitados", enabled: true }
        ]
    },
    {
        id: 3,
        name: "Especial",
        monthlyPrice: 99,
        yearlyPrice: 830,
        description: "La experiencia definitiva para verdaderos entusiastas y creadores de podcasts.",
        features: [
            { text: "Todos los episodios premium y exclusivos", enabled: true },
            { text: "Anfitriones de primer nivel", enabled: true },
            { text: "Biblioteca completa de contenido", enabled: true },
            { text: "Acceso multiplataforma", enabled: true },
            { text: "Suscripción hasta 20 canales", enabled: true },
            { text: "Episodios ilimitados", enabled: true }
        ]
    }
]

export const pricingFaqsData = [
    {
        id: 1,
        question: "¿Puedo cambiar de plan en cualquier momento?",
        answer:
        "Sí, puedes actualizar, bajar o cambiar tu plan cuando lo desees desde tu panel de usuario."
    },
    {
        id: 2,
        question: "¿Qué incluye cada plan?",
        answer:
        "Cada plan ofrece diferentes límites y funcionalidades. Puedes revisar el detalle completo dentro de cada tarjeta de precios."
    },
    {
        id: 3,
        question: "¿Hay contratos a largo plazo?",
        answer:
        "No. Todos los planes son flexibles y puedes cancelar cuando quieras."
    },
    {
        id: 4,
        question: "¿Qué métodos de pago aceptan?",
        answer:
        "Aceptamos tarjetas de crédito, débito y otros métodos de pago digitales."
    },
    {
        id: 5,
        question: "¿Puedo cancelar mi suscripción?",
        answer:
        "Sí, puedes cancelar tu suscripción en cualquier momento sin cargos adicionales."
    },
    {
        id: 6,
        question: "¿Qué significa el descuento anual?",
        answer:
        "Al elegir facturación anual obtienes hasta un 30% de ahorro frente al pago mensual."
    },
    {
        id: 7,
        question: "¿Ofrecen reembolsos?",
        answer:
        "Si no estás satisfecho, contáctanos dentro de los primeros días para evaluar un posible reembolso."
    },
    {
        id: 8,
        question: "¿Puedo empezar con un plan gratuito?",
        answer:
        "Sí, contamos con un plan gratuito para que pruebes la plataforma antes de actualizar."
    },
    {
        id: 9,
        question: "¿Qué pasa si supero los límites de mi plan?",
        answer:
        "Te notificaremos y podrás actualizar tu plan para continuar sin interrupciones."
    },
    {
        id: 10,
        question: "¿Mis datos están seguros?",
        answer:
        "Sí, utilizamos medidas de seguridad estándar para proteger tu información y tus pagos."
    }
]

export const generalFaqsData = [
    {
        id: 1,
        question: "¿Qué es WaveCast y qué tipo de contenido ofrecen?",
        answer: "WaveCast es un podcast que explora conversaciones profundas con expertos, creadores y pensadores de diversas áreas. Ofrecemos episodios sobre tecnología, cultura, negocios, desarrollo personal y mucho más."
    },
    {
        id: 2,
        question: "¿Con qué frecuencia publican nuevos episodios?",
        answer: "Publicamos nuevos episodios cada semana, generalmente los martes. Los suscriptores premium reciben acceso anticipado a los episodios 24 horas antes del lanzamiento público."
    },
    {
        id: 3,
        question: "¿Dónde puedo escuchar WaveCast?",
        answer: "Puedes escuchar WaveCast en todas las plataformas principales: Spotify, Apple Podcasts, Google Podcasts, YouTube, y directamente en nuestro sitio web. También tenemos una app móvil disponible para iOS y Android."
    },
    {
        id: 4,
        question: "¿Es necesario registrarme para escuchar episodios?",
        answer: "No, los episodios gratuitos están disponibles para todos sin necesidad de registro. Sin embargo, crear una cuenta gratuita te permite guardar favoritos, crear listas de reproducción y recibir recomendaciones personalizadas."
    },
    {
        id: 5,
        question: "¿Qué diferencia hay entre el plan gratuito y premium?",
        answer: "El plan gratuito incluye acceso a todos los episodios con anuncios. El plan premium elimina anuncios, ofrece acceso anticipado a episodios, contenido exclusivo, transcripciones completas y la posibilidad de descargar episodios para escuchar sin conexión."
    },
    {
        id: 6,
        question: "¿Puedo sugerir temas o invitados para futuros episodios?",
        answer: "¡Absolutamente! Valoramos mucho las sugerencias de nuestra comunidad. Puedes enviar tus ideas a través del formulario de contacto en nuestro sitio web o escribirnos en redes sociales. Revisamos todas las sugerencias."
    },
    {
        id: 7,
        question: "¿Cómo puedo colaborar o aparecer como invitado en WaveCast?",
        answer: "Si tienes una historia interesante que contar o expertise en algún tema relevante, nos encantaría conocerte. Visita nuestra página de 'Colabora' y completa el formulario con tu información. Nuestro equipo revisará tu propuesta."
    },
    {
        id: 8,
        question: "¿Ofrecen transcripciones de los episodios?",
        answer: "Sí, todos los episodios incluyen transcripciones completas disponibles para suscriptores premium. Esto facilita la búsqueda de contenido específico y hace nuestro contenido más accesible para personas con discapacidades auditivas."
    },
    {
        id: 9,
        question: "¿Cómo puedo apoyar el podcast si no puedo pagar una suscripción?",
        answer: "Hay muchas formas de apoyarnos gratuitamente: dejando reseñas positivas en plataformas de podcast, compartiendo episodios en redes sociales, recomendándonos a amigos y participando en nuestra comunidad. ¡Tu apoyo significa mucho!"
    },
    {
        id: 10,
        question: "¿Tienen contenido en otros idiomas además del español?",
        answer: "Actualmente WaveCast está disponible únicamente en español. Sin embargo, estamos explorando la posibilidad de ofrecer episodios en inglés y otros idiomas en el futuro. Mantente atento a nuestros anuncios."
    }
]

export const contactCardsData: ContactCardData[] = [
    {
        id: 1,
        icon: "bi-geo-alt",
        title: "Oficina principal",
        lines: ["Lima, Perú"],
        linkText: "Ver ubicación",
    },
    {
        id: 2,
        icon: "bi-envelope-at",
        title: "Correo electrónico",
        lines: ["info@wavecast.com", "soporte@wavecast.com"],
        linkText: "Escríbenos",
    },
    {
        id: 3,
        icon: "bi-telephone-inbound",
        title: "Teléfono",
        lines: ["+51 987 654 321", "+51 912 345 678"],
        linkText: "Llamar ahora",
    }
]