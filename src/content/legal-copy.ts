import type { Lang } from "../i18n/ui-locales";

type LegalSection = {
    title: string;
    body: string;
};

type LocalizedLegalCopy = {
    terms: {
        title: string;
        subtitle: string;
        lastUpdated: string;
        sections: LegalSection[];
    };
    disclaimer: {
        title: string;
        noticeTitle: string;
        noticeBody: string;
        sections: LegalSection[];
    };
    subscription: {
        title: string;
        subtitle: string;
        lastUpdated: string;
        intro: string;
        sections: LegalSection[];
    };
};

export const legalCopy: Record<Lang, LocalizedLegalCopy> = {
    en: {
        terms: {
            title: "Terms and Conditions",
            subtitle:
                "Public terms for the initial App Store release of VitalsPath.",
            lastUpdated: "Updated for the initial App Store release.",
            sections: [
                {
                    title: "Scope",
                    body: "These terms apply to the VitalsPath app and the public VitalsPath website. VitalsPath is a personal health organization app for medication, symptoms, vitals, appointments and follow-up. By using the app or this website, you accept these terms and the privacy information published here.",
                },
                {
                    title: "Intended use and responsibilities",
                    body: "VitalsPath is designed to help users organize personal health information. It is not medical advice, diagnosis, treatment, emergency support, or a regulated medical device. If you record information about another person, you are responsible for having the right to do so and for keeping access to your device secure.",
                },
                {
                    title: "Permissions, data and purchases",
                    body: "Depending on the features you choose to use, the app may request permissions such as notifications, health data, microphone, photos, camera, contacts, calendar, reminders or location. Premium plans are offered through the App Store, and Apple manages billing, subscription renewal, refunds and purchase settings.",
                },
                {
                    title: "Availability, updates and contact",
                    body: "Features may vary depending on device, permissions, language, plan, or App Store availability. We may update the app, the website, and these terms to improve clarity, reliability, security, or compliance. For support or legal questions, contact vitalspath@gmail.com. Unless mandatory consumer law says otherwise, these terms are governed by Spanish law.",
                },
            ],
        },
        disclaimer: {
            title: "Medical Disclaimer",
            noticeTitle: "Important",
            noticeBody:
                "VitalsPath supports personal organization and follow-up only.",
            sections: [
                {
                    title: "Not medical advice",
                    body: "VitalsPath is not a doctor, a clinical service, or a medical device. The app does not diagnose conditions, prescribe treatment, or replace medical advice from qualified professionals.",
                },
                {
                    title: "Emergency situations",
                    body: "Do not use VitalsPath for emergency decisions or urgent care. If you believe there is a medical emergency, contact local emergency services immediately or seek urgent medical attention.",
                },
                {
                    title: "Medication and recorded information",
                    body: "Medication reminders, symptom logs, vitals, photos, voice notes, and other records depend on the information you choose to enter or authorize. Always verify medication names, doses, schedules, measurements, and appointments with reliable sources and healthcare professionals.",
                },
                {
                    title: "Personal responsibility and contact",
                    body: "You remain responsible for how you use the app and for any decisions related to your health. If you are unsure how to use VitalsPath alongside professional care, contact vitalspath@gmail.com.",
                },
            ],
        },
        subscription: {
            title: "Subscription Terms",
            subtitle:
                "Plans and billing information for App Store purchases.",
            lastUpdated: "Updated for the initial App Store release.",
            intro: "VitalsPath may offer Premium plans that expand organization and follow-up features. Premium does not change the intended use of the app.",
            sections: [
                {
                    title: "What Premium changes",
                    body: "Premium can expand limits and convenience features such as deeper planning, export, and additional organization tools. It does not turn VitalsPath into a medical service, diagnosis tool, or emergency system.",
                },
                {
                    title: "Plans and launch pricing",
                    body: "The initial public release may include Monthly, Annual, and Lifetime options. Promotional launch prices may be shown for a limited period, and the App Store always shows the final price before you confirm the purchase.",
                },
                {
                    title: "Billing and cancellation",
                    body: "Monthly and Annual plans renew automatically unless you cancel them in your Apple subscription settings before renewal. Lifetime is a one-time purchase. Apple manages billing, taxes, refunds, and subscription policies.",
                },
                {
                    title: "Restore and support",
                    body: "If you change device or need to recover Premium access, use Restore Purchases inside the app. For payment issues handled by Apple, contact Apple first. For app support, write to vitalspath@gmail.com.",
                },
            ],
        },
    },
    es: {
        terms: {
            title: "Términos y condiciones",
            subtitle:
                "Términos públicos para la publicación inicial de VitalsPath en App Store.",
            lastUpdated:
                "Actualizado para la publicación inicial en App Store.",
            sections: [
                {
                    title: "Alcance",
                    body: "Estos términos se aplican a la app VitalsPath y al sitio web público de VitalsPath. VitalsPath es una app de organización personal de salud para medicación, síntomas, constantes, citas y seguimiento. Al usar la app o este sitio web aceptas estos términos y la información de privacidad publicada aquí.",
                },
                {
                    title: "Uso previsto y responsabilidades",
                    body: "VitalsPath está diseñada para ayudarte a organizar información personal de salud. No es consejo médico, diagnóstico, tratamiento, soporte de emergencia ni un dispositivo médico regulado. Si registras información de otra persona, eres responsable de tener autorización para hacerlo y de mantener seguro el acceso a tu dispositivo.",
                },
                {
                    title: "Permisos, datos y compras",
                    body: "Según las funciones que decidas usar, la app puede solicitar permisos como notificaciones, datos de salud, micrófono, fotos, cámara, contactos, calendario, recordatorios o ubicación. Los planes Premium se ofrecen a través de App Store y Apple gestiona la facturación, la renovación, los reembolsos y la configuración de compras.",
                },
                {
                    title: "Disponibilidad, cambios y contacto",
                    body: "Las funciones pueden variar según el dispositivo, los permisos, el idioma, el plan o la disponibilidad en App Store. Podemos actualizar la app, la web y estos términos para mejorar claridad, fiabilidad, seguridad o cumplimiento. Para soporte o consultas legales, escribe a vitalspath@gmail.com. Salvo que la normativa de consumo obligatoria diga lo contrario, estos términos se rigen por la ley española.",
                },
            ],
        },
        disclaimer: {
            title: "Aviso médico",
            noticeTitle: "Importante",
            noticeBody:
                "VitalsPath solo sirve para organización personal y seguimiento.",
            sections: [
                {
                    title: "No es consejo médico",
                    body: "VitalsPath no es un médico, un servicio clínico ni un dispositivo médico. La app no diagnostica problemas, no prescribe tratamientos y no sustituye el consejo médico de profesionales cualificados.",
                },
                {
                    title: "Situaciones de emergencia",
                    body: "No uses VitalsPath para decisiones de emergencia o atención urgente. Si crees que existe una emergencia médica, contacta inmediatamente con los servicios de emergencia de tu zona o busca atención médica urgente.",
                },
                {
                    title: "Medicación e información registrada",
                    body: "Los recordatorios de medicación, registros de síntomas, constantes, fotos, notas de voz y otros datos dependen de la información que decidas introducir o autorizar. Verifica siempre nombres de medicamentos, dosis, horarios, mediciones y citas con fuentes fiables y con profesionales sanitarios.",
                },
                {
                    title: "Responsabilidad personal y contacto",
                    body: "Sigues siendo responsable de cómo usas la app y de cualquier decisión relacionada con tu salud. Si tienes dudas sobre cómo utilizar VitalsPath junto con la atención profesional, escribe a vitalspath@gmail.com.",
                },
            ],
        },
        subscription: {
            title: "Términos de suscripción",
            subtitle:
                "Planes e información de facturación para compras en App Store.",
            lastUpdated:
                "Actualizado para la publicación inicial en App Store.",
            intro: "VitalsPath puede ofrecer planes Premium que amplían funciones de organización y seguimiento. Premium no cambia el uso previsto de la app.",
            sections: [
                {
                    title: "Qué cambia con Premium",
                    body: "Premium puede ampliar límites y funciones de comodidad como planificación más profunda, exportación y herramientas adicionales de organización. No convierte VitalsPath en un servicio médico, una herramienta de diagnóstico ni un sistema de emergencia.",
                },
                {
                    title: "Planes y precios de lanzamiento",
                    body: "La publicación inicial puede incluir opciones Mensual, Anual y Lifetime. Puede mostrarse un precio promocional de lanzamiento durante un periodo limitado, y App Store siempre muestra el precio final antes de confirmar la compra.",
                },
                {
                    title: "Facturación y cancelación",
                    body: "Los planes Mensual y Anual se renuevan automáticamente salvo que los canceles en los ajustes de suscripciones de Apple antes de la renovación. Lifetime es un pago único. Apple gestiona la facturación, los impuestos, los reembolsos y las políticas de suscripción.",
                },
                {
                    title: "Restaurar y soporte",
                    body: "Si cambias de dispositivo o necesitas recuperar el acceso Premium, usa Restaurar compras dentro de la app. Para incidencias de pago gestionadas por Apple, contacta primero con Apple. Para soporte de la app, escribe a vitalspath@gmail.com.",
                },
            ],
        },
    },
    fr: {
        terms: {
            title: "Conditions d’utilisation",
            subtitle:
                "Conditions publiques pour la sortie initiale de VitalsPath sur l’App Store.",
            lastUpdated:
                "Mis à jour pour la sortie initiale sur l’App Store.",
            sections: [
                {
                    title: "Champ d’application",
                    body: "Ces conditions s’appliquent à l’application VitalsPath et au site public VitalsPath. VitalsPath est une application d’organisation personnelle de santé pour les médicaments, les symptômes, les constantes, les rendez-vous et le suivi. En utilisant l’application ou ce site, vous acceptez ces conditions et les informations de confidentialité publiées ici.",
                },
                {
                    title: "Usage prévu et responsabilités",
                    body: "VitalsPath est conçue pour vous aider à organiser des informations personnelles de santé. Ce n’est ni un avis médical, ni un diagnostic, ni un traitement, ni un service d’urgence, ni un dispositif médical réglementé. Si vous enregistrez des informations concernant une autre personne, vous êtes responsable d’avoir le droit de le faire et de protéger l’accès à votre appareil.",
                },
                {
                    title: "Autorisations, données et achats",
                    body: "Selon les fonctions que vous choisissez d’utiliser, l’application peut demander des autorisations comme les notifications, les données de santé, le microphone, les photos, l’appareil photo, les contacts, le calendrier, les rappels ou la localisation. Les offres Premium sont proposées via l’App Store, et Apple gère la facturation, le renouvellement, les remboursements et les réglages d’achat.",
                },
                {
                    title: "Disponibilité, mises à jour et contact",
                    body: "Les fonctions peuvent varier selon l’appareil, les autorisations, la langue, le forfait ou la disponibilité sur l’App Store. Nous pouvons mettre à jour l’application, le site et ces conditions pour améliorer la clarté, la fiabilité, la sécurité ou la conformité. Pour toute question d’assistance ou juridique, écrivez à vitalspath@gmail.com. Sauf disposition impérative contraire du droit de la consommation, ces conditions sont régies par le droit espagnol.",
                },
            ],
        },
        disclaimer: {
            title: "Avertissement médical",
            noticeTitle: "Important",
            noticeBody:
                "VitalsPath sert uniquement à l’organisation personnelle et au suivi.",
            sections: [
                {
                    title: "Pas un avis médical",
                    body: "VitalsPath n’est ni un médecin, ni un service clinique, ni un dispositif médical. L’application ne pose pas de diagnostic, ne prescrit pas de traitement et ne remplace pas l’avis de professionnels de santé qualifiés.",
                },
                {
                    title: "Situations d’urgence",
                    body: "N’utilisez pas VitalsPath pour des décisions d’urgence ou des soins urgents. Si vous pensez qu’il y a une urgence médicale, contactez immédiatement les services d’urgence locaux ou rendez-vous en urgence.",
                },
                {
                    title: "Médicaments et informations enregistrées",
                    body: "Les rappels de médicaments, journaux de symptômes, constantes, photos, notes vocales et autres enregistrements dépendent des informations que vous choisissez d’ajouter ou d’autoriser. Vérifiez toujours les noms de médicaments, doses, horaires, mesures et rendez-vous auprès de sources fiables et de professionnels de santé.",
                },
                {
                    title: "Responsabilité personnelle et contact",
                    body: "Vous restez responsable de la manière dont vous utilisez l’application et de toute décision liée à votre santé. Si vous avez des questions sur l’utilisation de VitalsPath avec un suivi professionnel, écrivez à vitalspath@gmail.com.",
                },
            ],
        },
        subscription: {
            title: "Conditions d’abonnement",
            subtitle:
                "Forfaits et informations de facturation pour les achats App Store.",
            lastUpdated:
                "Mis à jour pour la sortie initiale sur l’App Store.",
            intro: "VitalsPath peut proposer des offres Premium qui étendent les fonctions d’organisation et de suivi. Premium ne change pas l’usage prévu de l’application.",
            sections: [
                {
                    title: "Ce que Premium change",
                    body: "Premium peut augmenter certaines limites et ajouter des fonctions de confort comme une planification plus poussée, l’export et des outils d’organisation supplémentaires. Cela ne transforme pas VitalsPath en service médical, outil de diagnostic ou système d’urgence.",
                },
                {
                    title: "Forfaits et prix de lancement",
                    body: "La première version publique peut inclure des options Mensuelle, Annuelle et À vie. Un prix promotionnel de lancement peut être affiché pendant une période limitée, et l’App Store affiche toujours le prix final avant confirmation de l’achat.",
                },
                {
                    title: "Facturation et annulation",
                    body: "Les forfaits Mensuel et Annuel se renouvellent automatiquement sauf si vous les annulez dans les réglages d’abonnement Apple avant le renouvellement. À vie correspond à un paiement unique. Apple gère la facturation, les taxes, les remboursements et les règles d’abonnement.",
                },
                {
                    title: "Restauration et assistance",
                    body: "Si vous changez d’appareil ou devez récupérer l’accès Premium, utilisez Restaurer les achats dans l’application. Pour les paiements gérés par Apple, contactez d’abord Apple. Pour l’assistance de l’application, écrivez à vitalspath@gmail.com.",
                },
            ],
        },
    },
    de: {
        terms: {
            title: "Nutzungsbedingungen",
            subtitle:
                "Öffentliche Bedingungen für die erste App-Store-Veröffentlichung von VitalsPath.",
            lastUpdated:
                "Aktualisiert für die erste Veröffentlichung im App Store.",
            sections: [
                {
                    title: "Geltungsbereich",
                    body: "Diese Bedingungen gelten für die VitalsPath-App und die öffentliche VitalsPath-Website. VitalsPath ist eine App zur persönlichen Gesundheitsorganisation für Medikamente, Symptome, Vitalwerte, Termine und Nachverfolgung. Mit der Nutzung der App oder dieser Website akzeptieren Sie diese Bedingungen und die hier veröffentlichten Datenschutzinformationen.",
                },
                {
                    title: "Bestimmungsgemäße Nutzung und Verantwortung",
                    body: "VitalsPath wurde entwickelt, um persönliche Gesundheitsinformationen zu organisieren. Die App ist keine medizinische Beratung, keine Diagnose, keine Behandlung, kein Notfalldienst und kein reguliertes Medizinprodukt. Wenn Sie Informationen über eine andere Person erfassen, sind Sie dafür verantwortlich, dazu berechtigt zu sein und den Zugriff auf Ihr Gerät zu schützen.",
                },
                {
                    title: "Berechtigungen, Daten und Käufe",
                    body: "Je nach genutzten Funktionen kann die App Berechtigungen für Mitteilungen, Gesundheitsdaten, Mikrofon, Fotos, Kamera, Kontakte, Kalender, Erinnerungen oder Standort anfordern. Premium-Pläne werden über den App Store angeboten, und Apple verwaltet Abrechnung, Verlängerung, Rückerstattungen und Kaufeinstellungen.",
                },
                {
                    title: "Verfügbarkeit, Aktualisierungen und Kontakt",
                    body: "Funktionen können je nach Gerät, Berechtigungen, Sprache, Plan oder Verfügbarkeit im App Store variieren. Wir können App, Website und diese Bedingungen aktualisieren, um Klarheit, Zuverlässigkeit, Sicherheit oder Compliance zu verbessern. Für Support oder rechtliche Fragen schreiben Sie an vitalspath@gmail.com. Soweit zwingendes Verbraucherschutzrecht nichts anderes vorsieht, gilt spanisches Recht.",
                },
            ],
        },
        disclaimer: {
            title: "Medizinischer Hinweis",
            noticeTitle: "Wichtig",
            noticeBody:
                "VitalsPath dient nur der persönlichen Organisation und Nachverfolgung.",
            sections: [
                {
                    title: "Keine medizinische Beratung",
                    body: "VitalsPath ist weder Arzt noch klinischer Dienst noch Medizinprodukt. Die App stellt keine Diagnosen, verschreibt keine Behandlung und ersetzt keine medizinische Beratung durch qualifizierte Fachkräfte.",
                },
                {
                    title: "Notfälle",
                    body: "Verwenden Sie VitalsPath nicht für Notfallentscheidungen oder dringende medizinische Hilfe. Wenn Sie von einem medizinischen Notfall ausgehen, wenden Sie sich sofort an den örtlichen Rettungsdienst oder suchen Sie unverzüglich medizinische Hilfe.",
                },
                {
                    title: "Medikamente und aufgezeichnete Informationen",
                    body: "Medikamentenerinnerungen, Symptomprotokolle, Vitalwerte, Fotos, Sprachmemos und andere Einträge hängen von den Informationen ab, die Sie selbst eingeben oder freigeben. Prüfen Sie Medikamentennamen, Dosierungen, Zeiten, Messwerte und Termine immer anhand verlässlicher Quellen und mit medizinischem Fachpersonal.",
                },
                {
                    title: "Eigene Verantwortung und Kontakt",
                    body: "Sie bleiben dafür verantwortlich, wie Sie die App nutzen und welche Entscheidungen Sie in Bezug auf Ihre Gesundheit treffen. Wenn Sie unsicher sind, wie VitalsPath zusammen mit professioneller Versorgung genutzt werden sollte, schreiben Sie an vitalspath@gmail.com.",
                },
            ],
        },
        subscription: {
            title: "Abonnementbedingungen",
            subtitle:
                "Pläne und Abrechnungsinformationen für Käufe im App Store.",
            lastUpdated:
                "Aktualisiert für die erste Veröffentlichung im App Store.",
            intro: "VitalsPath kann Premium-Pläne anbieten, die Organisations- und Nachverfolgungsfunktionen erweitern. Premium ändert nicht den bestimmungsgemäßen Einsatz der App.",
            sections: [
                {
                    title: "Was Premium erweitert",
                    body: "Premium kann Limits erweitern und Komfortfunktionen wie tiefere Planung, Export und zusätzliche Organisationstools freischalten. Dadurch wird VitalsPath nicht zu einem medizinischen Dienst, Diagnosetool oder Notfallsystem.",
                },
                {
                    title: "Pläne und Einführungspreise",
                    body: "Die erste öffentliche Version kann Monatlich-, Jährlich- und Lifetime-Optionen enthalten. Zeitlich begrenzte Einführungspreise können angezeigt werden, und der App Store zeigt vor dem Kauf immer den endgültigen Preis an.",
                },
                {
                    title: "Abrechnung und Kündigung",
                    body: "Monatliche und jährliche Pläne verlängern sich automatisch, sofern Sie sie nicht vor der Verlängerung in Ihren Apple-Abonnement-Einstellungen kündigen. Lifetime ist ein einmaliger Kauf. Apple verwaltet Abrechnung, Steuern, Rückerstattungen und Abonnementrichtlinien.",
                },
                {
                    title: "Wiederherstellen und Support",
                    body: "Wenn Sie das Gerät wechseln oder Premium-Zugriff wiederherstellen müssen, verwenden Sie Käufe wiederherstellen in der App. Bei Zahlungsfragen, die Apple betrifft, kontaktieren Sie zuerst Apple. Für App-Support schreiben Sie an vitalspath@gmail.com.",
                },
            ],
        },
    },
    it: {
        terms: {
            title: "Termini e condizioni",
            subtitle:
                "Termini pubblici per la prima pubblicazione di VitalsPath su App Store.",
            lastUpdated:
                "Aggiornato per la pubblicazione iniziale su App Store.",
            sections: [
                {
                    title: "Ambito",
                    body: "Questi termini si applicano all’app VitalsPath e al sito pubblico VitalsPath. VitalsPath è un’app di organizzazione personale della salute per farmaci, sintomi, parametri, appuntamenti e follow-up. Usando l’app o questo sito accetti questi termini e le informazioni sulla privacy pubblicate qui.",
                },
                {
                    title: "Uso previsto e responsabilità",
                    body: "VitalsPath è pensata per aiutarti a organizzare informazioni personali di salute. Non è un consiglio medico, una diagnosi, un trattamento, un servizio di emergenza o un dispositivo medico regolamentato. Se registri informazioni relative a un’altra persona, sei responsabile di avere il diritto di farlo e di proteggere l’accesso al tuo dispositivo.",
                },
                {
                    title: "Permessi, dati e acquisti",
                    body: "In base alle funzioni che scegli di usare, l’app può richiedere permessi per notifiche, dati sanitari, microfono, foto, fotocamera, contatti, calendario, promemoria o posizione. I piani Premium sono offerti tramite App Store e Apple gestisce fatturazione, rinnovi, rimborsi e impostazioni di acquisto.",
                },
                {
                    title: "Disponibilità, aggiornamenti e contatto",
                    body: "Le funzioni possono variare in base a dispositivo, permessi, lingua, piano o disponibilità su App Store. Possiamo aggiornare l’app, il sito e questi termini per migliorare chiarezza, affidabilità, sicurezza o conformità. Per supporto o questioni legali, scrivi a vitalspath@gmail.com. Salvo diversa disposizione obbligatoria per i consumatori, questi termini sono regolati dalla legge spagnola.",
                },
            ],
        },
        disclaimer: {
            title: "Avvertenza medica",
            noticeTitle: "Importante",
            noticeBody:
                "VitalsPath serve solo per organizzazione personale e follow-up.",
            sections: [
                {
                    title: "Nessun consiglio medico",
                    body: "VitalsPath non è un medico, un servizio clinico o un dispositivo medico. L’app non formula diagnosi, non prescrive trattamenti e non sostituisce il parere di professionisti sanitari qualificati.",
                },
                {
                    title: "Situazioni di emergenza",
                    body: "Non usare VitalsPath per decisioni di emergenza o assistenza urgente. Se pensi che ci sia un’emergenza medica, contatta immediatamente i servizi di emergenza locali o cerca assistenza urgente.",
                },
                {
                    title: "Farmaci e informazioni registrate",
                    body: "Promemoria dei farmaci, registri dei sintomi, parametri, foto, note vocali e altri dati dipendono dalle informazioni che scegli di inserire o autorizzare. Verifica sempre nomi dei farmaci, dosi, orari, misurazioni e appuntamenti con fonti affidabili e professionisti sanitari.",
                },
                {
                    title: "Responsabilità personale e contatto",
                    body: "Rimani responsabile di come utilizzi l’app e di qualsiasi decisione relativa alla tua salute. Se hai dubbi su come usare VitalsPath insieme all’assistenza professionale, scrivi a vitalspath@gmail.com.",
                },
            ],
        },
        subscription: {
            title: "Termini di abbonamento",
            subtitle:
                "Piani e informazioni di fatturazione per acquisti su App Store.",
            lastUpdated:
                "Aggiornato per la pubblicazione iniziale su App Store.",
            intro: "VitalsPath può offrire piani Premium che ampliano funzioni di organizzazione e follow-up. Premium non cambia l’uso previsto dell’app.",
            sections: [
                {
                    title: "Cosa cambia con Premium",
                    body: "Premium può ampliare limiti e funzioni di comodità come pianificazione più avanzata, esportazione e strumenti organizzativi aggiuntivi. Non trasforma VitalsPath in un servizio medico, uno strumento diagnostico o un sistema di emergenza.",
                },
                {
                    title: "Piani e prezzi di lancio",
                    body: "La prima release pubblica può includere opzioni Mensile, Annuale e Lifetime. Possono essere mostrati prezzi promozionali di lancio per un periodo limitato, e App Store mostra sempre il prezzo finale prima della conferma dell’acquisto.",
                },
                {
                    title: "Fatturazione e cancellazione",
                    body: "I piani Mensile e Annuale si rinnovano automaticamente salvo cancellazione nelle impostazioni abbonamenti Apple prima del rinnovo. Lifetime è un acquisto una tantum. Apple gestisce fatturazione, tasse, rimborsi e politiche di abbonamento.",
                },
                {
                    title: "Ripristino e supporto",
                    body: "Se cambi dispositivo o devi recuperare l’accesso Premium, usa Ripristina acquisti nell’app. Per problemi di pagamento gestiti da Apple, contatta prima Apple. Per supporto sull’app, scrivi a vitalspath@gmail.com.",
                },
            ],
        },
    },
    pt: {
        terms: {
            title: "Termos e condições",
            subtitle:
                "Termos públicos para o lançamento inicial do VitalsPath na App Store.",
            lastUpdated:
                "Atualizado para o lançamento inicial na App Store.",
            sections: [
                {
                    title: "Âmbito",
                    body: "Estes termos aplicam-se à app VitalsPath e ao site público VitalsPath. O VitalsPath é uma app de organização pessoal de saúde para medicação, sintomas, sinais vitais, consultas e acompanhamento. Ao usar a app ou este site, aceita estes termos e as informações de privacidade publicadas aqui.",
                },
                {
                    title: "Uso previsto e responsabilidades",
                    body: "O VitalsPath foi criado para ajudar na organização de informação pessoal de saúde. Não é aconselhamento médico, diagnóstico, tratamento, serviço de emergência nem dispositivo médico regulado. Se registar informação de outra pessoa, é responsável por ter autorização para o fazer e por proteger o acesso ao seu dispositivo.",
                },
                {
                    title: "Permissões, dados e compras",
                    body: "Consoante as funcionalidades que escolher usar, a app pode pedir permissões como notificações, dados de saúde, microfone, fotografias, câmara, contactos, calendário, lembretes ou localização. Os planos Premium são oferecidos pela App Store, e a Apple gere faturação, renovação, reembolsos e definições de compra.",
                },
                {
                    title: "Disponibilidade, atualizações e contacto",
                    body: "As funcionalidades podem variar conforme o dispositivo, permissões, idioma, plano ou disponibilidade na App Store. Podemos atualizar a app, o site e estes termos para melhorar clareza, fiabilidade, segurança ou conformidade. Para apoio ou questões legais, escreva para vitalspath@gmail.com. Salvo regra obrigatória de proteção do consumidor, estes termos regem-se pela lei espanhola.",
                },
            ],
        },
        disclaimer: {
            title: "Aviso médico",
            noticeTitle: "Importante",
            noticeBody:
                "O VitalsPath serve apenas para organização pessoal e acompanhamento.",
            sections: [
                {
                    title: "Não é aconselhamento médico",
                    body: "O VitalsPath não é um médico, um serviço clínico nem um dispositivo médico. A app não diagnostica condições, não prescreve tratamentos e não substitui o aconselhamento de profissionais de saúde qualificados.",
                },
                {
                    title: "Situações de emergência",
                    body: "Não use o VitalsPath para decisões de emergência ou cuidados urgentes. Se acreditar que existe uma emergência médica, contacte imediatamente os serviços de emergência locais ou procure assistência urgente.",
                },
                {
                    title: "Medicação e informação registada",
                    body: "Lembretes de medicação, registos de sintomas, sinais vitais, fotografias, notas de voz e outros dados dependem da informação que escolher introduzir ou autorizar. Confirme sempre nomes de medicamentos, doses, horários, medições e consultas junto de fontes fiáveis e profissionais de saúde.",
                },
                {
                    title: "Responsabilidade pessoal e contacto",
                    body: "Continua a ser responsável pela forma como usa a app e por qualquer decisão relacionada com a sua saúde. Se tiver dúvidas sobre como usar o VitalsPath juntamente com cuidados profissionais, escreva para vitalspath@gmail.com.",
                },
            ],
        },
        subscription: {
            title: "Termos da subscrição",
            subtitle:
                "Planos e informação de faturação para compras na App Store.",
            lastUpdated:
                "Atualizado para o lançamento inicial na App Store.",
            intro: "O VitalsPath pode oferecer planos Premium que alargam funcionalidades de organização e acompanhamento. Premium não altera o uso previsto da app.",
            sections: [
                {
                    title: "O que muda com Premium",
                    body: "Premium pode aumentar limites e adicionar funcionalidades de conveniência como planeamento mais profundo, exportação e ferramentas adicionais de organização. Não transforma o VitalsPath num serviço médico, ferramenta de diagnóstico ou sistema de emergência.",
                },
                {
                    title: "Planos e preços de lançamento",
                    body: "O lançamento público inicial pode incluir opções Mensal, Anual e Vitalícia. Podem ser mostrados preços promocionais de lançamento por tempo limitado, e a App Store apresenta sempre o preço final antes da confirmação da compra.",
                },
                {
                    title: "Faturação e cancelamento",
                    body: "Os planos Mensal e Anual renovam automaticamente, a menos que os cancele nas definições de subscrições Apple antes da renovação. Vitalícia é uma compra única. A Apple gere faturação, impostos, reembolsos e políticas de subscrição.",
                },
                {
                    title: "Restauro e suporte",
                    body: "Se mudar de dispositivo ou precisar de recuperar o acesso Premium, use Restaurar compras na app. Para problemas de pagamento geridos pela Apple, contacte primeiro a Apple. Para suporte da app, escreva para vitalspath@gmail.com.",
                },
            ],
        },
    },
    ja: {
        terms: {
            title: "利用規約",
            subtitle:
                "VitalsPath の初回 App Store 公開版に関する公開利用規約です。",
            lastUpdated: "初回 App Store 公開版に合わせて更新。",
            sections: [
                {
                    title: "適用範囲",
                    body: "本規約は VitalsPath アプリおよび公開中の VitalsPath ウェブサイトに適用されます。VitalsPath は、服薬、症状、バイタル、予定、経過確認を整理するための個人向け健康管理アプリです。アプリまたは本サイトを利用することで、本規約および本サイト上のプライバシー情報に同意したものとみなされます。",
                },
                {
                    title: "想定用途と利用者の責任",
                    body: "VitalsPath は個人の健康情報を整理するために設計されています。医療助言、診断、治療、緊急対応、または規制対象の医療機器ではありません。ほかの人の情報を記録する場合は、その権限を持つこと、および自分の端末へのアクセスを安全に保つことは利用者の責任です。",
                },
                {
                    title: "権限、データ、購入",
                    body: "利用する機能に応じて、通知、ヘルスデータ、マイク、写真、カメラ、連絡先、カレンダー、リマインダー、位置情報などの権限を求めることがあります。Premium プランは App Store を通じて提供され、請求、更新、返金、購入設定は Apple が管理します。",
                },
                {
                    title: "提供状況、更新、連絡先",
                    body: "機能は、端末、権限、言語、プラン、App Store での提供状況により異なる場合があります。明確性、信頼性、安全性、コンプライアンス向上のため、アプリ、サイト、本規約を更新することがあります。サポートまたは法的な問い合わせは vitalspath@gmail.com までご連絡ください。消費者保護法の強行規定がない限り、本規約にはスペイン法が適用されます。",
                },
            ],
        },
        disclaimer: {
            title: "医療に関する免責事項",
            noticeTitle: "重要",
            noticeBody:
                "VitalsPath は個人の整理と経過確認のみを目的としています。",
            sections: [
                {
                    title: "医療助言ではありません",
                    body: "VitalsPath は医師でも臨床サービスでも医療機器でもありません。アプリは診断や処方を行わず、有資格の医療専門職による助言の代わりにもなりません。",
                },
                {
                    title: "緊急時について",
                    body: "緊急判断や救急対応のために VitalsPath を使用しないでください。医療上の緊急事態だと思われる場合は、直ちに地域の救急サービスに連絡するか、緊急の医療機関を受診してください。",
                },
                {
                    title: "服薬情報と記録データ",
                    body: "服薬リマインダー、症状記録、バイタル、写真、音声メモなどは、利用者が入力または許可した情報に基づきます。薬剤名、用量、時間、測定値、受診予定は、信頼できる情報源および医療専門職と必ず確認してください。",
                },
                {
                    title: "自己責任と連絡先",
                    body: "アプリの利用方法や健康に関する判断についての責任は利用者にあります。専門的な医療と併用して VitalsPath をどう使うべきか不明な場合は、vitalspath@gmail.com までご連絡ください。",
                },
            ],
        },
        subscription: {
            title: "サブスクリプション条件",
            subtitle:
                "App Store 購入に関するプランと請求情報です。",
            lastUpdated: "初回 App Store 公開版に合わせて更新。",
            intro: "VitalsPath では、整理や経過確認機能を拡張する Premium プランを提供する場合があります。Premium でもアプリの想定用途は変わりません。",
            sections: [
                {
                    title: "Premium で変わること",
                    body: "Premium では、上限の拡張や、より詳細な計画、書き出し、追加の整理機能などの利便性が提供される場合があります。ただし、VitalsPath が医療サービス、診断ツール、緊急システムになるわけではありません。",
                },
                {
                    title: "プランとローンチ価格",
                    body: "初回公開版では、月額、年額、Lifetime の各オプションが含まれる場合があります。期間限定のローンチ価格が表示されることがあり、購入確定前には App Store に最終価格が表示されます。",
                },
                {
                    title: "請求と解約",
                    body: "月額プランと年額プランは、更新前に Apple のサブスクリプション設定で解約しない限り自動更新されます。Lifetime は一回限りの購入です。請求、税金、返金、サブスクリプションポリシーは Apple が管理します。",
                },
                {
                    title: "復元とサポート",
                    body: "端末変更後や Premium アクセスの復元が必要な場合は、アプリ内の購入を復元を使用してください。Apple が扱う支払いの問題はまず Apple にお問い合わせください。アプリのサポートは vitalspath@gmail.com までご連絡ください。",
                },
            ],
        },
    },
    zh: {
        terms: {
            title: "条款与条件",
            subtitle: "适用于 VitalsPath 首次 App Store 上线版本的公开条款。",
            lastUpdated: "已针对首次 App Store 上线版本更新。",
            sections: [
                {
                    title: "适用范围",
                    body: "这些条款适用于 VitalsPath 应用和 VitalsPath 公共网站。VitalsPath 是一款用于管理用药、症状、生命体征、预约和后续跟进的个人健康整理应用。使用本应用或本网站，即表示你接受这些条款以及此处公开的隐私信息。",
                },
                {
                    title: "预期用途与用户责任",
                    body: "VitalsPath 用于帮助用户整理个人健康信息。它不是医疗建议、诊断、治疗、紧急服务，也不是受监管的医疗器械。如果你记录其他人的信息，你有责任确保自己有权这样做，并保护好自己设备的访问安全。",
                },
                {
                    title: "权限、数据与购买",
                    body: "根据你选择使用的功能，应用可能请求通知、健康数据、麦克风、照片、相机、通讯录、日历、提醒事项或定位等权限。Premium 计划通过 App Store 提供，账单、续订、退款和购买设置由 Apple 管理。",
                },
                {
                    title: "可用性、更新与联系",
                    body: "功能可能因设备、权限、语言、计划或 App Store 上架状态而有所不同。我们可能更新应用、网站和这些条款，以提升清晰度、可靠性、安全性或合规性。如需支持或法律咨询，请联系 vitalspath@gmail.com。除强制适用的消费者保护规则外，这些条款受西班牙法律管辖。",
                },
            ],
        },
        disclaimer: {
            title: "医疗免责声明",
            noticeTitle: "重要提示",
            noticeBody: "VitalsPath 仅用于个人健康整理与跟进。",
            sections: [
                {
                    title: "不是医疗建议",
                    body: "VitalsPath 不是医生、临床服务，也不是医疗器械。该应用不会进行诊断、不会开具治疗方案，也不能替代合格医疗专业人员的建议。",
                },
                {
                    title: "紧急情况",
                    body: "不要将 VitalsPath 用于紧急决策或急救场景。如果你认为出现了医疗紧急情况，请立即联系当地急救服务或尽快寻求紧急医疗帮助。",
                },
                {
                    title: "药物与记录信息",
                    body: "用药提醒、症状记录、生命体征、照片、语音备注和其他信息取决于你主动输入或授权的数据。请始终与可靠来源和医疗专业人员核对药物名称、剂量、时间、测量值和预约信息。",
                },
                {
                    title: "个人责任与联系",
                    body: "你仍需对自己如何使用该应用以及与健康相关的任何决定负责。如果你不确定如何将 VitalsPath 与专业医疗配合使用，请联系 vitalspath@gmail.com。",
                },
            ],
        },
        subscription: {
            title: "订阅条款",
            subtitle: "适用于 App Store 购买的计划与计费信息。",
            lastUpdated: "已针对首次 App Store 上线版本更新。",
            intro: "VitalsPath 可能提供 Premium 计划，以扩展整理和跟进功能。Premium 不会改变该应用的预期用途。",
            sections: [
                {
                    title: "Premium 提供什么",
                    body: "Premium 可能提升使用上限，并提供更深入的计划、导出和额外的整理工具等便捷功能。但这并不会让 VitalsPath 变成医疗服务、诊断工具或紧急系统。",
                },
                {
                    title: "计划与首发价格",
                    body: "首次公开版本可能包含月付、年付和 Lifetime 选项。首发期间可能会显示限时优惠价，而在你确认购买前，App Store 始终会展示最终价格。",
                },
                {
                    title: "计费与取消",
                    body: "月付和年付计划会自动续订，除非你在续订前于 Apple 订阅设置中取消。Lifetime 为一次性购买。账单、税费、退款和订阅政策均由 Apple 管理。",
                },
                {
                    title: "恢复购买与支持",
                    body: "如果你更换设备或需要恢复 Premium 访问权限，请在应用内使用恢复购买。对于由 Apple 处理的付款问题，请先联系 Apple。对于应用支持，请发送邮件至 vitalspath@gmail.com。",
                },
            ],
        },
    },
    ko: {
        terms: {
            title: "이용약관",
            subtitle: "VitalsPath의 초기 App Store 공개 버전에 적용되는 공개 약관입니다.",
            lastUpdated: "초기 App Store 공개 버전에 맞춰 업데이트됨.",
            sections: [
                {
                    title: "적용 범위",
                    body: "이 약관은 VitalsPath 앱과 공개 VitalsPath 웹사이트에 적용됩니다. VitalsPath는 복약, 증상, 바이탈, 일정, 후속 관리를 정리하기 위한 개인 건강 정리 앱입니다. 앱이나 웹사이트를 사용하면 이 약관과 여기에 게시된 개인정보 관련 정보를 수락한 것으로 봅니다.",
                },
                {
                    title: "의도된 사용과 책임",
                    body: "VitalsPath는 개인 건강 정보를 정리하도록 설계되었습니다. 의료 조언, 진단, 치료, 응급 서비스 또는 규제 대상 의료기기가 아닙니다. 다른 사람의 정보를 기록하는 경우, 그렇게 할 권한이 있는지와 기기 접근을 안전하게 유지하는지는 사용자의 책임입니다.",
                },
                {
                    title: "권한, 데이터 및 구매",
                    body: "사용자가 선택한 기능에 따라 앱은 알림, 건강 데이터, 마이크, 사진, 카메라, 연락처, 캘린더, 미리 알림 또는 위치 권한을 요청할 수 있습니다. Premium 플랜은 App Store를 통해 제공되며 청구, 갱신, 환불 및 구매 설정은 Apple이 관리합니다.",
                },
                {
                    title: "가용성, 업데이트 및 연락",
                    body: "기능은 기기, 권한, 언어, 플랜 또는 App Store 공개 상태에 따라 달라질 수 있습니다. 명확성, 신뢰성, 보안 또는 규정 준수를 위해 앱, 웹사이트 및 본 약관을 업데이트할 수 있습니다. 지원 또는 법적 문의는 vitalspath@gmail.com 으로 보내주세요. 소비자 보호 관련 강행 규정이 없는 한 이 약관에는 스페인 법이 적용됩니다.",
                },
            ],
        },
        disclaimer: {
            title: "의료 면책 고지",
            noticeTitle: "중요",
            noticeBody:
                "VitalsPath는 개인 정리와 추적 목적으로만 제공됩니다.",
            sections: [
                {
                    title: "의료 조언이 아닙니다",
                    body: "VitalsPath는 의사도 아니고 임상 서비스도 아니며 의료기기도 아닙니다. 앱은 진단을 제공하지 않고 치료를 처방하지 않으며 자격 있는 의료 전문가의 조언을 대체하지 않습니다.",
                },
                {
                    title: "응급 상황",
                    body: "응급 판단이나 긴급 치료를 위해 VitalsPath를 사용하지 마세요. 의료 응급상황이라고 생각되면 즉시 지역 응급 서비스에 연락하거나 긴급 진료를 받으세요.",
                },
                {
                    title: "약물과 기록 정보",
                    body: "복약 알림, 증상 기록, 바이탈, 사진, 음성 메모 및 기타 정보는 사용자가 직접 입력하거나 허용한 정보에 따라 달라집니다. 약 이름, 용량, 시간, 측정값 및 예약 정보는 항상 신뢰할 수 있는 출처와 의료 전문가를 통해 확인하세요.",
                },
                {
                    title: "개인 책임과 연락처",
                    body: "앱을 어떻게 사용하는지와 건강 관련 결정을 어떻게 내리는지는 여전히 사용자의 책임입니다. 전문적인 의료와 함께 VitalsPath를 어떻게 사용해야 할지 확신이 없다면 vitalspath@gmail.com 으로 문의하세요.",
                },
            ],
        },
        subscription: {
            title: "구독 약관",
            subtitle: "App Store 구매에 대한 플랜 및 결제 정보입니다.",
            lastUpdated: "초기 App Store 공개 버전에 맞춰 업데이트됨.",
            intro: "VitalsPath는 정리와 추적 기능을 확장하는 Premium 플랜을 제공할 수 있습니다. Premium이 앱의 의도된 사용 목적을 바꾸지는 않습니다.",
            sections: [
                {
                    title: "Premium으로 달라지는 점",
                    body: "Premium은 한도를 늘리고 더 깊은 계획, 내보내기, 추가 정리 도구 같은 편의 기능을 제공할 수 있습니다. 하지만 VitalsPath를 의료 서비스, 진단 도구 또는 응급 시스템으로 바꾸지는 않습니다.",
                },
                {
                    title: "플랜과 출시 가격",
                    body: "초기 공개 버전에는 월간, 연간, Lifetime 옵션이 포함될 수 있습니다. 한정 기간 출시 프로모션 가격이 표시될 수 있으며, 구매를 확인하기 전에 App Store가 최종 가격을 항상 보여줍니다.",
                },
                {
                    title: "청구와 해지",
                    body: "월간 및 연간 플랜은 갱신 전에 Apple 구독 설정에서 해지하지 않으면 자동으로 갱신됩니다. Lifetime은 일회성 구매입니다. 청구, 세금, 환불 및 구독 정책은 Apple이 관리합니다.",
                },
                {
                    title: "복원과 지원",
                    body: "기기를 변경했거나 Premium 접근 권한을 복원해야 한다면 앱 안에서 구매 복원을 사용하세요. Apple이 처리하는 결제 문제는 먼저 Apple에 문의하세요. 앱 지원은 vitalspath@gmail.com 으로 연락하세요.",
                },
            ],
        },
    },
    ru: {
        terms: {
            title: "Условия использования",
            subtitle:
                "Публичные условия для первой публикации VitalsPath в App Store.",
            lastUpdated: "Обновлено для первой публикации в App Store.",
            sections: [
                {
                    title: "Область действия",
                    body: "Эти условия применяются к приложению VitalsPath и публичному сайту VitalsPath. VitalsPath — это приложение для личной организации информации о лекарствах, симптомах, показателях, визитах и наблюдении. Используя приложение или этот сайт, вы принимаете эти условия и опубликованную здесь информацию о конфиденциальности.",
                },
                {
                    title: "Назначение и ответственность",
                    body: "VitalsPath создано для организации личной информации о здоровье. Это не медицинская консультация, не диагностика, не лечение, не экстренная служба и не регулируемое медицинское изделие. Если вы записываете данные другого человека, вы отвечаете за наличие права делать это и за защиту доступа к своему устройству.",
                },
                {
                    title: "Разрешения, данные и покупки",
                    body: "В зависимости от используемых функций приложение может запрашивать разрешения на уведомления, данные здоровья, микрофон, фото, камеру, контакты, календарь, напоминания или местоположение. Планы Premium предлагаются через App Store, а Apple управляет выставлением счетов, продлением, возвратами и настройками покупки.",
                },
                {
                    title: "Доступность, обновления и контакт",
                    body: "Функции могут отличаться в зависимости от устройства, разрешений, языка, плана или доступности в App Store. Мы можем обновлять приложение, сайт и эти условия для повышения ясности, надежности, безопасности или соответствия требованиям. По вопросам поддержки или права пишите на vitalspath@gmail.com. Если обязательные нормы защиты потребителей не требуют иного, применяется право Испании.",
                },
            ],
        },
        disclaimer: {
            title: "Медицинское предупреждение",
            noticeTitle: "Важно",
            noticeBody:
                "VitalsPath предназначен только для личной организации и наблюдения.",
            sections: [
                {
                    title: "Это не медицинская консультация",
                    body: "VitalsPath не является врачом, клинической службой или медицинским устройством. Приложение не ставит диагнозы, не назначает лечение и не заменяет консультацию квалифицированных медицинских специалистов.",
                },
                {
                    title: "Экстренные ситуации",
                    body: "Не используйте VitalsPath для экстренных решений или срочной помощи. Если вы считаете, что ситуация является неотложной, немедленно свяжитесь с местными экстренными службами или обратитесь за срочной медицинской помощью.",
                },
                {
                    title: "Лекарства и записанные данные",
                    body: "Напоминания о приеме лекарств, журналы симптомов, показатели, фотографии, голосовые заметки и другие записи зависят от информации, которую вы вводите или разрешаете использовать. Всегда проверяйте названия лекарств, дозировки, расписания, измерения и визиты по надежным источникам и с медицинскими специалистами.",
                },
                {
                    title: "Личная ответственность и контакт",
                    body: "Вы по-прежнему несете ответственность за то, как используете приложение, и за любые решения, связанные с вашим здоровьем. Если вы не уверены, как использовать VitalsPath вместе с профессиональной медицинской помощью, напишите на vitalspath@gmail.com.",
                },
            ],
        },
        subscription: {
            title: "Условия подписки",
            subtitle:
                "Планы и информация об оплате для покупок через App Store.",
            lastUpdated: "Обновлено для первой публикации в App Store.",
            intro: "VitalsPath может предлагать планы Premium, расширяющие функции организации и наблюдения. Premium не меняет назначение приложения.",
            sections: [
                {
                    title: "Что дает Premium",
                    body: "Premium может увеличивать лимиты и добавлять удобные функции, такие как более глубокое планирование, экспорт и дополнительные инструменты организации. Это не превращает VitalsPath в медицинскую услугу, инструмент диагностики или систему экстренной помощи.",
                },
                {
                    title: "Планы и стартовые цены",
                    body: "Первая публичная версия может включать варианты Monthly, Annual и Lifetime. В течение ограниченного периода могут показываться стартовые промо-цены, а App Store всегда отображает окончательную цену до подтверждения покупки.",
                },
                {
                    title: "Оплата и отмена",
                    body: "Планы Monthly и Annual продлеваются автоматически, если вы не отмените их в настройках подписок Apple до даты продления. Lifetime — это разовая покупка. Apple управляет оплатой, налогами, возвратами и правилами подписок.",
                },
                {
                    title: "Восстановление и поддержка",
                    body: "Если вы сменили устройство или вам нужно восстановить доступ к Premium, используйте функцию Restore Purchases в приложении. По платежным вопросам, которые обрабатывает Apple, сначала обращайтесь в Apple. По вопросам приложения пишите на vitalspath@gmail.com.",
                },
            ],
        },
    },
    ar: {
        terms: {
            title: "الشروط والأحكام",
            subtitle:
                "الشروط العامة الخاصة بالإصدار الأول من VitalsPath على App Store.",
            lastUpdated: "تم التحديث ليتوافق مع الإصدار الأول على App Store.",
            sections: [
                {
                    title: "النطاق",
                    body: "تنطبق هذه الشروط على تطبيق VitalsPath وعلى موقع VitalsPath العام. VitalsPath هو تطبيق لتنظيم الصحة الشخصية يتعلق بالأدوية والأعراض والقياسات الحيوية والمواعيد والمتابعة. باستخدام التطبيق أو هذا الموقع فإنك توافق على هذه الشروط وعلى معلومات الخصوصية المنشورة هنا.",
                },
                {
                    title: "الاستخدام المقصود والمسؤوليات",
                    body: "تم تصميم VitalsPath لمساعدتك على تنظيم معلوماتك الصحية الشخصية. وهو ليس نصيحة طبية أو تشخيصًا أو علاجًا أو خدمة طوارئ أو جهازًا طبيًا منظمًا. إذا قمت بتسجيل معلومات تخص شخصًا آخر فأنت مسؤول عن امتلاك الحق في ذلك وعن حماية الوصول إلى جهازك.",
                },
                {
                    title: "الأذونات والبيانات وعمليات الشراء",
                    body: "بحسب الميزات التي تختار استخدامها، قد يطلب التطبيق أذونات مثل الإشعارات أو بيانات الصحة أو الميكروفون أو الصور أو الكاميرا أو جهات الاتصال أو التقويم أو التذكيرات أو الموقع. يتم تقديم خطط Premium عبر App Store، وتدير Apple الفوترة والتجديد والاسترداد وإعدادات الشراء.",
                },
                {
                    title: "التوفر والتحديثات والتواصل",
                    body: "قد تختلف الميزات حسب الجهاز أو الأذونات أو اللغة أو الخطة أو توفر التطبيق على App Store. قد نقوم بتحديث التطبيق والموقع وهذه الشروط لتحسين الوضوح أو الاعتمادية أو الأمان أو الامتثال. للدعم أو الاستفسارات القانونية راسل vitalspath@gmail.com. ما لم تفرض قوانين حماية المستهلك خلاف ذلك، تخضع هذه الشروط للقانون الإسباني.",
                },
            ],
        },
        disclaimer: {
            title: "إخلاء المسؤولية الطبية",
            noticeTitle: "مهم",
            noticeBody:
                "VitalsPath مخصص فقط للتنظيم الشخصي والمتابعة.",
            sections: [
                {
                    title: "ليس نصيحة طبية",
                    body: "VitalsPath ليس طبيبًا ولا خدمة سريرية ولا جهازًا طبيًا. التطبيق لا يشخص الحالات ولا يصف العلاج ولا يستبدل نصيحة المهنيين الصحيين المؤهلين.",
                },
                {
                    title: "حالات الطوارئ",
                    body: "لا تستخدم VitalsPath لاتخاذ قرارات الطوارئ أو للحصول على رعاية عاجلة. إذا كنت تعتقد أن هناك حالة طبية طارئة فاتصل فورًا بخدمات الطوارئ المحلية أو اطلب رعاية طبية عاجلة.",
                },
                {
                    title: "الأدوية والمعلومات المسجلة",
                    body: "تعتمد تذكيرات الأدوية وسجلات الأعراض والقياسات الحيوية والصور والملاحظات الصوتية وغيرها من السجلات على المعلومات التي تختار إدخالها أو السماح بها. تحقق دائمًا من أسماء الأدوية والجرعات والمواعيد والقياسات والمواعيد الطبية من مصادر موثوقة ومع مختصين صحيين.",
                },
                {
                    title: "المسؤولية الشخصية والتواصل",
                    body: "تبقى أنت المسؤول عن كيفية استخدامك للتطبيق وعن أي قرارات مرتبطة بصحتك. إذا لم تكن متأكدًا من كيفية استخدام VitalsPath إلى جانب الرعاية المهنية، فاكتب إلى vitalspath@gmail.com.",
                },
            ],
        },
        subscription: {
            title: "شروط الاشتراك",
            subtitle:
                "الخطط ومعلومات الفوترة الخاصة بالمشتريات عبر App Store.",
            lastUpdated: "تم التحديث ليتوافق مع الإصدار الأول على App Store.",
            intro: "قد يوفر VitalsPath خطط Premium توسع ميزات التنظيم والمتابعة. Premium لا يغير الغرض المقصود من التطبيق.",
            sections: [
                {
                    title: "ما الذي يتغير مع Premium",
                    body: "قد يوسع Premium الحدود ويضيف ميزات مريحة مثل التخطيط الأعمق والتصدير وأدوات تنظيم إضافية. لكنه لا يحول VitalsPath إلى خدمة طبية أو أداة تشخيص أو نظام طوارئ.",
                },
                {
                    title: "الخطط وأسعار الإطلاق",
                    body: "قد يتضمن الإصدار العام الأول خيارات شهرية وسنوية ومدى الحياة. وقد تظهر أسعار ترويجية لفترة إطلاق محدودة، ويعرض App Store دائمًا السعر النهائي قبل تأكيد الشراء.",
                },
                {
                    title: "الفوترة والإلغاء",
                    body: "تتجدد الخطط الشهرية والسنوية تلقائيًا ما لم تقم بإلغائها من إعدادات اشتراكات Apple قبل التجديد. خطة مدى الحياة هي عملية شراء لمرة واحدة. تدير Apple الفوترة والضرائب والاسترداد وسياسات الاشتراك.",
                },
                {
                    title: "الاستعادة والدعم",
                    body: "إذا غيّرت جهازك أو احتجت إلى استعادة الوصول إلى Premium فاستخدم استعادة المشتريات داخل التطبيق. وبالنسبة لمشكلات الدفع التي تديرها Apple، تواصل أولًا مع Apple. وللدعم المتعلق بالتطبيق، راسل vitalspath@gmail.com.",
                },
            ],
        },
    },
    hi: {
        terms: {
            title: "नियम और शर्तें",
            subtitle:
                "VitalsPath के शुरुआती App Store रिलीज़ के लिए सार्वजनिक नियम और शर्तें।",
            lastUpdated: "शुरुआती App Store रिलीज़ के लिए अपडेट किया गया।",
            sections: [
                {
                    title: "दायरा",
                    body: "ये शर्तें VitalsPath ऐप और सार्वजनिक VitalsPath वेबसाइट पर लागू होती हैं। VitalsPath दवाओं, लक्षणों, वाइटल्स, अपॉइंटमेंट्स और फॉलो-अप के लिए एक निजी स्वास्थ्य संगठन ऐप है। ऐप या इस वेबसाइट का उपयोग करके आप इन शर्तों और यहाँ प्रकाशित गोपनीयता जानकारी को स्वीकार करते हैं।",
                },
                {
                    title: "उद्देश्य और जिम्मेदारी",
                    body: "VitalsPath को व्यक्तिगत स्वास्थ्य जानकारी को व्यवस्थित करने के लिए बनाया गया है। यह मेडिकल सलाह, निदान, उपचार, आपातकालीन सेवा या विनियमित चिकित्सा उपकरण नहीं है। यदि आप किसी और की जानकारी दर्ज करते हैं, तो ऐसा करने का अधिकार होना और अपने डिवाइस की सुरक्षा बनाए रखना आपकी जिम्मेदारी है।",
                },
                {
                    title: "अनुमतियाँ, डेटा और खरीद",
                    body: "आप जिन सुविधाओं का उपयोग चुनते हैं, उनके आधार पर ऐप नोटिफिकेशन, हेल्थ डेटा, माइक्रोफोन, फ़ोटो, कैमरा, कॉन्टैक्ट्स, कैलेंडर, रिमाइंडर्स या लोकेशन जैसी अनुमतियाँ मांग सकता है। Premium प्लान App Store के माध्यम से दिए जाते हैं, और बिलिंग, नवीनीकरण, रिफंड और खरीद सेटिंग्स Apple संभालता है।",
                },
                {
                    title: "उपलब्धता, अपडेट और संपर्क",
                    body: "फीचर डिवाइस, अनुमतियों, भाषा, प्लान या App Store उपलब्धता के अनुसार बदल सकते हैं। स्पष्टता, विश्वसनीयता, सुरक्षा या अनुपालन सुधारने के लिए हम ऐप, वेबसाइट और इन शर्तों को अपडेट कर सकते हैं। सहायता या कानूनी प्रश्नों के लिए vitalspath@gmail.com पर लिखें। जब तक उपभोक्ता कानून अन्यथा अनिवार्य न करे, इन शर्तों पर स्पेनिश कानून लागू होगा।",
                },
            ],
        },
        disclaimer: {
            title: "चिकित्सीय अस्वीकरण",
            noticeTitle: "महत्वपूर्ण",
            noticeBody:
                "VitalsPath केवल व्यक्तिगत संगठन और फॉलो-अप के लिए है।",
            sections: [
                {
                    title: "यह चिकित्सा सलाह नहीं है",
                    body: "VitalsPath कोई डॉक्टर, क्लिनिकल सेवा या चिकित्सा उपकरण नहीं है। ऐप निदान नहीं करता, उपचार निर्धारित नहीं करता और योग्य स्वास्थ्य पेशेवरों की सलाह का विकल्प नहीं है।",
                },
                {
                    title: "आपातकालीन स्थितियाँ",
                    body: "आपातकालीन निर्णयों या तत्काल देखभाल के लिए VitalsPath का उपयोग न करें। यदि आपको लगता है कि कोई चिकित्सीय आपातकाल है, तो तुरंत स्थानीय आपातकालीन सेवाओं से संपर्क करें या आपात चिकित्सा सहायता लें।",
                },
                {
                    title: "दवाएँ और दर्ज की गई जानकारी",
                    body: "दवा रिमाइंडर, लक्षण लॉग, वाइटल्स, फ़ोटो, वॉइस नोट्स और अन्य रिकॉर्ड उस जानकारी पर निर्भर करते हैं जिसे आप दर्ज या अनुमति देते हैं। दवाओं के नाम, खुराक, समय, माप और अपॉइंटमेंट्स को हमेशा भरोसेमंद स्रोतों और स्वास्थ्य पेशेवरों से सत्यापित करें।",
                },
                {
                    title: "व्यक्तिगत जिम्मेदारी और संपर्क",
                    body: "ऐप का उपयोग कैसे किया जाता है और स्वास्थ्य से जुड़े निर्णयों की जिम्मेदारी आपकी ही रहती है। यदि आपको समझ नहीं आ रहा कि पेशेवर देखभाल के साथ VitalsPath का उपयोग कैसे करें, तो vitalspath@gmail.com पर लिखें।",
                },
            ],
        },
        subscription: {
            title: "सदस्यता शर्तें",
            subtitle:
                "App Store खरीद के लिए प्लान और बिलिंग जानकारी।",
            lastUpdated: "शुरुआती App Store रिलीज़ के लिए अपडेट किया गया।",
            intro: "VitalsPath ऐसे Premium प्लान दे सकता है जो संगठन और फॉलो-अप सुविधाओं को बढ़ाते हैं। Premium ऐप के उद्देश्य को नहीं बदलता।",
            sections: [
                {
                    title: "Premium से क्या बदलता है",
                    body: "Premium सीमाएँ बढ़ा सकता है और गहरे प्लानिंग, एक्सपोर्ट और अतिरिक्त संगठन टूल जैसी सुविधाएँ दे सकता है। लेकिन इससे VitalsPath कोई मेडिकल सेवा, डायग्नोस्टिक टूल या आपातकालीन प्रणाली नहीं बनता।",
                },
                {
                    title: "प्लान और लॉन्च कीमतें",
                    body: "शुरुआती सार्वजनिक रिलीज़ में Monthly, Annual और Lifetime विकल्प शामिल हो सकते हैं। सीमित समय के लिए लॉन्च प्रमोशनल कीमतें दिखाई जा सकती हैं, और खरीद की पुष्टि से पहले App Store हमेशा अंतिम कीमत दिखाता है।",
                },
                {
                    title: "बिलिंग और रद्द करना",
                    body: "Monthly और Annual प्लान अपने-आप नवीनीकृत होते हैं जब तक कि आप नवीनीकरण से पहले Apple subscription settings में उन्हें रद्द न कर दें। Lifetime एक बार की खरीद है। बिलिंग, टैक्स, रिफंड और subscription policies Apple संभालता है।",
                },
                {
                    title: "रीस्टोर और सपोर्ट",
                    body: "यदि आप डिवाइस बदलते हैं या Premium access वापस पाना चाहते हैं, तो ऐप के भीतर Restore Purchases का उपयोग करें। Apple द्वारा संभाले जाने वाले भुगतान मामलों के लिए पहले Apple से संपर्क करें। ऐप सहायता के लिए vitalspath@gmail.com पर लिखें।",
                },
            ],
        },
    },
    tr: {
        terms: {
            title: "Şartlar ve koşullar",
            subtitle:
                "VitalsPath’in ilk App Store yayını için genel kullanım şartları.",
            lastUpdated: "İlk App Store yayını için güncellendi.",
            sections: [
                {
                    title: "Kapsam",
                    body: "Bu şartlar VitalsPath uygulaması ve VitalsPath’in herkese açık web sitesi için geçerlidir. VitalsPath; ilaçlar, semptomlar, vital ölçümler, randevular ve takip için kişisel sağlık organizasyonu uygulamasıdır. Uygulamayı veya bu siteyi kullanarak bu şartları ve burada yayımlanan gizlilik bilgilerini kabul etmiş olursunuz.",
                },
                {
                    title: "Amaçlanan kullanım ve sorumluluk",
                    body: "VitalsPath kişisel sağlık bilgilerini düzenlemeye yardımcı olmak için tasarlanmıştır. Tıbbi tavsiye, teşhis, tedavi, acil destek veya düzenlemeye tabi bir tıbbi cihaz değildir. Başka bir kişiye ait bilgi giriyorsanız, bunu yapma yetkisine sahip olmak ve cihazınıza erişimi korumak sizin sorumluluğunuzdadır.",
                },
                {
                    title: "İzinler, veriler ve satın almalar",
                    body: "Kullanmayı seçtiğiniz özelliklere bağlı olarak uygulama bildirimler, sağlık verileri, mikrofon, fotoğraflar, kamera, kişiler, takvim, anımsatıcılar veya konum için izin isteyebilir. Premium planlar App Store üzerinden sunulur ve faturalandırma, yenileme, iade ve satın alma ayarlarını Apple yönetir.",
                },
                {
                    title: "Erişilebilirlik, güncellemeler ve iletişim",
                    body: "Özellikler cihaza, izinlere, dile, plana veya App Store’daki erişilebilirliğe göre değişebilir. Açıklık, güvenilirlik, güvenlik veya uyumluluğu artırmak için uygulamayı, siteyi ve bu şartları güncelleyebiliriz. Destek veya hukuki sorular için vitalspath@gmail.com adresine yazın. Zorunlu tüketici hukuku aksini gerektirmedikçe bu şartlar İspanya hukukuna tabidir.",
                },
            ],
        },
        disclaimer: {
            title: "Tıbbi uyarı",
            noticeTitle: "Önemli",
            noticeBody:
                "VitalsPath yalnızca kişisel organizasyon ve takip içindir.",
            sections: [
                {
                    title: "Tıbbi tavsiye değildir",
                    body: "VitalsPath bir doktor, klinik hizmet veya tıbbi cihaz değildir. Uygulama teşhis koymaz, tedavi önermez ve yetkin sağlık profesyonellerinin tavsiyesinin yerine geçmez.",
                },
                {
                    title: "Acil durumlar",
                    body: "Acil kararlar veya acil bakım için VitalsPath kullanmayın. Tıbbi bir acil durum olduğunu düşünüyorsanız hemen yerel acil servislerle iletişime geçin veya acil tıbbi yardım alın.",
                },
                {
                    title: "İlaçlar ve kaydedilen bilgiler",
                    body: "İlaç hatırlatmaları, semptom kayıtları, vital ölçümler, fotoğraflar, sesli notlar ve diğer kayıtlar sizin girdiğiniz veya izin verdiğiniz bilgilere dayanır. İlaç adlarını, dozları, saatleri, ölçümleri ve randevuları her zaman güvenilir kaynaklar ve sağlık profesyonelleri ile doğrulayın.",
                },
                {
                    title: "Kişisel sorumluluk ve iletişim",
                    body: "Uygulamayı nasıl kullandığınızdan ve sağlığınızla ilgili verdiğiniz kararlardan siz sorumlusunuz. VitalsPath’i profesyonel bakım ile birlikte nasıl kullanmanız gerektiğinden emin değilseniz vitalspath@gmail.com adresine yazın.",
                },
            ],
        },
        subscription: {
            title: "Abonelik şartları",
            subtitle:
                "App Store satın alımları için planlar ve faturalandırma bilgileri.",
            lastUpdated: "İlk App Store yayını için güncellendi.",
            intro: "VitalsPath, organizasyon ve takip özelliklerini genişleten Premium planlar sunabilir. Premium, uygulamanın amaçlanan kullanımını değiştirmez.",
            sections: [
                {
                    title: "Premium neyi değiştirir",
                    body: "Premium; daha derin planlama, dışa aktarma ve ek organizasyon araçları gibi kolaylık özellikleri sunabilir ve limitleri genişletebilir. Ancak VitalsPath’i tıbbi hizmete, teşhis aracına veya acil durum sistemine dönüştürmez.",
                },
                {
                    title: "Planlar ve lansman fiyatları",
                    body: "İlk genel sürüm Monthly, Annual ve Lifetime seçeneklerini içerebilir. Sınırlı süreli lansman fiyatları gösterilebilir ve satın almayı onaylamadan önce App Store her zaman son fiyatı gösterir.",
                },
                {
                    title: "Faturalandırma ve iptal",
                    body: "Monthly ve Annual planlar, yenilemeden önce Apple abonelik ayarlarından iptal edilmedikçe otomatik yenilenir. Lifetime tek seferlik satın alımdır. Faturalandırma, vergiler, iadeler ve abonelik politikalarını Apple yönetir.",
                },
                {
                    title: "Geri yükleme ve destek",
                    body: "Cihaz değiştirirseniz veya Premium erişimini geri almanız gerekirse uygulama içindeki Satın Almaları Geri Yükle seçeneğini kullanın. Apple tarafından yönetilen ödeme sorunlarında önce Apple ile iletişime geçin. Uygulama desteği için vitalspath@gmail.com adresine yazın.",
                },
            ],
        },
    },
    nl: {
        terms: {
            title: "Voorwaarden",
            subtitle:
                "Openbare voorwaarden voor de eerste App Store-release van VitalsPath.",
            lastUpdated: "Bijgewerkt voor de eerste App Store-release.",
            sections: [
                {
                    title: "Reikwijdte",
                    body: "Deze voorwaarden zijn van toepassing op de VitalsPath-app en de openbare VitalsPath-website. VitalsPath is een app voor persoonlijke gezondheidsorganisatie rond medicatie, symptomen, metingen, afspraken en opvolging. Door de app of deze website te gebruiken, ga je akkoord met deze voorwaarden en de hier gepubliceerde privacy-informatie.",
                },
                {
                    title: "Beoogd gebruik en verantwoordelijkheid",
                    body: "VitalsPath is bedoeld om persoonlijke gezondheidsinformatie te helpen organiseren. Het is geen medisch advies, diagnose, behandeling, noodhulp of gereguleerd medisch hulpmiddel. Als je informatie van iemand anders vastlegt, ben je er zelf verantwoordelijk voor dat je dit mag doen en dat je de toegang tot je apparaat beveiligt.",
                },
                {
                    title: "Toestemmingen, gegevens en aankopen",
                    body: "Afhankelijk van de functies die je gebruikt, kan de app toestemming vragen voor meldingen, gezondheidsgegevens, microfoon, foto’s, camera, contacten, agenda, herinneringen of locatie. Premium-plannen worden via de App Store aangeboden en Apple beheert facturatie, verlenging, terugbetalingen en aankoopinstellingen.",
                },
                {
                    title: "Beschikbaarheid, updates en contact",
                    body: "Functies kunnen verschillen per apparaat, toestemming, taal, plan of beschikbaarheid in de App Store. We kunnen de app, de website en deze voorwaarden bijwerken om duidelijkheid, betrouwbaarheid, veiligheid of compliance te verbeteren. Voor ondersteuning of juridische vragen kun je mailen naar vitalspath@gmail.com. Tenzij dwingend consumentenrecht anders bepaalt, is Spaans recht van toepassing.",
                },
            ],
        },
        disclaimer: {
            title: "Medische disclaimer",
            noticeTitle: "Belangrijk",
            noticeBody:
                "VitalsPath is alleen bedoeld voor persoonlijke organisatie en opvolging.",
            sections: [
                {
                    title: "Geen medisch advies",
                    body: "VitalsPath is geen arts, klinische dienst of medisch hulpmiddel. De app stelt geen diagnoses, schrijft geen behandeling voor en vervangt geen advies van gekwalificeerde zorgprofessionals.",
                },
                {
                    title: "Noodsituaties",
                    body: "Gebruik VitalsPath niet voor noodbeslissingen of dringende zorg. Als je denkt dat er sprake is van een medisch noodgeval, neem dan direct contact op met de lokale hulpdiensten of zoek met spoed medische hulp.",
                },
                {
                    title: "Medicatie en vastgelegde informatie",
                    body: "Medicatieherinneringen, symptoomlogboeken, metingen, foto’s, spraaknotities en andere registraties zijn afhankelijk van de informatie die je zelf invoert of toestaat. Controleer medicijnnamen, doseringen, tijden, metingen en afspraken altijd bij betrouwbare bronnen en zorgprofessionals.",
                },
                {
                    title: "Persoonlijke verantwoordelijkheid en contact",
                    body: "Je blijft zelf verantwoordelijk voor hoe je de app gebruikt en voor beslissingen die verband houden met je gezondheid. Als je niet zeker weet hoe je VitalsPath naast professionele zorg moet gebruiken, mail dan naar vitalspath@gmail.com.",
                },
            ],
        },
        subscription: {
            title: "Abonnementsvoorwaarden",
            subtitle:
                "Plannen en facturatie-informatie voor aankopen via de App Store.",
            lastUpdated: "Bijgewerkt voor de eerste App Store-release.",
            intro: "VitalsPath kan Premium-plannen aanbieden die organisatie- en opvolgfuncties uitbreiden. Premium verandert het beoogde gebruik van de app niet.",
            sections: [
                {
                    title: "Wat Premium verandert",
                    body: "Premium kan limieten verruimen en extra gemaksfuncties bieden, zoals uitgebreidere planning, export en extra organisatietools. Het maakt van VitalsPath geen medische dienst, diagnostisch hulpmiddel of noodsysteem.",
                },
                {
                    title: "Plannen en lanceringsprijzen",
                    body: "De eerste openbare release kan Monthly-, Annual- en Lifetime-opties bevatten. Er kunnen tijdelijke lanceringsprijzen worden getoond en de App Store toont altijd de definitieve prijs voordat je de aankoop bevestigt.",
                },
                {
                    title: "Facturatie en annuleren",
                    body: "Monthly- en Annual-plannen worden automatisch verlengd, tenzij je ze vóór verlenging annuleert in je Apple-abonnementsinstellingen. Lifetime is een eenmalige aankoop. Apple beheert facturatie, belastingen, terugbetalingen en abonnementsbeleid.",
                },
                {
                    title: "Herstellen en ondersteuning",
                    body: "Als je van apparaat wisselt of Premium-toegang moet herstellen, gebruik dan Aankopen herstellen in de app. Neem bij betalingsproblemen die door Apple worden afgehandeld eerst contact op met Apple. Voor app-ondersteuning mail je naar vitalspath@gmail.com.",
                },
            ],
        },
    },
    pl: {
        terms: {
            title: "Warunki korzystania",
            subtitle:
                "Publiczne warunki dla pierwszego wydania VitalsPath w App Store.",
            lastUpdated: "Zaktualizowano dla pierwszego wydania w App Store.",
            sections: [
                {
                    title: "Zakres",
                    body: "Te warunki dotyczą aplikacji VitalsPath oraz publicznej strony VitalsPath. VitalsPath to aplikacja do osobistej organizacji zdrowia związanej z lekami, objawami, pomiarami, wizytami i obserwacją. Korzystając z aplikacji lub tej strony, akceptujesz te warunki oraz informacje o prywatności opublikowane tutaj.",
                },
                {
                    title: "Przeznaczenie i odpowiedzialność",
                    body: "VitalsPath została zaprojektowana do porządkowania osobistych informacji zdrowotnych. Nie jest poradą medyczną, diagnozą, leczeniem, pomocą w nagłych wypadkach ani regulowanym wyrobem medycznym. Jeśli zapisujesz informacje o innej osobie, odpowiadasz za to, że masz do tego prawo i że zabezpieczasz dostęp do swojego urządzenia.",
                },
                {
                    title: "Uprawnienia, dane i zakupy",
                    body: "W zależności od używanych funkcji aplikacja może prosić o uprawnienia do powiadomień, danych zdrowotnych, mikrofonu, zdjęć, aparatu, kontaktów, kalendarza, przypomnień lub lokalizacji. Plany Premium są oferowane przez App Store, a Apple zarządza płatnościami, odnowieniami, zwrotami i ustawieniami zakupów.",
                },
                {
                    title: "Dostępność, aktualizacje i kontakt",
                    body: "Funkcje mogą się różnić w zależności od urządzenia, uprawnień, języka, planu lub dostępności w App Store. Możemy aktualizować aplikację, stronę i te warunki, aby poprawić przejrzystość, niezawodność, bezpieczeństwo lub zgodność. W sprawach wsparcia lub prawnych napisz na vitalspath@gmail.com. O ile obowiązkowe przepisy konsumenckie nie stanowią inaczej, zastosowanie ma prawo hiszpańskie.",
                },
            ],
        },
        disclaimer: {
            title: "Zastrzeżenie medyczne",
            noticeTitle: "Ważne",
            noticeBody:
                "VitalsPath służy wyłącznie do osobistej organizacji i obserwacji.",
            sections: [
                {
                    title: "To nie jest porada medyczna",
                    body: "VitalsPath nie jest lekarzem, usługą kliniczną ani wyrobem medycznym. Aplikacja nie stawia diagnoz, nie przepisuje leczenia i nie zastępuje porady wykwalifikowanych specjalistów medycznych.",
                },
                {
                    title: "Sytuacje nagłe",
                    body: "Nie używaj VitalsPath do podejmowania decyzji w nagłych przypadkach ani do pilnej opieki. Jeśli uważasz, że występuje nagły problem medyczny, natychmiast skontaktuj się z lokalnymi służbami ratunkowymi lub uzyskaj pilną pomoc medyczną.",
                },
                {
                    title: "Leki i zapisane informacje",
                    body: "Przypomnienia o lekach, dzienniki objawów, pomiary, zdjęcia, notatki głosowe i inne dane zależą od informacji, które sam wpisujesz lub na które zezwalasz. Zawsze weryfikuj nazwy leków, dawki, godziny, pomiary i wizyty z wiarygodnymi źródłami oraz personelem medycznym.",
                },
                {
                    title: "Osobista odpowiedzialność i kontakt",
                    body: "To użytkownik pozostaje odpowiedzialny za sposób korzystania z aplikacji oraz za decyzje dotyczące zdrowia. Jeśli nie masz pewności, jak używać VitalsPath razem z profesjonalną opieką, napisz na vitalspath@gmail.com.",
                },
            ],
        },
        subscription: {
            title: "Warunki subskrypcji",
            subtitle:
                "Plany i informacje rozliczeniowe dla zakupów w App Store.",
            lastUpdated: "Zaktualizowano dla pierwszego wydania w App Store.",
            intro: "VitalsPath może oferować plany Premium rozszerzające funkcje organizacji i obserwacji. Premium nie zmienia przeznaczenia aplikacji.",
            sections: [
                {
                    title: "Co zmienia Premium",
                    body: "Premium może zwiększać limity i dodawać wygodne funkcje, takie jak głębsze planowanie, eksport oraz dodatkowe narzędzia organizacyjne. Nie zamienia to VitalsPath w usługę medyczną, narzędzie diagnostyczne ani system ratunkowy.",
                },
                {
                    title: "Plany i ceny startowe",
                    body: "Pierwsza publiczna wersja może obejmować opcje Monthly, Annual i Lifetime. Przez ograniczony czas mogą być widoczne ceny promocyjne, a App Store zawsze pokazuje cenę końcową przed potwierdzeniem zakupu.",
                },
                {
                    title: "Rozliczenia i anulowanie",
                    body: "Plany Monthly i Annual odnawiają się automatycznie, chyba że anulujesz je przed odnowieniem w ustawieniach subskrypcji Apple. Lifetime to zakup jednorazowy. Apple zarządza płatnościami, podatkami, zwrotami i zasadami subskrypcji.",
                },
                {
                    title: "Przywracanie i wsparcie",
                    body: "Jeśli zmienisz urządzenie lub musisz odzyskać dostęp do Premium, użyj opcji Przywróć zakupy w aplikacji. W sprawach płatności obsługiwanych przez Apple najpierw skontaktuj się z Apple. W sprawach wsparcia aplikacji napisz na vitalspath@gmail.com.",
                },
            ],
        },
    },
};

export function getLegalCopy(lang: Lang): LocalizedLegalCopy {
    return legalCopy[lang] ?? legalCopy.en;
}
