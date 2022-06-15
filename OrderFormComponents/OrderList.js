class OrderList{
	constructor(){
		this.list = new Array();
		this.top = 0;
	}

	push(x,y,v,z,a,b){
		this.top++;
		this.list.push(new OrderForm(this,this.top,x,y,v,z,a,b));
	}

	pop(){
		this.list.pop();
		this.top--;
	}
	removeByIndex(x){
		if(this.top <= 0){
			console.log("List too small");
		} else{
			this.list[x].element.remove();

			for(x; x < this.list.length; x++){
				if(this.list[x+1] != null){
					this.list[x] = this.list[x+1];
					this.list[x].element.id = x + 1;
					this.list[x].formId.changeValue(x + 1);
				}
			}
			this.list.pop();
			this.top--;
		}
		console.log(this.list);
	}

	print(){
		let screenCount = 1;
		let string = `
		<HAScript name="Script" description="" timeout="60000" pausetime="300" promptall="true" blockinput="true" author="nyconfig" creationdate="Jun 13, 2022 1:13:47 PM" supressclearevents="false" usevars="false" ignorepauseforenhancedtn="true" delayifnotenhancedtn="0" ignorepausetimeforenhancedtn="true" continueontimeout="false">`;
		
		for(let i = 0; i < this.list.length; i++){

			string += `
			<screen name="Screen${screenCount++}" entryscreen="true" exitscreen="false" transient="false">
				<description >
					<oia status="NOTINHIBITED" optional="false" invertmatch="false" />
				</description>
				<actions>
					<input value="${this.list[i].orderNumber.value}[enter]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
				</actions>
				<nextscreens timeout="500" >
					<nextscreen name="Screen${screenCount}" />
				</nextscreens>
			</screen>`

			string += `
			<screen name="Screen${screenCount++}" entryscreen="false" exitscreen="false" transient="false">
				<description >
					<oia status="NOTINHIBITED" optional="false" invertmatch="false" />
					<numfields number="83" optional="true" invertmatch="false" />
					<numinputfields number="10" optional="true" invertmatch="false" />
				</description>
				<actions>
					<input value="[pf9]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
				</actions>
				<nextscreens timeout="500" >
					<nextscreen name="Screen${screenCount}" />
				</nextscreens>
			</screen>`;

			string += `
			<screen name="Screen${screenCount++}" entryscreen="false" exitscreen="false" transient="false">
				<description >
					<oia status="NOTINHIBITED" optional="false" invertmatch="false" />
					<numfields number="70" optional="true" invertmatch="false" />
					<numinputfields number="4" optional="true" invertmatch="false" />
				</description>
				<actions>
					<input value="1[tab][enter]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
				</actions>
				<nextscreens timeout="500" >
					<nextscreen name="Screen${screenCount}" />
				</nextscreens>
			</screen>`;

			string += `
			<screen name="Screen${screenCount++}" entryscreen="false" exitscreen="false" transient="false">
				<description >
					<oia status="NOTINHIBITED" optional="false" invertmatch="false" />
					<numfields number="139" optional="true" invertmatch="false" />
					<numinputfields number="0" optional="true" invertmatch="false" />
				</description>
				<actions>
					<input value="[pf21]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
				</actions>
				<nextscreens timeout="500" >
					<nextscreen name="Screen${screenCount}" />
				</nextscreens>
			</screen>`;

			string += `
			<screen name="Screen${screenCount++}" entryscreen="false" exitscreen="false" transient="false">
				<description >
					<oia status="NOTINHIBITED" optional="false" invertmatch="false" />
					<numfields number="171" optional="true" invertmatch="false" />
					<numinputfields number="0" optional="true" invertmatch="false" />
				</description>
				<actions>
					<input value="1cb/iVxPcHs=" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="true" />
				</actions>
				<nextscreens timeout="500" >
					<nextscreen name="Screen${screenCount}" />
				</nextscreens>
			</screen>`;

			string += `
			<screen name="Screen${screenCount++}" entryscreen="false" exitscreen="false" transient="false">
				<description >
					<oia status="NOTINHIBITED" optional="false" invertmatch="false" />
					<numfields number="139" optional="true" invertmatch="false" />
					<numinputfields number="0" optional="true" invertmatch="false" />
				</description>
				<actions>
					<input value="[pf20]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
				</actions>
				<nextscreens timeout="500" >
					<nextscreen name="Screen${screenCount}" />
				</nextscreens>
			</screen>`;

			string += `
			<screen name="Screen${screenCount++}" entryscreen="false" exitscreen="false" transient="false">
				<description >
					<oia status="NOTINHIBITED" optional="false" invertmatch="false" />
					<numfields number="202" optional="true" invertmatch="false" />
					<numinputfields number="5" optional="true" invertmatch="false" />
				</description>
				<actions>
					<input value="${this.list[i].serialNumber.value}[enter]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
				</actions>
				<nextscreens timeout="500" >
					<nextscreen name="Screen${screenCount}" />
				</nextscreens>
			</screen>`;

			string += `
			<screen name="Screen${screenCount++}" entryscreen="false" exitscreen="false" transient="false">
				<description >
					<oia status="NOTINHIBITED" optional="false" invertmatch="false" />
					<numfields number="183" optional="true" invertmatch="false" />
					<numinputfields number="1" optional="true" invertmatch="false" />
				</description>
				<actions>
					<input value="${this.list[i].assetNumber.value}[enter]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
				</actions>
				<nextscreens timeout="500" >
					<nextscreen name="Screen${screenCount}" />
				</nextscreens>
			</screen>`;

			for(let p of this.list[i].peripherals.list){
				string += `
				<screen name="Screen${screenCount++}" entryscreen="false" exitscreen="false" transient="false">
					<description >
						<oia status="NOTINHIBITED" optional="false" invertmatch="false" />
						<numfields number="165" optional="true" invertmatch="false" />
						<numinputfields number="7" optional="true" invertmatch="false" />
					</description>
					<actions>
						<input value="${p.value}[enter]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
					</actions>
					<nextscreens timeout="500" >
						<nextscreen name="Screen${screenCount}" />
					</nextscreens>
				</screen>`;
			}

			string += `
			<screen name="Screen${screenCount++}" entryscreen="false" exitscreen="false" transient="false">
				<description >
					<oia status="NOTINHIBITED" optional="false" invertmatch="false" />
					<numfields number="139" optional="true" invertmatch="false" />
					<numinputfields number="0" optional="true" invertmatch="false" />
				</description>
				<actions>
					<input value="[pf6]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
				</actions>
				<nextscreens timeout="500" >
					<nextscreen name="Screen${screenCount}" />
				</nextscreens>
			</screen>`;

			string += `
			<screen name="Screen${screenCount++}" entryscreen="false" exitscreen="false" transient="false">
				<description >
					<oia status="NOTINHIBITED" optional="false" invertmatch="false" />
					<numfields number="70" optional="true" invertmatch="false" />
					<numinputfields number="4" optional="true" invertmatch="false" />
				</description>
				<actions>
					<input value="[pf7]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
				</actions>
				<nextscreens timeout="500" >
					<nextscreen name="Screen${screenCount}" />
				</nextscreens>
			</screen>`;

			string += 
			`<screen name="Screen${screenCount++}" entryscreen="false"`;


			if(i != this.list.length-1){
				string += `exitscreen="false"`;
			} else {
				string += `exitscreen="true"`;
			}

			  


			 string += `transient="false">
				<description >
					<oia status="NOTINHIBITED" optional="false" invertmatch="false" />
					<numfields number="43" optional="true" invertmatch="false" />
					<numinputfields number="3" optional="true" invertmatch="false" />
				</description>
				<actions>
					<input value="y${this.list[i].versionNumber.value}[enter]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
				</actions>
				<nextscreens timeout="5000" >`;


			if(i != this.list.length-1){

				string += `<nextscreen name="Screen${screenCount}" />`;

			}

			string += `
				</nextscreens>
			</screen>`;
		}
		

		string += `
		</HAScript>`;

		return string;
	}
}