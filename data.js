// Philadelphia museum exhibition data. This is the only file you need to edit.
//
// Every visitor-facing string exists in two languages: the plain key is English,
// the same key with a "z" suffix is Chinese. Both are required.
//   n / nz    museum name          h / hz    opening hours
//   p / pz    admission            flag / flagz   museum-level notice (optional)
//   d / dz    one-line description of an exhibition (optional)
//
// Dates are YYYY-MM-DD; s = opening, e = closing. When a museum has not published an
// exact date, use sText / sTextz or eText / eTextz and write the wording instead.
// free: true means free admission. u is the museum's official exhibitions page: the
// name on the page links there, and the weekly reconciliation reads it from here.

const UPDATED = "September 14, 2026";
const UPDATED_ZH = "2026 年 9 月 14 日";

// Intro line and footer note shown on the page. Updated with the weekly reconciliation.
const LEDE = "Forty-two museums, art galleries, historic houses and university galleries across Philadelphia, with the special exhibitions each one is currently advertising. America 250 shows are everywhere this year, and most of them close in early January.";
const LEDE_ZH = "费城市内 42 家博物馆、美术馆、历史宅邸与大学画廊，以及各家官网目前挂出的特展和开幕日期。America 250 相关的展览今年特别多，很多都在明年 1 月初收官。";
const NOTE = "ICA and AAMP are closed for reinstallation. The Academy of Natural Sciences closes its public galleries permanently on September 30.";
const NOTE_ZH = "ICA、AAMP 目前处于换展闭馆期；自然科学院博物馆将于 9 月 30 日永久关闭公共展区。";
const REPO = "https://github.com/YSWen-sketch/philly-museums";

const DATA = [
{ g: "Art", gz: "艺术",
  note: "From the Duchamp retrospective at the big museum to residency shows in neighborhood galleries. Most of the free venues are in this group.",
  notez: "从大馆的 Duchamp 回顾展到社区画廊的驻地展，多数免费馆集中在这一组。", items: [

  { n: "Philadelphia Museum of Art", nz: "费城艺术博物馆", a: "2600 Benjamin Franklin Pkwy",
    h: "Mon/Thu/Sat/Sun 10–5, Fri 10–8:45, closed Tue–Wed",
    hz: "周一/四/六/日 10–17，周五 10–20:45，周二三闭馆",
    p: "Adults $30; free under 18; pay what you wish on the first Sunday of the month and Fridays after 5",
    pz: "成人 $30；18 岁以下免费；每月首个周日及周五 17:00 后随意付费",
    u: "https://www.philamuseum.org/exhibitions", shows: [
    { t: "Workshop of the World: Arts and Crafts in Philadelphia", s: "2026-07-12", e: "2026-10-11", d: "150 years of the Arts and Crafts movement in Philadelphia", dz: "费城工艺美术运动 150 周年" },
    { t: "Van Gogh's Sunflowers: A Symphony in Blue and Yellow", s: "2026-06-06", e: "2026-10-11", d: "The 1888 and 1889 Sunflowers hung side by side", dz: "1888 与 1889 两版《向日葵》同场" },
    { t: "Americana: Photographs 1850–1950", s: "2026-07-23", e: "2026-11-01", d: "America in daguerreotypes, tintypes, stereographs and postcards", dz: "银版、锡版、立体照片与明信片里的美国" },
    { t: "New Eyes: American Landscape Drawings", s: "2026-06-06", eText: "Through November", eTextz: "至 11 月", d: "American landscape drawing", dz: "美国风景素描" },
    { t: "A Nation of Artists", s: "2026-04-12", e: "2027-07-05", d: "Three centuries of American art, with PAFA", dz: "与 PAFA 联合，三百年美国艺术" },
    { t: "Marcel Duchamp", s: "2026-10-10", e: "2027-01-31", d: "A 300-work retrospective, including Nude Descending a Staircase and Fountain", dz: "300 余件作品的大型回顾展，含《下楼梯的裸女》与《泉》" },
    { t: "El Anatsui: Prints and Play", sText: "Opens in December", sTextz: "12 月开幕", d: "Exact dates not yet announced", dz: "具体日期未公布" }
  ]},

  { n: "Rodin Museum", nz: "罗丹博物馆", a: "2151 Benjamin Franklin Pkwy",
    h: "Mon and Fri–Sun 10–5", hz: "周一、周五–周日 10–17",
    p: "Adults $15, students $7", pz: "成人 $15，学生 $7",
    u: "https://www.philamuseum.org/rodin-museum/", shows: [
    { t: "Rodin's Hands", e: "2027-01-31", d: "Hands in Rodin's sculpture", dz: "罗丹雕塑中的手" }
  ]},

  { n: "Barnes Foundation", nz: "巴恩斯基金会", a: "2025 Benjamin Franklin Pkwy",
    h: "Thu–Mon 11–5", hz: "周四–周一 11–17",
    p: "Adults $30, college students $5; includes special exhibitions, valid two days",
    pz: "成人 $30，大学生 $5；票含特展，两天内有效",
    u: "https://www.barnesfoundation.org/whats-on/exhibitions", shows: [
    { t: "Just Us", e: "2026-10-12", d: "Work by artists at SCI Phoenix and the Mural Arts Rec Crew", dz: "SCI Phoenix 监狱艺术家与 Mural Arts Rec Crew 作品" },
    { t: "Sky Hopinka: Red Metal Dust", e: "2027-01-18", d: "Eleven new installation works", dz: "11 件新作装置" },
    { t: "Education & Empowerment, Vol. Two: 1927–1952", e: "2027-01-25", d: "Archives of the Barnes scholarship students", dz: "巴恩斯奖学金学生档案展" },
    { t: "Noguchi to Asawa: Designing Postwar America", s: "2026-09-20", e: "2027-01-10", d: "Two generations of Japanese American sculptors and designers", dz: "两代日裔美国艺术家的雕塑与设计" }
  ]},

  { n: "PAFA (Pennsylvania Academy of the Fine Arts)", nz: "宾夕法尼亚美术学院博物馆", a: "118–128 N Broad St",
    h: "Thu–Mon 10–5, Fri until 8", hz: "周四–周一 10–17，周五至 20",
    p: "Adults $25, students $10; reduced on Friday evenings", pz: "成人 $25，学生 $10；周五晚减价",
    u: "https://www.pafa.org/museum/exhibitions", shows: [
    { t: "A Nation of Artists", s: "2026-04-12", e: "2027-09-05", d: "Includes Jasper Johns's Flag", dz: "含 Jasper Johns《Flag》" },
    { t: "To Be Continued…", s: "2026-08-27", e: "2027-03-08", d: "Mary Cassatt's unfinished paintings", dz: "Mary Cassatt 未完成的画作" },
    { t: "Kati Gegenheimer: We've Only Just Begun", e: "2026-12-31", d: "In the Morris Gallery", dz: "Morris Gallery" },
    { t: "Fred Wilson: THE MASTER PLAN…", e: "2027-04-04", d: "Works on paper built from architectural floor plans", dz: "建筑平面图为题的纸上作品" },
    { t: "Proof Testing: PrintLab Residency at Brandywine", s: "2026-06-18", e: "2027-02-15", d: "Printmaking", dz: "版画" },
    { t: "In This Community: Arnab Gan Choudhury", s: "2026-08-06", e: "2026-10-12", d: "In the School of Fine Arts Gallery", dz: "School of Fine Arts Gallery" },
    { t: "In This Academy / Cast Collection", s: "2026-06-25", e: "2027-04-26", d: "From the collection, with the plaster casts", dz: "馆藏与石膏像藏品展" }
  ]},

  { n: "ICA (Institute of Contemporary Art, Penn)", nz: "宾大当代艺术研究所", a: "118 S 36th St",
    h: "Closed for installation until Sep 25; from Sep 26, Wed–Sun 11–6, Thu until 8",
    hz: "布展闭馆至 9/25；9/26 起周三–周日 11–18，周四至 20",
    p: "Free", pz: "免费", free: true,
    flag: "Closed for reinstallation until Sep 25", flagz: "换展闭馆至 9/25",
    u: "https://icaphila.org/exhibitions/", shows: [
    { t: "The Condition of Being Near", s: "2026-09-26", e: "2027-02-21", d: "A group show on land, solidarity and the politics of belonging", dz: "土地、团结与归属政治的群展" },
    { t: "Wilmer Wilson IV: SKIRL!", s: "2026-09-26", e: "2027-02-21", d: "American identity and urban space, seen through the gray squirrel", dz: "以灰松鼠看美国身份与城市空间" },
    { t: "Waste Scenes: Maia Chao & Fred Schmidt-Arenales", s: "2026-09-26", e: "2027-02-21" },
    { t: "Entryways: Saif Azzuz", s: "2026-09-26", e: "2027-09-12", d: "A multi-year commissioned installation", dz: "多年期委托装置" }
  ]},

  { n: "The Fabric Workshop and Museum", nz: "纺织工坊与博物馆", a: "1214 Arch St",
    h: "Wed–Fri 12–6, Sat–Sun 12–5", hz: "周三–五 12–18，周六日 12–17",
    p: "Free, $10 donation suggested", pz: "免费，建议捐赠 $10", free: true,
    u: "https://fabricworkshopandmuseum.org/exhibitions/", shows: [
    { t: "Jesse Krimes: Elegy Quilts", s: "2026-05-01", e: "2026-11-01", d: "Large-scale quilts as elegy", dz: "大型挽歌拼布" },
    { t: "You Stretched Diagonally Across It: Contemporary Tapestry", s: "2026-07-16", e: "2027-01-03", d: "Contemporary tapestry installations", dz: "当代挂毯装置" }
  ]},

  { n: "Woodmere Art Museum", nz: "伍德米尔美术馆", a: "9201 Germantown Ave (Chestnut Hill)",
    h: "Wed–Sun 10–5", hz: "周三–周日 10–17",
    p: "Adults $15; free on Sundays", pz: "成人 $15；周日免费",
    u: "https://woodmeremuseum.org/experience/exhibitions", shows: [
    { t: "Arc of Promise", s: "2026-06-20", e: "2027-01-10", d: "America as seen by Philadelphia artists, from the founding to now", dz: "费城艺术家眼中的美国，从建国到今天" },
    { t: "Listen with Your Eyes: A Moe Brooker Retrospective", s: "2026-09-26", e: "2027-01-17", d: "The first Moe Brooker retrospective", dz: "Moe Brooker 首次回顾展" }
  ]},

  { n: "The Print Center", nz: "版画中心", a: "1614 Latimer St",
    h: "Tue–Sat 11–6", hz: "周二–六 11–18",
    p: "Free", pz: "免费", free: true,
    u: "https://printcenter.org/current-exhibitions/", shows: [
    { t: "Ron Tarver: The Long Ride Home", s: "2026-09-11", e: "2026-11-14", d: "Color photographs of Black cowboys in the 1990s", dz: "1990 年代黑人牛仔彩色摄影" }
  ]},

  { n: "Fleisher Art Memorial", nz: "弗莱舍艺术纪念馆", a: "719 Catharine St",
    h: "Mon–Thu 9–9:30, Fri 9–8, Sat 9–3:30", hz: "周一–四 9–21:30，周五 9–20，周六 9–15:30",
    p: "Free", pz: "免费", free: true,
    u: "https://fleisher.org/calendar/", shows: [
    { t: "2026 Faculty Fellowship Exhibition", s: "2026-08-31", e: "2026-09-26", d: "Benjamin Fedosky and David Heshmatpour", dz: "Benjamin Fedosky 与 David Heshmatpour" },
    { t: "Annual Faculty Exhibition", s: "2026-10-13", e: "2026-11-19", d: "The annual group show of the teaching faculty", dz: "教师年度联展" }
  ]},

  { n: "Philadelphia's Magic Gardens", nz: "魔法花园", a: "1020 South St",
    h: "Wed–Mon 11–6", hz: "周三–周一 11–18",
    p: "Adults $15, students $12; often sells out, book ahead", pz: "成人 $15，学生 $12；常售罄，建议预订",
    u: "https://www.phillymagicgardens.org/exhibitions/current-exhibition/", shows: [
    { t: "Ivette Chaires: Living Through Death", s: "2026-07-31", e: "2026-11-08", d: "Sculpture, prints and photography rooted in Mexican folk art", dz: "墨西哥民间艺术主题的雕塑、版画与摄影" },
    { t: "Mickayel Thurin: Care, Kin, Perspective", s: "2026-11-13", e: "2027-02-14", d: "Mixed media in textile and paint", dz: "织物、绘画的混合媒介" }
  ]},

  { n: "The Clay Studio", nz: "陶艺工作室", a: "1425 N American St",
    h: "Mon–Fri 11–5:30, Sat–Sun 11–5", hz: "周一–五 11–17:30，周六日 11–17",
    p: "Free", pz: "免费", free: true,
    u: "https://www.theclaystudio.org/exhibitions", shows: [
    { t: "Operation Mud", s: "2026-09-10", e: "2026-10-31", d: "First-year work from the ceramics workshop for veterans", dz: "退伍军人陶艺工作坊首年作品" },
    { t: "Small Favors 2026", s: "2026-10-08", e: "2027-01-03", d: "The 20th edition of the miniature show, around 400 pieces", dz: "第 20 届微型作品展，约 400 件" }
  ]},

  { n: "Museum for Art in Wood", nz: "木艺美术馆", a: "141 N 3rd St",
    h: "Wed–Sun 12–5", hz: "周三–周日 12–17",
    p: "Free", pz: "免费", free: true,
    u: "https://museumforartinwood.org/exhibitions/", shows: [
    { t: "Out of Place: Windgate Residency 2026", s: "2026-08-07", e: "2026-10-25", d: "Six international residents on migration and belonging", dz: "六位国际驻地艺术家谈迁徙与归属" },
    { t: "A Room of Their Own", s: "2026-05-01", e: "2026-10-18", d: "Carved still lifes and the spaces artists work in", dz: "木雕静物与创作空间" },
    { t: "Donna Dodson: Match of the Matriarchs", s: "2026-11-06", e: "2027-03-21", d: "An interactive set of 32 life-size carved chess pieces", dz: "32 件真人尺寸木雕棋子的互动装置" }
  ]},

  { n: "Arthur Ross Gallery (Penn)", nz: "宾大阿瑟·罗斯画廊", a: "220 S 34th St, inside the Fisher Fine Arts Library",
    h: "Mon–Thu 11–6, Fri–Sun 12–5", hz: "周一–四 11–18，周五–日 12–17",
    p: "Free", pz: "免费", free: true,
    u: "https://arthurrossgallery.org/exhibitions/", shows: [
    { t: "At Liberty: Life in the City of Brotherly Love During the Early Republic", s: "2026-08-28", e: "2026-12-13", d: "Philadelphia in the founding era, in 41 loaned works", dz: "41 件借展作品看建国时期的费城" },
    { t: "Allison Zuckerman: Remixed and Reclaimed", s: "2026-03-28", e: "2027-03-18", d: "Collage-built painting", dz: "拼贴式绘画" }
  ]},

  { n: "Temple Contemporary (Tyler School of Art)", nz: "天普当代艺术空间", a: "2001 N 13th St",
    h: "Tue–Sat 11–6", hz: "周二–六 11–18",
    p: "Free", pz: "免费", free: true,
    u: "https://tyler.temple.edu/happening-tyler/temple-contemporary-gallery", shows: [
    { t: "Anna Tsouhlarakis: Indigenous Irregularities", s: "2026-08-25", e: "2026-12-05", d: "Text collage and new work; artist talk on Sep 17", dz: "文字拼贴与新作；9/17 艺术家谈话" },
    { t: "DREAM DIFFERENT: A Wonder Rebellion", s: "2026-08-25", e: "2026-12-05", d: "A group show about play, imagination and wonder", dz: "关于游戏、想象与惊奇的群展" }
  ]},

  { n: "The Galleries at Moore", nz: "摩尔学院画廊", a: "1916 Race St",
    h: "Mon–Sat 11–5", hz: "周一–六 11–17",
    p: "Free", pz: "免费", free: true,
    u: "https://moore.edu/the-galleries-at-moore/about/current-exhibitions/", shows: [
    { t: "e bond '96", s: "2026-09-19", e: "2026-11-07", d: "In the alumni gallery", dz: "校友画廊" },
    { t: "Michelle Angela Ortiz: STORIES OF US", s: "2026-10-10", e: "2026-12-05", d: "A large solo show by the Philadelphia muralist", dz: "费城壁画家的大型个展" }
  ]},

  { n: "La Salle University Art Museum", nz: "拉萨尔大学艺术博物馆", a: "1900 W Olney Ave",
    h: "By appointment", hz: "预约参观",
    p: "Free", pz: "免费", free: true,
    u: "https://artcollection.lasalle.edu/", shows: [] }
]},

{ g: "Science & Medicine", gz: "科学与医学",
  note: "The Academy of Natural Sciences closes for good on September 30, which makes it the most urgent visit in this group.",
  notez: "自然科学院即将永久闭馆，是这一组里最紧的一个。", items: [

  { n: "Academy of Natural Sciences", nz: "自然科学院", a: "1900 Benjamin Franklin Pkwy",
    h: "Fri–Sun 10–5", hz: "周五–周日 10–17",
    p: "Adults $22", pz: "成人 $22",
    flag: "Public galleries close permanently on September 30", flagz: "9 月 30 日永久关闭公共展区",
    u: "https://ansp.org/exhibits/", shows: [
    { t: "Botany of Nations", s: "2026-03-28", e: "2026-09-30", d: "Indigenous plant knowledge and Lewis & Clark specimens; travels to Minnesota after the closure", dz: "原住民植物知识与 Lewis & Clark 标本；闭馆后巡展至明尼苏达" }
  ]},

  { n: "Mütter Museum", nz: "穆特博物馆", a: "19 S 22nd St",
    h: "Wed–Mon 10–5; Tue 3–8 through Oct 27", hz: "周三–周一 10–17；周二 15–20（至 10/27）",
    p: "Adults $25, students $20; special exhibitions included", pz: "成人 $25，学生 $20；特展含在门票内",
    u: "https://muttermuseum.org/on-view/", shows: [
    { t: "Revolutionary Botany", eText: "Through the end of 2026", eTextz: "至 2026 年底", d: "The origins of American pharmacy and botanical medicine, for America 250", dz: "美国药学与植物医学的起源，America 250" },
    { t: "The Philly Killer", s: "2026-05-16", eText: "Long-term", eTextz: "长期", d: "The 1976 Legionnaires' disease outbreak", dz: "1976 年军团病疫情" },
    { t: "Creating a City of Medicine", s: "2026-06-01", eText: "Long-term", eTextz: "长期", d: "250 years of medicine in Philadelphia", dz: "费城医学 250 年" },
    { t: "Creative Processing: Art in Therapy", s: "2026-03-21", eText: "Long-term", eTextz: "长期", d: "The history and practice of art therapy", dz: "艺术治疗的历史与实践" },
    { t: "Marketing Medicine: The Art of Selling a Cure", eText: "Long-term", eTextz: "长期", d: "Drug advertising and commercial print", dz: "医药广告与商业印刷品" }
  ]},

  { n: "Science History Institute", nz: "科学史研究所", a: "315 Chestnut St",
    h: "Wed–Sat 10–5", hz: "周三–六 10–17",
    p: "Free", pz: "免费", free: true,
    u: "https://www.sciencehistory.org/visit/exhibitions/", shows: [
    { t: "Flash! Bang! Boom! A History of Fireworks", s: "2026-04-10", e: "2027-07-31", d: "Where fireworks came from and how they work, for America 250", dz: "烟花的起源与科学，America 250" },
    { t: "Take Me Out to the Lab", e: "2026-10-31", d: "How science changed baseball", dz: "科学如何改变棒球" },
    { t: "Philadelphia: Workshop of the World", e: "2026-09-30", d: "The industrial firms that built Philadelphia; the museum lists only \"through September\"", dz: "塑造费城的工业公司；官网写\"至 9 月\"" },
    { t: "First-Class Flora (outdoors)", eText: "Through April 2027", eTextz: "至 2027 年 4 月", d: "Medicinal plants on postage stamps", dz: "药用植物邮票" }
  ]},

  { n: "The Franklin Institute", nz: "富兰克林研究所", a: "222 N 20th St",
    h: "Daily 9:30–5", hz: "每天 9:30–17",
    p: "Adults $29", pz: "成人 $29",
    u: "https://fi.edu/en/exhibits-experiences", shows: [
    { t: "STAR WARS: The Experience", sText: "Opens February 2027", sTextz: "2027 年 2 月开幕", d: "No special exhibition right now; the Universal theme parks show closed Sep 7", dz: "目前无特展；Universal Theme Parks 展已于 9/7 结束" }
  ]},

  { n: "Please Touch Museum", nz: "儿童博物馆", a: "4231 Avenue of the Republic",
    h: "Wed–Sat 9–4:30, Sun 11–4:30", hz: "周三–六 9–16:30，周日 11–16:30",
    p: "$24; free Oct 3–4 for the museum's 50th anniversary", pz: "$24；10/3–4 建馆 50 周年免费",
    u: "https://www.pleasetouchmuseum.org/exhibits/", shows: [
    { t: "PAW Patrol: Adventure Play", s: "2026-10-07", e: "2027-01-03", d: "Third-party dates; the museum lists only October", dz: "第三方日期，官网只写 10 月" }
  ]},

  { n: "Wagner Free Institute of Science", nz: "瓦格纳自由科学学院", a: "1700 W Montgomery Ave",
    h: "Tue–Fri 9:30–4:30; first Saturday of the month 12–4, September to May",
    hz: "周二–五 9:30–16:30；9–5 月每月首个周六 12–16",
    p: "Free", pz: "免费", free: true,
    u: "https://www.wagnerfreeinstitute.org/events", shows: [] }
]},

{ g: "History & Culture", gz: "历史与文化",
  note: "The heart of America 250: nearly every venue around Independence Hall is running a semiquincentennial show this year.",
  notez: "America 250 的主力展场：独立宫周边今年几乎每家都有一个 250 周年展。", items: [

  { n: "Penn Museum", nz: "宾大博物馆", a: "3260 South St",
    h: "Tue–Sun 10–5", hz: "周二–周日 10–17",
    p: "Adults $23; free with PennCard", pz: "成人 $23；PennCard 免费", free: true,
    u: "https://www.penn.museum/on-view/galleries-exhibitions", shows: [
    { t: "Ancient Egypt in Watercolors", s: "2026-02-28", eText: "Through November", eTextz: "至 11 月", d: "Century-old watercolors of tomb paintings, with some 60 rarely shown objects", dz: "百年前的墓室壁画水彩与约 60 件少见文物" },
    { t: "Between Worlds / Entre Mundos: Visions of the Wixárika", s: "2026-03-28", eText: "Through February 2027", eTextz: "至 2027 年 2 月", d: "Huichol yarn paintings, curated by students", dz: "学生策展的惠乔尔毛线画" },
    { t: "Preserving Assyria", eText: "Postponed", eTextz: "延期中", d: "The Iraqi-led restoration of the Mashki Gate at Nineveh", dz: "尼尼微 Mashki 门的伊拉克主导修复" },
    { t: "Egypt Galleries: Life and Afterlife (new permanent galleries)", s: "2026-12-12", eText: "Permanent", eTextz: "常设", d: "The renovated Egyptian wing opens", dz: "翻新后的埃及展厅开放" }
  ]},

  { n: "Museum of the American Revolution", nz: "美国革命博物馆", a: "101 S 3rd St",
    h: "Daily 10–5 (closed Tuesdays after Labor Day)", hz: "每天 10–17（劳动节后周二闭馆）",
    p: "Adults $25, students $21", pz: "成人 $25，学生 $21",
    u: "https://www.amrevmuseum.org/at-the-museum/exhibits", shows: [
    { t: "The Declaration's Journey", s: "2025-10-18", e: "2027-01-03", d: "What became of the Declaration between 1776 and now; the museum's main 250th show", dz: "《独立宣言》从 1776 到今天的旅程，250 周年主展" }
  ]},

  { n: "National Constitution Center", nz: "国家宪法中心", a: "525 Arch St",
    h: "Wed–Sun 10–5", hz: "周三–周日 10–17",
    p: "Adults $24.95, $19.95 online", pz: "成人 $24.95，线上 $19.95",
    u: "https://constitutioncenter.org/museum/exhibits-programs", shows: [
    { t: "Pennsylvania's Founding: How a City and a Colony Shaped America's Civic DNA", s: "2026-09-30", e: "2027-01-03", d: "With Drexel; opens on the 250th anniversary of the 1776 Pennsylvania constitution", dz: "与 Drexel 合作，1776 年宾州宪法 250 周年当天开幕" },
    { t: "America's Founding (new permanent gallery)", s: "2026-02-13", eText: "Permanent", eTextz: "常设", d: "A new gallery for the 250th; Governing the Nation opened May 15", dz: "250 周年新展厅；Governing the Nation 展厅 5/15 开放" }
  ]},

  { n: "Weitzman National Museum of American Jewish History", nz: "美国犹太人历史博物馆", a: "101 S Independence Mall E",
    h: "Wed–Sun 10–5", hz: "周三–周日 10–17",
    p: "Permanent collection currently free; special exhibitions ticketed separately",
    pz: "常设展目前免费；特展另购票", free: true,
    u: "https://theweitzman.org/exhibitions/", shows: [
    { t: "The First Salute: An Untold Story of the American Revolution", s: "2026-04-23", eText: "Through April 2027", eTextz: "至 2027 年 4 月", d: "Jewish merchants, religious liberty and the part St. Eustatius played in the Revolution", dz: "犹太商人、宗教自由与 St. Eustatius 在革命中的角色" },
    { t: "Colors of Creation family gallery (new, permanent)", s: "2026-07-22", eText: "Permanent", eTextz: "常设", d: "Free through Oct 4, then $20 per person", dz: "10/4 前免费，之后 $20/人" }
  ]},

  { n: "African American Museum in Philadelphia", nz: "费城非裔美国人博物馆", a: "701 Arch St",
    h: "Closed for reinstallation, reopening this fall", hz: "换展闭馆中，秋季重开",
    p: "Adults $20, students $10", pz: "成人 $20，学生 $10",
    flag: "Closed for reinstallation since Sep 7", flagz: "9/7 起闭馆换展",
    u: "https://aampmuseum.org/exhibitions", shows: [
    { t: "AAMP at 50", sText: "Opens this fall, date to be announced", sTextz: "今秋开幕，日期待定", d: "The museum's 50th anniversary show; the Ruth E. Carter exhibition closed Sep 6", dz: "建馆 50 周年展；Ruth E. Carter 展已于 9/6 结束" }
  ]},

  { n: "Eastern State Penitentiary", nz: "东州监狱", a: "2027 Fairmount Ave",
    h: "Daily 10–5 (Wed–Mon from December)", hz: "每天 10–17（12 月起周三–周一）",
    p: "Adults $21, college students $17", pz: "成人 $21，大学生 $17",
    u: "https://www.easternstate.org/explore/exhibits", shows: [
    { t: "Freedom Through Faith: Judaism at Eastern State and Beyond", s: "2026-07-02", eText: "Permanent", eTextz: "常设", d: "America's first prison synagogue, built in 1922", dz: "美国第一座监狱犹太会堂（1922）" },
    { t: "New exhibition, title to be announced", s: "2026-11-20", d: "The first show in the ReVision: Art and Justice residency series", dz: "ReVision: Art and Justice 驻地系列首展" }
  ]},

  { n: "Independence Seaport Museum", nz: "独立海港博物馆", a: "211 S Columbus Blvd",
    h: "Thu–Tue 10–5", hz: "周四–周二 10–17",
    p: "Around $23 for adults (not listed on the museum site)", pz: "成人约 $23（官网未列）",
    u: "https://www.phillyseaport.org/current-exhibits/", shows: [
    { t: "Seeking Profit and Power: Philadelphia, China Trade, and the Making of America", s: "2026-03-20", e: "2028-01-03", d: "Some 150 objects from the China trade, for the 250th", dz: "约 150 件中美贸易文物，250 周年展" },
    { t: "Philippine-American War (aboard USS Olympia)", eText: "No dates given", eTextz: "未标日期", d: "With the Philippine Executive Council of Greater Philadelphia", dz: "与大费城菲律宾执行委员会合办" }
  ]},

  { n: "National Liberty Museum", nz: "国家自由博物馆", a: "321 Chestnut St",
    h: "Sat–Tue 10–5, Wed–Fri 10–7", hz: "周六–二 10–17，周三–五 10–19",
    p: "Adults $12, students $8", pz: "成人 $12，学生 $8",
    u: "https://www.libertymuseum.org/exhibits/", shows: [
    { t: "The Forgotten Freedom: American Assembly at 250", s: "2026-03-01", eText: "Through August 2027", eTextz: "至 2027 年 8 月", d: "Four chapters on freedom of assembly, with Jackie Robinson and Ali material", dz: "集会自由四部曲，含 Jackie Robinson、Ali 藏品" }
  ]},

  { n: "Rosenbach Museum & Library", nz: "罗森巴赫博物馆与图书馆", a: "2008–2010 Delancey Pl",
    h: "Thu–Sat 10:30–6, Sun 10:30–4:30", hz: "周四–六 10:30–18，周日 10:30–16:30",
    p: "Self-guided $15, guided $20", pz: "自助 $15，导览 $20",
    u: "https://www.rosenbach.org/treasures", shows: [
    { t: "Treasures: History of the Material Text", e: "2026-12-18", d: "Medieval manuscripts, incunabula and Judaica", dz: "中世纪手稿、早期印本与犹太文献" }
  ]},

  { n: "Library Company of Philadelphia", nz: "费城图书馆公司", a: "1314 Locust St",
    h: "Weekdays", hz: "工作日",
    p: "Free", pz: "免费", free: true,
    u: "https://librarycompany.org/calendar-2/", shows: [
    { t: "Philadelphia's Radical Revolution: From the Stamp Act to the Federal Constitution", s: "2026-05-18", e: "2026-10-09", d: "How craftsmen and artisans drove the Revolution", dz: "工匠与手艺人如何推动革命" },
    { t: "Serious Fun: The Robert Staples Metamorphic Collection", s: "2026-11-05", d: "Movable paper from before 1920; opening lecture at 5:30", dz: "1920 年前的可动纸艺；开幕讲座 17:30" }
  ]},

  { n: "Historical Society of Pennsylvania", nz: "宾夕法尼亚历史学会", a: "1300 Locust St",
    h: "Tue/Thu/Fri 10–4, Wed 1–7", hz: "周二/四/五 10–16，周三 13–19",
    p: "Free", pz: "免费", free: true,
    u: "https://hsp.org/exhibits", shows: [
    { t: "Paths to Independence, 1765–1787", e: "2026-09-18", d: "141 objects, including a Dunlap broadside of the Declaration", dz: "141 件文物，含 Dunlap 版《独立宣言》" },
    { t: "The Changing Faces of Independence", sText: "Opens in October", sTextz: "10 月开幕", e: "2027-01-08", d: "Third-party dates; 19th-century immigrant and African American records", dz: "第三方日期；19 世纪移民与非裔美国人的文献" }
  ]},

  { n: "Free Library — Parkway Central", nz: "自由图书馆中央馆", a: "1901 Vine St",
    h: "Mon–Thu 9–8, Fri–Sat 9–5", hz: "周一–四 9–20，周五六 9–17",
    p: "Free", pz: "免费", free: true,
    u: "https://libwww.freelibrary.org/calendar/type/exhibitions", shows: [
    { t: "Philadelphia: For the People", s: "2026-05-02", e: "2027-01-02", d: "250 years of Philadelphians building a city that serves its people", dz: "250 年间费城人如何建设一座为人民服务的城市" },
    { t: "Coltrane's Philadelphia", e: "2026-11-14", d: "Coltrane's centenary and the city he worked in", dz: "Coltrane 百年与他的费城" },
    { t: "Dollars to Donuts: Katie Strachan", e: "2026-10-13", d: "Ceramics drawn from Pennsylvania German Fraktur", dz: "受宾州德裔 Fraktur 启发的陶瓷" }
  ]},

  { n: "Penn Libraries", nz: "宾大图书馆", a: "Van Pelt and other libraries",
    h: "With a PennCard", hz: "凭 PennCard",
    p: "Free", pz: "免费", free: true,
    u: "https://www.library.upenn.edu/exhibits", shows: [
    { t: "The Black Hero's Journey (Kislak Center, 6th floor)", s: "2026-10-15", e: "2027-05-13", d: "Black heroes in American comics; opening conversation the evening of Oct 15", dz: "美国漫画中的黑人英雄；10/15 晚开幕对谈" },
    { t: "To Secure These Rights: 150 Years of Women at Penn (1st floor)", e: "2026-12-11" },
    { t: "Marian Anderson & Florence Price (Music Library, 4th floor)", eText: "Through December", eTextz: "至 12 月" },
    { t: "Nursing the Revolution (Fagin Hall, Bates Center)", e: "2026-11-20", d: "Weekdays 10–1 and 2–4", dz: "工作日 10–13、14–16" },
    { t: "History of Medical Education at Penn (Holman Biotech Commons)", e: "2026-11-09" }
  ]},

  { n: "The Drexel Collection (Rincliffe Gallery and others)", nz: "德雷塞尔收藏", a: "3141 Chestnut St and other buildings",
    h: "Rincliffe Mon–Fri 10–5; Peck by appointment", hz: "Rincliffe 周一–五 10–17；Peck 需预约",
    p: "Free", pz: "免费", free: true,
    u: "https://drexel.edu/drexel-founding-collection/exhibitions-events/exhibit", shows: [
    { t: "John Langdon: Symmetry & Ambiguity", s: "2026-08-21", e: "2027-02-28", d: "Ambigram lettering", dz: "双向字艺术" },
    { t: "Exploring National Anniversaries Through the Atwater Kent Collection", s: "2026-05-29", e: "2026-11-13", d: "Hagerty Library; objects from 1876, 1926 and 1976", dz: "Hagerty 图书馆；1876/1926/1976 纪念文物" },
    { t: "Revisit 1876 (Lits Building, 8th & Market)", s: "2026-06-25", e: "2026-12-26", d: "An off-site loan from the Atwater Kent Collection", dz: "Atwater Kent 馆外借展" },
    { t: "Building Nations: Neoclassicism in Fashion and Decorative Arts", s: "2026-11-12", eText: "Through March 2027", eTextz: "至 2027 年 3 月", d: "At the Peck Alumni Center", dz: "Peck Alumni Center" }
  ]},

  { n: "American Swedish Historical Museum", nz: "美国瑞典历史博物馆", a: "1900 Pattison Ave",
    h: "Tue–Sun 10–4", hz: "周二–周日 10–16",
    p: "Adults $15, students $10; free the second Sunday of the month", pz: "成人 $15，学生 $10；每月第二个周日免费",
    u: "https://www.americanswedish.org/exhibitions", shows: [
    { t: "A Century in the Making: 100 Years of ASHM", s: "2026-05-10", e: "2027-01-11", d: "The museum's centenary, with rarely shown holdings", dz: "建馆百年，少见馆藏" }
  ]},

  { n: "Simeone Foundation Automotive Museum", nz: "西蒙尼汽车博物馆", a: "6825 Norwitch Dr",
    h: "Tue–Fri 10–6, Sat–Sun 10–4", hz: "周二–五 10–18，周六日 10–16",
    p: "Ticketed separately", pz: "另购票",
    u: "https://www.simeonemuseum.org/events/", shows: [
    { t: "Foxbody: The People's Mustang", s: "2026-10-10", e: "2026-10-25", d: "The 1979–93 Fox-platform Mustang", dz: "1979–93 Fox 平台野马" },
    { t: "AMC: Rebel Spirit", sText: "Opens in December", sTextz: "12 月开幕", d: "American Motors performance cars", dz: "American Motors 性能车" }
  ]},

  { n: "Fairmount Water Works Interpretive Center", nz: "费尔蒙水厂展示中心", a: "640 Waterworks Dr",
    h: "Wed–Sat 10–5", hz: "周三–六 10–17",
    p: "Free", pz: "免费", free: true,
    u: "https://fairmountwaterworks.org/events/", shows: [
    { t: "Walking the Schuylkill: John Brady Photography", s: "2026-09-19", e: "2027-01-08", d: "Photographs along the Schuylkill; opening reception Sep 16", dz: "Schuylkill 河风景摄影；9/16 开幕酒会" }
  ]}
]},

{ g: "Historic Houses & Gardens", gz: "历史宅邸与园林",
  note: "The old houses around Germantown are showing a good deal of contemporary installation work this year through the Radical Americana project.",
  notez: "Germantown 一带的老宅今年借 Radical Americana 项目放了不少当代装置。", items: [

  { n: "Cliveden", nz: "克利夫登庄园", a: "6401 Germantown Ave",
    h: "Thu–Sun 12–4 by guided tour; grounds free", hz: "周四–日 12–16 导览；庭院免费",
    p: "Tours ticketed separately", pz: "导览另购票",
    u: "https://cliveden.org/events-3/", shows: [
    { t: "Looking Glass: Radical Americana", s: "2026-05-02", e: "2026-11-22", d: "Site-specific work by six contemporary artists; free during the Revolutionary Germantown Festival on Oct 3", dz: "六位当代艺术家的场域作品；10/3 Revolutionary Germantown Festival 免费" }
  ]},

  { n: "Stenton", nz: "斯坦顿庄园", a: "4601 N 18th St",
    h: "Tue–Sat 1–4, April 1 to December 19", hz: "4/1–12/19 周二–六 13–16",
    p: "Adults $10, students $8", pz: "成人 $10，学生 $8",
    u: "https://www.stenton.org/programs", shows: [
    { t: "Sadware (a Radical Americana installation)", s: "2026-04-01", eText: "No closing date given", eTextz: "未标日期", d: "Belle-Pilar Fleming and Bri Murphy", dz: "Belle-Pilar Fleming 与 Bri Murphy" }
  ]},

  { n: "Wyck / Johnson House / Bartram's Garden", nz: "威克宅、约翰逊宅与巴特拉姆花园", a: "Germantown and Southwest Philadelphia",
    h: "Each keeps its own seasonal hours", hz: "各自季节性开放",
    p: "The Wyck grounds and Bartram's Garden are free", pz: "Wyck 庭院与 Bartram's 免费", free: true,
    u: "https://wyck.org/programs-events/", shows: [] }
]}
];

const PLAIN = [
  { n: "Benjamin Franklin Museum (Franklin Court)", nz: "富兰克林博物馆",
    d: "143 S 3rd St · daily 9–5 · adults $7.50 · permanent displays",
    dz: "143 S 3rd St · 每天 9–17 · 成人 $7.50 · 常设展",
    u: "https://www.nps.gov/inde/planyourvisit/benjaminfranklinmuseum.htm" },
  { n: "Betsy Ross House", nz: "贝齐·罗斯故居",
    d: "239 Arch St · daily 10–5 · $12 · costumed interpreters play 18th-century women, June 18 to Oct 31",
    dz: "239 Arch St · 每天 10–17 · $12 · 6/18–10/31 有 18 世纪女性角色扮演讲解",
    u: "https://historicphiladelphia.org/betsy-ross-house/visit/" },
  { n: "Fireman's Hall Museum", nz: "消防局博物馆",
    d: "147 N 2nd St · Tue–Sun 10–4 · free · the permanent history of firefighting",
    dz: "147 N 2nd St · 周二–日 10–16 · 免费 · 常设消防史",
    u: "https://www.firemanshallmuseum.org/hours-admission/" },
  { n: "Mummers Museum", nz: "花衣游行博物馆",
    d: "1100 S 2nd St · Wed–Sat 10–3 · admission by donation",
    dz: "1100 S 2nd St · 周三–六 10–15 · 捐赠入场",
    u: "https://www.mummersmuseum.org/visitors/" },
  { n: "Museum of Illusions", nz: "错觉博物馆",
    d: "401 Market St · daily 10–8 or 9 · ticketed · permanent displays",
    dz: "401 Market St · 每天 10–20/21 · 购票 · 常设",
    u: "https://moiphilly.com/exhibits/" },
  { n: "Fort Mifflin", nz: "米夫林堡",
    d: "Wed–Sun 10–4, March 1 to December 15 · adults $16 · a night tour on Oct 3",
    dz: "3/1–12/15 周三–日 10–16 · 成人 $16 · 10/3 有夜间探访活动",
    u: "https://fortmifflin.us/events/" }
];

const CLOSED = [
  { n: "Academy of Natural Sciences public galleries", nz: "自然科学院公共展区",
    d: "Closing permanently on September 30, 2026; research and collections continue",
    dz: "2026 年 9 月 30 日起永久关闭，研究与收藏继续" },
  { n: "Faith and Liberty Discovery Center", nz: "信仰与自由探索中心",
    d: "Closed March 2024", dz: "2024 年 3 月关闭" },
  { n: "Philadelphia Insectarium & Butterfly Pavilion", nz: "费城昆虫馆与蝴蝶馆",
    d: "Closed May 2023", dz: "2023 年 5 月关闭" },
  { n: "Slought", nz: "Slought 艺术空间",
    d: "No longer operating; the website remains as an archive", dz: "已结束运营，网站仅作档案" }
];
