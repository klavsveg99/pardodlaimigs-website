import './style.css';

const languages = {
  lv: {
    name: 'Latviešu',
    languageLabel: 'Valoda',
    mainMenu: 'Galvenā izvēlne',
    menuOpen: 'Atvērt izvēlni',
    previousReview: 'Iepriekšējā atsauksme',
    nextReview: 'Nākamā atsauksme',
    navProperties: 'Īpašumi',
    navSell: 'Pārdot īpašumu',
    navAbout: 'Par mums',
    navBlog: 'Noderīgi',
    navContact: 'Kontakti',
    eyebrow: 'Nekustamā īpašuma aģentūra Latvijā',
    heroTitle: 'Pārdod savu īpašumu.\nPar labāko cenu.',
    heroBody: 'Profesionāls atbalsts no pirmās sarunas līdz darījuma noslēgšanai. Skaidrs process, pārdomāta stratēģija un cilvēks, kurš ir tavā pusē.',
    heroAction: 'Novērtēt īpašumu',
    videoAction: 'Iepazīsti mūs',
    heroNote: 'Vairāk nekā 150 laimīgu klientu',
    searchTitle: 'Atrodi savu nākamo īpašumu',
    searchType: 'Īpašuma veids',
    searchPrice: 'Maksimālā cena',
    searchPlace: 'Vieta vai atslēgvārds',
    searchAction: 'Meklēt',
    allTypes: 'Visi veidi',
    allPrices: 'Jebkura cena',
    propertiesEyebrow: 'Zeme un īpašumi pārdošanā',
    propertiesTitle: 'Īpašumi, ko vērts apskatīt',
    propertiesLead: 'Pārlūko aktuālos piedāvājumus un sazinies ar mums, lai uzzinātu vairāk.',
    viewAll: 'Skatīt visus īpašumus',
    propertyCount: 'īpašumi',
    details: 'Apskatīt īpašumu',
    sellEyebrow: 'Pārdošana bez lieka stresa',
    sellTitle: 'Katram īpašumam - sava pieeja',
    sellLead: 'Precīzs vērtējums un skaidrs plāns palīdz pieņemt labākos lēmumus.',
    apartment: 'Dzīvoklis',
    apartmentText: 'Nosakām tirgus vērtību, sagatavojam sludinājumu un atrodam īsto pircēju.',
    house: 'Māja',
    houseText: 'Sakārtojam pārdošanas procesu arī tad, ja situācija nav standarta.',
    land: 'Zeme vai mežs',
    landText: 'Salīdzinām līdzīgus darījumus, lai noteiktu pamatotu cenu un iespējas.',
    sellAction: 'Pieteikt konsultāciju',
    reviewsEyebrow: 'Ko saka mūsu klienti',
    reviewsTitle: 'Labi darījumi sākas ar uzticēšanos',
    reviewCount: '150+ laimīgu klientu',
    blogEyebrow: 'Padomi, ieteikumi un vērtīgs materiāls',
    blogTitle: 'Noderīga informācija',
    readArticle: 'Lasīt rakstu',
    teamEyebrow: 'Cilvēki, kuri būs tavā pusē',
    teamTitle: 'Mūsu komanda',
    agent: 'Nekustamo īpašumu aģents',
    contactEyebrow: 'Parunāsim par tavu īpašumu',
    contactTitle: 'Pirmais solis ir vienkāršs',
    contactBody: 'Pastāsti, ko vēlies pārdot. Sazināsimies, izrunāsim situāciju un vienosimies par nākamajiem soļiem.',
    formName: 'Vārds',
    formPhone: 'Tālrunis',
    formEmail: 'E-pasts',
    formType: 'Īpašuma veids',
    formChoose: 'Izvēlies',
    formArea: 'Platība',
    formLocation: 'Atrašanās vieta',
    formCadastre: 'Kadastra numurs',
    formDesiredPrice: 'Vēlamā cena par īpašumu (€)',
    formDescription: 'Īpašuma apraksts',
    formComment: 'Papildu piezīmes',
    formApartment: 'Dzīvoklis',
    formHouse: 'Māja',
    formLand: 'Zeme',
    formForest: 'Mežs',
    urgentCheckbox: 'Vēlos pārdot steidzami',
    formMessage: 'Par īpašumu',
    formSubmit: 'Pieteikt konsultāciju',
    localNote: 'Priekšskatījuma forma - pieteikums netiek nosūtīts.',
    legalTitle: 'Juridiskais atbalsts',
    legalItems: ['Juridiski apgrūtinātu īpašumu uzpirkšana', 'Nekustamo īpašumu atdalīšana', 'Jaunu nosaukumu piešķiršana zemes vienībām - palīdzība no iesnieguma pašvaldībā līdz reģistrācijai Zemesgrāmatā', 'Mantojuma lietas', 'Palīdzība, ja pret īpašumu vērsta parādu piedziņa', 'Pirkuma līgumu sagatavošana un citu līgumu pārbaude atbilstoši aktuālajiem likumiem'],
    footerLine: 'Ātri, ērti, laimīgi.',
    quickContact: 'Ātrā saziņa',
    call: 'Zvanīt',
    email: 'Rakstīt e-pastu',
    cookiesTitle: 'Tava privātuma izvēle',
    cookiesText: 'Izmantojam nepieciešamās sīkdatnes vietnes darbībai. Ar tavu atļauju varam izmantot arī analītikas sīkdatnes.',
    acceptCookies: 'Atļaut visas',
    rejectCookies: 'Tikai nepieciešamās',
    cookieSettings: 'Iestatījumi',
    cookieNecessary: 'Nepieciešamās',
    cookieAnalytics: 'Analītikas',
    saveChoices: 'Saglabāt izvēli',
    close: 'Aizvērt',
    noResults: 'Šiem kritērijiem īpašumi nav atrasti.',
    priceFrom: 'Cena pēc pieprasījuma',
  },
  en: {
    name: 'English', languageLabel: 'Language', mainMenu: 'Main navigation', menuOpen: 'Open menu', previousReview: 'Previous review', nextReview: 'Next review', formChoose: 'Choose', navProperties: 'Properties', navSell: 'Sell a property', navAbout: 'About us', navBlog: 'Insights', navContact: 'Contact',
    eyebrow: 'Real estate agency in Latvia', heroTitle: 'Sell your property.\nFor the best price.', heroBody: 'Professional support from the first conversation to closing. A clear process, a considered strategy, and someone on your side.', heroAction: 'Request a valuation', videoAction: 'Meet our team', heroNote: 'More than 150 happy clients',
    searchTitle: 'Find your next property', searchType: 'Property type', searchPrice: 'Maximum price', searchPlace: 'Place or keyword', searchAction: 'Search', allTypes: 'All types', allPrices: 'Any price',
    propertiesEyebrow: 'Land and homes for sale', propertiesTitle: 'Properties worth a closer look', propertiesLead: 'Browse current listings and get in touch to find out more.', viewAll: 'View all properties', propertyCount: 'properties', details: 'View property',
    sellEyebrow: 'A smoother way to sell', sellTitle: 'A considered approach for every property', sellLead: 'An accurate valuation and a clear plan help you make better decisions.', apartment: 'Apartment', apartmentText: 'We assess the market, prepare the listing, and find the right buyer.', house: 'House', houseText: 'We guide the sale even when the situation is not straightforward.', land: 'Land or forest', landText: 'We compare similar sales to find a realistic price and the right options.', sellAction: 'Request a consultation',
    reviewsEyebrow: 'What our clients say', reviewsTitle: 'Good deals start with trust', reviewCount: '150+ happy clients', blogEyebrow: 'Advice, ideas and useful resources', blogTitle: 'Useful information', readArticle: 'Read article', teamEyebrow: 'People on your side', teamTitle: 'Our team', agent: 'Real estate agent',
    contactEyebrow: 'Let’s talk about your property', contactTitle: 'Taking the first step is easy', contactBody: 'Tell us what you would like to sell. We will talk through your situation and agree on next steps.', formName: 'Name', formPhone: 'Phone', formEmail: 'Email', formType: 'Property type', formArea: 'Area', formLocation: 'Location', formCadastre: 'Cadastral number', formDesiredPrice: 'Desired price (€)', formDescription: 'Property description', formComment: 'Additional notes', formApartment: 'Apartment', formHouse: 'House', formLand: 'Land', formForest: 'Forest', urgentCheckbox: 'I want to sell urgently', formMessage: 'About the property', formSubmit: 'Request a valuation', localNote: 'Preview form - your request is not sent.',
    legalTitle: 'Legal support', legalItems: ['Purchase of properties with legal encumbrances', 'Subdivision and naming of properties', 'Inheritance matters', 'Debt recovery matters', 'Preparation and review of purchase agreements'], footerLine: 'Quick, easy, happy.', quickContact: 'Quick contact', call: 'Call', email: 'Send an email', cookiesTitle: 'Your privacy choices', cookiesText: 'We use essential cookies to run this site. With your permission, we may also use analytics cookies.', acceptCookies: 'Accept all', rejectCookies: 'Essential only', cookieSettings: 'Settings', cookieNecessary: 'Essential', cookieAnalytics: 'Analytics', saveChoices: 'Save choices', close: 'Close', noResults: 'No properties match these filters.', priceFrom: 'Price on request',
  },
  ru: {
    name: 'Русский', languageLabel: 'Язык', mainMenu: 'Главная навигация', menuOpen: 'Открыть меню', previousReview: 'Предыдущий отзыв', nextReview: 'Следующий отзыв', formChoose: 'Выберите', navProperties: 'Объекты', navSell: 'Продать недвижимость', navAbout: 'О нас', navBlog: 'Полезное', navContact: 'Контакты',
    eyebrow: 'Агентство недвижимости в Латвии', heroTitle: 'Продайте недвижимость.\nПо лучшей цене.', heroBody: 'Профессиональная поддержка от первого разговора до завершения сделки. Понятный процесс, продуманная стратегия и человек на вашей стороне.', heroAction: 'Оценить недвижимость', videoAction: 'Познакомьтесь с нами', heroNote: 'Более 150 довольных клиентов',
    searchTitle: 'Найдите свою недвижимость', searchType: 'Тип недвижимости', searchPrice: 'Максимальная цена', searchPlace: 'Место или ключевое слово', searchAction: 'Искать', allTypes: 'Все типы', allPrices: 'Любая цена',
    propertiesEyebrow: 'Земля и недвижимость на продажу', propertiesTitle: 'Объекты, заслуживающие внимания', propertiesLead: 'Посмотрите актуальные предложения и свяжитесь с нами, чтобы узнать подробности.', viewAll: 'Все объекты', propertyCount: 'объектов', details: 'Посмотреть объект',
    sellEyebrow: 'Продажа без лишнего стресса', sellTitle: 'Индивидуальный подход к каждому объекту', sellLead: 'Точная оценка и понятный план помогают принимать верные решения.', apartment: 'Квартира', apartmentText: 'Оценим рынок, подготовим объявление и найдем подходящего покупателя.', house: 'Дом', houseText: 'Поможем пройти процесс продажи, даже если ситуация нестандартная.', land: 'Земля или лес', landText: 'Сравним похожие сделки, чтобы определить обоснованную цену и возможности.', sellAction: 'Записаться на консультацию',
    reviewsEyebrow: 'Отзывы наших клиентов', reviewsTitle: 'Хорошие сделки начинаются с доверия', reviewCount: 'Более 150 довольных клиентов', blogEyebrow: 'Советы и полезные материалы', blogTitle: 'Полезная информация', readArticle: 'Читать статью', teamEyebrow: 'Люди на вашей стороне', teamTitle: 'Наша команда', agent: 'Агент по недвижимости',
    contactEyebrow: 'Обсудим вашу недвижимость', contactTitle: 'Сделать первый шаг просто', contactBody: 'Расскажите, что вы хотите продать. Мы обсудим ситуацию и договоримся о следующих шагах.', formName: 'Имя', formPhone: 'Телефон', formEmail: 'Эл. почта', formType: 'Тип недвижимости', formArea: 'Площадь', formLocation: 'Местоположение', formCadastre: 'Кадастровый номер', formDesiredPrice: 'Желаемая цена (€)', formDescription: 'Описание недвижимости', formComment: 'Дополнительная информация', formApartment: 'Квартира', formHouse: 'Дом', formLand: 'Земля', formForest: 'Лес', urgentCheckbox: 'Хочу продать срочно', formMessage: 'О недвижимости', formSubmit: 'Запросить оценку', localNote: 'Демонстрационная форма - заявка не отправляется.',
    legalTitle: 'Юридическая поддержка', legalItems: ['Выкуп объектов с юридическими обременениями', 'Раздел недвижимости и присвоение названий', 'Вопросы наследства', 'Вопросы взыскания долгов', 'Подготовка и проверка договоров купли-продажи'], footerLine: 'Быстро, удобно, счастливо.', quickContact: 'Быстрая связь', call: 'Позвонить', email: 'Написать', cookiesTitle: 'Настройки конфиденциальности', cookiesText: 'Для работы сайта используются необходимые cookie. С вашего разрешения также могут использоваться аналитические cookie.', acceptCookies: 'Разрешить все', rejectCookies: 'Только необходимые', cookieSettings: 'Настройки', cookieNecessary: 'Необходимые', cookieAnalytics: 'Аналитика', saveChoices: 'Сохранить выбор', close: 'Закрыть', noResults: 'По этим критериям объекты не найдены.', priceFrom: 'Цена по запросу',
  },
  de: {
    name: 'Deutsch', languageLabel: 'Sprache', mainMenu: 'Hauptnavigation', menuOpen: 'Menü öffnen', previousReview: 'Vorherige Bewertung', nextReview: 'Nächste Bewertung', formChoose: 'Auswählen', navProperties: 'Immobilien', navSell: 'Immobilie verkaufen', navAbout: 'Über uns', navBlog: 'Ratgeber', navContact: 'Kontakt',
    eyebrow: 'Immobilienagentur in Lettland', heroTitle: 'Verkaufen Sie Ihre Immobilie.\nZum besten Preis.', heroBody: 'Professionelle Unterstützung vom ersten Gespräch bis zum Abschluss. Ein klarer Ablauf, eine durchdachte Strategie und jemand an Ihrer Seite.', heroAction: 'Immobilie bewerten lassen', videoAction: 'Lernen Sie uns kennen', heroNote: 'Mehr als 150 zufriedene Kunden',
    searchTitle: 'Finden Sie Ihre nächste Immobilie', searchType: 'Immobilientyp', searchPrice: 'Höchstpreis', searchPlace: 'Ort oder Stichwort', searchAction: 'Suchen', allTypes: 'Alle Typen', allPrices: 'Jeder Preis',
    propertiesEyebrow: 'Grundstücke und Immobilien zum Verkauf', propertiesTitle: 'Immobilien, die einen Blick wert sind', propertiesLead: 'Entdecken Sie aktuelle Angebote und fragen Sie uns nach weiteren Informationen.', viewAll: 'Alle Immobilien ansehen', propertyCount: 'Immobilien', details: 'Immobilie ansehen',
    sellEyebrow: 'Verkaufen ohne unnötigen Stress', sellTitle: 'Ein passender Weg für jede Immobilie', sellLead: 'Eine genaue Bewertung und ein klarer Plan helfen bei guten Entscheidungen.', apartment: 'Wohnung', apartmentText: 'Wir bewerten den Markt, erstellen das Angebot und finden den passenden Käufer.', house: 'Haus', houseText: 'Wir begleiten den Verkauf auch in besonderen Situationen.', land: 'Grundstück oder Wald', landText: 'Wir vergleichen ähnliche Verkäufe, um einen fairen Preis und Möglichkeiten zu finden.', sellAction: 'Beratung anfragen',
    reviewsEyebrow: 'Das sagen unsere Kunden', reviewsTitle: 'Gute Geschäfte beginnen mit Vertrauen', reviewCount: 'Mehr als 150 zufriedene Kunden', blogEyebrow: 'Tipps und hilfreiche Informationen', blogTitle: 'Nützliche Informationen', readArticle: 'Artikel lesen', teamEyebrow: 'Menschen an Ihrer Seite', teamTitle: 'Unser Team', agent: 'Immobilienmakler',
    contactEyebrow: 'Sprechen wir über Ihre Immobilie', contactTitle: 'Der erste Schritt ist ganz einfach', contactBody: 'Erzählen Sie uns, was Sie verkaufen möchten. Wir besprechen Ihre Situation und die nächsten Schritte.', formName: 'Name', formPhone: 'Telefon', formEmail: 'E-Mail', formType: 'Immobilientyp', formArea: 'Fläche', formLocation: 'Standort', formCadastre: 'Katasternummer', formDesiredPrice: 'Gewünschter Preis (€)', formDescription: 'Beschreibung der Immobilie', formComment: 'Zusätzliche Angaben', formApartment: 'Wohnung', formHouse: 'Haus', formLand: 'Grundstück', formForest: 'Wald', urgentCheckbox: 'Ich möchte dringend verkaufen', formMessage: 'Zur Immobilie', formSubmit: 'Bewertung anfragen', localNote: 'Vorschauformular - die Anfrage wird nicht gesendet.',
    legalTitle: 'Rechtliche Unterstützung', legalItems: ['Ankauf rechtlich belasteter Immobilien', 'Teilung und Benennung von Grundstücken', 'Erbschaftsangelegenheiten', 'Fragen zur Forderungsvollstreckung', 'Vorbereitung und Prüfung von Kaufverträgen'], footerLine: 'Schnell, einfach, glücklich.', quickContact: 'Schnellkontakt', call: 'Anrufen', email: 'E-Mail senden', cookiesTitle: 'Ihre Datenschutzeinstellungen', cookiesText: 'Für den Betrieb der Website verwenden wir notwendige Cookies. Mit Ihrer Einwilligung können auch Analyse-Cookies eingesetzt werden.', acceptCookies: 'Alle akzeptieren', rejectCookies: 'Nur notwendige', cookieSettings: 'Einstellungen', cookieNecessary: 'Notwendig', cookieAnalytics: 'Analyse', saveChoices: 'Auswahl speichern', close: 'Schließen', noResults: 'Keine Immobilien für diese Kriterien gefunden.', priceFrom: 'Preis auf Anfrage',
  },
};

const translatedCategories = {
  en: { 'Dzīvoklis': 'Apartment', 'Māja': 'House', 'Zeme': 'Land', 'Komerciāls': 'Commercial' },
  ru: { 'Dzīvoklis': 'Квартира', 'Māja': 'Дом', 'Zeme': 'Земля', 'Komerciāls': 'Коммерческая недвижимость' },
  de: { 'Dzīvoklis': 'Wohnung', 'Māja': 'Haus', 'Zeme': 'Grundstück', 'Komerciāls': 'Gewerbeimmobilie' },
};

const extendedTranslations = {
  lv: {
    navFaq: 'BUJ', faqEyebrow: 'BUJ', privacyLabel: 'Privātuma politika', googleReviews: 'Google atsauksmes',
    heroCarouselLabel: 'Īpašumu attēlu galerija', previousSlide: 'Iepriekšējais attēls', nextSlide: 'Nākamais attēls',
    legalEyebrow: 'Papildu pakalpojumi', legalLead: 'Kad darījums nav vienkāršs, palīdzam arī ar juridiskiem jautājumiem - no dokumentu izpētes līdz reģistrācijai Zemesgrāmatā.',
    photos: 'foto', photo: 'Attēls', galleryLabel: 'Īpašuma attēli', enquire: 'Sazināties par īpašumu', fullListing: 'Atvērt sludinājumu',
    preciseLocation: 'Precīza atrašanās vieta', openInMaps: 'Atvērt Google Maps',
    allArticles: 'Visi raksti',
    teamLead: 'Pieredze, cilvēcīga attieksme un rūpes par katru detaļu - no pirmās sarunas līdz atslēgu nodošanai.',
    articleTitles: ['Zemesgrāmata - pats svarīgākais dokuments nekustamā īpašuma darījumos', 'Cik maksā lauksaimniecības zeme Latvijā? 2025. gada cenu apskats', 'Nekustamo īpašumu tirgus Saldū - aktuālākās cenas un iespējas'],
    factLabels: { 'Telpu platība': 'Telpu platība', 'Zemes platība': 'Zemes platība', Istabas: 'Istabas', Vannasistabas: 'Vannasistabas' },
    urgentEyebrow: 'Kad laiks ir svarīgs', urgentTitle: 'Pārdod īpašumu 3 dienu laikā', urgentLead: 'Steidzamai realizācijai - saziņa vienas stundas laikā un skaidri nākamie soļi.',
    urgentSteps: [['01 / diena', 'Saziņa un izvērtēšana', 'Sazvanīšanās, ātrās realizācijas vērtības noteikšana un īpašuma dokumentu analīze.'], ['02 / diena', 'Piedāvājums', 'Veicam ātrās realizācijas izpēti, piedāvājam cenu un vienojamies par tikšanos pie notāra.'], ['03 / diena', 'Darījuma noslēgums', 'Tiekamies pie notāra un pēc darījuma nauda tiek pārskaitīta tavā kontā.']],
    urgentAction: 'Pieteikt steidzamu pārdošanu', faqTitle: 'Biežāk uzdotie jautājumi',
    faqItems: [['Kādas ir izmaksas, pārdodot īpašumu ar mums?', 'Maksa ir atkarīga no darījuma sarežģītības un visbiežāk sākas no 5%. Slēdzam ekskluzīvu vienošanos un sadarbojamies ar aģentiem visā Latvijā.'], ['Vai es varu pārdot īpašumu pats?', 'Protams. Mēs piedāvājam tirgus analīzi, mārketinga stratēģiju, komunikācijas vadību un juridisko formalitāšu atbalstu, lai pārdošanas process būtu drošs un pārskatāms.'], ['Cik ātri var pārdot īpašumu?', 'Pēc tirgus analīzes un cenas noteikšanas īpašumu reizēm izdodas pārdot nedēļas laikā. Dārgāki objekti var tikt tirgoti no viena līdz sešiem mēnešiem.'], ['Kas nepieciešams pirms īpašuma pārdošanas?', 'Sākumā pietiek ar lēmumu pārdot. Kopā izanalizēsim dokumentus, izpētīsim tirgu un noteiksim īpašuma patieso vērtību.']],
    podcastTitle: 'Vairāk noderīga satura', podcastLead: 'Apskati mūsu YouTube kanālu un Spotify podkāstu par nekustamo īpašumu.', youtube: 'YouTube kanāls', spotify: 'Spotify podkāsts',
  },
  en: {
    navFaq: 'FAQ', faqEyebrow: 'FAQ', privacyLabel: 'Privacy policy', googleReviews: 'Google reviews',
    heroCarouselLabel: 'Property image gallery', previousSlide: 'Previous image', nextSlide: 'Next image',
    legalEyebrow: 'Additional services', legalLead: 'When a transaction is not straightforward, we also help with legal matters, from reviewing documents to registering them in the Land Register.',
    photos: 'photos', photo: 'Image', galleryLabel: 'Property images', enquire: 'Enquire about this property', fullListing: 'Open full listing',
    preciseLocation: 'Precise location', openInMaps: 'Open in Google Maps',
    allArticles: 'All articles', teamLead: 'Experience, a personal approach and care for every detail, from the first conversation to handing over the keys.',
    articleTitles: ['The Land Register - the key document in real estate transactions', 'How much does farmland cost in Latvia? 2025 price review', 'The Saldus real estate market: current prices and opportunities'],
    reviews: [{ quote: 'I originally tried selling my property myself, without success. Roberts brought in a professional photographer, created a strong listing and sold the property quickly for the price I wanted. Thank you!', name: 'Simra Sia' }, { quote: 'Many thanks for the professional work! Roberts was responsive, communicative and knowledgeable. The process was quick, high-quality and stress-free. I highly recommend him.', name: 'Aivars Ikaunieks' }, { quote: 'Working with Roberts was excellent. The paperwork was prepared quickly, great photos were taken, and a buyer was found in no time. A punctual and responsible specialist.', name: 'Lāsma Sarksne' }],
    factLabels: { 'Telpu platība': 'Indoor area', 'Zemes platība': 'Land area', Istabas: 'Rooms', Vannasistabas: 'Bathrooms' },
    urgentEyebrow: 'When time matters', urgentTitle: 'Sell your property in 3 days', urgentLead: 'For urgent sales, we will contact you within one hour and explain the next steps.',
    urgentSteps: [['DAY 01', 'Get in touch', 'We discuss the property, estimate its quick-sale value, and review the documents.'], ['DAY 02', 'Receive an offer', 'We assess quick-sale options, make an offer, and arrange a notary appointment.'], ['DAY 03', 'Complete the sale', 'We meet at the notary and the sale proceeds are transferred to your account.']],
    urgentAction: 'Request an urgent sale', faqTitle: 'Frequently asked questions',
    faqItems: [['What does it cost to sell with you?', 'Fees depend on the complexity of the transaction and most often start at 5%. We agree on the terms in advance and work with agents across Latvia.'], ['Can I sell my property myself?', 'Of course. We provide market analysis, a marketing strategy, communication support, and help with legal formalities.'], ['How quickly can a property be sold?', 'After market analysis and pricing, some properties can sell within a week. Higher-priced properties may take one to six months.'], ['What do I need before selling?', 'First, decide that you want to sell. We will review the documents, research the market, and estimate the property’s value.']],
    podcastTitle: 'More useful content', podcastLead: 'Explore our YouTube channel and Spotify podcast about real estate.', youtube: 'YouTube channel', spotify: 'Spotify podcast',
  },
  ru: {
    navFaq: 'FAQ', faqEyebrow: 'Вопросы', privacyLabel: 'Политика конфиденциальности', googleReviews: 'Отзывы Google',
    heroCarouselLabel: 'Галерея изображений объектов', previousSlide: 'Предыдущее изображение', nextSlide: 'Следующее изображение',
    legalEyebrow: 'Дополнительные услуги', legalLead: 'Если сделка непростая, мы помогаем и с юридическими вопросами - от проверки документов до регистрации в Земельной книге.',
    photos: 'фото', photo: 'Изображение', galleryLabel: 'Изображения объекта', enquire: 'Связаться по объекту', fullListing: 'Открыть объявление',
    preciseLocation: 'Точное местоположение', openInMaps: 'Открыть в Google Maps',
    allArticles: 'Все статьи', teamLead: 'Опыт, внимательное отношение и забота о каждой детали - от первого разговора до передачи ключей.',
    articleTitles: ['Земельная книга - главный документ в сделках с недвижимостью', 'Сколько стоит сельскохозяйственная земля в Латвии? Обзор цен за 2025 год', 'Рынок недвижимости в Салдусе: актуальные цены и возможности'],
    reviews: [{ quote: 'Сначала я пыталась продать недвижимость самостоятельно, но безуспешно. Роберт пригласил профессионального фотографа, подготовил хорошее объявление и быстро продал недвижимость по желаемой цене. Спасибо!', name: 'Simra Sia' }, { quote: 'Большое спасибо за профессиональную работу! Роберт был отзывчивым, общительным и знающим. Все прошло быстро, качественно и без лишнего стресса. Рекомендую!', name: 'Aivars Ikaunieks' }, { quote: 'Сотрудничество с Робертом было отличным. Документы подготовили быстро, сделали хорошие фотографии и в кратчайший срок нашли покупателя. Ответственный и пунктуальный специалист.', name: 'Lāsma Sarksne' }],
    factLabels: { 'Telpu platība': 'Площадь помещений', 'Zemes platība': 'Площадь земли', Istabas: 'Комнаты', Vannasistabas: 'Ванные комнаты' },
    urgentEyebrow: 'Когда важно время', urgentTitle: 'Продайте недвижимость за 3 дня', urgentLead: 'При срочной продаже мы свяжемся с вами в течение часа и объясним следующие шаги.',
    urgentSteps: [['ДЕНЬ 01', 'Свяжитесь с нами', 'Обсудим недвижимость, оценим стоимость быстрой продажи и проверим документы.'], ['ДЕНЬ 02', 'Получите предложение', 'Изучим варианты быстрой продажи, предложим цену и договоримся о встрече у нотариуса.'], ['ДЕНЬ 03', 'Завершите сделку', 'Встретимся у нотариуса, после чего деньги поступят на ваш счет.']],
    urgentAction: 'Запросить срочную продажу', faqTitle: 'Часто задаваемые вопросы',
    faqItems: [['Сколько стоит продать недвижимость с вами?', 'Стоимость зависит от сложности сделки и чаще всего начинается от 5%. Условия согласовываются заранее, мы работаем с агентами по всей Латвии.'], ['Можно ли продать недвижимость самостоятельно?', 'Конечно. Мы предлагаем анализ рынка, маркетинговую стратегию, поддержку в общении и помощь с юридическими формальностями.'], ['Как быстро можно продать недвижимость?', 'После анализа рынка и определения цены некоторые объекты продаются за неделю. Более дорогие объекты могут продаваться от одного до шести месяцев.'], ['Что нужно для начала продажи?', 'Сначала достаточно принять решение о продаже. Мы проверим документы, изучим рынок и оценим реальную стоимость.']],
    podcastTitle: 'Больше полезных материалов', podcastLead: 'Смотрите наш YouTube-канал и слушайте подкаст Spotify о недвижимости.', youtube: 'Канал YouTube', spotify: 'Подкаст Spotify',
  },
  de: {
    navFaq: 'FAQ', faqEyebrow: 'FAQ', privacyLabel: 'Datenschutzerklärung', googleReviews: 'Google-Bewertungen',
    heroCarouselLabel: 'Bildergalerie der Immobilien', previousSlide: 'Vorheriges Bild', nextSlide: 'Nächstes Bild',
    legalEyebrow: 'Zusätzliche Leistungen', legalLead: 'Wenn ein Geschäft nicht einfach ist, helfen wir auch bei rechtlichen Fragen - von der Prüfung der Unterlagen bis zur Eintragung ins Grundbuch.',
    photos: 'Fotos', photo: 'Bild', galleryLabel: 'Bilder der Immobilie', enquire: 'Zur Immobilie anfragen', fullListing: 'Inserat öffnen',
    preciseLocation: 'Genauer Standort', openInMaps: 'In Google Maps öffnen',
    allArticles: 'Alle Artikel', teamLead: 'Erfahrung, persönliche Betreuung und Sorgfalt bei jedem Detail - vom ersten Gespräch bis zur Schlüsselübergabe.',
    articleTitles: ['Das Grundbuch - das wichtigste Dokument bei Immobiliengeschäften', 'Was kostet Ackerland in Lettland? Preisübersicht 2025', 'Der Immobilienmarkt in Saldus: aktuelle Preise und Möglichkeiten'],
    reviews: [{ quote: 'Zuerst habe ich versucht, meine Immobilie selbst zu verkaufen, leider ohne Erfolg. Roberts engagierte einen professionellen Fotografen, erstellte ein gutes Inserat und verkaufte die Immobilie schnell zum gewünschten Preis. Vielen Dank!', name: 'Simra Sia' }, { quote: 'Vielen Dank für die professionelle Arbeit! Roberts war sehr hilfsbereit, kommunikativ und kompetent. Der Ablauf war schnell, hochwertig und stressfrei. Ich empfehle ihn gerne weiter.', name: 'Aivars Ikaunieks' }, { quote: 'Die Zusammenarbeit mit Roberts war ausgezeichnet. Die Unterlagen wurden schnell vorbereitet, gute Fotos gemacht und in kürzester Zeit ein Käufer gefunden. Ein pünktlicher und verantwortungsvoller Spezialist.', name: 'Lāsma Sarksne' }],
    factLabels: { 'Telpu platība': 'Wohnfläche', 'Zemes platība': 'Grundstücksfläche', Istabas: 'Zimmer', Vannasistabas: 'Badezimmer' },
    urgentEyebrow: 'Wenn Zeit wichtig ist', urgentTitle: 'Immobilie in 3 Tagen verkaufen', urgentLead: 'Bei einem dringenden Verkauf melden wir uns innerhalb einer Stunde und erklären die nächsten Schritte.',
    urgentSteps: [['TAG 01', 'Kontakt aufnehmen', 'Wir besprechen die Immobilie, schätzen den schnellen Verkaufspreis und prüfen die Unterlagen.'], ['TAG 02', 'Angebot erhalten', 'Wir prüfen die Möglichkeiten, unterbreiten ein Angebot und vereinbaren einen Notartermin.'], ['TAG 03', 'Verkauf abschließen', 'Wir treffen uns beim Notar und der Verkaufserlös wird auf Ihr Konto überwiesen.']],
    urgentAction: 'Dringenden Verkauf anfragen', faqTitle: 'Häufig gestellte Fragen',
    faqItems: [['Was kostet ein Verkauf mit Ihnen?', 'Die Kosten hängen von der Komplexität des Geschäfts ab und beginnen meist bei 5%. Die Bedingungen vereinbaren wir im Voraus.'], ['Kann ich meine Immobilie selbst verkaufen?', 'Natürlich. Wir bieten Marktanalyse, Marketingstrategie, Kommunikationsunterstützung und Hilfe bei rechtlichen Formalitäten.'], ['Wie schnell kann eine Immobilie verkauft werden?', 'Nach Marktanalyse und Preisfestlegung können manche Immobilien innerhalb einer Woche verkauft werden. Hochpreisige Objekte benötigen oft ein bis sechs Monate.'], ['Was brauche ich vor dem Verkauf?', 'Zunächst müssen Sie sich für den Verkauf entscheiden. Wir prüfen gemeinsam die Unterlagen, den Markt und den realistischen Wert.']],
    podcastTitle: 'Weitere hilfreiche Inhalte', podcastLead: 'Entdecken Sie unseren YouTube-Kanal und Spotify-Podcast rund um Immobilien.', youtube: 'YouTube-Kanal', spotify: 'Spotify-Podcast',
  },
};

const reviews = [
  {
    quote: 'Sākotnēji mēģināju pārdot īpašumu pats, bet bez panākumiem. Roberts piesaistīja profesionālu fotogrāfu, izveidoja labu sludinājumu un ātri pārdeva īpašumu par vēlamo cenu. Paldies!',
    name: 'Simra Sia',
  },
  {
    quote: 'Liela pateicība par profesionālo darbu! Roberts bija ļoti atsaucīgs, komunikabls un zinošs. Process noritēja ātri, kvalitatīvi un bez lieka stresa. Noteikti iesaku.',
    name: 'Aivars Ikaunieks',
  },
  {
    quote: 'Sadarbība ar Robertu bija lieliska. Dokumenti tika sagatavoti ātri, uzņemtas labas fotogrāfijas un pircējs atrasts visīsākajā laikā.',
    name: 'Lāsma Sarksne',
  },
];

const flags = {
  lv: '/images/flags/lv.png',
  en: '/images/flags/en_GB.png',
  ru: '/images/flags/ru_RU.png',
  de: '/images/flags/de_DE.png',
};

const agents = {
  'Roberts Evarsons': { phone: '+371 2492 2942' },
  'Inga Dobuma': { phone: '+371 2822 8208' },
};

const state = {
  language: localStorage.getItem('site-language') || 'lv',
  properties: [],
  articles: [],
  visibleCount: 6,
  showAll: false,
  review: 0,
  heroIndex: 0,
  heroTimer: null,
};

const t = (key) => extendedTranslations[state.language]?.[key] ?? languages[state.language][key] ?? extendedTranslations.lv[key] ?? languages.lv[key] ?? key;
const categoryLabel = (category) => translatedCategories[state.language]?.[category] ?? category;
const factLabel = (label) => extendedTranslations[state.language]?.factLabels?.[label] ?? label;
const assetUrl = (path) => {
  if (!path) return '';
  if (/^(https?:|data:|blob:)/i.test(path)) return path;
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`;
};
// Files under /new/ are edge-cached for months (`cache-control: max-age=16070400`),
// so replacing an image file does not reach users until its URL changes.
// Bump the version whenever the logo file itself is replaced.
const BRAND_LOGO = `${assetUrl('/images/brand/logo.svg')}?v=2`;
const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

function renderShell() {
  const heroSlides = state.properties.filter((property) => property.hero_image);
  // The shell is always rebuilt with the menu closed, so a lock left over from
  // an open drawer (for example when the language changed inside it) must go.
  document.body.classList.remove('menu-locked');
  document.documentElement.lang = state.language;
  document.title = state.language === 'lv' ? 'Pārdod Laimīgs - nekustamā īpašuma pārdošana' : `Pārdod Laimīgs - ${t('navSell')}`;
  document.querySelector('#app').innerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="#top" aria-label="Pārdod Laimīgs - sākums"><img src="${BRAND_LOGO}" alt="Pārdod Laimīgs"></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="${escapeHtml(t('menuOpen'))}"><span></span><span></span><span></span></button>
        <nav class="main-navigation" id="main-navigation" aria-label="${escapeHtml(t('mainMenu'))}">
          <a href="#ipasumi" data-i18n="navProperties"></a>
          <a href="#pardot" data-i18n="navSell"></a>
          <a href="#komanda" data-i18n="navAbout"></a>
          <a href="#blog" data-i18n="navBlog"></a>
          <a href="#kontakti" data-i18n="navContact"></a>
          <a href="#buj" data-i18n="navFaq"></a>
        </nav>
        <div class="header-actions">
          <div class="language-switcher">
            <button class="language-picker" type="button" id="language-toggle" aria-haspopup="listbox" aria-expanded="false" aria-label="${escapeHtml(t('languageLabel'))}">
              <img class="language-flag" src="${assetUrl(flags[state.language])}" alt="" width="18" height="12">
              <span class="language-name">${escapeHtml(languages[state.language].name)}</span>
              <span class="language-caret" aria-hidden="true"></span>
            </button>
            <ul class="language-menu" id="language-menu" role="listbox" aria-label="${escapeHtml(t('languageLabel'))}" hidden>
              ${Object.entries(languages).map(([code, lang]) => `
                <li class="language-option${state.language === code ? ' is-active' : ''}" role="option" data-language="${code}" aria-selected="${state.language === code}" tabindex="${state.language === code ? '0' : '-1'}">
                  <img class="language-flag" src="${assetUrl(flags[code])}" alt="" width="18" height="12">
                  <span>${escapeHtml(lang.name)}</span>
                  <span class="language-check" aria-hidden="true">✓</span>
                </li>`).join('')}
            </ul>
          </div>
          <a class="header-phone" href="tel:+37124922942">+371 2492 2942</a>
        </div>
      </div>
    </header>

    <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
      <div class="mobile-menu-overlay" data-menu-close></div>
      <div class="mobile-menu-panel" role="dialog" aria-modal="true" aria-label="${escapeHtml(t('mainMenu'))}">
        <div class="mobile-menu-head">
          <img class="mobile-menu-logo" src="${BRAND_LOGO}" alt="Pārdod Laimīgs">
          <button class="mobile-menu-close" type="button" data-menu-close aria-label="${escapeHtml(t('close'))}">
            <span aria-hidden="true"></span><span aria-hidden="true"></span>
          </button>
        </div>

        <nav class="mobile-menu-nav" aria-label="${escapeHtml(t('mainMenu'))}">
          ${[['#ipasumi', t('navProperties')], ['#pardot', t('navSell')], ['#komanda', t('navAbout')], ['#blog', t('navBlog')], ['#kontakti', t('navContact')], ['#buj', t('navFaq')]]
            .map(([href, label], index) => `<a href="${href}"><span class="mobile-menu-index">${String(index + 1).padStart(2, '0')}</span><span class="mobile-menu-label-text">${escapeHtml(label)}</span><span class="mobile-menu-arrow" aria-hidden="true">↗</span></a>`).join('')}
        </nav>

        <div class="mobile-menu-block">
          <p class="mobile-menu-label" data-i18n="languageLabel"></p>
          <div class="mobile-menu-langs" role="group" aria-label="${escapeHtml(t('languageLabel'))}">
            ${Object.entries(languages).map(([code, lang]) => `
              <button type="button" class="mobile-menu-lang${state.language === code ? ' is-active' : ''}" data-language="${code}" aria-pressed="${state.language === code}">
                <img src="${assetUrl(flags[code])}" alt="" width="18" height="12">${escapeHtml(lang.name)}<span class="language-check" aria-hidden="true">✓</span>
              </button>`).join('')}
          </div>
        </div>

        <div class="mobile-menu-block">
          <p class="mobile-menu-label" data-i18n="quickContact"></p>
          <a class="mobile-menu-contact" href="https://wa.me/37124922942" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>+371 2492 2942</strong></a>
          <a class="mobile-menu-contact" href="tel:+37124922942"><span>Roberts</span><strong>+371 2492 2942</strong></a>
          <a class="mobile-menu-contact" href="tel:+37128228208"><span>Inga</span><strong>+371 2822 8208</strong></a>
        </div>

        <div class="mobile-menu-foot">
          <div class="mobile-menu-social">
            <a href="https://www.youtube.com/@pardodlaimigs" target="_blank" rel="noreferrer">YouTube</a>
            <a href="https://www.facebook.com/PardodLaimigs/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://instagram.com/pardodlaimigs" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://g.page/r/CRZd6XZu2hhmEAE/review" target="_blank" rel="noreferrer">Google</a>
          </div>
        </div>
      </div>
    </div>

    <main id="top">
      <section class="hero-section">
        <div class="container hero-layout">
          <div class="hero-copy">
            <p class="eyebrow" data-i18n="eyebrow"></p>
            <h1 data-i18n="heroTitle"></h1>
            <p class="hero-description" data-i18n="heroBody"></p>
            <div class="hero-actions">
              <a class="button button-light" href="#kontakti"><span data-i18n="heroAction"></span><span aria-hidden="true">↗</span></a>
              <a class="video-link" href="https://pardodlaimigs.lv/wp-content/uploads/2023/10/pardod-laimigs-intro.mp4" target="_blank" rel="noreferrer"><span class="play-icon" aria-hidden="true">▶</span><span data-i18n="videoAction"></span></a>
            </div>
            <div class="hero-proof"><span class="proof-stars" aria-hidden="true">★★★★★</span><span data-i18n="heroNote"></span></div>
          </div>
          <div class="hero-visual" id="hero-carousel" aria-roledescription="carousel" aria-label="${escapeHtml(t('heroCarouselLabel'))}">
            <div class="hero-slides">
              ${heroSlides.map((property, index) => `
                <img class="hero-slide${index === 0 ? ' is-active' : ''}" src="${escapeHtml(assetUrl(property.hero_image))}" alt="${escapeHtml(property.title)}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>`).join('')}
              <button class="hero-slide-link" type="button" data-hero-link aria-label=""></button>
            </div>
            <div class="hero-image-caption"><span class="caption-label" id="hero-caption-title"></span><span class="caption-location" id="hero-caption-location"></span></div>
            <div class="hero-controls">
              <button class="hero-control" type="button" data-hero-prev aria-label="${escapeHtml(t('previousSlide'))}">←</button>
              <button class="hero-control" type="button" data-hero-next aria-label="${escapeHtml(t('nextSlide'))}">→</button>
            </div>
            <div class="hero-index"><span id="hero-position">01</span><span class="hero-index-line"></span><span id="hero-total"></span></div>
            <div class="hero-progress" aria-hidden="true"><span id="hero-progress"></span></div>
          </div>
        </div>
      </section>

      <section class="search-section" aria-labelledby="search-title">
        <div class="container search-panel">
          <div class="search-heading"><span class="search-mark" aria-hidden="true"></span><h2 id="search-title" data-i18n="searchTitle"></h2></div>
          <form id="property-search" class="search-controls">
            <label><span data-i18n="searchType"></span><select name="category" id="search-category"><option value="" data-i18n="allTypes"></option></select></label>
            <label><span data-i18n="searchPrice"></span><select name="price" id="search-price"><option value="" data-i18n="allPrices"></option><option value="50000">€50 000</option><option value="100000">€100 000</option><option value="250000">€250 000</option><option value="500000">€500 000</option></select></label>
            <label class="search-keyword"><span data-i18n="searchPlace"></span><input name="query" id="search-query" type="search" autocomplete="off"></label>
            <button class="button button-dark" type="submit"><span data-i18n="searchAction"></span><span aria-hidden="true">↗</span></button>
          </form>
        </div>
      </section>

      <section class="section properties-section" id="ipasumi" aria-labelledby="properties-title">
        <div class="container">
          <div class="section-heading section-heading-row">
            <div><p class="eyebrow eyebrow-green" data-i18n="propertiesEyebrow"></p><h2 id="properties-title" data-i18n="propertiesTitle"></h2><p class="section-lead" data-i18n="propertiesLead"></p></div>
            <a class="text-link desktop-link" href="#ipasumi" id="view-all-top"><span data-i18n="viewAll"></span><span aria-hidden="true">↗</span></a>
          </div>
          <div class="results-line"><span id="property-count"></span><span id="filter-summary"></span></div>
          <div class="property-grid" id="property-grid" aria-live="polite"></div>
          <div class="section-action"><button class="button button-outline" id="view-all" type="button"><span data-i18n="viewAll"></span><span aria-hidden="true">↗</span></button></div>
        </div>
      </section>

      <section class="section selling-section" id="pardot" aria-labelledby="selling-title">
        <div class="container">
          <div class="section-heading section-heading-centered"><p class="eyebrow eyebrow-green" data-i18n="sellEyebrow"></p><h2 id="selling-title" data-i18n="sellTitle"></h2><p class="section-lead" data-i18n="sellLead"></p></div>
          <div class="selling-grid">
            <article class="selling-item"><span class="selling-number">01</span><h3 data-i18n="apartment"></h3><p data-i18n="apartmentText"></p><a class="text-link" href="#kontakti"><span data-i18n="sellAction"></span><span aria-hidden="true">↗</span></a></article>
            <article class="selling-item"><span class="selling-number">02</span><h3 data-i18n="house"></h3><p data-i18n="houseText"></p><a class="text-link" href="#kontakti"><span data-i18n="sellAction"></span><span aria-hidden="true">↗</span></a></article>
            <article class="selling-item"><span class="selling-number">03</span><h3 data-i18n="land"></h3><p data-i18n="landText"></p><a class="text-link" href="#kontakti"><span data-i18n="sellAction"></span><span aria-hidden="true">↗</span></a></article>
          </div>
        </div>
      </section>

      <section class="section urgent-section" id="steidzami" aria-labelledby="urgent-title">
        <div class="container">
          <div class="section-heading section-heading-centered"><p class="eyebrow eyebrow-green" data-i18n="urgentEyebrow"></p><h2 id="urgent-title" data-i18n="urgentTitle"></h2><p class="section-lead" data-i18n="urgentLead"></p></div>
          <ol class="urgent-steps" id="urgent-steps"></ol>
          <div class="section-action"><a class="button button-dark" href="#kontakti"><span data-i18n="urgentAction"></span><span aria-hidden="true">↗</span></a></div>
        </div>
      </section>

      <section class="reviews-section" aria-labelledby="reviews-title">
        <div class="container reviews-layout">
          <div class="reviews-intro"><p class="eyebrow" data-i18n="reviewsEyebrow"></p><h2 id="reviews-title" data-i18n="reviewsTitle"></h2><div class="review-score"><span class="proof-stars" aria-hidden="true">★★★★★</span><strong>5/5</strong><span data-i18n="reviewCount"></span></div><a class="text-link link-light" href="https://g.page/r/CRZd6XZu2hhmEAE/review" target="_blank" rel="noreferrer"><span data-i18n="googleReviews"></span><span aria-hidden="true">↗</span></a></div>
          <article class="review-card" aria-live="polite"><span class="quote-mark" aria-hidden="true">“</span><p id="review-quote"></p><div class="review-author"><strong id="review-name"></strong><span>★★★★★</span></div><div class="review-controls"><button id="review-prev" type="button" aria-label="${escapeHtml(t('previousReview'))}">←</button><span id="review-position"></span><button id="review-next" type="button" aria-label="${escapeHtml(t('nextReview'))}">→</button></div></article>
        </div>
      </section>

      <section class="section blog-section" id="blog" aria-labelledby="blog-title">
        <div class="container">
          <div class="section-heading section-heading-row"><div><p class="eyebrow eyebrow-green" data-i18n="blogEyebrow"></p><h2 id="blog-title" data-i18n="blogTitle"></h2></div><a class="text-link desktop-link" href="https://pardodlaimigs.lv/blog/" target="_blank" rel="noreferrer">Visi raksti <span aria-hidden="true">↗</span></a></div>
          <div class="article-grid" id="article-grid"></div>
        </div>
      </section>

      <section class="podcast-section">
        <div class="container podcast-layout"><div><p class="eyebrow" data-i18n="podcastTitle"></p><p data-i18n="podcastLead"></p></div><div class="podcast-links"><a href="https://www.youtube.com/@pardodlaimigs" target="_blank" rel="noreferrer"><span data-i18n="youtube"></span><span aria-hidden="true">↗</span></a><a href="https://open.spotify.com/show/5Tansq4D8byHA7ciR9DA2n" target="_blank" rel="noreferrer"><span data-i18n="spotify"></span><span aria-hidden="true">↗</span></a></div></div>
      </section>

      <section class="section team-section" id="komanda" aria-labelledby="team-title">
        <div class="container team-layout">
          <div class="team-heading"><p class="eyebrow eyebrow-green" data-i18n="teamEyebrow"></p><h2 id="team-title" data-i18n="teamTitle"></h2><p class="section-lead" data-i18n="teamLead"></p></div>
          <div class="team-grid">
            <article class="agent-card"><img src="${assetUrl('/images/team/roberts.jpg')}" alt="Roberts Evarsons" loading="lazy"><div><p class="agent-role" data-i18n="agent"></p><h3>Roberts Evarsons</h3><a href="tel:+37124922942">+371 2492 2942</a></div></article>
            <article class="agent-card agent-card--portrait"><img src="${assetUrl('/images/team/inga.jpg')}" alt="Inga Dobuma" loading="lazy"><div><p class="agent-role" data-i18n="agent"></p><h3>Inga Dobuma</h3><a href="tel:+37128228208">+371 2822 8208</a></div></article>
          </div>
        </div>
      </section>

      <section class="legal-section" aria-labelledby="legal-title">
        <div class="container">
          <div class="legal-head">
            <p class="eyebrow" data-i18n="legalEyebrow"></p>
            <h2 id="legal-title" data-i18n="legalTitle"></h2>
            <p data-i18n="legalLead"></p>
          </div>
          <ul class="legal-list" id="legal-list"></ul>
        </div>
      </section>

      <section class="contact-section" id="kontakti" aria-labelledby="contact-title">
        <div class="container contact-layout">
          <div class="contact-copy"><p class="eyebrow" data-i18n="contactEyebrow"></p><h2 id="contact-title" data-i18n="contactTitle"></h2><p data-i18n="contactBody"></p><div class="contact-direct"><a href="tel:+37124922942"><span class="contact-label">Roberts</span><strong>+371 2492 2942</strong></a></div></div>
          <form id="contact-form" class="contact-form">
            <div class="form-row"><label><span data-i18n="formType"></span><select name="property_type" required><option value="" selected disabled data-i18n="formChoose"></option><option value="apartment" data-i18n="formApartment"></option><option value="house" data-i18n="formHouse"></option><option value="land" data-i18n="formLand"></option><option value="forest" data-i18n="formForest"></option></select></label><label><span data-i18n="formArea"></span><input name="area" inputmode="decimal" required></label></div>
            <label><span data-i18n="formLocation"></span><input name="location" required></label>
            <div class="form-row"><label><span data-i18n="formCadastre"></span><input name="cadastre" required></label><label><span data-i18n="formDesiredPrice"></span><input name="desired_price" inputmode="decimal"></label></div>
            <label><span data-i18n="formDescription"></span><textarea name="description" rows="3" required></textarea></label>
            <label class="form-check"><input name="urgent" type="checkbox"><span data-i18n="urgentCheckbox"></span></label>
            <div class="form-row"><label><span data-i18n="formName"></span><input name="name" autocomplete="name" required></label><label><span data-i18n="formPhone"></span><input name="phone" type="tel" autocomplete="tel" required></label></div>
            <label><span data-i18n="formEmail"></span><input name="email" type="email" autocomplete="email" required></label>
            <label><span data-i18n="formComment"></span><textarea name="comment" rows="2"></textarea></label>
            <div class="form-submit-row"><button class="button button-light" type="submit"><span data-i18n="formSubmit"></span><span aria-hidden="true">↗</span></button><p class="local-note" data-i18n="localNote"></p></div>
            <p class="form-feedback" id="form-feedback" role="status" hidden></p>
          </form>
        </div>
      </section>

      <section class="section faq-section" id="buj" aria-labelledby="faq-title"><div class="container faq-layout"><div><p class="eyebrow eyebrow-green" data-i18n="faqEyebrow"></p><h2 id="faq-title" data-i18n="faqTitle"></h2></div><div class="faq-list" id="faq-list"></div></div></section>
    </main>

    <footer class="site-footer"><div class="container footer-main"><a class="brand footer-brand" href="#top"><img src="${BRAND_LOGO}" alt="Pārdod Laimīgs"></a><p data-i18n="footerLine"></p><div class="footer-links"><a href="https://www.youtube.com/@pardodlaimigs" target="_blank" rel="noreferrer">YouTube</a><a href="https://www.facebook.com/PardodLaimigs/" target="_blank" rel="noreferrer">Facebook</a><a href="https://instagram.com/pardodlaimigs" target="_blank" rel="noreferrer">Instagram</a><a href="https://g.page/r/CRZd6XZu2hhmEAE/review" target="_blank" rel="noreferrer">Google</a></div><a class="footer-phone" href="tel:+37124922942">+371 2492 2942</a></div><div class="container footer-bottom"><span>© <span id="current-year"></span> Pārdod Laimīgs</span><button type="button" class="footer-cookie-link" id="manage-cookies">Sīkdatņu iestatījumi</button><a href="https://pardodlaimigs.lv/privatuma-politika/" target="_blank" rel="noreferrer" data-i18n="privacyLabel"></a></div></footer>

    <button class="quick-contact-button" id="quick-contact-toggle" type="button" aria-label="${escapeHtml(t('quickContact'))}" aria-expanded="false" aria-controls="quick-contact-panel"><span class="quick-contact-dot" aria-hidden="true"></span><span data-i18n="quickContact"></span></button>
    <div class="quick-contact-panel" id="quick-contact-panel" hidden><a class="quick-contact-single" href="https://wa.me/37124922942" target="_blank" rel="noreferrer"><span>WhatsApp</span></a><a href="tel:+37124922942"><span data-i18n="call"></span><strong>+371 2492 2942</strong></a></div>

    <div class="cookie-banner" id="cookie-banner" hidden><div class="cookie-copy"><strong data-i18n="cookiesTitle"></strong><p data-i18n="cookiesText"></p></div><div class="cookie-actions"><button type="button" class="button button-dark" id="accept-cookies" data-i18n="acceptCookies"></button><button type="button" class="button button-quiet" id="reject-cookies" data-i18n="rejectCookies"></button><button type="button" class="cookie-settings" id="open-cookie-settings" data-i18n="cookieSettings"></button></div></div>

    <dialog class="property-dialog" id="property-dialog" aria-labelledby="property-dialog-title"><button class="dialog-close" type="button" data-close-dialog aria-label="Close">×</button><div id="property-dialog-content"></div></dialog>
    <dialog class="cookie-dialog" id="cookie-dialog" aria-labelledby="cookie-dialog-title"><button class="dialog-close" type="button" data-close-dialog aria-label="Close">×</button><h2 id="cookie-dialog-title" data-i18n="cookiesTitle"></h2><p data-i18n="cookiesText"></p><label class="cookie-option"><span data-i18n="cookieNecessary"></span><input type="checkbox" checked disabled></label><label class="cookie-option"><span data-i18n="cookieAnalytics"></span><input id="analytics-cookies" type="checkbox"></label><button class="button button-dark" id="save-cookie-settings" type="button" data-i18n="saveChoices"></button></dialog>
  `;

  applyTranslations();
  renderUrgentSteps();
  renderFaq();
  fillCategories();
  renderProperties();
  renderArticles();
  renderReview();
  renderLegalList();
  bindEvents();
  setupHero();
  setupCookies();
  document.querySelector('#current-year').textContent = new Date().getFullYear();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = t(element.dataset.i18n);
    if (Array.isArray(value)) return;
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') element.placeholder = value;
    else element.textContent = value;
  });
  const title = document.querySelector('[data-i18n="heroTitle"]');
  title.innerHTML = escapeHtml(t('heroTitle')).replaceAll('\n', '<br>');
  document.querySelector('#search-category option[value=""]')?.replaceChildren(t('allTypes'));
  document.querySelector('#search-price option[value=""]')?.replaceChildren(t('allPrices'));
  document.querySelector('.menu-toggle').setAttribute('aria-label', t('menuOpen'));
  document.querySelector('.main-navigation').setAttribute('aria-label', t('mainMenu'));
  document.querySelector('#language-toggle').setAttribute('aria-label', t('languageLabel'));
  document.querySelector('#language-menu').setAttribute('aria-label', t('languageLabel'));
  document.querySelector('#review-prev').setAttribute('aria-label', t('previousReview'));
  document.querySelector('#review-next').setAttribute('aria-label', t('nextReview'));
  document.querySelector('#quick-contact-toggle').setAttribute('aria-label', t('quickContact'));
  document.querySelectorAll('[data-close-dialog]').forEach((button) => button.setAttribute('aria-label', t('close')));
  document.querySelector('#view-all-top span').textContent = t('viewAll');
  document.querySelector('#manage-cookies').textContent = state.language === 'lv' ? 'Sīkdatņu iestatījumi' : t('cookieSettings');
  document.querySelector('.desktop-link[href*="/blog/"]').firstChild.textContent = `${t('allArticles')} `;
}

function fillCategories() {
  const select = document.querySelector('#search-category');
  const categories = [...new Set(state.properties.map((item) => item.category).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'lv'));
  select.innerHTML = `<option value="">${escapeHtml(t('allTypes'))}</option>${categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(categoryLabel(category))}</option>`).join('')}`;
}

function priceNumber(value) {
  const number = String(value ?? '').replace(/[^\d]/g, '');
  return Number(number) || 0;
}

function propertySummary(property) {
  let summary = (property.description || '').replace(/^\[LV\]/, '').trim();
  const title = property.title.trim();
  if (summary.endsWith(title)) summary = summary.slice(0, -title.length).trim();
  summary = summary.replace(/([a-zāčēģīķļņšūž0-9])([A-ZĀČĒĢĪĶĻŅŠŪŽ])/g, '$1 $2').replace(/\s+/g, ' ').trim();
  if (summary.length > 260) summary = `${summary.slice(0, 257).replace(/\s+\S*$/, '')}…`;
  return summary;
}

function filteredProperties() {
  const category = document.querySelector('#search-category')?.value ?? '';
  const maxPrice = Number(document.querySelector('#search-price')?.value ?? 0);
  const query = (document.querySelector('#search-query')?.value ?? '').trim().toLocaleLowerCase(state.language);
  return state.properties.filter((property) => {
    const matchesCategory = !category || property.category === category;
    const matchesPrice = !maxPrice || (priceNumber(property.price) > 0 && priceNumber(property.price) <= maxPrice);
    const matchesQuery = !query || `${property.title} ${property.address} ${property.description}`.toLocaleLowerCase(state.language).includes(query);
    return matchesCategory && matchesPrice && matchesQuery;
  });
}

function renderProperties() {
  const results = filteredProperties();
  const shown = state.showAll ? results : results.slice(0, state.visibleCount);
  const grid = document.querySelector('#property-grid');
  grid.innerHTML = shown.map((property, index) => `
    <article class="property-card" style="--card-index:${index}">
      <button class="property-image-button" type="button" data-property="${escapeHtml(property.slug)}" aria-label="${escapeHtml(t('details'))}: ${escapeHtml(property.title)}">
        <img src="${escapeHtml(assetUrl(property.image_local || property.image))}" alt="${escapeHtml(property.title)}" ${index < 3 ? 'fetchpriority="high"' : 'loading="lazy"'}>
        ${property.category ? `<span class="property-category">${escapeHtml(categoryLabel(property.category))}</span>` : ''}
        ${property.gallery_count ? `<span class="photo-count">${escapeHtml(property.gallery_count)} foto</span>` : ''}
      </button>
      <div class="property-card-body">
        <div class="property-card-top"><span class="property-area-label">${escapeHtml(property.address.split(',')[1]?.trim() || property.address)}</span><span class="property-agent-label">${escapeHtml(property.agent)}</span></div>
        <h3><button class="property-title-button" type="button" data-property="${escapeHtml(property.slug)}">${escapeHtml(property.title)}</button></h3>
        <p class="property-address">${escapeHtml(property.address)}</p>
        ${property.facts?.length ? `<div class="property-facts">${property.facts.slice(0, 3).map((fact) => `<span>${escapeHtml(fact.value)} <small>${escapeHtml(factLabel(fact.label))}</small></span>`).join('')}</div>` : ''}
        <div class="property-card-bottom"><strong class="property-price">${escapeHtml(property.price || t('priceFrom'))}</strong><button class="arrow-button" type="button" data-property="${escapeHtml(property.slug)}" aria-label="${escapeHtml(t('details'))}">↗</button></div>
      </div>
    </article>`).join('');
  document.querySelector('#property-count').textContent = `${results.length} ${t('propertyCount')}`;
  document.querySelector('#filter-summary').textContent = results.length === 0 ? t('noResults') : '';
  document.querySelector('#view-all').hidden = state.showAll || results.length <= state.visibleCount;
  document.querySelector('#view-all-top').hidden = results.length === 0;
  grid.querySelectorAll('[data-property]').forEach((button) => button.addEventListener('click', () => openProperty(button.dataset.property)));
}

function openProperty(slug) {
  const property = state.properties.find((item) => item.slug === slug);
  if (!property) return;
  const dialog = document.querySelector('#property-dialog');
  const images = (property.gallery?.length ? property.gallery : [property.image_local || property.image]).filter(Boolean);
  const agent = agents[property.agent] ?? { phone: '+371 2492 2942' };
  const hasLocation = Number.isFinite(property.lat) && Number.isFinite(property.lng);
  document.querySelector('#property-dialog-content').innerHTML = `
    <div class="property-detail">
      <div class="property-detail-media">
      <img id="property-detail-image" src="${escapeHtml(assetUrl(images[0]))}" alt="${escapeHtml(property.title)}">
        ${images.length > 1 ? `
          <button class="property-nav property-nav-prev" type="button" data-gallery-step="-1" aria-label="${escapeHtml(t('previousSlide'))}">←</button>
          <button class="property-nav property-nav-next" type="button" data-gallery-step="1" aria-label="${escapeHtml(t('nextSlide'))}">→</button>
          <span class="property-gallery-position" id="property-gallery-position">1 / ${images.length}</span>
          <div class="property-detail-thumbs" role="group" aria-label="${escapeHtml(t('galleryLabel'))}">
            ${images.map((image, index) => `<button type="button" class="property-thumb${index === 0 ? ' is-active' : ''}" data-gallery-index="${index}" aria-label="${escapeHtml(`${t('photo')} ${index + 1}`)}"><img src="${escapeHtml(assetUrl(image))}" alt="" loading="lazy"></button>`).join('')}
          </div>` : ''}
      </div>
      <div class="property-detail-copy">
        <div class="property-type"><span class="property-type-blob">${escapeHtml(categoryLabel(property.category) || t('priceFrom'))}</span>${images.length > 1 ? `<span class="property-photo-count">${images.length} ${escapeHtml(t('photos'))}</span>` : ''}</div>
        <h2 id="property-dialog-title">${escapeHtml(property.title)}</h2>
        <div class="property-detail-place">
          <p class="property-detail-address">${escapeHtml(property.address)}</p>
          ${hasLocation ? `<button class="property-map-toggle" type="button" id="property-map-toggle" aria-expanded="false" aria-controls="property-map"><span>${escapeHtml(t('preciseLocation'))}</span><span aria-hidden="true">↗</span></button>` : ''}
        </div>
        ${hasLocation ? `<div class="property-map" id="property-map" hidden></div>` : ''}
        <p class="property-detail-price">${escapeHtml(property.price || t('priceFrom'))}</p>
        ${property.facts?.length ? `<ul class="property-detail-facts">${property.facts.map((fact) => `<li><strong>${escapeHtml(fact.value)}</strong><span>${escapeHtml(factLabel(fact.label))}</span></li>`).join('')}</ul>` : ''}
        <p class="property-detail-text">${escapeHtml(propertySummary(property))}</p>
        <div class="property-detail-agent"><span>${escapeHtml(t('agent'))}</span><strong>${escapeHtml(property.agent)}</strong><a href="tel:${escapeHtml(agent.phone.replace(/\s/g, ''))}">${escapeHtml(agent.phone)}</a></div>
        <div class="property-detail-actions">
          <button class="button button-dark" type="button" id="property-enquire">${escapeHtml(t('enquire'))}</button>
          <a class="button button-outline" href="${escapeHtml(property.url)}" target="_blank" rel="noreferrer">${escapeHtml(t('fullListing'))}<span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </div>`;

  const main = document.querySelector('#property-detail-image');
  const counter = document.querySelector('#property-gallery-position');
  const thumbs = [...document.querySelectorAll('[data-gallery-index]')];
  let index = 0;

  const show = (next) => {
    index = ((next % images.length) + images.length) % images.length;
    main.src = assetUrl(images[index]);
    if (counter) counter.textContent = `${index + 1} / ${images.length}`;
    thumbs.forEach((thumb, position) => thumb.classList.toggle('is-active', position === index));
  };

  thumbs.forEach((thumb) => thumb.addEventListener('click', () => show(Number(thumb.dataset.galleryIndex))));
  document.querySelectorAll('[data-gallery-step]').forEach((button) => button.addEventListener('click', () => show(index + Number(button.dataset.galleryStep))));
  galleryState = images.length > 1 ? { step: (delta) => show(index + delta) } : null;

  const media = document.querySelector('.property-detail-media');
  let touchStart = null;
  media.addEventListener('touchstart', (event) => { touchStart = event.changedTouches[0].clientX; }, { passive: true });
  media.addEventListener('touchend', (event) => {
    if (touchStart === null) return;
    const delta = event.changedTouches[0].clientX - touchStart;
    touchStart = null;
    if (images.length > 1 && Math.abs(delta) > 40) show(index + (delta < 0 ? 1 : -1));
  });

  const mapToggle = document.querySelector('#property-map-toggle');
  mapToggle?.addEventListener('click', () => {
    const map = document.querySelector('#property-map');
    const open = mapToggle.getAttribute('aria-expanded') !== 'true';
    mapToggle.setAttribute('aria-expanded', String(open));
    map.hidden = !open;
    if (open && !map.querySelector('iframe')) {
      const query = `${property.lat},${property.lng}`;
      map.innerHTML = `<iframe title="${escapeHtml(t('preciseLocation'))}: ${escapeHtml(property.title)}" src="https://www.google.com/maps?q=${query}&z=16&hl=${state.language}&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <a class="property-map-link" href="https://www.google.com/maps?q=${query}" target="_blank" rel="noreferrer"><span>${escapeHtml(t('openInMaps'))}</span><span aria-hidden="true">↗</span></a>`;
    }
    if (open) map.scrollIntoView({ block: 'nearest' });
  });

  document.querySelector('#property-enquire').addEventListener('click', () => {
    dialog.close();
    document.querySelector('#kontakti').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  document.querySelector('#property-dialog-content').scrollTop = 0;
  dialog.showModal();
}

function renderArticles() {
  document.querySelector('#article-grid').innerHTML = state.articles.map((article, index) => `
    <article class="article-card"><a href="${escapeHtml(article.url)}" target="_blank" rel="noreferrer"><img src="${escapeHtml(assetUrl(article.image))}" alt="" loading="lazy"><div class="article-copy"><span class="article-date">${escapeHtml(article.date)}</span><h3>${escapeHtml(t('articleTitles')?.[index] ?? article.title)}</h3><span class="article-link">${escapeHtml(t('readArticle'))}<span aria-hidden="true">↗</span></span></div></a></article>`).join('');
}

function renderReview() {
  const review = extendedTranslations[state.language]?.reviews?.[state.review] ?? reviews[state.review];
  document.querySelector('#review-quote').textContent = review.quote;
  document.querySelector('#review-name').textContent = review.name;
  document.querySelector('#review-position').textContent = `${String(state.review + 1).padStart(2, '0')} / ${String(reviews.length).padStart(2, '0')}`;
}

const HERO_DELAY = 6000;
let heroVisibilityBound = false;
let galleryState = null;

function heroProperties() {
  return state.properties.filter((property) => property.hero_image);
}

function updateHeroCaption() {
  const properties = heroProperties();
  const property = properties[state.heroIndex];
  if (!property) return;
  const position = document.querySelector('#hero-position');
  if (!position) return;
  position.textContent = String(state.heroIndex + 1).padStart(2, '0');
  document.querySelector('#hero-caption-title').textContent = property.title;
  document.querySelector('#hero-caption-location').textContent = [property.city, property.price].filter(Boolean).join(' · ');
  const link = document.querySelector('[data-hero-link]');
  link.dataset.heroSlug = property.slug;
  link.setAttribute('aria-label', `${t('details')}: ${property.title}`);
  document.querySelectorAll('.hero-slide').forEach((slide, index) => slide.classList.toggle('is-active', index === state.heroIndex));
}

function restartHeroProgress() {
  const bar = document.querySelector('#hero-progress');
  if (!bar) return;
  bar.classList.remove('is-running');
  void bar.offsetWidth;
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) bar.classList.add('is-running');
}

function pauseHero() {
  clearInterval(state.heroTimer);
  state.heroTimer = null;
  document.querySelector('#hero-progress')?.classList.remove('is-running');
}

function goHero(step) {
  const total = heroProperties().length;
  if (total < 2) return;
  state.heroIndex = (state.heroIndex + step + total) % total;
  updateHeroCaption();
  restartHeroProgress();
}

function startHeroTimer() {
  clearInterval(state.heroTimer);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  state.heroTimer = setInterval(() => goHero(1), HERO_DELAY);
  restartHeroProgress();
}

function setupHero() {
  const visual = document.querySelector('#hero-carousel');
  if (!visual) return;
  const properties = heroProperties();
  state.heroIndex = Math.min(state.heroIndex, Math.max(properties.length - 1, 0));
  document.querySelector('#hero-total').textContent = String(properties.length).padStart(2, '0');
  visual.querySelector('[data-hero-prev]').addEventListener('click', () => { goHero(-1); startHeroTimer(); });
  visual.querySelector('[data-hero-next]').addEventListener('click', () => { goHero(1); startHeroTimer(); });
  visual.querySelector('[data-hero-link]').addEventListener('click', (event) => openProperty(event.currentTarget.dataset.heroSlug));
  visual.addEventListener('mouseenter', pauseHero);
  visual.addEventListener('mouseleave', startHeroTimer);
  visual.addEventListener('focusin', pauseHero);
  visual.addEventListener('focusout', startHeroTimer);
  if (!heroVisibilityBound) {
    heroVisibilityBound = true;
    document.addEventListener('visibilitychange', () => (document.hidden ? pauseHero() : startHeroTimer()));
  }
  updateHeroCaption();
  startHeroTimer();
}

function setupMobileMenu() {
  const menu = document.querySelector('#mobile-menu');
  const toggle = document.querySelector('.menu-toggle');
  if (!menu || !toggle) return;

  const mobileQuery = window.matchMedia('(max-width: 680px)');
  let lastFocused = null;

  const open = () => {
    lastFocused = document.activeElement;
    menu.classList.add('is-open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-locked');
    menu.querySelector('.mobile-menu-close')?.focus();
  };

  const close = (restoreFocus = true) => {
    if (!menu.classList.contains('is-open')) return;
    menu.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-locked');
    if (restoreFocus) (lastFocused instanceof HTMLElement ? lastFocused : toggle).focus();
  };

  toggle.addEventListener('click', () => (menu.classList.contains('is-open') ? close() : open()));
  menu.querySelectorAll('[data-menu-close]').forEach((element) => element.addEventListener('click', () => close()));
  menu.querySelectorAll('.mobile-menu-nav a').forEach((link) => link.addEventListener('click', () => close(false)));
  menu.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });

  // Leaving the mobile breakpoint (rotation, resize) must not leave a stray
  // panel or a locked body behind.
  mobileQuery.addEventListener('change', (event) => { if (!event.matches) close(false); });
}

function renderLegalList() {
  document.querySelector('#legal-list').innerHTML = t('legalItems')
    .map((item, index) => `<li><span class="legal-number">${String(index + 1).padStart(2, '0')}</span><p>${escapeHtml(item)}</p></li>`)
    .join('');
}

function renderUrgentSteps() {
  document.querySelector('#urgent-steps').innerHTML = t('urgentSteps').map(([day, title, description]) => `<li class="urgent-step"><span class="urgent-day">${escapeHtml(day)}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p></li>`).join('');
}

function renderFaq() {
  document.querySelector('#faq-list').innerHTML = t('faqItems').map(([question, answer]) => `<details class="faq-item"><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join('');
}

function setLanguage(code) {
  if (!languages[code] || code === state.language) return;
  state.language = code;
  localStorage.setItem('site-language', code);
  renderShell();
}

/**
 * Header language switcher: a button plus a styled listbox, so the choice is
 * not the browser's native select popup. Keyboard: Enter/Space/ArrowDown opens,
 * arrows move, Enter/Space picks, Escape closes and returns focus.
 */
function setupLanguageSwitcher() {
  const toggle = document.querySelector('#language-toggle');
  const menu = document.querySelector('#language-menu');
  if (!toggle || !menu) return;

  const options = [...menu.querySelectorAll('[data-language]')];
  const activeOption = options.find((option) => option.classList.contains('is-active')) ?? options[0];
  let lastFocused = null;

  const isOpen = () => !menu.hidden;

  const open = (focusFirst = false) => {
    lastFocused = document.activeElement;
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    const target = focusFirst ? options[0] : activeOption;
    target?.focus();
  };

  const close = (restoreFocus = true) => {
    if (!isOpen()) return;
    // Focus is inside the menu when closing by keyboard: hand it back to the
    // button so the user does not land on the document body.
    const focusWasInside = menu.contains(document.activeElement);
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    if (!restoreFocus) return;
    if (focusWasInside) toggle.focus();
    else if (lastFocused instanceof HTMLElement && lastFocused.isConnected) lastFocused.focus();
  };

  const focusOption = (index) => {
    const bounded = (index + options.length) % options.length;
    options.forEach((option, position) => option.setAttribute('tabindex', position === bounded ? '0' : '-1'));
    options[bounded].focus();
  };

  const choose = (option) => {
    close(false);
    setLanguage(option.dataset.language);
  };

  toggle.addEventListener('click', () => (isOpen() ? close() : open()));
  toggle.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      open(true);
    }
  });

  options.forEach((option, index) => {
    option.addEventListener('click', () => choose(option));
    option.addEventListener('mouseenter', () => {
      // Keep the roving tabindex on whatever the pointer is over.
      options.forEach((other, position) => other.setAttribute('tabindex', position === index ? '0' : '-1'));
    });
    option.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        choose(option);
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        focusOption(index + 1);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        focusOption(index - 1);
      } else if (event.key === 'Home') {
        event.preventDefault();
        focusOption(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        focusOption(options.length - 1);
      } else if (event.key === 'Escape') {
        event.preventDefault();
        close();
      } else if (event.key === 'Tab') {
        close(false);
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (isOpen() && !event.target.closest('.language-switcher')) close(false);
  });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
}

function bindEvents() {
  setupLanguageSwitcher();
  setupMobileMenu();

  document.querySelector('#property-search').addEventListener('submit', (event) => {
    event.preventDefault();
    state.showAll = true;
    renderProperties();
    document.querySelector('#ipasumi').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  document.querySelector('#search-category').addEventListener('change', () => { state.showAll = true; renderProperties(); });
  document.querySelector('#search-price').addEventListener('change', () => { state.showAll = true; renderProperties(); });
  document.querySelector('#search-query').addEventListener('input', () => { state.showAll = true; renderProperties(); });
  document.querySelector('#view-all').addEventListener('click', () => { state.showAll = true; renderProperties(); });
  document.querySelector('#view-all-top').addEventListener('click', (event) => { event.preventDefault(); state.showAll = true; renderProperties(); document.querySelector('#ipasumi').scrollIntoView({ behavior: 'smooth' }); });

  document.querySelector('#review-prev').addEventListener('click', () => { state.review = (state.review + reviews.length - 1) % reviews.length; renderReview(); });
  document.querySelector('#review-next').addEventListener('click', () => { state.review = (state.review + 1) % reviews.length; renderReview(); });

  document.querySelectorAll('[data-close-dialog]').forEach((button) => button.addEventListener('click', () => button.closest('dialog').close()));
  document.querySelectorAll('dialog').forEach((dialog) => dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  }));

  const propertyDialog = document.querySelector('#property-dialog');
  propertyDialog.addEventListener('keydown', (event) => {
    if (!galleryState || (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight')) return;
    event.preventDefault();
    galleryState.step(event.key === 'ArrowRight' ? 1 : -1);
  });
  propertyDialog.addEventListener('close', () => { galleryState = null; });

  const quickToggle = document.querySelector('#quick-contact-toggle');
  quickToggle.addEventListener('click', () => {
    const panel = document.querySelector('#quick-contact-panel');
    const open = quickToggle.getAttribute('aria-expanded') !== 'true';
    quickToggle.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
  });

  document.querySelector('#contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const feedback = document.querySelector('#form-feedback');
    feedback.textContent = t('localNote');
    feedback.hidden = false;
  });

  document.querySelector('#accept-cookies').addEventListener('click', () => saveCookieConsent(true));
  document.querySelector('#reject-cookies').addEventListener('click', () => saveCookieConsent(false));
  document.querySelector('#open-cookie-settings').addEventListener('click', openCookieSettings);
  document.querySelector('#manage-cookies').addEventListener('click', openCookieSettings);
  document.querySelector('#save-cookie-settings').addEventListener('click', () => saveCookieConsent(document.querySelector('#analytics-cookies').checked));
}

function setupCookies() {
  const saved = localStorage.getItem('cookie-consent');
  document.querySelector('#cookie-banner').hidden = saved !== null;
  document.querySelector('#analytics-cookies').checked = saved === 'all';
}

function saveCookieConsent(analytics) {
  localStorage.setItem('cookie-consent', analytics ? 'all' : 'essential');
  document.querySelector('#cookie-banner').hidden = true;
  document.querySelector('#cookie-dialog').close();
}

function openCookieSettings() {
  document.querySelector('#analytics-cookies').checked = localStorage.getItem('cookie-consent') === 'all';
  document.querySelector('#cookie-dialog').showModal();
}

async function start() {
  try {
    const [properties, articles] = await Promise.all([
      fetch(assetUrl('/data/properties.json')).then((response) => response.json()),
      fetch(assetUrl('/data/articles.json')).then((response) => response.json()),
    ]);
    state.properties = properties;
    state.articles = articles;
    renderShell();
  } catch (error) {
    document.querySelector('#app').innerHTML = '<main class="load-error">Could not load local content. Run the project using <code>npm run dev</code>.</main>';
    console.error(error);
  }
}

start();
