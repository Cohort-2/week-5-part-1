 why react ?

People realised its harder to do DOM manipulation the conventional way 
JQuery and other libraries came to picture but they were still difficult to use for a very big application
under the hood react converts the code to HTML CSS and JS

// Lets understand how react does it better (counter app)


some react jargon

all websites can effectively be divided into two parts (linkedin example)

state --> An object that represents the current state of the app , It represent the dynamic things in the app (things that change over time).

component --> How a dom element should render given a state . Its a re-usable snippet that changes the given state

In counter app the button is the component 
and the state is the count value 

// if i give react this two things it will take care of everything else 

A state change triggers a re-render . A re-render represents the actual DOM being manipulated when the state changes