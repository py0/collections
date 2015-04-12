# Ruby Notes



# if you want to preview code from github.com, just prepend http://htmlpreview.github.com/?
# to the html file in github. an example can be found below:
# http://htmlpreview.github.io/?https://github.com/py0/jquery-project/blob/master/index.html



=begin
we just learned HTML/CSS/JS which are all front-end related languages:
HTML is for a markup language, css is for presentation(styling) and js is for scripting

the front-end languages lie within the browser so you won't have to download those languages.
however, with back-end or server side languages, they must be downloaded.

the backend usually consists of three parts: a server, an application and a database.
if you book a flight or buy concert tickets, you open a website and interact with the front
end. once you've entered that info, the application stores it in a database that was created
on a server.
=end


"pyO".reverse		# output: "Oyp" - reverse method called on a string
"pyO".length		# returns the length of given string


17.reverse		# will return an error since reverse method doesn't take numbers. however, you can do:
17.to_s.reverse
# you can convert anything to anything:
to_s	# converts values to strings
to_i	# converts values to integers
to_a 	# converts values to arrays
to_f  # converts values to floating point integers or floats 


[12, 47, 35].max       # will return the max of the values in the array
ticket = [12, 47, 35]
ticket.sort!	# sorts the array - ! directly modifies the original array 


poem = 'xxx xxxxx xxxxx xxxx xxx kkkk lll oo ppppppppp'
poem['xxx'] = 'yyy'			# turns first instance of xxx to yyy
poem.reverse!				# reverses the string, letter by letter
poem.lines.to_a.reverses	# reverses the string, line by line - splits poem up by lines into array
# lines targets lines but you can also use bytes and chars
print poem.lines.to_a.reverse.join		# joins the array of lines into one string and prints 
# for above line, you can also turn an array into a string with to_s
poem.include? "lll"			# returns true since 'lll' is in the poem string 


# [] is an array while {} is a hash or dictionary
# when you need to use a variable word over and over, use a symbol:
# eg of symbol -> :symbol     much cheaper on memory than a string 

# when working with arrays, the order is kept/important but not so with hashes which can be returned
# in any order.

# for hashes:
h.keys			# will return the keys in the hash, h
h.values		# will return the values in the hash, h

# you can build a new hash using a constructor:
ratings = Hash.new(0)		# creates an empty hash called ratings with 0 as default rating


# blocks are always attached to methods

Dir.entries "/"		# lists out everything in top directory or root directory:
# is indicated by a single / in string parameter. 

Dir['/*.txt']	# says to ruby:
# i am looking for any files which end with .txt. the asterisk indicates the 'any file' part.
















# Ruby is an interpreted language which means it can't run on your processor directly, it has to be
# fed into a middleman called a virtual machine(VM). if you use an rb file/cli - ruby file.rb in CLI,
# you're actually loading the ruby vm which in turn loads your rb file. 
# second way is to use IRB - type irb into command prompt (cli) but this is best used for very 
# simple tasks.

# variables in ruby don't run left to right.  for example:
> a = 5 + 10
    => 15
> a
	=> 15
# above, the right side is evaluated first when you declare a, so 15 is returned.

# other languages might use camelCase for variable names but in ruby, the convention is snake case:
camel_case = 'snake case'
# convention also has it so that variables names aren't abbreviated and the name indicates the
# meaning of its content as opposed to the type of data is stored in it. 










								
a = "Hello Everyone!"
b = "one,two,three,four"
a[0..4] 		# => "Hello"		.. is inclusive and ... is excluding the upper bound (4)
a.length 		# => 15
a.split			# => ['Hello', 'Everyone!']   - cuts string wherever there is " " and returns array
b.split(',') 	# => ['one', 'two', 'three', 'four']	- cuts at ',' 
b.split 		# => ['one,two,three,four']	  - no space to cut at so whole string is returned
a.gsub('Everyone!', 'Friends!')		# => "Hello Friends!"	- global substitute    -.sub is substitute


# 2 ways to combine a variable with a string: string concatenation and string interpolation:
# 1 - String concatenation - simplest: 
name = "frank"
puts "Good morning, " + name + "!"		# => "Good morning, frank!"
# 2 - String Interpolation - only works on double quoted strings:
puts "Good morning, #{name}!"			# => "Good morning, frank!"
	# you can put any ruby code when using interpolation:
	modifier = "very "
	mood = "excited"
	puts "I am #{modifier * 3 + mood} for today's class!"	#=> "i am very very very excited for..."




# symbols are halfway between a string and a number. think of them as a stripped down string with
# barely any methods and no string interpolation:
"hello".methods.count	#=> 164 methods
:hello.methods.count	#=> 78 methods
# experienced programmers should think of symbols as a named integer. it doesn't matter what actual
# value the symbol references. all we care about is that any reference to that value within the VM
# will give back the same value. symbols are thus defined in a global symbol table and their
# value cannot change. 





# you can see all the methods available to an integer like so:
5.methods




# in something like javascript, using a for loop looks like this:
for (var i = 0; i < 5; i++) {
	console.log("Hello, world!");
}
# but ruby makes it simpler using the .times method:
5.times { puts "Hello, world!"}		# {} can be replaced with do end:
5.times do
	puts "Hello, world!"
end

# blocks are parameters passed into method calls - 5.times above wouldn't know what to do without 
# a block accompanying it which is the puts statement.  

"this is a sentence".gsub("e"){ puts "Found an E!"}
Found an E!
Found an E!
Found an E!
=> "this is a sntnc"
# found an e! came up 3 times since there are three e's in the string.


# blocks need a reference value sometimes put between pipe characters:
5.times { |i| puts "#{i}: Hello, world!" } 
# i would take on the number of each iteration - so 5 puts statements would print 0-4



"this is a sentence".gsub("e"){|letter| letter.upcase}
# => "this is a sEntEncE" 







meals = ["Breakfast", "Lunch", "Dinner"]
	=> ["Breakfast", "Lunch", "Dinner"]
meals << "Dessert"			# dessert is added to end of array using the shovel operator (<<)
	=> ["Breakfast", "Lunch", "Dinner", "Dessert"]
meals[2]
	=> "Dinner"
meals.last			# convenience method allowed in ruby
	=> "Dessert"






# arrays are used whenever we need a list where the elements need to be in a specific order:
# some common array methods: .sort will return an array sorted alphabetically or ascending numerically
# .sort for sorting
# .each for iterating through each value
# .join to mash the values all into one string 
# .index to find the position of a certain element
# .include? to see if an array contains a certain element - returns boolean value 
# .collect, .first/.last, .shuffle








# hashes are an unordered collection of key/value pairs of data:
produce = {"apples" => 3, "oranges" => 1, "carrots" => 12}	# keys are paired to values /w hash rocket
puts "There are #{produce['oranges']} oranges in the fridge."
	=> "There are 1 oranges in the fridge."

produce["grapes"] = 221		# adding a new key/value pair
produce
produce["oranges"] = 6		# oranges already exist in hash so it updates the existing value 
produce
produce.keys
produce.values
# produce.keys will return array of all keys in the produce hash
# produce.values will return array of all values in the produce hash



# symbols are commonly used as hash keys since hash keys can't repeat and when symbols are used as 
# hash keys, the syntax gets simpler - no need for the rocket:
produce = {apples: 3, oranges: 1, carrots: 12}
puts "There are #{produce[:oranges]} oranges in the fridge."
	#=>  'There are 1 oranges in the fridge'















# every ruby object has a .nil? method which returns true only if the object is nil. 
# arrays have a .include? method which returns true if the array includes the specificied element 
# ruby convention states that methods which return boolean values should have a name ending in a ?



# example of conditional branching using if/elsif/else:
def water_status(minutes)
  if minutes < 7
    puts "The water is not boiling yet."
  elsif minutes == 7
    puts "It's just barely boiling"
  elsif minutes == 8
    puts "It's boiling!"
  else
    puts "Hot! Hot! Hot!"
  end
end
# water_status(5) returns 'the water is not boiling yet.'
# water_status(7) returns 'it's just barely boiling'
# water_status(8) returns 'it's boiling!'
# water_status(9) returns 'hot! hot! hot!'
# every condition is evaluated in order until one returns true after which the appropriate block 
# will run. ie - if the if is true, all elsif/else will be ignored.
# you can combine conditional statements using logical operators. the two common are:
# logical and - &&  
# logical or - ||
# logical not - !

# if you have 3 eggs and eat all 3, you have 0 eggs which is not nothing (nil).
# if you have a string 'hello' and delete all the letters, you are left with an empty string ""
# which is still not nil.  nil is ruby's idea of nothingness. it's encountered when you ask for
# something that doesn't exist. an example using arrays would be:
array_one = [1,2,3]
puts array_one[5] 	# would return nil since there is nothing in the 5th index of array_one


# all the things we interact with in the VM are objects in ruby and each piece of data is an object.
# objects hold information, called attributes, and they perform actions called methods.







# In Object-Oriented programming we define classes, which are abstract descriptions of a category 
# or type of thing. It defines what attributes and methods all objects of that type have.
# For example, let’s think about modeling a school. We’d likely create a class named Student that 
# represents the abstract idea of a student. The Student class would define attributes like 
# first_name, last_name, and primary_phone_number. It could define a method introduction that causes 
# the student to introduce themself.
class Student
  attr_accessor :first_name, :last_name, :primary_phone_number

  def introduction
    puts "Hi, I'm #{first_name}!"
  end
end
# 3 attributes are set above: :first_name, :last_name etc.... 
# below we create an instance of above Student class:
frank = Student.new 	# now we can use the intro method in Student class above
frank.first_name = "Frank"	# setting new instance's :first_name to "Frank"
frank.introduction		#=> "Hi, I'm Frank!"


# we can change the above method to include a target greeting:
class Student
  attr_accessor :first_name, :last_name, :primary_phone_number

  def introduction(target)
    puts "Hi #{target}, I'm #{first_name}!"
  end
end
frank = Student.new
frank.first_name = "Frank"
frank.introduction('Katrina')	#=> "Hi Katrina, I'm Frank!"


# below we added another method to above class:
class Student
  attr_accessor :first_name, :last_name, :primary_phone_number

  def introduction(target)
    puts "Hi #{target}, I'm #{first_name}!"
  end

  def favorite_number
    7
  end
end
frank = Student.new
frank.first_name = "Frank"
puts "Frank's favorite number is #{frank.favorite_number}."		#=> "Frank's favorite number is 7."


































# ruby notes 2:
# just like puts is short for put string; gets is short for get string:
puts gets     #=> will output whatever you enter as input so basically an echo

puts 'Hello there, and what\'s your name?'
name = gets
puts 'Your name is ' + name + '?  What a lovely name!'
puts 'Pleased to meet you, ' + name + '.  :)'
# above code will be execute to below:
# Hello there, and what's your name?
# Chris
# Your name is Chris
# ?  What a lovely name!
# Pleased to meet you, Chris
# .  :)

# it looks like when I typed in the letters C, h, r, i, s, and then pressed Enter, gets got all of 
# the letters in my name and the Enter! Fortunately, there's a method just for this sort of thing:  
# chomp. It takes off any Enters hanging out at the end of your string.


# some more string methods:
# .upcase     .downcase     .capitalize     .swapcase (switches original casing of each word)
# .center can be used on string to center the string but you must enter a width parameter:
puts "What the hell is centering?".center(50)   

# two more string methods related to .center() are:
# .ljust and .rjust for left justify and right justify, respectively:
lineWidth = 40
str = '--> text <--'
puts str.ljust  lineWidth
puts str.center lineWidth
puts str.rjust  lineWidth
puts str.ljust(lineWidth/2) + str.rjust(lineWidth/2)

#=> of above code is below:
--> text <--                            
              --> text <--              
                            --> text <--
--> text <--                --> text <--











# there aren't many number methods but all of the arithmetic operators(+ - / * ** %) are methods
# another number method is the .abs method which returns the absolute value:
puts (2-5).abs      #=> 3




# ruby comes with a random number generating method, rand(), which gives back a float from 0.0 - 1.0.
# if you provide rand method an integer(5 for example), it will give you an integer greater than or 
# equal to 0 and less than 5 (so five possible numbers, from 0 to 4):
puts rand         #=> 0.48172
puts rand         #=> 0.391872
puts rand         #=> 0.871293
puts(rand(100))   #=> 67
puts(rand(100))   #=> 44
puts(rand(100))   #=> 17
puts(rand(1))     #=> 0
puts(rand(1))     #=> 0
puts(rand(1))     #=> 0
puts(rand(99999999999999999999999999999999999999999999999999999999999))       #=> 5217379239172731...

# below code => The weatherman said there is a 60% chance of rain,
puts('The weatherman said there is a '+rand(101).to_s+'% chance of rain,')    
# notice from above output that we used rand(101) to get back numbers from 0 to 100 and rand(1) 
# returns 0 which is all bcuz the rand number returned is an int which was rounded down from a float.



# Sometimes you might want rand to return the same random numbers in the same sequence on two different
# runs of your program. (For example, once I was using randomly generated numbers to create a randomly
# generated world for a computer game. If I found a world that I really liked, perhaps I would want 
# to play on it again, or send it to a friend.) In order to do this, you need to set the seed, which 
# you can do with srand. Like this:
srand 1776
puts(rand(100))       #=> 24
puts(rand(100))       #=> 35
puts(rand(100))       #=> 36
puts(rand(100))       #=> 58
puts(rand(100))       #=> 70
puts ''
srand 1776
puts(rand(100))       #=> 24
puts(rand(100))       #=> 35
puts(rand(100))       #=> 36
puts(rand(100))       #=> 58
puts(rand(100))       #=> 70
# every time you use the same seed (srand value), the same values will be returned. if you want to get
# different numbers again (like when you don't use srand), then just call srand 0.









# now let's look at some Math objects:
puts(Math::PI)                    #=> 3.141592653589793
puts(Math::E)                     #=> 2.718281828459045
puts(Math.cos(Math::PI/3))        #=> 0.5000000000000001
puts(Math.tan(Math::PI/4))        #=> 0.9999999999999999
puts(Math.log(Math::E**2))        #=> 2.0
puts((1 + Math.sqrt(5))/2)        #=> 1.618033988749895
# the :: notation is called a scope operator. 











# if you get stuck in an infinite loop, press ctrl + c 

# below is an example of a while loop program:
# Write a Deaf Grandma program. Whatever you say to grandma (whatever you type in), she should respond 
# with  HUH?!  SPEAK UP, SONNY!, unless you shout it (type in all capitals). If you shout, she can 
# hear you (or at least she thinks so) and yells back, NO, NOT SINCE 1938! To make your program really
# believable, have grandma shout a different year each time; maybe any year at random between 1930 
# and 1950. You can't stop talking to grandma until you shout BYE:
puts "What do you have to say or ask to grandma?"
say = 'hi, grandma'
while say != 'BYE'
  say = gets.chomp
  while say != say.upcase
    puts 'HUH? SPEAK UP SONNY!'
    say = gets.chomp
  end
  year = rand(21) + 1930              # in order to get a random year between 1930-1950
  puts 'NO, NOT SINCE ' + year.to_s
end














# array iterators like .each method always start with do and finish with end or {}

# integer methods also use do/end or {/} like the .times iterator:
3.times do
  puts 'Hip-Hip-Hooray!'
end
# above code can be written using {}'s instead of do end:
3.times { puts 'Hip-Hop-Hooray!' }


# below are some examples of array methods:
foods = ['artichoke', 'brioche', 'caramel']
puts foods              #=> artichoke \n brioche \n caramel
puts          
puts foods.to_s         #=> ["artichoke", "brioche", "caramel"]
puts
puts foods.join(', ')   #=> artichoke, brioche, caramel
puts
puts foods.join('  :)  ') + '  8)'  #=> artichoke    :)    brioche    :)    caramel    8)


# now let's look at push, pop and last array methods. push/pop are sort of opposites:
# push adds an object to the end of an array while pop removes the last object. 
# last tells you what the last object is in an array:
favorites = []
favorites.push 'raindrops on roses'
favorites.push 'whiskey on kittens'
puts favorites[0]         #=> raindrops on roses
puts favorites.last       #=> whiskey on kittens
puts favorites.length     #=> 2
puts favorites.pop        #=> whiskey on kittens
puts favorites            #=> raindrops on roses
puts favorites.length     #=> 1
















# below is an example of a method with a parameter:
def sayMoo numberOfMoos
  puts 'mooooooo...' * numberOfMoos
end
sayMoo 3        #=> mooooooo...mooooooo...mooooooo...




# making new classes:
a = Array.new  + [12345]  # Array  addition.
b = String.new + 'hello'  # String addition.
c = Time.new
puts 'a = '+a.to_s      #=> [12345]
puts 'b = '+b.to_s      #=> hello
puts 'c = '+c.to_s      #=> 2014-09-29 13:51:46 -0700
# numbers cannot be created with Integer.new, they must be written out.


time  = Time.new   # The moment I generated this web page.
time2 = time + 60  # One minute later.
puts time           #=> 2014-09-29 13:51:46 -0700
puts time2          #=> 2014-09-29 13:52:46 -0700    ~one minute later





# working with hash class:
colorArray = []  # same as Array.new
colorHash  = {}  # same as Hash.new

colorArray[0]         = 'red'
colorArray[1]         = 'green'
colorArray[2]         = 'blue'
colorHash['strings']  = 'red'
colorHash['numbers']  = 'green'
colorHash['keywords'] = 'blue'

colorArray.each do |color|
  puts color                  #=> red \n green \n blue
end
colorHash.each do |codeType, color|
  puts codeType + ':  ' + color         #=> string: red  \n  numbers: green  \n  keywords: blue
end





class Integer
  def to_eng
    if self == 5
      english = 'five'
    else
      english = 'fifty-eight'
    end

    english
  end
end
puts 5.to_eng           #=> five
puts 58.to_eng          #=> fifty-eight






# example of using classes to make a Die class:
class Die
  def roll
    1 + rand(6)         #=> returns random number between 0 and 5 (6 possible rand's for 6 sided die)
  end                   #=> and then adds 1 to make rand possiblities from 1-6 (more intuitive)
end                     #=> than 0-5
dice = [Die.new, Die.new]
dice.each { |die| puts die.roll }       #=> 4   \n    2



# below code is in relation to the above code but with instance variables:
class Die
  def roll
    @numberShowing = 1 + rand(6)
  end
  def showing
    @numberShowing
  end
end
die = Die.new
die.roll                    #=> rolls the die
puts die.showing            #=> shows outcome of above roll method   output: 6
puts die.showing            #=> 6
die.roll                    #=> rerolls die
puts die.showing            #=> 4
puts die.showing            #=> 4



# die must be rolled before showing....if you just try and show without rolling, you'll get nil.
# you can use the initialize method to have the die rolled as soon as object is created:
class Die
  def initialize
    roll
  end
  def roll
    @numberShowing = 1 + rand(6)
  end
  def showing
    @numberShowing
  end
end
puts Die.new.showing          #=> 3

# if a class is set up with an initliaze method, that method will be called when an object is created.







# procs have the ability to take a block of code (code in between do and end), wrap it up 
# in an object (called a proc), store it in a variable or pass it to a method, and run the code in the 
# block whenever you feel like (more than once, if you want). So it's kind of like a method itself, 
# except that it isn't bound to an object (it is an object), and you can store it or pass it around 
# like you can with any object. I think it's example time:
toast = Proc.new do
  puts 'Cheers!'
end
toast.call          #=> Cheers!


# procs can also take parameters like methods:
doYouLike = Proc.new do |aGoodThing|
  puts 'I *really* like ' + aGoodThing + '!'
end
doYouLike.call 'choclate'           #=> I *really* like chocolate!
doYouLike.call 'ruby'               #=> I *really* like ruby!



# procs can also be used as a parameter to a method:
def maybeDo someProc
  if rand(2) == 0
    someProc.call
  end
end
def twiceDo someProc
  someProc.call
  someProc.call
end
wink = Proc.new do
  puts '<wink>'
end
glance = Proc.new do
  puts '<glance>'
end

maybeDo wink          #=> 1 so the method does nothing
maybeDo glance        #=> glance
twiceDo wink          #=> wink   \n   wink
twiceDo glance        #=> glance  \n  glance






























=begin
          rubymonk.com
=end
# everything in ruby is an object and to see which object you're currently in, you can use self:
self      #=> main 
# if you don't specify which object you are, main becomes the default object 



# objects interact with eachother through methods:
2.even?       #=> true
1.next        #=> 2
1.methods     #=> returns all the methods associated with the 1 object, an Integer 
1.methods.sort      #=> returns the methods method on 1 sorted alphabetically 
['rock','paper','scissors'].index('paper')      #=> 1
2.between?(1,3)       #=> true - method that checks to see if 2 is between 1 and 3
1.+(2) == 1 + 2       #=> 3 - + operator is a method and can be written as one but is avoided
# other operators that have shortcuts like + is: -, *, /, =, ==, !=, >, <, >=, <=, []:
words = ['foo', 'bar', 'baz']
words.[](1) == words[1]       #=> bar 




# string manipulation: strings are a class like Integer or Array so is capitalized - String
# string interpolation also only works on double quoted strings.
"pyO".length            #=> 3

# string interpolation not only is a placeholder but can also run blocks of code inside of the #{}:
def string_length_interpolater(incoming_string)
  "The string you just gave me has a length of #{incoming_string.length}"
end
puts string_length_interpolater("hi")     #=> The string...length of 2



# double quotes also allow for escape characters like "\n" for new line as opposed to 
# '\n' which displays the actual escape sequence to the user (\n)


# you can also check to see if a string has a certain character, word or sub-string:
"[Luke:] I can’t believe it. \n[Yoda:] That is why you fail.".include?('Yoda')      #=> true


# you can check to see if a string starts with a particular string:
"Ruby is a beautiful language".start_with?('Ruby')      #=> true

# like above, you can also check to see if a string ends with another string:
"I can't work with any other language but Ruby".end_with?('Ruby')       #=> true


# .index() was used on arrays above but can also be used for strings:
"I am a Rubyist".index('R')         #=> 7





# .split() can be used to split a string into an array using an option argument as a delimiter:
'Fear is the path to the dark side'.split(' ')        #=> splits the string on space




# string concatenation can be used two different ways:
"Ruby".concat("Monk") == "Ruby" + "Monk" 

# when you use the + to concatenate two strings, the original string is not modified as a third
# string is created. however, the << operator directly manipulates so is more memory efficient:
"Ruby".concat("Monk") == "Ruby" + "Monk" == "Ruby" << ("Monk")



# we can also search for and replace substrings within a string. below code replaces i with we:
"I should look into your problem when I get time".sub('I','We')
# .sub() only replaces the first occurrence of i


# to replace all occurrences of i to we, use .gsub():
"I should look into your problem when I get time".gsub('I','We')





# Regular Expressions or RegExs are a concise and flexible means for matching particular characters,
# words, or patterns of characters. in ruby you specify RegEx by putting it between a pair of 
# forward slashes:
'RubyMonk'.gsub(/[aeiou]/,'1')      #=> returns R1byM1nk - replaced all vowels with 1

# more practice with RegEx - replace all capital letters with 0:
'RubyMonk Is Pretty Brilliant'.gsub(/[A-Z]/, '0')    #=> 0uby0onk 0s 0retty 0rilliant



# we covered the art of finding the position of a substring in above codes but how do we handle those
# cases where we don't know what exactly we are looking for? that's where RegEx come in handy.
# the 'string'.match() method converts a pattern to a RegExp if it isn't already one and then
# invokes its match method on the target string object. below is an example of how you 
# find the characters from a string which are next to a whitespace:
'RubyMonk Is Pretty Brilliant'.match(/ ./)      #=>  I       - that is a space before I
# above match method only returns the first occurrence of whitespace. in order to find further
# matches, we pass it a second argument which specifies the position in the string to begin
# the search:
'RubyMonk Is Pretty Brilliant'.match(/ ./, 9)       #=>  P    - that is a space before P 
# the second argument above (9) tells us to start searching for whitespace starting at position 9
# which returned the whitespace + P which is the first occurrence of whitespace after position 9












# if/elsif/else construct example:
def check_digit(number)
  if number > 0
    "#{number} is positive"
  elsif number < 0
    "#{number} is negative"
  else
    "#{number} is neither negative nor positive"
  end
end
puts check_digit(1)           #=> positive
puts check_digit(0)           #=> neither negative/positive
puts check_digit(-1)          #=> negative



# unless keyword can be used in places where you want to check for a negative condition:
#               unless x    ==    if !x      :
age = 10
unless age >= 18        # == if !(age >= 18)
  puts "Sorry, you aren't old enough"
end           #=> will execute the puts since 10 is not greater than or equal to 18



# ternary operations are if-then-else constructs:
# in ruby, ? means then, and : means else
def check_digit(number)
  number > 0 ? "#{number} is positive" : "#{number} is negative"
end










# the most commonly used loop iterators are Array.each and Array.select
# eg - bell.ring will execute n times:
def ring(bell, n)
  n.times do
    bell.ring
  end
end      
ring(bell, 5)       #=> bell will ring 5 times













# arrays can be created two ways:  []  ==  Array.new 
# reverse index lookup:
[1,2,3,4,5][-5]           #=> 1 - the first item in the array   -   the last value would be -1

[1,2,3] << "woot"         #=> [1,2,3,'woot']
[1,2,3].push("woot")      #=> [1,2,3,'woot']


# .map()/.collect() can be used to transform an arrays contents according to specified rules:
[1, 2, 3, 4, 5].map { |i| i + 1 }             #=> [2,3,4,5,6]
[1, 2, 3, 4, 5].collect { |i| i + 1 }         #=> [2,3,4,5,6]


# you can filter elements of an array through .select():
[1,2,3,4,5,6].select { |i| i % 2 == 0 }       #=> [2,4,6]


# you can delete elements from an array with .delete():
[1,3,5,4,6,7].delete(5)           #=> deletes the number 5 from array
[1,2,3,4,5,6,7].delete_if { |i| i < 4 }     #=> 4,5,6,7 are deleted - deletes if item is less than 4










#                 ITERATION
# like most languages, Ruby has for loops but counter intuitively are not used much.
# belows an example which will copy all values in the source variable that are less than 4:
def array_copy(source)
  destination = []
  for number in source
    destination << number if number < 4     # only pushes number into dest if number is less than 4
  end
  return destination
end



# so for loops are fun and all but .each iterator is the defacto standard for iteration.
array = [1, 2, 3, 4, 5]
array.each do |i|
  puts i                  # prints each element in array
end

# so take the above array_copy function and use the each iterator instead of for loops:
def array_copy(source)
  destination = []
  source.each { |i| destination.push(i) if i < 4 }
  return destination
end











# iterating over a hash is the same as iterating over an array using .each(). the difference tho is
# that for iterating over hashes using .each(), you need two placeholder values - |key, value|:
restaurant_menu = { "Ramen" => 3, "Dal Makhani" => 4, "Coffee" => 2 }
restaurant_menu.each do | item, price |         
  puts "#{item}: $#{price}"                   
end

# increase the price of every menu item by 10% using a loop:
restaurant_menu.each { |k, v| restaurant_menu[k] = v * 1.1 }


# using .keys() on a hash will return an array of just the keys while using .values() on a hash 
# will return an array of just the values.



# below is example of creating a hash:
def artax
  a = [:punch, 0]
  b = [:kick, 72]
  c = [:stops_bullets_with_hands, false]
  key_value_pairs = [a, b, c]
  Hash[key_value_pairs]
end
p artax










puts 1.class      #=> Fixnum
puts "".class     #=> String
puts [].class     #=> Array 
puts 1.is_a?(Integer)       #=> true
puts 1.is_a?(String)        #=> false












# example of a class:
class Rectangle
  def initialize(length, breadth)
    @length = length
    @breadth = breadth
  end

  def perimeter
    2 * (@length + @breadth)      # instance variables - every Rect instance will have its own 
  end                             # @lenght and @breadth due to initialize method above

  def area
    @length * @breadth
  end
end













# you can use the epynomous .call method on methods stored in a variable:
next_method_object = 1.method("next")       # .method("next") == .next 
puts next_method_object.call            #=> 2 since 1.next is 2




# every method returns an object. a method with a return statement will return just that, 
# a method with no return will return the last line, and a method containing nothing will return nil.
# however, a method will end as soon as it sees a return so always use returns as the last line.
def do_nothing
end
puts do_nothing.class       #=> NilClass


def demonstrate_early_return
  return                              # nothing after a return in a method will execute
  puts "You will never see this, because we never get here."  # won't execute since after return
end
puts demonstrate_early_return.class           #=> NilClass






# Parameters can have default values too. Let's say we usually add three numbers, but occasionally 
# just add two. We can default the last parameter in the previous example to 0 if nothing is passed
# to it:
def add(a_number, another_number, yet_another_number = 0)
  a_number + another_number + yet_another_number
end
puts add(1, 2)        #=> 3
puts add(1, 2, 3)     #=> 6




# a splat operator - *, is used as a parameter in methods when you're not sure how many arguments
# you'll be using to call said method:
def add(*numbers)
  numbers.inject(0) { |sum, number| sum + number }      # .inject() used to iterate over arguments
end
puts add(1)                     #=> 1
puts add(1, 2)                  #=> 3
puts add(1, 2, 3)               #=> 6
puts add(1, 2, 3, 4)            #=> 10


# above, we used a splat operator in the parameter list but we can also use it in arguments list:
def add(a_number, another_number, yet_another_number)
  a_number + another_number + yet_another_number
end
numbers_to_add = [1, 2, 3] # Without a splat, this is just one parameter
puts add(*numbers_to_add)  # removing the splat operator will return an error




# Create a method called introduction that accepts a person's age, gender and any number of names, 
# then returns a String that introduces that person by combining all of these values to create a
# message acceptable to the tests:
def introduction(age, gender, *names)
  "Meet #{names.join(' ')}, who's #{age} and #{gender}"
end




# example of methods - create 3 methods: calculate, add, and subtract:
def add(*numbers)
  numbers.inject(0) { |sum, number| sum + number }  
end

def subtract(*numbers)
  current_result = numbers.shift
  numbers.inject(current_result) { |current_result, number| current_result - number }  
end

def calculate(*arguments)
  # if the last argument is a Hash, extract it 
  # otherwise create an empty Hash
  options = arguments[-1].is_a?(Hash) ? arguments.pop : {}
  options[:add] = true if options.empty?
  return add(*arguments) if options[:add]
  return subtract(*arguments) if options[:subtract]
end















# a lambda is a function without a name. lambdas can also be assigned to variables:
l = lambda do |string|
  if string == "try"
    return "There's no such thing" 
  else
    return "Do or do not."
  end
end
puts l.call("try")          #=> There's no such thing 


# do...end is interchangeable with { } - {} is used for one liners while the former is for multi:
increment = lambda { |n| n + 1 }    # adds 1 to whatever n is passed
puts increment.call(3)    #=> 4






# lambdas vs blocks: 
# lambdas can be stored in variables and are objects. blocks cannot be stored in variables
# and are not objects. Due to this, blocks are much faster than lambdas. 


# Ruby offers the yield() keyword to call a single lambda that has been implicitly passed
# to a method without using the parameter list. the example below has one method, one block passed
# to it outside the parameters list and with the block called using yield:
def demonstrate_block(number)
  yield(number)
end
puts demonstrate_block(1) { |number| number + 1 }       #=> 2
















# modules:
# Ruby modules allow you to create groups of methods that you can then include or mix into any 
# number of classes. Modules only hold behaviour, unlike classes, which hold both behaviour and state.
# since modules can't be instantiated, they must be included in another class which makes its 
# methods available for use in instances of that class. In order to include a module into a class,
# we use the method include which takes one parameter - the name of a Module:
module WarmUp
  def push_ups                    # both Gym/Dojo class need to WarmUp so we def it as a module
    "Phew, I need a break!"       # and just simply include them into our Gym/Dojo classes
  end                             # to avoid repition of retyping the push_ups method
end

class Gym
  include WarmUp
  
  def preacher_curls
    "I'm building my biceps."
  end
end

class Dojo
  # include WarmUp          -  commented out so show you must include if you wanna use 
  
  def tai_kyo_kyu
    "Look at my stance!"
  end
end

puts Gym.new.push_ups       #=> Phew, I need a break!
puts Dojo.new.push_ups      #=> error since WarmUp module isn't included in Dojo class 








# Module object is a superclass of Class. this means that all classes are also modules 
# and can be used as such:
module WarmUp
end
puts WarmUp.class      # Module
puts Class.superclass   # Module
puts Module.superclass  # Object




# Namespacing is a way of bundling logically related objects together. Modules serve as a convenient
# tool for this. This allows classes or modules with conflicting names to co-exist while avoiding
# collisions. Think of this as storing different files with the same names under separate directories
# in your filesystem. Modules can also hold classes. In this example, we'll try and define an Array
# class under our Perimeter module from the last lesson. Notice how it does not affect Ruby's Array
# class at all:
module Perimeter
  class Array
    def initialize
      @size = 400
    end
  end
end
our_array = Perimeter::Array.new       # only look up Array constant only in Perimeter module 
ruby_array = Array.new
p our_array.class         #=> Perimeter::Array
p ruby_array.class        #=> Array 

# above, we have these two classes alongside each other. this is possible bcuz we've namespaced
# our version of the Array class under the Perimeter module. 
# :: is a constant lookup operator that looks up the Array constant only in Perimeter module.
# if we don't namespace our Array class like above:
class Array
  def initialize
    @size = 400
  end
end
our_array = Array.new
p our_array.class       #=> Array 






# The real problem that namespacing solves is when you're loading libraries. If your program bundles
# libraries written by different authors, it is often the case that there might be classes or modules
# defined by the same name.
# assume gym and dojo libraries represent the issue mentioned above about namespacing:
class Push
  def up
    40
  end
end
require "gym" # up returns 40
gym_push = Push.new
p gym_push.up         #=> 40

class Push
  def up
    30
  end
end
require "dojo" # up returns 30
dojo_push = Push.new
p dojo_push.up        #=> 30 - not 40 since dojo lib was loaded after gym lib and that's overriden
#                         the Push class definition.
# the way to solve this problem is to wrap these classes in appropriate namespaces using modules:

# module Gym
#   class Push
#     def up
#       40
#     end
#   end
# end
require "gym"

# module Dojo
#   class Push
#     def up
#       30
#     end
#   end
# end
require "dojo"

dojo_push = Dojo::Push.new
p dojo_push.up                  #=> 30

gym_push = Gym::Push.new
p gym_push.up                   #=> 40









# you are given a library called RubyMonk. it contains a Parser module which defines a CodeParser
# class. write another class TextParser in the same namespace that parses a string and returns
# an array of capitalized alphabets:
module RubyMonk
  module Parser
    class TextParser
      def self.parse(str)
        str.upcase.split("")
      end
    end
  end
end
p RubyMonk::Parser::TextParser.parse('RubyMonk')  #=> ['R', 'U', 'B', 'Y', 'M', 'O', 'N', 'K']

















# An input/output stream is a sequence of data bytes that are accessed sequentially or randomly.
# This may seem like an abstract, high-level concept -- it is! I/O streams are used to work with
# almost everything about your computer that you can touch, see, or hear:
#     printing text to the screen
#     receiving key-press input from the keyboard
#     playing sound through speakers
#     sending and receiving data over a network
#     reading and writing files stored on disk
# All of these listed operations are considered "side-effects" in Computer Science. The touch/see/hear 
# metric doesn't seem to work for network traffic and disk activity but side-effects are not
# necessarily obvious; in these two cases, something in the world has physically changed even if you
# can't see it. Comparatively, "pure" code is code without side-effects: code which simply performs
# calculations. Of course, a "pure" program isn't very useful if it can't even print its results to
# the screen! This is where I/O streams come in. Ruby's IO class allows you to initialize these
# streams:
# open the file "new-fd" and create a file descriptor:
fd = IO.sysopen("new-fd", "w")

# create a new I/O stream using the file descriptor for "new-fd":
p IO.new(fd)

# the first argument to IO.new is fd - this is a Fixnum value we assign to an IO object. we're using
# a combo of the sysopen method with IO.new but we can also create IO objects using BasicSocket 
# and File classes that are subclasses of IO.




# a more straightforward alternative to the above approach to creating an IO object using 
# IO.sysopen and IO.new is the File class approach:
mode = "r+"
file = File.open("friend-list.txt", mode)
puts file.inspect
puts file.read
file.close


# the r+ mode means the file is opened in read and write mode as opposed to w which is write only.
# It's worth noting that there are (many!) multiple ways of opening files in Ruby. File.open also
# takes an optional block which will auto-close the file you opened once you are done with it:
what_am_i = File.open("clean-slate.txt", "w") do |file|
  file.puts "Call me Ishmael."
end

p what_am_i

File.open("clean-slate.txt", "r") {|file| puts file.read }





























# RSpec is a language written in Ruby which will help you execute broad and flexible test scripts
# to make sure your application is working correctly. RSpec is to test your back end scripts.
# front end can be tested using Jasmine which is similar to JavaScript. 