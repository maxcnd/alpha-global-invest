/*
  Alpha Global Invest – multi‑language support script
  This script defines translations for English, German, Italian and French, and
  applies them to the page. Text elements that require translation must
  include a `data-i18n` attribute with the corresponding key, while input
  placeholders use `data-ph` attributes. Language buttons use
  `data-lang-btn` to indicate which language they set.
*/

const translations = {
  en: {
    // Navigation
    'nav.mandate': 'Mandate',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.values': 'Values',
    'nav.client': 'Client Login',
    'nav.contact': 'Contact',
    'nav.legal': 'Legal & Disclaimer',
    // Hero
    'hero.kicker': 'By invitation. By appointment.',
    'hero.h1': 'Private Investment Office',
    'hero.tagline': 'A discreet partner for preserving and growing family capital over generations.',
    'hero.cta.services': 'Our Services',
    // About / Mandate
    'mandate.title': 'Our Mandate',
    // Updated mandate text to remove explicit minimum capital and use banking terminology
    'mandate.text': 'Alpha Global Invest is an independent private investment office built on Swiss‑rooted values of discretion, safety and precision. We serve private clients and families, focusing on capital preservation and long‑term growth. Our mission is to protect and grow your wealth through disciplined risk management, careful execution and a long‑term perspective. Engagements are selective and by appointment only.',
    // Duplicate mandate content for the About section to avoid the word "Mandate"
    'about.title': 'About Alpha Global Invest',
    'about.text': 'Alpha Global Invest is an independent private investment office built on Swiss‑rooted values of discretion, safety and precision. We serve private clients and families, focusing on capital preservation and long‑term growth. Our mission is to protect and grow your wealth through disciplined risk management, careful execution and a long‑term perspective. Engagements are selective and by appointment only.',
    // Values
    'values.title': 'Our Values',
    'values.safety.title': 'Safety & Security',
    'values.safety.text': 'Capital preservation and disciplined risk management underpin every decision we make.',
    'values.discretion.title': 'Discretion & Privacy',
    'values.discretion.text': 'We operate quietly and confidentially, maintaining a low public profile and need‑to‑know communication.',
    'values.family.title': 'Family & Legacy',
    'values.family.text': 'Multi‑generational thinking ensures your wealth endures and benefits your heirs responsibly.',
    'values.precision.title': 'Precision & Tradition',
    'values.precision.text': 'Rooted in centuries‑old craftsmanship, we apply rigour and exactness in every service and relationship.',
    // Client profile
    'client.title': 'Client Profile',
    'client.min.title': 'Minimum capital',
    'client.min.value': 'CHF 5 million',
    'client.focus.title': 'Focus',
    'client.focus.value': 'Private wealth',
    'client.mandates.title': 'Mandates',
    'client.mandates.value': 'Selective & tailored',
    'client.note': 'We do not serve institutional mandates. Engagements are subject to suitability, availability and applicable laws.',

    // Client login page
    'login.title': 'Client Login',
    'login.intro': 'Existing clients can access their accounts below.',
    'login.username': 'Username',
    'login.password': 'Password',
    'login.submit': 'Log in',
    'login.forgot': 'Forgot password?',
    'login.forgot.link': 'Contact us',
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to discuss how we can protect and grow your family capital? Send us a confidential request and we will contact you personally.',
    'contact.name': 'Your name',
    'contact.email': 'Your email',
    'contact.message': 'How can we assist you?',
    'contact.submit': 'Send Request',
    // Footer
    'footer.copy': '© 2025 Alpha Global Invest. All rights reserved.',
    'footer.legal': 'Legal & Disclaimer',
    // Call to action for appointment
    'cta.title': 'Ready to discuss? Book an appointment',
    'cta.button': 'Book appointment',
    'cta.text': 'We invite prospective clients to meet with us privately to explore how our services align with your family’s objectives.',
    // Services page
    'services.title': 'Our Services',
    'services.intro': 'Structured around what high‑conviction families actually need — with one accountable partner and a calm, rigorous process. Select a service below to read more about how we work.',
    'services.advisory.title': 'Investment Advisory',
    'services.advisory.text': 'Independent advice and tailored execution for those who wish to remain in control of decisions, with our precision and guidance.',
    'services.management.title': 'Asset Management',
    'services.management.text': 'Discretionary mandates and strategy portfolios built on disciplined risk control and a focus on capital preservation.',
    'services.real.title': 'Real Assets & Real Estate',
    'services.real.text': 'Selective exposure to real assets and real estate investments to diversify portfolios and capture long‑term value.',
    'services.credit.title': 'Credit & Financing',
    'services.credit.text': 'Tailored credit solutions, including Lombard loans and liquidity planning, aligned with your overall wealth strategy.',
    'services.succession.title': 'Succession & Inheritance',
    'services.succession.text': 'Structured planning and governance to ensure smooth transition of wealth and harmony across generations.',
    'services.philanthropy.title': 'Philanthropy & Foundation',
    'services.philanthropy.text': 'Guidance in creating and managing charitable initiatives and foundations, with thoughtful governance and oversight.',
    'services.learn': 'Learn more →',
    // Service detail: Investment Advisory
    'service.advisory.h1': 'Investment Advisory',
    'service.advisory.h2': 'Investment Advisory',
    'service.advisory.p1': 'We provide independent investment advice to families and private clients who wish to remain in control of their decisions. Together we define clear objectives, risk budgets and asset allocation strategies tailored to your circumstances, always putting capital preservation first.',
    'service.advisory.p2': 'Our advisory work spans all major asset classes — equities, fixed income, private markets and real assets. We undertake thorough due diligence on opportunities, propose strategies aligned with your long‑term goals and implement transactions with care and precision.',
    'service.advisory.p3': 'You retain final decision‑making authority, while we prepare investment plans, facilitate execution and monitor portfolios. Transparent reporting and continuous dialogue ensure that your portfolio evolves with market conditions and your personal objectives.',
    // Service detail: Asset Management
    'service.management.h1': 'Asset Management',
    'service.management.h2': 'Asset Management',
    'service.management.p1': 'Our discretionary asset management service builds and manages portfolios that are aligned with each client’s objectives, risk tolerance and time horizon. We allocate capital across asset classes using robust frameworks that balance return opportunities with preservation of wealth.',
    'service.management.p2': 'We draw on a disciplined investment process, informed by macroeconomic analysis and deep research, to construct diversified portfolios. Our investment committee continuously monitors markets, risk factors and performance, adjusting exposures when fundamentals change.',
    'service.management.p3': 'Transparent reporting and regular dialogue keep you informed of positioning, performance and risk exposures. Our aim is to deliver steady compounding, avoid permanent capital loss and foster peace of mind across market cycles.',
    // Service detail: Real Assets & Real Estate
    'service.real.h1': 'Real Assets & Real Estate',
    'service.real.h2': 'Real Assets & Real Estate',
    'service.real.p1': 'Real assets and carefully selected real estate investments add stability and diversification to a portfolio. We identify opportunities that offer steady income and long‑term value, focusing on fundamentals and resilience.',
    'service.real.p2': 'These investments may include infrastructure, property developments and other tangible assets that provide potential inflation protection and a low correlation to traditional financial markets. We conduct thorough analysis of quality, cash‑flow durability and alignment with your investment strategy.',
    'service.real.p3': 'By partnering with experienced specialists and maintaining prudent leverage, we ensure that real‑asset exposure enhances portfolio robustness without compromising liquidity or transparency.',
    // Service detail: Credit & Financing
    'service.credit.h1': 'Credit & Financing',
    'service.credit.h2': 'Credit & Financing',
    'service.credit.p1': 'We design credit and financing solutions that complement your investment strategy. From Lombard loans secured on portfolios to bespoke liquidity facilities, each facility is structured to meet your needs without jeopardising the integrity of your overall wealth plan.',
    'service.credit.p2': 'We align borrowing terms with your risk budget, working with reputable banking partners while maintaining independence and confidentiality. Our aim is to provide flexibility so that you can access capital when needed — for investment, estate planning or liquidity events — without forcing unwanted asset sales.',
    'service.credit.p3': 'Every financing solution is monitored alongside your broader portfolio to ensure that leverage remains sensible and sustainable. Clear documentation and transparent reporting underpin our financing process.',
    // Service detail: Succession & Inheritance
    'service.succession.h1': 'Succession & Inheritance',
    'service.succession.h2': 'Succession & Inheritance',
    'service.succession.p1': 'The orderly transfer of wealth across generations is a delicate and complex endeavour. We work alongside families to design frameworks that ensure continuity, stability and fairness, reflecting each family’s unique values and objectives.',
    'service.succession.p2': 'Our succession services encompass governance structures, wealth transfer planning, family governance meetings and communication strategies. We facilitate intergenerational dialogue and coordinate trusted legal and tax advisers to develop resilient structures.',
    'service.succession.p3': 'With thoughtful planning and careful execution, we help minimise potential conflict and preserve family unity, so that your legacy endures through generations.',
    // Service detail: Philanthropy & Foundation
    'service.philanthropy.h1': 'Philanthropy & Foundation',
    'service.philanthropy.h2': 'Philanthropy & Foundation',
    'service.philanthropy.p1': 'Many families aspire to make a positive impact beyond their personal wealth. We assist in establishing and managing philanthropic initiatives and private foundations that reflect your values and desired outcomes.',
    'service.philanthropy.p2': 'Our guidance covers the full lifecycle of giving: from defining a mission and governance structure to selecting projects, making grants and measuring impact. We integrate philanthropic efforts into your broader wealth strategy, ensuring coherence and sustainability.',
    'service.philanthropy.p3': 'By embedding strong governance and transparent processes, we help you create a lasting legacy of generosity while maintaining harmony and engagement across generations.',
    // Legal page
    'legal.title': 'Legal & Disclaimer',
    'legal.p1': 'The information on this website is provided for general informational purposes only and does not constitute investment advice or an offer. Services are offered only where permitted by law and subject to suitability and availability. Please contact us privately for formal terms, conditions and regulatory disclosures.',
    'legal.p2': 'Alpha Global Invest operates independently. Regulatory status and registrations will be provided upon request once available.',
    'legal.p3': 'We adopt a privacy‑first culture. Any communication you send through the contact form is treated confidentially. Please do not send sensitive personal information unless requested via an agreed secure channel.'
  },
  de: {
    // Navigation
    'nav.mandate': 'Mandat',
    'nav.services': 'Leistungen',
    'nav.about': 'Über uns',
    'nav.values': 'Werte',
    'nav.client': 'Klienten-Login',
    'nav.contact': 'Kontakt',
    'nav.legal': 'Rechtliches & Haftungsausschluss',
    // Hero
    'hero.kicker': 'Auf Einladung. Nach Termin.',
    'hero.h1': 'Unabhängiges Family Office',
    'hero.tagline': 'Ein diskreter Partner zur Bewahrung und Vermehrung von Familienvermögen über Generationen.',
    'hero.cta.services': 'Unsere Leistungen',
    // Mandate
    // About / Mandat
    'mandate.title': 'Unser Mandat',
    // Aktualisierter Mandatstext ohne konkrete Mindestanlage und mit seriöser Terminologie
    'mandate.text': 'Alpha Global Invest ist ein unabhängiges privates Investmentbüro, das auf schweizerischen Werten wie Diskretion, Sicherheit und Präzision aufbaut. Wir betreuen Privatkunden und Familien, konzentrieren uns auf Kapitalerhalt und langfristiges Wachstum. Unsere Mission ist es, Ihr Vermögen durch diszipliniertes Risikomanagement, sorgfältige Umsetzung und eine langfristige Perspektive zu schützen und zu mehren. Mandate sind selektiv und nur nach Terminvereinbarung möglich.',
    'about.title': 'Über Alpha Global Invest',
    'about.text': 'Alpha Global Invest ist ein unabhängiges privates Investmentbüro, das auf schweizerischen Werten wie Diskretion, Sicherheit und Präzision aufbaut. Wir betreuen Privatkunden und Familien, konzentrieren uns auf Kapitalerhalt und langfristiges Wachstum. Unsere Mission ist es, Ihr Vermögen durch diszipliniertes Risikomanagement, sorgfältige Umsetzung und eine langfristige Perspektive zu schützen und zu mehren. Mandate sind selektiv und nur nach Terminvereinbarung möglich.',
    // Values
    'values.title': 'Unsere Werte',
    'values.safety.title': 'Sicherheit & Schutz',
    'values.safety.text': 'Kapitalerhalt und diszipliniertes Risikomanagement bilden die Grundlage jeder Entscheidung.',
    'values.discretion.title': 'Diskretion & Privatsphäre',
    'values.discretion.text': 'Wir arbeiten ruhig und vertraulich, mit geringer öffentlicher Sichtbarkeit und Kommunikation nach dem Need-to-know-Prinzip.',
    'values.family.title': 'Familie & Vermächtnis',
    'values.family.text': 'Mehrgenerationen-Denken stellt sicher, dass Ihr Vermögen erhalten bleibt und Ihren Erben zugutekommt.',
    'values.precision.title': 'Präzision & Tradition',
    'values.precision.text': 'Tief verwurzelt in jahrhundertelanger Handwerkskunst wenden wir in jeder Dienstleistung Strenge und Genauigkeit an.',
    // Client profile
    'client.title': 'Klientenprofil',
    'client.min.title': 'Mindestkapital',
    'client.min.value': '5 Mio. CHF',
    'client.focus.title': 'Fokus',
    'client.focus.value': 'Privatvermögen',
    'client.mandates.title': 'Mandate',
    'client.mandates.value': 'Selektiv & massgeschneidert',
    'client.note': 'Wir betreuen keine institutionellen Mandate. Mandate unterliegen der Eignung, Verfügbarkeit und den geltenden Gesetzen.',

    // Klienten-Login Seite
    'login.title': 'Klienten-Login',
    'login.intro': 'Bestehende Klienten können unten auf ihre Accounts zugreifen.',
    'login.username': 'Benutzername',
    'login.password': 'Passwort',
    'login.submit': 'Anmelden',
    'login.forgot': 'Passwort vergessen?',
    'login.forgot.link': 'Kontaktieren Sie uns',
    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Bereit, darüber zu sprechen, wie wir Ihr Familienvermögen schützen und mehren können? Senden Sie uns eine vertrauliche Anfrage, und wir melden uns persönlich bei Ihnen.',
    'contact.name': 'Ihr Name',
    'contact.email': 'Ihre E-Mail',
    'contact.message': 'Wie können wir Ihnen helfen?',
    'contact.submit': 'Anfrage senden',
    // Footer
    'footer.copy': '© 2025 Alpha Global Invest. Alle Rechte vorbehalten.',
    'footer.legal': 'Rechtliches & Haftungsausschluss',
    // Call to action for appointment
    'cta.title': 'Bereit zum Gespräch? Termin vereinbaren',
    'cta.text': 'Wir laden potenzielle Klienten zu einem persönlichen Treffen ein, um zu prüfen, wie unsere Leistungen zu Ihren familiären Zielen passen.',
    'cta.button': 'Termin vereinbaren',
    // Services page
    'services.title': 'Unsere Leistungen',
    'services.intro': 'Strukturiert nach dem, was Familien mit hohen Überzeugungen wirklich benötigen – mit einem verantwortlichen Partner und einem ruhigen, rigorosen Prozess. Wählen Sie unten einen Service, um mehr über unsere Arbeit zu erfahren.',
    'services.advisory.title': 'Investmentberatung',
    'services.advisory.text': 'Unabhängige Beratung und maßgeschneiderte Umsetzung für diejenigen, die die Entscheidungsgewalt behalten möchten, mit unserer Präzision und Führung.',
    'services.management.title': 'Vermögensverwaltung',
    'services.management.text': 'Diskretionäre Mandate und strategische Portfolios, die auf disziplinierter Risikokontrolle und Fokus auf Kapitalerhalt basieren.',
    'services.real.title': 'Real Assets & Immobilien',
    'services.real.text': 'Selektive Beteiligung an Real Assets und Immobilien zur Diversifizierung von Portfolios und zum Einfangen langfristigen Wertes.',
    'services.credit.title': 'Kredite & Finanzierung',
    'services.credit.text': 'Maßgeschneiderte Finanzierungslösungen, einschließlich Lombardkrediten und Liquiditätsplanung, im Einklang mit Ihrer Gesamtvermögensstrategie.',
    'services.succession.title': 'Nachfolge & Erbschaft',
    'services.succession.text': 'Strukturierte Planung und Governance, um einen reibungslosen Übergang von Vermögen und Harmonie über Generationen hinweg sicherzustellen.',
    'services.philanthropy.title': 'Philanthropie & Stiftung',
    'services.philanthropy.text': 'Beratung bei der Schaffung und Verwaltung von philanthropischen Initiativen und Stiftungen mit durchdachter Governance und Aufsicht.',
    'services.learn': 'Mehr erfahren →',
    // Service detail: Investment Advisory
    'service.advisory.h1': 'Investmentberatung',
    'service.advisory.h2': 'Investmentberatung',
    'service.advisory.p1': 'Wir bieten unabhängige Anlageberatung für Familien und Privatkunden, die die Kontrolle über ihre Entscheidungen behalten möchten. Gemeinsam definieren wir klare Ziele, Risikobudgets und Anlagestrategien, die auf Ihre Umstände zugeschnitten sind, wobei der Kapitalerhalt stets an erster Stelle steht.',
    'service.advisory.p2': 'Unsere Beratung erstreckt sich über alle wichtigen Anlageklassen – Aktien, festverzinsliche Wertpapiere, private Märkte und Real Assets. Wir führen gründliche Due‑Diligence‑Prüfungen durch, schlagen Strategien vor, die mit Ihren langfristigen Zielen übereinstimmen, und führen Transaktionen sorgfältig aus.',
    'service.advisory.p3': 'Sie behalten die letztliche Entscheidungsbefugnis, während wir Anlagepläne vorbereiten, die Ausführung erleichtern und Portfolios überwachen. Transparente Berichterstattung und kontinuierlicher Dialog stellen sicher, dass sich Ihr Portfolio mit den Marktbedingungen und Ihren persönlichen Zielen entwickelt.',
    // Service detail: Asset Management
    'service.management.h1': 'Vermögensverwaltung',
    'service.management.h2': 'Vermögensverwaltung',
    'service.management.p1': 'Unser diskretionärer Vermögensverwaltungsservice baut und verwaltet Portfolios, die mit den Zielen, der Risikotoleranz und dem Zeithorizont jedes Kunden übereinstimmen. Wir allokieren Kapital über verschiedene Anlageklassen hinweg mithilfe robuster Rahmenwerke, die Renditechancen mit dem Schutz des Vermögens in Einklang bringen.',
    'service.management.p2': 'Wir stützen uns auf einen disziplinierten Anlageprozess, der durch makroökonomische Analysen und fundierte Forschung untermauert wird, um diversifizierte Portfolios zu konstruieren. Unser Investmentkomitee überwacht kontinuierlich Märkte, Risikofaktoren und Performance und passt Engagements an, wenn sich die Grundlagen ändern.',
    'service.management.p3': 'Transparente Berichterstattung und regelmäßiger Dialog halten Sie über Positionierung, Performance und Risikofaktoren auf dem Laufenden. Unser Ziel ist es, stetiges Wachstum zu liefern, dauerhafte Kapitalverluste zu vermeiden und Ruhe über Marktzyklen hinweg zu gewährleisten.',
    // Service detail: Real Assets & Real Estate
    'service.real.h1': 'Real Assets & Immobilien',
    'service.real.h2': 'Real Assets & Immobilien',
    'service.real.p1': 'Real Assets und sorgfältig ausgewählte Immobilieninvestitionen fügen einem Portfolio Stabilität und Diversifikation hinzu. Wir identifizieren Chancen, die ein stetiges Einkommen und langfristigen Wert bieten, wobei wir uns auf Fundamentaldaten und Widerstandsfähigkeit konzentrieren.',
    'service.real.p2': 'Diese Investitionen können Infrastruktur, Immobilienprojekte und andere materielle Assets umfassen, die potenziellen Inflationsschutz und eine geringe Korrelation zu traditionellen Finanzmärkten bieten. Wir führen eine gründliche Analyse der Qualität, der Dauerhaftigkeit der Cashflows und der Übereinstimmung mit Ihrer Anlagestrategie durch.',
    'service.real.p3': 'Durch die Zusammenarbeit mit erfahrenen Spezialisten und die Aufrechterhaltung einer angemessenen Verschuldung stellen wir sicher, dass die Real‑Asset‑Exponierung die Portfoliorobustheit erhöht, ohne Liquidität oder Transparenz zu beeinträchtigen.',
    // Service detail: Credit & Financing
    'service.credit.h1': 'Kredite & Finanzierung',
    'service.credit.h2': 'Kredite & Finanzierung',
    'service.credit.p1': 'Wir gestalten Kredit- und Finanzierungslösungen, die Ihre Anlagestrategie ergänzen. Von Lombardkrediten, die durch Portfolios besichert sind, bis hin zu maßgeschneiderten Liquiditätsfazilitäten – jede Einrichtung wird so strukturiert, dass sie Ihren Bedürfnissen entspricht, ohne die Integrität Ihres Gesamtvermögensplans zu gefährden.',
    'service.credit.p2': 'Wir stimmen die Kreditbedingungen auf Ihr Risikobudget ab, arbeiten mit renommierten Bankpartnern zusammen und bewahren gleichzeitig Unabhängigkeit und Vertraulichkeit. Unser Ziel ist es, Flexibilität zu bieten, sodass Sie Kapital bei Bedarf abrufen können – für Investitionen, Nachfolgeplanung oder Liquiditätsereignisse –, ohne ungewollte Vermögensverkäufe zu erzwingen.',
    'service.credit.p3': 'Jede Finanzierungslösung wird zusammen mit Ihrem Gesamtportfolio überwacht, um sicherzustellen, dass die Verschuldung sinnvoll und nachhaltig bleibt. Klare Dokumentation und transparente Berichterstattung untermauern unseren Finanzierungsprozess.',
    // Service detail: Succession & Inheritance
    'service.succession.h1': 'Nachfolge & Erbschaft',
    'service.succession.h2': 'Nachfolge & Erbschaft',
    'service.succession.p1': 'Die geordnete Vermögensübergabe über Generationen hinweg ist ein sensibles und komplexes Unterfangen. Wir arbeiten mit Familien zusammen, um Rahmenwerke zu entwerfen, die Kontinuität, Stabilität und Fairness gewährleisten und die einzigartigen Werte und Ziele jeder Familie widerspiegeln.',
    'service.succession.p2': 'Unsere Nachfolgedienstleistungen umfassen Governance-Strukturen, Vermögensübertragungsplanung, Familientreffen und Kommunikationsstrategien. Wir erleichtern den intergenerationalen Dialog und koordinieren vertrauenswürdige Rechts- und Steuerberater, um robuste Strukturen zu entwickeln.',
    'service.succession.p3': 'Mit sorgfältiger Planung und sorgfältiger Umsetzung helfen wir, potenzielle Konflikte zu minimieren und die Familieneinheit zu bewahren, sodass Ihr Vermächtnis über Generationen hinweg Bestand hat.',
    // Service detail: Philanthropy & Foundation
    'service.philanthropy.h1': 'Philanthropie & Stiftung',
    'service.philanthropy.h2': 'Philanthropie & Stiftung',
    'service.philanthropy.p1': 'Viele Familien möchten über ihr persönliches Vermögen hinaus positiv wirken. Wir helfen bei der Einrichtung und Verwaltung philanthropischer Initiativen und privater Stiftungen, die Ihre Werte und gewünschten Ergebnisse widerspiegeln.',
    'service.philanthropy.p2': 'Unsere Beratung umfasst den gesamten Zyklus des Gebens: von der Definition einer Mission und Governance-Struktur bis hin zur Auswahl von Projekten, der Vergabe von Zuschüssen und der Messung der Wirkung. Wir integrieren philanthropische Bemühungen in Ihre umfassendere Vermögensstrategie, um Kohärenz und Nachhaltigkeit zu gewährleisten.',
    'service.philanthropy.p3': 'Durch die Einbettung starker Governance und transparenter Prozesse helfen wir Ihnen, ein bleibendes Vermächtnis der Grosszügigkeit zu schaffen, während wir Harmonie und Engagement über Generationen hinweg aufrechterhalten.',
    // Legal page
    'legal.title': 'Rechtliches & Haftungsausschluss',
    'legal.p1': 'Die Informationen auf dieser Website dienen ausschließlich allgemeinen Informationszwecken und stellen keine Anlageberatung oder ein Angebot dar. Dienstleistungen werden nur dort angeboten, wo dies gesetzlich zulässig ist, und unterliegen der Eignung und Verfügbarkeit. Bitte kontaktieren Sie uns privat für formale Bedingungen, Konditionen und regulatorische Offenlegungen.',
    'legal.p2': 'Alpha Global Invest operiert unabhängig. Regulatorischer Status und Registrierungen werden auf Anfrage, sobald verfügbar, zur Verfügung gestellt.',
    'legal.p3': 'Wir pflegen eine Privacy‑First‑Kultur. Jede Nachricht, die Sie über das Kontaktformular senden, wird vertraulich behandelt. Bitte senden Sie keine sensiblen persönlichen Informationen, es sei denn, dies wird über einen vereinbarten sicheren Kanal angefordert.'
  },
  it: {
    // Navigation
    'nav.mandate': 'Mandato',
    'nav.services': 'Servizi',
    'nav.about': 'Chi siamo',
    'nav.values': 'Valori',
    'nav.client': 'Accesso clienti',
    'nav.contact': 'Contatti',
    'nav.legal': 'Informazioni legali & Disclaimer',
    // Hero
    'hero.kicker': 'Su invito. Su appuntamento.',
    'hero.h1': 'Family office indipendente',
    'hero.tagline': 'Un partner discreto per preservare e far crescere il capitale familiare nel tempo.',
    'hero.cta.services': 'I nostri servizi',
    // Mandate
    // About / Mandato
    'mandate.title': 'Il nostro mandato',
    // Testo aggiornato per il mandato senza indicare importi minimi
    'mandate.text': 'Alpha Global Invest è un family office indipendente costruito sui valori svizzeri di discrezione, sicurezza e precisione. Serviamo clienti privati e famiglie, con un’attenzione alla conservazione del capitale e alla crescita a lungo termine. La nostra missione è proteggere e far crescere il vostro patrimonio attraverso una gestione del rischio disciplinata, un’esecuzione accurata e una visione di lungo periodo. Gli incarichi sono selettivi e solo su appuntamento.',
    'about.title': 'Chi è Alpha Global Invest',
    'about.text': 'Alpha Global Invest è un family office indipendente costruito sui valori svizzeri di discrezione, sicurezza e precisione. Serviamo clienti privati e famiglie, con un’attenzione alla conservazione del capitale e alla crescita a lungo termine. La nostra missione è proteggere e far crescere il vostro patrimonio attraverso una gestione del rischio disciplinata, un’esecuzione accurata e una visione di lungo periodo. Gli incarichi sono selettivi e solo su appuntamento.',
    // Values
    'values.title': 'I nostri valori',
    'values.safety.title': 'Sicurezza & Protezione',
    'values.safety.text': 'La preservazione del capitale e una gestione del rischio disciplinata sono alla base di ogni decisione che prendiamo.',
    'values.discretion.title': 'Discrezione & Privacy',
    'values.discretion.text': 'Operiamo in modo discreto e confidenziale, mantenendo un profilo pubblico basso e una comunicazione strettamente necessaria.',
    'values.family.title': 'Famiglia & Retaggio',
    'values.family.text': 'Un pensiero multi‑generazionale assicura che la vostra ricchezza duri e benefici responsabilmente i vostri eredi.',
    'values.precision.title': 'Precisione & Tradizione',
    'values.precision.text': 'Radicati in secoli di artigianato, applichiamo rigore ed esattezza in ogni servizio e relazione.',
    // Client profile
    'client.title': 'Profilo cliente',
    'client.min.title': 'Capitale minimo',
    'client.min.value': '5 milioni CHF',
    'client.focus.title': 'Focus',
    'client.focus.value': 'Patrimonio privato',
    'client.mandates.title': 'Mandati',
    'client.mandates.value': 'Selettivi & personalizzati',
    'client.note': 'Non serviamo mandati istituzionali. Gli incarichi sono soggetti a idoneità, disponibilità e alle leggi applicabili.',

    // Pagina di login per i clienti
    'login.title': 'Accesso Clienti',
    'login.intro': 'I clienti esistenti possono accedere ai loro conti qui sotto.',
    'login.username': 'Nome utente',
    'login.password': 'Password',
    'login.submit': 'Accedi',
    'login.forgot': 'Password dimenticata?',
    'login.forgot.link': 'Contattaci',
    // Contact
    'contact.title': 'Contattaci',
    'contact.subtitle': 'Pronti a discutere come possiamo proteggere e far crescere il vostro capitale familiare? Inviateci una richiesta confidenziale e vi contatteremo personalmente.',
    'contact.name': 'Il tuo nome',
    'contact.email': 'La tua email',
    'contact.message': 'Come possiamo assisterti?',
    'contact.submit': 'Invia richiesta',
    // Footer
    'footer.copy': '© 2025 Alpha Global Invest. Tutti i diritti riservati.',
    'footer.legal': 'Informazioni legali & Disclaimer',
    // Services page
    'services.title': 'I nostri servizi',
    'services.intro': 'Strutturati attorno a ciò di cui le famiglie con forte convinzione hanno realmente bisogno – con un unico partner responsabile e un processo calmo e rigoroso. Selezionate un servizio qui sotto per leggere di più su come lavoriamo.',
    'services.advisory.title': 'Consulenza sugli investimenti',
    'services.advisory.text': 'Consulenza indipendente ed esecuzione personalizzata per coloro che desiderano mantenere il controllo delle decisioni, con la nostra precisione e guida.',
    'services.management.title': 'Gestione patrimoniale',
    'services.management.text': 'Mandati discrezionali e portafogli strategici costruiti su una gestione del rischio disciplinata e un focus sulla conservazione del capitale.',
    'services.real.title': 'Attivi reali & Immobiliare',
    'services.real.text': 'Esposizione selettiva ad attivi reali e investimenti immobiliari per diversificare il portafoglio e cogliere opportunità di valore a lungo termine.',
    'services.credit.title': 'Credito & Finanziamento',
    'services.credit.text': 'Soluzioni creditizie su misura, inclusi prestiti Lombard e pianificazione della liquidità, allineate alla vostra strategia patrimoniale complessiva.',
    'services.succession.title': 'Successione & Eredità',
    'services.succession.text': 'Pianificazione e governance strutturate per garantire un passaggio di ricchezza senza intoppi e armonia tra le generazioni.',
    'services.philanthropy.title': 'Filantropia & Fondazione',
    'services.philanthropy.text': 'Guida nella creazione e gestione di iniziative filantropiche e fondazioni, con governance e supervisione attente.',
    'services.learn': 'Scopri di più →',
    // Service detail: Investment Advisory
    'service.advisory.h1': 'Consulenza sugli investimenti',
    'service.advisory.h2': 'Consulenza sugli investimenti',
    'service.advisory.p1': 'Forniamo consulenza indipendente a famiglie e clienti privati che desiderano mantenere il controllo delle proprie decisioni. Insieme definiamo obiettivi chiari, budget di rischio e strategie di allocazione del capitale su misura per le vostre circostanze, ponendo sempre al primo posto la preservazione del capitale.',
    'service.advisory.p2': 'Il nostro lavoro di consulenza copre tutte le principali classi di attivi – azioni, obbligazioni, mercati privati e asset reali. Effettuiamo un’approfondita due diligence sulle opportunità, proponiamo strategie in linea con i vostri obiettivi a lungo termine e implementiamo le transazioni con cura e precisione.',
    'service.advisory.p3': 'Rimane a voi la decisione finale, mentre noi prepariamo i piani di investimento, facilitiamo l’esecuzione e monitoriamo i portafogli. Reporting trasparente e dialogo continuo assicurano che il vostro portafoglio evolva con le condizioni di mercato e con i vostri obiettivi personali.',
    // Service detail: Asset Management
    'service.management.h1': 'Gestione patrimoniale',
    'service.management.h2': 'Gestione patrimoniale',
    'service.management.p1': 'Il nostro servizio di gestione patrimoniale discrezionale costruisce e gestisce portafogli allineati agli obiettivi, alla tolleranza al rischio e all’orizzonte temporale di ciascun cliente. Allochiamo il capitale tra le classi di attivi utilizzando quadri robusti che bilanciano le opportunità di rendimento con la salvaguardia del patrimonio.',
    'service.management.p2': 'Ci avvaliamo di un processo di investimento disciplinato, informato da analisi macroeconomiche e ricerca approfondita, per costruire portafogli diversificati. Il nostro comitato investimenti monitora continuamente i mercati, i fattori di rischio e la performance, regolando le esposizioni quando i fondamentali cambiano.',
    'service.management.p3': 'Un reporting trasparente e un dialogo regolare vi tengono informati su posizionamento, performance ed esposizione al rischio. Il nostro obiettivo è fornire una crescita costante, evitare perdite permanenti di capitale e garantire serenità durante i cicli di mercato.',
    // Service detail: Real Assets & Real Estate
    'service.real.h1': 'Attivi reali & Immobiliare',
    'service.real.h2': 'Attivi reali & Immobiliare',
    'service.real.p1': 'Gli asset reali e gli investimenti immobiliari selezionati aggiungono stabilità e diversificazione a un portafoglio. Identifichiamo opportunità che offrono reddito stabile e valore a lungo termine, concentrandoci sui fondamentali e sulla resilienza.',
    'service.real.p2': 'Questi investimenti possono includere infrastrutture, progetti immobiliari e altri asset tangibili che offrono potenziale protezione dall’inflazione e bassa correlazione con i mercati finanziari tradizionali. Eseguiamo un’analisi approfondita della qualità, della durata dei flussi di cassa e dell’allineamento con la vostra strategia.',
    'service.real.p3': 'Collaborando con specialisti esperti e mantenendo una leva prudente, garantiamo che l’esposizione agli asset reali aumenti la robustezza del portafoglio senza compromettere liquidità o trasparenza.',
    // Service detail: Credit & Financing
    'service.credit.h1': 'Credito & Finanziamento',
    'service.credit.h2': 'Credito & Finanziamento',
    'service.credit.p1': 'Progettiamo soluzioni di credito e finanziamento che completano la vostra strategia di investimento. Dai prestiti Lombard garantiti da portafogli alle strutture di liquidità su misura, ogni struttura è pensata per soddisfare le vostre esigenze senza compromettere l’integrità del vostro piano patrimoniale complessivo.',
    'service.credit.p2': 'Allineiamo i termini del finanziamento al vostro budget di rischio, collaborando con partner bancari affidabili pur mantenendo indipendenza e riservatezza. Il nostro obiettivo è fornire flessibilità affinché possiate accedere al capitale quando necessario — per investimenti, pianificazione successoria o eventi di liquidità — senza dover vendere asset indesiderati.',
    'service.credit.p3': 'Ogni soluzione di finanziamento è monitorata insieme al vostro portafoglio complessivo per garantire che il livello di leva rimanga sensato e sostenibile. Documentazione chiara e reporting trasparente sostengono il nostro processo di finanziamento.',
    // Service detail: Succession & Inheritance
    'service.succession.h1': 'Successione & Eredità',
    'service.succession.h2': 'Successione & Eredità',
    'service.succession.p1': 'Il trasferimento ordinato della ricchezza tra generazioni è un processo delicato e complesso. Lavoriamo con le famiglie per progettare strutture che garantiscano continuità, stabilità ed equità, riflettendo i valori e gli obiettivi unici di ciascuna famiglia.',
    'service.succession.p2': 'I nostri servizi di successione includono strutture di governance, pianificazione del trasferimento del patrimonio, riunioni familiari e strategie di comunicazione. Facilitiamo il dialogo intergenerazionale e coordiniamo consulenti legali e fiscali di fiducia per sviluppare strutture resilienti.',
    'service.succession.p3': 'Con una pianificazione attenta e un’esecuzione accurata, aiutiamo a minimizzare i potenziali conflitti e preservare l’unità familiare, affinché il vostro retaggio continui nel tempo.',
    // Service detail: Philanthropy & Foundation
    'service.philanthropy.h1': 'Filantropia & Fondazione',
    'service.philanthropy.h2': 'Filantropia & Fondazione',
    'service.philanthropy.p1': 'Molte famiglie desiderano avere un impatto positivo oltre il proprio patrimonio personale. Assistiamo nella creazione e nella gestione di iniziative filantropiche e fondazioni private che riflettano i vostri valori e gli obiettivi desiderati.',
    'service.philanthropy.p2': 'La nostra guida copre l’intero ciclo della filantropia: dalla definizione di una missione e di una struttura di governance alla selezione di progetti, alla concessione di contributi e alla misurazione dell’impatto. Integriamo gli sforzi filantropici nella vostra strategia patrimoniale globale, garantendo coerenza e sostenibilità.',
    'service.philanthropy.p3': 'Incorporando una forte governance e processi trasparenti, vi aiutiamo a creare un retaggio duraturo di generosità, mantenendo armonia e coinvolgimento attraverso le generazioni.',
    // Legal page
    'legal.title': 'Informazioni legali & Disclaimer',
    'legal.p1': 'Le informazioni contenute in questo sito web sono fornite esclusivamente a scopo informativo generale e non costituiscono consulenza finanziaria o un’offerta. I servizi sono offerti solo dove consentito dalla legge e soggetti a idoneità e disponibilità. Vi preghiamo di contattarci privatamente per condizioni formali, termini e divulgazioni normative.',
    'legal.p2': 'Alpha Global Invest opera in modo indipendente. Lo status normativo e le registrazioni saranno forniti su richiesta una volta disponibili.',
    'legal.p3': 'Adottiamo una cultura incentrata sulla privacy. Qualsiasi comunicazione inviata tramite il modulo di contatto viene trattata in modo confidenziale. Vi preghiamo di non inviare informazioni personali sensibili se non richiesto tramite un canale sicuro concordato.',
    // Call to action per gli appuntamenti
    'cta.title': 'Pronti a confrontarci? Fissa un appuntamento',
    'cta.text': 'Invitiamo i potenziali clienti a incontrarci privatamente per valutare come i nostri servizi possano allinearsi con gli obiettivi della vostra famiglia.',
    'cta.button': 'Fissa un appuntamento'
  },
  fr: {
    // Navigation
    'nav.mandate': 'Mandat',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.values': 'Valeurs',
    'nav.client': 'Connexion client',
    'nav.contact': 'Contact',
    'nav.legal': 'Mentions légales & Avertissement',
    // Hero
    'hero.kicker': 'Sur invitation. Sur rendez‑vous.',
    'hero.h1': 'Family office indépendant',
    'hero.tagline': 'Un partenaire discret pour préserver et développer le capital familial au fil des générations.',
    'hero.cta.services': 'Nos services',
    // Mandate
    'mandate.title': 'Notre mandat',
    // Texte mis à jour sans mention explicite de capital minimum
    'mandate.text': 'Alpha Global Invest est un family office indépendant fondé sur des valeurs suisses de discrétion, de sécurité et de précision. Nous servons des clients privés et des familles, avec un accent sur la préservation du capital et la croissance à long terme. Notre mission est de protéger et de faire croître votre patrimoine grâce à une gestion disciplinée des risques, une exécution soignée et une perspective à long terme. Les engagements sont sélectifs et uniquement sur rendez‑vous.',
    'about.title': 'À propos d’Alpha Global Invest',
    'about.text': 'Alpha Global Invest est un family office indépendant fondé sur des valeurs suisses de discrétion, de sécurité et de précision. Nous servons des clients privés et des familles, avec un accent sur la préservation du capital et la croissance à long terme. Notre mission est de protéger et de faire croître votre patrimoine grâce à une gestion disciplinée des risques, une exécution soignée et une perspective à long terme. Les engagements sont sélectifs et uniquement sur rendez‑vous.',
    // Values
    'values.title': 'Nos valeurs',
    'values.safety.title': 'Sécurité & Protection',
    'values.safety.text': 'La préservation du capital et une gestion des risques disciplinée sous‑tendent chacune de nos décisions.',
    'values.discretion.title': 'Discrétion & Confidentialité',
    'values.discretion.text': 'Nous opérons discrètement et confidentiellement, en maintenant un profil public bas et une communication limitée au strict nécessaire.',
    'values.family.title': 'Famille & Héritage',
    'values.family.text': 'Une réflexion multigénérationnelle garantit que votre patrimoine perdure et bénéficie à vos héritiers de manière responsable.',
    'values.precision.title': 'Précision & Tradition',
    'values.precision.text': 'Ancrés dans un savoir‑faire séculaire, nous appliquons rigueur et exactitude dans chaque service et relation.',
    // Client profile
    'client.title': 'Profil client',
    'client.min.title': 'Capital minimum',
    'client.min.value': 'CHF 5 millions',
    'client.focus.title': 'Orientation',
    'client.focus.value': 'Patrimoine privé',
    'client.mandates.title': 'Mandats',
    'client.mandates.value': 'Sélectifs & personnalisés',
    'client.note': 'Nous ne servons pas de mandats institutionnels. Les engagements sont soumis à l’adéquation, à la disponibilité et aux lois applicables.',

    // Page de connexion client
    'login.title': 'Connexion Client',
    'login.intro': 'Les clients existants peuvent accéder à leurs comptes ci-dessous.',
    'login.username': "Nom d'utilisateur",
    'login.password': 'Mot de passe',
    'login.submit': 'Se connecter',
    'login.forgot': 'Mot de passe oublié ?',
    'login.forgot.link': 'Nous contacter',
    // Contact
    'contact.title': 'Nous contacter',
    'contact.subtitle': 'Prêt à discuter de la manière dont nous pouvons protéger et développer votre capital familial ? Envoyez‑nous une demande confidentielle et nous vous contacterons personnellement.',
    'contact.name': 'Votre nom',
    'contact.email': 'Votre email',
    'contact.message': 'Comment pouvons‑nous vous aider ?',
    'contact.submit': 'Envoyer la demande',
    // Footer
    'footer.copy': '© 2025 Alpha Global Invest. Tous droits réservés.',
    'footer.legal': 'Mentions légales & Avertissement',
    // Services page
    'services.title': 'Nos services',
    'services.intro': 'Structurés autour de ce dont les familles convaincues ont réellement besoin – avec un seul partenaire responsable et un processus calme et rigoureux. Sélectionnez un service ci‑dessous pour en savoir plus sur notre approche.',
    'services.advisory.title': 'Conseil en investissement',
    'services.advisory.text': 'Conseils indépendants et exécution sur mesure pour ceux qui souhaitent garder le contrôle de leurs décisions, avec notre précision et notre orientation.',
    'services.management.title': 'Gestion d’actifs',
    'services.management.text': 'Mandats discrétionnaires et portefeuilles stratégiques basés sur une maîtrise rigoureuse des risques et un accent sur la préservation du capital.',
    'services.real.title': 'Actifs réels & Immobilier',
    'services.real.text': 'Exposition sélective aux actifs réels et aux investissements immobiliers pour diversifier les portefeuilles et capter la valeur à long terme.',
    'services.credit.title': 'Crédit & Financement',
    'services.credit.text': 'Solutions de financement sur mesure, y compris les prêts Lombard et la planification de la liquidité, alignées sur votre stratégie patrimoniale globale.',
    'services.succession.title': 'Succession & Héritage',
    'services.succession.text': 'Planification et gouvernance structurées pour assurer un transfert de patrimoine fluide et l’harmonie entre les générations.',
    'services.philanthropy.title': 'Philanthropie & Fondation',
    'services.philanthropy.text': 'Accompagnement dans la création et la gestion d’initiatives philanthropiques et de fondations, avec une gouvernance réfléchie et une supervision attentive.',
    'services.learn': 'En savoir plus →',
    // Service detail: Investment Advisory
    'service.advisory.h1': 'Conseil en investissement',
    'service.advisory.h2': 'Conseil en investissement',
    'service.advisory.p1': 'Nous fournissons des conseils d’investissement indépendants aux familles et aux clients privés qui souhaitent conserver le contrôle de leurs décisions. Ensemble, nous définissons des objectifs clairs, des budgets de risque et des stratégies d’allocation d’actifs adaptées à vos circonstances, en mettant toujours la préservation du capital en premier.',
    'service.advisory.p2': 'Notre conseil couvre toutes les principales classes d’actifs – actions, obligations, marchés privés et actifs réels. Nous effectuons des due diligences approfondies sur les opportunités, proposons des stratégies alignées sur vos objectifs à long terme et mettons en œuvre les transactions avec soin et précision.',
    'service.advisory.p3': 'Vous conservez l’autorité décisionnelle finale, tandis que nous préparons les plans d’investissement, facilitons l’exécution et supervisons les portefeuilles. Un reporting transparent et un dialogue continu garantissent que votre portefeuille évolue avec les conditions du marché et vos objectifs personnels.',
    // Service detail: Asset Management
    'service.management.h1': 'Gestion d’actifs',
    'service.management.h2': 'Gestion d’actifs',
    'service.management.p1': 'Notre service de gestion d’actifs discrétionnaire construit et gère des portefeuilles alignés sur les objectifs, la tolérance au risque et l’horizon temporel de chaque client. Nous allouons le capital entre les classes d’actifs à l’aide de cadres robustes qui équilibrent les opportunités de rendement avec la protection du patrimoine.',
    'service.management.p2': 'Nous nous appuyons sur un processus d’investissement discipliné, étayé par des analyses macroéconomiques et une recherche approfondie, pour construire des portefeuilles diversifiés. Notre comité d’investissement surveille en permanence les marchés, les facteurs de risque et les performances, ajustant les expositions lorsque les fondamentaux changent.',
    'service.management.p3': 'Un reporting transparent et un dialogue régulier vous tiennent informé de la position, des performances et de l’exposition au risque. Notre objectif est de fournir une croissance régulière, d’éviter la perte de capital permanent et d’assurer la sérénité à travers les cycles de marché.',
    // Service detail: Real Assets & Real Estate
    'service.real.h1': 'Actifs réels & Immobilier',
    'service.real.h2': 'Actifs réels & Immobilier',
    'service.real.p1': 'Les actifs réels et les investissements immobiliers soigneusement sélectionnés ajoutent stabilité et diversification à un portefeuille. Nous identifions des opportunités offrant un revenu régulier et une valeur à long terme, en nous concentrant sur les fondamentaux et la résilience.',
    'service.real.p2': 'Ces investissements peuvent inclure des infrastructures, des projets immobiliers et d’autres actifs tangibles qui offrent une protection potentielle contre l’inflation et une faible corrélation avec les marchés financiers traditionnels. Nous analysons en profondeur la qualité, la durabilité des flux de trésorerie et l’alignement avec votre stratégie d’investissement.',
    'service.real.p3': 'En nous associant à des spécialistes expérimentés et en maintenant un levier prudent, nous veillons à ce que l’exposition aux actifs réels améliore la robustesse du portefeuille sans compromettre la liquidité ou la transparence.',
    // Service detail: Credit & Financing
    'service.credit.h1': 'Crédit & Financement',
    'service.credit.h2': 'Crédit & Financement',
    'service.credit.p1': 'Nous concevons des solutions de crédit et de financement qui complètent votre stratégie d’investissement. Des prêts Lombard garantis par des portefeuilles aux facilités de liquidité sur mesure, chaque solution est structurée pour répondre à vos besoins sans compromettre l’intégrité de votre plan patrimonial global.',
    'service.credit.p2': 'Nous alignons les termes de l’emprunt sur votre budget de risque, travaillons avec des partenaires bancaires réputés tout en maintenant notre indépendance et votre confidentialité. Notre objectif est de fournir de la flexibilité afin que vous puissiez accéder au capital lorsque vous en avez besoin — pour l’investissement, la planification successorale ou les événements de liquidité — sans forcer des ventes d’actifs indésirables.',
    'service.credit.p3': 'Chaque solution de financement est surveillée parallèlement à votre portefeuille global afin de garantir que l’endettement reste sensé et durable. Une documentation claire et un reporting transparent sous‑tendent notre processus de financement.',
    // Service detail: Succession & Inheritance
    'service.succession.h1': 'Succession & Héritage',
    'service.succession.h2': 'Succession & Héritage',
    'service.succession.p1': 'Le transfert ordonné de richesse entre les générations est une entreprise délicate et complexe. Nous travaillons aux côtés des familles pour concevoir des cadres qui assurent continuité, stabilité et équité, en reflétant les valeurs et objectifs uniques de chaque famille.',
    'service.succession.p2': 'Nos services de succession comprennent des structures de gouvernance, la planification du transfert de patrimoine, des réunions familiales et des stratégies de communication. Nous facilitons le dialogue intergénérationnel et coordonnons des conseillers juridiques et fiscaux de confiance pour développer des structures résilientes.',
    'service.succession.p3': 'Avec une planification réfléchie et une exécution soignée, nous aidons à minimiser les conflits potentiels et à préserver l’unité familiale, pour que votre héritage perdure à travers les générations.',
    // Service detail: Philanthropy & Foundation
    'service.philanthropy.h1': 'Philanthropie & Fondation',
    'service.philanthropy.h2': 'Philanthropie & Fondation',
    'service.philanthropy.p1': 'De nombreuses familles aspirent à avoir un impact positif au‑delà de leur patrimoine personnel. Nous aidons à établir et à gérer des initiatives philanthropiques et des fondations privées qui reflètent vos valeurs et les résultats souhaités.',
    'service.philanthropy.p2': 'Notre accompagnement couvre l’ensemble du cycle de don : de la définition d’une mission et d’une structure de gouvernance à la sélection des projets, l’octroi de dons et la mesure de l’impact. Nous intégrons les efforts philanthropiques dans votre stratégie patrimoniale globale, assurant cohérence et durabilité.',
    'service.philanthropy.p3': 'En intégrant une gouvernance solide et des processus transparents, nous vous aidons à créer un héritage durable de générosité tout en maintenant l’harmonie et l’engagement à travers les générations.',
    // Legal page
    'legal.title': 'Mentions légales & Avertissement',
    'legal.p1': 'Les informations présentées sur ce site sont fournies à titre informatif général et ne constituent pas un conseil en investissement ni une offre. Les services sont proposés uniquement lorsqu’ils sont autorisés par la loi et soumis à l’adéquation et à la disponibilité. Veuillez nous contacter en privé pour connaître les conditions formelles, les modalités et les divulgations réglementaires.',
    'legal.p2': 'Alpha Global Invest opère de manière indépendante. Le statut réglementaire et les enregistrements seront fournis sur demande dès qu’ils seront disponibles.',
    'legal.p3': 'Nous adoptons une culture axée sur la confidentialité. Toute communication que vous envoyez via le formulaire de contact est traitée de manière confidentielle. Veuillez ne pas envoyer d’informations personnelles sensibles sauf si cela est demandé via un canal sécurisé convenu.',
    // Call to action pour les rendez‑vous
    'cta.title': 'Prêts à discuter ? Fixez un rendez‑vous',
    'cta.text': 'Nous invitons nos clients potentiels à un entretien privé pour explorer comment nos services correspondent aux objectifs de votre famille.',
    'cta.button': 'Fixer un rendez‑vous'
  }
};

/**
 * Set the current language on the page. This updates the document’s lang
 * attribute, swaps inner text for all elements with a `data-i18n` attribute
 * using the corresponding key from the translations dictionary, updates
 * placeholders on inputs/textarea via `data-ph` and toggles the active
 * state on language buttons.
 *
 * @param {string} lang The language code to apply (e.g. 'en', 'de', 'it', 'fr')
 */
function setLang(lang) {
  const dict = translations[lang] || translations.en;
  // update html lang attribute
  document.documentElement.setAttribute('lang', lang);
  // update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  // update placeholders
  document.querySelectorAll('[data-ph]').forEach(el => {
    const key = el.getAttribute('data-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });
  // update active state on language buttons
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    if (btn.getAttribute('data-lang-btn') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// On page load: apply saved language preference and bind listeners
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('agi_lang') || 'en';
  setLang(saved);
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang-btn');
      localStorage.setItem('agi_lang', lang);
      setLang(lang);
    });
  });
});