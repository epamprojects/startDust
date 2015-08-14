$(document).ready(function(){
    var dustJson =  DustJson,
        template = $("#dust-tmpl").html(),
        compiled = dust.compile(template, "intro"),
        compiledWrapper = $('.dust-compiled');

    dust.loadSource(compiled);

    dust.render("intro", dustJson, function(err, out) {
        console.log("out : ",out);
        console.log("err : ",err);
        compiledWrapper.append(out)
    });
})
