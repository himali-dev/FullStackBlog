const { User } = require('../models');

const userData = [
    {
        username: "HIMALI",
        linkedin: "himali",
        email: "himali.baps@gmail.com",
        password: "p@dfdsf"
    },
    {
        username: "krishna",
        linkedin: "krish",
        email: "krish@gmail.com",
        password: "p@dsfdsfssword2"
    },
    {
        username: "jinal",
        linkedin: "dungar",
        email: "abcd@gmail.com",
        password: "p@sdfdsfssword3"
    },
    {
        username: "nila",
        linkedin: "sharma",
        email: "sharma@gmail.com",
        password: "wewedfedcf"
    },
    {
        username: "kriya",
        linkedin: "kriya111",
        email: "kriyaaaa@gmail.com",
        password: "23232342@ss"
    },
    {
        username: "nivedita",
        linkedin: "niva",
        email: "niva@gmail.com",
        password: "zxss@ss"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
