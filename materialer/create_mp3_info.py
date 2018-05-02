import pandas as pd

wfiles_all = [
        "FORORD",
        "INTRO_DK",
        "OP-JOUR",
        "KAP1_15",
        "KAP1_15_2",
        "KAP1_16",
        "KAP1_16_2",
        "KAP1_17",
        "KAP1_18",
        "KAP1_19",
        "KAP1_19_2",
        "KAP1_19_3",
        "KAP1_21",
        "KAP1_22",
        "KAP1_22_2",
        "KAP1_22_3",
        "KAP1_23",
        "KAP2_25",
        "KAP2_25_2",
        "KAP2_27",
        "KAP2_27_2",
        "KAP2_29",
        "KAP3_31",
        "KAP3_31_2",
        "KAP3_31_3",
        "KAP3_33",
        "KAP3_33_2",
        "KAP3_34",
        "KAP3_35",
        "KAP3_36",
        "kap3_37",
        "KAP3_39",
        "KAP3_41",
        "KAP3_42",
        "KAP3_42_2",
        "KAP3_43",
        "KAP3_44",
        "KAP3_45",
        "KAP3_45_2",
        "KAP3_45_3",
        "KAP3_46",
        "KAP3_46_2",
        "KAP3_46_3",
        "KAP3_46_4",
        "KAP3_47",
        "KAP3_47_2",
        "KAP3_47_3",
        "KAP3_48",
        "KAP3_48_2",
        "KAP3_49",
        "KAP3_50",
        "KAP3_50_2",
        "KAP3_50_3",
        "KAP3_51",
        "KAP3_51_2",
        "KAP3_52",
        "KAP3_53",
        "KAP3_53_2",
        "KAP3_54",
        "KAP3_54_2",
        "KAP3_56",
        "KAP4_57",
        "KAP4_57_2",
        "KAP4_58",
        "KAP4_59",
        "KAP4_60",
        "KAP4_60_2",
        "KAP4_61",
        "KAP4_62",
        "KAP4_62_2",
        "KAP4_63",
        "KAP4_64",
        "KAP4_64_2",
        "KAP4_64_3",
        "KAP4_65",
        "KAP4_67",
        "KAP5_68",
        "KAP5_68_2",
        "KAP5_69",
        "KAP5_69_2",
        "KAP5_69_3",
        "KAP5_72",
        "KAP5_73",
        "KAP5_73_2",
        "KAP5_74",
        "KAP5_75",
        "kap5_76",
        "KAP5_78",
        "KAP5_78_2",
        "KAP6_83",
        "KAP6_83_2",
        "KAP6_84",
        "KAP6_85",
        "KAP6_85_2",
        "KAP6_86",
        "KAP6_87",
        "KAP6_89",
        "KAP6_91",
        "KAP6_92",
        "KAP6_92_2",
        "KAP6_94",
        "KAP7_101",
        "KAP7_103",
        "KAP7_103_2",
        "KAP7_104",
        "KAP7_105",
        "KAP7_107",
        "KAP7_111",
        "KAP7_112",
        "KAP7_112_2",
        "KAP7_113",
        "KAP7_97",
        "KAP7_97_2",
        "KAP7_98",
        "KAP7_98_2",
        "KAP7_99",
        "KAP7_99_2",
        "KAP8_116",
        "KAP8_116_2",
        "KAP8_117",
        "KAP8_118",
        "KAP8_119",
        "KAP8_119_2",
        "KAP8_120",
        "KAP8_120_2",
        "KAP8_122",
        "KAP8_122_2",
        "KAP8_122_3",
        "KAP8_123",
        "KAP8_123_2",
        "KAP8_125",
        "KAP9_127",
        "KAP9_127_2",
        "KAP9_128",
        "KAP9_129",
        "KAP9_129_2",
        "KAP9_130",
        "KAP9_130_2",
        "KAP9_131",
        "KAP9_131_2",
        "KAP9_132",
        "KAP9_134",
        "KAP10_136",
        "kap10_136_2",
        "KAP10_137",
        "KAP10_138",
        "KAP10_139",
        "KAP10_139_2",
        "KAP10_140",
        "KAP10_140_2",
        "KAP10_140_3",
        "KAP10_141",
        "KAP10_141_2",
        "KAP10_142",
        "KAP10_145",
        "KAP10_147",
        "KAP10_148",
        "KAP10_148_2",
        "KAP10_151",
        "KAP10_152",
        "KAP10_153",
        "KAP11_154",
        "KAP11_154_2",
        "KAP11_155",
        "KAP11_156",
        "KAP11_156_2",
        "KAP11_158",
        "KAP11_159",
        "KAP11_160",
        "KAP11_160_2",
        "KAP11_161",
        "KAP11_161_2",
        "KAP11_161_3",
        "KAP11_162",
        "KAP11_162_2",
        "KAP11_163",
        "KAP11_164",
        "KAP11_165",
        "KAP11_166",
        "KAP11_169",
        "KAP11_174",
        "KAP12_178",
        "KAP12_179",
        "KAP12_180",
        "KAP12_181",
        "KAP12_181_2",
        "KAP12_182",
        "KAP12_182_2",
        "KAP12_183",
        "KAP12_185",
        "KAP12_185_2",
        "KAP13_187",
        "KAP13_187_2",
        "KAP13_187_3",
        "KAP13_188",
        "KAP13_188_2",
        "KAP13_189",
        "KAP13_189_2",
        "KAP13_189_3",
        "KAP13_190",
        "KAP13_190_2",
        "KAP13_190_3",
        "KAP13_191",
        "KAP13_191_2",
        "KAP13_191_3",
        "KAP13_192",
        "KAP13_192_2",
        "KAP14_194",
        "KAP14_194_2",
        "KAP14_194_3",
        "KAP14_195",
        "KAP14_195_2",
        "KAP14_195_3",
        "KAP14_196",
        "KAP15_201",
        "KAP15_201_2",
        "KAP15_201_3",
        "KAP15_202",
        "KAP15_202_2",
        "KAP15_203",
        "KAP15_203_2",
        "KAP15_203_3",
        "KAP15_204",
        "BOKS-SIG",
        "BOKS21",
        "BOKS21B",
        "BOKS23",
        "BOKS24",
        "BOKS24B",
        "BOKS26",
        "BOKS32",
        "BOKS37",
        "BOKS39",
        "BOKS44",
        "BOKS57",
        "BOKS58",
        "BOKS58B",
        "BOKS59",
        "BOKS60",
        "BOKS61",
        "BOKS62",
        "BOKS63A",
        "BOKS63B",
        "BOKS64",
        "BOKS66A",
        "BOKS66B",
        "BOKS68",
        "BOKS69",
        "BOKS70A",
        "BOKS70B",
        "BOKS71",
        "BOKS72",
        "BOKS74",
        "BOKS77",
        "BOKS80A",
        "BOKS80B",
        "BOKS81",
        "BOKS82",
        "BOKS83",
        "BOKS84",
        "BOKS84B",
        "BOKS85",
        "BOKS86",
        "BOKS86B",
        "BOKS87",
        "BOKS88",
        "BOKS88B",
        "BOKS89",
        "BOKS90",
        "BOKS91",
        "BOKS93",
        "BOKS95",
        "BOKS96",
        "BOKS97",
        "BOKS98",
        "BOKS99",
        "BOKS100",
        "BOKS101",
        "BOKS102A",
        "BOKS102B",
        "BOKS103",
        "BOKS106",
        "BOKS107",
        "BOKS109",
        "BOKS111",
        "BOKS112",
        "BOKS113",
        "BOKS117",
        "BOKS117B",
        "BOKS118",
        "BOKS119",
        "BOKS120",
        "BOKS121A",
        "BOKS121B",
        "BOKS123",
        "BOKS127",
        "BOKS128A",
        "BOKS128B",
        "BOKS129",
        "BOKS130A",
        "BOKS130B",
        "BOKS132",
        "BOKS133",
        "BOKS136",
        "BOKS137",
        "BOKS139",
        "BOKS139B",
        "BOKS143",
        "BOKS149",
        "BOKS15",
        "BOKS155",
        "BOKS155B",
        "BOKS156",
        "BOKS157",
        "BOKS157B",
        "BOKS158",
        "BOKS159",
        "BOKS159B",
        "BOKS160A",
        "BOKS160B",
        "BOKS162",
        "BOKS163",
        "BOKS163B",
        "BOKS164",
        "BOKS165",
        "BOKS166",
        "BOKS17",
        "BOKS170",
        "BOKS171",
        "BOKS171B",
        "BOKS172",
        "BOKS177",
        "BOKS178",
        "BOKS179A",
        "BOKS179B",
        "BOKS17B",
        "BOKS18",
        "BOKS180",
        "BOKS181",
        "BOKS183",
        "BOKS185",
        "BOKS188",
        "BOKS188B",
        "BOKS190",
        "BOKS191",
        "BOKS193",
        "BOKS194",
        "BOKS195",
        "BOKS196A",
        "BOKS196B",
        "BOKS201",
        "BOKS202",
        "BOKS203",
        "BOKS205",
        "FIG4-1",
        "FIG4-2",
        "FIG5-1",
        "FIG5-2",
        "FIG5-3",
        "FIG5-4",
        "FIG5-5",
        "FIG5-6",
        "FIG5-7",
        "FIG6-1",
        "FIG6-2",
        "FIG6-3",
        "FIG6-4",
        "FIG7-1",
        "FIG7-2",
        "FIG7-3",
        "FIG7-4",
        "FIG7-5",
        "FIG7-6",
        "FIG7-7",
        "FIG7-8",
        "FIG8-1",
        "FIG8-2",
        "FIG8-3",
        "FIG8-4",
        "FIG8-5",
        "FIG9-1",
        "FIG9-2",
        "FIG9-3",
        "FIG9-4",
        "FIG9-5",
        "FIG9-6",
        "FIG10-1",
        "FIG10-2",
        "FIG10-3",
        "FIG10-4",
        "FIG10-5",
        "FIG10-6",
        "FIG10-7",
        "FIG10-8",
        "FIG10-9",
        "FIG10-10",
        "FIG10-11",
        "FIG10-12",
        "FIG10-13",
        "FIG10-14",
        "FIG10-15",
        "FIG10-16",
        "FIG10-17",
        "FIG10-18",
        "FIG10-19",
        "FIG10-20",
        "FIG11-1",
        "FIG11-2",
        "FIG11-3",
        "FIG11-4",
        "FIG11-5",
        "FIG11-6",
        "FIG11-7",
        "FIG11-8",
        "FIG11-9",
        "FIG11-10",
        "FIG11-11",
        "FIG11-12",
        "FIG11-13",
        "FIG11-15",
        "FIG12-1",
        "FIG12-2",
        "FIG12-3",
        "FIG13-1",
        "FIG13-2",
        "FIG13-3",
        "FIG13-4",
        "FIG14-1",
        "FIG14-2",
        "FIG14-3",
        "FIG14-4",
        "FIG14-5",
        "FIG15-1",
        "FIG15-2",
        "FIG15-3",
        "STIK-A",
        "STIK-AA",
        "STIK-B",
        "STIK-C",
        "STIK-D",
        "STIK-E",
        "STIK-F",
        "STIK-G",
        "STIK-H",
        "STIK-I",
        "STIK-J",
        "STIK-K",
        "STIK-L",
        "STIK-M",
        "STIK-N",
        "STIK-O",
        "STIK-OE",
        "STIK-P",
        "STIK-R",
        "STIK-S",
        "STIK-T",
        "STIK-U",
        "STIK-V",]

coll = []
for i, w in enumerate(wfiles_all):
    w_b = w
    w_r = ""
    page = ""
    nr = ""
    kap = ""

    w4 = w[:4]
    w3 = w[:3]
    
    type = ""
    fil = w + ".mp3"

    if w3 != "KAP" and w3 != "kap" and w4 != "BOKS" and w3 != "FIG" and w4 != "STIK":
        type = "Forord"
        #print(w, type, w_r)        

    elif w3 == "KAP" or w3 == "kap":
        type = "Kapitel"
        w_b = w3
        w_r = w[3:]
        s = w_r.split("_")
        kap = s[0]
        page = s[1]
        if len(s) > 2:
            nr = s[2]
        #print(w, type, w_r, kap, page, nr)

    elif w4 == "BOKS":
        type = "Bokse"
        w_b = w4
        w_r = w[4:]
        if w_r == "-SIG":
            page = ""
        else:
            page = w_r.replace("A", "").replace("B", "")
            if "A" in w_r:
                nr = "A"
            elif "B" in w_r:
                nr = "B"
        #print(w, type, w_r, page, nr)

    elif w3 == "FIG":
        type = "Figur"
        w_b = w3
        w_r = w[3:]
        s = w_r.split("-")
        kap = s[0]
        nr = s[1]
        #print(w, type, w_r, kap, nr)

    elif w4 == "STIK":
        type = "Stikordsregister"
        w_b = w4
        w_r = w[4:]
        s = w_r.split("-")
        kap = s[0]
        nr = s[1]
        #print(w, type, w_r, nr)
    
    col_i = [w, fil, type, w_b, w_r, kap, page, nr]
    #print(col_i)

    coll.append(col_i)

headers = ["Filnavn", "Fil_mp3", "Type", "F_before", "F_rest", "Kapitel", "Side", "Nr"]
df = pd.DataFrame(coll, columns=headers)

#print(df)

writer = pd.ExcelWriter('create_mp3_info.xlsx')
df.to_excel(writer,'Sheet1')
writer.save()