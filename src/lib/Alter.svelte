<a href="/" class="go-back">
    <p>⬅</p>
</a>
<div class="container outer">
    <div class="container image">
        <slot name="image"></slot>
    </div>
    <div class="container info">
        <div class="container basic">
            <div class="fact" style="border-right: 4px solid white;">
                <span class="title">
                    <p>Name</p>
                </span>
                <p  style="width: 100%; text-align: center;">
                    <slot name="name">

                    </slot>
                </p>
            </div>
            <div class="fact">
                <span class="title">
                    <p>Role</p>
                </span>
                <p style="width: 100%; text-align: center;">
                    <slot name="role">

                    </slot>
                </p>
            </div>
        </div>
        <div class="container basic-two">
            <div class="fact" style="border-right: 4px solid white;">
                <span class="title">
                    <p>Age</p>
                </span>
                <p style="width: 100%; text-align: center;">
                    <slot name="age">

                    </slot>
                </p>
            </div>
                <div class="fact" style="border-right: 4px solid white;">
                    <span class="title">
                        <p>Gender</p>
                    </span>
                    <p style="width: 100%; text-align: center;">
                        <slot name="gender">
    
                        </slot>
                    </p>
                </div>
                <div class="fact">
                    <span class="title">
                        <p>Sexuality</p>
                    </span>
                    <p style="width: 100%; text-align: center;">
                        <slot name="sexuality">
    
                        </slot>
                    </p>
                </div>
        </div>
        <div class="container basic-two">
            <div class="fact" style="border-right: 4px solid white;">
                <span class="title">
                    <p>Color</p>
                </span>
                <slot name="color">

                </slot>
            </div>
                <div class="fact" style="border-right: 4px solid white;">
                    <span class="title">
                        <p>Song</p>
                    </span>
                    <p style="width: 100%; text-align: center;">
                        <slot name="song">
    
                        </slot>
                    </p>
                </div>
                <div class="fact">
                    <span class="title">
                        <p>Food</p>
                    </span>
                    <p style="width: 100%; text-align: center;">
                        <slot name="food">
    
                        </slot>
                    </p>
                </div>
        </div>
        <div class="description">
            <p class="description-title">About Me</p>
            <p class="explain">
                <slot name="description"></slot>
            </p>
        </div>
    </div>
</div>

<style>
    .go-back {
        width: 100px;
        height: 100px;
        top: 20px;
        left: 20px;
        position: absolute;
        border-radius: 1000px;
        background-color: black;
        color: white;
        font-size: 6em;
        text-decoration: none;
    }
    .go-back p {
        margin: 0;
        transform: translateY(-20px) translateX(2px);
    }
    :global(div.color) {
        width: calc(100% - 3px);
        height: calc(100% - 4px);
        margin-left: 3px;
        margin-top: 4px;
    }
    .container.outer {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
    .container.outer .container.image {
        border-right: 4px solid white;
    }
    .container.image :global(img) {
        width: 100%;
        height: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        overflow: hidden;
        object-fit: cover;
    }
    .container.outer :global(p) {
        color: white;
        font-family: monsterrat;
        margin: 0px;
        font-size: 1.5em;

    }
    .container.outer .container.info {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 3fr;
    }
    :global(div).fact {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 200px calc(100% - 200px);
        line-height: 100px;
        }
    .container.basic {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 2fr;
        line-height: 100px;
        border-bottom: 4px solid white;
    }
    .container.basic-two {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        line-height: 100px;
        border-bottom: 4px solid white;
    }    
    .description {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
    }
    .description-title {
        min-width: 200px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        border-right: 4px solid white;
        border-bottom: 4px solid white;
        color: #B0B3B8 !important;
    }
    .description .explain {
        line-height: 40px;
        font-size: 2em;
        color: white;
        padding:10px;
    }
    .title {
        height: 100%;
        width: 200px;
        border-right: 4px solid white;
    }
    .title p {
        width: 100%;
        text-align: center;
        color: #B0B3B8;
    }
</style>