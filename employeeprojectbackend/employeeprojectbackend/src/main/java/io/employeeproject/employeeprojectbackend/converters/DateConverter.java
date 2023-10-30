package io.employeeproject.employeeprojectbackend.converters;

import java.sql.Date;
import java.text.SimpleDateFormat;

//import java.util.Date;

import org.modelmapper.Converter;
import org.modelmapper.spi.MappingContext;

public class DateConverter implements Converter<Date, String>{

    @Override
    public String convert(MappingContext<Date, String> context) {
	// TODO Auto-generated method stub
	if(context.getSource() == null) {
	    return null;
	}
	SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
	return formatter.format(context.getSource().toString());
    }
    
    

}
