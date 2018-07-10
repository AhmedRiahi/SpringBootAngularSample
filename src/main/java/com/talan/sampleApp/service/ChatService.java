package com.talan.sampleApp.service;


import com.talan.sampleApp.model.SampleMessage;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ChatService {

    private List<SampleMessage> messages = new ArrayList<>();

    public void newMessageReceived(String message){
        SampleMessage sampleMessage =  SampleMessage.builder().message(message).date(new Date()).build();
        this.messages.add(sampleMessage);
    }

    public List<SampleMessage> getAllMessages(){
        return this.messages;
    }
}
