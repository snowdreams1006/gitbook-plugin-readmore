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
                <script src="https://blog.snowdreams1006.cn/assets/js/readmore.js" type="text/javascript"></script>
                <script>
                    var btw = new BTWPlugin();
                    btw.init(${JSON.stringify(readmoreConfig)});
                </script>
                `;
                page.content = str;
            }

            return page;
        }
    }
};