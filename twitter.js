var tweets = {
    aut: "@ahmedjw",
    twet: "",
}
var arr = new Array();
var username = "";
var neckname = "";

var ttext = "";


document.querySelector('.butT2').addEventListener('click', function () {
    

    ttext = document.querySelector('.tweet').value;
    document.querySelector('.tweet').value = "";
    username = document.querySelector('.un').textContent;
    neckname = document.querySelector('.nn').textContent;
    var twt = document.querySelector('.Nfeed');
    var clone = twt.cloneNode(true);
    clone.id = 'Nfeed1';
   
    clone.classList.add('text-large');
    twt.before(clone);
    document.querySelector('#tweets').textContent = ttext;
    arr.push(tweets.aut);
    tweets.twet = ttext;
    arr.push(tweets.twet);
                    
 

});

document.querySelector('.l').addEventListener('click', function () {
    if (document.querySelector("#tweets").style.color == "black") {
        document.querySelector("#tweets").style.color = "blue";
    }
    else {
        document.querySelector("#tweets").style.color = "black";
    }
});

document.querySelector('.r').addEventListener('click', function () {
    var twt = document.querySelector('.Nfeed');
    var c = twt.cloneNode(true);
    c.id = 'Nfeed3';
    c.classList.add('ret');
    twt.before(c);

});
/*document.querySelector('.butT2').addEventListener('click', function () {
    ttext = document.querySelector('.tweet').value;
    var di=document.createElement("div");
    var input=document.querySelector(".Tb").innerHTML;
    input.querySelector("#tweets").textContent=ttext;
    var te=document.createElement(input);
    di.appendChild(te);
    document.getElementsByClassName(".feed").appendChil(di);
    
});*/

