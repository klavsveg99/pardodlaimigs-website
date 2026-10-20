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
    heroBody: 'Profesionāls atbalsts no pirmās sarunas līdz darījuma noslēgšanai. Skaidrs process, pārdomāta stratēģija un cilvēki, kuri ir Jūsu pusē.',
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
    apartmentText: 'Esam pārdevuši vairāk nekā 100 dzīvokļu. Cenu nosakām pēc reāliem darījumiem un laikus sakārtojam dokumentus.',
    house: 'Māja',
    houseText: 'Korekta cena paātrina pārdošanu. Sakārtojam platības un dokumentus, lai pircējs saņemtu finansējumu.',
    land: 'Zeme',
    landText: 'Pārbaudām zonējumu un dalīšanas iespējas, kā arī aprēķinām komunikāciju izbūves izmaksas.',
    farmland: 'Lauksaimniecības zeme',
    farmlandText: 'Pārzinām meža un lauksaimniecības zemes cenas pēc zemes veida un audzes vecuma visā Latvijā.',
    sellAction: 'Pieteikt konsultāciju',
    reviewsEyebrow: 'Ko saka mūsu klienti',
    reviewsTitle: 'Labi darījumi sākas ar uzticēšanos',
    reviewCount: '150+ laimīgu klientu',
    blogEyebrow: 'Padomi, ieteikumi un vērtīgs materiāls',
    blogTitle: 'Bloga raksti',
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
    formSuccess: 'Paldies! Sazināsimies ar Jums tuvākajā laikā.',
    formError: 'Neizdevās nosūtīt pieteikumu. Lūdzu, mēģiniet vēlreiz vai zvaniet mums.',
    formConsent: 'Piekrītu personas datu apstrādei saskaņā ar privātuma politiku',
    loadMore: 'Rādīt vairāk rakstu',
    viewMoreProperties: 'Skatīt visus īpašumus',
    formPhoneCode: 'Valsts kods',
    formPhoneInvalid: 'Ievadiet derīgu tālruņa numuru.',
    formEmailInvalid: 'Ievadiet derīgu e-pasta adresi.',
    formCaptchaFailed: 'Drošības pārbaude neizdevās. Lūdzu, mēģiniet vēlreiz.',
    termsLabel: 'pakalpojuma noteikumi',
    recaptchaNote: 'Šo vietni aizsargā reCAPTCHA. Uz to attiecas Google [privacy] un [terms].',
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
    eyebrow: 'Real estate agency in Latvia', heroTitle: 'Sell your property.\nFor the best price.', heroBody: 'Professional support from the first conversation to closing. A clear process, a considered strategy, and people on your side.', heroAction: 'Request a valuation', videoAction: 'Meet our team', heroNote: 'More than 150 happy clients',
    searchTitle: 'Find your next property', searchType: 'Property type', searchPrice: 'Maximum price', searchPlace: 'Place or keyword', searchAction: 'Search', allTypes: 'All types', allPrices: 'Any price',
    propertiesEyebrow: 'Land and homes for sale', propertiesTitle: 'Properties worth a closer look', propertiesLead: 'Browse current listings and get in touch to find out more.', viewAll: 'View all properties', propertyCount: 'properties', details: 'View property',
    sellEyebrow: 'A smoother way to sell', sellTitle: 'A considered approach for every property', sellLead: 'An accurate valuation and a clear plan help you make better decisions.', apartment: 'Apartment', apartmentText: 'We have sold more than 100 apartments. We set the price from real transactions and get the documents in order in good time.', house: 'House', houseText: 'A correct price speeds up the sale. We sort out the areas and documents so the buyer can obtain financing.', land: 'Land', landText: 'We check zoning and subdivision options, and calculate the cost of building utilities.', farmland: 'Farmland', farmlandText: 'We know forest and farmland prices by land type and stand age across Latvia.', sellAction: 'Request a consultation',
    reviewsEyebrow: 'What our clients say', reviewsTitle: 'Good deals start with trust', reviewCount: '150+ happy clients', blogEyebrow: 'Advice, ideas and useful resources', blogTitle: 'Blog articles', readArticle: 'Read article', teamEyebrow: 'People on your side', teamTitle: 'Our team', agent: 'Real estate agent',
    contactEyebrow: 'Let’s talk about your property', contactTitle: 'Taking the first step is easy', contactBody: 'Tell us what you would like to sell. We will talk through your situation and agree on next steps.', formName: 'Name', formPhone: 'Phone', formEmail: 'Email', formType: 'Property type', formArea: 'Area', formLocation: 'Location', formCadastre: 'Cadastral number', formDesiredPrice: 'Desired price (€)', formDescription: 'Property description', formComment: 'Additional notes', formApartment: 'Apartment', formHouse: 'House', formLand: 'Land', formForest: 'Forest', urgentCheckbox: 'I want to sell urgently', formMessage: 'About the property', formSubmit: 'Request a valuation', formSuccess: 'Thank you! We will contact you shortly.', formError: 'Could not send your request. Please try again or call us.', formConsent: 'I agree to the processing of my personal data under the privacy policy', loadMore: 'Show more articles', viewMoreProperties: 'View all properties', formPhoneCode: 'Country code', formPhoneInvalid: 'Enter a valid phone number.', formEmailInvalid: 'Enter a valid email address.', formCaptchaFailed: 'The security check failed. Please try again.', termsLabel: 'Terms of Service', recaptchaNote: 'This site is protected by reCAPTCHA and the Google [privacy] and [terms] apply.',
    legalTitle: 'Legal support', legalItems: ['Purchase of properties with legal encumbrances', 'Subdivision and naming of properties', 'Inheritance matters', 'Debt recovery matters', 'Preparation and review of purchase agreements'], footerLine: 'Quick, easy, happy.', quickContact: 'Quick contact', call: 'Call', email: 'Send an email', cookiesTitle: 'Your privacy choices', cookiesText: 'We use essential cookies to run this site. With your permission, we may also use analytics cookies.', acceptCookies: 'Accept all', rejectCookies: 'Essential only', cookieSettings: 'Settings', cookieNecessary: 'Essential', cookieAnalytics: 'Analytics', saveChoices: 'Save choices', close: 'Close', noResults: 'No properties match these filters.', priceFrom: 'Price on request',
  },
  ru: {
    name: 'Русский', languageLabel: 'Язык', mainMenu: 'Главная навигация', menuOpen: 'Открыть меню', previousReview: 'Предыдущий отзыв', nextReview: 'Следующий отзыв', formChoose: 'Выберите', navProperties: 'Объекты', navSell: 'Продать недвижимость', navAbout: 'О нас', navBlog: 'Полезное', navContact: 'Контакты',
    eyebrow: 'Агентство недвижимости в Латвии', heroTitle: 'Продайте недвижимость.\nПо лучшей цене.', heroBody: 'Профессиональная поддержка от первого разговора до завершения сделки. Понятный процесс, продуманная стратегия и люди на вашей стороне.', heroAction: 'Оценить недвижимость', videoAction: 'Познакомьтесь с нами', heroNote: 'Более 150 довольных клиентов',
    searchTitle: 'Найдите свою недвижимость', searchType: 'Тип недвижимости', searchPrice: 'Максимальная цена', searchPlace: 'Место или ключевое слово', searchAction: 'Искать', allTypes: 'Все типы', allPrices: 'Любая цена',
    propertiesEyebrow: 'Земля и недвижимость на продажу', propertiesTitle: 'Объекты, заслуживающие внимания', propertiesLead: 'Посмотрите актуальные предложения и свяжитесь с нами, чтобы узнать подробности.', viewAll: 'Все объекты', propertyCount: 'объектов', details: 'Посмотреть объект',
    sellEyebrow: 'Продажа без лишнего стресса', sellTitle: 'Индивидуальный подход к каждому объекту', sellLead: 'Точная оценка и понятный план помогают принимать верные решения.', apartment: 'Квартира', apartmentText: 'Мы продали более 100 квартир. Цену определяем по реальным сделкам и своевременно приводим в порядок документы.', house: 'Дом', houseText: 'Правильная цена ускоряет продажу. Приводим в порядок площади и документы, чтобы покупатель получил финансирование.', land: 'Земля', landText: 'Проверяем зонирование и возможность раздела, а также рассчитываем затраты на коммуникации.', farmland: 'Сельскохозяйственная земля', farmlandText: 'Знаем цены на лес и сельскохозяйственную землю по типу земли и возрасту насаждений по всей Латвии.', sellAction: 'Записаться на консультацию',
    reviewsEyebrow: 'Отзывы наших клиентов', reviewsTitle: 'Хорошие сделки начинаются с доверия', reviewCount: 'Более 150 довольных клиентов', blogEyebrow: 'Советы и полезные материалы', blogTitle: 'Статьи в блогах', readArticle: 'Читать статью', teamEyebrow: 'Люди на вашей стороне', teamTitle: 'Наша команда', agent: 'Агент по недвижимости',
    contactEyebrow: 'Обсудим вашу недвижимость', contactTitle: 'Сделать первый шаг просто', contactBody: 'Расскажите, что вы хотите продать. Мы обсудим ситуацию и договоримся о следующих шагах.', formName: 'Имя', formPhone: 'Телефон', formEmail: 'Эл. почта', formType: 'Тип недвижимости', formArea: 'Площадь', formLocation: 'Местоположение', formCadastre: 'Кадастровый номер', formDesiredPrice: 'Желаемая цена (€)', formDescription: 'Описание недвижимости', formComment: 'Дополнительная информация', formApartment: 'Квартира', formHouse: 'Дом', formLand: 'Земля', formForest: 'Лес', urgentCheckbox: 'Хочу продать срочно', formMessage: 'О недвижимости', formSubmit: 'Запросить оценку', formSuccess: 'Спасибо! Мы свяжемся с вами в ближайшее время.', formError: 'Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.', formConsent: 'Я согласен на обработку персональных данных согласно политике конфиденциальности', loadMore: 'Показать больше статей', viewMoreProperties: 'Показать все объекты', formPhoneCode: 'Код страны', formPhoneInvalid: 'Введите корректный номер телефона.', formEmailInvalid: 'Введите корректный адрес эл. почты.', formCaptchaFailed: 'Проверка безопасности не удалась. Попробуйте ещё раз.', termsLabel: 'Условия использования', recaptchaNote: 'Этот сайт защищён reCAPTCHA. Применяются [privacy] и [terms] Google.',
    legalTitle: 'Юридическая поддержка', legalItems: ['Выкуп объектов с юридическими обременениями', 'Раздел недвижимости и присвоение названий', 'Вопросы наследства', 'Вопросы взыскания долгов', 'Подготовка и проверка договоров купли-продажи'], footerLine: 'Быстро, удобно, счастливо.', quickContact: 'Быстрая связь', call: 'Позвонить', email: 'Написать', cookiesTitle: 'Настройки конфиденциальности', cookiesText: 'Для работы сайта используются необходимые cookie. С вашего разрешения также могут использоваться аналитические cookie.', acceptCookies: 'Разрешить все', rejectCookies: 'Только необходимые', cookieSettings: 'Настройки', cookieNecessary: 'Необходимые', cookieAnalytics: 'Аналитика', saveChoices: 'Сохранить выбор', close: 'Закрыть', noResults: 'По этим критериям объекты не найдены.', priceFrom: 'Цена по запросу',
  },
  de: {
    name: 'Deutsch', languageLabel: 'Sprache', mainMenu: 'Hauptnavigation', menuOpen: 'Menü öffnen', previousReview: 'Vorherige Bewertung', nextReview: 'Nächste Bewertung', formChoose: 'Auswählen', navProperties: 'Immobilien', navSell: 'Immobilie verkaufen', navAbout: 'Über uns', navBlog: 'Ratgeber', navContact: 'Kontakt',
    eyebrow: 'Immobilienagentur in Lettland', heroTitle: 'Verkaufen Sie Ihre Immobilie.\nZum besten Preis.', heroBody: 'Professionelle Unterstützung vom ersten Gespräch bis zum Abschluss. Ein klarer Ablauf, eine durchdachte Strategie und Menschen an Ihrer Seite.', heroAction: 'Immobilie bewerten lassen', videoAction: 'Lernen Sie uns kennen', heroNote: 'Mehr als 150 zufriedene Kunden',
    searchTitle: 'Finden Sie Ihre nächste Immobilie', searchType: 'Immobilientyp', searchPrice: 'Höchstpreis', searchPlace: 'Ort oder Stichwort', searchAction: 'Suchen', allTypes: 'Alle Typen', allPrices: 'Jeder Preis',
    propertiesEyebrow: 'Grundstücke und Immobilien zum Verkauf', propertiesTitle: 'Immobilien, die einen Blick wert sind', propertiesLead: 'Entdecken Sie aktuelle Angebote und fragen Sie uns nach weiteren Informationen.', viewAll: 'Alle Immobilien ansehen', propertyCount: 'Immobilien', details: 'Immobilie ansehen',
    sellEyebrow: 'Verkaufen ohne unnötigen Stress', sellTitle: 'Ein passender Weg für jede Immobilie', sellLead: 'Eine genaue Bewertung und ein klarer Plan helfen bei guten Entscheidungen.', apartment: 'Wohnung', apartmentText: 'Wir haben über 100 Wohnungen verkauft. Den Preis bestimmen wir anhand realer Verkäufe und bringen die Unterlagen rechtzeitig in Ordnung.', house: 'Haus', houseText: 'Ein korrekter Preis beschleunigt den Verkauf. Wir klären Flächen und Unterlagen, damit der Käufer eine Finanzierung erhält.', land: 'Grundstück', landText: 'Wir prüfen Bebauungsplan und Teilungsmöglichkeiten und berechnen die Kosten für die Erschließung.', farmland: 'Landwirtschaftliche Fläche', farmlandText: 'Wir kennen die Preise für Wald und landwirtschaftliche Flächen nach Landtyp und Bestandsalter in ganz Lettland.', sellAction: 'Beratung anfragen',
    reviewsEyebrow: 'Das sagen unsere Kunden', reviewsTitle: 'Gute Geschäfte beginnen mit Vertrauen', reviewCount: 'Mehr als 150 zufriedene Kunden', blogEyebrow: 'Tipps und hilfreiche Informationen', blogTitle: 'Blog-Artikel', readArticle: 'Artikel lesen', teamEyebrow: 'Menschen an Ihrer Seite', teamTitle: 'Unser Team', agent: 'Immobilienmakler',
    contactEyebrow: 'Sprechen wir über Ihre Immobilie', contactTitle: 'Der erste Schritt ist ganz einfach', contactBody: 'Erzählen Sie uns, was Sie verkaufen möchten. Wir besprechen Ihre Situation und die nächsten Schritte.', formName: 'Name', formPhone: 'Telefon', formEmail: 'E-Mail', formType: 'Immobilientyp', formArea: 'Fläche', formLocation: 'Standort', formCadastre: 'Katasternummer', formDesiredPrice: 'Gewünschter Preis (€)', formDescription: 'Beschreibung der Immobilie', formComment: 'Zusätzliche Angaben', formApartment: 'Wohnung', formHouse: 'Haus', formLand: 'Grundstück', formForest: 'Wald', urgentCheckbox: 'Ich möchte dringend verkaufen', formMessage: 'Zur Immobilie', formSubmit: 'Bewertung anfragen', formSuccess: 'Vielen Dank! Wir melden uns in Kürze bei Ihnen.', formError: 'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an.', formConsent: 'Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der Datenschutzerklärung zu', loadMore: 'Mehr Artikel anzeigen', viewMoreProperties: 'Alle Objekte anzeigen', formPhoneCode: 'Ländervorwahl', formPhoneInvalid: 'Bitte eine gültige Telefonnummer eingeben.', formEmailInvalid: 'Bitte eine gültige E-Mail-Adresse eingeben.', formCaptchaFailed: 'Die Sicherheitsprüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut.', termsLabel: 'Nutzungsbedingungen', recaptchaNote: 'Diese Website ist durch reCAPTCHA geschützt. Es gelten die [privacy] und die [terms] von Google.',
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
    photos: 'foto', photo: 'Attēls', galleryLabel: 'Īpašuma attēli', viewFullscreen: 'Rādīt pilnekrāna režīmā', exitFullscreen: 'Iziet no pilnekrāna režīma', enquire: 'Sazināties par īpašumu', fullListing: 'Atvērt sludinājumu',
    reserved: 'Rezervēts',
    preciseLocation: 'Precīza atrašanās vieta', openInMaps: 'Atvērt Google Maps',
    allArticles: 'Visi raksti',
    teamLead: 'Pieredze, cilvēcīga attieksme un rūpes par katru detaļu - no pirmās sarunas līdz atslēgu nodošanai.',
    articleTitles: ['Zemesgrāmata - pats svarīgākais dokuments nekustamā īpašuma darījumos', 'Cik maksā lauksaimniecības zeme Latvijā? 2025. gada cenu apskats', 'Nekustamo īpašumu tirgus Saldū - aktuālākās cenas un iespējas'],
    factLabels: { 'Telpu platība': 'Telpu platība', 'Zemes platība': 'Zemes platība', Istabas: 'Istabas', Vannasistabas: 'Vannasistabas' },
    urgentEyebrow: 'Kad laiks ir svarīgs', urgentTitle: 'Pārdod īpašumu 3 dienu laikā', urgentLead: 'Steidzamai realizācijai - saziņa vienas stundas laikā un skaidri nākamie soļi.',
    urgentSteps: [['01 / diena', 'Saziņa un izvērtēšana', 'Sazvanīšanās, ātrās realizācijas vērtības noteikšana un īpašuma dokumentu analīze.'], ['02 / diena', 'Piedāvājums', 'Veicam ātrās realizācijas izpēti, piedāvājam cenu un vienojamies par tikšanos pie notāra.'], ['03 / diena', 'Darījuma noslēgums', 'Tiekamies pie notāra un pēc darījuma nauda tiek pārskaitīta tavā kontā.']],
    urgentAction: 'Pieteikt steidzamu pārdošanu', faqTitle: 'Biežāk uzdotie jautājumi',
    faqItems: [['Kādas ir izmaksas, pārdodot īpašumu ar mums?', 'Maksa ir atkarīga no darījuma sarežģītības un visbiežāk sākas no 5%. Slēdzam ekskluzīvu vienošanos un sadarbojamies ar aģentiem visā Latvijā.'], ['Vai es varu pārdot īpašumu pats?', 'Jā, taču ar profesionāli sagatavotu pārdošanu iegūsiet vairāk. Tirgus analīze, dokumentu sakārtošana, foto un video, publikācija Vācijas tirgū, juridiskais atbalsts un sadarbība ar notāriem. Jums atliks tikai ierasties pie notāra.'], ['Cik ilgi aizņem pārdošana?', 'Atklāti un patiesi: pēc precīzas tirgus analīzes un pareizi noteiktas cenas īpašumu dažkārt izdodas pārdot nedēļas laikā. Visbiežāk tas aizņem no viena līdz diviem mēnešiem, bet dārgāku vai sarežģītāku objektu pārdošana var ilgt līdz gadam.'], ['Kas nepieciešams pirms īpašuma pārdošanas?', 'Sākumā pietiek ar lēmumu pārdot. Kopā izanalizēsim dokumentus, izpētīsim tirgu un noteiksim īpašuma patieso vērtību.']],
    podcastTitle: 'Vairāk noderīga satura', podcastLead: 'Apskati mūsu YouTube kanālu un Spotify podkāstu par nekustamo īpašumu.', youtube: 'YouTube kanāls', spotify: 'Spotify podkāsts',
  },
  en: {
    navFaq: 'FAQ', faqEyebrow: 'FAQ', privacyLabel: 'Privacy policy', googleReviews: 'Google reviews',
    heroCarouselLabel: 'Property image gallery', previousSlide: 'Previous image', nextSlide: 'Next image',
    legalEyebrow: 'Additional services', legalLead: 'When a transaction is not straightforward, we also help with legal matters, from reviewing documents to registering them in the Land Register.',
    photos: 'photos', photo: 'Image', galleryLabel: 'Property images', viewFullscreen: 'View fullscreen', exitFullscreen: 'Exit fullscreen', enquire: 'Enquire about this property', fullListing: 'Open full listing',
    reserved: 'Reserved',
    preciseLocation: 'Precise location', openInMaps: 'Open in Google Maps',
    allArticles: 'All articles', teamLead: 'Experience, a personal approach and care for every detail, from the first conversation to handing over the keys.',
    articleTitles: ['The Land Register - the key document in real estate transactions', 'How much does farmland cost in Latvia? 2025 price review', 'The Saldus real estate market: current prices and opportunities'],
    reviews: [{ quote: 'I originally tried selling my property myself, without success. Roberts brought in a professional photographer, created a strong listing and sold the property quickly for the price I wanted. Thank you!', name: 'Simra Sia' }, { quote: 'Many thanks for the professional work! Roberts was responsive, communicative and knowledgeable. The process was quick, high-quality and stress-free. I highly recommend him.', name: 'Aivars Ikaunieks' }, { quote: 'Working with Roberts was excellent. The paperwork was prepared quickly, great photos were taken, and a buyer was found in no time. A punctual and responsible specialist.', name: 'Lāsma Sarksne' }],
    factLabels: { 'Telpu platība': 'Indoor area', 'Zemes platība': 'Land area', Istabas: 'Rooms', Vannasistabas: 'Bathrooms' },
    urgentEyebrow: 'When time matters', urgentTitle: 'Sell your property in 3 days', urgentLead: 'For urgent sales, we will contact you within one hour and explain the next steps.',
    urgentSteps: [['DAY 01', 'Get in touch', 'We discuss the property, estimate its quick-sale value, and review the documents.'], ['DAY 02', 'Receive an offer', 'We assess quick-sale options, make an offer, and arrange a notary appointment.'], ['DAY 03', 'Complete the sale', 'We meet at the notary and the sale proceeds are transferred to your account.']],
    urgentAction: 'Request an urgent sale', faqTitle: 'Frequently asked questions',
    faqItems: [['What does it cost to sell with you?', 'Fees depend on the complexity of the transaction and most often start at 5%. We agree on the terms in advance and work with agents across Latvia.'], ['Can I sell my property myself?', 'Yes, but a professionally prepared sale will get you more. Market analysis, document preparation, photo and video, publication on the German market, legal support and cooperation with notaries. All that is left for you is to come to the notary.'], ['How long does a sale take?', 'Openly and honestly: after a precise market analysis and correct pricing, a property sometimes sells within weeks. Most often it takes one to two months, but a more expensive or complex property can take up to a year.'], ['What do I need before selling?', 'First, decide that you want to sell. We will review the documents, research the market, and estimate the property’s value.']],
    podcastTitle: 'More useful content', podcastLead: 'Explore our YouTube channel and Spotify podcast about real estate.', youtube: 'YouTube channel', spotify: 'Spotify podcast',
  },
  ru: {
    navFaq: 'FAQ', faqEyebrow: 'Вопросы', privacyLabel: 'Политика конфиденциальности', googleReviews: 'Отзывы Google',
    heroCarouselLabel: 'Галерея изображений объектов', previousSlide: 'Предыдущее изображение', nextSlide: 'Следующее изображение',
    legalEyebrow: 'Дополнительные услуги', legalLead: 'Если сделка непростая, мы помогаем и с юридическими вопросами - от проверки документов до регистрации в Земельной книге.',
    photos: 'фото', photo: 'Изображение', galleryLabel: 'Изображения объекта', viewFullscreen: 'Открыть на весь экран', exitFullscreen: 'Выйти из полноэкранного режима', enquire: 'Связаться по объекту', fullListing: 'Открыть объявление',
    reserved: 'Забронировано',
    preciseLocation: 'Точное местоположение', openInMaps: 'Открыть в Google Maps',
    allArticles: 'Все статьи', teamLead: 'Опыт, внимательное отношение и забота о каждой детали - от первого разговора до передачи ключей.',
    articleTitles: ['Земельная книга - главный документ в сделках с недвижимостью', 'Сколько стоит сельскохозяйственная земля в Латвии? Обзор цен за 2025 год', 'Рынок недвижимости в Салдусе: актуальные цены и возможности'],
    reviews: [{ quote: 'Сначала я пыталась продать недвижимость самостоятельно, но безуспешно. Роберт пригласил профессионального фотографа, подготовил хорошее объявление и быстро продал недвижимость по желаемой цене. Спасибо!', name: 'Simra Sia' }, { quote: 'Большое спасибо за профессиональную работу! Роберт был отзывчивым, общительным и знающим. Все прошло быстро, качественно и без лишнего стресса. Рекомендую!', name: 'Aivars Ikaunieks' }, { quote: 'Сотрудничество с Робертом было отличным. Документы подготовили быстро, сделали хорошие фотографии и в кратчайший срок нашли покупателя. Ответственный и пунктуальный специалист.', name: 'Lāsma Sarksne' }],
    factLabels: { 'Telpu platība': 'Площадь помещений', 'Zemes platība': 'Площадь земли', Istabas: 'Комнаты', Vannasistabas: 'Ванные комнаты' },
    urgentEyebrow: 'Когда важно время', urgentTitle: 'Продайте недвижимость за 3 дня', urgentLead: 'При срочной продаже мы свяжемся с вами в течение часа и объясним следующие шаги.',
    urgentSteps: [['ДЕНЬ 01', 'Свяжитесь с нами', 'Обсудим недвижимость, оценим стоимость быстрой продажи и проверим документы.'], ['ДЕНЬ 02', 'Получите предложение', 'Изучим варианты быстрой продажи, предложим цену и договоримся о встрече у нотариуса.'], ['ДЕНЬ 03', 'Завершите сделку', 'Встретимся у нотариуса, после чего деньги поступят на ваш счет.']],
    urgentAction: 'Запросить срочную продажу', faqTitle: 'Часто задаваемые вопросы',
    faqItems: [['Сколько стоит продать недвижимость с вами?', 'Стоимость зависит от сложности сделки и чаще всего начинается от 5%. Условия согласовываются заранее, мы работаем с агентами по всей Латвии.'], ['Можно ли продать недвижимость самостоятельно?', 'Да, но профессионально подготовленная продажа принесёт вам больше. Анализ рынка, подготовка документов, фото и видео, публикация на немецком рынке, юридическая поддержка и сотрудничество с нотариусами. Вам останется только прийти к нотариусу.'], ['Сколько времени занимает продажа?', 'Честно и открыто: после точного анализа рынка и правильно определённой цены недвижимость иногда удаётся продать за недели. Чаще всего это занимает от одного до двух месяцев, но продажа более дорогого или сложного объекта может длиться до года.'], ['Что нужно для начала продажи?', 'Сначала достаточно принять решение о продаже. Мы проверим документы, изучим рынок и оценим реальную стоимость.']],
    podcastTitle: 'Больше полезных материалов', podcastLead: 'Смотрите наш YouTube-канал и слушайте подкаст Spotify о недвижимости.', youtube: 'Канал YouTube', spotify: 'Подкаст Spotify',
  },
  de: {
    navFaq: 'FAQ', faqEyebrow: 'FAQ', privacyLabel: 'Datenschutzerklärung', googleReviews: 'Google-Bewertungen',
    heroCarouselLabel: 'Bildergalerie der Immobilien', previousSlide: 'Vorheriges Bild', nextSlide: 'Nächstes Bild',
    legalEyebrow: 'Zusätzliche Leistungen', legalLead: 'Wenn ein Geschäft nicht einfach ist, helfen wir auch bei rechtlichen Fragen - von der Prüfung der Unterlagen bis zur Eintragung ins Grundbuch.',
    photos: 'Fotos', photo: 'Bild', galleryLabel: 'Bilder der Immobilie', viewFullscreen: 'Vollbild anzeigen', exitFullscreen: 'Vollbild beenden', enquire: 'Zur Immobilie anfragen', fullListing: 'Inserat öffnen',
    reserved: 'Reserviert',
    preciseLocation: 'Genauer Standort', openInMaps: 'In Google Maps öffnen',
    allArticles: 'Alle Artikel', teamLead: 'Erfahrung, persönliche Betreuung und Sorgfalt bei jedem Detail - vom ersten Gespräch bis zur Schlüsselübergabe.',
    articleTitles: ['Das Grundbuch - das wichtigste Dokument bei Immobiliengeschäften', 'Was kostet Ackerland in Lettland? Preisübersicht 2025', 'Der Immobilienmarkt in Saldus: aktuelle Preise und Möglichkeiten'],
    reviews: [{ quote: 'Zuerst habe ich versucht, meine Immobilie selbst zu verkaufen, leider ohne Erfolg. Roberts engagierte einen professionellen Fotografen, erstellte ein gutes Inserat und verkaufte die Immobilie schnell zum gewünschten Preis. Vielen Dank!', name: 'Simra Sia' }, { quote: 'Vielen Dank für die professionelle Arbeit! Roberts war sehr hilfsbereit, kommunikativ und kompetent. Der Ablauf war schnell, hochwertig und stressfrei. Ich empfehle ihn gerne weiter.', name: 'Aivars Ikaunieks' }, { quote: 'Die Zusammenarbeit mit Roberts war ausgezeichnet. Die Unterlagen wurden schnell vorbereitet, gute Fotos gemacht und in kürzester Zeit ein Käufer gefunden. Ein pünktlicher und verantwortungsvoller Spezialist.', name: 'Lāsma Sarksne' }],
    factLabels: { 'Telpu platība': 'Wohnfläche', 'Zemes platība': 'Grundstücksfläche', Istabas: 'Zimmer', Vannasistabas: 'Badezimmer' },
    urgentEyebrow: 'Wenn Zeit wichtig ist', urgentTitle: 'Immobilie in 3 Tagen verkaufen', urgentLead: 'Bei einem dringenden Verkauf melden wir uns innerhalb einer Stunde und erklären die nächsten Schritte.',
    urgentSteps: [['TAG 01', 'Kontakt aufnehmen', 'Wir besprechen die Immobilie, schätzen den schnellen Verkaufspreis und prüfen die Unterlagen.'], ['TAG 02', 'Angebot erhalten', 'Wir prüfen die Möglichkeiten, unterbreiten ein Angebot und vereinbaren einen Notartermin.'], ['TAG 03', 'Verkauf abschließen', 'Wir treffen uns beim Notar und der Verkaufserlös wird auf Ihr Konto überwiesen.']],
    urgentAction: 'Dringenden Verkauf anfragen', faqTitle: 'Häufig gestellte Fragen',
    faqItems: [['Was kostet ein Verkauf mit Ihnen?', 'Die Kosten hängen von der Komplexität des Geschäfts ab und beginnen meist bei 5%. Die Bedingungen vereinbaren wir im Voraus.'], ['Kann ich meine Immobilie selbst verkaufen?', 'Ja, aber ein professionell vorbereiteter Verkauf bringt Ihnen mehr. Marktanalyse, Aufbereitung der Unterlagen, Foto und Video, Veröffentlichung auf dem deutschen Markt, rechtliche Unterstützung und Zusammenarbeit mit Notaren. Für Sie bleibt nur der Gang zum Notar.'], ['Wie lange dauert ein Verkauf?', 'Offen und ehrlich: Nach einer genauen Marktanalyse und korrekter Preisbestimmung lässt sich eine Immobilie manchmal innerhalb weniger Wochen verkaufen. Meist dauert es ein bis zwei Monate, ein teureres oder komplexeres Objekt kann jedoch bis zu einem Jahr in Anspruch nehmen.'], ['Was brauche ich vor dem Verkauf?', 'Zunächst müssen Sie sich für den Verkauf entscheiden. Wir prüfen gemeinsam die Unterlagen, den Markt und den realistischen Wert.']],
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

// Vector flags: the old 18x12 PNGs were visibly soft on any modern screen.
const flags = {
  lv: '/images/flags/lv.svg',
  en: '/images/flags/en.svg',
  ru: '/images/flags/ru.svg',
  de: '/images/flags/de.svg',
};

/** The team, and the photos shown in the team grid and its dialog. */
const AGENTS = [
  { slug: 'roberts-evarsons', name: 'Roberts Evarsons', phone: '+371 2492 2942', photo: '/images/team/roberts.jpg' },
  { slug: 'inga-dobuma', name: 'Inga Dobuma', phone: '+371 2822 8208', photo: '/images/team/inga.jpg', portrait: true },
];

const agents = {
  'Roberts Evarsons': { phone: '+371 2492 2942' },
  'Inga Dobuma': { phone: '+371 2822 8208' },
};

/**
 * Country dial codes with the national number length each one accepts. The CRM
 * validates against the same list (config/site.php phone_prefixes), so keep
 * them in step. Latvia first, then alphabetical by ISO code.
 */
const phonePrefixes = [
  ['LV', '371', 8, 8],
  ['AT', '43', 8, 11],
  ['BE', '32', 8, 9],
  ['BY', '375', 9, 9],
  ['CH', '41', 9, 9],
  ['CZ', '420', 9, 9],
  ['DE', '49', 6, 11],
  ['DK', '45', 8, 8],
  ['EE', '372', 7, 8],
  ['ES', '34', 9, 9],
  ['FI', '358', 6, 12],
  ['FR', '33', 9, 9],
  ['GB', '44', 9, 10],
  ['IE', '353', 7, 9],
  ['IT', '39', 8, 11],
  ['LT', '370', 8, 8],
  ['NL', '31', 9, 9],
  ['NO', '47', 8, 8],
  ['PL', '48', 9, 9],
  ['PT', '351', 9, 9],
  ['RU', '7', 10, 10],
  ['SE', '46', 7, 10],
  ['UA', '380', 9, 9],
  ['US', '1', 10, 10],
];
const DEFAULT_PREFIX = 'LV';

/**
 * Google reCAPTCHA v3 - the key the WordPress site already uses (WPForms), so
 * the score history stays consistent across the move. The matching secret lives
 * in the CRM's environment, never in this repository.
 */
const RECAPTCHA_SITE_KEY = '6Lf5xtctAAAAADPY0aHqxliMKSfrkC2AhHeVSdD6';

/** How many blog cards appear at once, and on every load more. */
const BLOG_BATCH = 3;

const state = {
  language: localStorage.getItem('site-language') || 'lv',
  properties: [],
  posts: [],
  pages: [],
  useful: null,
  agentBios: null,
  visibleCount: 6,
  blogVisible: BLOG_BATCH,
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

/**
 * Listings and the contact form talk to the CRM even though this site is a
 * static build. The bundled snapshot renders first, then the public property
 * feed is merged over it: new listings appear, changed fields update and
 * properties that are no longer public disappear - without a rebuild. If the
 * CRM is unreachable the snapshot simply stays on screen.
 */
const CRM_API_BASE = import.meta.env.VITE_CRM_API_BASE || 'https://crm.pardodlaimigs.lv/api/public';
const RESERVED = 'reserved';
// Statuses that must not appear in the public listing.
const HIDDEN_STATUSES = new Set(['draft', 'sold', 'deleted']);

/** Reserved properties stay visible but drop below the active listings. */
function orderProperties() {
  state.properties = state.properties
    .filter((property) => !HIDDEN_STATUSES.has(property.status))
    .sort((a, b) => Number(a.status === RESERVED) - Number(b.status === RESERVED));
}

/** "€300,000", the same shape the snapshot uses. */
function formatPrice(price, currency = 'EUR') {
  const amount = Number(price);
  if (!Number.isFinite(amount) || amount <= 0) return '';
  return `${currency === 'EUR' ? '€' : `${currency} `}${Math.round(amount).toLocaleString('en-US')}`;
}

/** Facts use the labels the site already translates (see factLabels). */
function liveFacts(property) {
  const facts = [];
  const land = Number(property.land_m2);
  const size = Number(property.size_m2);
  if (land > 0) facts.push({ value: `${Number((land / 10000).toFixed(2))} ha`, label: 'Zemes platība' });
  else if (size > 0) facts.push({ value: `${size} m²`, label: 'Telpu platība' });
  if (Number(property.beds) > 0) facts.push({ value: String(property.beds), label: 'Istabas' });
  if (Number(property.baths) > 0) facts.push({ value: String(property.baths), label: 'Vannasistabas' });
  return facts;
}

/** Everything the cards and pages render, so a refresh only re-renders on a real change. */
function propertySignature(property) {
  return JSON.stringify([
    property.slug, property.title, property.description, property.price,
    property.address, property.agent, property.category, property.status,
    property.city, property.lat, property.lng, property.gallery_count,
    property.facts, property.image, property.gallery?.[0], property.hero_image,
  ]);
}

/** Map one CRM feed row onto the shape the site renders. */
function liveProperty(live, fallback = null) {
  const images = (live.images || []).filter((image) => image && image.url);
  const gallery = images.map((image) => image.url);
  const galleryThumbs = images.map((image) => image.thumb_url || image.url);
  const price = formatPrice(live.price, live.currency);
  const facts = liveFacts(live);

  return {
    slug: live.slug,
    title: live.title || fallback?.title || '',
    description: live.description || fallback?.description || '',
    price: price,
    address: live.address || live.city || fallback?.address || '',
    agent: live.agent_name || fallback?.agent || '',
    category: live.category || fallback?.category || '',
    status: live.status || 'published',
    city: live.city || fallback?.city || '',
    lat: Number.isFinite(live.lat) ? live.lat : (fallback?.lat ?? null),
    lng: Number.isFinite(live.lng) ? live.lng : (fallback?.lng ?? null),
    image: images[0]?.thumb_url || images[0]?.url || fallback?.image || fallback?.image_local || '',
    gallery: gallery.length ? gallery : (fallback?.gallery || []),
    gallery_thumbs: gallery.length ? galleryThumbs : (fallback?.gallery_thumbs || []),
    gallery_count: images.length || fallback?.gallery_count || '',
    facts: facts.length ? facts : (fallback?.facts || []),
    // The hero carousel keeps the locally cropped image for listings that
    // already had one; a brand new listing uses its first CRM photo.
    hero_image: fallback?.hero_image || images[0]?.url || '',
  };
}

/**
 * Merge the public CRM feed over the bundled snapshot. Returns the merged list
 * and whether anything visible changed.
 */
function mergeLiveProperties(liveProperties) {
  const snapshot = new Map(state.properties.map((property) => [property.slug, property]));
  const before = state.properties.map(propertySignature).join('|');

  // The CRM feed order is the admin's sort order, so the live list replaces
  // the bundled order entirely. Snapshot entries only supply fallback data
  // (and the hero crop) for slugs that are still public.
  state.properties = liveProperties.map((property) => liveProperty(property, snapshot.get(property.slug) ?? null));

  return state.properties.map(propertySignature).join('|') !== before;
}

/**
 * Pull the live listings and report whether anything changed, so the caller
 * only re-renders when needed (a re-render resets an open form).
 */
async function refreshLiveProperties() {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);
    const response = await fetch(`${CRM_API_BASE}/properties?t=${Date.now()}`, { cache: 'no-store', signal: controller.signal });
    clearTimeout(timer);
    if (!response.ok) return false;

    const payload = await response.json();
    if (!Array.isArray(payload.properties)) return false;

    return mergeLiveProperties(payload.properties);
  } catch (error) {
    console.warn('CRM property feed unavailable; keeping the bundled snapshot.', error);
    return false;
  }
}

/**
 * Migrated WordPress media that now lives in this repository. The article and
 * page copy still carries the original /wp-content/... paths (the CRM holds the
 * same HTML, see its resources/site/wordpress-media-manifest.json), so the URLs
 * are swapped here, where BASE_URL is known - a stored body cannot know whether
 * the site is served from /new/ or from the domain root. Anything not listed is
 * left alone, so a reference that was never migrated keeps working.
 */
const LOCAL_MEDIA = {
  '/wp-content/uploads/2023/05/broceni-5.mp4': '/video/posts/pardosana-broceni-5.mp4',
  '/wp-content/uploads/2023/10/2023-10-16-19-06-10.mp4': '/video/posts/mvp-darijums-kuldiga.mp4',
  '/wp-content/uploads/2023/10/Darijumi-Saldus-pilseta-un-cenubanka.lv_.mp4': '/video/posts/darijumi-saldus-pilseta-un-cenubanka.mp4',
  '/wp-content/uploads/2023/10/kas-ir-pardod-laimigs.mp4': '/video/posts/kas-ir-pardod-laimigs.mp4',
  '/wp-content/uploads/2023/10/pardod-laimigs-intro.mp4': '/video/pardod-laimigs-intro.mp4',
  '/wp-content/uploads/2025/09/Ka-rikoties-sanemot-mantojuma-zemi-vai-ipasumu.pdf': '/files/ka-rikoties-sanemot-mantojuma.pdf',
};
const localMediaHtml = (html = '') => html.replace(
  /(?:https?:\/\/(?:www\.)?pardodlaimigs\.lv)?(\/wp-content\/uploads\/[^"'?<>\s]+)/g,
  (match, path) => (LOCAL_MEDIA[path] ? assetUrl(LOCAL_MEDIA[path]) : match),
);

/**
 * The preview keeps the URL shapes of the site it is migrating to -
 * /ipasums/<slug>/, /<post-slug>/, /blog/ and /<page-slug>/ - so links and
 * bookmarks survive the move off WordPress. Every route is emitted as its own
 * index.html at build time (see scripts/routes.mjs), which is what makes a
 * direct hit or a refresh work on plain static hosting.
 */
const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
const siteUrl = (path = '') => `${base}${String(path).replace(/^\/+/, '')}`;

function currentPath() {
  const path = window.location.pathname;
  const relative = path.startsWith(base) ? path.slice(base.length) : path.replace(/^\//, '');
  return decodeURIComponent(relative).replace(/^\/+|\/+$/g, '');
}

function currentRoute() {
  const relative = currentPath();
  if (!relative) return { name: 'home' };
  const property = relative.match(/^ipasums\/(.+)$/);
  if (property) return { name: 'property', slug: property[1] };
  if (state.pages.some((page) => page.slug === relative)) return { name: 'page', slug: relative };
  if (state.posts.some((post) => post.slug === relative)) return { name: 'post', slug: relative };
  return { name: 'home' };
}

/** Section anchors live on the home page, so they lead home from anywhere else. */
function homeAnchor(anchor) {
  return currentPath() === '' ? `#${anchor}` : `${siteUrl()}#${anchor}`;
}

function pageTitle(route) {
  const suffix = 'Pārdod Laimīgs';
  if (route.name === 'property') {
    const property = propertyBySlug(route.slug);
    return property ? `${property.title} - ${suffix}` : suffix;
  }
  if (route.name === 'post') {
    const post = postBySlug(route.slug);
    return post ? `${postTitle(post)} - ${suffix}` : suffix;
  }
  if (route.name === 'page') {
    const page = state.pages.find((item) => item.slug === route.slug);
    return page ? `${page.translations[state.language]?.title ?? suffix} - ${suffix}` : suffix;
  }
  return state.language === 'lv' ? `${suffix} - nekustamā īpašuma pārdošana` : `${suffix} - ${t('navSell')}`;
}

function propertyBySlug(slug) {
  return state.properties.find((property) => property.slug === slug);
}

function postBySlug(slug) {
  return state.posts.find((post) => post.slug === slug);
}

/** Post copy, falling back to Latvian when a translation is missing. */
function postTranslation(post) {
  return post.translations[state.language] ?? post.translations.lv;
}

function postTitle(post) {
  return postTranslation(post).title;
}

function galleryOf(property) {
  return (property.gallery?.length ? property.gallery : [property.image_local || property.image]).filter(Boolean);
}

/** Header, gallery and copy of a property. Shared by the dialog and the page. */
function propertyDetailHtml(property, { heading = 'h2', fullText = false } = {}) {
  const images = galleryOf(property);
  const thumbs = property.gallery_thumbs?.length === images.length ? property.gallery_thumbs : images;
  const agent = agents[property.agent] ?? { phone: '+371 2492 2942' };
  const hasLocation = Number.isFinite(property.lat) && Number.isFinite(property.lng);
  const description = fullText ? descriptionHtml(property) : '';
  const category = categoryLabel(property.category);
  return `
    <div class="property-detail">
      <div class="property-detail-media">
        <div class="property-detail-photo">
          <img id="property-detail-image" src="${escapeHtml(assetUrl(images[0]))}" alt="${escapeHtml(property.title)}">
          <button class="property-gallery-fullscreen" type="button" id="property-gallery-fullscreen" data-gallery-fullscreen aria-label="${escapeHtml(t('viewFullscreen'))}" aria-pressed="false"><i class="fa-solid fa-expand" aria-hidden="true"></i></button>
          ${images.length > 1 ? `
            <button class="property-nav property-nav-prev" type="button" data-gallery-step="-1" aria-label="${escapeHtml(t('previousSlide'))}"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i></button>
            <button class="property-nav property-nav-next" type="button" data-gallery-step="1" aria-label="${escapeHtml(t('nextSlide'))}"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
            <span class="property-gallery-position" id="property-gallery-position">1 / ${images.length}</span>` : ''}
        </div>
        ${images.length > 1 ? `
          <div class="property-detail-thumbs" role="group" aria-label="${escapeHtml(t('galleryLabel'))}">
            ${images.map((image, index) => `<button type="button" class="property-thumb${index === 0 ? ' is-active' : ''}" data-gallery-index="${index}" aria-label="${escapeHtml(`${t('photo')} ${index + 1}`)}"><img src="${escapeHtml(assetUrl(thumbs[index] || image))}" alt="" loading="lazy"></button>`).join('')}
          </div>` : ''}
      </div>
      <div class="property-detail-copy">
        <div class="property-type">${property.status === RESERVED ? `<span class="property-status-chip">${escapeHtml(t('reserved'))}</span>` : ''}${category ? `<span class="property-type-blob">${escapeHtml(category)}</span>` : ''}${images.length > 1 ? `<span class="property-photo-count">${images.length} ${escapeHtml(t('photos'))}</span>` : ''}</div>
        <${heading} id="property-detail-title">${escapeHtml(property.title)}</${heading}>
        <div class="property-detail-place">
          <p class="property-detail-address">${escapeHtml(property.address)}</p>
          ${hasLocation ? `<button class="property-map-toggle" type="button" id="property-map-toggle" aria-expanded="false" aria-controls="property-map"><span>${escapeHtml(t('preciseLocation'))}</span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>` : ''}
        </div>
        ${hasLocation ? '<div class="property-map" id="property-map" hidden></div>' : ''}
        <p class="property-detail-price">${escapeHtml(property.price || t('priceFrom'))}</p>
        ${property.facts?.length ? `<ul class="property-detail-facts">${property.facts.map((fact) => `<li><strong>${escapeHtml(fact.value)}</strong><span>${escapeHtml(factLabel(fact.label))}</span></li>`).join('')}</ul>` : ''}
        ${description
          ? `<div class="property-detail-text property-detail-description">${description}</div>`
          : `<p class="property-detail-text">${escapeHtml(propertySummary(property))}</p>`}
        <div class="property-detail-agent"><span>${escapeHtml(t('agent'))}</span><div class="property-detail-agent-values"><strong>${escapeHtml(property.agent)}</strong><a href="tel:${escapeHtml(agent.phone.replace(/\s/g, ''))}">${escapeHtml(agent.phone)}</a></div></div>
        <div class="property-detail-actions">
          <button class="button button-dark" type="button" id="property-enquire">${escapeHtml(t('enquire'))}</button>
          ${currentRoute().name === 'property' ? '' : `<a class="button button-outline" href="${escapeHtml(siteUrl(`ipasums/${property.slug}/`))}">${escapeHtml(t('fullListing'))}<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>`}
        </div>
      </div>
    </div>`;
}

/** Wires the gallery, the swipe and the map toggle of a detail block. */
function bindPropertyDetail(property, { keyboard = false } = {}) {
  const images = galleryOf(property);
  const main = document.querySelector('#property-detail-image');
  if (!main) return;

  const counter = document.querySelector('#property-gallery-position');
  const thumbs = [...document.querySelectorAll('[data-gallery-index]')];
  const strip = document.querySelector('.property-detail-thumbs');
  const scrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  let index = 0;

  /** Keep the selected thumbnail visible as the gallery moves. */
  const centerThumb = (position) => {
    const thumb = thumbs[position];
    if (!strip || !thumb) return;
    const stripRect = strip.getBoundingClientRect();
    const thumbRect = thumb.getBoundingClientRect();
    const left = strip.scrollLeft + (thumbRect.left - stripRect.left) - (stripRect.width - thumbRect.width) / 2;
    strip.scrollTo({ left: Math.max(0, left), behavior: scrollBehavior });
  };

  const show = (next) => {
    index = ((next % images.length) + images.length) % images.length;
    main.src = assetUrl(images[index]);
    if (counter) counter.textContent = `${index + 1} / ${images.length}`;
    thumbs.forEach((thumb, position) => thumb.classList.toggle('is-active', position === index));
    centerThumb(index);
  };

  thumbs.forEach((thumb) => thumb.addEventListener('click', () => show(Number(thumb.dataset.galleryIndex))));
  document.querySelectorAll('[data-gallery-step]').forEach((button) => button.addEventListener('click', () => show(index + Number(button.dataset.galleryStep))));
  galleryState = images.length > 1 ? { step: (delta) => show(index + delta) } : null;

  if (keyboard && images.length > 1) {
    document.addEventListener('keydown', (event) => {
      if (event.target instanceof Element && event.target.closest('input, textarea, select, [contenteditable]')) return;
      if (event.key === 'ArrowRight') show(index + 1);
      else if (event.key === 'ArrowLeft') show(index - 1);
    });
  }

  const media = document.querySelector('.property-detail-media');
  document.querySelector('#property-gallery-fullscreen')?.addEventListener('click', () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else media?.requestFullscreen?.();
  });
  let touchStart = null;
  // Swiping the thumbnail strip scrolls it; it must not also step the main image.
  const isGalleryControl = (target) => target instanceof Element && !!target.closest('.property-detail-thumbs, .property-nav, .property-gallery-fullscreen');
  media.addEventListener('touchstart', (event) => {
    touchStart = isGalleryControl(event.target) ? null : event.changedTouches[0].clientX;
  }, { passive: true });
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
        <a class="property-map-link" href="https://www.google.com/maps?q=${query}" target="_blank" rel="noreferrer"><span>${escapeHtml(t('openInMaps'))}</span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>`;
    }
    if (open) map.scrollIntoView({ block: 'nearest' });
  });

  document.querySelector('#property-enquire')?.addEventListener('click', () => {
    document.querySelector('#property-enquire').closest('dialog')?.close();
    document.querySelector('#kontakti')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/** Keep the gallery's fullscreen button in step with the browser (ESC included). */
document.addEventListener('fullscreenchange', () => {
  document.querySelectorAll('[data-gallery-fullscreen]').forEach((button) => {
    const open = document.fullscreenElement !== null && document.fullscreenElement === button.closest('.property-detail-media');
    button.setAttribute('aria-pressed', String(open));
    button.setAttribute('aria-label', t(open ? 'exitFullscreen' : 'viewFullscreen'));
    const icon = button.querySelector('i');
    if (icon) icon.className = `fa-solid ${open ? 'fa-compress' : 'fa-expand'}`;
  });
});

function propertyView(slug) {
  const property = propertyBySlug(slug);
  if (!property) return notFoundView();
  return `
      <section class="property-page">
        <div class="container">
          <p class="breadcrumb"><a href="${homeAnchor('ipasumi')}">${escapeHtml(t('navProperties'))}</a><span aria-hidden="true">/</span><span>${escapeHtml(property.title)}</span></p>
          ${propertyDetailHtml(property, { heading: 'h1', fullText: true })}
        </div>
      </section>
      ${contactSection()}`;
}

function postView(slug) {
  const post = postBySlug(slug);
  if (!post) return notFoundView();
  const copy = postTranslation(post);
  return `
      <article class="section post-page">
        <div class="container post-layout">
          <p class="breadcrumb"><a href="${homeAnchor('blog')}">${escapeHtml(t('navBlog'))}</a><span aria-hidden="true">/</span><span>${escapeHtml(copy.title)}</span></p>
          <h1>${escapeHtml(copy.title)}</h1>
          <p class="post-date">${escapeHtml(post.date)}</p>
          ${post.image ? `<img class="post-cover" src="${escapeHtml(assetUrl(post.image))}" alt="">` : ''}
          <div class="post-body">${localMediaHtml(copy.html)}</div>
        </div>
      </article>
      ${contactSection()}`;
}

function pageView(slug) {
  const page = state.pages.find((item) => item.slug === slug);
  const copy = page?.translations[state.language] ?? page?.translations.lv;
  if (!copy) return notFoundView();
  return `
      <section class="section content-page">
        <div class="container content-layout">
          <h1>${escapeHtml(copy.title)}</h1>
          <div class="post-body">${localMediaHtml(copy.html)}</div>
        </div>
      </section>`;
}

function notFoundView() {
  return `
      <section class="section content-page">
        <div class="container content-layout">
          <h1>404</h1>
          <p><a href="${escapeHtml(siteUrl())}">${escapeHtml(t('navProperties'))}</a></p>
        </div>
      </section>`;
}

/**
 * The path the shell currently shows, so a popstate that only changed the hash
 * can be told apart from a real page change (see bindNavigation).
 */
let lastRenderedPath = '';

/**
 * Client-side navigation between the preview's own pages. Anything the preview
 * does not own (external sites, tel:, mailto:, same-page anchors) keeps its
 * native behaviour.
 */
function bindNavigation() {
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href]');
    if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
    if (!link.getAttribute('href').startsWith(base)) return;

    const url = new URL(link.href);
    const target = url.pathname.slice(base.length).replace(/^\/+|\/+$/g, '');
    const owned = target === '' || /^ipasums\/.+/.test(target)
      || state.posts.some((post) => post.slug === target)
      || state.pages.some((page) => page.slug === target);
    if (!owned) return;

    event.preventDefault();
    if (target === currentPath() && !url.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    history.pushState({}, '', `${siteUrl(target)}${url.hash}`);
    renderRoute();
    // A new page starts at its beginning: without this the browser keeps the
    // previous scroll position, which lands a fresh page at its bottom when the
    // previous one was taller. (Going back is left to the browser, which
    // restores the position it saved for that entry.)
    if (url.hash) document.querySelector(url.hash)?.scrollIntoView({ block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'auto' });
  });

  window.addEventListener('popstate', () => {
    // An in-page anchor (such as the urgent-sale call to action, or any nav
    // link on the home page) also fires popstate, after only the hash changed.
    // The browser scrolls to the fragment itself, so the shell must not be
    // rebuilt for it - doing so would wipe whatever the visitor has already
    // filled into the form.
    if (currentPath() === lastRenderedPath) return;
    renderRoute();
  });
}

/** Re-render whatever route the URL points at. */
function renderRoute({ keepScroll = false } = {}) {
  lastRenderedPath = currentPath();
  const offset = keepScroll ? window.scrollY : 0;
  renderShell();
  if (keepScroll) window.scrollTo({ top: offset, behavior: 'auto' });
}

function contactSection() {
  return `      <section class="contact-section" id="kontakti" aria-labelledby="contact-title">
        <div class="container contact-layout">
          <div class="contact-copy reveal"><p class="eyebrow" data-i18n="contactEyebrow"></p><h2 id="contact-title" data-i18n="contactTitle"></h2><p data-i18n="contactBody"></p><div class="contact-direct"><a href="tel:+37124922942"><span class="contact-label">Roberts</span><strong>+371 2492 2942</strong></a></div></div>
          <form id="contact-form" class="contact-form reveal">
            <div class="form-row"><label><span data-i18n="formType"></span><select name="property_type" required><option value="" selected disabled data-i18n="formChoose"></option><option value="apartment" data-i18n="formApartment"></option><option value="house" data-i18n="formHouse"></option><option value="land" data-i18n="formLand"></option><option value="forest" data-i18n="formForest"></option></select></label><label><span data-i18n="formArea"></span><input name="area" inputmode="decimal" required></label></div>
            <label><span data-i18n="formLocation"></span><input name="location" required></label>
            <div class="form-row"><label><span data-i18n="formCadastre"></span><input name="cadastre" required></label><label><span data-i18n="formDesiredPrice"></span><input name="desired_price" inputmode="decimal"></label></div>
            <label><span data-i18n="formDescription"></span><textarea name="description" rows="3" required></textarea></label>
            <label class="form-check"><input name="urgent" type="checkbox"><span data-i18n="urgentCheckbox"></span></label>
            <div class="form-row"><label><span data-i18n="formName"></span><input name="name" autocomplete="name" required></label>
              <label><span data-i18n="formPhone"></span>
                <span class="phone-field">
                  <select name="phone_prefix" aria-label="${escapeHtml(t('formPhoneCode'))}">
                    ${phonePrefixes.map(([iso, dial]) => `<option value="${iso}"${iso === DEFAULT_PREFIX ? ' selected' : ''}>${iso} +${dial}</option>`).join('')}
                  </select>
                  <input name="phone" type="tel" inputmode="tel" autocomplete="tel-national" required>
                </span>
                <p class="field-error" id="phone-error" hidden></p>
              </label>
            </div>
            <label><span data-i18n="formEmail"></span><input name="email" type="email" autocomplete="email" required><p class="field-error" id="email-error" hidden></p></label>
            <label><span data-i18n="formComment"></span><textarea name="comment" rows="2"></textarea></label>
            <label class="form-check"><input name="consent" type="checkbox" required><span data-i18n="formConsent"></span></label>
            <div class="form-submit-row"><button class="button button-dark" type="submit"><span data-i18n="formSubmit"></span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button></div>
            <p class="form-feedback" id="form-feedback" role="status" hidden></p>
            <p class="recaptcha-note"></p>
          </form>
        </div>
      </section>`;
}

function homeView() {
  const heroSlides = state.properties.filter((property) => property.hero_image);
  return `      <section class="hero-section">
        <div class="container hero-layout">
          <div class="hero-copy">
            <p class="eyebrow" data-i18n="eyebrow"></p>
            <h1 data-i18n="heroTitle"></h1>
            <p class="hero-description" data-i18n="heroBody"></p>
            <div class="hero-actions">
              <a class="button button-light" href="${homeAnchor('kontakti')}"><span data-i18n="heroAction"></span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
              <button class="video-link" type="button" id="open-video" aria-haspopup="dialog"><span class="play-icon" aria-hidden="true"><i class="fa-solid fa-play"></i></span><span data-i18n="videoAction"></span></button>
            </div>
            <div class="hero-proof"><span class="proof-stars" aria-hidden="true"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span><span data-i18n="heroNote"></span></div>
          </div>
          <div class="hero-visual" id="hero-carousel" aria-roledescription="carousel" aria-label="${escapeHtml(t('heroCarouselLabel'))}">
            <div class="hero-slides">
              ${heroSlides.map((property, index) => `
                <img class="hero-slide${index === 0 ? ' is-active' : ''}" src="${escapeHtml(assetUrl(property.hero_image))}" alt="${escapeHtml(property.title)}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>`).join('')}
              <button class="hero-slide-link" type="button" data-hero-link aria-label=""></button>
            </div>
            <div class="hero-image-caption"><span class="caption-label" id="hero-caption-title"></span><span class="caption-location" id="hero-caption-location"></span></div>
            <div class="hero-controls">
              <button class="hero-control" type="button" data-hero-prev aria-label="${escapeHtml(t('previousSlide'))}"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i></button>
              <button class="hero-control" type="button" data-hero-next aria-label="${escapeHtml(t('nextSlide'))}"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
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
            <button class="button button-dark" type="submit"><span data-i18n="searchAction"></span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
          </form>
        </div>
      </section>

      <section class="section properties-section" id="ipasumi" aria-labelledby="properties-title">
        <div class="container">
          <div class="section-heading section-heading-row reveal">
            <div><p class="eyebrow eyebrow-green" data-i18n="propertiesEyebrow"></p><h2 id="properties-title" data-i18n="propertiesTitle"></h2><p class="section-lead" data-i18n="propertiesLead"></p></div>
            <a class="text-link desktop-link" href="#ipasumi" id="view-all-top"><span data-i18n="viewAll"></span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div class="results-line"><span id="property-count"></span><span id="filter-summary"></span></div>
          <div class="property-grid" id="property-grid" aria-live="polite"></div>
          <div class="section-action"><button class="button button-outline" id="view-all" type="button"><span data-i18n="viewAll"></span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button></div>
        </div>
      </section>

      <section class="section selling-section" id="pardot" aria-labelledby="selling-title">
        <div class="container">
          <div class="section-heading section-heading-centered reveal"><p class="eyebrow eyebrow-green" data-i18n="sellEyebrow"></p><h2 id="selling-title" data-i18n="sellTitle"></h2><p class="section-lead" data-i18n="sellLead"></p></div>
          <div class="selling-grid">
            <article class="selling-item reveal"><span class="selling-number">01</span><h3 data-i18n="apartment"></h3><p data-i18n="apartmentText"></p><a class="text-link" href="${homeAnchor('kontakti')}" data-preselect="apartment"><span data-i18n="sellAction"></span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></article>
            <article class="selling-item reveal"><span class="selling-number">02</span><h3 data-i18n="house"></h3><p data-i18n="houseText"></p><a class="text-link" href="${homeAnchor('kontakti')}" data-preselect="house"><span data-i18n="sellAction"></span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></article>
            <article class="selling-item reveal"><span class="selling-number">03</span><h3 data-i18n="land"></h3><p data-i18n="landText"></p><a class="text-link" href="${homeAnchor('kontakti')}" data-preselect="land"><span data-i18n="sellAction"></span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></article>
            <article class="selling-item reveal"><span class="selling-number">04</span><h3 data-i18n="farmland"></h3><p data-i18n="farmlandText"></p><a class="text-link" href="${homeAnchor('kontakti')}" data-preselect="land"><span data-i18n="sellAction"></span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></article>
          </div>
        </div>
      </section>

      <section class="section urgent-section" id="steidzami" aria-labelledby="urgent-title">
        <div class="container">
          <div class="section-heading section-heading-centered reveal"><p class="eyebrow eyebrow-green" data-i18n="urgentEyebrow"></p><h2 id="urgent-title" data-i18n="urgentTitle"></h2><p class="section-lead" data-i18n="urgentLead"></p></div>
          <ol class="urgent-steps" id="urgent-steps"></ol>
          <div class="section-action"><a class="button button-dark" href="${homeAnchor('kontakti')}" data-preselect-urgent><span data-i18n="urgentAction"></span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div>
        </div>
      </section>

      <section class="reviews-section" aria-labelledby="reviews-title">
        <div class="container reviews-layout">
          <div class="reviews-intro reveal"><p class="eyebrow" data-i18n="reviewsEyebrow"></p><h2 id="reviews-title" data-i18n="reviewsTitle"></h2><div class="review-score"><span class="proof-stars" aria-hidden="true"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span><strong>5/5</strong><span data-i18n="reviewCount"></span></div><a class="text-link link-light" href="https://g.page/r/CRZd6XZu2hhmEAE/review" target="_blank" rel="noreferrer"><span data-i18n="googleReviews"></span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div>
          <article class="review-card reveal" aria-live="polite"><span class="quote-mark" aria-hidden="true">“</span><p id="review-quote"></p><div class="review-author"><strong id="review-name"></strong><span class="review-stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span></div><div class="review-controls"><button id="review-prev" type="button" aria-label="${escapeHtml(t('previousReview'))}"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i></button><span id="review-position"></span><button id="review-next" type="button" aria-label="${escapeHtml(t('nextReview'))}"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button></div></article>
        </div>
      </section>

      <section class="section blog-section" id="blog" aria-labelledby="blog-title">
        <div class="container">
          <div class="section-heading reveal"><p class="eyebrow eyebrow-green" data-i18n="blogEyebrow"></p><h2 id="blog-title" data-i18n="blogTitle"></h2></div>
          <div class="article-grid" id="article-grid"></div>
          <div class="section-action"><button class="button button-outline" id="load-more-posts" type="button" data-i18n="loadMore"></button></div>
        </div>
      </section>

      ${usefulSection()}

      <section class="podcast-section">
        <div class="container podcast-layout reveal"><div><p class="eyebrow" data-i18n="podcastTitle"></p><p data-i18n="podcastLead"></p></div><div class="podcast-links"><a href="https://www.youtube.com/@pardodlaimigs" target="_blank" rel="noreferrer"><i class="fa-brands fa-youtube" aria-hidden="true"></i><span data-i18n="youtube"></span><i class="fa-solid fa-arrow-right podcast-link-arrow" aria-hidden="true"></i></a><a href="https://open.spotify.com/show/5Tansq4D8byHA7ciR9DA2n" target="_blank" rel="noreferrer"><i class="fa-brands fa-spotify" aria-hidden="true"></i><span data-i18n="spotify"></span><i class="fa-solid fa-arrow-right podcast-link-arrow" aria-hidden="true"></i></a></div></div>
      </section>

      <section class="section team-section" id="komanda" aria-labelledby="team-title">
        <div class="container team-layout">
          <div class="team-heading reveal"><p class="eyebrow eyebrow-green" data-i18n="teamEyebrow"></p><h2 id="team-title" data-i18n="teamTitle"></h2><p class="section-lead" data-i18n="teamLead"></p></div>
          <div class="team-grid">
            ${AGENTS.map((agent) => `
              <article class="agent-card reveal${agent.portrait ? ' agent-card--portrait' : ''}">
                <button class="agent-photo" type="button" data-agent="${agent.slug}" aria-label="${escapeHtml(agent.name)}"><img src="${escapeHtml(assetUrl(agent.photo))}" alt="" loading="lazy"></button>
                <div>
                  <p class="agent-role" data-i18n="agent"></p>
                  <h3><button class="agent-name" type="button" data-agent="${agent.slug}">${escapeHtml(agent.name)}</button></h3>
                  <a href="tel:${agent.phone.replace(/\s/g, '')}">${escapeHtml(agent.phone)}</a>
                </div>
              </article>`).join('')}
          </div>
        </div>
      </section>

      <section class="legal-section" aria-labelledby="legal-title">
        <div class="container">
          <div class="legal-head reveal">
            <p class="eyebrow" data-i18n="legalEyebrow"></p>
            <h2 id="legal-title" data-i18n="legalTitle"></h2>
            <p data-i18n="legalLead"></p>
          </div>
          <ul class="legal-list" id="legal-list"></ul>
        </div>
      </section>

      ${contactSection()}

      <section class="section faq-section" id="buj" aria-labelledby="faq-title"><div class="container faq-layout"><div><p class="eyebrow eyebrow-green" data-i18n="faqEyebrow"></p><h2 id="faq-title" data-i18n="faqTitle"></h2></div><div class="faq-list" id="faq-list"></div></div></section>`;
}

function viewMarkup() {
  const route = currentRoute();
  if (route.name === 'property') return propertyView(route.slug);
  if (route.name === 'post') return postView(route.slug);
  if (route.name === 'page') return pageView(route.slug);
  return homeView();
}

function renderShell() {
  const route = currentRoute();
  // The shell is always rebuilt with the menu closed, so a lock left over from
  // an open drawer (for example when the language changed inside it) must go.
  document.body.classList.remove('menu-locked');
  document.documentElement.lang = state.language;
  document.title = pageTitle(route);
  document.querySelector('#app').innerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="${siteUrl()}" aria-label="Pārdod Laimīgs - sākums"><img src="${BRAND_LOGO}" alt="Pārdod Laimīgs"></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="${escapeHtml(t('menuOpen'))}"><span></span><span></span><span></span></button>
        <nav class="main-navigation" id="main-navigation" aria-label="${escapeHtml(t('mainMenu'))}">
          <a href="${homeAnchor('ipasumi')}" data-i18n="navProperties"></a>
          <a href="${homeAnchor('pardot')}" data-i18n="navSell"></a>
          <a href="${homeAnchor('komanda')}" data-i18n="navAbout"></a>
          <a href="${homeAnchor('blog')}" data-i18n="navBlog"></a>
          <a href="${homeAnchor('kontakti')}" data-i18n="navContact"></a>
          <a href="${homeAnchor('buj')}" data-i18n="navFaq"></a>
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
                  <span class="language-check" aria-hidden="true"><i class="fa-solid fa-check"></i></span>
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
          ${[['ipasumi', t('navProperties')], ['pardot', t('navSell')], ['komanda', t('navAbout')], ['blog', t('navBlog')], ['kontakti', t('navContact')], ['buj', t('navFaq')]]
            .map(([anchor, label], index) => `<a href="${homeAnchor(anchor)}"><span class="mobile-menu-index">${String(index + 1).padStart(2, '0')}</span><span class="mobile-menu-label-text">${escapeHtml(label)}</span><span class="mobile-menu-arrow" aria-hidden="true"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span></a>`).join('')}
        </nav>

        <div class="mobile-menu-block">
          <p class="mobile-menu-label" data-i18n="quickContact"></p>
          <div class="mobile-menu-actions">
            <a href="https://wa.me/37124922942" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="tel:+37124922942">+371 2492 2942</a>
          </div>
        </div>

        <div class="mobile-menu-block mobile-menu-language">
          <p class="mobile-menu-label" data-i18n="languageLabel"></p>
          <div class="mobile-menu-langs" role="group" aria-label="${escapeHtml(t('languageLabel'))}">
            ${Object.entries(languages).map(([code, lang]) => `
              <button type="button" class="mobile-menu-lang${state.language === code ? ' is-active' : ''}" data-language="${code}" aria-pressed="${state.language === code}">
                <img src="${assetUrl(flags[code])}" alt="" width="18" height="12">${escapeHtml(lang.name)}<span class="language-check" aria-hidden="true"><i class="fa-solid fa-check"></i></span>
              </button>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <main id="top">
${viewMarkup()}
    </main>

    <footer class="site-footer">
      <div class="container footer-main">
        <div class="footer-brand-block">
          <a class="brand footer-brand" href="${siteUrl()}"><img src="${BRAND_LOGO}" alt="Pārdod Laimīgs"></a>
          <p data-i18n="footerLine"></p>
        </div>
        <div class="footer-contact-block">
          <a class="footer-phone" href="tel:+37124922942">+371 2492 2942</a>
          <div class="footer-links"><a href="https://www.youtube.com/@pardodlaimigs" target="_blank" rel="noreferrer">YouTube</a><a href="https://www.facebook.com/PardodLaimigs/" target="_blank" rel="noreferrer">Facebook</a><a href="https://instagram.com/pardodlaimigs" target="_blank" rel="noreferrer">Instagram</a><a href="https://g.page/r/CRZd6XZu2hhmEAE/review" target="_blank" rel="noreferrer">Google</a></div>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© <span id="current-year"></span> Pārdod Laimīgs</span>
        <div class="footer-legal">
          <button type="button" class="footer-cookie-link" id="manage-cookies">Sīkdatņu iestatījumi</button>
          <a href="${siteUrl('privatuma-politika/')}" data-i18n="privacyLabel"></a>
        </div>
      </div>
    </footer>

    <button class="quick-contact-button" id="quick-contact-toggle" type="button" aria-label="${escapeHtml(t('quickContact'))}" aria-expanded="false" aria-controls="quick-contact-panel"><i class="fa-solid fa-headset" aria-hidden="true"></i><span data-i18n="quickContact"></span></button>
    <div class="quick-contact-panel" id="quick-contact-panel" hidden><a class="quick-contact-single" href="https://wa.me/37124922942" target="_blank" rel="noreferrer"><span>WhatsApp</span></a><a href="tel:+37124922942"><span data-i18n="call"></span><strong>+371 2492 2942</strong></a></div>

    <div class="cookie-banner" id="cookie-banner" hidden><div class="cookie-copy"><strong data-i18n="cookiesTitle"></strong><p data-i18n="cookiesText"></p></div><div class="cookie-actions"><button type="button" class="button button-dark" id="accept-cookies" data-i18n="acceptCookies"></button><button type="button" class="button button-quiet" id="reject-cookies" data-i18n="rejectCookies"></button><button type="button" class="cookie-settings" id="open-cookie-settings" data-i18n="cookieSettings"></button></div></div>

    <dialog class="agent-dialog" id="agent-dialog" aria-labelledby="agent-dialog-name">
      <button class="dialog-close" type="button" data-close-dialog aria-label="${escapeHtml(t('close'))}"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
      <div class="agent-dialog-body">
        <img id="agent-dialog-photo" src="" alt="">
        <div class="agent-dialog-copy">
          <p class="agent-role" data-i18n="agent"></p>
          <h2 id="agent-dialog-name"></h2>
          <p class="agent-dialog-bio" id="agent-dialog-bio"></p>
          <div class="agent-dialog-contacts">
            <a class="agent-dialog-phone" id="agent-dialog-phone" href=""><i class="fa-solid fa-phone" aria-hidden="true"></i><span></span></a>
          </div>
          <div class="agent-dialog-listings" id="agent-dialog-listings" hidden>
            <p class="agent-dialog-label"><span data-i18n="navProperties"></span><span id="agent-dialog-count"></span></p>
            <div class="agent-properties" id="agent-dialog-properties"></div>
            <button class="agent-dialog-more" id="agent-dialog-more" type="button" hidden><span data-i18n="viewMoreProperties"></span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>
    </dialog>

    <dialog class="video-dialog" id="video-dialog" aria-label="${escapeHtml(t('videoAction'))}">
      <button class="dialog-close" type="button" data-close-dialog aria-label="${escapeHtml(t('close'))}"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
      <video id="intro-video" controls preload="none" playsinline width="1600" height="900" poster="${assetUrl('/video/pardod-laimigs-intro-poster.jpg')}">
        <source src="${assetUrl('/video/pardod-laimigs-intro.mp4')}" type="video/mp4">
      </video>
    </dialog>

    <dialog class="property-dialog" id="property-dialog" aria-labelledby="property-detail-title"><button class="dialog-close" type="button" data-close-dialog aria-label="Close"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button><div id="property-dialog-content"></div></dialog>
    <dialog class="cookie-dialog" id="cookie-dialog" aria-labelledby="cookie-dialog-title"><button class="dialog-close" type="button" data-close-dialog aria-label="Close"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button><h2 id="cookie-dialog-title" data-i18n="cookiesTitle"></h2><p data-i18n="cookiesText"></p><label class="cookie-option"><span data-i18n="cookieNecessary"></span><input type="checkbox" checked disabled></label><label class="cookie-option"><span data-i18n="cookieAnalytics"></span><input id="analytics-cookies" type="checkbox"></label><button class="button button-dark" id="save-cookie-settings" type="button" data-i18n="saveChoices"></button></dialog>
  `;

  applyTranslations();
  if (route.name === 'home') {
    renderUrgentSteps();
    renderFaq();
    fillCategories();
    renderProperties();
    renderArticles();
    renderReview();
    renderLegalList();
    setupHero();
  }
  if (route.name === 'property') {
    const property = propertyBySlug(route.slug);
    if (property) bindPropertyDetail(property, { keyboard: true });
  }
  bindEvents();
  setupCookies();
  setupReveal();
  const year = document.querySelector('#current-year');
  if (year) year.textContent = new Date().getFullYear();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = t(element.dataset.i18n);
    if (Array.isArray(value)) return;
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') element.placeholder = value;
    else element.textContent = value;
  });
  const heroTitle = document.querySelector('[data-i18n="heroTitle"]');
  if (heroTitle) heroTitle.innerHTML = escapeHtml(t('heroTitle')).replaceAll('\n', '<br>');
  document.querySelector('#search-category option[value=""]')?.replaceChildren(t('allTypes'));
  document.querySelector('#search-price option[value=""]')?.replaceChildren(t('allPrices'));
  document.querySelector('.menu-toggle')?.setAttribute('aria-label', t('menuOpen'));
  document.querySelector('.main-navigation')?.setAttribute('aria-label', t('mainMenu'));
  document.querySelector('#language-toggle')?.setAttribute('aria-label', t('languageLabel'));
  document.querySelector('#language-menu')?.setAttribute('aria-label', t('languageLabel'));
  document.querySelector('#review-prev')?.setAttribute('aria-label', t('previousReview'));
  document.querySelector('#review-next')?.setAttribute('aria-label', t('nextReview'));
  document.querySelector('#quick-contact-toggle')?.setAttribute('aria-label', t('quickContact'));
  document.querySelectorAll('[data-close-dialog]').forEach((button) => button.setAttribute('aria-label', t('close')));
  const viewAllTop = document.querySelector('#view-all-top span');
  if (viewAllTop) viewAllTop.textContent = t('viewAll');
  const recaptchaNote = document.querySelector('.recaptcha-note');
  if (recaptchaNote) {
    recaptchaNote.innerHTML = escapeHtml(t('recaptchaNote'))
      .replace('[privacy]', `<a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">${escapeHtml(t('privacyLabel'))}</a>`)
      .replace('[terms]', `<a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">${escapeHtml(t('termsLabel'))}</a>`);
  }
  document.querySelector('#manage-cookies').textContent = state.language === 'lv' ? 'Sīkdatņu iestatījumi' : t('cookieSettings');
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
  const summary = propertyDescription(property);
  return summary.length > 260 ? `${summary.slice(0, 257).replace(/\s+\S*$/, '')}…` : summary;
}

const DESCRIPTION_TAGS = new Set(['P', 'BR', 'STRONG', 'B', 'EM', 'I', 'UL', 'OL', 'LI', 'H2', 'H3', 'H4', 'BLOCKQUOTE', 'A']);

/**
 * The CRM stores the listing copy as HTML. Render it with its paragraphs,
 * breaks, emphasis, lists and links intact, minus the parameter dump that the
 * facts block already shows. Everything else is sanitised: only inline
 * formatting and http(s) links survive.
 */
function descriptionHtml(property) {
  const body = new DOMParser().parseFromString(String(property.description || ''), 'text/html').body;

  // Descriptions open with a "[LV]" label that is not part of the copy.
  const label = body.querySelector('strong, b');
  if (label && /^\s*\[LV\]\s*$/i.test(label.textContent)) {
    label.remove();
    const firstBreak = body.querySelector('br');
    if (firstBreak && !firstBreak.previousSibling?.textContent?.trim()) firstBreak.remove();
  }

  // The facts block repeats the "Galvenie parametri" / "Main parameters" dump.
  body.querySelectorAll('p, div').forEach((element) => {
    const heading = element.querySelector('strong, b');
    if (heading && /^\s*(galvenie\s+parametri|main\s+parameters|key\s+parameters)\s*:?\s*$/i.test(heading.textContent)) {
      element.remove();
    }
  });

  for (const element of [...body.querySelectorAll('*')]) {
    if (!DESCRIPTION_TAGS.has(element.tagName)) {
      element.replaceWith(...element.childNodes);
      continue;
    }
    const href = element.tagName === 'A' ? element.getAttribute('href') : null;
    for (const attribute of [...element.attributes]) element.removeAttribute(attribute.name);
    if (element.tagName !== 'A') continue;
    if (/^https?:\/\//i.test(href || '')) {
      element.setAttribute('href', href);
      element.setAttribute('target', '_blank');
      element.setAttribute('rel', 'noopener noreferrer');
    } else {
      element.replaceWith(...element.childNodes);
    }
  }

  body.querySelectorAll('p').forEach((paragraph) => {
    if (!paragraph.textContent.trim()) paragraph.remove();
  });

  return body.innerHTML.trim();
}

/**
 * The listing text as the CRM holds it: a "[LV]" prefix, then the prose, then a
 * glued-together parameter dump ("Galvenie parametri:Kategorija: ...") that the
 * facts block already shows. The page uses the prose, the dialog a teaser.
 */
function propertyDescription(property) {
  const source = (property.description || '').split(/Galvenie parametri/i)[0];
  let text = plainText(source).replace(/^\[LV\]/i, '').trim();
  const title = property.title.trim();
  if (text.endsWith(title)) text = text.slice(0, -title.length).trim();
  return text
    .replace(/([a-zāčēģīķļņšūž0-9])([A-ZĀČĒĢĪĶĻŅŠŪŽ])/g, '$1 $2')
    .trim();
}

/** The live feed stores listing copy as HTML; both the page and the dialog show text. */
function plainText(html = '') {
  const spaced = String(html)
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/(?:p|div|li|h[1-6]|tr|td|ul|ol)>/gi, ' ');
  return (new DOMParser().parseFromString(spaced, 'text/html').body.textContent || '')
    .replace(/\s+/g, ' ')
    .trim();
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
  if (!grid) return;
  grid.innerHTML = shown.map((property, index) => `
    <article class="property-card" style="--card-index:${index}">
      <button class="property-image-button" type="button" data-property="${escapeHtml(property.slug)}" aria-label="${escapeHtml(t('details'))}: ${escapeHtml(property.title)}">
        <img src="${escapeHtml(assetUrl(property.image_local || property.image))}" alt="${escapeHtml(property.title)}" ${index < 3 ? 'fetchpriority="high"' : 'loading="lazy"'}>
        ${property.status === RESERVED ? `<span class="property-reserved">${escapeHtml(t('reserved'))}</span>` : ''}
        ${property.category ? `<span class="property-category">${escapeHtml(categoryLabel(property.category))}</span>` : ''}
        ${property.gallery_count ? `<span class="photo-count">${escapeHtml(property.gallery_count)} foto</span>` : ''}
      </button>
      <div class="property-card-body">
        <div class="property-card-top"><span class="property-area-label">${escapeHtml(property.address.split(',')[1]?.trim() || property.address)}</span><span class="property-agent-label">${escapeHtml(property.agent)}</span></div>
        <h3><button class="property-title-button" type="button" data-property="${escapeHtml(property.slug)}">${escapeHtml(property.title)}</button></h3>
        <p class="property-address">${escapeHtml(property.address)}</p>
        ${property.facts?.length ? `<div class="property-facts">${property.facts.slice(0, 3).map((fact) => `<span>${escapeHtml(fact.value)} <small>${escapeHtml(factLabel(fact.label))}</small></span>`).join('')}</div>` : ''}
        <div class="property-card-bottom"><strong class="property-price">${escapeHtml(property.price || t('priceFrom'))}</strong><a class="arrow-button" href="${escapeHtml(siteUrl(`ipasums/${property.slug}/`))}" aria-label="${escapeHtml(t('details'))}"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div>
      </div>
    </article>`).join('');
  document.querySelector('#property-count').textContent = `${results.length} ${t('propertyCount')}`;
  document.querySelector('#filter-summary').textContent = results.length === 0 ? t('noResults') : '';
  const allShown = state.showAll || results.length <= state.visibleCount;
  document.querySelector('#view-all').hidden = allShown;
  document.querySelector('#view-all-top').hidden = allShown;
  grid.querySelectorAll('[data-property]').forEach((button) => button.addEventListener('click', () => openProperty(button.dataset.property)));
}

function openProperty(slug) {
  const property = propertyBySlug(slug);
  if (!property) return;
  const dialog = document.querySelector('#property-dialog');
  const content = document.querySelector('#property-dialog-content');
  content.innerHTML = propertyDetailHtml(property);
  bindPropertyDetail(property);
  content.scrollTop = 0;
  dialog.showModal();
}
/**
 * The old site's "Noderīga informācija" block (inheritance, document checks,
 * the Land Register, buying in a child's name), migrated as an accordion on the
 * homepage. All items start closed, like the FAQ.
 */
function usefulSection() {
  const useful = state.useful?.[state.language] ?? state.useful?.lv;
  if (!useful?.tabs?.length) return '';
  return `
      <section class="section info-section" aria-labelledby="info-title">
        <div class="container">
          <div class="section-heading reveal"><h2 id="info-title">${escapeHtml(useful.title)}</h2></div>
          <div class="info-list">
            ${useful.tabs.map((tab) => `
              <details class="info-item reveal" name="useful-info">
                <summary>${escapeHtml(tab.title)}</summary>
                <div class="post-body">${localMediaHtml(tab.html)}</div>
              </details>`).join('')}
          </div>
        </div>
      </section>`;
}

function articleCard(post, index) {
  return `
    <article class="article-card reveal"><a href="${escapeHtml(siteUrl(`${post.slug}/`))}">
      ${post.image
        ? `<img src="${escapeHtml(assetUrl(post.image))}" alt="" loading="lazy">`
        : `<div class="article-placeholder" aria-hidden="true"><img src="${assetUrl('/images/favicon-180x180.jpg')}" alt=""></div>`}
      <div class="article-copy"><span class="article-date">${escapeHtml(post.date)}</span><h3>${escapeHtml(t('articleTitles')?.[index] ?? postTitle(post))}</h3><span class="article-link">${escapeHtml(t('readArticle'))}<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span></div>
    </a></article>`;
}

function renderArticles() {
  const grid = document.querySelector('#article-grid');
  if (!grid) return;
  grid.innerHTML = state.posts.slice(0, state.blogVisible).map(articleCard).join('');
  const more = document.querySelector('#load-more-posts');
  if (more) more.hidden = state.blogVisible >= state.posts.length;
}

/**
 * Adds the next batch of posts without leaving the page. The CRM asks the
 * server for it (site.blog.more); the preview slices its own snapshot.
 */
function loadMorePosts() {
  const button = document.querySelector('#load-more-posts');
  if (!button || button.getAttribute('aria-busy') === 'true') return;
  button.setAttribute('aria-busy', 'true');
  requestAnimationFrame(() => {
    state.blogVisible = Math.min(state.blogVisible + BLOG_BATCH, state.posts.length);
    renderArticles();
    setupReveal();
    button.setAttribute('aria-busy', 'false');
  });
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
    .map((item, index) => `<li class="reveal"><span class="legal-number">${String(index + 1).padStart(2, '0')}</span><p>${escapeHtml(item)}</p></li>`)
    .join('');
}

function renderUrgentSteps() {
  document.querySelector('#urgent-steps').innerHTML = t('urgentSteps').map(([day, title, description]) => `<li class="urgent-step reveal"><span class="urgent-day">${escapeHtml(day)}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p></li>`).join('');
}

function renderFaq() {
  document.querySelector('#faq-list').innerHTML = t('faqItems').map(([question, answer]) => `<details class="faq-item reveal"><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join('');
}

function setLanguage(code) {
  if (!languages[code] || code === state.language) return;
  state.language = code;
  localStorage.setItem('site-language', code);
  renderRoute({ keepScroll: true });
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

/** Bind a handler when this route has the element; not every page has every control. */
function on(selector, event, handler) {
  document.querySelector(selector)?.addEventListener(event, handler);
}

/**
 * reCAPTCHA v3 runs invisibly: we ask for a token on submit and let the server
 * check its score. The preview has no server, so a token that cannot be fetched
 * (offline, or a host the key is not registered for) is not fatal here.
 */
function loadRecaptcha() {
  if (!RECAPTCHA_SITE_KEY || document.querySelector('script[data-recaptcha]')) return;
  const script = document.createElement('script');
  script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
  script.async = true;
  script.dataset.recaptcha = '1';
  document.head.appendChild(script);
}

function withRecaptchaToken(callback) {
  if (!RECAPTCHA_SITE_KEY) {
    callback('');
    return;
  }

  let attempts = 0;
  const attempt = () => {
    if (typeof grecaptcha === 'undefined') {
      // api.js loads asynchronously. The preview has no server to verify a
      // token against, so once it is clearly not coming the form still goes
      // through rather than leaving the visitor stuck.
      if (attempts++ < 40) {
        setTimeout(attempt, 150);
      } else {
        callback('');
      }
      return;
    }
    grecaptcha.ready(() => {
      grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'valuation' })
        .then((token) => callback(token || ''))
        .catch(() => callback(''));
    });
  };
  attempt();
}

/**
 * The intro video plays in a dialog. It is 24 MB, so the file only downloads
 * once it is opened (preload="none") and stops again when the dialog closes.
 */
/**
 * Tapping an agent's photo or name opens their short description, the way the
 * old site's popup did (the descriptions were migrated per language).
 */
function openAgentDialog(slug) {
  const agent = AGENTS.find((item) => item.slug === slug);
  const dialog = document.querySelector('#agent-dialog');
  if (!agent || !dialog) return;

  const bio = state.agentBios?.[state.language]?.[slug] ?? state.agentBios?.lv?.[slug] ?? '';
  const phone = document.querySelector('#agent-dialog-phone');

  document.querySelector('#agent-dialog-photo').src = assetUrl(agent.photo);
  document.querySelector('#agent-dialog-photo').alt = agent.name;
  dialog.classList.toggle('is-portrait', Boolean(agent.portrait));
  document.querySelector('#agent-dialog-name').textContent = agent.name;
  document.querySelector('#agent-dialog-bio').textContent = bio;
  phone.href = `tel:${agent.phone.replace(/\s/g, '')}`;
  phone.querySelector('span').textContent = agent.phone;

  renderAgentProperties(agent);
  dialog.showModal();
}

const AGENT_PROPERTY_BATCH = 3;

/** A compact row: thumbnail, title, price - links to the property page. */
function agentPropertyRow(property) {
  const image = property.image_local || property.image;
  return `
    <a class="agent-property" href="${escapeHtml(siteUrl(`ipasums/${property.slug}/`))}">
      <img src="${escapeHtml(assetUrl(image))}" alt="" loading="lazy">
      <span class="agent-property-copy"><strong>${escapeHtml(property.title)}</strong><span>${escapeHtml(property.price || t('priceFrom'))}</span></span>
      <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
    </a>`;
}

function renderAgentProperties(agent, count = AGENT_PROPERTY_BATCH) {
  const listings = document.querySelector('#agent-dialog-listings');
  const list = document.querySelector('#agent-dialog-properties');
  const more = document.querySelector('#agent-dialog-more');
  if (!listings || !list || !more) return;

  const mine = state.properties.filter((property) => property.agent === agent.name);
  listings.hidden = mine.length === 0;
  if (mine.length === 0) return;

  list.innerHTML = mine.slice(0, count).map(agentPropertyRow).join('');
  document.querySelector('#agent-dialog-count').textContent = `${mine.length} ${t('propertyCount')}`;

  more.hidden = mine.length <= count;
  more.onclick = () => renderAgentProperties(agent, mine.length);
}

function setupAgentDialog() {
  document.querySelectorAll('[data-agent]').forEach((element) => {
    element.addEventListener('click', () => openAgentDialog(element.dataset.agent));
  });
}

function setupVideoDialog() {
  const dialog = document.querySelector('#video-dialog');
  const video = document.querySelector('#intro-video');
  if (!dialog || !video) return;
  dialog.addEventListener('close', () => {
    video.pause();
    video.currentTime = 0;
  });
}

function setFieldError(field, message) {
  const error = document.querySelector(`#${field.name}-error`);
  field.setAttribute('aria-invalid', 'true');
  if (error) {
    error.textContent = message;
    error.hidden = false;
  }
}

function clearFieldError(field) {
  const error = document.querySelector(`#${field.name}-error`);
  field.removeAttribute('aria-invalid');
  if (error) error.hidden = true;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

/** Email shape and national number length for the chosen country. */
function validateContactForm(form) {
  let valid = true;

  const email = form.email;
  clearFieldError(email);
  if (!EMAIL_PATTERN.test(email.value.trim())) {
    setFieldError(email, t('formEmailInvalid'));
    valid = false;
  }

  const phone = form.phone;
  clearFieldError(phone);
  const rule = phonePrefixes.find(([iso]) => iso === form.phone_prefix.value) ?? phonePrefixes[0];
  const digits = phone.value.replace(/\D/g, '');
  if (digits.length < rule[2] || digits.length > rule[3]) {
    setFieldError(phone, t('formPhoneInvalid'));
    valid = false;
  }

  return valid;
}

function bindEvents() {
  setupLanguageSwitcher();
  setupMobileMenu();
  if (document.querySelector('#contact-form')) loadRecaptcha();

  on('#property-search', 'submit', (event) => {
    event.preventDefault();
    state.showAll = true;
    renderProperties();
    document.querySelector('#ipasumi')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  ['#search-category', '#search-price'].forEach((selector) => on(selector, 'change', () => { state.showAll = true; renderProperties(); }));
  on('#search-query', 'input', () => { state.showAll = true; renderProperties(); });
  on('#view-all', 'click', () => { state.showAll = true; renderProperties(); });
  on('#view-all-top', 'click', (event) => { event.preventDefault(); state.showAll = true; renderProperties(); document.querySelector('#ipasumi')?.scrollIntoView({ behavior: 'smooth' }); });

  on('#review-prev', 'click', () => { state.review = (state.review + reviews.length - 1) % reviews.length; renderReview(); });
  on('#review-next', 'click', () => { state.review = (state.review + 1) % reviews.length; renderReview(); });

  document.querySelectorAll('[data-close-dialog]').forEach((button) => button.addEventListener('click', () => button.closest('dialog').close()));
  document.querySelectorAll('dialog').forEach((dialog) => dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  }));

  const propertyDialog = document.querySelector('#property-dialog');
  propertyDialog?.addEventListener('keydown', (event) => {
    if (!galleryState || (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight')) return;
    event.preventDefault();
    galleryState.step(event.key === 'ArrowRight' ? 1 : -1);
  });
  propertyDialog?.addEventListener('close', () => { galleryState = null; });

  const quickToggle = document.querySelector('#quick-contact-toggle');
  quickToggle?.addEventListener('click', () => {
    const panel = document.querySelector('#quick-contact-panel');
    const open = quickToggle.getAttribute('aria-expanded') !== 'true';
    quickToggle.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
  });

  // "Katram īpašumam - sava pieeja" links prefill the type in the form.
  document.querySelectorAll('[data-preselect]').forEach((link) => {
    link.addEventListener('click', () => {
      const select = document.querySelector('.contact-form select[name="property_type"]');
      if (select) select.value = link.dataset.preselect;
    });
  });

  // "Pieteikt steidzamu pārdošanu" also ticks the urgency box in the form.
  document.querySelectorAll('[data-preselect-urgent]').forEach((link) => {
    link.addEventListener('click', () => {
      const urgent = document.querySelector('.contact-form input[name="urgent"]');
      if (urgent) urgent.checked = true;
    });
  });

  setupAgentDialog();
  setupVideoDialog();
  on('#open-video', 'click', () => document.querySelector('#video-dialog')?.showModal());

  on('#load-more-posts', 'click', loadMorePosts);

  on('#contact-form', 'submit', (event) => {
    event.preventDefault();
    const form = event.target;
    if (!validateContactForm(form)) {
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    const feedback = form.querySelector('#form-feedback');
    const submit = form.querySelector('button[type="submit"]');
    feedback.hidden = true;
    submit.disabled = true;

    withRecaptchaToken(async (token) => {
      try {
        // FormData keeps the fields the CRM validator expects and avoids a
        // JSON preflight; the CRM is a different origin from this site.
        const body = new FormData(form);
        body.set('locale', state.language);
        body.set('recaptcha_token', token);

        const response = await fetch(`${CRM_API_BASE}/leads`, { method: 'POST', body });
        if (!response.ok) throw new Error(`CRM responded ${response.status}`);

        form.reset();
        feedback.textContent = t('formSuccess');
      } catch (error) {
        console.warn('Contact form submission failed.', error);
        feedback.textContent = t('formError');
      } finally {
        feedback.hidden = false;
        submit.disabled = false;
      }
    });
  });
  on('#contact-form', 'input', (event) => {
    if (event.target.name === 'email' || event.target.name === 'phone') clearFieldError(event.target);
  });
  on('#contact-form select[name="phone_prefix"]', 'change', () => clearFieldError(document.querySelector('#contact-form [name="phone"]')));

  on('#accept-cookies', 'click', () => saveCookieConsent(true));
  on('#reject-cookies', 'click', () => saveCookieConsent(false));
  on('#open-cookie-settings', 'click', openCookieSettings);
  on('#manage-cookies', 'click', openCookieSettings);
  on('#save-cookie-settings', 'click', () => saveCookieConsent(document.querySelector('#analytics-cookies').checked));
}

/**
 * Sections and cards drift up as they enter the viewport. The elements carry
 * the .reveal class in the markup (see style.css), so they are already hidden
 * on the first paint; elements that are on screen when this runs simply get the
 * .is-visible class at once, which gives the page load its own fade-in.
 * Re-run this after adding cards to the page - bound elements are remembered.
 */
const revealBound = new WeakSet();
const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -60px 0px' })
  : null;

function setupReveal() {
  document.querySelectorAll('.reveal').forEach((element) => {
    if (revealBound.has(element)) return;
    revealBound.add(element);
    if (!revealObserver || element.getBoundingClientRect().top < window.innerHeight - 60) {
      element.classList.add('is-visible');
    } else {
      revealObserver.observe(element);
    }
  });
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

/**
 * The header stays sticky, but slides out of the way when the visitor scrolls
 * down and comes back as soon as they scroll up or return to the top. The
 * element is looked up on every frame because a language change re-renders the
 * shell, and the listener is only ever added once.
 */
function trackStickyHeader() {
  let last = window.scrollY;
  let ticking = false;

  const update = () => {
    ticking = false;
    const header = document.querySelector('.site-header');
    const y = Math.max(0, window.scrollY);
    if (header) {
      if (y <= 120 || y < last - 4) header.classList.remove('is-hidden');
      else if (y > last + 4) header.classList.add('is-hidden');
    }
    last = y;
  };

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });

  // Show the header again when something inside it takes focus, otherwise the
  // browser scrolls the page back to the top to reveal it.
  document.addEventListener('focusin', (event) => {
    if (event.target.closest('.site-header')) document.querySelector('.site-header')?.classList.remove('is-hidden');
  });
}

async function start() {
  try {
    const [properties, posts, pages, useful, agentBios] = await Promise.all([
      fetch(assetUrl('/data/properties.json')).then((response) => response.json()),
      fetch(assetUrl('/data/posts.json')).then((response) => response.json()),
      fetch(assetUrl('/data/pages.json')).then((response) => response.json()),
      fetch(assetUrl('/data/useful.json')).then((response) => response.json()),
      fetch(assetUrl('/data/agents.json')).then((response) => response.json()),
    ]);
    state.properties = properties;
    state.posts = posts;
    state.pages = pages;
    state.useful = useful;
    state.agentBios = agentBios;
    orderProperties();

    // The snapshot renders first; the live listings then correct it in place.
    const live = refreshLiveProperties();

    // A property added after the last build has no generated route file. Wait
    // for the feed before deciding the page does not exist, so a direct link
    // to a new listing opens instead of flashing "not found".
    const route = currentRoute();
    if (route.name === 'property' && !propertyBySlug(route.slug)) {
      await live;
      orderProperties();
    }

    renderRoute();
    bindNavigation();
    trackStickyHeader();

    live.then((changed) => {
      if (!changed) return;
      orderProperties();
      renderRoute({ keepScroll: true });
    });
  } catch (error) {
    document.querySelector('#app').innerHTML = '<main class="load-error">Could not load local content. Run the project using <code>npm run dev</code>.</main>';
    console.error(error);
  }
}

start();
