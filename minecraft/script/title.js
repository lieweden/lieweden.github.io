var tt = document.title;

var sx = window.setInterval(daction, 2000);

var sa = "00";
var sb = 0;

function daction() {
    document.title = "🕐 " + sb + ":" + sa + " | " + tt;
    if (sa >= 60) {
        sa = "00";
        sb++;
        document.title = "🕐 " + sb + ":" + sa + " | " + tt;

    } else if (sa < 9) {
        sa++;
        sa = "0" + sa;

    } else {
        sa++;
        sb += 0;
    }
    window.setTimeout(function() {
        document.title = "🕐 " + sb + ":" + sa + " | " + tt;
        if (sa >= 60) {
            sa = "00";
            sb++;
            document.title = "🕐 " + sb + ":" + sa + " | " + tt;

        } else if (sa < 9) {
            sa++;
            sa = "0" + sa;

        } else {
            sa++;
            sb += 0;
        }
    }, 1000);
}