
const cheese = 12,
    mash = 9,
    potato = 9,
    pineaple = 12,
    olives = 12,
    corn = 12;

const kur = 90,
    mini = 55,
    miniArab = 180,
    arab = 140,
    kurKur = 145,
    kavkaz = 140,
    miniKavkaz = 80,
    dener = 57,
    denerCheese = 65,
    sul = 50,
    sulKur = 105,
    sulTel = 105,
    ov = 45,
    gam = 57,
    cheeseburger = 65,
    vena = 45,
    bav = 50,
    ohota = 55,
    venaBul = 40,
    bavBul = 45,
    ohotaBul = 50,
    souce = 7,
    fri = 40,
    selyanka = 45,
    kolca = 120,
    nagets = 120,
    midii = 120,
    luk = 60,
    pel = 90,
    syrPal = 120;
const airan = 30,
    uzvar = 25,
     karkade = 25,
    limonad  = 25,
    p3 = 20,
    p5 = 25,
    p8 = 35;

const margo = 150,
    gavaii = 175,
    ohotnik = 160,
    tehas = 170,
    york = 180,
    myaso = 180,
    syr = 185,
    kaban = 200,
    buff= 190,
     more = 200,
    vegan = 160,
    pepper = 170;


export const menu = [
    {
        searchPhrase: 'ку',
        name: 'Куринная',
        count: 1,
        price: kur,
    },
    {
        searchPhrase: 'кк',
        name: 'Куринная двойное мясо',
        count: 1,
        price: kurKur,
    },
    {
        searchPhrase: 'ми',
        name: 'Мини',
        count: 1,
        price: mini,
    },
    {
        searchPhrase: 'ма',
        name: 'Мини Араб',
        count: 1,
        price: miniArab,
    },
    {
        searchPhrase: 'ар',
        name: 'Араб',
        count: 1,
        price: arab,
    },
    {
        searchPhrase: 'ка',
        name: 'Кавказ',
        count: 1,
        price: kavkaz,
    },
    {
        searchPhrase: 'мк',
        name: 'Мини Кавказ',
        count: 1,
        price: miniKavkaz,
    },
    {
        searchPhrase: 'де',
        name: 'Денер',
        count: 1,
        price: dener,
    },
    {
        searchPhrase: 'дс',
        name: 'Денер Сыр',
        count: 1,
        price: denerCheese,
    },
    {
        searchPhrase: 'су',
        name: 'Сулугуни',
        count: 1,
        price: sul,
    },
    {
        searchPhrase: 'ов',
        name: 'Овощная',
        count: 1,
        price: ov,
    },
    {
        searchPhrase: 'ск',
        name: 'Сулугуни Курица',
        count: 1,
        price: sulKur,
    },
    {
        searchPhrase: 'ст',
        name: 'Сулугуни Телятина',
        count: 1,
        price: sulTel,
    },
    {
        searchPhrase: 'га',
        name: 'Гамбургер',
        count: 1,
        price: gam,
    },
    {
        searchPhrase: 'чи',
        name: 'Чизбургер',
        count: 1,
        price: cheeseburger,
    },
    {
        searchPhrase: 'вл',
        name: 'Вена',
        count: 1,
        price: vena,
    },
    {
        searchPhrase: 'бл',
        name: 'Бавария',
        count: 1,
        price: bav,
    },
    {
        searchPhrase: 'ол',
        name: 'Охота',
        count: 1,
        price: ohota,
    },
    {
        searchPhrase: 'вб',
        name: 'Вена булочка',
        count: 1,
        price: venaBul,
    },
    {
        searchPhrase: 'бб',
        name: 'Бавария булочка',
        count: 1,
        price: bavBul,
    },
    {
        searchPhrase: 'об',
        name: 'Охота булочка',
        count: 1,
        price: ohotaBul,
    },
    {
        searchPhrase: 'бс',
        name: 'Фирменный соус',
        count: 1,
        price: souce,
    },
    {
        searchPhrase: 'кс',
        name: 'Кетчуп',
        count: 1,
        price: souce,
    },
    {
        searchPhrase: 'ас',
        name: 'Аджика',
        count: 1,
        price: souce,
    },
    // Фритюр
    {
        searchPhrase: 'фф',
        name: 'Фри',
        count: 1,
        price: fri,
    },
    {
        searchPhrase: 'фс',
        name: 'Селянка',
        count: 1,
        price: selyanka,
    },
    {
        searchPhrase: 'фк',
        name: 'Кольца кальмара',
        count: 1,
        price: kolca,
    },
    {
        searchPhrase: 'фл',
        name: 'Луковые кольца',
        count: 1,
        price: luk,
    },
    {
        searchPhrase: 'фп',
        name: 'Пельмени',
        count: 1,
        price: pel,
    },
    {
        searchPhrase: 'фн',
        name: 'Нагетсы',
        count: 1,
        price: nagets,
    },
    {
        searchPhrase: 'фм',
        name: 'Мидии',
        count: 1,
        price: midii,
    },
    {
        searchPhrase: 'фс',
        name: 'Сырные палочки',
        count: 1,
        price: syrPal,
    },

    // Напитки
    {
        searchPhrase: 'на',
        name: 'Айран',
        count: 1,
        price: airan,
    },
    {
        searchPhrase: 'нл',
        name: 'Лимонад',
        count: 1,
        price: limonad,
    },
    {
        searchPhrase: 'ну',
        name: 'Узвар',
        count: 1,
        price: uzvar,
    },
    {
        searchPhrase: 'нк',
        name: 'Каркаде',
        count: 1,
        price: karkade,
    },
    {
        searchPhrase: 'пм',
        name: 'Пепси 0.3',
        count: 1,
        price: p3,
    },
    {
        searchPhrase: 'пн',
        name: 'Пепси 0.5',
        count: 1,
        price: p5,
    },
    {
        searchPhrase: 'пб',
        name: 'Пепси 0.8',
        count: 1,
        price: p8,
    },


// Пицца
    {
        searchPhrase: 'пм',
        name: 'Маргарита',
        count: 1,
        price: margo,
    },
    {
        searchPhrase: 'пв',
        name: 'Вегатерианская',
        count: 1,
        price: vegan,
    },
    {
        searchPhrase: 'по',
        name: 'Охотник',
        count: 1,
        price: ohotnik,
    },
    {
        searchPhrase: 'пг',
        name: 'Гавайская',
        count: 1,
        price: gavaii,
    },
    {
        searchPhrase: 'пт',
        name: 'Техас',
        count: 1,
        price: tehas,
    },
    {
        searchPhrase: 'пп',
        name: 'Пепперони',
        count: 1,
        price: pepper,
    },
    {
        searchPhrase: 'пй',
        name: 'Нью-Йорк',
        count: 1,
        price: york,
    },
    {
        searchPhrase: 'пс',
        name: '4 сыра',
        count: 1,
        price: syr,
    },
    {
        searchPhrase: 'пя',
        name: '4 мяса',
        count: 1,
        price: myaso,
    },
    {
        searchPhrase: 'пр',
        name: 'Морская',
        count: 1,
        price: more,
    },
    {
        searchPhrase: 'пф',
        name: 'Буффало',
        count: 1,
        price: buff,
    },
    {
        searchPhrase: 'пк',
        name: 'Кабаноси',
        count: 1,
        price: kaban,
    },


]
export const extra = [
    {
        searchPhrase: 'с',
        id: 1,
        name: 'сыр',
        price: cheese,
    },
    {
        searchPhrase: 'г',
        id: 2,
        name: 'грибы',
        price: mash,
    },
    {
        searchPhrase: 'к',
        id: 3,
        name: 'картошка',
        price: potato,
    },
    {
        searchPhrase: 'м',
        id: 4,
        name: 'маслины',
        price: olives,
    },
    {
        searchPhrase: 'а',
        id: 5,
        name: 'ананас',
        price: pineaple,
    },
    {
        searchPhrase: 'з',
        id: 6,
        name: 'кукуруза',
        price: corn,
    },
]
console.log("Cокращения")
menu.forEach(item => console.log(item.searchPhrase, ' - ', item.name))
console.log("Добавки")
extra.forEach(item => console.log(item.searchPhrase, ' - ', item.name))

