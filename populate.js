const GITHUB_BASE_API = "https://api.github.com/";
const USERNAME = "ndkshr";
var div_repo_cards = document.getElementById("repo_cards");

async function getUser(user) {
	const error_message = "<strong>Sorry no repositories can be retrieved now! :(</strong>" + " Hey, are you using Internet Browser?";
	if (!div_repo_cards) {
		return
	}
	SLUG_REQUEST = "users/" + user + "/repos";
	FILTER = "?type=source;sort=created";
	const response = await fetch(GITHUB_BASE_API + SLUG_REQUEST + FILTER);
	const result = await response.json();
	var repo_card_contents = await "";
	result.forEach(element => {
		if(!element["fork"]){
			repo_card_contents += "<div class='col-md-4'><div class='card mb-4 box-shadow'><img class='card-img-top'";

			//Image URL
			var repo_image = "projectdata/" + element["name"] + ".png";
			// var fs = new File(repo_image);

			// if(!doesFileExist("projectdata/placeholder.png")){
				repo_card_contents += "src='" + "projectdata/placeholder.png" + "' alt='Card image cap'>";
			// }
			// else{
			// 	repo_card_contents += "src='" + repo_image + "' alt='Card image cap'>";
			// }

			repo_card_contents += "<div class='card-body'> <h5>";
			repo_card_contents += element["name"]; //Project Name
			repo_card_contents += "</h5><p id='description' class='card-text'>";
			repo_card_contents += element["description"]; //Description 
			repo_card_contents += "</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'>";
			repo_card_contents += "<a href='" + element["html_url"]; //Repo Link
			repo_card_contents += "'><button type='button' class='btn btn-dark'><strong>View / Source</strong></button></a></div></div></div></div></div>"
		}
	});
	div_repo_cards.innerHTML = repo_card_contents;
}

function doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
     
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}



