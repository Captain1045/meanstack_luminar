
var isl=[
    {team:"atk",played:17,won:11,draw:3,los:3,pts:36},
    {team:"mumbai",played:17,won:10,draw:4,los:3,pts:34},
    {team:"hyderabad",played:18,won:6,draw:9,los:3,pts:38},
    {team:"goa",played:18,won:6,draw:9,los:3,pts:27},
    {team:"northeast",played:18,won:6,draw:9,los:3,pts:27},
    {team:"benguluru",played:18,won:5,draw:7,los:6,pts:22},
    {team:"jamshed",played:18,won:5,draw:6,los:7,pts:21},
];
isl.map(ob=>ob.team.toUpperCase()).forEach(ob=>console.log(ob));
//isl.sort((ob1,ob2)=>ob1.played>ob2.played?-1:1).forEach(ob=>console.log(ob));
var highest_point=isl.reduce((ob1,ob2)=>ob1.pts>ob2.pts?ob1:ob2);
console.log(highest_point);

var highest_losses=isl.reduce((ob1,ob2)=>ob1.los>ob2.los?ob1:ob2);
console.log(highest_losses);

var updated_status=isl.filter(ob=>ob.pts>32?ob["status"]="Qualified":ob["status"]="Not Qualified");
console.log(updated_status);