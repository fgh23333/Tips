<template>
    <div id="physics">
        <div class="contentContainer">
            <ul class="content">
                <li class="detail" v-for="(item, i) in list" :key="i">
                    <div class="itemDetail">
                        <span class="bulletPoint"></span>
                        {{ item.detail }}
                    </div>
                    <div class="itemExplanation">{{ item.explaination }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    detail: "公式是基础",
                    explaination: ""
                },
                {
                    detail: "注意g的取值",
                    explaination: ""
                },
                {
                    detail: "正难则反",
                    explaination: "无法正向用牛顿第二定律解决的可以考虑用机械能守恒定律从运动的反方向思考，同理用机械能守恒定律解不出的时候也可以考虑用牛顿第二定律解决"
                },
                {
                    detail: "一定要画图（由某当了三年物理课代表的人贡献）",
                    explaination: ""
                }
            ]
        }
    }
}
</script>

<style lang="less">
#physics {
    font-family: Arial, sans-serif;

    .contentContainer {
        max-width: 800px;
        margin: 0 auto;

        .content {
            list-style-type: none;
            padding: 0;

            .detail {
                padding: 10px;
                margin: 10px 0;
                border-radius: 5px;

                .itemDetail {
                    text-align: left;
                    display: flex;
                    align-items: center;

                    .bulletPoint {
                        width: 8px;
                        height: 8px;
                        background-color: #000;
                        border-radius: 50%;
                        margin-right: 10px;
                    }
                }

                .itemExplanation {
                    margin-top: 5px;
                    text-align: left;
                    margin-left: 18px;
                }
            }
        }
    }
}
</style>