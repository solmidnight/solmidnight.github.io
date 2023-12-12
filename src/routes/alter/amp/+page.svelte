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
        I have historically been the most dangerous alter. It turns out there were other (number) alters influencing me;
        pulling the strings like puppeteers in the background. I forget that the body is human, I think I can achieve anything; I can access all three
        subsystems, although my home subsystem is with Aurora and Miles. Due to my baseline grandiosity and feelings of invincibility,
        my sensitivity to manic tendencies is Amplified compared to other alters.
    </span>
</Alter>