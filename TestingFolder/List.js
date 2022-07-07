function List(title,subtitle,className,options){
				let isEditable = false;
				let list = [];
				let header = createHeader();
				let body = createBody();
				let element = init();

				function createHeader(){
					let main = document.createElement("div");
					main.className = className + "_header";
					if(title != ""){
						main.appendChild(TextComponent(title, (className + "_header_text")).getElement());
					}
					if(subtitle != ""){
						main.appendChild(TextComponent(subtitle, (className + "_subheader_text")).getElement());
					}

					options.forEach((option)=>{
						if(option == "SAFE_EDIT"){
							let button = document.createElement("button");
							button.className = className + "_edit_button";
							button.innerText = "EDIT";
							button.addEventListener("click", () => {
								if(isEditable){
									isEditable = false;
									list.forEach((item)=>{
										item.toggleEdit();
									});
									button.innerText = "EDIT";
								} else {
									isEditable = true;	
									list.forEach((item)=>{
										item.toggleEdit();
									});
									button.innerText = "SAVE";
								} 
							});
							main.appendChild(button);
						}
						if(option == "UNSAFE_EDIT"){
							isEditable = true;
						}
					});

					return main;
				}

				function createBody(){
					let main = document.createElement("div");
					main.className = className + "_body";
					return main;
				}

				function init(){
					//outer wrapper
					let main = document.createElement("div");
					main.className = className;

					//header wrapper
					main.appendChild(header);

					//body wrapper
					main.appendChild(body);

					return main;
				}

				function addEntry(item){
					list.push(item);
					let main = document.createElement("div");
					main.className = className + "_item";

					let entryHeader = document.createElement("div");
					entryHeader.className = className + "_item_header";
					if(options != null){
						for(let option of options){
							if(option == "ITEM_HEADER"){
								entryHeader.appendChild(TextComponent((list.length + "."), (className + "_item_header_text")).getElement());
							}
						}
					}

					if(options != null){
						options.forEach((option)=>{
							if(option == "DELETABLE"){
								let button = document.createElement("button");
								button.className = className + "_delete_button";
								button.innerText = "X";
								button.addEventListener("click", () => {
									if(isEditable){
										let i = 0;
										for(i; i < list.length; i++){
											if(item === list[i]){
												break;
											}
										}

										for(i; i < list.length; i++){
											if(list[i+1] == null){
												break;
											}
											list[i] = list[i+1];
										}

										list.pop();
										main.remove();
									}
								});
								entryHeader.appendChild(button);
							}
						});
					}

					main.appendChild(entryHeader);

					let entryBody = document.createElement("div");
					entryBody.className = className + "_item_body";
					entryBody.appendChild(item.getElement());
					main.appendChild(entryBody);

					body.appendChild(main);
				}

				function getList(){
					return list;
				}

				function getElement(){
					return element;
				}

				function toggleEdit(){
					if(isEditable){
						isEditable = false;
					} else {
						isEditable = true;	
					} 
				}
				return{
					getList,
					getElement,
					addEntry,
					toggleEdit
				}
			}