var request = new XMLHttpRequest();
request.open("get", "https://restcountries.eu/rest/v2/all");
function getPosts() {
    request.send();
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if ((request.status >= 200) && (request.status < 300)) {
                data = JSON.parse(request.responseText);
                // for(ob of data)
                // {
                //     console.log(ob.name);

                // }
                var html_data = "";//'<option value="select">-select-</option>';
                data.forEach(ob => html_data += `<option value=${ob.name}>${ob.name}</option>`);
                document.querySelector("#c_list").innerHTML = html_data;


            }
            else {
                alert("Error!");
            }
        }

    }
}
function getDetails() {
    //console.log("Haii");
    var name = document.querySelector("#c_list").value;
    //var name1 = document.querySelector("#c_list").value.options[document.querySelector("#c_list").value.selectedIndex].text;
    //console.log(name);
    //console.log(name1);
    var request = new XMLHttpRequest();
    request.open("get", `https://restcountries.eu/rest/v2/name/${name}/?fullText=true`);
    //request.open("get", `https://restcountries.eu/rest/v2/name/${name}`);
    request.send();
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if ((request.status >= 200) && (request.status < 300)) {
                result = JSON.parse(request.responseText);
                console.log(result);
                data = result;
                let c_name = data[0].name;
                let flag = data[0].flag;
                let currency = data[0].currencies[0].name;
                let population = data[0].population;
                var html_data = "";
                //html_data += "<tr><td>" + c_name + "</td><td><img src=" + flag + "></td><td>" + population + "</td><td>" + currency + "</td></tr>";
                html_data += `<tr><td>"${c_name}"</td><td><img src="${flag}" width=400px height=200px></td><td>"${population}"</td><td>"${currency}"</td></tr>`;
                document.querySelector("#table_data").innerHTML = html_data;
            }
            else {
                alert("Error!");
            }
        }

    }
}


