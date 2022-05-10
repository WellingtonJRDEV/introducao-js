// type fortemente tipado

// interfaces se refere a classes pode ser utilizado o extends

interface IAnimal {
  nome: string,
  tipo: 'Terrestre' | 'Aquatico',
  domestico: boolean,
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
  domestico: true,
  nome: 'cachorro',
  porte: 'medio',
  tipo: 'Terrestre',
  visaoNoturna: false,
}

console.log(animal)
