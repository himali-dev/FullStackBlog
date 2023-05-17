const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "loremLabore aute sint ea tempor id dolor."
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Velit exercitation nulla culpa mollit laboris."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Enim quis amet irure mollit officia magna."
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Officia commodo culpa labore minim nostrud.Adr."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Velit id sunt quis qui id proident duis non exercitation minim qui cupidatat."
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Cillum aliqua commodo ex dolore magna ipsum commodo minim nisi eiusmod laboris."
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Aute enim dolor anim exercitation fugiat voluptate fugiat laborum laboris veniam labore."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Aliquip pariatur labore sunt deserunt officia esse culpa fugiat."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
