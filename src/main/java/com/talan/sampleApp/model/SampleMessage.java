package com.talan.sampleApp.model;

import lombok.Builder;
import lombok.Data;

import java.util.Date;


@Data
@Builder
public class SampleMessage {
    private String message;
    private Date date;

}
