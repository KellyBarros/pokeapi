app.service('pokemonService', function($http){
	
			
		this.buscarPokemon= function(urlPokemon,callback, callbackErro){
			$http.get("rest/pokemon/buscaporurl?url="+urlPokemon).success(function(response){
				
				if(callback)
					callback(response);
				
			}).error(function(error){
				if(callbackErro)
					callbackErro(error);
			});

 		};


        this.buscarTodos= function(callback, callbackErro){
			$http.get("rest/pokemon").success(function(response){
				if(callback)
					callback(response);
				
			}).error(function(error){
				if(callbackErro)
					callbackErro(error);
			});
		};
		
});
