//UDMv3.6.3
//**DO NOT EDIT THIS *****
if (!exclude) { //********
//************************



///////////////////////////////////////////////////////////////////////////
//
//  ULTIMATE DROPDOWN MENU VERSION 3.5 by Brothercake
//  http://www.brothercake.com/dropdown/ 
//
//  Link-wrapping routine by Brendan Armstrong
//  KDE modifications by David Joham
//  Opera reload/resize routine by Michael Wallner
//  http://www.wallner-software.com/
//
//  This script featured on Dynamic Drive (http://www.dynamicdrive.com)
///////////////////////////////////////////////////////////////////////////



// *** POSITIONING AND STYLES *********************************************



var menuALIGN = "left";		// alignment
var absLEFT = 	0;		// absolute left or right position (if menu is left or right aligned)
var absTOP = 	0; 		// absolute top position

var staticMENU = false;		// static positioning mode (ie5,ie6 and ns4 only)

var stretchMENU = false;		// show empty cells
var showBORDERS = false;		// show empty cell borders

var baseHREF = "";	// base path to .js files for the script (ie: resources/)
var zORDER = 	1000;		// base z-order of nav structure (not ns4)

var mCOLOR = 	"";	// main nav cell color
var rCOLOR = 	"lightblue";	// main nav cell rollover color
var bSIZE = 	0;		// main nav border size
var bCOLOR = 	""	// main nav border color
var aLINK = 	"gray";	// main nav link color
var aHOVER = 	"black";	// main nav link hover-color (dual purpose)
var aDEC = 	"none";		// main nav link decoration
var fFONT = 	"tahoma";	// main nav font face
var fSIZE = 	13;		// main nav font size (pixels)
var fWEIGHT = 	"bold"		// main nav font weight
var tINDENT = 	7;		// main nav text indent (if text is left or right aligned)
var vPADDING = 	7;		// main nav vertical cell padding
var vtOFFSET = 	0;		// main nav vertical text offset (+/- pixels from middle)

var keepLIT =	true;		// keep rollover color when browsing menu
var vOFFSET = 	5;		// shift the submenus vertically
var hOFFSET = 	4;		// shift the submenus horizontally

var smCOLOR = 	"white";	// submenu cell color

var srCOLOR = 	"lightblue";	// submenu cell rollover color
var sbSIZE = 	1;		// submenu border size
var sbCOLOR = 	"darkgray"	// submenu border color
var saLINK = 	"black";	// submenu link color
var saHOVER = 	"black";	// submenu link hover-color (dual purpose)
var saDEC = 	"none";		// submenu link decoration
var sfFONT = 	"tahoma";// submenu font face
var sfSIZE = 	12;		// submenu font size (pixels)
var sfWEIGHT = 	"normal"	// submenu font weight
var stINDENT = 	5;		// submenu text indent (if text is left or right aligned)
var svPADDING = 0;		// submenu vertical cell padding
var svtOFFSET = 0;		// submenu vertical text offset (+/- pixels from middle)

var shSIZE =	2;		// submenu drop shadow size
var shCOLOR =	"cccccc";	// submenu drop shadow color
var shOPACITY = 75;		// submenu drop shadow opacity (not ie4,ns4 or opera)

var keepSubLIT = true;		// keep submenu rollover color when browsing child menu
var chvOFFSET = -12;		// shift the child menus vertically
var chhOFFSET = 7;		// shift the child menus horizontally

var closeTIMER = 20;		// menu closing delay time

var cellCLICK = true;		// links activate on TD click
var aCURSOR = "hand";		// cursor for active links (not ns4 or opera)

var altDISPLAY = "title";		// where to display alt text
var allowRESIZE = true;		// allow resize/reload

var redGRID = false;		// show a red grid
var gridWIDTH = 0;		// override grid width
var gridHEIGHT = 0;		// override grid height
var documentWIDTH = 0;		// override document width

var hideSELECT = true;		// auto-hide select boxes when menus open (ie only)
var allowForSCALING = false;	// allow for text scaling in mozilla 5
var allowPRINTING = true;    	// allow the navbar and menus to print (not ns4) 

//** LINKS ***********************************************************




// add main link item ("url","Link name",width,"text-alignment","_target","alt text",top position,left position,"key trigger")
addMainItem("","<span class='u'>O</span>versigt",70,"left","","",0,0,"o");

	defineSubmenuProperties(210,"left","left",-4,-5,"");

	addSubmenuItem("index.htm","Forside","","Præsentation");
	addSubmenuItem("introdan.htm","Dansk introduktion","","Formålet med denne CD");
	addSubmenuItem("introeng.htm","English introduction","","About this CD");
	addSubmenuItem("kap.htm","Kapiteloversigt","","Oversigt over bogens kapitler");
	addSubmenuItem("om.htm","Om denne CD-ROM","","Information om produktionen");

addMainItem("index.htm","<span class='u'>K</span>apitler",65,"left","","Index over kapitler",0,0,"k");

	// define submenu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
	defineSubmenuProperties(337,"left","left",-4,-70,"");

	// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("mp3/FORORD.M3U","Forord - S. 13","","");

	// define submenu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
	defineSubmenuProperties(337,"left","left",-4,-70,"");

	// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("kap1.htm","Kap. 1 : Mødet mellem læge og patient - S. 15","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(310,"left","left",0,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/HELE1.m3u","Hør hele kapitel 1","","");
		addChildmenuItem("mp3/KAP1_15.M3U","Mødet mellem læge og patient - S. 15","","");
		addChildmenuItem("mp3/KAP1_15_2.M3U","Anamnesens funktion - S. 15","","");
		addChildmenuItem("mp3/KAP1_16.M3U","Rammerne for mødet med patienten - S. 16","","");
		addChildmenuItem("mp3/KAP1_16_2.M3U","--- Indhent oplysninger - S. 16","","");
		addChildmenuItem("mp3/KAP1_17.M3U","--- Omgivelser og remedier - S. 17","","");
		addChildmenuItem("mp3/KAP1_18.M3U","--- Selve mødet - S. 18","","");
		addChildmenuItem("mp3/KAP1_19.M3U","Samtaleteknik - S. 19","","");
		addChildmenuItem("mp3/KAP1_19_2.m3u","--- At lytte - S. 19","","");
		addChildmenuItem("mp3/KAP1_19_3.M3U","--- Udviklende og afgrænsende gensvar - S. 19","","");
		addChildmenuItem("mp3/KAP1_21.M3U","--- Resumér og gentag - S. 21","","");
		addChildmenuItem("mp3/KAP1_22.m3u","--- Rund af - S. 22","","");
		addChildmenuItem("mp3/KAP1_22_2.M3U","--- Den talende og den tavse - S. 22","","");
		addChildmenuItem("mp3/KAP1_22_3.M3U","--- Lægens reaktion på den indlagte - S. 22","","");
		addChildmenuItem("mp3/KAP1_23.M3U","Specielle forhold - S. 23","","");
		
	addSubmenuItem("kap2.htm","Kap. 2 : Sygehusjournalen - S. 25","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(310,"left","left",-19,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/HELE2.M3U","Hør hele kapitel 2","","");
		addChildmenuItem("mp3/KAP2_25.M3U","Formålet med patientjournalen - S. 25","","");
		addChildmenuItem("mp3/KAP2_25_2.M3U","Sygehusjournalens indhold og opbygning - S. 25","","");
		addChildmenuItem("mp3/KAP2_27.M3U","Journaltekstens disposition - S. 27","","");
		addChildmenuItem("mp3/KAP2_27_2.M3U","S-O-A-P huskereglen - S. 27","","");
		addChildmenuItem("mp3/KAP2_29.M3U","Om journalsproget - S. 29","","");
	
	addSubmenuItem("kap3.htm","Kap. 3 : Indlæggelsesnotatet S. 31","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(320,"left","left",-38,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/HELE3.M3u","Hør hele kapitel 3","","");
		addChildmenuItem("mp3/KAP3_31.M3u","Indlæggelsesnotatet","","");
		addChildmenuItem("mp3/KAP3_31_2.M3u","Subjektivt (anamnesen) - S. 31","","");
		addChildmenuItem("mp3/KAP3_31_3.M3u","--- Journalhovedet - S. 31","","");
		addChildmenuItem("mp3/KAP3_33.M3u","--- Allergier - S. 33","","");
		addChildmenuItem("mp3/KAP3_33_2.M3u","--- Dispositioner - S. 33","","");
		addChildmenuItem("mp3/KAP3_34.M3u","--- Ekspositioner - S. 34","","");
		addChildmenuItem("mp3/KAP3_35.M3u","--- Tidligere - S. 35","","");
		addChildmenuItem("mp3/KAP3_36.M3u","--- Gynækologisk - S. 36","","");
		addChildmenuItem("mp3/KAP3_37.M3u","--- Nuværende/aktuelt - S. 37","","");
		addChildmenuItem("mp3/KAP3_39.M3u","--- Øvrige organsystemer - S. 39","","");
		addChildmenuItem("mp3/kap3_41.M3u","--- Medicin - S. 41","","");
		addChildmenuItem("mp3/KAP3_42.M3u","--- Tobak, alkohol og øvrigt misbrug - S. 42","","");
		addChildmenuItem("mp3/KAP3_42_2.M3u","--- Socialt - S. 42","","");
		addChildmenuItem("mp3/KAP3_43.M3u","Objektivt - S. 43","","");
		addChildmenuItem("mp3/KAP3_44.M3u","--- Almene fund - S. 44","","");
		addChildmenuItem("mp3/KAP3_45.M3u","--- Ydre kranie (calvaria) - S. 45","","");
		addChildmenuItem("mp3/KAP3_45_2.M3u","--- Ansigt - S. 45","","");
		addChildmenuItem("mp3/KAP3_45_3.M3u","--- Øjne - S. 45","","");
		addChildmenuItem("mp3/KAP3_46.M3u","--- Ører - S. 46","","");
		
	addSubmenuItem("kap3.htm","Kap. 3 : Indlæggelsesnotatet fortsat...","","");
		
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(350,"left","left",-57,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/KAP3_46_2.M3u","--- Mund og svælg (cavum oris et fauces) - S. 46","","");
		addChildmenuItem("mp3/KAP3_46_3.M3u","--- Halsen (collum) - S. 46","","");
		addChildmenuItem("mp3/KAP3_46_4.M3u","--- Lymfeknuder - S. 46","","");
		addChildmenuItem("mp3/KAP3_47.M3u","--- Thorax - S. 47","","");
		addChildmenuItem("mp3/KAP3_47_2.M3u","--- Ryg og rygsøjle (dorsum et columna vertebralis) - S. 47","","");
		addChildmenuItem("mp3/KAP3_47_3.M3u","--- Lungestetoskopi (St.p. stethoscopia pulmonum)- S. 47","","");
		addChildmenuItem("mp3/KAP3_48.M3u","--- Hjertestetoskopi (St.c. stethoscopia cordis) - S. 48","","");
		addChildmenuItem("mp3/KAP3_48_2.M3u","--- Abdomen - S. 48","","");
		addChildmenuItem("mp3/KAP3_49.M3u","--- Lysker (regiones inguinales) - S. 49","","");
		addChildmenuItem("mp3/KAP3_50.M3u","--- Mandlige kønsorganer (genitalia masculina) - S. 50","","");
		addChildmenuItem("mp3/KAP3_50_2.M3u","--- Gynækologisk undersøgelse (GU) - S. 50","","");
		addChildmenuItem("mp3/KAP3_50_3.M3u","--- Rektaleksploration (eksploratio rectalis) - S. 50","","");
		addChildmenuItem("mp3/KAP3_51.M3u","--- Bækken (pelvis) - S. 51","","");
		addChildmenuItem("mp3/KAP3_51_2.M3u","--- Ekstremiteter - S. 51","","");
		addChildmenuItem("mp3/KAP3_52.M3u","--- Neurologisk - S. 52","","");
		addChildmenuItem("mp3/KAP3_53.M3u","Hud - S. 53","","");
		addChildmenuItem("mp3/KAP3_53_2.M3u","Konklusion og diagnoser - S. 53","","");
		addChildmenuItem("mp3/KAP3_54.M3u","Plan - S. 54","","");
		addChildmenuItem("mp3/KAP3_54_2.M3u","--- Undersøgelse og behandling - S. 54","","");
		addChildmenuItem("mp3/KAP3_56.M3u","--- Patientinformation - S. 56","","");	
		
	addSubmenuItem("kap4.htm","Kap. 4 : Almene symptomer og fund - S. 57","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(280,"left","left",-76,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/HELE4.M3u","Hør hele kapitel 4","","");
		addChildmenuItem("mp3/KAP4_57.M3u","Nøglepunkter - S. 57","","");
		addChildmenuItem("mp3/KAP4_57_2.M3U","--- Feber - S. 57","","");
		addChildmenuItem("mp3/KAP4_58.M3U","--- Træthed og svimmelhed - S. 58","","");
		addChildmenuItem("mp3/KAP4_59.M3U","--- Appetitløshed - S. 59","","");
		addChildmenuItem("mp3/KAP4_60.M3U","--- Vægttab - S. 60","","");
		addChildmenuItem("mp3/KAP4_60_2.M3U","--- Angst - S. 60","","");
		addChildmenuItem("mp3/KAP4_61.M3U","Objektiv undersøgelse - S. 61","","");
		addChildmenuItem("mp3/KAP4_62.M3U","--- Almentilstand - S. 62","","");
		addChildmenuItem("mp3/KAP4_62_2.M3U","--- Ernæringstilstand - S. 62","","");
		addChildmenuItem("mp3/KAP4_63.M3U","--- Farve - S. 63","","");
		addChildmenuItem("mp3/KAP4_64.M3U","--- Perifer cirkulation - S. 64","","");
		addChildmenuItem("mp3/KAP4_64_2.M3U","--- Hydrering - S. 64","","");
		addChildmenuItem("mp3/KAP4_64_3.M3U","--- Respiration - S. 64","","");
		addChildmenuItem("mp3/KAP4_65.M3U","--- Lymfeknuder - S. 65","","");
		addChildmenuItem("mp3/KAP4_67.M3U","--- Asymmetrier og dysproportioner - S. 67","","");
	
	addSubmenuItem("kap5.htm","Kap. 5 : Hjertet - S. 68","","");

		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(400,"left","left",-57,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/HELE5.M3U","Hør hele kapitel 5","","");
		addChildmenuItem("mp3/KAP5_68.M3U","Nøglepunkter - S. 68","","");
		addChildmenuItem("mp3/KAP5_68_2.M3U","Symptomer - S. 68","","");
		addChildmenuItem("mp3/KAP5_69.M3U","--- Træthed og funktionsnedsættelse - S. 69","","");
		addChildmenuItem("mp3/KAP5_69_2.M3U","--- Åndenød (dyspnø) - S. 69","","");
		addChildmenuItem("mp3/KAP5_69_3.M3U","--- Brystsmerter - S. 69","","");
		addChildmenuItem("mp3/KAP5_72.M3U","--- Hjertebanken (palpitationer) - S. 72","","");
		addChildmenuItem("mp3/KAP5_73.M3U","--- Vand i benene (ødemer) - S. 73","","");
		addChildmenuItem("mp3/KAP5_73_2.M3U","Objektiv undersøgelse - S. 73","","");
		addChildmenuItem("mp3/KAP5_74.M3U","--- Inspektion, palpation og perkussion - S. 74","","");
		addChildmenuItem("mp3/KAP5_75.M3U","--- Auskultation (Stethoscopia cordis, st. c., hjertestetoskopi) - S. 75","","");
		addChildmenuItem("mp3/KAP5_76.M3U","--- Auskultation / Hjerterytme - S. 76","","");
		addChildmenuItem("mp3/KAP5_78.M3U","--- Auskultation / Ekstralyde - S. 78","","");
		addChildmenuItem("mp3/KAP5_78_2.M3U","--- Auskultation / Mislyde - S. 78","","");
	
	addSubmenuItem("kap6.htm","Kap. 6 : Lunger og luftveje - S. 83","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(400,"left","left",-76,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/HELE6.M3U","Hør hele kapitel 6","","");
		addChildmenuItem("mp3/KAP6_83.M3U","Nøglepunkter - S. 83","","");
		addChildmenuItem("mp3/KAP6_83_2.M3U","Symptomer - S. 83","","");
		addChildmenuItem("mp3/KAP6_84.M3U","--- Åndenød (dyspnø) - S. 84","","");
		addChildmenuItem("mp3/KAP6_85.M3U","--- Hvæsen og piben - S. 85","","");
		addChildmenuItem("mp3/KAP6_85_2.M3U","--- Hoste (tussis) - S. 85","","");
		addChildmenuItem("mp3/KAP6_86.M3U","--- Opspyt (sputum og haemoptysis) - S. 86","","");
		addChildmenuItem("mp3/KAP6_87.M3U","--- Brystsmerter - S. 87","","");
		addChildmenuItem("mp3/KAP6_89.M3U","Objektiv undersøgelse - S. 89","","");
		addChildmenuItem("mp3/KAP6_91.M3U","--- Inspektion - S. 91","","");
		addChildmenuItem("mp3/KAP6_92.M3U","--- Palpation - S. 92","","");
		addChildmenuItem("mp3/KAP6_92_2.M3U","--- Perkussion - S. 92","","");
		addChildmenuItem("mp3/KAP6_94.M3U","--- Auskultation (stethoscopia pulmonum; st.p., lungestetoskopi - S. 94","","");
	
	addSubmenuItem("kap7.htm","Kap. 7 : Mave-tarm-systemet - S. 97","","");

		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(350,"left","left",-76,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/HELE7.M3U","Hør hele kapitel 7","","");
		addChildmenuItem("mp3/KAP7_97.M3U","Nøglepunkter - S. 97","","");
		addChildmenuItem("mp3/KAP7_97_2.M3U","Symptomer - S. 97","","");
		addChildmenuItem("mp3/KAP7_98.M3U","--- Kvalme (nausea) og opkastning (emesis) - S. 98","","");
		addChildmenuItem("mp3/KAP7_98_2.M3U","--- Synkebesvær (dysfagi) - S. 98","","");
		addChildmenuItem("mp3/KAP7_99.M3U","--- Halsbrand (pyrosis) - S. 99","","");
		addChildmenuItem("mp3/KAP7_99_2.M3U","--- Mavesmerter (abdominalia) - S. 99","","");
		addChildmenuItem("mp3/KAP7_101.M3U","--- Afføringsmønster - S. 101","","");
		addChildmenuItem("mp3/KAP7_103.M3U","--- Gulsot (icterus) - S. 103","","");
		addChildmenuItem("mp3/KAP7_103_2.M3U","Objektiv undersøgelse - S. 103","","");
		addChildmenuItem("mp3/KAP7_104.M3U","--- Mund og svælg (cavum oris et fauces)  - S. 104","","");
		addChildmenuItem("mp3/KAP7_105.M3U","Abdomen / Inspektion - S. 105","","");
		addChildmenuItem("mp3/KAP7_107.M3U","--- Abdomen / Palpation - S. 107","","");
		addChildmenuItem("mp3/KAP7_111.M3U","--- Abdomen / Perkussion- S. 111","","");
		addChildmenuItem("mp3/KAP7_112.M3U","--- Abdomen / Auskultation- S. 112","","");
		addChildmenuItem("mp3/KAP7_112_2.M3U","Lyskerne (regiones inguinales) - S. 112","","");
		addChildmenuItem("mp3/KAP7_113.M3U","Rectum - S. 113","","");

	addSubmenuItem("kap8.htm","Kap. 8 : Nyrer, urinveje og mandlige kønsorganer - S. 116","","");

		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(350,"left","left",-95,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/HELE8.M3U","Hør hele kapitel 8","","");
		addChildmenuItem("mp3/KAP8_116.M3U","Nøglepunkter - S. 116","","");
		addChildmenuItem("mp3/KAP8_116_2.M3U","Subjektivt - S. 116","","");
		addChildmenuItem("mp3/KAP8_117.M3U","--- Smerter - S. 117","","");
		addChildmenuItem("mp3/KAP8_118.M3U","--- Svie og smerte ved vandladning (dysuri) - S. 118","","");
		addChildmenuItem("mp3/KAP8_119.M3U","--- Urge, pollakisuri og nykturi - S. 119","","");
		addChildmenuItem("mp3/KAP8_119_2.M3U","--- Vandladningsbesvær - S. 119","","");
		addChildmenuItem("mp3/KAP8_120.M3U","--- Ufrivillig vandladning (urininkontinens) - S. 120","","");
		addChildmenuItem("mp3/KAP8_120_2.M3U","--- Blodig urin (hæmaturi) - S. 120","","");
		addChildmenuItem("mp3/KAP8_122.M3U","--- Vand i kroppen (ødemer) - S.122","","");
		addChildmenuItem("mp3/KAP8_122_2.M3U","Objektiv undersøgelse - S. 122","","");
		addChildmenuItem("mp3/KAP8_122_3.M3U","De mandlige kønsorganer (genitalia masculina) - S. 122","","");
		addChildmenuItem("mp3/KAP8_123.M3U","--- De mandlige kønsorganer /  Inspektion - S. 123","","");
		addChildmenuItem("mp3/KAP8_123_2.M3U","--- De mandlige kønsorganer / Palpation - S. 123","","");
		addChildmenuItem("mp3/KAP8_125.M3U","--- Nyrer og urinveje - S. 125","","");

	addSubmenuItem("kap9.htm","Kap. 9 : Kvindelige kønsorganer - S. 127","","");

		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(350,"left","left",-76,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/HELE9.M3U","Hør hele kapitel 9","","");
		addChildmenuItem("mp3/KAP9_127.M3U","Nøglepunkter - S. 127","","");
		addChildmenuItem("mp3/KAP9_127_2.M3U","Symptomer - S. 127","","");
		addChildmenuItem("mp3/KAP9_128.M3U","--- Blødningsforstyrrelser - S. 128","","");
		addChildmenuItem("mp3/KAP9_129.M3U","--- Underlivssmerter - S. 129","","");
		addChildmenuItem("mp3/KAP9_129_2.M3U","--- Udflåd (flour) - S. 129","","");
		addChildmenuItem("mp3/KAP9_130.M3U","--- Hormoner og antikonception - S. 130","","");
		addChildmenuItem("mp3/KAP9_130_2.M3U","--- Den gravide patient - S. 130","","");
		addChildmenuItem("mp3/KAP9_131.M3U","Objektivt - S. 131","","");
		addChildmenuItem("mp3/KAP9_131_2.M3U","--- Den gynækologiske undersøgelse (GU) - S. 131","","");
		addChildmenuItem("mp3/KAP9_132.M3U","--- (GU) / Inspektion - S. 132","","");
		addChildmenuItem("mp3/KAP9_134.M3U","--- (GU) / Eksploration- S. 131","","");

	addSubmenuItem("kap10.htm","Kap. 10 : Bevægeapparatet - S. 136","","");

		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(350,"left","left",-190,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/HELE10.M3U","Hør hele kapitel 10","","");
		addChildmenuItem("mp3/KAP10_136.M3U","Nøglepunkter - S. 136","","");
		addChildmenuItem("mp3/KAP10_136_2.M3U","Symptomer - S. 136","","");
		addChildmenuItem("mp3/KAP10_137.M3U","--- Smerter - S. 137","","");
		addChildmenuItem("mp3/KAP10_138.M3U","--- Stivhed - S. 138","","");
		addChildmenuItem("mp3/KAP10_139.M3U","--- Hævelse - S. 139","","");
		addChildmenuItem("mp3/KAP10_139_2.M3U","--- Funktionsnedsættelse - S. 139","","");
		addChildmenuItem("mp3/KAP10_140.M3U","Objektiv undersøgelse - S. 140","","");
		addChildmenuItem("mp3/KAP10_140_2.M3U","--- Generelle principper - S. 140","","");
		addChildmenuItem("mp3/KAP10_140_3.M3U","--- Inspektion - S. 140","","");
		addChildmenuItem("mp3/KAP10_141.M3U","--- Palpation - S. 141","","");
		addChildmenuItem("mp3/KAP10_141_2.M3U","--- Funktionsvurdering - S. 141","","");
		addChildmenuItem("mp3/KAP10_142.M3U","--- Regional undersøgelse - S. 142","","");
		addChildmenuItem("mp3/KAP10_142.M3U","--- Ryg og rygsøjle (dorsum et columna vertebralis) - S. 142","","");
		addChildmenuItem("mp3/KAP10_145.M3U","--- Skulder (regio glenohumerale) - S. 145","","");
		addChildmenuItem("mp3/KAP10_147.M3U","--- Albuen (cubitus) - S. 147","","");
		addChildmenuItem("mp3/KAP10_148.M3U","--- Underarm og håndled (antebrachium et carpus) - S. 148","","");
		addChildmenuItem("mp3/KAP10_148_2.M3U","--- Hånden (manus) - S. 148","","");
		addChildmenuItem("mp3/KAP10_151.M3U","--- Hofte og bækken - S. 151","","");
		addChildmenuItem("mp3/KAP10_152.M3U","--- Knæet (genu) - S. 152","","");
		addChildmenuItem("mp3/KAP10_153.M3U","--- Ankel og fod (pes) - S. 153","","");

	addSubmenuItem("kap11.htm","Kap. 11 : Centralnervesystemet - S. 154","","");

		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(420,"left","left",-228,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/HELE11.M3U","Hør hele kapitel 11","","");
		addChildmenuItem("mp3/KAP11_154.M3U","Nøglepunkter - S. 154","","");
		addChildmenuItem("mp3/KAP11_154_2.M3U","Symptomer - S. 154","","");
		addChildmenuItem("mp3/KAP11_155.M3U","--- Hovedpine (cephalalgia) - S. 155","","");
		addChildmenuItem("mp3/KAP11_156.M3U","--- Svimmelhed (vertigo) - S. 156","","");
		addChildmenuItem("mp3/KAP11_156_2.M3U","--- Bevidsthedstab - S. 156","","");
		addChildmenuItem("mp3/KAP11_158.M3U","--- Kramper (convulsiones) - S. 158","","");
		addChildmenuItem("mp3/KAP11_159.M3U","--- Sprogforstyrrelser - S. 159","","");
		addChildmenuItem("mp3/KAP11_160.M3U","--- Synsforstyrrelser - S. 160","","");
		addChildmenuItem("mp3/KAP11_160_2.M3U","--- Føleforstyrrelser - S. 160","","");
		addChildmenuItem("mp3/KAP11_161.M3U","--- Kraftnedsættelse - S. 161","","");
		addChildmenuItem("mp3/KAP11_161_2.M3U","--- Styringsbesvær - S. 161","","");
		addChildmenuItem("mp3/KAP11_161_3.M3U","--- Gangbesvær - S. 161","","");
		addChildmenuItem("mp3/KAP11_162.M3U","Objektiv undersøgelse - S. 162","","");
		addChildmenuItem("mp3/KAP11_162_2.M3U","--- Bevidsthedsniveau - S. 162","","");
		addChildmenuItem("mp3/KAP11_163.M3U","--- Objektiv psykisk tilstand - S. 163","","");
		addChildmenuItem("mp3/KAP11_164.M3U","--- Sprog - S. 164","","");
		addChildmenuItem("mp3/KAP11_165.M3U","--- Hoved, hals og rygsøjle (cranium, collum et columna vertebralis) - S. 165","","");
		addChildmenuItem("mp3/KAP11_166.M3U","--- Hjernenerverne - S. 166","","");
		addChildmenuItem("mp3/KAP11_169.M3U","--- Motorik - S. 169","","");
		addChildmenuItem("mp3/KAP11_174.M3U","--- Sensibilitet - S. 174","","");

	addSubmenuItem("kap12.htm","Kap. 12 : Det perifere karsystem - S. 178","","");

		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(410,"left","left",-76,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/HELE12.M3U","Hør hele kapitel 12","","");
		addChildmenuItem("mp3/KAP12_178.M3U","Nøglepunkter - S. 178","","");
		addChildmenuItem("mp3/KAP12_179.M3U","Symptomer - S. 179","","");
		addChildmenuItem("mp3/KAP12_180.M3U","--- Smerter i benene (cruralgia) - S. 180","","");
		addChildmenuItem("mp3/KAP12_181.M3U","--- Hævede ben (ødemer) - S. 181","","");
		addChildmenuItem("mp3/KAP12_181_2.M3U","--- Bensår (ulcus cruris, pedis) - S. 181","","");
		addChildmenuItem("mp3/KAP12_182.M3U","--- Øvrige symptomer - S. 182","","");
		addChildmenuItem("mp3/KAP12_182_2.M3U","Objektiv undersøgelse - S. 182","","");
		addChildmenuItem("mp3/KAP12_183.M3U","--- Inspektion - S. 183","","");
		addChildmenuItem("mp3/KAP12_185.M3U","--- Auskultation - S. 185","","");
		addChildmenuItem("mp3/KAP12_185_2.M3U","--- Palpation - S. 185","","");

	addSubmenuItem("kap13.htm","Kap. 13 : Kirtler - S. 187","","");

		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(410,"left","left",-247,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/HELE13.M3U","Hør hele kapitel 13","","");
		addChildmenuItem("mp3/KAP13_187.M3U","Nøglepunkter - S. 187","","");
		addChildmenuItem("mp3/KAP13_187_2.M3U","Skjoldbruskkirtlen (glandula thyroidea) - S. 187","","");
		addChildmenuItem("mp3/KAP13_187_4.M3U","--- Symptomer - S. 187","","");
		addChildmenuItem("mp3/KAP13_187_3.M3U","--- Hypertyreose - S. 187","","");
		addChildmenuItem("mp3/KAP13_188.M3U","--- Hypotyreose - S. 188","","");
		addChildmenuItem("mp3/KAP13_188_2.M3U","--- Struma og en knude på halsen - S. 188","","");
		addChildmenuItem("mp3/KAP13_189.M3U","Objektiv undersøgelse - S. 189","","");
		addChildmenuItem("mp3/KAP13_189_2.M3U","--- Inspektion - S. 189","","");
		addChildmenuItem("mp3/KAP13_189_3.M3U","--- Palpation - S. 189","","");
		addChildmenuItem("mp3/KAP13_190.M3U","Bryster (mammae) - S. 190","","");
		addChildmenuItem("mp3/KAP13_190.M3U","Symptomer - S. 190","","");
		addChildmenuItem("mp3/KAP13_190_2.M3U","--- Smerter (mastalgi) - S. 190","","");
		addChildmenuItem("mp3/KAP13_190_3.M3U","--- Udflåd - S. 190","","");
		addChildmenuItem("mp3/KAP13_191.M3U","--- En knude i brystet - S. 191","","");
		addChildmenuItem("mp3/KAP13_191_2.M3U","--- Gynækomasti - S. 191","","");
		addChildmenuItem("mp3/KAP13_191_3.M3U","Objektiv undersøgelse - S. 191","","");
		addChildmenuItem("mp3/KAP13_192.M3U","--- Inspektion - S. 192","","");
		addChildmenuItem("mp3/KAP13_192_2.M3U","--- Palpation - S. 192","","");

	addSubmenuItem("kap14.htm","Kap. 14 : Hud - S. 194","","");

		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(410,"left","left",-57,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/HELE14.M3U","Hør hele kapitel 14","","");
		addChildmenuItem("mp3/KAP14_194.M3U","Nøglepunkter - S. 194","","");
		addChildmenuItem("mp3/KAP14_194_2.M3U","Symptomer - S. 194","","");
		addChildmenuItem("mp3/KAP14_194_3.M3U","--- Kløe (pruritus) - S. 194","","");
		addChildmenuItem("mp3/KAP14_195.M3U","--- Udslæt (exanthema) - S. 195","","");
		addChildmenuItem("mp3/KAP14_195_2.M3U","--- Sår (ulcus) - S. 195","","");
		addChildmenuItem("mp3/KAP14_195_3.M3U","Objektiv undersøgelse - S. 195","","");
		addChildmenuItem("mp3/KAP14_196.M3U","--- Inspektion og palpation - S. 196","","");

	addSubmenuItem("kap15.htm","Kap. 15 : Sanseorganer - S. 201","","");

		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(410,"left","left",-114,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/HELE15.M3U","Hør hele kapitel 15","","");
		addChildmenuItem("mp3/KAP15_201.M3U","Nøglepunkter - S. 201","","");
		addChildmenuItem("mp3/KAP15_201_2.M3U","Symptomer - S. 201","","");
		addChildmenuItem("mp3/KAP15_201_3.M3U","--- Høretab (hypacusis) - S. 201","","");
		addChildmenuItem("mp3/KAP15_202.M3U","--- Øresusen (tinnitus) - S. 202","","");
		addChildmenuItem("mp3/KAP15_202_2.M3U","--- Svimmelhed (vertigo) - S. 202","","");
		addChildmenuItem("mp3/KAP15_203.M3U","--- Synstab (amblyopia et amaurosis) - S. 203","","");
		addChildmenuItem("mp3/KAP15_203_2.M3U","Objektiv undersøgelse - S. 203","","");
		addChildmenuItem("mp3/KAP15_203_3.M3U","--- Otoskopi - S. 203","","");	
		addChildmenuItem("mp3/KAP15_204.M3U","--- Øjne - S. 204","","");
		
	addSubmenuItem("reg.htm","Stikordsregister - S. 207","","");
		
	addSubmenuItem("mp3/OP-JOUR.M3U","Opbygningen af standardjournalen - Bagerste inderside","","");		

addMainItem("index.htm","<span class='u'>B</span>okse",65,"left","","Index over bokse",0,0,"b");

	// define submenu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
	defineSubmenuProperties(300,"left","left",-4,-40,"");

	// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("mp3/BOKS-SIG.M3U","Forkortelser >","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(170,"left","left",0,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/BOKS-SIG.M3U","GAH = Godt at huske","","");
		addChildmenuItem("mp3/BOKS-SIG.M3U","ANA = Anamnese","","");
		addChildmenuItem("mp3/BOKS-SIG.M3U","INS = Inspektion","","");
		addChildmenuItem("mp3/BOKS-SIG.M3U","PAL = Palpation","","");
		addChildmenuItem("mp3/BOKS-SIG.M3U","PER = Perkussion","","");
		addChildmenuItem("mp3/BOKS-SIG.M3U","AUS = Auskultation","","");

	// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("kap1.htm","Kap. 1 : Mødet mellem læge og patient","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(300,"left","left",0,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/BOKS15.M3U","GAH - Patienttilfredshed - S. 15","","");
		addChildmenuItem("mp3/BOKS17.M3U","GAH - Forbered dig til mødet med pt. - S. 17","","");
		addChildmenuItem("mp3/BOKS17B.M3U","GAH - Undersøgelsesremedier - S. 17","","");
		addChildmenuItem("mp3/BOKS18.M3U","GAH - Mødet med patienten - S. 18","","");
		addChildmenuItem("mp3/BOKS21.M3U","ANA - Åbne spørgsmål er generelle - S. 21","","");
		addChildmenuItem("mp3/BOKS21B.M3U","ANA - Lukkede spørgsmål er konkrete - S. 21","","");
		addChildmenuItem("mp3/BOKS23.M3U","GAH – Patienter, der ikke taler dansk - S. 23","","");
		addChildmenuItem("mp3/BOKS24.M3U","GAH - Døve og tunghøre - S. 24","","");
		addChildmenuItem("mp3/BOKS24B.M3U","GAH - Blinde og svagtseende - S. 24","","");
		
	addSubmenuItem("kap2.htm","Kap. 2 : Sygehusjournalen","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(300,"left","left",9,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/BOKS26.M3U","GAH - Sygehusjournalens opbygning - S. 26","","");
	
	addSubmenuItem("kap3.htm","Kap. 3 : Indlæggelsesnotatet","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(300,"left","left",-19,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/BOKS32.M3U","GAH - Opbygningen af standardjournalen - S. 32","","");
		addChildmenuItem("mp3/BOKS37.M3U","GAH - Genindlæggelse - S. 37","","");
		addChildmenuItem("mp3/BOKS39.M3U","GAH - Nuværende - S. 39","","");
		addChildmenuItem("mp3/BOKS44.M3U","GAH - Adfærdstermer - S. 44","","");

	addSubmenuItem("kap4.htm","Kap. 4 : Almene symptomer og fund","","");
		
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(300,"left","left",-57,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/BOKS57.M3U","GAH - Almene symptomer - S. 57","","");
		addChildmenuItem("mp3/BOKS58.M3U","ANA - Feber - S. 58","","");
		addChildmenuItem("mp3/BOKS58B.M3U","GAH - Årsager til patologisk træthed - S. 58","","");
		addChildmenuItem("mp3/BOKS59.M3U","GAH – >>Svimmelhed<< - S. 59","","");
		addChildmenuItem("mp3/BOKS60.M3U","ANA - Vægttab - S. 60","","");
		addChildmenuItem("mp3/BOKS61.M3U","ANA - Angst - S. 61","","");
		addChildmenuItem("mp3/BOKS62.M3U","GAH - Almentilstand - S. 62","","");
		addChildmenuItem("mp3/BOKS63.M3U","GAH - Ernæringstilstand - S. 63","","");
		addChildmenuItem("mp3/BOKS63B.M3U","GAH - Body Mass Index (BMI) - S. 63","","");
		addChildmenuItem("mp3/BOKS64.M3U","GAH - Universelle misfarvninger - S. 64","","");
		addChildmenuItem("mp3/BOKS66A.M3U","PAL - Lymfadenopati - S. 66","","");
		addChildmenuItem("mp3/BOKS66B.M3U","GAH - Årsager til universel lymfadenopati - S. 66","","");

	addSubmenuItem("kap5.htm","Kap. 5 : Hjertet","","");
		
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(300,"left","left",-57,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/BOKS68.M3U","ANA - Hjertesygdom - S. 68","","");
		addChildmenuItem("mp3/BOKS69.M3U","ANA - Åndenød - S. 69","","");
		addChildmenuItem("mp3/BOKS70A.M3U","ANA - Hjertekrampe (angina pectoris) - S. 70","","");
		addChildmenuItem("mp3/BOKS70B.M3U","GAH - Karakteristika for stabil angina pectoris - S. 70","","");
		addChildmenuItem("mp3/BOKS71.M3U","GAH - Iskæmiske brystsmerter - S. 71","","");
		addChildmenuItem("mp3/BOKS72.M3U","ANA - Hjertebanken - S. 72","","");
		addChildmenuItem("mp3/BOKS74.M3U","ANA - Hjerteinsufficiens - S. 74","","");
		addChildmenuItem("mp3/BOKS77.M3U","AUS - Hjertestetoskopi - S. 77","","");
		addChildmenuItem("mp3/BOKS80A.M3U","GAH - Mislyde - styrke - S. 80","","");
		addChildmenuItem("mp3/BOKS80B.M3U","GAH - Obs! - S. 80","","");
		addChildmenuItem("mp3/BOKS81.M3U","GAH - Systoliske mislyde - S. 81","","");
		addChildmenuItem("mp3/BOKS82.M3U","GAH - Diastoliske mislyde - S. 82","","");

	addSubmenuItem("kap6.htm","Kap. 6 : Lunger og luftveje","","");
		
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(300,"left","left",-57,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/BOKS83.M3U","ANA - Luftveje - S. 83","","");
		addChildmenuItem("mp3/BOKS84.M3U","ANA - Åndenød - S. 84","","");
		addChildmenuItem("mp3/BOKS84B.M3U","GAH - Årsager til åndenød - akut eller kronisk? - S. 84","","");
		addChildmenuItem("mp3/BOKS85.M3U","GAH - Hyperventilationstilfælde - S. 85","","");
		addChildmenuItem("mp3/BOKS86.M3U","ANA - Hoste - S. 86","","");
		addChildmenuItem("mp3/BOKS86B.M3U","ANA - Opspyt - S. 86","","");
		addChildmenuItem("mp3/BOKS87.M3U","GAH - Opspyt - S. 87","","");
		addChildmenuItem("mp3/BOKS88.M3U","ANA - Brystsmerter - S. 88","","");
		addChildmenuItem("mp3/BOKS88B.M3U","GAH - Brystsmerter - S. 88","","");
		addChildmenuItem("mp3/BOKS89.M3U","GAH - Ændret vejrtrækningsmønster - S. 89","","");
		addChildmenuItem("mp3/BOKS90.M3U","GAH - Cyanose (blålig misfarvning)- S. 90","","");
		addChildmenuItem("mp3/BOKS91.M3U","INS - Inspektion - S. 91","","");
		addChildmenuItem("mp3/BOKS93.M3U","PAL - Palpation - S. 93","","");
		addChildmenuItem("mp3/BOKS95.M3U","AUS - Lungestetoskopi - S. 95","","");
		addChildmenuItem("mp3/BOKS96.M3U","GAH - Bilyde - S. 96","","");
 
	addSubmenuItem("kap7.htm","Kap. 7 : Mave-tarm-systemet","","");
		
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(300,"left","left",-57,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/BOKS97.M3U","ANA - Mave-tarm-systemet - S. 97","","");
		addChildmenuItem("mp3/BOKS98.M3U","ANA - Kvalme og opkastning - S. 98","","");
		addChildmenuItem("mp3/BOKS99.M3U","ANA - Halsbrand - S. 99","","");
		addChildmenuItem("mp3/BOKS100.M3U","ANA - Mavesmerter - S. 100","","");
		addChildmenuItem("mp3/BOKS101.M3U","ANA - Obstipation - S. 101","","");
		addChildmenuItem("mp3/BOKS102A.M3U","ANA - Diaré - S. 102","","");
		addChildmenuItem("mp3/BOKS102B.M3U","ANA - Blod i afføringen - S. 102","","");
		addChildmenuItem("mp3/BOKS103.M3U","ANA - Gulsot - S. 103","","");
		addChildmenuItem("mp3/BOKS106.M3U","INS - Inspektion af abdomen - S. 106","","");
		addChildmenuItem("mp3/BOKS107.M3U","PAL - Palpation af abdomen - S. 107","","");
		addChildmenuItem("mp3/BOKS109.M3U","GAH - Stigmata ved leversygdom - S. 109","","");
		addChildmenuItem("mp3/BOKS111.M3U","GAH - Årsager til splenomegali - S. 111","","");
		addChildmenuItem("mp3/BOKS112.M3U","PER - Perkussion af abdomen - S. 112","","");
		addChildmenuItem("mp3/BOKS113.M3U","GAH - Lyske- og lårbrok - S. 113","","");

	addSubmenuItem("kap8.htm","Kap. 8 : Nyrer, urinveje og mandlige kønsorganer","","");
		
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(300,"left","left",-57,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/BOKS117.M3U","ANA - Nyrer og urinveje - S. 117","","");
		addChildmenuItem("mp3/BOKS117B.M3U","ANA - Smerte - S. 117","","");
		addChildmenuItem("mp3/BOKS118.M3U","ANA - Dysuri - S. 118","","");
		addChildmenuItem("mp3/BOKS119.M3U","GAH - Prostatisme - S. 119","","");
		addChildmenuItem("mp3/BOKS120.M3U","ANA - Urinkontinens - S. 120","","");
		addChildmenuItem("mp3/BOKS121A.M3U","ANA - Hæmaturi - S. 121","","");
		addChildmenuItem("mp3/BOKS121B.M3U","GAH - Årsager til hæmaturi - S. 121","","");
		addChildmenuItem("mp3/BOKS123.M3U","PAL - Testiklerne (palpation) - S. 123","","");

	addSubmenuItem("kap9.htm","Kap. 9 : Kvindelige kønsorganer","","");
		
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(300,"left","left",-57,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/BOKS127.M3U","ANA - Gynækologi - S. 127","","");
		addChildmenuItem("mp3/BOKS128A.M3U","ANA - Blødningsforstyrrelser - S. 128","","");
		addChildmenuItem("mp3/BOKS128B.M3U","GAH - Blødningsterminologi - S. 128","","");
		addChildmenuItem("mp3/BOKS129.M3U","ANA - Underlivssmerter - S. 129","","");
		addChildmenuItem("mp3/BOKS130A.M3U","ANA - Udflåd - S. 130","","");
		addChildmenuItem("mp3/BOKS130B.M3U","ANA - Den gravide patient - S. 130","","");
		addChildmenuItem("mp3/BOKS132.M3U","GAH - Den vellykkede GU - S. 132","","");
		addChildmenuItem("mp3/BOKS133.M3U","GAH - Nedsynkning og fremfald - S. 133","","");

	addSubmenuItem("kap10.htm","Kap. 10 : Bevægeapparatet","","");
		
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(330,"left","left",-57,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/BOKS136.M3U","ANA - Bevægeapparatet - S. 136","","");
		addChildmenuItem("mp3/BOKS137.M3U","ANA - Smerte - S. 137","","");
		addChildmenuItem("mp3/BOKS139.M3U","ANA - Funktionsnedsættelse - S. 139","","");
		addChildmenuItem("mp3/BOKS139B.M3U","GAH - Funktionsnedsættelse - S. 139","","");
		addChildmenuItem("mp3/BOKS143.M3U","ANA - Bevægelighed i columna cervicalis - S. 143","","");
		addChildmenuItem("mp3/BOKS149.M3U","GAH - Håndmanifestationer ved gigtsygdomme - S. 149","","");

	addSubmenuItem("kap11.htm","Kap. 11 : Centralnervesystemet","","");
		
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(330,"left","left",-209,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/BOKS155.M3U","ANA - Nervesystemet - S. 155","","");
		addChildmenuItem("mp3/BOKS155B.M3U","ANA - Nervesystemet - S. 155","","");
		addChildmenuItem("mp3/BOKS156.M3U","ANA - Hovedpine - S. 156","","");
		addChildmenuItem("mp3/BOKS157.M3U","ANA - Anfald af bevidsthedstab - S. 157","","");
		addChildmenuItem("mp3/BOKS157B.M3U","ANA - Anfald af bevidsthedstab - S. 157","","");
		addChildmenuItem("mp3/BOKS158.M3U","GAH - Epilepsi - anfaldsformer - S. 158","","");
		addChildmenuItem("mp3/BOKS159.M3U","ANA - Kramper - S. 159","","");
		addChildmenuItem("mp3/BOKS159B.M3U","ANA - Sprogforstyrrelser - S. 159","","");
		addChildmenuItem("mp3/BOKS160A.M3U","ANA - Synsforstyrrelser - S. 160","","");
		addChildmenuItem("mp3/BOKS160B.M3U","ANA - Føleforstyrrelser (paræstesier) - S. 160","","");
		addChildmenuItem("mp3/BOKS162.M3U","ANA - Gangfunktion - S. 162","","");
		addChildmenuItem("mp3/BOKS163.M3U","GAH - Bevidsthedsniveau - S. 163","","");
		addChildmenuItem("mp3/BOKS163B.M3U","ANA - Hukommelse og orientering - S. 163","","");
		addChildmenuItem("mp3/BOKS164.M3U","GAH - Glasgow Coma Scale - S. 164","","");
		addChildmenuItem("mp3/BOKS165.M3U","GAH - Afasiformer - S. 165","","");
		addChildmenuItem("mp3/BOKS166.M3U","GAH - Hjernenerver - S. 166","","");
		addChildmenuItem("mp3/BOKS170.M3U","GAH - Kraftnedsættelse - S. 170","","");
		addChildmenuItem("mp3/BOKS171.M3U","GAH - Lumbal rodaffektion - S. 171","","");
		addChildmenuItem("mp3/BOKS171B.M3U","GAH - Underekstremitetens nerver - S. 171","","");
		addChildmenuItem("mp3/BOKS172.M3U","GAH - Overekstremitetens nerver - S. 172","","");
		addChildmenuItem("mp3/BOKS177.M3U","GAH - Central eller perifer parese - S. 177","","");
		
	addSubmenuItem("kap12.htm","Kap. 12 : Det perifere karsystem","","");
		
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(330,"left","left",-38,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/BOKS178.M3U","GAH - Signalement af patient med aterosklerose - S. 178","","");
		addChildmenuItem("mp3/BOKS179A.M3U","ANA - Det perifere karsystem - S. 179","","");
		addChildmenuItem("mp3/BOKS179B.M3U","GAH - Akut arteriel okklusion - S. 179","","");
		addChildmenuItem("mp3/BOKS180.M3U","GAH - Akut arteriel okklusion - S. 180","","");
		addChildmenuItem("mp3/BOKS181.M3U","GAH - Bensår - S. 181","","");
		addChildmenuItem("mp3/BOKS183.M3U","INS - Inspektion - S. 183","","");
		addChildmenuItem("mp3/BOKS185.M3U","PAL - Palpation af perifere pulse - S. 185","","");

	addSubmenuItem("kap13.htm","Kap. 13 : Kirtler","","");
		
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(330,"left","left",-38,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/BOKS188.M3U","ANA - Hypertyreose - S. 188","","");
		addChildmenuItem("mp3/BOKS188B.M3U","ANA - Hypotyreose - S. 188","","");
		addChildmenuItem("mp3/BOKS190.M3U","ANA - Mastalgi - S. 190","","");
		addChildmenuItem("mp3/BOKS191.M3U","ANA - En knude i brystet - S. 191","","");
		addChildmenuItem("mp3/BOKS193.M3U","PAL - Tumor mammae - S. 193","","");

	addSubmenuItem("kap14.htm","Kap. 14 : Hud","","");
		
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(330,"left","left",-0,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/BOKS194.M3U","ANA - Kløe - S. 194","","");
		addChildmenuItem("mp3/BOKS195.M3U","ANA - Udslæt - S. 195","","");
		addChildmenuItem("mp3/BOKS196A.M3U","PAL - Hudens konsistens - S. 196","","");
		addChildmenuItem("mp3/BOKS196B.M3U","INS - Hudforandringer - S. 196","","");

	addSubmenuItem("kap15.htm","Kap. 15 : Sanseorganer","","");
		
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(330,"left","left",-19,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/BOKS201.M3U","ANA - Høretab - S. 201","","");
		addChildmenuItem("mp3/BOKS202.M3U","ANA - Svimmelhed - S. 202","","");
		addChildmenuItem("mp3/BOKS203.M3U","ANA - Synstab - S. 203","","");
		addChildmenuItem("mp3/BOKS205.M3U","GAH - Pupilforandringer - S. 205","","");

addMainItem("index.htm","<span class='u'>F</span>igurer",65,"left","","Index over figurer",0,0,"f");

	// define submenu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
	defineSubmenuProperties(300,"left","left",-4,-20,"");

	// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("kap4.htm","Kap. 4 : Almene symptomer og fund","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(120,"left","left",0,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/FIG6-1.M3U","Fig. 4.1 - S. 65","","");
		addChildmenuItem("mp3/FIG4-2.M3U","Fig. 4.2 - S. 65","","");

	// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("kap5.htm","Kap. 5 : Hjertet","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(120,"left","left",0,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/FIG5-1.M3U","Fig. 5.1 - S. 70","","");
		addChildmenuItem("mp3/FIG5-2.M3U","Fig. 5.2 - S. 75","","");
		addChildmenuItem("mp3/FIG5-3.M3U","Fig. 5.3 - S. 75","","");
		addChildmenuItem("mp3/FIG5-4.M3U","Fig. 5.4 - S. 76","","");
		addChildmenuItem("mp3/FIG5-5.M3U","Fig. 5.5 - S. 77","","");
		addChildmenuItem("mp3/FIG5-6.M3U","Fig. 5.6 - S. 79","","");
		addChildmenuItem("mp3/FIG5-7.M3U","Fig. 5.7 - S. 79","","");
		
		// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("kap6.htm","Kap. 6 : Lunger og luftveje","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(120,"left","left",0,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/FIG6-1.M3U","Fig. 6.1 - S. 92","","");
		addChildmenuItem("mp3/FIG6-2.M3U","Fig. 6.2 - S. 93","","");
		addChildmenuItem("mp3/FIG6-3.M3U","Fig. 6.3 - S. 93","","");
		addChildmenuItem("mp3/FIG6-4.M3U","Fig. 6.4 - S. 94","","");
		
				// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("kap7.htm","Kap. 7 : Mave-tarm-systemet","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(120,"left","left",0,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/FIG7-1.M3U","Fig. 7.1 - S. 100","","");
		addChildmenuItem("mp3/FIG7-2.M3U","Fig. 7.2 - S. 104","","");
		addChildmenuItem("mp3/FIG7-3.M3U","Fig. 7.3 - S. 105","","");
		addChildmenuItem("mp3/FIG7-4.M3U","Fig. 7.4 - S. 106","","");
		addChildmenuItem("mp3/FIG7-5.M3U","Fig. 7.5 - S. 107","","");
		addChildmenuItem("mp3/FIG7-6.M3U","Fig. 7.6 - S. 108","","");
		addChildmenuItem("mp3/FIG7-7.M3U","Fig. 7.7 - S. 110","","");
		addChildmenuItem("mp3/FIG7-8.M3U","Fig. 7.8 - S. 115","","");
		
						// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("kap8.htm","Kap. 8 : Nyrer, urinveje og mandlige kønsorganer","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(120,"left","left",0,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/FIG8-1.M3U","Fig. 8.1 - S. 118","","");
		addChildmenuItem("mp3/FIG8-2.M3U","Fig. 8.2 - S. 124","","");
		addChildmenuItem("mp3/FIG8-3.M3U","Fig. 8.3 - S. 125","","");
		addChildmenuItem("mp3/FIG8-4.M3U","Fig. 8.4 - S. 126","","");
		addChildmenuItem("mp3/FIG8-5.M3U","Fig. 8.5 - S. 126","","");

				// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("kap9.htm","Kap. 9 : Kvindelige kønsorganer","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(120,"left","left",0,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/FIG9-1.M3U","Fig. 9.1 - S. 131","","");
		addChildmenuItem("mp3/FIG9-2.M3U","Fig. 9.2 - S. 133","","");
		addChildmenuItem("mp3/FIG9-3.M3U","Fig. 9.3 - S. 133","","");
		addChildmenuItem("mp3/FIG9-4.M3U","Fig. 9.4 - S. 134","","");
		addChildmenuItem("mp3/FIG9-5.M3U","Fig. 9.5 - S. 135","","");
		addChildmenuItem("mp3/FIG9-6.M3U","Fig. 9.6 - S. 135","","");

				// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("kap10.htm","Kap. 10 : Bevægeapparatet","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(120,"left","left",-114,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/FIG10-1.M3U","Fig. 10.1 - S. 142","","");
		addChildmenuItem("mp3/FIG10-2.M3U","Fig. 10.2 - S. 142","","");
		addChildmenuItem("mp3/FIG10-3.M3U","Fig. 10.3 - S. 143","","");
		addChildmenuItem("mp3/FIG10-4.M3U","Fig. 10.4 - S. 144","","");
		addChildmenuItem("mp3/FIG10-5.M3U","Fig. 10.5 - S. 145","","");
		addChildmenuItem("mp3/FIG10-6.M3U","Fig. 10.6 - S. 146","","");
		addChildmenuItem("mp3/FIG10-7.M3U","Fig. 10.7 - S. 147","","");
		addChildmenuItem("mp3/FIG10-8.M3U","Fig. 10.8 - S. 147","","");
		addChildmenuItem("mp3/FIG10-9.M3U","Fig. 10.9 - S. 148","","");
		addChildmenuItem("mp3/FIG10-10.M3U","Fig. 10.10 - S. 148","","");
		addChildmenuItem("mp3/FIG10-11.M3U","Fig. 10.11 - S. 149","","");
		addChildmenuItem("mp3/FIG10-12.M3U","Fig. 10.12 - S. 150","","");
		addChildmenuItem("mp3/FIG10-13.M3U","Fig. 10.13 - S. 150","","");
		addChildmenuItem("mp3/FIG10-14.M3U","Fig. 10.14 - S. 150","","");
		addChildmenuItem("mp3/FIG10-15.M3U","Fig. 10.15 - S. 150","","");
		addChildmenuItem("mp3/FIG10-16.M3U","Fig. 10.16 - S. 151","","");
		addChildmenuItem("mp3/FIG10-17.M3U","Fig. 10.17 - S. 152","","");
		addChildmenuItem("mp3/FIG10-18.M3U","Fig. 10.18 - S. 152","","");
		addChildmenuItem("mp3/FIG10-19.M3U","Fig. 10.19 - S. 152","","");
		addChildmenuItem("mp3/FIG10-20.M3U","Fig. 10.20 - S. 153","","");
		
						// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("kap11.htm","Kap. 11 : Centralnervesystemet","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(120,"left","left",-76,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/FIG11-1.M3U","Fig. 11.1 - S. 165","","");
		addChildmenuItem("mp3/FIG11-2.M3U","Fig. 11.2 - S. 167","","");
		addChildmenuItem("mp3/FIG11-3.M3U","Fig. 11.3 - S. 167","","");
		addChildmenuItem("mp3/FIG11-4.M3U","Fig. 11.4 - S. 168","","");
		addChildmenuItem("mp3/FIG11-5.M3U","Fig. 11.5 - S. 170","","");
		addChildmenuItem("mp3/FIG11-6.M3U","Fig. 11.6 - S. 171","","");
		addChildmenuItem("mp3/FIG11-7.M3U","Fig. 11.7 - S. 172","","");
		addChildmenuItem("mp3/FIG11-8.M3U","Fig. 11.8 - S. 173","","");
		addChildmenuItem("mp3/FIG11-9.M3U","Fig. 11.9 - S. 173","","");
		addChildmenuItem("mp3/FIG11-10.M3U","Fig. 11.10 - S. 173","","");
		addChildmenuItem("mp3/FIG11-11.M3U","Fig. 11.11 - S. 174","","");
		addChildmenuItem("mp3/FIG11-12.M3U","Fig. 11.12 - S. 174","","");
		addChildmenuItem("mp3/FIG11-13.M3U","Fig. 11.13 - S. 175","","");
		addChildmenuItem("mp3/FIG11-15.M3U","Fig. 11.15 - S. 176","","");
		
						// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("kap12.htm","Kap. 12 : Det perifere karsystem","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(120,"left","left",0,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/FIG12-1.M3U","Fig. 12.1 - S. 184","","");
		addChildmenuItem("mp3/FIG12-2.M3U","Fig. 12.2 - S. 185","","");
		addChildmenuItem("mp3/FIG12-3.M3U","Fig. 12.3 - S. 186","","");

						// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("kap13.htm","Kap. 13 : Kirtler","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(120,"left","left",0,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/FIG13-1.M3U","Fig. 13.1 - S. 189","","");
		addChildmenuItem("mp3/FIG13-2.M3U","Fig. 13.2 - S. 192","","");
		addChildmenuItem("mp3/FIG13-3.M3U","Fig. 13.3 - S. 192","","");
		addChildmenuItem("mp3/FIG13-4.M3U","Fig. 13.4 - S. 193","","");

						// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("kap14.htm","Kap. 14 : Hud","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(120,"left","left",0,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/FIG14-1.M3U","Fig. 14.1 - S. 197","","");
		addChildmenuItem("mp3/FIG14-2.M3U","Fig. 14.2 - S. 198","","");
		addChildmenuItem("mp3/FIG14-3.M3U","Fig. 14.3 - S. 199","","");
		addChildmenuItem("mp3/FIG14-4.M3U","Fig. 14.4 - S. 200","","");
		addChildmenuItem("mp3/FIG14-5.M3U","Fig. 14.5 - S. 200","","");

						// add submenu link items ("url","Link name","_target","alt text")
	addSubmenuItem("kap15.htm","Kap. 15 : Sanseorganer","","");
	
		// define child menu properties (width,"align to edge","text-alignment",v offset,h offset,"filter")
		defineChildmenuProperties(120,"left","left",0,-20,"");

		// add child menu link items ("url","Link name","_target","alt text")
		addChildmenuItem("mp3/FIG15-1.M3U","Fig. 15.1 - S. 204","","");
		addChildmenuItem("mp3/FIG15-2.M3U","Fig. 15.2 - S. 204","","");
		addChildmenuItem("mp3/FIG15-3.M3U","Fig. 15.3 - S. 205","","");

//**DO NOT EDIT THIS *****
}//***********************
//************************
