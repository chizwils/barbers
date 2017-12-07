//routes.js

module.exports = function (app) {
        //SHOW HOME PAGE

        app.get('/', (req, res) => {
            res.end('HOME PAGE');
        });


        //SHOW LOGIN FORM   
        app.get('/login', (req, res) => {
            res.end('LOGIN');
        });

        //PROCESS LOGIN FORM
        //app.post('/login', 'do all passport thing here');
        

        // CHECK IF USER IS LOGGED IN 
        function isLoggedIn(req, res, next) {

            //if user is authenticated in this session move to the next
            if (req.isAuthenticated()) {
                return next();
            }

            //if not redirect back to home page
            res.redirect('/');

        }


        //SHOW SIGN-UP FORM
        app.get('/signup', (req, res) => {
            res.end('SIGN UP');
        });

        //LOGOUT 
        app.get('/logout', (req, res) => {
            req.logout();
            res.redirect('/');
        });

};
