const populacaoInfectada = 1000;
const quantidadeTransmissao = 4;
const tempoPecorrido=  100;

let pessoasInfectadas = populacaoInfectada * quantidadeTransmissao;

pessoasInfectadas = pessoasInfectadas * 100;

console.log(`A quantidade de pessoas infectadas ao final dos ${tempoPecorrido} Dias, será de ${pessoasInfectadas}`);