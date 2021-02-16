<template>
    <div class="grid-container">
        <div>
            <picture>
                <img
                    src="https://images.squarespace-cdn.com/content/v1/5b48ae2d96e76ffeb9871ba6/1598287480103-M1OXPODTZDNH36QZX9L0/ke17ZwdGBToddI8pDm48kOYA7ktt62Z88cYQKsvEnIx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVw_DmTuzY27MAzILCohm3lg_Yoo7S90wseEYrozD2QXzhM-Sjnu6G9qv44EQ4jJbQ/_MG_7450.jpg?format=2500w"
                    alt=""
                />
                <source
                    media="(min-width: 325px)"
                    srcset="https://images.squarespace-cdn.com/content/v1/5b48ae2d96e76ffeb9871ba6/1598287480103-M1OXPODTZDNH36QZX9L0/ke17ZwdGBToddI8pDm48kOYA7ktt62Z88cYQKsvEnIx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVw_DmTuzY27MAzILCohm3lg_Yoo7S90wseEYrozD2QXzhM-Sjnu6G9qv44EQ4jJbQ/_MG_7450.jpg?format=2500w"
                />
            </picture>
            <h3>World Central Kitchen</h3>
            <p>WCK har levererat över 25 miljoner måltider välrden över</p>
            <b-button
                variant="primary"
                class="mx-auto"
                @click="$router.push('/donate')"
                >Donera</b-button
            >
        </div>

        <div>
            <picture>
                <img
                    src="https://images.squarespace-cdn.com/content/v1/5b48ae2d96e76ffeb9871ba6/1598287480103-M1OXPODTZDNH36QZX9L0/ke17ZwdGBToddI8pDm48kOYA7ktt62Z88cYQKsvEnIx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVw_DmTuzY27MAzILCohm3lg_Yoo7S90wseEYrozD2QXzhM-Sjnu6G9qv44EQ4jJbQ/_MG_7450.jpg?format=2500w"
                    alt=""
                />
                <source
                    media="(min-width: 325px)"
                    srcset="https://images.squarespace-cdn.com/content/v1/5b48ae2d96e76ffeb9871ba6/1598287480103-M1OXPODTZDNH36QZX9L0/ke17ZwdGBToddI8pDm48kOYA7ktt62Z88cYQKsvEnIx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVw_DmTuzY27MAzILCohm3lg_Yoo7S90wseEYrozD2QXzhM-Sjnu6G9qv44EQ4jJbQ/_MG_7450.jpg?format=2500w"
                />
            </picture>
            <h3>World Central Kitchen</h3>
            <p>WCK har levererat över 25 miljoner måltider välrden över</p>
            <b-button variant="primary" class="mx-auto">Donera</b-button>
        </div>

        <div>
            <picture>
                <img
                    src="https://images.squarespace-cdn.com/content/v1/5b48ae2d96e76ffeb9871ba6/1598287480103-M1OXPODTZDNH36QZX9L0/ke17ZwdGBToddI8pDm48kOYA7ktt62Z88cYQKsvEnIx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVw_DmTuzY27MAzILCohm3lg_Yoo7S90wseEYrozD2QXzhM-Sjnu6G9qv44EQ4jJbQ/_MG_7450.jpg?format=2500w"
                    alt=""
                />
                <source
                    media="(min-width: 325px)"
                    srcset="https://images.squarespace-cdn.com/content/v1/5b48ae2d96e76ffeb9871ba6/1598287480103-M1OXPODTZDNH36QZX9L0/ke17ZwdGBToddI8pDm48kOYA7ktt62Z88cYQKsvEnIx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVw_DmTuzY27MAzILCohm3lg_Yoo7S90wseEYrozD2QXzhM-Sjnu6G9qv44EQ4jJbQ/_MG_7450.jpg?format=2500w"
                />
            </picture>
            <h3>World Central Kitchen</h3>
            <p>WCK har levererat över 25 miljoner måltider välrden över</p>
            <b-button variant="primary" class="mx-auto">Donera</b-button>
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
}

h3 {
    margin-top: 20px;
}

p {
    margin-top: 20px;
}

button {
    font-size: 18px;
    padding: 5px;
    margin: 10px 0px 30px 0px;
    width: 60%;
    border-radius: 15px;
}
img {
    width: 100%;
}

picture {
    width: 100%;
    height: 100%;
}

.grid-container div:nth-child(1) {
    text-align: center;
    background-color: whitesmoke;
}
.grid-container div:nth-child(2) {
    text-align: center;
    background-color: whitesmoke;
}
.grid-container div:nth-child(3) {
    text-align: center;
    background-color: whitesmoke;
}
</style>
