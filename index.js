function outer(){
    var a=1;
    function inner()
    {
        console.log(a);
    } return inner;
}
outer();