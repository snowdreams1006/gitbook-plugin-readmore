require(['gitbook', 'jQuery'], function(gitbook, $) {
    var init = function () {
        $('title').text($('title').text() + " | 更新时间: " + new Date());
    };
    gitbook.events.bind('page.change', function() {
        init();
    });
});