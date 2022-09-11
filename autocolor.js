function adjustColor () {
    // 1. search for all .autocolor elements
    let elements = document.getElementsByClassName('autocolor')

    for (let i = 0; i<elements.length; i++) {

    // 2. extract/detect colors from pictures
    let vibrant = new Vibrant(elements[i].firstElementChild)
    let colors  = vibrant.swatches()
    console.log(colors)

    let DarkMuted = colors.DarkMuted.rgb
    let LightMuted = colors.LightMuted ? colors.LightMuted.rgb : colors.Muted.rgb
    let LightVibrant = colors.LightVibrant ? colors.LightVibrant.rgb : colors.Vibrant.rgb
   

    // 3. set styles
    elements[i].style=`
    --color-1: rgb(${DarkMuted[0]}, ${DarkMuted[1]}, ${DarkMuted[2]});
    --color-2: rgb(${LightMuted[0]}, ${LightMuted[1]}, ${LightMuted[2]});
    --color-3: rgb(${LightVibrant[0]}, ${LightVibrant[1]}, ${LightVibrant[2]});
    `
   }
}

window.onload = adjustColor