function OrderForm(a,b,c,d,e,f){
	let isEditable = false;
	let order = OrderFormComponent('Order #: ', a, 'order');
	let item = OrderFormComponent('Item #: ', b, 'item');
	let version = OrderFormComponent('Version #: ', c, 'version');
	let serial = OrderFormComponent('Serial #: ', d, 'serial');
	let asset = OrderFormComponent('Asset #: ', e, 'asset');
	let peripherals = List('Peripherals: ','', '');
	for(let item of f){
		peripherals.addEntry(InputComponent(item,'peripheral'),["DELETABLE"]);
	}

	let element = init();

	function printValues(){
		return {
			'order: ':order.getValue(),
			'item: ':item.getValue(),
			'version: ':version.getValue(),
			'serial: ':serial.getValue(),
			'asset: ':asset.getValue(),
			'peripherals':peripherals.getList()
		};
	}

	function init(){
		let main = document.createElement("div");
		main.appendChild(order.getElement());
		main.appendChild(asset.getElement());
		main.appendChild(serial.getElement());
		main.appendChild(item.getElement());
		main.appendChild(version.getElement());
		main.appendChild(peripherals.getElement());

		return main;
	}

	function getElement(){
		return element;
	}

	function toggleEdit(){
		(isEditable) ? isEditable = false : isEditable = true;	
		order.toggleEdit();
		item.toggleEdit();
		version.toggleEdit();
		serial.toggleEdit();
		asset.toggleEdit();
		peripherals.getList().forEach((item)=>{
			item.toggleEdit();
		});
	}
	function isEditableFunction(){
		return isEditable;
	}
	return {
		printValues,
		getElement,
		toggleEdit,
		isEditableFunction
	}
}