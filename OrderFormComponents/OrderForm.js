class OrderForm{
	
	constructor(list,id,x,y,v,z,a,b){

		this.isEditing = false;

		this.parentList = list;

		this.formId = new OrderFormId(id);
		this.orderNumber = new OrderNumber(x);
		this.itemNumber = new ItemNumber(y);
		this.versionNumber = new VersionNumber(v);
		this.serialNumber = new SerialNumber(z);
		this.assetNumber = new AssetNumber(a);
		this.peripherals = new PeripheralList(b);
		
		this.element = this.init(this.formId, this.orderNumber,this.itemNumber, this.versionNumber,this.serialNumber,this.assetNumber,this.peripherals);
	}

	init(id, x,y,v,z,a,b){
		let main = document.createElement("div");
		main.className = "order_container";

		let deleteButton = document.createElement("button");
		deleteButton.innerText = "X";
		deleteButton.className = "delete_button";
		deleteButton.addEventListener("click", () => {


			if(this.parentList.top <= 0){
				console.log("List too small");
			} else{
				this.element.remove();

				for(let x = this.formId.value - 1; x < this.parentList.list.length; x++){
					if(this.parentList.list[x+1] != null){
						this.parentList.list[x] = this.parentList.list[x+1];
						this.parentList.list[x].formId.changeValue(x + 1);
					}
				}
				this.parentList.pop();
		
			}
		});

		let header = document.createElement("div");
		header.className = "order_header";
		header.appendChild(id.element);
		header.appendChild(deleteButton);
		main.appendChild(header);

		let body = document.createElement("div")
		body.className = "order_body";
		body.appendChild(x.element);
		body.appendChild(y.element);
		body.appendChild(v.element);
		body.appendChild(z.element);
		body.appendChild(a.element);
		body.appendChild(b.element);
		main.appendChild(body);
		
		let button = document.createElement("button");
		button.innerText = "Edit";
		button.addEventListener("click", () => {
			if(this.isEditing){
				this.isEditing = false;
				this.orderNumber.input.readOnly = true;
				this.itemNumber.input.readOnly = true;
				this.versionNumber.input.readOnly = true;
				this.serialNumber.input.readOnly = true;
				this.assetNumber.input.readOnly = true;
				for(let x of this.peripherals.list){
					x.input.readOnly = true;
				}
				this.peripherals.emptyInput.readOnly = true;
				button.innerText = "Edit";
			} else {
				this.isEditing = true;
				this.orderNumber.input.readOnly = false;
				this.itemNumber.input.readOnly = false;
				this.versionNumber.input.readOnly = false;
				this.serialNumber.input.readOnly = false;
				this.assetNumber.input.readOnly = false;
				for(let x of this.peripherals.list){
					x.input.readOnly = false;
				}
				this.peripherals.emptyInput.readOnly = false;
				button.innerText = "Save";
			}
		});

		let footer = document.createElement("div");
		footer.className = "order_footer";
		footer.appendChild(button);
		main.appendChild(footer);

		return main;
	}

	print(){
		let string = ``;
		string += this.orderNumber.print();

		string += `<screen name="Screen2" entryscreen="false" exitscreen="false" transient="false">
        <description >
            <oia status="NOTINHIBITED" optional="false" invertmatch="false" />
            <numfields number="83" optional="true" invertmatch="false" />
            <numinputfields number="10" optional="true" invertmatch="false" />
        </description>
        <actions>
            <input value="[pf9]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
        </actions>
        <nextscreens timeout="0" >
            <nextscreen name="Screen3" />
        </nextscreens>
    </screen>`;
    	string += `<screen name="Screen3" entryscreen="false" exitscreen="false" transient="false">
        <description >
            <oia status="NOTINHIBITED" optional="false" invertmatch="false" />
            <numfields number="70" optional="true" invertmatch="false" />
            <numinputfields number="4" optional="true" invertmatch="false" />
        </description>
        <actions>
            <input value="1[tab][enter]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
        </actions>
        <nextscreens timeout="0" >
            <nextscreen name="Screen4" />
        </nextscreens>
    </screen>

    <screen name="Screen4" entryscreen="false" exitscreen="false" transient="false">
        <description >
            <oia status="NOTINHIBITED" optional="false" invertmatch="false" />
            <numfields number="139" optional="true" invertmatch="false" />
            <numinputfields number="0" optional="true" invertmatch="false" />
        </description>
        <actions>
            <input value="[pf21]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
        </actions>
        <nextscreens timeout="0" >
            <nextscreen name="Screen5" />
        </nextscreens>
    </screen>

    <screen name="Screen5" entryscreen="false" exitscreen="false" transient="false">
        <description >
            <oia status="NOTINHIBITED" optional="false" invertmatch="false" />
            <numfields number="171" optional="true" invertmatch="false" />
            <numinputfields number="0" optional="true" invertmatch="false" />
        </description>
        <actions>
            <input value="1cb/iVxPcHs=" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="true" />
        </actions>
        <nextscreens timeout="0" >
            <nextscreen name="Screen6" />
        </nextscreens>
    </screen>

    <screen name="Screen6" entryscreen="false" exitscreen="false" transient="false">
        <description >
            <oia status="NOTINHIBITED" optional="false" invertmatch="false" />
            <numfields number="139" optional="true" invertmatch="false" />
            <numinputfields number="0" optional="true" invertmatch="false" />
        </description>
        <actions>
            <input value="[pf20]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
        </actions>
        <nextscreens timeout="0" >
            <nextscreen name="Screen7" />
        </nextscreens>
    </screen>`;

		string += this.serialNumber.print();
		string += this.assetNumber.print();
		string += this.peripherals.print();

		string += `<screen name="Screen10" entryscreen="false" exitscreen="false" transient="false">
        <description >
            <oia status="NOTINHIBITED" optional="false" invertmatch="false" />
            <numfields number="139" optional="true" invertmatch="false" />
            <numinputfields number="0" optional="true" invertmatch="false" />
        </description>
        <actions>
            <input value="[pf6]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
        </actions>
        <nextscreens timeout="0" >
            <nextscreen name="Screen11" />
        </nextscreens>
    </screen>

    <screen name="Screen11" entryscreen="false" exitscreen="false" transient="false">
        <description >
            <oia status="NOTINHIBITED" optional="false" invertmatch="false" />
            <numfields number="70" optional="true" invertmatch="false" />
            <numinputfields number="4" optional="true" invertmatch="false" />
        </description>
        <actions>
            <input value="[pf7]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
        </actions>
        <nextscreens timeout="0" >
            <nextscreen name="Screen12" />
        </nextscreens>
    </screen>`;

		string += this.versionNumber.print();
		return string;
	}
}