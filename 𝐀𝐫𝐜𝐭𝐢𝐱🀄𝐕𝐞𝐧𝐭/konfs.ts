global.APIs = {
nrtm: "https://nurutomo.herokuapp.com",
dzx: "https://api.dhamzxploit.my.id",
xteam: "https://api.xteam.xyz",
zahir: "https://zahirr-web.herokuapp.com",
zeks: "https://api.zeks.xyz",
pencarikode: "https://pencarikode.xyz",
LeysCoder: "https://leyscoders-api.herokuapp.com",
};
global.APIKeys = {
"https://api.xteam.xyz": "d90a9e986e18778b",
"https://zahirr-web.herokuapp.com": "zahirgans",
"https://api.zeks.xyz": "apivinz",
"https://pencarikode.xyz": "pais",
"https://leyscoders-api.herokuapp.com": "dappakntlll",
};
global.API = (name: any, path = "/", query = {}, apikeyqueryname: any) =>
(name in global.APIs ? global.APIs[name] : name) +
path +
(query || apikeyqueryname
? "?" +
new URLSearchParams(
Object.entries({
...query,
...(apikeyqueryname
? {
[apikeyqueryname]:
  global.APIKeys[
    name in global.APIs ? global.APIs[name] : name
  ],
}
: {}),
})
)
: "");
