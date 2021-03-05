try {
    let data = eval("1+2+?");
    console.log(data);
}
catch (ex) {
    try {
        const y = 20;
        y++;
        console.log(ex.message);
    }
    catch (er) {
        console.log(er.message);
    }
}
finally {
    console.log("test1\n");
}