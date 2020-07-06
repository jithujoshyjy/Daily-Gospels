var doc = (info) => document.write(info);
var cons = (info) => console.log(info);
let timeBasedTheme,
	smileyActive = false,
	contentSection1 = null,
	smC = null,
	smileyList = "",
	dashboardProfilePic = null,
	subPagesTranslateActive = false,
	selectedLanguage = null,
	languageElemClass = null,
	lastlet = 0,
	storeItems = {};
	function store(obj) {
		//arg1: object
		let keys = Object.keys(obj);
		let values = Object.values(obj);
		if(localStorage && localStorage.setItem && typeof obj === "object")
		for(let k in keys)
		localStorage.setItem(keys[k], values[k]);
		for(let k in keys)
		storeItems[`${keys[k]}`] = values[k];
		}
function locate(item) {
	//arg1: string
	if(localStorage && localStorage.getItem(item))
	return localStorage.getItem(item);
	else return storeItems[item];
	}
var origiBackground = "linear-gradient(to bottom,#FFE6A4 1%, white 99%)";
function setProfilePic(src) {
		$("div.userImage").html(`<img src=${src} width="75%" height="75%" style="border: px solid red; position: relative; top: 11px; left: 11px; border-radius: 25%;"/>`);
		$("dialog").hide();
		store({"profileImage": src});
		}
$(function() {
	"use strict";
/////////////////////////////////////////////////
	$("div.startTimeBanner").delay(1000).animate({left: "110vw"},500,function() {
	$(this).hide();
	});
/////////////////////////////////////////////////
	$(".userImageIcon").css("font-size",`${setaIconSize(39)}px`);
	store({"currentlyAt":"home"});
	function setaIconSize(percentage) {
		//arg1: number
		let parent = $(".userImageIcon").parent();
		return Math.round(
Math.sqrt(
Math.pow(parent.width(), 2) + Math.pow(parent.height(), 2)
				)
			)/100 * percentage;
		}
	function exchangeGreetings() {
let currentTime = new Date(),
 hour = currentTime.getHours(),
 minute = currentTime.getMinutes(),
 second = currentTime.getSeconds(),
 ampm = () => hour >= 12 && hour <= 24 ? "pm" : "am";
	if(hour >= 5 && hour <= 16) {
		dayTime();
		if(hour > 12 && hour <= 15)
		$("h3.greetWord").text("Good Afternoon");
		else if(hour > 15)
		$("h3.greetWord").text("Good Evening");
		else $("h3.greetWord").text("Good Morning");
		} else {
		nightTime();
		if(hour > 16 && hour < 20)
			$("h3.greetWord").text("Good Evening");
		else $("h3.greetWord").text("Good Night");
		}
		function dayTime() {
		timeBasedTheme = "day";
		$("div.greetings").addClass("greetings-day");
		$("body.mainTheme").addClass("mainTheme-day");
		$(".mySpiritualLifeIcon").addClass("mySpiritualLifeIcon-day");
		$(".toggle-toggleFancyOptionsIcon").addClass("toggleFancyOptionsIcon-day");
		$(".howWasTheDayIcon1").addClass("howWasTheDayIcon1-day");
		$(".theDeveloperIcon"). addClass("theDeveloperIcon-day");
		$(".theDeveloperMailIcon"). addClass("theDeveloperMailIcon-day");
		$(".creativeCommonsIcon"). addClass("creativeCommonsIcon-day");
		$("div.theDeveloperMail"). addClass("theDeveloperMail-day");
		}
		function nightTime() {
			timeBasedTheme = "night";
			$("div.greetings").addClass("greetings-night");
			$("body.mainTheme").addClass("mainTheme-night");
		$(".mySpiritualLifeIcon").addClass("mySpiritualLifeIcon-night");
		$(".toggle-toggleFancyOptionsIcon").addClass("toggleFancyOptionsIcon-night");
		$(".howWasTheDayIcon1").addClass("howWasTheDayIcon1-night");
		$(".theDeveloperIcon"). addClass("theDeveloperIcon-night");
		$(".theDeveloperMailIcon"). addClass("theDeveloperMailIcon-night");
		$(".creativeCommonsIcon"). addClass("creativeCommonsIcon-night");
		$("div.theDeveloperMail"). addClass("theDeveloperMail-night");
		}
	}
	exchangeGreetings();
	$("style.mediaSetCss").text(firstSet);
	let a = 90;
	function toggleMenu() {
		$("div.menuContent")
				.delay(350)
					.slideToggle();
			$("button.toggle-menu")
				.css({
					"transition":"transform 500ms ease",
					"transform":`rotate(${a}deg)`
		});
		a+=90;
		$("button.toggle-menu").attr("disabled","disabled");
		$("nav.top").
			toggleClass("passive");
			if(!$("nav.top").hasClass("passive")) {
		$("nav.top").addClass("passiveState");
		}
	$("div.menu").slideToggle(700,function() {
		if($("nav.top").hasClass("passive")) {
					$("nav.top").removeClass("passiveState");
					}
$("button.toggle-menu").removeAttr("disabled");
	});
}//toggleMenu()
	
	$("button.toggle-menu")
		.on("click",function() {
			toggleMenu();
	});

	$("div.toggleFancyOptions").on("click", toggleFancyOptions);
function toggleFancyOptions() {
	$("div.toggleFancyOptions").off("click", toggleFancyOptions);
	setTimeout(function() {
		$("div.toggleFancyOptions").on("click", toggleFancyOptions);
		},1000);
	if(!$("div.fancyOptions").hasClass("expanded")) {
setTimeout(function() {
	$("div.fancyOptions").css("display","block");
				},220);
	$("div.fancyOptions")
		.animate({
			width:"90vw"},1000)
		.toggleClass("expanded");
	$("div.toggleFancyOptions").addClass("toggleFancyOptions-active").removeClass("toggleFancyOptions-passive");
		
	} else {
	$("div.fancyOptions")
		.animate({
			width:"0vw"},1000)
		.toggleClass("expanded");
	setTimeout(function() {
		$("div.fancyOptions")
			.css("display","none");
		$("div.toggleFancyOptions").removeClass("toggleFancyOptions-active").addClass("toggleFancyOptions-passive");
			},750);
		}
	}
	$("div.howWasTheMoodOfDayBox")
	.scrollLeft(360);
	setTimeout(function() {
		$("div.howWasTheMoodOfDayBox")
		.on("scroll", function() {
			$("div.thisDay")
				.slideDown();
		});
	},1000);
	setInterval(function() {
		if($("div.howWasTheMoodOfDayBox").scrollLeft() === 360) {
			$("div.thisDay")
				.slideUp();
		}
	},200);
	$("div.thisDay")
		.on("click", function() {
	if($("span.thisDayLabel").text() === "Today") {
			$("div.howWasTheMoodOfDayBox")
				.animate({
						scrollLeft: 360
				});
			}
		});
	$("li.dashboardToggle").on("click",function() {
		toggleMenu();
	if(storeItems.currentlyAt === "home") {
		store({"currentlyAt": "dashboard"});
		$("aside.sidebar").css("display","block").animate({left: "10px"},200);
			$("main").animate({left: "100vw"},200,function() {
	$("main").css("display","none");
	$("body").removeClass("mainTheme").addClass("subTheme");
});
			$("div.toggleFancyOptions").animate({right: "-60px"});
	if($("div.fancyOptions").width() != 0 ) {
		$("div.fancyOptions")
			.width(0)
			.css("display","none")
			.toggleClass("expanded");
	$("div.toggleFancyOptions").removeClass("toggleFancyOptions-active").addClass("toggleFancyOptions-passive");
		}
		$("li.dashboardToggle span").text("Home");
	} else {
	if(storeItems.currentlyAt === "dashboard") {
	store({"currentlyAt": "home"});
		$("aside.sidebar")
				.animate({
					left: "-75vw"},200,function() {
		$("aside.sidebar").css("display","none");
});
			$("main").css("display","block").animate({
					left: "0px"},200,function() {
	$("div.toggleFancyOptions"). css({"right":"15px"});
	$("body").removeClass("subTheme").addClass("mainTheme");
});
			$("div.toggleFancyOptions")
				.animate({
					right: "15px"},200);
$("li.dashboardToggle span").text("Dashboard");
		}
	}
});
	$("div.describeThisDay").on("click",function() {
		$("div.describeThisDay")
			.css("display","none");
		$("div.describeThisDayInput")
			.fadeIn().html(function() {
		return $("template.describeThisDayFields").html();
		});
		$("section.howWasTheDay").height("375px");
		});
function prayerClick(self) {
	//arg1: `this`
	$("div.prayer").removeClass("prayerTypeActive");
	$(self).addClass("prayerTypeActive");
	}
	$("div.prayer1").on("click",function() {
		prayerClick(this);
	});
	$("div.prayer2").on("click",function() {
		prayerClick(this);
	});
	$("div.prayer3").on("click",function() {
		prayerClick(this);
	});
	$("div.prayerOptions").on("click",function() {
		if(!$("div.prayerOptions").hasClass("prayerOptionsActive")) {
			$("div.prayerOptions").addClass("prayerOptionsActive").animate({
		borderRadius: "0px"},300,
		function() {
			$(this).addClass("prayerOptionsActiveOutline");
			$(".prayerOptionsIcon").addClass("prayerOptionsIconActive");
	});
	$("article.prayerText").addClass("prayerTextShrink");
	} else {
		$("div.prayerOptions").removeClass("prayerOptionsActive").animate({
				borderRadius: "50%"
							}).removeClass("prayerOptionsActiveOutline");
	$(".prayerOptionsIcon").removeClass("prayerOptionsIconActive");
	setTimeout(function() {
		$("article.prayerText").removeClass("prayerTextShrink");
				},360);
			}
	});
	$("div.prayerOptions").on("click",function() {
		$("div.prayerOptionsSelect").slideToggle(500);
		});
	function prayerOptionClick(num) {
	//arg1: number
	$(`div.prayerOption${num}`).on("click",function() {
	$(".prayerOptionIcon").removeClass("prayerOptionIconActive");
	$(`.prayerOptionIcon${num}`).addClass("prayerOptionIconActive");
		});
	}
	for(let i = 1; i <= 5; i++)
		prayerOptionClick(i);
	let mediaSet = 1;
	$("div.moreMedia")
		.on("click", getMoreMedia);
	function getMoreMedia() {
	$("div.moreMedia").off("click", getMoreMedia);
	setTimeout(function() {
		$("div.moreMedia").on("click", getMoreMedia);
		}, 1200);
mediaSet = mediaSet === 1 ? 2 : 1; 
			let medias = "div.theDeveloperFollowSocialMedias";
		$("span.moreMediaIcon").css({"transform":"scale(1.15)"});
		setTimeout(function() {
			$("span.moreMediaIcon").css({"transform":"scale(1)"});
			},850);
		$(medias).toggleClass("refreshMedias").css("perspective","500px");
		$((medias+" div")).css("animation","skewRotate 500ms ease 0s 1 forwards");
		$(medias).slideUp(800, toggleMediaSets);
		
		setTimeout(function() {
			$(medias).slideDown();
			$((medias+" div")).css("animation","skewRotateReset 1s ease 0s 1 forwards");
		},800);
	}
	let mediaItem1Container = $("div.mediaItem1Container").html(),
		mediaItem2Container = $("div.mediaItem2Container").html(),
		mediaItem3Container = $("div.mediaItem3Container").html(),
		mediaItem4Container = $("div.mediaItem4Container").html();
	function toggleMediaSets() {
		if(mediaSet === 1) {
			$("style.mediaSetCss").text(firstSet);
			$("div.mediaItem1Container").empty().html(mediaItem1Container);
			$("div.mediaItem2Container").empty().html(mediaItem2Container);
		$("div.mediaItem3Container").empty().html(mediaItem3Container);
		$("div.mediaItem4Container").empty().html(mediaItem4Container);
		$("div.theDeveloperFollowSocialMedias a").each(function(elem, index) {
			$(elem).attr("href", linkSet1[index]);
				});
			}
		else {
			$("div.theDeveloperFollowSocialMedias a").each(function(index, elem) {
			$(elem).attr("href", linkSet2[index]);
				});
			$("style.mediaSetCss").text(secondSet);
					$(".mediaItem1").remove();
					$("div.mediaItem1Container").html(`<span style="background-color: white; display: inline-block; width: 30px; height: 30px; border-radius: 2px; border-top-left-radius: 3px; border-bottom-left-radius: 3px; margin-left: auto; margin-bottom: 10%;"><span class="fab fa-instagram" style="color: #9B27FF; font-size: 1.7em; position: relative; top: 1.3px; left: 2.4px;"></span></span><span class="mediaItem1Label" style="bottom: 5px; left: 2px;">
						Instagram
					</span>`);
		$(`.mediaItem2`).removeClass(`fa-${set1[1]}`).addClass(`fa-${set2[1]}`);
		$("span.mediaItem2Label").text("Pinterest");
					$(".mediaItem3").remove();
		
					$("div.mediaItem3Container").html(`<span style="background-color: white; display: inline-block; width: 30px; height: 30px; border-radius: 2px; border-top-left-radius: 3px; border-bottom-left-radius: 3px; margin-left: auto; margin-bottom: 10%;"><span class="fab fa-codepen" style="color: #3B3B3B; font-size: 1.5em; position: relative; top: 3px; left: 2.4px;"></span></span><span class="mediaItem1Label" style="bottom: 2px; left: 4px;">
						Codepen
					</span>`);
			$(`.mediaItem4`).removeClass(`fa-${set1[3]}`).addClass(`fa-${set2[3]}`);
			$("span.mediaItem4Label").text("Reddit");
			}
		}
	let tooltipCount = document.querySelectorAll("[data-tooltip]").length;
	for(let i = 0; i < tooltipCount; i++) {
	let setPosition = () => {
		let tooltipPosition = document.querySelectorAll("[data-tooltip-position]")[i];
		let position = $(tooltipPosition).attr("data-tooltip-position");
		if(position === "top") {
			$(".tooltipTriangle").css("bottom","-10px");
			$(".tooltip").css("margin","-45px 8px 8px 8px");
			$(".tooltipTriangle").css("transform","rotate(180deg)");
			}
		else {
			$(".tooltipTriangle").css("top","-10px");
			$(".tooltip").css("margin","8px");
			}
		};
	var setTooltipPosition = function(event) {
		//arg1: event object
		let tooltipWidth = document.getElementsByClassName('tooltip')[0].getBoundingClientRect().width;
		let tooltipX = Math.round(event.touches[0].pageX) - tooltipWidth/2;
		let tooltipY = Math.round(event.touches[0].pageY) + 8;
		
	  $(".tooltip").css({"top": tooltipY, "left": tooltipX});
	};
	let outerLongPress = null;
	var showTooltip = function(event) {
		var longPress = setTimeout(function() {
		let tooltip = document.querySelectorAll("[data-tooltip]")[i];
		let tooltipText = $(tooltip).attr("data-tooltip");
		let slimChars = 0;
	  $(`
<br class="tooltipNewline">
	<div class="tooltip">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="14" height="14" class="tooltipTriangle" data-info="${slimChars = ((tooltipText.match(/i/gi)) || []).length + ((tooltipText.match(/j/gi)) || []).length + ((tooltipText.match(/l/g)) || []).length + ((tooltipText.match(/f/g)) || []).length + ((tooltipText.match(/r/g)) || []).length}" style="left: ${(tooltipText.length + slimChars)* 2.5}px;">
			<polygon points="1,9 9,9 5,1 z" fill="#4E4E4E" stroke="#4E4E4E" stroke-width="1" stroke-linejoin="round"/>
			</svg>
			${tooltipText}
		</div>`)
            .appendTo('body');
	  setTooltipPosition(event);
		setPosition();
		},400);
		longPress;
		outerLongPress = longPress;
	};

	var hideTooltip = function() {
		clearTimeout(outerLongPress);
		setTimeout(function() {
			$('.tooltip').remove();
			$('.tooltipNewline').remove();
			$('.tooltipTriangle').remove();
		},400);
	};
	let tooltip = document.querySelectorAll("[data-tooltip]")[i];
	$(tooltip).bind({
	   touchmove: hideTooltip,
	   touchstart: showTooltip,
	   touchend: hideTooltip
	});
	}//iteration
	$("form.fillUserInfo").on("submit", userInfoFormSubmit);
function userInfoFormSubmit(evt) {
	$("form.fillUserInfo").off("submit", userInfoFormSubmit);
	setTimeout(function() {
		$("form.fillUserInfo").on("submit", userInfoFormSubmit);
		}, 2600);
		$("div.menuContent").css("display") != "none" ? toggleMenu() : {};
		evt.preventDefault();
		let name = $("input.userNameField").val();
		let email = $("input.userEmailField").val();
		if(name.length !== 0) {
			if(name.length <= 3) {
				userEntryError("User name too short");
				}
			else if(name.match(/[^a-zA-Z0-9- _]/g)) { userEntryError("Invalid characters in the name");
				}
			else if(email.length !== 0 && !email.match(/^[a-z_](?:[a-zA-Z0-9_]+){4,}@(?:[a-zA-Z0-9]+)\.(?:[a-z]+)$/g)) {
			userEntryError("Invalid email address");
				}
			else {
		storeItems.user !== $("input.userNameField").val() ||  storeItems.email !== $("input.userEmailField").val() ?
		userEntrySuccess("Saved Successfully") : {};
		store({"user": name, "email": email ? email : ""});
				prepareUserInfo(name, email);
				$("h2.name").text(name.split(" ")[0]);
	let count = parseInt($(".userImageIcon").css("margin-left"));
	let animateDefaultIcon = setInterval(function() {
				$(".userImageIcon").css({"font-size":`${setaIconSize(39)}px`,"margin-left":`${count - 0.5}px`,"margin-top":`${count - 2.4}px`});
			count -= 1;
			count === 15 ? clearInterval(animateDefaultIcon) : {} ;
			},30);
			animateDefaultIcon;
			}
		}
		else {
			userEntryError("Please fill the name field");
			}
		}
function prepareUserInfo(userName, userEmail) {
	userInfoAccepted();
	fitText(userName, "div.userNameSlot");
	let userEmailTxt =
		userEmail ? userEmail.split("@")[0] : userName.split(" ")[0].toLowerCase();
	fitText(userEmailTxt, "span.userEmailText");
	}
function fitText(text, target) {
		let formatedText = text.split(" ").join(""),
			  len = formatedText.length,
		      lastLetter = formatedText[len -1],
		      newName = formatedText.substr(0, len-1) + `<span class="nameLast">${lastLetter}</span>
<script>
	lastlet = document.querySelector("span.nameLast").getBoundingClientRect();
</script>`;
$(target).html(newName);
let val = null;
function checkForFit() {
if(Math.round(lastlet.right) > 221) {
val = text.substr(0, Math.round((formatedText.length/lastlet.right)*167)).trim() + "...";
}
else val = text.trim();
$(target).text(val);
	}//checkForFit();
	checkForFit();
}//fitText();
function dialog(element, heading, text, height = "200px") {
	$('dialog.dialogBox').remove();
	$(element).append(`
		<dialog class="dialogBox" open style="height: ${height};top: ${(innerHeight - parseInt(height))/2}px;">
			<div class="dialogContent">
				<span class="dialogBoxClose fa fa-times-circle" onclick="$('.dialogBoxClose').css('transform','scale(0.7)');
setTimeout(function() {
$('.dialogBoxClose').css('transform','scale(1)');
}, 200);
$('span.dialogText,span.dialogHeading').fadeOut(600).empty();
$('dialog.dialogBox').fadeOut(600);">
				</span>
				<span class="dialogHeading">
					${heading}
				</span>
				<span class="dialogText" style="max-height: ${parseInt(height) - 45}px;">
					${text}
				</span>
			</div>
		</dialog>
		`);
	}
	$(".userEnqueryIcon").on("click",function() {
		dialog("aside.sidebar","User Info","hello user");
		});
	$("div.whatsGreeting").on("click",function() {
		dialog("main","Welcome to Daily Gospels!","hello user");
		});
	$("div.theDeveloperMail").on("click",function() {
		dialog("main","Hello, Jithu Joshy Jy Here!",$("template.theDeveloperMailGreeting").html());
		});
//watermark
function update(event) {

for (let dot; dot = document.querySelector("dot");) {
dot.remove();
}
for (let i = 0; i < event.touches.length; i++) {
let {clientX, clientY} = event.touches[i];
let dot = document.createElement("dot");//0.57
dot.style.left = (clientX - 11.4) + "px";
dot.style.top = (clientY - 11.4) + "px";
document.body.appendChild(dot);
}
}
function isWatermarkAllowed(isAllowed) {
if(isAllowed) {
$(window).bind({
	touchstart: update,
	touchmove: update,
	touchend: update,
});
	} else {
		$(window).unbind({
			touchstart: update,
			touchmove: update,
			touchend: update,
			});
		}
}
if(locate("watermark") === "active") {
	$("div.watermark").trigger("click");
	}
let watermarkActive = false;
$("div.watermark").on("click",function() {
	if(!watermarkActive) {
	$("div.watermark").addClass("fancyOptionActive");
	isWatermarkAllowed(true);
	store({"watermark": "active"});
	} else {
		$("div.watermark").removeClass("fancyOptionActive");
		store({"watermark": ""});
		isWatermarkAllowed(false);
	}
	watermarkActive = !watermarkActive;
	});
	let searchActive = true;
	$("div.search").on("click",function() {
	searchActive = $("div.search").width() > 30 ? true : false;
	if(!searchActive) {
		$("div.fancyItem:not(div.search)").animate({opacity:"0"},600,function() {
	$(this).css("visibility","hidden");
});
		$("div.search").delay(600).animate({left: "-155px"},600,function() {
		$("div.search").css({"position":"absolute","left":"5px"}).animate({width: "78%"},600,function() {
		$("div.searchContents").css("display","inline-block");
	});
});

		$("div.search").append($("template.searchFacility").html());
			}
		});
	$("li.cprightNprivacy").on("click",function() {
	dialog("body","Copyright and Privacy",copyright+privacyPolicy,"300px");
		toggleMenu();
		});
		$("li.helpTranslate").on("click",function() {
	dialog("body",$("template.helpTranslateHeader").html(),$("template.helpTranslateText").html(),"250px");
		toggleMenu();
		});
		$("li.languages").on("click",function() {
			toggleMenu();
			dialog("body","Languages",$("template.languages").html(),"160px");
			});
		$("li.about").on("click",function() {
			toggleMenu();
			dialog("body","About Daily Gospels",`Hello ${locate("user") || "user"}, <br/> I am glad that you are using this app. I hope this app would surely be helpful to you. I initially got the inspiration for creating this app when I myself felt the need for having something as a prayer guide. I dearly hope that <strong style="color: grey;"> Daily Gospels </strong> will help you in your spiritual life.<br/> <span style="float: right;"> May God Bless You</span>`,"200px");
			});
function goToSubsection() {
	$("section.subSection").css("display","block").animate({right: "2.5vw"},200);
			$("main").animate({left: "-100vw"},200);
			$("body").removeClass("mainTheme"). addClass("subTheme");
	if($("div.fancyOptions").width() != 0 ) {
		$("div.fancyOptions")
			.width(0)
			.css("display","none")
			.toggleClass("expanded");
	$("div.toggleFancyOptions").removeClass("toggleFancyOptions-active").addClass("toggleFancyOptions-passive");
		}
	}//goToSubsection()
		
$("section.mySpiritualLife div").on("click",function() {
	goToSubsection();
	store({"currentlyAt": "subSection"});
	$("li.dashboardToggle span").text("Home");
});

	$("div.sacramentalLife").on("click",function() {
		$("section.subSection").html(spiritualLife("sacramentalLife","dove","My Sacramental Life","#FF5119"));
		});
	$("div.familyLife").on("click",function() {
		$("section.subSection").html(spiritualLife("familyLife","home","My Family Life","#006CE3"));
		});
		$("div.personalLife").on("click",function() {
		$("section.subSection").html(spiritualLife("personalLife","user","My Personal Life","#FFAF00"));
		});
		$("div.publicLife").on("click",function() {
		$("section.subSection").html(spiritualLife("publicLife","users","My Public Life","#46B63D"));
		});
		var el = $("main"),
    lastY = el.scrollTop();
    
el.on('scroll', function() {
    var currY = el.scrollTop(),
        y = (currY > lastY) ? 'down' : ((currY === lastY) ? 'none' : 'up');
	
if($("div.fancyOptions").width() === 0) {
    if(el.scrollTop() > 50 && y==="down") {
    	$("div.toggleFancyOptions").css({"bottom":"-70px"});
    	}
    if(y==="up") {
    	$("div.toggleFancyOptions").css({"bottom":"15px"});
    	}
    }
    lastY = currY;
	});
	$("span.theDeveloperAbbr").on("click", function(evt) {
		let top = evt.pageY - 80;
		let left = evt.pageX - 80;
		let middleChars = "ithu josh";
		$("div.expandDevName").off("click");
		if($("div.expandDevName").css("display") === "none") {
		$("div.expandDevName").css({"display":"block"}).animate({width:"170px",height:"100px","top": "-10px", "left": "-43px",borderRadius: "3px"},300,function() {
	$("div.expandDevName .firstLetter,div.expandDevName .middleLetters,div.expandDevName .lastLetter").show();
let letterExpandDelay = setTimeout(function() {
	$("span.middleLetters").addClass("middleLettersActive");
teletypeText("ithu josh","span.middleLetters",function(val,intervalName) {
	if(val === 1) {
$("span.lastLetter").css("margin-left","-12px");
	$("div.expandDevName"). on("click", collapseDevName);
	$("div.expandDevName").on("click", function() {
		clearInterval(intervalName);
		$("span.middleLetters").empty();
			});
		}
	});
			},200);
		});
	}
	setTimeout(function() {
	if($("div.expandDevName").text().length === 34) {
	$("div.expandDevName").trigger("click");
		}
	},5000);
});
function teletypeText(text,destinationElement,intermediateFunction) {
let i = 0;
let timer = setInterval(function() {
		document.querySelector(destinationElement).textContent += text[i];
		if(typeof intermediateFunction === "function")
		intermediateFunction(i,timer);
		i === text.length -1 ?
		clearInterval(timer) : i++ ;
			},200);
}
	function collapseDevName() {
		$("span.middleLetters").empty().removeClass("middleLettersActive");
		$("span.lastLetter").css("margin-left","auto");
		$("div.expandDevName").animate({width:"75px",height:"0px","top": "40px", "left": "10px",borderRadius: "50%"},300,function() {
	$(this).css({"display":"none"});
});
		}
	let lightTheme = $("link.lightTheme").attr("href");
	let darkTheme = $("link.darkTheme").attr("href");
	let nightModeActive = false;
	$("div.nightMode").on("click", changeTheme);
function fadeToTheme(bgcolor, dur = 1000) {
	$("div.startTimeBanner").css({"left":"0vw", "background-color":bgcolor}).empty().fadeIn(500, function() {
		$(this).fadeOut(dur);
		});
	}
function changeTheme() {
	nightModeActive = !nightModeActive;
	$("div.nightMode").toggleClass("fancyOptionActive");
	$('dialog.dialogBox').remove();
	dialog("body","loading....",`<script>
$('dialog.dialogBox').append("<button class='disableLoaderClick' style='position: absolute; right: 20px; top: 20px; z-index: 5; background-color: ghostwhite; width: 38px; height: 38px; border: none; outline: none;' disabled><img class='nightModeActiveLoader' src=img/${ nightModeActive ? 'loading.gif' : 'loader2.png' } alt='' width='25' height='25'/></button>");
</script>`,"45px");
		if(nightModeActive) {
	store({"theme": "dark"});
	collapseFancyOptions();
	setTimeout(function() {
	fadeToTheme("#222D36");
	$("dialog.dialogBox").fadeOut(500,function() {
		$("dialog.dialogBox").remove();
		$("link.lightTheme").attr("href",darkTheme);
		$("link.timeBasedTheme").attr("href","");
		$("meta[name='theme-color']").attr("content","#222D36");
		$(".howWasTheDayIcon2").removeClass("fa fa-sun").addClass("fa fa-moon");
	});
	},2000);
	} else {
		store({"theme": "light"});
		collapseFancyOptions();
		setTimeout(function() {
		fadeToTheme("ghostwhite");
	$("dialog.dialogBox").fadeOut(500,function() {
		$("dialog.dialogBox").remove();
		$("link.lightTheme").attr("href",lightTheme);
		$("link.timeBasedTheme").attr("href","css/timeBasedTheme.css");
		$("meta[name='theme-color']").attr("content","#EEE");
		$(".howWasTheDayIcon2").removeClass("fa fa-moon").addClass("fa fa-sun");
	});
	},2000);
	}
}
for(smC = 1561; smC <= 1660; smC+=1)
	smileyList += `<img src="img/smiley/e${smC}.png" width="32" height="32" style="float: left; margin: 1px 7px 0 0;" loading="lazy"/>`;
	smileyList;
function createProfilePic(count,directory,abbr) {
	let profilePic ="";
	for(let i=1; i<=count; i++) profilePic +=`<img id="${abbr}${i}" class="profileImages" src="img/Profile_Picture/${directory}/${abbr}${i}.png" width="40" height="40" style="margin: 1px;" onclick="setProfilePic($(this).attr('src'));"/>`;
	return profilePic;
	}
	let man = createProfilePic(39,"Man","m");
	let woman = createProfilePic(39,"Woman","f");
	let animal = createProfilePic(22,"Animals","a");
	dashboardProfilePic = [man, woman, animal];
	$("div.userImage").on("click",selectUserProfileIcon);
function selectUserProfileIcon() {
	dialog("aside.sidebar","Select an Icon",`${$("template.setProfileImage").html()}
<script>
$('dialog').css('top','20vh');
</script>
	`);
}
	$("div.moodOfDayCircle.today").on("click",function() {
		$("div.moodOfDayCircle:not(div.moodOfDayCircle.today),div.describeThisDay").css({"visibility":"hidden"});
		if($("div.describeThisDay").css("display") === "none") {
			$("div.describeThisDayInput").hide();
			}
		$("div.todayDate").show().text(thisDayDate().fullDate);
		$("div.thisDay").show();
		$(".thisDayIcon").removeClass("fa-calendar-day").addClass("fa-times-circle");
		$("span.thisDayLabel").text("Close");
		$("div.howWasTheMoodOfDayBox").css("overflow","hidden").animate({scrollLeft: $("div.howWasTheMoodOfDayBox").width()*1.41},100);
$("div.moodOfDayCircle.today").animate({width: "130px", height: "130px"},400,function() {
	$("div.todaysMoodEmoji").show();
});
$(".chooseMoodIcon").animate({margin: "15px 0 0 13px",
	fontSize: "3em"});
	$("section.howWasTheDay").height("375px");
		});
	$("div.thisDay").on("click", function() {
	if($("span.thisDayLabel").text() === "Close") {
		if($("div.describeThisDay").css("display") === "none")
			$("div.describeThisDay").show();
		$("div.todaysMoodEmoji").hide();
		$(".thisDayIcon").removeClass("fa-times-circle").addClass("fa-calendar-day");
		$("span.thisDayLabel").text("Today");
		$("div.todayDate").hide();
		$("div.howWasTheMoodOfDayBox").css("overflow","auto").animate({scrollLeft: 360});
$("div.moodOfDayCircle.today").animate({width: "90px", height: "90px"},400,function() {
	$("div.thisDay").hide(100, function() {
		$("div.thisDay").css("opacity","1");
		});
	});
	$("div.thisDay").css("opacity","0");
	$("div.isMoodExpressed").hide();
	$("div.describeThisDay").css({"opacity":"0"}).animate({"visibility":"visible"}, 100, function() {
	$("div.moodOfDayCircle:not(div.moodOfDayCircle.today),div.describeThisDay").css({"visibility":"visible","opacity":"1"});
	$("div.isMoodExpressed").show();
	});
$(".chooseMoodIcon").animate({margin: "1px 0 0 0px",
	fontSize: "2.5em"});
	$("section.howWasTheDay").height("");
		}
	});
	let textSizingActive  = false;
	$(".textSizeIcon").on("click",function() {
	textSizingActive = $("input.textSizeRange").css("display") === "none" ? true : false;
	if(textSizingActive) {
		$("div.fancyItem:not(div.textSize)").animate({opacity:"0"},400,function() {
	$(this).css("visibility","hidden");
		});
		$("div.textSize").delay(400).animate({left: "-41px"},400,function() {
		$("div.textSize").css({"position":"absolute","left":"5px"}).animate({width: "78%"},400);
		$("input.textSizeRange").css("display","inline-block");
		$("small.currentFontSize").css("display","inline");
			});
		} else {
		$('div.textSize').animate({width: '30px',left: '41px'},500,function() {
$('div.textSize').css({'left':'0px','position':'relative'});
});
		$("input.textSizeRange,small.currentFontSize").css("display","none");
		$('div.fancyItem:not(div.textSize)').animate({opacity:'1'},600,function() {
	$(this).css('visibility','visible');
		});
	}
});
			
	$("input.textSizeRange").on("change",function() {
		let currentFontSize = $("small.currentFontSize").text();
		let newSize = $("input.textSizeRange").val();
		store({"fontSize": newSize});
		$("small.currentFontSize").text(currentFontSize.replace(/[\-\d\.]+/,newSize));
	});
let user = locate("user"),
	 email = locate("email");
	if(user) {
		let userFirstName = user.split(" ");
		$("h2.name").text(userFirstName[0]);
		$("input.userNameField").val(user);
		$("input.userEmailField").val(email);
		}
	if(locate("theme") === "dark") {
		$("div.nightMode").trigger("click");
	}
	if(locate("profileImage")) {
		setProfilePic(locate("profileImage"));
		}
	function userInfoAccepted() {
		$("div.userImage").animate({width:"60px", height:"60px", left:"15px"});
		$("hr.userDataEndLine").animate({"margin-top": "0px"});
		$("div.userImage img").animate({top: "8px", left: "7px"});
		$("div.userInfo").fadeOut();
		$("div.userImage").off("click");
		$("div.userInfoSlot").fadeIn(400,function() {
		$(this).css("display","inline-block");
		$("div.userProfile").on("click", editProfile);
		});
	}
	if(locate("user") && locate("email")) {
		let user = locate("user"),
			  email = locate("email");
		prepareUserInfo(user, email);
		}
	function editProfile() {
		$("div.userImage").animate({width:"90px", height:"90px", top: "15px", left:`${((innerWidth/100)*70 - 90)/2}px`}, 400, function() {
		$("div.userImage").on("click",selectUserProfileIcon);
		$("div.userProfile").off("click");
});
		$("div.userInfo").slideDown();
		$("div.userInfoSlot").fadeOut(200);
		$("hr.userDataEndLine").animate({"margin-top": "0px"});
		$(".userImageIcon").animate({fontSize: "3em", margin:"20px 0 0 24px"});
		$("div.userImage img").animate({top: "11px", left: "10px"});
		}
});//onready()
function closeSearchContents() {
		$('div.searchContents').empty();
		$('div.searchContents').remove();
		$('div.search').animate({width: '30px',left: '155px'},500,function() {
$('div.search').css({'left':'0px','position':'relative'});
});
		$('div.fancyItem:not(div.search)').animate({opacity:'1'},600,function() {
	$(this).css('visibility','visible');
	});
	searchActive = false;
		}//closeSearchContents();
function subpagesSvgActivated() {
$("div.subPage:not(.subPagesCollapse)").each(function(index, elem) {
	$(elem).html($("template.translateSubPagesSvg").html().replace(`<tspan>num</tspan>`,`<tspan>${index + 1}</tspan>`));
	});
$("div.subPagesTranslate").on("click",function() {
	subPagesTranslateActive = $("span.subPagesExpandedHeader").css("display") === "none" ? true : false;
	if(subPagesTranslateActive) {
		$("h5.subPagesHeading").fadeOut();
		$("div.pageToTranslate:not(.subPagesToTranslate)").animate({opacity: 0},400,function() {
			$("div.pageToTranslate:not(.subPagesToTranslate)").hide();
		$("span.subPagesExpandedHeader").fadeIn();
		$("div.subPagesToTranslate").css({"position":"absolute","left":"197px","top": "5px","z-index":"5"}).animate({left: "0px",width:"470px"});
		$("div.subPage").css({"transform":"scale(1)","top":"0px"});
		$("div.subPage1").animate({left: "0px"});
		$("div.subPage2").animate({left: "100px"});
		$("div.subPage3").animate({left: "200px"});
		$("div.subPage4").show().animate({left: "300px"});
		$("div.subPagesCollapse").show().animate({left: "400px"});
		$("div.subPagesTranslate").animate({width:"465px"});
			});
		}
	});
$("div.subPagesCollapse").on("click",function() {
	subPagesTranslateActive = false;
		$("div.pageToTranslate:not(.subPagesToTranslate)").animate({opacity: 1},400,function() {
			$("div.pageToTranslate:not(.subPagesToTranslate),h5.subPagesHeading").fadeIn();
		$("span.subPagesExpandedHeader").fadeOut();
		$("div.subPagesToTranslate").animate({left: "197px",width:"120px","top":"0px"});
		$("div.subPage1").animate({left: "0px"});
		$("div.subPage2").animate({top: "7px",left: "35px"},400,function() {
	$(this).css({"transform":"scale(0.8)"});
});
		$("div.subPage3").animate({top: "14px",left: "60px"},400,function() {
	$(this).css({"transform":"scale(0.6)"});
});
		$("div.subPage4").animate({top: "21px",left: "85px"}).fadeOut(100);
		$("div.subPagesCollapse").animate({top: "28px",left: "100px"}).fadeOut(100);
		$("div.subPagesTranslate").animate({width:"110px"});
		});
	});
}//subpagesSvgActivated();
function loadProfileIcons() {
$("div.profileBlock").each(function(index,el) {
	$(el).on("click",function() {
		$("div.profileType").hide();
		$("div.profileIcons").show();
	$(el).hasClass("profileMan") ? 
$("div.profileIcons").html(dashboardProfilePic[0]) : 	$(el).hasClass("profileWoman") ? 
$("div.profileIcons").html(dashboardProfilePic[1]) : $("div.profileIcons").html(dashboardProfilePic[2]);
	});
});
}//loadProfileIcons();
function describeThisDayMethods() {
$("textarea.describeThisDayTextarea").on("input",function() {
	$(this).val().length == 0 ? 			$(this).addClass('placeholderAlign') : 		$(this).removeClass('placeholderAlign');
	}).on("focus",function() {
		$('div.toggleFancyOptions').hide();
$('div.fancyOptions').width() != 0 ? $('div.fancyOptions').hide() && collapseFancyOptions() : {} ;
	}).on("blur",function() {
		$('div.toggleFancyOptions').fadeIn();
	});
	$("div.includeEmojiContent").on("click",function() {
		$("div.contentActivators,div.sendContent").hide();
		$("div.containSmilies").show();
		smileyActive = true;
});
	$("div.closeContent").on("click",function() {
		if(!smileyActive) {
		$("div.describeThisDayInput").fadeOut(200);
$("section.howWasTheDay").animate({
	height:"200px"});
$("div.describeThisDay").fadeIn();
	}
	else {
		$("div.contentActivators,div.sendContent").show();
		$("div.containSmilies").hide();
		smileyActive = false;
		}
			});
$("div.includeImageContent").on("click", function() {
	$(".includeImageContentIcon").toggleClass("includeImageContentIconActive");
	$("div.todaysMemories").slideToggle();
	});
	$("div.sendContent").on("click", saveTodaysDescription);
function saveTodaysDescription() {
	let val = $("textarea.describeThisDayTextarea").val();
if(val.length !== 0) {
	if(storeItems.thisDay && storeItems.thisDay.description) {
		if(storeItems.thisDay.description !== val)
			userEntrySuccess("Saved Successfully");
	}
	else userEntrySuccess("Saved Successfully");
		let thisDay = {
			"date": thisDayDate().fullDate,
			"description": val
			};
			store({thisDay});
		}
	else {
	userEntryWarn("Sorry, can't save, the field is empty");
	$("div.sendContent").off("click", saveTodaysDescription);
	setTimeout(function() {
		$("div.sendContent").on("click", saveTodaysDescription);
			},2600);
		}
	}//saveTodaysDescription()
}//describeThisDayMethods();
function selectLanguagesMethods() {
	languageElemClass = languageElemClass || $("input.manglish").attr("class");
		$("span.selectLanguage input").each(function(index, elem) {
			$(elem).on("focus",function() {
				languageElemClass = $(elem).attr("class");
				store({"language": languageElemClass});
			});
		});
	if(localStorage && localStorage.getItem("language"))
	selectedLanguage = localStorage.getItem("language");
	else selectedLanguage = "";
	
	if(selectedLanguage) {
		$("input."+selectedLanguage).attr("checked","checked");
		} else {
			$("input."+languageElemClass).attr("checked","checked");
			}
	}//selectLanguagesMethods();
function goBackHome() {
	store({"currentlyAt":"home"});
 	$("section.subSection").animate({right: "-120vw"}, 200, function() {
	$(this).css("display","none");
	});
	$("body").removeClass("subTheme"). addClass("mainTheme");
$("main").animate({left: "0vw"},200,function() {
$("section.subSection").empty();
	});
}//goBackHome();
function thisDayDate() {
	let today = new Date();
	let date = today.getDate().toString().length < 2 ? "0" + today.getDate() : today.getDate();
	let month = (today.getMonth() + 1).toString().length < 2 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1;
	let year = today.getFullYear();
	let fullDate = date + "/" + month + "/" + year;
	return {
		"date": date,
		"month": month,
		"year": year,
		"fullDate": fullDate
		};
	}
function userEntryError(alert) {
	//arg1: string
	let options = {
		message: alert,
		bgcolor: "#FFAC99",
		bordercolor: "#FF8264",
		addclass: "error",
		submitButton: {
			textcolor: "#FF7E60",
			bordercolor: "#FF7E60"
			}
		};
	handleUserEntry(options);
	}//userEntryError()
function userEntrySuccess(alert) {
	//arg1: string
	let options = {
		message: alert,
		bgcolor: "#DFE8FF",
		bordercolor: "#648CFF",
		addclass: "success",
		submitButton: {
			textcolor: "#6068FF",
			bordercolor: "#6068FF"
			}
		};
	handleUserEntry(options);
	}//userEntrySuccess()
function userEntryWarn(alert) {
	//arg1: string
	let options = {
		message: alert,
		bgcolor: "#FFF2BB",
		bordercolor: "#FFAC00",
		addclass: "warn",
		submitButton: {
			textcolor: "#FFD960",
			bordercolor: "#FFD960"
			}
		};
	handleUserEntry(options);
	}//userEntryWarn()
function handleUserEntry(options) {
	//arg1: object
	$("div.menu").css({"height":"55px"}).slideDown();
			$("div.messageBox").css({"background-color": options.bgcolor, "border":`1px solid ${options.bordercolor}`}).fadeIn(700);
$(".messageIcon").css("color","white");//rgba(255,50,50,0.5)
			$("nav.top > button").attr("disabled","true");
			$("button.userDataSubmit").attr("disabled","true");
			$("nav.top").
			addClass("passive");
	$("span.message").text(options.message).addClass(options.addclass);
	setTimeout(() => $("button.userDataSubmit").css({"border-color": options.submitButton.bordercolor, "color": options.submitButton.textcolor }),200);
			setTimeout(function() {
				$("div.messageBox").fadeOut();
				$(".messageIcon").css("color","");
				$("button.userDataSubmit").css({"border-color":"","color":""});
				$("div.menu").slideUp(500,function() {
		$(this).css("height","");
		$("span.message").text("").removeClass(options.addclass);
});
$("nav.top > button").removeAttr("disabled");
$("button.userDataSubmit").removeAttr("disabled");
				},2000);
	}//handleUserEntry()
function collapseFancyOptions() {
		$("div.fancyOptions")
		.animate({
			width:"0vw"},1000)
		.toggleClass("expanded");
	setTimeout(function() {
		$("div.fancyOptions")
			.css("display","none");
		$("div.toggleFancyOptions").removeClass("toggleFancyOptions-active").addClass("toggleFancyOptions-passive");
			},750);
		}//collapseFancyOptions()