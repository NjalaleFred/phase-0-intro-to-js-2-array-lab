const cats = ["Milo", "Otis", "Garfield"]

cats.length=0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyAppendCat(Ralph){
cats.push('Ralph')
}
cats.length=0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyPrependCat(Bob){
cats.unshift("Bob")
}
cats.lenth=0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveLastCat(Garfield){
cats.pop();
}
cats.length=0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveFirstCat(Milo){
cats.shift();
}
cats.length=0;
cats.push('Milo', 'Otis', 'Garfield');

function prependCat(Arnold){
    return  ['Arnold', ...cats]
}
cats.length=0;
cats.push('Milo', 'Otis', 'Garfield');

function appendCat(Broom){
    return [...cats, 'Broom']
}
cats.length=0;
cats.push('Milo', 'Otis', 'Garfield');

function removeFirstCat(){
  return cats.slice(1);
}
cats.length=0;
cats.push('Milo', 'Otis', 'Garfield');

function removeLastCat(){
    return cats.slice(0,2)
}