<script>
    import Alter from "$lib/Alter.svelte";
    import { BODY_AGE } from "$lib/common";
</script>

<Alter>
    <span slot="image"><img src="/aurora.jpg"/></span>
    <span slot="name">Aurora</span>
    <span slot="role">Caretaker</span>
    <span slot="age">{BODY_AGE}</span>
    <span slot="gender">Woman</span>
    <span slot="pronouns">she/her/hers</span>
    <span slot="sexuality">Pansexual</span>
    <span slot="color" style="width: 100%; height: 100%;"><div class="color" style="width: 100%; height: 100%; background-color: #FF5B00"></div></span>
    <span slot="song">-</span>
    <span slot="food">Hummus</span>
    <span slot="description">
        I love life, the universe, and everything to a fault 😂! I am soft spoken and like to imagine myself as smaller than the body. 
        I like to dance, sing. I thrive when my environment is tidy and my body is clean. I love to cook and eat; hopefully all that hummus goes to my hips! 
    </span>
</Alter>