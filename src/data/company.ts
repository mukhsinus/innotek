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
    { src: "/images/pepsi.png", alt: "Pepsi" },
    { src: "/images/mediapark.png", alt: "Mediapark" },
    { src: "/images/korzinka.png", alt: "Korzinka" },
    { src: "/images/imzo.png", alt: "IMZO" },
    { src: "/images/artel.png", alt: "Artel" },
    { src: "/images/akfa.png", alt: "AKFA" },
    { src: "/images/nura.jpg", alt: "Nura" },
    { src: "/images/evos-2987.jpeg", alt: "EVOS" },
    { src: "/images/Uzauto-motors-logo.jpg", alt: "UzAuto Motors" },
    { src: "/images/poliflex.png", alt: "Poliflex" },
  ],
} as const;

export const VIDEO = {
  title: "Видеокейсы | Innotek",
  description:
    "Реальные кейсы Innotek: как производятся и устанавливаются стеллажные системы и конвейерные решения.",
  h1: "Видеокейсы",
  lead: "Реальные кейсы Innotek: смотрите, как производятся и устанавливаются наши стеллажные системы и конвейерные решения на объектах в Узбекистане.",
  channelUrl: "https://www.youtube.com/@innotek_invest",
  videos: [
    {
      id: "0uidz0YLtxI",
      title: "Монтаж набивных (Drive-in) стеллажей",
      description: "Реализация проекта глубинных набивных стеллажей для максимальной плотности складского хранения поддонов.",
      category: "Складские стеллажи",
      embedUrl: "https://www.youtube-nocookie.com/embed/0uidz0YLtxI",
      watchUrl: "https://youtube.com/shorts/0uidz0YLtxI",
    },
  ],
  localVideos: [
    { id: "IMG_0077", src: "/videos/IMG_0077.mp4", poster: "/videos/IMG_0077.webp" },
    { id: "IMG_0173", src: "/videos/IMG_0173.mp4", poster: "/videos/IMG_0173.webp" },
    { id: "IMG_0234", src: "/videos/IMG_0234.mp4", poster: "/videos/IMG_0234.webp" },
    { id: "IMG_0239", src: "/videos/IMG_0239.mp4", poster: "/videos/IMG_0239.webp" },
    { id: "IMG_0244", src: "/videos/IMG_0244.mp4", poster: "/videos/IMG_0244.webp" },
    { id: "IMG_0247", src: "/videos/IMG_0247.mp4", poster: "/videos/IMG_0247.webp" },
    { id: "IMG_0373", src: "/videos/IMG_0373.mp4", poster: "/videos/IMG_0373.webp" },
    { id: "IMG_0591", src: "/videos/IMG_0591.mp4", poster: "/videos/IMG_0591.webp" },
    { id: "IMG_0614", src: "/videos/IMG_0614.mp4", poster: "/videos/IMG_0614.webp" },
    { id: "IMG_0618", src: "/videos/IMG_0618.mp4", poster: "/videos/IMG_0618.webp" },
    { id: "IMG_0621", src: "/videos/IMG_0621.mp4", poster: "/videos/IMG_0621.webp" },
    { id: "IMG_8617", src: "/videos/IMG_8617.mp4", poster: "/videos/IMG_8617.webp" },
    { id: "IMG_8924", src: "/videos/IMG_8924.mp4", poster: "/videos/IMG_8924.webp" },
    { id: "IMG_9006", src: "/videos/IMG_9006.mp4", poster: "/videos/IMG_9006.webp" },
    { id: "IMG_9123", src: "/videos/IMG_9123.mp4", poster: "/videos/IMG_9123.webp" },
    { id: "IMG_9165", src: "/videos/IMG_9165.mp4", poster: "/videos/IMG_9165.webp" },
    { id: "IMG_9244", src: "/videos/IMG_9244.mp4", poster: "/videos/IMG_9244.webp" },
    { id: "IMG_9256", src: "/videos/IMG_9256.mp4", poster: "/videos/IMG_9256.webp" },
    { id: "IMG_9848", src: "/videos/IMG_9848.mp4", poster: "/videos/IMG_9848.webp" },
    { id: "IMG_9946", src: "/videos/IMG_9946.mp4", poster: "/videos/IMG_9946.webp" },
  ],
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
