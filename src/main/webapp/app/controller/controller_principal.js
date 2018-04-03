app.controller('ctrl_principal', function($scope,$rootScope,$timeout,$interval, pokemonService){
	
	var ng = $scope;
	
	ng.nomePokemon = "";
	ng.pokemon = {};
    ng.pokemons = [];
    ng.pokemonsSelecionados = [];
    ng.time = {};
    ng.listaTimes = [];
    ng.exibirListaTimes = false;
	
	ng.buscarPokemon = function(url){
		
		ng.pokemon = {};
		
		pokemonService.buscarPokemon(url,function(response){
					
			ng.pokemon = response;
			
		},function(erro){
			
		})
	}

    ng.listarTodos = function(id){
		
		ng.pokemons = [];
		pokemonService.buscarTodos(function(response){
					
			ng.pokemons = response.results;
			
		},function(erro){
			
		})
	}

    ng.selecionarPokemon = function(){
        if( ng.getQtdHabilidadesSelecionados == 0){
            alert("Selecione pelo menos uma habilidade");        
        }else if( ng.pokemonJaSelcionado(ng.pokemon.id)){
                alert("Pokemon ja selecionado");
        }else if(ng.pokemonsSelecionados.length == 6){
                 alert("O seu time já está completo");
        }else{
                ng.pokemonsSelecionados.push(angular.copy(ng.pokemon)); 
                ng.pokemon = {};

         }
        
    };

    ng.pokemonJaSelcionado = function(id){
      
        for(var i in ng.pokemonsSelecionados){
            if(ng.pokemonsSelecionados[i].id == id){
                    return true;            
            }
        }    

        return false;
    }

    ng.selecionarHabilidade = function(habilidade){
        if(!habilidade.selecionado){
            
            if(ng.getQtdHabilidadesSelecionados() == 4){
                alert("Limite de habilidades já atingido");
            }else{
                habilidade.selecionado = true;
            }            
                    
        }else{
             habilidade.selecionado = false;
        }

    } 

    ng.remover = function(pokemon){
        ng.pokemonsSelecionados = $.grep( ng.pokemonsSelecionados, function (n,i){
            return n.id != pokemon.id;
        });
    }

    ng.getQtdHabilidadesSelecionados = function(){

        var count = 0;        

        for(var i in ng.pokemon.abilities){
            if(ng.pokemon.abilities[i].selecionado){
                count++;
             }        
        }            
        
        return count;
    }  

    ng.salvarTime = function(){
        if(!ng.time.nome){
            alert("Preecnha o nome do time");
        }else{
            var times = ng.getTimes();
            ng.time.pokemons = angular.copy(ng.pokemonsSelecionados);
            
            if(ng.time.id){

                    for(var i in times){
                        if(times[i].id == ng.time.id){
                            times[i] = angular.copy(ng.time);                               
                            break;                        
                        }
                    }

            }else{
                  ng.time.id = new Date().valueOf();
                  times.push( ng.time);
            }
                      
            window.localStorage.setItem("times",JSON.stringify(times));
            ng.pokemonsSelecionados = [];
            ng.pokemon = {};
            alert("Time Salvo com Sucesso");
            ng.exibeLista();
            
        }
    }

    ng.getTimes = function(){
        
        var times = window.localStorage.getItem("times");
            if(times == null){
                times = [];
            }else{
                times = JSON.parse(times);
             } 

        return times;       
        
    }

    ng.exibeLista = function(){
       ng.exibirListaTimes = true;
       ng.listaTimes = ng.getTimes();
    }

    ng.editarTime = function(time){
            ng.time = angular.copy(time);
            ng.pokemonsSelecionados = ng.time.pokemons;
            ng.exibirListaTimes = false;
    }

    ng.novoTime = function(){
        ng.time = {};
        ng.pokemon = {};
        ng.pokemonsSelecionados = [];
        ng.exibirListaTimes = false;
    }

    ng.listaTimes = ng.getTimes();

    ng.listarTodos();
	
});
