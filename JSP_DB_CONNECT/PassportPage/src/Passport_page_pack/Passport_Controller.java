package Passport_page_pack;

import java.util.Map;

 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller

public class Passport_Controller {

	    @Autowired
	    private PassportDAO passportDAO;
	    
	    //method for initializing values
	    @RequestMapping(value = "/login", method = RequestMethod.GET)
	    public String loginMethod(Map<String,Object> model)
	    {
	        Passport p = new Passport();
	        model.put("pp", p);
	        return "Passport_Home";
	    
	    }
	    
	    
	    //method for inserting DATA into the table
	    
	    @RequestMapping(value="/insert", method = RequestMethod.POST)
	    public String insertMethod(@ModelAttribute("pp")Passport p)
	    {
	    	System.out.println("Inserted");
	        passportDAO.insertPassport(p);
	        return "Registered";
	        
	        
	    }
	    
	   
	}


