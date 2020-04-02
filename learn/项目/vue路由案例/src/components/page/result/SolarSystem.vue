<template>
    <div class="solar-system">
        <canvas ref="solar"></canvas>
    </div>
</template>

<script>
export default {
    name:"SolarSystem",
    mounted(){
        let can = this.$refs.solar;
        can.width = 1000;
        can.height = 875;
        let vas = can.getContext('2d');
        function circle(){
            for(let i = 0; i < 9; i++){
                vas.beginPath();
                vas.strokeStyle = "#fff";
                vas.arc(500,500,50+i*50,0,Math.PI*2);
                vas.stroke();
            }
        }
        function Star(x,y,r,T,sColor,eColor){
            this.x = x;
            this.y = y;
            this.r = r;
            this.T = T;
            this.time = 0;
            this.sColor = sColor;
            this.eColor = eColor;
            this.draw = function(){
                vas.save();
                vas.translate(500,500);
                vas.rotate(this.time*(360/this.T)*Math.PI/180);
                vas.beginPath();
                vas.arc(this.x,this.y,this.r,0,Math.PI*2);
                this.color = vas.createRadialGradient(this.x,this.y,0,this.x,this.y,this.r);
                this.color.addColorStop(0,this.sColor);
                this.color.addColorStop(1,this.eColor);
                vas.fillStyle = this.color;
                vas.fill();
                vas.restore();
                this.time++;
            }
        };
        let sun = new Star(0,0,30,0,"#ff0","#f00");
        let Mercury = new Star(-50,0,7,87,"#f00","#00f");
        let Venus = new Star(-100,0,10,225,"#fff","#00f");
        let Earth = new Star(-150,0,13,365,"#ccc","#fff");
        let Mars = new Star(-200,0,15,678,"#00a","#00f");
        let Jupite = new Star(-250,0,22,4333,"#f00","#00f");
        let Saturn = new Star(-300,0,25,10760,"#ccc","#f00");
        let Uranus = new Star(-350,0,14,30800,"#000","#ff0");
        let Neptune = new Star(-400,0,16,60150,"#fa0","#ff0");
        let Pluto = new Star(-450,0,10,120000,"#ff0","#f00");
        function move(){
            vas.clearRect(0,0,can.width,can.height);
            sun.draw();
            Mercury.draw();
            Venus.draw();
            Earth.draw();
            Mars.draw();
            Jupite.draw();
            Saturn.draw();
            Uranus.draw();
            Neptune.draw();
            Pluto.draw();
            circle();
        }
        setInterval(move, 13);
    }
}
</script>

<style lang="less">
    .solar-system{
        background-color: #000;
    }
</style>