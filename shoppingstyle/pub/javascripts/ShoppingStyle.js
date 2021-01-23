/* this is the ShoppingStyle Library */



function ImageContainer(){
	this.currentPicture = null
	this.pictures = []

}

ImageContainer.prototype = {

	addFirstPicture: function(image, selector, style){
		const img = document.createElement("img")
		const parent = $(selector)
		img.src = image
		if (style === undefined) style = parent[0].getAttribute("style")
		img.style = style
		parent.append(img)
		this.currentPicture = img
		this.pictures.push(img.src)
	},

	addNextPicture: function(image){
		const img = document.createElement("img")
		img.src = image
		this.pictures.push(img.src)
	},


	loopPictureHelp: function(delay){
		const self = this
        let i = 0, max = self.pictures.length - 1, run;
        run = function(){
            self.currentPicture.src = self.pictures[i]
            if(i++ < max){
            	setTimeout(run, delay);
           }
        }
        run();
        return false;
	},

	loopPictureAuto: function(delay) {
		const self = this
		outerdelay = delay * this.pictures.length
		delay = delay
		callMe =  function() {
			setTimeout(callMe, outerdelay);
			self.loopPictureHelp(delay)
		}
		callMe()
		
	},



	findNextPict: function(selector){ 
		const self = this
		const max = self.pictures.length;

		$(selector).click(
			function(){
			for (let i = 0; i < max ; i++) {
				if (self.pictures[i] == self.currentPicture.src){
					if (i < (max - 1)){
						self.currentPicture.src = self.pictures[i+1];
						break
					}else{
						self.currentPicture.src = self.pictures[0];
						break
					}
				}
			}
		})
		
	},

	findPrePict: function(selector){ 
		const self = this
		const max = self.pictures.length;

		$(selector).click(
			function(){
			for (let i = 0; i < max ; i++) {
				if (self.pictures[i] == self.currentPicture.src){
					if (i != 0){
						self.currentPicture.src = self.pictures[i-1];
						break
					}else{
						self.currentPicture.src = self.pictures[max-1];
						break
					}
				}
			}
		})
	},

	changeByOne: function(selector){
		const self = this
		let oldimg = null
		$(selector).on({
			mouseenter: function(){
				oldimg = self.currentPicture.src
				self.currentPicture.src = self.pictures[1]
			},
			mouseleave: function(){
				self.currentPicture.src = oldimg
			}
		})
	},



}


function LayoutGenerator(){
	this.objects = []
}

LayoutGenerator.prototype = {

	addObjects: function(object, selector, style){ //style is optional
		const img = document.createElement("img")
		const container = document.createElement("div")
		const parent = $(selector)
		img.src = object
		if (style === undefined) style = parent[0].getAttribute("style")

		container.style = style
		img.style.width = container.style.width
		img.style.height = container.style.height
		container.style.float = "left"
		container.append(img)
		parent.append(container)
		this.objects.push(container)
	},

	increasing: function(selector){ //arange picture in incresing order with width
		console.log(this.objects[0])
		let len = this.objects.length;
	    for (let i = 0; i < len - 1; i++) {
	        for (let j = 0; j < len - 1 - i; j++) {
	            if (this.objects[j].style.width > this.objects[j+1].style.width) {      
	                let temp = this.objects[j+1];        
	                this.objects[j+1] = this.objects[j];
	                this.objects[j] = temp;
	            }
	        }
	    }
	    console.log(this.objects[0])
	    let f = $(selector); 
	    console.log(f[0].childNodes)
		let childs = f[0].childNodes; 
		for(let i = 0; i < childs.length; i++) { 
		  f[0].removeChild(childs[i]); 
		}

		for (let k = 0; k < this.objects.length; k++) {
			f.append(this.objects[k])
		}

	},

	decreasing: function(selector){
		console.log(this.objects[0])
		let len = this.objects.length;
	    for (let i = 0; i < len - 1; i++) {
	        for (let j = 0; j < len - 1 - i; j++) {
	            if (this.objects[j].style.width < this.objects[j+1].style.width) {      
	                let temp = this.objects[j+1];        
	                this.objects[j+1] = this.objects[j];
	                this.objects[j] = temp;
	            }
	        }
	    }
	    console.log(this.objects[0])
	    let f = $(selector); 
	    console.log(f[0].childNodes)
		let childs = f[0].childNodes; 
		for(let i = 0; i < childs.length; i++) { 
		  f[0].removeChild(childs[i]); 
		}

		for (let k = 0; k < this.objects.length; k++) {
			f.append(this.objects[k])
		}


	},

	alignRight: function(selector){
		for (let k = 0; k < this.objects.length; k++) {
			this.objects[k].style.float = "right"
		}
		let f = $(selector); 
	    console.log(f[0].childNodes)
		let childs = f[0].childNodes; 
		for(let i = 0; i < childs.length; i++) { 
		  f[0].removeChild(childs[i]); 
		}
		for (let k = 0; k < this.objects.length; k++) {
			f.append(this.objects[k])
		}

	},

	alignLeft: function(selector){
		for (let k = 0; k < this.objects.length; k++) {
			this.objects[k].style.float = "left"
		}
		let f = $(selector); 
	    console.log(f[0].childNodes)
		let childs = f[0].childNodes; 
		for(let i = 0; i < childs.length; i++) { 
		  f[0].removeChild(childs[i]); 
		}
		for (let k = 0; k < this.objects.length; k++) {
			f.append(this.objects[k])
		}

	},

	resize: function(percentage, selector){
		for (let i = 0; i < this.objects.length; i++){
			let newwidth = (parseInt(this.objects[i].style.width, 10) * percentage) / 100
			let newheight = (parseInt(this.objects[i].style.height, 10) * percentage) / 100
			this.objects[i].style.width = String(newwidth) + "px"
			this.objects[i].children[0].style.width = String(newwidth) + "px"
			console.log(this.objects[i].children[0])
			this.objects[i].style.height = String(newheight) + "px"
			this.objects[i].children[0].style.height = String(newheight) + "px"
			
		}
		let f = $(selector); 
	    console.log(f[0].childNodes)
		let childs = f[0].childNodes; 
		for(let i = 0; i < childs.length; i++) { 
		  f[0].removeChild(childs[i]); 
		}
		for (let k = 0; k < this.objects.length; k++) {
			f.append(this.objects[k])
		}

	}




}

