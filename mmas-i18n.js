/* ============================================================
   MMAS shared multilingual engine — English / Soomaali / العربية
   Auto-translates rendered DOM (static + dynamic), persists the
   language in localStorage across all portals, and applies RTL
   for Arabic. Loaded by every portal via <script src>.
   ============================================================ */
(function(){
  var DICT = {
    so: {
      "Search applications, cards, people…":"Raadi codsiyo, kaadhadh, dad…","Search name or email…":"Raadi magac ama iimayl…","Search event…":"Raadi dhacdo…","Search by name, ID or outlet…":"Raadi magac, aqoonsi ama warbaahin…","Search holder or ID…":"Raadi haystaha ama aqoonsiga…",
      // ---- Portals / chooser ----
      "Sign in":"Soo gal","Select portal":"Dooro bogga","Public Portal":"Bogga Dadweynaha","Admin Portal":"Bogga Maamulka","Verification Portal":"Bogga Xaqiijinta",
      "Journalists, media houses & foreign crews":"Suxufiyiin, saxaafad & shaqaale ajnabi","Ministry staff — review & approve":"Shaqaalaha Wasaaradda — dib u eeg & ansixi","Police & public — scan a press card":"Booliska & dadweynaha — sawir kaadhka",
      "Email or phone":"Iimayl ama telefoon","Password":"Furaha sirta","Remember me":"I xasuuso","Forgot password?":"Ma illowday furaha?","Sign in to portal":"Gal bogga",
      "Ministry of Information, Culture & Tourism":"Wasaaradda Warfaafinta, Dhaqanka & Dalxiiska",
      // ---- Public nav ----
      "Public Portal":"Bogga Dadweynaha","Events":"Dhacdooyin","Verify a Card":"Xaqiiji Kaadh","Verify a card":"Xaqiiji kaadh","Login":"Soo gal","Sign Up":"Isdiiwaangeli",
      "Dashboard":"Shabakadda","My Applications":"Codsiyadayda","My Digital Wallet":"Boorsadayda Dhijitaalka","Events & Passes":"Dhacdooyin & Tigidhada","Notifications":"Ogeysiisyo","Profile & Settings":"Astaanta & Hagaajinta","Logout":"Ka bax",
      // ---- Admin nav ----
      "Applications Inbox":"Sanduuqa Codsiyada","Cards & Licenses":"Kaadhadhka & Shatiyada","Fraud Reports":"Warbixinno Khiyaano","Fees & Payments":"Khidmadaha & Lacag-bixinta","Events Management":"Maaraynta Dhacdooyinka","Records Database":"Kaydka Diiwaanka","Reports & Statistics":"Warbixinno & Tirakoob","Users & Roles":"Isticmaalayaal & Doorar","Activity Log":"Diiwaanka Dhaqdhaqaaqa","Staff sign in":"Gelitaanka Shaqaalaha",
      // ---- Buttons / actions ----
      "Save":"Kaydi","Cancel":"Jooji","Delete":"Tirtir","Edit":"Wax ka beddel","Update":"Cusboonaysii","Submit":"Gudbi","Approve":"Ansixi","Reject":"Diid","Suspend":"Hakad","Reactivate":"Dib u fur","Reactivate card":"Dib u fur kaadhka","Renew":"Cusboonaysii","Register":"Isdiiwaangeli","Continue":"Sii wad","Back":"Dib u noqo","Next":"Xiga","Previous":"Hore","Finish":"Dhammaystir","Download":"Soo dejiso","Upload":"Soo geli","Generate Report":"Samee Warbixin","Export CSV":"Dhoofi CSV","Export PDF":"Dhoofi PDF","Search":"Raadi","Filter":"Kala saar","Reset":"Dib u dejiso","Clear":"Nadiifi","View":"Fiiri","Review":"Dib u eeg","Verify":"Xaqiiji","Scan":"Sawir","Report":"Warbixi","Request Info":"Codso Macluumaad","Get started":"Bilow","Get Started":"Bilow","New Application":"Codsi Cusub","View all":"Fiiri dhammaan","View details":"Fiiri faahfaahin","Scan another":"Sawir mid kale","Home":"Guriga","Send report":"Dir warbixinta","Add":"Ku dar","Create":"Abuur","Create Event":"Abuur Dhacdo","Create event":"Abuur dhacdo","Add New Staff":"Ku dar Shaqaale Cusub","Add Staff":"Ku dar Shaqaale","Add new staff":"Ku dar shaqaale cusub","Create Staff":"Abuur Shaqaale","Save Changes":"Kaydi Isbeddellada","Mark reviewed":"Calaamadee la eegay","Attendees":"Ka-qaybgalayaal","Check-in Mode":"Habka Diiwaangelinta","Export list":"Dhoofi liiska","Export CSV":"Dhoofi CSV","Login ":"Soo gal ","Verify":"Xaqiiji","Lock":"Xir",
      // ---- Statuses ----
      "Draft":"Qabyo","Pending":"Sugaya","Submitted":"La gudbiyay","Under Review":"Dib-u-eegis","Approved":"La ansixiyay","Rejected":"La diiday","Expired":"Dhacay","Active":"Firfircoon","Suspended":"La hakiyay","Cancelled":"La joojiyay","Valid":"Sax","Invalid":"Aan sax ahayn","Fake":"Been abuur","Checked in":"La diiwaangeliyay","Already checked in":"Horeba loo diiwaangeliyay","Open":"Furan","Reviewed":"La eegay","Registered":"Diiwaangashan","Not registered":"Aan diiwaangashanayn","Not recognized":"Lama aqoonsan","Full":"Buuxa","FULL":"BUUXA","Info Requested":"Macluumaad la codsaday",
      // ---- Public dashboard / landing ----
      "Welcome back":"Ku soo dhawoow","Active Cards":"Kaadhadh Firfircoon","Pending Applications":"Codsiyo Sugaya","Expiring Soon":"Dhaw Dhici Doona","Quick actions":"Ficillo Degdeg ah","QUICK ACTIONS":"FICILLO DEGDEG AH","Recent activity":"Dhaqdhaqaaqii dhow","Recent Activity":"Dhaqdhaqaaqii Dhow","Press Card":"Kaadhka Saxaafadda","Media License":"Shatiga Warbaahinta","Foreign Permit":"Ruqsadda Ajnabiga","Government Events":"Dhacdooyinka Dawladda","Media services for Somalia, now fully digital":"Adeegyada warbaahinta ee Soomaaliya, hadda si buuxda dhijitaal ah",
      "Apply and get a verifiable digital press card with QR.":"Codso oo hel kaadh saxaafadeed dhijitaal ah oo QR leh.","What you can do here":"Waxa aad halkan ku samayn karto","How it works":"Sida ay u shaqayso","Fees & requirements":"Khidmadaha & Shuruudaha","Frequently asked":"Su'aalo Badanaa La Weyddiiyo","Need help?":"Caawimaad ma u baahan tahay?","Journalist Press Card":"Kaadhka Saxaafiga",
      // ---- Applications / review ----
      "Applicant":"Codsadaha","Type":"Nooca","Account":"Akoonka","Date Submitted":"Taariikhda la gudbiyay","Status":"Xaaladda","Action":"Ficil","Applicant details":"Faahfaahinta codsadaha","Name":"Magaca","ID / Passport":"Aqoonsi / Baasaboor","Nationality":"Dhalasho","Outlet":"Warbaahin","Submitted":"La gudbiyay","Account type":"Nooca akoonka","Review timeline":"Jadwalka dib-u-eegista","Decision":"Go'aan","Reason for rejection":"Sababta diidmada","Equipment & team":"Qalab & Koox","Equipment":"Qalab","Team members":"Xubnaha kooxda","Individual Journalist":"Saxafi Gaar ah","Media House":"Guri Warbaahineed","Foreign Media":"Warbaahin Ajnabi",
      // ---- Events ----
      "Upcoming events":"Dhacdooyinka soo socda","Upcoming media events":"Dhacdooyinka warbaahinta ee soo socda","Capacity":"Xamuulka","Event name":"Magaca dhacdada","Date":"Taariikhda","Location":"Goobta","Who can check people in?":"Yaa dadka diiwaangelin kara?","spots filled":"booska la buuxiyay","checked in":"la diiwaangeliyay","registered":"diiwaangashan","Register":"Isdiiwaangeli","Event Full":"Dhacdadu Buuxda","Almost full":"Ku dhow buuxa",
      // ---- Verify portal ----
      "Verify Card":"Xaqiiji Kaadh","Ministry of Information":"Wasaaradda Warfaafinta","Scan a press card":"Sawir kaadh saxaafadeed","Scan an event pass":"Sawir tigidh dhacdo","Press card":"Kaadh saxaafadeed","Event pass":"Tigidhka dhacdada","Scan card":"Sawir kaadhka","Scan pass":"Sawir tigidhka","This card is genuine and active":"Kaadhkani waa mid dhab ah oo firfircoon","This card is no longer valid":"Kaadhkani mar dambe ma shaqaynayo","This card has been suspended by the Ministry":"Wasaaraddu waa hakisay kaadhkan","No card matches this code":"Ma jiro kaadh u dhigma lambarkan","Issued by the Ministry":"Waxaa bixiyay Wasaaradda","Card number":"Lambarka kaadhka","Blood group":"Nooca dhiigga","Issue date":"Taariikhda bixinta","Expiry date":"Taariikhda dhicitaanka","Holder":"Haystaha","Valid pass":"Tigidh sax ah","Invalid pass":"Tigidh aan sax ahayn","This pass is not recognized":"Tigidhkan lama aqoonsan","Not on the guest list":"Kuma jiro liiska martida","Report suspicious card":"Ka warbixi kaadh shaki leh","Report it to the Ministry":"U warbixi Wasaaradda","Report this person to the Ministry":"U warbixi qofkan Wasaaradda","Or enter pass number":"Ama geli lambarka tigidhka","Report suspicious card/pass":"Ka warbixi kaadh/tigidh shaki leh","Who is reporting?":"Yaa warbixinaya?","Reported by (optional)":"Waxaa warbixiyay (ikhtiyaari)","Photo of the person holding the card":"Sawirka qofka haysta kaadhka","Their phone number":"Lambarka telefoonkooda","Their ID / NIRA number":"Aqoonsigooda / lambarka NIRA","Note (optional)":"Qoraal (ikhtiyaari)","Attach my location":"Ku dar goobtayda","Checked in":"La diiwaangeliyay","Welcome to":"Ku soo dhawoow","Door check-in":"Diiwaangelinta albaabka","Fees & Payments":"Khidmadaha & Lacag-bixinta",
      // ---- Toasts / messages ----
      "Please fill all required fields.":"Fadlan buuxi dhammaan meelaha loo baahan yahay.","Please complete all required fields.":"Fadlan dhammaystir dhammaan meelaha loo baahan yahay.","Draft saved. You can finish it later.":"Qabyada waa la kaydiyay. Waad dhammaystiri kartaa mar dambe.","Registered! Your pass is ready.":"Waa la diiwaangeliyay! Tigidhkaagu diyaar ayuu yahay.","Report sent to the Ministry.":"Warbixinta waxaa loo diray Wasaaradda.","Event created.":"Dhacdada waa la abuuray.","Staff saved.":"Shaqaalaha waa la kaydiyay.","Staff member created successfully":"Shaqaalaha si guul leh ayaa loo abuuray","Staff member updated successfully":"Shaqaalaha si guul leh ayaa loo cusboonaysiiyay","Profile saved.":"Astaanta waa la kaydiyay.","Payment successful":"Lacag-bixintu way guulaysatay","Invalid credentials.":"Xogta gelitaanku waa qaldan tahay.","Enter your Ministry email and password.":"Geli iimaylkaaga Wasaaradda iyo furaha sirta.","Event is full — no more registrations.":"Dhacdadu waa buuxda — diiwaangelin dambe ma jirto.","Fee updated to":"Khidmada waxaa loo beddelay","Application":"Codsiga","approved — card issued.":"waa la ansixiyay — kaadh baa la bixiyay.","rejected.":"waa la diiday.","Report sent to the Ministry.":"Warbixinta waxaa loo diray Wasaaradda.","Report marked as reviewed.":"Warbixinta waxaa loo calaamadeeyay la eegay.","Signed in as":"Waxaad u soo gashay",
      // ---- Misc ----
      "This gate is for":"Iridani waa loo yaal","No reports yet. Reports sent from the Verification Portal will appear here.":"Weli warbixin ma jirto. Warbixinaha laga soo diray Bogga Xaqiijinta ayaa halkan ka muuqan doona.","Card code":"Lambarka kaadhka","Report type":"Nooca warbixinta","Reported":"La warbixiyay","Reporter":"Warbixiye","Last Login":"Gelitaankii u dambeeyay","Never":"Waligeed","Role":"Doorka","Email":"Iimayl","Full name":"Magaca oo dhan","Phone":"Telefoon","Super Admin":"Maamulka Sare","Reviewer":"Dib-u-eege"
    },
    ar: {
      "Search applications, cards, people…":"ابحث عن طلبات وبطاقات وأشخاص…","Search name or email…":"ابحث بالاسم أو البريد…","Search event…":"ابحث عن فعالية…","Search by name, ID or outlet…":"ابحث بالاسم أو الهوية أو الوسيلة…","Search holder or ID…":"ابحث عن الحامل أو الهوية…",
      "Sign in":"تسجيل الدخول","Select portal":"اختر البوابة","Public Portal":"البوابة العامة","Admin Portal":"بوابة الإدارة","Verification Portal":"بوابة التحقق",
      "Journalists, media houses & foreign crews":"الصحفيون ووسائل الإعلام والطواقم الأجنبية","Ministry staff — review & approve":"موظفو الوزارة — المراجعة والموافقة","Police & public — scan a press card":"الشرطة والجمهور — مسح بطاقة صحفية",
      "Email or phone":"البريد الإلكتروني أو الهاتف","Password":"كلمة المرور","Remember me":"تذكرني","Forgot password?":"هل نسيت كلمة المرور؟","Sign in to portal":"الدخول إلى البوابة",
      "Ministry of Information, Culture & Tourism":"وزارة الإعلام والثقافة والسياحة",
      "Events":"الفعاليات","Verify a Card":"تحقق من بطاقة","Verify a card":"تحقق من بطاقة","Login":"تسجيل الدخول","Sign Up":"إنشاء حساب",
      "Dashboard":"لوحة التحكم","My Applications":"طلباتي","My Digital Wallet":"محفظتي الرقمية","Events & Passes":"الفعاليات والتصاريح","Notifications":"الإشعارات","Profile & Settings":"الملف والإعدادات","Logout":"تسجيل الخروج",
      "Applications Inbox":"صندوق الطلبات","Cards & Licenses":"البطاقات والتراخيص","Fraud Reports":"بلاغات الاحتيال","Fees & Payments":"الرسوم والمدفوعات","Events Management":"إدارة الفعاليات","Records Database":"قاعدة السجلات","Reports & Statistics":"التقارير والإحصاءات","Users & Roles":"المستخدمون والأدوار","Activity Log":"سجل النشاط","Staff sign in":"دخول الموظفين",
      "Save":"حفظ","Cancel":"إلغاء","Delete":"حذف","Edit":"تعديل","Update":"تحديث","Submit":"إرسال","Approve":"موافقة","Reject":"رفض","Suspend":"إيقاف","Reactivate":"إعادة تفعيل","Renew":"تجديد","Register":"تسجيل","Continue":"متابعة","Back":"رجوع","Next":"التالي","Previous":"السابق","Finish":"إنهاء","Download":"تنزيل","Upload":"رفع","Generate Report":"إنشاء تقرير","Export CSV":"تصدير CSV","Export PDF":"تصدير PDF","Search":"بحث","Filter":"تصفية","Reset":"إعادة تعيين","Clear":"مسح","View":"عرض","Review":"مراجعة","Verify":"تحقق","Scan":"مسح","Report":"إبلاغ","Request Info":"طلب معلومات","Get started":"ابدأ","Get Started":"ابدأ","New Application":"طلب جديد","View all":"عرض الكل","View details":"عرض التفاصيل","Scan another":"مسح آخر","Home":"الرئيسية","Send report":"إرسال البلاغ","Add":"إضافة","Create":"إنشاء","Create Event":"إنشاء فعالية","Create event":"إنشاء فعالية","Add New Staff":"إضافة موظف جديد","Add Staff":"إضافة موظف","Add new staff":"إضافة موظف جديد","Create Staff":"إنشاء موظف","Save Changes":"حفظ التغييرات","Mark reviewed":"وضع علامة تمت المراجعة","Attendees":"الحضور","Check-in Mode":"وضع تسجيل الدخول","Export list":"تصدير القائمة","Lock":"قفل",
      "Draft":"مسودة","Pending":"قيد الانتظار","Submitted":"تم الإرسال","Under Review":"قيد المراجعة","Approved":"تمت الموافقة","Rejected":"مرفوض","Expired":"منتهي","Active":"نشط","Suspended":"موقوف","Cancelled":"ملغى","Valid":"صالح","Invalid":"غير صالح","Fake":"مزيف","Checked in":"تم تسجيل الدخول","Already checked in":"تم تسجيل الدخول مسبقاً","Open":"مفتوح","Reviewed":"تمت المراجعة","Registered":"مسجل","Not registered":"غير مسجل","Not recognized":"غير معروف","Full":"ممتلئ","FULL":"ممتلئ","Info Requested":"طُلبت معلومات",
      "Welcome back":"مرحباً بعودتك","Active Cards":"بطاقات نشطة","Pending Applications":"طلبات معلقة","Expiring Soon":"تنتهي قريباً","Quick actions":"إجراءات سريعة","QUICK ACTIONS":"إجراءات سريعة","Recent activity":"النشاط الأخير","Recent Activity":"النشاط الأخير","Press Card":"البطاقة الصحفية","Media License":"ترخيص إعلامي","Foreign Permit":"تصريح أجنبي","Government Events":"فعاليات حكومية","Media services for Somalia, now fully digital":"الخدمات الإعلامية للصومال، الآن رقمية بالكامل",
      "What you can do here":"ما يمكنك فعله هنا","How it works":"كيف تعمل","Fees & requirements":"الرسوم والمتطلبات","Frequently asked":"الأسئلة الشائعة","Need help?":"هل تحتاج مساعدة؟","Journalist Press Card":"البطاقة الصحفية للصحفي",
      "Applicant":"مقدم الطلب","Type":"النوع","Account":"الحساب","Date Submitted":"تاريخ التقديم","Status":"الحالة","Action":"إجراء","Applicant details":"تفاصيل مقدم الطلب","Name":"الاسم","ID / Passport":"الهوية / جواز السفر","Nationality":"الجنسية","Outlet":"الوسيلة الإعلامية","Submitted":"تم الإرسال","Account type":"نوع الحساب","Review timeline":"الجدول الزمني للمراجعة","Decision":"القرار","Reason for rejection":"سبب الرفض","Equipment & team":"المعدات والفريق","Equipment":"المعدات","Team members":"أعضاء الفريق","Individual Journalist":"صحفي فردي","Media House":"مؤسسة إعلامية","Foreign Media":"إعلام أجنبي",
      "Upcoming events":"الفعاليات القادمة","Upcoming media events":"الفعاليات الإعلامية القادمة","Capacity":"السعة","Event name":"اسم الفعالية","Date":"التاريخ","Location":"الموقع","Who can check people in?":"من يمكنه تسجيل دخول الأشخاص؟","spots filled":"المقاعد الممتلئة","checked in":"تم تسجيل الدخول","registered":"مسجل","Register":"تسجيل","Event Full":"الفعالية ممتلئة","Almost full":"شبه ممتلئة",
      "Verify Card":"تحقق من البطاقة","Ministry of Information":"وزارة الإعلام","Scan a press card":"امسح بطاقة صحفية","Scan an event pass":"امسح تصريح فعالية","Press card":"بطاقة صحفية","Event pass":"تصريح فعالية","Scan card":"امسح البطاقة","Scan pass":"امسح التصريح","This card is genuine and active":"هذه البطاقة أصلية ونشطة","This card is no longer valid":"لم تعد هذه البطاقة صالحة","This card has been suspended by the Ministry":"تم إيقاف هذه البطاقة من قبل الوزارة","No card matches this code":"لا توجد بطاقة تطابق هذا الرمز","Issued by the Ministry":"صادرة عن الوزارة","Card number":"رقم البطاقة","Blood group":"فصيلة الدم","Issue date":"تاريخ الإصدار","Expiry date":"تاريخ الانتهاء","Holder":"الحامل","Valid pass":"تصريح صالح","Invalid pass":"تصريح غير صالح","This pass is not recognized":"هذا التصريح غير معروف","Not on the guest list":"ليس على قائمة الضيوف","Report suspicious card":"أبلغ عن بطاقة مشبوهة","Report it to the Ministry":"أبلغ الوزارة","Report this person to the Ministry":"أبلغ الوزارة عن هذا الشخص","Or enter pass number":"أو أدخل رقم التصريح","Who is reporting?":"من المُبلِّغ؟","Reported by (optional)":"المُبلِّغ (اختياري)","Photo of the person holding the card":"صورة الشخص حامل البطاقة","Their phone number":"رقم هاتفه","Their ID / NIRA number":"رقم هويته / NIRA","Note (optional)":"ملاحظة (اختياري)","Attach my location":"إرفاق موقعي","Checked in":"تم تسجيل الدخول","Welcome to":"مرحباً بك في","Door check-in":"تسجيل الدخول عند الباب",
      "Please fill all required fields.":"يرجى ملء جميع الحقول المطلوبة.","Please complete all required fields.":"يرجى إكمال جميع الحقول المطلوبة.","Draft saved. You can finish it later.":"تم حفظ المسودة. يمكنك إكمالها لاحقاً.","Registered! Your pass is ready.":"تم التسجيل! تصريحك جاهز.","Report sent to the Ministry.":"تم إرسال البلاغ إلى الوزارة.","Event created.":"تم إنشاء الفعالية.","Staff saved.":"تم حفظ الموظف.","Staff member created successfully":"تم إنشاء الموظف بنجاح","Staff member updated successfully":"تم تحديث الموظف بنجاح","Profile saved.":"تم حفظ الملف.","Payment successful":"تمت عملية الدفع بنجاح","Invalid credentials.":"بيانات الدخول غير صحيحة.","Enter your Ministry email and password.":"أدخل بريد الوزارة وكلمة المرور.","Event is full — no more registrations.":"الفعالية ممتلئة — لا مزيد من التسجيلات.","Report marked as reviewed.":"تم وضع علامة على البلاغ كمُراجَع.","Signed in as":"تم تسجيل الدخول كـ",
      "This gate is for":"هذه البوابة لـ","No reports yet. Reports sent from the Verification Portal will appear here.":"لا توجد بلاغات بعد. ستظهر البلاغات المرسلة من بوابة التحقق هنا.","Card code":"رمز البطاقة","Report type":"نوع البلاغ","Reported":"تم الإبلاغ","Reporter":"المُبلِّغ","Last Login":"آخر دخول","Never":"أبداً","Role":"الدور","Email":"البريد الإلكتروني","Full name":"الاسم الكامل","Phone":"الهاتف","Super Admin":"مدير عام","Reviewer":"مراجع"
    }
  };

  var ORIG = new WeakMap();
  function getLang(){ try{ return localStorage.getItem('mmas_lang')||'en'; }catch(e){ return 'en'; } }
  function trStr(text, lang){
    var k = text.trim(); if(!k) return text;
    var d = DICT[lang]; if(!d) return text;
    var v = d[k]; if(v===undefined) return text;
    return text.replace(k, v);
  }
  function doText(node, lang){
    var o = ORIG.get(node);
    if(o===undefined){ if(!node.nodeValue || !node.nodeValue.trim()) return; o = node.nodeValue; ORIG.set(node, o); }
    var out = (lang==='en') ? o : trStr(o, lang);
    if(node.nodeValue !== out) node.nodeValue = out;
  }
  function walk(root, lang){
    if(!root) return;
    if(root.nodeType===3){ doText(root, lang); return; }
    if(root.nodeType!==1) return;
    var tag = root.tagName;
    if(tag==='SCRIPT'||tag==='STYLE'||tag==='NOSCRIPT'||root.id==='mmasLang'||(root.classList&&root.classList.contains('mmasdd'))) return;
    if(root.hasAttribute && root.hasAttribute('placeholder')){
      var op = root.getAttribute('data-i18n-ph');
      if(op===null){ op = root.getAttribute('placeholder')||''; root.setAttribute('data-i18n-ph', op); }
      root.setAttribute('placeholder', lang==='en'?op:trStr(op, lang));
    }
    var ch = root.childNodes;
    for(var i=0;i<ch.length;i++) walk(ch[i], lang);
  }
  function apply(){
    var lang = getLang();
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang==='ar') ? 'rtl' : 'ltr';
    if(document.body) walk(document.body, lang);
    hi();
  }
  function hi(){
    var lang = getLang();
    var lbl = {en:'EN',so:'SO',ar:'ع'}[lang] || 'EN';
    var dds = document.querySelectorAll('.mmasdd');
    for(var i=0;i<dds.length;i++){
      var cur = dds[i].querySelector('.mmasdd-cur'); if(cur && cur.textContent!==lbl) cur.textContent = lbl;
      var items = dds[i].querySelectorAll('[data-l]');
      for(var j=0;j<items.length;j++){ var want=(items[j].getAttribute('data-l')===lang)?'on':''; if(items[j].className!==want) items[j].className = want; }
    }
  }
  window.mmasSetLang = function(l){ try{ localStorage.setItem('mmas_lang', l); }catch(e){} var o=document.querySelector('.mmasdd.open'); if(o)o.classList.remove('open'); apply(); };
  window.mmasApplyLang = apply;

  var GLOBE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>';
  var CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
  function makeDD(){
    var d = document.createElement('div'); d.className='mmasdd';
    d.innerHTML = '<button class="mmasdd-btn" type="button">'+GLOBE+'<span class="mmasdd-cur">EN</span>'+CHEV+'</button>'+
      '<div class="mmasdd-menu">'+
      '<a data-l="en" onclick="event.stopPropagation();mmasSetLang(\'en\')">English</a>'+
      '<a data-l="so" onclick="event.stopPropagation();mmasSetLang(\'so\')">Soomaali</a>'+
      '<a data-l="ar" onclick="event.stopPropagation();mmasSetLang(\'ar\')">العربية</a>'+
      '</div>';
    d.addEventListener('click', function(e){ e.stopPropagation(); this.classList.toggle('open'); });
    return d;
  }
  function injectCSS(){
    if(document.getElementById('mmasddCSS')) return;
    var css = document.createElement('style'); css.id='mmasddCSS';
    css.textContent = '.mmasdd{position:relative;display:inline-flex;font-family:"Plus Jakarta Sans",sans-serif;-webkit-user-select:none;user-select:none}'+
      '.mmasdd-btn{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--card-border,#e6edf2);background:transparent;color:#40505c;border-radius:10px;padding:7px 10px;font-family:inherit;font-weight:700;font-size:12.5px;cursor:pointer;line-height:1}'+
      '.mmasdd-btn:hover{border-color:#B7DEF2}'+
      '.mmasdd-btn svg{width:16px;height:16px;color:#7d8b98;display:block}'+
      '.mmasdd-btn .mmasdd-cur{min-width:15px;text-align:center}'+
      '.mmasdd-menu{position:absolute;top:calc(100% + 6px);right:0;background:#fff;border:1px solid var(--card-border,#e6edf2);border-radius:12px;box-shadow:0 12px 30px rgba(14,42,62,.16);padding:5px;min-width:152px;display:none;z-index:100000}'+
      'html[dir=rtl] .mmasdd-menu{right:auto;left:0}'+
      '.mmasdd.open .mmasdd-menu{display:block}'+
      '.mmasdd-menu a{display:block;padding:9px 12px;border-radius:8px;font-size:13px;font-weight:600;color:#12212e;cursor:pointer;text-decoration:none}'+
      '.mmasdd-menu a:hover{background:#E9F5FC}'+
      '.mmasdd-menu a.on{background:#1B86C4;color:#fff}'+
      'html[dir=rtl] body{text-align:right}';
    document.head.appendChild(css);
  }
  function isLauncher(){ return !!document.querySelector('.tiles') || /MMAS-portals/i.test(location.pathname); }
  function injectDropdowns(){
    if(isLauncher()) return;
    injectCSS();
    var vn = document.querySelector('.nav');
    if(vn && !vn.querySelector('.mmasdd')){ var home = vn.querySelector('.home'); var dd=makeDD(); if(home) vn.insertBefore(dd, home); else vn.appendChild(dd); }
    var trs = document.querySelectorAll('.topbar .tr');
    for(var i=0;i<trs.length;i++){ if(!trs[i].querySelector('.mmasdd')) trs[i].insertBefore(makeDD(), trs[i].firstChild); }
    var ab = document.querySelector('.appbar .abnav');
    if(ab && !ab.querySelector('.mmasdd')){ ab.appendChild(makeDD()); }
    hi();
  }
  var _obs=null, _busy=false, _sched=false;
  function _connect(){ if(_obs){ try{ _obs.observe(document.body,{childList:true,subtree:true}); }catch(e){} } }
  function _process(muts){
    if(_busy) return; _busy=true;
    if(_obs){ try{ _obs.disconnect(); }catch(e){} }   // stop watching our own writes -> no loop
    try{
      var lang = getLang();
      if(lang!=='en'){ for(var k=0;k<muts.length;k++){ var an=muts[k].addedNodes; for(var i=0;i<an.length;i++){ walk(an[i], lang); } } }
      injectDropdowns();
    }catch(e){}
    _connect();
    _busy=false;
  }
  function start(){
    injectDropdowns();
    apply();
    document.addEventListener('click', function(){ var o=document.querySelector('.mmasdd.open'); if(o)o.classList.remove('open'); });
    try{
      _obs = new MutationObserver(function(muts){
        if(_sched) return; _sched=true;
        var run=function(){ _sched=false; _process(muts); };
        (window.requestAnimationFrame||window.setTimeout)(run, 0);
      });
      _connect();
    }catch(e){}
  }
  if(document.readyState!=='loading') start();
  else document.addEventListener('DOMContentLoaded', start);
})();
