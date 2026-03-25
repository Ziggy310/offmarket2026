import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "pt";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, { en: string; pt: string }> = {
  // Nav
  "nav.home": { en: "Home", pt: "Início" },
  "nav.events": { en: "Live Shows", pt: "Shows ao Vivo" },
  "nav.foodTrucks": { en: "Food Trucks", pt: "Food Trucks" },
  "nav.gallery": { en: "Gallery", pt: "Galeria" },
  "nav.about": { en: "About", pt: "Sobre" },
  "nav.contact": { en: "Contact", pt: "Contacto" },
  "nav.reserve": { en: "RESERVE", pt: "RESERVAR" },

  // Hero
  "hero.headline": { en: "WHERE THE ALGARVE COMES ALIVE", pt: "ONDE O ALGARVE GANHA VIDA" },
  "hero.sub": { en: "Street food. Live music. Nightlife energy. Family welcome.", pt: "Street food. Música ao vivo. Energia noturna. Famílias bem-vindas." },
  "hero.cta1": { en: "RESERVE A TABLE", pt: "RESERVAR MESA" },
  "hero.cta2": { en: "SEE EVENTS", pt: "VER EVENTOS" },

  // Pillars
  "pillars.headline": { en: "MORE THAN A MARKET. IT'S A FEELING.", pt: "MAIS DO QUE UM MERCADO. É UMA SENSAÇÃO." },
  "pillars.sub": { en: "An outdoor space unlike anything else in the Algarve. By day, a gathering place for families and food lovers. By night, the energy of a nightclub under the open sky.", pt: "Um espaço ao ar livre como nenhum outro no Algarve. De dia, um ponto de encontro para famílias e amantes da gastronomia. De noite, a energia de uma discoteca a céu aberto." },
  "pillars.food": { en: "WORLD FOOD", pt: "GASTRONOMIA MUNDIAL" },
  "pillars.foodDesc": { en: "8 global food trucks. Burgers, samba bowls, BBQ, plant-based, cocktails and more.", pt: "8 food trucks globais. Burgers, bowls de samba, BBQ, comida vegetal, cocktails e muito mais." },
  "pillars.music": { en: "LIVE MUSIC", pt: "MÚSICA AO VIVO" },
  "pillars.musicDesc": { en: "Samba, rock, world music, DJ sets. Multiple events every week.", pt: "Samba, rock, música do mundo, DJ sets. Vários eventos todas as semanas." },
  "pillars.night": { en: "NIGHTLIFE VIBES", pt: "AMBIENTE NOTURNO" },
  "pillars.nightDesc": { en: "Open until 2AM on weekends. Music, dancing, and great drinks under the Algarve sky.", pt: "Aberto até às 2h nos fins de semana. Música, dança e ótimas bebidas sob o céu do Algarve." },
  "pillars.family": { en: "FAMILY WELCOME", pt: "FAMÍLIAS BEM-VINDAS" },
  "pillars.familyDesc": { en: "Kids' play area, relaxed seating, and something for every age. Come as a family. Stay as a crowd.", pt: "Área de jogos para crianças, lugares confortáveis e algo para todas as idades. Venha em família. Fique como multidão." },

  // Events section
  "events.label": { en: "What's On", pt: "O Que Está a Acontecer" },
  "events.headline": { en: "UPCOMING LIVE SHOWS", pt: "PRÓXIMOS SHOWS AO VIVO" },
  "events.cta": { en: "VIEW ALL LIVE SHOWS", pt: "VER TODOS OS SHOWS" },

  // Food section
  "food.label": { en: "The Food", pt: "A Comida" },
  "food.headline": { en: "EIGHT KITCHENS. ONE INCREDIBLE SPACE.", pt: "OITO COZINHAS. UM ESPAÇO INCRÍVEL." },
  "food.desc": { en: "From wood-fired BBQ and Brazilian street food to plant-based bowls and exotic cocktails — Off Market brings the world's flavors to Quarteira. Every truck is independent. Every dish is made with love.", pt: "Do churrasco em lenha e street food brasileiro a bowls vegetais e cocktails exóticos — o Off Market traz os sabores do mundo a Quarteira. Cada truck é independente. Cada prato é feito com amor." },
  "food.cta": { en: "EXPLORE FOOD TRUCKS", pt: "EXPLORAR FOOD TRUCKS" },

  // Gallery section
  "vibe.label": { en: "The Vibe", pt: "A Atmosfera" },
  "vibe.instagram": { en: "FOLLOW US ON INSTAGRAM @offmarketn125", pt: "SIGA-NOS NO INSTAGRAM @offmarketn125" },

  // Testimonials
  "testimonials.label": { en: "What People Say", pt: "O Que Dizem as Pessoas" },
  "testimonials.rating": { en: "on Google — 256 Reviews", pt: "no Google — 256 Avaliações" },

  // Story
  "story.label": { en: "Our Story", pt: "A Nossa História" },
  "story.headline": { en: "BORN IN QUARTEIRA. BUILT FOR EVERYONE.", pt: "NASCIDO EM QUARTEIRA. FEITO PARA TODOS." },
  "story.desc": { en: "Off Market started with a simple idea: bring the best food, the best music, and the best vibes to one outdoor space in the heart of the Algarve. What began as a gathering of food trucks became the most exciting night out — and afternoon in — this region has ever seen. Come for the food. Stay for the music. Come back for the feeling.", pt: "O Off Market começou com uma ideia simples: trazer a melhor comida, a melhor música e a melhor energia para um espaço ao ar livre no coração do Algarve. O que começou como um encontro de food trucks tornou-se a noite — e tarde — mais emocionante que esta região alguma vez viu. Venha pela comida. Fique pela música. Volte pela sensação." },
  "story.cta": { en: "READ OUR STORY", pt: "LER A NOSSA HISTÓRIA" },

  // Hours
  "hours.title": { en: "HOURS", pt: "HORÁRIO" },
  "hours.findUs": { en: "FIND US", pt: "ENCONTRE-NOS" },
  "hours.tueThu": { en: "Tuesday – Thursday", pt: "Terça – Quinta" },
  "hours.friSat": { en: "Friday – Saturday", pt: "Sexta – Sábado" },
  "hours.sun": { en: "Sunday", pt: "Domingo" },
  "hours.mon": { en: "Monday", pt: "Segunda-feira" },
  "hours.closed": { en: "CLOSED", pt: "FECHADO" },

  // Reserve CTA
  "reserve.headline": { en: "READY TO EXPERIENCE OFF MARKET?", pt: "PRONTO PARA VIVER O OFF MARKET?" },
  "reserve.sub": { en: "Reservations recommended, especially on event nights. Walk-ins always welcome.", pt: "Reservas recomendadas, especialmente nas noites de evento. Entrada direta sempre bem-vinda." },
  "reserve.cta": { en: "RESERVE YOUR TABLE", pt: "RESERVAR MESA" },
  "reserve.call": { en: "Or call us:", pt: "Ou ligue-nos:" },

  // Events page
  "eventsPage.title": { en: "LIVE SHOWS", pt: "SHOWS AO VIVO" },
  "eventsPage.sub": { en: "Something happening every week.", pt: "Algo a acontecer todas as semanas." },
  "eventsPage.featured": { en: "FEATURED THIS WEEK", pt: "DESTAQUE DESTA SEMANA" },
  "eventsPage.freeEntry": { en: "Free Entry", pt: "Entrada Gratuita" },
  "eventsPage.all": { en: "All", pt: "Todos" },
  "eventsPage.thisWeek": { en: "This Week", pt: "Esta Semana" },

  // Food trucks page
  "trucksPage.title": { en: "THE KITCHENS", pt: "AS COZINHAS" },
  "trucksPage.sub": { en: "8 independent food trucks. One incredible space.", pt: "8 food trucks independentes. Um espaço incrível." },
  "trucksPage.viewMenu": { en: "VIEW MENU", pt: "VER MENU" },
  "trucksPage.menuSoon": { en: "Menu coming soon", pt: "Menu em breve" },
  "trucksPage.areYou": { en: "Are you a food truck?", pt: "É um food truck?" },
  "trucksPage.joinUs": { en: "Join Off Market and be part of something incredible.", pt: "Junte-se ao Off Market e faça parte de algo incrível." },
  "trucksPage.getInTouch": { en: "GET IN TOUCH", pt: "FALE CONNOSCO" },

  // Gallery page
  "galleryPage.title": { en: "GALLERY", pt: "GALERIA" },
  "galleryPage.all": { en: "All", pt: "Todos" },
  "galleryPage.food": { en: "Food", pt: "Comida" },
  "galleryPage.music": { en: "Music", pt: "Música" },
  "galleryPage.crowd": { en: "Crowd", pt: "Público" },
  "galleryPage.vibes": { en: "Vibes", pt: "Vibes" },
  "galleryPage.seeMore": { en: "See more on Instagram →", pt: "Ver mais no Instagram →" },

  // About page
  "aboutPage.hero": { en: "MORE THAN A MARKET.", pt: "MAIS DO QUE UM MERCADO." },
  "aboutPage.storyTitle": { en: "OUR STORY", pt: "A NOSSA HISTÓRIA" },
  "aboutPage.story1": { en: "Off Market was born from a love of great food, real music, and shared experiences. We built something the Algarve didn't know it needed — an outdoor space where food trucks, live artists, and families all belong in the same place.", pt: "O Off Market nasceu de um amor pela boa comida, música autêntica e experiências partilhadas. Construímos algo que o Algarve não sabia que precisava — um espaço ao ar livre onde food trucks, artistas ao vivo e famílias convivem no mesmo lugar." },
  "aboutPage.story2": { en: "From samba circles to DJ showcases, from grilled halloumi to açaí bowls, every night at Off Market is its own story. We're open to everyone. Come hungry. Come curious. Come ready to stay late.", pt: "De rodas de samba a showcases de DJ, de halloumi grelhado a bowls de açaí, cada noite no Off Market é uma história própria. Estamos abertos a todos. Venha com fome. Venha com curiosidade. Venha preparado para ficar até tarde." },
  "aboutPage.story3": { en: "Located on the N125 in Quarteira — easy to find, impossible to forget.", pt: "Localizado na N125 em Quarteira — fácil de encontrar, impossível de esquecer." },
  "aboutPage.foodTrucks": { en: "Food Trucks", pt: "Food Trucks" },
  "aboutPage.googleRating": { en: "Google Rating", pt: "Avaliação Google" },
  "aboutPage.eventsPerWeek": { en: "Live Shows Per Week", pt: "Shows ao Vivo por Semana" },
  "aboutPage.outdoorSpace": { en: "Incredible Outdoor Space", pt: "Espaço ao Ar Livre Incrível" },
  "aboutPage.teamTitle": { en: "THE TEAM", pt: "A EQUIPA" },
  "aboutPage.teamPlaceholder": { en: "[Owner name and story — to be added]", pt: "[Nome e história do proprietário — a adicionar]" },
  "aboutPage.cta": { en: "SEE WHAT'S ON", pt: "VER O QUE ESTÁ ON" },

  // Contact page
  "contactPage.title": { en: "CONTACT", pt: "CONTACTO" },
  "contactPage.sub": { en: "We'd love to hear from you.", pt: "Gostaríamos de ouvir de si." },
  "contactPage.name": { en: "Name *", pt: "Nome *" },
  "contactPage.email": { en: "Email *", pt: "Email *" },
  "contactPage.phone": { en: "Phone (optional)", pt: "Telefone (opcional)" },
  "contactPage.interested": { en: "I'm interested in", pt: "Estou interessado em" },
  "contactPage.message": { en: "Message *", pt: "Mensagem *" },
  "contactPage.send": { en: "SEND MESSAGE", pt: "ENVIAR MENSAGEM" },
  "contactPage.thanks": { en: "THANK YOU!", pt: "OBRIGADO!" },
  "contactPage.thanksMsg": { en: "We'll get back to you soon.", pt: "Entraremos em contacto em breve." },
  "contactPage.generalInquiry": { en: "General Inquiry", pt: "Informação Geral" },
  "contactPage.tableReservation": { en: "Table Reservation", pt: "Reserva de Mesa" },
  "contactPage.foodTruckEnquiry": { en: "Food Truck Enquiry", pt: "Interesse em Food Truck" },
  "contactPage.eventPartnership": { en: "Live Show Partnership", pt: "Parceria de Show" },
  "contactPage.privateEvent": { en: "Private Event", pt: "Evento Privado" },

  // Happening Now
  "happeningNow.label": { en: "HAPPENING NOW", pt: "A ACONTECER AGORA" },
  "happeningNow.freeEntry": { en: "Free Entry", pt: "Entrada Gratuita" },
  "happeningNow.paidEntry": { en: "Paid Entry", pt: "Entrada Paga" },
  "happeningNow.defaultName": { en: "CHILDREN'S DAY", pt: "DIA DAS CRIANÇAS" },
  "happeningNow.defaultDate": { en: "Saturday, June 1st", pt: "Sábado, 1 de Junho" },
  "happeningNow.defaultTime": { en: "From 2PM", pt: "A partir das 14h" },
  "happeningNow.defaultDesc": { en: "A special afternoon for the little ones. Activities, entertainment and lots of fun for the whole family at Off Market.", pt: "Uma tarde especial para os mais pequenos. Atividades, animação e muita diversão para toda a família no espaço Off Market." },

  // Footer
  "footer.rights": { en: "All rights reserved.", pt: "Todos os direitos reservados." },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("offmkt-lang");
    return (saved === "pt" ? "pt" : "en") as Lang;
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("offmkt-lang", l);
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
