package io.employeeproject.employeeprojectbackend.config;


//import java.sql.Date;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//import io.employeeproject.employeeprojectbackend.converters.DateConverter;

import io.employeeproject.employeeprojectbackend.converters.StringTrimConverter;

@Configuration
public class ModelMapperConfig {
    
    @Bean
    public ModelMapper modelMapper() {
	
	ModelMapper mapper = new ModelMapper();
	
	mapper.typeMap(String.class, String.class).setConverter(new StringTrimConverter());
//	mapper.typeMap(Date.class, String.class).setConverter(new DateConverter());

	mapper.getConfiguration().setSkipNullEnabled(true);
	return mapper;
	
	
    }

}
