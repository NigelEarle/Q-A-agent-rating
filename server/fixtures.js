if (Agents.find().count() === 0) {

  Agents.insert({
    first_name: 'Joe',
    last_name: 'Shmoe',
    email: 'joe.shmoe@gmail.com',
    territoryId: 'KnDKfvAKpQHs9h7zG'
  });

  Agents.insert({
    first_name: 'Steve',
    last_name: 'Doe',
    email: 'steve.doe@gmail.com',
    territoryId: 'mqz9EgHAvmwaxcCpq'
  });

  Agents.insert({
    first_name: 'Janet',
    last_name: 'Long',
    email: 'janet.long@gmail.com',
    territoryId: 't4Z4oQHp8AXXo244m'
  });

}

if (Territories.find().count() === 0) {

  Territories.insert({
    name: 'Asia'
  });

  Territories.insert({
    name: 'North America'
  });

  Territories.insert({
    name: 'Europe'
  });

  Territories.insert({
    name: 'Africa'
  })
}