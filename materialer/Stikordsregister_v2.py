# -*- coding: utf-8 -*-

import pandas as pd

def is_number(s):
    try:
        float(s)
        return True
    except ValueError:
        return False

f = open("Stikordsregister_v2.txt", "r")
lines = f.readlines()
f.close()

coll = []
for line in lines:
    line  = line.strip()
    line_s = line.split(" ")
    #if line == "":
    #    continue
    #print(line)

    # Test for encode
    try:
        etest = line
        etest.encode('utf-8')
        #etest.encode('iso-8859-1')
    except UnicodeDecodeError:
        print(line)
        #pass
    
    nr = ""
    isnr = is_number(line_s[-1])
    if isnr:
        nr = line_s[-1]
        line_wo_nr = line.replace(nr, "")
        #print(line_wo_nr, nr)
    else:
        line_wo_nr = line
    
    #print(line_wo_nr)
    col_i = [line_wo_nr, nr]
    coll.append(col_i)
    #print(col_i)

headers = ["Stikord", "Side"]
df = pd.DataFrame(coll, columns=headers)

#print(df)

writer = pd.ExcelWriter('Stikordsregister_v2.xlsx')
df.to_excel(writer,'Sheet1')
#df.to_excel(writer,'Sheet1', encoding='utf-8')
#df.to_excel(writer,'Sheet1', encoding='cp1252')
writer.save()