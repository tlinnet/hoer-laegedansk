

F = open("16_Stikordsregister.table", "r")
lines = F.readlines()
F.close()

a1 = r'<div align="left">'
a2 = r'{| class="wikitable" style="text-align: left;")'
a3 = lines[0].strip()
b = "|-"
c1 = r'|}'
c2 = r'</div>'

for i, line in enumerate(lines[1:]):
    line = line.strip()
    if line == "#N/A":
        continue
    
    if line[:10] == "| Bogstav:":
        if i != 0:
            print(c1)
            print(c2)
        print("== " + line[2:12] + " ==")
        print(a1)
        print(a2)
        print(a3)
        print(b)
        print(line)


    elif i == len(lines)-2:
        print(c1)
        print(c2)
    
    else:
        print(b)
        print(line)

