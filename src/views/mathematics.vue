<template>
    <div id="mathematics">
        <div class="contentContainer">
            <ul class="content">
                <a href="https://math.bookpro.cf">点击获取本人绘制的数学思维导图</a>
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
                    detail: "广度优先（先把知识点学完后）再逐步挖深",
                    explaination: "简单题基本是单知识点的考察，中档题是多知识点结合的简单考察或者单知识点的深度考察（较少），难题是多知识点的深度考察，且会横跨多个版块的知识点，综上所述，先把所有知识点都过一遍对于做题来说的收益是非常大的，在知道每一个知识点的情况下挖深会变得较为容易"
                },
                {
                    detail: "导数、圆锥曲线、概率统计可以与高数进行一些接轨（掌握一些奇技淫巧）",
                    explaination: "导数中的链式法则可轻松解决多层复合函数的求导，隐函数求导可以轻松解决一些双变量函数的极值或取值范围问题；定积分可以解决一些圆锥曲线中的曲边图形面积问题；超几何分布、离散均匀分布、连续均匀分布的期望与方差均有公式，上述的在高中数学中均未出现，但在掌握这些技巧后解题效率会有大大提升"
                },
                {
                    detail: "学一点线性代数的知识（尽管书上已经把行列式和矩阵删除了）",
                    explaination: "行列式可以在知道三点坐标的情况下求出三角形面积，向量外积亦十分有用，混合积可用于求平行六面体的体积，法向量的本质是叉乘"
                },
                {
                    detail: "正难则反",
                    explaination: "有些题目正着做可能会很麻烦且未必能解出来，此时不妨从答案出发，倒着思考或许会有思路"
                },
                {
                    detail: "按照目录复习，不会的知识点做相应的题目（由某高考一分都没浪费的人贡献）",
                    explaination: "可以补漏洞"
                }
            ]
        }
    }
}
</script>

<style lang="less">
#mathematics {
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