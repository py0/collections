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

t1 = turtle.Turtle()
t2 = turtle.Turtle()
wn = turtle.Screen()

t1.shape('turtle')
t1.color('red')
t2.shape('turtle')
t2.color('blue')
while isInScreen(wn,t1):
    coin = random.randrange(0, 2)
    if coin == 0:
        t1.left(90)
    else:
        t1.right(90)

    t1.forward(50)
	
while isInScreen(wn,t2):
    coin = random.randrange(0, 2)
    if coin == 0:
        t2.left(90)
    else:
        t2.right(90)

    t2.forward(50)

wn.exitonclick()
