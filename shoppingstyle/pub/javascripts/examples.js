

const imageContainer = new ImageContainer()
imageContainer.addFirstPicture("/images/lvshow.png", "#pic_container", "width: 750px; height: 350px; margin: 10px;") 
imageContainer.addNextPicture("/images/lvshow2.png")
imageContainer.addNextPicture("/images/diorshow.png")
imageContainer.addNextPicture("/images/diorshow2.png")
imageContainer.loopPictureAuto(2000)
const imageContainer2 = new ImageContainer()
imageContainer2.addFirstPicture("/images/lvshow.png", "#pic_container2", "width: 750px; height: 350px; margin: 10px;") 
imageContainer2.addNextPicture("/images/lvshow2.png")
imageContainer2.addNextPicture("/images/diorshow.png")
imageContainer2.addNextPicture("/images/diorshow2.png")
imageContainer2.findNextPict("#find_next")
imageContainer2.findPrePict("#find_prev")

const imageContainer3 = new ImageContainer()
imageContainer3.addFirstPicture("/images/diorWhiteSaddle.png", "#pic_container3", "width: 250px; height: 150px; margin: 10px;") 
imageContainer3.addNextPicture("/images/diorWhiteSaddle2.png")
imageContainer3.changeByOne("#pic_container3")

$("#resize_picture").click(
	function(){
		imageContainer3.resize("width: 200px; height: 160px; margin: 20px;")
	}
)



const layout = new LayoutGenerator()
layout.addObjects("/images/diorWhiteSaddle2.png", "#layout", "width: 200px; height: 150px; margin: 10px;")
layout.addObjects("/images/diorWhiteSaddle.png", "#layout", "width: 100px; height: 70px; margin: 10px;")
$("#increasing").click(
	function(){
		layout.increasing("#layout")
	}
)

$("#decreasing").click(
	function(){
		layout.decreasing("#layout")
	}
)

$("#alignright").click(
	function(){
		layout.alignRight("#layout")
	}
)

$("#alignleft").click(
	function(){
		layout.alignLeft("#layout")
	}
)

const layout2 = new LayoutGenerator()
layout2.addObjects("/images/diorWhiteSaddle.png", "#layout2", "width: 200px; height: 150px; margin: 10px;")
layout2.addObjects("/images/diorWhiteSaddle2.png", "#layout2", "width: 100px; height: 70px; margin: 10px;")
layout2.addObjects("/images/diorWhiteSaddle3.png", "#layout2", "width: 100px; height: 70px; margin: 10px;")
layout2.addObjects("/images/diorWhiteSaddle4.png", "#layout2", "width: 100px; height: 70px; margin: 10px;")
$("#fifty").click(
	function(){
		layout2.resize(50, "#layout2")
	}
)
$("#seventy").click(
	function(){
		layout2.resize(70, "#layout2")
	}
)
$("#onetwenty").click(
	function(){
		layout2.resize(120, "#layout2")
	}
)


