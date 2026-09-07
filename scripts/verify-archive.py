from pathlib import Path
import json,re
root=Path(__file__).resolve().parents[1]
read=lambda name:json.loads((root/'data'/name).read_text())
r=read('roster-2016.json');assert len(r)==43;assert [p['number'] for p in r]==sorted(p['number'] for p in r)
assert all(p['name'] and p['position'] and p['grade'] for p in r)
assert all(p.get('weight',1)>0 for p in r)
tables=read('statistics-2016.json');assert len(tables)==16
for t in tables:
 assert t['rows'][-1][1]=='Season Totals',t['title']
 assert all(len(row)==len(t['headers']) for row in t['rows']),t['title']
def value(title,number,column):
 t=next(t for t in tables if t['title']==title);row=next(r for r in t['rows'] if r[0]==str(number));return row[t['headers'].index(column)]
for title,no,col,expected in [('Passing',7,'Yds','742'),('Passing',7,'TD','6'),('Rushing',7,'Yds','1195'),('Rushing',7,'TD','15'),('Rushing',40,'Yds','1079'),('Rushing',40,'TD','17'),('Receiving',10,'Yds','381'),('Receiving',10,'TD','4'),('Tackles',40,'Tot Tckls','63'),('Tackles',40,'TFL','14.5'),('Tackles',45,'Tot Tckls','72'),('Defensive Statistics',40,'Int','4'),('PATs and Field Goals',79,'PAT','42'),('PATs and Field Goals',79,'FG','4'),('PATs and Field Goals',79,'Lng','33'),('PATs and Field Goals',79,'Tot Pts','54')]:
 assert value(title,no,col)==expected,(title,no,col)
games=re.findall(r'for:(\d+),against:(\d+)',(root/'data/seasons.ts').read_text())
assert len(games)==14 and sum(int(a)>int(b) for a,b in games)==12
assert sum(int(a) for a,b in games)==441 and sum(int(b) for a,b in games)==174
photos=read('photos-2016.json');assert len(photos)==55 and sum(p['curated'] for p in photos)==18
for p in photos:
 for key in ['src','thumbnail']:assert (root/'public'/p[key].lstrip('/')).is_file()
print('Verified 43 roster rows, 16 complete stat tables, leader values, schedule totals, and 55/18 gallery curation.')
