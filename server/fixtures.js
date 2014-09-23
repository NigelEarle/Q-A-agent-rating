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

if (Meteor.users.find().count() === 0) {
  Accounts.createUser({
    username: 'admin',
    email: 'none@none.com',
    password: '123456',
    profile: {
        first_name: 'Admin',
        last_name: 'Account',
        role: 'admin'
    }
  });
}