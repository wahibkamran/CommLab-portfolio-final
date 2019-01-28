var btn=document.getElementById("changeColor");
btn.addEventListener("click", changeButtonColor);


function changeButtonColor() {

document.getElementById("changeColor").style.backgroundColor = "#C0C0C0";

}

function render(data) {

    var html = "<div class='commentBox'><div class='rightPanel'><span>" + data.name + "</div><p>" + data.body + "</p></div><div class='clear'></div></div>";

    $('#container').append(html);

}

$(document).ready(function() {

    var coment = [{
        "name": "",
        "body":""
    }];

    for (var i = 0; i < coment.length; i++) {
        render(coment[i]);

    }

    $('#addComent').click(function() {
        var addObj = {
            "name": $('#name').val(),
            "body": $('#bodyText').val()
        };
        coment.push(addObj);
        for (var i = 0; i < coment.length; i++) {
            render(addObj);

        }
    });
});