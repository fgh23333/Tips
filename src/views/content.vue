<template>
    <div id="content">
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
                    detail: "抓紧学习的一切时间而不是抓紧一切时间学习",
                    explanation: ""
                },
                {
                    detail: "当感到做一件事效率下降的时候，马上转移重心到其它事情上",
                    explanation: ""
                },
                {
                    detail: "任何事情都要有独立思考、不同方面、不同角度的见解、不要人云亦云（除了理科中目前的定理）",
                    explanation: ""
                },
                {
                    detail: "形成自己的学习进度与体系",
                    explanation: ""
                }
            ]
        }
    }
}
</script>

<style lang="less">
#content {
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