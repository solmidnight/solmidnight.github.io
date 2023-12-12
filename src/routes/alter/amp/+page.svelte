<script>
    import Alter from "$lib/Alter.svelte";
    import { BODY_AGE } from "$lib/common";
</script>

<Alter>
    <span slot="image"><img src="/amp.jpg"/></span>
    <span slot="name">Amp</span>
    <span slot="role">Reforming Persecutor, Trauma Holder</span>
    <span slot="age">{BODY_AGE}</span>
    <span slot="gender">Enby</span>
    <span slot="sexuality">-</span>
    <span slot="color"><div class="color" style="background-color: green"></div></span>
    <span slot="song">Starboy - The Weeknd</span>
    <span slot="food">Chicken Wings</span>
    <span slot="description">
        I have historically worked against the best interest of the system. I am now working on being a better alter and serving my purpose in a productive capacity.
    </span>
</Alter>