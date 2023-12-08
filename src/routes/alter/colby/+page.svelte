<script>
    import Alter from "$lib/Alter.svelte";
    import { BODY_AGE } from "$lib/common";
</script>

<Alter>
    <span slot="image"></span>
    <span slot="name">Colby</span>
    <span slot="role">Core?, Little, Trauma Holder</span>
    <span slot="age">10</span>
    <span slot="gender">Boy</span>
    <span slot="sexuality">Nonsexual</span>
    <span slot="color"><div class="color" style="background-color: yellow"></div></span>
    <span slot="song">-</span>
    <span slot="food">Chicago-style Pizza</span>
    <span slot="description">
        TODO when Colby fronts
    </span>
</Alter>