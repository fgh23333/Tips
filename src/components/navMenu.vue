<template>
    <div id="navMenu">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true">
            <el-menu-item index="content">
                <i class="el-icon-menu"></i>
                <span slot="title">核心原则：效率</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>学科</span>
                </template>
                <el-menu-item-group >
                    <el-menu-item :index="'content'+ i" v-for="(item, i) in list" :key="i">
                        {{ item.subject }}
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    subject: "语文"
                },
                {
                    subject: "数学"
                },
                {
                    subject: "英语"
                },
                {
                    subject: "物理"
                },
                {
                    subject: "化学"
                },
                {
                    subject: "生物"
                },
                {
                    subject: "政治（由某政治学渣贡献）"
                },
                {
                    subject: "历史"
                },
                {
                    subject: "地理"
                },
                {
                    subject: "信息"
                }
            ]
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="less">
#navMenu {
    overflow: hidden;
}
</style>