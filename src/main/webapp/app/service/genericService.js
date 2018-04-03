app.service('genericService', function($http){
	
	var GenericService = function(pUrl){
		
		var url = "rest/"+pUrl;
		
		this.salvar = function(object,callback, callbackErro){
			$http.post(url, object).success(function(response){
				if(callback)
					callback(response);
			}).error(function(response){
				if(callbackErro)
					callbackErro();
			});
		};
		
		this.get = function(id,callback){
			$http.get(url+"/"+id).success(function(response){
				if(callback)
					callback(response);
			}).error(function(response){
				if(callback)
					callback(false);
			});;
		};
		
		
		this.getAll = function(callback){
			$http.get(url).success(function(response){
				if(callback)
					callback(response);
			}).error(function(response){
				if(callback)
					callback(false);
			});;
		};
		
		
		this.remover = function(id,callback, callbackError){
			$http.delete(url+"/"+id).success(function(response){
				if(callback)
					callback(response);
			}).error(function(response){
				if(callbackError)
					callbackError(response);
			});;
		};
        
    }
    
    return GenericService;
	
});