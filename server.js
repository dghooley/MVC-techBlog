const express = require("express");
const path = require("path");
// const controller = require("./controllers");
const exphbs = require("express-handlebars");
const session = require("express-session");
const routes = require("./controllers")
const helpers = require("./utils/helpers")

const sequelize = require("./config/connection");
const SequlizeStore = require("connect-session-sequelize")(session.Store);
const hbs = exphbs.create({ helpers });

const sess = {
    secret: "super secret secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequlizeStore({
        db: sequelize,
    }),
};


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sess));


// app.use("/", controller);
app.use (routes);

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});

