!function(e,t,n){var o,c=e.getElementsByTagName(t)[0]
e.getElementById(n)||(o=e.createElement(t),o.id=n,o.src="//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.8&appId=1427665520889672",c.parentNode.insertBefore(o,c))}(document,"script","facebook-jssdk"),function(e,t,n,o,c,r,l){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,r=t.createElement(n),l=t.getElementsByTagName(n)[0],r.async=1,r.src="https://www.google-analytics.com/analytics.js",l.parentNode.insertBefore(r,l)}(window,document,"script",0,"ga"),ga("create","UA-89403583-1","auto"),ga("send","pageview")
const shortUrl="http://goo.gl/wWmHqc",url="https://www.googleapis.com/urlshortener/v1/url?shortUrl="+shortUrl+"&projection=ANALYTICS_CLICKS&key=AIzaSyA2LEe0I77m4pbloQXce357njClj-Akllk"
fetch(url).then(function(e){return e.json()}).then(function(e){const t=e.analytics.allTime.longUrlClicks
document.querySelector("#download-count").innerText="Lượt tải: "+t})
