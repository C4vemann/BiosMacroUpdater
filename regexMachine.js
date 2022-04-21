function regexMachine(input){
	if(regex1(input) == true){
		if(orderTemp != null && orderTemp.orderId != null && orderTemp.orderName != null && orderTemp.orderTag != null){
			orderList.push(orderTemp);
		}
		orderTemp = new OrderForm();
		orderTemp.orderId = input;
	} else if(regex2(input) == true){
		if(orderTemp != null && orderTemp.orderId != null){
			orderTemp.orderName = input;
		} else {
			console.error("Order Format Wrong");
		}
	} else if(regex3(input) == true){
		if(orderTemp != null && orderTemp.orderId != null && orderTemp.orderName != null){
			orderTemp.orderTag = input;
		} else{
			console.error("Order Format Wrong");
		}
	} else if(regex4(input) == true){
		if(orderTemp != null && orderTemp.orderId != null && orderTemp.orderName != null && orderTemp.orderTag != null){
			orderPeripherals.push(input);
		} else{
			console.error("Order Format Wrong");
		}
	} else{
		console.error("Input not recognizable");
	}
}