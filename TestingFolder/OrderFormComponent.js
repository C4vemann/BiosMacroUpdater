function OrderFormComponent(text,value,type){
	let isEditable = false;
	let textComponent = TextComponent(text);
	let inputComponent = InputComponent(value,type);
	let element = init();

	function init(){
		let main = document.createElement("div");
		main.appendChild(textComponent.getElement());
		main.appendChild(inputComponent.getElement());
		return main;
	}

	function getValue(){
		return inputComponent.getValue();
	}

	function getElement(){
		return element;
	}
	function toggleEdit(){
		(isEditable) ? isEditable = false : isEditable = true;	
		console.log("Component: " + isEditable);
		textComponent.toggleEdit();
		inputComponent.toggleEdit();
	}
	function isEditableFunction(){
		return isEditable;
	}
	return {
		getValue,
		getElement,
		toggleEdit,
		isEditableFunction
	}
}

/*function OrderFormComponentList(text,list,type){
	let textComponent = TextComponent(text);
	let inputComponentList = [];
	if(list.length > 0){
		list.forEach((item) => {
			inputComponentList.push(InputComponent(item,type));
		});
	}
	let body = getBody();
	let element = init();

	function getBody(){
		let main = document.createElement("div");
		inputComponentList.forEach((item) => {
			main.appendChild(createInput(item));
		});
		return main;
	}

	function createInput(item){
		let main = document.createElement("div");
		main.appendChild(item.getElement());

		let button = document.createElement("button");
		button.innerText = "X";
		button.addEventListener("click", () => {
			let i = 0;
			for(i; i < inputComponentList.length; i++){
				if(item === inputComponentList[i]){
					break;
				}
			}

			for(i; i < inputComponentList.length;i++){
				if(inputComponentList[i+1] == null){
					break;
				}
				inputComponentList[i] = inputComponentList[i+1];
			}

			inputComponentList.pop();
			main.remove();
		});

		main.appendChild(button);
		return main;
	}

	function init(){
		let main = document.createElement("div");
		main.appendChild(textComponent.getElement());
		
		main.appendChild(body);
		
		let input = document.createElement("input");
		input.value = '';
		input.dataset.type = type;
		input.readOnly = false;
		input.addEventListener("change", () => {
			if(MyRegex.peripheralNumberMatcher(input.value)){
				inputComponentList.push(InputComponent(input.value,'peripheral'));
				body.appendChild(createInput(inputComponentList[inputComponentList.length-1]));
				input.value = '';
			} else {
				input.value = '';
			} 
		});

		main.appendChild(input);

		return main;
	}

	function getList(){
		let temp = [];
		inputComponentList.forEach((item,index)=>{
			temp[index] = item.getValue();
		});
		return temp;
	}

	function getElement(){
		return element;
	}

	return {
		getList,
		getElement
	}

}*/