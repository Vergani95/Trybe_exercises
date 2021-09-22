const sleep = sleepDuration => {
    const now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration);
  };

// console.log('Olá, tribo 15 A');

const funcao1 = (callback) => {
    setTimeout(() => {
        console.log('1 - Big Mac');
        callback();
    }, Math.random() * 3000);  
}    

const funcao2 = () => {
    setTimeout(() => {
        console.log('2 - Big Tasty')
    }, Math.random() * 3000);   
}

console.log('LANCHES');

funcao1(funcao2);


console.log('FIM');