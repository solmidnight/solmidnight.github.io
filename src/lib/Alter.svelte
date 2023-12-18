<div id="outer-container">
    <div class="flex-pad"/>
    <div id="data-container">
        <a class="back" href="/">⬅️ Home</a>
        <h1><slot name="name"></slot></h1>
        <div class="image-container">
            <slot name="image"></slot>
        </div>
        <span class="vertical-padding"/>
        <div id="info-container">
            <div id="inner-container">
                <h2>Role</h2>
                <p><slot name="role"></slot></p>
            </div>
        </div>
        <div id="info-container">
            <div id="inner-container">
                <h2>Age</h2>
                <p><slot name="age"></slot></p>
            </div>
        </div>
        <div id="info-container">
            <div id="inner-container">
                <h2>Gender</h2>
                <p><slot name="gender"></slot></p>
            </div>
        </div>
        <div id="info-container">
            <div id="inner-container">
                <h2>Pronouns</h2>
                <p><slot name="pronouns"></slot></p>
            </div>
        </div>
        <div id="info-container">
            <div id="inner-container">
                <h2>Sexuality</h2>
                <p><slot name="sexuality"></slot></p>
            </div>
        </div>
        <h2>Favorites</h2>
        <h3>Color</h3>
        <div class="image-container" style="height: 100px">
            <slot name="color"></slot>
        </div>
        <div id="info-container">
            <div id="inner-container">
                <h3>Song</h3>
                <p><slot name="song"></slot></p>
            </div>
        </div>
        <div id="info-container">
            <div id="inner-container">
                <h3>Food</h3>
                <p><slot name="food"></slot></p>
            </div>
        </div>
        <div id="info-container">
            <div id="inner-container">
                <h2>Description</h2>
                <p><slot name="description"></slot></p>
            </div>
        </div>
        <div class="flex-pad"/>
    </div>
    <div class="flex-pad"/>
</div>

<style>
    #outer-container {
        min-height: 100%;
        width: 100%;
        height: auto;
        justify-content: center;
        flex-direction: row;
        display: flex;
        flex-grow: 1;
    }
    .flex-pad {
        flex-grow: 1;
    }
    #outer-container :global(a) {
        text-decoration: none;
        font-family: Monsterrat;
        color: white;
        font-size: 30px;
        line-height: 30px;
    }
    #outer-container :global(h1) {
        font-family: Monsterrat;
        color: white;
        font-size: 100px;
        line-height: 100px;
    }
    #outer-container :global(h2) {
        width: 100%;
        text-align: center;
        font-family: Monsterrat;
        color: white;
        font-size: 50px;
        line-height: 50px;
        margin-top: 10px;
        margin-bottom: 0px;
    }
    #outer-container :global(h3) {
        width: 100%;
        text-align: center;
        font-family: Monsterrat;
        color: white;
        font-size: 25px;
        line-height: 25px;
    }
    #outer-container :global(p) {
        width: 100%;
        text-align: center;
        font-family: Monsterrat;
        color: white;
        font-size: 25px;
        line-height: 25px;
    }
    #outer-container :global(img) {
        width: 100%;
    }
    .vertical-padding {
        width: 100%;
        padding-top: 50px;
    }
    #data-container {
        min-height: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-radius: 50px;
        border: 4px solid white;
        max-width: 600px;
        width: 100%;
        padding-bottom: 50px;
        padding-left: 5px;
        padding-right: 5px;
    }
    #info-container {
        width: 100%;
    }
    .image-container {
        width: 100px;
        border-radius: 1000px;
        overflow:hidden;
        display: flex;
        border: 4px solid white;
    }
    #image-container :global(img) {
        width: 100%;
        object-fit: contain;
    }

</style>