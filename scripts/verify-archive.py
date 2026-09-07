from pathlib import Path
import json,re

root=Path(__file__).resolve().parents[1] if 'scripts' in Path(__file__).parts else Path.cwd()
read=lambda name:json.loads((root/'data'/name).read_text())

r=read('roster-2016.json')
assert len(r)==43
assert [p['number'] for p in r]==sorted(p['number'] for p in r)
assert all(p['name'] and p['position'] and p['grade'] for p in r)
assert all(p.get('weight',1)>0 for p in r)

tables=read('statistics-2016.json')
assert len(tables)==16
for t in tables:
 assert t['rows'][-1][1]=='Season Totals',t['title']
 assert all(len(row)==len(t['headers']) for row in t['rows']),t['title']

def value(table_set,title,number,column):
 t=next(t for t in table_set if t['title']==title)
 row=next(r for r in t['rows'] if r[0]==str(number))
 return row[t['headers'].index(column)]

for title,no,col,expected in [('Passing',7,'Yds','742'),('Passing',7,'TD','6'),('Rushing',7,'Yds','1195'),('Rushing',7,'TD','15'),('Rushing',40,'Yds','1079'),('Rushing',40,'TD','17'),('Receiving',10,'Yds','381'),('Receiving',10,'TD','4'),('Tackles',40,'Tot Tckls','63'),('Tackles',40,'TFL','14.5'),('Tackles',45,'Tot Tckls','72'),('Defensive Statistics',40,'Int','4'),('PATs and Field Goals',79,'PAT','42'),('PATs and Field Goals',79,'FG','4'),('PATs and Field Goals',79,'Lng','33'),('PATs and Field Goals',79,'Tot Pts','54')]:
 assert value(tables,title,no,col)==expected,(title,no,col)

season_text=(root/'data/seasons.ts').read_text()
block2016=season_text.split("'2016':",1)[1].split("'1996':",1)[0]
games2016=re.findall(r'for:(\d+),against:(\d+)',block2016)
assert len(games2016)==14 and sum(int(a)>int(b) for a,b in games2016)==12
assert sum(int(a) for a,b in games2016)==441 and sum(int(b) for a,b in games2016)==174

photos=read('photos-2016.json')
assert len(photos)==55 and sum(p['curated'] for p in photos)==18
for p in photos:
 for key in ['src','thumbnail']:
  assert (root/'public'/p[key].lstrip('/')).is_file()

r96=read('roster-1996.json')
assert len(r96)==32
assert [p['number'] for p in r96]==sorted(p['number'] for p in r96)
assert all(p['name'] and p['grade'] and p['height'] and p['weight']>0 for p in r96)
assert all(p['position']=='' for p in r96)

tables96=read('statistics-1996.json')
assert len(tables96)==10
for t in tables96:
 assert t['group'] in {'Offense','Defense','Special Teams','Scoring'}
 assert t['pages'] and all(21<=page<=25 for page in t['pages'])
 assert all(len(row)==len(t['headers']) for row in t['rows']),t['title']

for title,no,col,expected in [('Rushing',45,'Yds','1,409'),('Rushing',45,'TD','12'),('Passing',13,'Yds','1,290'),('Passing',13,'TD','13'),('Receiving',1,'Yds','602'),('Defensive Statistics',57,'Total','148'),('Defensive Statistics',55,'Sacks','10.5'),('Kick Returns',45,'Yds','194'),('Individual Scoring',45,'Points','82')]:
 assert value(tables96,title,no,col)==expected,(title,no,col)

block1996=season_text.split("'1996':",1)[1]
games1996=re.findall(r'for:(\d+),against:(\d+)',block1996)
assert len(games1996)==12 and sum(int(a)>int(b) for a,b in games1996)==7
assert sum(int(a) for a,b in games1996)==248 and sum(int(b) for a,b in games1996)==244
assert "status:'documented'" in block1996 and "record:'7–5'" in block1996
assert "assistantCoaches:['E. Hruskocy','B. Jennings','R. Shanley','W. Greer']" in block1996

photos96=read('photos-1996.json')
assert len(photos96)==3 and sum(p['curated'] for p in photos96)==1
for p in photos96:
 for key in ['src','thumbnail']:
  assert (root/'public'/p[key].lstrip('/')).is_file()

print('Verified 2016 archive plus the 1996 32-player roster, 10 stat tables, 12-game 7–5 record, 248–244 totals, coaching staff, and 3 gallery assets.')
