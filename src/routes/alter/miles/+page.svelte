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
    <span slot="pronouns">he/him/his</span>
    <span slot="sexuality">Gay / Gray Ace</span>
    <span slot="color" style="width: 100%; height: 100%; position: relative;"><div class="color miles" style="z-order: 1000; border-radius: 100px; width: 100%; height: 100%; background-color: black; box-sizing: border-box;"></div></span>
    <span slot="song">Blinding Lights - The Weeknd</span>
    <span slot="food">-</span>
    <span slot="description">
        I protect the system, and have recently been hosting. Favorite color is rainbow black.
    </span>
</Alter>