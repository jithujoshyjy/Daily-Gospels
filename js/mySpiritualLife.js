var spiritualLife = (name,icon,heading,theme) => `\
<div class="${name}LandingSceneBox spritualLandingBox">
	<span class="${name}PageIcon fa fa-${icon} spiritualPageIcon"></span>
	<h1 class="${name}PageHeading spiritualPageHeading">${heading}</h1>
	<button class="goBackHome">
		Home
	</button>
</div>
<style>
div.${name}LandingSceneBox {
	width: 96%;
	height: 300px;
	border-radius: 5px;
	border-bottom: 5px solid ${theme};
	border-right: 5px solid ${theme};
	margin: 15px calc((100% - 98%)/2);
	position: relative;
	}
.${name}PageIcon {
	font-size: 3em;
	margin: 15px;
	}
h1.${name}PageHeading {
	color: ${theme};
	text-align: center;
	}
button.goBackHome {
	color: ${theme};
	transition: background-color 250ms;
	font-size: 1.2em;
	border-radius: 3px;
	padding: 6px 30px;
	position: absolute;
	bottom: 30px;
	left: calc((100vw - 150px)/2);
	outline: none;
	}
button.goBackHome:hover {
	background-color: ${theme};
	}
</style>
<script>
$("li.dashboardToggle").on("click",function() {
	if(storeItems.currentlyAt === "subSection") {
		goBackHome();
		$("li.dashboardToggle span").text("Dashboard");
		}
	});
 $("button.goBackHome").on("click", function() {
 	goBackHome();
 	$("li.dashboardToggle span").text("Dashboard");
 	});
</script>
`;