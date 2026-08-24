import type { UiKey } from "../i18n/ui";

export type ServicePage = {
  slug: string;
  path: string;
  labelKey: UiKey;
  title: string;
  description: string;
  h1: string;
  lead: string;
  image?: string;
  body: string;
};

export const SERVICES: ServicePage[] = [
  {
    slug: "montazh-demontazh",
    path: "/services/montazh-demontazh/",
    labelKey: "service.install",
    title: "Монтаж и демонтаж стеллажей | Innotek",
    description: "Монтаж и демонтаж складских стеллажей, переезд склада и ремонт. Команда Innotek, Ташкент.",
    h1: "Монтаж и демонтаж",
    lead: "Комплексный подход к монтажу и демонтажу складских стеллажей. Переезд склада. Ремонт стеллажей.",
    image: "https://innotek.uz/wp-content/uploads/2023/10/2.jpg",
    body: "Команда квалифицированных специалистов с действующими удостоверениями проведёт монтаж или демонтаж стеллажей любой конструкции или переезд склада, строго соблюдая требования ГОСТ, в короткие сроки даже на действующем предприятии.",
  },
  {
    slug: "pokraska-metalla",
    path: "/services/pokraska-metalla/",
    labelKey: "service.paint",
    title: "Покраска металла | Компания Innotek",
    description: "Порошковая покраска металла в Ташкенте. Защита от коррозии и внешний вид изделий Innotek. Звоните +998 71 200 50 51.",
    h1: "Покраска металла",
    lead: "Придаём изделиям внешний вид и защиту от коррозии. Готовим поверхность и наносим покрытие, рассчитанное на долгий срок.",
    image: "https://innotek.uz/wp-content/uploads/2024/01/poroshkovye-kraski-p.jpg",
    body: "Мы используем качественные краски и тщательно подготавливаем поверхность металла, чтобы покрытие было равномерным и долговечным. Опыт и внимание к деталям нужны для того, чтобы металлическое изделие выглядело цельно и служило годами.",
  },
  {
    slug: "chistka-metalla",
    path: "/services/chistka-metalla/",
    labelKey: "service.clean",
    title: "Чистка металла | Компания Innotek",
    description: "Чистка металла в Ташкенте: удаление загрязнений, окислов и ржавчины. Innotek.",
    h1: "Чистка металла",
    lead: "Удаление загрязнений, окислов и ржавчины с поверхности металлических изделий.",
    image: "https://innotek.uz/wp-content/uploads/2024/01/photo_2023-09-27-17.40.52-qdf3jxbj2kjzrzfih0u7ko22pzwolqikwi6rzodjf8.webp",
    body: "С применением специализированных методов и оборудования мы восстанавливаем первоначальный блеск и качество металла, улучшая его долговечность и вид. Независимо от типа металла и степени загрязнения.",
  },
  {
    slug: "proektirovanie",
    path: "/services/proektirovanie/",
    labelKey: "service.design",
    title: "Проектирование складского оборудования | Innotek",
    description: "Проектирование современного складского оборудования. Команда Innotek, Ташкент.",
    h1: "Проектирование",
    lead: "После качества продукта следующим приоритетом идёт проектирование складского оборудования.",
    image: "https://innotek.uz/wp-content/uploads/2023/10/1-3.jpg",
    body: "Мы готовы предоставить команду с необходимым опытом и способностью спроектировать современное складское оборудование, поддержку которой также оказывают итальянские специалисты.",
  },
];

export function serviceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
