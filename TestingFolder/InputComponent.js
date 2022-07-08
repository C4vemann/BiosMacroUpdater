function InputComponent(value,type){
	let isEditable = false;

	let element = init();

	function init(){
		let main = document.createElement("input");
		main.value = value;
		main.dataset.type = type;
		main.readOnly = false;
		main.addEventListener("change", () => {
			switch(main.dataset.type){
				case 'order':
				(MyRegex.orderNumberMatcher(main.value)) ? true : main.value = '';
				break;
				case 'item':
				(MyRegex.itemNumberMatcher(main.value)) ? true : main.value = '';
				break;
				case 'version':
				(MyRegex.versionNumberMatcher(main.value)) ? true : main.value = '';
				break;
				case 'serial':
				(MyRegex.serialNumberMatcher(main.value)) ? true : main.value = '';
				break;
				case 'asset':
				(MyRegex.assetNumberMatcher(main.value)) ? true : main.value = '';
				break;
				case 'peripheral':
				(MyRegex.peripheralNumberMatcher(main.value)) ? true : main.value = '';
				break;
				default: break;
			}
		});
		return main;
	}

	function getValue(){
		return element.value;
	}

	function getElement(){
		return element;
	}

	function toggleEdit(){
		(isEditable) ? isEditable = false : isEditable = true;	
		console.log(isEditable);
	}
	function isEditableFunction(){
		return isEditable;
	}

	return {
		getElement,
		getValue,
		toggleEdit,
		isEditableFunction
	}
}