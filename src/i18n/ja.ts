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
      lead: "価格はサンプルメニューのものです。最新の価格は店舗にお問い合わせください。",
      imageCaption: "250グラム、köfte 8個 — 1939年から変わらない一皿。",
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
      lead: "ご予約、お持ち帰り、その他のご質問はお電話ください。電話のそばには、いつも誰かがおります。",
      phoneTitle: "電話",
      phoneNote: "ご予約とお持ち帰りのご注文は、お電話で承ります。",
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
        id: "paket",
        title: "デリバリー",
        text: "お電話でご注文ください。おき火からおりたまま、お手元までお届けします：+90 288 212 76 12。",
      },
      {
        id: "gelal",
        title: "テイクアウト",
        text: "台から直接どうぞ。おき火から下ろしたてを包みます。通りの向かいには公園 — あとは、ご自由に。",
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
      text: "生玉ねぎの piyaz、おき火で焼いた青唐辛子、自家製の辛いソース。250グラムの一人前に köfte が八個 — 1939年から、同じです。",
    },
  ],
  sampleReviews: [
    {
      quote:
        "köfte の焼き加減がちょうどよく、おき火の香りが皿まで届きます。提供も早く、皆さん気さくでした。",
      context: "味とサービスについて",
    },
    {
      quote:
        "クルクラーレリを通るなら、ここに寄らずに行かないでください。piyaz と自家製の辛いソースは、ほかのどこにもありません。",
      context: "郷土の味について",
    },
    {
      quote:
        "子どもの頃の味が、そのままです。昔は父と来ていました。今は息子と来ています。",
      context: "思い出について",
    },
  ],
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
  reviewsDisclaimer:
    "評点、レビュー件数、順位は TripAdvisor のデータです。レビューカードは、イメージとしての例です。",
  hoursDays: "年中無休",
  servicesList: ["店内でのお食事", "デリバリー", "テイクアウト", "酒類の提供"],
  menuNote:
    "このメニューはサンプルです。商品の内容と価格は、店舗によって更新されます。",
  menu: {
    categories: {
      "imza-kofteler": {
        title: "看板の köfte",
        note: "牛肉＋地理的表示の Kıvırcık 仔羊。樫炭のおき火の上で。",
      },
      izgaralar: {
        title: "炭火焼き",
        note: "すべて樫炭のおき火で、鋳鉄の網の上で。",
      },
      baslangiclar: {
        title: "前菜・スープ",
        note: "朝10時から閉店まで、鍋の中で。",
      },
      yoresel: {
        title: "郷土の味",
        note: "トラキアの食卓から、季節の許すかぎり。",
      },
      salatalar: { title: "サラダ" },
      tatlilar: {
        title: "デザート",
        note: "köfte のあとに甘いものを、トラキア流に。",
      },
      icecekler: { title: "ドリンク" },
    },
    items: {
      "porsiyon-kofte": {
        unit: "250 g · 8個",
        description:
          "玉ねぎと一日おいたパンで練り上げた生地を、樫炭のおき火で封じ込めます。生玉ねぎの piyaz、おき火で焼いた青唐辛子、自家製の辛いソースを添えて。",
      },
      "bir-bucuk-porsiyon": {
        unit: "375 g · 12個",
        description: "しっかり召し上がりたい方へ。同じ生地、同じおき火で、köfte が四個多く。",
      },
      "yarim-porsiyon": {
        unit: "125 g · 4個",
        description: "小さなお客様と、軽めに召し上がりたい方へ。",
      },
      "karisik-izgara": {
        unit: "köfte · ラムチョップ · 串",
        description:
          "迷ってしまう方へ、炉のすべてを一皿に。köfte 四個、ラムチョップ二枚、仔羊の串一本を、おき火で焼いた野菜とともに。",
      },
      "kuzu-pirzola": {
        unit: "4枚",
        description: "トラキアの仔羊。骨を手に持ちたくなるほど、しっとりと。",
      },
      "kuzu-sis": {
        unit: "串2本",
        description:
          "角切りの仔羊を、おき火で封じ込めます。生玉ねぎの piyaz と、焼いた青唐辛子を添えて。",
      },
      "tavuk-sis": {
        unit: "串2本",
        description: "香辛料は控えめに、おき火で。どなたも物足りない思いをなさらないように。",
      },
      "kelle-paca": {
        description:
          "夜中の三時まで開いている köfte 店に、欠かせない一杯。にんにく酢と粉唐辛子を添えて。",
      },
      mercimek: {
        description: "バター仕立てで、とろみもちょうどよく。お好みでレモンを。",
      },
      "tavuk-suyu": {
        description: "オルゾ入りの、家庭風チキンスープ。冬のいちばんの薬です。",
      },
      "koyun-yogurdu": {
        description:
          "乳が豊かになる季節に仕込む羊乳のヨーグルト。スプーンが立つほどの濃さです。季節のものですので、お尋ねください。",
      },
      "trakya-peynir": {
        description: "地元の白チーズを、スライスしたトマトときゅうりとともに。",
      },
      "guvec-kasarli-mantar": {
        description:
          "素焼きの器に入れ、kaşar チーズで覆っておき火で焼き上げます。炉から出たそのまま、ふつふつと音を立てながらお出しします。",
      },
      "kozde-biber-aci-sos": {
        description:
          "おき火で焼いた青唐辛子に、店の自家製辛いソースを添えて。köfte の道連れであり、そのままでも立派な一品です。",
      },
      piyaz: {
        description:
          "白いんげん豆に、たっぷりの玉ねぎ、酢とオリーブオイル。köfte とは切り離せない相棒です。",
      },
      "coban-salata": {
        description: "トマト、きゅうり、ピーマン、玉ねぎを、細かく刻んで。",
      },
      sogus: {
        description: "季節の野菜を大きめに切り、レモンを添えて。",
      },
      hayrabolu: {
        description:
          "トラキアの、チーズを使ったシロップ漬けの菓子。フレッシュチーズで仕込み、温かいままお出しします。",
      },
      "firin-sutlac": {
        description: "石窯で焼いたライスプディング。表面はキャラメル色に。",
      },
      "tel-kadayif": {
        description: "くるみ入り、シロップは控えめに、一切れずつ。",
      },
      trilece: {
        description: "バルカン移民が伝えた贈りもの。ミルクとキャラメルの菓子です。",
      },
      "acik-ayran": {
        description: "泡立てて、銅のカップで。",
      },
      hardaliye: {
        description:
          "クルクラーレリに何百年も伝わる飲みもの。からし種で発酵させた、ぶどうの搾り汁です。",
      },
      salgam: { description: "辛口とマイルドがございます。" },
      kola: { description: "冷蔵庫から、よく冷えたものを。" },
      gazoz: { description: "ガラス瓶で、よく冷えたものを。" },
      cay: { description: "くびれたグラスで、しっかりと濃く。" },
      "turk-kahvesi": { description: "おき火で炊き、ロクムを添えて。" },
      "maden-suyu": { description: "プレーン、またはフルーツ入り。" },
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
      caption: "一人前：250グラム、köfte 八個 — 1939年から変わらない一皿",
    },
    ates: { caption: "樫炭がおき火になるまで、待ちます" },
    dokum: { caption: "おき火からおりたものは、熱いうちに" },
    sis: { caption: "串のそばに、生玉ねぎの piyaz は欠かせません" },
    "sofra-kurulumu": { caption: "köfte、piyaz、辛いソース。食卓は整いました" },
    cay: { caption: "お会計の前には、必ずお茶を" },
  },
};
