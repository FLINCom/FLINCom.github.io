// ОБНОВЛЕНО: Полное меню данных с правильной разбивкой
const FULL_MENU = {
    // ========== ХОЛОДНЫЕ ЗАКУСКИ ==========
    zakuski: {
        title: "Холодные закуски",
        categories: [
            {
                name: "Холодные закуски / Cold dishes",
                items: [
                    {name: "Хинкали с сыром", weight: "300 гр", price: "450 р"},
                    {name: "Салат 'Капрезе'", weight: "130 гр", price: "500 р"},
                    {name: "Ассорти солений", weight: "300 гр", price: "620 р"},
                    {name: "Блинчики с сыром", weight: "200 гр", price: "600 р"},
                    {name: "Чабан-салат", weight: "200 гр", price: "600 р"},
                    {name: "Овощной букет", weight: "350 гр", price: "850 р"},
                    {name: "Блинчики с мясом", weight: "180 гр", price: "550 р"},
                    {name: "Салат 'Гриль'", weight: "180 гр", price: "550 р"},
                    {name: "Мясное ассорти", weight: "300 гр", price: "1700 р"},
                    {name: "Греческий салат", weight: "200 гр", price: "500 р"},
                    {name: "Рыбное ассорти", weight: "300 гр", price: "2300 р"},
                    {name: "Блинчики с семгой", weight: "150/70 гр", price: "800 р"},
                    {name: "Салат 'Утиная охота'", weight: "220 гр", price: "800 р"},
                    {name: "Сырная тарелка", weight: "300 гр", price: "1500 р"},
                    {name: "Тренки чесночные", weight: "320 гр", price: "400 р"},
                    {name: "Тёплый салат с куриной печенью", weight: "200 гр", price: "500 р"},
                    {name: "Ассорти домашних огурчиков", weight: "230 гр", price: "800 р"},
                    {name: "Оливье с копчёной грудкой", weight: "180 гр", price: "550 р"},
                    {name: "Ассорти сыров", weight: "200 гр", price: "700 р"},
                    {name: "Цезарь с курицей", weight: "100/100 гр", price: "500 р"},
                    {name: "Судак по-польски", weight: "150/50/50 гр", price: "950 р"},
                    {name: "Цезарь с креветками", weight: "200 гр", price: "800 р"},
                    {name: "Тёплый язык с хреном", weight: "100 гр", price: "600 р"},
                    {name: "Семга запечённая по-княжески", weight: "250/50 гр", price: "1200 р"},
                    {name: "Салат 'Лагуна'", weight: "200 гр", price: "800 р"},
                    {name: "Бастурма", weight: "100 гр", price: "700 р"},
                    {name: "Мясо по-барски", weight: "300/100 гр", price: "1200 р"},
                    {name: "Руккола с креветками", weight: "180 гр", price: "700 р"},
                    {name: "Баклажаны рулетики с сыром", weight: "180/100 гр", price: "1200 р"},
                    {name: "Тёплый салат с языком", weight: "250/30 гр", price: "700 р"},
                    {name: "Сулугуни жареный с помидором", weight: "240 гр", price: "700 р"},
                    {name: "Салат с жареным баклажаном", weight: "180 гр", price: "600 р"},
                    {name: "Хинкали баранина", weight: "300 гр", price: "450 р"},
                    {name: "Долма", weight: "300 гр", price: "450 р"},
                    {name: "Салат по-грузински", weight: "200 гр", price: "620 р"}
                ]
            }
        ]
    },
    
    // ========== ГОРЯЧИЕ ЗАКУСКИ ==========
    "goryachie-zakuski": {
        title: "Горячие закуски",
        categories: [
            {
                name: "Горячие закуски / Hot snacks",
                items: [
                    {name: "Баклажаны с орехами", weight: "150 гр", price: "620 р"},
                    {name: "Шакшука-лодка", weight: "200/150 гр", price: "650 р"},
                    {name: "Рулетики из семги", weight: "150 гр", price: "800 р"},
                    {name: "Хачапури по-имеретински", weight: "350 гр", price: "620 р"},
                    {name: "Хачапури по-аджарски", weight: "330 гр", price: "650 р"},
                    {name: "Кутабы с сыром", weight: "120 гр", price: "350 р"},
                    {name: "Кутабы с сыром и зеленью", weight: "120 гр", price: "350 р"},
                    {name: "Кутабы с зеленью", weight: "120 гр", price: "350 р"},
                    {name: "Кутабы с мясом", weight: "120 гр", price: "360 р"},
                    {name: "Куриные крылья", weight: "150 гр", price: "450 р"},
                    {name: "Сациви из курицы", weight: "300/50 гр", price: "700 р"},
                    {name: "Цыплёнок табака", weight: "300/50 гр", price: "1100 р"},
                    {name: "Сырные палочки с чесночным соусом", weight: "180 гр", price: "600 р"},
                    {name: "Телятина в сливочном соусе", weight: "300/500 гр", price: "1100 р"}
                ]
            }
        ]
    },
    
    // ========== ШАШЛЫКИ ==========
    shashlyki: {
        title: "Шашлыки",
        categories: [
            {
                name: "Шашлыки / Shish kebabs",
                items: [
                    {name: "Шашлык из баранины", weight: "180 гр", price: "1300 р"},
                    {name: "Шашлык из телятины", weight: "180 гр", price: "900 р"},
                    {name: "Шашлык из свинины", weight: "180 гр", price: "1200 р"},
                    {name: "Шашлык из курицы", weight: "180 гр", price: "500 р"},
                    {name: "Шашлык из утиной грудки", weight: "180 гр", price: "1200 р"},
                    {name: "Кебаб из ягнёнка", weight: "150/70 гр", price: "800 р"},
                    {name: "Кебаб из телятины", weight: "150/70 гр", price: "950 р"},
                    {name: "Кебаб из свинины", weight: "150/70 гр", price: "800 р"},
                    {name: "Кебаб из курицы", weight: "150 гр", price: "600 р"}
                ]
            },
            {
                name: "Гарниры к шашлыкам",
                items: [
                    {name: "Овощи на гриле", weight: "150 гр", price: "350 р"},
                    {name: "Картофель по-домашнему", weight: "200 гр", price: "300 р"},
                    {name: "Картофель с грибами", weight: "200 гр", price: "400 р"},
                    {name: "Картофельное пюре", weight: "150 гр", price: "200 р"},
                    {name: "Рис отварной", weight: "150 гр", price: "250 р"},
                    {name: "Брокколи отварная", weight: "150 гр", price: "300 р"},
                    {name: "Цветная капуста", weight: "150 гр", price: "300 р"}
                ]
            }
        ]
    },
    
    // ========== ОСНОВНЫЕ БЛЮДА ==========
    "osnovnye-blyuda": {
        title: "Основные блюда",
        categories: [
            {
                name: "Основные блюда / Main courses",
                items: [
                    {name: "Котлеты куриные", weight: "180 гр", price: "600 р"},
                    {name: "Тёплый салат с телятиной", weight: "200 гр", price: "800 р"},
                    {name: "Телятина с картофельным пюре", weight: "200/150 гр", price: "1000 р"},
                    {name: "Бифстроганов с картофелем и пармезаном", weight: "150/60 гр", price: "1200 р"},
                    {name: "Запечённая утиная грудка", weight: "150/70 гр", price: "1000 р"},
                    {name: "Курица с грецким орехом и алычой", weight: "1500 гр", price: "2200 р"},
                    {name: "Курица на мангале с фенхелем", weight: "180 гр", price: "1200 р"},
                    {name: "Паста карбонара", weight: "250 гр", price: "700 р"},
                    {name: "Паста с куриной грудкой", weight: "250 гр", price: "650 р"},
                    {name: "Паста с лососем", weight: "250 гр", price: "800 р"}
                ]
            }
        ]
    },
    
    // ========== СУПЫ ==========
    supy: {
        title: "Супы",
        categories: [
            {
                name: "Супы / Soups",
                items: [
                    {name: "Суп-лапша с курицей", weight: "300 гр", price: "700 р"},
                    {name: "Суп-харчо", weight: "300 гр", price: "500 р"},
                    {name: "Уха царская", weight: "300 гр", price: "700 р"},
                    {name: "Борщ домашний", weight: "300/30 гр", price: "400 р"},
                    {name: "Солянка мясная", weight: "300 гр", price: "700 р"},
                    {name: "Крем-суп из грибов", weight: "150 гр", price: "500 р"},
                    {name: "Суп с овощами", weight: "400 гр", price: "400 р"}
                ]
            }
        ]
    },
    
    // ========== ДЕСЕРТЫ ==========
    deserty: {
        title: "Десерты",
        categories: [
            {
                name: "Десерты / Desserts",
                items: [
                    {name: "Яблочный штрудель", weight: "150 гр", price: "650 р"},
                    {name: "Чизкейк", weight: "1250 гр / 1 шт", price: "400 р"},
                    {name: "Медовик", weight: "150 гр", price: "500 р"},
                    {name: "Наполеон", weight: "1 шт", price: "400 р"},
                    {name: "Мороженое (ваниль, шоколад, клубника)", weight: "50 гр", price: "40 р"},
                    {name: "Фруктовая тарелка", weight: "1000 гр", price: "1000 р"},
                    {name: "Ассорти варенья", weight: "150 гр", price: "400 р"}
                ]
            }
        ]
    },
    
    // ========== БАР ==========
    bar: {
        title: "Бар",
        categories: [
            {
                name: "Шампанское и игристое вино",
                items: [
                    {name: "Prosecco Spumante Brut", weight: "0.75 л", price: "3900 р"},
                    {name: "Martini Asti", weight: "0.75 л", price: "5200 р"},
                    {name: "Asti Mondoro", weight: "0.75 л", price: "4900 р"},
                    {name: "Moet Brut", weight: "0.75 л", price: "16000 р"}
                ]
            },
            {
                name: "Вермут / Vermouth (100 мл)",
                items: [
                    {name: "Martini Bianco", weight: "", price: "420 р"},
                    {name: "Martini Rosso", weight: "", price: "420 р"},
                    {name: "Martini Extra Dry", weight: "", price: "420 р"}
                ]
            },
            {
                name: "Вино / Wine (150/750 мл)",
                items: [
                    {name: "Chateau Haut Bon Fils (красное)", weight: "", price: "700/3500 р"},
                    {name: "Blanche Villa De Provence (белое)", weight: "", price: "700/3500 р"},
                    {name: "Duca Di Salaparuta Marsala", weight: "", price: "750/3750 р"},
                    {name: "Maybach Riesling (белое)", weight: "", price: "750/3750 р"},
                    {name: "Chianti dry", weight: "", price: "800/4000 р"},
                    {name: "Pinot Grigio dry", weight: "", price: "800/4000 р"},
                    {name: "Pillo Viñas Rebeldes semi-dry", weight: "", price: "900/5700 р"},
                    {name: "Sauvignon Blanc", weight: "", price: "900/5700 р"}
                ]
            },
            {
                name: "Крепкий алкоголь (40 мл)",
                items: [
                    {name: "Водка Russian Standard", weight: "", price: "350 р"},
                    {name: "Водка Beluga Noble", weight: "", price: "500 р"},
                    {name: "Водка Mamont", weight: "", price: "350 р"},
                    {name: "Джин Hendrick's", weight: "", price: "1100 р"},
                    {name: "Ром Bacardi Carta Negra", weight: "", price: "470 р"},
                    {name: "Ром Bacardi Carta Blanca", weight: "", price: "380 р"},
                    {name: "Джин Beefeater", weight: "", price: "420 р"},
                    {name: "Джин Beefeater Pink", weight: "", price: "550 р"},
                    {name: "Текила Olmeca Gold", weight: "", price: "650 р"},
                    {name: "Текила Olmeca Blanco", weight: "", price: "650 р"},
                    {name: "Текила Jose Cuervo", weight: "", price: "760 р"},
                    {name: "Виски Jameson", weight: "", price: "500 р"},
                    {name: "Виски Dewar's White Label", weight: "", price: "500 р"},
                    {name: "Виски Jack Daniel's", weight: "", price: "600 р"},
                    {name: "Виски Chivas Regal 12", weight: "", price: "750 р"},
                    {name: "Виски Glenfiddich 12", weight: "", price: "860 р"},
                    {name: "Виски Glenmorangie 12", weight: "", price: "1900 р"},
                    {name: "Виски Macallan 12", weight: "", price: "1250 р"},
                    {name: "Ликёр Baileys", weight: "", price: "580 р"},
                    {name: "Ликёр Jagermeister", weight: "", price: "590 р"},
                    {name: "Ликёр Limoncello", weight: "", price: "350 р"},
                    {name: "Коньяк Ararat 5 лет", weight: "", price: "350 р"},
                    {name: "Коньяк Ararat 10 лет", weight: "", price: "680 р"},
                    {name: "Коньяк Ararat 20 лет", weight: "", price: "1850 р"},
                    {name: "Коньяк Hennessy VSOP", weight: "", price: "1600 р"}
                ]
            },
            {
                name: "Безалкогольные напитки",
                items: [
                    {name: "Coca-Cola / Zero", weight: "0.33 л", price: "300 р"},
                    {name: "Тоник", weight: "0.33 л", price: "300 р"},
                    {name: "Borjomi", weight: "0.5 л", price: "360 р"},
                    {name: "Jermuk (газ/негаз)", weight: "0.5 л", price: "350 р"},
                    {name: "Legenda Baikala", weight: "0.5 л", price: "500 р"},
                    {name: "Энергетик", weight: "250 мл", price: "350 р"},
                    {name: "Свежевыжатые соки (0.2 л)", weight: "", price: "360 р"},
                    {name: "Il Primo соки (0.2 л)", weight: "", price: "200 р"},
                    {name: "Лимонады авторские (0.4/1.0 л)", weight: "", price: "400/1200 р"},
                    {name: "Молочные коктейли (0.25 л)", weight: "", price: "350 р"}
                ]
            },
            {
                name: "Кофе и чай",
                items: [
                    {name: "Эспрессо", weight: "30 мл", price: "200 р"},
                    {name: "Доппио", weight: "60 мл", price: "250 р"},
                    {name: "Американо", weight: "120 мл", price: "250 р"},
                    {name: "Капучино", weight: "150 мл", price: "300 р"},
                    {name: "Латте", weight: "150 мл", price: "350 р"},
                    {name: "Раф", weight: "200 мл", price: "350 р"},
                    {name: "Восточный кофе", weight: "250 мл", price: "250 р"},
                    {name: "Чай (Ассам, Эрл Грей, Улун, Жасмин и др.)", weight: "500 мл", price: "460 р"}
                ]
            }
        ]
    },

    menu: {
        title: "Полное меню",
        categories: [
            {
                name: "Холодные закуски / Cold dishes",
                items: [
                    {name: "Хинкали с сыром", weight: "300 гр", price: "450 р"},
                    {name: "Салат 'Капрезе'", weight: "130 гр", price: "500 р"},
                    {name: "Ассорти солений", weight: "300 гр", price: "620 р"},
                    {name: "Блинчики с сыром", weight: "200 гр", price: "600 р"},
                    {name: "Чабан-салат", weight: "200 гр", price: "600 р"},
                    {name: "Овощной букет", weight: "350 гр", price: "850 р"},
                    {name: "Блинчики с мясом", weight: "180 гр", price: "550 р"},
                    {name: "Салат 'Гриль'", weight: "180 гр", price: "550 р"},
                    {name: "Мясное ассорти", weight: "300 гр", price: "1700 р"},
                    {name: "Греческий салат", weight: "200 гр", price: "500 р"},
                    {name: "Рыбное ассорти", weight: "300 гр", price: "2300 р"},
                    {name: "Блинчики с семгой", weight: "150/70 гр", price: "800 р"},
                    {name: "Салат 'Утиная охота'", weight: "220 гр", price: "800 р"},
                    {name: "Сырная тарелка", weight: "300 гр", price: "1500 р"},
                    {name: "Тренки чесночные", weight: "320 гр", price: "400 р"},
                    {name: "Тёплый салат с куриной печенью", weight: "200 гр", price: "500 р"},
                    {name: "Ассорти домашних огурчиков", weight: "230 гр", price: "800 р"},
                    {name: "Оливье с копчёной грудкой", weight: "180 гр", price: "550 р"},
                    {name: "Ассорти сыров", weight: "200 гр", price: "700 р"},
                    {name: "Цезарь с курицей", weight: "100/100 гр", price: "500 р"},
                    {name: "Судак по-польски", weight: "150/50/50 гр", price: "950 р"},
                    {name: "Цезарь с креветками", weight: "200 гр", price: "800 р"},
                    {name: "Тёплый язык с хреном", weight: "100 гр", price: "600 р"},
                    {name: "Семга запечённая по-княжески", weight: "250/50 гр", price: "1200 р"},
                    {name: "Салат 'Лагуна'", weight: "200 гр", price: "800 р"},
                    {name: "Бастурма", weight: "100 гр", price: "700 р"},
                    {name: "Мясо по-барски", weight: "300/100 гр", price: "1200 р"},
                    {name: "Руккола с креветками", weight: "180 гр", price: "700 р"},
                    {name: "Баклажаны рулетики с сыром", weight: "180/100 гр", price: "1200 р"},
                    {name: "Тёплый салат с языком", weight: "250/30 гр", price: "700 р"},
                    {name: "Сулугуни жареный с помидором", weight: "240 гр", price: "700 р"},
                    {name: "Салат с жареным баклажаном", weight: "180 гр", price: "600 р"},
                    {name: "Хинкали баранина", weight: "300 гр", price: "450 р"},
                    {name: "Долма", weight: "300 гр", price: "450 р"},
                    {name: "Салат по-грузински", weight: "200 гр", price: "620 р"}
                ]
            },
            {
                name: "Горячие закуски / Hot snacks",
                items: [
                    {name: "Баклажаны с орехами", weight: "150 гр", price: "620 р"},
                    {name: "Шакшука-лодка", weight: "200/150 гр", price: "650 р"},
                    {name: "Рулетики из семги", weight: "150 гр", price: "800 р"},
                    {name: "Хачапури по-имеретински", weight: "350 гр", price: "620 р"},
                    {name: "Хачапури по-аджарски", weight: "330 гр", price: "650 р"},
                    {name: "Кутабы с сыром", weight: "120 гр", price: "350 р"},
                    {name: "Кутабы с сыром и зеленью", weight: "120 гр", price: "350 р"},
                    {name: "Кутабы с зеленью", weight: "120 гр", price: "350 р"},
                    {name: "Кутабы с мясом", weight: "120 гр", price: "360 р"},
                    {name: "Куриные крылья", weight: "150 гр", price: "450 р"},
                    {name: "Сациви из курицы", weight: "300/50 гр", price: "700 р"},
                    {name: "Цыплёнок табака", weight: "300/50 гр", price: "1100 р"},
                    {name: "Сырные палочки с чесночным соусом", weight: "180 гр", price: "600 р"},
                    {name: "Телятина в сливочном соусе", weight: "300/500 гр", price: "1100 р"}
                ]
            },
            {
                name: "Шашлыки / Shish kebabs",
                items: [
                    {name: "Шашлык из баранины", weight: "180 гр", price: "1300 р"},
                    {name: "Шашлык из телятины", weight: "180 гр", price: "900 р"},
                    {name: "Шашлык из свинины", weight: "180 гр", price: "1200 р"},
                    {name: "Шашлык из курицы", weight: "180 гр", price: "500 р"},
                    {name: "Шашлык из утиной грудки", weight: "180 гр", price: "1200 р"},
                    {name: "Кебаб из ягнёнка", weight: "150/70 гр", price: "800 р"},
                    {name: "Кебаб из телятины", weight: "150/70 гр", price: "950 р"},
                    {name: "Кебаб из свинины", weight: "150/70 гр", price: "800 р"},
                    {name: "Кебаб из курицы", weight: "150 гр", price: "600 р"}
                ]
            },
            {
                name: "Гарниры к шашлыкам",
                items: [
                    {name: "Овощи на гриле", weight: "150 гр", price: "350 р"},
                    {name: "Картофель по-домашнему", weight: "200 гр", price: "300 р"},
                    {name: "Картофель с грибами", weight: "200 гр", price: "400 р"},
                    {name: "Картофельное пюре", weight: "150 гр", price: "200 р"},
                    {name: "Рис отварной", weight: "150 гр", price: "250 р"},
                    {name: "Брокколи отварная", weight: "150 гр", price: "300 р"},
                    {name: "Цветная капуста", weight: "150 гр", price: "300 р"}
                ]
            },
            {
                name: "Основные блюда / Main courses",
                items: [
                    {name: "Котлеты куриные", weight: "180 гр", price: "600 р"},
                    {name: "Тёплый салат с телятиной", weight: "200 гр", price: "800 р"},
                    {name: "Телятина с картофельным пюре", weight: "200/150 гр", price: "1000 р"},
                    {name: "Бифстроганов с картофелем и пармезаном", weight: "150/60 гр", price: "1200 р"},
                    {name: "Запечённая утиная грудка", weight: "150/70 гр", price: "1000 р"},
                    {name: "Курица с грецким орехом и алычой", weight: "1500 гр", price: "2200 р"},
                    {name: "Курица на мангале с фенхелем", weight: "180 гр", price: "1200 р"},
                    {name: "Паста карбонара", weight: "250 гр", price: "700 р"},
                    {name: "Паста с куриной грудкой", weight: "250 гр", price: "650 р"},
                    {name: "Паста с лососем", weight: "250 гр", price: "800 р"}
                ]
            },
            {
                name: "Супы / Soups",
                items: [
                    {name: "Суп-лапша с курицей", weight: "300 гр", price: "700 р"},
                    {name: "Суп-харчо", weight: "300 гр", price: "500 р"},
                    {name: "Уха царская", weight: "300 гр", price: "700 р"},
                    {name: "Борщ домашний", weight: "300/30 гр", price: "400 р"},
                    {name: "Солянка мясная", weight: "300 гр", price: "700 р"},
                    {name: "Крем-суп из грибов", weight: "150 гр", price: "500 р"},
                    {name: "Суп с овощами", weight: "400 гр", price: "400 р"}
                ]
            },
            {
                name: "Десерты / Desserts",
                items: [
                    {name: "Яблочный штрудель", weight: "150 гр", price: "650 р"},
                    {name: "Чизкейк", weight: "1250 гр / 1 шт", price: "400 р"},
                    {name: "Медовик", weight: "150 гр", price: "500 р"},
                    {name: "Наполеон", weight: "1 шт", price: "400 р"},
                    {name: "Мороженое (ваниль, шоколад, клубника)", weight: "50 гр", price: "40 р"},
                    {name: "Фруктовая тарелка", weight: "1000 гр", price: "1000 р"},
                    {name: "Ассорти варенья", weight: "150 гр", price: "400 р"}
                ]
            },
            {
                name: "Шампанское и игристое вино",
                items: [
                    {name: "Prosecco Spumante Brut", weight: "0.75 л", price: "3900 р"},
                    {name: "Martini Asti", weight: "0.75 л", price: "5200 р"},
                    {name: "Asti Mondoro", weight: "0.75 л", price: "4900 р"},
                    {name: "Moet Brut", weight: "0.75 л", price: "16000 р"}
                ]
            },
            {
                name: "Вермут / Vermouth (100 мл)",
                items: [
                    {name: "Martini Bianco", weight: "", price: "420 р"},
                    {name: "Martini Rosso", weight: "", price: "420 р"},
                    {name: "Martini Extra Dry", weight: "", price: "420 р"}
                ]
            },
            {
                name: "Вино / Wine (150/750 мл)",
                items: [
                    {name: "Chateau Haut Bon Fils (красное)", weight: "", price: "700/3500 р"},
                    {name: "Blanche Villa De Provence (белое)", weight: "", price: "700/3500 р"},
                    {name: "Duca Di Salaparuta Marsala", weight: "", price: "750/3750 р"},
                    {name: "Maybach Riesling (белое)", weight: "", price: "750/3750 р"},
                    {name: "Chianti dry", weight: "", price: "800/4000 р"},
                    {name: "Pinot Grigio dry", weight: "", price: "800/4000 р"},
                    {name: "Pillo Viñas Rebeldes semi-dry", weight: "", price: "900/5700 р"},
                    {name: "Sauvignon Blanc", weight: "", price: "900/5700 р"}
                ]
            },
            {
                name: "Крепкий алкоголь (40 мл)",
                items: [
                    {name: "Водка Russian Standard", weight: "", price: "350 р"},
                    {name: "Водка Beluga Noble", weight: "", price: "500 р"},
                    {name: "Водка Mamont", weight: "", price: "350 р"},
                    {name: "Джин Hendrick's", weight: "", price: "1100 р"},
                    {name: "Ром Bacardi Carta Negra", weight: "", price: "470 р"},
                    {name: "Ром Bacardi Carta Blanca", weight: "", price: "380 р"},
                    {name: "Джин Beefeater", weight: "", price: "420 р"},
                    {name: "Джин Beefeater Pink", weight: "", price: "550 р"},
                    {name: "Текила Olmeca Gold", weight: "", price: "650 р"},
                    {name: "Текила Olmeca Blanco", weight: "", price: "650 р"},
                    {name: "Текила Jose Cuervo", weight: "", price: "760 р"},
                    {name: "Виски Jameson", weight: "", price: "500 р"},
                    {name: "Виски Dewar's White Label", weight: "", price: "500 р"},
                    {name: "Виски Jack Daniel's", weight: "", price: "600 р"},
                    {name: "Виски Chivas Regal 12", weight: "", price: "750 р"},
                    {name: "Виски Glenfiddich 12", weight: "", price: "860 р"},
                    {name: "Виски Glenmorangie 12", weight: "", price: "1900 р"},
                    {name: "Виски Macallan 12", weight: "", price: "1250 р"},
                    {name: "Ликёр Baileys", weight: "", price: "580 р"},
                    {name: "Ликёр Jagermeister", weight: "", price: "590 р"},
                    {name: "Ликёр Limoncello", weight: "", price: "350 р"},
                    {name: "Коньяк Ararat 5 лет", weight: "", price: "350 р"},
                    {name: "Коньяк Ararat 10 лет", weight: "", price: "680 р"},
                    {name: "Коньяк Ararat 20 лет", weight: "", price: "1850 р"},
                    {name: "Коньяк Hennessy VSOP", weight: "", price: "1600 р"}
                ]
            },
            {
                name: "Безалкогольные напитки",
                items: [
                    {name: "Coca-Cola / Zero", weight: "0.33 л", price: "300 р"},
                    {name: "Тоник", weight: "0.33 л", price: "300 р"},
                    {name: "Borjomi", weight: "0.5 л", price: "360 р"},
                    {name: "Jermuk (газ/негаз)", weight: "0.5 л", price: "350 р"},
                    {name: "Legenda Baikala", weight: "0.5 л", price: "500 р"},
                    {name: "Энергетик", weight: "250 мл", price: "350 р"},
                    {name: "Свежевыжатые соки (0.2 л)", weight: "", price: "360 р"},
                    {name: "Il Primo соки (0.2 л)", weight: "", price: "200 р"},
                    {name: "Лимонады авторские (0.4/1.0 л)", weight: "", price: "400/1200 р"},
                    {name: "Молочные коктейли (0.25 л)", weight: "", price: "350 р"}
                ]
            },
            {
                name: "Кофе и чай",
                items: [
                    {name: "Эспрессо", weight: "30 мл", price: "200 р"},
                    {name: "Доппио", weight: "60 мл", price: "250 р"},
                    {name: "Американо", weight: "120 мл", price: "250 р"},
                    {name: "Капучино", weight: "150 мл", price: "300 р"},
                    {name: "Латте", weight: "150 мл", price: "350 р"},
                    {name: "Раф", weight: "200 мл", price: "350 р"},
                    {name: "Восточный кофе", weight: "250 мл", price: "250 р"},
                    {name: "Чай (Ассам, Эрл Грей, Улун, Жасмин и др.)", weight: "500 мл", price: "460 р"}
                ]
            }
        ]
    }
};

// ========== СЛАЙДЕР АКЦИЙ (без изменений) ==========
class PromoSlider {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 3;
        this.isAnimating = false;
        this.autoSlideInterval = null;
        
        this.init();
    }
    
    init() {
        this.slides = document.querySelectorAll('.promo-slide');
        this.dots = document.querySelectorAll('.promo-dots .dot');
        this.prevBtn = document.querySelector('.arrow-left');
        this.nextBtn = document.querySelector('.arrow-right');
        
        if (this.slides.length === 0) return;
        
        this.setupEventListeners();
        this.showSlide(this.currentSlide);
        this.startAutoSlide();
    }
    
    setupEventListeners() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        this.dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideNum = parseInt(e.target.dataset.slide);
                if (!isNaN(slideNum)) {
                    this.goToSlide(slideNum);
                }
            });
        });
        
        // Пауза автопрокрутки при наведении
        const slider = document.querySelector('.promo-content');
        if (slider) {
            slider.addEventListener('mouseenter', () => this.stopAutoSlide());
            slider.addEventListener('mouseleave', () => this.startAutoSlide());
        }
    }
    
    showSlide(n) {
        if (this.isAnimating || n < 1 || n > this.totalSlides) return;
        
        this.isAnimating = true;
        this.currentSlide = n;
        
        // Скрываем все слайды
        this.slides.forEach(slide => {
            slide.classList.remove('active', 'prev', 'next');
        });
        
        // Показываем текущий слайд
        const currentSlide = document.querySelector(`.promo-slide[data-slide="${n}"]`);
        if (currentSlide) {
            currentSlide.classList.add('active');
        }
        
        // Обновляем точки
        this.dots.forEach(dot => {
            dot.classList.remove('active');
            if (parseInt(dot.dataset.slide) === n) {
                dot.classList.add('active');
            }
        });
        
        // Сбрасываем флаг анимации после завершения
        setTimeout(() => {
            this.isAnimating = false;
        }, 600);
    }
    
    nextSlide() {
        const next = this.currentSlide === this.totalSlides ? 1 : this.currentSlide + 1;
        this.showSlide(next);
    }
    
    prevSlide() {
        const prev = this.currentSlide === 1 ? this.totalSlides : this.currentSlide - 1;
        this.showSlide(prev);
    }
    
    goToSlide(n) {
        this.showSlide(n);
    }
    
    startAutoSlide() {
        this.stopAutoSlide();
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
}

// ========== АНИМАЦИЯ ЗАГРУЗКИ (без изменений) ==========
class PageLoader {
    constructor() {
        this.loader = document.querySelector('.loader');
        this.loaderProgress = document.querySelector('.loader-progress');
        this.minimumLoadTime = 1500;
        this.startTime = Date.now();
        
        this.init();
    }
    
    init() {
        if (!this.loader) return;
        
        this.preloadImages();
        
        window.addEventListener('load', () => {
            const elapsed = Date.now() - this.startTime;
            const remaining = Math.max(0, this.minimumLoadTime - elapsed);
            
            setTimeout(() => {
                this.hideLoader();
            }, remaining);
        });
        
        setTimeout(() => {
            if (document.readyState === 'complete') {
                this.hideLoader();
            }
        }, this.minimumLoadTime + 1000);
    }
    
    preloadImages() {
        const criticalImages = [
            'images/logo-bg.png',
            'images/plate.png',
            'images/about-1.jpg',
            'images/about-2.jpg',
            'images/about-3.jpg'
        ];
        
        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    hideLoader() {
        if (!this.loader) return;
        
        this.loader.classList.add('loaded');
        
        setTimeout(() => {
            if (this.loader && this.loader.parentNode) {
                this.loader.parentNode.removeChild(this.loader);
            }
        }, 500);
    }
}

// ========== АНИМАЦИИ ПРИ СКРОЛЛЕ (без изменений) ==========
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }
    
    init() {
        if (!('IntersectionObserver' in window)) {
            this.fallbackAnimation();
            return;
        }
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    if (entry.target.classList.contains('nav-btn-wrapper')) {
                        const index = Array.from(
                            document.querySelectorAll('.nav-btn-wrapper')
                        ).indexOf(entry.target);
                        entry.target.style.transitionDelay = `${index * 0.1}s`;
                    }
                }
            });
        }, this.observerOptions);
        
        this.observeElements();
    }
    
    observeElements() {
        const elements = document.querySelectorAll(
            '.scroll-reveal, .nav-btn-wrapper, .about-img-container, ' +
            '.gallery-item-container, .menu-category-card, .promo-content'
        );
        
        elements.forEach(el => {
            el.classList.add('scroll-reveal');
            this.observer.observe(el);
        });
    }
    
    fallbackAnimation() {
        const elements = document.querySelectorAll('.scroll-reveal');
        elements.forEach(el => {
            setTimeout(() => {
                el.classList.add('visible');
            }, 200);
        });
    }
}

// ========== ОСНОВНОЙ СКРИПТ ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('GRAND EVENT - Инициализация...');
    
    // Инициализация анимации загрузки
    const pageLoader = new PageLoader();
    
    // Инициализация слайдера акций
    const promoSlider = new PromoSlider();
    
    // Инициализация анимаций при скролле
    const scrollAnimations = new ScrollAnimations();
    
    // Элементы модальных окон
    const modalOverlay = document.getElementById('modalOverlay');
    const menuModal = document.getElementById('menuModal');
    const menuContent = document.getElementById('menuContent');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    // Карточки меню
    const menuCards = document.querySelectorAll('.menu-category-card');
    
    // Кнопка "Меню"
    const mainMenuBtn = document.querySelector('.main-menu-btn');
    
    // ДОБАВЛЕНО: Кнопка бара в навигации
    const barNavBtn = document.querySelector('a[href="#bar"]');
    
    // Инициализация модальных окон
    initModalWindows();
    
    // Плавная прокрутка
    initSmoothScroll();
    
    // Эффекты для кнопок
    initButtonEffects();
    
    // Адаптивная навигация
    initResponsiveNav();
    
    // Предзагрузка всех изображений
    preloadAllImages();
    
    // Активация секций при скролле
    initActiveSection();
    
    console.log('GRAND EVENT - Инициализация завершена!');
    
    // ===== ФУНКЦИИ =====
    
    function initModalWindows() {

        // ДОБАВЬ ЭТО в начало функции initModalWindows:
const fullMenuBtn = document.getElementById('fullMenuBtn');
if (fullMenuBtn) {
    fullMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Создаем HTML для всего меню
        let html = '<h3>Полное меню ресторана</h3>';
        
        // Добавляем каждую категорию
        for (const categoryKey in FULL_MENU) {
            const category = FULL_MENU[categoryKey];
            html += `<div class="menu-category"><h4>${category.title}</h4><table class="menu-table">`;
            
            category.categories.forEach(subCat => {
                subCat.items.forEach(item => {
                    html += `<tr>
                        <td>${item.name}</td>
                        <td class="weight">${item.weight}</td>
                        <td class="price">${item.price}</td>
                    </tr>`;
                });
            });
            
            html += '</table></div>';
        }
        
        // Вставляем в модальное окно
        menuContent.innerHTML = html;
        menuModal.querySelector('h2').textContent = 'Полное меню ресторана';
        
        // Показываем окно
        menuModal.style.display = 'block';
        modalOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            menuModal.style.opacity = '1';
            menuModal.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 10);
    });
}
        // Открытие модального окна при клике на карточки
        menuCards.forEach(card => {
            card.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                console.log('Открытие меню:', category);
                openMenuModal(category);
            });
        });
        
        // Открытие модального окна при клике на кнопку "Меню"
        if (mainMenuBtn) {
            mainMenuBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Открытие основного меню');
                openMenuModal('menu');
            });
        }
        
        // ДОБАВЛЕНО: Открытие модального окна при клике на кнопку "Бар"
        if (barNavBtn) {
            barNavBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Открытие барного меню');
                openMenuModal('bar');
            });
        }
        
        // Закрытие модальных окон
        closeButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeModal();
            });
        });
        
        if (modalOverlay) {
            modalOverlay.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal();
                }
            });
        }
        
        // Закрытие по ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }
    
    function openMenuModal(category) {
        console.log('Открытие модалки для категории:', category);
        
        if (!FULL_MENU[category]) {
            console.error('Категория не найдена:', category);
            category = 'zakuski';
        }
        
        loadMenuContent(category);
        
        if (menuModal && modalOverlay) {
            menuModal.style.display = 'block';
            modalOverlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Анимация появления
            setTimeout(() => {
                menuModal.style.opacity = '1';
                menuModal.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 10);
        } else {
            console.error('Элементы модалки не найдены!');
        }
    }
    
    function closeModal() {
        console.log('Закрытие модалки');
        
        if (menuModal && modalOverlay) {
            menuModal.style.opacity = '0';
            menuModal.style.transform = 'translate(-50%, -50%) scale(0.9)';
            
            setTimeout(() => {
                menuModal.style.display = 'none';
                modalOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    }
    
    function loadMenuContent(category) {
        const data = FULL_MENU[category];
        
        if (!data || !menuContent) {
            console.error('Нет данных или контейнера для меню');
            return;
        }
        
        let html = `<h3>${data.title}</h3>`;
        
        data.categories.forEach(cat => {
            html += `<div class="menu-category">
                <h4>${cat.name}</h4>
                <table class="menu-table">`;
            
            if (cat.items && cat.items.length > 0) {
                cat.items.forEach(item => {
                    html += `<tr>
                        <td>${item.name}</td>
                        <td class="weight">${item.weight}</td>
                        <td class="price">${item.price}</td>
                    </tr>`;
                });
            } else {
                html += `<tr><td colspan="3">Нет позиций</td></tr>`;
            }
            
            html += `</table></div>`;
        });
        
        menuContent.innerHTML = html;
        
        // Обновляем заголовок
        const modalTitle = menuModal.querySelector('h2');
        if (modalTitle) {
            modalTitle.textContent = `Меню - ${data.title}`;
        }
        
        console.log('Контент меню загружен');
    }
    
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href === '#' || href === '#0') return;
                
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    let targetElement;
                    
                    // Особый случай для кнопки локации
                    if (targetId === 'location') {
                        targetElement = document.querySelector('.contacts-location-section:last-of-type');
                    } else {
                        targetElement = document.querySelector(href);
                    }
                    
                    if (targetElement) {
                        // Добавляем активный класс
                        document.querySelectorAll('.nav-btn').forEach(btn => {
                            btn.classList.remove('active');
                        });
                        this.classList.add('active');
                        
                        // Плавная прокрутка
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
    
    function initButtonEffects() {
        const buttons = document.querySelectorAll('.nav-btn, .main-menu-btn, .arrow, .dot');
        
        buttons.forEach(button => {
            // Эффект при наведении
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
            
            // Эффект при клике
            button.addEventListener('mousedown', function() {
                this.style.transform = 'translateY(0) scale(0.95)';
            });
            
            button.addEventListener('mouseup', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            });
        });
        
        // Эффекты для карточек меню
        menuCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const glow = this.querySelector('.card-glow');
                if (glow) {
                    glow.style.opacity = '0.3';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const glow = this.querySelector('.card-glow');
                if (glow) {
                    glow.style.opacity = '0';
                }
            });
        });
        
        // Эффекты для изображений
        const images = document.querySelectorAll('.about-img-container, .gallery-item-container');
        images.forEach(container => {
            container.addEventListener('mouseenter', function() {
                const glow = this.querySelector('.img-glow');
                if (glow) {
                    glow.style.opacity = '0.5';
                }
            });
            
            container.addEventListener('mouseleave', function() {
                const glow = this.querySelector('.img-glow');
                if (glow) {
                    glow.style.opacity = '0';
                }
            });
        });
    }
    
    function initResponsiveNav() {
        function handleResponsiveNav() {
            const nav = document.querySelector('.nav-container');
            if (!nav) return;
            
            if (window.innerWidth <= 768) {
                nav.style.flexDirection = 'column';
                nav.style.alignItems = 'center';
                nav.style.gap = '10px';
            } else {
                nav.style.flexDirection = 'row';
                nav.style.alignItems = 'center';
                nav.style.gap = '20px';
            }
        }
        
        if (document.querySelector('.nav-container')) {
            window.addEventListener('resize', handleResponsiveNav);
            handleResponsiveNav();
        }
    }
    
    function preloadAllImages() {
        const allImages = [
            'images/logo-bg.png',
            'images/plate.png',
            'images/about-1.jpg',
            'images/about-2.jpg',
            'images/about-3.jpg',
            'images/interior-1.jpg',
            'images/interior-2.jpg',
            'images/interior-3.jpg',
            'images/interior-4.jpg',
            'images/interior-5.jpg',
            'images/interior-6.jpg',
            'images/promo-1.jpg',
            'images/promo-2.jpg',
            'images/promo-3.jpg',
            'menu-images/zakuski.jpg',
            'menu-images/shashlyk.jpg',
            'menu-images/hot-dishes.jpg',
            'menu-images/pasta.jpg'
        ];
        
        allImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
        
        console.log('Предзагрузка изображений выполнена');
    }
    
    function initActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-btn[href^="#"]');
        
        function updateActiveNav() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }
        
        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav();
    }
    
    // Параллакс эффект для логотипа
    function initParallax() {
        const logo = document.querySelector('.bg-logo-container');
        const plate = document.querySelector('.hero-plate-container');
        
        if (!logo && !plate) return;
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            
            if (logo) {
                logo.style.transform = `translate(-50%, calc(-50% + ${rate}px))`;
            }
            
            if (plate) {
                plate.style.transform = `translateY(calc(-50% + ${rate * 0.5}px))`;
            }
        });
    }
    
    setTimeout(initParallax, 100);
    
    function initTouchOptimizations() {
        if ('ontouchstart' in window) {
            document.querySelectorAll('.nav-btn, .main-menu-btn').forEach(btn => {
                btn.style.padding = '15px 25px';
                btn.style.minHeight = '50px';
            });
        }
        
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function(event) {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }
    
    initTouchOptimizations();
});

// ========== УПРАВЛЕНИЕ КАРТОЙ ==========
// Получаем элементы
const mapContainer = document.getElementById('map-container');
const mapFrame = document.getElementById('yandex-map');

// Флаг: нажата ли Ctrl
let isCtrlPressed = false;

// Функция: включить масштабирование (скролл)
function enableMapScroll() {
    mapFrame.style.pointerEvents = 'auto';
}

// Функция: отключить масштабирование
function disableMapScroll() {
    mapFrame.style.pointerEvents = 'none';
}

// При загрузке страницы сразу отключаем скролл
disableMapScroll();

// Слушаем нажатие клавиши Ctrl
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey) {
        isCtrlPressed = true;
        enableMapScroll();
    }
});

// Слушаем отжатие клавиши Ctrl
document.addEventListener('keyup', (e) => {
    if (!e.ctrlKey) {
        isCtrlPressed = false;
        disableMapScroll();
    }
});

// Дополнительно: отключаем скролл, если курсор ушёл с карты
mapContainer.addEventListener('mouseleave', () => {
    if (!isCtrlPressed) {
        disableMapScroll();
    }
// НОВАЯ ФУНКЦИЯ: Загружает ВСЁ меню целиком
function loadFullMenu() {
    let html = `<h3>Полное меню ресторана</h3>`;
    
    // Проходим по всем категориям
    Object.keys(FULL_MENU).forEach(categoryKey => {
        const category = FULL_MENU[categoryKey];
        html += `<div class="menu-category">
            <h4>${category.title}</h4>
            <table class="menu-table">`;
        
        // Собираем все позиции из всех подкатегорий
        category.categories.forEach(subCat => {
            if (subCat.items && subCat.items.length > 0) {
                subCat.items.forEach(item => {
                    html += `<tr>
                        <td>${item.name}</td>
                        <td class="weight">${item.weight}</td>
                        <td class="price">${item.price}</td>
                    </tr>`;
                });
            }
        });
        
        html += `</table></div>`;
    });
    
    return html;
}

// НОВАЯ ФУНКЦИЯ: Открывает полное меню
function openFullMenuModal() {
    console.log('Открытие полного меню');
    
    const menuContent = document.getElementById('menuContent');
    const menuModal = document.getElementById('menuModal');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (!menuContent || !menuModal || !modalOverlay) {
        console.error('Элементы модалки не найдены!');
        return;
    }
    
    // Загружаем ВСЁ меню
    menuContent.innerHTML = loadFullMenu();
    
    // Обновляем заголовок
    const modalTitle = menuModal.querySelector('h2');
    if (modalTitle) {
        modalTitle.textContent = 'Полное меню ресторана';
    }
    
    // Показываем модальное окно
    menuModal.style.display = 'block';
    modalOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Анимация появления
    setTimeout(() => {
        menuModal.style.opacity = '1';
        menuModal.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);
}

// ГАРАНТИРОВАННЫЙ ФИКС для кнопки "Полное меню"
function initFullMenuButton() {
    const fullMenuBtn = document.getElementById('fullMenuBtn');
    const menuContent = document.getElementById('menuContent');
    const menuModal = document.getElementById('menuModal');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (!fullMenuBtn || !menuContent || !menuModal || !modalOverlay) {
        console.error('Не найдены элементы для полного меню!');
        return;
    }
    
    fullMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('КЛИК по кнопке Полное меню!');
        
        // Создаем HTML для ВСЕГО меню
        let html = '<h3>Полное меню ресторана GRAND EVENT</h3>';
        
        // Проходим по ВСЕМ категориям
        for (const categoryKey in FULL_MENU) {
            if (FULL_MENU.hasOwnProperty(categoryKey)) {
                const category = FULL_MENU[categoryKey];
                html += `<div class="menu-category"><h4>${category.title}</h4>`;
                
                // Добавляем все подкатегории
                category.categories.forEach(subCat => {
                    html += `<table class="menu-table">`;
                    
                    // Добавляем все блюда
                    subCat.items.forEach(item => {
                        html += `<tr>
                            <td>${item.name}</td>
                            <td class="weight">${item.weight || ''}</td>
                            <td class="price">${item.price}</td>
                        </tr>`;
                    });
                    
                    html += `</table>`;
                });
                
                html += '</div>';
            }
        }
        
        // Вставляем HTML в модальное окно
        menuContent.innerHTML = html;
        
        // Меняем заголовок
        const modalTitle = menuModal.querySelector('h2');
        if (modalTitle) {
            modalTitle.textContent = 'Полное меню';
        }
        
        // Показываем модальное окно
        menuModal.style.display = 'block';
        modalOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Анимация
        setTimeout(() => {
            menuModal.style.opacity = '1';
            menuModal.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 10);
    });
    
    console.log('Кнопка "Полное меню" инициализирована!');
}

// Вызываем функцию после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    initFullMenuButton();
});

// Гарантированная инициализация кнопки "Полное меню"
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен, инициализируем кнопку Полного меню...');
    
    const fullMenuBtn = document.getElementById('fullMenuBtn');
    const menuContent = document.getElementById('menuContent');
    const menuModal = document.getElementById('menuModal');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (!fullMenuBtn) {
        console.error('Кнопка "Полное меню" не найдена!');
        return;
    }
    
    fullMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('КЛИК по кнопке Полное меню!');
        
        // Создаем HTML для ВСЕГО меню
        let html = '<h3>Полное меню ресторана GRAND EVENT</h3>';
        
        // Проходим по ВСЕМ категориям
        for (const categoryKey in FULL_MENU) {
            if (FULL_MENU.hasOwnProperty(categoryKey)) {
                const category = FULL_MENU[categoryKey];
                html += `<div class="menu-category"><h4>${category.title}</h4>`;
                
                // Добавляем все подкатегории
                category.categories.forEach(subCat => {
                    html += `<table class="menu-table">`;
                    
                    // Добавляем все блюда
                    subCat.items.forEach(item => {
                        html += `<tr>
                            <td>${item.name}</td>
                            <td class="weight">${item.weight || ''}</td>
                            <td class="price">${item.price}</td>
                        </tr>`;
                    });
                    
                    html += `</table>`;
                });
                
                html += '</div>';
            }
        }
        
        // Вставляем HTML в модальное окно
        menuContent.innerHTML = html;
        
        // Меняем заголовок
        const modalTitle = menuModal.querySelector('h2');
        if (modalTitle) {
            modalTitle.textContent = 'Полное меню';
        }
        
        // Показываем модальное окно
        menuModal.style.display = 'block';
        modalOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Анимация
        setTimeout(() => {
            menuModal.style.opacity = '1';
            menuModal.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 10);
    });
    
    console.log('Кнопка "Полное меню" инициализирована!');
});

});