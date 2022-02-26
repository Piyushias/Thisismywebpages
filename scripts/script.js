window.addEventListener('load', initEvents);

var audio;

function initEvents()
{
    audio = document.getElementById("audio");
    let ul = document.getElementById("songList");

    for(let i = 0; i < songArray.length; i++)
    {
        let li = document.createElement("li");
        let icon = document.createElement("img");

        icon.setAttribute('src', 'images/play.png');

        li.innerHTML = songArray[i].songName;
        li.appendChild(icon);
        li.className = 'list-group-item';
        ul.appendChild(li);
        li.addEventListener('click', playSong);
    }
}

function playSong(evt)
{
    let songName = evt.srcElement.innerText;
    let songUrl;

    for(let i = 0; i < songArray.length; i++)
    {
        if(songArray[i].songName == songName)
        {
            songUrl = songArray[i].songUrl;
        }
    }

    audio.src = songUrl;
    audio.play();
}