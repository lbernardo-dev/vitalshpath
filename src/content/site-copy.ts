import type { Lang } from "../i18n/ui-locales";

type Section = {
    title: string;
    body: string;
};

type SiteCopy = {
    meta: {
        title: string;
        description: string;
    };
    nav: {
        home: string;
        privacy: string;
        support: string;
        releaseFeatures: string;
        roadmap: string;
        timeline?: string;
    };
    common: {
        medicalDisclaimer: string;
        appStoreSoon: string;
        contactSupport: string;
        emailLabel: string;
    };
    home: {
        heroBadge: string;
        heroTitle: string;
        heroSubtitle: string;
        primaryCta: string;
        secondaryCta: string;
        sections: [Section, Section, Section];
        featureListTitle: string;
        featureListSubtitle: string;
        featureListItems: string[];
        primaryFeatures: string[];
        featureTags: string[][];
        footnote: string;
        ecosystemLabel: string;
        ecosystemTitle: string;
        ecosystemBody: string;
        ecosystemItems: { title: string; description: string }[];
        ctaBadge: string;
        ctaTitle: string;
        ctaPrivacyDetail: string;
        ctaPremiumTitle: string;
        ctaPremiumDetail: string;
        ctaCommunityTitle: string;
        ctaCommunityDetail: string;
        bentoCards: {
            badge: string;
            title: string;
            body: string;
            tags: string[];
        }[];
    };
    privacy: {
        title: string;
        intro: string;
        sections: [Section, Section, Section, Section, Section];
    };
    support: {
        title: string;
        intro: string;
        contactTitle: string;
        contactBody: string;
        helpTitle: string;
        helpItems: string[];
        note: string;
        formTitle: string;
        formIntro: string;
    };
    releaseFeatures: {
        title: string;
        intro: string;
        sections: [Section, Section, Section, Section, Section];
        note: string;
    };
    roadmap: {
        title: string;
        intro: string;
        nextReleaseTitle: string;
        nextReleaseItems: string[];
        directionTitle: string;
        directionBody: string;
        safetyNote: string;
    };
    timeline?: {
        title: string;
        subtitle: string;
    };
    footer: {
        privacy: string;
        support: string;
        releaseFeatures: string;
        roadmap: string;
        timeline?: string;
        terms: string;
        disclaimer: string;
        subscription: string;
        legalNote: string;
    };
};

export const siteCopy: Record<Lang, SiteCopy> = {
    en: {
        meta: {
            title: "VitalsPath 2.0 | Private health organization for medication, symptoms, vitals and appointments",
            description: "VitalsPath 2.0 keeps medication, symptoms, vitals, appointments, widgets, Live Activities and Apple Watch support organized in one private health hub.",
        },
        nav: {
            home: "Home",
            privacy: "Privacy",
            support: "Support",
            releaseFeatures: "Version 2.0",
            roadmap: "Roadmap",
            timeline: "Timeline",
        },
        common: {
            medicalDisclaimer:
                "VitalsPath is designed for personal health organization and follow-up. It does not replace medical advice, diagnosis, treatment, or emergency care.",
            appStoreSoon:
                "The App Store link will be enabled here as soon as the public listing is live.",
            contactSupport: "Contact support",
            emailLabel: "Email",
        },
        home: {
            heroBadge: "VITALSPATH 2.0.0",
            heroTitle:
                "A calmer command center for medication, symptoms, vitals and appointments.",
            heroSubtitle:
                "VitalsPath 2.0 brings daily planning, dose actions, specialized symptom logging, wellness summaries, secure local data handling, widgets, Live Activities and Apple Watch support into one focused health hub.",
            primaryCta: "Download on the App Store",
            secondaryCta: "See Release Features",
            sections: [
                {
                    title: "Built around the day you actually manage",
                    body: "Plan treatments and doses, mark them as taken, skipped, postponed or paused, review stock, and keep appointments, tasks and follow-ups visible in the same daily flow.",
                },
                {
                    title: "Deeper context when symptoms matter",
                    body: "VitalsPath 2.0 expands symptom tracking with specialized fields, severity, triggers, relief factors, photos, notes and emergency-aware reviews where relevant.",
                },
                {
                    title: "Harder privacy foundations",
                    body: "Sensitive profile and health fields are protected with encrypted storage patterns, private logging and automatic app lock behavior for shared-device situations.",
                },
            ],
            featureListTitle: "What's new in 2.0",
            featureListSubtitle: "A clearer, faster and more complete health workspace.",
            featureListItems: [
                "Medication and dose tracking",
                "Taken, skipped and postponed doses",
                "Stock and refill reminders",
                "Symptoms and mood logging",
                "Vitals and measurements",
                "Photos and voice notes",
                "Appointments and follow-up tasks",
                "Widgets, Live Activities and Apple Watch",
            ],
            primaryFeatures: ["Master your medication", "Track symptoms & vitals"],
            featureTags: [
                ["MEDICATION", "Inventory", "Reminders"],
                ["SYMPTOMS", "Vitals", "Timeline"]
            ],
            footnote:
                "Some features depend on device support, permissions, locale, operating system version or plan. VitalsPath is for personal organization and does not replace medical care.",
            ecosystemLabel: "Ecosystem",
            ecosystemTitle: "The health hub follows you",
            ecosystemBody: "VitalsPath 2.0 keeps key actions closer to the moment: Home Screen and Lock Screen widgets, more reliable Live Activities, Dynamic Island feedback and Apple Watch companion flows.",
            ecosystemItems: [
                { title: "Widgets", description: "Daily medication, appointment and wellness context at a glance." },
                { title: "Apple Watch", description: "Companion screens for faster review and logging from your wrist." },
                { title: "Live Activities", description: "Medication and appointment moments with clearer timing and feedback." }
            ],
            ctaBadge: "VERSION 2.0.0",
            ctaTitle: "Built for serious personal health organization",
            ctaPrivacyDetail: "Encrypted sensitive storage, private logs and app lock support.",
            ctaPremiumTitle: "ADVANCED ROUTINES",
            ctaPremiumDetail: "Designed for people who manage recurring care, treatment plans and follow-up.",
            ctaCommunityTitle: "ECOSYSTEM",
            ctaCommunityDetail: "iPhone, widgets, Live Activities and Apple Watch working together",
            bentoCards: [
                {
                    badge: "MEDICATION",
                    title: "Medication control without clutter",
                    body: "Plan treatments, generate doses, take action quickly, pause or postpone when routines change, and keep stock visible.",
                    tags: ["Doses", "Stock", "Schedules"]
                },
                {
                    badge: "SYMPTOMS 2.0",
                    title: "Specialized symptom entries",
                    body: "Capture richer context for symptoms with severity, triggers, relief, location, impact and emergency-aware details.",
                    tags: ["Triggers", "Relief", "Context"]
                },
                {
                    badge: "WELLNESS",
                    title: "Wellness at a glance",
                    body: "Review adherence, activity, mood and vital-sign patterns with a calmer dashboard built for daily scanning.",
                    tags: ["Score", "Trends", "Vitals"]
                },
                {
                    badge: "APPOINTMENTS",
                    title: "Appointments stay connected",
                    body: "Keep visits, conditions, tasks and follow-up events attached to the broader health timeline.",
                    tags: ["Calendar", "Tasks", "History"]
                },
                {
                    badge: "WIDGETS",
                    title: "Widgets that feel current",
                    body: "Use Lock Screen and Home Screen surfaces for upcoming doses, appointments and daily status.",
                    tags: ["Home Screen", "Lock Screen", "Fast"]
                },
                {
                    badge: "LIVE ACTIVITIES",
                    title: "Actions closer to the moment",
                    body: "Live Activities and Dynamic Island feedback help active medication and appointment moments stay visible.",
                    tags: ["Dynamic Island", "Feedback", "Watch"]
                }
            ]
        },
        privacy: {
            title: "Privacy Policy",
            intro: "This policy explains what information VitalsPath may handle, how it is used inside the app, and how users can contact us with privacy questions.",
            sections: [
                {
                    title: "Information you choose to record",
                    body: "Depending on how you use the app, VitalsPath may handle information such as medications, schedules, symptoms, mood entries, vitals, measurements, appointments, tasks, photos, voice notes, and profile details you choose to add.",
                },
                {
                    title: "Permissions",
                    body: "The app may request permissions that are directly related to the features you choose to use, including notifications, health data, microphone, photos, camera, contacts, calendar, reminders, and location. These permissions are used to support the corresponding in-app functions and can be managed by the user.",
                },
                {
                    title: "Use of information",
                    body: "Information handled by VitalsPath is used to support personal health organization features such as treatment planning, daily follow-up, reminders, measurements, appointments, widgets, and related user-selected functions.",
                },
                {
                    title: "Medical disclaimer",
                    body: "VitalsPath is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease. It does not replace medical advice, diagnosis, treatment, or emergency assistance.",
                },
                {
                    title: "Contact",
                    body: "If you have questions about privacy or data handling, contact us through the support page.",
                },
            ],
        },
        support: {
            title: "Support",
            intro: "If you need help with VitalsPath, have questions about the app, or want to report an issue, contact us here.",
            contactTitle: "Contact",
            contactBody: "Email: vitalspath@gmail.com",
            helpTitle: "What we can help with",
            helpItems: [
                "App questions",
                "Account or purchase questions",
                "Bug reports",
                "Privacy questions",
                "Feedback about the experience",
            ],
            note: "When possible, include your device model, iOS version, app version, and a short description of the issue.",
            formTitle: "Send a message",
            formIntro: "You can also send your issue, question or feedback directly from this page.",
        },
        releaseFeatures: {
            title: "Version 2.0.0 Features",
            intro: "This page describes the capabilities being prepared for VitalsPath 2.0.0.",
            sections: [
                {
                    title: "Medication and treatment follow-up",
                    body: "Create and organize treatments, plan doses, record whether each dose was taken, skipped or postponed, review medication stock, and use refill reminders to stay prepared.",
                },
                {
                    title: "Symptoms, mood and measurements",
                    body: "Log symptoms, mood entries, vitals and other personal measurements in one timeline. Version 2.0.0 adds richer specialized symptom fields for context such as triggers, relief factors, location, impact and emergency review where relevant.",
                },
                {
                    title: "Appointments, conditions and follow-up tasks",
                    body: "Keep appointments, conditions and follow-up tasks organized in the same place so your daily health information stays connected and easy to review.",
                },
                {
                    title: "Daily experience across devices",
                    body: "Use widgets, Live Activities, Dynamic Island feedback and Apple Watch support to review your day and complete key actions more quickly.",
                },
                {
                    title: "Privacy and intended use",
                    body: "VitalsPath is built for personal organization and follow-up with encrypted sensitive storage, private logging and app lock support. It is not a substitute for medical care, medical advice, diagnosis, or treatment.",
                },
            ],
            note: "This page should reflect the VitalsPath 2.0.0 feature set being prepared for release.",
        },
        roadmap: {
            title: "Roadmap",
            intro: "This page outlines improvements planned for upcoming VitalsPath releases. The items below are not a guarantee of timing and may change as the product evolves.",
            nextReleaseTitle: "After 2.0.0",
            nextReleaseItems: [
                "Clearer treatment summaries and adherence insights",
                "More polished appointment and follow-up workflows",
                "Expanded widget, Live Activity and Apple Watch actions",
                "Reliability improvements for sync, backup and restore",
                "Localization and accessibility refinements",
            ],
            directionTitle: "Product direction",
            directionBody: "The short-term focus is to make everyday follow-up clearer, faster and more reliable across medication, symptoms, vitals and appointments, while improving consistency across iPhone, widgets and Apple Watch.",
            safetyNote: "Features, timing and availability mentioned on this page may change as development continues. This is not a guarantee of future releases.",
        },
        timeline: {
            title: "App Timeline",
            subtitle: "Version history and latest updates",
        },
        footer: {
            privacy: "Privacy Policy",
            support: "Support",
            releaseFeatures: "Release Features",
            roadmap: "Roadmap",
            timeline: "Timeline",
            terms: "Terms",
            disclaimer: "Medical Disclaimer",
            subscription: "Subscription",
            legalNote:
                "VitalsPath is for personal health organization only and does not replace medical advice, diagnosis, treatment, or emergency care.",
        },
    },
    es: {
        meta: {
            title: "VitalsPath 2.0 | Organización privada de medicación, síntomas, constantes y citas",
            description: "VitalsPath 2.0 organiza medicación, síntomas, constantes, citas, widgets, Live Activities y Apple Watch en un centro de salud privado.",
        },
        nav: {
            home: "Inicio",
            privacy: "Privacidad",
            support: "Soporte",
            releaseFeatures: "Versión 2.0",
            roadmap: "Hoja de ruta",
            timeline: "Cronología",
        },
        common: {
            medicalDisclaimer:
                "VitalsPath está diseñada para la organización personal de salud y el seguimiento. No sustituye el consejo médico, el diagnóstico, el tratamiento ni la atención de emergencia.",
            appStoreSoon:
                "El enlace de App Store se activará aquí en cuanto la ficha pública esté disponible.",
            contactSupport: "Contactar con soporte",
            emailLabel: "Correo",
        },
        home: {
            heroBadge: "VITALSPATH 2.0.0",
            heroTitle: "Un centro de control más claro para medicación, síntomas, constantes y citas.",
            heroSubtitle: "VitalsPath 2.0 reúne planificación diaria, acciones de dosis, registro avanzado de síntomas, resumen de bienestar, datos locales protegidos, widgets, Live Activities y Apple Watch en un hub de salud enfocado.",
            primaryCta: "Descargar en el App Store",
            secondaryCta: "Ver novedades",
            sections: [
                {
                    title: "Diseñada alrededor del día que realmente gestionas",
                    body: "Planifica tratamientos y dosis, márcalas como tomadas, omitidas, pospuestas o pausadas, revisa stock y mantén citas, tareas y seguimientos visibles en el mismo flujo diario.",
                },
                {
                    title: "Más contexto cuando los síntomas importan",
                    body: "VitalsPath 2.0 amplía el registro de síntomas con campos especializados, severidad, desencadenantes, alivios, fotos, notas y revisión orientada a emergencias cuando corresponde.",
                },
                {
                    title: "Bases de privacidad más sólidas",
                    body: "Los campos sensibles de perfil y salud se protegen con patrones de almacenamiento cifrado, logging privado y bloqueo automático de la app en situaciones de dispositivo compartido.",
                },
            ],
            featureListTitle: "Qué trae la 2.0",
            featureListSubtitle: "Un espacio de salud más claro, rápido y completo.",
            featureListItems: [
                "Seguimiento de medicación y dosis",
                "Dosis tomadas, omitidas y pospuestas",
                "Control de stock y recordatorios",
                "Registro de síntomas y ánimo",
                "Constantes y medidas",
                "Fotos y notas de voz",
                "Citas y tareas de seguimiento",
                "Widgets, Live Activities y Apple Watch",
            ],
            primaryFeatures: ["Domina tu medicación", "Controla síntomas y vitales"],
            featureTags: [
                ["MEDICACIÓN", "Inventario", "Recordatorios"],
                ["SÍNTOMAS", "Vitales", "Cronología"]
            ],
            footnote: "Algunas funciones dependen del dispositivo, permisos, país, versión del sistema operativo o plan. VitalsPath es para organización personal y no sustituye la atención médica.",
            ecosystemLabel: "Ecosistema",
            ecosystemTitle: "Tu hub de salud te acompaña",
            ecosystemBody: "VitalsPath 2.0 acerca las acciones importantes al momento: widgets en pantalla de inicio y bloqueo, Live Activities más fiables, feedback en Dynamic Island y flujos companion para Apple Watch.",
            ecosystemItems: [
                { title: "Widgets", description: "Contexto diario de medicación, citas y bienestar de un vistazo." },
                { title: "Apple Watch", description: "Pantallas companion para revisar y registrar más rápido desde tu muñeca." },
                { title: "Live Activities", description: "Momentos de medicación y citas con tiempos y feedback más claros." }
            ],
            ctaBadge: "VERSIÓN 2.0.0",
            ctaTitle: "Pensada para organizar la salud personal en serio",
            ctaPrivacyDetail: "Almacenamiento sensible cifrado, logs privados y bloqueo de app.",
            ctaPremiumTitle: "RUTINAS AVANZADAS",
            ctaPremiumDetail: "Diseñada para quienes gestionan cuidado recurrente, tratamientos y seguimiento.",
            ctaCommunityTitle: "ECOSISTEMA",
            ctaCommunityDetail: "iPhone, widgets, Live Activities y Apple Watch trabajando juntos",
            bentoCards: [
                {
                    badge: "MEDICACIÓN",
                    title: "Control de medicación sin ruido",
                    body: "Planifica tratamientos, genera dosis, actúa rápido, pausa o pospón cuando cambia la rutina y mantén el stock visible.",
                    tags: ["Dosis", "Stock", "Horarios"]
                },
                {
                    badge: "SÍNTOMAS 2.0",
                    title: "Registros de síntomas especializados",
                    body: "Captura más contexto con severidad, desencadenantes, alivios, localización, impacto y detalles de emergencia.",
                    tags: ["Desencadenantes", "Alivio", "Contexto"]
                },
                {
                    badge: "BIENESTAR",
                    title: "Bienestar de un vistazo",
                    body: "Revisa adherencia, actividad, ánimo y patrones de constantes con un dashboard más calmado para uso diario.",
                    tags: ["Score", "Tendencias", "Constantes"]
                },
                {
                    badge: "CITAS",
                    title: "Citas conectadas con el contexto",
                    body: "Mantén visitas, condiciones, tareas y eventos de seguimiento unidos a la línea de tiempo de salud.",
                    tags: ["Calendario", "Tareas", "Historial"]
                },
                {
                    badge: "WIDGETS",
                    title: "Widgets que se sienten actuales",
                    body: "Usa superficies de pantalla de inicio y bloqueo para próximas dosis, citas y estado diario.",
                    tags: ["Inicio", "Bloqueo", "Rápido"]
                },
                {
                    badge: "LIVE ACTIVITIES",
                    title: "Acciones cerca del momento",
                    body: "Live Activities y Dynamic Island mantienen visibles los momentos activos de medicación y citas.",
                    tags: ["Dynamic Island", "Feedback", "Watch"]
                }
            ]
        },
        privacy: {
            title: "Política de Privacidad",
            intro: "Esta política explica qué información puede manejar VitalsPath, cómo se usa dentro de la app y cómo pueden contactar los usuarios si tienen dudas sobre privacidad.",
            sections: [
                {
                    title: "Información que decides registrar",
                    body: "Según cómo uses la app, VitalsPath puede manejar información como medicación, horarios, síntomas, entradas de estado de ánimo, constantes, mediciones, citas, tareas, fotos, notas de voz y datos de perfil que decidas añadir.",
                },
                {
                    title: "Permisos",
                    body: "La app puede solicitar permisos directamente relacionados con las funciones que decidas usar, incluidos notificaciones, datos de salud, micrófono, fotos, cámara, contactos, calendario, recordatorios y ubicación. Estos permisos se usan para dar soporte a las funciones correspondientes dentro de la app y el usuario puede gestionarlos.",
                },
                {
                    title: "Uso de la información",
                    body: "La información manejada por VitalsPath se utiliza para dar soporte a funciones de organización personal de salud como planificación de tratamientos, seguimiento diario, recordatorios, mediciones, citas, widgets y otras funciones seleccionadas por el usuario.",
                },
                {
                    title: "Aviso médico",
                    body: "VitalsPath no es un dispositivo médico y no está destinada a diagnosticar, tratar, curar ni prevenir ninguna enfermedad. No sustituye el consejo médico, el diagnóstico, el tratamiento ni la asistencia de emergencia.",
                },
                {
                    title: "Contacto",
                    body: "Si tienes preguntas sobre privacidad o tratamiento de datos, contacta con nosotros a través de la página de soporte.",
                },
            ],
        },
        support: {
            title: "Soporte",
            intro: "Si necesitas ayuda con VitalsPath, tienes dudas sobre la app o quieres informar de un problema, contáctanos aquí.",
            contactTitle: "Contacto",
            contactBody: "Correo: vitalspath@gmail.com",
            helpTitle: "En qué podemos ayudarte",
            helpItems: [
                "Dudas sobre la app",
                "Dudas sobre cuenta o compras",
                "Informes de errores",
                "Preguntas de privacidad",
                "Comentarios sobre la experiencia",
            ],
            note: "Cuando sea posible, incluye tu modelo de dispositivo, versión de iOS, versión de la app y una breve descripción del problema.",
            formTitle: "Enviar un mensaje",
            formIntro: "También puedes enviar tu incidencia, pregunta o comentario directamente desde esta página.",
        },
        releaseFeatures: {
            title: "Funciones de la versión 2.0.0",
            intro: "Esta página describe las capacidades que estamos preparando para VitalsPath 2.0.0.",
            sections: [
                {
                    title: "Seguimiento de medicación y tratamientos",
                    body: "Crea y organiza tratamientos, planifica dosis, registra si cada dosis fue tomada, omitida o pospuesta, revisa el stock de medicación y usa recordatorios de reposición para anticiparte.",
                },
                {
                    title: "Síntomas, estado de ánimo y mediciones",
                    body: "Registra síntomas, entradas de estado de ánimo, constantes y otras mediciones personales en una sola línea de tiempo. La versión 2.0.0 añade campos especializados para contexto como desencadenantes, alivios, localización, impacto y revisión de emergencia cuando corresponde.",
                },
                {
                    title: "Citas, condiciones y tareas de seguimiento",
                    body: "Mantén citas, condiciones y tareas de seguimiento organizadas en el mismo lugar para que tu información diaria de salud permanezca conectada y sea fácil de revisar.",
                },
                {
                    title: "Experiencia diaria entre dispositivos",
                    body: "Usa widgets, Live Activities, feedback en Dynamic Island y soporte para Apple Watch para revisar tu día y completar acciones clave con más rapidez.",
                },
                {
                    title: "Privacidad y uso previsto",
                    body: "VitalsPath está creada para la organización personal y el seguimiento, con almacenamiento sensible cifrado, logging privado y bloqueo de app. No sustituye la atención médica, el consejo médico, el diagnóstico ni el tratamiento.",
                },
            ],
            note: "Esta página debe reflejar el conjunto de funciones de VitalsPath 2.0.0 que estamos preparando para lanzamiento.",
        },
        roadmap: {
            title: "Hoja de ruta",
            intro: "Esta página resume mejoras previstas para próximas versiones de VitalsPath. Los elementos siguientes no garantizan fechas y pueden cambiar a medida que evoluciona el producto.",
            nextReleaseTitle: "Después de la 2.0.0",
            nextReleaseItems: [
                "Resúmenes de tratamiento e información de adherencia más claros",
                "Flujos de citas y seguimiento más pulidos",
                "Más acciones en widgets, Live Activities y Apple Watch",
                "Mejoras de fiabilidad en sincronización, copia y restauración",
                "Mejoras de localización y accesibilidad",
            ],
            directionTitle: "Dirección de producto",
            directionBody: "El foco a corto plazo es hacer el seguimiento diario más claro, rápido y fiable en medicación, síntomas, constantes y citas, mejorando al mismo tiempo la conistencia entre iPhone, widgets y Apple Watch.",
            safetyNote: "Las características, los plazos y la disponibilidad mencionados en esta página pueden cambiar a medida que continúa el desarrollo. Esto no es una garantía de futuras versiones.",
        },
        timeline: {
            title: "Cronología de la app",
            subtitle: "Historial de versiones y últimas actualizaciones",
        },
        footer: {
            privacy: "Política de Privacidad",
            support: "Soporte",
            releaseFeatures: "Funciones de lanzamiento",
            roadmap: "Hoja de ruta",
            timeline: "Cronología",
            terms: "Términos",
            disclaimer: "Aviso médico",
            subscription: "Suscripción",
            legalNote:
                "VitalsPath es solo para organización personal de salud y no sustituye el consejo médico, el diagnóstico, el tratamiento ni la atención de emergencia.",
        },
    },
    fr: {
        meta: {
            title: "VitalsPath | Suivi privé des médicaments, symptômes, constantes et rendez-vous",
            description: "Suivi privé des médicaments, symptômes, constantes et rendez-vous dans une chronologie de santé claire.",
        },
        nav: { home: "Accueil", privacy: "Confidentialité", support: "Support", releaseFeatures: "Fonctions de lancement", roadmap: "Feuille de route", timeline: "Chronologie" },
        common: {
            medicalDisclaimer: "VitalsPath est conçue pour l'organisation personnelle de santé et le suivi. Elle ne remplace pas un avis médical, un diagnostic, un traitement ni une urgence médicale.",
            appStoreSoon: "Le lien App Store sera activé ici dès que la fiche publique sera disponible.",
            contactSupport: "Contacter le support",
            emailLabel: "E-mail",
        },
        home: {
            heroBadge: "PROTÉGER CE QUI COMPTE",
            heroTitle:
                "Gardez vos médicaments, symptômes, constantes et rendez-vous dans un lieu privé unique.",
            heroSubtitle:
                "VitalsPath vous aide à organiser vos traitements, doses, symptômes, mesures, rendez-vous et tâches de suivi avec une vue quotidienne claire, des widgets, Live Activities et le support Apple Watch.",
            primaryCta: "Télécharger sur l'App Store",
            secondaryCta: "Voir les fonctions de lancement",
            sections: [
                {
                    title: "Tout ce dont vous avez besoin pour le suivi quotidien",
                    body: "Planifiez les traitements et les doses, marquez-les comme pris, omis ou reportés, vérifiez votre stock et gardez le contrôle sur les rappels de réapprovisionnement. Enregistrez les symptômes, l'humeur, les constantes, les photos et les notes vocales dans une chronologie personnelle unique.",
                },
                {
                    title: "Conçu pour les routines réelles",
                    body: "Utilisez les widgets pour une visibilité rapide, les Live Activities pour les moments de médication actifs et l'Apple Watch pour des actions plus rapides pendant la journée. Gardez les rendez-vous, les conditions et les tâches de suivi organisés sans perdre le contexte.",
                },
                {
                    title: "Privé par design",
                    body: "Vos informations de santé doivent rester claires, personnelles et sous votre contrôle. VitalsPath est conçu pour soutenir l'organisation personnelle, pas pour remplacer les professionnels de santé.",
                },
            ],
            featureListTitle: "Domaines clés",
            featureListSubtitle: "Tout ce dont vous avez besoin, conçu avec précision.",
            featureListItems: [
                "Suivi des médicaments et des doses",
                "Doses prises, omises et reportées",
                "Stock et rappels de réapprovisionnement",
                "Enregistrement des symptômes et de l'humeur",
                "Constantes et mesures",
                "Fotos et notes vocales",
                "Rendez-vous et tâches de suivi",
                "Widgets, Live Activities et Apple Watch",
            ],
            primaryFeatures: ["Maîtrisez vos médicaments", "Suivez symptômes et vitaux"],
            featureTags: [
                ["MÉDICAMENTS", "Inventaire", "Rappels"],
                ["SYMPTÔMES", "Vitaux", "Timeline"]
            ],
            footnote:
                "Certaines fonctions peuvent dépendre de votre appareil, des autorisations ou de votre forfait. La disponibilité Premium est clairement indiquée dans l'application le cas échéant.",
            ecosystemLabel: "Écosystème",
            ecosystemTitle: "Expérience intégrée",
            ecosystemBody: "VitalsPath est conçu pour fonctionner parfaitement sur tous vos appareils. Utilisez des widgets pour des mises à jour instantanées, Live Activities pour suivre les doses actives et l'Apple Watch pour des enregistrements rapides.",
            ecosystemItems: [
                { title: "Widgets Intelligents", description: "Constantes et médicaments directement sur votre écran d'accueil." },
                { title: "Apple Watch", description: "Enregistrements rapides et alertes directement sur votre poignet." },
                { title: "Live Activities", description: "Suivi en tempo réel des doses actives." }
            ],
            ctaBadge: "COMMENCER AUJOURD'HUI",
            ctaTitle: "Votre santé, entre vos mains et en privé",
            ctaPrivacyDetail: "Confidentialité absolue avec chiffrement de bout en bout.",
            ctaPremiumTitle: "SOINS PREMIUM",
            ctaPremiumDetail: "Conçu pour les patients chroniques et les aidants.",
            ctaCommunityTitle: "COMMUNAUTÉ",
            ctaCommunityDetail: "utilisateurs actifs nous font confiance",
            bentoCards: [
                {
                    badge: "MÉDICAMENT",
                    title: "Maîtrisez vos traitements",
                    body: "Planifiez les doses, marquez-les comme prises, gérez votre stock et recevez des rappels de renouvellement.",
                    tags: ["Inventaire", "Rappels", "Horaires"]
                },
                {
                    badge: "SYMPTÔMES",
                    title: "Suivez l'important",
                    body: "Journalisez symptômes, humeur et constantes. Ajoutez des photos et mémos vocaux pour plus de contexte.",
                    tags: ["Constantes", "Chronologie", "Humeur"]
                },
                {
                    badge: "BIEN-ÊTRE",
                    title: "Votre progression santé",
                    body: "Visualisez les tendances et résumés de votre activité, humeur et constantes pour repérer les schémas importants.",
                    tags: ["Tendances", "Résumé", "Insights"]
                },
                {
                    badge: "RENDEZ-VOUS",
                    title: "Ne manquez aucune visite",
                    body: "Gardez vos rendez-vous médicaux, suivis et antécédents organisés dans une seule vue.",
                    tags: ["Calendrier", "Conditions", "Tâches"]
                },
                {
                    badge: "WIDGETS",
                    title: "Toute votre santé d'un coup d'œil",
                    body: "Accédez à vos rappels et constantes directement depuis votre écran d'accueil avec des widgets élégants.",
                    tags: ["Écran d'accueil", "iOS 18", "Personnalisable"]
                },
                {
                    badge: "APPLE WATCH",
                    title: "Agissez en mobilité",
                    body: "Utilisez l'Apple Watch pour un suivi rapide, les Live Activities pour les doses et les widgets intelligents.",
                    tags: ["Live Activities", "Widgets", "Rapide"]
                }
            ]
        },
        privacy: {
            title: "Politique de confidentialité",
            intro: "Cette politique explique quelles informations VitalsPath peut traiter, comment elles sont utilisées dans l’app et comment les utilisateurs peuvent nous contacter au sujet de la confidentialité.",
            sections: [
                { title: "Informations que vous choisissez d’enregistrer", body: "Selon votre utilisation de l’app, VitalsPath peut traiter des informations comme les médicaments, horaires, symptômes, entrées d’humeur, constantes, mesures, rendez-vous, tâches, photos, notes vocales et données de profil que vous choisissez d’ajouter." },
                { title: "Autorisations", body: "L’app peut demander des autorisations directement liées aux fonctions que vous choisissez d’utiliser, notamment notifications, données de santé, microphone, photos, caméra, contacts, calendrier, rappels et localisation. Ces autorisations servent les fonctions correspondantes de l’app et peuvent être gérées par l’utilisateur." },
                { title: "Utilisation des informations", body: "Les informations traitées par VitalsPath servent à des fonctions d’organisation personnelle de santé comme la planification des traitements, le suivi quotidien, les rappels, les mesures, les rendez-vous, les widgets et d’autres fonctions choisies par l’utilisateur." },
                { title: "Avertissement médical", body: "VitalsPath n’est pas un dispositif médical et n’est pas destinée à diagnostiquer, traiter, guérir ou prévenir une maladie. Elle ne remplace pas un avis médical, un diagnostic, un traitement ni une assistance d’urgence." },
                { title: "Contact", body: "Si vous avez des questions sur la confidentialité ou le traitement des données, contactez-nous via la page de support." },
            ],
        },
        support: {
            title: "Support",
            intro: "Si vous avez besoin d’aide avec VitalsPath, des questions sur l’app ou souhaitez signaler un problème, contactez-nous ici.",
            contactTitle: "Contact",
            contactBody: "E-mail : vitalspath@gmail.com",
            helpTitle: "Nous pouvons vous aider pour",
            helpItems: ["Questions sur l’app", "Questions de compte ou d’achat", "Signalements de bug", "Questions de confidentialité", "Retours sur l’expérience"],
            note: "Si possible, indiquez le modèle de votre appareil, la version d’iOS, la version de l’app et une courte description du problème.",
            formTitle: "Envoyer un message",
            formIntro: "Vous pouvez aussi envoyer votre problème, votre question ou votre retour directement depuis cette page.",
        },
        releaseFeatures: {
            title: "Fonctions de lancement",
            intro: "Cette page décrit les fonctions incluses dans la première version publique de VitalsPath.",
            sections: [
                { title: "Suivi des médicaments et des traitements", body: "Créez et organisez des traitements, planifiez des doses, enregistrez si chaque dose a été prise, ignorée ou reportée, vérifiez le stock de médicaments et utilisez les rappels de renouvellement pour rester prêt." },
                { title: "Symptômes, humeur et mesures", body: "Enregistrez symptômes, humeur, constantes et autres mesures personnelles dans une seule chronologie. Ajoutez des photos et des notes vocales lorsqu’elles apportent plus de contexte." },
                { title: "Rendez-vous, pathologies et tâches de suivi", body: "Gardez rendez-vous, pathologies et tâches de suivi au même endroit pour que vos informations quotidiennes de santé restent connectées et faciles à consulter." },
                { title: "Expérience quotidienne sur plusieurs appareils", body: "Utilisez widgets, Live Activities et la prise en charge de l’Apple Watch pour revoir votre journée et effectuer plus rapidement les actions clés." },
                { title: "Confidentialité et usage prévu", body: "VitalsPath est conçue pour l’organisation personnelle et le suivi. Elle ne remplace pas les soins médicaux, l’avis médical, le diagnostic ni le traitement." },
            ],
            note: "Seules les fonctions disponibles dans la première publication App Store doivent apparaître sur cette page.",
        },
        roadmap: {
            title: "Feuille de route",
            intro: "Cette page présente les améliorations prévues pour les prochaines versions de VitalsPath. Les éléments ci-dessous ne garantissent aucun calendrier et peuvent évoluer avec le produit.",
            nextReleaseTitle: "Prévu pour la prochaine version",
            nextReleaseItems: ["Résumés de traitement plus clairs et meilleure lecture de l’adhérence", "Flux de rendez-vous et de suivi plus soignés", "Plus d’actions sur widgets et Apple Watch", "Améliorations de fiabilité pour la synchronisation, la sauvegarde et la restauration", "Améliorations de localisation et d’accessibilité"],
            directionTitle: "Orientation produit",
            directionBody: "À court terme, l’objectif est de rendre le suivi quotidien plus clair, plus rapide et plus fiable pour les médicaments, symptômes, constantes et rendez-vous, tout en améliorant la cohérence entre iPhone, widgets et Apple Watch.",
            safetyNote: "Les fonctionnalités, les délais et la disponibilité mentionnés sur cette page peuvent changer au fil du développement. Ceci ne constitue pas une garantie des versions futures.",
        },
        timeline: {
            title: "Chronologie des versions",
            subtitle: "Suivez le développement de VitalsPath"
        },
        footer: { privacy: "Confidentialité", support: "Support", releaseFeatures: "Fonctions de lancement", roadmap: "Feuille de route", timeline: "Chronologie", terms: "Conditions", disclaimer: "Avertissement médical", subscription: "Abonnement", legalNote: "VitalsPath est destinée à l’organisation personnelle de santé uniquement et ne remplace pas un avis médical, un diagnostic, un traitement ni une urgence médicale." },
    },
    de: {
        meta: {
            title: "VitalsPath | Private Erfassung von Medikamenten, Symptomen, Werten und Terminen",
            description: "Private Erfassung von Medikamenten, Symptomen, Werten und Terminen in einer klaren Gesundheitschronik.",
        },
        nav: { home: "Start", privacy: "Datenschutz", support: "Support", releaseFeatures: "Release-Funktionen", roadmap: "Roadmap", timeline: "Zeitachse" },
        common: {
            medicalDisclaimer: "VitalsPath ist für persönliche Gesundheitsorganisation und Nachverfolgung gedacht. Sie ersetzt keine medizinische Beratung, Diagnose, Behandlung oder Notfallversorgung.",
            appStoreSoon: "Der App-Store-Link wird hier aktiviert, sobald der öffentliche Eintrag live ist.",
            contactSupport: "Support kontaktieren",
            emailLabel: "E-Mail",
        },
        home: {
            heroBadge: "SCHÜTZEN, WAS WICHTIG IST",
            heroTitle:
                "Behalten Sie Medikamente, Symptome, Vitalwerte und Termine an einem privaten Ort.",
            heroSubtitle:
                "VitalsPath hilft Ihnen, Behandlungen, Dosen, Symptome, Messungen, Termine und Follow-up-Aufgaben mit einer klaren Tagesansicht, Widgets, Live Activities und Apple Watch-Unterstützung zu organisieren.",
            primaryCta: "Im App Store herunterladen",
            secondaryCta: "Release-Funktionen ansehen",
            sections: [
                {
                    title: "Alles, was Sie für die tägliche Nachsorge benötigen",
                    body: "Planen Sie Behandlungen und Dosen, markieren Sie diese als eingenommen, ausgelassen oder verschoben, überprüfen Sie Ihren Bestand und behalten Sie Nachfüll-Erinnerungen unter Kontrolle. Verfolgen Sie Symptome, Stimmung, Vitalwerte, Fotos und Sprachnotizen in einer einzigen persönlichen Timeline.",
                },
                {
                    title: "Für echte Alltagsroutinen gebaut",
                    body: "Nutzen Sie Widgets für schnelle Sichtbarkeit, Live Activities für aktive Medikamentenmomente und die Apple Watch für schnellere Aktionen im Laufe des Tages. Halten Sie Termine, Bedingungen und Follow-up-Aufgaben organisiert, ohne den Kontext zu verlieren.",
                },
                {
                    title: "Privat durch Design",
                    body: "Ihre Gesundheitsinformationen sollten klar, persönlich und unter Ihrer Kontrolle bleiben. VitalsPath wurde entwickelt, um die persönliche Organisation zu unterstützen, nicht um medizinisches Fachpersonal zu ersetzen.",
                },
            ],
            featureListTitle: "Kernbereiche",
            featureListSubtitle: "Alles was Sie brauchen, präzisionsgefertigt.",
            featureListItems: [
                "Medikamenten- und Dosierungsverfolgung",
                "Eingenommene, ausgelassene und verschobene Dosen",
                "Bestands- und Nachfüll-Erinnerungen",
                "Symptom- und Stimmungsprotokollierung",
                "Vitalwerte und Messungen",
                "Fotos und Sprachnotizen",
                "Termine und Follow-up-Aufgaben",
                "Widgets, Live Activities und Apple Watch",
            ],
            primaryFeatures: ["Medikation meistern", "Symptome & Vitalwerte"],
            featureTags: [
                ["MEDIKAMENTE", "Bestand", "Erinnerungen"],
                ["SYMPTOME", "Vitalwerte", "Zeitlinie"]
            ],
            footnote:
                "Einige Funktionen können von Ihrem Gerät, Ihren Berechtigungen oder Ihrem Plan abhängen. Die Premium-Verfügbarkeit wird in der App deutlich angezeigt, wo dies zutrifft.",
            ecosystemLabel: "Ökosystem",
            ecosystemTitle: "Integrierte Erfahrung",
            ecosystemBody: "VitalsPath ist so konzipiert, dass es nahtlos auf all Ihren Geräten funktioniert. Nutzen Sie Widgets für sofortige Updates, Live Activities zur Verfolgung aktiver Dosen und die Apple Watch für schnelle Protokollierungen unterwegs.",
            ecosystemItems: [
                { title: "Smarte Widgets", description: "Vitalwerte und Medikamente direkt auf Ihrem Home-Bildschirm." },
                { title: "Apple Watch", description: "Schnelle Protokollierung und Alarme direkt am Handgelenk." },
                { title: "Live Activities", description: "Echtzeit-Verfolgung aktiver Dosen." }
            ],
            ctaBadge: "HEUTE STARTEN",
            ctaTitle: "Ihre Gesundheit, in Ihren Händen und privat",
            ctaPrivacyDetail: "Absolute Privatsphäre mit Ende-zu-Ende-Verschlüsselung.",
            ctaPremiumTitle: "PREMIUM-PFLEGE",
            ctaPremiumDetail: "Entwickelt für chronische Patienten und Betreuer.",
            ctaCommunityTitle: "COMMUNITY",
            ctaCommunityDetail: "aktive Nutzer vertrauen uns",
            bentoCards: [
                {
                    badge: "MEDIKAMENTE",
                    title: "Beherrschen Sie Ihre Medikation",
                    body: "Planen Sie Behandlungen, verwalten Sie den Bestand und erhalten Sie Erinnerungen zum Nachfüllen.",
                    tags: ["Bestand", "Erinnerungen", "Zeitpläne"]
                },
                {
                    badge: "SYMPTOME",
                    title: "Dinge, die zählen",
                    body: "Protokollieren Sie Symptome, Stimmung und Vitalwerte. Fügen Sie Fotos zur Erklärung hinzu.",
                    tags: ["Vitalwerte", "Zeitlinie", "Stimmung"]
                },
                {
                    badge: "WELLNESS",
                    title: "Ihr Gesundheitsfortschritt",
                    body: "Visualisieren Sie Trends und Zusammenfassungen Ihrer Aktivität, Stimmung und Vitalwerte.",
                    tags: ["Trends", "Zusammenfassung", "Insights"]
                },
                {
                    badge: "TERMINE",
                    title: "Keinen Arztbesuch verpassen",
                    body: "Behalten Sie Arzttermine, Follow-ups und Zustände im selben Kalender im Blick.",
                    tags: ["Kalender", "Zustände", "Aufgaben"]
                },
                {
                    badge: "WIDGETS",
                    title: "Ihre Gesundheit auf einen Blick",
                    body: "Greifen Sie auf Ihre Erinnerungen und Vitalwerte direkt von Ihrem Home-Bildschirm mit eleganten Widgets zu.",
                    tags: ["Home-Bildschirm", "iOS 18", "Anpassbar"]
                },
                {
                    badge: "APPLE WATCH",
                    title: "Gefühl der Kontrolle",
                    body: "Nutzen Sie Apple Watch für schnelle Eingaben und Live Activities.",
                    tags: ["Live Activities", "Widgets", "Schnell"]
                }
            ]
        },
        privacy: {
            title: "Datenschutzrichtlinie",
            intro: "Diese Richtlinie erklärt, welche Informationen VitalsPath verarbeiten kann, wie sie in der App verwendet werden und wie Nutzer uns bei Datenschutzfragen kontaktieren können.",
            sections: [
                { title: "Informationen, die Sie selbst erfassen", body: "Je nach Nutzung kann VitalsPath Informationen wie Medikamente, Zeitpläne, Symptome, Stimmungseinträge, Vitalwerte, Messungen, Termine, Aufgaben, Fotos, Sprachnotizen und Profildaten verarbeiten, die Sie selbst hinzufügen." },
                { title: "Berechtigungen", body: "Die App kann Berechtigungen anfordern, die direkt mit den Funktionen zusammenhängen, die Sie nutzen möchten, darunter Mitteilungen, Gesundheitsdaten, Mikrofon, Fotos, Kamera, Kontakte, Kalender, Erinnerungen und Standort. Diese Berechtigungen unterstützen die entsprechenden Funktionen in der App und können vom Nutzer verwaltet werden." },
                { title: "Verwendung der Informationen", body: "Von VitalsPath verarbeitete Informationen werden genutzt, um Funktionen zur persönlichen Gesundheitsorganisation zu unterstützen, etwa Behandlungsplanung, tägliche Nachverfolgung, Erinnerungen, Messwerte, Termine, Widgets und weitere vom Nutzer gewählte Funktionen." },
                { title: "Medizinischer Hinweis", body: "VitalsPath ist kein Medizinprodukt und nicht dazu bestimmt, Krankheiten zu diagnostizieren, zu behandeln, zu heilen oder zu verhindern. Sie ersetzt keine medizinische Beratung, Diagnose, Behandlung oder Notfallhilfe." },
                { title: "Kontakt", body: "Wenn Sie Fragen zu Datenschutz oder Datenverarbeitung haben, kontaktieren Sie uns über die Support-Seite." },
            ],
        },
        support: {
            title: "Support",
            intro: "Wenn Sie Hilfe zu VitalsPath benötigen, Fragen zur App haben oder ein Problem melden möchten, kontaktieren Sie uns hier.",
            contactTitle: "Kontakt",
            contactBody: "E-Mail: vitalspath@gmail.com",
            helpTitle: "Wobei wir helfen können",
            helpItems: ["Fragen zur App", "Fragen zu Konto oder Käufen", "Fehlermeldungen", "Datenschutzfragen", "Feedback zur Nutzung"],
            note: "Wenn möglich, geben Sie Ihr Gerätemodell, die iOS-Version, die App-Version und eine kurze Problembeschreibung an.",
            formTitle: "Nachricht senden",
            formIntro: "Sie können Ihr Problem, Ihre Frage oder Ihr Feedback auch direkt über diese Seite senden.",
        },
        releaseFeatures: {
            title: "Release-Funktionen",
            intro: "Diese Seite beschreibt die Funktionen, die in der ersten öffentlichen Version von VitalsPath enthalten sind.",
            sections: [
                { title: "Nachverfolgung von Medikamenten und Behandlungen", body: "Erstellen und organisieren Sie Behandlungen, planen Sie Dosen, erfassen Sie, ob jede Dosis eingenommen, ausgelassen oder verschoben wurde, prüfen Sie Medikamentenbestände und nutzen Sie Nachfüll-Erinnerungen, um vorbereitet zu bleiben." },
                { title: "Symptome, Stimmung und Messwerte", body: "Erfassen Sie Symptome, Stimmungseinträge, Vitalwerte und andere persönliche Messungen in einer einzigen Chronik. Fügen Sie Fotos und Sprachnotizen hinzu, wenn sie zusätzlichen Kontext liefern." },
                { title: "Termine, Zustände und Nachverfolgungsaufgaben", body: "Behalten Sie Termine, Zustände und Nachverfolgungsaufgaben am gleichen Ort, damit Ihre täglichen Gesundheitsinformationen verbunden und leicht überprüfbar bleiben." },
                { title: "Tägliche Nutzung auf mehreren Geräten", body: "Verwenden Sie Widgets, Live Activities und Apple-Watch-Unterstützung, um Ihren Tag zu überblicken und wichtige Aktionen schneller auszuführen." },
                { title: "Datenschutz und vorgesehene Nutzung", body: "VitalsPath ist für persönliche Organisation und Nachverfolgung entwickelt. Sie ist kein Ersatz für medizinische Versorgung, medizinischen Rat, Diagnose oder Behandlung." },
            ],
            note: "Auf dieser Seite sollten nur Funktionen stehen, die in der ersten App-Store-Version verfügbar sind.",
        },
        roadmap: {
            title: "Roadmap",
            intro: "Diese Seite beschreibt Verbesserungen, die für kommende VitalsPath-Versionen geplant sind. Die folgenden Punkte sind keine Zeitgarantie und können sich mit der Produktentwicklung ändern.",
            nextReleaseTitle: "Für die nächste Version geplant",
            nextReleaseItems: ["Klarere Behandlungsübersichten und Adhärenz-Einblicke", "Ausgereiftere Termin- und Nachverfolgungsabläufe", "Mehr Aktionen in Widgets und auf der Apple Watch", "Zuverlässigkeitsverbesserungen für Sync, Backup und Wiederherstellung", "Verfeinerungen bei Lokalisierung und Barrierefreiheit"],
            directionTitle: "Produktfokus",
            directionBody: "Kurzfristig liegt der Fokus darauf, die tägliche Nachverfolgung von Medikamenten, Symptomen, Vitalwerten und Terminen klarer, schneller und zuverlässiger zu machen und die Konsistenz zwischen iPhone, Widgets und Apple Watch zu verbessern.",
            safetyNote: "Funktionen, Zeitplan und Verfügbarkeit, die auf dieser Seite erwähnt werden, können sich im Zuge der weiteren Entwicklung ändern. Dies ist keine Garantie für zukünftige Versionen.",
        },
        timeline: {
            title: "Release-Zeitachse",
            subtitle: "Verfolgen Sie die Entwicklung von VitalsPath"
        },
        footer: { privacy: "Datenschutz", support: "Support", releaseFeatures: "Release-Funktionen", roadmap: "Roadmap", timeline: "Zeitachse", terms: "Bedingungen", disclaimer: "Medizinischer Hinweis", subscription: "Abonnement", legalNote: "VitalsPath dient ausschließlich der persönlichen Gesundheitsorganisation und ersetzt keine medizinische Beratung, Diagnose, Behandlung oder Notfallversorgung." },
    },
    it: {
        meta: {
            title: "VitalsPath | Tracciamento privato di farmaci, sintomi, parametri e appuntamenti",
            description: "Tracciamento privato di farmaci, sintomi, parametri e appuntamenti in una timeline della salute chiara.",
        },
        nav: { home: "Home", privacy: "Privacy", support: "Supporto", releaseFeatures: "Funzioni di lancio", roadmap: "Roadmap", timeline: "Cronologia" },
        common: {
            medicalDisclaimer: "VitalsPath è progettata per l'organizzazione personale della salute e il follow-up. Non sostituisce consulenza medica, diagnosi, trattamento o assistenza d'emergenza.",
            appStoreSoon: "Il link dell'App Store sarà attivato qui non appena la scheda pubblica sarà disponibile.",
            contactSupport: "Contatta il supporto",
            emailLabel: "Email",
        },
        home: {
            heroBadge: "PROTEGGERE CIÒ CHE CONTA",
            heroTitle: "Tieni farmaci, sintomi, parametri e appuntamenti in un unico spazio privato.",
            heroSubtitle: "VitalsPath ti aiuta a organizzare trattamenti, dosi, sintomi, misurazioni, appuntamenti e attività di follow-up con una vista giornaliera chiara, widget, Live Activities e supporto Apple Watch.",
            primaryCta: "Scarica su App Store",
            secondaryCta: "Vedi le funzioni di lancio",
            sections: [
                { title: "Tutto ciò che serve per il follow-up quotidiano", body: "Pianifica trattamenti e dosi, segnali come assunte, saltate o posticipate, controlla le scorte e tieni sotto controllo i promemoria di ricarica. Registra sintomi, umore, parametri, foto e note vocali in un'unica timeline personale." },
                { title: "Pensata per routine reali", body: "Usa i widget per avere visibilità immediata, le Live Activities nei momenti attivi della terapia e Apple Watch per azioni più rapide durante la giornata. Mantieni appuntamenti, condizioni e attività di follow-up organizzati senza perdere contesto." },
                { title: "Privacy by design", body: "Le tue informazioni di salute devono restare chiare, personali e sotto il tuo controllo. VitalsPath è costruita per supportare l'organizzazione personale, non per sostituire i professionisti sanitari." },
            ],
            featureListTitle: "Aree principali",
            featureListSubtitle: "Tutto ciò di cui hai bisogno, progettato con precisione.",
            featureListItems: ["Tracciamento di farmaci e dosi", "Dosi assunte, saltate e posticipate", "Scorte e promemoria di ricarica", "Registro di sintomi e umore", "Parametri e misurazioni", "Foto e note vocali", "Appuntamenti e attività di follow-up", "Widget, Live Activities e Apple Watch"],
            primaryFeatures: ["Gestisci i tuoi farmaci", "Monitora sintomi e parametri"],
            featureTags: [
                ["FARMACI", "Scorte", "Promemoria"],
                ["SINTOMI", "Parametri", "Timeline"]
            ],
            footnote: "Alcune funzioni possono dipendere dal dispositivo, dai permessi o dal piano. La disponibilità di Premium è mostrata chiaramente nell'app quando applicabile.",
            ecosystemLabel: "Ecosistema",
            ecosystemTitle: "Esperienza integrata",
            ecosystemBody: "VitalsPath è progettato per funzionare perfettamente su tutti i tuoi dispositivi. Usa i widget per aggiornamenti istantanei, Live Activities per monitorare le dosi attive e l'Apple Watch per registrazioni rapide.",
            ecosystemItems: [
                { title: "Widget Intelligenti", description: "Parametri vitali e farmaci direttamente sulla schermata home." },
                { title: "Apple Watch", description: "Registrazioni rapide e avvisi direttamente sul polso." },
                { title: "Live Activities", description: "Monitoraggio in tempo reale delle dosi attive." }
            ],
            ctaBadge: "INIZIA OGGI",
            ctaTitle: "La tua salute, nelle tue mani e in privato",
            ctaPrivacyDetail: "Privacy assoluta con crittografia end-to-end.",
            ctaPremiumTitle: "CURA PREMIUM",
            ctaPremiumDetail: "Progettato per pazienti cronici e caregiver.",
            ctaCommunityTitle: "COMMUNITY",
            ctaCommunityDetail: "utenti attivi si fidano di noi",
            bentoCards: [
                {
                    badge: "FARMACI",
                    title: "Gestisci i tuoi farmaci",
                    body: "Pianifica i trattamenti, monitora le scorte e ricevi promemoria per le ricariche.",
                    tags: ["Scorte", "Promemoria", "Orari"]
                },
                {
                    badge: "SINTOMI",
                    title: "Traccia l'importante",
                    body: "Registra sintomi, umore e parametri vitali con foto e note vocali.",
                    tags: ["Parametri", "Timeline", "Umore"]
                },
                {
                    badge: "BENESSERE",
                    title: "I tuoi progressi",
                    body: "Visualizza tendenze e riepiloghi della tua attività, umore e parametri per individuare schemi importanti.",
                    tags: ["Tendenze", "Riepilogo", "Insight"]
                },
                {
                    badge: "APPUNTAMENTI",
                    title: "Non perdere una visita",
                    body: "Tieni sempre sotto controllo le visite mediche e il monitoraggio delle condizioni.",
                    tags: ["Calendario", "Condizioni", "Attività"]
                },
                {
                    badge: "WIDGET",
                    title: "Tutta la salute a colpo d'occhio",
                    body: "Accedi ai tuoi promemoria e parametri direttamente dalla schermata home con widget eleganti e funzionali.",
                    tags: ["Schermata Home", "iOS 18", "Personalizzabile"]
                },
                {
                    badge: "APPLE WATCH",
                    title: "Azione rapida",
                    body: "Usa l'Apple Watch per registrazioni rapide e Live Activities in tempo reale.",
                    tags: ["Live Activities", "Widgets", "Veloce"]
                }
            ]
        },
        privacy: {
            title: "Informativa sulla privacy",
            intro: "Questa informativa spiega quali informazioni può gestire VitalsPath, come vengono usate all'interno dell'app e come gli utenti possono contattarci per domande sulla privacy.",
            sections: [
                { title: "Informazioni che scegli di registrare", body: "A seconda di come usi l'app, VitalsPath può gestire informazioni come farmaci, orari, sintomi, registrazioni dell'umore, parametri, misurazioni, appuntamenti, attività, foto, note vocali e dettagli di profilo che scegli di aggiungere." },
                { title: "Permessi", body: "L'app può richiedere permessi direttamente collegati alle funzioni che scegli di usare, inclusi notifiche, dati sanitari, microfono, foto, fotocamera, contatti, calendario, promemoria e posizione. Questi permessi servono a supportare le relative funzioni dell'app e possono essere gestiti dall'utente." },
                { title: "Uso delle informazioni", body: "Le informazioni gestite da VitalsPath vengono usate per supportare funzioni di organizzazione personale della salute come pianificazione dei trattamenti, follow-up quotidiano, promemoria, misurazioni, appuntamenti, widget e funzioni correlate selezionate dall'utente." },
                { title: "Avvertenza medica", body: "VitalsPath non è un dispositivo medico e non è destinata a diagnosticare, trattare, curare o prevenire alcuna malattia. Non sostituisce consulenza medica, diagnosi, trattamento o assistenza d'emergenza." },
                { title: "Contatto", body: "Se hai domande sulla privacy o sul trattamento dei dati, contattaci tramite la pagina di supporto." },
            ],
        },
        support: {
            title: "Supporto",
            intro: "Se hai bisogno di aiuto con VitalsPath, hai domande sull'app o vuoi segnalare un problema, contattaci qui.",
            contactTitle: "Contatto",
            contactBody: "Email: vitalspath@gmail.com",
            helpTitle: "Possiamo aiutarti con",
            helpItems: ["Domande sull'app", "Domande su account o acquisti", "Segnalazioni di bug", "Domande sulla privacy", "Feedback sull'esperienza"],
            note: "Quando possibile, includi il modello del dispositivo, la versione di iOS, la versione dell'app e una breve descrizione del problema.",
            formTitle: "Invia un messaggio",
            formIntro: "Puoi anche inviare direttamente da questa pagina il tuo problema, la tua domanda o il tuo feedback.",
        },
        releaseFeatures: {
            title: "Funzioni di lancio",
            intro: "Questa pagina descrive le funzioni incluse nella prima release pubblica di VitalsPath.",
            sections: [
                { title: "Follow-up di farmaci e trattamenti", body: "Crea e organizza trattamenti, pianifica dosi, registra se ogni dose è stata assunta, saltata o posticipata, controlla le scorte dei farmaci e usa i promemoria di ricarica per restare preparato." },
                { title: "Sintomi, umore e misurazioni", body: "Registra sintomi, umore, parametri e altre misurazioni personali in un'unica timeline. Aggiungi foto e note vocali quando aiutano a conservare più contesto." },
                { title: "Appuntamenti, condizioni e attività di follow-up", body: "Tieni appuntamenti, condizioni e attività di follow-up nello stesso posto così che le informazioni quotidiane sulla salute restino collegate e facili da rivedere." },
                { title: "Esperienza quotidiana su più dispositivi", body: "Usa widget, Live Activities e supporto Apple Watch per rivedere la giornata e completare più rapidamente le azioni principali." },
                { title: "Privacy e uso previsto", body: "VitalsPath è costruita per l'organizzazione personale e il follow-up. Non sostituisce cure mediche, consulenza medica, diagnosi o trattamento." },
            ],
            note: "In questa pagina devono comparire solo le funzioni disponibili nella release iniziale su App Store.",
        },
        roadmap: {
            title: "Roadmap",
            intro: "Questa pagina descrive i miglioramenti previsti per le prossime versioni di VitalsPath. Gli elementi seguenti non garantiscono tempistiche e possono cambiare con l'evoluzione del prodotto.",
            nextReleaseTitle: "Previsto per la prossima versione",
            nextReleaseItems: ["Riepiloghi dei trattamenti più chiari e insight sull'aderenza", "Flussi di appuntamenti e follow-up più rifiniti", "Più azioni su widget e Apple Watch", "Miglioramenti di affidabilità per sync, backup e ripristino", "Affinamenti di localizzazione e accessibilità"],
            directionTitle: "Direzione del prodotto",
            directionBody: "Nel breve periodo il focus è rendere il follow-up quotidiano più chiaro, rapido e affidabile tra farmaci, sintomi, parametri e appuntamenti, migliorando la coerenza tra iPhone, widget e Apple Watch.",
            safetyNote: "Le funzionalità, i tempi e la disponibilità menzionati in questa pagina possono cambiare con il progredire dello sviluppo. Questa non è una garanzia delle versioni future.",
        },
        footer: { privacy: "Privacy", support: "Supporto", releaseFeatures: "Funzioni di lancio", roadmap: "Roadmap", timeline: "Cronologia", terms: "Termini", disclaimer: "Avvertenza medica", subscription: "Abbonamento", legalNote: "VitalsPath è progettata per l'organizzazione sanitaria personale e il follow-up. Non sostituisce pareri medici, diagnosi, trattamenti o assistenza medica d'emergenza." },
        timeline: { title: "Cronologia dei rilasci", subtitle: "Segui lo sviluppo di VitalsPath" },
    },
    pt: {
        meta: { title: "VitalsPath - A sua saúde, organizada em privado", description: "Acompanhe a medicação, sintomas, sinais vitais e consultas num espaço pessoal e seguro." },
        nav: { home: "Início", privacy: "Privacidade", support: "Suporte", releaseFeatures: "Funcionalidades de lançamento", roadmap: "Roadmap", timeline: "Cronologia" },
        common: {
            medicalDisclaimer: "VitalsPath foi concebida para organização pessoal de saúde e acompanhamento. Não substitui aconselhamento médico, diagnóstico, tratamento ou cuidados de emergência.",
            appStoreSoon: "O link da App Store será ativado aqui assim que a ficha pública estiver disponível.",
            contactSupport: "Contactar suporte",
            emailLabel: "Email",
        },
        home: {
            heroBadge: "PROTEGENDO O QUE IMPORTA",
            heroTitle: "Mantenha medicação, sintomas, sinais vitais e consultas num único espaço privado.",
            heroSubtitle: "VitalsPath ajuda a organizar tratamentos, doses, sintomas, medições, consultas e tarefas de acompanhamento com uma vista diária clara, widgets, Live Activities e suporte para Apple Watch.",
            primaryCta: "Descarregar na App Store",
            secondaryCta: "Ver funcionalidades de lançamento",
            sections: [
                { title: "Tudo o que precisa para o acompanhamento diário", body: "Planeie tratamentos e doses, marque-os como tomados, ignorados ou adiados, reveja o seu stock e mantenha os lembretes de reposição sob controlo. Registe sintomas, humor, sinais vitais, fotos e notas de voz numa única linha temporal pessoal." },
                { title: "Criada para rotinas reais", body: "Use widgets para visibilidade rápida, Live Activities para momentos ativos da medicação e Apple Watch para ações mais rápidas ao longo do dia. Mantenha consultas, condições e tarefas de acompanhamento organizadas sem perder contexto." },
                { title: "Privacidade desde a origem", body: "A sua informação de saúde deve manter-se clara, pessoal e sob o seu controlo. VitalsPath foi criada para apoiar a organização pessoal, não para substituir profissionais de saúde." },
            ],
            featureListTitle: "Áreas principais",
            featureListSubtitle: "Tudo o que precisa, concebido com precisão.",
            featureListItems: ["Seguimento de medicação e doses", "Doses tomadas, ignoradas e adiadas", "Stock e lembretes de reposição", "Registo de sintomas e humor", "Sinais vitais e medições", "Fotos e notas de voz", "Consultas e tarefas de acompanhamento", "Widgets, Live Activities e Apple Watch"],
            primaryFeatures: ["Domine a sua medicação", "Sintomas e sinais vitais"],
            featureTags: [
                ["MEDICAÇÃO", "Stock", "Lembretes"],
                ["SINTOMAS", "Sinais Vitais", "Timeline"]
            ],
            footnote: "Algumas funcionalidades podem depender do seu dispositivo, permissões ou plano. A disponibilidade Premium é mostrada claramente dentro da app quando aplicável.",
            ecosystemLabel: "Ecossistema",
            ecosystemTitle: "Experiência integrada",
            ecosystemBody: "VitalsPath foi projetado para funcionar perfeitamente em todos os seus dispositivos. Use widgets para atualizações instantâneas, Live Activities para acompanhar doses ativas e Apple Watch para registros rápidos.",
            ecosystemItems: [
                { title: "Widgets Inteligentes", description: "Sinais vitais e medicamentos diretamente no seu ecrã inicial." },
                { title: "Apple Watch", description: "Registos rápidos e alertas diretamente no seu pulso." },
                { title: "Live Activities", description: "Acompanhamento em tempo real de doses ativas." }
            ],
            ctaBadge: "COMECE HOJE",
            ctaTitle: "A sua saúde, nas suas mãos e em privado",
            ctaPrivacyDetail: "Privacidade absoluta com encriptação de ponta a ponta.",
            ctaPremiumTitle: "CUIDADO PREMIUM",
            ctaPremiumDetail: "Concebido para doentes crónicos e cuidadores.",
            ctaCommunityTitle: "COMUNIDADE",
            ctaCommunityDetail: "utilizadores ativos confiam em nós",
            bentoCards: [
                {
                    badge: "MEDICAÇÃO",
                    title: "Domine a sua medicação",
                    body: "Planeie tratamentos, marque doses como tomadas, reveja o seu stock e receba lembretes.",
                    tags: ["Stock", "Lembretes", "Horários"]
                },
                {
                    badge: "SINTOMAS",
                    title: "Registe o importante",
                    body: "Acompanhe sintomas, humor e sinais vitais. Adicione fotos e notas de voz para maior contexto.",
                    tags: ["Sinais Vitais", "Timeline", "Humor"]
                },
                {
                    badge: "CONSULTAS",
                    title: "Nunca perca uma visita",
                    body: "Mantenha consultas médicas, tarefas de acompanhamento e o seu histórico bem organizado.",
                    tags: ["Calendário", "Condições", "Tarefas"]
                },
                {
                    badge: "APPLE WATCH",
                    title: "Rapidez no pulso",
                    body: "Use o Apple Watch para registos rápidos e Live Activities para manter as tomas ativas.",
                    tags: ["Live Activities", "Widgets", "Rápido"]
                }
            ]
        },

        privacy: {
            title: "Política de Privacidade",
            intro: "Esta política explica que informação a VitalsPath pode tratar, como é utilizada dentro da app e como os utilizadores podem contactar-nos com questões de privacidade.",
            sections: [
                { title: "Informação que escolhe registar", body: "Dependendo de como utiliza a app, a VitalsPath pode tratar informação como medicação, horários, sintomas, registos de humor, sinais vitais, medições, consultas, tarefas, fotos, notas de voz e detalhes de perfil que escolha adicionar." },
                { title: "Permissões", body: "A app pode pedir permissões diretamente relacionadas com as funcionalidades que escolher usar, incluindo notificações, dados de saúde, microfone, fotos, câmara, contactos, calendário, lembretes e localização. Estas permissões servem para suportar as funções correspondentes na app e podem ser geridas pelo utilizador." },
                { title: "Utilização da informação", body: "A informação tratada pela VitalsPath é usada para suportar funcionalidades de organização pessoal de saúde, como planeamento de tratamentos, acompanhamento diário, lembretes, medições, consultas, widgets e outras funções escolhidas pelo utilizador." },
                { title: "Aviso médico", body: "A VitalsPath não é um dispositivo médico e não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Não substitui aconselhamento médico, diagnóstico, tratamento ou assistência de emergência." },
                { title: "Contacto", body: "Se tiver questões sobre privacidade ou tratamento de dados, contacte-nos através da página de suporte." },
            ],
        },
        support: {
            title: "Suporte",
            intro: "Se precisar de ajuda com a VitalsPath, tiver dúvidas sobre a app ou quiser reportar um problema, contacte-nos aqui.",
            contactTitle: "Contacto",
            contactBody: "Email: vitalspath@gmail.com",
            helpTitle: "Podemos ajudar com",
            helpItems: ["Dúvidas sobre a app", "Dúvidas sobre conta ou compras", "Relatórios de erro", "Questões de privacidade", "Feedback sobre a experiência"],
            note: "Sempre que possível, inclua o modelo do dispositivo, a versão de iOS, a versão da app e uma breve descrição do problema.",
            formTitle: "Enviar mensagem",
            formIntro: "Também pode enviar diretamente desta página o seu problema, a sua dúvida ou o seu feedback.",
        },
        releaseFeatures: {
            title: "Funcionalidades de lançamento",
            intro: "Esta página descreve as funcionalidades incluídas na primeira publicação pública da VitalsPath.",
            sections: [
                { title: "Acompanhamento de medicação e tratamentos", body: "Crie e organize tratamentos, planeie doses, registe se cada dose foi tomada, ignorada ou adiada, reveja o stock de medicação e use lembretes de reposição para se manter preparado." },
                { title: "Sintomas, humor e medições", body: "Registe sintomas, humor, sinais vitais e outras medições pessoais numa única linha temporal. Adicione fotos e notas de voz quando ajudarem a guardar mais contexto." },
                { title: "Consultas, condições e tarefas de acompanhamento", body: "Mantenha consultas, condições e tarefas de acompanhamento no mesmo local para que a informação diária de saúde permaneça ligada e fácil de rever." },
                { title: "Experiência diária entre dispositivos", body: "Use widgets, Live Activities e suporte Apple Watch para rever o seu dia e concluir ações importantes com mais rapidez." },
                { title: "Privacidade e utilização prevista", body: "A VitalsPath foi criada para organização pessoal e acompanhamento. Não substitui cuidados médicos, aconselhamento médico, diagnóstico ou tratamento." },
            ],
            note: "Nesta página devem aparecer apenas as funcionalidades disponíveis na publicação inicial da App Store.",
        },
        roadmap: {
            title: "Roadmap",
            intro: "Esta página apresenta melhorias previstas para as próximas versões da VitalsPath. Os itens abaixo não garantem calendário e podem mudar à medida que o produto evolui.",
            nextReleaseTitle: "Previsto para a próxima versão",
            nextReleaseItems: ["Resumos de tratamento mais claros e insights de adesão", "Fluxos de consultas e acompanhamento mais polidos", "Mais ações em widgets e Apple Watch", "Melhorias de fiabilidade em sincronização, cópia e restauro", "Melhorias de localização e acessibilidade"],
            directionTitle: "Direção do produto",
            directionBody: "No curto prazo, o foco é tornar o acompanhamento diário mais claro, rápido e fiável em medicação, sintomas, sinais vitais e consultas, melhorando a consistência entre iPhone, widgets e Apple Watch.",
            safetyNote: "Os recursos, prazos e disponibilidade mencionados nesta página podem mudar à medida que o desenvolvimento continua. Isso não é uma garantia de versões futuras.",
        },
        footer: { privacy: "Privacidade", support: "Suporte", releaseFeatures: "Funcionalidades de lançamento", roadmap: "Roadmap", timeline: "Linha do Tempo", terms: "Termos", disclaimer: "Aviso médico", subscription: "Subscrição", legalNote: "A VitalsPath destina-se apenas à organização pessoal de saúde e não substitui aconselhamento médico, diagnóstico, tratamento ou cuidados de emergência." },
        timeline: { title: "Linha do Tempo", subtitle: "Acompanhe o desenvolvimento do VitalsPath" },
    },
    ja: {
        meta: {
            title: "VitalsPath | 薬、症状、バイタル、予定を個人で整理するプライベート追跡",
            description: "薬、症状、バイタル、予定をわかりやすい健康タイムラインで個人的に記録できます。",
        },
        nav: { home: "ホーム", privacy: "プライバシー", support: "サポート", releaseFeatures: "リリース機能", roadmap: "ロードマップ", timeline: "タイムライン" },
        common: {
            medicalDisclaimer: "VitalsPath は個人の健康管理とフォローアップのために設計されています。医療アドバイス、診断、治療、救急対応の代わりにはなりません。",
            appStoreSoon: "公開 App Store ページが利用可能になり次第、ここにリンクを表示します。",
            contactSupport: "サポートに連絡",
            emailLabel: "メール",
        },
        home: {
            heroBadge: "大切なものを守る",
            heroTitle: "薬、症状、バイタル、予定を1つのプライベートな場所に。",
            heroSubtitle: "VitalsPathは、視認性の高いデイリービュー、ウィジェット、ライブアクティビティ、Apple Watch対応により、治療、用量、症状、測定値、予定、フォローアップタスクの整理をサポートします。",
            primaryCta: "App Storeでダウンロード",
            secondaryCta: "リリース機能を見る",
            sections: [
                { title: "日々のフォローアップに必要なすべてを", body: "治療法と用量を計画し、服用済み、スキップ、延期としてマークし、在庫を確認し、補充リマインダーで準備を整えます。症状、気分、バイタル、写真、音声メモを1つの個人的なタイムラインで追跡します。" },
                { title: "実際の日常ルーチンのために構築", body: "ウィジェットで素早く確認し、ライブアクティビティでアクティブな服薬時間を把握し、Apple Watchで日中のアクションをより迅速に行えます。文脈を失うことなく、予定、体調、フォローアップタスクを整理した状態に保ちます。" },
                { title: "プライバシーを優先した設計", body: "あなたの健康情報は、明確で個人的なものであり、あなたの管理下にあるべきです。VitalsPathは個人の健康管理をサポートするために構築されており、医療専門家に代わるものではありません。" },
            ],
            featureListTitle: "主な機能領域",
            featureListSubtitle: "精密に設計された、必要なものすべて。",
            featureListItems: ["服薬と用量の追跡", "服用済み、スキップ、延期された用量", "在庫と補充リマインダー", "症状と気分の記録", "バイタルと測定値", "写真と音声メモ", "予定とフォローアップタスク", "ウィジェット、ライブアクティビティ、Apple Watch"],
            primaryFeatures: ["服薬をマスターする", "症状とバイタルを追跡"],
            featureTags: [
                ["服薬", "在庫", "リマインダー"],
                ["症状", "バイタル", "タイムライン"]
            ],
            footnote: "一部の機能は、デバイス、権限、またはプランによって異なる場合があります。プレミアム機能の利用可能性は、該当する場合、アプリ内で明確に表示されます。",
            ecosystemLabel: "エコシステム",
            ecosystemTitle: "統合された体験",
            ecosystemBody: "VitalsPathは、すべてのデバイスでシームレスに動作するように設計されています。ウィジェットで即座に更新を確認し、ライブアクティビティでアクティブな用量を追跡し、Apple Watchで外出先から素早く記録できます。",
            ecosystemItems: [
                { title: "スマートウィジェット", description: "ホーム画面でバイタルと服薬を直接確認。" },
                { title: "Apple Watch", description: "手首から素早く記録し、アラートを受信。" },
                { title: "ライブアクティビティ", description: "アクティブな用量をリアルタイムで追跡。" }
            ],
            bentoCards: [
                {
                    badge: "服薬",
                    title: "服薬をマスターする",
                    body: "治療を計画し、用量をマークし、在庫を確認し、リマインダーを受け取ります。",
                    tags: ["在庫", "リマインダー", "スケジュール"]
                },
                {
                    badge: "症状",
                    title: "重要なことを記録",
                    body: "症状、気分、バイタルを記録します。詳細な状況のために写真や音声メモを追加します。",
                    tags: ["バイタル", "タイムライン", "気分"]
                },
                {
                    badge: "健康管理",
                    title: "あなたの健康の歩み",
                    body: "活動、気分、バイタルの傾向と要約を視覚化し、重要なパターンを特定します。",
                    tags: ["傾向", "要約", "インサイト"]
                },
                {
                    badge: "予定",
                    title: "訪問を逃さない",
                    body: "診察、フォローアップタスク、健康履歴を整理して保持します。",
                    tags: ["カレンダー", "状態", "タスク"]
                },
                {
                    badge: "ウィジェット",
                    title: "健康状態を一目で確認",
                    body: "洗練された機能的なウィジェットを使用して、ホーム画面からリマインダーやバイタルに直接アクセスできます。",
                    tags: ["ホーム画面", "iOS 18", "カスタマイズ可能"]
                },
                {
                    badge: "APPLE WATCH",
                    title: "手首から素早く",
                    body: "Apple Watchで素早く記録し、Live Activitiesでアクティブな用量を維持します。",
                    tags: ["ライブアクティビティ", "ウィジェット", "迅速"]
                }
            ],
            ctaBadge: "今日から始める",
            ctaTitle: "あなたの健康を、あなたの手でプライベートに",
            ctaPrivacyDetail: "エンドツーエンド暗号化による絶対的なプライバシー。",
            ctaPremiumTitle: "プレミアムケア",
            ctaPremiumDetail: "慢性疾患患者とその介護者のために設計。",
            ctaCommunityTitle: "コミュニティ",
            ctaCommunityDetail: "のアクティブユーザーが私たちを信頼しています",
        },
        privacy: {
            title: "プライバシーポリシー",
            intro: "このポリシーでは、VitalsPath がどのような情報を扱う可能性があるか、その情報がアプリ内でどのように使われるか、プライバシーに関する質問がある場合の連絡方法を説明します。",
            sections: [
                { title: "ユーザーが記録する情報", body: "アプリの使い方に応じて、VitalsPath は、薬、スケジュール、症状、気分の記録、バイタル、測定値、予定、タスク、写真、音声メモ、追加したプロフィール情報などを扱う場合があります。" },
                { title: "権限", body: "アプリは、通知、ヘルスデータ、マイク、写真、カメラ、連絡先、カレンダー、リマインダー、位置情報など、利用する機能に直接関係する権限を求める場合があります。これらの権限は対応する機能を支えるために使われ、ユーザーが管理できます。" },
                { title: "情報の利用", body: "VitalsPath が扱う情報は、治療計画、日々のフォローアップ、リマインダー、測定値、予定、ウィジェット、その他ユーザーが選択した機能など、個人の健康管理機能を支えるために使用されます。" },
                { title: "医療に関する注意", body: "VitalsPath は医療機器ではなく、病気の診断、治療、治癒、予防を目的としていません。医療アドバイス、診断、治療、緊急支援の代わりにはなりません。" },
                { title: "連絡先", body: "プライバシーやデータの扱いについて質問がある場合は、サポートページからご連絡ください。" },
            ],
        },
        support: {
            title: "サポート",
            intro: "VitalsPath について助けが必要な場合、アプリに関する質問がある場合、または問題を報告したい場合は、こちらからご連絡ください。",
            contactTitle: "連絡先",
            contactBody: "メール: vitalspath@gmail.com",
            helpTitle: "対応できる内容",
            helpItems: ["アプリに関する質問", "アカウントや購入に関する質問", "不具合報告", "プライバシーに関する質問", "使用体験についてのフィードバック"],
            note: "可能であれば、デバイス名、iOS バージョン、アプリのバージョン、問題の簡単な説明を含めてください。",
            formTitle: "メッセージを送る",
            formIntro: "このページから問題、質問、フィードバックを直接送ることもできます。",
        },
        releaseFeatures: {
            title: "リリース機能",
            intro: "このページでは、VitalsPath の初回公開版に含まれる機能を説明します。",
            sections: [
                { title: "服薬と治療のフォローアップ", body: "治療を作成・整理し、服用を計画し、各用量が服用済み・スキップ・延期のどれかを記録し、薬の在庫を確認し、補充リマインダーを使って備えることができます。" },
                { title: "症状、気分、測定値", body: "症状、気分の記録、バイタル、その他の個人的な測定値をひとつのタイムラインにまとめられます。より多くの文脈が必要なときは写真や音声メモを追加できます。" },
                { title: "予定、状態、フォローアップ項目", body: "予定、状態、フォローアップ項目を同じ場所に整理し、毎日の健康情報をつながったまま見返しやすく保てます。" },
                { title: "デバイスをまたいだ日常体験", body: "ウィジェット、Live Activities、Apple Watch 対応を使って、その日の内容を確認し、重要な操作をより素早く行えます。" },
                { title: "プライバシーと想定用途", body: "VitalsPath は個人の整理とフォローアップのために作られています。医療、医療アドバイス、診断、治療の代わりではありません。" },
            ],
            note: "このページには、初回 App Store 公開版で利用できる機能のみを掲載してください。",
        },
        roadmap: {
            title: "ロードマップ",
            intro: "このページでは、今後の VitalsPath リリースに向けて計画している改善点をまとめています。以下の項目は時期を保証するものではなく、製品の進化に合わせて変更される可能性があります。",
            nextReleaseTitle: "次回リリースで予定している内容",
            nextReleaseItems: ["よりわかりやすい治療サマリーと服薬継続の見通し", "より洗練された予定とフォローアップの流れ", "ウィジェットと Apple Watch の操作拡張", "同期、バックアップ、復元の信頼性向上", "ローカライズとアクセシビリティの改善"],
            directionTitle: "製品の方向性",
            directionBody: "短期的には、薬、症状、バイタル、予定にまたがる日々のフォローアップを、よりわかりやすく、速く、信頼できるものにしながら、iPhone、ウィジェット、Apple Watch 間の一貫性を高めることに注力します。",
            safetyNote: "このページに記載されている機能、時期、および可用性は、開発の継続に伴い変更される場合があります。これは将来のリリースを保証するものではありません。",
        },
        footer: { privacy: "プライバシー", support: "サポート", releaseFeatures: "リリース機能", roadmap: "ロードマップ", timeline: "タイムライン", terms: "利用規約", disclaimer: "医療に関する注意", subscription: "サブスクリプション", legalNote: "VitalsPath は個人の健康管理専用であり、医療アドバイス、診断、治療、緊急対応の代わりにはなりません。" },
        timeline: { title: "リリース履歴", subtitle: "VitalsPathの開発状況を確認できます" },
    },
    zh: {
        meta: {
            title: "VitalsPath | 私密记录药物、症状、生命体征与预约",
            description: "在清晰的健康时间线中私密记录药物、症状、生命体征与预约。",
        },
        nav: { home: "首页", privacy: "隐私", support: "支持", releaseFeatures: "首发功能", roadmap: "路线图", timeline: "时间线" },
        common: {
            medicalDisclaimer: "VitalsPath 用于个人健康整理与跟进，不替代医疗建议、诊断、治疗或紧急救助。",
            appStoreSoon: "公开 App Store 页面上线后，这里会显示对应链接。",
            contactSupport: "联系支持",
            emailLabel: "邮箱",
        },
        home: {
            heroBadge: "守护重要之事",
            heroTitle: "把用药、症状、生命体征和预约都放在一个私密的地方。",
            heroSubtitle: "VitalsPath 帮助你用清晰的每日视图来整理治疗、剂量、症状、测量、预约和跟进行动，并支持小组件、Live Activities 与 Apple Watch。",
            primaryCta: "在 App Store 下载",
            secondaryCta: "查看首发功能",
            sections: [
                { title: "日常跟进所需的一切", body: "规划治疗和剂量，将其标记为已服用、已跳过或已延期，查看库存，并管理补货提醒。把症状、情绪、生命体征、照片和语音备注集中记录在同一条个人时间线中。" },
                { title: "为真实日常而设计", body: "使用小组件快速查看重点，在用药进行时使用 Live Activities，并通过 Apple Watch 更快完成日常操作。将预约、健康状况和跟进任务整理在一起而不丢失上下文。" },
                { title: "以隐私为设计前提", body: "你的健康信息应当清晰、个人化，并由你掌控。VitalsPath 的目标是支持个人整理，而不是替代医疗专业人员。" },
            ],
            featureListTitle: "核心领域",
            featureListSubtitle: "您所需的一切，精准设计。",
            featureListItems: ["药物与剂量记录", "已服用、已跳过和已延期的剂量", "库存与补货提醒", "症状与情绪记录", "生命体征与测量", "照片与语音备注", "预约与跟进任务", "小组件、Live Activities 与 Apple Watch"],
            primaryFeatures: ["掌控您的药物", "追踪症状与指标"],
            featureTags: [
                ["药物", "库存", "提醒"],
                ["症状", "指标", "时间线"]
            ],
            footnote: "某些功能可能取决于你的设备、权限或订阅方案。涉及 Premium 时，应用内会清楚显示可用情况。",
            ecosystemLabel: "生态系统",
            ecosystemTitle: "深度集成的健身体验",
            ecosystemBody: "VitalsPath 旨在跨设备无缝工作。利用小组件获取即时更新，通过实时活动追踪当前剂量，并使用 Apple Watch 随时随地快捷记录。",
            ecosystemItems: [
                { title: "智能小组件", description: "在主屏幕直接查看各项指标和药物。" },
                { title: "Apple Watch", description: "快速记录并在腕间接收提醒。" },
                { title: "实时活动", description: "实时追踪当前剂量进度。" }
            ],
            bentoCards: [
                {
                    badge: "药物",
                    title: "掌控您的药物",
                    body: "规划治疗方案，标记用药情况，查看库存并获取提醒。",
                    tags: ["库存", "提醒", "日程"]
                },
                {
                    badge: "症状",
                    title: "记录重要信息",
                    body: "记录症状、情绪和生命体征。添加照片和语音备注以提供背景信息。",
                    tags: ["指标", "时间线", "情绪"]
                },
                {
                    badge: "预约",
                    title: "不再错过就诊",
                    body: "让就诊、跟进任务和您的健康记录井井有条。",
                    tags: ["日历", "状况", "任务"]
                },
                {
                    badge: "APPLE WATCH",
                    title: "腕间快捷操作",
                    body: "使用 Apple Watch 快速记录，通过实时活动掌握用药进度。",
                    tags: ["实时活动", "小组件", "快捷"]
                }
            ],
            ctaBadge: "立即开始",
            ctaTitle: "您的健康，尽在掌握且隐私安全",
            ctaPrivacyDetail: "端到端加密，确保绝对私密。",
            ctaPremiumTitle: "高级护理",
            ctaPremiumDetail: "专为慢性病患者及护理人员设计。",
            ctaCommunityTitle: "社区",
            ctaCommunityDetail: "位活跃用户正在信任我们",
        },
        privacy: {
            title: "隐私政策",
            intro: "本政策说明 VitalsPath 可能处理哪些信息、这些信息如何在应用内使用，以及用户如何就隐私问题与我们联系。",
            sections: [
                { title: "你选择记录的信息", body: "根据你的使用方式，VitalsPath 可能处理你添加的药物、时间安排、症状、情绪记录、生命体征、测量、预约、任务、照片、语音备注以及个人资料信息。" },
                { title: "权限", body: "应用可能请求与你选择使用的功能直接相关的权限，包括通知、健康数据、麦克风、照片、相机、联系人、日历、提醒事项和位置。这些权限仅用于支持相应的应用内功能，并可由用户自行管理。" },
                { title: "信息用途", body: "VitalsPath 处理的信息用于支持个人健康整理功能，例如治疗规划、日常跟进、提醒、测量、预约、小组件以及其他由用户选择的相关功能。" },
                { title: "医疗免责声明", body: "VitalsPath 不是医疗器械，也不用于诊断、治疗、治愈或预防任何疾病。它不替代医疗建议、诊断、治疗或紧急协助。" },
                { title: "联系", body: "如果你对隐私或数据处理有疑问，请通过支持页面联系我们。" },
            ],
        },
        support: {
            title: "支持",
            intro: "如果你在使用 VitalsPath 时需要帮助、对应用有疑问，或想报告问题，请在这里联系我们。",
            contactTitle: "联系方式",
            contactBody: "邮箱：vitalspath@gmail.com",
            helpTitle: "我们可以帮助你处理",
            helpItems: ["应用相关问题", "账号或购买问题", "错误报告", "隐私问题", "使用体验反馈"],
            note: "如有可能，请附上你的设备型号、iOS 版本、应用版本以及问题的简短描述。",
            formTitle: "发送消息",
            formIntro: "你也可以直接通过本页发送问题、疑问或反馈。",
        },
        releaseFeatures: {
            title: "首发功能",
            intro: "本页描述 VitalsPath 首次公开发布版本中包含的功能。",
            sections: [
                { title: "药物与治疗跟进", body: "创建并整理治疗方案，规划剂量，记录每次剂量是已服用、已跳过还是已延期，查看药物库存，并使用补货提醒提前做好准备。" },
                { title: "症状、情绪与测量", body: "在同一条时间线中记录症状、情绪、生命体征和其他个人测量。需要更多上下文时，可添加照片和语音备注。" },
                { title: "预约、健康状况与跟进任务", body: "将预约、健康状况和跟进任务整理在同一处，让你的日常健康信息保持关联且便于回顾。" },
                { title: "跨设备的日常体验", body: "使用小组件、Live Activities 和 Apple Watch 支持，更快查看当天内容并完成关键操作。" },
                { title: "隐私与预期用途", body: "VitalsPath 用于个人整理与跟进，不替代医疗护理、医疗建议、诊断或治疗。" },
            ],
            note: "本页只应列出首发 App Store 版本中实际提供的功能。",
        },
        roadmap: {
            title: "路线图",
            intro: "本页概述未来 VitalsPath 版本计划中的改进。以下内容不保证具体时间，并可能随着产品发展而调整。",
            nextReleaseTitle: "计划在下一版本提供",
            nextReleaseItems: ["更清晰的治疗摘要与依从性洞察", "更完善的预约与跟进流程", "扩展小组件与 Apple Watch 操作", "提升同步、备份与恢复的可靠性", "改进本地化与无障碍体验"],
            directionTitle: "产品方向",
            directionBody: "短期内，重点是让药物、症状、生命体征和预约的日常跟进更加清晰、快速且可靠，同时提升 iPhone、小组件和 Apple Watch 之间的一致性。",
            safetyNote: "本页面提到的功能、时间和可用性可能会随着开发的推进而发生变化。这并不保证未来的发布。",
        },
        footer: { privacy: "隐私政策", support: "支持", releaseFeatures: "首发功能", roadmap: "路线图", timeline: "时间线", terms: "条款", disclaimer: "医疗免责声明", subscription: "订阅", legalNote: "VitalsPath 仅用于个人健康整理，不替代医疗建议、诊断、治疗 or 紧急救助。" },
        timeline: { title: "发布时间线", subtitle: "关注 VitalsPath 的开发进程" },
    },
    ko: {
        meta: {
            title: "VitalsPath | 약물, 증상, 활력징후, 일정을 위한 개인 건강 추적",
            description: "약물, 증상, 활력징후, 일정을 한눈에 보이는 건강 타임라인에서 비공개로 관리하세요.",
        },
        nav: { home: "홈", privacy: "개인정보", support: "지원", releaseFeatures: "출시 기능", roadmap: "로드맵", timeline: "타임라인" },
        common: {
            medicalDisclaimer: "VitalsPath는 개인 건강 정리와 추적을 위해 설계되었습니다. 의료 조언, 진단, 치료 또는 응급 대응을 대체하지 않습니다.",
            appStoreSoon: "공개 App Store 페이지가 열리면 이곳에 링크가 표시됩니다.",
            contactSupport: "지원 문의",
            emailLabel: "이메일",
        },
        home: {
            heroBadge: "중요한 것을 보호하십시오",
            heroTitle: "약물, 증상, 활력징후, 일정을 하나의 비공개 공간에 보관하세요.",
            heroSubtitle: "VitalsPath는 명확한 일일 보기, 위젯, Live Activities, Apple Watch 지원을 통해 치료, 복용량, 증상, 측정값, 일정, 후속 작업을 정리할 수 있도록 도와줍니다.",
            primaryCta: "App Store에서 다운로드",
            secondaryCta: "출시 기능 보기",
            sections: [
                { title: "매일의 추적에 필요한 모든 것", body: "치료와 복용량을 계획하고, 복용함·건너뜀·연기로 기록하며, 재고를 확인하고, 리필 알림을 관리할 수 있습니다. 증상, 기분, 활력징후, 사진, 음성 메모를 하나의 개인 타임라인에 정리하세요." },
                { title: "실제 일상에 맞춘 설계", body: "빠른 확인을 위한 위젯, 복약 중 상황을 위한 Live Activities, 더 빠른 일상 작업을 위한 Apple Watch를 활용하세요. 일정, 상태, 후속 작업을 맥락을 잃지 않고 정리할 수 있습니다." },
                { title: "프라이버시 중심 설계", body: "건강 정보는 명확하고 개인적이어야 하며 사용자의 통제 아래 있어야 합니다. VitalsPath는 개인 정리를 돕기 위해 만들어졌으며 의료 전문가를 대체하지 않습니다." },
            ],
            featureListTitle: "핵심 영역",
            featureListSubtitle: "필요한 모든 것, 정밀하게 설계되었습니다。",
            featureListItems: ["약물 및 복용량 추적", "복용함, 건너뜀, 연기된 복용량", "재고 및 리필 알림", "증상 및 기분 기록", "활력징후 및 측정값", "사진 및 음성 메모", "일정 및 후속 작업", "위젯, Live Activities, Apple Watch"],
            primaryFeatures: ["복약 마스터하기", "증상 및 활력징후 추적"],
            featureTags: [
                ["복약", "재고", "알림"],
                ["증상", "활력징후", "타임라인"]
            ],
            footnote: "일부 기능은 기기, 권한 또는 요금제에 따라 달라질 수 있습니다. Premium 제공 여부는 해당 시 앱 안에서 명확하게 표시됩니다.",
            ecosystemLabel: "생태계",
            ecosystemTitle: "통합된 건강 경험",
            ecosystemBody: "VitalsPath는 사용자의 기기 간에 원활하게 작동하도록 설계되었습니다. 위젯으로 즉각적인 업데이트를 확인하고, 실시간 활동(Live Activities)으로 복용 정보를 추적하며, Apple Watch로 이동 중에도 빠르게 기록하세요.",
            ecosystemItems: [
                { title: "스마트 위젯", description: "홈 화면에서 지표와 약 정보를 직접 확인하세요." },
                { title: "Apple Watch", description: "손목에서 빠른 기록과 알림을 받아보세요." },
                { title: "실시간 활동", description: "현재 복용량 정보를 실시간으로 추적합니다." }
            ],
            bentoCards: [
                {
                    badge: "약물",
                    title: "복약 마스터하기",
                    body: "치료를 계획하고, 복용을 표시하고, 재고를 확인하고, 알림을 받으세요。",
                    tags: ["재고", "알림", "일정"]
                },
                {
                    badge: "증상",
                    title: "중요한 것 기록하기",
                    body: "증상, 기분, 활력징후를 기록하세요. 사진과 음성 메모를 추가하여 맥락을 파악하세요。",
                    tags: ["활력징후", "타임라인", "기분"]
                },
                {
                    badge: "일정",
                    title: "진료를 놓치지 마세요",
                    body: "병원 진료, 후속 작업, 건강 기록을 잘 정리하여 보관하세요。",
                    tags: ["캘린더", "상태", "작업"]
                },
                {
                    badge: "APPLE WATCH",
                    title: "손목에서 빠르게",
                    body: "Apple Watch로 빠르게 기록하고, 실시간 활동으로 활성 복용량을 유지하세요。",
                    tags: ["실시간 활동", "위젯", "빠름"]
                }
            ],
            ctaBadge: "오늘 시작하세요",
            ctaTitle: "내 손안의 건강 정보, 그리고 철저한 프라이버시",
            ctaPrivacyDetail: "종단간 암호화로 보장되는 절대적인 개인정보 보호.",
            ctaPremiumTitle: "프리미엄 케어",
            ctaPremiumDetail: "만성 질환 환자와 간병인을 위한 설계.",
            ctaCommunityTitle: "커뮤니티",
            ctaCommunityDetail: "명의 활성 사용자가 신뢰하고 있습니다",
        },
        privacy: {
            title: "개인정보 처리방침",
            intro: "이 정책은 VitalsPath가 어떤 정보를 다룰 수 있는지, 그 정보가 앱 안에서 어떻게 사용되는지, 그리고 개인정보 관련 질문이 있을 때 어떻게 연락할 수 있는지를 설명합니다.",
            sections: [
                { title: "사용자가 직접 기록하는 정보", body: "앱 사용 방식에 따라 VitalsPath는 약물, 일정, 증상, 기분 기록, 활력징후, 측정값, 일정, 작업, 사진, 음성 메모, 직접 추가한 프로필 정보를 다룰 수 있습니다." },
                { title: "권한", body: "앱은 사용자가 선택한 기능과 직접 관련된 권한을 요청할 수 있으며, 여기에는 알림, 건강 데이터, 마이크, 사진, 카메라, 연락처, 캘린더, 미리 알림, 위치가 포함될 수 있습니다. 이러한 권한은 해당 앱 기능을 지원하기 위해 사용되며 사용자가 직접 관리할 수 있습니다." },
                { title: "정보의 사용", body: "VitalsPath가 처리하는 정보는 치료 계획, 일일 추적, 알림, 측정값, 일정, 위젯 및 사용자가 선택한 관련 기능 등 개인 건강 정리 기능을 지원하기 위해 사용됩니다." },
                { title: "의료 관련 안내", body: "VitalsPath는 의료기기가 아니며 질병을 진단, 치료, 치유 또는 예방하기 위한 것이 아닙니다. 의료 조언, 진단, 치료 또는 응급 지원을 대체하지 않습니다." },
                { title: "문의", body: "개인정보나 데이터 처리에 대한 질문이 있으면 지원 페이지를 통해 문의해 주세요." },
            ],
        },
        support: {
            title: "지원",
            intro: "VitalsPath 사용 중 도움이 필요하거나 앱에 대한 질문이 있거나 문제를 제보하고 싶다면 여기로 연락해 주세요.",
            contactTitle: "연락처",
            contactBody: "이메일: vitalspath@gmail.com",
            helpTitle: "도와드릴 수 있는 내용",
            helpItems: ["앱 관련 질문", "계정 또는 구매 관련 질문", "버그 제보", "개인정보 관련 질문", "사용 경험에 대한 피드백"],
            note: "가능하면 기기 모델, iOS 버전, 앱 버전, 문제에 대한 짧은 설명을 함께 보내 주세요.",
            formTitle: "메시지 보내기",
            formIntro: "이 페이지에서 바로 문제, 질문 또는 피드백을 보낼 수도 있습니다.",
        },
        releaseFeatures: {
            title: "출시 기능",
            intro: "이 페이지는 VitalsPath 초기 공개 버전에 포함된 기능을 설명합니다.",
            sections: [
                { title: "약물 및 치료 추적", body: "치료를 만들고 정리하고, 복용량을 계획하며, 각 복용이 복용됨·건너뜀·연기됨인지 기록하고, 약물 재고를 확인하며, 리필 알림으로 준비 상태를 유지할 수 있습니다." },
                { title: "증상, 기분 및 측정값", body: "증상, 기분 기록, 활력징후 및 기타 개인 측정값을 하나의 타임라인에 기록하세요. 더 많은 맥락이 필요할 때 사진과 음성 메모를 추가할 수 있습니다." },
                { title: "일정, 상태 및 후속 작업", body: "일정, 상태, 후속 작업을 같은 곳에 정리해 매일의 건강 정보가 연결되고 다시 보기 쉽게 유지되도록 합니다." },
                { title: "기기 전반의 일상 경험", body: "위젯, Live Activities, Apple Watch 지원을 사용해 하루를 더 빠르게 확인하고 핵심 작업을 완료할 수 있습니다." },
                { title: "개인정보와 의도된 사용", body: "VitalsPath는 개인 정리와 추적을 위해 만들어졌습니다. 의료 서비스, 의료 조언, 진단 또는 치료를 대신하지 않습니다." },
            ],
            note: "이 페이지에는 초기 App Store 출시 버전에서 실제로 제공되는 기능만 포함되어야 합니다.",
        },
        roadmap: {
            title: "로드맵",
            intro: "이 페이지는 향후 VitalsPath 릴리스에 계획된 개선 사항을 설명합니다. 아래 항목은 일정이 보장되지 않으며 제품 발전에 따라 변경될 수 있습니다.",
            nextReleaseTitle: "다음 릴리스 예정 항목",
            nextReleaseItems: ["더 명확한 치료 요약 및 복약 순응도 인사이트", "더 다듬어진 일정 및 후속 작업 흐름", "확장된 위젯 및 Apple Watch 동작", "동기화, 백업, 복원 안정성 향상", "현지화 및 접근성 개선"],
            directionTitle: "제품 방향",
            directionBody: "단기적으로는 약물, 증상, 활력징후, 일정 전반의 일상 추적을 더 명확하고 빠르며 안정적으로 만들고, iPhone, 위젯, Apple Watch 간 일관성을 높이는 데 집중합니다.",
            safetyNote: "이 페이지에 언급된 기능, 시기 및 가용성은 개발이 진행됨에 따라 변경될 수 있습니다. 이는 향후 버전에 대한 보증이 아닙니다.",
        },
        footer: { privacy: "개인정보", support: "지원", releaseFeatures: "출시 기능", roadmap: "로드맵", timeline: "타임라인", terms: "이용약관", disclaimer: "의료 안내", subscription: "구독", legalNote: "VitalsPath는 개인 건강 정리를 위한 용도이며 의료 조언, 진단, 치료 또는 응급 대응을 대체하지 않습니다." },
        timeline: { title: "릴리스 타임라인", subtitle: "VitalsPath의 개발 현황을 확인하세요" },
    },
    ru: {
        meta: {
            title: "VitalsPath | Приватный учет лекарств, симптомов, показателей и визитов",
            description: "Приватный учет лекарств, симптомов, показателей и визитов в понятной хронологии здоровья.",
        },
        nav: { home: "Главная", privacy: "Конфиденциальность", support: "Поддержка", releaseFeatures: "Функции релиза", roadmap: "Дорожная карта", timeline: "Хронология" },
        common: {
            medicalDisclaimer: "VitalsPath предназначена для личной организации здоровья и наблюдения. Она не заменяет медицинские рекомендации, диагностику, лечение или экстренную помощь.",
            appStoreSoon: "Ссылка на App Store появится здесь, как только публичная страница станет доступна.",
            contactSupport: "Связаться с поддержкой",
            emailLabel: "Email",
        },
        home: {
            heroBadge: "ЗАЩИТА ВАЖНОГО",
            heroTitle: "Храните лекарства, симптомы, показатели и визиты в одном приватном месте.",
            heroSubtitle: "VitalsPath помогает организовать лечение, дозы, симптомы, измерения, визиты и задачи наблюдения с понятным дневным обзором, виджетами, Live Activities и поддержкой Apple Watch.",
            primaryCta: "Скачать в App Store",
            secondaryCta: "Посмотреть функции релиза",
            sections: [
                { title: "Все для ежедневного наблюдения", body: "Планируйте лечение и дозы, отмечайте их как принятые, пропущенные или отложенные, проверяйте запас и держите под контролем напоминания о пополнении. Записывайте симптомы, настроение, показатели, фото и голосовые заметки в единой личной хронологии." },
                { title: "Создано для реального повседневного ритма", body: "Используйте виджеты для быстрого обзора, Live Activities для активных моментов приема лекарств и Apple Watch для более быстрых действий в течение дня. Храните визиты, состояния и задачи наблюдения организованно и без потери контекста." },
                { title: "Конфиденциальность по умолчанию", body: "Информация о здоровье должна оставаться понятной, личной и под вашим контролем. VitalsPath создана для личной организации, а не для замены медицинских специалистов." },
            ],
            featureListTitle: "Основные области",
            featureListSubtitle: "Все, что вам нужно, спроектировано с точностью.",
            featureListItems: ["Учет лекарств и доз", "Принятые, пропущенные и отложенные дозы", "Запас и напоминания о пополнении", "Запись симптомов и настроения", "Показатели и измерения", "Фото и голосовые заметки", "Визиты и задачи наблюдения", "Виджеты, Live Activities и Apple Watch"],
            primaryFeatures: ["Контроль лекарств", "Симптомы и показатели"],
            featureTags: [
                ["ЛЕКАРСТВА", "Запас", "Напоминания"],
                ["СИМПТОМЫ", "Показатели", "Хронология"]
            ],
            footnote: "Некоторые функции могут зависеть от устройства, разрешений или плана. Доступность Premium при необходимости ясно показывается внутри приложения.",
            ecosystemLabel: "Экосистема",
            ecosystemTitle: "Интегрированный опыт",
            ecosystemBody: "VitalsPath разработан для бесшовной работы на всех ваших устройствах. Используйте виджеты для мгновенных обновлений, Live Activities для отслеживания текущих доз и Apple Watch для быстрой записи на ходу.",
            ecosystemItems: [
                { title: "Умные виджеты", description: "показатели и лекарства прямо на главном экране." },
                { title: "Apple Watch", description: "быстрая запись и уведомления прямо на запястье." },
                { title: "Live Activities", description: "отслеживание текущих доз в реальном времени." }
            ],
            bentoCards: [
                {
                    badge: "ЛЕКАРСТВА",
                    title: "Контроль лекарств",
                    body: "Планируйте лечение, отмечайте дозы, проверяйте запасы и получайте напоминания.",
                    tags: ["Запасы", "Напоминания", "Расписания"]
                },
                {
                    badge: "СИМПТОМЫ",
                    title: "Записывайте важное",
                    body: "Записывайте симптомы, настроение и показатели. Добавляйте фото и голосовые заметки для контекста.",
                    tags: ["Показатели", "Хронология", "Настроение"]
                },
                {
                    badge: "ВИЗИТЫ",
                    title: "Не пропускайте визиты",
                    body: "Храните информацию о визитах к врачу, задачах наблюдения и вашей истории в порядке.",
                    tags: ["Календарь", "Состояния", "Задачи"]
                },
                {
                    badge: "APPLE WATCH",
                    title: "Быстро на запястье",
                    body: "Используйте Apple Watch для быстрых записей и Live Activities для контроля текущих доз.",
                    tags: ["Live Activities", "Виджеты", "Быстро"]
                }
            ],
            ctaBadge: "НАЧАТЬ СЕГОДНЯ",
            ctaTitle: "Ваше здоровье в ваших руках и под защитой",
            ctaPrivacyDetail: "Абсолютная приватность со сквозным шифрованием.",
            ctaPremiumTitle: "ПРЕМИУМ-УХОД",
            ctaPremiumDetail: "Разработано для хронических пациентов и опекунов.",
            ctaCommunityTitle: "СООБЩЕСТВО",
            ctaCommunityDetail: "активных пользователей доверяют нам",
        },
        privacy: {
            title: "Политика конфиденциальности",
            intro: "Эта политика объясняет, какие данные может обрабатывать VitalsPath, как они используются внутри приложения и как пользователи могут связаться с нами по вопросам конфиденциальности.",
            sections: [
                { title: "Информация, которую вы сами записываете", body: "В зависимости от того, как вы используете приложение, VitalsPath может обрабатывать информацию о лекарствах, расписаниях, симптомах, настроении, показателях, измерениях, визитах, задачах, фотографиях, голосовых заметках и данных профиля, которые вы добавляете." },
                { title: "Разрешения", body: "Приложение может запрашивать разрешения, напрямую связанные с выбранными вами функциями, включая уведомления, данные здоровья, микрофон, фото, камеру, контакты, календарь, напоминания и местоположение. Эти разрешения используются для поддержки соответствующих функций приложения и управляются пользователем." },
                { title: "Использование информации", body: "Информация, обрабатываемая VitalsPath, используется для поддержки функций личной организации здоровья, таких как планирование лечения, ежедневное наблюдение, напоминания, измерения, визиты, виджеты и другие выбранные пользователем функции." },
                { title: "Медицинское предупреждение", body: "VitalsPath не является медицинским устройством и не предназначена для диагностики, лечения, излечения или профилактики заболеваний. Она не заменяет медицинские рекомендации, диагностику, лечение или экстренную помощь." },
                { title: "Контакт", body: "Если у вас есть вопросы о конфиденциальности или обработке данных, свяжитесь с нами через страницу поддержки." },
            ],
        },
        support: {
            title: "Поддержка",
            intro: "Если вам нужна помощь с VitalsPath, есть вопросы по приложению или вы хотите сообщить о проблеме, свяжитесь с нами здесь.",
            contactTitle: "Контакт",
            contactBody: "Email: vitalspath@gmail.com",
            helpTitle: "Чем мы можем помочь",
            helpItems: ["Вопросы по приложению", "Вопросы по аккаунту или покупкам", "Сообщения об ошибках", "Вопросы о конфиденциальности", "Отзывы об опыте использования"],
            note: "По возможности укажите модель устройства, версию iOS, версию приложения и краткое описание проблемы.",
            formTitle: "Отправить сообщение",
            formIntro: "Вы также можете отправить проблему, вопрос или отзыв прямо с этой страницы.",
        },
        releaseFeatures: {
            title: "Функции релиза",
            intro: "На этой странице описаны функции, включенные в первую публичную версию VitalsPath.",
            sections: [
                { title: "Наблюдение за лекарствами и лечением", body: "Создавайте и организуйте схемы лечения, планируйте дозы, отмечайте, была ли каждая доза принята, пропущена или отложена, проверяйте запас лекарств и используйте напоминания о пополнении." },
                { title: "Симптомы, настроение и измерения", body: "Записывайте симптомы, настроение, показатели и другие личные измерения в единой хронологии. Добавляйте фото и голосовые заметки, когда нужен дополнительный контекст." },
                { title: "Визиты, состояния и задачи наблюдения", body: "Держите визиты, состояния и задачи наблюдения в одном месте, чтобы ежедневная информация о здоровье оставалась связной и удобной для просмотра." },
                { title: "Ежедневный опыт на разных устройствах", body: "Используйте виджеты, Live Activities и поддержку Apple Watch, чтобы быстрее просматривать день и выполнять ключевые действия." },
                { title: "Конфиденциальность и предполагаемое использование", body: "VitalsPath создана для личной организации и наблюдения. Она не заменяет медицинскую помощь, медицинские рекомендации, диагностику или лечение." },
            ],
            note: "На этой странице должны быть только функции, доступные в первой версии приложения в App Store.",
        },
        roadmap: {
            title: "Дорожная карта",
            intro: "Эта страница описывает улучшения, запланированные для будущих версий VitalsPath. Перечисленные пункты не гарантируют сроки и могут меняться по мере развития продукта.",
            nextReleaseTitle: "Запланировано для следующей версии",
            nextReleaseItems: ["Более понятные сводки лечения и инсайты по соблюдению режима", "Более проработанные сценарии визитов и задач наблюдения", "Расширенные действия в виджетах и на Apple Watch", "Повышение надежности синхронизации, резервного копирования и восстановления", "Улучшения локализации и доступности"],
            directionTitle: "Направление продукта",
            directionBody: "Краткосрочная цель — сделать ежедневное наблюдение за лекарствами, симптомами, показателями и визитами более понятным, быстрым и надежным, одновременно улучшая согласованность между iPhone, виджетами и Apple Watch.",
            safetyNote: "Упомянутые на этой странице функции, сроки и доступность могут изменяться по мере развития продукта. Это не является гарантией для будущих версий.",
        },
        footer: { privacy: "Конфиденциальность", support: "Поддержка", releaseFeatures: "Функции релиза", roadmap: "Дорожная карта", timeline: "Хронология", terms: "Условия", disclaimer: "Медицинское предупреждение", subscription: "Подписка", legalNote: "VitalsPath предназначена только для личной организации здоровья и не заменяет медицинские рекомендации, диагностику, лечение или экстренную помощь." },
        timeline: { title: "Хронология выпусков", subtitle: "Следите за развитием VitalsPath" },
    },
    ar: {
        meta: {
            title: "VitalsPath | تتبع خاص للأدوية والأعراض والمؤشرات الحيوية والمواعيد",
            description: "تتبع خاص للأدوية والأعراض والمؤشرات الحيوية والمواعيد ضمن خط زمني صحي واضح.",
        },
        nav: { home: "الرئيسية", privacy: "الخصوصية", support: "الدعم", releaseFeatures: "ميزات الإطلاق", roadmap: "خارطة الطريق", timeline: "الخط الزمني" },
        common: {
            medicalDisclaimer: "تم تصميم VitalsPath لتنظيم الصحة الشخصي والمتابعة فقط. وهي لا تحل محل المشورة الطبية أو التشخيص أو العلاج أو رعاية الطوارئ.",
            appStoreSoon: "سيظهر رابط App Store هنا بمجرد توفر الصفحة العامة.",
            contactSupport: "التواصل مع الدعم",
            emailLabel: "البريد الإلكتروني",
        },
        home: {
            heroBadge: "حماية ما يهم",
            heroTitle: "احتفظ بالأدوية والأعراض والمؤشرات الحيوية والمواعيد في مكان خاص واحد.",
            heroSubtitle: "تساعدك VitalsPath على تنظيم العلاجات والجرعات والأعراض والقياسات والمواعيد ومهام المتابعة من خلال عرض يومي واضح، مع الأدوات وLive Activities ودعم Apple Watch.",
            primaryCta: "التنزيل من App Store",
            secondaryCta: "عرض ميزات الإطلاق",
            sections: [
                { title: "كل ما تحتاجه للمتابعة اليومية", body: "خطط للعلاجات والجرعات، وسجّلها كمأخوذة أو متجاوزة أو مؤجلة، وراجع المخزون، وأبقِ تذكيرات إعادة التعبئة تحت السيطرة. سجّل الأعراض والمزاج والمؤشرات الحيوية والصور والملاحظات الصوتية ضمن خط زمني شخصي واحد." },
                { title: "مصممة لروتين الحياة الحقيقي", body: "استخدم الأدوات للحصول على رؤية سريعة، وLive Activities خلال لحظات الدواء النشطة، وApple Watch لتنفيذ الإجراءات بشكل أسرع خلال اليوم. حافظ على تنظيم المواعيد والحالات ومهام المتابعة دون فقدان السياق." },
                { title: "الخصوصية جزء من التصميم", body: "يجب أن تبقى معلوماتك الصحية واضحة وشخصية وتحت سيطرتك. تم تصميم VitalsPath لدعم التنظيم الشخصي، وليس لاستبدال المختصين الصحيين." },
            ],
            featureListTitle: "المجالات الأساسية",
            featureListSubtitle: "كل ما تحتاجه، مصمم بدقة.",
            featureListItems: ["تتبع الأدوية والجرعات", "الجرعات المأخوذة والمتجاوزة والمؤجلة", "المخزون وتذكيرات إعادة التعبئة", "تسجيل الأعراض والمزاج", "المؤشرات الحيوية والقياسات", "الصور والملاحظات الصوتية", "المواعيد ومهام المتابعة", "الأدوات وLive Activities وApple Watch"],
            primaryFeatures: ["أتقن أدويتك", "تتبع الأعراض والمؤشرات"],
            featureTags: [
                ["دواء", "مخزون", "تذكير"],
                ["أعراض", "مؤشرات", "جدول"]
            ],
            footnote: "قد تعتمد بعض الميزات على جهازك أو الأذونات أو الخطة. يتم توضيح توفر Premium داخل التطبيق بوضوح عند الحاجة.",
            ecosystemLabel: "النظام المتكامل",
            ecosystemTitle: "تجربة متكاملة",
            ecosystemBody: "تم تصميم VitalsPath ليعمل بسلاسة عبر أجهزتك. استخدم الأدوات (Widgets) للتحديثات الفورية، والأنشطة الحية (Live Activities) لتتبع الجرعات النشطة، وApple Watch للتسجيل السريع أثناء التنقل.",
            ecosystemItems: [
                { title: "أدوات ذكية", description: "المؤشرات والأدوية مباشرة على شاشتك الرئيسية." },
                { title: "Apple Watch", description: "تسجيل سريع وتنبيهات مباشرة على معصمك." },
                { title: "الأنشطة الحية", description: "تتبع الجرعات النشطة في الوقت الفعلي." }
            ],
            bentoCards: [
                {
                    badge: "الأدوية",
                    title: "أتقن أدويتك",
                    body: "خطط للعلاجات وسجل الجرعات وراجع المخزون واحصل على تذكيرات.",
                    tags: ["مخزون", "تذكير", "جداول"]
                },
                {
                    badge: "الأعراض",
                    title: "تتبع ما يهم",
                    body: "سجل الأعراض والمزاج والمؤشرات الحيوية. أضف الصور والملاحظات الصوتية لتوفير السياق.",
                    tags: ["مؤشرات", "جدول", "مزاج"]
                },
                {
                    badge: "المواعيد",
                    title: "لا تفوت أي زيارة",
                    body: "حافظ على تنظيم زيارات الطبيب ومهام المتابعة وسجلك الطبي.",
                    tags: ["تقويم", "حالات", "مهام"]
                },
                {
                    badge: "APPLE WATCH",
                    title: "سرعة على معصمك",
                    body: "استخدم Apple Watch للتسجيل السريع والأنشطة الحية لمتابعة الجرعات النشطة.",
                    tags: ["أنشطة حية", "أدوات", "سريع"]
                }
            ],
            ctaBadge: "ابدأ اليوم",
            ctaTitle: "صحتك بين يديك وبخصوصية تامة",
            ctaPrivacyDetail: "خصوصية مطلقة مع تشفير من طرف إلى طرف.",
            ctaPremiumTitle: "عناية بريميوم",
            ctaPremiumDetail: "مصمم للمرضى المزمنين ومقدمي الرعاية.",
            ctaCommunityTitle: "المجتمع",
            ctaCommunityDetail: "مستخدم نشط يثقون بنا",
        },
        privacy: {
            title: "سياسة الخصوصية",
            intro: "توضح هذه السياسة ما هي المعلومات التي قد تتعامل معها VitalsPath، وكيف تُستخدم داخل التطبيق، وكيف يمكن للمستخدمين التواصل معنا بخصوص أسئلة الخصوصية.",
            sections: [
                { title: "المعلومات التي تختار تسجيلها", body: "بحسب طريقة استخدامك للتطبيق، قد تتعامل VitalsPath مع معلومات مثل الأدوية والجداول والأعراض وإدخالات المزاج والمؤشرات الحيوية والقياسات والمواعيد والمهام والصور والملاحظات الصوتية وتفاصيل الملف الشخصي التي تختار إضافتها." },
                { title: "الأذونات", body: "قد يطلب التطبيق أذونات مرتبطة مباشرة بالميزات التي تختار استخدامها، بما في ذلك الإشعارات وبيانات الصحة والميكروفون والصور والكاميرا وجهات الاتصال والتقويم والتذكيرات والموقع. تُستخدم هذه الأذونات لدعم الوظائف المقابلة داخل التطبيق ويمكن للمستخدم إدارتها." },
                { title: "استخدام المعلومات", body: "تُستخدم المعلومات التي تتعامل معها VitalsPath لدعم ميزات تنظيم الصحة الشخصي مثل تخطيط العلاج والمتابعة اليومية والتذكيرات والقياسات والمواعيد والأدوات وغيرها من الوظائف التي يختارها المستخدم." },
                { title: "إخلاء مسؤولية طبي", body: "VitalsPath ليست جهازاً طبياً وليست مخصصة لتشخيص أي مرض أو علاجه أو الشفاء منه أو الوقاية منه. وهي لا تحل محل المشورة الطبية أو التشخيص أو العلاج أو المساعدة الطارئة." },
                { title: "التواصل", body: "إذا كانت لديك أسئلة حول الخصوصية أو التعامل مع البيانات، فتواصل معنا عبر صفحة الدعم." },
            ],
        },
        support: {
            title: "الدعم",
            intro: "إذا كنت بحاجة إلى مساعدة بخصوص VitalsPath أو لديك أسئلة حول التطبيق أو تريد الإبلاغ عن مشكلة، فتواصل معنا هنا.",
            contactTitle: "التواصل",
            contactBody: "البريد الإلكتروني: vitalspath@gmail.com",
            helpTitle: "يمكننا المساعدة في",
            helpItems: ["أسئلة حول التطبيق", "أسئلة حول الحساب أو المشتريات", "بلاغات الأخطاء", "أسئلة الخصوصية", "ملاحظات حول التجربة"],
            note: "عند الإمكان، أرفق طراز جهازك وإصدار iOS وإصدار التطبيق ووصفاً مختصراً للمشكلة.",
            formTitle: "إرسال رسالة",
            formIntro: "يمكنك أيضاً إرسال المشكلة أو السؤال أو الملاحظة مباشرة من هذه الصفحة.",
        },
        releaseFeatures: {
            title: "ميزات الإطلاق",
            intro: "تصف هذه الصفحة الميزات المضمنة في الإصدار العام الأول من VitalsPath.",
            sections: [
                { title: "متابعة الأدوية والعلاجات", body: "أنشئ العلاجات ونظّمها، وخطط الجرعات، وسجّل ما إذا كانت كل جرعة قد أُخذت أو تم تجاوزها أو تأجيلها، وراجع مخزون الأدوية، واستخدم تذكيرات إعادة التعبئة للبقاء مستعداً." },
                { title: "الأعراض والمزاج والقياسات", body: "سجّل الأعراض وإدخالات المزاج والمؤشرات الحيوية وغيرها من القياسات الشخصية في خط زمني واحد. أضف الصور والملاحظات الصوتية عندما تساعد على حفظ المزيد من السياق." },
                { title: "المواعيد والحالات ومهام المتابعة", body: "حافظ على تنظيم المواعيد والحالات ومهام المتابعة في المكان نفسه حتى تبقى معلوماتك الصحية اليومية مترابطة وسهلة المراجعة." },
                { title: "تجربة يومية عبر الأجهزة", body: "استخدم الأدوات وLive Activities ودعم Apple Watch لمراجعة يومك وإكمال الإجراءات الأساسية بسرعة أكبر." },
                { title: "الخصوصية والاستخدام المقصود", body: "تم إنشاء VitalsPath للتنظيم الشخصي والمتابعة. وهي لا تحل محل الرعاية الطبية أو المشورة الطبية أو التشخيص أو العلاج." },
            ],
            note: "يجب أن تظهر في هذه الصفحة فقط الميزات المتاحة في الإصدار الأول على App Store.",
        },
        roadmap: {
            title: "خارطة الطريق",
            intro: "توضح هذه الصفحة التحسينات المخطط لها للإصدارات القادمة من VitalsPath. العناصر أدناه ليست ضماناً للتوقيت وقد تتغير مع تطور المنتج.",
            nextReleaseTitle: "مخطط للإصدار التالي",
            nextReleaseItems: ["ملخصات علاج أوضح ورؤى أفضل للالتزام", "تدفقات أكثر صقلاً للمواعيد والمتابعة", "توسيع الإجراءات في الأدوات وApple Watch", "تحسينات موثوقية للمزامنة والنسخ الاحتياطي والاستعادة", "تحسينات في الترجمة وإمكانية الوصول"],
            directionTitle: "اتجاه المنتج",
            directionBody: "التركيز على المدى القصير هو جعل المتابعة اليومية للأدوية والأعراض والمؤشرات الحيوية والمواعيد أوضح وأسرع وأكثر موثوقية، مع تحسين الاتساق بين iPhone والأدوات وApple Watch.",
            safetyNote: "الميزات والمواعيد والتوافر المذكور في هذه الصفحة عرضة للتغيير مع تقدم التطوير. هذا ليس ضمانًا للإصدارات المستقبلية.",
        },
        footer: { privacy: "الخصوصية", support: "الدعم", releaseFeatures: "ميزات الإطلاق", roadmap: "خارطة الطريق", timeline: "الخط الزمني", terms: "الشروط", disclaimer: "إخلاء طبي", subscription: "الاشتراك", legalNote: "VitalsPath مخصصة لتنظيم الصحة الشخصي فقط ولا تحل محل المشورة الطبية أو التشخيص أو العلاج أو رعاية الطوارئ." },
        timeline: { title: "خط روي الإصدارات", subtitle: "تابع تطور VitalsPath" },
    },
    hi: {
        meta: {
            title: "VitalsPath | दवाओं, लक्षणों, वाइटल्स और अपॉइंटमेंट्स का निजी ट्रैकिंग",
            description: "दवाओं, लक्षणों, वाइटल्स और अपॉइंटमेंट्स को एक स्पष्ट हेल्थ टाइमलाइन में निजी रूप से ट्रैक करें।",
        },
        nav: { home: "होम", privacy: "प्राइवेसी", support: "सपोर्ट", releaseFeatures: "रिलीज़ फीचर्स", roadmap: "रोडमैप", timeline: "टाइमलाइन" },
        common: {
            medicalDisclaimer: "VitalsPath व्यक्तिगत हेल्थ ऑर्गनाइज़ेशन और फॉलो-अप के लिए बनाई गई है। यह मेडिकल सलाह, निदान, इलाज या इमरजेंसी केयर का विकल्प नहीं है।",
            appStoreSoon: "जैसे ही सार्वजनिक App Store सूची उपलब्ध होगी, उसका लिंक यहाँ दिखेगा।",
            contactSupport: "सपोर्ट से संपर्क करें",
            emailLabel: "ईमेल",
        },
        home: {
            heroBadge: "जो महत्वपूर्ण है उसकी सुरक्षा",
            heroTitle: "दवाओं, लक्षणों, वाइटल्स और अपॉइंटमेंट्स को एक निजी जगह में रखें।",
            heroSubtitle: "VitalsPath आपको ट्रीटमेंट, डोज़, लक्षण, माप, अपॉइंटमेंट्स और फॉलो-अप टास्क को एक स्पष्ट दैनिक दृश्य, विजेट्स, Live Activities और Apple Watch सपोर्ट के साथ व्यवस्थित करने में मदद करती है।",
            primaryCta: "App Store पर डाउनलोड करें",
            secondaryCta: "रिलीज़ फीचर्स देखें",
            sections: [
                { title: "रोज़मर्रा के फॉलो-अप के लिए ज़रूरी सब कुछ", body: "ट्रीटमेंट और डोज़ प्लान करें, उन्हें लिया गया, छोड़ा गया या टाला गया के रूप में मार्क करें, स्टॉक देखें और रीफिल रिमाइंडर्स को नियंत्रण में रखें। लक्षण, मूड, वाइटल्स, फोटो और वॉइस नोट्स को एक ही निजी टाइमलाइन में दर्ज करें।" },
                { title: "वास्तविक दैनिक दिनचर्या के लिए बनाई गई", body: "तेज़ दृश्यता के लिए विजेट्स, सक्रिय दवा क्षणों के लिए Live Activities और दिन भर तेज़ कार्रवाइयों के लिए Apple Watch का उपयोग करें। अपॉइंटमेंट्स, स्थितियाँ और फॉलो-अप टास्क को संदर्भ खोए बिना व्यवस्थित रखें।" },
                { title: "डिज़ाइन से ही निजी", body: "आपकी हेल्थ जानकारी स्पष्ट, व्यक्तिगत और आपके नियंत्रण में रहनी चाहिए। VitalsPath व्यक्तिगत संगठन के लिए बनाई गई है, हेल्थकेयर प्रोफेशनल्स का विकल्प बनने के लिए नहीं।" },
            ],
            featureListTitle: "मुख्य क्षेत्र",
            featureListSubtitle: "वह सब कुछ जो आपको चाहिए, सटीकता से बनाया गया।",
            featureListItems: ["दवा और डोज़ ट्रैकिंग", "ली गई, छोड़ी गई और टाली गई डोज़", "स्टॉक और रीफिल रिमाइंडर्स", "लक्षण और मूड लॉगिंग", "वाइटल्स और माप", "फोटो और वॉइस नोट्स", "अपॉइंटमेंट्स और फॉलो-अप टास्क", "विजेट्स, Live Activities और Apple Watch"],
            primaryFeatures: ["दवाओं पर नियंत्रण", "लक्षण और वाइटल्स"],
            featureTags: [
                ["दवा", "इन्वेंट्री", "रिमाइंडर"],
                ["लक्षण", "वाइटल्स", "टाइमलाइन"]
            ],
            footnote: "कुछ फीचर्स आपके डिवाइस, परमिशन्स या प्लान पर निर्भर हो सकते हैं। जहाँ लागू हो, Premium की उपलब्धता ऐप के अंदर स्पष्ट रूप से दिखाई जाती है।",
            ecosystemLabel: "इकोसिस्टम",
            ecosystemTitle: "एकीकृत अनुभव",
            ecosystemBody: "VitalsPath आपके सभी डिवाइस पर आसानी से काम करने के लिए डिज़ाइन किया गया है। तुरंत अपडेट के लिए विजेट्स, एक्टिव डोज़ को ट्रैक करने के लिए लाइव एक्टिविटीज़ और चलते-फिरते तुरंत लॉगिंग के लिए Apple Watch का उपयोग करें।",
            ecosystemItems: [
                { title: "स्मार्ट विजेट्स", description: "स्वास्थ्य संकेतक और दवाएं सीधे आपकी होम स्क्रीन पर।" },
                { title: "Apple Watch", description: "आपकी कलाई से तेज़ लॉगिंग और अलर्ट।" },
                { title: "लाइव एक्टिविटीज़", description: "एक्टिव डोज़ की रियल-टाइम ट्रैकिंग।" }
            ],
            bentoCards: [
                {
                    badge: "दवाएं",
                    title: "अपनी दवाओं में महारत हासिल करें",
                    body: "इलाज की योजना बनाएं, डोज़ लॉग करें, स्टॉक देखें और रिमाइंडर पाएं।",
                    tags: ["स्टॉक", "रिमाइंडर", "शेड्यूल"]
                },
                {
                    badge: "लक्षण",
                    title: "जो महत्वपूर्ण है उसे ट्रैक करें",
                    body: "लक्षणों, मूड और वाइटल्स को लॉग करें। अधिक संदर्भ के लिए तस्वीरें और ऑडियो जोड़ें।",
                    tags: ["वाइटल्स", "शेड्यूल", "मूड"]
                },
                {
                    badge: "स्वास्थ्य",
                    title: "आपकी स्वास्थ्य प्रगति",
                    body: "महत्वपूर्ण पैटर्न खोजने के लिए अपनी गतिविधि, मूड और वाइटल्स के रुझान देखें।",
                    tags: ["रुझान", "सारांश", "इनसाइट्स"]
                },
                {
                    badge: "अपॉइंटमेंट्स",
                    title: "कोई भी जांच न छोड़ें",
                    body: "अपनी डॉक्टर विजिट और फॉलो-अप टास्क को व्यवस्थित रखें।",
                    tags: ["कैलेंडर", "कंडीशंस", "टास्क"]
                },
                {
                    badge: "विजेट्स",
                    title: "एक नज़र में स्वास्थ्य",
                    body: "सुरुचिपूर्ण और कार्यात्मक विजेट्स के साथ सीधे अपनी होम स्क्रीन से रिमाइंडर्स एक्सेस करें।",
                    tags: ["होम स्क्रीन", "iOS 18", "कस्टमाइज़ेबल"]
                },
                {
                    badge: "APPLE WATCH",
                    title: "आपकी कलाई पर गति",
                    body: "तेज लॉगिंग के लिए Apple Watch का उपयोग करें और एक्टिव डोज़ के लिए Live Activities ट्रैक करें।",
                    tags: ["Live Activities", "विजेट्स", "तेज़"]
                }
            ],
            ctaBadge: "आज ही शुरू करें",
            ctaTitle: "आपका स्वास्थ्य, आपके हाथों में और निजी",
            ctaPrivacyDetail: "एंड-टू-एंड एन्क्रिप्शन के साथ पूर्ण गोपनीयता।",
            ctaPremiumTitle: "प्रीमियम देखभाल",
            ctaPremiumDetail: "पुरानी बीमारियों वाले मरीजों और देखभाल करने वालों के लिए डिज़ाइन किया गया।",
            ctaCommunityTitle: "कम्युनिटी",
            ctaCommunityDetail: "सक्रिय उपयोगकर्ता हम पर भरोसा करते हैं",
        },
        privacy: {
            title: "प्राइवेसी पॉलिसी",
            intro: "यह पॉलिसी बताती है कि VitalsPath कौन-सी जानकारी संभाल सकती है, वह ऐप के अंदर कैसे उपयोग होती है, और प्राइवेसी से जुड़े सवालों के लिए उपयोगकर्ता हमसे कैसे संपर्क कर सकते हैं।",
            sections: [
                { title: "वह जानकारी जिसे आप रिकॉर्ड करना चुनते हैं", body: "आप ऐप का जैसा उपयोग करते हैं, उसके अनुसार VitalsPath दवाओं, शेड्यूल, लक्षणों, मूड एंट्रीज़, वाइटल्स, माप, अपॉइंटमेंट्स, टास्क, फोटो, वॉइस नोट्स और प्रोफ़ाइल विवरण जैसी जानकारी संभाल सकती है जिन्हें आप जोड़ते हैं।" },
                { title: "परमिशन्स", body: "ऐप उन फीचर्स से सीधे जुड़ी परमिशन्स माँग सकती है जिन्हें आप उपयोग करना चुनते हैं, जिनमें नोटिफिकेशन्स, हेल्थ डेटा, माइक्रोफ़ोन, फोटो, कैमरा, कॉन्टैक्ट्स, कैलेंडर, रिमाइंडर्स और लोकेशन शामिल हैं। ये परमिशन्स संबंधित ऐप फीचर्स को सपोर्ट करने के लिए उपयोग होती हैं और उपयोगकर्ता इन्हें मैनेज कर सकता है।" },
                { title: "जानकारी का उपयोग", body: "VitalsPath द्वारा संभाली गई जानकारी का उपयोग व्यक्तिगत हेल्थ ऑर्गनाइज़ेशन फीचर्स जैसे ट्रीटमेंट प्लानिंग, दैनिक फॉलो-अप, रिमाइंडर्स, माप, अपॉइंटमेंट्स, विजेट्स और उपयोगकर्ता द्वारा चुने गए संबंधित कार्यों के लिए किया जाता है।" },
                { title: "मेडिकल डिस्क्लेमर", body: "VitalsPath कोई मेडिकल डिवाइस नहीं है और किसी बीमारी का निदान, इलाज, उपचार या रोकथाम करने के लिए नहीं बनाई गई है। यह मेडिकल सलाह, निदान, इलाज या इमरजेंसी सहायता का विकल्प नहीं है।" },
                { title: "संपर्क", body: "यदि आपके पास प्राइवेसी या डेटा हैंडलिंग से जुड़े सवाल हैं, तो सपोर्ट पेज के माध्यम से हमसे संपर्क करें।" },
            ],
        },
        support: {
            title: "सपोर्ट",
            intro: "यदि आपको VitalsPath के साथ मदद चाहिए, ऐप के बारे में सवाल हैं, या आप कोई समस्या रिपोर्ट करना चाहते हैं, तो यहाँ संपर्क करें।",
            contactTitle: "संपर्क",
            contactBody: "ईमेल: vitalspath@gmail.com",
            helpTitle: "हम इन बातों में मदद कर सकते हैं",
            helpItems: ["ऐप से जुड़े सवाल", "अकाउंट या खरीद से जुड़े सवाल", "बग रिपोर्ट", "प्राइवेसी से जुड़े सवाल", "अनुभव पर फीडबैक"],
            note: "जहाँ संभव हो, अपने डिवाइस मॉडल, iOS वर्ज़न, ऐप वर्ज़न और समस्या का छोटा विवरण शामिल करें।",
            formTitle: "संदेश भेजें",
            formIntro: "आप इस पेज से सीधे अपनी समस्या, सवाल या फीडबैक भी भेज सकते हैं।",
        },
        releaseFeatures: {
            title: "रिलीज़ फीचर्स",
            intro: "यह पेज VitalsPath की शुरुआती सार्वजनिक रिलीज़ में शामिल फीचर्स का वर्णन करता है।",
            sections: [
                { title: "दवाओं और ट्रीटमेंट का फॉलो-अप", body: "ट्रीटमेंट बनाइए और व्यवस्थित कीजिए, डोज़ प्लान कीजिए, हर डोज़ को लिया गया, छोड़ा गया या टाला गया के रूप में रिकॉर्ड कीजिए, दवा स्टॉक देखिए और रीफिल रिमाइंडर्स का उपयोग कीजिए।" },
                { title: "लक्षण, मूड और माप", body: "लक्षण, मूड एंट्रीज़, वाइटल्स और अन्य व्यक्तिगत मापों को एक ही टाइमलाइन में लॉग करें। जहाँ अधिक संदर्भ उपयोगी हो, वहाँ फोटो और वॉइस नोट्स जोड़ें।" },
                { title: "अपॉइंटमेंट्स, स्थितियाँ और फॉलो-अप टास्क", body: "अपॉइंटमेंट्स, स्थितियाँ और फॉलो-अप टास्क को एक ही जगह व्यवस्थित रखें ताकि आपकी दैनिक हेल्थ जानकारी जुड़ी रहे और आसानी से देखी जा सके।" },
                { title: "डिवाइसों के बीच दैनिक अनुभव", body: "अपने दिन को देखने और मुख्य कार्य जल्दी पूरा करने के लिए विजेट्स, Live Activities और Apple Watch सपोर्ट का उपयोग करें।" },
                { title: "प्राइवेसी और उद्देश्य", body: "VitalsPath व्यक्तिगत संगठन और फॉलो-अप के लिए बनाई गई है। यह मेडिकल केयर, मेडिकल सलाह, निदान या इलाज का विकल्प नहीं है।" },
            ],
            note: "इस पेज पर केवल वे फीचर्स होने चाहिए जो शुरुआती App Store रिलीज़ में वास्तव में उपलब्ध हों।",
        },
        roadmap: {
            title: "रोडमैप",
            intro: "यह पेज VitalsPath के आने वाले रिलीज़ों के लिए योजनाबद्ध सुधारों का सार देता है। नीचे दिए गए बिंदु समय की गारंटी नहीं हैं और प्रोडक्ट के विकसित होने के साथ बदल सकते हैं।",
            nextReleaseTitle: "अगले रिलीज़ के लिए योजनाबद्ध",
            nextReleaseItems: ["अधिक स्पष्ट ट्रीटमेंट समरी और adherence insights", "अपॉइंटमेंट और फॉलो-अप वर्कफ़्लो का बेहतर परिष्कार", "विजेट्स और Apple Watch में अधिक एक्शन", "सिंक, बैकअप और रिस्टोर की विश्वसनीयता में सुधार", "लोकलाइज़ेशन और एक्सेसिबिलिटी में सुधार"],
            directionTitle: "प्रोडक्ट दिशा",
            directionBody: "कम अवधि का ध्यान दवाओं, लक्षणों, वाइटल्स और अपॉइंटमेंट्स के दैनिक फॉलो-अप को अधिक स्पष्ट, तेज़ और विश्वसनीय बनाना है, साथ ही iPhone, विजेट्स और Apple Watch के बीच एकरूपता सुधारना है।",
            safetyNote: "इस पेज पर बताए गए फीचर्स, टाइमलाइन और उपलब्धता विकास आगे बढ़ने के साथ बदल सकते हैं। यह भविष्य के रिलीज़ के लिए गारंटी नहीं है।",
        },
        footer: { privacy: "प्राइवेसी पॉलिसी", support: "सपोर्ट", releaseFeatures: "रिलीज़ फीचर्स", roadmap: "रोडमैप", timeline: "टाइमलाइन", terms: "शर्तें", disclaimer: "मेडिकल डिस्क्लेमर", subscription: "सब्सक्रिप्शन", legalNote: "VitalsPath केवल व्यक्तिगत हेल्थ ऑर्गनाइज़ेशन के लिए है और मेडिकल सलाह, निदान, इलाज या इमरजेंसी केयर का विकल्प नहीं है।" },
        timeline: { title: "रिलीज़ टाइमलाइन", subtitle: "VitalsPath के विकास का अनुसरण करें" },
    },
    tr: {
        meta: {
            title: "VitalsPath | İlaç, semptom, vital ve randevu takibi için özel alan",
            description: "İlaçları, semptomları, vital ölçümleri ve randevuları net bir sağlık zaman çizelgesinde özel olarak takip edin.",
        },
        nav: { home: "Ana Sayfa", privacy: "Gizlilik", support: "Destek", releaseFeatures: "Çıkış Özellikleri", roadmap: "Yol Haritası", timeline: "Zaman Çizelgesi" },
        common: {
            medicalDisclaimer: "VitalsPath kişisel sağlık organizasyonu ve takip için tasarlanmıştır. Tıbbi tavsiye, teşhis, tedavi veya acil yardımın yerine geçmez.",
            appStoreSoon: "Genel App Store sayfası yayına girer girmez bağlantı burada görünecek.",
            contactSupport: "Destekle iletişime geç",
            emailLabel: "E-posta",
        },
        home: {
            heroBadge: "ÖNEMLİ OLANI KORUMAK",
            heroTitle: "İlaçları, semptomları, vital ölçümleri ve randevuları tek bir özel yerde tutun.",
            heroSubtitle: "VitalsPath; tedavileri, dozları, semptomları, ölçümleri, randevuları ve takip görevlerini net bir günlük görünüm, widget'lar, Live Activities ve Apple Watch desteğiyle düzenlemenize yardımcı olur.",
            primaryCta: "App Store’dan indir",
            secondaryCta: "Çıkış özelliklerini gör",
            sections: [
                { title: "Günlük takip için ihtiyaç duyduğunuz her şey", body: "Tedavileri ve dozları planlayın, alındı, atlandı veya ertelendi olarak işaretleyin, stok durumunu inceleyin ve yeniden doldurma hatırlatmalarını kontrol altında tutun. Semptomları, ruh halini, vital ölçümleri, fotoğrafları ve sesli notları tek bir kişisel zaman çizelgesinde toplayın." },
                { title: "Gerçek günlük rutinler için geliştirildi", body: "Hızlı görünürlük için widget'ları, aktif ilaç anları için Live Activities'i ve gün içinde daha hızlı işlemler için Apple Watch'u kullanın. Randevuları, durumları ve takip görevlerini bağlamı kaybetmeden düzenli tutun." },
                { title: "Tasarım gereği gizli", body: "Sağlık bilgileriniz açık, kişisel ve sizin kontrolünüzde olmalıdır. VitalsPath, kişisel organizasyonu desteklemek için geliştirilmiştir; sağlık profesyonellerinin yerini almak için değil." },
            ],
            featureListTitle: "Temel alanlar",
            featureListSubtitle: "İhtiyacınız olan her şey, hassasiyetle tasarlandı.",
            featureListItems: ["İlaç ve doz takibi", "Alınan, atlanan ve ertelenen dozlar", "Stok ve yeniden doldurma hatırlatmaları", "Semptom ve ruh hali kaydı", "Vital ölçümler ve diğer ölçümler", "Fotoğraflar ve sesli notlar", "Randevular ve takip görevleri", "Widget'lar, Live Activities ve Apple Watch"],
            primaryFeatures: ["İlaçlarınıza hakim olun", "Semptom ve vitalleri takip edin"],
            featureTags: [
                ["İLAÇ", "Stok", "Hatırlatıcı"],
                ["SEMPTOM", "Vital", "Zaman Çizelgesi"]
            ],
            footnote: "Bazı özellikler cihazınıza, izinlere veya planınıza bağlı olabilir. Premium uygunluğu gerektiğinde uygulama içinde açıkça gösterilir.",
            ecosystemLabel: "Ekosistem",
            ecosystemTitle: "Entegre deneyim",
            ecosystemBody: "VitalsPath, cihazlarınız arasında sorunsuz çalışacak şekilde tasarlanmıştır. Anlık güncellemeler için araç takımlarını, aktif dozları takip etmek için Canlı Etkinlikleri ve hareket halindeyken hızlı kayıt için Apple Watch'u kullanın.",
            ecosystemItems: [
                { title: "Akıllı Araç Takımları", description: "Veriler ve ilaçlar doğrudan ana ekranınızda." },
                { title: "Apple Watch", description: "Bileğinizden hızlı kayıt ve uyarılar." },
                { title: "Canlı Etkinlikler", description: "Aktif dozların gerçek zamanlı takibi." }
            ],
            bentoCards: [
                {
                    badge: "İLAÇLAR",
                    title: "İlaçlarınıza hakim olun",
                    body: "Tedavileri planlayın, dozları kaydedin, stoku gözden geçirin ve hatırlatıcılar alın.",
                    tags: ["Stok", "Hatırlatıcılar", "Programlar"]
                },
                {
                    badge: "SEMPTOMLAR",
                    title: "Önemli olanı takip edin",
                    body: "Semptomları, ruh halini ve vitalleri kaydedin. Bağlamı korumak için fotoğraf ve ses ekleyin.",
                    tags: ["Vitaller", "Program", "Ruh Hali"]
                },
                {
                    badge: "SAĞLIK",
                    title: "Sağlık Gelişiminiz",
                    body: "Önemli kalıpları belirlemek için aktivite, ruh hali ve vitallerinizin özetlerini görün.",
                    tags: ["Trendler", "Özet", "Analizler"]
                },
                {
                    badge: "RANDEVULAR",
                    title: "Hiçbir ziyareti kaçırmayın",
                    body: "Doktor ziyaretlerinizi ve takip görevlerinizi düzenli tutun.",
                    tags: ["Takvim", "Durumlar", "Görevler"]
                },
                {
                    badge: "ARAÇ TAKIMLARI",
                    title: "Bir Bakışta Sağlık",
                    body: "Zarif ve işlevsel araç takımlarıyla hatırlatıcılarınıza ana ekrandan erişin.",
                    tags: ["Ana Ekran", "iOS 18", "Özelleştirilebilir"]
                },
                {
                    badge: "APPLE WATCH",
                    title: "Bileğinizde hız",
                    body: "Hızlı kayıt için Apple Watch'u kullanın ve aktif dozları Live Activities ile takip edin.",
                    tags: ["Live Activities", "Araç Takımları", "Hızlı"]
                }
            ],
            ctaBadge: "BUGÜN BAŞLAYIN",
            ctaTitle: "Sağlığınız elinizde ve özel kalsın",
            ctaPrivacyDetail: "Uçtan uca şifreleme ile mutlak gizlilik.",
            ctaPremiumTitle: "PREMIUM BAKIM",
            ctaPremiumDetail: "Kronik hastalar ve refakatçiler için tasarlandı.",
            ctaCommunityTitle: "TOPLULUK",
            ctaCommunityDetail: "aktif kullanıcı bize güveniyor",
        },
        privacy: {
            title: "Gizlilik Politikası",
            intro: "Bu politika, VitalsPath'in hangi bilgileri işleyebileceğini, bu bilgilerin uygulama içinde nasıl kullanıldığını ve kullanıcıların gizlilik sorularıyla bize nasıl ulaşabileceğini açıklar.",
            sections: [
                { title: "Kaydetmeyi seçtiğiniz bilgiler", body: "Uygulamayı nasıl kullandığınıza bağlı olarak VitalsPath; ilaçlar, programlar, semptomlar, ruh hali kayıtları, vital ölçümler, diğer ölçümler, randevular, görevler, fotoğraflar, sesli notlar ve eklemeyi seçtiğiniz profil bilgileri gibi verileri işleyebilir." },
                { title: "İzinler", body: "Uygulama; bildirimler, sağlık verileri, mikrofon, fotoğraflar, kamera, kişiler, takvim, anımsatıcılar ve konum dahil olmak üzere yalnızca kullanmayı seçtiğiniz özelliklerle doğrudan ilgili izinleri isteyebilir. Bu izinler ilgili uygulama işlevlerini desteklemek için kullanılır ve kullanıcı tarafından yönetilebilir." },
                { title: "Bilgilerin kullanımı", body: "VitalsPath tarafından işlenen bilgiler; tedavi planlama, günlük takip, hatırlatmalar, ölçümler, randevular, widget'lar ve kullanıcı tarafından seçilen ilgili işlevler gibi kişisel sağlık organizasyonu özelliklerini desteklemek için kullanılır." },
                { title: "Tıbbi uyarı", body: "VitalsPath bir tıbbi cihaz değildir ve herhangi bir hastalığı teşhis etmek, tedavi etmek, iyileştirmek veya önlemek amacı taşımaz. Tıbbi tavsiye, teşhis, tedavi veya acil yardımın yerine geçmez." },
                { title: "İletişim", body: "Gizlilik veya veri işleme hakkında sorularınız varsa destek sayfası üzerinden bizimle iletişime geçin." },
            ],
        },
        support: {
            title: "Destek",
            intro: "VitalsPath ile ilgili yardıma ihtiyacınız varsa, uygulama hakkında sorularınız varsa veya bir sorun bildirmek istiyorsanız buradan bize ulaşın.",
            contactTitle: "İletişim",
            contactBody: "E-posta: vitalspath@gmail.com",
            helpTitle: "Şu konularda yardımcı olabiliriz",
            helpItems: ["Uygulama soruları", "Hesap veya satın alma soruları", "Hata bildirimleri", "Gizlilik soruları", "Deneyim hakkında geri bildirim"],
            note: "Mümkünse cihaz modelinizi, iOS sürümünü, uygulama sürümünü ve sorunun kısa bir açıklamasını ekleyin.",
            formTitle: "Mesaj gönder",
            formIntro: "Sorununuzu, sorunuzu veya geri bildiriminizi bu sayfadan doğrudan da gönderebilirsiniz.",
        },
        releaseFeatures: {
            title: "Çıkış özellikleri",
            intro: "Bu sayfa, VitalsPath'in ilk genel sürümünde bulunan özellikleri açıklar.",
            sections: [
                { title: "İlaç ve tedavi takibi", body: "Tedaviler oluşturun ve düzenleyin, dozları planlayın, her dozun alınıp alınmadığını, atlanıp atlanmadığını veya ertelenip ertelenmediğini kaydedin, ilaç stokunu gözden geçirin ve hazırlıklı kalmak için yeniden doldurma hatırlatmalarını kullanın." },
                { title: "Semptomlar, ruh hali ve ölçümler", body: "Semptomları, ruh hali kayıtlarını, vital ölçümleri ve diğer kişisel ölçümleri tek bir zaman çizelgesinde kaydedin. Daha fazla bağlam gerektiğinde fotoğraf ve sesli not ekleyin." },
                { title: "Randevular, durumlar ve takip görevleri", body: "Randevuları, durumları ve takip görevlerini aynı yerde tutun; böylece günlük sağlık bilgileriniz bağlantılı ve kolay incelenebilir kalsın." },
                { title: "Cihazlar arasında günlük deneyim", body: "Gününüzü incelemek ve önemli işlemleri daha hızlı tamamlamak için widget'ları, Live Activities'i ve Apple Watch desteğini kullanın." },
                { title: "Gizlilik ve kullanım amacı", body: "VitalsPath kişisel organizasyon ve takip için geliştirilmiştir. Tıbbi bakımın, tıbbi tavsiyenin, teşhisin veya tedavinin yerine geçmez." },
            ],
            note: "Bu sayfada yalnızca ilk App Store sürümünde gerçekten bulunan özellikler yer almalıdır.",
        },
        roadmap: {
            title: "Yol Haritası",
            intro: "Bu sayfa, VitalsPath'in gelecek sürümleri için planlanan iyileştirmeleri özetler. Aşağıdaki maddeler zaman garantisi vermez ve ürün geliştikçe değişebilir.",
            nextReleaseTitle: "Bir sonraki sürüm için planlananlar",
            nextReleaseItems: ["Daha net tedavi özetleri ve uyum içgörüleri", "Daha rafine randevu ve takip akışları", "Widget'lar ve Apple Watch için daha fazla işlem", "Senkronizasyon, yedekleme ve geri yükleme güvenilirliği iyileştirmeleri", "Yerelleştirme ve erişilebilirlik geliştirmeleri"],
            directionTitle: "Ürün yönü",
            directionBody: "Kısa vadeli odak; ilaç, semptom, vital ölçümler ve randevular arasında günlük takibi daha net, hızlı ve güvenilir hâle getirmek ve iPhone, widget'lar ile Apple Watch arasındaki tutarlılığı artırmaktır.",
            safetyNote: "Bu sayfada belirtilen özellikler, zaman çizelgesi ve kullanılabilirlik, geliştirme ilerledikçe değişebilir. Bu, gelecekteki sürümler için bir garanti niteliği taşımaz.",
        },
        footer: { privacy: "Gizlilik", support: "Destek", releaseFeatures: "Çıkış özellikleri", roadmap: "Yol Haritası", timeline: "Zaman Çizelgesi", terms: "Şartlar", disclaimer: "Tıbbi uyarı", subscription: "Abonelik", legalNote: "VitalsPath yalnızca kişisel sağlık organizasyonu içindir ve tıbbi tavsiye, teşhis, tedavi veya acil yardımın yerine geçmez." },
        timeline: { title: "Yayın Zaman Çizelgesi", subtitle: "VitalsPath'in gelişimini takip edin" },
    },
    nl: {
        meta: {
            title: "VitalsPath | Privé overzicht van medicatie, symptomen, waarden en afspraken",
            description: "Privé overzicht van medicatie, symptomen, waarden en afspraken in één duidelijke gezondheidstijdlijn.",
        },
        nav: { home: "Home", privacy: "Privacy", support: "Support", releaseFeatures: "Releasefuncties", roadmap: "Roadmap", timeline: "Tijdlijn" },
        common: {
            medicalDisclaimer: "VitalsPath is ontworpen voor persoonlijke gezondheidsorganisatie en opvolging. Het vervangt geen medisch advies, diagnose, behandeling of spoedzorg.",
            appStoreSoon: "De App Store-link verschijnt hier zodra de openbare vermelding live staat.",
            contactSupport: "Contact opnemen met support",
            emailLabel: "E-mail",
        },
        home: {
            heroBadge: "BESCHERMEN WAT ERTOE DOET",
            heroTitle:
                "Houd medicatie, symptomen, vitale functies en afspraken op één privéplek.",
            heroSubtitle:
                "VitalsPath helpt u behandelingen, doses, symptomen, metingen, afspraken en vervolgtaken te organiseren met een helder dagelijks overzicht, widgets, Live Activities en Apple Watch-ondersteuning.",
            primaryCta: "Downloaden in de App Store",
            secondaryCta: "Bekijk releasefuncties",
            sections: [
                {
                    title: "Alles wat u nodig heeft voor dagelijkse opvolging",
                    body: "Plan behandelingen and doses, markeer ze als ingenomen, overgeslagen of uitgesteld, controleer uw voorraad en houd herinneringen voor bijvullen onder controle. Volg symptomen, stemming, vitale functies, foto's en spraaknotities in één persoonlijke tijdlijn.",
                },
                {
                    title: "Gebouwd voor echte dagelijkse routines",
                    body: "Gebruik widgets voor snelle zichtbaarheid, Live Activities voor actieve medicatiemomenten en Apple Watch for snellere acties gedurende de dag. Houd afspraken, aandoeningen en vervolgtaken georganiseerd zonder context te verliezen.",
                },
                {
                    title: "Privé door ontwerp",
                    body: "Uw gezondheidsinformatie moet duidelijk, persoonlijk en onder uw controle blijven. VitalsPath is gebouwd om persoonlijke organisatie te ondersteunen, niet om zorgverleners te vervangen.",
                },
            ],
            featureListTitle: "Kerngebieden",
            featureListSubtitle: "Alles wat u nodig heeft, met precisie ontworpen.",
            featureListItems: [
                "Medicatie en dosisregistratie",
                "Ingenomen, overgeslagen and uitgestelde doses",
                "Voorraad en bijvulherinneringen",
                "Symptoom- en stemmingsregistratie",
                "Vitale functies en metingen",
                "Foto's en spraaknotities",
                "Afspraken en vervolgtaken",
                "Widgets, Live Activities en Apple Watch",
            ],
            primaryFeatures: ["Beheers je medicatie", "Track symptomen & vitale functies"],
            featureTags: [
                ["MEDICATIE", "Voorraad", "Herinneringen"],
                ["SYMPTOMEN", "Vitalen", "Tijdlijn"]
            ],
            footnote:
                "Sommige functies kunnen afhankelijk zijn van uw apparaat, machtigingen of abonnement. Premium-beschikbaarheid wordt duidelijk in de app weergegeven waar van toepassing.",
            ecosystemLabel: "Ecosysteem",
            ecosystemTitle: "Geïntegreerde ervaring",
            ecosystemBody: "VitalsPath is ontworpen om naadloos samen te werken op al je apparaten. Gebruik widgets voor directe updates, Live Activities om actieve doses te volgen en Apple Watch voor snelle registraties onderweg.",
            ecosystemItems: [
                { title: "Slimme Widgets", description: "Vitaliteitsgegevens en medicijnen direct op je startscherm." },
                { title: "Apple Watch", description: "Snel loggen en waarschuwingen direct op je pols." },
                { title: "Live Activities", description: "Realtime volgen van actieve doses." }
            ],
            bentoCards: [
                {
                    badge: "MEDICATIE",
                    title: "Beheers uw medicatie",
                    body: "Plan behandelingen, registreer doses, controleer voorraad en ontvang herinneringen.",
                    tags: ["Voorraad", "Herinneringen", "Schema's"]
                },
                {
                    badge: "SYMPTOMEN",
                    title: "Volg wat er toe doet",
                    body: "Registreer symptomen, stemming en vitale functies. Voeg foto's en audio toe voor meer context.",
                    tags: ["Vitale functies", "Schema", "Stemming"]
                },
                {
                    badge: "AFSPRAKEN",
                    title: "Mis nooit een bezoek",
                    body: "Houd uw doktersbezoeken, opvolgtaken en medische dossiers georganiseerd.",
                    tags: ["Kalender", "Aandoeningen", "Taken"]
                },
                {
                    badge: "APPLE WATCH",
                    title: "Snelheid om je pols",
                    body: "Gebruik Apple Watch voor snel registreren en volg actieve doses met Live Activities.",
                    tags: ["Live Activities", "Widgets", "Snel"]
                }
            ],
            ctaBadge: "START VANDAAG",
            ctaTitle: "Jouw gezondheid, in jouw handen en privé",
            ctaPrivacyDetail: "Absolute privacy met end-to-end encryptie.",
            ctaPremiumTitle: "PREMIUM ZORG",
            ctaPremiumDetail: "Ontworpen voor chronische patiënten en mantelzorgers.",
            ctaCommunityTitle: "COMMUNITY",
            ctaCommunityDetail: "actieve gebruikers vertrouwen ons",
        },
        privacy: {
            title: "Privacybeleid",
            intro: "Dit beleid legt uit welke informatie VitalsPath kan verwerken, hoe die binnen de app wordt gebruikt en hoe gebruikers contact met ons kunnen opnemen over privacyvragen.",
            sections: [
                { title: "Informatie die je zelf vastlegt", body: "Afhankelijk van hoe je de app gebruikt, kan VitalsPath informatie verwerken zoals medicatie, schema's, symptomen, stemmingsregistraties, waarden, metingen, afspraken, taken, foto's, spraaknotities en profielgegevens die je zelf toevoegt." },
                { title: "Permissies", body: "De app kan permissies vragen die direct verband houden met functies die je wilt gebruiken, waaronder meldingen, gezondheidsgegevens, microfoon, foto's, camera, contacten, agenda, herinneringen en locatie. Deze permissies ondersteunen de bijbehorende functies in de app en kunnen door de gebruiker worden beheerd." },
                { title: "Gebruik van informatie", body: "Informatie die door VitalsPath wordt verwerkt, wordt gebruikt om functies voor persoonlijke gezondheidsorganisatie te ondersteunen, zoals behandelplanning, dagelijkse opvolging, herinneringen, metingen, afspraken, widgets en andere door de gebruiker gekozen functies." },
                { title: "Medische disclaimer", body: "VitalsPath is geen medisch hulpmiddel en is niet bedoeld om ziekten te diagnosticeren, behandelen, genezen of voorkomen. Het vervangt geen medisch advies, diagnose, behandeling of spoedhulp." },
                { title: "Contact", body: "Als je vragen hebt over privacy of gegevensverwerking, neem dan contact met ons op via de supportpagina." },
            ],
        },
        support: {
            title: "Support",
            intro: "Als je hulp nodig hebt met VitalsPath, vragen hebt over de app of een probleem wilt melden, neem dan hier contact op.",
            contactTitle: "Contact",
            contactBody: "E-mail: vitalspath@gmail.com",
            helpTitle: "Waarmee we kunnen helpen",
            helpItems: ["Vragen over de app", "Vragen over account of aankopen", "Bugmeldingen", "Privacyvragen", "Feedback over de ervaring"],
            note: "Voeg waar mogelijk je apparaatmodel, iOS-versie, app-versie en een korte beschrijving van het probleem toe.",
            formTitle: "Bericht sturen",
            formIntro: "Je kunt je probleem, vraag of feedback ook direct vanaf deze pagina versturen.",
        },
        releaseFeatures: {
            title: "Releasefuncties",
            intro: "Deze pagina beschrijft de functies die in de eerste publieke release van VitalsPath zitten.",
            sections: [
                { title: "Opvolging van medicatie en behandelingen", body: "Maak en organiseer behandelingen, plan doses, registreer of elke dosis genomen, overgeslagen of uitgesteld is, bekijk medicatievoorraad en gebruik herinneringen voor aanvullen om voorbereid te blijven." },
                { title: "Symptomen, stemming en metingen", body: "Log symptomen, stemmingsregistraties, waarden en andere persoonlijke metingen in één tijdlijn. Voeg foto's en spraaknotities toe wanneer die extra context geven." },
                { title: "Afspraken, aandoeningen en opvolgtaken", body: "Houd afspraken, aandoeningen en opvolgtaken op dezelfde plek, zodat je dagelijkse gezondheidsinformatie verbonden en gemakkelijk te bekijken blijft." },
                { title: "Dagelijkse ervaring op meerdere apparaten", body: "Gebruik widgets, Live Activities en Apple Watch-ondersteuning om je dag te bekijken en belangrijke acties sneller uit te voeren." },
                { title: "Privacy en bedoeld gebruik", body: "VitalsPath is gebouwd voor persoonlijke organisatie en opvolging. Het is geen vervanging voor medische zorg, medisch advies, diagnose of behandeling." },
            ],
            note: "Op deze pagina mogen alleen functies staan die in de eerste App Store-release beschikbaar zijn.",
        },
        roadmap: {
            title: "Roadmap",
            intro: "Deze pagina geeft verbeteringen weer die gepland zijn voor komende VitalsPath-releases. De onderstaande punten zijn geen garantie voor timing en kunnen wijzigen naarmate het product evolueert.",
            nextReleaseTitle: "Gepland voor de volgende release",
            nextReleaseItems: ["Duidelijkere behandelsamenvattingen en inzichten in therapietrouw", "Meer uitgewerkte workflows voor afspraken en opvolging", "Uitgebreidere widget- en Apple Watch-acties", "Betrouwbaarheidsverbeteringen voor sync, back-up en herstel", "Verfijningen in lokalisatie en toegankelijkheid"],
            directionTitle: "Productrichting",
            directionBody: "De focus op korte termijn is om dagelijkse opvolging rond medicatie, symptomen, waarden en afspraken duidelijker, sneller en betrouwbaarder te maken, terwijl de consistentie tussen iPhone, widgets en Apple Watch verbetert.",
            safetyNote: "Functies, timing en beschikbaarheid die op deze pagina worden genoemd, kunnen veranderen naarmate de ontwikkeling vordert. Dit is geen garantie voor toekomstige releases.",
        },
        footer: { privacy: "Privacybeleid", support: "Support", releaseFeatures: "Releasefuncties", roadmap: "Roadmap", timeline: "Tijdlijn", terms: "Voorwaarden", disclaimer: "Medische disclaimer", subscription: "Abonnement", legalNote: "VitalsPath is alleen bedoeld voor persoonlijke gezondheidsorganisatie en vervangt geen medisch advies, diagnose, behandeling of spoedzorg." },
        timeline: { title: "Release Tijdlijn", subtitle: "Volg de ontwikkeling van VitalsPath" },
    },
    pl: {
        meta: {
            title: "VitalsPath | Prywatne śledzenie leków, objawów, parametrów i wizyt",
            description: "Prywatne śledzenie leków, objawów, parametrów i wizyt w jednej przejrzystej osi zdrowia.",
        },
        nav: { home: "Start", privacy: "Prywatność", support: "Wsparcie", releaseFeatures: "Funkcje wydania", roadmap: "Mapa drogowa", timeline: "Oś czasu" },
        common: {
            medicalDisclaimer: "VitalsPath służy do osobistej organizacji zdrowia i bieżącego śledzenia. Nie zastępuje porady medycznej, diagnozy, leczenia ani pomocy w nagłych przypadkach.",
            appStoreSoon: "Link do App Store pojawi się tutaj, gdy publiczna karta aplikacji będzie już dostępna.",
            contactSupport: "Skontaktuj się ze wsparciem",
            emailLabel: "Email",
        },
        home: {
            heroBadge: "CHRONIMY TO, CO WAŻNE",
            heroTitle:
                "Przechowuj leki, objawy, parametry życiowe i wizyty w jednym prywatnym miejscu.",
            heroSubtitle:
                "VitalsPath pomaga organizować leczenie, dawki, objawy, pomiary, wizyty i zadania kontrolne dzięki przejrzystemu widokowi dnia, widżetom, Live Activities i obsłudze Apple Watch.",
            primaryCta: "Pobierz w App Store",
            secondaryCta: "Zobacz funkcje wydania",
            sections: [
                {
                    title: "Wszystko, czego potrzebujesz do codziennej kontroli",
                    body: "Planuj leczenie i dawki, oznaczaj je jako przyjęte, pominięte lub odroczone, sprawdzaj zapasy i kontroluj przypomnienia o uzupełnieniu. Śledź objawy, nastrój, parametry życiowe, zdjęcia i notatki głosowe na jednej osobistej osi czasu.",
                },
                {
                    title: "Zbudowany dla prawdziwych codziennych rutyn",
                    body: "Używaj widżetów dla szybkiego podglądu, Live Activities dla aktywnych momentów przyjmowania leków i Apple Watch dla szybszych działań w ciągu dnia. Trzymaj wizyty, schorzenia i zadania kontrolne w porządku, nie tracąc kontekstu.",
                },
                {
                    title: "Prywatność z założenia",
                    body: "Twoje informacje o zdrowiu powinny pozostać jasne, osobiste i pod Twoją kontrolą. VitalsPath został stworzony, aby wspierać osobistą organizację, a nie zastępować pracowników służby zdrowia.",
                },
            ],
            featureListTitle: "Główne obszary",
            featureListSubtitle: "Wszystko, czego potrzebujesz, precyzyjnie zaprojektowane.",
            featureListItems: [
                "Śledzenie leków i dawek",
                "Dawki przyjęte, pominięte i odroczone",
                "Zapasy i przypomnienia o uzupełnieniu",
                "Rejestrowanie objawów i nastroju",
                "Parametry życiowe i pomiary",
                "Zdjęcia i notatki głosowe",
                "Wizyty i zadania kontrolne",
                "Widżety, Live Activities i Apple Watch",
            ],
            primaryFeatures: ["Opanuj swoje leki", "Śledź objawy i parametry"],
            featureTags: [
                ["LEKI", "Zapasy", "Przypomnienia"],
                ["OBJAWY", "Parametry", "Oś czasu"]
            ],
            footnote:
                "Niektóre funkcje mogą zależeć od urządzenia, uprawnień lub planu. Dostępność Premium jest wyraźnie pokazana w aplikacji tam, gdzie ma to zastosowanie.",
            ecosystemLabel: "Ekosystem",
            ecosystemTitle: "Zintegrowane doświadczenie",
            ecosystemBody: "VitalsPath zostało zaprojektowane tak, aby płynnie działać na wszystkich Twoich urządzeniach. Korzystaj z widżetów do natychmiastowych aktualizacji, Live Activities do śledzenia aktywnych dawek i Apple Watch do szybkiego logowania w podróży.",
            ecosystemItems: [
                { title: "Inteligentne widżety", description: "Parametry życiowe i leki bezpośrednio na ekranie głównym." },
                { title: "Apple Watch", description: "Szybkie logowanie i alerty bezpośrednio na nadgarstku." },
                { title: "Live Activities", description: "Śledzenie aktywnych dawek w czasie rzeczywistym." }
            ],
            bentoCards: [
                {
                    badge: "LEKI",
                    title: "Zapanuj nad lekami",
                    body: "Planuj leczenie, zapisuj dawki, sprawdzaj zapasy i otrzymuj przypomnienia.",
                    tags: ["Zapasy", "Przypomnienia", "Harmonogramy"]
                },
                {
                    badge: "OBJAWY",
                    title: "Śledź to, co ważne",
                    body: "Zapisuj objawy, nastrój i parametry. Dodawaj zdjęcia i dźwięk dla kontekstu.",
                    tags: ["Parametry", "Harmonogram", "Nastrój"]
                },
                {
                    badge: "DOBROSTAN",
                    title: "Twój postęp zdrowia",
                    body: "Wizualizuj trendy i podsumowania aktywności, nastroju i parametrów.",
                    tags: ["Trendy", "Podsumowanie", "Wnioski"]
                },
                {
                    badge: "WIZYTY",
                    title: "Nie przegap wizyty",
                    body: "Zachowaj porządek w wizytach u lekarza i zadaniach kontrolnych.",
                    tags: ["Kalendarz", "Schorzenia", "Zadania"]
                },
                {
                    badge: "WIDŻETY",
                    title: "Zdrowie w mgnieniu oka",
                    body: "Uzyskaj dostęp do przypomnień i parametrów bezpośrednio z ekranu głównego.",
                    tags: ["Ekran główny", "iOS 18", "Konfigurowalne"]
                },
                {
                    badge: "APPLE WATCH",
                    title: "Szybkość na nadgarstku",
                    body: "Używaj Apple Watch do szybkiego logowania i śledź aktywne dawki za pomocą Live Activities.",
                    tags: ["Live Activities", "Widżety", "Szybko"]
                }
            ],
            ctaBadge: "ZACZNIJ DZISIAJ",
            ctaTitle: "Twoje zdrowie, w Twoich rękach i prywatnie",
            ctaPrivacyDetail: "Absolutna prywatność dzięki szyfrowaniu end-to-end.",
            ctaPremiumTitle: "PIELĘGNACJA PREMIUM",
            ctaPremiumDetail: "Zaprojektowane dla pacjentów przewlekłych i opiekunów.",
            ctaCommunityTitle: "SPOŁECZNOŚĆ",
            ctaCommunityDetail: "aktywnych użytkowników nam ufa",
        },
        privacy: {
            title: "Polityka prywatności",
            intro: "Ta polityka wyjaśnia, jakie informacje może przetwarzać VitalsPath, jak są wykorzystywane w aplikacji oraz jak użytkownicy mogą się z nami kontaktować w sprawach prywatności.",
            sections: [
                { title: "Informacje, które wybierasz do zapisania", body: "W zależności od sposobu korzystania z aplikacji VitalsPath może przetwarzać informacje takie jak leki, harmonogramy, objawy, wpisy nastroju, parametry, pomiary, wizyty, zadania, zdjęcia, notatki głosowe i dane profilu, które zdecydujesz się dodać." },
                { title: "Uprawnienia", body: "Aplikacja może prosić o uprawnienia bezpośrednio związane z funkcjami, z których chcesz korzystać, w tym powiadomienia, dane zdrowotne, mikrofon, zdjęcia, aparat, kontakty, kalendarz, przypomnienia i lokalizację. Uprawnienia te wspierają odpowiednie funkcje aplikacji i mogą być zarządzane przez użytkownika." },
                { title: "Wykorzystanie informacji", body: "Informacje przetwarzane przez VitalsPath są wykorzystywane do wspierania funkcji osobistej organizacji zdrowia, takich jak planowanie leczenia, codzienne śledzenie, przypomnienia, pomiary, wizyty, widżety oraz inne funkcje wybrane przez użytkownika." },
                { title: "Zastrzeżenie medyczne", body: "VitalsPath nie jest wyrobem medycznym i nie służy do diagnozowania, leczenia, wyleczenia ani zapobiegania chorobom. Nie zastępuje porady medycznej, diagnozy, leczenia ani pomocy w nagłych przypadkach." },
                { title: "Kontakt", body: "Jeśli masz pytania dotyczące prywatności lub przetwarzania danych, skontaktuj się z nami przez stronę wsparcia." },
            ],
        },
        support: {
            title: "Wsparcie",
            intro: "Jeśli potrzebujesz pomocy z VitalsPath, masz pytania o aplikację lub chcesz zgłosić problem, skontaktuj się z nami tutaj.",
            contactTitle: "Kontakt",
            contactBody: "Email: vitalspath@gmail.com",
            helpTitle: "W czym możemy pomóc",
            helpItems: ["Pytania o aplikację", "Pytania o konto lub zakupy", "Zgłoszenia błędów", "Pytania o prywatność", "Opinie o korzystaniu z aplikacji"],
            note: "Jeśli to możliwe, podaj model urządzenia, wersję iOS, wersję aplikacji i krótki opis problemu.",
            formTitle: "Wyślij wiadomość",
            formIntro: "Możesz też wysłać problem, pytanie lub opinię bezpośrednio z tej strony.",
        },
        releaseFeatures: {
            title: "Funkcje wydania",
            intro: "Ta strona opisuje funkcje dostępne w pierwszej publicznej wersji VitalsPath.",
            sections: [
                { title: "Śledzenie leków i leczenia", body: "Twórz i porządkuj leczenie, planuj dawki, zapisuj czy dana dawka została przyjęta, pominięta lub odłożona, sprawdzaj zapas leków i korzystaj z przypomnień o uzupełnieniu." },
                { title: "Objawy, nastrój i pomiary", body: "Rejestruj objawy, nastrój, parametry i inne osobiste pomiary na jednej osi czasu. Dodawaj zdjęcia i notatki głosowe, gdy pomagają zachować więcej kontekstu." },
                { title: "Wizyty, stany i zadania kontrolne", body: "Trzymaj wizyty, stany zdrowia i zadania kontrolne w jednym miejscu, aby codzienne informacje zdrowotne pozostawały powiązane i łatwe do przeglądu." },
                { title: "Codzienne doświadczenie na wielu urządzeniach", body: "Korzystaj z widżetów, Live Activities i wsparcia Apple Watch, aby szybciej przeglądać dzień i wykonywać najważniejsze działania." },
                { title: "Prywatność i zamierzony sposób użycia", body: "VitalsPath została stworzona do osobistej organizacji i bieżącego śledzenia. Nie zastępuje opieki medycznej, porady medycznej, diagnozy ani leczenia." },
            ],
            note: "Na tej stronie powinny znajdować się wyłącznie funkcje dostępne w pierwszym wydaniu App Store.",
        },
        roadmap: {
            title: "Mapa drogowa",
            intro: "Ta strona przedstawia ulepszenia planowane dla kolejnych wersji VitalsPath. Poniższe elementy nie gwarantują terminu i mogą się zmieniać wraz z rozwojem produktu.",
            nextReleaseTitle: "Planowane na następną wersję",
            nextReleaseItems: ["Czytelniejsze podsumowania leczenia i wgląd w regularność", "Bardziej dopracowane przepływy wizyt i zadań kontrolnych", "Rozszerzone działania w widżetach i na Apple Watch", "Poprawa niezawodności synchronizacji, kopii zapasowych i przywracania", "Ulepszenia lokalizacji i dostępności"],
            directionTitle: "Kierunek produktu",
            directionBody: "W krótkim terminie celem jest uczynienie codziennego śledzenia leków, objawów, parametrów i wizyt bardziej przejrzystym, szybszym i bardziej niezawodnym przy jednoczesnej poprawie spójności między iPhone'em, widżetami i Apple Watch.",
            safetyNote: "Funkcje, terminy i dostępność wspomniane na tej stronie mogą ulec zmianie w miarę postępu prac. Nie jest to gwarancja przyszłych wersji.",
        },
        footer: { privacy: "Polityka prywatności", support: "Wsparcie", releaseFeatures: "Funkcje wydania", roadmap: "Mapa drogowa", timeline: "Oś czasu", terms: "Warunki", disclaimer: "Zastrzeżenie medyczne", subscription: "Subskrypcja", legalNote: "VitalsPath służy wyłącznie do osobistej organizacji zdrowia i nie zastępuje porady medycznej, diagnozy, leczenia ani pomocy w nagłych przypadkach." },
        timeline: { title: "Oś Czasu Wydania", subtitle: "Śledź rozwój VitalsPath" },
    },
};

export function getSiteCopy(lang: Lang): SiteCopy {
    return siteCopy[lang] ?? siteCopy.en;
}
