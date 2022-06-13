class VersionNumber{
	constructor(val){
		this.value = val;
		this.text = this.text();
		this.input = this.input();

		this.element = this.init(this.text, this.input);
	}

	text(){
		let main = document.createElement("p");
		main.className = "order_text";
		main.innerText = "Version #: ";
		return main;
	}

	input(){
		let main = document.createElement("input");
		main.className = "order_input";
		main.value = this.value;
		main.readOnly = true;
		main.addEventListener("change", () => {
			if(MyRegex.versionNumberMatcher(this.input.value)){
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

		string += `<screen name="Screen12" entryscreen="false" exitscreen="true" transient="false">
        <description >
            <oia status="NOTINHIBITED" optional="false" invertmatch="false" />
            <numfields number="43" optional="true" invertmatch="false" />
            <numinputfields number="3" optional="true" invertmatch="false" />
        </description>
        <actions>
            <input value="y`;

         string += this.value;

         string += `[enter]" row="0" col="0" movecursor="true" xlatehostkeys="true" encrypted="false" />
        </actions>
        <nextscreens timeout="0" >
        </nextscreens>
    </screen>`;

		return string;
	}

}