/**
@Author: Mohammad Hafiz bin Ismail <mypapit@gmail.com>
@Copyright 2020 Mohammad Hafiz bin Ismail
@URL: https://github.com/mypapit/irisdemohtml5
@Youtube: https://www.youtube.com/channel/UCtqvSh6uJcqUw5RG99r5F4g

This file is part of the "Sample Implementation of Iris Classification 
with Weka J48 Decision Tree in HTML5 Mobile Web Application (with source code)" video demo.


**/

function classifyIris(length,width) 
{
	
	if (width <= 0.6) {
		return "Iris-setosa";
	} else {
		if (width > 1.7) {
			return "Iris-virginica";
		} else {
			if (length <=4.9) {
				return "Iris-versicolor";
				
			} else {
				if (width >1.5) {
					return "Iris-versicolor";
				} else {
					
					return "Iris-virginica";
				}
			}
		}
		
	}
	
	
	
}