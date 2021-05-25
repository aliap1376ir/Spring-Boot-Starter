package ir.aliap1376ir.source.springBootStarter.websocket;

import ir.aliap1376ir.source.springBootStarter.controller.StarterController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.HashMap;

@Component
public class Handler extends TextWebSocketHandler {

    private Logger logger = LoggerFactory.getLogger(StarterController.class);
    private HashMap<String, WebSocketSession> activeConnections = new HashMap<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        logger.info("new Connection");
        logger.info(session.getUri().getPath());
        activeConnections.put(session.getUri().getPath(), session);
        logger.info(activeConnections.size() + "");
        super.afterConnectionEstablished(session);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        logger.info("new Message");
        logger.info(message.toString());
        super.handleTextMessage(session, message);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        logger.info("close Connection");
        activeConnections.remove(session.getUri().getPath());
        super.afterConnectionClosed(session, status);
    }
}
