module.exports = (req, res) => {

    res.json({
        method: req.method
    });

    res.send();
}