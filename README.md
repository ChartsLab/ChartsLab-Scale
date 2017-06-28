# ChartsLab-Scale

### What is Scale in data visualization (words from grammar of graphics) ?

The word **scale** derives from the Latin scala, or ladder. The Latin meaning is
particularly apt for graphics. The visual representation of a scale — an **axis**
with ticks — looks like a ladder. Scales are the types of functions we use to
map varsets to dimensions. At first glance, it would seem that constructing a
scale is simply a matter of selecting a range for our numbers and intervals to
mark ticks. There is more involved, however. Scales measure the contents of
a frame. They determine how we perceive the size, shape, and location of
graphics. Choosing a scale (even a default decimal interval scale) requires us
to think about what we are measuring and the meaning of our measurements.
Ultimately, that choice determines how we interpret a graphic.

![All Scales](/Images/AllScales.PNG)

## Install

```html
<script src="./Scale.js"></script>
```

## Requires

for now it's require nothing, but it's used almost in any visualization you want to use.

```js
var line = Scale
              .Domain([0,450])
              .Range([0,60])
              .Reverse()
              .Clamp(true)
              .Linear()
```

## API Reference

* [Continuous](#continuous-scales) ([Linear](#linear-scales), [Power](#power-scales), [Log](#log-scales), [Identity](#identity-scales), [Time](#time-scales))
* [Sequential](#sequential-scales)
* [Quantize](#quantize-scales)
* [Quantile](#quantile-scales)
* [Threshold](#threshold-scales)
* [Ordinal](#ordinal-scales) ([Band](#band-scales), [Point](#point-scales), [Category](#category-scales))

### Continuous Scales

Continuous scales map a continuous, quantitative input [domain](#continuous_domain) to a continuous output [range](#continuous_range). If the range is also numeric, the mapping may be [inverted](#continuous_invert). A continuous scale is not constructed directly; instead, try a [linear](#linear-scales), [power](#power-scales), [log](#log-scales), [identity](#identity-scales), [time](#time-scales) or [sequential color](#sequential-scales) scale.

<a name="_continuous" href="#_continuous">#</a> <i>continuous</i>(<i>value</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/continuous.js#L69 "Source")

Given a *value* from the [domain](#continuous_domain), returns the corresponding value from the [range](#continuous_range). If the given *value* is outside the domain, and [clamping](#continuous_clamp) is not enabled, the mapping may be extrapolated such that the returned value is outside the range. For example, to apply a position encoding:

```js
var x = Scale
          .domain([10, 130])
          .range([0, 960])
          .Linear();

x['scale'](20); // 80
x['scale'](50); // 320
```

<a name="continuous_invert" href="#continuous_invert">#</a> <i>continuous</i>.<b>invert</b>(<i>value</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/continuous.js#L88 "Source")

<a name="continuous_domain" href="#continuous_domain">#</a> <i>continuous</i>.<b>domain</b>([<i>domain</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/continuous.js#L92 "Source")

<a name="continuous_range" href="#continuous_range">#</a> <i>continuous</i>.<b>range</b>([<i>range</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/continuous.js#L96 "Source")

<a name="continuous_rangeRound" href="#continuous_rangeRound">#</a> <i>continuous</i>.<b>rangeRound</b>([<i>range</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/continuous.js#L100 "Source")


<a name="continuous_clamp" href="#continuous_clamp">#</a> <i>continuous</i>.<b>clamp</b>(<i>clamp</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/continuous.js#L104 "Source")

<a name="continuous_ticks" href="#continuous_ticks">#</a> <i>continuous</i>.<b>ticks</b>([<i>count</i>])

<a name="continuous_tickFormat" href="#continuous_tickFormat">#</a> <i>continuous</i>.<b>tickFormat</b>([<i>count</i>[, <i>specifier</i>]]) [<>](https://github.com/d3/d3-scale/blob/master/src/tickFormat.js "Source")

<a name="continuous_nice" href="#continuous_nice">#</a> <i>continuous</i>.<b>nice</b>([<i>count</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/nice.js "Source")

#### Linear Scales

<a name="scaleLinear" href="#scaleLinear">#</a> d3.<b>scaleLinear</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/linear.js "Source")

Constructs a new [continuous scale](#continuous-scales) with the unit [domain](#continuous_domain) [0, 1], the unit [range](#continuous_range) [0, 1], the [default](https://github.com/d3/d3-interpolate#interpolate) [interpolator](#continuous_interpolate) and [clamping](#continuous_clamp) disabled. Linear scales are a good default choice for continuous quantitative data because they preserve proportional differences. Each range value *y* can be expressed as a function of the domain value *x*: *y* = *mx* + *b*.

![Linear Scale](/Images/LinearScale.PNG)

#### Power Scales

![Power Scale](/Images/PowerScale.PNG)

#### Square Root Scales

![SqRoot Scale](/Images/SqRootScale.PNG)

#### Log Scales

![Log Scale](/Images/LogScale.PNG)

#### Time Scales

