const DB = require('../db');

exports.index = (_, res) => res.render('index', { data: DB.all() });
exports.create = (req, res) => res.json({ data: { id: DB.create(req.body) } });

exports.update = (req, res) => {
    const { id } = req.params;
    const payload = req.body;

    // Update the data in the DB (fake DB with an array)
    res.json({ status: DB.update(id, payload) });
}

exports.delete = (req, res) => {
    const { id } = req.params;

    // Delete the data in the DB (fake DB with an array)
    res.json({ status: DB.delete( Number(id) ) });
}