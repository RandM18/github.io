//Название блоков 
var item_array = document.getElementsByClassName('item_wrapper');
function blockName(text, number){
	var menuitem = document.getElementById('hiddenTxt');
	if (text.length > 1)
	{
		menuitem.style.opacity = 1;
		menuitem.innerHTML = text;
		
		for (i=0; i<item_array.length; i++)
		{
			if(i != number)
				item_array[i].style.filter = "blur(3px)";
		}	
	}
	else
	{
		menuitem.style.opacity = 0;
		menuitem.innerHTML = "";
		for (i=0; i<item_array.length; i++)
		{
			item_array[i].style.filter = "none";
		}
	}
}

//Анимация диктора
var conference_number = 0;
var conference_talk = ["Здравствуйте, уважаемые гости!","Я рад Вас приветствовать","На ежегодной конференции,","посвященной вопросам","социально-экономического развития."]
var conference_cloud = document.getElementById('conference_item_cloud');  
var conference_timerId;
var conference_interval1=2000;
var conference_interval2=2700;
function conference_anim_start(){
  conference_cloud.style.opacity = 1;
  conference_cloud.innerHTML = conference_talk[conference_number];
  setTimeout(function() { conference_cloud.style.opacity = 0; }, conference_interval1);
  conference_number = 1;
  conference_timerId = setInterval(conference_anim_text, conference_interval2);
}
function conference_anim_end(){
  conference_number = 0;
  clearTimeout(conference_timerId);
  conference_cloud.style.opacity = 0;
}
function conference_anim_text(){
  conference_cloud.style.opacity = 1;
  conference_cloud.innerHTML = conference_talk[conference_number];
  setTimeout(function() { conference_cloud.style.opacity = 0; }, conference_interval1);
  conference_number=conference_number+1;
  if (conference_number == conference_talk.length) conference_number = 0;    
}