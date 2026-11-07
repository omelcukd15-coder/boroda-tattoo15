/**
 * Global Application Constants
 * Tattoo Studio "Black Beard" (Владикавказ)
 */

export const STUDIO_INFO = {
  name: 'Чёрная Борода',
  legalName: 'Тату-салон «Чёрная Борода»',
  slogan: 'Искусство, которое живет',
  master: 'Арсен',
  experience: '10+ лет опыта',
  city: 'г. Владикавказ',
  address: 'проспект Мира, 53',
  fullAddress: 'Республика Северная Осетия — Алания, г. Владикавказ, проспект Мира, 53',
  phone: '+7 (988) 837-45-01',
  phoneRaw: '+79888374501',
  schedule: 'Ежедневно с 11:00 до 21:00 (по предварительной записи)',
  rating: '5.0',
  reviewsCount: '100+ довольных клиентов',
};

export const EXTERNAL_LINKS = {
  yandexMaps: 'https://yandex.ru/maps/-/CXvgeXYJ',
  yandexReviews: 'https://yandex.ru/maps/org/chernaya_boroda/107457770300/reviews/',
  instagram: 'https://instagram.com/taty_vld_arsen',
  twoGis: 'https://2gis.ru/vladikavkaz/search/%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20%D0%9C%D0%B8%D1%80%D0%B0%2C%2053',
};

/**
 * Helper to build direct WhatsApp URLs with contextual pre-filled messages
 */
export const createWhatsAppUrl = (message) => {
  return `https://wa.me/${STUDIO_INFO.phoneRaw.replace('+', '')}?text=${encodeURIComponent(message)}`;
};

export const WHATSAPP_INTENTS = {
  consultation: createWhatsAppUrl('Здравствуйте, Арсен! Хочу прийти на бесплатную консультацию и примерку эскиза, я с сайта.'),
  modelApplication: createWhatsAppUrl('Здравствуйте, Арсен! Хочу участвовать в программе для тату-моделей (заработать/сделать тату бесплатно). Готов(а) обсудить эскиз и условия!'),
  giveaway: createWhatsAppUrl('Здравствуйте, Арсен! Пишу по поводу актуального розыгрыша на бесплатную тату с сайта, как принять участие?'),
  general: createWhatsAppUrl('Здравствуйте, хочу записаться на татуировку к Арсену, я с официального сайта.'),
};
