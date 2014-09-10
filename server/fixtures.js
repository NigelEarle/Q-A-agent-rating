if (Agents.find().count() === 0) {

  Agents.insert({
    first_name: 'Joe',
    last_name: 'Shmoe',
    email: 'joe.shmoe@gmail.com'
  });

  Agents.insert({
    first_name: 'Steve',
    last_name: 'Doe',
    email: 'steve.doe@gmail.com'
  });

  Agents.insert({
    first_name: 'Janet',
    last_name: 'Long',
    email: 'janet.long@gmail.com'
  });

}

if (Territories.find().count() === 0) {
  Territories.insert({
    name: 'Hong Kong'
  });

  Territories.insert({
    name: 'New York'
  });

  Territories.insert({
    name: 'London'
  });

  Territories.insert({
    name: 'Sao Paulo'
  })
}