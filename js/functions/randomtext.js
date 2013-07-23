function makeid(){
    var text = "";
    var possible = "ABC DEFGHIJK LMNOPQR STUVWXYZab cdefghijklmnop qrstuvwxyz012 3456789";

    for( var i=0; i < 200; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};