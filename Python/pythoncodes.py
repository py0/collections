import turtle             # Allows us to use turtles
'''
turtle is oriented facing east (0 degrees) when first created.
creates an equilateral polygon depending on user's input.
'''
win = turtle.Screen()
pyo = turtle.Turtle()
pyocol = pyo.color(input("color?"))
pyofill = pyo.fillcolor(input("fill color?"))
sides = int(input("sides?"))
length = int(input("length of sides?"))

pyo.begin_fill()
for s in range(sides):
    pyo.forward(length)
    pyo.left(360/sides)
pyo.end_fill()
    
win.exitonclick()




def drawMulticolorSquare(t, sz):
    """Make turtle t draw a multi-colour square of sz."""
    for i in ['red','purple','hotpink','blue']:
        t.color(i)
        t.forward(sz)
        t.left(90)

wn = turtle.Screen()             # Set up the window and its attributes
wn.bgcolor("lightgreen")

tess = turtle.Turtle()           # create tess and set some attributes
tess.pensize(3)

tess.speed(10)
size = 20                        # size of the smallest square
for i in range(15):
    drawMulticolorSquare(tess, size)
    size = size + 10             # increase the size for next time
    tess.forward(10)             # move tess along a little
    tess.right(18)               # and give her some extra turn

wn.exitonclick()




"""
Creates two squares with different fill colors using a rect function
to create a square
"""
wn = turtle.Screen()
wn.bgcolor("lightgreen")

pyo = turtle.Turtle()
pyo.color("blue")
pyo.fillcolor("white")
oyp = turtle.Turtle()
oyp.color("red")
oyp.fillcolor("yellow")
oyp.left(180)

def rectangle(t, w, h):
	for moves in range(2):
		t.forward(w)
		t.left(90)
		t.forward(h)
		t.left(90)

def square(t, side):
	rectangle(t, side, side)

oyp.begin_fill()
pyo.begin_fill()
square(pyo, 50)
square(oyp, 50)
pyo.end_fill()
oyp.end_fill()

wn.mainloop()




""" draws a circle """
def drawPolygon(t, sideLength, numSides):
    turnAngle = 360 / numSides
    for i in range(numSides):
        t.forward(sideLength)
        t.right(turnAngle)

def drawCircle(anyTurtle, radius):
    circumference = 2 * 3.1415 * radius
    sideLength = circumference / 360
    drawPolygon(anyTurtle, sideLength, 360)
	
def main():
	wn = turtle.Screen()
	wheel = turtle.Turtle()
	wheel.speed(10)
	drawCircle(wheel, 20)
	wn.exitonclick()




"""draws a data chart"""
def drawBar(t, height):
    """ Get turtle t to draw one bar, of height. """
    t.begin_fill()               # start filling this shape
    if height < 0:
        t.write(str(height))
    t.left(90)
    t.forward(height)
    if height >= 0:
        t.write(str(height))
    t.right(90)
    t.forward(40)
    t.right(90)
    t.forward(height)
    t.left(90)
    t.end_fill()                 # stop filling this shape

xs = [48, -50, 200, 240, 160, 260, 220]  # here is the data
maxheight = max(xs)
minheight = min(xs)
numbars = len(xs)
border = 10

tess = turtle.Turtle()           # create tess and set some attributes
tess.color("blue")
tess.fillcolor("red")
tess.pensize(3)

wn = turtle.Screen()             # Set up the window and its attributes
wn.bgcolor("lightgreen")
if minheight > 0:
    lly = 0
else:
    lly = minheight - border

wn.setworldcoordinates(0-border, lly, 40*numbars+border, maxheight+border)


for a in xs:
    drawBar(tess, a)

wn.exitonclick()





"""draws 5 pink squares with equidistant spaces"""
def drawSquare(t, sz):
    """Get turtle t to draw a square of sz side"""

    for i in range(4):
        t.forward(sz)
        t.left(90)

wn = turtle.Screen()
wn.bgcolor("lightgreen")

alex = turtle.Turtle()
alex.color("pink")

for s in range(5):
    drawSquare(alex, 20)
    alex.penup()
    alex.forward(40)
    alex.pendown()

wn.exitonclick()




"""draws 5 concentric circles within eachother"""
def square(t, side):
    for s in range(4):
        t.forward(side)
        t.left(90)

wn = turtle.Screen()
wn.bgcolor("lightgreen")

tess = turtle.Turtle()
tess.color("pink")
tess.pensize(5)

side = 20
for sq in range(5):
    square(tess, side)
    tess.penup()
    tess.right(135)
    tess.forward(200**0.5)
    tess.pendown()
    tess.left(135)
    side += 20
	
	
	

"""draws two similar spirals next to eachother"""
def drawSpiral(t, angle):
	length = 1
	for i in range(84):
		t.forward(length)
		t.right(angle)
		length += 2

wn = turtle.Screen()
wn.bgcolor("lightgreen")

pyo = turtle.Turtle()
pyo.color("blue")

pyo.penup()
pyo.backward(110)
pyo.pendown()
drawSpiral(pyo, 90)

pyo.penup()
pyo.home()
pyo.forward(90)
pyo.pendown()
drawSpiral(pyo, 89)
	
wn.exitonclick()




"""draws a pentagram"""
wn = turtle.Screen()
pyo = turtle.Turtle()

pyo.goto(-50,0)

for i in range(5):
	pyo.forward(100)
	pyo.right(720/5)
	
wn.exitonclick()




"""builds a star using n points => n must be >= 3"""
def star(t, n):
    for i in range(n):
        t.forward(100)
        t.left(180 - 180/n)

wn = turtle.Screen()
pyo = turtle.Turtle()

star(pyo, 9)

wn.exitonclick()




"""draws a square with sprites at each corner"""
def drawSprite(t, numlegs, leglength):
   angle = 360/numlegs
   for i in range(numlegs):
      t.forward(leglength)
      t.backward(leglength)
      t.left(angle)

def drawFancySquare(t, sz, lgs, lgl):
   for i in range(4):
       t.forward(sz)
       drawSprite(t, lgs, lgl)
       t.left(90)

wn = turtle.Screen()
wn.bgcolor("lightgreen")

alex = turtle.Turtle()
drawFancySquare(alex, 100, 10, 15)

wn.exitonclick()




"""Checks to see if a triangle is a right angled triangle given 3 sides randomly"""
def is_rightangled(a, b, c):
    result = False
    if a > b and a > c:		
		# result checks to see if b**2 + c**2 == a**2 but checking for equality
		# between two float's is best done by the method below
        result = abs((b**2 + c**2) - a**2) < 0.001
    elif b > a and b > c:
        result = abs((a**2 + c**2) - b**2) < 0.001
    else:
        result = abs((a**2 + b**2) - c**2) < 0.001
    return result
	
	
	

"""A year is a leap year if it is divisible by 4, unless the year is a Century, in which case it is
only a leap year if it is divisible by 400. Write a function which takes a year as an argument
and prints a message to the screen saying whether or not that year is a leap year."""
def isLeap(year):
    if year % 100 == 0:
        return year % 400 == 0
    return year % 4 == 0
	
	
	
	
"""moves a turtle randomly until it reaches one of the screen boundaries"""
import random
import turtle

def isInScreen(w,t):
    leftBound = - w.window_width() / 2
    rightBound = w.window_width() / 2
    topBound = w.window_height() / 2
    bottomBound = -w.window_height() / 2

    turtleX = t.xcor()
    turtleY = t.ycor()

    stillIn = True
    if turtleX > rightBound or turtleX < leftBound:
        stillIn = False
    if turtleY > topBound or turtleY < bottomBound:
        stillIn = False

    return stillIn

t = turtle.Turtle()
wn = turtle.Screen()

t.shape('turtle')
while isInScreen(wn,t):
    coin = random.randrange(0, 2)
    if coin == 0:
        t.left(90)
    else:
        t.right(90)

    t.forward(50)

wn.exitonclick()




"""for loops are great for generating tabular data"""
print("n", '\t', "2**n")     #table column headings
print("---", '\t', "-----")		#'\t' is for tab like '\n' is for newline

for x in range(13):        # generate values for columns
    print(x, '\t', 2 ** x)

	
	
	
"""rgb color model"""
import image						# imports image module

p = image.Pixel(45, 76, 200)   		# 0-255 for color intensity
print(p.getRed())					# returns red intensity
p.setRed(66)						# sets the color red with 66 intensity
print(p.getRed())
p.setBlue(p.getGreen())
print(p.getGreen(), p.getBlue())

"""image codes"""
Method				Example								Explanation
------				-------								-----------
Image(filename)		img = image.Image(“cy.png”)			create an img object from cy.png
EmptyImage()		img = image.EmptyImage(100,200)		create an img object with all white pixels
getWidth()			w = img.getWidth()					return width of img in pixels
getHeight()			h = img.getHeight()					return height of img in pixels
getPixel(col,row)	p = img.getPixel(35,86)				return pixel at col 35, row 86
setPixel(col,row,p) img.setPixel(100,50,mp)				set pixel at col 100, row 50 to mp

"""example of above methods"""
import image
img = image.Image("luther.jpg")

print(img.getWidth())
print(img.getHeight())

p = img.getPixel(45, 55)
print(p.getRed(), p.getGreen(), p.getBlue())

"""showing how nested interation works"""
for i in range(5):
    for j in range(3):
        print(i, j)
# output for above code is below:
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
3 0
3 1
3 2
4 0
4 1
4 2

"""using nested iteration to process an entire img"""
Our goal with image processing is to visit each pixel. We will use an iteration to 
process each row. Within that iteration, we will use a nested iteration to process 
each column. The result is a nested iteration, similar to the one seen above, where 
the outer for loop processes the rows, from 0 up to but not including the height of 
the image. The inner for loop will process each column of a row, again from 0 up to 
but not including the width of the image.
The resulting code will look like the following. We are now free to do anything we 
wish to each pixel in the image:
for row in range(img.getHeight()):
    for col in range(img.getWidth()):
        # do something with the pixel at position (col,row)

One of the easiest image processing algorithms will create what is known as a negative
 image. A negative image simply means that each pixel will be the opposite of what it
 was originally. But what does opposite mean?
In the RGB color model, we can consider the opposite of the red component as the 
difference between the original red and 255. For example, if the original red 
component was 50, then the opposite, or negative red value would be 255-50 or 205. 
In other words, pixels with a lot of red will have negatives with little red and pixel
s with little red will have negatives with a lot. We do the same for the blue and 
green as well.

"""below is code to show the negative version of luther.png"""
import image

img = image.Image("luther.jpg")
newimg = image.EmptyImage(img.getWidth(), img.getHeight())
win = image.ImageWin()

for row in range(img.getHeight()):
    for col in range(img.getWidth()):
        p = img.getPixel(col, row)

        newred = 255 - p.getRed()
        newgreen = 255 - p.getGreen()
        newblue = 255 - p.getBlue()

        newpixel = image.Pixel(newred, newgreen, newblue)

        newimg.setPixel(col, row, newpixel)

newimg.draw(win)
win.exitonclick()




""" """