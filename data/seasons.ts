import photos2016 from './photos-2016.json';
export type Game = {opponent:string; away?:boolean; for:number; against:number; round?:string; date?:string};
export type Player = {name:string;number?:number;position?:string;grade?:string};
export type Photo = {src:string;thumbnail:string;alt:string;caption?:string;width:number;height:number;curated?:boolean};
export type Season = {year:number;status:'documented'|'collecting';record?:string;conferenceRecord?:string;headCoach?:string;assistantCoaches:string[];classification?:string;conference?:string;pointsFor?:number;pointsAgainst?:number;schedule:Game[];playoffs:Game[];roster:Player[];captains:string[];honors:string[];story:string[];photos:Photo[];gallery?:Photo[];sources:{title:string;url?:string;note?:string}[];discrepancies:string[]};
const rosterText = `Christian Gamino|Sr.
Freddy Flores|So.
Octavio Gutierrez|Jr.
Brent Reel|Sr.
Stuart Glascow|Sr.
Joey Trombetta|Jr.
Nate Zorich|So.
Jon Furto|So.
Nicholas Mendez|Fr.
Robert Garcia|So.
Matt Solis|Sr.
Steven Connelly|Fr.
Nick Krieger|So.
Jacob Pick|So.
Joel Torres|So.
Thomas Knight|So.
Isaac Sahagun|Sr.
Justin Grino|So.
Danny Canning|So.
Adam Zorich|Sr.
Caleb Macon|Sr.
Cody Trzepacz|Fr.
Mikey Galaviz|So.
Ernesto Del real|Fr.
Christian Carroll|So.
Estevan Becerra|Jr.
Emiliano Rodriguez|Fr.
Sebastian Macias|Sr.
Chris Doll|Sr.
Dylan White|Jr.
Ruben Silvas|Fr.
Pedro Valerio|Jr.
Nino Barbosa|So.
Kenneth Padilla|So.
Jake Lytle|Jr.
Colton Willoughby|So.
Tom Davenport|So.
Diego Olmedo|So.
Aidan Plemons|Fr.
Chris Page|Sr.
Miguel Rivera|Sr.
John Bock|So.
Nathaniel Terrazas|Fr.`;
export const seasons: Record<string,Season> = {
'2016':{year:2016,status:'documented',record:'12–2',conferenceRecord:'4–0',headCoach:'Jeff Cain',assistantCoaches:[],classification:'Class 2A',conference:'Greater South Shore Conference · North Division',pointsFor:441,pointsAgainst:174,
schedule:[{opponent:'Hammond Clark',away:true,for:39,against:6},{opponent:'Hammond Gavit',for:36,against:26},{opponent:'Boone Grove',away:true,for:49,against:9},{opponent:'Wheeler',for:31,against:14},{opponent:'Lake Station Edison',away:true,for:24,against:0},{opponent:'Hanover Central',for:0,against:21},{opponent:'Calumet New Tech',for:33,against:6},{opponent:'Bishop Noll',away:true,for:52,against:19},{opponent:'River Forest',for:35,against:7}],
playoffs:[{opponent:'Boone Grove',for:36,against:6,round:'Sectional · First round',date:'Oct. 21'},{opponent:'North Newton',away:true,for:21,against:12,round:'Sectional · Semifinal',date:'Oct. 28'},{opponent:'Knox',away:true,for:17,against:14,round:'Sectional · Final',date:'Nov. 4'},{opponent:'Winamac',for:55,against:14,round:'Regional',date:'Nov. 11'},{opponent:'Eastbrook',for:13,against:20,round:'Semistate',date:'Nov. 18'}],
roster:rosterText.split('\n').map(line=>{const [name,grade]=line.split('|');return {name,grade}}).sort((a,b)=>a.name.split(' ').at(-1)!.localeCompare(b.name.split(' ').at(-1)!)),captains:[],honors:[],story:['Whiting opened the 2016 season with five consecutive wins and finished the regular season 8–1. Under head coach Jeff Cain, the Oilers competed in Class 2A and the Greater South Shore Conference North Division.','The postseason carried Whiting through Boone Grove, North Newton, and Knox before a 55–14 regional win over Winamac. The season ended against Eastbrook in the semistate, 20–13. The Oilers finished 12–2.'],photos:photos2016.filter(p=>p.curated),gallery:photos2016,sources:[{title:'Working build brief',note:'Season totals, regular-season results, head coach, conference and reunion details supplied by the archive owner.'},{title:'MaxPreps · 2016–17 roster',url:'https://www.maxpreps.com/in/whiting/whiting-oilers/football/roster/all-time/',note:'43 players and grades transcribed from the 2016–17 entry. Names retain source spelling. Jersey numbers and positions omitted because the detailed roster could not be retrieved.'},{title:'IHSAA · 2016–17 state tournament',url:'https://www.ihsaa.org/sports/boys/football/2016-17-tournament?round=pairings-show',note:'Tournament round labels and results cross-checked against the Class 2A bracket linked by IHSAA.'},{title:'IHSAA-linked Class 2A bracket',url:'https://www.maxpreps.com/tournament/F2mEJn5zEea-8KA2nzwbTA/F2mG835zEea-8KA2nzwbTA/football-16/2016-17-ihsaa-football-state-tournament-presented-by-the-indianapolis-colts-class-2a-state-championship.htm'},{title:'2016 Season photograph collection',note:'Original JPG photographs supplied through the project Dropbox collection; provenance retained in docs/photo-sources.json.'}],discrepancies:[]},
'1996':{year:1996,status:'collecting',assistantCoaches:[],schedule:[],playoffs:[],roster:[],captains:[],honors:[],story:[],photos:[],sources:[],discrepancies:[]}
};
