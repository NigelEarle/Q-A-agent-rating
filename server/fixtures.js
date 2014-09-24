// var asiaId, northAmericaId, europeId, africaId, agent1Id, agent2Id, agent3Id, agent4Id;

if (Territories.find().count() === 0) {

  asiaId = Territories.insert({
    name: 'Asia'
  });

  northAmericaId = Territories.insert({
    name: 'North America'
  });

  europeId = Territories.insert({
    name: 'Europe'
  });

  africaId = Territories.insert({
    name: 'Africa'
  })
}

if (Agents.find().count() === 0) {

  agent1Id = Agents.insert({
    first_name: 'Joe',
    last_name: 'Shmoe',
    email: 'joe.shmoe@gmail.com',
    territoryId: africaId
  });

  agent2Id = Agents.insert({
    first_name: 'Steve',
    last_name: 'Doe',
    email: 'steve.doe@gmail.com',
    territoryId: europeId
  });

  agent3Id = Agents.insert({
    first_name: 'Janet',
    last_name: 'Long',
    email: 'janet.long@gmail.com',
    territoryId: northAmericaId
  });

  agent4Id = Agents.insert({
    first_name: 'None',
    last_name: 'None',
    email: 'none@none.com',
    territoryId: asiaId
  });

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

if (Tests.find().count() === 0){

  Tests.insert({

    agentId: agent4Id,
    categories: {
        phoneInbound: {
            call_management: {
                test: [
                    {
                        score: 0,
                        maxScore: 2
                    },
                    {
                        score: 0,
                        maxScore: 2
                    },
                    {
                        score: 0,
                        maxScore: 3
                    },
                    {
                        score: 0,
                        maxScore: 4
                    },
                    {
                        score: 2,
                        maxScore: 4
                    },
                    {
                        score: 2,
                        maxScore: 4
                    },
                    {
                        score: 1,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 6,
                    max_score: 12
                }
            },
            cat_result: {
                cat_score_total: 14,
                cat_max_total: 26,
                cat_percent: 53.84615384615385
            },
            end_call: {
                test: [
                    {
                        score: 1,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 5,
                    max_score: 10
                }
            },
            greeting: {
                test: [
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    },
                    {
                        score: 0,
                        maxScore: 2
                    },
                    {
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 3,
                    max_score: 4
                }
            }
        }
    },
    dateCreated: "2014-09-24T07:33:32.005Z",
    dateModified: "2014-09-24T07:34:08.773Z",
    territoryId: asiaId

  });

  Tests.insert({

    agentId: agent2Id,
    categories: {
        phoneInbound: {
            call_management: {
                test: [
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        maxScore: 2
                    },
                    {
                        maxScore: 3
                    },
                    {
                        maxScore: 4
                    },
                    {
                        maxScore: 4
                    },
                    {
                        maxScore: 4
                    },
                    {
                        maxScore: 2
                    },
                    {
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 2,
                    max_score: 2
                }
            },
            cat_result: {
                cat_score_total: 14,
                cat_max_total: 16,
                cat_percent: 87.5
            },
            end_call: {
                test: [
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        maxScore: 2
                    },
                    {
                        score: 0,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 4,
                    max_score: 6
                }
            },
            greeting: {
                test: [
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 2,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 8,
                    max_score: 8
                }
            }
        }
    },
    dateCreated: "2014-09-24T07:36:20.744Z",
    dateModified: "2014-09-24T07:37:00.713Z",
    territoryId: europeId

  });

}