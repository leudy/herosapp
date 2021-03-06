import { heroesdb } from "../data/heores";
export const getHeroesByI = (id) => {
  return heroesdb.find((c) => c.id === id);
};

export const getHeroesByPublisher = (publihser) => {
  //console.log(publihser);
  const publishers = ["DC Comics", "Marvel Comics"];
  if (!publishers.includes(publihser)) {
    throw new Error("Pubisher no existe");
  }
  return heroesdb.filter((h) => h.publisher === publihser);
};

export const getHeroeByFilter = (criteria) => {
  if (criteria === "") return [];
  const filter = criteria.toLocaleLowerCase();
  return heroesdb.filter((f) =>
    f.superhero.toLocaleLowerCase().includes(filter)
  );
};
