let globalData = {
	it:12
}
let getRGB = () => {
	let rgb = []
	for(let i=0,len=3;i<len;i++){
		rgb.push(parseInt(Math.random()*255))
	}
	rgb = rgb.join(",")
	return "rgb("+rgb+")"
}
export {
	globalData,
	getRGB
}