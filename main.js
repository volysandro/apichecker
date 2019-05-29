document.addEventListener('DOMContentLoaded', (event) => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {


        document.getElementById('title').style.marginLeft = 0;
    }
    document.getElementById('checkBtn').addEventListener('click', E => {
        var url = document.getElementById('textarea1').value;
        console.log(url)

        fetch(url)
            .then(function (response) {
                console.log(response)                
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson)
                console.log(JSON.stringify(myJson, null, 2));
                document.getElementById('json').innerHTML += JSON.stringify(myJson, undefined, 2)
            });

    })
});