<script>
    import Alter from "$lib/Alter.svelte";
    import { BODY_AGE } from "$lib/common";
</script>

<Alter>
    <span slot="image"><img src="/miles.jpg"/></span>
    <span slot="name">Miles</span>
    <span slot="role">Protector</span>
    <span slot="age">{BODY_AGE}</span>
    <span slot="gender">Man</span>
    <span slot="sexuality">Pretty sure I am gay tho</span>
    <span slot="color"><div class="color miles" style="background-color: black; box-sizing: border-box;"></div></span>
    <span slot="song">Blinding Lights - The Weeknd</span>
    <span slot="food">-</span>
    <span slot="description">
        I protect the system from the dangers of the night, and have recently been hosting. Favorite color is rainbow black.
    </span>
</Alter>