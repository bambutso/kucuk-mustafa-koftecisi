/** 日本語訳。料理名はトルコ語のまま（ブランドの identity）。説明文のみ翻訳する。 */
import type { SiteContent } from "./types";

export const ja: SiteContent = {
  ui: {
    common: {
      reserve: "席を予約する",
      callUs: "お電話はこちら",
      directions: "ルートを見る",
      close: "閉じる",
      callNow: "今すぐ電話する",
    },
    nav: {
      home: "ホーム",
      story: "私たちの物語",
      place: "お店について",
      menu: "メニュー",
      gallery: "ギャラリー",
      contact: "お問い合わせ",
      reservation: "ご予約",
      openMenu: "メニューを開く",
      closeMenu: "メニューを閉じる",
      mainNav: "メインナビゲーション",
      mobileNav: "モバイルナビゲーション",
      footerNav: "フッターナビゲーション",
      skipToContent: "本文へスキップ",
      admin: "管理画面",
    },
    home: {
      docTitle: "Küçük Mustafa Köftecisi — 1939年創業 | クルクラーレリ",
      docDesc:
        "1939年から続く、生きた伝説。樫炭のおき火の上で、四代にわたり同じ製法で焼き上げるクルクラーレリの köfte。",
    },
    hero: {
      title: "1939年から",
      srSuffix: "クルクラーレリのköfte",
      tagline: "樫炭のおき火の上で、四代にわたり変わらない köfte。",
      ctaMenu: "メニューを見る",
      reviewGoogle: "Google にレビューを書く",
      reviewTripadvisor: "TripAdvisor にレビューを書く",
    },
    stats: {
      years: "年、同じ炉の前で",
      generations: "代、ひとつの製法",
      portion: "1人前 · köfte 8個",
    },
    homeStory: {
      eyebrow: "私たちの物語",
      title: "一台の屋台から始まり、街の記憶になりました。",
      captionShop: "Kasaplar Arası にある店",
      captionUsta: "おき火の前に立つ職人",
      quoteSub: "クルクラーレリの多くの人が口にする一言",
    },
    why: {
      eyebrow: "製法",
      title: "クルクラーレリの köfte は、なぜ違うのでしょう。",
      lead: "答えはたった四つ。正しい肉、飾らない生地、辛抱強いおき火、そして決して変わらない一皿です。",
    },
    signature: {
      eyebrow: "看板料理",
      title: "炉から生まれる、いちばん知られた皿",
      lead: "価格は店舗自身のメニューによるものです。最新の一覧は店舗にお問い合わせください。",
      imageCaption: "225グラム、köfte 8個 — 1939年から変わらない一皿。",
      seeAll: "メニューをすべて見る",
    },
    instagram: {
      title: "おき火の日記",
      lead: "店からの新しい一枚 — 料理、客席、そしておき火のまわりに流れる日常。",
      follow: "Instagram でフォロー",
      openPost: "投稿を開く",
    },
    reviews: {
      eyebrow: "お客様の声",
      reviewsWord: "件のレビュー",
      rankLine: (_rank, total) => `クルクラーレリの${total}軒のレストランの中で`,
      ourPage: (source) => `${source}のページ`,
      starsAria: (score, outOf) => `${outOf}つ星のうち${score}`,
      googleEyebrow: "Google のレビュー",
      googleLine: "Google マップでの実際の評価です",
      writeReview: "レビューを書く",
    },
    location: {
      eyebrow: "アクセス",
      title: "Kasaplar Arası で、おき火の香りをたどってください。",
      mapTitle: "地図：Küçük Mustafa Köftecisi の所在地",
    },
    footer: {
      addressTitle: "住所",
      hoursTitle: "営業時間",
      servicesTitle: "サービス",
      tagline: "1939年から、同じおき火の上で。",
    },
    menuPage: {
      docTitle: "メニュー — Küçük Mustafa Köftecisi | クルクラーレリ",
      docDesc:
        "クルクラーレリの köfte、炭火焼き、スープ、郷土の味、デザート。1939年から、樫炭のおき火の上で。",
      heading: "メニュー",
      tagline: "おき火が生むものすべて。スープからデザートまで、トラキア流に。",
      searchLabel: "メニューを検索",
      searchPlaceholder: "検索：köfte、piyaz、hardaliye…",
      clearSearch: "検索をクリア",
      resultsFound: (n) => `${n}件見つかりました`,
      noResultsTitle: "おき火の上に、お探しのものはありませんでした。",
      noResultsHint: "別の言葉でお試しください — 例：「köfte」「piyaz」「hardaliye」。",
      itemsCount: (n) => `${n}品`,
      askPrice: "価格はお問い合わせください",
      priceOnRequest: "価格はスタッフにおたずねください",
      servings: {
        tek: "シングル",
        duble: "ダブル",
        "20cl": "20 cl",
        "35cl": "35 cl",
        "50cl": "50 cl",
        "70cl": "70 cl",
        "100cl": "100 cl",
      },
      menuNoteExtra: "価格には付加価値税が含まれています。",
      categoriesAria: "メニューのカテゴリー",
      tags: {
        chef: "シェフのおすすめ",
        popular: "いちばん人気",
        fresh: "新登場",
        local: "郷土の味",
      },
      view3d: "3D で見る · テーブルに置く",
      m3dEyebrow: "3D ビュー",
      m3dPreparing: "3D モデルを準備しています…",
      m3dArButton: "カメラでテーブルに置く",
      m3dHint:
        "ドラッグするとモデルを回転できます。スマートフォンでは「カメラでテーブルに置く」をタップしてください。köfte の皿が実物大で、目の前のテーブルに現れます。",
      m3dQrHint: "スマートフォンで読み取って、テーブルの上で AR をお試しください。",
      m3dQrAria: "スマートフォンで開くための QR コード",
    },
    gallery: {
      docTitle: "ギャラリー — Küçük Mustafa Köftecisi | クルクラーレリ",
      docDesc: "店、おき火、そして食卓。Küçük Mustafa Köftecisi の風景です。",
      eyebrow: "ギャラリー",
      title: "おき火と食卓の風景",
      lead: "すべて実際の写真です。私たち自身のアーカイブと、お客様が Google に寄せてくださった一枚から。",
      filterAll: "すべて",
      filterPlace: "店内",
      filterEmber: "おき火",
      filterTable: "食卓",
      filterAria: "ギャラリーの絞り込み",
      representative: "イメージ",
      disclaimer:
        "「イメージ」と記した写真は、雰囲気をお伝えするために選んだストック写真です。アーカイブは、店自身の写真によって少しずつ豊かになっていきます。",
      prev: "前の画像",
      next: "次の画像",
      enlarge: (caption) => `拡大：${caption}`,
    },
    contact: {
      docTitle: "お問い合わせ — Küçük Mustafa Köftecisi | +90 288 212 76 12",
      docDesc:
        "Karacaibrahim Mah. Şükrü Naili Geçidi No:1, Kasaplar Arası, クルクラーレリ。年中無休、10:00–02:00。電話：+90 288 212 76 12。",
      eyebrow: "お問い合わせ",
      title: "お電話一本の近さです",
      lead: "ご予約およびご質問はお電話ください。電話のそばには、いつも誰かがおります。",
      phoneTitle: "電話",
      phoneNote: "ご予約はお電話で承ります。",
      addressTitle: "住所",
      hoursTitle: "営業時間",
      hoursNote: "真夜中を過ぎても炉の火は灯り、スープの鍋は朝まで静かに煮えています。",
      socialTitle: "SNS",
      reviewsWord: "件のレビュー",
      parkingNote:
        "Kasaplar Arası は市場の中にあります。お車でお越しの方は、Şevket Dingiloğlu 公園の周辺がいちばん近い駐車場です。",
      mapTitle: "地図：Küçük Mustafa Köftecisi の所在地",
    },
    reservation: {
      docTitle: "ご予約 — Küçük Mustafa Köftecisi | +90 288 212 76 12",
      docDesc:
        "お席はお電話でご予約ください：+90 288 212 76 12。年中無休、10:00–02:00。",
      eyebrow: "ご予約",
      title: "おき火の前に、あなたのお席を",
      lead: "ご予約はお電話で承ります — 一本の電話、三十秒。下の小さなメモは、お電話でお伝えする内容をまとめていただくためのものです。",
      steps: [
        {
          no: "1",
          title: "お電話ください",
          text: "+90 288 212 76 12 — 電話のそばには、いつも誰かがおります。",
        },
        {
          no: "2",
          title: "日にち、時間、人数",
          text: "お伝えいただくだけで結構です。大人数のお客様には、前日までのお電話をおすすめします。",
        },
        {
          no: "3",
          title: "お席をご用意します",
          text: "ご来店の際にお名前をお伝えください。おき火がいちばんよく見える席のひとつをご用意します。",
        },
      ],
      hoursLine: (days) => `${days}、`,
      planTitle: "お電話の前の、小さなメモ",
      planText: "ご記入のうえ、まとめをお電話で読み上げるか、コピーしてお使いください。",
      planStrong: "ご予約はお電話でのみ確定します。",
      nameLabel: "お名前",
      namePlaceholder: "お名前",
      dateLabel: "日にち",
      timeLabel: "時間",
      guestsLabel: "人数",
      guestsOption: (n) => `${n}名`,
      guestsMany: "8名以上",
      submit: "まとめを作成する",
      callAndTell: "電話してお伝えする",
      copy: "まとめをコピー",
      copied: "コピーしました",
      pickDate: "まとめのために、日にちをお選びください。",
      summary: (name, dateText, time, guests) => {
        const who = name ? `${name}名義` : "私の名義";
        const party = guests === "8+" ? "8名以上" : `${guests}名`;
        return `${who}でご予約をお願いします：${dateText}、${time}、${party}。`;
      },
    },
    storyPage: {
      docTitle: "私たちの物語 — Küçük Mustafa Köftecisi | 1935年から今日まで",
      docDesc:
        "1935年、Mustafa Akkul の屋台から今日まで。Kayacan 一門の職人たち、Ergin Kalınoğlu、そして一度も消えなかったおき火。クルクラーレリの köfte の記憶です。",
      eyebrow: "私たちの物語",
      title: "八十年を超える、おき火の見張り",
      captionShop: "同じ扉、同じ看板 — Kasaplar Arası",
      captionUsta: "おき火の前に立つ職人",
      quoteSub: "クルクラーレリの多くの人が口にする一言",
      closing:
        "物語の続きは、紙には収まりません。おき火のそばで語られるものです。食卓には、あなたのお席が用意されています。",
      ctaPlace: "お店を見る",
    },
    placePage: {
      docTitle: "お店について — Küçük Mustafa Köftecisi | Kasaplar Arası、クルクラーレリ",
      docDesc:
        "樫炭の炉と、木のぬくもりに包まれた客席。Şevket Dingiloğlu 公園の向かい、年中無休 10:00–02:00。",
      eyebrow: "お店について",
      title: "表は食料品店、奥はいつも köfte の炉",
      salonHeading: "木のぬくもりと、肩の触れあう距離のテーブル",
      openWord: "営業",
      hoursWord: "営業時間",
      sinceWord: "創業",
      perDay: "日/週",
      captionSalon: "生まれ変わった客席",
      captionOcak: "樫炭と、鋳鉄の焼き網",
      ocakHeading: "この店の心臓は、奥で脈打っています",
      orgEyebrow: "貸切・宴会",
      captionOrg: "団体のお食事のために整えた食卓",
      servicesEyebrow: "サービス",
      servicesTitle: "ご希望のかたちで",
      ctaGallery: "ギャラリーを見る",
    },
    langBox: { label: "言語を選択" },
  },
  manifesto: {
    eyebrow: "クルクラーレリの köfte",
    title: "1939年からレシピは変わっていません。変えようと考えたことすら、ありません。",
    text: "牛肉に、地理的表示に登録されたクルクラーレリの Kıvırcık 仔羊を合わせます。玉ねぎと一日おいたパンとともに練り上げ、樫炭のおき火の上で表面を封じ込めます。香辛料はごくわずか — あとに残るのが、肉の味であるように。添えるのは、生玉ねぎの piyaz、おき火で焼いた青唐辛子、そして自家製の辛いソース。食卓は、これで整います。",
  },
  story: {
    pullQuote: "父が初めて連れて行ってくれた、köfte の店。",
    chapters: [
      {
        year: "1935",
        title: "Arasta バザールの前の屋台",
        text: "Mustafa Akkul は背の低い人でした。誰もが彼を「Küçük Mustafa」— 小さなムスタファ — と呼びました。1935年、彼は Arasta バザールの前に小さな屋台を出します。元手はわずかでしたが、秤は正直で、おき火は辛抱強いものでした。クルクラーレリが köfte と出会ったのは、この人の手からでした。",
      },
      {
        year: "1939",
        title: "表は食料品店、奥は köfte の炉",
        text: "クルクラーレリ解放15年目の年、Küçük Mustafa は自分の屋根を手に入れます。Şevket Dingiloğlu 公園の向かいの店です。表には食料品の台、奥にはおき火。パンを買いに入った人が、köfte の香りをまとって出ていきました。",
      },
      {
        year: "現在",
        title: "師から弟子へ、四代にわたって",
        text: "炉が放っておかれたことは、一度もありません。İbrahim Kayacan、Necdet Kayacan、Cüneyt Kayacan… そして今日、おき火の前に立つのは Ergin Kalınoğlu です。名前は変わりました。けれど生地も、火も、戸口での迎え方も、変わりませんでした。",
      },
    ],
  },
  storyPage: {
    lead: "この物語は、一軒の店より大きなものです。ひとりの男のあだ名と、ひとつの街の味の記憶、そして八十年以上消えていないおき火からできています。",
    chapters: [
      {
        id: "1935",
        year: "1935",
        title: "Arasta バザールの前の屋台",
        paragraphs: [
          "Mustafa Akkul は背の低い人でした。クルクラーレリの市場では誰もが彼を「Küçük Mustafa」— 小さなムスタファ — と呼び、彼はその名を欠点としてではなく、自分の署名として背負いました。",
          "1935年、彼は Arasta バザールの前に小さな屋台を出します。元手はトングが一本、焼き網がひとつ、そして正直な秤だけ。朝、市場へ向かう商人たち。夕方、家路につく勤め人たち。誰もが一度は、あの屋台の前で足を止めました。",
          "もちろん köfte は、その頃からありました。けれども、職人の手にかかると köfte がどんなものになるのか — クルクラーレリはそれを、Küçük Mustafa の屋台で知ったのです。",
        ],
      },
      {
        id: "1939",
        year: "1939",
        title: "表は食料品店、奥は köfte の炉",
        paragraphs: [
          "1939年は、クルクラーレリ解放15周年の年でした。街が祝っている頃、Küçük Mustafa にも自分自身の祝いごとがありました。Şevket Dingiloğlu 公園の向かいに、自分の屋根を持つ店を構えたのです。",
          "店には二つの顔がありました。表は食料品の台 — パン、チーズ、オリーブ。そして奥には、おき火。パンを買いに入った人は、奥から漂ってくる香りに抗えず、köfte を一人前提げて帰っていきました。",
          "その日に掲げられた看板は、今も同じ場所にあります。Karacaibrahim Mahallesi、Kasaplar Arası。住所は一度も変わっていません。扉をよそへ移すことなど、誰も夢に見なかったのです。",
        ],
      },
      {
        id: "kusaklar",
        year: "世代",
        title: "師から弟子へ：Kayacan 一門",
        paragraphs: [
          "店を開くことがひとつの技なら、それを受け渡すことは、さらに大きな技です。Küçük Mustafa の炉は弟子たちの手へ渡りました。はじめは İbrahim Kayacan、次に Necdet Kayacan、そして Cüneyt Kayacan。",
          "それぞれが、自分の時代の苦労をくぐり抜けました。物のない年月、移住の年月、姿を変えていく市場。ただひとつ変わらなかったのは、台の向こうにある物差しです。香辛料は控えめに、肉はたっぷりと、おき火は辛抱強く。",
          "クルクラーレリには、こんな言い方があります。レシピは店のものではなく、炉のものだ、と。炉を守る者が、レシピを守る。そしてこの炉は、一度も消えませんでした。",
        ],
      },
      {
        id: "bugun",
        year: "現在",
        title: "おき火の前に：Ergin Kalınoğlu",
        paragraphs: [
          "今日、おき火の前に立つのは Ergin Kalınoğlu です。朝九時にシャッターが上がり、最後のお茶が火からおりるのは夜中の三時。それが、週に七日続きます。",
          "先人から受け継いだ製法は、同じままです。牛肉に、地理的表示に登録された Kıvırcık 仔羊、玉ねぎ、一日おいたパン。樫炭が灰をかぶっておき火になるまで、köfte はひとつも網にのりません。",
          "そして今も毎日、誰かが「昔、父とここへ来ていたんです」と言いながら扉をくぐります。八十年を超える労苦への、ただひとつの本当の報いは、その一言です。",
        ],
      },
    ],
  },
  placePage: {
    lead: "Şevket Dingiloğlu 公園の向かい、Kasaplar Arası にある店。かつて表は食料品店で、奥はいつも köfte の炉でした。",
    salon: {
      title: "客席",
      text: "テーブルは十六卓、七十五席。大広間でもなければ、飾り立てた内装でもありません。フォーマイカの代わりに木を、ポスターの代わりに思い出を。テーブルは互いに近く並んでいます。ここでは隣の席との会話も、メニューに書かれていない一品だからです。",
    },
    ocak: {
      title: "炉",
      text: "この部屋の心臓は、奥にある炉です。樫炭が灰をかぶり、おき火になるまで待ちます。炎に触れた köfte が、この台から出ていくことはありません。おき火のトングは一日に何百回も返されます — いつも、同じ辛抱強さで。",
    },
    organizasyon: {
      title: "貸切・団体のお食事",
      text: "セミナー、研修、ご家族の会食、大人数のお祝いに合わせて、客席の卓を整えます。団体のお食事や貸切のご利用は、事前にご予約いただくだけで結構です。",
    },
    services: [
      {
        id: "yerinde",
        title: "店内でのお食事",
        text: "週七日、10:00–02:00。昼は商人、夕方はご家族連れ、夜半を過ぎれば夜勤明けの人たち。客席が空になることはありません。",
      },
      {
        id: "alkollu",
        title: "酒類の提供",
        text: "客席では rakı と地ビールをお出ししています。おき火からおりた köfte に rakı を合わせるのは、トラキアの古い習わしです。",
      },
    ],
  },
  features: [
    {
      id: "et",
      kicker: "肉",
      title: "地理的表示の Kıvırcık",
      text: "牛肉に、地理的表示に登録されたクルクラーレリの Kıvırcık 仔羊を合わせます。秘密は配合の比率にあり、その物差しは八十年以上、手の中にある秤です。",
    },
    {
      id: "harc",
      kicker: "生地",
      title: "香辛料は控えめに、肉はたっぷりと",
      text: "玉ねぎ、一日おいたパン、塩。香辛料が肉を追い越さないよう、戸口で待たせておきます。舌に残るのは、味付けではなく肉そのものです。",
    },
    {
      id: "ates",
      kicker: "火",
      title: "樫炭のおき火",
      text: "炎ではなく、おき火です。樫炭が灰をかぶってはじめて、köfte が網にのります。外は香ばしく封じられ、中はしっとりと保たれます。",
    },
    {
      id: "sunum",
      kicker: "盛りつけ",
      title: "決して変わらない一皿",
      text: "生玉ねぎの piyaz、おき火で焼いた青唐辛子、自家製の辛いソース。225グラムの一人前に köfte が八個 — 1939年から、同じです。",
    },
  ],
  /* TripAdvisor に寄せられた実際のレビュー。句読点を整え、少し短くしています。 */
  tripadvisorReviews: {
    "kucuk-sehir": {
      title: "小さな街の、大きな味",
      quote:
        "köfte は本当においしく、量もたっぷりで、もてなしもとても心のこもったものでした。笑顔のスタッフのおかげで、お客というより招かれた客のような気持ちになります。クルクラーレリを通る方には、心からおすすめします。",
    },
    nefis: {
      title: "絶品",
      quote:
        "このお店の köfte は本当においしかったです。外は軽く焼き色がつき、中はしっとりと柔らかでした。店内は温かく、サービスも早くて笑顔でした。",
    },
    "izgara-lezzeti": {
      title: "クルクラーレリの炭火焼きの味",
      quote:
        "お店のしつらえも、料理の種類も、その味も素晴らしいものでした。スタッフの笑顔、テーブルの整え方、そして清潔さが目にとまりました。",
    },
  },
  googleReviews: {
    yesim: {
      quote:
        "小さな食堂のような佇まいですが、おいしい köfte、絶品の羊乳のヨーグルト、みずみずしいサラダが心に残りました。焼いたパンのサービスも、うれしい心遣いでした。雰囲気もよく、楽しい食事でした。",
    },
    oznur: {
      quote:
        "köfte、piyaz、ayran をいただきました。量もたっぷりで、味もとてもよかったです。値段も手頃です。",
    },
  },
  hoursDays: "年中無休",
  servicesList: ["店内でのお食事", "酒類の提供"],
  menuNote:
    "商品と価格は店舗自身のメニューから採録したものです。最新の一覧は店舗にお問い合わせください。",
  menu: {
    categories: {
      "imza-kofteler": {
        title: "看板キョフテ",
        note: "牛肉と、PGI認証のクヴルジュク種ラム肉。樫の炭火で。",
      },
      baslangiclar: {
        title: "前菜",
        groups: {
          salatalar: "サラダ各種",
          "ara-sicaklar": "温前菜",
          mezeler: "メゼ各種",
          "soguk-mezeler": "冷製メゼ各種",
        },
        groupNotes: {
          "soguk-mezeler": "1皿の目安は150〜175g。",
        },
      },
      izgaralar: {
        title: "焼き物各種",
        note: "すべて樫の炭火、鋳鉄の焼き網で。",
      },
      baliklar: {
        title: "当店の魚料理",
        note: "商品の価格は仕入れ値により決定されます。詳細はスタッフにお尋ねください。",
        groups: {
          "izgara-balik": "焼き魚",
          "kizartma-balik": "揚げ魚",
        },
      },
      tatlilar: {
        title: "甘味",
        note: "キョフテの後に甘味を、トラキア流で。",
      },
      icecekler: {
        title: "飲み物",
        groups: {
          "soguk-icecekler": "冷たい飲み物",
          "sicak-icecekler": "温かい飲み物",
        },
      },
      "alkollu-icecekler": {
        title: "アルコール飲料",
        note: "酒類の提供は店内限定。",
        groups: {
          rakilar: "ラク",
          saraplar: "ワイン",
          "kadeh-sarap": "グラスワイン",
          biralar: "ビール",
          "yabanci-alkoller": "洋酒",
        },
        groupNotes: {
          saraplar: "ボトル価格",
          "yabanci-alkoller": "ダブル価格",
        },
      },
    },
    items: {
      "kucuk-mustafa-koftesi": {
        unit: "225 g ・ 8個",
        description: "店の名を冠したキョフテ。玉ねぎと固くなったパンを練り込んだ生地を、樫の炭火で焼き締める。骨出汁に浸した田舎パンを添えて。",
      },
      "acili-kofte": { unit: "230 g ・ 2個", description: "唐辛子を練り込んだ、同じ生地で。" },
      "kasarli-kofte": {
        unit: "240 g ・ 2個",
        description: "キョフテの中にカシャルを詰めて。炭火でとろけて。",
      },
      "pastirmali-kofte": {
        unit: "240 g ・ 2個",
        description: "生地にパストゥルマを練り込んで。炭火で焼くと、香りが店中に広がる。",
      },
      "sefin-koftesi": {
        unit: "250 g ・ 2個",
        description: "炭火の前に立つ職人、自らのレシピで。",
      },
      piyaz: { description: "白いんげん豆と玉ねぎたっぷり、酢とオリーブオイルで。キョフテの永遠の相棒。" },
      "coban-salatasi": { description: "トマト、きゅうり、ピーマン、玉ねぎ。細かく刻んで。" },
      "akdeniz-salata": { description: "季節の青菜、オリーブとオリーブオイルで。" },
      "sopska-salatasi": { description: "バルカンの定番、すりおろした白チーズをのせて。" },
      "mercimek-corbasi": { description: "バターの香り、ちょうどよいとろみ。お好みでレモンを。" },
      "patates-kizartmasi": { description: "手切りのポテト、熱々で。" },
      "sogus-tabagi": { description: "ざく切りの新鮮なきゅうり、塩を添えて。" },
      cerez: { description: "ナッツの盛り合わせ、語らいのお供に。" },
      "eski-kasar": { description: "トラキア産、熟成カシャルをスライスして。" },
      "lux-cerez": { description: "アンテップ・ピスタチオを中心に、大皿で。" },
      "tek-peynir": { description: "白チーズを、スライスして。" },
      atom: { description: "ヨーグルトと唐辛子で。" },
      "sirkeli-kapya": { description: "炭火で焼いた赤パプリカを、酢のソースで。" },
      semizotu: { description: "ヨーグルトとにんにくで。" },
      haydari: { description: "水切りヨーグルトに、ディルとにんにくを。" },
      "havuc-tarator": { description: "すりおろした人参を、ヨーグルトで。" },
      "rus-salatasi": { description: "定番の、マヨネーズ和え。" },
      "acili-ezme": { description: "細かく刻んだトマト、ピーマン、玉ねぎ、家庭の味で。" },
      cacik: { description: "きゅうり入り、氷のように冷たく。" },
      "karisik-kizartma": { description: "茄子、ピーマン、ズッキーニ。ヨーグルトとトマトソースで。" },
      kopeoglu: { description: "炭火で焼いた茄子に、ヨーグルトとトマトソースを。" },
      "soslu-patlican": { description: "揚げた茄子を、トマトソースで。" },
      manca: { description: "トラキアに渡った移民のメゼ、ヨーグルトとにんにくで。" },
      "koyun-yogurdu": { description: "旬に仕込む羊乳ヨーグルト、スプーンが立つほどの濃厚さで。" },
      girit: { description: "白チーズを、くるみと青菜で和えて。" },
      soka: { description: "バルカンの食卓から、焼きピーマンのメゼ。" },
      "tavuk-izgara": { description: "控えめな香辛料、炭火で。赤身の肉が苦手な方にも。" },
      "kasap-sucuk": {
        unit: "200 g",
        description: "カサップラル・アラス産のスジュクを、パリッとするまで炭火で。",
      },
      "tava-ciger": {
        unit: "225 g",
        description: "細かく刻んだレバーを、熱したフライパンで。薄切り玉ねぎを添えて。",
      },
      "ciger-sis": { unit: "225 g ・ 3本", description: "尾脂とともに串に刺し、炭火で回しながら。" },
      hamburger: { description: "炭火で焼いた牛肉のキョフテを、パンに挟んで。" },
      antrikot: { unit: "200 g", description: "厚切りを焼き締め、休ませて。" },
      "istranca-kuzu-sis": {
        unit: "260 g ・ 3本",
        description: "ウストランジャ山地のラムを角切りにし、炭火で焼き締めて。薄切り玉ねぎと焼きピーマンを添えて。",
      },
      kulbasti: { unit: "270 g ・ 3本", description: "薄く叩いた肉、灰の上でじか焼き。" },
      kusleme: { unit: "180〜200 g ・ 1個", description: "ラムの最も美味な部位、口の中でほろりと。" },
      bonfile: { unit: "200 g", description: "脂の少ない柔らかな部位、お好みの焼き加減で。" },
      "istranca-kuzu-pirzola": {
        unit: "240 g ・ 3個",
        description: "トラキア産ラム、骨まで持てるほどジューシーで。",
      },
      "istranca-kuzu-lokum": {
        unit: "240 g ・ 4個",
        description: "ロクムのようにとろけるラムの部位。塩と炭火だけで。",
      },
      "karisik-izgara": {
        unit: "1 ラムロクム ・ 1 ラムチョップ ・ 2 キョフテ ・ 1 キュルバストゥ",
        description: "決めきれない方へ、炭火焼きの真髄を一皿に。五品を一枚のお皿で。",
      },
      "karisik-kofte": {
        unit: "2人前 ・ 4 プレーンキョフテ ・ 1 辛味 ・ 1 カシャル入り ・ 1 パストゥルマ入り ・ 1 シェフのキョフテ",
        description: "五種のキョフテを一皿に。分かち合うために。",
      },
      cupra: { description: "丸ごと一尾、炭火で。" },
      levrek: { description: "丸ごと一尾、炭火で。" },
      lufer: { description: "旬の時期、ボスポラス海峡の名物魚。" },
      somon: { description: "厚切り、炭火で。" },
      sardalya: { description: "とうもろこし粉をまぶし、熱した油で。" },
      hamsi: { description: "旬の時期、フライパンで。" },
      istavrit: { description: "とうもろこし粉をまぶし、熱した油で。" },
      mezgit: { description: "骨なし、フライパンでカリッと。" },
      "kabak-tatlisi": { description: "タヒニとくるみを添えて。" },
      profiterol: { description: "チョコレートソースをかけて、冷たいまま。" },
      sutlac: { description: "表面を焼き色よく、オーブンから。" },
      dondurma: { unit: "3スクープ", description: "本日のフレーバーからお好みで。" },
      "kaymakli-hayrabolu": { description: "トラキアのチーズシロップ菓子。タヒニとくるみを添えて。" },
      "antep-fistikli-baklava": { description: "カイマク添え。" },
      "meyve-tabagi": { description: "季節のフルーツを、氷の上に。" },
      peja: { unit: "ノンアルコール" },
    },
  },
  gallery: {
    "ig-kofte": { caption: "パンにのせた köfte — 今日の一皿" },
    "ig-salon-bordo": { caption: "生まれ変わった客席" },
    "ig-guvec": { caption: "kaşar チーズのきのこ土鍋焼き — 新しい一品" },
    "ig-menu-foyu": { caption: "ランプの灯りに照らされたメニュー" },
    "ig-organizasyon": { caption: "団体のお食事のために整えた食卓" },
    "ig-masa-detay": { caption: "お客様を待つテーブル" },
    "ig-salon-ici": { caption: "客席の、ある昼下がり" },
    "ig-gece": { caption: "夜、客席が静けさを取り戻す頃" },
    "ig-lamba": { caption: "テーブルの上の、真鍮のランプ" },
    cephe: {
      caption: "Kasaplar Arası にある店 — 看板には「1939年から続く、生きた伝説」と",
    },
    usta: { caption: "おき火の前の職人 — トングが休むことはありません" },
    porsiyon: {
      caption: "一人前：225グラム、köfte 八個 — 1939年から変わらない一皿",
    },
    ates: { caption: "樫炭がおき火になるまで、待ちます" },
    dokum: { caption: "おき火からおりたものは、熱いうちに" },
    sis: { caption: "串のそばに、生玉ねぎの piyaz は欠かせません" },
    "sofra-kurulumu": { caption: "köfte、piyaz、辛いソース。食卓は整いました" },
    cay: { caption: "お会計の前には、必ずお茶を" },
  },
};
