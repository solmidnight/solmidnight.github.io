<script>
    import Alter from "$lib/Alter.svelte";
    import { BODY_AGE } from "$lib/common";
</script>

<Alter>
    <span slot="image"><img  src="/amp.jpg"/></span>
    <span slot="name">Amp</span>
    <span slot="role">Reforming Persecutor, Trauma Holder</span>
    <span slot="age">{BODY_AGE}</span>
    <span slot="gender">Enby</span>
    <span slot="pronouns">they/them/theirs/it</span>
    <span slot="sexuality">Pansexual</span>
    <span slot="color" style="width: 100%; height: 100%"><div class="color" style="background-color: green; width: 100%; height: 100%;"></div></span>
    <span slot="song">Ghosts 'n' Stuff - deadmau5, Rob Swire</span>
    <span slot="food">Chicken Wings</span>
    <span slot="description">
        I have historically worked against the best interest of the system. I am now working on being a better alter and serving my purpose in a productive capacity.
    </span>
</Alter>