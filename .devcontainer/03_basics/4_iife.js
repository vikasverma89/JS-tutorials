//Immediatly Invoked funcrtion expressions (IIFE)
(function chai(){
    console.log(`DB connected`);

}
) ();
( (name) => {
    console.log(`db connected ${name}`);
    
}) ('hitesh')
