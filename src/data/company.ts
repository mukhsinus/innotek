/** Тексты about / video — только из content/about.md и content/video.md. */

export const ABOUT = {
  title: "О компании | Innotek",
  description:
    "Проектирование складского оборудования и монтаж стеллажей. Команда Innotek, Ташкент.",
  h1: "О компании",
  lead: "Успех компании — настоящий, длительный — невозможен без правильно заложенной философии и ценностей.",
  paragraphs: [
    "Если расставлять приоритеты, то сразу же после обеспечения надлежащего качества продукта и поддержания стабильности этого качества, следующим по списку идёт проектирование. Мы готовы предоставить команду с необходимым опытом и способностью спроектировать современное складское оборудование, поддержку которой также непрерывно оказывают итальянские специалисты.",
    "Комплексный подход к монтажу и демонтажу складских стеллажей. Переезд склада. Ремонт стеллажей. Команда квалифицированных специалистов с действующими удостоверениями проведёт монтаж или демонтаж стеллажей любой конструкции или переезд склада, строго соблюдая требования ГОСТ, в короткие сроки даже на действующем предприятии.",
  ],
  /** Имена из файлов логотипов в about.md. Скриншоты экрана не берём. */
  clients: [
    { src: "https://innotek.uz/wp-content/uploads/2022/11/pepsi.png", alt: "Pepsi" },
    { src: "https://innotek.uz/wp-content/uploads/2022/11/mediapark.png", alt: "Mediapark" },
    { src: "https://innotek.uz/wp-content/uploads/2022/11/korzinka.png", alt: "Korzinka" },
    { src: "https://innotek.uz/wp-content/uploads/2022/11/imzo.png", alt: "IMZO" },
    { src: "https://innotek.uz/wp-content/uploads/2022/11/artel.png", alt: "Artel" },
    { src: "https://innotek.uz/wp-content/uploads/2022/11/akfa.png", alt: "AKFA" },
    { src: "https://innotek.uz/wp-content/uploads/2024/05/nura.jpg", alt: "Nura" },
    { src: "https://innotek.uz/wp-content/uploads/2024/05/evos-2987.jpeg", alt: "EVOS" },
    { src: "https://innotek.uz/wp-content/uploads/2024/05/Uzauto-motors-logo.jpg", alt: "UzAuto Motors" },
    { src: "https://innotek.uz/wp-content/uploads/2024/05/poliflex.png", alt: "Poliflex" },
  ],
} as const;

export const VIDEO = {
  title: "Видеокейсы | Innotek",
  description:
    "Реальные кейсы Innotek: как производятся и устанавливаются стеллажные системы и конвейерные решения.",
  h1: "Видеокейсы",
  lead: "Реальные кейсы Innotek: смотрите, как производятся и устанавливаются наши стеллажные системы и конвейерные решения.",
} as const;

export const CONTACTS = {
  title: "Контакты | Innotek",
  description: "Телефон, адрес и заявка на расчёт. Innotek, Ташкент.",
  h1: "Контакты",
  lead: "Напишите задачу — подберём конфигурацию и организуем поставку.",
} as const;

export const CATALOG_HUB = {
  title: "Каталог | Innotek",
  description: "Стеллажи, торговые системы, металлическая мебель, конвейеры и ролики. Производство Innotek, Ташкент.",
  h1: "Каталог",
} as const;

export const SERVICES_HUB = {
  title: "Услуги | Innotek",
  description: "Монтаж и демонтаж стеллажей, покраска и чистка металла, проектирование складского оборудования.",
  h1: "Услуги",
} as const;
