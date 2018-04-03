app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
        $urlRouterProvider
                .otherwise('/');


        $stateProvider

                .state("principal", {
                    url: "/",
                    templateUrl: 'app/view/principal.html',
                    controller: 'ctrl_principal',
                })
                
    }
]);
