alter table public.releases add column if not exists is_public boolean not null default true;

with release_payload as (
	select
		'2.0.0'::text as version,
		'pending'::text as build_number,
		$${
		"en": [
			"VitalsPath 2.0.0 refreshes the private health hub around medication, symptoms, vitals and appointments.",
			"Medication routines now support clearer treatment planning, generated doses, taken/skipped/postponed states, stock visibility and refill reminders.",
			"Symptom logging adds richer context with severity, triggers, relief factors, location, impact, photos, notes and emergency-aware review where relevant.",
			"Daily health context is closer with widgets, Live Activities, Dynamic Island feedback and Apple Watch companion flows.",
			"Privacy foundations are stronger with encrypted sensitive storage patterns, private logging and automatic app lock behavior."
		],
		"es": [
			"VitalsPath 2.0.0 renueva el hub privado de salud alrededor de medicación, síntomas, constantes y citas.",
			"Las rutinas de medicación ahora incluyen planificación de tratamientos más clara, dosis generadas, estados tomada/omitida/pospuesta, visibilidad de stock y recordatorios de reposición.",
			"El registro de síntomas añade más contexto: severidad, desencadenantes, alivios, localización, impacto, fotos, notas y revisión orientada a emergencias cuando corresponde.",
			"El contexto diario está más cerca con widgets, Live Activities, feedback en Dynamic Island y flujos companion para Apple Watch.",
			"Las bases de privacidad se refuerzan con almacenamiento sensible cifrado, logging privado y bloqueo automático de la app."
		],
		"fr": [
			"VitalsPath 2.0.0 renouvelle le hub de santé privé autour des médicaments, symptômes, constantes et rendez-vous.",
			"Les routines de médication gagnent une planification plus claire, des doses générées, des états pris/ignoré/reporté, le suivi du stock et les rappels de renouvellement.",
			"Le journal des symptômes ajoute sévérité, déclencheurs, facteurs de soulagement, localisation, impact, photos, notes et revue d’urgence lorsque c’est pertinent.",
			"Le contexte quotidien reste plus proche grâce aux widgets, Live Activities, Dynamic Island et aux flux Apple Watch.",
			"Les bases de confidentialité sont renforcées avec stockage sensible chiffré, journaux privés et verrouillage automatique de l’app."
		],
		"de": [
			"VitalsPath 2.0.0 erneuert den privaten Gesundheits-Hub für Medikamente, Symptome, Vitalwerte und Termine.",
			"Medikationsroutinen bieten klarere Behandlungsplanung, generierte Dosen, eingenommen/ausgelassen/verschoben-Status, Bestandsübersicht und Nachfüll-Erinnerungen.",
			"Die Symptomerfassung erhält mehr Kontext: Schweregrad, Auslöser, Linderung, Ort, Auswirkung, Fotos, Notizen und notfallbewusste Prüfung, wenn relevant.",
			"Täglicher Gesundheitskontext ist mit Widgets, Live Activities, Dynamic Island Feedback und Apple Watch Abläufen näher dran.",
			"Datenschutzgrundlagen wurden mit verschlüsselter Speicherung sensibler Daten, privaten Logs und automatischer App-Sperre gestärkt."
		],
		"it": [
			"VitalsPath 2.0.0 rinnova l’hub salute privato per farmaci, sintomi, parametri e visite.",
			"Le routine di terapia includono pianificazione più chiara, dosi generate, stati assunta/saltata/posticipata, visibilità dello stock e promemoria di rifornimento.",
			"Il registro sintomi aggiunge contesto: severità, fattori scatenanti, sollievo, localizzazione, impatto, foto, note e revisione di emergenza quando rilevante.",
			"Il contesto quotidiano è più vicino con widget, Live Activities, feedback Dynamic Island e flussi Apple Watch.",
			"La privacy è rafforzata con archiviazione sensibile cifrata, log privati e blocco automatico dell’app."
		],
		"pt": [
			"VitalsPath 2.0.0 renova o hub privado de saúde para medicação, sintomas, sinais vitais e consultas.",
			"As rotinas de medicação incluem planeamento mais claro, doses geradas, estados tomada/omitida/adiada, visibilidade de stock e lembretes de reposição.",
			"O registo de sintomas acrescenta severidade, desencadeadores, fatores de alívio, localização, impacto, fotos, notas e revisão de emergência quando relevante.",
			"O contexto diário fica mais próximo com widgets, Live Activities, Dynamic Island e fluxos Apple Watch.",
			"A privacidade é reforçada com armazenamento sensível cifrado, logs privados e bloqueio automático da app."
		],
		"ja": [
			"VitalsPath 2.0.0 は、服薬、症状、バイタル、予定を中心にした非公開ヘルスハブを刷新します。",
			"服薬ルーティンは、治療計画、生成された服薬予定、服用/スキップ/延期、在庫確認、補充リマインダーをより明確に扱えます。",
			"症状記録には重症度、きっかけ、緩和要因、場所、影響、写真、メモ、必要に応じた緊急確認が加わります。",
			"ウィジェット、Live Activities、Dynamic Island、Apple Watch により日々の状況をすばやく確認できます。",
			"機密データの暗号化保存、プライベートログ、自動アプリロックでプライバシー基盤を強化しました。"
		],
		"zh": [
			"VitalsPath 2.0.0 围绕用药、症状、生命体征和预约刷新私密健康中心。",
			"用药流程支持更清晰的治疗计划、生成剂量、已服用/跳过/推迟状态、库存可见性和补充提醒。",
			"症状记录加入严重程度、诱因、缓解因素、位置、影响、照片、备注以及必要时的紧急审查。",
			"通过小组件、Live Activities、Dynamic Island 和 Apple Watch，日常健康信息更贴近当下。",
			"通过敏感数据加密存储、私密日志和自动应用锁加强隐私基础。"
		],
		"ko": [
			"VitalsPath 2.0.0은 복약, 증상, 활력징후, 진료 일정을 중심으로 비공개 건강 허브를 새롭게 구성합니다.",
			"복약 루틴은 치료 계획, 생성된 복용 일정, 복용/건너뜀/연기 상태, 재고 확인, 리필 알림을 더 명확하게 지원합니다.",
			"증상 기록에는 심각도, 유발 요인, 완화 요인, 위치, 영향, 사진, 메모, 필요한 경우 응급 검토가 추가됩니다.",
			"위젯, Live Activities, Dynamic Island, Apple Watch 흐름으로 일상 건강 맥락을 더 가까이 확인할 수 있습니다.",
			"민감 정보 암호화 저장, 비공개 로그, 자동 앱 잠금으로 개인정보 보호 기반을 강화했습니다."
		],
		"ru": [
			"VitalsPath 2.0.0 обновляет приватный центр здоровья для лекарств, симптомов, показателей и визитов.",
			"Рутины приема лекарств получили более понятное планирование, созданные дозы, статусы принято/пропущено/отложено, учет запасов и напоминания о пополнении.",
			"Журнал симптомов добавляет тяжесть, триггеры, факторы облегчения, локализацию, влияние, фото, заметки и экстренную проверку при необходимости.",
			"Ежедневный контекст ближе благодаря виджетам, Live Activities, Dynamic Island и сценариям Apple Watch.",
			"Конфиденциальность усилена шифрованным хранением чувствительных данных, приватными логами и автоматической блокировкой приложения."
		],
		"ar": [
			"يحدّث VitalsPath 2.0.0 مركز الصحة الخاص حول الأدوية والأعراض والمؤشرات والمواعيد.",
			"أصبحت روتينات الأدوية أوضح مع تخطيط العلاج، الجرعات المنشأة، حالات تم التناول/تم التخطي/تم التأجيل، متابعة المخزون وتذكيرات التجديد.",
			"يسجل عرض الأعراض سياقا أعمق مثل الشدة، المحفزات، عوامل التحسن، الموقع، التأثير، الصور، الملاحظات والمراجعة الطارئة عند الحاجة.",
			"يبقى سياق اليوم أقرب عبر الويدجت و Live Activities و Dynamic Island و Apple Watch.",
			"تم تعزيز الخصوصية بتخزين حساس مشفر وسجلات خاصة وقفل تلقائي للتطبيق."
		],
		"hi": [
			"VitalsPath 2.0.0 दवाओं, लक्षणों, वाइटल्स और अपॉइंटमेंट के लिए निजी हेल्थ हब को नया करता है।",
			"Medication routines में साफ treatment planning, generated doses, taken/skipped/postponed states, stock visibility और refill reminders शामिल हैं।",
			"Symptom logging में severity, triggers, relief factors, location, impact, photos, notes और जरूरत पर emergency-aware review जुड़ता है।",
			"Widgets, Live Activities, Dynamic Island feedback और Apple Watch flows से daily health context और पास रहता है।",
			"Encrypted sensitive storage, private logging और automatic app lock से privacy foundations मजबूत हुए हैं।"
		],
		"tr": [
			"VitalsPath 2.0.0 ilaç, semptom, vital değer ve randevular etrafındaki özel sağlık merkezini yeniler.",
			"İlaç rutinleri daha net tedavi planlama, oluşturulan dozlar, alındı/atlanıldı/ertelendi durumları, stok görünürlüğü ve yenileme hatırlatmaları sunar.",
			"Semptom kaydı şiddet, tetikleyiciler, rahatlatan etkenler, konum, etki, fotoğraflar, notlar ve gerektiğinde acil durum odaklı inceleme ekler.",
			"Günlük sağlık bağlamı widgetlar, Live Activities, Dynamic Island ve Apple Watch akışlarıyla daha yakındadır.",
			"Gizlilik temelleri şifreli hassas depolama, özel günlükler ve otomatik uygulama kilidiyle güçlendirildi."
		],
		"nl": [
			"VitalsPath 2.0.0 vernieuwt de prive gezondheidshub rond medicatie, symptomen, vitale waarden en afspraken.",
			"Medicatie routines ondersteunen duidelijkere behandelplanning, gegenereerde doses, genomen/overgeslagen/uitgestelde statussen, voorraadzicht en bijvulherinneringen.",
			"Symptoomregistratie voegt ernst, triggers, verlichting, locatie, impact, foto’s, notities en waar relevant een noodgerichte controle toe.",
			"Dagelijkse gezondheidscontext is dichterbij met widgets, Live Activities, Dynamic Island feedback en Apple Watch flows.",
			"Privacy is versterkt met versleutelde opslag voor gevoelige data, private logging en automatische appvergrendeling."
		],
		"pl": [
			"VitalsPath 2.0.0 odświeża prywatne centrum zdrowia dla leków, objawów, parametrów i wizyt.",
			"Rutyny leków obejmują czytelniejsze planowanie leczenia, generowane dawki, statusy przyjęta/pominięta/przełożona, widoczność zapasów i przypomnienia o uzupełnieniu.",
			"Rejestr objawów dodaje nasilenie, wyzwalacze, czynniki ulgi, lokalizację, wpływ, zdjęcia, notatki i w razie potrzeby przegląd alarmowy.",
			"Codzienny kontekst zdrowia jest bliżej dzięki widżetom, Live Activities, Dynamic Island i przepływom Apple Watch.",
			"Podstawy prywatności wzmocniono szyfrowanym przechowywaniem danych wrażliwych, prywatnymi logami i automatyczną blokadą aplikacji."
		]
	}$$::jsonb as translations,
		true as is_public
),
updated as (
	update public.releases r
	set
		translations = p.translations,
		is_public = p.is_public
	from release_payload p
	where r.version = p.version
		and r.build_number = p.build_number
	returning r.id
)
insert into public.releases (version, build_number, translations, is_public)
select p.version, p.build_number, p.translations, p.is_public
from release_payload p
where not exists (select 1 from updated);

notify pgrst, 'reload schema';
