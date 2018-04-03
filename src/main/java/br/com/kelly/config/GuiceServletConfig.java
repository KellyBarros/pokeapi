package br.com.kelly.config;

import java.util.HashMap;
import java.util.Map;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceServletContextListener;
import com.google.inject.servlet.ServletModule;
import com.sun.jersey.guice.spi.container.servlet.GuiceContainer;

import br.com.kelly.resource.PokemonResource;

public class GuiceServletConfig extends GuiceServletContextListener {

    @Override
    protected Injector getInjector() {
        return Guice.createInjector(new ServletModule() {
            @Override
            protected void configureServlets() {

                bind(PokemonResource.class);
                
                Map<String, String> params = new HashMap<String, String>();
                params.put("com.sun.jersey.api.json.POJOMappingFeature", "true");
                serve("/rest/*").with(GuiceContainer.class, params);
            }
        });
    }

}
