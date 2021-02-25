<template>
    <tab-bar>
        <tab-bar-item path="/">
            <img
                slot="item-icon"
                src="../../assets/img/tabbar/home.svg"
                alt=""
            />
            <img
                slot="item-icon-active"
                src="../../assets/img/tabbar/home_active.svg"
                alt=""
            />
            <div slot="item-text">Home</div>
        </tab-bar-item>
        <tab-bar-item path="/donate">
            <img
                slot="item-icon"
                src="../../assets/img/tabbar/category.svg"
                alt=""
            />
            <img
                slot="item-icon-active"
                src="../../assets/img/tabbar/category_active.svg"
                alt=""
            />
            <div slot="item-text">Category</div>
        </tab-bar-item>
        <tab-bar-item path="/login">
            <img
                slot="item-icon"
                src="../../assets/img/tabbar/profile.svg"
                alt=""
            />
            <img
                slot="item-icon-active"
                src="../../assets/img/tabbar/profile_active.svg"
                alt=""
            />
            <div slot="item-text">My</div>
        </tab-bar-item>
        <tab-bar-item path="/aboutdonify">
            <img
                slot="item-icon"
                src="../../assets/img/tabbar/hamburg.svg"
                alt=""
            />
            <img
                slot="item-icon-active"
                src="../../assets/img/tabbar/hamburg_active.svg"
                alt=""
            />
            <div slot="item-text">Info</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/MainTabBar/TabBar.vue'
import TabBarItem from '@/components/MainTabBar/TabBarItem.vue'

export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped></style>
