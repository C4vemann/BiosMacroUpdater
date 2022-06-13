class OrderNumber{
	constructor(val){
		this.value = val;
		this.text = this.text();
		this.input = this.input();

		this.element = this.init(this.text, this.input);
	}

	text(){
		let main = document.createElement("p");
		main.className = "order_text";
		main.innerText = "Order #: ";
		return main;
	}

	input(){
		let main = document.createElement("input");
		main.className = "order_input";
		main.value = this.value;
		main.readOnly = true;
		main.addEventListener("change", () => {
			if(MyRegex.orderNumberMatcher(this.input.value)){
				this.value = this.input.value;
			} else {
				this.input.value = this.value;
			}
		});
		return main;
	}

	init(text,input){
		let main = document.createElement("div");
		main.className = "order_content";
		main.appendChild(text);
		main.appendChild(input);
		return main;
	}

	print(){
		let string = ``;
		string += `<screen name="Screen1" entryscreen="true" exitscreen="false" transient="false">
        <description >
            <oia status="NOTINHIBITED" optional="false" invertmatch="false" />
        </description>
        <actions>
            <input value="`;
        string += this.value;
        string += `[enter]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
        </actions>
        <nextscreens timeout="0" >
            <nextscreen name="Screen2" />
        </nextscreens>
    </screen>`;
		return string;
	}
}