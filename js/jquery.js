// jQuery is a library commonly used in JS widgets and functions and helps in manipulating
// your html elements:

// in order to use jQuery, just put the below script element in your html
// header/footer just like adding a css in your html using <link type/rel/href />
/*	the type parameter in the script tag is not needed in HTML5 but is good practice to use
    <head>
        <link type="text/css" rel="stylesheet" href="stylesheet.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
    </head>

an HTML document is structured according to the Document Object Model or DOM.
It's by interacting with the DOM that jQuery is able to access and modify HTML.
The DOM consists of every element on the page, laid out in a hierarchical way that 
reflects the way the HTML document is ordered. Remember how we could think of the HTML 
document as a tree? You can think of the DOM the same way. Just as with an HTML document,
elements in the DOM can have parents, children, and siblings.
*/



// example of jQuery:
// below is our 2 html div's
<!DOCTYPE html>
<html>
    <head>
		<title>What Say You?</title>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <script type="text/javascript" src="script.js"></script>
	</head>
	<body>
        <div id="ready">I'm ready!</div>
        <div id="notready">You'll never take me alive, jQuery!</div>
	</body>
</html>

// below is our css 
div {
    height:100px;
    width:100px;
    border-radius:5px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    font-family: Verdana, Arial, Sans-Serif;
    margin-right:5px;
}
#ready {
    background-color:#008800;
    color:#FFFFFF;
}
#notready {
    background-color:#FF0000;
    color:#FFFFFF;
}

// and finally our jQuery:
$(document).ready(function() {
    $('#notready').fadeOut(1000);	// target our #green ID and make it fade out
});

















/* below is our intro to jQuery and its syntax */
// first, we need to link our js(jQuery) file into our HTML file by adding a 
// script tag in our header just like our css file
// second, we need to start up our jQuery magic using the $(document).ready(); syntax
// the document between the $() above tells us that we're about to work our magic on
// the HTML document itself. 
// the .ready(); is a function in jQuery which says it'll do stuff as soon as the HTML
// doc is ready and whatever is in between the ready function parantheses is the jQuery
// event that occurs as soon as the HTML document is ready. so:
// $(document).ready(something);   says when the html doc is ready, do something.
// the document in $(document) is special and not an html element like <p> so it is not 
// wrapped around with quotes.
/*now we need to put something inside our ready() function. when we say 'function', you can
think 'action' which are the basic units of doing work in jQuery and cuz of this reason,
jQuery includes a 'function' keyword. if we add our function inside our .ready(), jQuery
will run the code in our function as soon as the HTML document loads. the syntax would be:

$(document).ready(function() {
    jQuery magic;
});

jQuery statements end with a semicolon
*/



/* so here's another example of a jQuery action. we've only seen the fadeOut action so far
but let's see another action called slideDown() which slides our targeted element down: */
$(document).ready(function() {
    $('div').slideDown('slow');		// makes our div slide down slowly
});







// another example:
// html:
<!DOCTYPE html>
<html>
	<head>
		<title>Button Magic</title>
        <link rel='stylesheet' type='text/css' href='testcss.css'/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js"></script>
        <script type='text/javascript' src='testjs.js'></script>
	</head>
	<body>
     <div><br/><strong>Click Me!</strong></div>   
	</body>
</html>

// css:
div {
    height: 60px;
    width: 100px;
    border-radius: 5px;
    background-color: #69D2E7;
    text-align: center;
    color: #FFFFFF;
    font-family: Verdana, Arial, Sans-Serif;
    opacity: 0.5;
}

// and our js:
$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').hide(function() {
            $('div').fadeTo('fast', 1);
        });
    });
    $('div').mouseleave(function() {
        $('div').fadeTo('fast', 0.5);
    });
});















// functions are the basic unit of action in jQuery. the main entry point of most jQuery
// applications is a block of code that looks like : $(document).....the one we've been using










// a new jQuery action is .click()          below is relevant to a simple square div:
$(document).ready(function() {
    $('div').click(function() {             // click action initiates
        $('div').fadeOut('slow');           // a slow fadeOut 
    });
});












// you can use variables in jQuery just like in JS:
/*
var lucky = 7;
var name = "Codecademy";
var $p = $('p');
*/

// using variables in jQ, modify the jQuery is for chumps line to fade out:
// html:
<!DOCTYPE html>
<html>
    <head>
        <title>Simplify, Simplify</title>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <div> Remember!
            <ul>
                <li>
                    <ol>
                        <li>Start with the function keyword</li>
                        <li>Inputs go between ()</li>
                        <li>Actions go between {}</li>
                        <li id="fade">jQuery is for chumps!</li>
                    </ol>
                </li>
                <li>Inputs are separated by commas.</li>
                <li>Inputs can include other functions!</li>
            </ul>
        </div>   
    </body>
</html>

// js:
$(document).ready(function() {
    var $target = $('#fade');   
    $target.fadeOut('fast');    
});
/* var $target = $('#fade'); can be set to these alternative elements:
var $target = $('ol li:last-child');
var $target = $('li:nth-child(4)');






// $p vs $('p'):
/*There's a subtle difference between the two. $p is just a variable name. There is no magic 
associated with the $ in $p; it's just a convention for saying, "hey, this variable contains 
a jQuery object." We could call $p anything we want: $paragraph, paragraph, space_cows, 
whatever! It's just helpful for people reading our code to see $p, since this is a concise 
way of saying "hey, there's a 'p' jQuery object in here."
$(), on the other hand, is magic. This is the function in disguise that creates jQuery 
objects. If you're making a jQuery object, you gotta use it!*/












// another action is fadeIn         below will fade in an invisible div:
<!DOCTYPE html>
<html>
    <head>
        <title>Fade In!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <div></div>   
    </body>
</html>

div {
    height: 100px;
    width: 100px;
    background-color: #F38630;
    display: none;
    border-radius: 5px;
}

$(document).ready(function() {
    $('div').fadeIn('slow');
});

















// more practice:    script.js will fadeOut the .vanish selector when the button is clicked:
<!DOCTYPE html>
<html>
    <head>
        <title>Vanishing Act</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <div class="vanish"></div>
        <div class="vanish"></div>
        <div class="vanish"></div>
        <div class="vanish"></div>
        <br/><button>Click Me!</button>
    </body>
</html>

.vanish {
    height: 100px;
    width: 100px;
    display: inline-block;
    background-color: #F38630;
    border-radius: 5px;
}

$(document).ready(function() {
    $('button').click(function() {
        $('.vanish').fadeOut('slow');
    });
});















// there is what's called a compound selector which is when you need to use an action
// on more than one selector. if u wanted to fadeTo() on two selectors, you'd use:
// $('p, li').fadeTo('slow', 0);
// and here's an example:
<!DOCTYPE html>
<html>
    <head>
        <title>Result</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <div class='red'></div>
        <div></div>
        <div class='pink'></div>
        <div></div>
    </body>
</html>

/*  CSS:
div {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background-color: #FF9C5B;
    display: inline-block;
}

.red {
    background-color: #E84A5F;
}

.pink {
    background-color: #FF847C;
}
*/

// the js to apply fadeOut() to both .pink and .red selectors:
$(document).ready(function() {
    $('.pink, .red').fadeTo('slow', 0);
});




















// using 'this'         suppose you had this jQuery:
$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').hide();
    });
});
// the $('div').hide(); line will hide ALL div's when your mouse enters any singular div
// we would use 'this' keyword if we wanted to hide() only the single div you mouseenter() over
// The this keyword refers to the jQuery object you're currently doing something with. Its 
// complete rules are a little tricky, but the important thing to understand is if you use an 
// event handler on an element—that's the fancy name for actions like .click() and 
// .mouseenter(), since they handle jQuery events—you can call the actual event that occurs 
// (such as fadeOut()) on $(this), and the event will only affect the element you're currently 
// doing something with (for example, clicking on or mousing over).
// so an example would be:
<!DOCTYPE html>
<html>
    <head>
        <title>Check 'this' Out!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </body>
</html>

div {
    height: 100px;
    width: 100px;
    background-color: #4ECDC4;
    border-radius: 5px;
    display: inline-block;
}

$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow');        // only the div you're over will fadeOut
    });
});

























// below is html/css/jQ to build a sliding panel that moves up and down when clicked:
<!DOCTYPE html>
<html>
    <head>
        <title>Slide Panel</title>
        <script type="text/javascript" src="script.js"></script>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"></link>
    </head>
    <body>
        <div class="panel">
        <br />
        <br />
        <p>Now you see me!</p>
        </div>
        <p class="slide"><div class="pull-me">Slide Up/Down</div></p>
    </body>
</html>

/*
body {
    margin:0 auto;
    padding:0;
    width:200px;
    text-align:center;
}
.pull-me{
    -webkit-box-shadow: 0 0 8px #FFD700;
    -moz-box-shadow: 0 0 8px #FFD700;
    box-shadow: 0 0 8px #FFD700;
    cursor:pointer;
}
.panel {
    background: #ffffbd;
    background-size:90% 90%;
    height:300px;
    display:none;
    font-family:garamond,times-new-roman,serif;
}
.panel p{
    text-align:center;
}
.slide {
    margin:0;
    padding:0;
    border-top:solid 2px #cc0000;
}
.pull-me {
    display:block;
    position:relative;
    right:-25px;
    width:150px;
    height:20px;
    font-family:arial,sans-serif;
    font-size:14px;
    color:#ffffff;
    background:#cc0000;
    text-decoration:none;
    -moz-border-bottom-left-radius:5px;
    -moz-border-bottom-right-radius:5px;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
}
.pull-me p {
    text-align:center;
}
*/

$(document).ready(function() { 
    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow');
    });     
});
























// we've been manipulating html element stylings using jQuery but we can also use jQuery
// to change the html element itself. e.g. if you have something like a 
// chat feature, you're essentially creating a new div every time someone posts.
// we've been using things like $p = $('p') but we can pass entire HTML elements like so:
$p = $("<p>I'm a new paragraph!</p>");

// here's some practice using jQuery to create html element variable:
<!DOCTYPE html>
<html>
    <head>
        <title>Result</title>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body></body>
</html>

// setting a variable to hold our h1 value:
var $h1 = $("<h1>Hello</h1>");







// now we can start appending these changes into our html by using .append()/.prepend():
// .append() inserts the specified element as the last child of the target element
// .prepend() inserts the specified element as the first child of target element
// if we have a div of class .info:
$(".info").append("<p>Stuff!</p>");     // makes the p the last child of each div
$(".info").prepend("<p>Stuff!</p>");    // makes the p the first child of each div
$('<p>Stuff!</p>').appendTo('.info');   // === .append() 
$('<p>Stuff!</p>').prependTo('.info');  // === .prepend()


// an example of appending:
<!DOCTYPE html>
<html>
    <head>
        <title>Result</title>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body></body>
</html>

// js script to add a <p> in body:
$(document).ready(function() {
    $('body').append('<p>I\'m a paragraph!</p>');
});








// we can specify where in the DOM we insert an element with the .before()/.after() functions
    $('target').after('<tag>To add</tag>');
// target is the element after which you want to add something and the bit between <tag>'s
// is the html element you want to add. example:
<!DOCTYPE html>
<html>
    <head>
        <title>Result</title>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <div class="container">
            <h2>Greetings</h2>
            <div id="one">Div #1</div>
            <div id="two">Div #2</div>
        </div>   
    </body>
</html>

// script.js: add a <p> tag .after() the <div> with the ID #one. any text inside <p> is fine:
$(document).ready(function() {
    $('#one').after('<p>After #one</p>');
});




// you can also move elements around in the DOM by using the .after()/.before()
// if you have an existing element and want to move it, instead of deleting the original
// and creating the new one, you can use jQuery to simply move the original to new location:
<!DOCTYPE html>
<html>
    <head>
        <title>Result</title>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <div class="container">
            <h2>Greetings</h2>
            <div id="one">Div #1</div>
            <div id="two">Div #2</div>
        </div>   
    </body>
</html>

// script.js will move newly created <p> to .after() #two using a variable to hold $('p'):
$(document).ready(function() {
    $('#one').after('<p>After #one</p>');
    var $p = $('p');
    $('#two').after($p);
});




// there are two jQuery functions to help us to delete particular content: .empty()  .remove()
// .empty() deletes an element's content and all its descendants. for instance, if you 
// .empty() an 'ol', you'll also remove all its 'li's and their text.
// .remove() delete's an elements content and the element itself.
<!DOCTYPE html>
<html>
    <head>
        <title>Result</title>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <div class="container">
            <h2>Greetings</h2>
            <div id="one">Div #1</div>
            <div id="two">Div #2</div>
        </div>   
    </body>
</html>

// script.js will remove <p> tag:
$(document).ready(function() {
    $('#one').after('<p>After #one</p>');
    var $p = $('p');
    $('#two').after($p);
    $('p').remove();
});




















// modifying HTML classes and content:
// modifying classes using .addClass() and .removeClass() is useful for when you have,
// let's say, a highlighted class that you want to apply to an element when clicked.
// syntax:
$('selector').addClass('className');        
$('selector').removeClass('className');
// 'selector' is the html element you want and 'className' is what you want to delete/add
// ***you aren't selecting anything, you are modifying you element. this means that you don't
// need to use # or . before your class/id
// e.g. html/css is given, add jQuery code necessary to make #text highlighted when clicked:
/*
<!DOCTYPE html>
<html>
    <head>
        <title>Highlights</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <div id="title" class="highlighted">I'm highlighted!</div>
        <div id="text">Highlight me, too!</div>
    </body>
</html>

#title {
    background-color: #C02942;
    border-radius: 5px;
    text-align: center;
    font-family: Verdana, Arial, Sans-Serif;
    color: #FFFFFF;
    width: 200px;
    height: 25px;
}

#text {
    background-color: #0B486B;
    border-radius: 5px;
    text-align: center;
    font-family: Vivaldi, Cursive;
    color: #FFFFFF;
    width: 200px;
    height: 25px;
}

.highlighted {
    -webkit-box-shadow: 0 0 8px #FFD700;
    -moz-box-shadow: 0 0 8px #FFD700;
    box-shadow: 0 0 8px #FFD700;
    cursor:pointer;
}
*/
// script.js jQuery to add class to the #text div:
$(document).ready(function() {
    $('#text').click(function() {
        $(this).addClass('highlighted');
    });
});





// what if we want to toggle a class back and forth? that is, what if we want jQuery to 
// automatically check to see whether our #text is .highlighted, so that when we click on it,
// it adds the class if it isn't there and removes it if it is? jQuery includes a 
// .toggleClass() function that does exactly this. if the element it's called on has the class
// it receives as an input, .toggleClass() removes that class; if the target element doesn't
// have that class, .toggleClass() adds it. 
// e.g. change the above .addClass() to a .toggleClass() using the same html/css/js above:
$(document).ready(function() {
    $('#text').click(function() {
        $(this).addClass('highlighted');
    });
});
// above code edited to meet our goal:
$(document).ready(function() {
    $('#text').click(function() {
        $(this).toggleClass('highlighted');  // clicking on the #text now, makes highlight turn on/off
    });                                      // as opposed to above js which just stays highlighted
});                                          // regardless of number of clicks






// changing your style:  jQuery can fine-tune individual css property values like style='height:300px';
// cuz resizing elements is so common, jQuery has specific .height() and .width() functions to change
// height/width of html elements.  syntax:
$("div").height("100px");   // all divs now have heights of 100px
$("div").width("50px");     // and widths of 50px
// jQuery also includes a general-purpose .css() function that takes two inputs: the first is the 
// css element to alter and the second is the value to set it to. syntax:
 $("div").css("background-color","#008800");  // would give all divs background color of green
 // e.g. change <div> html element so it has height:200px/width:200px/border-radius:10px:
 // no need for clicking, let's make this happen immediately:
 <!DOCTYPE html>
<html>
    <head>
        <title>Result</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <div></div>   
    </body>
</html>

div {
    height: 50px;
    width: 300px;
    border-radius:0;
    background-color: #2C7CC3;
}

//we want the event to occur as soon as document loads so we don't need event handlers(click) this time:
$(document).ready(function() {
    $('div').height('200px');
    $('div').width('200px');
    $('div').css('border-radius', '10px');
});
// the 3 js codes above can be chained together like so:
$(document).ready(function() {
    $("div").height("200px").width("200px").css("border-radius","10px");
});








// we can also modify content in html elements such as what's in between <p>;adf</p> tags using:
// .html() and .val() functions
// .html() can be used to set contents of the first element match it finds. syntax:
$('div').html();    // will get html contents of first div it finds
$('div').html('I love jQuery!');    // will set the contents of the first div it finds to i love jQuery

// .val() is used to get the value of form elements.  syntax:
$('input:checkbox:checked').val();  // would get value of first checked checkbox that jQuery finds


// e.g. change the <p> text using .html() to something other than what it is below:
<!DOCTYPE html>
<html>
    <head>
        <title>Result</title>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <p>Im about to change!</p>   
    </body>
</html>

// script.js will edit the above <p> text to something else:
$(document).ready(function() {
    $('p').html('jQuery magic in action!');
});

















/* below will be more practice with all the stuff we learned about modifying html elements by building 
an interactive 'to do' list that adds items to a checklist and removes them if checked off */
// we'll do so using the below html/css:
<!DOCTYPE html>
<html>
    <head>
        <title>To Do</title>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <script type="text/javascript" src="script.js"></script>
    </head>
    <body>
        <h2>To Do</h2>
        <form name="checkListForm">
            <input type="text" name="checkListItem"/>
        </form>
        <div id="button">Add!</div>
        <br/>
        <div class="list"></div>
    </body>
</html>

/*
h2 {
    font-family:arial;
}

form {
    display: inline-block;
}

#button{
    display: inline-block;
    height:20px;
    width:70px;
    background-color:#cc0000;
    font-family:arial;
    font-weight:bold;
    color:#ffffff;
    border-radius: 5px;
    text-align:center;
    margin-top:2px;
}

.list {
    font-family:garamond;
    color:#cc0000;
}
*/

// above, we have an html form element for grabbing the user's input. we'll need to store the user's
// input in a variable, which will alow us to append that input to the body of the HTML document later.
// you can set a variable equal to the contents of the input field using .val() like so:
var input = $('input[name=checkListItem]').val();  // now users input(input text) is stored in input
// we then use input holding user's input value to .append() it to our .list div
// now that we can add input to our .list div, we'll need a new event handler to remove already listed
// input by using .on() which can be thought of as a general handler that takes the event, its selector
// and an action as inputs.  syntax will be like this:
$(document).on('event', 'selector', function() {
    Do something!
});
// in this case, 'event' will be 'click', 'selector' will be '.item' and the thing we'll want to do is
// call .remove() on 'this'

// below is final script.js:
$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });
    $(document).on('click', '.item', function() {
        $(this).remove();
    });
});































// Review of jQuery events:
// setup to jQuery almost always looks like this:
$(document).ready(function() {
    $('thingToTouch').event(function() {
        $('thingToAffect').effect();
    });
});

// if you want an effect to occur right away, without an event like .click()/.hover(), you'll
// skip the second line above:
$(document).ready(function() {
    $('thingToAffect').effect();
});








// e.g. of jQuery handling an effect that should occur immediately:
<!DOCTYPE html>
<html>
    <head>
        <title>Kapow!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <div></div>   
    </body>
</html>

/*
body {
    background-image: url('http://bit.ly/UpQgJ6');
    background-repeat: no-repeat;
}

div {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: #008800;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#003500), to(#008800));
    background-image: -webkit-linear-gradient(left, #003500, #008800); 
    background-image:    -moz-linear-gradient(left, #003500, #008800);
    background-image:     -ms-linear-gradient(left, #003500, #008800);
    background-image:      -o-linear-gradient(left, #003500, #008800);
}

.red {
    background-color: #CC0000;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#330000), to(#CC0000));
    background-image: -webkit-linear-gradient(left, #330000, #CC0000); 
    background-image:    -moz-linear-gradient(left, #330000, #CC0000);
    background-image:     -ms-linear-gradient(left, #330000, #CC0000);
    background-image:      -o-linear-gradient(left, #330000, #CC0000);
}*/

// script.js:
$(document).ready(function() {
    $('div').fadeOut('fast');
});




// using the same html/css from above: using an event handler to create an effect:
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('fast');
    });
});




// using same html/css from above: make krypton(div) turn red when .hover() and .fadeOut() with click:
// the .red class in the css comes into play now:
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('fast');
    });
    $('div').hover(function() {
        $(this).addClass('red');    // div now turns into .red class and takes on its properties(css)
    });
});










// new event handler: .dblclick():
// use .dblclick() handler to make div .fadeOut() 'fast':
<!DOCTYPE html>
<html>
    <head>
        <title>Dubba Click</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <div></div>   
    </body>
</html>

div {
    height: 100px;
    width: 100px;
    border-radius: 5px;
    background-color: #ABCDEF;
}

$(document).ready(function() {
    $('div').dblclick(function() {
        $(this).fadeOut('fast');
    });
});


























// mouse and keyboard events:
// what if you wanted to create an effect once your mouse hovers over an object but then have that
// effect vanish when your mouse moves away?
$('div').hover(
    function(){
      $(this).addClass('highlight');
   },
   function(){
      $(this).removeClass('highlight');
   }
);
// 1. select the element that you want to modify - $('div')
// 2. notice that .hover() is taking two functions(){} separated by a comma 
// 3. first function(){} will run when we first mouse over our target. here, .highlight is applied
// 4. second function(){} will be called when mouse leaves object - .highlight is removed
// example of above concept below:
<!DOCTYPE html>
<html>
    <head>
        <title>Ghostly Divs</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <div>Home</div>
        <div>About Us</div>
        <div>Contact</div>   
    </body>
</html>

div {
    border-radius: 5px;
    background-color: #ABCDEF;
    transition: background-color 0.5s ease;
    display:inline;
    font-size:25px;
    padding:20px;
    border:1px solid #ccc;
    margin-top:10px;
}
.active {                       // this class will be applied when hovered
    background-color:#556677;   // then removed when mouse leaves the div    
}

$(document).ready(function() {
    $('div').hover(
        function(){
            $(this).addClass('active');
        },
        function(){
            $(this).removeClass('active');
        }
    );
});












// another event: .focus()
// we say an element has focus when we click on it or tab over to it. if you've ever filled out a
// form on a webpage and seen how each text box lights up when you tab/click on it, that is focus.
// .focus() only works on elements that can receive this event: <textarea>s and <input>s are the usual.
// below html/css makes the text form focus into blue.
<!DOCTYPE html>
<html>
    <head>
        <title>Time to Focus!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <form>
            Name: <input type='text' name='name'></input>
        </form>
    </body>
</html>

input {
    font-family: Verdana, Arial, Sans-Serif;
}

// script.js:  turn 'outline-color' to 'red' when focused on form:
$(document).ready(function() {
    $('input').focus(function() {
        $(this).css('outline-color', '#ff0000');
    });
});










// now let's see an example of keyboard event handlers like .keydown() which gets triggered whenever
// a keyboard's key is pressed. it only works on whatever page element has focus, so you'll need
// to click on the window containing your div before pressing a key in order for you to see its effects
// combine our new .keydown() with a new effect: .animate() which we'll use to move an object on the
// screen whenever we press a key.  the .animate() effect takes two inputs: the animation to perform
// and the time in which to perform the animation. below is an example:
$(document).ready(function() {
   $('div').animate({left:'+=10px'},500);
});
// this will take the first div it finds and move it ten pixels to the right. remember, increasing the
// distance from the left margin moves something to the right. below is an example of all this:
<!DOCTYPE html>
<html>
    <head>
        <title>Div Racer</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <div></div>   
    </body>
</html>

div {
    height: 50px;
    width: 50px;
    border-radius: 10px;
    background-color: #FF0000;
    position: relative;
}

$(document).ready(function() {
    $(document).keydown(function() {
        $('div').animate({left:'+=10px'},500);
    });
});













// with all our newfound knowledge, let's animate a sprite, or 2d image on the screen:
<!DOCTYPE html>
<html>
    <head>
        <title>Super Mario!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <img src="http://i1061.photobucket.com/albums/t480/ericqweinstein/mario.jpg"/>
    </body>
</html>

img {
    position: relative;
    left: 0;
    top: 0;
}

// script.js: one twist is the fact we passed our keydown a function with an input - key so we know
// which key was pressed. we will also animate mario based on the user's input from the keyboard.
// we can move mario up/right/down/left using arrow keys using the script.js below:
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
                $('img').animate({left: "-=10px"}, 'fast');
                break;
            // Up Arrow Pressed
            case 38:
                $('img').animate({top: "-=10px"}, 'fast');
                break;
            // Right Arrow Pressed
            case 39:
                $('img').animate({left: "+=10px"}, 'fast');
                break;
            // Down Arrow Pressed
            case 40:
                $('img').animate({top: "+=10px"}, 'fast');    // fast can be number in milliseconds
                break;                                        // 1000ms === 1second
        }
    });
});






































                /*      EVERYTHING FROM HERE ON IS JQUERY UI            */
// a new jQuery library we'll use is jQuery UI and in order to use it, you must include below script
// along with your other scrip tags:
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
// jQuery UI allows us to use new functions/effects such as .effect()
<!DOCTYPE html>
<html>
    <head>
        <title>Krypton Redux</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
        <script type='text/javascript' src='script.js'></script>
    </head>
    <body>
        <div></div>
    </body>
</html>

body {
    background-image: url('http://bit.ly/UpQgJ6');
    repeat: no-repeat;
}
div {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: #008800;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#003500), to(#008800));
    background-image: -webkit-linear-gradient(left, #003500, #008800); 
    background-image:    -moz-linear-gradient(left, #003500, #008800);
    background-image:     -ms-linear-gradient(left, #003500, #008800);
    background-image:      -o-linear-gradient(left, #003500, #008800);
}

// script.js: use our new .effect() with an input of 'explode' and watch Krypton explode:
$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('explode');
    });
});







// another .effect() is 'bounce' but there is a second input which sets how many times the ball will 
// bounce:
$('div').effect('bounce', {times:2}, 200);  
// above code will make target 'div' bounce twice in 200 milliseconds.
// using the same html/css from above(krypton), make Krypton(div) bounce 3x in 500ms when clicked:
$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('bounce', {times:3}, 500);
    });
});







// we can also make krypton .slide() into view by using 'slide' as an input for .effect()
// using the same html/css/js above, change 'bounce' to 'slide' and remove the other 2 inputs:
$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('slide');
    });
});






























// jQuery UI's .effect() is amazing but it's not the most amazing thing about UI.  the library has
// many built-in effects that can make your website look sleek and pro with little code.
// check out the example below which only uses html/js:
/*
<!DOCTYPE html>
<html>
    <head>
        <title>Behold!</title>
        <link rel='stylesheet' type='text/css' href='http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
    </head>
    <body>
        <div id="menu">
            <h3>jQuery</h3>
            <div>
                <p>jQuery is a JavaScript library that makes your websites look absolutely stunning.</p>
            </div>
            <h3>jQuery UI</h3>
            <div>
                <p>jQuery UI includes even more jQuery goodness!</p>
            </div>
            <h3>JavaScript</h3>
            <div>
                <p>JavaScript is a programming language used in web browsers, and it's what powers jQuery and jQuery UI. You can learn about JavaScript in the <a href="http://www.codecademy.com/tracks/javascript" target="blank" style="text-decoration:none; color:#F39814">JavaScript track</a> here on Codecademy.</p>
            </div>
        </div>
    </body>
</html>
*/
// and the script.js below which breaks down the div's into accordion sections:
$(document).ready(function() {
    $("#menu").accordion({collapsible: true, active: false});
});



















// jQuery UI includes a .draggable() function that can make any html element draggable.
// below is an example of one:
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
    </head>
    <body>
        <div id="car">
            <div id="top"></div>
            <div id="bottom"></div>
            <div id="fwheel"></div>
            <div id="bwheel"></div>
        </div>   
    </body>
</html>

/*  css below to turn the div's into a car:
#top {
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: 5px;
    background-color: #cc0000;
    left: 25px;
}
#bottom {
    position: relative;
    height:25px;
    width: 100px;
    background-color: #cc0000;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    top: -25px;
}
#fwheel {
    position: relative;
    height:20px;
    width:20px;
    border-radius: 100%;
    background-color: black;
    top: -35px;
    left: 5px;
}
#bwheel {
    position: relative;
    height:20px;
    width:20px;
    border-radius: 100%;
    background-color: black;
    top: -55px;
    left: 75px;
}
*/
// and the script.js below:
$(document).ready(function() {
    $('#car').draggable();
});























// below is an example of using .resizable() to resize a <div>:
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
    </head>
    <body>
        <div>Resize Me!</div>   
    </body>
</html>

div {
    height: 100px;
    background-color: #ABCDEF;
    font-family: Verdana, Arial, Sans-Serif;
    font-size: 1em;
    text-align: center;
}
// script.js below to resize our <div> using our cursor:
$(document).ready(function() {
    $('div').resizable();
});
























// img's and div's aren't the only elements we can target with jQuery UI - we can also enhance our
// ordered and unordered lists.  below is an example:
<!DOCTYPE html>
<html>
    <head>
        <title>Select Ye Favorite</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
    </head>
    <body>
        <ol>
            <li>Super Mario Bros.</li>
            <li>Tetris</li>
            <li>Legend of Zelda: Link's Awakening</li>
            <li>Kirby's Dream World</li>
            <li>Burger Time</li>
            <li>Pokémon Red</li>
            <li>Pokémon Blue</li>
        </ol>   
    </body>
</html>

/*      css:
ol {
    list-style-type: none;
    position: relative;
    left: -20px;
}

ol li {
    background: #eeeeee;
    border-radius: 5px;
    border: 1px solid black;
    margin: 3px;
    padding: 0.4em;
    font-size: 1em;
    height: 16px;
    font-family: Verdana, Arial, Sans-Serif;
}

ol .ui-selected {
    background: #F39814; color: white;      **this allows the highlighting style when .selectable()
}
*/

// script.js - use .selectable() function on your 'ol':
$(document).ready(function() {
    $('ol').selectable();
});
// above js allows you to click on a <li> and it'll stay highlighted until you reclick






// we can use the .sortable() function to reorder the elements in our list:
// using the same html/css from above, replace .selectable() with .sortable():
$(document).ready(function() {
    $('ol').sortable();
});
// .sortable() allows you to click/drag the 'ol' elements to new positions within the ol 





























// here's an example of using .accordion() function to create a dropdown menu using jQuery UI:
// we won't be using any css for this example:
/*
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link rel='stylesheet' type='text/css' href='http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
    </head>
    <body>
        <div id="menu">
            <h3>Section 1</h3>
            <div>
                <p>I'm the first section!</p>
            </div>
            <h3>Section 2</h3>
            <div>
                <p>I'm the second section!</p>
            </div>
            <h3>Section 3</h3>
            <div>
                <p>I'm the third section!</p>
            </div>
        </div>
    </body>
</html>
*/
// below is the js to turn our shit into .accordion()
$(document).ready(function() {
    $('#menu').accordion();
});


































// everything above was from codeacademy.  everything below is from try.jquery.com(code school):

// you can traverse the DOM:
<div id="vacations-wrapper">
  <h1>Vacation Packages</h1>
  <ul id="vacations">
    <yes><li class="vacation america">
      <h2>San Francisco, California</h2>
      <span class="details">$700</span>
    </li></yes>
    <yes><li class="vacation america">
      <h2>Washington DC, District of Columbia</h2>
      <span class="details">$400</span>
    </li></yes>
    <li class="vacation europe">
      <h2>London, England</h2>
      <span class="details">$1,100</span>
    </li>
    <li class="vacation asia">
      <h2>Shanghai, China</h2>
      <span class="details">$1,200</span>
    </li>
  </ul>
   
  <ul class="sorting">
    <li><a href="#">America</a></li>
    <li><a href="#">Europe</a></li>
    <li><a href="#">Asia</a></li>
  </ul>
</div>

// you can select vacations from America using $("#vacations .america"); but you can do it faster
// by using traversal: .find()
// using traversal, change $("#vacations .america") using .find():
$('#vacations').find('.america');



// using same html from above, we added a 'feeling lucky' feature to our site where the first 
// vacation is selected by default. using traversal/filtering, select the first vacation li element:
// you can use pseudo classes to find the first li child: $("li:first");
// but you can use traversal to do the same thing: $("li").first()
$("li").first()     // will return the first li 



$("#vacations li:last");   // will return last li from #vacations but this code can be refactored
// to be faster using traversal:
$("#vacations li").last();



// we know how to find .first() and .last() li items but we can also find the second/etc using
// .prev() and .next()      to find the first li, we'd use this code:
$("li").first();            // but we can find the second li by using this code:
$("li").first().next();     // using method chaining, we find the first then the next (second li)
// you can chain any number of methods together
// using traversal, find the second to last vacation:
$("#vacations li").last().prev();



$("li").first().parent();       // will return the parent of the first li which is the ul (#vancations)
// using traversal, select all tours who have a featured class in their title by getting
// the parent of featured titles:
$(".featured").parent();



$("#destinations").children("li");  // will  only return the li elements that are direct children
// of #destinations and none of the li's further nested.
$("#tours > li");   // will only return the direct children li's of parent #tours.  however,
// we can be faster by refactoring the above jQuery using traversal:
$("#tours").children("li");






























<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="usa tour">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
  </ul>
</div>

// using the above html which provides us with a button of class book.  we want jQuery that will
// hide the button when page loads and also change the button that says book now to a <p> that 
// will show us a price.
// in order to achieve this, you need to create a variable that will hold our new <p> with the price
// then we need to add that <p> into our html as the last child of li, which will create a new DOM node 
// (new p under button that is last child of li). lastly, we need to hide or remove our button:
$(document).ready(function() {
    var price = $("<p>From $399.99</p>");
})
// above jQuery will only create the new <p> but we haven't added it yet. we can do this a # of ways:
// $('.usa tour').before(price);  will add p as a new parent above our li which is not right
// $('.usa tour').after(price); will add p as a new parent after our li which is also wrong
// $('.usa tour').prepend(price); will add p as first child of ul(first li) which is wrong
// $('.usa tour').append(price); this is correct as it adds price as last li of the parent <ul>
// below is code that will create 'price', add 'price' in html then remove our button class:
$(document).ready(function() {
    var price = $("<p>From $399.99</p>");
    $('.vacation').append(price);
    $('button').remove();
})


// above, we see the changes as soon as our web page loads but we should edit jQuery so the changes
// only occur when we click our button. we do this by wrapping above code into an event handler
// which will "listen" for a certain input by the user(click in this case) and then execute the block:
$(document).ready(function() {
    $('button').on('click', function() {
        var price = $("<p>From $399.99</p>");
        $('.vacation').append(price);
        $('button').remove();
    });
});










// if we have multiple vacation (li's) in our .vacation ul and we use the above jQuery, when we click
// any button, all buttons will be removed and be replaced with a p telling 'from 399.99'.
// we can fix this issue by using $(this) as a selector which is a placeholder for any specific
// button as opposed to all buttons. so to achieve this, check the jQuery below:
$(document).ready(function() {
    $('button').on('click', function() {
        var price = $("<p>From $399.99</p>");
        $(this).closest('.vacation').append(price);   
        $(this).remove();
    });
});
// $(this).closest('.vacation').append(price);  will walk up the DOM to find the ancestor .vacation
// and append onto that the price node.  let's go thru eg's using below html:
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="usa tour">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
    <li class="europe tour">
      <h2>Paris, France</h2>
      <span class="details">$2,299 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
    <li class="asia tour">
      <h2>Tokyo, Japan</h2>
      <span class="details">$3,799 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
  </ul>
</div>

$(document).ready(function(){
  $("button").on("click", function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    $(".usa").append(message);
    $("button").remove();
  });
});



// with above jQuery, all buttons disappear when any one is clicked. use 'this' to edit the js so
// only the one you click on will disappear and the others remain:
$(document).ready(function(){
  $("button").on("click", function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    $(".usa").append(message);
    $(this).remove();
  });
});



// with multiple tours on the page, we're no longer appending the message in the right place. we really
// only want this message to be added .after() the button we click on. instead of appending message
// to the .usa list, add it .after() the button that was clicked:
$(document).ready(function(){
  $("button").on("click", function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    $(this).after(message);
    $(this).remove();
  });
});



// html has changed a bit. now the <button> is inside a <div> tag. we don't want the message to go 
// inside the <div> tag tho, we want it to go at the bottom of the <li> element:
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="usa tour">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <div>
        <button class="book">Book Now</button>
      </div>
    </li>
    <li class="europe tour">
      <h2>Paris, France</h2>
      <span class="details">$2,299 for 7 nights</span>
      <div>
        <button class="book">Book Now</button>
      </div>
    </li>
    <li class="asia tour">
      <h2>Tokyo, Japan</h2>
      <span class="details">$3,799 for 7 nights</span>
      <div>
        <button class="book">Book Now</button>
      </div>
    </li>
  </ul>
</div>

// let's change our jQuery from above to use .closest() to find the parent li element and .append() 
// message to the bottom of it:
$(document).ready(function(){
  $('button').on('click', function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    $(this).closest('li').append(message);
    $(this).remove();
  });
});



// rather than clicking on the button to show the price, we've decided to allow travelers to click
// on the entire <li> element. change the call to .on() to only target .tour elements. after that
// change, $(this) in the event handler will reference the clicked <li>. let's update our jQuery to 
// still append the message at the bottom and use .find() to locate the button and remove it: 
// use html below:
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="usa tour">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
    <li class="europe tour">
      <h2>Paris, France</h2>
      <span class="details">$2,299 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
    <li class="asia tour">
      <h2>Tokyo, Japan</h2>
      <span class="details">$3,799 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
  </ul>
</div>

$(document).ready(function(){
  $(".tour").on("click", function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    $(this).append(message).find("button").remove();
  });
});












// use below html:
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="usa tour" data-discount="299">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
    <li class="europe tour" data-discount="176">
      <h2>Paris, France</h2>
      <span class="details">$2,299 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
    <li class="asia tour" data-discount="349">
      <h2>Tokyo, Japan</h2>
      <span class="details">$3,799 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
  </ul>
</div>

// let's add a bit more incentive to get ppl to book these tours by offering a discount if they book
// today. the discount we want to offer is stored in a data attribute on the .tour element. traverse
// from the clicked button, $(this), to the .closest() .tour element, and save its discount in a 
// variable called discount within the button click event handler. we don't need to do anything 
// with the discount variable just yet:
$(document).ready(function(){
  $('button').on('click', function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    var discount = $(this).closest(".tour").data("discount");
    $(this).closest(".tour").append(message);
    $(this).remove();
  });
});



// we want to show this discount to the user in the message we show after the 'Book Now' button is
// clicked. go ahead and change the content of message to something else and swap out <discount>
// for the discount price:
$(document).ready(function(){
  $("button").on("click", function(){
    var discount = $(this).closest(".tour").data("discount");
    var message = $("<span>Call 1-555-jquery-air for a " + discount + " discount.</span>");
    $(this).closest(".tour").append(message);
    $(this).remove();
  });
});



// we're using this code twice: $(this).closest('.tour') to find the tour element. refactor your code
// so that the .closest() tour element is set to a variable named tour, and then use that variable
// instead. this way, we only query the DOM once for the tours, instead of twice:
$(document).ready(function(){
  $("button").on("click", function(){
    var tour = $(this).closest(".tour");
    var discount = tour.data("discount");
    var message = $("<span>Call 1-555-jquery-air for a $" + discount + " discount.</span>");
    tour.append(message);
    $(this).remove();
  });
});



// there is a small problem with the way our .on() handler is being used. currently, the handler is 
// targeting all <button> elements on the screen. refactor the .on() handler to only target
// <button> elements within a .tour by using the selector argument of the .on() method:
$(document).ready(function(){
  $(".tour").on("click", "button", function(){
    var tour = $(this).closest(".tour");
    var discount = tour.data("discount");
    var message = $("<span>Call 1-555-jquery-air for a $" + discount + " discount.</span>");
    tour.append(message);
    $(this).remove();
  });
});







// now the html has changed a bit: we'll add new buttons to filter:
<div id="all-tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="usa tour on-sale" data-discount="299">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
    <li class="europe tour on-sale" data-discount="176">
      <h2>Paris, France</h2>
      <span class="details">$2,299 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
    <li class="asia tour" data-discount="349">
      <h2>Tokyo, Japan</h2>
      <span class="details">$3,799 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
  </ul>
  <ul id="filters">
    <li><button class="on-sale">On Sale</button></li>   // newly added filter button
  </ul>
</div>

// let's add some result filtering options to our page. we want to be able to click on a filter and
// highlight the corresponding tours with a .highlight class. go ahead and get started by creating
// the click handler for the On Sale filter. don't worry about the contents of the click handler
// function, we'll get it working in the next few challenges:
$(document).ready(function(){
  $("#filters").on("click", ".on-sale", function() {
    
  });
});



// let's make these filters work. in our event handler, find all .tour elements and .filter() for only
// those that have a class of .on-sale.  .addClass() of highlight to only these filtered tours on click:
$(document).ready(function(){
  $("#filters").on("click", ".on-sale", function(){
        $(".tour").filter(".on-sale").addClass('highlight');
  });
});



// html below is same as above but now has two filter buttons as opposed to just one above:
<div id="all-tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="usa tour on-sale" data-discount="299">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
    <li class="europe tour on-sale" data-discount="176">
      <h2>Paris, France</h2>
      <span class="details">$2,299 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
    <li class="asia tour featured" data-discount="349">
      <h2>Tokyo, Japan</h2>
      <span class="details">$3,799 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
  </ul>
  <ul id="filters">
    <li><button class="on-sale">On Sale</button></li>
    <li><button class="featured">Featured</button></li>     // 2nd added filter button
  </ul>
</div>

// there is one thing left to do, we need to remove the highlight class immediately after clicking
// a filter so we are only highlighting the correct elements. another filter has been added to make 
// things interesting. in both of these filters, remove the highlight class from anything that has it:
$(document).ready(function(){
  $("#filters").on("click", ".on-sale", function(){
    $(".highlight").removeClass("highlight");
    $(".tour").filter(".on-sale").addClass("highlight");
  });
    
  $("#filters").on("click", ".featured", function(){
    $(".highlight").removeClass("highlight");
    $(".tour").filter(".featured").addClass("highlight");
  });
});


























// in this eg, we have html that shows us one vacation listing which has a button that will show
// details if clicked. 
<li class="confirmation">
    ...
    <button>FLIGHT DETAILS</button>     // clicking this button
    <ul class="ticket">...</ul>         // will show this ticket
</li>

// below is css to hide the .ticket so it can later be revealed:
.ticket {
    display: none;      // hides ticket on page
}

// script.js: you can use .slideDown(), .slideUp() and .slideToggle(). we will use .slideDown():
$(".confirmation").on("click", "button", function() {
    $(this).closest(".confirmation").find(".ticket").slideDown();
});
// .closest() will search up through ancestors and .find() will search down through children.
// however, as is, the button will not work so let's debug using JS functions alert() & length():
alert($("button").length);
$(".confirmation").on('click', 'button', function() {
    $(this).closest('.confirmation').find('.ticket').slideDown();
});
// the alert box pops up and shows us that we have 0 buttons which is the problem.
// to remedy, use $(document).ready():
$(document).ready(function() {
    alert($("button").length);
    $(".confirmation").on('click', 'button', function() {
        $(this).closest('.confirmation').find('.ticket').slideDown();
    });
});
// now the alert box will show that we have 1 button and now the button works.









// eg of above concept using below html:
<div id="tour">
  <h2>Paris, France Tour</h2>
  <p>$2,499 for 7 Nights</p>
  <button>See photos from our last tour</button>
  <ul class="photos">
    <li>
      <img src="/assets/photos/paris1.jpg">
      <span>Arc de Triomphe</span>
    </li>
    <li>
      <img src="/assets/photos/paris2.jpg">
      <span>The Eiffel Tower</span>
    </li>
    <li>
      <img src="/assets/photos/paris3.jpg">
      <span>Notre Dame de Paris</span>
    </li>
  </ul>
</div>

// js script that will alert() the # of photos available by using length() property:
$(document).ready(function() {
  alert($("li").length);        // alert box output: 3
});



// js script will add an event handler to watch for a click on button elements. to make sure this 
// doesn't impact anything else on the page, only watch for clicks on buttons within the #tour:
$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    ...
  });
});



// js script adds to above to show the .photos element by querying the DOM for it then calling
// .slideDown(). this will draw the eye to the phots by adding a little movement:
$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $(".photos").slideDown();
  });
});



// the photos will now be shown but we have no way of hiding them. let's change above jQuery to 
// use .slideToggle() so that the photos will be hidden if they click again:
$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $(".photos").slideToggle();
  });
});










// using the same html from line 2363:
<li class="confirmation">
    ...
    <button>FLIGHT DETAILS</button>     // clicking this button
    <ul class="ticket">...</ul>         // will show this ticket
</li>
// and the same jQuery that shows details when button is clicked:
$(document).ready(function() {
    alert($("button").length);
    $(".confirmation").on('click', 'button', function() {
        $(this).closest('.confirmation').find('.ticket').slideDown();
    });
});

// the above jQuery will show details when clicked but we also want to show details if mouse 
// hovers over an element:
$(document).ready(function() {
    alert($("button").length);
    $(".confirmation").on('click', 'button', function() {
        $(this).closest('.confirmation').find('.ticket').slideDown();
    });
    $(".confirmation").on("?", "h3", function() {
        $(this).closest(".confirmation").find(".ticket").slideDown();
    });
});

// the ? above can be many different mouse events such as click, focusin, mousedown, mousemove,
// mouseover, mouseenter, dblclick, focusout, mouseup, mouseout, mouseleave. 
// we'll use mouseenter which fires when the mouse is first positioned over the element:
$(document).ready(function() {
    alert($("button").length);
    $(".confirmation").on('click', 'button', function() {
        $(this).closest('.confirmation').find('.ticket').slideDown();
    });
    $(".confirmation").on("mouseenter", "h3", function() {      // show ticket when mouse over h3
        $(this).closest(".confirmation").find(".ticket").slideDown();
    });
});



// you may have noticed that there is some redundancy in the above jQuery. there are 2 instances
// where the same line is used and so we can refactor the above jQuery by extracting out
// and naming our event handler like so:
function showTicket() {
    $(this).closest(".confirmation").find(".ticket").slideDown();
}
$(document).ready(function() {
    $(".confirmation").on("click", "button", showTicket);
    $(".confirmation").on("mouseenter", "h3", showTicket);
});
// it's important not to add () to showTicket function which would execute the function
// immediately as opposed to executing when button is clicked or h3 is hovered over by the mouse.










// eg of concept above using html below:
<div id="tour">
  <h2>Paris, France Tour</h2>
  <p>$2,499 for 7 Nights</p>
  <button>See photos from our last tour</button>
  <ul class="photos">
    <li>
      <img src="/assets/photos/paris1.jpg">
      <span>Arc de Triomphe</span>
    </li>
    <li>
      <img src="/assets/photos/paris2.jpg">
      <span>The Eiffel Tower</span>
    </li>
    <li>
      <img src="/assets/photos/paris3.jpg">
      <span>Notre Dame de Paris</span>
    </li>
  </ul>
</div>

// our tour page is going great but let's add a bit more behavior to the page by writing an event
// handler that watches for mouseenter on any li elements within our .photos elements and runs
// an empty function. we'll implement the function later on:
$(document).ready(function() {
  $("#tour").on("click", "button", function() { 
    $(".photos").slideToggle();
  });
  $(".photos").on("mouseenter", "li", function() {
    ...
  });
});



// in our new mouseenter event handler, call slideToggle() on the span tag within the picture 
// description. you'll need to traverse down from the current element, the li, and find span tag:
$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $(".photos").slideToggle();
  });
  $(".photos").on("mouseenter", "li", function() {
    $(this).find("span").slideToggle();
  });
});



// when the mouse leaves the li element, we'll want to hide the description of the photo as well.
// write another event handler that targets the same elements but calls slideToggle() only
// on the mouseleave event:
$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $(".photos").slideToggle();
  });
  $(".photos").on("mouseenter", "li", function() {
    $(this).find("span").slideToggle();
  });
  $(".photos").on("mouseleave", "li", function() {
    $(this).find("span").slideToggle();
  });
});



// it looks like both our event handler on .photos li elements are exactly the same. let's go ahead
// and refactor these into a new function named showPhotos and change our event handlers to 
// reference that instead:
$(document).ready(function() {
    $("#tour").on("click", "button", function() {
        $(".photos").slideToggle();
    });
    function showPhotos() {
        $(this).find("span").slideToggle();
    }
    $(".photos").on("mouseenter", "li", showPhotos);
    $(".photos").on("mouseenter", "li", showPhotos);
});
























// say you have a input form under a vacations package which asks for the # of nights staying.
// underneath, we have a total figure that we would like to update as soon as we finish entering
// the # of nights. below is the html:
<div class='vacation' data-price='399.99'>
    <h3>Hawaiian Vacation</h3>
    <p>$399.99 per ticket</p>
    <p>
        Tickets:
        <input type='number' class='quantity' value'1' />   // when this updates
    </p>
</div>
<p>Total Price: $<span id='total'>399.99</span></p>     // we'll update the calculated price here

// using keyboard events, achieve above results. 
// keyboard events: 'keypress', 'keydown', 'keyup'
// form events: 'blur', 'select', 'change', 'focus', 'submit'
// we'll be using the keyup which listens for a key finishing being pressed - so after it's pressed
$(document).ready(function() {
    $('.vacation').on('keyup', '.quantity', function() {
        var price = +$(this).closest('.vacation').data('price');
        var quantity = +$(this).val();
        $('#total').text(price * quantity);
    });
});
// the + is used to make the value returned from the input into a number (converts string to number)





// eg of concept above using html below:
<div class="tour" data-daily-price="357">
  <h2>Paris, France Tour</h2>
  <p>$<span id="total">2,499</span> for <span id="nights-count">7</span> Nights</p>
  <p>
    <label for="nights">Number of Nights</label>
  </p>
  <p>
    <input type="number" id="nights" value="7">
  </p>
</div>

// now we'll allow travelers to specify how many days they want their vacation to be. write an
// event handler that will fire whenever the value within the keyup event is triggered on the #nights
// form field. the function can be empty for now:
$(document).ready(function() {
    $('.tour').on('keyup', '#nights', function() {
        ...
    });
});


// within our event handler, update the number of nights in the #nights-count element to whatever 
// the traveler entered in the #nights form field:
$(document).ready(function() {
    $('#nights').on('keyup', function() {
        $('#nights-count').text($(this).val());
    });
});


// now set the content of the #total element to the number the traveler has entered into the form
// field multiplied by the daily price:
$(document).ready(function() {
    $('#nights').on('keyup', function() {
        var nights = +$(this).val();
        var dailyPrice = +$(this).closest('.tour').data('daily-price');
        $('total').text(nights * dailyPrice);
        $('#nights-count').text($(this).val());
    });
});


// let's write another event handler for the form field that will be run when the focus event is
// triggered. when this occurs, set the number of nights to 7:
$(document).ready(function() {
    $('#nights').on('keyup', function() {
        var nights = +$(this).val();
        var dailyPrice = +$(this).closest('.tour').data('daily-price');
        $('total').text(nights * dailyPrice);
        $('#nights-count').text($(this).val());
    });
    $('#nights').on('focus', function() {
        $('#nights').val(7);
    });
});



















// now we have multiple vacation packages and also have a show comments button when clicked, should
// fade in some comments about that package.  using html below, achieve this:
<ul>                                
    <li class='vacation'>
        <a class='expand'>
            -show comments          // when this link is clicked
        <ul class="comments">       // will show these comments
            <li>
            <li>

// since we want the comments to fade in, we'll have to hide them first in our css:
.comments {
    display: none;
}

// script.js - jQuery:
$(document).ready(function() {
    $('.vacation').on('click', '.expand', function() {
        $(this).closest('.vacation')    // traverses up DOM to closest ancestor which is .vacation
               .find('.comments')       // then traverses down DOM to find .comments
               .fadeToggle();           // and toggle fade the .comments
    });
});

// but now when we scroll down to the bottom of the page and click show comments, the page
// jumps back up to the top.  this happens bcuz in our <a> tag which is our show comments link,
// the href is a '#' and due to this, the default browser reaction to a click event will 'bubble up'
// to each parent node till it reaches the starting document element. to remedy this:
$(document).ready(function() {
    $('.vacation').on('click', '.expand',
        function(event) {
            event.preventDefault();
            $(this).closest('.vacation')
                   .find('.comments')
                   .fadeToggle();
        }
    );
});














// eg of concept above using below html:
<div id="all-tours" class="links">
  <h1>Guided Tours</h1>
  <ul>
    <li class="tour usa" data-discount="199">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <button class="book">Book Now</button>
      <a href="#" class="see-photos">See Photos</a>
      <ul class="photos">
        <li>
          <img src="/assets/photos/paris1.jpg">
          <span>Arc de Triomphe</span>
        </li>
        <li>
          <img src="/assets/photos/paris2.jpg">
          <span>The Eiffel Tower</span>
        </li>
        <li>
          <img src="/assets/photos/paris3.jpg">
          <span>Notre Dame de Paris</span>
        </li>
      </ul>
    </li>
    <li class="tour france" data-discount="99">
      <h2>Paris, France</h2>
      <span class="details">$1,499 for 5 nights</span>
      <button class="book">Book Now</button>
      <a href="#" class="see-photos">See Photos</a>
      <ul class="photos">
        <li>
          <img src="/assets/photos/paris1.jpg">
          <span>Arc de Triomphe</span>
        </li>
        <li>
          <img src="/assets/photos/paris2.jpg">
          <span>The Eiffel Tower</span>
        </li>
        <li>
          <img src="/assets/photos/paris3.jpg">
          <span>Notre Dame de Paris</span>
        </li>
      </ul>
    </li>
    <li class="tour uk" data-discount="149">
      <h2>London, UK</h2>
      <span class="details">$2,199 for 5 nights</span>
      <button class="book">Book Now</button>
      <a href="#" class="see-photos">See Photos</a>
      <ul class="photos">
        <li>
          <img src="/assets/photos/paris1.jpg">
          <span>Arc de Triomphe</span>
        </li>
        <li>
          <img src="/assets/photos/paris2.jpg">
          <span>The Eiffel Tower</span>
        </li>
        <li>
          <img src="/assets/photos/paris3.jpg">
          <span>Notre Dame de Paris</span>
        </li>
      </ul>
    </li>
  </ul>
</div>

// write an event handler that will target all links with a class of .see-photos on click:
$(document).ready(function() {
    $('.see-photos').on('click', function() {

    });
});



// when this link is clicked, show the photos for the clicked tour by traversing to it using closest
// and find then sliding it down by using slideToggle:
$(document).ready(function() {
    $('.see-photos').on('click', function() {
        $(this).closest('.tour').find('.photos').slideToggle();
    });
});



// change your event handler method to take in a link event and prevent the other event handler
// from being called:
$(document).ready(function() {
    $('.see-photos').on('click', function(event) {
        event.stopPropagation();
        $(this).closest('.tour').find('.photos').slideToggle();
    });
    $('.tour').on('click', function() {
        alert('This should not be called');
    });
});



// let's change this so that the browser doesn't jump to the top of the page when link is clicked:
$(document).ready(function() {
    $('.see-photos').on('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        $(this).closest('.tour').find('.photos').slideToggle();
    });
    $('.tour').on('click', function() {
        alert('This should not be called');
    });
});


























// Styling - Taming CSS - Animation:
// say we have the html below:
Document
div #vacations
    ul
        li .vacation
            p .price

// we have vacation packages and when the li(.vacation) is clicked, we want our p(.price) to
// show up.  there are two ways to achieve this, one is through css and the other is through js:
// using js - we want to make all .vacation(li) elements clickable.
$(document).ready(function() {
    $('#vacations').on('click', '.vacation', function() {
        $(this).css('background-color', '#252b30');
        $(this).css('border-color', '1px solid #967');
    });
});

// above js can be refactored to below:
$(this).css('background-color', '#252b30')
       .css('border-color', '1px solid #967');

// better yet, above can be refactored again to below using JS Objects:
$(this).css({'background-color': '#252b30',
             'border-color': '1px solid #967'});


// so to show the price:            highlights vacation package and shows price:  
$(document).ready(function() {
    $('#vacations').on('click', '.vacation', function() {
        $(this).css({'background-color': '#2523b0',
                     'border-color': '1px solid #967'});
        $(this).find('.price').show();
    });
});


// however, it's better to keep styling external in our CSS and so we should move the above 2
// $(this).... lines to our css stylesheet:
$(document).ready(function() {
    $('#vacations').on('click', '.vacation', function() {
        $(this).toggleClass('highlighted');
    });
});

// accompanying css below:
.highlighted {
    background-color: #563;
    border-color: #967;
}
.highlighted .price {
    display: block;
}





// eg of concept above using html below:
<div id="all-tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="tour usa">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <span class="per-night"><span class="price">$275</span>/night</span>
      <button class="book">Book Now</button>
      <ul class="photos">
        <li>
          <img src="/assets/photos/newyork1.jpg">
          <span>Notre Dame de Paris</span>
        </li>
      </ul>
    </li>
    <li class="tour france" data-discount="99">
      <h2>Paris, France</h2>
      <span class="details">$1,499 for 5 nights</span>
      <span class="per-night"><span class="price">$300</span>/night</span>
      <button class="book">Book Now</button>
      <ul class="photos">
        <li>
          <img src="/assets/photos/paris3.jpg">
          <span>Brooklyn Bridge</span>
        </li>
      </ul>
    </li>
    <li class="tour uk" data-discount="149">
      <h2>London, UK</h2>
      <span class="details">$2,199 for 5 nights</span>
      <span class="per-night"><span class="price">$440</span>/night</span>
      <button class="book">Book Now</button>
      <ul class="photos">
        <li>
          <img src="/assets/photos/london.jpg">
          <span>Tower of London</span>
        </li>
      </ul>
    </li>
  </ul>
</div>

// there are basically 3 vacation packages using our html above.
// let's try to make this page stand out more by adding an event handler that will set the 
// background-color to #252b30 using the css method whenever the mouseenter event is triggered:
$(document).ready(function() {
    $('.tour').on('mouseenter', function() {
      $(this).css({'background-color': '#252b30'});
    });
});



// let's now set the font-weight to bold as well by passing in a JS object to the css method:
$(document).ready(function() {
    $('.tour').on('mouseenter', function() {
      $(this).css({'background-color': '#252b30',
                   'font-weight': 'bold'});
    });
});



// let's see what the tour page would look like if we showed the photos on mouseenter as well.
// try using the show method here to make it visible:
$(document).ready(function() {
    $('.tour').on('mouseenter', function() {
        $(this).css({'background-color': '#252b30',
                   'font-weight': 'bold'});
        $(this).find('.photos').show();
    });
});



// we've extracted out our styles into a new css class of highlight. go ahead and add this class
// when the tour is moused over. also, add another event handler for when the mouse leaves the
// .tour element to remove this class by watching for mouseleave:
$(document).ready(function() {
    $('.tour').on('mouseenter', function() {
        $(this).addClass('highlight');
    }).on('mouseleave', function() {
        $(this).removeClass('highlight');
    });
});






















Document
div #vacations
    ul
        li .vacation
            p .price

// above is the same html from last concept and this time, we want to create jQuery that will
// jump the li when clicked on and jump back down when clicked again.
$(document).ready(function() {
    #('#vacations').on('click', '.vacation', function() {
        $(this).toggleClass('highlighted');
        if ($(this).hasClass('highlighted')) {
            $(this).animate({'top': '019px'});
        } else {
            $(this).animate({'top': '0px'});
        }
    });
});



// now our vacation package will bounce up and down. in above animate function:
// we can add another parameter  to control the speed of the animation:
// default is 400ms while 'fast' is 200ms and 'slow' is 600ms



// however, we now have styling(if/else statement) in our js which should be moved to our css file.
// below is the proper js and css:
$(document).ready(function() {
    $('#vacations').on('click', '.vacation', function() {
        $(this).toggleClass('highlighted');
    });
});

.vacation {
    -moz-transition: top 0.2s;
    -o-transition: top 0.2s;
    -webkit-transition: top 0.2s;
}
.highlighted {
    top: -10px;
}












// eg of concept above using html below:
<div id="all-tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="tour usa">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <span class="per-night"><span class="price">$275</span>/night</span>
      <button class="book">Book Now</button>
      <ul class="photos">
        <li>
          <img src="/assets/photos/newyork1.jpg">
          <span>Notre Dame de Paris</span>
        </li>
      </ul>
    </li>
    <li class="tour france" data-discount="99">
      <h2>Paris, France</h2>
      <span class="details">$1,499 for 5 nights</span>
      <span class="per-night"><span class="price">$300</span>/night</span>
      <button class="book">Book Now</button>
      <ul class="photos">
        <li>
          <img src="/assets/photos/paris3.jpg">
          <span>Brooklyn Bridge</span>
        </li>
      </ul>
    </li>
    <li class="tour uk" data-discount="149">
      <h2>London, UK</h2>
      <span class="details">$2,199 for 5 nights</span>
      <span class="per-night"><span class="price">$440</span>/night</span>
      <button class="book">Book Now</button>
      <ul class="photos">
        <li>
          <img src="/assets/photos/london.jpg">
          <span>Tower of London</span>
        </li>
      </ul>
    </li>
  </ul>
</div>

// let's continue seeing what we can do to add more flavor to our tours page. when the mouse first
// goes over the tour element, we need to show the price per night, .per-night, and to make it
// stand out. let's animate the opacity to be 1 in our event handler. this allows us to fade it in:
$(document).ready(function() {
    $('.tour').on('mouseenter', function() {
        $(this).addClass('highlight');
        $(this).find('.per-night').animate({'opacity': '1'});
    });
    $('.tour').on('mouseleave', function() {
        $(this).removeClass('highlight');
    });
});



// the price per night will now fade, but let's make it move a little as well. we can't use slideDown
// for this with our animate call. when the mouseenter event is triggered, animate the top property
// to -14px in order to move it up a bit:
$(document).ready(function() {
    $('.tour').on('mouseenter', function() {
        $(this).addClass('highlight');
        $(this).find('.per-night').animate({'opacity': '1', 'top': '-14px'});
    });
    $('.tour').on('mouseleave', function() {
        $(this).removeClass('highlight');
    });
});



// this animation lacks the pop we're looking for. let's speed it up to run in 200ms using fast:
$(document).ready(function() {
    $('.tour').on('mouseenter', function() {
        $(this).addClass('highlight');
        $(this).find('.per-night').animate({'opacity': '1', 'top': '-14px'}, 'fast');
    });
    $('.tour').on('mouseleave', function() {
        $(this).removeClass('highlight');
    });
});



// let's update our mouseleave handler to remove the price per night with a little style. animate
// the price to a top of 0 and an opacity of 0 when the mouse leaves the .tour element
// and make it happen with a fast duration:
$(document).ready(function() {
    $('.tour').on('mouseenter', function() {
        $(this).addClass('highlight');
        $(this).find('.per-night').animate({'opacity': '1', 'top': '-14px'}, 'fast');
    });
    $('.tour').on('mouseleave', function() {
        $(this).removeClass('highlight');
        $(this).find('.per-night').animate({'opacity': '0', 'top': '0'}, 'fast');
    });
});















