<template>
    <div id="english">
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
                    detail: "词汇是基础",
                    explaination: ""
                },
                {
                    detail: "作文尽量往自己的特长上靠（如计算机、乐器、体育运动等等）",
                    explaination: "作文只要涉及到阅卷老师的知识盲区，哪怕胡诌人家都看不出来，自然不敢打低分，只要不打低分，得一个不错分数的概率就提高了，当然前提是语句要顺畅，基本结构要具备"
                },
                {
                    detail: "听一些VOA或者BBC的音频（由某高考一分都没浪费的人贡献）",
                    explaination: "拓宽知识面"
                },
                {
                    detail: "英语阅读有核心内容，可以按照专业名词，去网上找一下相关内容（由某高考一分都没浪费的人贡献）",
                    explaination: "拓宽知识面"
                },
                {
                    detail: "积累单词（由某高考一分都没浪费的人贡献）",
                    explaination: "方便阅读"
                }
            ]
        }
    }
}
</script>

<style lang="less">
#english {
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