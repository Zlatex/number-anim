# Animation of numbers on vanilla javascript

Just connect the file via `<script src="anim.js"></script>` and add `new NumberAnim(classname)` where classname is class of your text.

The text should look like this:
`<h2 class="number" data-delay="30" data-step="1" data-max="120">0</h2>`

h2 can be p,span,h1,div etc.


`data-delay` - the time after which the digit will increase by the number specified in the `data-step`.
`data-max` - maximum number (Which should be displayed at the end of the animation)
value ( 0 ) - The number at which the animation will start
