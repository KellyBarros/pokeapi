package br.com.kelly.resource;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.io.IOException;

@Path(value = "/pokemon")
@Produces("application/json; charset=UTF-8")
public class PokemonResource {

	public String base_url ="https://pokeapi.co/api/v2/";

	@GET
	public String buscarTodos() throws IOException {

		HttpClient client = HttpClientBuilder.create().build();
		HttpGet request = new HttpGet(base_url+"pokemon/?limit=1000");

		HttpResponse response = client.execute(request);

		HttpEntity httpEntity = response.getEntity();
		String result =  EntityUtils.toString(httpEntity, "utf-8");

		return result;

	}

	@GET
	@Path("buscaporurl")
	public String buscarPokemon(@QueryParam("url") String url) throws IOException {

		HttpClient client = HttpClientBuilder.create().build();
		HttpGet request = new HttpGet(url);

		HttpResponse response = client.execute(request);

		HttpEntity httpEntity = response.getEntity();
		String result =  EntityUtils.toString(httpEntity, "utf-8");

		return result;

	}

}
