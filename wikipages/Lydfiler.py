F = open("Lydfiler.table", "r")
lines = F.readlines()
F.close()

print(r'<div align="left">')
print(r'{| class="wikitable" style="text-align: left;")')
for line in lines:
    line = line.strip()
    print(line)
    print("|-")
print(r'|}')
print(r'</div>')