<style>
    
    .container.outer {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    .container.inner {
        position: relative;
        width: 300px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .container.alter {
        position: relative;
    }
    .gap {
        display: block;
        width: 100%;
        margin-top: 50px;
    }
    .friends {
        position: relative;
        height: calc(100% - 175px);
        border-left: 2px white solid;
        top: calc(-100% + 88px);
        left: -50px;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
    }
    .friends .bar.one {
        border-top: 2px white solid;
    }
    .friends h1 {
        position: absolute;
        margin: 0;
        font-family: lemonmilk;
        color: white;
        font-size: 1em;
        top: calc(50% - 0.6em);
        left: -116px;
        transform: rotate(4.71rad)
    }
    .friends .bar.two .middle {
        display: block;
        height: 50%;
        width: 100%;
        border-bottom: 2px white solid;
    }
    .friends .bar.three {
        border-bottom: 2px white solid;
    }
    .amp-aurora {
        position: relative;
        height: 37.5%;
        border-right: 2px white solid;
        top: calc(-175% + 100px);
        left: 50px;
        display: grid;
        grid-template-rows: 1fr 1fr;
    }
    .amp-aurora h1 {
        position: absolute;
        margin: 0;
        font-family: lemonmilk;
        color: white;
        font-size: 1em;
        top: calc(50% - 0.6em);
        right: -100px;
        transform: rotate(1.57rad)
    }
    .amp-aurora .bar.one {
        border-top: 2px white solid;
    }
    .amp-aurora .bar.two {
        border-bottom: 2px white solid;
    }
    .container .planetary-body {
        position: relative;
        border-radius: 1000px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        flex-direction: column;
        z-index: 10;
    }
    .container .planetary-body :global(h1) {
        margin: 0;
        font-family: lemonmilk;
        color: black;
    }   
    .container .planetary-body :global(h2) {
        margin: 0;
        font-family: lemonmilk;
        color: black;
    } 
</style>

<div class="outer container">
    <div class="inner container">
        <div class="planetary-body" style="background-color: white; width: 300px; min-height: 300px;">
            <h1 style="font-size: 5em">Sol</h1>
            <h2 style="font-size: 2em">(system)</h2>
        </div>
        <span class="gap"/>
        <div class="alter container">
            <div class="planet container">
                <a class="planetary-body" href="alter/amp" style="background-color: green; width: 175px; min-height: 175px;">
                    <h2 style="font-size: 2em">Amp</h2>
                </a>
                <span class="gap"/>
                <a class="planetary-body" href="/alter/aurora" style="background-color: #FF5B00; width: 175px; min-height: 175px;">
                    <h2 style="font-size: 2em">Aurora</h2>
                </a>
                <span class="gap"/>
                <a class="planetary-body miles" href="/alter/miles" style="background-color: black;  width: 175px; min-height: 175px;">
                    <h2 style="color: white; font-size: 2em">Miles</h2>
                </a>
            </div>
            <div class="friends">
                <h1>sub-system headmates</h1>
                <span class="bar one"/>
                <span class="bar two"><span class="middle"></span></span>
                <span class="bar three"/>
            </div>
            <div class="amp-aurora">
                <h1>in-sys relationship</h1>
                <span class="bar one"/>
                <span class="bar two"/>
            </div>
        </div>
        <span class="gap"/>
        
        <br/>
        <p style="font-size: 1.0em; color:white; font-family: lemonmilk;">more alter info coming soon...</p>
        <br/>
        <p style="font-size: 1.0em; color:white; font-family: lemonmilk;">only alters that have fronted and chosen to identify themselves on this website are listed</p>
        <br/>
        <p style="font-size: 1.0em; color:white; font-family: lemonmilk;">We find out more about the system everyday, so information is subject to drastic change.</p>
    </div>
</div>