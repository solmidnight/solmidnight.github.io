<script>
    import Alter from "$lib/Alter.svelte";
    import { BODY_AGE } from "$lib/common";
</script>

<Alter>
    <span slot="image"></span>
    <span slot="name">6</span>
    <span slot="role">Persecutor</span>
    <span slot="age">-</span>
    <span slot="gender">-</span>
    <span slot="sexuality">-</span>
    <span slot="color"><div class="color" style="background-color: black"></div></span>
    <span slot="song">-</span>
    <span slot="food">-</span>
    <span slot="description">
        Known to be the most persecutory.
    </span>
</Alter>