const homePage = (req, res) => res.render("index", { user: req.user });

export { homePage };
