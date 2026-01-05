import type {Person} from "../types";
import {images} from "./images.ts";


export const persons: Person[] = [
    {
        id: 'akinfeev',
        name: 'Игорь',
        surname: 'Акинфеев',
        country: 'Россия',
        images: [],
    },
    {
        id: 'torop',
        name: 'Владислав',
        surname: 'Тороп',
        country: 'Россия',
        images: [],
    },
    {
        id: 'gajic',
        name: 'Милан',
        surname: 'Гайич',
        country: 'Сербия',
        images: [],
    },
    {
        id: 'abdulkadyrov',
        name: 'Джамалутдин',
        surname: 'Абдулкадыров',
        country: 'Россия',
        images: []
    },
    {
        name: 'Игорь',
        surname: 'Дивеев',
        country: 'Россия',
        images: [],
        id: 'diveev',
    },
    {
        name: 'Жоао',
        surname: 'Виктор',
        country: 'Бразилия',
        images: [],
        id: 'victor',
    },
    {
        name: 'Данил',
        surname: 'Круговой',
        country: 'Россия',
        id: 'krugovoi',
        images: []
    },
    {
        name: 'Матвей',
        surname: 'Лукин',
        country: 'Россия',
        id: 'lukin',
        images: []
    },
    {
        name: 'Барбоза',
        surname: 'Мойзес',
        country: 'Бразилия',
        images: ["https://i.ibb.co/xSVBB16p/moises.png", "https://i.ibb.co/4RmFKPhp/a-HR0c-HM6-Ly9zd-G9y-YWdl-Lnlhbm-Rle-GNsb3-Vk-Lm5ld-C9z-My1t-ZXRhcm-F0a-W5ncy1zd-G9y-YWdl-L2lt-YWdlcy9.webp", "https://mf.b37mrtl.ru/russian/images/2023.10/article/651c101b02e8bd746a1f54cc.png", "https://cdn-storage-media.tass.ru/resize/688x456/tass_media/2025/12/07/q/1765134054973857_qs1D7eIK.jpg"]
    },
    {
        name: 'Рамиро',
        surname: 'Ди Лусиано',
        country: 'Аргентина',
        images: ["https://i.ibb.co/7d4Mkk1K/luciaon.webp"]
    },
    {
        name: 'Михаил',
        surname: 'Рядно',
        country: 'Россия',
        images: ["https://i.ibb.co/kpqZZzS/ryadno.jpg"]
    },
    {
        name: 'Артём',
        surname: 'Бандикян',
        country: 'Армения',
        images: ["https://i.ibb.co/1fBk6p0m/npa6530-1-1.jpg", "https://i.ibb.co/NfRtBcY/a-HR0c-HM6-Ly9zd-G9y-YWdl-Lnlhbm-Rle-GNsb3-Vk-Lm5ld-C9z-My1t-ZXRhcm-F0a-W5ncy1zd-G9y-YWdl-L2lt-YWdlcy8.webp"]
    },
    {
        name: 'Родриго',
        surname: 'Вильягра',
        country: 'Аргентина',
        images: ["https://i.ibb.co/kVTp73kb/720x405.jpg", "https://i.ibb.co/fz4gB1bv/67a8166-2-ae9c1606ca183cb2b9cea6ea149969e0.jpg"]
    },
    {
        name: 'Глеб',
        surname: 'Пополитов',
        country: 'Россия',
        images: ["https://i.ibb.co/RG3CcnMH/0a8ad0c9c64e03f0081b10728ff8c3b168d98a4277dd4402194630.jpg",
            "https://i.ibb.co/FbpXJCcq/ore1125-3840.jpg",
            "https://i.ibb.co/5xSs1LNk/4-Xum-M8-Psnt-E.jpg"]
    },
    {
        name: 'Даниэль',
        surname: 'Руис',
        country: 'Колумбия',
        images: ["https://i.ibb.co/99qR7SGp/Daniel-Ruis-pfc-CSKA-b001dbe375.webp", "https://i.ibb.co/3Vgtp5Q/1758364237-da75feb2d82c58c04eb07895b36607702d77d073.jpg", "https://i.ibb.co/23WDD1xp/78b0581a755c8c48cc6b2780121cb70468ab4c1c03629742713733.jpg"]
    },
    {
        name: 'Матвей',
        surname: 'Кисляк',
        country: 'Россия',
        images: ["https://i.ibb.co/8LyyGVPx/fb58a6748b6b82dd1f0feb69cd7b105c68e2a39f0dd97318890678.jpg",
        "https://i.ibb.co/9mym1PHC/Kislyak-RPL-0.jpg",
        "https://i.ibb.co/wZ5xFXY8/image.png"]
    },
    {
        name: 'Лионель',
        surname: 'Верде',
        country: 'Аргентина',
        images: ["https://i.ibb.co/9x1PPnw/image.png",
        "https://i.ibb.co/9kTZNCbc/image.png",
        "https://i.ibb.co/chsfdLbC/image.png"]
    },
    {
        name: 'Матеус',
        surname: 'Алвес',
        country: 'Бразилия',
        images: ["https://i.ibb.co/Jw43226c/image.png",
        "https://i.ibb.co/2777Rxj8/image.png",
        "https://i.ibb.co/7JvQj2P0/image.png"]
    },
    {
        name: 'Матия',
        surname: 'Попович',
        country: 'Сербия',
        images: ["https://i.ibb.co/PZXx3Lbx/image.png",
        "https://i.ibb.co/hRwVJkwp/image.png"]
    },
    {
        name: 'Иван',
        surname: 'Обляков',
        country: 'Россия',
        images: ["https://i.ibb.co/PsfKQrRg/image.png",
        "https://i.ibb.co/R18cq6X/image.png",
        "https://i.ibb.co/zW67yF85/image.png"]
    },
    {
        name: 'Энрике',
        surname: 'Кармо',
        country: 'Бразилия',
        images: ["https://i.ibb.co/G48FvwSQ/image.png",
        "https://i.ibb.co/C5tGHw7x/image.png"]
    },
    {
        name: 'Манса',
        surname: 'Барра',
        country: 'Бразилия',
        images: ["https://s-cdn.sportbox.ru/images/styles/1200-auto/fp_fotos/16/78/0cd7dafa6cfb34504a890ab8e813b0596890de4964221152519371.jpg"]
    },
    {
        name: 'Кирилл',
        surname: 'Глебов',
        country: 'Россия',
        images: ["https://i.ibb.co/QvfLN420/glebov.jpg", "https://media-1obl-ru.storage.yandexcloud.net/resize_cache/1199494/83132dad08c79bfbcc1d891fdcdbb658/iblock/36f/36f131760974dd457eed2a7c67db2fbd/2996f60c8c57069f8466aca2b721f1cf.jpeg"]
    },
    {
        name: 'Тамерлан',
        surname: 'Мусаев',
        country: 'Россия',
        images: ["https://cdn-m.sport24.ru/m/ca77/a531/9409/428c/a969/5ae5/6334/d646/1200_10000_max.webp", "https://mf.b37mrtl.ru/russian/images/2025.09/article/68d92d0aae5ac956cf1cb6ce.jpg"]
    },
    {
        name: 'Артём',
        surname: 'Шуманский',
        country: 'Белоруссия',
        images: ["https://i.ibb.co/Qxv1S9v/image.png",
        "https://i.ibb.co/xn7gpmP/image.png"]
    },
    {
        name: 'Илья',
        surname: 'Шкурин',
        country: 'Белоруссия',
        images: ["https://i.ibb.co/dyxFJDF/image.png",
        "https://i.ibb.co/Sw1HRKfD/image.png",
        "https://i.ibb.co/Wvyzq9JT/image.png"]
    },
    {
        name: 'Виллиан',
        surname: 'Роша',
        country: 'Бразилия',
        images: ["https://s-cdn.sportbox.ru/images/styles/1200-auto/fp_fotos/5b/0d/e06d0d55e0b5a442ecde977da679410d67fa50d9dedd9157092717.jpg"]
    },
    {
        name: 'Алексей',
        surname: 'Березуцкий',
        country: 'Россия',
        images: ["https://pfc-cska.com/uploads/content/x_bitrix/pfc-cska.com/upload/news/berezawolf.jpg", "https://cdn.bfm.ru/news/photopreviewextralarge/2021/07/19/aleksey.jpg"]
    },
    {
        name: 'Василий',
        surname: 'Березуцкий',
        country: 'Россия',
        images: ["https://pfc-cska.com/uploads/content/x_bitrix/pfc-cska.com/upload/medialibrary/62b/dsc_0116.jpg"]
    },
    {
        name: 'Сергей',
        surname: 'Игнашевич',
        country: 'Россия',
        images: ["https://s-cdn.sportbox.ru/images/styles/1920_1080/fp_fotos/62/0e/cc9047f282745092946abfa7591845a35afa8f3232da4734352386.jpg", "https://cdn5.vedomosti.ru/image/2023/7k/pp0rf/original-xau.jpg", "https://cdnn21.img.ria.ru/images/rsport/113966/51/1139665197_0:0:3154:1774_650x0_80_0_0_46b6ba2695a73377702b1e9b7d5f1bc4.jpg"]
    },
    {
        name: 'Виктор',
        surname: 'Васин',
        country: 'Россия',
        images: ["https://s-cdn.sportbox.ru/images/styles/1200-auto/fp_fotos/23/2b/95fec173a7e458d0b4c9e253918be1bb5fbcdf1c824f9595890429.jpg"]
    },
    {
        name: 'Понтус',
        surname: 'Вернблум',
        country: 'Швеция',
        images: ["https://s-cdn.sportbox.ru/images/styles/1920_1080/fp_fotos/1f/1b/496ecb499e6fd210cb231caaf4ab01575afc2f14ab847973734822.jpg", "https://i.ibb.co/X17vyYW/fd721f82387280e780bc61b39d4fb71e5a015eca1e13e661232301.jpg"]
    },
    {
        name: 'Расмум',
        surname: 'Эльм',
        country: 'Швеция',
        images: ["https://s-cdn.sportbox.ru/images/styles/1920_1080/fp_fotos/7b/96/54bb74feb2eb8.jpg"]
    },
    {
        name: 'Александр',
        surname: 'Головин',
        country: 'Россия',
        images: ["https://i.ibb.co/TM50RXbD/image.png", "https://i.ibb.co/YHWL74w/image.png", "https://i.ibb.co/HpgSvT3Z/image.png",]
    },
    {
        name: 'Алан',
        surname: 'Дзагоев',
        country: 'Россия',
        images: ["https://region15.ru/wp-content/uploads/2022/05/BB29E9E6-CC08-4873-90D1-BF02478044D5.jpeg", "https://cdnn21.img.ria.ru/images/15601/47/156014748_0:0:0:0_650x0_80_0_0_37159fe035ef218daea77de7414869f6.jpg"]
    },
    {
        name: 'Сейду',
        surname: 'Думбия',
        country: 'Кот-д\'Ивуар',
        images: ["https://pfc-cska.com/uploads/content/x_bitrix/pfc-cska.com/upload/news/doumbia_futbol.jpg"]
    },
    {
        name: 'Роман',
        surname: 'Ерёменко',
        country: 'Финляндия',
        images: ["https://s-cdn.sportbox.ru/images/styles/1920_1080/fp_fotos/37/fd/d55d471288afa8f523554debaf70c2e0573afde221595811647432.jpg"]
    },
    {
        name: 'Дмитрий',
        surname: 'Ефремов',
        country: 'Россия',
        images: ["https://news.store.rambler.ru/img/a6c1c9c52f9c7ed0e424497d4fd5d1af?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen"]
    },
    {
        name: 'Георги',
        surname: 'Миланов',
        country: 'Болгария',
        images: ["https://cdn.sportsdaily.prod.plat.agency/0daa8e0b269144ed937e31a7509c79eb_0e4e996b29.jpg"]
    },
    {
        name: 'Игорь',
        surname: 'Яновский',
        country: 'Россия',
        images: ["https://ss.sport-express.ru/userfiles/materials/43/436640/large.jpg"]
    },
    {
        name: 'Секу',
        surname: 'Койта',
        country: 'Мали',
        images: ["https://ss.sport-express.ru/userfiles/materials/203/2038446/volga.jpg"]
    },
    {
        name: 'Секу',
        surname: 'Олисе',
        country: 'Нигерия',
        images: ["https://s-cdn.sportbox.ru/images/styles/1200-auto/fp_fotos/3e/00/6851ffb108ed673992e5ab72f948676664d21bf170a91952549489.jpg"]
    },
    {
        name: 'Ахмед',
        surname: 'Муса',
        country: 'Нигерия',
        images: ["https://s-cdn.sportbox.ru/images/styles/1200-auto/fp_fotos/30/71/b4d44e17ab3155bb3c9d85f07c84ef4b56dc8f26114ad441525500.jpg"]
    },
    {
        name: 'Кирилл',
        surname: 'Набабкин',
        country: 'Россия',
        images: ["https://s-cdn.sportbox.ru/images/styles/1200-auto/fp_fotos/a8/29/059b239be50cf2cba00998e4a3c332cc630bc3fde6d4c868891573.jpg"]
    },
    {
        name: 'Бибрас',
        surname: 'Натхо',
        country: 'Израиль',
        images: ["https://cdn.sportsdaily.prod.plat.agency/880048374fedeb9d836025df6084d206_fdd78bd191.jpg"]
    },
    {
        name: 'Миралем',
        surname: 'Пьянич',
        country: 'Босния и Герцеговина',
        images: ["https://s-cdn.sportbox.ru/images/styles/1200-auto/fp_fotos/df/2d/cea62486038c13051813d05b0a88396c671d11f1804e7599507216.jpg"]
    },
    {
        name: 'Аарон',
        surname: 'Оланаре',
        country: 'Нигерия',
        images: ["https://img.championat.com/s/732x488/news/big/n/i/aaron-olanare_1462447580612000464.jpg"]
    },
    {
        name: 'Кирилл',
        surname: 'Панченко',
        country: 'Россия',
        images: ["https://rg.ru/uploads/images/127/22/62/Kirill_Panchenko._Anton_Denisov,_RIA.jpg"]
    },
    {
        name: 'Карлос',
        surname: 'Страндберг',
        country: 'Швеция',
        images: ["https://photobooth.cdn.sports.ru/preset/post/c/78/8cba6332a41bf9a23cb289178c0e7.jpeg?w=730&f=webp&s=2x"]
    },
    {
        name: 'Сергей',
        surname: 'Ткачев',
        country: 'Россия',
        images: ["https://cdn.iz.ru/sites/default/files/styles/900x506/public/article-2017-05/00a056011f47ed133c4628b567b9ed24.jpg?itok=KG_CGo_o"]
    },
    {
        name: 'Зоран',
        surname: 'Тошич',
        country: 'Сербия',
        images: ["https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/e5/12/545a665dad32c.jpg", "https://i.ibb.co/35qcz141/arut18-png.jpg"]
    },
    {
        name: 'Милош',
        surname: 'Красич',
        country: 'Сербия',
        images: ["https://mf.b37mrtl.ru/russian/images/2020.09/article/5f50a216ae5ac96605574d46.jpg", "https://i.ibb.co/gZPFXkrs/image.png"]
    },
    {
        name: 'Марио',
        surname: 'Фернандес',
        country: 'Бразилия',
        images: ["https://img.championat.com/s/732x488/news/big/w/r/cska-ne-dogovorilsya-o-vozvraschenii-fernandesa_168847348028530105.jpg"]
    },
    {
        name: 'Александр',
        surname: 'Цауня',
        country: 'Латвия',
        images: ["https://cdn.sportsdaily.prod.plat.agency/large_fb1ea7b135b48a00c553662d1c6e1f71_75da123d93.jpg"]
    },
    {
        name: 'Сергей',
        surname: 'Чепчугов',
        country: 'Россия',
        images: ["https://pfc-cska.com/uploads/content/x_bitrix/pfc-cska.com/upload/news/chepchugov_kuban.jpg"]
    },
    {
        name: 'Ильзат',
        surname: 'Ахметов',
        country: 'Россия',
        images: ["https://i.ibb.co/5xT05YBG/ilzat-ahmetov-15441357851883892943.jpg", "https://i.ibb.co/xq0TXd63/fd721f82387280e780bc61b39d4fb71e5d9074dea2fd0839813967.jpg"]
    },
    {
        name: 'Родриго',
        surname: 'Бекао',
        country: 'Бразилия',
        images: ["https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/65/b4/0aa6489c87c0f6c2f93bc53fd8bbfde55cfced27af0fb633791989.jpg"]
    },
    {
        name: 'Яка',
        surname: 'Бийол',
        country: 'Словения',
        images: ["https://i.ibb.co/Q7tD0QwT/b1ee7937e61788288c91b9abfb77df5b5f5b848b1d1c3216256538.jpg", "https://i.ibb.co/gKPcB9z/bijol-zajavil-chto-nedovolen-svoim-polozheniem-v-csk-1585902328631125407.jpg", "https://i.ibb.co/3y9BfVbp/i-TJv-NZdg-X2.jpg"]
    },
    {
        name: 'Кристиан',
        surname: 'Бистрович',
        country: 'Хорватия',
        images: ["https://ss.sport-express.net/userfiles/materials/212/2122181/1180x665.jpg"]
    },
    {
        name: 'Никола',
        surname: 'Влашич',
        country: 'Хорватия',
        images: ["https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/73/f8/5bcaa76cb901dc50e6391209b5d638645fa44ab21a126782123404.jpg"]
    },
    {
        name: 'Ивица',
        surname: 'Олич',
        country: 'Хорватия',
        images: ["https://ss.sport-express.ru/userfiles/materials/9/90366/large.jpg"]
    },
    {
        name: 'Рифат',
        surname: 'Жемалетдинов',
        country: 'Россия',
        images: ["https://i.ibb.co/sztQFch/igrok-cska-zhemaletdinov-vse-moi-avtoshtrafy-za-skorost-hochetsya-ezdit-bystree-1739784001222072390.jpg",
            "https://i.ibb.co/v65rFFHX/image.png",
            "https://i.ibb.co/0VB2Qp42/image.png"]
    },
    {
        name: 'Тимур',
        surname: 'Жамалетдинов',
        country: 'Россия',
        images: ["https://i.ibb.co/ycYp53HN/Ef-PP8-Lf-WAAEn-XJP.jpg",
            "https://i.ibb.co/YB417c8X/fd721f82387280e780bc61b39d4fb71e5ba343af35d3d599940656.jpg",
            "https://i.ibb.co/KpLB73nt/image.png",
            "https://i.ibb.co/rNmfVKd/image.png"]
    },
    {
        name: 'Константин',
        surname: 'Кучаев',
        country: 'Россия',
        images: ["https://i.ibb.co/spnGBbHp/image.png",
            "https://i.ibb.co/Lz1fMbz6/image.png",
            "https://i.ibb.co/hx35QrzR/image.png"]
    },
    {
        name: 'Фёдор',
        surname: 'Чалов',
        country: 'Россия',
        images: ["https://pfc-cska.com/uploads/content/x_bitrix/pfc-cska.com/upload/medialibrary/1b0/i_C6Z2Lhv_XL.jpg"]
    },
    {
        name: 'Сергей',
        surname: 'Семак',
        country: 'Россия',
        images: ["https://football-pitch.ru/wp-content/uploads/2018/02/sergey-semak-kapitan-zska.jpg"]
    },
    {
        name: 'Георгий',
        surname: 'Щенников',
        country: 'Россия',
        images: ["https://pfc-cska.com/uploads/content/x_bitrix/pfc-cska.com/upload/news/shchennikov_krasnodar.jpg"]
    },
    {
        name: 'Дейвидас',
        surname: 'Шемберас',
        country: 'Литва',
        images: ["https://cdn-m.sport24.ru/m/901b/dde5/4995/4367/bf1d/1cc9/a6f4/d08d/1200_10000_max.jpeg"]
    },
    {
        name: 'Элвир',
        surname: 'Рахимич',
        country: 'Босния и Герцеговина',
        images: ["https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/e8/d8/8d0a79755a7584e19985ea15d1874dae5d170bd1cd9ed638050366.jpg"]
    },
    {
        name: 'Вагнер',
        surname: 'Лав',
        country: 'Бразилия',
        images: ["https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/27/be/3d1eb2ae9c6f92913cb29b22a10563655edd426fa8145282009720.jpg", "https://img.gazeta.ru/files3/167/13115167/RIAN_1471301.HR-pic905-895x505-98055.jpg"]
    },
    {
        name: 'Ролан',
        surname: 'Гусев',
        country: 'Россия',
        images: ["https://ss.sport-express.ru/userfiles/materials/193/1933765/full.jpg"]
    },
    {
        name: 'Юрий',
        surname: 'Жирков',
        country: 'Россия',
        images: ["https://img.championat.com/s/732x488/news/big/i/f/yurij-zhirkov-nazval-dvuh-sa.jpg"]
    },
    {
        name: 'Павел',
        surname: 'Мамаев',
        country: 'Россия',
        images: ["https://i.ibb.co/RGw83FjF/kak-pavel-mamaev-chudil-v-cska-15836607061268918853.jpg"]
    },
    {
        name: 'Чиди',
        surname: 'Одиа',
        country: 'Нигерия',
        images: ["https://mf.b37mrtl.ru/russian/images/2025.05/article/682f51b402e8bd0b3c7cd7b7.png"]
    },
    {
        name: 'Кейсуке',
        surname: 'Хонда',
        country: 'Япония',
        images: ["https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/09/d3/2bcab0255d6b7bf578ad7f6601225967557a8a007b5da681807792.jpg"]
    },
    {
        name: 'Денис',
        surname: 'Евсиков',
        country: 'Россия',
        images: ["https://i.ibb.co/1GywZ3ZS/TASS-69170-pic4-zoom-1500x1500-59954.jpg"]
    },
    {
        name: 'Денис',
        surname: 'Попов',
        country: 'Россия',
        images: ["https://ss.sport-express.ru/userfiles/materials/55/556937/large.jpg"]
    },
    {
        name: 'Даниэл',
        surname: 'Карвальо',
        country: 'Бразилия',
        images: ["https://ss.sport-express.net/userfiles/materials/195/1955854/volga.jpg"]
    },
    {
        name: 'Сеаренсе',
        surname: 'Дуду',
        country: 'Бразилия',
        images: ["https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/38/89/043b95f21589c76f2ffa78c6cca49b8f64370c3be3ed1352244540.jpg"]
    },
    {
        name: 'Максим',
        surname: 'Мухин',
        country: 'Россия',
        images: ["https://ss.sport-express.ru/userfiles/materials/175/1753543/volga.jpg"]
    },
    {
        name: 'Антон',
        surname: 'Заболотный',
        country: 'Россия',
        images: ["https://img.championat.com/c/1200x900/news/big/g/b/zabolotnyj-vozvraschaetsya-v-cska_1620415763919510415.jpg"]
    },
    {
        name: 'Константин',
        surname: 'Базелюк',
        country: 'Россия',
        images: ["https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/8b/10/9290303ff833e1e995c9dd8a6359eafc57ce8d8ba7669323914444.jpg"]
    },
    {
        name: 'Арнор',
        surname: 'Сигурдссон',
        country: 'Исландия',
        images: ["https://cdn.sportsdaily.prod.plat.agency/d62a4f19aba6f7b612b5db868ef604a5_d4017d912b.jpg"]
    },
    {
        name: 'Хёрдур',
        surname: 'Магнуссон',
        country: 'Исландия',
        images: ["https://s-cdn.sportbox.ru/images/styles/1200-auto/fp_fotos/96/48/f539bbd5190937b4680a2599a499a030606b068868aa6259859536.jpg"]
    },
    {
        name: 'Чидера',
        surname: 'Эджуке',
        country: 'Нигерия',
        images: ["https://s-cdn.sportbox.ru/images/styles/1920_1080/fp_fotos/ce/91/305a7c1824768d199faa70afd94823486096fee632a1b922933728.jpg"]
    },
    {
        name: 'Томаш',
        surname: 'Нецид',
        country: 'Чехия',
        images: ["https://cdn.iz.ru/sites/default/files/styles/900x506/public/article-2017-05/pavbar37.png.jpg?itok=dCn08sR5"]
    },
    {
        name: 'Вадим',
        surname: 'Карпов',
        country: 'Россия',
        images: ["https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/c6/c8/30cc766722e430f37b7ce656ade54f755dc3f6e874da7976241212.jpg"]
    },
    {
        name: 'Саша',
        surname: 'Зделар',
        country: 'Сербия',
        images: ["https://ss.sport-express.ru/userfiles/materials/192/1926264/volga.jpg"]
    },
    {
        name: 'Вениамин',
        surname: 'Мандрыкин',
        country: 'Россия',
        images: ["https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/82/a5/eade0edc2102fb8c0c58a6096578262b5a679b21d8cc2061305188.jpg"]
    },
    {
        name: 'Бактиёр',
        surname: 'Зайнутдинов',
        country: 'Казахстан',
        images: ["https://ss.sport-express.ru/userfiles/materials/166/1668510/volga.jpg"]
    },
    {
        name: '',
        surname: 'Витиньо',
        country: 'Бразилия',
        images: ["https://s-cdn.sportbox.ru/images/styles/1920_1080/fp_fotos/a5/f1/54b8bb4736767.jpg"]
    },
    {
        name: '',
        surname: 'Жо',
        country: 'Бразилия',
        images: ["https://s-cdn.sportbox.ru/images/styles/1920_1080/fp_fotos/91/bd/1915f46c39ba10fa833511a046b62c84559575a78f860864914018.jpg"]
    },
    {
        name: 'Иржи',
        surname: 'Ярошик',
        country: 'Чехия',
        images: ["https://s-cdn.sportbox.ru/images/styles/1200-auto/fp_fotos/dd/81/4d9bb9c977649c5cb69a7bb66533a4d15cec48515bf00736908390.jpg"]
    },
    {
        name: 'Виктор',
        surname: 'Мендес',
        country: 'Чили',
        images: ["https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/8f/e2/7cf0c3fec5c0b8ecb1f05312f47ccbe76462654666fab449695147.jpg"]
    },
    {
        name: 'Марк',
        surname: 'Гонсалес',
        country: 'Чили',
        images: ["https://s-cdn.sportbox.ru/images/styles/1200-auto/fp_fotos/f6/db/54942c9329072.jpg"]
    },
    {
        name: 'Виктор',
        surname: 'Давила',
        country: 'Чили',
        images: ["https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/ba/07/37956e29327c31ef1596264b2481d4aa654f6c7af2d5d773806036.jpg"]
    },
    {
        name: 'Аббосбек',
        surname: 'Файзуллаев',
        country: 'Узбекистан',
        images: ["https://s-cdn.sportbox.ru/images/styles/1200-auto/fp_fotos/36/38/0553cfd52726c8fafbf188fe9927a69c6623fbb4723b1432036829.jpg"]
    },
    {
        name: 'Дуглас',
        surname: 'Келлвен',
        country: 'Бразилия',
        images: ["https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/25/70/659ed9bd2ac7129354ab90915f0a56ea650d7a4564b0f346586547.jpg"]
    },
    {
        name: 'Константин',
        surname: 'Марадишвили',
        country: 'Россия',
        images: ["https://cdn.sportsdaily.prod.plat.agency/b77ee7bcb9c26532a8fe5fe18e9654f1_625aca45fe.jpg"]
    },
    {
        name: 'Хорхе',
        surname: 'Карраскаль',
        country: 'Колумбия',
        images: ["https://ss.sport-express.ru/userfiles/materials/192/1924733/volga.jpg"]
    },
    {
        name: 'Хесус',
        surname: 'Медина',
        country: 'Парагвай',
        images: ["https://s-cdn.sportbox.ru/images/styles/1920_1080/fp_fotos/69/b3/6b7285eca321cfd760d5d7e8a78c3457630240d49e7c0901334963.jpg"]
    },
    {
        name: 'Адольфо',
        surname: 'Гайч',
        country: 'Аргентина',
        images: ["https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/1e/b0/04629e0c8492937d1ea73e19596707ab638090546e75f072406286.jpg"]
    },
    {
        name: '',
        surname: 'Рамон',
        country: 'Бразилия',
        images: ["https://tmssl.akamaized.net//images/foto/galerie/ramon-zska-moskau-1614606877-57757.jpg?lm=1614606897"]
    },
    {
        name: 'Бруно',
        surname: 'Фукс',
        country: 'Бразилия',
        images: ["https://i.ibb.co/bjZCC0Kj/Bruno-Fuks-Cz-SKA-RIA-Novosti-fa38c7d8e0.webp", "https://i.ibb.co/tM29FQ3R/11b3b0be169a.jpg"]
    },
    {
        name: 'Давид',
        surname: 'Янчик',
        country: 'Польша',
        images: ["https://i.ibb.co/SXnmsGJd/a3766c9ea2fa78c79df41b514b536e645b7a9d9e3755f391857190.jpg", "https://i.ibb.co/Hf6FL9WJ/image.png"]
    },
    {
        name: 'Сауль',
        surname: 'Гуарирапа',
        country: 'Венесуэла',
        images: ["https://i.ibb.co/vvgkBxjd/cska-obyavil-ob-uhode-saulya.jpg", "https://i.ibb.co/Q78mxZ7B/lazy-smart-crop-1280x720.jpg"]
    },
    {
        name: 'Илья',
        surname: 'Агапов',
        country: 'Россия',
        images: ["https://i.ibb.co/N6B901c6/64490e5493a68ecfc2987e8e503d8208653ebb465dfa1755557711.jpg"]
    },
    {
        name: 'Мусса',
        surname: 'Маазу',
        country: 'Нигер',
        images: ["https://i.ibb.co/x8d1c4bn/ouwo-moussa-maazou-pfc-cska-moskva.jpg"]
    },
    {
        name: 'Вячеслав',
        surname: 'Караваев',
        country: 'Россия',
        images: ["https://i.ibb.co/YFp0hZLG/vyacheslav-karavaev-esli-hochesh-igrat-nikakaya-praga-s-tolku-ne-sobet-53be99a41956117eadb4c1f294810.jpg", "https://i.ibb.co/XrshqSxf/Gj-PAgd-GS-0c.jpg"]
    },
    {
        name: 'Любош',
        surname: 'Калоуда',
        country: 'Чехия',
        images: ["https://i.ibb.co/9992GkVD/4e05ecf1d6c92a5305febfa323e80c165b6aef26111c0942849684.jpg", "https://i.ibb.co/Fqcdvqbd/1278406923580813406400.jpg"]
    },
    {
        name: 'Звонимир',
        surname: 'Шарлия',
        country: 'Хорватия',
        images: ["https://i.ibb.co/whTRqK99/sharlija-poproschalsja-s-cska-15793561561423090865.jpg", "https://i.ibb.co/yFJnSrRv/1042899626-0-0-3070-1930-1920x0-80-0-0-6d9e382015b2b110edb9d91604a4f1e1.jpg"]
    },
    {
        name: 'Ким',
        surname: 'Ин Сон',
        country: 'Южная Корея',
        images: ["https://i.ibb.co/h1B31FmH/16744889501962299605.jpg", "https://i.ibb.co/F4GCjrk6/1567696915-9d69d4729a46b8b9db79da8b4d4f4f78asdasdasd5944de66737cf8-16909211-650x433-9d69d4729a46b8b9.jpg∆"]
    },
    {
        name: 'Такума',
        surname: 'Нисимура',
        country: 'Япония',
        images: ["https://i.ibb.co/RkF3S2xq/8e08894af1f63800790c199a5151d37a5e27fc8812725066530141.jpg", "https://i.ibb.co/8gbnHFVd/1584894876-nisimura.jpg"]
    },
    {
        name: 'Гусман',
        surname: 'Гильерме',
        country: 'Бразилия',
        images: ["https://i.ibb.co/qLGf0NYZ/image.png",
            "https://i.ibb.co/1YgcX4jB/image.png",
            "https://i.ibb.co/xKzyVBzd/image.png"]
    },
    {
        name: 'Наир',
        surname: 'Тикнизян',
        country: 'Армения',
        images: ["https://i.ibb.co/9kB9DTtB/tikniz.jpg",
            "https://i.ibb.co/wFztvfyY/image.png",
            "https://i.ibb.co/zhqr9nC6/image.png",
            "https://i.ibb.co/8gtPDQgm/image.png"]
    },
    {
        name: 'Ласина',
        surname: 'Траоре',
        country: 'Кот-д\'Ивуар',
        images: ["https://i.ibb.co/84Rnt3rT/image.png",
            "https://i.ibb.co/Kzxn0YQL/image.png",
            "https://i.ibb.co/PGW0QzX2/image.png",
            "https://i.ibb.co/r25tG3Cx/image.png"]
    },
    {
        name: 'Абель',
        surname: 'Эрнандес',
        country: 'Уругвай',
        images: ["https://i.ibb.co/QFmJjKxk/image.png",
            "https://i.ibb.co/0RY03cBG/image.png",
            "https://i.ibb.co/hJMfNXNd/image.png"]
    },
    {
        name: 'Равиль',
        surname: 'Нетфуллин',
        country: 'Россия',
        images: ["https://i.ibb.co/M5cTpZ48/image.png", "https://i.ibb.co/60bX2Fzs/image.png", "https://i.ibb.co/yBSMZL3R/rue9110356aab.jpg"]
    },
    {
        name: 'Эдуардо',
        surname: 'Ратиньо',
        country: 'Бразилия',
        images: ["https://i.ibb.co/tP23gHwC/image.png",
            "https://i.ibb.co/vCkmHrnh/rue12d8c3814e.jpg"]
    },
    {
        name: 'Ника',
        surname: 'Пилиев',
        country: 'Россия',
        id: 'piliev',
        images: []
    },
].map((person) => {
    if (!person.id) {
        return person as Person;
    }
    // @ts-ignore игнорируем ошибку ключа
    const imgs: string[] = images[person.id] ?? [];
    return {...person, images: imgs} as Person;
})
