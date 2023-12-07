<style>
    
    .container.outer {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    .container.inner {
        width: 300px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .container .planetary-body {
        border-radius: 1000px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
        text-decoration: none;

    }   
    .container .planetary-body :global(p) {
        margin: 0;
        font-family: lemonmilk;
        color: black;
    }
</style>

<div class="outer container">
    <div class="inner container">
        <div class="planetary-body" style="background-color: white; width: 300px; min-height: 300px;">
            <p style="font-size: 5em">Sol</p>
        </div>
        <div class="planetary-body" style="background-color: grey; width: 175px; min-height: 175px;  filter: blur(20px)">
            <p style="font-size: 2em">Dominic</p>
        </div>
        <div class="planetary-body" style="background-color: yellow; width: 75px; min-height: 75px; transform: translate(60px, -30px);  filter: blur(20px)">
            <p style="font-size: 1em">Colby</p>
        </div>
        <div class="planetary-body" style="background-color: red; width: 175px; min-height: 175px;  filter: blur(20px)">
            <p style="font-size: 2em">Audrey</p>
        </div>
        <div class="planetary-body" style="background-color: pink; width: 75px; min-height: 75px; transform: translate(-60px, -30px);  filter: blur(20px)">
            <p style="font-size: 1em">Trinity</p>
        </div>
        <div class="planetary-body" style="background-color: green; width: 175px; min-height: 175px; filter: blur(20px)">
            <p style="font-size: 2em">Amp</p>
        </div>
        <a class="planetary-body" href="/alter/aurora" style="background-color: #FF5B00; width: 175px; min-height: 175px;">
            <p style="font-size: 2em">Aurora</p>
        </a>
        <p style="font-size: 1.0em; color:white; font-family: lemonmilk;">more alter info coming soon...</p>
    </div>
</div>