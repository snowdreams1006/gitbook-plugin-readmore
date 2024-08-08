var readmoreConfig = {};
module.exports = {
    hooks: {
        "init": function() {
            readmoreConfig = this.options.pluginsConfig.readmore;
        },
        "page": function(page) {
            if (readmoreConfig) {
                var str = `
                <div id="container">
                    ${page.content}
                </div>
                <script src="https://readmore.openwrite.cn/js/readmore-2.0.js" type="text/javascript"></script>
                <script src="https://blog.snowdreams1006.cn/assets/js/readmore.js" type="text/javascript"></script>
                <script>
                    var btw = new BTWPlugin();
                    btw.init(${JSON.stringify(readmoreConfig)});
                    (function anonymous(
                    ) {
                    debugger
                    })
                </script>
                `;

                page.content = str;
            }

            return page;
        }
    }
};