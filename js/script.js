(function(d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.8&appId=1427665520889672";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        },
        i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-89403583-1', 'auto');
ga('send', 'pageview');

const shortUrl = "http://goo.gl/wWmHqc";
const url = "https://www.googleapis.com/urlshortener/v1/url?shortUrl=" + shortUrl + "&projection=ANALYTICS_CLICKS&key=AIzaSyA2LEe0I77m4pbloQXce357njClj-Akllk";
fetch(url)
    .then(function(res) { return res.json(); })
    .then(function(res) {
        const number = res.analytics.allTime.longUrlClicks;
        document.querySelector('#download-count').innerText = "Lượt tải: " + number;
    });