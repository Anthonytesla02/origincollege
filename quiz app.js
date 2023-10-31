alert("put in your score in the comment box")
 
   //Questions array
            let questions = [
  {
    number: 1,
    question: "What is the active ingredient in Co-Diovan?",
    answer: "valsartan/hydrochlorothiazide",
    options: [
      "valsartan/hydrochlorothiazide",
      "hydrochlorothiazide",
      "losartan",
      "irbesartan"
    ]
  },
  {
    number: 2,
    question: "What is the active ingredient in Atacand?",
    answer: "candesartan",
    options: [
      "losartan",
      "candesartan",
      "irbesartan",
      "telmisartan"
    ]
  },
  {
    number: 3,
    question: "What is the active ingredient in Zycard?",
    answer: "candesartan",
    options: [
      "candesartan",
      "valsartan",
      "irbesartan",
      "telmisartan"
    ]
  },
  {
    number: 4,
    question: "What is the active ingredient in LG Glizone?",
    answer: "Pioglitazone",
    options: [
      "rosiglitazone",
      "Pioglitazone",
      "metformin",
      "glimepiride"
    ]
  },
  {
    number: 5,
    question: "What is the active ingredient in Diabetmin?",
    answer: "Metformin",
    options: [
      "gliclazide",
      "Metformin",
      "glimepiride",
      "sitagliptin"
    ]
  },
  {
    number: 1,
    question: "What does HTML stand for?",
    answer: "Hypertext Markup Language",
    options: [
      "Hypertensive Money Loan",
      "Hypertext Manual Log",
      "Hypertext Markup Language",
      "Hypertech Math Link"
    ]
  },
  {
    number: 2,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtended Markup Language",
      "eXtensible Markup Language",
      "eXtension Math Link",
      "eXpensive Money Loan"
    ]
  },
  {
    number: 3,
    question: "What does URL stand for?",
    answer: "Uniform Resource Locator",
    options: [
      "Universal Resource Language",
      "Uniform Resource Locator",
      "Universal Resource Locator",
      "University Resource Link"
    ]
  },
  {
    number: 4,
    question: "What does HTTP stand for?",
    answer: "Hypertext Transfer Protocol",
    options: [
      "Hypertext Transmitter Protocol",
      "Hypertest Transfer Protocol",
      "Hypertech Transit Protocol",
      "Hypertext Transfer Protocol"
    ]
  },
  {
    number: 5,
    question: "What does SEO stand for?",
    answer: "Search Engine Optimization",
    options: [
      "Search Engine Orientation",
      "Script Engine Optimization",
      "Script Entension Order",
      "Search Engine Optimization"
    ]
  },
  {
    number: 6,
    question: "What does API stand for?",
    answer: "Application Programming Interface",
    options: [
      "Application Programming Interface",
      "Appliances Programming Interface",
      "Application Programming Instruction",
      "Appliances Programming Instruction"
    ]
  },
  {
    number: 7,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Colorful Style Sheet",
      "Cascading Sheet Style",
      "Cascading Style Sheet",
      "Creative Style Sheet"
    ]
  },
  {
    number: 8,
    question: "What does DOM stand for?",
    answer: "Document Object Model",
    options: [
      "Document Object Model",
      "Docstring Object Model",
      "Doctype Object Model",
      "Document Object Module"
    ]
  },
  {
    number: 9,
    question: "What does CMS stand for?",
    answer: "Content Management System",
    options: [
      "Content Managent System",
      "Content Manager System",
      "Content Managing System",
      "Content Management System"
    ]
  },
  {
    number: 10,
    question: "What is the active ingredient in Enaphage?",
    answer: "metformin",
    options: [
      "repaglinide",
      "metformin",
      "glimepiride",
      "canagliflozin"
    ]
  },
  {
    number: 11,
    question: "What is the active ingredient in Glucophage?",
    answer: "metformin",
    options: [
      "metformin",
      "glipizide",
      "empagliflozin",
      "dapagliflozin"
    ]
  },
  {
    number: 12,
    question: "What is the active ingredient in Daonil?",
    answer: "glibenclamide",
    options: [
      "repaglinide",
      "glibenclamide",
      "glimepiride",
      "sitagliptin"
    ]
  },
  {
    number: 13,
    question: "What is the active ingredient in Amaryl?",
    answer: "glimepiride",
    options: [
      "repaglinide",
      "glibenclamide",
      "glimepiride",
      "sitagliptin"
    ]
  },
  {
    number: 14,
    question: "What is the active ingredient in Benylin cough syrup?",
    answer: "Dextromethorphan",
    options: [
      "Guaifenesin",
      "Dextromethorphan",
      "Phenylephrine",
      "Pseudoephedrine"
    ]
  },
  {
    number: 15,
    question: "Which active ingredient is commonly found in over-the-counter cold medications?",
    answer: "Acetaminophen",
    options: [
      "Naproxen",
      "Ibuprofen",
      "Acetaminophen",
      "Aspirin"
    ]
  },
  {
    number: 16,
    question: "What is the active ingredient in Sudafed?",
    answer: "Pseudoephedrine",
    options: [
      "Dextromethorphan",
      "Phenylephrine",
      "Pseudoephedrine",
      "Guaifenesin"
    ]
  },
  {
    number: 17,
    question: "Which medication is commonly used to relieve chest congestion?",
    answer: "Guaifenesin",
    options: [
      "Dextromethorphan",
      "Guaifenesin",
      "Phenylephrine",
      "Pseudoephedrine"
    ]
  },
  {
    number: 18,
    question: "What is the active ingredient in Lipitor?",
    answer: "Atorvastatin",
    options: [
      "Rosuvastatin",
      "Fluvastatin",
      "Pravastatin",
      "Atorvastatin"
    ]
  },
  {
    number: 19,
    question: "Which medication is commonly used to relieve nasal congestion?",
    answer: "Oxymetazoline",
    options: [
      "Phenylephrine",
      "Pseudoephedrine",
      "Oxymetazoline",
      "Xylometazoline"
    ]
  },
  {
    number: 20,
    question: "What is the active ingredient in Robitussin DM?",
    answer: "Dextromethorphan",
    options: [
      "Guaifenesin",
      "Dextromethorphan",
      "Phenylephrine",
      "Pseudoephedrine"
    ]
  },
  {
    number: 21,
    question: "Which medication is commonly used to lower blood pressure?",
    answer: "Lisinopril",
    options: [
      "Metoprolol",
      "Amlodipine",
      "Lisinopril",
      "Losartan"
    ]
  },
  {
    number: 22,
    question: "What is the active ingredient in Nyquil?",
    answer: "Doxylamine",
    options: [
      "Diphenhydramine",
      "Doxylamine",
      "Chlorpheniramine",
      "Phenylephrine"
    ]
  },
  {
    number: 23,
    question: "Which medication is commonly used to relieve sinus congestion?",
    answer: "Pseudoephedrine",
    options: [
      "Dextromethorphan",
      "Guaifenesin",
      "Pseudoephedrine",
      "Phenylephrine"
    ]
  },
  {
    number: 24,
    question: "What is the active ingredient in Dayquil?",
    answer: "Acetaminophen",
    options: [
      "Naproxen",
      "Ibuprofen",
      "Acetaminophen",
      "Aspirin"
    ]
  },
  {
    number: 25,
    question: "Which medication is commonly used to treat high cholesterol and triglyceride levels?",
    answer: "Ezetimibe",
    options: [
      "Simvastatin",
      "Atorvastatin",
      "Ezetimibe",
      "Rosuvastatin"
    ]
  },
  {
    number: 26,
    question: "What is the active ingredient in Zetia?",
    answer: "Ezetimibe",
    options: [
      "Simvastatin",
      "Atorvastatin",
      "Ezetimibe",
      "Rosuvastatin"
    ]
  },
  {
    number: 27,
    question: "Which medication is commonly used to reduce LDL cholesterol levels?",
    answer: "Atorvastatin",
    options: [
      "Simvastatin",
      "Atorvastatin",
      "Rosuvastatin",
      "Pravastatin"
    ]
  },
  {
    number: 28,
    question: "What is the active ingredient in Propecia?",
    answer: "Finasteride",
    options: [
      "Tamsulosin",
      "Finasteride",
      "Dutasteride",
      "Silodosin"
    ]
  },
  {
    number: 29,
    question: "Which medication is commonly used to treat chronic bronchitis?",
    answer: "Ipratropium",
    options: [
      "Albuterol",
      "Montelukast",
      "Ipratropium",
      "Fluticasone"
    ]
  },
  {
    number: 30,
    question: "What is the active ingredient in Advair Diskus?",
    answer: "Fluticasone",
    options: [
      "Albuterol",
      "Montelukast",
      "Ipratropium",
      "Fluticasone"
    ]
  },  
  {
    number: 31,
    question: "Which medication is commonly used to treat high blood pressure and high cholesterol?",
    answer: "Lisinopril",
    options: [
      "Metoprolol",
      "Amlodipine",
      "Lisinopril",
      "Losartan"
    ]
  },
  {
    number: 32,
    question: "What is the active ingredient in Avodart?",
    answer: "Dutasteride",
    options: [
      "Finasteride",
      "Tamsulosin",
      "Dutasteride",
      "Silodosin"
    ]
  },
  {
    number: 33,
    question: "Which medication is commonly used to treat acute bronchitis?",
    answer: "Amoxicillin",
    options: [
      "Azithromycin",
      "Amoxicillin",
      "Doxycycline",
      "Ciprofloxacin"
    ]
  },
  {
    number: 34,
    question: "What is the active ingredient in Albuterol?",
    answer: "Albuterol",
    options: [
      "Ipratropium",
      "Montelukast",
      "Albuterol",
      "Fluticasone"
    ]
  },
  {
    number: 35,
    question: "Which medication is commonly used to treat high triglyceride levels?",
    answer: "Gemfibrozil",
    options: [
      "Fenofibrate",
      "Gemfibrozil",
      "Ezetimibe",
      "Niacin"
    ]
  },
  {
    number: 36,
    question: "Which medication is commonly used to relieve sinus congestion?",
    answer: "Pseudoephedrine",
    options: [
      "Dextromethorphan",
      "Guaifenesin",
      "Pseudoephedrine",
      "Phenylephrine"
    ]
  },
  {
    number: 37,
    question: "What is the active ingredient in Dayquil?",
    answer: "Acetaminophen",
    options: [
      "Naproxen",
      "Ibuprofen",
      "Acetaminophen",
      "Aspirin"
    ]
  },
  {
    number: 38,
    question: "Which medication is commonly used to treat high cholesterol and triglyceride levels?",
    answer: "Ezetimibe",
    options: [
      "Simvastatin",
      "Atorvastatin",
      "Ezetimibe",
      "Rosuvastatin"
    ]
  },
  {
    number: 39,
    question: "What is the active ingredient in Zetia?",
    answer: "Ezetimibe",
    options: [
      "Simvastatin",
      "Atorvastatin",
      "Ezetimibe",
      "Rosuvastatin"
    ]
  },
  {
    number: 40,
    question: "Which medication is commonly used to reduce LDL cholesterol levels?",
    answer: "Atorvastatin",
    options: [
      "Simvastatin",
      "Atorvastatin",
      "Rosuvastatin",
      "Pravastatin"
    ]
  },
  {
    number: 41,
    question: "What is the active ingredient in Propecia?",
    answer: "Finasteride",
    options: [
      "Tamsulosin",
      "Finasteride",
      "Dutasteride",
      "Silodosin"
    ]
  },
  {
    number: 42,
    question: "Which medication is commonly used to treat chronic bronchitis?",
    answer: "Ipratropium",
    options: [
      "Albuterol",
      "Montelukast",
      "Ipratropium",
      "Fluticasone"
    ]
  },
  {
    number: 43,
    question: "What is the active ingredient in Advair Diskus?",
    answer: "Fluticasone",
    options: [
      "Albuterol",
      "Montelukast",
      "Ipratropium",
      "Fluticasone"
    ]
  },
  {
    number: 44,
    question: "Which medication is commonly used to treat high blood pressure and high cholesterol?",
    answer: "Lisinopril",
    options: [
      "Metoprolol",
      "Amlodipine",
      "Lisinopril",
      "Losartan"
    ]
  },
  {
    number: 45,
    question: "What is the active ingredient in Avodart?",
    answer: "Dutasteride",
    options: [
      "Finasteride",
      "Tamsulosin",
      "Dutasteride",
      "Silodosin"
    ]
  },
  {
    number: 46,
    question: "Which medication is commonly used to treat acute bronchitis?",
    answer: "Amoxicillin",
    options: [
      "Azithromycin",
      "Amoxicillin",
      "Doxycycline",
      "Ciprofloxacin"
    ]
  },
  {
    number: 47,
    question: "What is the active ingredient in Albuterol?",
    answer: "Albuterol",
    options: [
      "Ipratropium",
      "Montelukast",
      "Albuterol",
      "Fluticasone"
    ]
  },
  {
    number: 48,
    question: "Which medication is commonly used to treat high triglyceride levels?",
    answer: "Gemfibrozil",
    options: [
      "Fenofibrate",
      "Gemfibrozil",
      "Ezetimibe",
      "Niacin"
    ]
  },
  {
    number: 49,
    question: "What is the active ingredient in Pravachol?",
    answer: "Pravastatin",
    options: [
      "Simvastatin",
      "Atorvastatin",
      "Pravastatin",
      "Rosuvastatin"
    ]
  },
  {
    number: 50,
    question: "What is the most common symptom of gonorrhea in men?",
    answer: "Painful or burning sensation during urination",
    options: [
      "Painful or burning sensation during urination",
      "Genital itching",
      "Abnormal vaginal discharge",
      "Painful intercourse"
    ]
  },
  {
    number: 51,
    question: "What is the active ingredient in the painkiller Bayer?",
    answer: "Aspirin",
    options: [
      "Ibuprofen",
      "Naproxen",
      "Acetaminophen",
      "Aspirin"
    ]
  },
  {
    number: 52,
    question: "Which sexually transmitted infection (STI) is caused by the herpes simplex virus?",
    answer: "Herpes",
    options: [
      "Gonorrhea",
      "Chlamydia",
      "Syphilis",
      "Herpes"
    ]
  },
  {
    number: 53,
    question: "What is the generic name for the painkiller Tylenol?",
    answer: "Acetaminophen",
    options: [
      "Ibuprofen",
      "Naproxen",
      "Acetaminophen",
      "Aspirin"
    ]
  },
  {
    number: 54,
    question: "Which painkiller belongs to the class of nonsteroidal anti-inflammatory drugs (NSAIDs)?",
    answer: "Ibuprofen",
    options: [
      "Acetaminophen",
      "Naproxen",
      "Ibuprofen",
      "Aspirin"
    ]
  },
  {
    number: 55,
    question: "Which medication is commonly used to treat hypertension (high blood pressure)?",
    answer: "Lisinopril",
    options: [
      "Metoprolol",
      "Amlodipine",
      "Lisinopril",
      "Losartan"
    ]
  },
  {
    number: 56,
    question: "What is the normal range for blood pressure in adults?",
    answer: "120/80 mmHg",
    options: [
      "90/60 mmHg",
      "120/80 mmHg",
      "140/90 mmHg",
      "160/100 mmHg"
    ]
  },
  {
    number: 57,
    question: "Which anticoagulant medication is commonly prescribed to prevent blood clots?",
    answer: "Warfarin",
    options: [
      "Aspirin",
      "Clopidogrel",
      "Warfarin",
      "Rivaroxaban"
    ]
  },
  {
    number: 58,
    question: "What is the generic name for the anticoagulant medication Coumadin?",
    answer: "Warfarin",
    options: [
      "Heparin",
      "Clopidogrel",
      "Warfarin",
      "Rivaroxaban"
    ]
  },
  {
    number: 59,
    question: "Which sexually transmitted infection (STI) is caused by the bacterium Treponema pallidum?",
    answer: "Syphilis",
    options: [
      "Gonorrhea",
      "Chlamydia",
      "Syphilis",
      "Herpes"
    ]
  },
  {
    number: 60,
    question: "What is the active ingredient in the painkiller Aleve?",
    answer: "Naproxen",
    options: [
      "Ibuprofen",
      "Naproxen",
      "Acetaminophen",
      "Aspirin"
    ]
  },
  {
    number: 61,
    question: "Which medication is commonly used to treat high cholesterol levels?",
    answer: "Atorvastatin",
    options: [
      "Simvastatin",
      "Atorvastatin",
      "Rosuvastatin",
      "Pravastatin"
    ]
  },
  {
    number: 62,
    question: "What is the generic name for the anticoagulant medication Xarelto?",
    answer: "Rivaroxaban",
    options: [
      "Aspirin",
      "Clopidogrel",
      "Warfarin",
      "Rivaroxaban"
    ]
  },
  {
    number: 63,
    question: "Which sexually transmitted infection (STI) is caused by the bacterium Chlamydia trachomatis?",
    answer: "Chlamydia",
    options: [
      "Gonorrhea",
      "Chlamydia",
      "Syphilis",
      "Herpes"
    ]
  },
  {
    number: 64,
    question: "What is the most common symptom of chlamydia in women?",
    answer: "Abnormal vaginal discharge",
    options: [
      "Painful or burning sensation during urination",
      "Genital itching",
      "Abnormal vaginal discharge",
      "Painful intercourse"
    ]
  },
  {
    number: 65,
    question: "Which painkiller is known to reduce inflammation?",
    answer: "Naproxen",
    options: [
      "Acetaminophen",
      "Naproxen",
      "Ibuprofen",
      "Aspirin"
    ]
  },
  {
    number: 66,
    question: "Which anticoagulant medication is commonly prescribed for deep vein thrombosis (DVT) prevention after surgery?",
    answer: "Heparin",
    options: [
      "Aspirin",
      "Clopidogrel",
      "Warfarin",
      "Heparin"
    ]
  },
  {
    number: 67,
    question: "What is the normal heart rate range for adults at rest?",
    answer: "60-100 beats per minute",
    options: [
      "40-60 beats per minute",
      "60-100 beats per minute",
      "100-120 beats per minute",
      "120-140 beats per minute"
    ]
  },
  {
    number: 68,
    question: "Which medication is commonly used to treat chest pain or angina?",
    answer: "Nitroglycerin",
    options: [
      "Metoprolol",
      "Amlodipine",
      "Lisinopril",
      "Nitroglycerin"
    ]
  },
  {
    number: 69,
    question: "What is the generic name for the painkiller Motrin?",
    answer: "Ibuprofen",
    options: [
      "Acetaminophen",
      "Naproxen",
      "Ibuprofen",
      "Aspirin"
    ]
  },
    {
    number: 70,
    question: "Which sexually transmitted infection (STI) is caused by the human papillomavirus (HPV)?",
    answer: "Genital warts",
    options: [
      "Gonorrhea",
      "Chlamydia",
      "Syphilis",
      "Genital warts"
    ]
  },
  {
    number: 71,
    question: "Which medication is commonly used to treat pain and inflammation in arthritis?",
    answer: "Diclofenac",
    options: [
      "Naproxen",
      "Ibuprofen",
      "Diclofenac",
      "Aspirin"
    ]
  },
  {
    number: 72,
    question: "What is the most common symptom of syphilis in its primary stage?",
    answer: "Painless sore or ulcer",
    options: [
      "Painful or burning sensation during urination",
      "Genital itching",
      "Painless sore or ulcer",
      "Painful intercourse"
    ]
  },
  {
    number: 73,
    question: "Which anticoagulant medication does NOT require regular blood tests for monitoring?",
    answer: "Rivaroxaban",
    options: [
      "Aspirin",
      "Clopidogrel",
      "Warfarin",
      "Rivaroxaban"
    ]
  },
  {
    number: 74,
    question: "What is the generic name for the anticoagulant medication Plavix?",
    answer: "Clopidogrel",
    options: [
      "Heparin",
      "Clopidogrel",
      "Warfarin",
      "Rivaroxaban"
    ]
  },
  {
    number: 75,
    question: "Which sexually transmitted infection (STI) is caused by the bacterium Neisseria gonorrhoeae?",
    answer: "Gonorrhea",
    options: [
      "Gonorrhea",
      "Chlamydia",
      "Syphilis",
      "Herpes"
    ]
  },
  {
    number: 76,
    question: "What is the active ingredient in the painkiller Bayer?",
    answer: "Aspirin",
    options: [
      "Ibuprofen",
      "Naproxen",
      "Acetaminophen",
      "Aspirin"
    ]
  },
  {
    number: 77,
    question: "What is the most common cause of the common cold?",
    answer: "Rhinovirus",
    options: [
      "Influenza virus",
      "Coronavirus",
      "Rhinovirus",
      "Respiratory syncytial virus"
    ]
  },
  {
    number: 78,
    question: "Which type of asthma is triggered by exercise?",
    answer: "Exercise-induced asthma",
    options: [
      "Allergic asthma",
      "Occupational asthma",
      "Exercise-induced asthma",
      "Non-allergic asthma"
    ]
  },
  {
    number: 79,
    question: "What is the most common symptom of allergic rhinitis?",
    answer: "Sneezing",
    options: [
      "Cough",
      "Sneezing",
      "Fever",
      "Headache"
    ]
  },
  {
    number: 80,
    question: "Which anticholesterol medication works by inhibiting an enzyme involved in cholesterol synthesis?",
    answer: "Statins",
    options: [
      "Bile acid sequestrants",
      "Fibrates",
      "Niacin",
      "Statins"
    ]
  },
  {
    number: 81,
    question: "Which sexually transmitted infection (STI) is caused by the bacterium Haemophilus ducreyi?",
    answer: "Chancroid",
    options: [
      "Gonorrhea",
      "Chlamydia",
      "Chancroid",
      "Syphilis"
    ]
  },
  {
    number: 82,
    question: "What is the generic name for the painkiller Advil?",
    answer: "Ibuprofen",
    options: [
      "Acetaminophen",
      "Naproxen",
      "Ibuprofen",
      "Aspirin"
    ]
  },
  {
    number: 83,
    question: "Which medication is commonly used to treat high blood pressure during pregnancy?",
    answer: "Methyldopa",
    options: [
      "Metoprolol",
      "Amlodipine",
      "Lisinopril",
      "Methyldopa"
    ]
  },
  {
    number: 84,
    question: "What is the normal fasting blood sugar level for adults?",
    answer: "70-99 mg/dL",
    options: [
      "50-69 mg/dL",
      "70-99 mg/dL",
      "100-125 mg/dL",
      "126 mg/dL or higher"
    ]
  },
  {
    number: 85,
    question: "Which anticoagulant medication is commonly used during pregnancy to prevent blood clots?",
    answer: "Heparin",
    options: [
      "Aspirin",
      "Clopidogrel",
      "Warfarin",
      "Heparin"
    ]
  },
    {
    number: 86,
    question: "What is the generic name for the anticoagulant medication Eliquis?",
    answer: "Apixaban",
    options: [
      "Aspirin",
      "Clopidogrel",
      "Warfarin",
      "Apixaban"
    ]
  },
  {
    number: 87,
    question: "What is the most common symptom of bronchitis?",
    answer: "Persistent cough",
    options: [
      "Fever",
      "Shortness of breath",
      "Chest pain",
      "Persistent cough"
    ]
  },
  {
    number: 88,
    question: "Which painkiller is a selective COX-2 inhibitor?",
    answer: "Celecoxib",
    options: [
      "Acetaminophen",
      "Naproxen",
      "Ibuprofen",
      "Celecoxib"
    ]
  },
  {
    number: 89,
    question: "What is the primary risk factor for developing type 2 diabetes?",
    answer: "Obesity",
    options: [
      "Genetics",
      "Obesity",
      "Physical inactivity",
      "Age"
    ]
  }
];
