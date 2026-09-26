export type MasterContentBlock = {
  heading: string;
  body?: string;
  items?: string[];
};

export type MasterContentPage = {
  eyebrow: string;
  title: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  blocks: MasterContentBlock[];
  testimonials?: string[];
  cta: string;
};

export const MASTER_CONTENT: Record<string, MasterContentPage> = {
  homepage: {
    eyebrow: 'Master Content Direction',
    title: 'Where Every Journey Transforms Lives',
    intro:
      'Community-based cultural tourism in the heart of East Africa. Adhama Africa Adventures connects responsible travelers with sustainable safaris, cultural immersion, homestays, and community programs in Tanzania.',
    metaTitle: 'Adhama Africa Adventures | Responsible Community Tourism in Tanzania',
    metaDescription:
      'Discover East Africa with Adhama Africa Adventures. Join sustainable safaris, cultural homestays, and community programs in Tanzania.',
    keywords: ['Responsible tourism Tanzania', 'community safaris East Africa', 'cultural immersion tours Africa'],
    blocks: [
      {
        heading: 'Impact Highlights',
        items: ['45+ communities empowered', '12,000+ travelers hosted', '50,000+ trees planted', '22 schools supported'],
      },
      {
        heading: 'Why Travel With Us',
        items: [
          'Responsible tourism: every trip contributes to conservation and community empowerment.',
          'Authentic homestays: live with local families, share traditions, and support livelihoods.',
          'Eco safaris: explore Serengeti, Ngorongoro, and Kilimanjaro with minimal environmental impact.',
          'Global partnerships: trusted by schools, churches, NGOs, and institutions worldwide.',
        ],
      },
      {
        heading: 'Featured Experiences',
        items: [
          'Community homestays in traditional villages with local crafts and education support.',
          'Eco safaris in Serengeti and Ngorongoro designed around responsible wildlife viewing.',
          'Cultural programs with storytelling, music, dance, and intergenerational learning.',
          'Volunteer opportunities with schools, environmental groups, and women cooperatives.',
        ],
      },
      {
        heading: 'Sustainability Promise',
        items: [
          'Conservation projects including tree planting and wildlife protection.',
          'Education support through scholarships and school partnerships.',
          'Women empowerment initiatives.',
          'Renewable energy and waste reduction practices.',
        ],
      },
    ],
    testimonials: [
      'Adhama Africa Adventures gave our school group an unforgettable cultural exchange in Tanzania. The impact on our students and the local community was profound. - UK School Partnership',
      'Our church mission trip combined faith, service, and cultural immersion. We left inspired and connected. - US Church Group',
    ],
    cta: 'Plan your responsible adventure today and be part of sustainable community development in East Africa.',
  },
  about: {
    eyebrow: 'About Adhama',
    title: 'Our Story: Travel That Transforms Communities and Nature',
    intro:
      'Adhama Africa Adventures was founded with a vision: to make tourism a force for good in East Africa. Based in Tanzania, we are a community-driven cultural tourism program dedicated to responsible travel, sustainability, and positive impact.',
    metaTitle: 'About Adhama Africa Adventures | Community-Based Tourism in Tanzania',
    metaDescription:
      'Learn about Adhama Africa Adventures, a community-based tour operator in Tanzania connecting travelers with authentic cultural experiences, eco safaris, and sustainable development programs.',
    keywords: ['Community-based tourism Tanzania', 'sustainable travel Africa', 'cultural immersion East Africa'],
    blocks: [
      {
        heading: 'Who We Are',
        items: [
          'Community-based tour operator working hand-in-hand with local villages, schools, and conservation groups.',
          'Cultural ambassadors: our guides are local storytellers, artisans, and conservationists who share their heritage with pride.',
          'Sustainability advocates: every safari, homestay, and cultural program is designed to protect nature and empower communities.',
        ],
      },
      {
        heading: 'Mission',
        body:
          'To inspire travelers from around the world - UK, US, Australia, Asia, and beyond - to experience Tanzania responsibly while supporting community development, conservation, and cultural preservation.',
      },
      {
        heading: 'Vision',
        body:
          'A future where tourism uplifts communities, protects wildlife, and fosters global understanding through authentic cultural exchange.',
      },
      {
        heading: 'What Makes Us Different',
        items: [
          'Responsible tourism through eco-friendly safaris, low-impact travel, and conservation fees.',
          'Community empowerment through scholarships, women cooperatives, and village development projects.',
          'Global partnerships with schools, churches, NGOs, and environmental organizations.',
        ],
      },
    ],
    cta: 'Join us in building a sustainable future through travel.',
  },
  focus: {
    eyebrow: 'Our Focus',
    title: 'Responsible Tourism Principles and Sustainable Community Development',
    intro:
      'Our focus is rooted in responsible tourism, community development, conservation, education, women empowerment, and transparent local impact.',
    metaTitle: 'Our Focus | Sustainable Tourism Tanzania',
    metaDescription:
      'Explore Adhama Africa Adventures focus on responsible tourism, sustainable community development, conservation, education, and women empowerment.',
    keywords: ['Sustainable tourism Tanzania', 'eco-friendly safaris East Africa'],
    blocks: [
      {
        heading: 'Aligned With UN SDGs',
        items: ['No Poverty', 'Quality Education', 'Decent Work and Economic Growth', 'Life on Land'],
      },
      {
        heading: 'Core Pillars',
        items: [
          'Conservation: habitat care, anti-poaching support, and wildlife protection.',
          'Community: direct resources for classrooms, clinics, water projects, and livelihoods.',
          'Culture: preserving ancestral knowledge, languages, crafts, music, and storytelling.',
          'Carbon reduction: tree planting, waste reduction, and lower-impact travel choices.',
        ],
      },
      {
        heading: 'Responsible Tourism Principles',
        items: [
          'Local supply chains and local employment.',
          'No-plastic operations and reusable systems.',
          'Transparent reporting on where tourism funds go.',
          'Respectful cultural exchange built with community consent.',
        ],
      },
    ],
    cta: 'Explore Tanzania with a team focused on community, culture, carbon reduction, and conservation.',
  },
  destinations: {
    eyebrow: 'Destinations & Activities',
    title: 'Discover Tanzania’s Wonders Through Responsible Travel',
    intro:
      'Every destination and activity is designed to balance unforgettable experiences with sustainable impact. Your journey supports conservation, empowers communities, and preserves traditions.',
    metaTitle: 'Destinations & Activities | Sustainable Safaris & Cultural Tours in Tanzania',
    metaDescription:
      'Explore Serengeti safaris, Ngorongoro Crater, Kilimanjaro treks, Zanzibar beaches, Lake Eyasi cultural tours, and authentic homestays.',
    keywords: ['Tanzania safari tours', 'cultural tourism East Africa', 'eco safaris Tanzania'],
    blocks: [
      {
        heading: 'Featured Destinations',
        items: [
          'Serengeti National Park: Great Migration, diverse wildlife, and local eco-guiding.',
          'Ngorongoro Crater: volcanic caldera, endangered wildlife, education, and conservation support.',
          'Mount Kilimanjaro: responsible trekking with local porters, guides, and village projects.',
          'Zanzibar: beaches, Stone Town, Swahili heritage, spice farms, dhow sailing, and marine conservation.',
          'Lake Eyasi & Hadzabe: Hadzabe hunter-gatherers, Datoga blacksmiths, traditional skills, and family benefit.',
          'Arusha, Ruaha, Southern Highlands, Dar es Salaam, and Lake Victoria: urban culture, remote wilderness, fishing villages, and heritage tours.',
        ],
      },
      {
        heading: 'Detailed Activities',
        items: [
          'Village walking trails, traditional dance, and cooking classes.',
          'Classroom visits, tree planting, and wildlife tracking.',
          'Beadwork workshops, fishing trips, and medicinal plant walks.',
          'Community build programs for schools, clinics, and water projects.',
        ],
      },
    ],
    cta: 'Choose a destination or activity today and join us in building a sustainable future for Tanzania’s communities and nature.',
  },
  ecoTourism: {
    eyebrow: 'Ecotourism Safaris',
    title: 'Wildlife Encounters That Protect Nature and Empower Communities',
    intro:
      'Our ecotourism safaris combine breathtaking wildlife encounters with responsible practices that safeguard Tanzania’s ecosystems and uplift local communities.',
    metaTitle: 'Ecotourism Safaris in Tanzania | Responsible Wildlife Adventures',
    metaDescription:
      'Join eco-friendly safaris in Tanzania. Explore Serengeti, Ngorongoro, Kilimanjaro, and Zanzibar responsibly while supporting conservation and local communities.',
    keywords: ['Eco safaris Tanzania', 'sustainable safari Africa', 'responsible wildlife tours'],
    blocks: [
      {
        heading: 'Safari Experiences',
        items: [
          'Serengeti Eco Safari: Great Migration, small groups, conservation insights, and cultural heritage.',
          'Ngorongoro Conservation Safari: crater wildlife, rhino protection, community projects, education, and anti-poaching support.',
          'Kilimanjaro Wilderness Safari: trekking, reserves, reforestation, clean water projects, and low-waste itineraries.',
          'Zanzibar Marine Safari: coral reefs, marine conservation, fishermen cooperatives, reef restoration, and eco-lodges.',
        ],
      },
      {
        heading: 'Eco Practices',
        items: [
          'Limited group sizes, eco vehicles, and waste reduction.',
          'Safari fees that support wildlife protection and anti-poaching.',
          'Revenue that supports schools, women cooperatives, and village projects.',
          'Tree planting initiatives to offset safari emissions.',
        ],
      },
      {
        heading: 'Packages',
        items: [
          'Community & Wildlife Bush Safari - 7 days',
          'Deep Cultural Immersion Tour - 5 days',
          'Conservation Safari Experience - 8 days',
          'Church & Faith Mission Tour - 10 days',
          'School Discovery Expedition - 7 days',
          'Elders Safari & Heritage Journey - 6 days',
        ],
      },
    ],
    testimonials: [
      'Our eco safari with Adhama Africa Adventures was life-changing. We saw the Great Migration while knowing our trip supported conservation and local schools. - Australian Traveler',
      'Our NGO partnered with Adhama Africa Adventures for a safari and community program. The balance of adventure and impact was extraordinary. - US Environmental Organization',
    ],
    cta: 'Travel responsibly. Protect nature. Empower communities.',
  },
  homestays: {
    eyebrow: 'Homestays',
    title: 'Live the Culture, Share the Tradition, Support the Community',
    intro:
      'Our homestays are cultural bridges. By living with local families in Tanzania, travelers experience daily life, traditions, and hospitality firsthand while supporting community livelihoods.',
    metaTitle: 'Tanzania Homestays | Authentic Cultural Immersion with Adhama Africa Adventures',
    metaDescription:
      'Stay with local families in Tanzania. Experience authentic cultural immersion, support community livelihoods, and contribute to sustainable tourism.',
    keywords: ['Tanzania homestays', 'cultural immersion Africa', 'community tourism Tanzania'],
    blocks: [
      {
        heading: 'What to Expect',
        items: [
          'Simple, comfortable homes hosted by welcoming families.',
          'Traditional Tanzanian meals prepared with local ingredients.',
          'Storytelling, music, dance, artisan workshops, and everyday community life.',
          'Direct support for education, women cooperatives, and village development projects.',
        ],
      },
      {
        heading: 'Perfect for Institutions',
        items: [
          'Schools seeking educational trips and global awareness.',
          'Churches planning mission programs with service and cultural exchange.',
          'Environmental organizations pairing homestays with conservation volunteering.',
          'Elder groups needing gentle, immersive experiences focused on connection.',
        ],
      },
      {
        heading: 'Host Profiles',
        items: ['Maasai Village Homestay in Monduli', 'Kilimanjaro Coffee Farming Family in Moshi', 'Zanzibar Fishermen Community in Stone Town'],
      },
    ],
    testimonials: [
      'Our school group stayed in a village homestay and learned more about Tanzania’s culture than any classroom could teach. - UK School Partnership',
      'Living with a Tanzanian family was the highlight of our mission trip. We shared meals, stories, and faith in a way that built lasting bonds. - US Church Group',
    ],
    cta: 'Stay local. Live authentic. Make an impact.',
  },
  partnerships: {
    eyebrow: 'Local Partnerships',
    title: 'Community and Conservation Collaborations in Tanzania',
    intro:
      'Adhama Africa Adventures acts as a connector between international institutions and Tanzanian communities through transparent, respectful partnerships.',
    metaTitle: 'Local Partnerships | Community & Conservation Collaborations in Tanzania',
    metaDescription:
      'Learn how Adhama Africa Adventures collaborates with schools, women cooperatives, youth organizations, conservation trusts, and grassroots partners.',
    keywords: ['Community partnerships Tanzania', 'sustainable tourism projects Africa'],
    blocks: [
      {
        heading: 'Key Partnerships',
        items: [
          'Schools and education partners.',
          'Women cooperatives and artisan groups.',
          'Youth organizations and village development groups.',
          'Conservation trusts and environmental partners.',
          'Interfaith liaisons and community leaders.',
        ],
      },
      {
        heading: 'Why Partnerships Matter',
        items: [
          'They keep tourism locally accountable.',
          'They make community benefits transparent.',
          'They allow institutions to build long-term exchange instead of one-off visits.',
        ],
      },
    ],
    testimonials: [
      'Our NGO partnered with Adhama Africa Adventures to support conservation and cultural exchange. The collaboration was transparent, impactful, and deeply rewarding. - UK Environmental Organization',
      'Through Adhama Africa Adventures, our school group connected with Tanzanian students. The partnership created lifelong friendships and learning opportunities. - Australian School',
    ],
    cta: 'Partner with us for sustainable change.',
  },
  sustainability: {
    eyebrow: 'Sustainability & CSR',
    title: 'Travel That Protects Nature and Builds Communities',
    intro:
      'Sustainability is not an option; it is our foundation. Every safari, homestay, and cultural program is designed to minimize environmental impact while maximizing community benefits.',
    metaTitle: 'Sustainability & CSR | Responsible Tourism in Tanzania',
    metaDescription:
      'Learn about eco-initiatives, community development projects, and CSR programs supporting conservation, education, and women empowerment.',
    keywords: ['CSR tourism Tanzania', 'sustainable travel Africa', 'eco initiatives East Africa'],
    blocks: [
      {
        heading: 'Sustainability Initiatives',
        items: [
          'Conservation projects: tree planting, wildlife protection, and anti-poaching support.',
          'Eco practices: waste reduction, renewable energy use, and eco-friendly safari operations.',
          'Community empowerment: scholarships, women cooperatives, and village development.',
          'Carbon responsibility: reforestation and clean energy projects.',
        ],
      },
      {
        heading: 'CSR Programs',
        items: [
          'Education support: scholarships, school partnerships, and cultural exchange programs.',
          'Women empowerment: training programs, artisan cooperatives, and income-generating projects.',
          'Wildlife conservation: ranger patrols, habitat restoration, and community-led conservation.',
          'Clean water and health: village water projects and health awareness campaigns.',
        ],
      },
      {
        heading: 'Impact Metrics',
        items: ['78% carbon offset', '92% plastic-free operations', '96% local employment', '89% community revenue share', '65% renewable energy use'],
      },
    ],
    cta: 'Travel that protects nature and builds communities.',
  },
  inspiration: {
    eyebrow: 'Inspiration Experiences',
    title: 'Meaningful Journeys That Inspire Change',
    intro:
      'These tailored programs are designed for schools, churches, NGOs, and elder groups seeking purposeful journeys in Tanzania through cultural exchange, volunteering, and responsible tourism.',
    metaTitle: 'Inspiration Experiences | Cultural & Community Programs in Tanzania',
    metaDescription:
      'Tailored programs for schools, churches, NGOs, and elders. Cultural immersion, volunteering, and sustainable community tourism in Tanzania.',
    keywords: ['Volunteer tourism Tanzania', 'cultural exchange Africa', 'educational tours East Africa'],
    blocks: [
      {
        heading: 'Tailored Programs',
        items: [
          'School and educational groups: student exchange, conservation learning, traditional crafts, music, and storytelling.',
          'Church and faith-based groups: mission trips, service, women empowerment, interfaith dialogue, and shared worship.',
          'NGOs and environmental organizations: tree planting, wildlife protection, water projects, renewable energy, and transparent reporting.',
          'Elder and intergenerational groups: gentle cultural connection, cooking, storytelling, music, and mentoring youth.',
        ],
      },
      {
        heading: 'Signature Experiences',
        items: [
          'Walk with Maasai warriors.',
          'Teach in classrooms.',
          'Cook with grandmothers.',
          'Plant your forest legacy.',
          'Trek Kilimanjaro slopes.',
          'Fish Lake Victoria.',
          'Build classrooms and join drum ceremonies.',
        ],
      },
    ],
    testimonials: [
      'Our school’s cultural exchange with Adhama Africa Adventures gave our students a new perspective on global citizenship and sustainability. - UK School',
      'As an NGO, we appreciated the transparency and measurable impact of our conservation partnership. - Asian Environmental Organization',
    ],
    cta: 'Inspire change through travel.',
  },
  faqs: {
    eyebrow: 'FAQs',
    title: 'Your Questions Answered: Travel Confidently with Adhama Africa Adventures',
    intro:
      'Practical answers about safety, cultural etiquette, sustainability practices, booking, payments, safari packages, homestays, and institutional customization.',
    metaTitle: 'FAQs | Responsible Travel & Safari Questions - Adhama Africa Adventures',
    metaDescription:
      'Find answers about safety, cultural etiquette, sustainability practices, booking, and responsible tourism in Tanzania.',
    keywords: ['Tanzania travel FAQs', 'responsible tourism questions', 'safari preparation tips'],
    blocks: [
      {
        heading: 'General Travel Questions',
        items: [
          'Tanzania is welcoming, and Adhama prioritizes safety with trusted guides, secure accommodations, and responsible safari practices.',
          'Most travelers from the UK, US, Australia, and Asia require a tourist visa.',
          'Travelers should consult a doctor for vaccination advice before traveling.',
        ],
      },
      {
        heading: 'Cultural Etiquette',
        items: ['Dress modestly in villages and religious settings.', 'Always ask permission before photographing people.'],
      },
      {
        heading: 'Booking & Payments',
        items: [
          'Book through the website or contact the team for tailored itineraries.',
          'Payment options include secure online payments, bank transfers, and institutional invoicing.',
          'Transparent receipts show how funds support community projects.',
        ],
      },
      {
        heading: 'Safari & Homestay Experience',
        items: [
          'Safari packages can include accommodation, meals, park fees, local guides, and conservation contributions.',
          'Homestays include living with a local family, shared meals, and cultural activities.',
          'Institutional programs can be customized for schools, churches, NGOs, and elder groups.',
        ],
      },
    ],
    cta: 'Still have questions? Contact Adhama Africa Adventures today.',
  },
  blog: {
    eyebrow: 'Blog Strategy',
    title: 'Stories That Inspire Responsible Travel',
    intro:
      'The blog should educate, inspire, and connect travelers with communities through responsible tourism stories, conservation updates, cultural insights, and institutional case studies.',
    metaTitle: 'Blog | Responsible Tourism & Cultural Insights - Adhama Africa Adventures',
    metaDescription:
      'Read stories on responsible tourism, cultural immersion, eco safaris, and community development in Tanzania.',
    keywords: ['Responsible travel blog Tanzania', 'cultural tourism stories Africa'],
    blocks: [
      {
        heading: 'Blog Categories',
        items: ['Responsible Tourism', 'Safari & Wildlife', 'Cultural Immersion', 'Community Development', 'Global Partnerships'],
      },
      {
        heading: 'Sample Blog Posts',
        items: [
          '10 Ways Your Safari Supports Conservation in Tanzania',
          'Living with a Tanzanian Family: What Homestays Teach Us About Culture',
          'From Classrooms to Communities: How Schools Benefit from Cultural Exchange',
          'Faith and Service: Church Mission Trips That Inspire Change',
          'Women Empowerment Through Tourism: Stories from Artisan Cooperatives',
        ],
      },
    ],
    cta: 'Read. Learn. Inspire.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s Plan Your Responsible Adventure Together',
    intro:
      'Whether you are an individual traveler seeking an eco safari or an institution planning cultural exchange, Adhama Africa Adventures is ready to help.',
    metaTitle: 'Contact Adhama Africa Adventures | Responsible Tourism in Tanzania',
    metaDescription:
      'Contact Adhama Africa Adventures for safari bookings, cultural tours, homestays, and institutional partnerships.',
    keywords: ['Contact Tanzania tour operator', 'Adhama Africa Adventures contact'],
    blocks: [
      {
        heading: 'Inquiry Form Fields',
        items: [
          'Full name',
          'Email address',
          'Phone number',
          'Institution or organization, if applicable',
          'Type of inquiry: safari, homestay, cultural program, partnership, or other',
          'Message',
        ],
      },
      {
        heading: 'Institutional Inquiries',
        items: [
          'Schools planning cultural exchange trips.',
          'Churches organizing mission programs.',
          'NGOs and environmental organizations seeking partnerships.',
          'Elder groups looking for immersive, gentle travel experiences.',
        ],
      },
      {
        heading: 'Contact Information',
        items: [
          'Office location: Arusha, Tanzania - the gateway to East Africa’s greatest adventures.',
          'Email: info@adhamaadventures.co.tz',
          'WhatsApp / Phone: +255 753 300 602',
        ],
      },
    ],
    testimonials: [
      'Communication with Adhama Africa Adventures was seamless. They responded quickly and tailored our safari to meet both our adventure and sustainability goals. - US Traveler',
      'Our school appreciated the clear guidance and transparent communication. Planning our cultural exchange was easy and inspiring. - UK School',
    ],
    cta: 'Your journey starts here.',
  },
};
