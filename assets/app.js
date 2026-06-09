const asset = (name) => new URL(name, document.currentScript.src).href;

const photos = {
  shichigosan: asset("photos/shichigosan.png"),
  piano: asset("photos/piano.png"),
  dance: asset("photos/dance.png"),
  birthday: asset("photos/birthday.png"),
  camera: asset("photos/camera.png"),
  serviceWide: asset("photos/service-wide.png"),
  worksGrid: asset("photos/works-grid.png"),
  aboutTeam: asset("photos/about-team.png"),
  contactCamera: asset("photos/contact-camera.png"),
};

const topVideos = [
  ["https://youtu.be/N3lNb5sjRcA", photos.shichigosan, "七五三・家族向けの動画"],
  ["https://youtu.be/HZDisAdoCk8", photos.piano, "ピアノ・発表会系の動画"],
  ["https://youtu.be/iYOYxS03Hu4", photos.dance, "社交ダンス・パーティ系の動画"],
  ["https://youtu.be/J32lpCQIbhc", photos.birthday, "誕生日・記念日系の動画"],
];

const contactFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdz8nwNebOYapZEUH8CuSWb-axnHADNK-AjyWyX0kewRmvqtQ/viewform?usp=publish-editor";

const nav = [
  ["トップ", "#/"],
  ["料金", "#/pricing"],
  ["制作の流れ", "#/flow"],
  ["お問い合わせ", "#/contact"],
];

const footerLinks = [
  ["トップ", "#/"],
  ["料金", "#/pricing"],
  ["制作の流れ", "#/flow"],
  ["私たちについて", "#/about"],
  ["FAQ", "#/faq"],
];

const services = [
  ["七五三", "晴れ姿と家族の表情を、やわらかな光で残します。", photos.shichigosan, "⛩"],
  ["ピアノ発表会", "緊張、演奏、拍手まで、舞台の空気を丁寧に記録します。", photos.piano, "♬"],
  ["社交ダンスパーティ", "ドレスの揺れや会場の華やかさを映画的に編集します。", photos.dance, "✦"],
  ["誕生日会", "笑顔とサプライズを、何度も見返したくなる映像に。", photos.birthday, "♕"],
  ["MV制作", "曲の世界観を、撮影設計から編集まで一緒に形にします。", photos.camera, "▷"],
];

const defaultWorks = [
  { title: "お宮参り", image: photos.shichigosan, youtubeUrl: "https://youtu.be/XHZKqpC8luQ" },
  { title: "七五三ムービー", image: photos.piano, youtubeUrl: "https://youtu.be/3FO_iTZd8As" },
  { title: "社交ダンスパーティ", image: photos.dance, youtubeUrl: "https://youtu.be/2Ps3peq7H64" },
  { title: "ピアノ発表会", image: photos.birthday, youtubeUrl: "https://youtu.be/eIcpKBXOX_g" },
  { title: "撮影・編集説明動画", image: photos.camera, youtubeUrl: "https://youtu.be/soK-l56EcOM" },
  { title: "ＶＨＳビデオの編集", image: photos.serviceWide, youtubeUrl: "https://youtu.be/nKLG4hreyDI" },
  { title: "AIビデオ", image: photos.camera, youtubeUrl: "https://youtu.be/t67epUk8KDE" },
  { title: "社交ダンスパーティ（編集のみ）", image: photos.dance, youtubeUrl: "" },
  { title: "広告動画", image: photos.serviceWide, youtubeUrl: "https://youtu.be/aRpsaR1Qp8U" },
];

function worksData() {
  const template = document.getElementById("works-data");
  if (!template) return defaultWorks;
  const items = [...template.content.querySelectorAll("[data-title][data-youtube-url]")].map((item) => ({
    title: item.dataset.title,
    youtubeUrl: item.dataset.youtubeUrl,
    image: photos[item.dataset.image] || photos.camera,
  }));
  return items.length ? items : defaultWorks;
}

const plans = [
  [
    "編集だけおまかせプラン",
    "¥15,000〜",
    "自分のスマホやカメラで撮影を、プロの編集で宝物に。",
    ["編集 1本", "BGM調整", "テロップ相談", "納品方法: DVD、ブルーレイ、データなど"],
    true,
  ],
  [
    "おまかせお気軽プラン",
    "¥30,000〜",
    "短時間の記録やダイジェスト向け。撮影から編集まで気軽におまかせできます。",
    ["撮影 1〜2時間程度", "編集 1本", "データ納品", "納品方法: DVD、ブルーレイ、データなど"],
  ],
  [
    "ミュージック<br>ビデオプラン",
    "¥50,000〜",
    "思い出を一本のミュージックビデオのように、心に残るBGMとともにお届けします。",
    ["事前打ち合わせ", "企画・選曲サポート", "撮影時間は別途調整", "納品方法: DVD、ブルーレイ、データなど"],
  ],
];

const faqs = [
  ["撮影時間の目安はどのくらいですか？", "1時間から2時間程度の撮影が多いです。発表会などは半日程度かかる場合もあります。"],
  ["出張撮影はできますか？", "福岡県全域出張させていただきます。筑豊地域に関しては、出張費はいただきません。その他の地域にあっては、5,000円の出張費をいただきます。"],
  ["納品までは何日くらいですか？", "通常は撮影後2〜4週間ほどです。お急ぎの場合も、まずはご相談ください。"],
  ["修正は何回までできますか？", "基本プランでは1回まで含まれます。細かなテロップや曲調の調整も相談できます。"],
  ["音楽は指定できますか？", "指定できます。使用許諾が必要な楽曲は安全な方法をご案内します。追加で希望に合わせて、楽曲の作成もさせていただきます。"],
];

const contactPlans = [
  "編集だけおまかせプラン",
  "おまかせお気軽プラン",
  "ミュージックビデオプラン",
  "その他",
];

function header() {
  return `<header class="container-wide flex min-h-[104px] flex-col items-start justify-center gap-5 py-5 md:flex-row md:items-center md:justify-between md:py-0">
    <a href="#/" data-link class="font-display text-[24px] tracking-[.10em] text-ink md:text-[32px] md:tracking-[.12em]">NIKKO MOVIE TEAM</a>
    <nav class="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-semibold tracking-[.12em] md:gap-16 md:text-[15px] md:tracking-[.18em]">
      ${nav.map(([label, href]) => `<a href="${href}" data-link class="transition hover:text-gold">${label}</a>`).join("")}
    </nav>
  </header>`;
}

function footer() {
  return `<footer class="border-t border-gold/20 bg-white/60 py-12">
    <div class="container-wide flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="font-display text-2xl tracking-[.12em]">NIKKO MOVIE TEAM</p>
        <p class="mt-3 text-sm leading-7 text-ink/60">日々の思い出を特別な宝物へ</p>
      </div>
      <div class="flex flex-wrap gap-5 text-sm text-ink/65">
        ${footerLinks.map(([label, href]) => `<a href="${href}" data-link class="hover:text-gold">${label}</a>`).join("")}
      </div>
    </div>
  </footer>`;
}

const cta = (label = "制作について相談する", secondary = false, href = "#/contact") => `<a href="${href}" data-link class="cta-button inline-flex h-[58px] min-w-[200px] items-center justify-center gap-4 rounded-[5px] border px-6 text-[15px] font-bold tracking-[.08em] transition duration-300 hover:-translate-y-1 md:h-[64px] md:px-7 md:text-[16px] ${secondary ? "border-gold bg-white/70 text-gold hover:bg-gold hover:text-white" : "border-green bg-green text-white shadow-gold hover:bg-[#244b41]"}"><span>${secondary ? "▷" : "✎"}</span>${label}<span>›</span></a>`;

function sectionTitle(title, text, eyebrow = "") {
  return `<div class="mx-auto mb-10 max-w-3xl text-center fade-up">
    <div class="ornament justify-center"><span>▣</span></div>
    ${eyebrow ? `<p class="mt-4 text-xs font-bold tracking-[.32em] text-gold">${eyebrow}</p>` : ""}
    <h2 class="mt-3 font-serifjp text-[30px] font-semibold leading-[1.55] tracking-[.10em] text-ink md:text-[44px] md:tracking-[.16em]">${title}</h2>
    ${text ? `<p class="mt-4 text-[16px] leading-8 tracking-[.08em] text-ink/70">${text}</p>` : ""}
  </div>`;
}

function serviceCard([title, text, image, icon]) {
  return `<article class="fade-up overflow-hidden rounded-[6px] border border-gold/20 bg-white shadow-soft transition duration-500 hover:-translate-y-2">
    <div class="h-[150px] overflow-hidden md:h-[160px]"><img src="${image}" class="h-full w-full object-cover transition duration-700 hover:scale-105" alt=""></div>
    <div class="flex gap-4 px-6 py-6">
      <span class="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-2xl text-gold shadow-soft">${icon}</span>
      <div><h3 class="font-serifjp text-[20px] font-semibold tracking-[.10em] md:text-[22px] md:tracking-[.12em]">${title}</h3><p class="mt-2 text-sm leading-7 text-ink/65">${text}</p></div>
    </div>
  </article>`;
}

function videoCard({ title, image, youtubeUrl }, index) {
  const player = youtubePlayer(youtubeUrl || "", title);
  return `<article class="fade-up youtube-card group overflow-hidden rounded-[5px] border border-gold/25 bg-white shadow-soft transition duration-500 hover:-translate-y-2">
    <div class="relative aspect-video w-full overflow-hidden bg-ink/5">
      ${player || `<img src="${image}" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" alt="">`}
    </div>
    <div class="px-6 py-5">
      <div class="flex items-center gap-3">
        <span class="grid h-10 w-10 place-items-center rounded-full bg-paper text-gold shadow-soft">▣</span>
        <h3 class="font-serifjp text-[18px] font-semibold tracking-[.10em] md:text-[20px] md:tracking-[.12em]">${title}</h3>
      </div>
    </div>
  </article>`;
}

function subHero(title, headline, text, image, options = {}) {
  const imageMarkup = options.hideImage ? "" : `<img src="${image}" class="gold-frame fade-up h-[280px] w-full object-cover md:h-[430px]" alt="">`;
  const gridClass = options.hideImage ? "container-wide pb-16 pt-8" : "container-wide grid items-center gap-12 pb-16 pt-8 lg:grid-cols-[.8fr_1fr]";
  return `<section class="${gridClass}">
    <div class="fade-up ${options.hideImage ? "max-w-4xl" : ""}">
      <p class="mb-5 text-sm font-bold tracking-[.32em] text-gold">${title}</p>
      <h1 class="font-serifjp text-[34px] leading-[1.55] tracking-[.08em] md:text-[56px] md:tracking-[.12em]">${headline}</h1>
      ${text ? `<p class="mt-6 text-base leading-8 text-ink/68 md:mt-7 md:text-lg md:leading-9">${text}</p>` : ""}
      <div class="mt-8">${cta("相談してみる")}</div>
    </div>
    ${imageMarkup}
  </section>`;
}

function plainHero(title, headline, text) {
  return `<section class="container-wide pb-14 pt-10">${sectionTitle(headline, text, title)}</section>`;
}

function pricingCard(plan) {
  return `<article class="fade-up relative rounded-[6px] border bg-white p-6 shadow-soft transition duration-500 hover:-translate-y-2 md:p-8 ${plan[4] ? "border-green ring-1 ring-green/20" : "border-gold/20"}">
    ${plan[4] ? `<span class="absolute right-6 top-10 rounded-full bg-green px-4 py-2 text-xs font-bold tracking-[.16em] text-white md:top-12">おすすめ</span>` : ""}
    <h3 class="font-serifjp text-[22px] font-semibold leading-[1.45] tracking-[.08em] md:text-[25px] md:tracking-[.12em] ${plan[4] ? "pr-0 pt-10 sm:pr-28 sm:pt-0" : ""}">${plan[0]}</h3>
    <p class="mt-4 font-display text-[34px] text-gold md:text-[44px]">${plan[1]}</p>
    <p class="mt-3 min-h-20 text-sm leading-7 text-ink/65">${plan[2]}</p>
    <ul class="mt-8 space-y-4">${plan[3].map((feature) => `<li class="flex items-start gap-3 text-[15px] leading-7"><span class="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"></span>${feature}</li>`).join("")}</ul>
  </article>`;
}

const pages = {
  "/": () => `${header()}<main>
    <section class="container-wide grid min-h-[565px] grid-cols-1 items-center gap-10 pb-12 pt-4 md:gap-12 md:pt-6 lg:grid-cols-[.82fr_1.08fr]">
      <div class="fade-up pt-8">
        <div class="ornament mb-10"><span>✦</span></div>
        <h1 class="font-serifjp text-[34px] font-medium leading-[1.5] tracking-[.08em] text-ink md:text-[58px] md:tracking-[.12em]"><span class="hero-line">日々の思い出を</span><br><span class="hero-line">特別な宝物へ</span></h1>
        <p class="mt-7 max-w-[580px] text-[16px] leading-[1.9] tracking-[.06em] text-ink/78 md:mt-8 md:text-[20px] md:leading-[2.05] md:tracking-[.08em]">七五三、ピアノ発表会、社交ダンスパーティ、誕生日会、MV制作まで。記録ではなく、心に残る映像を。</p>
        <div class="mt-9 flex flex-wrap gap-6">${cta()}<a href="#works-section" class="cta-button inline-flex h-[58px] min-w-[200px] items-center justify-center gap-4 rounded-[5px] border border-gold bg-white/70 px-6 text-[15px] font-bold tracking-[.08em] text-gold transition duration-300 hover:-translate-y-1 hover:bg-gold hover:text-white md:h-[64px] md:px-7 md:text-[16px]"><span>▷</span>作品を見る<span>›</span></a></div>
      </div>
      <div class="fade-up relative">
        <div class="gold-frame grid overflow-hidden bg-white lg:grid-cols-[2fr_.9fr]">
          <div class="relative block h-[320px] overflow-hidden md:h-[500px]">
            <img src="${topVideos[0][1]}" class="h-full w-full object-cover transition duration-700 hover:scale-105" alt="">
          </div>
          <div class="hidden h-[500px] grid-rows-3 border-l border-gold/70 md:grid">${topVideos.slice(1).map(([url, img, label]) => `<div class="relative overflow-hidden border-b border-gold/70 last:border-b-0"><img src="${img}" class="h-full w-full object-cover transition duration-700 hover:scale-105" alt=""></div>`).join("")}</div>
        </div>
        <p class="film-script absolute -bottom-7 right-5 text-[28px] md:-bottom-9 md:right-12 md:text-[46px]">Cinematic Memories</p>
      </div>
    </section>
    <section id="works-section" class="bg-sand/45 pb-14 pt-8">
      <div class="container-wide">
        ${sectionTitle("制作実績", "ページ内でそのまま再生できる映像サンプルです。")}
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">${worksData().map(videoCard).join("")}</div>
      </div>
    </section>
  </main>${footer()}`,

  "/services": () => `${header()}<main>${subHero("サービス", "人生の節目も、舞台の一瞬も、美しく残す。", "七五三、ピアノ発表会、社交ダンスパーティ、誕生日会、MV制作まで。目的に合わせて撮影から編集、納品まで丁寧に伴走します。", photos.serviceWide)}<section class="container-wide grid grid-cols-1 gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3">${services.map(serviceCard).join("")}</section></main>${footer()}`,

  "/pricing": () => `${header()}<main>
    ${plainHero("料金プラン", "残したい時間に合わせて、<br>無理なく選べるプラン。", "撮影内容や会場規模に合わせて、最適な構成をご提案します。まずはお気軽にご相談ください。")}
    <section class="container-wide grid grid-cols-1 gap-6 pb-10 sm:grid-cols-2 lg:grid-cols-3">${plans.map(pricingCard).join("")}</section>
    <section class="container-wide pb-20">
      <div class="rounded-[6px] border border-gold/25 bg-white/85 p-7 leading-8 text-ink/70 shadow-soft">
        <p class="font-bold tracking-[.12em] text-ink">注意事項</p>
        <p class="mt-3">どのプランも撮影データや内容によって異なりますが、動画の長さは2分から10分程度になります。長い動画、発表会などの希望の方も対応しますので、ご相談ください。</p>
        <p class="mt-2">データの受け渡しは、スマホを持ってきていただいても、LINEで送っていただいてもOK。一番簡単な方法でどうぞ。</p>
      </div>
    </section>
  </main>${footer()}`,

  "/flow": () => `${header()}<main>${plainHero("制作の流れ", "はじめてでも安心できる、シンプルな制作ステップ。", "ご相談から撮影、編集、納品まで。大切な日を気持ちよく迎えられるよう、丁寧にご案内します。")}<section class="container-wide grid gap-10 pb-20 lg:grid-cols-[1fr_.55fr]"><div class="rounded-[6px] border border-gold/20 bg-white p-8 shadow-soft">${["ご相談", "お見積もり", "撮影準備", "撮影", "編集", "ご確認", "納品"].map((s, i) => `<div class="relative flex gap-6 pb-8 last:pb-0"><span class="z-10 grid h-12 w-12 place-items-center rounded-full bg-paper text-gold shadow-soft">${String(i + 1).padStart(2, "0")}</span><div><h3 class="font-serifjp text-2xl font-semibold tracking-[.12em]">${s}</h3><p class="mt-2 leading-8 text-ink/64">内容を確認しながら、次の工程へわかりやすく進めます。</p></div></div>`).join("")}</div><img src="${photos.camera}" class="h-full min-h-[420px] w-full rounded-[6px] object-cover shadow-soft" alt=""></section></main>${footer()}`,

  "/about": () => `${header()}<main>${subHero("私たちについて", "その日だけの空気を、ていねいに映像へ。", "NIKKO MOVIE TEAMは、記念日や舞台、パーティ、音楽の表現を、自然な表情と美しい編集で残す映像制作チームです。", photos.aboutTeam)}<section class="container-wide grid grid-cols-1 gap-6 pb-20 md:grid-cols-3">${["自然な表情", "やさしい距離感", "余韻のある編集"].map((v) => `<article class="fade-up rounded-[6px] border border-gold/20 bg-white p-8 text-center shadow-soft"><p class="text-2xl text-gold">✦</p><h3 class="mt-5 font-serifjp text-2xl font-semibold tracking-[.14em]">${v}</h3><p class="mt-4 leading-8 text-ink/62">主役が自然体でいられる空気を大切に、映像の温度を整えます。</p></article>`).join("")}</section></main>${footer()}`,

  "/contact": () => `${header()}<main>
    <section class="container-wide grid gap-12 pb-20 pt-10 lg:grid-cols-[.8fr_1fr]">
      <div class="fade-up">
        <p class="mb-5 text-sm font-bold tracking-[.32em] text-gold">お問い合わせ</p>
        <h1 class="font-serifjp text-[36px] leading-[1.45] tracking-[.08em] md:text-[50px] md:tracking-[.12em]">大切な一日のこと、<br>まずは聞かせてください。</h1>
        <p class="mt-6 text-base leading-8 text-ink/68 md:mt-7 md:text-lg md:leading-9">撮影内容がまだ決まっていなくても大丈夫です。ご希望やご予算に合わせて、最適な形をご提案します。</p>
        <img src="${photos.contactCamera}" class="mt-8 h-[240px] w-full rounded-[6px] object-cover shadow-soft md:mt-10 md:h-[310px]" alt="">
      </div>
      <div class="fade-up rounded-[6px] border border-gold/20 bg-white p-8 shadow-soft">
        <p class="text-sm font-bold tracking-[.32em] text-gold">CONTACT FORM</p>
        <h2 class="mt-4 font-serifjp text-[28px] leading-[1.5] tracking-[.10em] text-ink md:text-[34px] md:tracking-[.12em]">お問い合わせは<br>専用フォームから。</h2>
        <p class="mt-5 leading-8 text-ink/65">ご相談内容やご希望日などは、Googleフォームでまとめて入力できます。</p>
        <a href="${contactFormUrl}" target="_blank" rel="noopener noreferrer" class="mt-8 inline-flex h-14 w-full items-center justify-center rounded-[5px] bg-green font-bold tracking-[.12em] text-white transition hover:-translate-y-1">問い合わせフォームを表示</a>
      </div>
    </section>
  </main>${footer()}`,

  "/faq": () => `${header()}<main>
    ${plainHero("よくある質問", "撮影前の不安を、ひとつずつ解消します。", "撮影場所、納期、修正、音楽使用、キャンセルについて、よくいただく質問をまとめました。")}
    <section class="container-wide grid gap-8 pb-20 lg:grid-cols-[280px_1fr]">
      <aside class="h-fit rounded-[6px] border border-gold/20 bg-white p-6 shadow-soft">${["撮影について", "料金について", "納品について", "キャンセルについて"].map((cat, i) => `<p class="rounded-[4px] px-4 py-4 font-bold tracking-[.08em] ${i ? "text-ink/65" : "bg-green text-white"}">${cat}</p>`).join("")}</aside>
      <div class="space-y-4">${faqs.map((faq, i) => `<div class="faq rounded-[5px] border border-gold/20 bg-white shadow-soft"><button class="flex w-full items-center justify-between gap-5 px-7 py-6 text-left"><span class="font-serifjp text-xl font-semibold tracking-[.08em]">${faq[0]}</span><span class="text-gold">＋</span></button><p class="${i ? "hidden" : ""} border-t border-gold/10 px-7 py-6 leading-8 text-ink/68">${faq[1]}</p></div>`).join("")}</div>
    </section>
  </main>${footer()}`,
};

function youtubeEmbedUrl(value) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/,
  ];
  const match = patterns.map((pattern) => trimmed.match(pattern)).find(Boolean);
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : "";
}

function youtubeId(value) {
  const embedUrl = youtubeEmbedUrl(value);
  const match = embedUrl.match(/embed\/([^?&]+)/);
  return match ? match[1] : "";
}

function youtubePlayer(url, title) {
  const embedUrl = youtubeEmbedUrl(url);
  if (!embedUrl) return "";
  return `<iframe class="absolute inset-0 h-full w-full border-0" src="${embedUrl}?rel=0&modestbranding=1&playsinline=1" title="${title}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}

function currentPath() {
  const hashPath = location.hash.replace(/^#/, "");
  return hashPath || (location.protocol === "file:" ? "/" : location.pathname);
}

function render(path = currentPath()) {
  document.getElementById("root").innerHTML = `<div class="page-shell page-enter">${(pages[path] || pages["/"])()}</div>`;
  document.querySelectorAll("[data-link]").forEach((link) => link.addEventListener("click", (event) => {
    event.preventDefault();
    location.hash = link.getAttribute("href").replace(/^#/, "");
    render(currentPath());
    scrollTo({ top: 0, behavior: "smooth" });
  }));
  document.querySelectorAll(".faq button").forEach((button) => button.addEventListener("click", () => button.parentElement.querySelector("p").classList.toggle("hidden")));
}

addEventListener("hashchange", () => render(currentPath()));
render();
