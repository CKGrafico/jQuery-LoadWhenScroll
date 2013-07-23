# customSwipe
It's simple plugin for load content when you scroll, it's diferent than other plugins because it's very simple and only 2-3Kb

## Options
 * @param {Object}   params   [All options of the plugin]
 * params.direction = Direction to Scroll
 * params.threshold = Threshold in px to do the callback

## Use

### Simple
```javascript
(function(){
	$(element).loadwhenscroll();
})();
```
### For lists example
```javascript
(function(){
	$(element).loadwhenscroll(function(){
		$(this).showLoading();
		$(this).loadContent(hideLoading);
	});
})();
```

## About
Plugin by @ CKGRafico
Website: http://www.ckgrafico.com
.
