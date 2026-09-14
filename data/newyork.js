// New York. One file per city; index.html loads them all and the page lets the
// reader switch between them.
//
// Every visitor-facing string exists in two languages: the plain key is English, the
// same key with a "z" suffix is Chinese. Both are required.
//   n / nz    museum name          h / hz    opening hours
//   p / pz    admission            flag / flagz   museum-level notice (optional)
//   d / dz    one-line description of an exhibition (optional)
//
// Dates are YYYY-MM-DD; s = opening, e = closing. When a museum has not published an
// exact date, use sText / sTextz or eText / eTextz and write the wording instead.
// free: true means free admission. u is the museum's official exhibitions page: the
// name on the page links there, and the weekly reconciliation reads it from here.

CITIES.push({
  id: "newyork",
  n: "New York",
  nz: "纽约",

  // Set by the weekly reconciliation.
  updated: "September 14, 2026",
  updatedz: "2026 年 9 月 14 日",

  lede: "Spread across all five boroughs, from the Met and MoMA down to one-room nonprofits in Brooklyn and Queens. Several of the biggest museums are pay-what-you-wish for New York State residents only, so read the admission line before you go.",
  ledez: "遍布五个区，从大都会、MoMA 到布鲁克林和皇后区只有一间屋子的非营利空间。有几家大馆的随意付费只对纽约州居民开放，出发前请先看票价一栏。",
  note: "September is changeover season: the New Museum, Poster House, SculptureCenter, Storefront and the Museum at FIT all reopen in the second half of the month. Neue Galerie is closed until November 12.",
  notez: "9 月是换展季：新美术馆、Poster House、SculptureCenter、Storefront 与 FIT 博物馆都在下半月重开；Neue Galerie 闭馆至 11 月 12 日。",

  groups: [
{ g: "Art", gz: "艺术",
  note: "From the Met and MoMA down to one-room nonprofits in Brooklyn and Queens. Read the admission line carefully — several of the biggest are pay-what-you-wish for New York State residents only.",
  notez: "从大都会、MoMA 到布鲁克林和皇后区的单间非营利空间。票价一栏值得细看：几家大馆的随意付费只对纽约州居民开放。", items: [
  { n: "The Metropolitan Museum of Art", nz: "大都会艺术博物馆", a: "1000 Fifth Avenue",
    h: "Sun, Mon, Tue, Thu 10–5, Fri–Sat 10–9; closed Wednesdays",
    hz: "周日、周一、周二、周四 10–17，周五–周六 10–21；周三闭馆",
    p: "Adults $30, seniors $22, students $17, visitors with a disability $22; free for children 12 and under; pay what you wish for New York State residents and students from NY, NJ and CT (online pay-what-you-wish needs a New York State billing address; NJ and CT students must buy in person with student ID)",
    pz: "成人 $30，长者 $22，学生 $17，残障人士 $22；12 岁及以下儿童免费；纽约州居民以及纽约州、新泽西州、康涅狄格州的学生可随意付费（网上随意付费需纽约州账单地址，新泽西州与康涅狄格州学生须持学生证现场购票）",
    u: "https://www.metmuseum.org/exhibitions",
    flag: "One ticket covers same-day entry to both The Met Fifth Avenue and The Met Cloisters.",
    flagz: "一张门票当日可同时进入第五大道主馆与修道院分馆。",
    shows: [
      { t: "Chasing Clouds", s: "2026-09-14", e: "2027-02-28", d: "A photography show about clouds, in the Museum's photography galleries", dz: "摄影展厅举办的以云为主题的摄影展" },
      { t: "Musical Bodies", eText: "Through September 27", eTextz: "至 9 月 27 日", d: "Looks at how musical instruments relate to the human body", dz: "探讨乐器与人体之间的关系" },
      { t: "Krasner and Pollock: Past Continuous", s: "2026-10-04", e: "2027-01-31", d: "Traces the parallel lives and working practices of Lee Krasner and Jackson Pollock", dz: "并置克拉斯纳与波洛克两人平行的人生与创作" }
    ] },
  { n: "The Museum of Modern Art", nz: "现代艺术博物馆", a: "11 West 53rd Street",
    h: "Daily 10:30–5:30, Fri until 8:30", hz: "每日 10:30–17:30，周五至 20:30",
    p: "Adults $30, seniors $22, students $17, visitors with a disability $22; free for children 16 and under; free for New York State residents Fridays 5:30–8:30 (advance reservation and proof of residency required)",
    pz: "成人 $30，长者 $22，学生 $17，残障人士 $22；16 岁及以下免费；纽约州居民周五 17:30–20:30 免费（须提前预约并出示居住证明）",
    u: "https://www.moma.org/calendar/exhibitions",
    shows: [
      { t: "Architects of Liberation: Modernism in Western Africa", s: "2026-07-05", e: "2027-01-02", d: "Modernist architecture built in West Africa around the era of independence", dz: "西非独立前后建造的现代主义建筑" },
      { t: "It's Alive! A Century of Animation from the Collection", s: "2026-08-01", eText: "Summer 2027", eTextz: "至 2027 年夏", d: "A hundred years of animation drawn from the Museum's collection", dz: "馆藏动画作品的百年梳理" },
      { t: "Taking Back Our Space: Photographic Perspectives", s: "2026-09-20", e: "2027-05-02", d: "Photographs from the collection grouped around reclaiming space", dz: "以重夺空间为题编排的馆藏摄影作品" },
      { t: "Teresa Margolles: En el lugar de los hechos (At the Scene)", s: "2026-09-24", e: "2027-02-08", d: "A solo show by the Mexican artist Teresa Margolles", dz: "墨西哥艺术家特雷莎·马戈列斯个展" },
      { t: "Full Disclosure: The Edge of Information Design", s: "2026-09-27", e: "2027-06-13", d: "Thirty works of digital and analog information design, in the free street-level gallery", dz: "街面免费展厅展出 30 件数字与实体信息设计作品" },
      { t: "Nilima Sheikh: Fractured Skies", s: "2026-09-27", e: "2027-06-13", d: "A solo show by the Indian painter Nilima Sheikh", dz: "印度画家尼利玛·谢赫个展" },
      { t: "The Surrealist Book: Tomorrow Lives in Mirrors", s: "2026-10-04", e: "2027-01-23", d: "Surrealist books and printed matter from the collection", dz: "馆藏超现实主义书籍与印刷品" },
      { t: "Brancusi: The Artist and His Studio", s: "2026-10-25", e: "2027-02-27", d: "Constantin Brancusi's sculpture shown alongside how he worked in his studio", dz: "布朗库西的雕塑与其工作室创作方式并陈" },
      { t: "Odili Donald Odita: Songs from Life", s: "2025-04-08", eText: "Spring 2027", eTextz: "至 2027 年春", d: "A long-running installation by the painter Odili Donald Odita", dz: "画家奥迪利·唐纳德·奥迪塔的长期装置" },
      { t: "Peggy Weil: Core Memory", s: "2026-03-07", e: "2026-10-04", d: "A media work by the artist Peggy Weil", dz: "艺术家佩吉·韦尔的影像作品" }
    ] },
  { n: "MoMA PS1", nz: "现代艺术博物馆 PS1 分馆", a: "22-25 Jackson Avenue",
    h: "Thu–Mon 12–6, Sat from 10; closed Tue and Wed", hz: "周四–周一 12–18，周六 10 点开门；周二、周三闭馆",
    p: "Free admission for all", pz: "全部免费入场", u: "https://www.momaps1.org/programs", free: true,
    flag: "Closed Monday, September 28, reopening Thursday, October 1. Advance online reservations are unavailable Friday, September 25 through Sunday, September 27; walk-up admission only, on a limited basis.",
    flagz: "9 月 28 日（周一）闭馆，10 月 1 日（周四）重新开放；9 月 25 日至 27 日不接受网上预约，仅限现场排队且名额有限。",
    shows: [
      { t: "Homeroom: Artists Against the Bomb", sText: "Opening September 10", sTextz: "9 月 10 日开幕", d: "A group show of artists' work made against nuclear weapons", dz: "以反核武器为题的艺术家群展" },
      { t: "Courtyard Commission: Precious Okoyomon", s: "2026-07-31", eText: "2028", eTextz: "至 2028 年", d: "A commissioned outdoor work by Precious Okoyomon in the PS1 courtyard", dz: "普雷舍斯·奥科约蒙为 PS1 庭院创作的委任作品" },
      { t: "Esteban Cabeza de Baca: Ancestral Dreams", eText: "On view through Spring 2027", eTextz: "展至 2027 年春", d: "A mural by the artist on the MoMA PS1 plaza", dz: "艺术家在 PS1 广场创作的壁画" },
      { t: "Homeroom", eText: "Ongoing", eTextz: "长期", d: "PS1's ongoing free space for community programming", dz: "PS1 长期开放的免费社区活动空间" },
      { t: "James Turrell: Meeting", eText: "Ongoing", eTextz: "长期", d: "Turrell's permanent skyspace room, open to the sky", dz: "特瑞尔的常设天空之室，屋顶向天空敞开" },
      { t: "Hard Art", s: "2026-11-05", d: "A new group exhibition opening in November", dz: "11 月开幕的新群展" }
    ] },
  { n: "Solomon R. Guggenheim Museum", nz: "所罗门·R·古根海姆美术馆", a: "1071 Fifth Avenue",
    h: "Every day 10:30–5:30", hz: "每日 10:30–17:30",
    p: "General admission $16, students and seniors 65+ $12, visitors with disabilities $12 (care partners free); free for children under 12; pay what you wish Tuesdays and Sundays 4–5:30 (suggested $10, minimum $1); one free Saturday a month, dates announced by the museum. Reduced prices are in effect August 3–September 17 while the rotunda is closed",
    pz: "普通票 $16，学生及 65 岁以上长者 $12，残障人士 $12（陪护者免费）；12 岁以下儿童免费；周二与周日 16:00–17:30 随意付费（建议 $10，最低 $1）；每月一个周六全天免费，具体日期由馆方公布；8 月 3 日至 9 月 17 日圆厅关闭期间实行优惠票价",
    u: "https://www.guggenheim.org/exhibitions",
    flag: "The spiral rotunda is temporarily closed while Taryn Simon | Father Country I Do Love You is installed; it opens September 18, 2026. Admission is discounted in the meantime. Early close at 3 pm on Tuesday, September 22.",
    flagz: "螺旋圆厅因《Taryn Simon | Father Country I Do Love You》布展暂时关闭，该展 2026 年 9 月 18 日开幕；期间门票优惠；9 月 22 日（周二）15:00 提前闭馆。",
    shows: [
      { t: "Guggenheim Pop: 1960 to Now", s: "2026-06-05", e: "2027-01-10", d: "Pop art from the collection shown with recent acquisitions that answer back to it", dz: "馆藏波普艺术与回应波普的新近收藏同场展出" },
      { t: "Taryn Simon | Father Country I Do Love You", s: "2026-09-18", e: "2027-03-14", d: "New photographs, text, video and sculpture filling the whole rotunda", dz: "全新摄影、文本、影像与雕塑铺满整个圆厅" },
      { t: "Collection in Focus | Modern European Currents", s: "2025-07-25", eText: "Through February 2027", eTextz: "至 2027 年 2 月", d: "Around twenty early twentieth-century European paintings and watercolors from the collection", dz: "约二十件二十世纪初欧洲油画与水彩馆藏" },
      { t: "The Thannhauser Collection", eText: "Ongoing", eTextz: "长期", d: "Cezanne, Manet and van Gogh among the museum's Thannhauser holdings", dz: "塔纳豪泽收藏，含塞尚、马奈与梵高作品" }
    ] },
  { n: "Whitney Museum of American Art", nz: "惠特尼美国艺术博物馆", a: "99 Gansevoort Street",
    h: "Wed–Mon 10:30–6, Fri until 10; closed Tuesdays", hz: "周三–周一 10:30–18，周五至 22；周二闭馆",
    p: "Adults $30, seniors and students $24; free for visitors 25 and under; free Friday nights 5–10 and the second Sunday of every month; the ground floor gallery, lobby and shop are always free",
    pz: "成人 $30，长者与学生 $24；25 岁及以下免费；周五 17:00–22:00 及每月第二个周日免费；一层展厅、大厅与商店常年免费",
    u: "https://whitney.org/exhibitions",
    shows: [
      { t: "Whitney Biennial 2026", eText: "On partial view through Oct 12", eTextz: "部分展区展至 10 月 12 日", d: "The Museum's survey of recent American art; only part of it is still up", dz: "美国近期艺术的双年展调查，目前仅部分展区开放" },
      { t: "Roy Lichtenstein: 1997", e: "2027-06-01", d: "A focused look at the work Roy Lichtenstein made in 1997", dz: "聚焦罗伊·利希滕斯坦 1997 年的创作" },
      { t: "The Lost World: The Art of Minnie Evans", e: "2027-01-10", d: "Drawings and paintings by the self-taught artist Minnie Evans", dz: "自学成才的艺术家明妮·埃文斯的素描与绘画" },
      { t: "Andy Warhol Family Album", eText: "Through Oct 19", eTextz: "至 10 月 19 日", d: "Andy Warhol's pictures of his own family", dz: "安迪·沃霍尔拍摄的家人影像" },
      { t: "Dyani White Hawk: Nourish", sText: "Upcoming", sTextz: "即将展出", d: "A solo presentation by the artist Dyani White Hawk", dz: "艺术家达雅妮·怀特霍克个展" },
      { t: "Coumba Samba: Stars and Stripes", sText: "Opens Sept 19", sTextz: "9 月 19 日开幕", d: "A solo presentation by the artist Coumba Samba", dz: "艺术家孔巴·桑巴个展" },
      { t: "Roy Lichtenstein: Like New", sText: "Opens Oct 11", sTextz: "10 月 11 日开幕", d: "A second Lichtenstein show, opening alongside the 1997 display", dz: "第二个利希滕斯坦展览，与 1997 年专题同期开放" },
      { t: "artport: A History of Internet Art", sText: "Opens Nov 21", sTextz: "11 月 21 日开幕", d: "A history of net art drawn from the Whitney's artport commissions", dz: "取材自惠特尼 artport 委任作品的网络艺术史" }
    ] },
  { n: "The Frick Collection", nz: "弗里克收藏馆", a: "1 East 70th Street",
    h: "Mon and Wed–Sun 10:30–5:30; closed Tuesdays", hz: "周一、周三–周日 10:30–17:30；周二闭馆",
    p: "Adults $30, seniors 65+ and visitors with disabilities $22, students $17; free for youth ages 10–18; pay what you wish Wednesdays 1:30–5:30 (minimum $5 to reserve online); free on Louis Vuitton First Fridays 5:30–9, except January and September",
    pz: "成人 $30，65 岁以上长者及残障人士 $22，学生 $17；10–18 岁青少年免费；周三 13:30–17:30 随意付费（网上预约最低 $5）；每月第一个周五 17:30–21:00 免费，1 月与 9 月除外",
    u: "https://www.frick.org/exhibitions",
    flag: "Between special exhibitions - the permanent collection galleries in the restored mansion are open, and the next special exhibition opens October 15, 2026.",
    flagz: "正处特展档期之间：修复后宅邸内的常设收藏展厅照常开放，下一个特展于 2026 年 10 月 15 日开幕。",
    shows: [
      { t: "Siena: The Art of Bronze, 1450–1500", s: "2026-10-15", e: "2027-01-18", d: "Renaissance bronze sculpture made in Siena in the later fifteenth century", dz: "十五世纪后期锡耶纳制作的文艺复兴青铜雕塑" },
      { t: "Kent Monkman: Officer and Laughing Girl", s: "2026-11-12", e: "2027-02-22", d: "The contemporary artist responds to a Vermeer painting in the collection", dz: "当代艺术家回应馆藏维米尔画作" },
      { t: "Painting with Fire: Susanne de Court and the Art of Enamel", s: "2027-04-08", e: "2027-07-12", d: "About fifty signed works by the French enameler Susanne de Court", dz: "法国珐琅艺术家苏珊娜·德库尔约五十件署名作品" }
    ] },
  { n: "Neue Galerie New York", nz: "纽约新画廊", a: "1048 Fifth Avenue",
    h: "Closed for construction; galleries reopen November 12, then Mon and Wed–Sun 10–6, closed Tuesdays (last gallery entry 5:30)",
    hz: "因施工闭馆；展厅 11 月 12 日重新开放，之后周一、周三–周日 10–18，周二闭馆；最晚入场 17:30",
    p: "General admission $28, seniors $18, students and educators $15, visitors with disabilities $15; children under 12 are not admitted during regular hours; free 5–8 pm on First Fridays",
    pz: "普通票 $28，长者 $18，学生与教育工作者 $15，残障人士 $15；常规开放时间不接待 12 岁以下儿童；每月第一个周五 17:00–20:00 免费",
    u: "https://www.neuegalerie.org/exhibitions",
    flag: "Closed for a multi-phase building project. Cafe Sabarsky, the book store and the design shop resume regular hours October 1; all galleries reopen November 12, 2026.",
    flagz: "因分阶段建筑工程闭馆。Cafe Sabarsky、书店与设计店 10 月 1 日恢复正常营业；全部展厅 2026 年 11 月 12 日重新开放。",
    shows: [
      { t: "25th Anniversary Exhibition", s: "2026-11-12", e: "2027-01-11", d: "Reopens the renovated galleries for the museum's twenty-fifth year", dz: "翻修后的展厅以此展重开，纪念建馆二十五周年" }
    ] },
  { n: "The Jewish Museum", nz: "犹太博物馆", a: "1109 Fifth Avenue",
    h: "Sun, Mon, Fri, Sat 11–6, Thu 11–8; closed Tue and Wed",
    hz: "周日、周一、周五、周六 11–18，周四 11–20；周二、周三闭馆",
    p: "Adults $24, seniors 65 and over $14, students $10; free for children 18 and under; free every Saturday and on select holidays",
    pz: "成人 $24，65 岁及以上长者 $14，学生 $10；18 岁及以下儿童免费；每周六及部分节假日免费",
    u: "https://thejewishmuseum.org/exhibitions",
    shows: [
      { t: "Modernity and Opulence: Women of the Wiener Werkstätte", s: "2026-07-17", e: "2026-11-15", d: "Design by the women of the Vienna Workshops", dz: "维也纳工坊女性设计师的作品" },
      { t: "Identity, Culture, and Community: Stories from the Collection of the Jewish Museum and Pruzan Family Center for Learning", s: "2025-10-24", eText: "Ongoing", eTextz: "长期", d: "The museum's main collection display, paired with its learning center", dz: "馆藏常设陈列，与学习中心相邻" },
      { t: "Focus Gallery: Oded Halahmy: Models in Wood", s: "2026-05-29", e: "2027-01-03", d: "Wooden sculpture models by Oded Halahmy in the small Focus Gallery", dz: "小型专题展厅展出奥德·哈拉赫米的木制雕塑模型" },
      { t: "Sacred Splendor: Jewish Ritual Art and Christian Treasures from St. Vitus Cathedral in Prague", s: "2026-09-18", e: "2027-02-07", d: "Jewish ritual objects shown with Christian treasures loaned from Prague", dz: "犹太礼仪器物与布拉格外借的基督教珍宝同场展出" },
      { t: "Focus Gallery: Hannah Altman: Not a Circle but a Spiral", s: "2026-09-18", e: "2027-02-07", d: "Photographs by Hannah Altman in the Focus Gallery", dz: "专题展厅展出汉娜·奥尔特曼的摄影作品" },
      { t: "Focus Gallery: Afruz Amighi: Sounding Shell", s: "2026-09-18", e: "2027-02-07", d: "A sculptural installation by Afruz Amighi in the Focus Gallery", dz: "专题展厅展出阿夫鲁兹·阿米吉的雕塑装置" },
      { t: "Ruth Patir: (M)otherland", s: "2026-12-18", e: "2027-06-07", d: "Video and sculpture by the Israeli artist Ruth Patir", dz: "以色列艺术家露丝·帕蒂尔的影像与雕塑" },
      { t: "Małgorzata Mirga-Tas", s: "2027-11-05", e: "2028-04-02", d: "A solo show by the Polish Romani artist Małgorzata Mirga-Tas", dz: "波兰罗姆裔艺术家马乌戈热塔·米尔加-塔斯个展" }
    ] },
  { n: "Cooper Hewitt, Smithsonian Design Museum", nz: "库珀·休伊特史密森尼设计博物馆", a: "2 East 91st Street",
    h: "Daily 10–6", hz: "每日 10–18",
    p: "Adults $20, seniors 62 and above $14, students with ID $8, visitors with disabilities $8; free for 18 and under; pay what you wish 5–6 pm daily; prices are reduced while the third floor is closed",
    pz: "成人 $20，62 岁及以上长者 $14，持证学生 $8，残障人士 $8；18 岁及以下免费；每日 17:00–18:00 随意付费；三楼关闭期间票价下调",
    u: "https://www.cooperhewitt.org/exhibitions/",
    flag: "The third floor is temporarily closed, so admission is priced lower than usual. The garden is closed to the public September 14–22 and September 28–October 5.",
    flagz: "三楼暂时关闭，门票低于平日价格；花园 9 月 14–22 日及 9 月 28 日–10 月 5 日不对外开放。",
    shows: [
      { t: "Design Across Time: Exploring the Smithsonian's Design Collection", eText: "Ongoing", eTextz: "长期", d: "Fills the whole first floor of the Carnegie Mansion with the national design collection", dz: "占据卡内基宅邸整个一层，展出国家设计收藏" },
      { t: "Made in America: The Industrial Photography of Christopher Payne", e: "2026-09-27", d: "More than 70 large-format photographs of American factories and workshops", dz: "70 余幅美国工厂与作坊的大画幅照片" },
      { t: "The Substitute", e: "2027-01-31", d: "Alexandra Daisy Ginsberg's video and sound piece resurrecting the northern white rhino", dz: "亚历山德拉·黛西·金斯伯格以影像与声音重现北方白犀牛" }
    ] },
  { n: "El Museo del Barrio", nz: "巴里奥博物馆", a: "1230 Fifth Avenue",
    h: "Thu–Sun 11–5", hz: "周四–周日 11–17", p: "Pay what you can", pz: "随意付费",
    u: "https://www.elmuseo.org/exhibitions/",
    shows: [
      { t: "Octopus & Others: Acts of Collaboration & Poetics", s: "2026-08-06", e: "2026-11-15", d: "Built around Papo Colo's earlier project for the museum, on artists working together", dz: "以帕波·科洛早年馆内项目为起点，讲述艺术家的协作" },
      { t: "Teddy Sandoval and the Butch Gardens School of Art", s: "2026-09-10", e: "2027-01-10", d: "A traveling survey of the Los Angeles artist Teddy Sandoval", dz: "洛杉矶艺术家泰迪·桑多瓦尔的巡回回顾展" }
    ] },
  { n: "Museum of Arts and Design", nz: "艺术与设计博物馆", a: "2 Columbus Circle",
    h: "Tue and Thu–Sun 10–6, Wed 12–8; closed Mondays", hz: "周二、周四–周日 10–18，周三 12–20；周一闭馆",
    p: "General $20, seniors $16, students $14; free for members and children 12 and under; pay what you wish 5–8 pm on the first Wednesday of every month, tickets in person only",
    pz: "普通票 $20，长者 $16，学生 $14；会员与 12 岁及以下儿童免费；每月第一个周三 17:00–20:00 随意付费，仅限现场购票",
    u: "https://madmuseum.org/exhibitions",
    shows: [
      { t: "Nike: Form Follows Motion", e: "2027-03-07", d: "Design and prototypes behind Nike's sportswear and footwear", dz: "耐克运动服饰与鞋履背后的设计与原型" },
      { t: "Jessica Lichtenstein: Rewilding", e: "2027-04-18", d: "An installation by the artist Jessica Lichtenstein", dz: "艺术家杰西卡·利希滕斯坦的装置作品" },
      { t: "Alice Riehl's Porcelain Florilegium", e: "2026-10-04", d: "Porcelain flowers and plant forms by Alice Riehl", dz: "爱丽丝·里尔以瓷制作的花卉与植物形态" },
      { t: "2025 Burke Prize: Hai-Wen Lin", e: "2026-10-04", d: "Work by the winner of MAD's biennial craft prize", dz: "MAD 双年工艺奖得主的作品" },
      { t: "OUT of the Jewelry Box", e: "2026-10-04", d: "Contemporary jewelry drawn from the museum's collection", dz: "馆藏当代首饰精选" }
    ] },
  { n: "American Folk Art Museum", nz: "美国民间艺术博物馆", a: "2 Lincoln Square",
    h: "Wed–Sun 11:30–6; closed Mon and Tue", hz: "周三–周日 11:30–18；周一、周二闭馆",
    p: "Free admission for all visitors", pz: "所有观众免费入场",
    u: "https://folkartmuseum.org/exhibitions/", free: true,
    flag: "Both summer exhibitions closed on September 13, 2026; the next exhibition opens October 9, so gallery space is limited in between.",
    flagz: "两个夏季展览已于 2026 年 9 月 13 日结束；下一个展览 10 月 9 日开幕，其间可看内容有限。",
    shows: [
      { t: "Self-Made: A Century of Inventing Artists", s: "2026-04-10", e: "2026-09-13", d: "Questions what 'self-taught artist' has meant in the United States since 1900", dz: "追问二十世纪以来美国如何定义自学艺术家" },
      { t: "Folk Nation: Crafting Patriotism in the United States", s: "2026-04-10", e: "2026-09-13", d: "Collection works linking vernacular art to American national feeling, for the semiquincentennial", dz: "借建国 250 周年，梳理民间艺术与美国国家情感的关联" },
      { t: "Locating Girlhood: Place and Identity in Early American “Schoolgirl” Art", s: "2026-10-09", e: "2027-02-28", d: "Needlework and ornamental art made by American girls in the 1700s and 1800s", dz: "十八、十九世纪美国女孩制作的刺绣与装饰艺术" }
    ] },
  { n: "New Museum", nz: "新美术馆", a: "235 Bowery",
    h: "Tue–Sun 11–6, Thu until 9; closed Mondays", hz: "周二–周日 11–18，周四至 21；周一闭馆",
    p: "Adults $28, seniors $24, students $19; free 18 and under; pay what you wish Thursdays 7–9",
    pz: "成人 $28，长者 $24，学生 $19；18 岁以下免费；周四 19:00–21:00 随意付费",
    u: "https://www.newmuseum.org/exhibitions",
    flag: "Closed for installation; reopens September 24, 2026.", flagz: "因布展闭馆；9 月 24 日重新开放。",
    shows: [
      { t: "Plaza: Sarah Lucas—VENUS VICTORIA", s: "2026-05-12", eText: "Ongoing", eTextz: "长期", d: "Outdoor sculpture commission by Sarah Lucas on the museum's Bowery plaza", dz: "萨拉·卢卡斯为美术馆前广场创作的户外雕塑委约作品" },
      { t: "Facade: Tschabalala Self—Art Lovers", s: "2026-03-21", eText: "Ongoing", eTextz: "长期", d: "Commissioned work by Tschabalala Self installed on the museum's facade", dz: "查芭拉拉·塞尔夫为美术馆外立面创作的委约作品" },
      { t: "Atrium Stair: Klára Hosnedlová—Shelter", s: "2026-03-21", eText: "Ongoing", eTextz: "长期", d: "Site-specific commission by Klára Hosnedlová running up the atrium staircase", dz: "克拉拉·霍斯内德洛娃为中庭楼梯创作的特定场域作品" },
      { t: "Arthur Jafa: I Am Tony", s: "2026-09-25", e: "2027-01-04", d: "Film and installation work by the American artist Arthur Jafa", dz: "美国艺术家亚瑟·贾法的影像与装置作品" },
      { t: "Diego Marcon: Arrivederci, Piggies!", s: "2026-09-25", e: "2027-01-31", d: "Video and animation by the Italian artist Diego Marcon", dz: "意大利艺术家迭戈·马尔孔的录像与动画作品" },
      { t: "The Bowery: Devil’s Mile", s: "2026-09-25", e: "2027-01-31", d: "Group show about the history of the Bowery, the street outside the museum", dz: "关于馆外包厘街历史的群展" },
      { t: "Hyundai Translocal Series: Ho Tzu Nyen", s: "2026-09-24", e: "2027-01-24", d: "Video work by the Singaporean artist Ho Tzu Nyen, part of the Hyundai series", dz: "新加坡艺术家何子彦的录像作品，属现代汽车系列项目" },
      { t: "Sixth New Museum Triennial: The Outside Expands", sText: "Opening January 2027", sTextz: "2027 年 1 月开幕", d: "The museum's triennial survey of emerging artists from around the world", dz: "美术馆三年展，呈现全球新生代艺术家" }
    ] },
  { n: "The Studio Museum in Harlem", nz: "哈莱姆工作室博物馆", a: "144 West 125th Street",
    h: "Wed–Sun 11–6, Fri until 9; closed Mon–Tue", hz: "周三–周日 11–18，周五至 21；周一、周二闭馆",
    p: "Pay what you can: adults $16, seniors, students and visitors with disabilities $9; free 16 and under; free every Sunday",
    pz: "随意付费：成人 $16，长者、学生与残障访客 $9；16 岁以下免费；每周日免费", u: "https://studiomuseum.org/exhibitions",
    shows: [
      { t: "Geometries", s: "2026-09-10", e: "2027-01-31", d: "Group show treating geometry as a language, with Alma Thomas, Jack Whitten and Julie Mehretu", dz: "以几何为语言的群展，含阿尔玛·托马斯、杰克·惠滕、朱莉·梅赫图" },
      { t: "Through Motion and Repose: Expanding the Walls 2026", e: "2027-01-31", d: "Photographs by the teenagers in the museum's Expanding the Walls programme", dz: "馆内青少年摄影项目学员的作品展" },
      { t: "Dreams of This Future: The Collection of Peggy Cooper Cafritz", s: "2026-08-19", e: "2027-02-28", d: "Works from the collection of the late Washington collector Peggy Cooper Cafritz", dz: "已故华盛顿收藏家佩吉·库珀·卡夫里茨的藏品" },
      { t: "Kapwani Kiwanga: BLEED", e: "2027-04-01", d: "Installation by the Canadian-French artist Kapwani Kiwanga", dz: "加拿大裔法国艺术家卡普瓦尼·基万加的装置作品" },
      { t: "Christopher Myers: Harlem Is a Myth", eText: "Ongoing", eTextz: "长期", d: "Long-run commissioned installation by the New York artist Christopher Myers", dz: "纽约艺术家克里斯托弗·迈尔斯的长期委约装置" },
      { t: "Camille Norment: Untitled (heliotrope)", eText: "Ongoing", eTextz: "长期", d: "Long-run commissioned installation by the sound artist Camille Norment", dz: "声音艺术家卡米尔·诺门特的长期委约装置" },
      { t: "A sustained becoming: Studio Museum Artists in Residence 2026", s: "2026-10-01", e: "2027-01-03", d: "New work by the 2026 artists in residence Simonette Quamina, Taylor Simmons and Derriann Pharr", dz: "2026 年度三位驻馆艺术家的新作展" }
    ] },
  { n: "The Museum at FIT", nz: "纽约时装学院博物馆", a: "227 West 27th Street",
    h: "Wed–Fri 12–8, Sat–Sun 10–5; closed Mon–Tue", hz: "周三–周五 12–20，周六–周日 10–17；周一、周二闭馆",
    p: "Free", pz: "免费", u: "https://www.fitnyc.edu/museum/exhibitions/index.php", free: true,
    flag: "Galleries are closed between installations and reopen when Doll Dressing opens on September 16, 2026.",
    flagz: "展厅因换展闭馆；9 月 16 日随《Doll Dressing》开展重新开放。",
    shows: [
      { t: "Doll Dressing", s: "2026-09-16", e: "2027-01-03", d: "Fashion exhibition on dressing dolls, in the Special Exhibitions Gallery", dz: "关于玩偶穿衣的时装展，位于特展厅" },
      { t: "Fashioning Desire: Willy Chavarria and Bárbara Sánchez-Kane", s: "2027-02-17", e: "2027-04-18", d: "Two-designer show pairing Willy Chavarria with Bárbara Sánchez-Kane", dz: "威利·查瓦里亚与芭芭拉·桑切斯-凯恩的双人设计展" }
    ] },
  { n: "Asia Society Museum", nz: "亚洲协会博物馆", a: "725 Park Avenue",
    h: "Wed–Sun 11–5; closed Mon–Tue", hz: "周三–周日 11–17；周一、周二闭馆",
    p: "Adults $15, students and seniors $10; free 16 and under; free every Friday",
    pz: "成人 $15，学生与长者 $10；16 岁以下免费；每周五免费", u: "https://asiasociety.org/new-york/exhibitions/current",
    shows: [
      { t: "Buddha and Shiva, Lotus and Dragon: Celebrating 70 Years of Asia Society and the Rockefeller Legacy", s: "2026-03-18", e: "2027-01-03", d: "Seventy works from the permanent collection, marking the society's 70th anniversary", dz: "馆藏七十件精品，纪念亚洲协会成立七十周年" },
      { t: "Blanchette Hooker Rockefeller and the Rockefeller Collection", s: "2026-03-18", e: "2027-01-03", d: "Display on Blanchette Hooker Rockefeller's part in building the museum's collection", dz: "介绍布兰切特·胡克·洛克菲勒如何参与建立馆藏" },
      { t: "A Legacy Continued: Recent Acquisitions to the Asia Society Museum Collection", s: "2026-03-18", e: "2027-01-03", d: "Recent gifts to the collection from members of the Rockefeller family", dz: "洛克菲勒家族近年捐赠的馆藏新入藏品" },
      { t: "Busy, Busy Towns: Moving Images of a Changing Asia", s: "2026-03-18", e: "2027-01-03", d: "Seven video works on urban change in China, Indonesia and Taiwan", dz: "七件关于中国、印尼、台湾城市变迁的录像作品" }
    ] },
  { n: "Japan Society Gallery", nz: "日本协会美术馆", a: "333 East 47th Street",
    h: "Tue–Fri 11–5, Sat–Sun 12–6; closed Mondays", hz: "周二–周五 11–17，周六–周日 12–18；周一闭馆",
    p: "Adults $20, students and seniors $15; free for members and visitors with disabilities; free First Fridays 5–7",
    pz: "成人 $20，学生与长者 $15；会员与残障访客免费；每月首个周五 17:00–19:00 免费", u: "https://japansociety.org/gallery/",
    flag: "No exhibition on view; the gallery reopens with its next show on October 6, 2026.",
    flagz: "目前无展览；10 月 6 日随下一个展览重新开放。",
    shows: [
      { t: "Gen'ichirō Inokuma's NYC Salon", s: "2026-10-06", e: "2027-01-10", d: "Show on the Japanese painter Gen'ichirō Inokuma and his New York circle", dz: "关于日本画家猪熊弦一郎及其纽约交游圈的展览" }
    ] },
  { n: "International Center of Photography", nz: "国际摄影中心", a: "84 Ludlow Street",
    h: "Daily 10:30–6:30, Thu until 8", hz: "每日 10:30–18:30，周四至 20:00",
    p: "Adults $18, seniors and military $14, students $12; free 14 and under; $5 Thursdays 5–8",
    pz: "成人 $18，长者与军人 $14，学生 $12；14 岁以下免费；周四 17:00–20:00 $5", u: "https://www.icp.org/exhibitions",
    shows: [
      { t: "Yves Saint Laurent and Photography", s: "2026-06-11", e: "2026-09-28", d: "Photographs made for and about the Yves Saint Laurent fashion house", dz: "围绕伊夫·圣罗兰时装屋拍摄的摄影作品" },
      { t: "Photobooks USA 2000–25", s: "2026-06-11", e: "2026-09-28", d: "A survey of American photobooks published since 2000", dz: "2000 年以来美国摄影书的概览展" },
      { t: "I'm So Happy You Are Here: Japanese Women Photographers from the 1950s to Now", s: "2026-10-15", e: "2027-01-11", d: "Survey of Japanese women photographers from the 1950s to the present", dz: "1950 年代至今的日本女性摄影师群展" },
      { t: "Laia Abril: On Rape and Institutional Failure", s: "2026-10-15", e: "2027-01-11", d: "Documentary project by Laia Abril on sexual violence and the institutions that fail it", dz: "莱娅·阿布里尔关于性暴力与制度失职的纪实项目" }
    ] },
  { n: "The Drawing Center", nz: "素描中心", a: "35 Wooster Street",
    h: "Wed–Sun 12–6; closed Mon–Tue", hz: "周三–周日 12–18；周一、周二闭馆", p: "Free", pz: "免费",
    u: "https://www.drawingcenter.org/exhibitions", free: true,
    shows: [
      { t: "Certainly an Act: Works on Paper by Pope.L", e: "2026-09-27", d: "Drawings and works on paper by the American artist Pope.L", dz: "美国艺术家 Pope.L 的素描与纸上作品" },
      { t: "Drawing Connections: Student Exhibition", e: "2026-09-27", d: "Drawings made by students in the Drawing Center's education programme", dz: "素描中心教育项目学员的作品展" },
      { t: "Form, Shadow, Motion: Selections from the Burger Collection, Hong Kong", s: "2026-10-23", e: "2027-01-24", d: "Works on paper drawn from a Hong Kong private collection", dz: "选自香港一家私人收藏的纸上作品" }
    ] },
  { n: "Swiss Institute", nz: "瑞士学院", a: "250 Bowery",
    h: "No public hours; the building is closed until it reopens", hz: "暂无开放时间；场馆闭馆中", p: "Free",
    pz: "免费", u: "https://swissinstitute.net/exhibitions", free: true,
    flag: "The 38 St Marks Place space has closed; Swiss Institute reopens at 250 Bowery in Spring 2027. Until then there are only offsite exhibitions.",
    flagz: "St Marks Place 旧馆已关闭；瑞士学院将于 2027 年春在 250 Bowery 重新开放；在此之前仅有馆外展览。",
    shows: [
      { t: "SI OFFSITE | Rafał Skoczek: Kino Drift", s: "2026-09-23", e: "2026-11-14", d: "Offsite solo show by Rafał Skoczek while the main building is closed", dz: "主馆闭馆期间的馆外个展，艺术家拉法尔·斯科切克" }
    ] },
  { n: "Dia Chelsea", nz: "迪亚·切尔西", a: "537 West 22nd Street",
    h: "Wed–Sat 12–6; closed Sun–Tue", hz: "周三–周六 12–18；周日至周二闭馆", p: "Free", pz: "免费",
    u: "https://www.diaart.org/exhibition/exhibitions-projects", free: true,
    shows: [
      { t: "David Lamelas: The Machine", s: "2026-03-06", e: "2027-01-16", d: "Solo show by the Argentine conceptual artist David Lamelas", dz: "阿根廷观念艺术家大卫·拉梅拉斯个展" },
      { t: "Éliane Radigue: States of Listening", s: "2026-12-04", d: "Sound works by the French composer Éliane Radigue, co-organized with Blank Forms", dz: "法国作曲家埃利亚娜·拉迪格的声音作品，与 Blank Forms 合办" }
    ] },
  { n: "Park Avenue Armory", nz: "派克大道军械库", a: "643 Park Avenue",
    h: "Open for ticketed programs only; no general gallery hours", hz: "仅在有票的演出与展览期间开放；无常规参观时间",
    p: "Ticket prices vary by program", pz: "票价依节目而定",
    u: "https://www.armoryonpark.org/season-events/current-season/",
    flag: "There is no visual-art installation in the Drill Hall right now; the autumn season is performance, sold as individual tickets.",
    flagz: "大厅目前没有视觉艺术装置；秋季节目为演出，需单独购票。",
    shows: [
      { t: "The Cherry Orchard", s: "2026-09-16", e: "2026-09-26", d: "Simon Stone's staging of Chekhov's last play in the Wade Thompson Drill Hall", dz: "西蒙·斯通执导的契诃夫遗作，在军械库大厅上演" },
      { t: "Music for 18 Musicians: Staged Variations", s: "2026-10-14", e: "2026-10-18", d: "Staged version of Steve Reich's Music for 18 Musicians in the Drill Hall", dz: "史蒂夫·赖希《为十八位音乐家而作》的舞台版，大厅演出" },
      { t: "Balkan Erotic Epic", s: "2026-12-08", e: "2026-12-20", d: "Marina Abramović performance work that the audience walks through in the Drill Hall", dz: "玛丽娜·阿布拉莫维奇的表演作品，观众可在大厅内穿行" }
    ] },
  { n: "The Shed", nz: "谢德艺术中心", a: "545 West 30th Street",
    h: "Tue–Thu 1–9, Fri–Sun 11–8:30; closed Mondays", hz: "周二–周四 13–21，周五–周日 11–20:30；周一闭馆",
    p: "Ticket prices vary by program; a Ticket Access Program offers reduced-price tickets",
    pz: "票价依节目而定；另设低价票计划", u: "https://theshed.org/program",
    shows: [
      { t: "The Zora Project", eText: "Ongoing", eTextz: "长期", d: "Multi-part programme of works responding to the writer Zora Neale Hurston", dz: "围绕作家佐拉·尼尔·赫斯顿展开的多部分项目" },
      { t: "Doug Aitken: Lightscape", s: "2026-06-25", e: "2026-09-13", d: "Doug Aitken's large-scale film installation, shown with live music performances", dz: "道格·艾特肯的大型影像装置，配合现场音乐演出" },
      { t: "Open Call", eText: "Ongoing", eTextz: "长期", d: "Commissions by early-career New York artists, shown across the building", dz: "面向纽约新锐艺术家的委约项目，在馆内多处呈现" }
    ] },
  { n: "Poster House", nz: "海报之家", a: "119 West 23rd Street",
    h: "Thu 10–6, Fri 10–9, Sat–Sun 10–6; closed Mon–Wed",
    hz: "周四 10–18，周五 10–21，周六–周日 10–18；周一至周三闭馆",
    p: "Adults $15; students, educators, veterans, seniors 65+ and visitors with disabilities $10; free under 18; free every Friday and the third Sunday of the month",
    pz: "成人 $15；学生、教师、退伍军人、65 岁以上长者与残障访客 $10；18 岁以下免费；每周五及每月第三个周日免费",
    u: "https://posterhouse.org/exhibitions/",
    flag: "Closed for installation; reopens with new shows on September 25, 2026.",
    flagz: "因布展闭馆；9 月 25 日携新展重新开放。",
    shows: [
      { t: "Reading Under Fire: Arming Minds & Hearts During Wartime", s: "2026-04-23", e: "2026-11-01", d: "Wartime posters that pushed books and reading at soldiers and civilians", dz: "战时向士兵与平民推广书籍和阅读的海报" },
      { t: "From Monarchy to Modernity: Travel, Identity, & the Czechoslovak First Republic 1918–1938", s: "2026-04-23", e: "2026-11-01", d: "Czechoslovak travel posters from the interwar First Republic", dz: "两次大战之间捷克斯洛伐克第一共和国的旅游海报" },
      { t: "Designed to Be Red: Native American & Indigenous Poster Works", s: "2026-09-25", e: "2027-02-21", d: "Posters by Native American and Indigenous designers from more than sixty nations", dz: "来自六十多个原住民族群的设计师海报作品" },
      { t: "Cuteness, Conservatism, & Consumption: Lefor-Openo and Postwar France", s: "2026-09-25", e: "2027-02-21", d: "Advertising posters by the French design duo Lefor-Openo in the postwar years", dz: "法国设计二人组 Lefor-Openo 的战后广告海报" },
      { t: "Sculpting Sound: Günther Kieser's Music Posters", s: "2026-11-12", e: "2027-04-11", d: "Jazz and rock concert posters by the German designer Günther Kieser", dz: "德国设计师金特·基泽的爵士与摇滚演出海报" },
      { t: "Just Say Nyet: The Soviet Battle Against Booze", s: "2026-11-12", e: "2027-04-11", d: "Soviet anti-alcohol campaign posters", dz: "苏联反酗酒宣传海报" }
    ] },
  { n: "Leslie-Lohman Museum of Art", nz: "莱斯利-洛曼艺术博物馆", a: "26 Wooster Street",
    h: "Wed–Sun 12–6", hz: "周三–周日 12–18",
    p: "Pay what you wish; suggested donation $10; free for caregivers accompanying visitors with disabilities",
    pz: "随意付费；建议捐赠 $10；陪同残障访客的照护者免费", u: "https://leslielohman.org/exhibitions", free: true,
    shows: [
      { t: "Soft Spaces: Evan Paul English and Leasho Johnson", s: "2026-08-12", e: "2026-09-27", d: "Two-person show of work by Evan Paul English and Leasho Johnson", dz: "埃文·保罗·英格利什与里绍·约翰逊双人展" },
      { t: "Rocío García: The Object of Power is Power", s: "2026-05-06", e: "2026-09-20", d: "Solo exhibition of work by the Cuban artist Rocío García", dz: "古巴艺术家罗西奥·加西亚个展" },
      { t: "Shu Lea Cheang: LOVER LOVE", s: "2026-04-03", e: "2027-01-03", d: "Solo show by the new media artist Shu Lea Cheang", dz: "新媒体艺术家郑淑丽个展" },
      { t: "Hortensia Mi Kafchin: Through Different Eyes", s: "2026-02-20", e: "2027-01-03", d: "Solo exhibition by the Romanian artist Hortensia Mi Kafchin", dz: "罗马尼亚艺术家霍滕西娅·米·卡夫钦个展" },
      { t: "PROPS: Eikoh Hosoe and Jason Wee", s: "2026-11-06", e: "2027-03-14", d: "Two-person show pairing the Japanese photographer Eikoh Hosoe with Jason Wee", dz: "日本摄影家细江英公与艺术家杰森·维双人展" }
    ] },
  { n: "Artists Space", nz: "艺术家空间", a: "11 Cortlandt Alley",
    h: "Wed–Sat 12–6", hz: "周三–周六 12–18", p: "Free", pz: "免费",
    u: "https://artistsspace.org/exhibitions", free: true,
    shows: [
      { t: "Theresa Hak Kyung Cha: Multiple Offerings", s: "2026-09-11", e: "2026-11-21", d: "Work by the Korean American artist and writer Theresa Hak Kyung Cha", dz: "韩裔美国艺术家、作家车学庆的作品展" }
    ] },
  { n: "apexart", nz: "阿佩克斯艺术空间", a: "291 Church Street",
    h: "Tue–Sat 11–6", hz: "周二–周六 11–18", p: "Free", pz: "免费",
    u: "https://apexart.org/exhibitions.php", free: true,
    shows: [
      { t: "Weaving a Day, Mourning a Life", s: "2026-09-05", e: "2026-10-24", d: "Open-call winning exhibition curated by Dala Nguyen", dz: "公开征集获选展览，策展人 Dala Nguyen" },
      { t: "TRIBUTE", s: "2026-11-07", e: "2026-12-19", d: "Open-call winning exhibition curated by Anh Dao Ha", dz: "公开征集获选展览，策展人 Anh Dao Ha" },
      { t: "Lands That Feed the World", s: "2027-01-16", e: "2027-03-13", d: "Open-call winning exhibition on agriculture and colonial history, curated by Marwa Benhalim", dz: "公开征集获选展览，关于农业与殖民历史，策展人 Marwa Benhalim" },
      { t: "Disarm: Art in the Shadow of Gun Violence", s: "2027-03-27", e: "2027-05-22", d: "Open-call winning group show about gun violence in America", dz: "公开征集获选群展，主题为美国枪支暴力" }
    ] },
  { n: "The Kitchen", nz: "厨房艺术中心", a: "163B Bank Street, 4th Floor",
    h: "Gallery Wed–Sat 12–6; program hours vary", hz: "展厅 周三–周六 12–18；活动时间另定", p: "Free", pz: "免费",
    u: "https://thekitchen.org/on-view/", free: true,
    flag: "Chelsea building under renovation; programs are at Westbeth, 163B Bank Street, 4th Floor Loft, not 512 West 19th Street",
    flagz: "切尔西馆舍改建中，展览暂设于 Westbeth，163B Bank Street 四楼，而非 512 West 19th Street",
    shows: [
      { t: "Instrument Object", s: "2026-09-10", e: "2026-11-08", d: "Josiah McElheny turns the work of ten musicians into sculpture, sound and moving glass", dz: "约西亚·麦克尔赫尼把十位音乐家的作品化为雕塑、声音与转动的玻璃" }
    ] },
  { n: "Center for Architecture", nz: "建筑中心", a: "536 LaGuardia Place",
    h: "Mon–Fri 9–8, Sat 11–5", hz: "周一–周五 9–20，周六 11–17", p: "Free", pz: "免费",
    u: "https://www.centerforarchitecture.org/exhibitions/", free: true,
    flag: "Galleries closed for installation; the fall exhibitions open October 1, 2026",
    flagz: "展厅因布展关闭；秋季展览 2026 年 10 月 1 日开幕",
    shows: [
      { t: "Why Design?", s: "2026-10-01", e: "2027-01-02" },
      { t: "Dark Matter U: Justice, Pedagogy, Design", s: "2026-10-01", e: "2027-03-27", d: "Work by Dark Matter U, a collective rethinking justice and teaching in design", dz: "设计团体 Dark Matter U 关于公正与设计教育的项目" },
      { t: "Humanist modernity: Maciej and Stanisława Nowicki", s: "2026-10-01", e: "2027-03-27", d: "The buildings and drawings of Polish modernist architects Maciej and Stanisława Nowicki", dz: "波兰现代主义建筑师诺维茨基夫妇的建筑与图纸" },
      { t: "Figures of Architecture: A Living Archive of Grotesques and Mascaron Ornamentation", s: "2027-01-14", e: "2027-03-27", d: "An archive of grotesque and mascaron carved ornament on building facades", dz: "建筑立面怪诞雕饰与人面装饰的档案" }
    ] },
  { n: "Hispanic Society Museum & Library", nz: "西班牙裔协会博物馆与图书馆", a: "613 West 155th Street",
    h: "Museum Thu–Sun 12–5; library Thu–Sat 12–3:30", hz: "博物馆 周四–周日 12–17；图书馆 周四–周六 12–15:30",
    p: "Free; suggested donation adults $15, NY/NJ/CT residents $10, students and seniors $5, under 10 free; a free timed ticket must be reserved in advance",
    pz: "免费；建议捐赠成人 $15，纽约、新泽西、康州居民 $10，学生与老年人 $5，10 岁以下免费；须提前预约免费定时票",
    u: "https://hispanicsociety.org/exhibitions/", free: true,
    flag: "Visitor access is limited to the ground floor while accessibility work continues elsewhere in the building",
    flagz: "因无障碍改造，参观仅限一层展厅",
    shows: [
      { t: "Joaquín Sorolla's Vision of Spain", eText: "Permanent", eTextz: "常设", d: "Sorolla's fourteen large murals of Spanish regional life, in their own gallery", dz: "索罗亚描绘西班牙各地风土的十四幅巨幅壁画，设专厅陈列" },
      { t: "A Living Vision: the Sorolla Gallery at 100", s: "2026-05-21", e: "2027-05-27", d: "Marks a century of the gallery built for Sorolla's Vision of Spain murals", dz: "纪念索罗亚壁画专厅落成一百周年" },
      { t: "Uptown Visions", s: "2026-07-01", e: "2026-11-01" },
      { t: "A Collection Without Borders", s: "2026-07-23", e: "2026-11-01", d: "A selection drawn from the Hispanic Society's own holdings", dz: "取自协会自身收藏的作品精选" },
      { t: "Esperanza Cortés: Embroidered Allegories", s: "2026-09-03", e: "2026-11-01", d: "Embroidered work by the artist Esperanza Cortés", dz: "艺术家埃斯佩兰萨·科尔特斯的刺绣作品" },
      { t: "Mantilla: Fashion Unveiled", s: "2026-11-20", e: "2027-03-28", d: "The Spanish lace mantilla veil and its place in dress", dz: "西班牙蕾丝头纱在服饰史中的位置" }
    ] },
  { n: "Brooklyn Museum", nz: "布鲁克林博物馆", a: "200 Eastern Parkway",
    h: "Wed–Sun 11–6; first Saturday of the month 5–11", hz: "周三–周日 11–18；每月第一个周六 17–23",
    p: "Adults $20; seniors and students $14; free 19 and under; free on First Saturdays; special exhibitions ticketed separately",
    pz: "成人 $20；老年人与学生 $14；19 岁及以下免费；每月第一个周六免费；特展另行购票",
    u: "https://www.brooklynmuseum.org/exhibitions",
    shows: [
      { t: "Michael Richards: Free F'All", s: "2026-09-11", e: "2027-06-06", d: "Sculpture by Michael Richards honouring the Tuskegee Airmen", dz: "迈克尔·理查兹向塔斯基吉飞行员致敬的雕塑" },
      { t: "Iris van Herpen: Sculpting the Senses", e: "2026-12-06", d: "Experimental couture by the Dutch designer Iris van Herpen", dz: "荷兰设计师艾里斯·范·赫本的实验性高定时装" },
      { t: "Cézanne to Modigliani: Gifts of Modern Art from the Pearlman Collection", s: "2026-10-02", e: "2027-04-18", d: "More than fifty modern European paintings, sculptures and works on paper", dz: "五十余件欧洲现代绘画、雕塑与纸上作品" },
      { t: "Hopi Kachina Dolls: Blessings for a Balanced World", s: "2026-10-02", e: "2027-06-27", d: "Hopi kachina carvings and the beliefs they carry", dz: "霍皮族卡奇纳木雕及其信仰内涵" },
      { t: "Art of Manga", s: "2026-10-03", e: "2027-01-31", d: "Original manga drawings from series including ONE PIECE and JoJo's Bizarre Adventure", dz: "《海贼王》《JOJO 的奇妙冒险》等作品的漫画原稿" },
      { t: "Manga Before Manga: Japanese Art from the Collection", s: "2026-10-03", e: "2027-01-31", d: "Japanese art from the museum's own collection, shown alongside Art of Manga", dz: "馆藏日本艺术，与漫画特展同期呈现" },
      { t: "Mika Ninagawa: Feel the Flow(ers)", sText: "Opens in October", sTextz: "10 月开幕", d: "The Japanese photographer's first immersive installation in the United States", dz: "日本摄影家蜷川实花在美国的首个沉浸式装置" }
    ] },
  { n: "Queens Museum", nz: "皇后区博物馆", a: "New York City Building, Flushing Meadows Corona Park",
    h: "Wed–Fri 12–5, Sat–Sun 11–5, closed Mon–Tue", hz: "周三–周五 12–17，周六–周日 11–17，周一、周二闭馆",
    p: "Pay what you wish; suggested adults $8, seniors and students $6; free 12 and under, IDNYC and Culture Pass holders; timed ticket reserved in advance",
    pz: "随意付费；建议成人 $8，老年人与学生 $6；12 岁以下、IDNYC 与 Culture Pass 持卡者免费；须提前预约定时票",
    u: "https://queensmuseum.org/whats-on/", free: true,
    shows: [
      { t: "Caroline Kent: A short play about watching shadows move across the room", s: "2023-12-06", e: "2027-02-07", d: "A long-running commission by the painter Caroline Kent", dz: "画家卡罗琳·肯特的长期委托创作" },
      { t: "Glori Tuitt: Black, Trans, & Alive (Qweens Song)", s: "2021-10-01", eText: "Ongoing", eTextz: "持续展出", d: "An ongoing project about Black trans life in Queens", dz: "关于皇后区黑人跨性别者生活的长期项目" },
      { t: "About Us: The American Imaginary", s: "2026-02-28", e: "2027-02-07", d: "A group exhibition about how America pictures itself", dz: "关于美国如何想象自身的群展" },
      { t: "Sonia Boyce: Demonstrate", s: "2026-06-27", e: "2027-02-07", d: "Solo exhibition by the British artist Sonia Boyce", dz: "英国艺术家索尼娅·博伊斯个展" },
      { t: "Collection Spotlight: The Panorama Archives", s: "2026-06-20", e: "2027-01-31", d: "Archive material behind the museum's Panorama of the City of New York", dz: "纽约城市全景模型背后的档案资料" },
      { t: "New York Proud: A Portrait of New York City", s: "2026-09-29", e: "2026-11-02" },
      { t: "¡Te Amo Porque S.O.S. Pueblo! Altares Ocultos de Duelo y Memoria (Hidden Altars of Grief and Remembrance)", s: "2026-10-07", e: "2027-02-07", d: "Community altars of grief and remembrance", dz: "关于哀悼与记忆的社区祭坛" },
      { t: "Maia Ruth Lee: Glyphs for Reverie", s: "2027-03-30", e: "2029-02-27", d: "A long-term commission by the artist Maia Ruth Lee", dz: "艺术家李玫如的长期委托创作" }
    ] },
  { n: "The Bronx Museum of the Arts", nz: "布朗克斯艺术博物馆", a: "1040 Grand Concourse",
    h: "Wed–Sun 11–6", hz: "周三–周日 11–18", p: "Free", pz: "免费",
    u: "https://bronxmuseum.org/exhibitions/", free: true,
    flag: "A building renovation is under way; the museum stays open on its regular hours",
    flagz: "馆舍改造进行中，仍按常规时间开放",
    shows: [
      { t: "Alex Strada: Public Address", s: "2026-09-14", d: "Street signs carrying the words of people living in Bronx shelters, starting at Joyce Kilmer Park", dz: "以路牌呈现布朗克斯收容所居民的话语，首站在乔伊斯·基尔默公园" },
      { t: "Saya Woolfalk: The WoodsWoman Method", s: "2026-10-09", eText: "Through winter 2027", eTextz: "至 2027 年冬", d: "Saya Woolfalk picks works from the permanent collection to sit beside her own process material", dz: "萨雅·伍尔福克从馆藏中选件，与自己的创作素材并置" },
      { t: "Beyond the Margins: Bronx Museum Teens Activate the Permanent Collection", s: "2026-10-09", eText: "Through winter 2027", eTextz: "至 2027 年冬", d: "Fourteen high school students choose and hang works from the permanent collection", dz: "十四名高中生从馆藏中选件并策划陈列" }
    ] },
  { n: "The Noguchi Museum", nz: "野口勇美术馆", a: "9-01 33rd Road",
    h: "Wed–Sun 11–6, last entry 5:30", hz: "周三–周日 11–18，最晚入场 17:30",
    p: "Adults $16; seniors and students $6; free under 12, NYC public school students and SNAP cardholders; free on the first Friday of every month",
    pz: "成人 $16；老年人与学生 $6；12 岁以下、纽约市公立学校学生及 SNAP 持卡者免费；每月第一个周五免费",
    u: "https://www.noguchi.org/museum/exhibitions/",
    shows: [
      { t: "Light and Stone: Revisiting Noguchi's 1986 Venice Biennale", s: "2026-05-06", e: "2027-05-09", d: "Revisits the presentation Noguchi made for the 1986 Venice Biennale", dz: "重现野口勇 1986 年威尼斯双年展的展陈" },
      { t: "No Ordinary Light: Akari at 75", s: "2026-11-04", d: "Seventy-five years of Noguchi's Akari paper light sculptures", dz: "野口勇 Akari 纸质光雕七十五年" },
      { t: "Isamu Noguchi at Lever House", s: "2026-09-14", e: "2027-08-31", d: "An offsite showing of Noguchi sculpture at Lever House in Midtown Manhattan", dz: "馆外项目：野口勇雕塑在曼哈顿中城利华大厦展出" }
    ] },
  { n: "SculptureCenter", nz: "雕塑中心", a: "44-19 Purves Street",
    h: "Thu–Mon 12–6, closed Tue–Wed", hz: "周四–周一 12–18，周二、周三闭馆", p: "Free", pz: "免费",
    u: "https://www.sculpture-center.org/exhibitions/", free: true,
    flag: "Closed for installation until Saturday, September 19, 2026",
    flagz: "因布展闭馆，至 2026 年 9 月 19 日（周六）重开",
    shows: [
      { t: "Aziz Hazara: Coming Home", s: "2026-09-19", e: "2026-12-28", d: "Newly commissioned solo exhibition by Aziz Hazara", dz: "阿齐兹·哈扎拉的新委托创作个展" },
      { t: "Yining Fei: Feral Sediment", s: "2026-09-19", e: "2026-12-28", d: "Newly commissioned solo exhibition by Yining Fei", dz: "费一宁的新委托创作个展" },
      { t: "Cevdet Erek: Americas", s: "2026-09-19", e: "2026-12-28", d: "Newly commissioned solo exhibition by the Turkish artist Cevdet Erek", dz: "土耳其艺术家杰夫代特·埃雷克的新委托创作个展" },
      { t: "In Practice: Jianxin Tian", s: "2027-01-27", e: "2027-03-08", d: "A solo turn in In Practice, SculptureCenter's series for early-career artists", dz: "In Practice 新锐艺术家系列个展" }
    ] },
  { n: "BRIC House", nz: "布里克艺术中心", a: "647 Fulton Street",
    h: "Gallery Tue–Sat 11–6", hz: "展厅 周二–周六 11–18", p: "Free", pz: "免费",
    u: "https://bricartsmedia.org/events/exhibitions/", free: true,
    flag: "Between shows; the fall exhibitions open October 8, 2026",
    flagz: "换展期间；秋季展览 2026 年 10 月 8 日开幕",
    shows: [
      { t: "Johan Orellana: Remnants of Forking Paths", s: "2026-10-08", e: "2026-12-12", d: "Solo presentation by Johan Orellana in the BRIC House Hallway", dz: "约翰·奥雷利亚纳在 BRIC House 走廊空间的个展" },
      { t: "From the BRIClab: Works from the 2025-26 Artist Residencies", s: "2026-10-20", e: "2026-12-12", d: "Work made by artists in BRIC's 2025-26 residency programme", dz: "BRIC 2025—26 年度驻地艺术家的创作成果" }
    ] },
  { n: "Museum of Contemporary African Diasporan Arts (MoCADA)", nz: "当代非洲流散艺术博物馆（MoCADA）", a: "10 Lafayette Avenue, 2nd Floor",
    h: "Wed–Sat 12–8, Sun 12–5", hz: "周三–周六 12–20，周日 12–17",
    p: "Adults $12; children 6–17 and students $8; seniors and visitors with disabilities $5; EBT cardholders $4; children under 6 free",
    pz: "成人 $12；6–17 岁儿童及学生 $8；老年人及残障人士 $5；EBT 持卡人 $4；6 岁以下免费", u: "https://mocada.org/explore/",
    shows: [
      { t: "Pitch Black: Haiti and Congo Revisited", s: "2026-06-12", e: "2026-10-11", d: "Art and 1974 World Cup archives linking Haiti and the Congo", dz: "以 1974 年世界杯为线索，连结海地与刚果的艺术与档案" }
    ] },
  { n: "Pioneer Works", nz: "先锋工厂", a: "159 Pioneer Street",
    h: "Wed–Sun 12–6", hz: "周三–周日 12–18", p: "Free", pz: "免费",
    u: "https://pioneerworks.org/exhibitions", free: true,
    shows: [
      { t: "There's no me without you", s: "2026-09-12", e: "2026-12-20", d: "Finnegan Shannon with three collaborating artists and writers", dz: "芬尼根·香农与三位合作艺术家、写作者的展览" },
      { t: "Siphon", s: "2026-09-12", e: "2026-11-22", d: "Solo exhibition by Finnish artist Tuomas A. Laitinen", dz: "芬兰艺术家图奥马斯·莱蒂宁个展" },
      { t: "Child/ren of the Bloom", s: "2026-09-12", e: "2026-12-20", d: "Solo exhibition by artist LaJuné McMillian", dz: "艺术家拉茹内·麦克米伦个展" },
      { t: "Jemila MacEwan: Dead Gods", sText: "August 2026", sTextz: "2026 年 8 月", eText: "February 2027", eTextz: "2027 年 2 月", d: "A long-run project by Jemila MacEwan on the Pioneer Works site", dz: "杰米拉·麦克尤恩在馆内场地的长期项目" }
    ] },
  { n: "Amant", nz: "阿芒特艺术中心", a: "315 Maujer Street",
    h: "Thu 12–6, Fri 12–9, Sat–Sun 12–6; closed Mon–Wed",
    hz: "周四 12–18，周五 12–21，周六–周日 12–18；周一至周三闭馆", p: "Free", pz: "免费",
    u: "https://www.amant.org/programs", free: true,
    shows: [
      { t: "The Mud Room: Itinerant Artists, Folk Spectacles, and Painted Walls", s: "2026-09-17", e: "2026-11-29", d: "Group show on travelling painters, folk spectacle and wall painting", dz: "关于流动画匠、民间表演与墙面绘画的群展" },
      { t: "Sentient Earth", s: "2026-09-17", e: "2027-02-14", d: "Group exhibition spread across Amant's three gallery buildings", dz: "横跨 Amant 三栋展厅建筑的群展" }
    ] },
  { n: "Newhouse Center for Contemporary Art", nz: "纽豪斯当代艺术中心", a: "1000 Richmond Terrace",
    h: "Open to the public only for scheduled exhibitions and events; Snug Harbor grounds open daily dawn to dusk",
    hz: "仅在有展览或活动期间对公众开放；斯纳格港园区每日 日出至日落",
    p: "Adults $5; seniors (65+) and students $4; free for children 5 and under, active military, members and students in grades 6–12 with ID; Snug Harbor grounds free",
    pz: "成人 $5；65 岁以上及学生 $4；5 岁以下儿童、现役军人、会员及持证 6–12 年级学生免费；园区免费",
    u: "https://snug-harbor.org/things-to-do/museums-and-galleries/newhouse-center/",
    flag: "No exhibition on view. The galleries open only for scheduled exhibitions and events — check before travelling.",
    flagz: "当前无展览。展厅仅在有展览或活动时开放，出行前请先确认。",
    shows: [] },
  { n: "The Morgan Library & Museum", nz: "摩根图书馆与博物馆", a: "225 Madison Avenue",
    h: "Tue–Thu 10:30–5, Fri 10:30–8, Sat–Sun 10:30–5; closed Mondays",
    hz: "周二–周四 10:30–17，周五 10:30–20，周六–周日 10:30–17；周一闭馆",
    p: "Adults $22, seniors 65+ $14, students $13; free 12 and under; free Fridays 5–8 (reservation required)",
    pz: "成人 $22，65 岁以上 $14，学生 $13；12 岁及以下免费；周五 17:00–20:00 免费（需预约）",
    u: "https://www.themorgan.org/exhibitions",
    shows: [
      { t: "Hujar: Contact", s: "2026-05-22", e: "2026-10-25", d: "Peter Hujar's contact sheets, showing how the photographer chose his pictures", dz: "摄影师 Peter Hujar 的印样，呈现其选片过程" },
      { t: "Tarot! Renaissance Symbols, Modern Visions", s: "2026-06-26", e: "2026-10-04", d: "Renaissance tarot cards shown with work by modern and contemporary artists", dz: "文艺复兴塔罗牌与现当代艺术作品并置" },
      { t: "Fantasy and Reality: The Art of Johan Tobias Sergel", s: "2026-10-23", e: "2027-01-31", d: "Drawings by the 18th-century Swedish sculptor Johan Tobias Sergel", dz: "十八世纪瑞典雕塑家 Sergel 的素描作品" },
      { t: "Graphic Devotions: Late Medieval European Blockbooks", s: "2026-10-30", e: "2027-01-31", d: "Late medieval devotional books printed from carved woodblocks, before movable type", dz: "中世纪晚期木刻版宗教书籍，早于活字印刷" },
      { t: "Ragtime: Cakewalk in Pianoland", s: "2026-11-06", e: "2027-05-16", d: "American ragtime piano music, drawn from the Morgan's music collections", dz: "以摩根音乐收藏呈现美国拉格泰姆钢琴音乐" },
      { t: "William Blake: Paradise Lost", s: "2026-11-13", e: "2027-06-13", d: "William Blake's illustrations to Milton's Paradise Lost", dz: "布莱克为弥尔顿《失乐园》所作插画" }
    ] },
  { n: "Wallach Art Gallery, Columbia University", nz: "哥伦比亚大学沃拉克艺术馆", a: "Lenfest Center for the Arts, 615 West 129th Street",
    h: "Wed–Sun 12–6", hz: "周三–周日 12–18", p: "Free", pz: "免费",
    u: "https://wallach.columbia.edu/exhibitions", free: true,
    shows: [
      { t: "Children's Art Carnival in Harlem: The Making of Contemporary Artists", s: "2026-06-26", e: "2026-09-13", d: "The Harlem art school founded in 1969 and the artists who came out of it", dz: "1969 年创办的哈莱姆儿童艺术学校及其培养的艺术家" }
    ] },
  { n: "Grey Art Museum, New York University", nz: "纽约大学格雷艺术博物馆", a: "18 Cooper Square",
    h: "Tue 11–6, Wed 11–8, Thu–Fri 11–6, Sat 11–5; closed Sun–Mon",
    hz: "周二 11–18，周三 11–20，周四、周五 11–18，周六 11–17；周日与周一闭馆",
    p: "Free; suggested donation $5, free for the NYU community", pz: "免费；建议捐赠 $5，纽约大学师生免费",
    u: "https://greyartmuseum.nyu.edu/exhibitions/", free: true,
    shows: [
      { t: "by Alison Knowles: A Retrospective (1960–2022)", s: "2026-09-09", e: "2027-01-30", d: "Six decades of the Fluxus artist's scores, event pieces, prints and large participatory works", dz: "回顾激浪派艺术家六十年的乐谱、事件作品、版画与参与式装置" },
      { t: "Making Music: Helen Frankenthaler Prints from the New York University Art Collection", s: "2026-09-09", e: "2027-07-03", d: "Frankenthaler's woodcuts and etchings drawn from NYU's own collection", dz: "取自纽约大学馆藏的弗兰肯塔勒木刻与蚀刻版画" }
    ] },
  { n: "Print Center New York", nz: "纽约版画中心", a: "535 West 24th Street",
    h: "Wed–Sat 12–6", hz: "周三–周六 12–18", p: "Free", pz: "免费",
    u: "https://printcenternewyork.org/exhibitions", free: true,
    flag: "Fall exhibitions open September 17; galleries are between shows until then",
    flagz: "秋季展览 9 月 17 日开幕，此前为换展期",
    shows: [
      { t: "Parasol Press: Breaking New Ground", s: "2026-09-17", e: "2026-12-19", d: "A survey of prints published by the Parasol Press workshop, in the Jordan Schnitzer Gallery", dz: "帕拉索出版社版画作品回顾，施尼策展厅" },
      { t: "Caroline Ongpin: Passage", s: "2026-09-17", e: "2026-11-21", d: "Pop-up presentation of work by Caroline Ongpin in the East Gallery", dz: "东展厅小型展示：卡罗琳·翁平作品" },
      { t: "Mira Dayal: Nets", s: "2026-09-17", e: "2026-11-21", d: "Pop-up presentation of work by Mira Dayal in the lobby", dz: "门厅小型展示：米拉·达亚尔作品" }
    ] },
  { n: "Center for Book Arts", nz: "书籍艺术中心", a: "28 West 27th Street, 3rd Floor",
    h: "Mon–Thu 11–6, Fri–Sat 11–5", hz: "周一–周四 11–18，周五–周六 11–17", p: "Free; donations welcome",
    pz: "免费；欢迎捐赠", u: "https://centerforbookarts.org/exhibitions", free: true,
    shows: [
      { t: "Paper Cuts", s: "2026-09-10", e: "2026-12-12", d: "More than 600 zines and small-press publications from twenty-five years of independent publishing", dz: "六百余件小志与独立出版物，回顾二十五年独立出版" }
    ] },
  { n: "White Columns", nz: "白柱艺术空间", a: "91 Horatio Street",
    h: "Tue–Sat 11–6", hz: "周二–周六 11–18", p: "Free", pz: "免费",
    u: "https://whitecolumns.org/exhibitions-programming/", free: true,
    shows: [
      { t: "Mieko Meguro: Works, New York, 2009-2026", s: "2026-09-12", e: "2026-10-24", d: "Paintings and drawings made in New York between 2009 and 2026", dz: "2009 至 2026 年间在纽约创作的绘画与素描" },
      { t: "Eric Spencer: Words on my Mind", s: "2026-09-12", e: "2026-10-24", d: "Solo presentation of text-based work by Eric Spencer", dz: "埃里克·斯宾塞个展，以文字为主的作品" },
      { t: "Juliette Collet: Bobbie Cadet in the Court of the Ladybugs", s: "2026-09-12", e: "2026-10-24", d: "Solo presentation by Juliette Collet in the project space", dz: "朱丽叶·科莱个展，位于项目空间" }
    ] },
  { n: "Storefront for Art and Architecture", nz: "艺术与建筑前厅", a: "97 Kenmare Street",
    h: "Wed–Sat 12–6", hz: "周三–周六 12–18", p: "Free", pz: "免费", u: "https://storefront.nyc/program/",
    free: true,
    flag: "Gallery closed for installation; reopens with the exhibition opening September 25",
    flagz: "展厅正在布展；9 月 25 日新展开幕后重新开放",
    shows: [
      { t: "The Biography of a Building: Runik's House of Culture", s: "2026-09-25", d: "Hajde! Foundation and Petrit Halilaj on a house of culture in Runik, Kosovo", dz: "关于科索沃鲁尼克一座文化宫的展览" },
      { t: "Public Address", eText: "Through October 2027", eTextz: "至 2027 年 10 月", d: "Off-site public artwork by Alex Strada at Columbus Park in Brooklyn", dz: "亚历克斯·斯特拉达的公共艺术，布鲁克林哥伦布公园" }
    ] },
  { n: "Smack Mellon", nz: "斯马克·梅隆艺术中心", a: "92 Plymouth Street",
    h: "Wed–Sun 12–6", hz: "周三–周日 12–18", p: "Free", pz: "免费",
    u: "https://www.smackmellon.org/exhibitions/", free: true,
    flag: "Gallery is between exhibitions until September 19", flagz: "9 月 19 日前处于换展期",
    shows: [
      { t: "How We Work: Smack Mellon at 30", s: "2026-09-19", e: "2026-11-22", d: "Thirtieth-anniversary group show of artists the organization has supported", dz: "成立三十周年群展，呈现历年支持过的艺术家" }
    ] },
  { n: "Bronx Documentary Center", nz: "布朗克斯纪实摄影中心", a: "614 Courtlandt Avenue",
    h: "Thu–Fri 3–7, Sat 1–5; closed Sun–Wed", hz: "周四–周五 15–19，周六 13–17；周日–周三闭馆", p: "Free",
    pz: "免费", u: "https://www.bronxdoc.org/bronx-documentary-center/exhibits/current-exhibits/",
    free: true, flag: "Galleries are closed between exhibitions; both new shows open October 1",
    flagz: "展厅换展期闭馆；两个新展 10 月 1 日开幕",
    shows: [
      { t: "Emerging Visions: Photo Education Around the World", s: "2026-10-01", d: "Work by students from photography education programs in several countries", dz: "多国摄影教育项目学员作品展" },
      { t: "Built in the Bronx: 15 Years of the Bronx Documentary Center", s: "2026-10-01", d: "Fifteen years of the center's own photography and neighborhood work", dz: "回顾中心十五年的摄影与社区工作" }
    ] },
  { n: "Society of Illustrators / Museum of American Illustration", nz: "插画家协会 / 美国插画博物馆", a: "128 East 63rd Street",
    h: "Wed–Sat 11–5", hz: "周三–周六 11–17", p: "Adults $15; seniors and students $10",
    pz: "成人 $15；长者与学生 $10", u: "https://societyillustrators.org/exhibitions/",
    shows: [] },
  { n: "Americas Society Art Gallery", nz: "美洲协会艺术画廊", a: "680 Park Avenue",
    h: "Wed–Sat 11–6", hz: "周三–周六 11–18", p: "Free", pz: "免费",
    u: "https://www.as-coa.org/visual-arts", free: true,
    shows: [
      { t: "Telenovela", s: "2026-09-09", e: "2027-03-27", d: "Group show on the melodrama of Latin American television serials", dz: "以拉美电视连续剧的通俗剧为题的群展" },
      { t: "Flag Series: Katalina Iturralde, Banner Series 1, 2026", s: "2026-09-03", e: "2027-04-18", d: "A commissioned banner shown outside on the building's facade", dz: "委约创作的旗帜作品，展于建筑外立面" },
      { t: "Atrium Series: Gyula Kosice, Televisor Hidraulizado 2, 1956", s: "2026-09-09", e: "2027-03-27", d: "A 1956 hydraulic kinetic sculpture installed in the atrium", dz: "中庭展出 1956 年的液压动态雕塑" },
      { t: "Kelly Sinnapah Mary", s: "2027-04-14", e: "2027-07-31", d: "First solo museum exhibition by the Caribbean artist", dz: "这位加勒比艺术家的首个美术馆个展" }
    ] },
  { n: "The Africa Center", nz: "非洲中心", a: "1280 Fifth Avenue",
    h: "Tue–Sun 8–4, closed Mondays", hz: "周二–周日 8–16；周一闭馆", p: "Free", pz: "免费",
    u: "https://theafricacenter.org/exhibitions", free: true,
    shows: [
      { t: "Lines of Survival: Living, Adapting, Imagining Tomorrow", s: "2026-09-17", e: "2026-11-01", d: "Five young African photographers document how communities live with and adapt to climate change", dz: "五位非洲年轻摄影师记录社区如何面对并适应气候变化" }
    ] },
  { n: "Hunter College Art Galleries", nz: "亨特学院艺术画廊", a: "132 East 68th Street",
    h: "Leubsdorf Gallery and 205 Hudson Gallery Tue–Sat 12–6; Hunter East Harlem Gallery currently closed",
    hz: "洛布斯多夫画廊与 205 Hudson 画廊周二–周六 12–18；亨特东哈莱姆画廊目前关闭", p: "Free", pz: "免费",
    u: "https://huntercollegeartgalleries.org/calendar", free: true,
    flag: "Hunter East Harlem Gallery is currently closed; the galleries follow the academic calendar and close between terms and over the summer",
    flagz: "亨特东哈莱姆画廊目前关闭；画廊按学年安排开放，学期之间与暑期闭馆",
    shows: [
      { t: "Climates of Inequality: Stories of Environmental Injustice", s: "2026-08-31", e: "2027-02-26", d: "Community-made stories of environmental injustice gathered by a national coalition of universities", dz: "全美高校联盟合作，展出各地社区讲述的环境不公故事" }
    ] },
  { n: "Sheila C. Johnson Design Center", nz: "希拉·C·约翰逊设计中心", a: "66 Fifth Avenue",
    h: "Open during The New School's university building hours", hz: "开放时间与新学院教学楼开放时间一致", p: "Free",
    pz: "免费", u: "https://parsons.edu/sheilacjohnsondesigncenter/exhibitions/", free: true,
    flag: "No exhibition is on view between terms; the last show closed July 26, 2026 and no autumn show has been announced",
    flagz: "学期之间无展览；上一个展览已于 2026 年 7 月 26 日结束，秋季展尚未公布",
    shows: [] },
  { n: "Bard Graduate Center Gallery", nz: "巴德研究生中心展览馆", a: "18 West 86th Street",
    h: "Tue 11–5, Wed 11–6, Thu 11–5, Fri 11–8, Sat–Sun 11–5, closed Mondays; closed between exhibitions",
    hz: "周二 11–17，周三 11–18，周四 11–17，周五 11–20，周六、周日 11–17；周一闭馆；展览之间闭馆",
    p: "Adults $15, seniors $12, students $6; free all day Fridays; free for NYC Culture Pass holders",
    pz: "成人 $15，长者 $12，学生 $6；周五全天免费；纽约文化通行证持有者免费", u: "https://www.bgc.bard.edu/gallery",
    flag: "The gallery is closed until September 18, 2026, when the next exhibition opens",
    flagz: "展览馆闭馆至 2026 年 9 月 18 日，届时新展开幕",
    shows: [
      { t: "Goddesses in the Machine: Fashion in American Silent Film", s: "2026-09-18", e: "2027-01-03", d: "Costume and dress from American silent cinema and the designers who made it", dz: "美国默片中的戏服与时装，以及背后的设计者" },
      { t: "Philip Webb: Truth in Beauty", s: "2027-09-17", e: "2028-01-09", d: "The Arts and Crafts architect and designer who worked alongside William Morris", dz: "与威廉·莫里斯合作的工艺美术运动建筑师与设计师" }
    ] },
  { n: "Pratt Manhattan Gallery", nz: "普瑞特曼哈顿画廊", a: "144 West 14th Street",
    h: "Mon–Sat 11–6", hz: "周一–周六 11–18", p: "Free", pz: "免费",
    u: "https://www.pratt.edu/about/exhibitions/pratt-manhattan-gallery/", free: true,
    shows: [
      { t: "Like everything alive that we try to hold forever", s: "2026-09-25", e: "2026-12-19", d: "Pratt's autumn exhibition at its Manhattan gallery; opening reception September 24", dz: "普瑞特曼哈顿画廊秋季展，9 月 24 日举行开幕酒会" }
    ] },
  { n: "The Amie and Tony James Gallery, CUNY Graduate Center", nz: "艾米与托尼·詹姆斯画廊（纽约市立大学研究生中心）", a: "365 Fifth Avenue",
    h: "Tue–Fri 12–6, closed Sat–Mon", hz: "周二–周五 12–18；周六至周一闭馆", p: "Free", pz: "免费",
    u: "https://jamesgallery.gc.cuny.edu/", free: true,
    shows: [
      { t: "ART/WORK: The Practice and Politics of CETA and the Arts, 1974-1981", s: "2026-08-20", e: "2026-12-12", d: "How a 1970s federal jobs programme put more than 30,000 artists on public payrolls", dz: "1970 年代联邦就业计划如何让三万多名艺术家进入公共雇员名册" },
      { t: "In the Shadow of Afong Moy", s: "2027-01-26", eText: "July 2027", eTextz: "至 2027 年 7 月", d: "Upcoming exhibition on the legacy of Afong Moy, an early Chinese woman in America", dz: "关于早期旅美华人女性阿芳妹历史遗产的展览" }
    ] },
  { n: "Flushing Town Hall", nz: "法拉盛市政厅艺术中心", a: "137-35 Northern Blvd, Flushing",
    h: "Gallery hours are not published; call ahead", hz: "官网未公布展厅开放时间，建议先致电确认", p: "Not published",
    pz: "未公布", u: "https://www.flushingtownhall.org/gallery",
    shows: [] }
]},

{ g: "Science & Nature", gz: "科学与自然",
  note: "The natural history and children's museums, plus the two botanical gardens, whose seasonal installations are worth planning a trip around.",
  notez: "自然史与儿童博物馆，以及两座植物园——它们的季节性装置值得专程安排。", items: [
  { n: "American Museum of Natural History", nz: "美国自然历史博物馆", a: "200 Central Park West",
    h: "Daily 10–5:30; closed Thanksgiving and Christmas", hz: "每日 10–17:30；感恩节与圣诞节闭馆",
    p: "Adults $37, seniors $30, students $22; $43 with one ticketed exhibition; New York State residents pay what you wish with ID; children free",
    pz: "成人 $37，老年人 $30，学生 $22；含一个特展 $43；纽约州居民凭证件随意付费；儿童免费", u: "https://www.amnh.org/exhibitions",
    shows: [
      { t: "Impact: The End of the Age of Dinosaurs", d: "A before-and-after look at the asteroid impact that ended the dinosaurs", dz: "小行星撞击前后地球生命的对比展示" },
      { t: "For the Win: Objects of Sports Excellence", d: "Seventy objects of athletic greatness from more than fifteen sports", dz: "来自十五项以上运动的七十件体育珍品" },
      { t: "Goal Zone", s: "2026-05-18", e: "2026-09-13", d: "Soccer simulators and table-top challenges, tied to the World Cup", dz: "配合世界杯的足球模拟器与桌上挑战" },
      { t: "The Changing Museum", s: "2025-06-18", e: "2026-09-13", d: "How this museum has represented cultures, past, present and future", dz: "本馆如何呈现各地文化的过去、现在与未来" },
      { t: "Invisible Worlds", eText: "Long-term", eTextz: "长期", d: "A 360-degree immersive room in the Gilder Center; extra ticket needed", dz: "吉尔德中心的 360 度沉浸空间，需另购票" },
      { t: "Encounters in the Milky Way", eText: "Long-term", eTextz: "长期", d: "The Hayden Planetarium space show on worlds in our solar system", dz: "海登天文馆太空秀，讲述太阳系中的各个天体" },
      { t: "Davis Family Butterfly Vivarium", eText: "Permanent", eTextz: "常设", d: "A year-round walk-through gallery with about eighty butterfly species", dz: "全年开放的步入式蝴蝶馆，约八十个品种" }
    ] },
  { n: "New York Hall of Science", nz: "纽约科学馆", a: "47-01 111th Street",
    h: "Tue–Sun 10–5, last entry 4", hz: "周二–周日 10–17，最晚入场 16:00",
    p: "General admission adults $22, children/students/seniors $19; NYSCI Plus $33/$30; free Fridays 2–5",
    pz: "普通门票 成人 $22，儿童/学生/老年人 $19；NYSCI Plus 套票 $33/$30；周五 14:00–17:00 免费",
    u: "https://nysci.org/exhibits/",
    flag: "Closed August 31 – September 15, 2026; reopens Wednesday, September 16.",
    flagz: "2026 年 8 月 31 日至 9 月 15 日闭馆，9 月 16 日（周三）重新开放。",
    shows: [
      { t: "CityWorks", eText: "Permanent", eTextz: "常设", d: "A new interactive exhibit on the hidden systems that keep a city running", dz: "关于城市隐形运作系统的互动展区" },
      { t: "Connected Worlds", eText: "Permanent", eTextz: "常设", d: "A room-size animated ecosystem steered by visitors' own movements", dz: "以肢体动作操控的巨幅动画生态系统" },
      { t: "Mathematica (Reimagined)", eText: "Permanent", eTextz: "常设", d: "The Eameses' classic maths exhibit, rebuilt with hands-on models", dz: "伊姆斯夫妇的经典数学展区，重新制作" },
      { t: "Design Lab", eText: "Permanent", eTextz: "常设", d: "Open-ended engineering challenges with real materials, changing weekly", dz: "每周更换题目的动手工程挑战区" },
      { t: "The Big Bubble Experiment", eText: "Permanent", eTextz: "常设", d: "Hands-on bubble play with tools for blowing, stretching and popping", dz: "动手玩泡泡的实验区，可吹、拉伸与戳破" },
      { t: "Rocket Park", eText: "Permanent", eTextz: "常设", d: "Real NASA rockets from the 1964–65 World's Fair, outdoors", dz: "户外陈列 1964–65 年世博会的 NASA 真实火箭" },
      { t: "Finding the Window", eText: "Long-term", eTextz: "长期", d: "A hanging glass installation by Romina Gonzales in the Rotunda", dz: "罗米娜·冈萨雷斯在圆厅的悬挂玻璃装置" }
    ] },
  { n: "National Museum of Mathematics (MoMath)", nz: "美国国家数学博物馆", a: "635 Sixth Avenue",
    h: "Daily 10–5; closed Thanksgiving; closes 2:30 one Wednesday a month",
    hz: "每日 10–17；感恩节闭馆；每月有一个周三 14:30 提前闭馆",
    p: "Adults $26 at the door, $25 online; children 12 and under, students and seniors $21/$20; free under 2; free Play afternoon once a month",
    pz: "成人 现场 $26、网购 $25；12 岁以下儿童、学生及老年人 $21/$20；2 岁以下免费；每月一个下午免费开放",
    u: "https://momath.org/composite-gallery/",
    flag: "MoMath has moved to 635 Sixth Avenue (at 19th Street); the old East 26th Street building is closed.",
    flagz: "已迁至 635 Sixth Avenue（19 街口），原 East 26th Street 馆址已关闭。",
    shows: [
      { t: "Analytical Expressionism: The Art of Michael Schultheis", eText: "Currently featured", eTextz: "正在展出", d: "Paintings and sculpture built from equations, curves and Venn diagrams", dz: "以方程、曲线与文氏图创作的绘画与雕塑" },
      { t: "Mathematics and the Art of M.C. Escher", s: "2026-10-01", d: "Over sixty Escher prints, drawings and woodblocks, and the maths in them", dz: "六十余件埃舍尔版画、素描与原版木板，解析其中数学" }
    ] },
  { n: "Children's Museum of Manhattan", nz: "曼哈顿儿童博物馆", a: "212 West 83rd Street",
    h: "Tue–Sun 10–5", hz: "周二–周日 10–17",
    p: "Adults and children $18 at the door, $17 online; seniors $15/$14; under 1 free",
    pz: "成人与儿童 现场 $18、网购 $17；老年人 $15/$14；1 岁以下免费", u: "https://cmom.org/experiences/",
    shows: [
      { t: "PlayWorks", eText: "Permanent", eTextz: "常设", d: "A play-and-learning floor built for children from birth to age four", dz: "为 0–4 岁儿童设计的游戏学习空间" },
      { t: "Superpowered Metropolis: Early Learning City", eText: "Permanent", eTextz: "常设", d: "A comic-book version of New York to climb through, ages birth to six", dz: "可攀爬的漫画版纽约城，适合 0–6 岁" },
      { t: "Inside Art: Create, Climb, Collaborate", eText: "Permanent", eTextz: "常设", d: "Artist-made pieces children climb on and build with, ages three to ten", dz: "可攀爬与搭建的艺术家作品，适合 3–10 岁" },
      { t: "Adventures with Dora and Diego", eText: "Permanent", eTextz: "常设", d: "Animal-rescue play based on the television series, ages two to six", dz: "取材自动画剧集的动物救援游戏，适合 2–6 岁" },
      { t: "Dynamic H2O", eText: "Permanent", eTextz: "常设", d: "Outdoor water exhibit about the city's water system; seasonal, weather-dependent", dz: "户外水展区，讲解纽约供水系统；季节性且视天气开放" },
      { t: "Superheroine La Borinqueña", eText: "Permanent", eTextz: "常设", d: "The Puerto Rican superhero from Edgardo Miranda-Rodriguez's graphic novels", dz: "源自米兰达-罗德里格斯漫画的波多黎各女超级英雄" }
    ] },
  { n: "Brooklyn Children's Museum", nz: "布鲁克林儿童博物馆", a: "145 Brooklyn Avenue",
    h: "Wed–Sun 10–5, last entry 4:50; closed Mon–Tue", hz: "周三–周日 10–17，最晚入场 16:50；周一、周二闭馆",
    p: "$15 per person; free Thursdays 2–5", pz: "每人 $15；周四 14:00–17:00 免费",
    u: "https://www.brooklynkids.org/exhibits/",
    shows: [
      { t: "Summer Scramble", s: "2026-07-11", d: "A giant breakfast plate to climb, with a two-person fried-egg ride", dz: "巨型早餐盘攀爬区，含双人煎蛋乘骑" },
      { t: "Empire Skate of Mind", s: "2026-09-26", d: "Rooftop roller rink honouring Crown Heights' Empire Roller Rink", dz: "屋顶轮滑场，致敬皇冠高地的帝国轮滑场" },
      { t: "Totally Tots", eText: "Permanent", eTextz: "常设", d: "Nine sensory play areas for the youngest visitors: water, sand, music, blocks", dz: "九个感官游戏区：水、沙、音乐、积木，适合最年幼访客" },
      { t: "Neighborhood Nature", eText: "Permanent", eTextz: "常设", d: "Brooklyn's own ecologies, with a cork garden, dioramas and an indoor beach", dz: "布鲁克林本地生态：软木花园、生境立体模型与室内沙滩" },
      { t: "The NEST", eText: "Permanent", eTextz: "常设", d: "A rooftop playscape to climb and explore, built by Brooklyn studio Tri-Lox", dz: "由布鲁克林工作室 Tri-Lox 打造的屋顶攀爬游戏景观" },
      { t: "World Brooklyn", eText: "Permanent", eTextz: "常设", d: "A child-size Brooklyn streetscape of shops to play in", dz: "儿童尺寸的布鲁克林商铺街景，可进入游戏" }
    ] },
  { n: "Staten Island Children's Museum", nz: "史泰登岛儿童博物馆", a: "1000 Richmond Terrace, Building M",
    h: "Wed–Sun 10–5; members-only hour Wed–Fri 9–10", hz: "周三–周日 10–17；周三–周五 9–10 会员专属时段",
    p: "Adults $10, children $10; free for children under 1 and for members",
    pz: "成人 $10，儿童 $10；1 岁以下及会员免费", u: "https://sichildrensmuseum.org/exhibits/",
    flag: "Closed September 9–18, 2026 for the annual Fall Fix-Up.",
    flagz: "2026 年 9 月 9 日至 18 日因年度整修闭馆。",
    shows: [
      { t: "Explore Staten Island", sText: "Set to open in October 2026", sTextz: "预计 2026 年 10 月开放", d: "Hands-on stations on the island's wetlands, bridges, rangers and oysters", dz: "湿地、桥梁、护林员与牡蛎主题的互动展区" },
      { t: "Block Harbor", eText: "Permanent", eTextz: "常设", d: "A pirate ship and giant building blocks for children aged 0–5", dz: "海盗船与巨型积木，适合 0–5 岁" },
      { t: "Bugs & Other Arthropods", eText: "Permanent", eTextz: "常设", d: "A human-size ant hill, an exoskeleton to try on and an insect orchestra", dz: "真人大小蚁丘、可试穿的外骨骼与昆虫乐队" },
      { t: "House About It", eText: "Permanent", eTextz: "常设", d: "A two-storey unfinished house showing studs, pipes and wiring, plus a crane", dz: "两层毛坯房，可见龙骨、管道与电线，并有吊车" },
      { t: "Ladder 11", eText: "Permanent", eTextz: "常设", d: "A 1941 Seagrave fire truck with gear, a sliding pole and hoses", dz: "1941 年 Seagrave 消防车，可试装备、滑杆与水带" },
      { t: "Portia's Playhouse", eText: "Permanent", eTextz: "常设", d: "A working theatre with costumes, lighting, sound and a puppet stage", dz: "可实际演出的剧场，含戏服、灯光、音效与木偶台" },
      { t: "Sea of Boats", eText: "Permanent", eTextz: "常设", d: "An outdoor soft-surface play harbour with boats, a lighthouse and water play", dz: "户外软地面港湾游戏区，有船、灯塔与水上游戏" }
    ] },
  { n: "New York Botanical Garden", nz: "纽约植物园", a: "2900 Southern Boulevard",
    h: "Tue–Sun 10–6, and select Monday holidays", hz: "周二–周日 10–18；部分周一公共假日开放",
    p: "All-Garden Pass weekdays adults $35, seniors/students $31, children $15; weekends $39/$35/$17; under 2 free; NYC-resident Grounds Access Pass $15, free to NYC residents on Wednesdays",
    pz: "全园通票 平日 成人 $35、老年人/学生 $31、儿童 $15；周末 $39/$35/$17；2 岁以下免费；纽约市居民户外通票 $15，周三纽约市居民免费",
    u: "https://www.nybg.org/whats-on/",
    shows: [
      { t: "Flower Power", s: "2026-05-23", e: "2026-10-18", d: "A garden-wide flower show with 1960s-inspired outdoor installations", dz: "全园花展，配以 1960 年代主题户外装置" },
      { t: "Art & Photography of the '60s", e: "2026-10-18", d: "Warhol's Flowers with prints, photographs and fashion of the 1960s", dz: "沃霍尔《花》及 1960 年代版画、摄影与时装" },
      { t: "Growing America", s: "2026-07-04", e: "2026-10-18", d: "A Mertz Library show on plants and the making of the United States", dz: "梅尔茨图书馆展览：植物与美国的形成" },
      { t: "Dig! Plant! Grow! Pollinator Pals", s: "2026-09-01", e: "2026-09-27", d: "Family activities about bees, butterflies and other pollinators", dz: "关于蜜蜂、蝴蝶等传粉者的亲子活动" },
      { t: "Before New York: A Traveling Pop-Up Exhibition", s: "2026-04-25", e: "2026-11-15", d: "A pop-up on the landscape Henry Hudson met in 1609, touring city sites", dz: "巡回快闪展，重现 1609 年哈德逊所见的自然景观" },
      { t: "Summer of Moomin", s: "2026-05-23", e: "2026-09-13", d: "Tove Jansson's Moomin characters sited around the grounds", dz: "托芙·扬松笔下的姆明角色散布园中" },
      { t: "Holiday Train Show", s: "2026-11-14", e: "2027-01-10", d: "Model trains running past New York landmarks built from bark and seeds", dz: "模型火车穿行于树皮与种子制成的纽约地标之间" }
    ] },
  { n: "Brooklyn Botanic Garden", nz: "布鲁克林植物园", a: "990 Washington Avenue",
    h: "September: Tue–Thu 10–7, Fri–Sun 10–6; October: Tue–Sun 10–6; closed Mondays",
    hz: "9 月：周二–周四 10–19，周五–周日 10–18；10 月：周二–周日 10–18；周一闭园",
    p: "Adults $22, seniors (65+) and students 12+ $16; children under 12 free; pay what you wish on winter weekdays, December–February",
    pz: "成人 $22，65 岁以上及 12 岁以上学生 $16；12 岁以下免费；12 月至 2 月平日随意付费",
    u: "https://www.bbg.org/visit/calendar/category/168",
    flag: "The Eastern Parkway entrance and Osborne Garden are temporarily closed; enter at 455 Flatbush Avenue or 990 Washington Avenue.",
    flagz: "东大道入口与奥斯本花园暂时关闭；请由 455 Flatbush Avenue 或 990 Washington Avenue 入园。",
    shows: [
      { t: "Ancestral Ecologies", s: "2026-05-23", e: "2026-10-25", d: "Four outdoor installations by Olalekan Jeyifous and AD—WO on animist ecology", dz: "杰伊福斯与 AD—WO 的四组户外装置，探讨万物有灵的生态观" },
      { t: "Block by Block", s: "2026-05-23", e: "2026-10-25", d: "Exhibits marking thirty years of the Greenest Block in Brooklyn contest", dz: "布鲁克林最绿街区评选三十周年展" },
      { t: "Block by Block: Streetscapes", s: "2026-05-23", e: "2026-10-25", d: "Stoops and streets of winning Brooklyn blocks re-created on the grounds", dz: "在园中重现获奖街区的门廊与街景" },
      { t: "Brooklyn's Greening Heroes", s: "2026-05-23", e: "2026-10-25", d: "Portraits and first-person stories from Brooklyn residents who garden", dz: "布鲁克林园艺居民的肖像与自述" },
      { t: "We Can't Dream Alone", sText: "September 2026", sTextz: "2026 年 9 月", eText: "October 2026", eTextz: "2026 年 10 月", d: "Four paintings by Brooklyn-based artist Madjeen Isaac", dz: "布鲁克林艺术家马吉恩·艾萨克的四幅绘画" }
    ] },
  { n: "Wave Hill", nz: "韦弗山庄园", a: "4900 Independence Avenue",
    h: "Tue–Sun 10–5:30; Glyndor Gallery 10–4:30 (closed 12–12:30); closed Mondays",
    hz: "周二–周日 10–17:30；格林多画廊 10–16:30（12:00–12:30 关闭）；周一闭馆",
    p: "Adults $10, students & seniors 65+ $6, children 6+ $4; free all day Thursdays; higher prices on special-event weekends",
    pz: "成人 $10，学生与 65 岁以上 $6，6 岁以上儿童 $4；周四全天免费；特别活动周末票价上浮",
    u: "https://www.wavehill.org/discover/arts/exhibitions",
    shows: [
      { t: "Dots and Loops: Jen Chen-su Huang, Rita Maas, and Audra Wolowiec", s: "2026-07-21", e: "2027-01-03", d: "A three-artist show of contemporary work made for Wave Hill's garden setting", dz: "三位艺术家的当代艺术联展，为园景语境创作" },
      { t: "Noormah Jamal: Blooms", s: "2026-08-04", e: "2026-10-18", d: "A solo project by artist Noormah Jamal in the garden's exhibition spaces", dz: "艺术家 Noormah Jamal 在园区展厅的个人项目" },
      { t: "Angel Nevarez & Valerie Tevere: As far as the ear can hear", s: "2026-08-29", e: "2026-11-29", d: "A duo project by Nevarez and Tevere, artists who work with sound and listening", dz: "以声音与聆听为媒介的双人艺术家项目" },
      { t: "Tarik Jeremiah Brown: Hush Harbor", s: "2026-08-29", e: "2026-10-11", d: "A solo project by artist Tarik Jeremiah Brown", dz: "艺术家 Tarik Jeremiah Brown 的个人项目" },
      { t: "Camille Cooper: SHOWPIECE", s: "2026-08-29", e: "2026-10-11", d: "A solo project by artist Camille Cooper", dz: "艺术家 Camille Cooper 的个人项目" },
      { t: "Melanie Brewster: A Metaphysical Quest for the Deepest Backbend", s: "2026-10-17", e: "2026-11-29", d: "An upcoming solo project by artist Melanie Brewster", dz: "艺术家 Melanie Brewster 即将开幕的个人项目" }
    ] }
]},

{ g: "History & Culture", gz: "历史与文化",
  note: "The city telling its own story, through the historical societies, the research libraries, and the museums that grew out of particular neighbourhoods.",
  notez: "这座城市讲述自己的故事：历史学会、研究图书馆，以及从各个社区里长出来的博物馆。", items: [
  { n: "Museum of the City of New York", nz: "纽约市博物馆", a: "1220 Fifth Avenue",
    h: "Mon–Fri 10–5, Sat–Sun 10–6, Wed until 9", hz: "周一–周五 10–17，周六–周日 10–18，周三至 21",
    p: "Adults $23, seniors 65+ $18, students 19+ $14; free 18 and under; NYC residents pay what you can; free for everyone Wednesdays",
    pz: "成人 $23，65 岁以上 $18，19 岁以上学生 $14；18 岁及以下免费；纽约市居民随意付费；周三全民免费",
    u: "https://www.mcny.org/exhibitions",
    shows: [
      { t: "Another Wonderland", e: "2026-10-12", d: "Restored New Deal murals of Alice in Wonderland painted for a children's hospital ward", dz: "修复后的新政时期《爱丽丝》壁画，原绘于儿童病房" },
      { t: "The Occupied City", eText: "Ongoing", eTextz: "常设", d: "An immersive third-floor walk through New York under British occupation", dz: "三楼沉浸式展厅，重现英军占领下的纽约" },
      { t: "He Built This City", eText: "Ongoing", eTextz: "常设", d: "Joe Macken's huge handmade scale model of New York City", dz: "Joe Macken 手工制作的巨型纽约城市模型" },
      { t: "New York at Its Core", eText: "Ongoing", eTextz: "常设", d: "The museum's main survey of how the city rose and where it is heading", dz: "馆内主线常设展，梳理纽约的兴起与未来" },
      { t: "Halumii Ktapihna", s: "2026-09-25", d: "The Lenape/Lunaapeew, the region's original people, and their living cultures today", dz: "本地原住民莱纳佩人的历史与当代文化" },
      { t: "Raise Your Voice", s: "2026-09-25", d: "More than 250 years of New York activism, told through the tactics protesters used", dz: "以抗争手法为线，梳理纽约 250 余年社运史" },
      { t: "Gingerbread NYC", s: "2026-11-06", d: "The annual wintertime display of New York landmarks rebuilt in gingerbread", dz: "年度冬季展，用姜饼重现纽约地标" },
      { t: "The Photography Triennial: After Dark", s: "2026-11-20", d: "Contemporary photographers on New York nightlife, in the museum's triennial", dz: "摄影三年展，聚焦纽约的夜间生活" }
    ] },
  { n: "New York Historical", nz: "纽约历史博物馆", a: "170 Central Park West",
    h: "Tue–Sun 11–5, Fri until 8; closed Mondays", hz: "周二–周日 11–17，周五至 20；周一闭馆",
    p: "Adults $24, seniors/educators/active military $19, students $13, kids 5–13 $6; free under 5; pay as you wish Fridays 5–8",
    pz: "成人 $24，长者/教师/现役军人 $19，学生 $13，5–13 岁 $6；5 岁以下免费；周五 17:00–20:00 随意付费",
    u: "https://www.nyhistory.org/exhibitions",
    shows: [
      { t: "Betye Saar's Black Dolls", s: "2026-05-08", e: "2026-10-04", d: "More than 100 Black dolls collected by artist Betye Saar, a promised gift", dz: "艺术家 Betye Saar 收藏的百余件黑人玩偶" },
      { t: "Revolutionary Women", s: "2026-05-29", e: "2026-10-25", d: "How the Revolutionary War changed New York's women, and how they changed it", dz: "独立战争如何改变纽约女性，女性又如何影响战局" },
      { t: "Democracy Matters", s: "2026-06-18", e: "2026-11-29", d: "Art, artifacts and documents on the American ideals of liberty and equality", dz: "以艺术品与文献探讨自由与平等的美国理想" },
      { t: "Remembering September 11, 2001: 25 Years Later", s: "2026-08-24", e: "2026-10-25", d: "A small first-floor treasures case marking the 25th anniversary of the attacks", dz: "一楼小型展柜，纪念九一一事件 25 周年" },
      { t: "Art of the Street: Selections from the Elie and Sarah Hirschfeld Collection", s: "2026-08-28", e: "2027-01-17", d: "Works inspired by New York streets, from subway walls to tenement halls", dz: "受纽约街头启发的作品，从地铁车厢到廉租公寓" },
      { t: "Irish Literature: History & Myth Since 1798", s: "2026-09-18", e: "2027-01-17", d: "Irish writing since 1798 and its role in politics and national myth", dz: "1798 年以来的爱尔兰文学及其政治与神话角色" },
      { t: "You Should Be Dancing: New York, 1976 and Beyond", s: "2026-10-02", e: "2027-04-04", d: "The creative and celebratory city that grew out of New York's 1970s crisis", dz: "1970 年代危机中的纽约创造力与狂欢文化" },
      { t: "John Quidor: New York Stories", s: "2026-10-30", e: "2027-04-04", d: "Paintings by the overlooked 19th-century artist of Hudson Valley folklore", dz: "十九世纪画家 Quidor 的哈德逊河谷传说题材画作" }
    ] },
  { n: "New York Public Library, Stephen A. Schwarzman Building", nz: "纽约公共图书馆斯蒂芬·A·施瓦茨曼大楼", a: "476 Fifth Avenue",
    h: "Mon & Thu–Sat 10–6, Tue–Wed 10–8, Sun 1–5", hz: "周一、周四–周六 10–18，周二–周三 10–20，周日 13–17",
    p: "Free", pz: "免费", u: "https://www.nypl.org/events/exhibitions", free: true,
    shows: [
      { t: "Polonsky Exhibition of The New York Public Library's Treasures", eText: "Long-term", eTextz: "长期", d: "Around 250 rotating treasures from the Library's collections, free in Gottesman Hall", dz: "戈特斯曼厅免费展出约 250 件轮换馆藏珍品" }
    ] },
  { n: "Schomburg Center for Research in Black Culture", nz: "尚伯格黑人文化研究中心", a: "515 Malcolm X Boulevard",
    h: "Mon, Thu–Sat 10–6, Tue–Wed 10–8; closed Sundays", hz: "周一、周四–周六 10–18，周二–周三 10–20；周日闭馆",
    p: "Free", pz: "免费", u: "https://www.nypl.org/locations/schomburg/exhibitions", free: true,
    shows: [
      { t: "To Uncover and Reveal to the World: Arturo Schomburg's Library", s: "2026-05-07", e: "2026-12-05", d: "Books and papers from Arturo Schomburg's own library, the seed of the collection", dz: "阿图罗·尚伯格的个人藏书，中心馆藏的起点" }
    ] },
  { n: "Lower East Side Tenement Museum", nz: "下东城廉租公寓博物馆", a: "103 Orchard Street",
    h: "Mon–Thu 10–5, Fri–Sun 10–6", hz: "周一–周四 10–17，周五–周日 10–18",
    p: "$30 per person per tour; members free", pz: "每人每场导览 $30；会员免费",
    u: "https://www.tenement.org/tours/",
    flag: "The restored apartments can only be seen on a timed guided tour; tours sell out, so book ahead",
    flagz: "复原公寓只能随定时导览参观，场次常售罄，请提前预订",
    shows: [] },
  { n: "Museum of Jewish Heritage – A Living Memorial to the Holocaust", nz: "犹太传统博物馆——大屠杀生命纪念馆", a: "36 Battery Place",
    h: "Open Wed–Fri and Sun, closed Mon, Tue and Sat; Thursdays open late until 8",
    hz: "周三–周五、周日开放，周一、周二、周六闭馆；周四延长至 20:00",
    p: "Adults $18; free Thursdays 4–8; free for Holocaust survivors, military, first responders and NYC public-school students",
    pz: "成人 $18；周四 16:00–20:00 免费；大屠杀幸存者、军人、急救人员及纽约市公校学生免费", u: "https://mjhnyc.org/exhibitions/",
    shows: [
      { t: "The Holocaust: What Hate Can Do", eText: "Ongoing", eTextz: "常设", d: "The museum's core Holocaust history exhibition, with over 1,000 objects and survivor testimony", dz: "馆内核心大屠杀史展，逾千件实物与幸存者证言" },
      { t: "Courage to Act: Rescue in Denmark", eText: "Ongoing", eTextz: "常设", d: "The 1943 Danish rescue of Jews, built for visitors as young as nine", dz: "1943 年丹麦营救犹太人，面向九岁以上观众" },
      { t: "Art of Freedom: The Life & Work of Arthur Szyk", eText: "Ongoing", eTextz: "常设", d: "Illustrations and anti-fascist political cartoons by Polish-Jewish artist Arthur Szyk", dz: "波兰犹太艺术家 Arthur Szyk 的插画与反法西斯漫画" },
      { t: "Andy Goldsworthy's Garden of Stones", eText: "Ongoing", eTextz: "常设", d: "An outdoor memorial garden of boulders with oak saplings growing out of them", dz: "户外纪念花园，巨石中长出橡树幼苗" }
    ] },
  { n: "Museum of Chinese in America", nz: "美国华人博物馆", a: "215 Centre Street",
    h: "Wed–Sat 11–6, Sun 11–4; closed Mon and Tue", hz: "周三–周六 11–18，周日 11–16；周一、周二闭馆",
    p: "Adults $15, seniors 55+/students/visitors with disabilities $10; free under 12; NYC residents pay what you wish in person; flex ticket $20",
    pz: "成人 $15，55 岁以上/学生/残障人士 $10；12 岁以下免费；纽约市居民现场随意付费；灵活票 $20",
    u: "https://www.mocanyc.org/calendar/",
    shows: [
      { t: "With a Single Step", eText: "Ongoing", eTextz: "常设", d: "The museum's core exhibition on the history of Chinese people in America", dz: "馆内核心常设展，讲述美国华人历史" },
      { t: "Ed Young's Bright Worlds: Gesture and Feeling in 60 Years of Picture Books for Children", s: "2026-05-14", e: "2027-01-24", d: "Original artwork from six decades of picture books by illustrator Ed Young", dz: "插画家杨志成六十年绘本创作原作" }
    ] },
  { n: "Museum at Eldridge Street", nz: "艾德里奇街博物馆", a: "12 Eldridge Street",
    h: "Sun–Fri 10–5; closed Saturdays", hz: "周日–周五 10–17；周六闭馆",
    p: "Adults $15, students & seniors $10, children 5–17 $8; free under 5 and for IDNYC holders; pay what you wish Mondays and Fridays",
    pz: "成人 $15，学生与长者 $10，5–17 岁儿童 $8；5 岁以下及 IDNYC 持卡人免费；周一、周五随意付费",
    u: "https://www.eldridgestreet.org/exhibitions/",
    flag: "Closes early or shuts on several Jewish holidays - check the special-hours list before travelling",
    flagz: "多个犹太节日提前闭馆或全天闭馆，出行前请查看特别开放时间",
    shows: [
      { t: "Lighting the World: Menorahs Around the Globe", sText: "December 2018", sTextz: "2018 年 12 月", eText: "Present", eTextz: "至今", d: "Hanukkah menorahs from Jewish communities worldwide, shown in the 1887 synagogue", dz: "世界各地犹太社区的光明节烛台，陈列于 1887 年会堂" }
    ] },
  { n: "National Museum of the American Indian – New York", nz: "美国国家印第安人博物馆纽约馆（乔治·古斯塔夫·海耶中心）", a: "1 Bowling Green",
    h: "Daily 10–5; closed December 25", hz: "每日 10–17；12 月 25 日闭馆", p: "Free", pz: "免费",
    u: "https://americanindian.si.edu/visit/newyork", free: true,
    shows: [
      { t: "Infinity of Nations: Art and History in the Collections of the National Museum of the American Indian", eText: "Long-term", eTextz: "长期", d: "More than 700 objects surveying Native art and history across the Americas", dz: "逾 700 件展品，纵览美洲原住民艺术与历史" },
      { t: "Native New York", eText: "Long-term", eTextz: "长期", d: "How Haudenosaunee, Lenape and Long Island Native nations shaped the region", dz: "豪德诺索尼、莱纳佩等原住民族如何塑造纽约" }
    ] },
  { n: "National September 11 Memorial & Museum", nz: "国家九一一纪念馆与博物馆", a: "180 Greenwich Street",
    h: "Museum Wed–Mon 9–7, last entry 5:30, plus many Tuesdays; Memorial plaza daily 8–8",
    hz: "博物馆 周三–周一 9–19，17:30 停止入场，部分周二亦开放；户外纪念广场 每日 8–20",
    p: "Museum $24–$36 depending on date; free for 9/11 family members, members and 9/11 community members; free 4–7 on the first Sunday of each month for people who live, work or study in the New York area; the outdoor Memorial is always free",
    pz: "博物馆 $24–$36（随日期浮动）；遇难者家属、会员及九一一社群成员免费；每月第一个周日 16:00–19:00 对在纽约地区居住、工作或就学者免费；户外纪念广场始终免费",
    u: "https://www.911memorial.org/visit/museum/exhibitions",
    flag: "Museum entry is by advance timed ticket; the outdoor Memorial needs no ticket",
    flagz: "博物馆需提前预约定时门票；户外纪念广场无需门票",
    shows: [
      { t: "September 11, 2001", eText: "Permanent", eTextz: "常设", d: "The core historical exhibition: the day itself, what led to it, and the aftermath", dz: "核心历史展：事发当日、历史背景与后续影响" },
      { t: "In Memoriam", eText: "Permanent", eTextz: "常设", d: "Memorial exhibition for the 2,977 killed in 2001 and six killed in the 1993 bombing", dz: "纪念展：2001 年 2977 名与 1993 年 6 名遇难者" },
      { t: "Faces of Ground Zero: Photographs by Joe McNally", eText: "Long-term", eTextz: "长期", d: "Large-format portraits of rescue and recovery workers, in the North Tower excavation", dz: "北塔基坑内展出的救援与清理人员大幅肖像" },
      { t: "Dust: Illness and Advocacy", eText: "Open now", eTextz: "正在展出", d: "The toxic dust after the attacks and the fight for survivors' health care", dz: "灾后有毒粉尘与幸存者健康权益之争" },
      { t: "Responding In Ink: Comic Books, Graphic Novels, and 9/11", eText: "Open now", eTextz: "正在展出", d: "How comic artists and graphic novelists have responded to the attacks", dz: "漫画与图像小说创作者对九一一的回应" },
      { t: "The World's Game: Soccer and 9/11", eText: "Through Fall 2026", eTextz: "至 2026 年秋", d: "How soccer responded to the attacks, timed to the 2026 World Cup", dz: "足球界对九一一的回应，呼应 2026 年世界杯" },
      { t: "In Their Honor: 25 Years of 9/11-Inspired Service", sText: "Opening September 2026", sTextz: "2026 年 9 月开幕", d: "Twenty-five years of volunteering and public service prompted by the attacks", dz: "二十五年来因九一一而生的志愿与公共服务" },
      { t: "Our Flag Was Still There", eText: "Through February 2028", eTextz: "至 2028 年 2 月", d: "American flags and related objects, marking the nation's 250th anniversary", dz: "美国国旗及相关物件，纪念建国 250 周年" }
    ] },
  { n: "Intrepid Museum", nz: "无畏号博物馆", a: "Pier 86, W 46th St & 12th Ave",
    h: "Mon–Fri 10–5, Sat–Sun and holidays 10–6; last entry one hour before closing; closed Thanksgiving and Christmas Day",
    hz: "周一–周五 10–17，周六、周日及节假日 10–18，闭馆前一小时停止入场；感恩节与圣诞节闭馆",
    p: "Adults $33, seniors 62+ and college students $31, children 5–12 $24; free for children under 5 and for veterans, active-duty and retired military",
    pz: "成人 $33，62 岁以上长者与大学生 $31，5–12 岁儿童 $24；5 岁以下儿童、退伍军人及现役、退役军人免费",
    u: "https://intrepidmuseum.org/exhibitions/temporary-exhibitions/",
    flag: "Hours change day to day for special events, capacity and exhibition closures — check the site before travelling.",
    flagz: "开放时间会因特别活动、人流与展厅关闭而逐日调整，出行前请先查看官网。",
    shows: [
      { t: "Final Flight: The Story of a WWII Corsair", d: "Artifacts and photos tracing one naval aviator's F4U-1D Corsair, shot down off Japan in 1945", dz: "透过实物与照片追溯 1945 年在日本外海被击落的一架海军海盗式战机" },
      { t: "On the Mend: Restoring Intrepid's Sick Bay", d: "Objects, archives and oral histories on medical care aboard the carrier and the sick bay's restoration", dz: "以实物、档案与口述史讲述航母上的医疗与医务室修复" },
      { t: "On The Line: Intrepid and the Vietnam War", d: "The ship's three tours of duty in Vietnam and their impact on the crew", dz: "无畏号三度赴越南服役的经过及对舰员的影响" },
      { t: "A View from the Deep: The Submarine Growler & The Cold War", d: "A closer look at the missile submarine USS Growler and its Cold War patrols", dz: "近距离了解导弹潜艇「USS Growler」与其冷战巡航任务" },
      { t: "Kamikaze: Beyond the Fire", d: "Artifacts from the United States and Japan with accounts from people who survived the attacks", dz: "陈列美日双方遗物，并收录神风特攻幸存者的自述" },
      { t: "Photo Lab", d: "The work of the Navy photographer's mates who documented life and combat aboard Intrepid", dz: "记录舰上生活与作战的海军随舰摄影兵的工作" }
    ] },
  { n: "New York Transit Museum", nz: "纽约交通博物馆", a: "99 Schermerhorn Street",
    h: "Brooklyn: Wed–Sun 10–4. Grand Central Gallery: Mon–Fri 10–7:30, Sat–Sun 10–6",
    hz: "布鲁克林馆：周三–周日 10–16；中央车站展廊：周一–周五 10–19:30，周六、周日 10–18",
    p: "Brooklyn: adults $10, children 2–17, seniors 62+ and visitors with disabilities $5; members and MTA employees free. Grand Central Gallery free",
    pz: "布鲁克林馆：成人 $10，2–17 岁儿童、62 岁以上长者及残障访客 $5；会员与 MTA 员工免费；中央车站展廊免费",
    u: "https://www.nytransitmuseum.org/exhibits/",
    flag: "An air-conditioning outage means the back mezzanine galleries and Education Center in Brooklyn are not currently climate controlled.",
    flagz: "空调故障，布鲁克林馆后夹层展厅与教育中心目前无空调。",
    shows: [
      { t: "The New York Transit Museum: 50 Years of Stories", d: "Anniversary show of odd transit experiments, rejected proposals and the people behind them", dz: "建馆五十周年特展：交通怪实验、被否决的提案与幕后人物" },
      { t: "Ode to the Orange Seats", d: "Fourteen artists respond to the orange and yellow bucket seats introduced on R44 cars in 1971", dz: "十四位艺术家致敬 1971 年 R44 车厢的橙黄色塑胶座椅" },
      { t: "FAREwell, MetroCard", d: "The MetroCard's 1994 debut, its rollout and its retirement as OMNY takes over", dz: "MetroCard 从 1994 年登场到被 OMNY 取代的历程" },
      { t: "Ticket To Ride", d: "Turnstiles, fare boxes and archival photos showing how New York has collected fares", dz: "以旋转闸门、投币箱与档案照片呈现纽约票务收费史" },
      { t: "Moving the Millions", eText: "Permanent", eTextz: "常设", d: "Twenty vintage subway and elevated cars from 1907 onward on a working platform level", dz: "站台层停放 1907 年以来二十辆老地铁与高架列车" },
      { t: "Inspired by MetroCard", sText: "Opening March 16", sTextz: "3 月 16 日开幕", d: "At the Grand Central Gallery: how artists and designers used the fare card as a medium", dz: "中央车站展廊：艺术家与设计师如何把地铁卡当作创作媒介" }
    ] },
  { n: "The Skyscraper Museum", nz: "摩天大楼博物馆", a: "39 Battery Place",
    h: "Wed–Sat 12–6", hz: "周三–周六 12–18",
    p: "Free; all visitors except members should book a timed ticket, though walk-ins are welcome",
    pz: "免费；除会员外建议预约定时票，也接受现场入场", u: "https://skyscraper.org/exhibitions/", free: true,
    shows: [
      { t: "The Invention of Park Avenue", d: "How burying the rail yards at Grand Central created an avenue and the real estate along it", dz: "中央车站铁道入地如何造出公园大道与沿线地产" }
    ] },
  { n: "Museum of the Moving Image", nz: "动态影像博物馆", a: "36-01 35th Avenue",
    h: "Thu 2–6, Fri 2–8, Sat–Sun 11–6; closed Mon–Wed", hz: "周四 14–18，周五 14–20，周六、周日 11–18；周一至周三闭馆",
    p: "Adults $20, youth 3–17 $10, under 3 free; free admission Thursdays 2–6",
    pz: "成人 $20，3–17 岁青少年 $10，3 岁以下免费；周四 14:00–18:00 免费",
    u: "https://movingimage.org/whats-on/exhibitions/",
    shows: [
      { t: "Overexposed: Art, Technology, and the Body", s: "2026-03-14", e: "2027-01-03", d: "Sixteen artists plus a century of research films on X-rays, scanning and looking inside the body", dz: "十六位艺术家与百年研究影片，谈 X 光、扫描与透视人体" },
      { t: "Site Interruptions", s: "2026-07-02", e: "2027-07-25", d: "Artist commissions placed on the museum's homepage and in unexpected spots in the building", dz: "艺术家受邀创作，散布于官网首页与馆内意想不到的角落" },
      { t: "Behind the Screen", eText: "Ongoing", eTextz: "长期", d: "The museum's core gallery on how moving images are made, marketed and shown", dz: "常设主展厅，讲述影像的制作、行销与放映" },
      { t: "The Jim Henson Exhibition: Imagination Unlimited", eText: "Ongoing", eTextz: "长期", d: "More than 300 puppets, sketches and props from Jim Henson's film and television work", dz: "逾 300 件吉姆·亨森的木偶、手稿与道具" }
    ] },
  { n: "Staten Island Museum", nz: "史泰登岛博物馆", a: "1000 Richmond Terrace, Building A",
    h: "Wed–Sun 11–5, last entry 4:45; closed Thanksgiving, Christmas, New Year's Day, Memorial Day and Labor Day",
    hz: "周三–周日 11–17，16:45 停止入场；感恩节、圣诞节、元旦、阵亡将士纪念日与劳动节闭馆",
    p: "Suggested admission: adults $8, students and seniors $5, children 2–12 $2; free for members, for veterans and active-duty military, and for a caregiver accompanying a visitor with a disability; Snug Harbor Discovery Pass $20 covers four sites",
    pz: "建议票价：成人 $8，学生与长者 $5，2–12 岁儿童 $2；会员、现役与退伍军人、陪同残障访客的照护者免费；斯纳格港 Discovery Pass $20 可参观四处场馆",
    u: "https://www.statenislandmuseum.org/exhibits/current-exhibitions/",
    flag: "Chapel Road on the Snug Harbor campus is partly closed weekdays 7am–3:30pm from August 2026 into mid-2027; on-site parking is limited.",
    flagz: "斯纳格园区 Chapel Road 自 2026 年 8 月起至 2027 年年中，工作日 7:00–15:30 部分封闭；园内停车位有限。",
    shows: [
      { t: "Here You Are: Staten Island Triennial", eText: "On view now", eTextz: "正在展出", d: "Borough-wide survey of artists living and working on Staten Island", dz: "三年展，集中呈现在史泰登岛生活与创作的艺术家" },
      { t: "Staten Island: Making History", eText: "Now on view", eTextz: "正在展出", d: "Local history gallery marking the 250th anniversary of American independence", dz: "地方史展厅，呼应美国独立 250 周年" },
      { t: "Remember the Mastodon", eText: "Ongoing", eTextz: "长期", d: "The museum's mastodon remains and what Ice Age Staten Island looked like", dz: "馆藏乳齿象化石与冰河期史泰登岛的样貌" },
      { t: "World Art Gallery", eText: "Ongoing", eTextz: "长期", d: "Objects from the museum's world cultures collection in a long-run display", dz: "馆藏世界文化艺术品的长期陈列" },
      { t: "Stephanie Dinkins: Anchoring Home", sText: "Opening November 14th", sTextz: "11 月 14 日开幕", d: "New work by an artist known for projects on AI, race and community memory", dz: "以人工智能、种族与社区记忆为题的艺术家新作" }
    ] },
  { n: "The Ukrainian Museum", nz: "乌克兰博物馆", a: "222 East 6th Street",
    h: "Wed–Sun 12–6, closed Mon–Tue", hz: "周三–周日 12–18；周一、周二闭馆",
    p: "Adults $15, seniors and students $10; free under 12; free admission last Thursday of the month 6–9",
    pz: "成人 $15，长者与学生 $10；12 岁以下免费；每月最后一个周四 18:00–21:00 免费",
    u: "https://www.theukrainianmuseum.org/museum-exhibitions/",
    shows: [
      { t: "The Ground Shifts Beneath Our Feet | Zhanna Kadyrova", s: "2026-06-20", e: "2026-11-08", d: "Sculpture and installation by the Ukrainian artist Zhanna Kadyrova", dz: "乌克兰艺术家扎娜·卡德罗娃的雕塑与装置个展" },
      { t: "A Living Canvas: The Ukrainian Museum At 50", s: "2026-05-17", e: "2026-11-08", d: "Fiftieth-anniversary show drawn from the museum's own collection", dz: "建馆五十周年，馆藏精选展" },
      { t: "Pedagogies Of War | Roman Khimei & Yarema Malashchuk", sText: "Opens January 2027", sTextz: "2027 年 1 月开幕", d: "Film and video by the Ukrainian artist duo Khimei and Malashchuk", dz: "乌克兰艺术家双人组希梅伊与马拉舒克的影像作品" }
    ] },
  { n: "South Street Seaport Museum", nz: "南街海港博物馆", a: "12 Fulton Street",
    h: "Wed–Sun 11–5, last entry 4:30", hz: "周三–周日 11–17；最后入场 16:30",
    p: "Adults $18, seniors and students $15, children $5; free for members",
    pz: "成人 $18，长者与学生 $15，儿童 $5；会员免费", u: "https://southstreetseaportmuseum.org/exhibitions/",
    flag: "The platform lift to the Maritime City galleries at 213 Water Street is out of service for repairs",
    flagz: "213 Water Street《Maritime City》展厅的升降平台正在维修停用",
    shows: [
      { t: "The Promise of Liberty: Words That Shaped a Nation", d: "Rare founding documents for the nation's 250th anniversary, centred on New York's role", dz: "建国 250 周年特展，珍稀建国文献与纽约的角色" },
      { t: "Maritime City", eText: "Long-term", eTextz: "长期", d: "540 objects across three floors on how New York grew out of its harbour", dz: "三层展厅 540 件展品，讲述纽约如何从港口崛起" },
      { t: "Millions: Migrants and Millionaires Aboard the Great Liners, 1900–1914", eText: "Long-term", eTextz: "长期", d: "First-class and third-class life aboard early 20th-century ocean liners, side by side", dz: "20 世纪初远洋班轮头等舱与三等舱生活的并置对照" },
      { t: "South Street and the Rise of New York", eText: "Long-term", eTextz: "长期", d: "How the Seaport made New York America's largest city and the world's busiest port", dz: "海港如何让纽约成为美国最大城市与世界最繁忙港口" }
    ] },
  { n: "Fraunces Tavern Museum", nz: "弗朗西斯酒馆博物馆", a: "54 Pearl Street, 2nd Floor",
    h: "Daily 12–5", hz: "每日 12–17",
    p: "Adults $10; seniors, students and children 6–17 $5; free under 6 and for active military and veterans",
    pz: "成人 $10；长者、学生及 6–17 岁儿童 $5；6 岁以下、现役军人与退伍军人免费",
    u: "https://www.frauncestavernmuseum.org/current-exhibitions",
    flag: "The elevator is subject to intermittent outages; tickets are sold only at the door, with no advance sales",
    flagz: "电梯间歇性停用；不设网上预售，仅现场售票",
    shows: [
      { t: "Path to Liberty: The Emergence of a Nation", eText: "Long-term", eTextz: "长期", d: "Multi-year Revolution 250th exhibition; the current section covers 1776–1777 in New York", dz: "多年期独立 250 周年展，现阶段聚焦 1776–1777 年的纽约" },
      { t: "Path to Liberty: The Emergence of a Nation - Orders, Discipline and Daily Life", e: "2026-10-01", d: "Orderly books showing how officers trained and disciplined Continental Army soldiers", dz: "以军令簿呈现大陆军军官如何训练与管理士兵" },
      { t: "Path to Liberty: The Emergence of a Nation - Martha, The First Founding Mother Revealed", sText: "Opening November 2026", sTextz: "2026 年 11 月开幕", d: "Martha Washington at the Continental Army's winter encampments, 1777 to 1782", dz: "1777–1782 年玛莎·华盛顿在大陆军冬营的经历" },
      { t: "The Birch Trials at Fraunces Tavern", eText: "Long-term", eTextz: "长期", d: "The 1783 hearings that let thousands of Black Loyalists evacuate New York", dz: "1783 年听证会，数千黑人保皇派得以撤离纽约" },
      { t: "Governing the Nation from Fraunces Tavern", eText: "Permanent", eTextz: "常设", d: "The Department of Foreign Affairs as it was when it rented rooms here, 1785–1788", dz: "1785–1788 年租用此处办公的外交部复原陈列" }
    ] },
  { n: "Center for Brooklyn History", nz: "布鲁克林历史中心", a: "128 Pierrepont Street",
    h: "Mon–Fri 10–6, Sat 10–4, closed Sundays", hz: "周一–周五 10–18，周六 10–16；周日闭馆", p: "Free",
    pz: "免费", u: "https://www.bklynlibrary.org/cbh/projects/exhibitions", free: true,
    shows: [
      { t: "The Battle of Brooklyn: Fought and Remembered", s: "2026-02-05", e: "2026-12-31", d: "The 1776 battle and the ways Brooklyn has remembered it ever since", dz: "1776 年布鲁克林战役，以及后世如何纪念它" },
      { t: "New York City History Day Showcase", s: "2026-09-10", e: "2026-10-01", d: "Research projects by New York City students from the annual History Day competition", dz: "纽约市学生历史日竞赛的研究作品展" },
      { t: "Centering Collections: Recent Work at CBH", s: "2026-07-06", e: "2027-02-05", d: "Recent acquisitions and newly processed material from the center's archives", dz: "中心近期入藏与新整理的档案材料" }
    ] },
  { n: "Jackie Robinson Museum", nz: "杰基·罗宾逊博物馆", a: "75 Varick Street",
    h: "Thu–Sun 11–6, closed Mon–Wed", hz: "周四–周日 11–18；周一至周三闭馆",
    p: "Adults $18; seniors 62+, youth 5–17, students and visitors with disabilities $15; free under 5; $3 off for veterans and active military",
    pz: "成人 $18；62 岁以上长者、5–17 岁青少年、学生及残障访客 $15；5 岁以下免费；退伍与现役军人减 $3",
    u: "https://www.jackierobinsonmuseum.org/visit/exhibitions/",
    shows: [
      { t: "Main Gallery", eText: "Permanent", eTextz: "常设", d: "Robinson's life from his 1919 birth onward, through artifacts, film and interactive displays", dz: "以文物、影片与互动装置呈现罗宾逊自 1919 年起的一生" },
      { t: "Yawkey Sports Gallery", eText: "Permanent", eTextz: "常设", d: "Forty years of Robinson's athletic career, with a scale model of Ebbets Field", dz: "罗宾逊四十年运动生涯，含埃比茨球场比例模型" },
      { t: "Speak Out! Student Poster Exhibit", d: "Posters by fifth graders from the museum's second annual Speak Out! poster contest", dz: "博物馆第二届 Speak Out! 海报比赛的五年级学生作品" }
    ] }
]},

{ g: "Historic Houses & Gardens", gz: "历史宅邸与园林",
  note: "Farmhouses and mansions that predate the street grid. Most open only a couple of days a week, and several by guided tour only.",
  notez: "早于曼哈顿网格街道的农舍与宅邸。多数每周只开放一两天，有几处只接受导览参观。", items: [
  { n: "Morris-Jumel Mansion", nz: "莫里斯–朱梅尔宅邸", a: "65 Jumel Terrace",
    h: "Mansion closed weekdays for restoration; Roger Morris Park daily 10–5; guided walking tours Saturdays 10:30 and 1:30 (no 1:30 tour on the second Saturday of the month), reservations required",
    hz: "修缮期间宅邸工作日闭馆；罗杰·莫里斯公园每日 10–17；导览步行团周六 10:30 与 13:30（每月第二个周六无 13:30 场），须提前预约",
    p: "Guided walking tour $25, $20 per person for groups of 6 or more; park free; free for active military, veterans, AAM members and museum members. Self-guided mansion visits ($10 adults, under 12 free) are suspended during the restoration",
    pz: "导览步行团 $25，6 人以上团体每人 $20；公园免费；现役军人、退伍军人、AAM 会员与本馆会员免费。修缮期间自助参观（成人 $10，12 岁以下免费）暂停",
    u: "https://www.morrisjumel.org/exhibitions",
    flag: "The mansion is closed on weekdays for a roof and exterior restoration and interior tours are suspended; reopening is expected in fall 2026. Only the park and the reservation-only Saturday walking tour are running.",
    flagz: "宅邸因屋顶与外墙修缮工作日闭馆，室内参观暂停，预计 2026 年秋季重开；目前仅公园开放，并有须预约的周六步行导览。",
    shows: [
      { t: "What the House Saw: 260 Years of Stories from the Morris-Jumel Mansion Collection & Community", s: "2025-06-14", d: "260 years of the house told through its collection and the neighbourhood around it", dz: "以馆藏与周边社区，讲述宅邸 260 年的故事" },
      { t: "Life Below Stairs", eText: "Permanent", eTextz: "常设", d: "The enslaved and hired people who worked in the mansion's basement rooms", dz: "宅邸地下层中被奴役者与受雇仆役的生活" }
    ] },
  { n: "Merchant's House Museum", nz: "商人之家博物馆", a: "29 East 4th Street",
    h: "Wed–Sun: guided tour at 12, self-guided visits 1–5 with last entry at 4:30; closed major holidays",
    hz: "周三–周日：12:00 导览参观，13:00–17:00 自助参观，16:30 停止入场；主要节日闭馆",
    p: "Self-guided $15.50, guided tour $20.50; seniors 65+ and students with ID $10.50; under 12 and members free; 50¢ off per ticket when paying cash",
    pz: "自助参观 $15.50，导览参观 $20.50；65 岁以上长者与持证学生 $10.50；12 岁以下与会员免费；现金付款每张减 $0.50",
    u: "https://merchantshouse.org/visit/",
    flag: "Open during restoration — enter through Manuel Plaza at 35 East 4th Street. Five floors reached only by stairs; no lift, no air conditioning. Reservations recommended for the 12pm guided tour.",
    flagz: "修缮期间照常开放，请由东 4 街 35 号 Manuel Plaza 入口进入；五层楼仅有楼梯，无电梯、无空调；12:00 导览建议预约。",
    shows: [] },
  { n: "Dyckman Farmhouse Museum", nz: "戴克曼农舍博物馆", a: "4881 Broadway",
    h: "Wed–Fri 12–4, Sat 10–4; closed Sun–Tue", hz: "周三–周五 12–16，周六 10–16；周日至周二闭馆",
    p: "General admission $3; free for children under 3, Inwood and Washington Heights residents, Culture Pass users and Historic House Trust members; the garden and grounds are always free",
    pz: "普通门票 $3；3 岁以下儿童、因伍德与华盛顿高地居民、Culture Pass 用户及 Historic House Trust 会员免费；花园与庭园始终免费",
    u: "https://dyckmanfarmhouse.org/exhibitions/2025-2/",
    flag: "Tickets are limited to five per purchase; groups of eight or more must book in advance. Closed October 16, 2026, Veterans Day, Thanksgiving, Christmas Eve, Christmas Day and New Year's.",
    flagz: "每次最多购五张票，8 人以上团体须提前预约；2026 年 10 月 16 日、退伍军人节、感恩节、平安夜、圣诞节与元旦闭馆。",
    shows: [
      { t: "Soon Come, Likkle More", s: "2026-06-06", e: "2026-10-24", d: "New work by Jhanique Lovejoy installed in and around the 1784 farmhouse", dz: "Jhanique Lovejoy 于 1784 年农舍内外呈现的新作" },
      { t: "Finding Peace: Three Chairs of Rest", eText: "Ongoing", eTextz: "长期", d: "Three chairs by Regina Evans placed as a resting and reflection piece on the site", dz: "Regina Evans 的三把椅子，作为场地上的休憩与省思之作" },
      { t: "Home Sick: Health and Hygiene at a 19th-Century Farmhouse", eText: "Permanent", eTextz: "常设", d: "How a Dutch-American farm family handled illness, medicine and cleanliness", dz: "荷裔美籍农户如何应对疾病、用药与清洁" }
    ] },
  { n: "Bartow-Pell Mansion Museum", nz: "巴托–佩尔宅邸博物馆", a: "895 Shore Road",
    h: "Wed, Sat and Sun 12–4, guided tours at 12:15, 1:15, 2:15 and 3:15; gardens and grounds daily 8:30–dusk; closed Thanksgiving, Christmas Day and New Year's Day",
    hz: "周三、周六、周日 12–16，导览 12:15、13:15、14:15、15:15；花园与庭园每日 8:30 至黄昏；感恩节、圣诞节与元旦闭馆",
    p: "Adults $15, seniors 65+ and students $12; members free; groups of ten or more by advance reservation",
    pz: "成人 $15，65 岁以上长者与学生 $12；会员免费；10 人以上团体须提前预约",
    u: "https://www.bartowpellmansionmuseum.org/exhibitions/",
    flag: "Three floors and no lift, with five steps up to the entrance; walk-ins are welcome during open hours but the interior is seen on the scheduled guided tours.",
    flagz: "建筑三层且无电梯，入口有五级台阶；开放时间内可现场入场，室内参观按固定场次导览进行。",
    shows: [
      { t: "Wish You Were Here… Postcards of Pelham Bay Park and the East Bronx", eText: "Ongoing", eTextz: "长期", d: "Vintage postcards of East Bronx inns, beaches and streets from Thomas X. Casey's collection", dz: "Thomas X. Casey 收藏的东布朗克斯旅店、海滩与街景旧明信片" }
    ] },
  { n: "Wyckoff House Museum", nz: "怀考夫故居博物馆", a: "5816 Clarendon Road",
    h: "House open Saturdays 11–2 from mid-February to mid-December, with guided tours on the hour at 11:30, 12:30 and 1:30, plus select Sundays; park and grounds Tue–Sat about 10–5, April–November",
    hz: "房屋开放：2 月中至 12 月中，周六 11–14，导览 11:30、12:30、13:30 每小时一场，另有部分周日开放；园区 4–11 月周二–周六约 10–17",
    p: "Free; donations welcome at the end of the tour. Groups of eight or more must make a group reservation",
    pz: "免费，导览结束后欢迎捐赠；8 人以上团体须预约", u: "https://wyckoffmuseum.org/visit/", free: true,
    flag: "The house is closed from mid-December to mid-February, and the interior can only be seen on a guided tour during the Saturday public hours — turning up on another day gets you the grounds only.",
    flagz: "房屋 12 月中至 2 月中闭馆；室内仅能在周六开放时段随导览参观，其他日子到访只能游览园区。",
    shows: [] },
  { n: "Louis Armstrong House Museum", nz: "路易斯·阿姆斯特朗故居博物馆", a: "34-56 107th Street",
    h: "Thu–Sat 11–4; house tours hourly 11–3", hz: "周四–周六 11–16；故居导览 11–15 每小时一场",
    p: "House tour plus exhibitions: adults $20, seniors/students/military $14, Corona residents $5, under 5 free; exhibitions only $10, discounted $8",
    pz: "故居导览含展览：成人 $20，长者/学生/军人 $14，Corona 居民 $5，5 岁以下免费；仅看展览 $10，优惠 $8",
    u: "https://www.louisarmstronghouse.org/events/",
    shows: [
      { t: "Here to Stay", eText: "Permanent", eTextz: "常设", d: "Permanent display of Armstrong's photographs, home tapes and personal objects at the Armstrong Center", dz: "阿姆斯特朗中心常设展：照片、家庭录音带与私人物品" },
      { t: "The Corona Collection", e: "2026-09-18", d: "Special exhibition drawn from the Corona neighborhood collection, closing September 18", dz: "取材于科罗纳社区藏品的特展，9 月 18 日闭幕" },
      { t: "Armstrong in Ghana", s: "2026-10-01", d: "New exhibit on Armstrong's visits to Ghana, opening October 1", dz: "新展：阿姆斯特朗的加纳之行，10 月 1 日开幕" }
    ] },
  { n: "Alice Austen House", nz: "爱丽丝·奥斯汀故居", a: "2 Hylan Boulevard",
    h: "Wed–Fri 12–5, Sat 11–5; closed Sun–Tue", hz: "周三–周五 12–17，周六 11–17；周日–周二闭馆",
    p: "Adults $5 suggested; seniors and students $3; under 12 free; free with SNAP or Culture Pass",
    pz: "成人建议 $5；长者与学生 $3；12 岁以下免费；持 SNAP 或 Culture Pass 免费",
    u: "https://aliceausten.org/exhibitions/",
    shows: [
      { t: "Andrea Modica: Italian Story", s: "2026-09-12", e: "2027-02-20", d: "Thirty-nine platinum prints from four decades of Modica's travels in Italy", dz: "莫迪卡四十年意大利旅行的 39 幅铂金印相" },
      { t: "New Eyes on Alice Austen", eText: "Permanent", eTextz: "常设", d: "The house's core display of Austen's life and photographs, updated with recent scholarship", dz: "常设展：奥斯汀的生平与摄影，依新近研究更新" },
      { t: "Radical Botany: The Politics of Flowers", s: "2026-06-06", e: "2026-08-22", d: "Contemporary photographers using flowers to address colonial history, gender and class", dz: "当代摄影以花为题，触及殖民史、性别与阶级" },
      { t: "Lost Body", d: "Outdoor installation by Shaun Krupa on the body and the environment", dz: "肖恩·克鲁帕的户外装置，关于身体与环境" }
    ] },
  { n: "Historic Richmond Town", nz: "里士满镇历史村", a: "441 Clarke Avenue",
    h: "Wed–Sun 11–4; Jan–Mar Fri–Sun 11–4", hz: "周三–周日 11–16；1–3 月周五–周日 11–16",
    p: "Adults $8; seniors and students $6; children 4–11 $5; free Thu 2–4 May–Dec with reservation",
    pz: "成人 $8；长者与学生 $6；4–11 岁儿童 $5；5–12 月周四 14:00–16:00 免费（需预约）",
    u: "https://www.historicrichmondtown.org/exhibitions",
    flag: "Closed the first two weeks of January and the week before Labor Day",
    flagz: "1 月前两周及劳动节前一周闭馆",
    shows: [] },
  { n: "Weeksville Heritage Center", nz: "威克斯维尔遗产中心", a: "158 Buffalo Avenue",
    h: "Tue–Fri 10–5, Sat 11–5, closed Sun–Mon", hz: "周二–周五 10–17，周六 11–17；周日、周一闭馆",
    p: "Free; guided tours of the Hunterfly Road Houses $10 adults, $8 seniors and students",
    pz: "免费；亨特弗莱路老屋导览成人 $10，长者与学生 $8", u: "https://www.weeksvillesociety.org/engage/exhibitions/",
    free: true,
    shows: [
      { t: "Osisi Obodo – Community Shade Tree", sText: "Unveiled June 2026", sTextz: "2026 年 6 月揭幕", eText: "Permanent", eTextz: "常设", d: "A modular outdoor shade and gathering structure built with Crown Heights youth", dz: "与皇冠高地青年共同搭建的户外遮阳与聚会装置" },
      { t: "Peace in Destruction: Art from Rikers Island", d: "Photography, murals, film and sound on incarceration and youth justice at Rikers", dz: "以摄影、壁画、影像与声音探讨里克斯岛监禁与青少年司法" }
    ] }
]}
],

  plain: [],

  closed: [
    { n: "Rubin Museum of Himalayan Art", nz: "鲁宾喜马拉雅艺术博物馆",
      d: "Closed its Chelsea building in October 2024; the collection now travels and is shown inside other museums",
      dz: "2024 年 10 月关闭切尔西馆舍，藏品改以巡展形式在其他馆展出" }
  ]
});
