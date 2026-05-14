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

const nav = [
  ["制作実績", "#/works"],
  ["料金", "#/pricing"],
  ["制作の流れ", "#/flow"],
  ["お問い合わせ", "#/contact"],
];

const footerLinks = [
  ["トップ", "#/"],
  ...nav,
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

const works = [
  ["七五三ムービー", photos.shichigosan],
  ["ピアノ発表会", photos.piano],
  ["社交ダンスパーティ", photos.dance],
  ["バースデーフィルム", photos.birthday],
  ["ミュージックビデオ", photos.camera],
  ["家族の記録", photos.serviceWide],
];

const plans = [
  [
    "おまかせお気軽プラン",
    "¥30,000〜",
    "短時間の記録やダイジェスト向け。撮影から編集まで気軽におまかせできます。",
    ["撮影 1〜2時間程度", "編集 1本", "データ納品", "納品方法: DVD、ブルーレイ、データなど"],
    true,
  ],
  [
    "編集だけおまかせプラン",
    "¥15,000〜",
    "自分のスマホやカメラで撮影を、プロの編集で宝物に。",
    ["編集 1本", "BGM調整", "テロップ相談", "納品方法: DVD、ブルーレイ、データなど"],
  ],
  [
    "お試しショートムービー編集プラン",
    "¥10,000〜",
    "気楽にお試し利用したい方におすすめ。",
    ["ショート動画編集", "SNS向けにも対応", "短納期相談可", "納品方法: DVD、ブルーレイ、データなど"],
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
  "おまかせお気軽プラン",
  "編集だけおまかせプラン",
  "お試しショートムービー編集プラン",
  "ミュージックビデオプラン",
  "その他",
];

function header() {
  return `<header class="container-wide flex h-[104px] items-center justify-between">
    <a href="#/" data-link class="font-display text-[32px] tracking-[.12em] text-ink">NIKKO MOVIE TEAM</a>
    <nav class="hidden items-center gap-16 text-[15px] font-semibold tracking-[.18em] md:flex">
      ${nav.map(([label, href]) => `<a href="${href}" data-link class="transition hover:text-gold">${label}</a>`).join("")}
    </nav>
  </header>`;
}

function footer() {
  return `<footer class="border-t border-gold/20 bg-white/60 py-12">
    <div class="container-wide flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="font-display text-2xl tracking-[.12em]">NIKKO MOVIE TEAM</p>
        <p class="mt-3 text-sm leading-7 text-ink/60">大切な一日を、映画のように残す。</p>
      </div>
      <div class="flex flex-wrap gap-5 text-sm text-ink/65">
        ${footerLinks.map(([label, href]) => `<a href="${href}" data-link class="hover:text-gold">${label}</a>`).join("")}
      </div>
    </div>
  </footer>`;
}

const cta = (label = "制作について相談する", secondary = false) => `<a href="#/contact" data-link class="inline-flex h-[64px] min-w-[200px] items-center justify-center gap-4 rounded-[5px] border px-7 text-[16px] font-bold tracking-[.08em] transition duration-300 hover:-translate-y-1 ${secondary ? "border-gold bg-white/70 text-gold hover:bg-gold hover:text-white" : "border-green bg-green text-white shadow-gold hover:bg-[#244b41]"}"><span>${secondary ? "▷" : "✎"}</span>${label}<span>›</span></a>`;

function sectionTitle(title, text, eyebrow = "") {
  return `<div class="mx-auto mb-10 max-w-3xl text-center fade-up">
    <div class="ornament justify-center"><span>▣</span></div>
    ${eyebrow ? `<p class="mt-4 text-xs font-bold tracking-[.32em] text-gold">${eyebrow}</p>` : ""}
    <h2 class="mt-3 font-serifjp text-[38px] font-semibold tracking-[.16em] text-ink md:text-[44px]">${title}</h2>
    ${text ? `<p class="mt-4 text-[16px] leading-8 tracking-[.08em] text-ink/70">${text}</p>` : ""}
  </div>`;
}

function serviceCard([title, text, image, icon]) {
  return `<article class="fade-up overflow-hidden rounded-[6px] border border-gold/20 bg-white shadow-soft transition duration-500 hover:-translate-y-2">
    <div class="h-[160px] overflow-hidden"><img src="${image}" class="h-full w-full object-cover transition duration-700 hover:scale-105" alt=""></div>
    <div class="flex gap-4 px-6 py-6">
      <span class="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-2xl text-gold shadow-soft">${icon}</span>
      <div><h3 class="font-serifjp text-[22px] font-semibold tracking-[.12em]">${title}</h3><p class="mt-2 text-sm leading-7 text-ink/65">${text}</p></div>
    </div>
  </article>`;
}

function videoCard([title, image], index) {
  return `<article class="fade-up youtube-card group overflow-hidden rounded-[5px] border border-gold/25 bg-white shadow-soft transition duration-500 hover:-translate-y-2">
    <div class="youtube-preview relative h-[250px] overflow-hidden bg-ink/5">
      <img src="${image}" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" alt="">
      <span class="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-black/20 text-white">▶</span>
    </div>
    <div class="px-6 py-5">
      <div class="flex items-center gap-3">
        <span class="grid h-10 w-10 place-items-center rounded-full bg-paper text-gold shadow-soft">▣</span>
        <h3 class="font-serifjp text-[20px] font-semibold tracking-[.12em]">${title}</h3>
      </div>
      <label class="mt-4 block text-xs font-bold tracking-[.12em] text-ink/55" for="youtube-${index}">YouTubeリンク</label>
      <input id="youtube-${index}" class="youtube-input mt-2 h-11 w-full rounded-[4px] border border-gold/25 bg-paper px-3 text-sm outline-none transition focus:border-green" placeholder="https://www.youtube.com/watch?v=..." />
    </div>
  </article>`;
}

function subHero(title, headline, text, image, options = {}) {
  const imageMarkup = options.hideImage ? "" : `<img src="${image}" class="gold-frame fade-up h-[430px] w-full object-cover" alt="">`;
  const gridClass = options.hideImage ? "container-wide pb-16 pt-8" : "container-wide grid items-center gap-12 pb-16 pt-8 lg:grid-cols-[.8fr_1fr]";
  return `<section class="${gridClass}">
    <div class="fade-up ${options.hideImage ? "max-w-4xl" : ""}">
      <p class="mb-5 text-sm font-bold tracking-[.32em] text-gold">${title}</p>
      <h1 class="font-serifjp text-[46px] leading-[1.55] tracking-[.12em] md:text-[56px]">${headline}</h1>
      <p class="mt-7 text-lg leading-9 text-ink/68">${text}</p>
      <div class="mt-8">${cta("相談してみる")}</div>
    </div>
    ${imageMarkup}
  </section>`;
}

function plainHero(title, headline, text) {
  return `<section class="container-wide pb-14 pt-10">${sectionTitle(headline, text, title)}</section>`;
}

function pricingCard(plan) {
  return `<article class="fade-up relative rounded-[6px] border bg-white p-8 shadow-soft transition duration-500 hover:-translate-y-2 ${plan[4] ? "border-green ring-1 ring-green/20" : "border-gold/20"}">
    ${plan[4] ? `<span class="absolute right-6 top-6 rounded-full bg-green px-4 py-2 text-xs font-bold tracking-[.16em] text-white">おすすめ</span>` : ""}
    <h3 class="font-serifjp text-[25px] font-semibold tracking-[.12em]">${plan[0]}</h3>
    <p class="mt-4 font-display text-[44px] text-gold">${plan[1]}</p>
    <p class="mt-3 min-h-20 text-sm leading-7 text-ink/65">${plan[2]}</p>
    <ul class="mt-8 space-y-4">${plan[3].map((feature) => `<li class="flex items-start gap-3 text-[15px] leading-7"><span class="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"></span>${feature}</li>`).join("")}</ul>
  </article>`;
}

const pages = {
  "/": () => `${header()}<main>
    <section class="container-wide grid min-h-[565px] grid-cols-1 items-center gap-12 pb-12 pt-6 lg:grid-cols-[.82fr_1.08fr]">
      <div class="fade-up pt-8">
        <div class="ornament mb-10"><span>✦</span></div>
        <h1 class="font-serifjp text-[46px] font-medium leading-[1.48] tracking-[.12em] text-ink md:text-[58px]"><span class="hero-line">大切な一日を、</span><br><span class="hero-line">映画のように残す。</span></h1>
        <p class="mt-8 max-w-[580px] text-[20px] leading-[2.05] tracking-[.08em] text-ink/78">七五三、ピアノ発表会、社交ダンスパーティ、誕生日会、MV制作まで。記録ではなく、心に残る映像を。</p>
        <div class="mt-9 flex flex-wrap gap-6">${cta()}${cta("作品を見る", true)}</div>
      </div>
      <div class="fade-up relative">
        <div class="gold-frame grid overflow-hidden bg-white lg:grid-cols-[2fr_.9fr]">
          <img src="${photos.shichigosan}" class="h-[500px] w-full object-cover" alt="">
          <div class="grid h-[500px] grid-rows-3 border-l border-gold/70">${[photos.piano, photos.dance, photos.birthday].map((img) => `<div class="relative overflow-hidden border-b border-gold/70 last:border-b-0"><img src="${img}" class="h-full w-full object-cover" alt=""><span class="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white bg-black/20 text-white">▶</span></div>`).join("")}</div>
        </div>
        <p class="film-script absolute -bottom-9 right-12 text-[46px]">Cinematic Memories</p>
      </div>
    </section>
    <section class="bg-sand/45 pb-14 pt-8"><div class="container-wide">${sectionTitle("サービス", "人生の大切な瞬間を、映画のような映像で残します。")}<div class="grid grid-cols-1 gap-4 md:grid-cols-5">${services.map(serviceCard).join("")}</div></div></section>
  </main>${footer()}`,

  "/services": () => `${header()}<main>${subHero("サービス", "人生の節目も、舞台の一瞬も、美しく残す。", "七五三、ピアノ発表会、社交ダンスパーティ、誕生日会、MV制作まで。目的に合わせて撮影から編集、納品まで丁寧に伴走します。", photos.serviceWide)}<section class="container-wide grid grid-cols-1 gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3">${services.map(serviceCard).join("")}</section></main>${footer()}`,

  "/works": () => `${header()}<main>
    ${subHero("制作実績", "一つひとつの記憶に、物語の余韻を。", "YouTubeリンクを貼ると、その場で映像を埋め込み表示できます。", photos.worksGrid, { hideImage: true })}
    <section class="container-wide pb-20">
      <div class="mb-8 flex flex-wrap gap-3">${["すべて", "記念日", "舞台・発表会", "パーティ", "MV"].map((x, i) => `<span class="rounded-full border px-6 py-3 text-sm font-bold tracking-[.12em] ${i ? "border-gold/35 bg-white text-gold" : "border-green bg-green text-white"}">${x}</span>`).join("")}</div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">${works.map(videoCard).join("")}</div>
    </section>
  </main>${footer()}`,

  "/pricing": () => `${header()}<main>
    ${plainHero("料金プラン", "残したい時間に合わせて、<br>無理なく選べるプラン。", "撮影内容や会場規模に合わせて、最適な構成をご提案します。まずはお気軽にご相談ください。")}
    <section class="container-wide grid grid-cols-1 gap-6 pb-10 md:grid-cols-2 xl:grid-cols-4">${plans.map(pricingCard).join("")}</section>
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
        <h1 class="font-serifjp text-[50px] leading-[1.45] tracking-[.12em]">大切な一日のこと、<br>まずは聞かせてください。</h1>
        <p class="mt-7 text-lg leading-9 text-ink/68">撮影内容がまだ決まっていなくても大丈夫です。ご希望やご予算に合わせて、最適な形をご提案します。</p>
        <img src="${photos.contactCamera}" class="mt-10 h-[310px] w-full rounded-[6px] object-cover shadow-soft" alt="">
      </div>
      <form class="fade-up rounded-[6px] border border-gold/20 bg-white p-8 shadow-soft">
        ${["お名前", "メールアドレス", "ご希望日"].map((label) => `<label class="mb-5 block"><span class="mb-2 block font-bold tracking-[.08em]">${label}</span><input class="h-14 w-full rounded-[4px] border border-gold/25 bg-paper px-4 outline-none focus:border-green"></label>`).join("")}
        <label class="mb-5 block"><span class="mb-2 block font-bold tracking-[.08em]">撮影プラン</span><select class="h-14 w-full rounded-[4px] border border-gold/25 bg-paper px-4">${contactPlans.map((plan) => `<option>${plan}</option>`).join("")}</select></label>
        <label class="block"><span class="mb-2 block font-bold tracking-[.08em]">ご相談内容</span><textarea rows="5" class="w-full rounded-[4px] border border-gold/25 bg-paper p-4"></textarea></label>
        <button type="button" class="mt-7 h-14 w-full rounded-[5px] bg-green font-bold tracking-[.12em] text-white transition hover:-translate-y-1">送信する</button>
      </form>
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
  return match ? `https://www.youtube.com/embed/${match[1]}` : "";
}

function bindYoutubeInputs() {
  document.querySelectorAll(".youtube-card").forEach((card) => {
    const input = card.querySelector(".youtube-input");
    const preview = card.querySelector(".youtube-preview");
    input.addEventListener("input", () => {
      const embedUrl = youtubeEmbedUrl(input.value);
      if (!embedUrl) return;
      preview.innerHTML = `<iframe class="h-full w-full" src="${embedUrl}" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    });
  });
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
  bindYoutubeInputs();
}

addEventListener("hashchange", () => render(currentPath()));
render();
