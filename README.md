# Animating numbers on pure javascript

Just connect the file via
```html 
<script src="number-anim.netlify.app/anim.js"></script>
```

and add classname '`animateNum`' to your text.

The text should look like this:
```html
<h2 class="animateNum" data-delay="30" data-step="1" data-max="120">0</h2>
```
h2 can be p, span, h1, div etc.

**`data-delay`** - the time after which the digit will increase by the number specified in the **`data-step`**.

**`data-max`** - maximum number (Which should be displayed at the end of the animation)

**value** ( 0 ) - the number from which the animation will start
