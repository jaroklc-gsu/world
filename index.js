$(function() {
    console.log( "let's go!" );
    
    //a person has a name (string), a set of moods(aray of strings), and a set of behaviors(array of objects)
    function person(name, behaviors, moods, dancing){
    	this.constructor.population++;
    	this.name=name;
    	this.behaviors=behaviors;
    	this.moods=moods;
    	this.current_mood = "unknown";
        this.dancing=dancing;
        this.current_dancing = "dancing!";
    	return this;
    }

    var jaro_behaviors = [
		{speak:function(mood){return "I'm "+mood;}},
		{speak:function(mood){return "I'm dancing!";}}
		];
		
	var jaro_moods = ["happy", "sleepy", "energized", "sick"];
    var jaro_dancing = [
		{speak:function(mood){return "I'm dancing1!";}},
		{speak:function(mood){return "I'm dancing2!";}}
		];
	var jaro = new person("jaro",jaro_behaviors, jaro_moods, jaro_dancing );
    
	
	
	var peter_behaviors = [
		{speak:function(mood){return "I'm "+mood;}},
		{speak:function(mood){return "I'm dancing!";}},
		{speak:function(mood){return "I like to read.";}}
		];	
	var peter_moods = ["grumpy", "blah", "optimistic", "voracious"];
    var peter_dancing = [
		{speak:function(mood){return "I'm dancing1!";}},
		{speak:function(mood){return "I'm dancing3!";}},
		{speak:function(mood){return "I'm dancing4!";}}
		];	
	var peter = new person("peter",peter_behaviors, peter_moods, peter_dancing );
    
    // put your person here
    
    var christina_behaviors = [
		{speak:function(mood){return "I'm happy";}},
		{speak:function(mood){return "I'm dancing";}},
		{speak:function(mood){return "I'm walking";}}
		];
    var christina_dancing = [
        
        {speak:function(mood){return "I'm dancing5!";}},
		{speak:function(mood){return "I'm dancing6!";}},
		{speak:function(mood){return "I'm dancing7!";}}
        
    ]
	var christina_moods = ["happy", "sleepy", "dancing", "thoughtful"];
   
	var christina = new person("christina",christina_behaviors, christina_moods, christina_dancing );
	
	
	
	
	
	
	
	var people = [];
	people.push(jaro);   
	people.push(peter);
    people.push(christina);
	//push your person in the people array
	
	
	
	function setWorldState(people){
				console.log("fire");
				$.each(people, function(i,person){
					person.current_mood = person.moods[getRandomInt(0,person.moods.length)];
					console.log(person.name+" "+person.current_mood);
				});
				people.map(function(o){return '<strong>'+o.name+': </strong>'+o.current_mood});
				$('#world_state').html(people.map(function(o){return '<strong>'+o.name+': </strong>'+o.current_mood}).join('<br />'));
				$('#world_talk').html(people.map(function(o){return '<strong>'+o.name+': </strong>'+o.behaviors[getRandomInt(0,o.behaviors.length)].speak(o.current_mood)}).join('<br />'));
				$('#world_dance').html(people.map(function(o){return '<strong>'+o.name+': </strong>'+o.dancing[getRandomInt(0,o.dancing.length)].speak(o.current_dancing)}).join('<br />'));
				
	}
    
    setInterval(setWorldState, 5000, people);
    
    
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
