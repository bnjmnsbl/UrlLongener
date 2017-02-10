

exports.urlCheck = function(value) {
if (value.search("www") === 0) {
    
          value = "http://" + value;
    
};

return /^(?:(?:(https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value )
      
};


exports.genShort = function(value) {
   
    var text = "";
    var minion = ["Minions", "ipsum", "poulet", "tikka", "masala", "tatata", "bala", "tu", "potatoooo", "aliqua", "cillum", "sed", "reprehenderit", "poulet", "tikka", "masala", "elit", "consectetur", "Potatoooo", "potatoooo", "chasy", "exercitation", "hana", "dul", "sae", "Ti", "aamoo", "voluptate", "laboris", "irure", "pepete", "magna", "quis", "consectetur", "reprehenderit", "Tank", "yuuu", "la", "bodaaa", "incididunt", "duis", "velit", "Laboris", "officia", "commodo", "ut", "nostrud", "enim", "Sed", "irure", "bee", "do", "bee", "do", "bee", "do", "aliquip", "underweaaar", "eiusmod", "Dolor", "voluptate", "ti", "aamoo", "Poulet", "tikka", "masala", "tatata", "bala", "tu", "adipisicing", "Underweaaar", "ex", "aliquip", "esse", "minim", "gelatooo", "wiiiii", "hana", "dul", "sae", "consequat", "Bananaaaa", "qui", "et", "dolor", "aute", "minim", "Tempor", "incididunt", "elit", "tank", "yuuu", "Aute", "uuuhhh", "aliquip", "enim", "laboris", "esse", "Consequat", "baboiii", "labore", "butt", "adipisicing", "pepete", "reprehenderit", "jiji", "me", "want", "bananaaa", "Bee", "do", "bee", "do", "bee", "do", "labore", "tatata", "bala", "tu", "elit", "Ad", "jeje", "irure", "elit", "eiusmod", "tank", "yuuu!", "Hana", "dul", "sae"]
    //var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 10; i++ )
        text += minion[(Math.floor(Math.random() * minion.length))];

    return text;
}

