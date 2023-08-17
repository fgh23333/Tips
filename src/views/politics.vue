<template>
    <div id="history">
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
                    detail: "先审题，找出答题的角度，再对应背出，默出知识点，结合材料写出主观题",
                    explaination: ""
                },
                {
                    detail: "多背一些课本",
                    explaination: ""
                },
                {
                    detail: "对时政的了解和对课本的理解都要顾及",
                    explaination: "单选和多选都会考"
                },
                {
                    detail: "小论文的话，注意逻辑顺序，逻辑起点，分论点，引用论证，事实论证，逻辑终点",
                    explaination: ""
                }
            ]
        }
    }
}
</script>

<style lang="less">
#politics {
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