
/**
 * @fileOverview Centralized translation dictionary for Adhama Africa Adventures.
 * Includes EN (default), JA, FR, and DE as per language switcher requirements.
 */

export type Language = 'EN' | 'JA' | 'FR' | 'DE';

export const translations: Record<Language, any> = {
  EN: {
    nav: {
      allTours: "ALL TOURS",
      tanzaniaSafaris: "TANZANIA SAFARIS",
      climbingKilimanjaro: "CLIMBING KILIMANJARO",
      zanzibarTours: "ZANZIBAR TOURS",
      planMyTrip: "PLAN MY TRIP",
      planButton: "PLAN YOUR SAFARI",
      whatsapp: "CHAT ON WHATSAPP",
      reviews: "reviews",
      safari: "Tanzania Safari",
      safariZanzibar: "Tanzania Safari & Zanzibar",
      kilimanjaro: "Kilimanjaro",
      zanzibar: "Zanzibar",
      kenyaSafari: "Kenya Safari",
      bigFive: "Big Five Safaris",
      budget: "Budget Safari",
      family: "Family Safari",
      glamping: "Glamping Safari",
      honeymoon: "Honeymoon Safari",
      luxury: "Luxury Safari",
      migration: "Migration Safari",
      whenToClimb: "When to Climb",
      whichRoute: "Which Route",
      beforeClimb: "Before You Climb",
      onKili: "On Kilimanjaro",
      healthSafety: "Health & Safety",
      bookClimb: "Book Your Climb",
      explore: "EXPLORE",
      inspiration: "INSPIRATION",
      plan: "PLAN",
      faqs: "FAQs",
      contact: "Contact Us",
      privacy: "Privacy Policy",
      sustainability: "Sustainability",
      blog: "Blog",
      ecoTourism: "Eco-Tourism",
      homestays: "Homestays",
      experiences: "Experiences",
      activities: "Activities"
    },
    hero: {
      explore: "EXPLORE TANZANIA",
      slide1: {
        label: "TANZANIA TOURS",
        title: "Safaris. Kilimanjaro.",
        accent: "Zanzibar, your way.",
        subtitle: "Plan your Tanzania tour with local experts: wildlife safaris, mountain climbs, beach escapes, and community-first journeys."
      },
      slide2: {
        label: "COMMUNITY FIRST",
        title: "Glory in every",
        accent: "journey.",
        subtitle: "Adhama is Tanzania’s community-based tour operator for travellers who want real impact, real stories, and real connection."
      },
      slide3: {
        label: "SAFARI PACKAGES 2026/2027",
        title: "From camping safaris",
        accent: "to luxury lodges.",
        subtitle: "Choose camping, private, luxury, cultural, family, and active-traveller safari styles across Tanzania’s top destinations."
      },
      slide4: {
        label: "BUSH TO BEACH",
        title: "Wildlife days,",
        accent: "Zanzibar nights.",
        subtitle: "Combine Serengeti, Ngorongoro, Tarangire, Kilimanjaro, Arusha culture, and the Swahili coast in one seamless trip."
      }
    },
    intro: {
      label: "THE ADHAMA APPROACH",
      heading: "Safari is so much more than looking at animals.",
      p1: "At Adhama Africa Adventures, we don't just book tours; we curate deeply personal journeys across the heart of Tanzania. We believe that true travel is about the unscripted moments—the quiet exchange with a Maasai elder, the breath-taking sunrise over a sleeping crater, and the silent connection with a hunting leopard.",
      p2: "As local experts with global standards, we bridge the gap between premium exploration and authentic community impact. Every journey we design supports the ecosystems and people who call this land home.",
      discover: "DISCOVER ADHAMA",
      pillars: ["Wildlife", "Landscape", "People", "Culture"]
    },
    tours: {
      label: "CURATED SELECTION",
      heading: "Featured Safaris.",
      viewAll: "EXPLORE FULL INVENTORY →",
      startingFrom: "Starting From",
      enquireNow: "ENQUIRE NOW",
      noTours: "New seasonal experiences are being curated. Check back soon."
    },
    tripTypes: {
      label: "CURATED EXPERIENCES",
      heading: "What kind of Tanzania are you ",
      headingAccent: "dreaming of?",
      explore: "Explore →",
      viewAll: "VIEW ALL JOURNEYS →"
    },
    calendar: {
      label: "SEASONAL EXPERTISE",
      heading: "Tanzania Travel Calendar.",
      subheading: "Planning your visit around nature's rhythm. From the great calving season to the river crossings.",
      recommendation: "Expert Recommendation",
      weather: "Weather",
      bestPlaces: "Best Places",
      viewing: "Currently Viewing"
    },
    impact: {
      label: "CONSERVATION & COMMUNITY",
      heading: "Travel that leaves a positive ",
      headingAccent: "footprint.",
      p1: "Adhama Africa Adventures was built on the principle that tourism must be a force for good. We operate on a Community First ethos, ensuring that your journey directly empowers the local stewards of our wild places.",
      p2: "Every booking contributes to environmental restoration and local education projects through verified partnerships, creating a lasting legacy in the land we call home.",
      button: "DISCOVER OUR IMPACT →"
    },
    stats: {
      communities: "Communities Empowered",
      trees: "Trees Planted",
      schools: "Schools Supported",
      travellers: "Travellers Hosted"
    },
    reviews: {
      label: "TESTIMONIALS",
      heading: "What our travellers say.",
      subheading: "Unscripted stories from those who have explored the grandeur of Tanzania with us.",
      button: "SHARE YOUR STORY"
    },
    journal: {
      label: "ADHAMA JOURNAL",
      heading: "Stories from Tanzania.",
      button: "VIEW ALL STORIES →",
      readMore: "Read more →"
    },
    cta: {
      label: "THE FIRST STEP",
      heading1: "Your Tanzania story",
      heading2: "starts here.",
      subheading: "Tell us what you're dreaming of. We'll help you turn it into a journey that matters.",
      button1: "PLAN MY SAFARI",
      button2: "CHAT ON WHATSAPP"
    },
    form: {
      title: "Let's design your Tanzania.",
      subtitle: "Tell us what you're dreaming of.",
      name: "Full Name",
      email: "Email Address",
      phone: "WhatsApp / Phone",
      country: "Your Country",
      travellers: "Travellers",
      budget: "Est. Budget (USD)",
      message: "Tell us about your dream trip",
      submit: "Submit Enquiry",
      sending: "Sending...",
      successTitle: "Request Received",
      successMsg: "Thank you for choosing Adhama. A Tanzania specialist will be in touch shortly."
    },
    footer: {
      tagline: "Creating meaningful journeys through Tanzania, where the wild still feels wild and every connection leaves a story.",
      visit: "Visit Us",
      email: "Email Us",
      hotline: "Hotline",
      backToTop: "Back to top"
    }
  },
  JA: {
    nav: {
      allTours: "すべてのツアー",
      tanzaniaSafaris: "タンザニアサファリ",
      climbingKilimanjaro: "キリマンジャロ登山",
      zanzibarTours: "ザンジバルツアー",
      planMyTrip: "旅行を計画する",
      planButton: "サファリを計画",
      whatsapp: "ワッツアップでチャット",
      reviews: "レビュー",
      safari: "タンザニアサファリ",
      safariZanzibar: "サファリ＆ザンジバル",
      kilimanjaro: "キリマンジャロ",
      zanzibar: "ザンジバル",
      kenyaSafari: "ケニアサファリ",
      bigFive: "ビッグファイブサファリ",
      budget: "予算重視サファリ",
      family: "ファミリーサファリ",
      glamping: "グランピングサファリ",
      honeymoon: "ハネムーンサファリ",
      luxury: "ラグジュアリーサファリ",
      migration: "大移動サファリ",
      whenToClimb: "登山の時期",
      whichRoute: "ルートの選択",
      beforeClimb: "登山前の準備",
      onKili: "キリマンジャロにて",
      healthSafety: "健康と安全",
      bookClimb: "登山を予約する",
      explore: "探索",
      inspiration: "インスピレーション",
      plan: "計画",
      faqs: "よくある質問",
      contact: "お問い合わせ",
      privacy: "プライバシーポリシー",
      sustainability: "サステナビリティ",
      blog: "ブログ",
      ecoTourism: "エコツーリズム",
      homestays: "ホームステイ",
      experiences: "体験",
      activities: "アクティビティ"
    },
    hero: {
      explore: "タンザニアを探索する",
      slide1: {
        label: "タンザニアツアー",
        title: "サファリ。キリマンジャロ。",
        accent: "ザンジバルまで。",
        subtitle: "野生動物サファリ、登山、ビーチ滞在、地域に根ざした旅を地元専門家と計画しましょう。"
      },
      slide2: {
        label: "コミュニティ第一",
        title: "すべての旅に",
        accent: "意味を。",
        subtitle: "本物のつながり、地域への還元、忘れられない物語を大切にするタンザニアのツアー会社です。"
      },
      slide3: {
        label: "2026/2027 サファリ",
        title: "キャンプから",
        accent: "高級ロッジまで。",
        subtitle: "キャンプ、プライベート、ラグジュアリー、文化、家族、アクティブな旅を組み合わせられます。"
      },
      slide4: {
        label: "サファリから海へ",
        title: "野生の日々と",
        accent: "ザンジバルの夜。",
        subtitle: "セレンゲティ、ンゴロンゴロ、キリマンジャロ、アルーシャ文化、スワヒリ海岸を一つの旅に。"
      }
    },
    intro: {
      label: "アダマのアプローチ",
      heading: "サファリは単に動物を見る以上のものです。",
      p1: "アダマ・アフリカ・アドベンチャーズでは、単にツアーを予約するだけでなく、タンザニアの中心部を巡る深く個人的な旅をキュレートします。真の旅とは、マサイ族の長老との静かな交流、眠っているクレーターに昇る息を呑むような日の出、狩りをするヒョウとの静かなつながりなど、台本のない瞬間にあると私たちは信じています。",
      p2: "地元の専門家として、私たちはプレミアムな探検と本物のコミュニティへの影響との間のギャップを埋めます。私たちが設計するすべての旅は、この地を故郷と呼ぶ人々をサポートしています。",
      discover: "アダマを発見する",
      pillars: ["野生生物", "風景", "人々", "文化"]
    },
    tours: {
      label: "厳選されたセレクション",
      heading: "注目のサファリ",
      viewAll: "すべてのプランを見る →",
      startingFrom: "開始価格",
      enquireNow: "今すぐ問い合わせる",
      noTours: "新しい体験を準備中です。また後でご確認ください。"
    },
    tripTypes: {
      label: "厳選された体験",
      heading: "どのようなタンザニアを ",
      headingAccent: "夢見ていますか？",
      explore: "詳細 →",
      viewAll: "すべての旅を見る →"
    },
    calendar: {
      label: "季節の専門知識",
      heading: "タンザニア旅行カレンダー",
      subheading: "自然のリズムに合わせた計画を。出産の季節から川渡りまで。",
      recommendation: "専門家の推奨",
      weather: "天気",
      bestPlaces: "おすすめの場所",
      viewing: "現在表示中"
    },
    impact: {
      label: "保全とコミュニティ",
      heading: "ポジティブな足跡を残す ",
      headingAccent: "旅",
      p1: "アダマ・アフリカ・アドベンチャーズは、観光が善の力であるべきだという原則に基づいています。コミュニティ・ファーストの精神で、地元の保護活動を支援しています。",
      p2: "すべての予約は、環境の回復と地元の教育プロジェクトに貢献し、私たちが故郷と呼ぶこの地に永続的な遺産を築きます。",
      button: "私たちの影響を知る →"
    },
    stats: {
      communities: "力を与えたコミュニティ",
      trees: "植えられた木",
      schools: "支援した学校",
      travellers: "迎えた旅行者"
    },
    reviews: {
      label: "お客様の声",
      heading: "旅行者の声",
      subheading: "タンザニアの壮大さを私たちと共に体験した方々の物語。",
      button: "あなたの物語を共有する"
    },
    journal: {
      label: "アダマ・ジャーナル",
      heading: "タンザニアからの物語",
      button: "すべての記事を見る →",
      readMore: "続きを読む →"
    },
    cta: {
      label: "最初の一歩",
      heading1: "あなたのタンザニアの物語は",
      heading2: "ここから始まります。",
      subheading: "あなたの夢を教えてください。私たちがそれを価値ある旅に変えるお手伝いをします。",
      button1: "サファリを計画する",
      button2: "ワッツアップでチャット"
    },
    form: {
      title: "あなただけのタンザニアをデザインしましょう。",
      subtitle: "あなたの夢を教えてください。",
      name: "氏名",
      email: "メールアドレス",
      phone: "WhatsApp / 電話",
      country: "国名",
      travellers: "旅行者数",
      budget: "予算目安 (USD)",
      message: "理想の旅について教えてください",
      submit: "お問い合わせを送信",
      sending: "送信中...",
      successTitle: "リクエストを受領しました",
      successMsg: "アダマをお選びいただきありがとうございます。タンザニアのスペシャリストから追ってご連絡いたします。"
    },
    footer: {
      tagline: "タンザニアを通じた有意義な旅の創造。野生が今も野生であり、すべてのつながりが物語を残す場所。",
      visit: "アクセス",
      email: "メールでのお問い合わせ",
      hotline: "ホットライン",
      backToTop: "トップに戻る"
    }
  },
  FR: {
    nav: {
      allTours: "TOUS LES CIRCUITS",
      tanzaniaSafaris: "SAFARIS TANZANIE",
      climbingKilimanjaro: "ASCENSION KILIMANDJARO",
      zanzibarTours: "TOURS ZANZIBAR",
      planMyTrip: "PLANIFIER MON VOYAGE",
      planButton: "PLANFIEZ VOTRE SAFARI",
      whatsapp: "DISCUTER SUR WHATSAPP",
      reviews: "avis",
      safari: "Safari Tanzanie",
      safariZanzibar: "Safari & Zanzibar",
      kilimanjaro: "Kilimandjaro",
      zanzibar: "Zanzibar",
      kenyaSafari: "Kenya Safari",
      bigFive: "Safari Big Five",
      budget: "Safari Économique",
      family: "Safari en Famille",
      glamping: "Safari Glamping",
      honeymoon: "Lune de Miel",
      luxury: "Safari de Luxe",
      migration: "Safari Migration",
      whenToClimb: "Quand Monter",
      whichRoute: "Quelle Route",
      beforeClimb: "Avant l'Ascension",
      onKili: "Sur le Kilimandjaro",
      healthSafety: "Santé et Sécurité",
      bookClimb: "Réserver votre ascension",
      explore: "EXPLORER",
      inspiration: "INSPIRATION",
      plan: "PLANIFIER",
      faqs: "FAQs",
      contact: "Contactez-nous",
      privacy: "Politique de Confidentialité",
      sustainability: "Durabilité",
      blog: "Blog",
      ecoTourism: "Éco-Tourisme",
      homestays: "Séjours chez l'habitant",
      experiences: "Expériences",
      activities: "Activités"
    },
    hero: {
      explore: "EXPLORER LA TANZANIE",
      slide1: {
        label: "TOURS EN TANZANIE",
        title: "Safaris. Kilimandjaro.",
        accent: "Zanzibar, à votre rythme.",
        subtitle: "Planifiez votre voyage avec des experts locaux : safaris, ascensions, plages et expériences communautaires."
      },
      slide2: {
        label: "COMMUNAUTÉ D'ABORD",
        title: "La beauté dans",
        accent: "chaque voyage.",
        subtitle: "Adhama crée des voyages tanzaniens avec impact réel, histoires vraies et connexions authentiques."
      },
      slide3: {
        label: "PACKAGES SAFARI 2026/2027",
        title: "Du camping safari",
        accent: "aux lodges de luxe.",
        subtitle: "Choisissez camping, privé, luxe, culture, famille et aventure active dans les plus beaux parcs de Tanzanie."
      },
      slide4: {
        label: "BUSH À PLAGE",
        title: "Jours sauvages,",
        accent: "nuits à Zanzibar.",
        subtitle: "Combinez Serengeti, Ngorongoro, Tarangire, Kilimandjaro, culture d’Arusha et côte swahilie."
      }
    },
    intro: {
      label: "L'APPROCHE ADHAMA",
      heading: "Le safari est bien plus que regarder des animaux.",
      p1: "Chez Adhama Africa Adventures, nous organisons des voyages profondément personnels au cœur de la Tanzanie. Nous croyons que le vrai voyage réside dans les moments non scriptés — l'échange tranquille avec un ancien Massaï, le lever du soleil sur un cratère.",
      p2: "En tant qu'experts locaux, nous comblons le fossé entre l'exploration premium et l'impact communautaire authentique. Chaque voyage soutient les écosystèmes et les personnes locales.",
      discover: "DÉCOUVRIR ADHAMA",
      pillars: ["Faune", "Paysage", "Gens", "Culture"]
    },
    tours: {
      label: "SÉLECTION CURATÉE",
      heading: "Safaris à l'honneur.",
      viewAll: "VOIR TOUT L'INVENTAIRE →",
      startingFrom: "À partir de",
      enquireNow: "DEMANDER MAINTENANT",
      noTours: "Nouvelles expériences en cours de préparation. Revenez bientôt."
    },
    tripTypes: {
      label: "EXPÉRIENCES CURATÉES",
      heading: "De quelle Tanzanie ",
      headingAccent: "rêvez-vous ?",
      explore: "Explorer →",
      viewAll: "VOIR TOUS LES VOYAGES →"
    },
    calendar: {
      label: "EXPERTISE SAISONNIÈRE",
      heading: "Calendrier de Voyage Tanzanie.",
      subheading: "Planifiez votre visite selon le rythme de la nature. De la saison des naissances aux traversées de rivières.",
      recommendation: "Recommandation d'Expert",
      weather: "Météo",
      bestPlaces: "Meilleurs Endroits",
      viewing: "Affichage Actuel"
    },
    impact: {
      label: "CONSERVATION & COMMUNAUTÉ",
      heading: "Un voyage qui laisse une ",
      headingAccent: "empreinte positive.",
      p1: "Adhama Africa Adventures a été fondé sur le principe que le tourisme doit être une force pour le bien. Nous opérons selon une philosophie 'Communauté d'abord'.",
      p2: "Chaque réservation contribue à la restauration de l'environnement et à des projets éducatifs locaux par le biais de partenariats vérifiés.",
      button: "DÉCOUVRIR NOTRE IMPACT →"
    },
    stats: {
      communities: "Communautés soutenues",
      trees: "Arbres plantés",
      schools: "Écoles financées",
      travellers: "Voyageurs accueillis"
    },
    reviews: {
      label: "TÉMOIGNAGES",
      heading: "Ce que disent nos voyageurs.",
      subheading: "Histoires vécues par ceux qui ont exploré la grandeur de la Tanzanie avec nous.",
      button: "PARTAGEZ VOTRE HISTOIRE"
    },
    journal: {
      label: "ADHAMA JOURNAL",
      heading: "Histoires de Tanzanie.",
      button: "VOIR TOUTES LES HISTOIRES →",
      readMore: "En savoir plus →"
    },
    cta: {
      label: "LE PREMIER PAS",
      heading1: "Votre histoire en Tanzanie",
      heading2: "commence ici.",
      subheading: "Dites-nous ce dont vous rêvez. Nous vous aiderons à en faire un voyage qui compte.",
      button1: "PLANIFIER MON SAFARI",
      button2: "WHATSAPP"
    },
    form: {
      title: "Concevons votre Tanzanie.",
      subtitle: "Dites-nous ce dont vous rêvez.",
      name: "Nom complet",
      email: "Adresse e-mail",
      phone: "WhatsApp / Téléphone",
      country: "Votre pays",
      travellers: "Voyageurs",
      budget: "Budget est. (USD)",
      message: "Parlez-nous de votre voyage de rêve",
      submit: "Envoyer la demande",
      sending: "Envoi en cours...",
      successTitle: "Demande Reçue",
      successMsg: "Merci d'avoir choisi Adhama. Un spécialiste vous contactera sous peu."
    },
    footer: {
      tagline: "Créer des voyages significatifs à travers la Tanzanie, où le sauvage reste sauvage et chaque rencontre laisse une histoire.",
      visit: "Nous Visiter",
      email: "Nous Écrire",
      hotline: "Assistance",
      backToTop: "Retour en haut"
    }
  },
  DE: {
    nav: {
      allTours: "ALLE TOUREN",
      tanzaniaSafaris: "TANSANIA SAFARIS",
      climbingKilimanjaro: "KILIMANDSCHARO BESTEIGUNG",
      zanzibarTours: "SANSIBAR TOUREN",
      planMyTrip: "MEINE REISE PLANEN",
      planButton: "SAFARI PLANEN",
      whatsapp: "WHATSAPP CHAT",
      reviews: "bewertungen",
      safari: "Tansania Safari",
      safariZanzibar: "Tansania Safari & Sansibar",
      kilimandscharo: "Kilimandscharo",
      zanzibar: "Sansibar",
      kenyaSafari: "Kenia Safari",
      bigFive: "Big Five Safaris",
      budget: "Budget Safari",
      family: "Familien-Safari",
      glamping: "Glamping Safari",
      honeymoon: "Flitterwochen Safari",
      luxury: "Luxus-Safari",
      migration: "Migration Safari",
      whenToClimb: "Beste Zeit",
      whichRoute: "Welche Route",
      beforeClimb: "Vor dem Aufstieg",
      onKili: "Auf dem Kilimandscharo",
      healthSafety: "Gesundheit & Sicherheit",
      bookClimb: "Aufstieg buchen",
      explore: "ERKUNDEN",
      inspiration: "INSPIRATION",
      plan: "PLANEN",
      faqs: "FAQs",
      contact: "Kontakt",
      privacy: "Datenschutz",
      sustainability: "Nachhaltigkeit",
      blog: "Blog",
      ecoTourism: "Ökotourismus",
      homestays: "Gastfamilien",
      experiences: "Erlebnisse",
      activities: "Aktivitäten"
    },
    hero: {
      explore: "TANSANIA ERKUNDEN",
      slide1: {
        label: "TANSANIA TOUREN",
        title: "Safaris. Kilimandscharo.",
        accent: "Sansibar nach Wunsch.",
        subtitle: "Planen Sie Ihre Tansania-Reise mit lokalen Experten: Safari, Bergtour, Strand und Community-Erlebnisse."
      },
      slide2: {
        label: "COMMUNITY FIRST",
        title: "Bedeutung in",
        accent: "jeder Reise.",
        subtitle: "Adhama gestaltet Tansania-Reisen mit echtem Einfluss, echten Geschichten und authentischen Begegnungen."
      },
      slide3: {
        label: "SAFARI-PAKETE 2026/2027",
        title: "Von Camping-Safaris",
        accent: "bis Luxus-Lodges.",
        subtitle: "Wählen Sie Camping, privat, Luxus, Kultur, Familie und aktive Safari-Stile in ganz Tansania."
      },
      slide4: {
        label: "BUSCH BIS STRAND",
        title: "Wilde Tage,",
        accent: "Sansibar-Nächte.",
        subtitle: "Kombinieren Sie Serengeti, Ngorongoro, Tarangire, Kilimandscharo, Arusha-Kultur und Swahili-Küste."
      }
    },
    intro: {
      label: "DER ADHAMA ANSATZ",
      heading: "Safari ist so viel mehr als nur Tiere zu beobachten.",
      p1: "Bei Adhama Africa Adventures kuratieren wir zutiefst persönliche Reisen durch das Herz Tansanias. Wir glauben, dass echtes Reisen aus den ungeplanten Momenten besteht – dem ruhigen Austausch mit einem Massai-Ältesten.",
      p2: "Als lokale Experten schließen wir die Lücke zwischen Premium-Exploration und authentischer gemeinschaftlicher Wirkung. Jede Reise unterstützt die lokalen Ökosysteme.",
      discover: "ADHAMA ENTDECKEN",
      pillars: ["Tierwelt", "Landschaft", "Menschen", "Kultur"]
    },
    tours: {
      label: "KURATIERTE AUSWAHL",
      heading: "Beliebte Safaris.",
      viewAll: "GESAMTES ANGEBOT ERKUNDEN →",
      startingFrom: "Ab",
      enquireNow: "JETZT ANFRAGEN",
      noTours: "Neue Erlebnisse werden gerade kuratiert. Schauen Sie bald wieder vorbei."
    },
    tripTypes: {
      label: "KURATIERTE ERLEBNISSE",
      heading: "Von welchem Tansania ",
      headingAccent: "träumen Sie?",
      explore: "Erkunden →",
      viewAll: "ALLE REISEN ANZEIGEN →"
    },
    calendar: {
      label: "SAISONALE EXPERTISE",
      heading: "Tansania Reisekalender.",
      subheading: "Planen Sie Ihren Besuch nach dem Rhythmus der Natur. Von der Geburtszeit bis zu den Luftüberquerungen.",
      recommendation: "Expertenempfehlung",
      weather: "Wetter",
      bestPlaces: "Beste Orte",
      viewing: "Aktuelle Ansicht"
    },
    impact: {
      label: "NATURSCHUTZ & GEMEINSCHAFT",
      heading: "Reisen, die einen ",
      headingAccent: "positiven Fußabdruck hinterlassen.",
      p1: "Adhama Africa Adventures wurde auf dem Prinzip gegründet, dass Tourismus eine Kraft für das Gute sein muss. Wir handeln nach dem Ethos 'Gemeinschaft zuerst'.",
      p2: "Jede Buchung trägt zur Wiederherstellung der Umwelt und zu lokalen Bildungsprojekten bei.",
      button: "UNSERE WIRKUNG ENTDECKEN →"
    },
    stats: {
      communities: "Unterstützte Gemeinden",
      trees: "Gepflanzte Bäume",
      schools: "Geförderte Schulen",
      travellers: "Empfangene Gäste"
    },
    reviews: {
      label: "TESTIMONIALS",
      heading: "Was unsere Reisenden sagen.",
      subheading: "Echte Geschichten von denen, die die Pracht Tansanias mit uns erkundet haben.",
      button: "TEILEN SIE IHRE GESCHICHTE"
    },
    journal: {
      label: "ADHAMA JOURNAL",
      heading: "Geschichten aus Tansania.",
      button: "ALLE GESCHICHTEN ANZEIGEN →",
      readMore: "Mehr lesen →"
    },
    cta: {
      label: "DER ERSTE SCHRITT",
      heading1: "Ihre Tansania-Geschichte",
      heading2: "beginnt hier.",
      subheading: "Erzählen Sie uns von Ihren Träumen. Wir helfen Ihnen, daraus eine Reise zu machen, die zählt.",
      button1: "PLANIEREN SIE IHRE SAFARI",
      button2: "WHATSAPP"
    },
    form: {
      title: "Lassen Sie uns Ihr Tansania gestalten.",
      subtitle: "Erzählen Sie uns von Ihren Träumen.",
      name: "Vollständiger Name",
      email: "E-Mail-Adresse",
      phone: "WhatsApp / Telefon",
      country: "Ihr Land",
      travellers: "Reisende",
      budget: "Geschätztes Budget (USD)",
      message: "Erzählen Sie uns von Ihrer Traumreise",
      submit: "Anfrage senden",
      sending: "Wird gesendet...",
      successTitle: "Anfrage erhalten",
      successMsg: "Vielen Dank. Ein Tansania-Spezialist wird sich in Kürze bei Ihnen melden."
    },
    footer: {
      tagline: "Bedeutungsvolle Reisen durch Tansania schaffen, wo die Wildnis noch wild ist und jede Verbindung eine Geschichte hinterlässt.",
      visit: "Besuchen Sie uns",
      email: "Schreiben Sie uns",
      hotline: "Hotline",
      backToTop: "Nach oben"
    }
  }
};
