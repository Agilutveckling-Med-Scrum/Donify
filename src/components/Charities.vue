<template>
    <div class="grid-container">
        <div class="charity-card-container">
            <picture>
                <img
                    src="https://www.reachmentoringprogram.com/wp-content/uploads/2020/07/social-share.png"
                    alt=""
                />
                <source media="(min-width: 325px)" srcset="" />
            </picture>
            <div class="text-div">
                <h3>Crisis Text Line</h3>
                <p>
                    Människor i desparta sitautioner behöver någon att tala med
                    så fort som möjligt. Crisis Text Line hjälper personer i
                    stor nöd som annars inte skulle våga bertätta om sina
                    svårigheter.
                </p>
                <b-button variant="primary" class="mx-auto">Donera</b-button>
            </div>
        </div>

        <div class="charity-card-container">
            <picture>
                <img
                    src="http://caninechronicle.com/wp-content/uploads/2015/06/American-Humane-Association-Logo.jpg"
                    alt=""
                />
                <source
                    media="(min-width: 325px)"
                    srcset="https://images.squarespace-cdn.com/content/v1/5b48ae2d96e76ffeb9871ba6/1598287480103-M1OXPODTZDNH36QZX9L0/ke17ZwdGBToddI8pDm48kOYA7ktt62Z88cYQKsvEnIx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVw_DmTuzY27MAzILCohm3lg_Yoo7S90wseEYrozD2QXzhM-Sjnu6G9qv44EQ4jJbQ/_MG_7450.jpg?format=2500w"
                />
            </picture>
            <div class="text-div">
                <h3>American Humane</h3>
                <p>
                    Sedan 1877 har American Humane hjälpt både vilda och
                    domesticerade djur i nöd i Amerika. Dina donationer hjälper
                    djur att få mat, vård och ett hem för livet.
                </p>
                <b-button variant="primary" class="mx-auto">Donera</b-button>
            </div>
        </div>
        <div class="charity-card-container">
            <picture>
                <img
                    src="https://amp-server.s3.amazonaws.com/uploads/org/logo/05e96c406eb34862912837ff09276f48.png"
                    alt=""
                />
                <source
                    media="(min-width: 325px)"
                    srcset="https://www.skees.org/wp-content/uploads/2014/08/WCK-Logo.png"
                />
            </picture>
            <div class="text-div">
                <h3>World Central Kitchen</h3>
                <p>
                    WCK har levererat över 25 miljoner måltider sedan 2010. Med
                    volontörer i ett dussintal städer i Amerika levererar WCK
                    250 000 måltider dagligen.
                </p>
                <b-button
                    variant="primary"
                    class="mx-auto"
                    @click="$router.push('/donate')"
                    >Donera</b-button
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
/*mobile versions*/

.grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-row-gap: 40px;
    height: 100vh;
    position: relative;
}

h3 {
    margin-top: 30px;
}

button {
    font-size: 18px;
    padding: 15px;
    margin: 10px 0px 30px 0px;
    width: 60%;
    border-radius: 30px;
}
img {
    width: 100%;
    height: 178px;
}

picture {
    width: 100%;
    height: 100%;
}

.charity-card-container {
    border: 1px solid whitesmoke;
    padding: 10px;
}

.text-div p {
    text-align: center;
    background-color: white;
    margin: 25px 10px;
}
</style>
