function getDetails() {
    var name = document.querySelector("#cname").value;
    //alert(name);
    var request = new XMLHttpRequest();
    request.open("get", `https://restcountries.eu/rest/v2/name/${name}/?fullText=true`);
    //request.open("get", `https://restcountries.eu/rest/v2/name/${name}`);
    request.send();
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if ((request.status >= 200) && (request.status < 300)) {
                result = JSON.parse(request.responseText);
                console.log(result);
                //alert(data);
                //console.log(result[0].altSpellings);
                // if(result[0].altSpellings.includes(name))
                // {
                //     console.log("true");
                // }
                data=result;
                // var data=result.filter(ob=>(ob[0].altSpellings.includes(name)));
                // console.log(data);
                let c_name = data[0].name;
                let flag = data[0].flag;
                let currency = data[0].currencies[0].name;
                let population = data[0].population;
                //alert(flag);

                var html_data = "";
                //html_data += "<tr><td>" + c_name + "</td><td><img src=" + flag + "></td><td>" + population + "</td><td>" + currency + "</td></tr>";
                html_data+=`<tr><td>"${c_name}"</td><td><img src="${flag}" width=400px height=200px></td><td>"${population}"</td><td>"${currency}"</td></tr>`;
                document.querySelector("#table_data").innerHTML = html_data;
            }
            else {
                alert("Error!");
            }
        }

    }

}