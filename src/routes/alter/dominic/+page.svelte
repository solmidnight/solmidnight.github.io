<script>
    import Alter from "$lib/Alter.svelte";
    import { BODY_AGE } from "$lib/common";
</script>

<Alter>
    <span slot="image"></span>
    <span slot="name">Dominic</span>
    <span slot="role">Protector</span>
    <span slot="age">{BODY_AGE}</span>
    <span slot="gender">Man</span>
    <span slot="sexuality">Fluid</span>
    <span slot="color"><div class="color" style="background-color: grey"></div></span>
    <span slot="song">Standing Next To You - Jung Kook</span>
    <span slot="food">-</span>
    <span slot="description">
        TODO when Dominic fronts
    </span>
</Alter>