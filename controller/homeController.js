const homeController = (req, res) => res.render("index", { user: req.user });

export { homeController };
