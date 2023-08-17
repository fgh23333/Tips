<template>
    <div id="chemistry">
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
                    detail: "有机每讲好好学，别落下就行，重点关注无机，多记基本原理",
                    explaination: ""
                },
                {
                    detail: "完全理解性记忆，别死背",
                    explaination: ""
                },
                {
                    detail: "注重一轮复习，要全面复习",
                    explaination: "知识点很全，不然二轮复习会跟不上"
                }
            ]
        }
    }
}
</script>

<style lang="less">
#chemistry {
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