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

// 3 tests per territory.

// asia tests
  Tests.insert({
    agentId: agent4Id,
    categories: {
        callExperience: {
            call_professionalism: {
                test: [
                    {
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 1,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    }
                ],
                sub_cat_result: {
                    total_score: 14,
                    max_score: 22
                }
            },
            cat_result: {
                cat_score_total: 14,
                cat_max_total: 22,
                cat_percent: 63.63636363636363
            }
        },
        phoneInbound: {
            call_management: {
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
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 4,
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
                        score: 2,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 17,
                    max_score: 23
                }
            },
            cat_result: {
                cat_score_total: 29,
                cat_max_total: 39,
                cat_percent: 74.35897435897436
            },
            end_call: {
                test: [
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 0,
                        maxScore: 2
                    },
                    {
                        score: 2,
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
                    total_score: 6,
                    max_score: 8
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
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 6,
                    max_score: 8
                }
            }
        }
    },
    territoryId: asiaId,
    test_result: {
        test_score_total: 43,
        test_max_total: 61,
        test_percent: 70
    },
    dateCreated: new Date()
  });

  Tests.insert({
    agentId: agent3Id,
    categories: {
        callExperience: {
            call_professionalism: {
                test: [
                    {
                        score: 2,
                        maxScore: 3
                    },
                    {
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 1,
                        maxScore: 4
                    },
                    {
                        score: 0,
                        maxScore: 4
                    },
                    {
                        score: 4,
                        maxScore: 4
                    }
                ],
                sub_cat_result: {
                    total_score: 13,
                    max_score: 18
                }
            },
            cat_result: {
                cat_score_total: 13,
                cat_max_total: 18,
                cat_percent: 72.22222222222221
            }
        },
        phoneInbound: {
            call_management: {
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
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 1,
                        maxScore: 2
                    },
                    {
                        score: 2,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 19,
                    max_score: 23
                }
            },
            cat_result: {
                cat_score_total: 32,
                cat_max_total: 39,
                cat_percent: 82.05128205128204
            },
            end_call: {
                test: [
                    {
                        score: 1,
                        maxScore: 2
                    },
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 0,
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
                    total_score: 7,
                    max_score: 8
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
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 6,
                    max_score: 8
                }
            }
        }
    },
    territoryId: asiaId,
    test_result: {
        test_score_total: 45,
        test_max_total: 57,
        test_percent: 78
    },
    dateCreated: new Date()
  });

  Tests.insert({
    agentId: agent1Id,
    categories: {
        callExperience: {
            call_professionalism: {
                test: [
                    {
                        score: 2,
                        maxScore: 3
                    },
                    {
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 1,
                        maxScore: 4
                    },
                    {
                        score: 0,
                        maxScore: 4
                    },
                    {
                        score: 4,
                        maxScore: 4
                    }
                ],
                sub_cat_result: {
                    total_score: 13,
                    max_score: 18
                }
            },
            cat_result: {
                cat_score_total: 13,
                cat_max_total: 18,
                cat_percent: 72.22222222222221
            }
        },
        phoneInbound: {
            call_management: {
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
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 1,
                        maxScore: 2
                    },
                    {
                        score: 2,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 19,
                    max_score: 23
                }
            },
            cat_result: {
                cat_score_total: 32,
                cat_max_total: 39,
                cat_percent: 82.05128205128204
            },
            end_call: {
                test: [
                    {
                        score: 1,
                        maxScore: 2
                    },
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 0,
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
                    total_score: 7,
                    max_score: 8
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
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 6,
                    max_score: 8
                }
            }
        }
    },
    territoryId: asiaId,
    test_result: {
        test_score_total: 45,
        test_max_total: 57,
        test_percent: 78
    },
    dateCreated: new Date()
  });

// africa tests
  Tests.insert({
    agentId: agent1Id,
    categories: {
        callExperience: {
            call_professionalism: {
                test: [
                    {
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 1,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    }
                ],
                sub_cat_result: {
                    total_score: 14,
                    max_score: 22
                }
            },
            cat_result: {
                cat_score_total: 14,
                cat_max_total: 22,
                cat_percent: 63.63636363636363
            }
        },
        phoneInbound: {
            call_management: {
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
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 4,
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
                        score: 2,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 17,
                    max_score: 23
                }
            },
            cat_result: {
                cat_score_total: 29,
                cat_max_total: 39,
                cat_percent: 74.35897435897436
            },
            end_call: {
                test: [
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 0,
                        maxScore: 2
                    },
                    {
                        score: 2,
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
                    total_score: 6,
                    max_score: 8
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
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 6,
                    max_score: 8
                }
            }
        }
    },
    territoryId: africaId,
    test_result: {
        test_score_total: 43,
        test_max_total: 61,
        test_percent: 70
    },
    dateCreated: new Date()
  });

  Tests.insert({
    agentId: agent2Id,
    categories: {
        callExperience: {
            call_professionalism: {
                test: [
                    {
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 1,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    }
                ],
                sub_cat_result: {
                    total_score: 14,
                    max_score: 22
                }
            },
            cat_result: {
                cat_score_total: 14,
                cat_max_total: 22,
                cat_percent: 63.63636363636363
            }
        },
        phoneInbound: {
            call_management: {
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
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 4,
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
                        score: 2,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 17,
                    max_score: 23
                }
            },
            cat_result: {
                cat_score_total: 29,
                cat_max_total: 39,
                cat_percent: 74.35897435897436
            },
            end_call: {
                test: [
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 0,
                        maxScore: 2
                    },
                    {
                        score: 2,
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
                    total_score: 6,
                    max_score: 8
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
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 6,
                    max_score: 8
                }
            }
        }
    },
    territoryId: africaId,
    test_result: {
        test_score_total: 43,
        test_max_total: 61,
        test_percent: 70
    },
    dateCreated: new Date()
  });

  Tests.insert({
    agentId: agent4Id,
    categories: {
        callExperience: {
            call_professionalism: {
                test: [
                    {
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 1,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    }
                ],
                sub_cat_result: {
                    total_score: 14,
                    max_score: 22
                }
            },
            cat_result: {
                cat_score_total: 14,
                cat_max_total: 22,
                cat_percent: 63.63636363636363
            }
        },
        phoneInbound: {
            call_management: {
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
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 4,
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
                        score: 2,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 17,
                    max_score: 23
                }
            },
            cat_result: {
                cat_score_total: 29,
                cat_max_total: 39,
                cat_percent: 74.35897435897436
            },
            end_call: {
                test: [
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 0,
                        maxScore: 2
                    },
                    {
                        score: 2,
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
                    total_score: 6,
                    max_score: 8
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
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 6,
                    max_score: 8
                }
            }
        }
    },
    territoryId: africaId,
    test_result: {
        test_score_total: 43,
        test_max_total: 61,
        test_percent: 70
    },
    dateCreated: new Date()
  });

// europe tests
  Tests.insert({
    agentId: agent2Id,
    categories: {
        callExperience: {
            call_professionalism: {
                test: [
                    {
                        score: 2,
                        maxScore: 3
                    },
                    {
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 1,
                        maxScore: 4
                    },
                    {
                        score: 0,
                        maxScore: 4
                    },
                    {
                        score: 4,
                        maxScore: 4
                    }
                ],
                sub_cat_result: {
                    total_score: 13,
                    max_score: 18
                }
            },
            cat_result: {
                cat_score_total: 13,
                cat_max_total: 18,
                cat_percent: 72.22222222222221
            }
        },
        phoneInbound: {
            call_management: {
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
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 1,
                        maxScore: 2
                    },
                    {
                        score: 2,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 19,
                    max_score: 23
                }
            },
            cat_result: {
                cat_score_total: 32,
                cat_max_total: 39,
                cat_percent: 82.05128205128204
            },
            end_call: {
                test: [
                    {
                        score: 1,
                        maxScore: 2
                    },
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 0,
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
                    total_score: 7,
                    max_score: 8
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
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 6,
                    max_score: 8
                }
            }
        }
    },
    territoryId: europeId,
    test_result: {
        test_score_total: 45,
        test_max_total: 57,
        test_percent: 78
    },
    dateCreated: new Date()
  });

  Tests.insert({
    agentId: agent1Id,
    categories: {
        callExperience: {
            call_professionalism: {
                test: [
                    {
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 1,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    }
                ],
                sub_cat_result: {
                    total_score: 14,
                    max_score: 22
                }
            },
            cat_result: {
                cat_score_total: 14,
                cat_max_total: 22,
                cat_percent: 63.63636363636363
            }
        },
        phoneInbound: {
            call_management: {
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
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 4,
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
                        score: 2,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 17,
                    max_score: 23
                }
            },
            cat_result: {
                cat_score_total: 29,
                cat_max_total: 39,
                cat_percent: 74.35897435897436
            },
            end_call: {
                test: [
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 0,
                        maxScore: 2
                    },
                    {
                        score: 2,
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
                    total_score: 6,
                    max_score: 8
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
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 6,
                    max_score: 8
                }
            }
        }
    },
    territoryId: europeId,
    test_result: {
        test_score_total: 43,
        test_max_total: 61,
        test_percent: 70
    },
    dateCreated: new Date()
  });

  Tests.insert({
    agentId: agent3Id,
    categories: {
        callExperience: {
            call_professionalism: {
                test: [
                    {
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 1,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    }
                ],
                sub_cat_result: {
                    total_score: 14,
                    max_score: 22
                }
            },
            cat_result: {
                cat_score_total: 14,
                cat_max_total: 22,
                cat_percent: 63.63636363636363
            }
        },
        phoneInbound: {
            call_management: {
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
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 4,
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
                        score: 2,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 17,
                    max_score: 23
                }
            },
            cat_result: {
                cat_score_total: 29,
                cat_max_total: 39,
                cat_percent: 74.35897435897436
            },
            end_call: {
                test: [
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 0,
                        maxScore: 2
                    },
                    {
                        score: 2,
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
                    total_score: 6,
                    max_score: 8
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
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 6,
                    max_score: 8
                }
            }
        }
    },
    territoryId: europeId,
    test_result: {
        test_score_total: 43,
        test_max_total: 61,
        test_percent: 70
    },
    dateCreated: new Date()
  });

// north america tests
  Tests.insert({
    agentId: agent3Id,
    categories: {
        callExperience: {
            call_professionalism: {
                test: [
                    {
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 1,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    }
                ],
                sub_cat_result: {
                    total_score: 14,
                    max_score: 22
                }
            },
            cat_result: {
                cat_score_total: 14,
                cat_max_total: 22,
                cat_percent: 63.63636363636363
            }
        },
        phoneInbound: {
            call_management: {
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
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 4,
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
                        score: 2,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 17,
                    max_score: 23
                }
            },
            cat_result: {
                cat_score_total: 29,
                cat_max_total: 39,
                cat_percent: 74.35897435897436
            },
            end_call: {
                test: [
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 0,
                        maxScore: 2
                    },
                    {
                        score: 2,
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
                    total_score: 6,
                    max_score: 8
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
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 6,
                    max_score: 8
                }
            }
        }
    },
    territoryId: northAmericaId,
    test_result: {
        test_score_total: 43,
        test_max_total: 61,
        test_percent: 70
    },
    dateCreated: new Date()
  });

  Tests.insert({
    agentId: agent4Id,
    categories: {
        callExperience: {
            call_professionalism: {
                test: [
                    {
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 1,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    }
                ],
                sub_cat_result: {
                    total_score: 14,
                    max_score: 22
                }
            },
            cat_result: {
                cat_score_total: 14,
                cat_max_total: 22,
                cat_percent: 63.63636363636363
            }
        },
        phoneInbound: {
            call_management: {
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
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 4,
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
                        score: 2,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 17,
                    max_score: 23
                }
            },
            cat_result: {
                cat_score_total: 29,
                cat_max_total: 39,
                cat_percent: 74.35897435897436
            },
            end_call: {
                test: [
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 0,
                        maxScore: 2
                    },
                    {
                        score: 2,
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
                    total_score: 6,
                    max_score: 8
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
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 6,
                    max_score: 8
                }
            }
        }
    },
    territoryId: northAmericaId,
    test_result: {
        test_score_total: 43,
        test_max_total: 61,
        test_percent: 70
    },
    dateCreated: new Date()
  });

  Tests.insert({
    agentId: agent1Id,
    categories: {
        callExperience: {
            call_professionalism: {
                test: [
                    {
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 3
                    },
                    {
                        score: 2,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    },
                    {
                        score: 1,
                        maxScore: 4
                    },
                    {
                        score: 3,
                        maxScore: 4
                    }
                ],
                sub_cat_result: {
                    total_score: 14,
                    max_score: 22
                }
            },
            cat_result: {
                cat_score_total: 14,
                cat_max_total: 22,
                cat_percent: 63.63636363636363
            }
        },
        phoneInbound: {
            call_management: {
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
                        score: 3,
                        maxScore: 3
                    },
                    {
                        score: 4,
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
                        score: 2,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 17,
                    max_score: 23
                }
            },
            cat_result: {
                cat_score_total: 29,
                cat_max_total: 39,
                cat_percent: 74.35897435897436
            },
            end_call: {
                test: [
                    {
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 0,
                        maxScore: 2
                    },
                    {
                        score: 2,
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
                    total_score: 6,
                    max_score: 8
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
                        score: 2,
                        maxScore: 2
                    },
                    {
                        score: 1,
                        maxScore: 2
                    }
                ],
                sub_cat_result: {
                    total_score: 6,
                    max_score: 8
                }
            }
        }
    },
    territoryId: northAmericaId,
    test_result: {
        test_score_total: 43,
        test_max_total: 61,
        test_percent: 70
    },
    dateCreated: new Date()
  });

}