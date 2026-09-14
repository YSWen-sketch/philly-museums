// 费城博物馆特展数据 —— 只需要改这个文件。
// 日期格式 YYYY-MM-DD；s=开幕 e=闭幕；不确定的用 sText / eText 写文字；free:true 表示免费；flag 是馆级提示。
// u 是该馆官网的展览页链接：页面上馆名会链过去，每周自动核对也从这里读。
const UPDATED = "2026 年 9 月 14 日";
// 页首导语与页脚提示：随每周核对一起更新，写给普通观众看的一两句话。
const LEDE = "费城市内 50 余家博物馆、美术馆、历史宅邸与大学画廊，以及各家官网目前挂出的特展和开幕日期。America 250 相关的展览今年特别多，很多都在明年 1 月初收官。";
const NOTE = "ICA、AAMP 目前处于换展闭馆期；自然科学院博物馆将于 9 月 30 日永久关闭公共展区。";
const REPO = "https://github.com/YSWen-sketch/philly-museums";
const DATA = [
{ g: "艺术", note: "从大馆的 Duchamp 回顾展到社区画廊的驻地展，多数免费馆集中在这一组。", items: [
  { n: "Philadelphia Museum of Art 费城艺术博物馆", a: "2600 Benjamin Franklin Pkwy", h: "周一/四/六/日 10–17，周五 10–20:45，周二三闭馆", p: "成人 $30；18 岁以下免费；每月首个周日及周五 17:00 后随意付费", shows: [
    { t: "Workshop of the World: Arts and Crafts in Philadelphia", s: "2026-07-12", e: "2026-10-11", d: "费城工艺美术运动 150 周年" },
    { t: "Van Gogh's Sunflowers: A Symphony in Blue and Yellow", s: "2026-06-06", e: "2026-10-11", d: "1888 与 1889 两版《向日葵》同场" },
    { t: "Americana: Photographs 1850–1950", s: "2026-07-23", e: "2026-11-01", d: "银版、锡版、立体照片与明信片里的美国" },
    { t: "New Eyes: American Landscape Drawings", s: "2026-06-06", eText: "至 11 月", d: "美国风景素描" },
    { t: "A Nation of Artists", s: "2026-04-12", e: "2027-07-05", d: "与 PAFA 联合，三百年美国艺术" },
    { t: "Marcel Duchamp", s: "2026-10-10", e: "2027-01-31", d: "300 余件作品的大型回顾展，含《下楼梯的裸女》与《泉》" },
    { t: "El Anatsui: Prints and Play", sText: "12 月开幕", d: "具体日期未公布" }
  ]},
  { n: "Rodin Museum 罗丹博物馆", a: "2151 Benjamin Franklin Pkwy", h: "周一、周五–周日 10–17", p: "成人 $15，学生 $7", shows: [
    { t: "Rodin's Hands", e: "2027-01-31", d: "罗丹雕塑中的手" }
  ]},
  { n: "Barnes Foundation 巴恩斯基金会", a: "2025 Benjamin Franklin Pkwy", h: "周四–周一 11–17", p: "成人 $30，大学生 $5；票含特展，两天内有效", shows: [
    { t: "Just Us", e: "2026-10-12", d: "SCI Phoenix 监狱艺术家与 Mural Arts Rec Crew 作品" },
    { t: "Sky Hopinka: Red Metal Dust", e: "2027-01-18", d: "11 件新作装置" },
    { t: "Education & Empowerment, Vol. Two: 1927–1952", e: "2027-01-25", d: "巴恩斯奖学金学生档案展" },
    { t: "Noguchi to Asawa: Designing Postwar America", s: "2026-09-20", e: "2027-01-10", d: "两代日裔美国艺术家的雕塑与设计" }
  ]},
  { n: "PAFA 宾夕法尼亚美术学院博物馆", a: "118–128 N Broad St", h: "周四–周一 10–17，周五至 20", p: "成人 $25，学生 $10；周五晚减价", shows: [
    { t: "A Nation of Artists", s: "2026-04-12", e: "2027-09-05", d: "含 Jasper Johns《Flag》" },
    { t: "To Be Continued…", s: "2026-08-27", e: "2027-03-08", d: "Mary Cassatt 未完成的画作" },
    { t: "Kati Gegenheimer: We've Only Just Begun", e: "2026-12-31", d: "Morris Gallery" },
    { t: "Fred Wilson: THE MASTER PLAN…", e: "2027-04-04", d: "建筑平面图为题的纸上作品" },
    { t: "Proof Testing: PrintLab Residency at Brandywine", s: "2026-06-18", e: "2027-02-15", d: "版画" },
    { t: "In This Community: Arnab Gan Choudhury", s: "2026-08-06", e: "2026-10-12", d: "School of Fine Arts Gallery" },
    { t: "In This Academy / Cast Collection", s: "2026-06-25", e: "2027-04-26", d: "馆藏与石膏像藏品展" }
  ]},
  { n: "ICA 宾大当代艺术研究所", a: "118 S 36th St", h: "布展闭馆至 9/25；9/26 起周三–周日 11–18，周四至 20", p: "免费", free: true, flag: "换展闭馆至 9/25", shows: [
    { t: "The Condition of Being Near", s: "2026-09-26", e: "2027-02-21", d: "土地、团结与归属政治的群展" },
    { t: "Wilmer Wilson IV: SKIRL!", s: "2026-09-26", e: "2027-02-21", d: "以灰松鼠看美国身份与城市空间" },
    { t: "Waste Scenes: Maia Chao & Fred Schmidt-Arenales", s: "2026-09-26", e: "2027-02-21" },
    { t: "Entryways: Saif Azzuz", s: "2026-09-26", e: "2027-09-12", d: "多年期委托装置" }
  ]},
  { n: "The Fabric Workshop and Museum", a: "1214 Arch St", h: "周三–五 12–18，周六日 12–17", p: "免费，建议捐赠 $10", free: true, shows: [
    { t: "Jesse Krimes: Elegy Quilts", s: "2026-05-01", e: "2026-11-01", d: "大型挽歌拼布" },
    { t: "You Stretched Diagonally Across It: Contemporary Tapestry", s: "2026-07-16", e: "2027-01-03", d: "当代挂毯装置" }
  ]},
  { n: "Woodmere Art Museum", a: "9201 Germantown Ave（Chestnut Hill）", h: "周三–周日 10–17", p: "成人 $15；周日免费", shows: [
    { t: "Arc of Promise", s: "2026-06-20", e: "2027-01-10", d: "费城艺术家眼中的美国，从建国到今天" },
    { t: "Listen with Your Eyes: A Moe Brooker Retrospective", s: "2026-09-26", e: "2027-01-17", d: "Moe Brooker 首次回顾展" }
  ]},
  { n: "The Print Center", a: "1614 Latimer St", h: "周二–六 11–18", p: "免费", free: true, shows: [
    { t: "Ron Tarver: The Long Ride Home", s: "2026-09-11", e: "2026-11-14", d: "1990 年代黑人牛仔彩色摄影" }
  ]},
  { n: "Fleisher Art Memorial", a: "719 Catharine St", h: "周一–四 9–21:30，周五 9–20，周六 9–15:30", p: "免费", free: true, shows: [
    { t: "2026 Faculty Fellowship Exhibition", s: "2026-08-31", e: "2026-09-26", d: "Benjamin Fedosky 与 David Heshmatpour" },
    { t: "Annual Faculty Exhibition", s: "2026-10-13", e: "2026-11-19", d: "教师年度联展" }
  ]},
  { n: "Philadelphia's Magic Gardens", a: "1020 South St", h: "周三–周一 11–18", p: "成人 $15，学生 $12；常售罄，建议预订", shows: [
    { t: "Ivette Chaires: Living Through Death", s: "2026-07-31", e: "2026-11-08", d: "墨西哥民间艺术主题的雕塑、版画与摄影" },
    { t: "Mickayel Thurin: Care, Kin, Perspective", s: "2026-11-13", e: "2027-02-14", d: "织物、绘画的混合媒介" }
  ]},
  { n: "The Clay Studio", a: "1425 N American St", h: "周一–五 11–17:30，周六日 11–17", p: "免费", free: true, shows: [
    { t: "Operation Mud", s: "2026-09-10", e: "2026-10-31", d: "退伍军人陶艺工作坊首年作品" },
    { t: "Small Favors 2026", s: "2026-10-08", e: "2027-01-03", d: "第 20 届微型作品展，约 400 件" }
  ]},
  { n: "Museum for Art in Wood", a: "141 N 3rd St", h: "周三–周日 12–17", p: "免费", free: true, shows: [
    { t: "Out of Place: Windgate Residency 2026", s: "2026-08-07", e: "2026-10-25", d: "六位国际驻地艺术家谈迁徙与归属" },
    { t: "A Room of Their Own", s: "2026-05-01", e: "2026-10-18", d: "木雕静物与创作空间" },
    { t: "Donna Dodson: Match of the Matriarchs", s: "2026-11-06", e: "2027-03-21", d: "32 件真人尺寸木雕棋子的互动装置" }
  ]},
  { n: "Arthur Ross Gallery（宾大）", a: "220 S 34th St，Fisher 美术图书馆内", h: "周一–四 11–18，周五–日 12–17", p: "免费", free: true, shows: [
    { t: "At Liberty: Life in the City of Brotherly Love During the Early Republic", s: "2026-08-28", e: "2026-12-13", d: "41 件借展作品看建国时期的费城" },
    { t: "Allison Zuckerman: Remixed and Reclaimed", s: "2026-03-28", e: "2027-03-18", d: "拼贴式绘画" }
  ]},
  { n: "Temple Contemporary（Tyler 艺术学院）", a: "2001 N 13th St", h: "周二–六 11–18", p: "免费", free: true, shows: [
    { t: "Anna Tsouhlarakis: Indigenous Irregularities", s: "2026-08-25", e: "2026-12-05", d: "文字拼贴与新作；9/17 艺术家谈话" },
    { t: "DREAM DIFFERENT: A Wonder Rebellion", s: "2026-08-25", e: "2026-12-05", d: "关于游戏、想象与惊奇的群展" }
  ]},
  { n: "The Galleries at Moore", a: "1916 Race St", h: "周一–六 11–17", p: "免费", free: true, shows: [
    { t: "e bond '96", s: "2026-09-19", e: "2026-11-07", d: "校友画廊" },
    { t: "Michelle Angela Ortiz: STORIES OF US", s: "2026-10-10", e: "2026-12-05", d: "费城壁画家的大型个展" }
  ]},
  { n: "La Salle University Art Museum", a: "1900 W Olney Ave", h: "预约参观", p: "免费", free: true, shows: [] }
]},
{ g: "科学与医学", note: "自然科学院即将永久闭馆，是这一组里最紧的一个。", items: [
  { n: "Academy of Natural Sciences 自然科学院", a: "1900 Benjamin Franklin Pkwy", h: "周五–周日 10–17", p: "成人 $22", flag: "9 月 30 日永久关闭公共展区", shows: [
    { t: "Botany of Nations", s: "2026-03-28", e: "2026-09-30", d: "原住民植物知识与 Lewis & Clark 标本；闭馆后巡展至明尼苏达" }
  ]},
  { n: "Mütter Museum 穆特博物馆", a: "19 S 22nd St", h: "周三–周一 10–17；周二 15–20（至 10/27）", p: "成人 $25，学生 $20；特展含在门票内", shows: [
    { t: "Revolutionary Botany", eText: "至 2026 年底", d: "美国药学与植物医学的起源，America 250" },
    { t: "The Philly Killer", s: "2026-05-16", eText: "长期", d: "1976 年军团病疫情" },
    { t: "Creating a City of Medicine", s: "2026-06-01", eText: "长期", d: "费城医学 250 年" },
    { t: "Creative Processing: Art in Therapy", s: "2026-03-21", eText: "长期", d: "艺术治疗的历史与实践" },
    { t: "Marketing Medicine: The Art of Selling a Cure", eText: "长期", d: "医药广告与商业印刷品" }
  ]},
  { n: "Science History Institute 科学史研究所", a: "315 Chestnut St", h: "周三–六 10–17", p: "免费", free: true, shows: [
    { t: "Flash! Bang! Boom! A History of Fireworks", s: "2026-04-10", e: "2027-07-31", d: "烟花的起源与科学，America 250" },
    { t: "Take Me Out to the Lab", e: "2026-10-31", d: "科学如何改变棒球" },
    { t: "Philadelphia: Workshop of the World", e: "2026-09-30", d: "塑造费城的工业公司；官网写\"至 9 月\"" },
    { t: "First-Class Flora（户外）", eText: "至 2027 年 4 月", d: "药用植物邮票" }
  ]},
  { n: "The Franklin Institute 富兰克林研究所", a: "222 N 20th St", h: "每天 9:30–17", p: "成人 $29", shows: [
    { t: "STAR WARS: The Experience", sText: "2027 年 2 月开幕", d: "目前无特展；Universal Theme Parks 展已于 9/7 结束" }
  ]},
  { n: "Please Touch Museum 儿童博物馆", a: "4231 Avenue of the Republic", h: "周三–六 9–16:30，周日 11–16:30", p: "$24；10/3–4 建馆 50 周年免费", shows: [
    { t: "PAW Patrol: Adventure Play", s: "2026-10-07", e: "2027-01-03", d: "第三方日期，官网只写 10 月" }
  ]},
  { n: "Wagner Free Institute of Science", a: "1700 W Montgomery Ave", h: "周二–五 9:30–16:30；9–5 月每月首个周六 12–16", p: "免费", free: true, shows: [] }
]},
{ g: "历史与文化", note: "America 250 的主力展场：独立宫周边今年几乎每家都有一个 250 周年展。", items: [
  { n: "Penn Museum 宾大博物馆", a: "3260 South St", h: "周二–周日 10–17", p: "成人 $23；PennCard 免费", free: true, shows: [
    { t: "Ancient Egypt in Watercolors", s: "2026-02-28", eText: "至 11 月", d: "百年前的墓室壁画水彩与约 60 件少见文物" },
    { t: "Between Worlds / Entre Mundos: Visions of the Wixárika", s: "2026-03-28", eText: "至 2027 年 2 月", d: "学生策展的惠乔尔毛线画" },
    { t: "Preserving Assyria", eText: "延期中", d: "尼尼微 Mashki 门的伊拉克主导修复" },
    { t: "Egypt Galleries: Life and Afterlife（新常设展厅）", s: "2026-12-12", eText: "常设", d: "翻新后的埃及展厅开放" }
  ]},
  { n: "Museum of the American Revolution 美国革命博物馆", a: "101 S 3rd St", h: "每天 10–17（劳动节后周二闭馆）", p: "成人 $25，学生 $21", shows: [
    { t: "The Declaration's Journey", s: "2025-10-18", e: "2027-01-03", d: "《独立宣言》从 1776 到今天的旅程，250 周年主展" }
  ]},
  { n: "National Constitution Center 国家宪法中心", a: "525 Arch St", h: "周三–周日 10–17", p: "成人 $24.95，线上 $19.95", shows: [
    { t: "Pennsylvania's Founding: How a City and a Colony Shaped America's Civic DNA", s: "2026-09-30", e: "2027-01-03", d: "与 Drexel 合作，1776 年宾州宪法 250 周年当天开幕" },
    { t: "America's Founding（新常设展厅）", s: "2026-02-13", eText: "常设", d: "250 周年新展厅；Governing the Nation 展厅 5/15 开放" }
  ]},
  { n: "Weitzman National Museum of American Jewish History", a: "101 S Independence Mall E", h: "周三–周日 10–17", p: "常设展目前免费；特展另购票", free: true, shows: [
    { t: "The First Salute: An Untold Story of the American Revolution", s: "2026-04-23", eText: "至 2027 年 4 月", d: "犹太商人、宗教自由与 St. Eustatius 在革命中的角色" },
    { t: "Colors of Creation 家庭展厅（新常设）", s: "2026-07-22", eText: "常设", d: "10/4 前免费，之后 $20/人" }
  ]},
  { n: "African American Museum in Philadelphia", a: "701 Arch St", h: "换展闭馆中，秋季重开", p: "成人 $20，学生 $10", flag: "9/7 起闭馆换展", shows: [
    { t: "AAMP at 50", sText: "今秋开幕，日期待定", d: "建馆 50 周年展；Ruth E. Carter 展已于 9/6 结束" }
  ]},
  { n: "Eastern State Penitentiary 东州监狱", a: "2027 Fairmount Ave", h: "每天 10–17（12 月起周三–周一）", p: "成人 $21，大学生 $17", shows: [
    { t: "Freedom Through Faith: Judaism at Eastern State and Beyond", s: "2026-07-02", eText: "常设", d: "美国第一座监狱犹太会堂（1922）" },
    { t: "新展（名称待公布）", s: "2026-11-20", d: "ReVision: Art and Justice 驻地系列首展" }
  ]},
  { n: "Independence Seaport Museum 独立海港博物馆", a: "211 S Columbus Blvd", h: "周四–周二 10–17", p: "成人约 $23（官网未列）", shows: [
    { t: "Seeking Profit and Power: Philadelphia, China Trade, and the Making of America", s: "2026-03-20", e: "2028-01-03", d: "约 150 件中美贸易文物，250 周年展" },
    { t: "Philippine-American War（USS Olympia 舰上）", eText: "未标日期", d: "与大费城菲律宾执行委员会合办" }
  ]},
  { n: "National Liberty Museum", a: "321 Chestnut St", h: "周六–二 10–17，周三–五 10–19", p: "成人 $12，学生 $8", shows: [
    { t: "The Forgotten Freedom: American Assembly at 250", s: "2026-03-01", eText: "至 2027 年 8 月", d: "集会自由四部曲，含 Jackie Robinson、Ali 藏品" }
  ]},
  { n: "Rosenbach Museum & Library", a: "2008–2010 Delancey Pl", h: "周四–六 10:30–18，周日 10:30–16:30", p: "自助 $15，导览 $20", shows: [
    { t: "Treasures: History of the Material Text", e: "2026-12-18", d: "中世纪手稿、早期印本与犹太文献" }
  ]},
  { n: "Library Company of Philadelphia", a: "1314 Locust St", h: "工作日", p: "免费", free: true, shows: [
    { t: "Philadelphia's Radical Revolution: From the Stamp Act to the Federal Constitution", s: "2026-05-18", e: "2026-10-09", d: "工匠与手艺人如何推动革命" },
    { t: "Serious Fun: The Robert Staples Metamorphic Collection", s: "2026-11-05", d: "1920 年前的可动纸艺；开幕讲座 17:30" }
  ]},
  { n: "Historical Society of Pennsylvania", a: "1300 Locust St", h: "周二/四/五 10–16，周三 13–19", p: "免费", free: true, shows: [
    { t: "Paths to Independence, 1765–1787", e: "2026-09-18", d: "141 件文物，含 Dunlap 版《独立宣言》" },
    { t: "The Changing Faces of Independence", sText: "10 月开幕", e: "2027-01-08", d: "第三方日期；19 世纪移民与非裔美国人的文献" }
  ]},
  { n: "Free Library — Parkway Central", a: "1901 Vine St", h: "周一–四 9–20，周五六 9–17", p: "免费", free: true, shows: [
    { t: "Philadelphia: For the People", s: "2026-05-02", e: "2027-01-02", d: "250 年间费城人如何建设一座为人民服务的城市" },
    { t: "Coltrane's Philadelphia", e: "2026-11-14", d: "Coltrane 百年与他的费城" },
    { t: "Dollars to Donuts: Katie Strachan", e: "2026-10-13", d: "受宾州德裔 Fraktur 启发的陶瓷" }
  ]},
  { n: "Penn Libraries 宾大图书馆", a: "Van Pelt 等馆", h: "凭 PennCard", p: "免费", free: true, shows: [
    { t: "The Black Hero's Journey（Kislak 六楼）", s: "2026-10-15", e: "2027-05-13", d: "美国漫画中的黑人英雄；10/15 晚开幕对谈" },
    { t: "To Secure These Rights: 150 Years of Women at Penn（一楼）", e: "2026-12-11" },
    { t: "Marian Anderson & Florence Price（四楼音乐图书馆）", eText: "至 12 月" },
    { t: "Nursing the Revolution（Fagin Hall，Bates Center）", e: "2026-11-20", d: "工作日 10–13、14–16" },
    { t: "History of Medical Education at Penn（Holman Biotech Commons）", e: "2026-11-09" }
  ]},
  { n: "Drexel 收藏（Rincliffe Gallery 等）", a: "3141 Chestnut St 等", h: "Rincliffe 周一–五 10–17；Peck 需预约", p: "免费", free: true, shows: [
    { t: "John Langdon: Symmetry & Ambiguity", s: "2026-08-21", e: "2027-02-28", d: "双向字艺术" },
    { t: "Exploring National Anniversaries Through the Atwater Kent Collection", s: "2026-05-29", e: "2026-11-13", d: "Hagerty 图书馆；1876/1926/1976 纪念文物" },
    { t: "Revisit 1876（Lits Building, 8th & Market）", s: "2026-06-25", e: "2026-12-26", d: "Atwater Kent 馆外借展" },
    { t: "Building Nations: Neoclassicism in Fashion and Decorative Arts", s: "2026-11-12", eText: "至 2027 年 3 月", d: "Peck Alumni Center" }
  ]},
  { n: "American Swedish Historical Museum", a: "1900 Pattison Ave", h: "周二–周日 10–16", p: "成人 $15，学生 $10；每月第二个周日免费", shows: [
    { t: "A Century in the Making: 100 Years of ASHM", s: "2026-05-10", e: "2027-01-11", d: "建馆百年，少见馆藏" }
  ]},
  { n: "Simeone Foundation Automotive Museum", a: "6825 Norwitch Dr", h: "周二–五 10–18，周六日 10–16", p: "另购票", shows: [
    { t: "Foxbody: The People's Mustang", s: "2026-10-10", e: "2026-10-25", d: "1979–93 Fox 平台野马" },
    { t: "AMC: Rebel Spirit", sText: "12 月开幕", d: "American Motors 性能车" }
  ]},
  { n: "Fairmount Water Works Interpretive Center", a: "640 Waterworks Dr", h: "周三–六 10–17", p: "免费", free: true, shows: [
    { t: "Walking the Schuylkill: John Brady Photography", s: "2026-09-19", e: "2027-01-08", d: "Schuylkill 河风景摄影；9/16 开幕酒会" }
  ]}
]},
{ g: "历史宅邸与园林", note: "Germantown 一带的老宅今年借 Radical Americana 项目放了不少当代装置。", items: [
  { n: "Cliveden", a: "6401 Germantown Ave", h: "周四–日 12–16 导览；庭院免费", p: "导览另购票", shows: [
    { t: "Looking Glass: Radical Americana", s: "2026-05-02", e: "2026-11-22", d: "六位当代艺术家的场域作品；10/3 Revolutionary Germantown Festival 免费" }
  ]},
  { n: "Stenton", a: "4601 N 18th St", h: "4/1–12/19 周二–六 13–16", p: "成人 $10，学生 $8", shows: [
    { t: "Sadware（Radical Americana 装置）", s: "2026-04-01", eText: "未标日期", d: "Belle-Pilar Fleming 与 Bri Murphy" }
  ]},
  { n: "Wyck / Johnson House / Bartram's Garden", a: "Germantown 与 Southwest Philly", h: "各自季节性开放", p: "Wyck 庭院与 Bartram's 免费", free: true, shows: [] }
]}
];

const PLAIN = [
  ["Benjamin Franklin Museum（Franklin Court）", "143 S 3rd St · 每天 9–17 · 成人 $7.50 · 常设展"],
  ["Betsy Ross House", "239 Arch St · 每天 10–17 · $12 · 6/18–10/31 有 18 世纪女性角色扮演讲解"],
  ["Fireman's Hall Museum", "147 N 2nd St · 周二–日 10–16 · 免费 · 常设消防史"],
  ["Mummers Museum", "1100 S 2nd St · 周三–六 10–15 · 捐赠入场"],
  ["Museum of Illusions", "401 Market St · 每天 10–20/21 · 购票 · 常设"],
  ["Fort Mifflin", "3/1–12/15 周三–日 10–16 · 成人 $16 · 10/3 有夜间探访活动"]
];

const CLOSED = [
  ["Academy of Natural Sciences 公共展区", "2026 年 9 月 30 日起永久关闭，研究与收藏继续"],
  ["Faith and Liberty Discovery Center", "2024 年 3 月关闭"],
  ["Philadelphia Insectarium & Butterfly Pavilion", "2023 年 5 月关闭"],
  ["Slought", "已结束运营，网站仅作档案"]
];
