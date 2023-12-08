<script>
    import Alter from "$lib/Alter.svelte";
    import { BODY_AGE } from "$lib/common";
</script>

<Alter>
    <span slot="image"></span>
    <span slot="name">Audrey</span>
    <span slot="role">Persecutor, ED Holder</span>
    <span slot="age">{BODY_AGE}</span>
    <span slot="gender">Woman</span>
    <span slot="sexuality">Asexual</span>
    <span slot="color"><div class="color" style="background-color: red"></div></span>
    <span slot="song">Lights - Ellie Goulding</span>
    <span slot="food">-</span>
    <span slot="description">
        TODO when Audrey fronts
    </span>
</Alter>