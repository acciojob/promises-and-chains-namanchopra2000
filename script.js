//your JS code here. If required.

function EligibleForvVote() {
	var age = document.getElementById("age").value ;
var name = document.getElementById("name").value ;
	const mypromise = new Promise((resolve , reject) => {
		if(age >=18){
			setTimeout(()=>{
				resolve(true)
				alert("Welcome, " + name + "You can vote.")
			},4000)
		}
		else {
			setTimeout(()=>{
				reject(false)
				alert("Oh sorry" name "You aren't old enough.")
			},4000)
		}
	})
	
}