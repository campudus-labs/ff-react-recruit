package com.campudus.recruit;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.http.HttpMethod;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.StaticHandler;
import io.vertx.ext.web.handler.sockjs.BridgeEventType;
import io.vertx.ext.web.handler.sockjs.BridgeOptions;
import io.vertx.ext.web.handler.sockjs.PermittedOptions;
import io.vertx.ext.web.handler.sockjs.SockJSHandler;

import java.util.UUID;

public class Server extends AbstractVerticle {

  @Override
  public void start() throws Exception {

    Router router = Router.router(vertx);

    // Route for retrieving session
    router.route(HttpMethod.GET, "/session").handler(context -> {
      context.response().end(UUID.randomUUID().toString());
    });

    // Allow outbound traffic to the news-feed address
    BridgeOptions options = new BridgeOptions()
      .addInboundPermitted(new PermittedOptions().setAddress("heartbeat"))
      .addOutboundPermitted(new PermittedOptions().setAddress("heartbeats"));

    router.route("/eventbus/*").handler(SockJSHandler.create(vertx).bridge(options, event -> {
      // You can also optionally provide a handler like this which will be passed any events that occur on the bridge
      // You can use this for monitoring or logging, or to change the raw messages in-flight.
      // It can also be used for fine grained access control.

      if (event.type() == BridgeEventType.SOCKET_CREATED) {
        System.out.println("A socket was created");
      }

      // This signals that it's ok to process the event
      event.complete(true);
    }));

    // Serve the static resources
    router.route().handler(StaticHandler.create("webroot", Server.class.getClassLoader()));

    // Http server
    vertx.createHttpServer().requestHandler(router::accept).listen(8080);

    // Consume
    vertx.eventBus().consumer("heartbeat", event -> {
      JsonObject message = (JsonObject) event.body();

      JsonObject json = new JsonObject();
      json.put("uuid", message.getString("uuid"));

      vertx.eventBus().publish("heartbeats", json);
    });
  }
}
