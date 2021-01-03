# Collapsible

A very simple script for collapsible elements. One element triggers (or toggles) another (or more) elements that are collapsible. 

-----------------------
## How to use

Include `collapsible.js` and `collapsible.css` and use it. With one trigger you can collapse as many elements as you want. As long as their classnames contain the value of `data-collapsible-target` on the trigger.

```HTML
<button data-collapsible-target="collapsible-one">Toggle me</button> 

<div class="collapsible-one">
    This div will be collapsed because the classname matches "data-collapsible-target"
</div>
```



## Transition time
By default, the transition from open to closed and vise versa is 0.2 seconds. You can change this by setting the css property `--collapsible-transition-time` that is scoped to the element. If you want to remove the transition from all elements use:

```CSS
[class^="collapsible"] {
    --collapsible-transition-time: 0;
}
```

## Close when clicked outside
Sometimes it can be desireable to close the collapsing element when the user clicks outside of it. This can be done by adding the attribute `data-close-on-click-outside` to the collapsing element like so: 

```HTML 
<div class="collapsible-x" data-close-on-click-outside>
    This will close when clicked outside this element
</div>
```
