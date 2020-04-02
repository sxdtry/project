<template>
    <div class="fountain">
        <canvas ref="fountain"></canvas>
    </div>
</template>

<script>
export default {
    name:"fountain",
    mounted(){
        var can = this.$refs.fountain;
        let penquan = {
            exe(){
                this.cvs = can;
                this.cvs.width = 1000;
                this.cvs.height = 875;
                this.can = this.cvs.getContext('2d');
                this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                this.data = [];
                this.maxNum = 100;
                this.loop();
                // this.resize()
            },
            //自适应
            // resize(){
            //     window.onresize = function(){
            //         penquan.cvs.width = window.innerWidth;
            //         penquan.cvs.height = window.innerHeight;
            //     }
            // },
            //赋予每个字母属性
            give(){
                this.fade();
                this.data.push({
                    font:this.letters[Math.floor(Math.random()*this.letters.length)],
                    x:this.cvs.width/2,
                    y:this.cvs.height,
                    speedX:Math.floor(Math.random()*20-10),
                    speedY:Math.floor(Math.random()*20-10),
                    color:[200,80,60,0.8]
                })
                this.draw();
                this.clear();
            },
            //清除多余字母
            clear(){
                if(this.data.length > this.maxNum){
                    this.data.shift();
                }
            },
            //重复执行
            loop(){
                this.give();
                requestAnimationFrame(this.loop.bind(this));
            },
            //绘制
            draw(){
                for(let value of this.data){
                    let hsla = `hsla(${value.color[0]},${value.color[1]}%,${value.color[2]}%,${value.color[3]})`
                    this.can.font = '16px 宋体';
                    this.can.fillStyle = hsla;
                    this.can.fillText(value.font,value.x,value.y);
                    value.x += value.speedX;
                    value.y += value.speedY;
                    value.y *= 0.98;
                    value.color[0] += 1;
                    value.color[2] *= 0.99
                    if(value.color[0]>299){
                        value.color[2] = 100;
                        value.color[3] = 1
                    }
                }
            },
            fade(){
                this.can.fillStyle = 'rgba(0,0,0,0.1)';
                this.can.fillRect(0,0,window.innerWidth,window.innerHeight)
            }
        }
        penquan.exe();
    }
}
</script>

<style lang="less">
    .fountain{
        overflow: hidden;
    }
</style>