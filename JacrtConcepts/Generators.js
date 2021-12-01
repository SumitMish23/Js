console.log('Genrators...');

function* Gen(){
    let i=0;
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const gen=Gen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());