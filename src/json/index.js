const viewmodel = {
  title: 'Fagseminar våren 2018',
  event: {
    date: '27. april - 29. april 2018',
    longDate: '27. april - 29. april 2018',
    venue: 'Colorline Oslo - Kiel',
    city: 'Kiel',
    country: 'Tyskland',
    gmapsUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653949.1411731015!2d7.525055213717181!3d57.0627760374479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2560d8fee97ad%3A0x4248963c6580320!2sKiel%2C+Tyskland!5e0!3m2!1sno!2sno!4v1519114376274',
  },
  schedules: [
    {
      day: 'Fredag 27. April',
      collections: [
        {
          time: '13:00',
          title: 'Vi ankommer Kiel fergen',
        },
        {
          time: '14:00 - 14:10',
          title: 'Plenumsforedrag',
          entries: [
            {
              room: 'Show lounge',
              slots: ['welcome'],
            },
          ],
        },
        {
          time: '14:10 - 14:40',
          title: 'Plenumsforedrag',
          entries: [
            {
              room: 'Show lounge',
              slots: ['hanschristian'],
            },
          ],
        },
        {
          time: '14:40 - 15:00',
          title: 'Pause',
          isBreak: true,
        },
        {
          time: '15:00 - 19:30',
          title: 'Workshop',
          entries: [
            {
              room: 'Parliament 🎥',
              slots: ['secchapterws'],
            },
            {
              room: 'Congress',
              slots: ['kubernetesws', 'startupws', 'uuws'],
            },
            {
              room: 'Bundestag',
              slots: ['nodemcuws', 'spotifyws'],
            },
            {
              room: 'Stortinget',
              slots: ['legomindstormws'],
            },
          ],
        },
      ],
    },
    {
      day: 'Lørdag 28. April',
      collections: [
        {
          time: '14:00 - 14:45',
          title: 'Plenumsforedrag',
          entries: [
            {
              room: 'Auditorium 🎥',
              slots: ['introday2', 'larslundby'],
            },
          ],
        },
        {
          time: '14:45 - 15:00',
          title: 'Pause',
          isBreak: true,
        },
        {
          time: '15:00 - 16:00',
          title: 'Plenumsforedrag',
          entries: [
            {
              room: 'Auditorium 🎥',
              slots: ['gdpr', 'libanon', 'balance'],
            },
          ],
        },
        {
          time: '16:00 - 16:45',
          title: 'Pause',
          isBreak: true,
        },
        {
          time: '16:45 - 17:15',
          title: 'Foredrag',
          entries: [
            {
              room: 'Auditorium 🎥',
              slots: ['shakespeare'],
            },
            {
              room: 'Parliament 🎥',
              slots: ['bottom'],
            },
            {
              room: 'Congress 1',
              slots: ['doorbell'],
            },
            {
              room: 'Congress 2',
              slots: ['origo'],
            },
            {
              room: 'Congress 3',
              slots: ['authapi'],
            },
            {
              room: 'Bundestag',
              slots: ['bootstrap'],
            },
          ],
        },
        {
          time: '17:15 - 17:30',
          title: 'Pause',
          isBreak: true,
        },
        {
          time: '17:30 - 18:00',
          title: 'Foredrag',
          entries: [
            {
              room: 'Auditorium 🎥',
              slots: ['deeplearning'],
            },
            {
              room: 'Parliament 🎥',
              slots: ['crypto'],
            },
            {
              room: 'Congress 1',
              slots: ['eventkafka'],
            },
            {
              room: 'Congress 2',
              slots: ['designprinsipper'],
            },
            {
              room: 'Congress 3',
              slots: ['asyncawait'],
            },
            {
              room: 'Bundestag',
              slots: ['youtube'],
            },
          ],
        },
        {
          time: '18:00 - 18:15',
          title: 'Pause',
          isBreak: true,
        },
        {
          time: '18:15 - 18:30',
          title: 'Lyntaler',
          entries: [
            {
              room: 'Auditorium 🎥',
              slots: ['consumerdrivencontracts'],
            },
            {
              room: 'Parliament 🎥',
              slots: ['clibank'],
            },
            {
              room: 'Congress 1',
              slots: ['thegathering'],
            },
            {
              room: 'Congress 2',
              slots: ['selgerne'],
            },
            {
              room: 'Congress 3',
              slots: ['serverlessazure'],
            },
            {
              room: 'Bundestag',
              slots: ['oslokey_react_native'],
            },
          ],
        },
        {
          time: '18:30 - 18:45',
          title: 'Lyntaler',
          entries: [
            {
              room: 'Auditorium 🎥',
              slots: ['astronaut'],
            },
            {
              room: 'Parliament 🎥',
              slots: ['alexaskills'],
            },
            {
              room: 'Congress 1',
              slots: ['mats3'],
            },
            {
              room: 'Congress 2',
              slots: ['prosjektprodukt'],
            },
            {
              room: 'Congress 3',
              slots: ['arkit'],
            },
            {
              room: 'Bundestag',
              slots: ['oslokey'],
            },
          ],
        },
        {
          time: '20:00',
          title: 'Middag',
        },
      ],
    },
    {
      day: 'Søndag 29. April',
      collections: [
        {
          time: '10:00',
          title: 'Vi ankommer Oslo',
        },
      ],
    },
  ],
  talks: {
    alexaskills: {
      pending: false,
      speakers: [
        {
          name: 'Anders Breivik',
          bio:
            "Anders liker å gjøre ting han ikke kan, og holde fordrag om det. I motsatt rekkefølge. Han er sertifisert 'Playing Lean Facilitator', diplomet henger på veggen ved siden av 'Certified Scrum Master' og 'Sun Certified Programmer for the Java 2 Platform, Standard Edition 5.0'",
          pic: 'abr.jpg',
          email: 'abr@knowit.no',
        },
      ],
      title:
        'Tell me the money! Snakk med banken din med PSD2 og custom Alexa Skills',
      type: 'Talk',
      description:
        'Savner du noen å prate med i banken din? Ikke jeg heller, men noen ganger hadde det vært hyggelig å høre en vennlig stemme fortelle meg at kontoen ikke er tom (ennå). Takket være The Payment Services Directive II, PSD2 blant venner, og litt kode, så kan jeg det. Jeg skal vise deg hvordan du og kan lage dine egne custom Alexa Skills for å snakke med banken din.',
    },
    oslokey_react_native: {
      pending: false,
      speakers: [
        {
          name: 'Håkon Gimse',
          bio:
            'Håkon har en mastergrad fra NTNU med en spesialisering innen kunstig intelligens med dype nevrale nettverk. Han ser på seg selv som en fullstack-utvikler med prosjekterfaring både front- og back-end. Til nå har han jobbet med teknologier som Angular og React front-end, og .NET og Java back-end. I tillegg til dette har han også bred erfaring innen native Android utvikling. For tiden jobber han for Knowit på Vegloggen prosjektet med Scala og Java.',
          pic: 'hakon.gimse.jpg',
          email: 'hakon.gimse@knowit.no',
        },
      ],
      title: 'Oslonøkkelen en React Native app som åpner dører',
      type: 'Talk',
      description:
        'Oslonøkkelen er et prosjekt der Oslo kommune ønsker å tilgjengeliggjøre resursene sine utenfor åpningstidene. De har møterom, haller, bad, gjenvinningsstasjoner, fotballbaner osv osv osv. Vi ser på løsningen på dette problemet, en app skrevet i React Native med scala-backend hos PFF.',
    },
    asyncawait: {
      pending: false,
      speakers: [
        {
          name: 'Johannes Akse',
          bio:
            "Johannes har en mastergrad i 'Informatikk: Design, bruk og interaksjon' men foretrekker å programmere og da helst front-end. Han har to bachelorgrader: den første i 'Kultur og kommunikasjon' fra Universitetet i Oslo og den andre i 'Digital medieproduksjon' fra Høgskolen i Østfold. Dette har gitt et godt grunnlag for å forstå informasjonsflyt, både mellommenneskelig men også mellom menneske og maskin. Johannes har spilt mange år i band med mer enn hundre pub-konsert rundt i det meste av Norge. Han har også vært med på flere teateroppsetninger og har med dette opparbeidet seg god erfaring i å prestere foran store forsamlinger.",
          email: 'johannes.akse@knowit.no',
          pic: 'johannesakse.jpg',
        },
      ],
      title: 'Async Await - Make asynchronous look synchronous',
      type: 'Talk',
      description:
        'Asynchronous code can be hard to write and hard to reason about. The ECMAScript 2017 edition of JavaScript introduces two new keywords, async and await, enabling you to write asynchronous code in a synchronous looking way. This talk will introduce the two new keywords and explain how Generators and Promises work together giving us this new way to write asynchronous JavaScript.',
    },
    consumerdrivencontracts: {
      pending: false,
      speakers: [
        {
          name: 'Oddgeir Gitlestad',
          bio:
            "Oddgeir er en svært allsidig fullstack seniorutvikler. Han har betydelig innsikt i front-end rammeverk, men og kompetanse på tradisjonelle back-end teknologier som benyttes innen Javaområdet idag. Oddgeir er opptatt av smidig utvikling og 'smidig teknologi' som muliggjør kontinuerlige leveranser i DevOps-ånden. Gjennom sitt tidligere arbeid hos Forsvaret, er han godt kjent med strukturert prosjektledelse og evner å utforme klare målsetninger for både eget, og gruppemedlemmers arbeid. Oddgeir er en meget god ressurs for teknisk krevende integrasjonsdomener, gjerne i grenseflatene mellom kjernesystem og kundesystemer. Oddgeir er også gruppeleder for 8 utviklere i Knowit, med spesielt ansvar for oppfølging av kompetanseområdene deres.",
          email: 'oddgit@knowit.no',
          pic: 'oddgit.jpg',
        },
      ],
      title: 'Consumer Driven Contracts - SOAP done right',
      type: 'Talk',
      description:
        'Gjennomgang av konseptet Consumer Driven Contracts og hvordan dette kan forbedre stabiliteten i blant annet en mikrotjenestearkitektur.',
    },
    deeplearning: {
      pending: false,
      speakers: [
        {
          name: 'Manu Gopinathan',
          bio:
            'Manu er nyutdannet sivilingeniør med mastergrad i datateknologi fra NTNU. Her spesialiserte han seg i kunstig intelligens. Manu er en engasjert, positiv og ansvarsfull person med gode skriftlige og muntlige kommunikasjonsevner. Han har god kompetanse innen back-end utvikling i Python og Java, samt erfaring med Javascript og CSS. I tillegg har han opparbeidet seg kompetanse innen maskinlæring med vekt på bruken av nevrale nettverk. Fra november 2016 har han vært deltidsansatt i avdelingen til Knowit i Trondheim, hvor han har jobbet med prototyping av en webløsning på Vegloggen-prosjektet for Statens Vegvesen. Fra august 2017, jobber han som fast ansatt hos Knowit i Oslo.',
          email: 'manu.gopinathan@knowit.no',
          pic: 'manu.jpg',
        },
      ],
      title: 'Gender Identification of Tweet Authors Using Deep Learning',
      type: 'Talk',
      description:
        'Is it possible to learn personal information about an author based on their writing style? The field of author profiling addresses this specific problem. It belongs to the field of Natural Language Processing and authorship analysis, and aims to classify personal traits of authors, such as gender and age, based on their writing style. This presentation will show an approach to predicting the gender of tweet authors using a combination of neural network architectures and textual features.',
    },
    astronaut: {
      pending: false,
      speakers: [
        {
          name: 'Thomas Andersen',
          bio: '',
          email: 'thomas.andersen@knowit.no',
        },
      ],
      title: 'Fra backend programmerer til astronaut frontend universet',
      type: 'Talk',
      description:
        "Etter mange år i bransjen, og i en tid hvor å mestre MVC pattern og integrasjon med en database kunne gjøre at du kunne kalle deg en 'fullstack utvikler'. De siste årene har frontend teknologiene eksplodert i intet mindre enn noe som kan kalles et Big Bang. React, ELM, Angular, Webpack, Gulp, Node, NPM er alle teknologier og buzzwords som er overveldende dersom en ikke har fulgt med i timen underveis. Spørsmålet er hvordan skal en med erfaring som ikke strekker seg lenger enn da JQuery ble poppis forholde seg til alle disse nye teknologiene, og ikke minst mestre de....",
    },
    shakespeare: {
      pending: false,
      speakers: [
        {
          name: 'Malte Loller-Andersen',
          bio:
            'Malte Loller-Andersen er nyutdannet med mastergrad i datateknologi fra NTNU. Han spesialiserte seg i kunstig intelligens. Malte er en positiv og engasjert bidragsyter, som har en bred bakgrunn både innen back-end og front-end utvikling. Han har god erfaring i Java og Python, samt erfaring i JavaScript, CSS, C++ og Lua. I tillegg har han opparbeidet seg kompetanse innen kunstige neurale nettverk og Natural Language Generation. Fra november 2016 har han vært deltidsansatt i avdelingen til knowit i Trondheim. Der har han jobbet med å utvikle en prototype av en webløsning for trafikkmeldinger for Statens Vegvesen. I august 2017 startet han fulltid som systemkonsulent i Knowit Objectnet.',
          email: 'malte.loller-andersen@knowit.no',
          pic: 'malteloller.jpg',
        },
      ],
      title: 'Can a machine be the next Shakespeare?',
      type: 'Talk',
      description:
        'Neural networks can achieve superhuman performance at many different tasks such as image recognition, natural language processing and playing video games. But how good are they at writing POETRY? What happens when you feed them images and ask them to return a poem? Will they become super smart and conquer the world, return half-assed shitty poetry or maybe define a new path within the genre of writing? Well, lets found out...',
    },
    eventkafka: {
      pending: false,
      speakers: [
        {
          name: 'Emil Østensen',
          bio:
            'Emil begynte som konsulent i Knowit Objectnet August 2016. Han har kompetanse innenfor C og Java-utvikling, og jobber nå som backendutvikler på JVMen. Han interesserer seg for algoritmer og effektivitet i programmer. Dette kommer i hans interesse for sjakkprogrammering som han skrev en masteroppgave om på UiO, og også senere holdt talk om. Emil har som mål å alltid skrive ren og testbar kode, og henter inspirasjon fra Clean Code.',
          email: 'emil.ostensen@knowit.no',
          pic: 'emil.ostensen.jpg',
        },
      ],
      title: 'Event streaming med Kafka Streams',
      type: 'Talk',
      description:
        'Presentasjonen vil gå i gjennom hva event streaming er, hvor det kan være nyttig og  hvordan bruke Kafka Streams som ryggraden i en hendelsebasert mikrotjeneste-arkitektur. Med Kafka Streams, Java 8 og Spring Boot.',
    },
    thegathering: {
      pending: false,
      speakers: [
        {
          name: 'Sverre Johann Bjørke',
          bio:
            'Sverre er en systemutvikler med med mastergrad fra NTNU. Spesialiseringen hans ligger i kryssningspunktet mellom big data og maskinlæring. Sverre interesserer seg for det meste av teknologi, og trives godt i hele stacken. Han liker godt å utforske nye teknologier og jobber kontinuerlig for å forbedre seg som programmerer.',
          email: 'sverre.bjorke@knowit.no',
          pic: 'sverre.bjorke.jpg',
        },
      ],
      title: 'Automatisk deck-konstruksjon i Magic: The Gathering',
      type: 'Talk',
      description:
        'Magic: The Gathering, alle samlekortspills bestefar, er det mest spilte i sin kategori. I min masteroppgave tok jeg for meg problemet å automatisk finne sammensetninger av kort som fungerer godt i spill.',
    },
    oslokey: {
      pending: false,
      speakers: [
        {
          name: 'Trygve Laugstøl',
          bio: 'Bio kommer',
          email: 'trygvis@trygvis.io',
          pic: '',
        },
      ],
      title: 'Oslo-nøkkelen',
      type: 'Talk',
      description:
        'En lyntale om hvordan vår server, lås og hardware henger sammen og funker. Her hadde det nok vært bra å fått en av deres utviklere til å fortelle om bakgrunnen for prosjektet og hvordan appen KnowIT utviklet fungerer.',
    },
    serverlessazure: {
      pending: false,
      speakers: [
        {
          name: 'Marius Matonis',
          bio: 'Senior Systemutvikler',
          email: 'marius.matonis@knowit.no',
          pic: 'marius.matonis.jpg',
        },
      ],
      title: 'Serverless in practice - Azure Functions for data orchestration',
      type: 'Talk',
      description:
        'Data orchestration takes time. Different tools and services need to be learned/implemented. What if you could use serverless architecture to achieve your goals? This session will show you the use cases of Azure Functions for data movement. Combining triggers and bindings (of Azure Functions) with Azure Data Factory can be done easy. Not sure? Let me show you a real world example of how I implemented Azure Functions in my project.',
    },
    bottom: {
      pending: false,
      speakers: [
        {
          name: 'Thuc Tuan Hoang',
          bio:
            'Han jobber målrettet, verdsetter personlig kompetanseutvikling svært høyt og brenner etter å lære seg nye programmeringsspråk og teknologier. Thuc har dedikert mye av fritiden sin til å jobbe med NodeJS, nettverk og infrastruktur og sikkerhetstesting. Han jobber godt selvstendig og i team. I tillegg er han veldig lett å komme i kontakt med. Har erfaring med prosjekter hvor smidige metoder er brukt (både i skole og jobb). Han er svært fleksibel når det kommer til ansvar på jobb, og yter alltid sitt beste uavhengig hvor, hvem han er leid ut til og hva han jobber med.',
          email: 'thuc.hoang@knowit.no',
          pic: 'Thuc.Hoang.300x375.png',
        },
      ],
      title: 'Started from the bottom...',
      type: 'Talk',
      description:
        'Konsulent på dagtid, familie på kveldstid, startup på natten. Hvordan fungerer det egentlig? I dette foredraget skal jeg presentere kort om oppstartsbedriften jeg og Mikal Villa startet sammen en sen lørdagskveld etter Objectnet sitt julebord 2017!',
    },
    clibank: {
      pending: false,
      speakers: [
        {
          name: 'Linn Vikre',
          bio:
            'Linn er en utadvendt og entusiastisk utvikler som liker å løse problemer ved hjelp av teknologi. Hun erfaring både fra backendsystemer utviklet i Java, til webapplikasjoner utviklet ved hjelp av React, JavaScript og CSS.',
          email: 'linvik@knowit.no',
          pic: 'linn.png',
        },
      ],
      title: 'CLI-banken - Banken for nerder!',
      type: 'Talk',
      description:
        'Lei av å måtte forholde deg til 3 (eller flere!) forskjellige bank-apper fordi du har lånet hos DNB, BSU hos en annen bank og en sparekonto hos en tredje bank? Takket være PSD2 direktivet og åpen bank så er det flere banker som i disse dager har lansert/ kommer til å lasere åpne bank-APIer. Kom og se hvordan du kan sjekke ut balansen på kontoen din og de siste transaksjonene dine i terminalen, takket være disse APIene.',
    },
    crypto: {
      pending: false,
      speakers: [
        {
          name: 'Steinar Andrè Kraugerud',
          bio:
            "Steinar har en mastergrad i Teknisk Kybernetikk fra NTNU og ble uteksaminert i 2016 med en spesialisering innenfor 'Navigasjon og Fartøystyring'. Denne graden dreier seg hovedsaklig om design og implementasjon av autonome systemer, som foreksempel droner, marine fartøy og roboter. Gjennom studiet har software vært essensielt for å lykkes, og Steinar har opparbeidet seg god erfaring med programmering.",
          email: 'steinar.kraugerud@knowit.no',
          pic: 'kraugerud.jpg',
        },
      ],
      title: 'Kryptovaluta? To the moon? Styr unna disse fellene!',
      type: 'Talk',
      description:
        'Presentasjonen tar for seg vanlige nybegynnerfeil ved kjøp og salg av kryptovaluta, samt noen tips avslutningsvis til hvordan man bør opptre for å lykkes. Innholdet i presentasjonen er basert på egne erfaringer og tabber, som forhåpentligvis vil gjøre at du ikke går i de samme fellene. Det vil være et større fokus på trading enn på de underliggende teknologiene. To the moon?',
    },
    mats3: {
      pending: false,
      speakers: [
        {
          name: 'Kevin McTiernan',
          bio:
            'Kevin ble uteksaminert fra Universitetet i Stavanger våren 2016 og er en nysgjerrig og lærenem utvikler. Han setter seg raskt inn i problemstillinger og nye domener. Overgangen fra skolebenken til livet som konsulent er en suksesshistorie. Solid scala-kompetanse ble tilegnet på rekordtid og alle oppgaver løses og ferdigstilles med utmerket kvalitet. Han liker nye utfordringer og har en genuin interesse for teknologi.',
          email: 'kevin.tiernan@knowit.no',
          pic: 'kevin.tiernan.jpg',
        },
      ],
      title: 'Queue me a river: Mats^3',
      type: 'Talk',
      description:
        'A short introduction to Mats^3 - Message-based Asynchronous Transactional Staged Stateful Services (Quite a mouthful). An eloquent solution to asynchronous messaging between micro services I encountered while being in the field.',
    },
    doorbell: {
      pending: false,
      speakers: [
        {
          name: 'Frode Ånonsen',
          bio:
            'Frode Ånonsen, født 1975, er en erfaren utvikler. Frode har bakgrunn fra IT-design og -ariktektur, samt applikasjonsutvikling. Han skriver kode i høy kvalitet basert på de anerkjente SOLID prinsippene, hvor han benytter hensiktsmessige designmønstre. Frode er en erfaren full-stack utvikler og en entusiastisk og pålitelig konsulent, og er et positivt tilskudd til et team. Videre har han erfaring med smidige utviklingsmetodikker og test-drevet utvikling. Han har over 15 års erfaring med blant annet Javascript, Scala, Clojure, Java, C# og andre web teknologier. Han kjenner godt til åpne teknologier som Linux, Apache, Nginx, Mysql, Postgresql, Neo4j, Datomic, Docker, Kubernetes, Openshift osv.',
          email: 'froano@knowit.no',
          pic: 'frode.jpg',
        },
      ],
      title: 'Internet of Things: Dørklokke på Slack',
      type: 'Talk',
      description:
        'Vi hacker dørklokken til Stavanger-kontoret for å integrere den med Slack, vha NodeMCU ESP8266 mikrokontroller med Wifi.',
    },
    youtube: {
      pending: false,
      speakers: [
        {
          name: 'Christoffer Eliesen',
          bio:
            'Frontendutvikler på TRiO for Beredskapsetaten og leder av Creative Crew der vi prøver å vinne internett. 😁💃✨',
          email: 'christoffer.eliesen@knowit.no',
          pic: 'christoffer.eliesen.JPG',
        },
      ],
      title:
        'Start using your frontend skills to create professional YouTube streams',
      type: 'Talk',
      description:
        'With Open Broadcaster Software (OBS) you can create live streams to YouTube or Twitch, on Windows, Mac or Linux. What’s missing is some easily controllable overlay graphics that turns your stream into a high end production event, and in this presentation I’ll show you how to do exactly that with just HTML, CSS, JavaScript and the graphics framework NodeCG.',
    },
    origo: {
      pending: false,
      speakers: [
        {
          name: 'Jan Henrik Gundelsby',
          bio:
            'Jan Henrik er fagsjef i Knowit Objectnet. Jobber for tiden litt hos Oslo kommune med arkitektur og prosess. Driver også med salg, marked og hvordan vi skal få de rette nye prosjektene. Glad i naturen og lidenskapelig opptatt av fag!',
          email: 'jhg@knowit.no',
          pic: 'jhg.jpg',
        },
      ],
      title: 'Oslo kommune Origo: Åpen tjenesteplattform',
      type: 'Talk',
      description:
        'Oslo kommune Origo er Oslos nye storsatsning på digitalisering av kommunen. Dette er tenkt gjort gjennom 4 tiltak: 1) Arkitektur. Operasjonalisering av API-sentrisk arkitektur som muliggjør innovasjon. 2) Kultur for deling og samarbeid. Samarbeid og deling mellom autonome virksomheter/team. Full transparens, tilgjengelighet og åpenhet. 3) Åpen tjenesteplattform. Self-service for teams. Fjerner unødvendige flaskehalsker og inviterer alle til å utvikle for Oslo kommune. 4) Produktutviklingsorganisasjon. Fjern flaskehalser og implementer kontinuerlige leveranser og forbedring. Kobling mot Origo:Folk.',
    },
    bootstrap: {
      pending: false,
      speakers: [
        {
          name: 'Patrick Tørresvold',
          bio:
            'Mitt navn er Patrick A. D. Tørresvold, jeg kommer opprinnelig fra Mo I Rana, men bor nå på Slattum med min kone og to døtre. Har vært aktiv innen utvikling i PHP siden jeg var 14 år, men startet ikke jobbe profesjonelt med utvikling før jeg var nærmere 26. Da begynte jeg i et firma som heter OKB, hvor jeg på kort tid måtte lære meg C# og MVC, noe som resulterte i at jeg i dag har levert prosjekter til store kunder som feks. PayEx og Telia.',
          email: 'patrick.torresvold@knowit.no',
          pic: 'patrick.torresvold.jpg',
        },
      ],
      title: 'How not to suck at Bootstrap.css',
      type: 'Talk',
      description:
        'How should you really use Bootstrap as a developer or designer? Change your mindset and learn how I want you to use third party frameworks like Bootstrap to improve your daily work.',
    },
    balance: {
      pending: false,
      speakers: [
        {
          name: 'Rune Melhus',
          bio:
            'Rune har jobbet i Knowit siden JDK 1.3 og har stort sett passet på at backend oppfører seg pent. De tre siste årene har han også jobbet som gruppeleder og passet på at både kunder og konsulenter også oppfører seg pent. Hemsedalentusiast.',
          email: 'rme@knowit.no',
          pic: 'rme.jpg',
        },
      ],
      title: 'Balansekunst',
      type: 'Talk',
      description:
        'Når prosjekter presser på for å rekke deadlines, når Jan Henrik maser om fagdeltagelse, når gruppeleder maser om føring av timelister, når... Når du muligens trenger noen tips om hvordan du balanserer jobb, liv og jobbliv. Da kan det hende at dette er lyntalen for deg.',
    },
    authapi: {
      pending: false,
      speakers: [
        {
          name: 'Rune Storløpa',
          bio:
            'Erfaren virksomhetsarkitekt, teknisk arkitekt / løsningsansvarlig, som aldri blir enig med seg selv om det er morsomst å fikle med kode og lage gode løsninger eller å diskutere med kunder for å få de til å velge gode løsninger. Gjør derfor helst begge deler så langt tiden strekker til.',
          email: 'rst@knowit.no',
          pic: 'rst.jpg',
        },
      ],
      title:
        "Men...men.... Jeg skulle jo bare autentisere bruken av API'ene mine...",
      type: 'Talk',
      description:
        'En road-movie basert på en sann historie om hvilke utfordringer som oppstod når vi trengte å legge på autentisering på et API som i utgangspunktet skulle være åpent i størst mulig grad. Inkluderer eksplisitte scener av hva som kan skje når i utgangspunktet gode skytjenester er mer opinionated enn forventet. Høylytte sukk og avrivning av eget hår kan påregnes.',
    },
    welcome: {
      pending: false,
      speakers: [
        {
          name: 'Jan Henrik Gundelsby',
          bio:
            'Jan Henrik er fagsjef i Knowit Objectnet. Jobber for tiden litt hos Oslo kommune med arkitektur og prosess. Driver også med salg, marked og hvordan vi skal få de rette nye prosjektene. Glad i naturen og lidenskapelig opptatt av fag!',
          email: 'jhg@knowit.no',
          pic: 'jhg.jpg',
        },
      ],
      title: 'Velkommen',
      type: 'Talk',
      description: 'Velkommen til fagtur',
    },
    introday2: {
      pending: false,
      speakers: [
        {
          name: 'Jan Henrik Gundelsby',
          bio:
            'Jan Henrik er fagsjef i Knowit Objectnet. Jobber for tiden litt hos Oslo kommune med arkitektur og prosess. Driver også med salg, marked og hvordan vi skal få de rette nye prosjektene. Glad i naturen og lidenskapelig opptatt av fag!',
          email: 'jhg@knowit.no',
          pic: 'jhg.jpg',
        },
      ],
      title: 'Innledning, litt om fag og internmøte',
      type: 'Talk',
    },
    hanschristian: {
      pending: false,
      speakers: [
        {
          name: 'Hans Christian Brodwall Nielsen',
          bio:
            'Hans Christian er en av våre mest erfarne konsulenter med lang erfaring og nøkkelkompetanse innenfor programmeringsspråk, databasesystemer, objektorientert og modellbasert systemutvikling. Han har også ledererfaring, både som utviklingssjef, avdelingsleder og prosjektleder. Hans Christian er meget utadvendt, systematisk og løsningsorientert, og oppnår alltid høy tillit hos kunder samtidig som han bidrar til positiv stemning i prosjektene.',
          email: 'hcn@knowit.no',
          pic: 'hcn.png',
        },
      ],
      title: 'Programmering gjennom tidene',
      type: 'Talk',
      description: 'Beskrivelse kommer',
    },
    gdpr: {
      pending: false,
      speakers: [
        {
          name: 'Joakim Lehn',
          bio:
            'Våren 2015 ble Joakim uteksaminert fra NTNU med en sivilingeniørgrad innenfor teknisk kybernetikk med spesialisering innefor navigasjon og fartøystyring. Han har tilegnet seg kompetanse innenfor mange felt gjennom varierte prosjekter, han har erfaring med blant annet android, roboter, quadcopter og sonarer med spesielt fokus på programmering, modellering, automatisering og prototyping. Disse prosjektene har gitt Joakim erfaring med flere programmeringsspråk, hovedsaklig med C, Scala, Java og Matlab. Joakim blir motivert av teambasert arbeid, og har ansvar som leder og arkitekt for et autonomt, tverrfaglig team. Dette ansvaret omfatter analyse/design av løsning, estimering, avklaringer mot kunde og utviklere i teamet, kvalitetssikring, oppfølging og rapportering. Utover dette har han gode engelskkunnskaper etter å ha studert et år i USA. Han liker nye utfordringer og har en genuin interesse for teknologi.',
          pic: 'joakim.lehn.jpg',
          email: 'joakim.lehn@knowit.no',
        },
      ],
      title: 'GDPR',
      type: 'Talk',
      description: 'Beskrivelse kommer',
    },
    libanon: {
      pending: false,
      speakers: [
        {
          name: 'Erik Amundrud',
          bio: 'Lang erfaring fra ledelse av konsulentselskaper',
          email: 'ea@knowit.no',
          pic: 'ea.jpg',
        },
      ],
      title: 'Det libanesiske folkeregisteret …. eller en annen røverhistorie',
      type: 'Talk',
      description:
        'Når noe bare dukker opp og synes å være for godt til å være sant, hva gjør man da? Om Nigeriabrev, komplett meningsløse politiske strukturer, korrupsjon, attentater og naive nordmenn som vil gjøre verden til et såkalt bedre sted å leve. Et innblikk i en av de mer eksotiske delene av Eriks CV.',
    },
    larslundby: {
      pending: false,
      speakers: [
        {
          name: 'Lars Lundby',
          bio:
            'Erfaren systemarkitekt med kompetanse på Java-plattformen og analyse av forretningsmessige problemstillinger.',
          email: 'llu@knowit.no',
          pic: 'llu.jpg',
        },
      ],
      title:
        'Innslag fra Lars Lundby om visualisering av kompetansekartlegging',
      type: 'Talk',
      description: 'Beskrivelse kommer',
    },
    designprinsipper: {
      pending: false,
      speakers: [
        {
          name: 'Noor Knutsen',
          bio:
            'Noor kommer fra kysten av Trøndelag, og kjennetegnes med bred og variert kompetanse. I 2009 ble han tildelt en studieplass innen Visuell Kommunikasjon ved Høgskolen i Sørøst Norge. og gjennomførte et år av bachelorgraden i utlandet, ved University of Wollongong i Australia. Etter at han ble uteksaminert i 2012, har han jobbet som profesjonell designer på en rekke små og store prosjekter. For Noor handler design om å forenkle, og prioritere det som er viktig for sluttbrukeren. Derfor er det avgjørende med en god strategi i forkant av et prosjekt, og Noor verdsetter en grundig prosess i samarbeid med kunden. Noor jobber med design for alle typer digitale flater, og behersker de fleste ledende software for utarbeidelse av grafikk.',
          email: 'noor.knutsen@knowit.no',
          pic: 'noor.jpg',
        },
      ],
      title: 'Designprinsipper',
      type: 'Talk',
      description: 'En gjennomgang av prisnsipper som preger en designprosess. Foredraget er spesielt laget for utviklere som ønsker en bedre forståelse av design som innovasjonsmetode. Her lærer du å løfte kvaliteten på et produkt med enkle grep.',
    },
    selgerne: {
      pending: false,
      speakers: [
        {
          name: 'Erik Nylund',
          bio:
            'Experienced Business Development Executive currently working with clients to use digital technologies to change business models and provide new revenue and value-producing opportunities. Target areas are eg. Government, Mobility and Real Estate. Demonstrated history of working in the information services industry. Skilled in Executive Management, Business Development, Strategic Planning, Customer Development and Board Memberships.',
          email: 'etn@knowit.no',
          pic: 'nylund.jpg',
        },
      ],
      title:
        'The Far Side  - hvordan vi avdekker det ikke alle vet eller ikke alle ser i markedet',
      type: 'Talk',
      description:
        'Den sanne historien om hvordan og hvorfor, og hva du kan bidra med.',
    },
    prosjektprodukt: {
      pending: false,
      speakers: [
        {
          name: 'Rolf Knutsen',
          bio:
            'Rolf har jobbet som prosjektleder og ledelse av oppdrag og team siden 1999. Han er sertifisert Senior Prosjektleder fra International Project Management Associaton (IPMA) og PMP. Han har erfaring fra en rekke ulike utviklingsprosjekter. Erfaringen omfatter ledelse av prosjekter som inkluderer systemutvikling (SW og HW), integrasjon og verifikasjon i større nasjonale og internasjonale utviklingsprosjekter, samt IT-prosjekter innen offentlig sektor. \n \nRolf er svært interessert i utviklingsprosesser og spesielt moderne, smidige metoder. Disse fokuserer på produktutvikling og muliggjøring av rask og effektiv leveranse av verdi. Rolf har jobbet mye direkte med team og i smidige team og utvikling av disse, blant annet som agile coach. Rolf har også mye erfaring med formelle prosjektstyringsrammeverk og er flink til å finne den riktige balansen mellom nødvendig formalisme og smidig utvikling. \n\n Rolf er en aktiv og initiativrik person. Han har et høyt engasjement i oppdragene og en god evne til å skape godt samarbeidsklima og målrettet arbeid både i teamene og ikke minst i samarbeidet med kundene. Han er åpen, tydelig og ryddig, og trives like godt med å jobbe mot ledelse og styringsgruppe som internt i prosjektene med teamene.',
          email: 'rhk@knowit.no',
          pic: 'rhk.jpg',
        },
      ],
      title:
        'Prosjekt eller produktutvikling og hvorfor det spiller noen rolle.',
      type: 'Talk',
      description:
        'Tidligere var alle aktivitetene våre organisert som prosjekter mens fokus nå stadig oftere er produktutvikling. Hva har skjedd med verden, og hva innebærer dette skiftet for oss i praksis?',
    },
    arkit: {
      pending: false,
      speakers: [
        {
          name: 'Arve Seljebu',
          bio:
            'Lidenskapelig interessert i teknologi, fra elektronikk til programmering. Allsidig bakgrunn med lektorutdannelse, master i fysikk, fagbrev i elektronikk og halvårstudium i friluftsliv. Liker utfordringer og er kjapp til å lære nye teknologier. Glad i kunnskapsformidling.',
          email: 'arve.seljebu@knowit.no',
          pic: 'arvesel.jpg',
        },
      ],
      title:
        'Er det mulig å kapre oppdrag innen AR som nyansatt uten erfaring?',
      type: 'Talk',
      description:
        'Som nyansatt i Trondheim og med bakgrunn som lektor i videregående skole er jeg ikke i toppen av bunken. Kan kundens holdning til konsulenter uten erfaring påvirkes i intervjurunden med demo-arbeid? Hvordan gikk det når jeg prøvde å lære meg iOS-utvikling og ARKit på en uke? Hva kan vi bruke ARKit til?',
    },
    nodemcuws: {
      pending: false,
      speakers: [
        {
          name: 'Trygve Laugstøl',
          bio: 'Bio kommer',
          email: 'trygvis@trygvis.io',
          pic: '',
        },
      ],
      title: 'Internet of Things: NodeMCU',
      type: 'Workshop',
      description:
        'NodeMCU/IoT: NodeMCU er en liten mikrokontroller med wifi som støtter TCP/IP, MQTT og andre IoT-/internett-protokoller samtidig som den er en flott mikrokontroller for å lage dingser. Workshopen får nok samme struktur som Arduino-workshopen men mere fokus på å lage IoT-ting enn elektronikken. Jeg ville nok brukt Arduino-påbygget for å gjøre det så lett som mulig for folk å skrive koden mens man er på båten.',
    },
    secchapterws: {
      pending: false,
      speakers: [
        {
          name: 'Christoffer Eliesen',
          bio:
            'Frontendutvikler på TRiO for Beredskapsetaten og leder av Creative Crew der vi prøver å vinne internett. 😁💃✨',
          email: 'christoffer.eliesen@knowit.no',
          pic: 'christoffer.eliesen.JPG',
        },
        {
          name: 'Mikal Villa',
          bio:
            'System og sikkerhets arkitekt med over 10års erfaring med roller som utvikler, system administrator, security researcher og greyhat med backend programmering, sikkerhet og linux drift som kjernekompetanse.',
          pic: 'mikal.jpg',
          email: 'mikal.villa@knowit.no',
        },
        {
          name: 'Henrik Nårstad',
          bio:
            'Henrik har en bachelorgrad og leverte sin masteroppgave på Universitetet i Oslo ved Institutt for Informatikk julen 2015. Har han opparbeidet seg erfaring med programmeringsspråk som Java, Python, C/C++ og Javascript gjennom faglig arbeid og egne prosjekter. Han er interessert i operativsystemer, systemutvikling, nye teknologier, og har i tillegg deltatt i uhøytidelige konkurranser med fokus på programvaresikkerhet.',
          pic: 'Henrik_Na_rstad.jpg',
          email: 'henrik.narstad@knowit.no',
        },
        {
          name: 'Aulon Mujaj',
          bio:
            'Aulon er nyutdannet Master i Informatikk fra Universitetet i Oslo, med master-oppgave innenfor IT-sikkerhet. Han var sommerjobber i Knowit i 2016, der han jobbet som utvikler i eInnsyn-prosjektet for Oslo kommune og Difi. Siden har han jobbet deltid i samme prosjekt, samtidig som han fullførte Master-graden. Fra sommeren 2017 er han fast ansatt ved Oslo-kontoret.',
          pic: 'aulon.mujaj.jpg',
          email: 'aulon.mujaj@knowit.no',
        },
      ],
      title: 'Security Chapter Capture the Flag Game Show',
      type: 'Workshop',
      description:
        'Security Chapter går sammen med Creative Crew for å lage Capture the Flag Game Show 🎉 To team med håpefulle vil bli stuet inn i hvert sitt rom hvor de har 45 minutter på seg til å løse capture the flag-oppgaver. Dette vil bli fanget på film slik at et panel i naborommet samtidig kan diskutere oppgavene og kommentere framgangen deres underveis. Etter 45 minutter vil man bytte deltakere, slik at flere forskjellige team vil få prøvd seg på forskjellige oppgaver, totalt 3 runder á 45 minutter. Antall deltakere vil kunne være fra 4 (2 teams á 2 personer) til maks 30 (6 teams á 5 personer). De som ikke deltar er hjertelig velkommen som publikum, for dette blir show!',
    },
    startupws: {
      pending: false,
      speakers: [
        {
          name: 'Michael Johansen',
          bio:
            "A software consultant during the day and a startup founder during the night. At NTNU I studied entrepreneurship, computer science and psychology. As part of my startup venture I've gotten first-hand experience with the startup scene in both Boston and in Silicon Valley. I care more than most people about startups, and it's a topic on which I'd like to share my insights.",
          pic: 'mjo.jpg',
          email: 'michael.johansen@knowit.no',
        },
      ],
      title: 'Startup Bootcamp',
      type: 'Workshop',
      description:
        'We all have a business idea. But how exactly does an idea become a business? And how can you be sure that anyone wants what you’re selling? Come and kickstart your very own company.',
    },
    spotifyws: {
      pending: false,
      speakers: [
        {
          name: 'Joakim Lehn',
          bio:
            'Våren 2015 ble Joakim uteksaminert fra NTNU med en sivilingeniørgrad innenfor teknisk kybernetikk med spesialisering innefor navigasjon og fartøystyring. Han har tilegnet seg kompetanse innenfor mange felt gjennom varierte prosjekter, han har erfaring med blant annet android, roboter, quadcopter og sonarer med spesielt fokus på programmering, modellering, automatisering og prototyping. Disse prosjektene har gitt Joakim erfaring med flere programmeringsspråk, hovedsaklig med C, Scala, Java og Matlab. Joakim blir motivert av teambasert arbeid, og har ansvar som leder og arkitekt for et autonomt, tverrfaglig team. Dette ansvaret omfatter analyse/design av løsning, estimering, avklaringer mot kunde og utviklere i teamet, kvalitetssikring, oppfølging og rapportering. Utover dette har han gode engelskkunnskaper etter å ha studert et år i USA. Han liker nye utfordringer og har en genuin interesse for teknologi.',
          pic: 'joakim.lehn.jpg',
          email: 'joakim.lehn@knowit.no',
        },
        {
          name: 'Malte Loller-Andersen',
          bio:
            'Malte Loller-Andersen er nyutdannet med mastergrad i datateknologi fra NTNU. Han spesialiserte seg i kunstig intelligens. Malte er en positiv og engasjert bidragsyter, som har en bred bakgrunn både innen back-end og front-end utvikling. Han har god erfaring i Java og Python, samt erfaring i JavaScript, CSS, C++ og Lua. I tillegg har han opparbeidet seg kompetanse innen kunstige neurale nettverk og Natural Language Generation. Fra november 2016 har han vært deltidsansatt i avdelingen til knowit i Trondheim. Der har han jobbet med å utvikle en prototype av en webløsning for trafikkmeldinger for Statens Vegvesen. I august 2017 startet han fulltid som systemkonsulent i Knowit Objectnet.',
          email: 'malte.loller-andersen@knowit.no',
          pic: 'malteloller.jpg',
        },
        {
          name: 'Manu Gopinathan',
          bio:
            'Manu er nyutdannet sivilingeniør med mastergrad i datateknologi fra NTNU. Her spesialiserte han seg i kunstig intelligens. Manu er en engasjert, positiv og ansvarsfull person med gode skriftlige og muntlige kommunikasjonsevner. Han har god kompetanse innen back-end utvikling i Python og Java, samt erfaring med Javascript og CSS. I tillegg har han opparbeidet seg kompetanse innen maskinlæring med vekt på bruken av nevrale nettverk. Fra november 2016 har han vært deltidsansatt i avdelingen til Knowit i Trondheim, hvor han har jobbet med prototyping av en webløsning på Vegloggen-prosjektet for Statens Vegvesen. Fra august 2017, jobber han som fast ansatt hos Knowit i Oslo.',
          email: 'manu.gopinathan@knowit.no',
          pic: 'manu.jpg',
        },
      ],
      title:
        'Create Your Own Discover Weekly playlist for Spotify Using Machine Learning',
      type: 'Workshop',
      description:
        'In this workshop you will learn how to compare songs, find similarities between playlists and even create your own recommendation system based on your taste. This will be done using various machine learning algorithms and techniques, with your own Spotify playlist as input. After this workshop you will have new knowledge regarding AI and new songs to listen to when you get home ;)',
    },
    kubernetesws: {
      pending: false,
      speakers: [
        {
          name: 'Ove Olsen',
          bio:
            'Ove er en nysgjerrig teknolog med over 15 års arbeidserfaring som konsulent. Han har erfaring med ledelse av team som jobber med tekniske utfordringer, og han kommuniserer godt på flere nivåer. Ove har jobbet med hele prosessen fra kravstilling og innhenting av krav, brukerhistorier med akseptansetest, utvikling, testing og produksjonsetting. Han har høy arbeidskapasitet, er resultatorientert og har evnen til å raskt tilegne seg ny kunnskap. Ove trives når han kan bidra til at kunnskap deles og vanskelige problemer løses.',
          pic: 'ove.olsen.jpg',
          email: 'Ove.Olsen@knowit.no',
        },
        {
          name: 'Yngvar Kristiansen',
          bio:
            'Yngvar er utvikler og har jobbet med back-end, front-end, drift og programvarearkitektur. Konsulenten har erfaring fra komplekse, forretningskritiske applikasjoner, behandling av store datamengder, og web-applikasjoner. Han har erfaring med flere deler av FSUM: Kravhåndtering, konstruksjon, test og estimering.',
          pic: 'Yngvar_Kristiansen.jpg',
          email: 'yngvar.kristiansen@knowit.no',
        },
      ],
      title: 'Kubernetes Workshop',
      type: 'Workshop',
      description:
        'Kubernetes har blitt den foretrukne løsningen for container-orkestering hos flere av de store skyleverandørene. Teknologiradarene anbefaler å ta i bruk kubernetes, og kundene våre søker flere konsulenter med denne kompetansen. Det er viktig at vi som konsulenter tar dette på alvor og setter igang med treningen. Denne workshopen er for utviklere og arkitekter som ønsker å komme igang med applikasjonsutvikling på et eksisterende kubernetes cluster. Seilasen starter med det helt grunnleggende og vil avansere til de mer avanserte tema.',
    },
    uuws: {
      pending: false,
      speakers: [
        {
          name: 'Mina Ravem',
          bio:
            'Mina har en mastergrad I Human centred systems aka user experience. Spesialiseringen hennes ligger i brukerinnsikt, både i hvordan man tilegner seg og bruker innsikten for å skape gode brukeropplevelser.',
          pic: 'mina.ravem.jpg',
          email: 'mina.ravem@knowit.no',
        },
      ],
      title: 'Universell utforming',
      type: 'Workshop',
      description:
        'Hvordan er det å bruke digitale tjenester om man er synshemmet eller har nedsatt motorikk? Dette skal du få teste i denne workshopen, samt lære noe tips om hvordan designe for alle!',
    },
    legomindstormws: {
      pending: false,
      speakers: [
        {
          name: 'Anders Brevik',
          bio:
            "Anders har en mastergrad innen Teknisk Kybernetikk fra NTNU med spesialisering innen 'Fartøysstyring og Navigasjon'. Han har også gode erfaringer fra et utenlandsopphold i California og har også tatt en del fag ved Informatikk-studiet.",
          pic: 'anders.brevik.jpg',
          email: 'anders.brevik@knowit.no',
        },
        {
          name: 'Anders Dahlen',
          bio:
            "Anders har en mastergrad i Kybernetikk og robotikk ved NTNU fra våren 2015, med spesialisering i 'Navigasjon og fartøystyring'. Denne graden omhandler hovedsakelig design og implementasjon av styresystemer for skip, droner og roboter; hvor gode programmeringsferdigheter sammen med sterk matematisk forståelse står helt sentralt. Spesielt har Anders god kunnskap i språkene C, C++, Go og Java, og verktøyet Matlab. Tidligere har Anders opparbeidet erfaring med prosjektering og prosjektansvar gjennom bygging av en borelab ved NTNU. Dette har gitt han kunnskap om prioriteringer og viktigheten av ett godt oversiktsbilde. Alt dette sammen med flere års erfaring med salg gjør Anders til en ypperlig konsulent som kan bidra på alle fronter.",
          pic: 'Anders.Dahlen.600x750.jpg',
          email: 'anders.dahlen@knowit.no',
        },
      ],
      title: 'Riders on the Mindstorm',
      type: 'Workshop',
      description:
        'Har du lyst til å være med på å konkurrere om heder og ære? I denne workshoppen skal du og tre lagmedlemmer bygge og kode en robot til å utføre poenggivende oppgaver. God kode, gode planer og stilfullt design vil bli belønnet! ',
    },
  },
}

export default viewmodel
