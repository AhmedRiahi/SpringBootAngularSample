package com.talan.sampleApp.rest;


import com.talan.sampleApp.model.SampleMessage;
import com.talan.sampleApp.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/chat")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @RequestMapping(path = "/putMessage/{message}",method = RequestMethod.GET)
    public void messageReceived(@PathVariable  String message){
        this.chatService.newMessageReceived(message);
    }

    @RequestMapping(path = "/pullMessages" , method = RequestMethod.GET)
    public List<SampleMessage> pullMessages(){
        return this.chatService.getAllMessages();
    }
}
