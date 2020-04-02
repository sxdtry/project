window.onload = function(){
    var length = 5*5*5;
    var oBox = document.getElementById('box');
    var aLi = oBox.getElementsByTagName('li');
    var oBtn = document.getElementById('oBtn');
    var bBtn = oBtn.getElementsByTagName('li');
    for(var i = 0; i < length; i++){
        var oLi = document.createElement('li');
        oLi.innerHTML = i;
        //存储位置坐标
        oLi.clX = i % 5;
        oLi.clY = Math.floor(i % 25 / 5);
        oLi.clZ = Math.floor(i / 25);
        oBox.appendChild(oLi);
        aLi[i].style.transform = `translate3D(${Math.random()*4000-2000}px,${Math.random()*4000-2000}px,${Math.random()*4000-2000}px)`;
    }

    setTimeout(Grid, 1000);

    //方阵
    function Grid(){
        var disX = 300;
        var disY = 300;
        var disZ = 1000;
        for(var i = 0; i < length; i++){
            var oLi = aLi[i];
            var x = (oLi.clX - 2) * disX;
            var y = (oLi.clY - 2) * disY;
            var z = (oLi.clZ - 2) * disZ;
            oLi.style.transform = `translate3D(${x}px, ${y}px, ${z}px)`;
        }
    }

    //螺旋状
    function Helix(){
        var h = 5;
        var disY = 8;
        var heZ = 700;
        var num = length / h;
        var deg = 360 / num;
        var mid = length / 2;
        for(var i = 0; i < length; i++){
            aLi[i].style.transform = `rotateY(${i * deg}deg) translateZ(${heZ}px) translateY(${disY * (i - mid)}px)`;
        }
    }

    //球形
    // function Sphere(){
    //     //记录行数
    //     var h = 7;
    //     //记录每行个数
    //     var index = 0;
    //     var num = 5;
    //     var hez = 800;
    //     var flag = 0;
    //     var arr =[[],[],[],[],[],[],[]];
    //     for(var i = 0; i < h; i++){
    //         if((i + 1) < Math.floor(h / 2 + 2))index = (2 * (i + 1) - 1) * 5;
    //         else index = (2 * h + 1 - 2 * (i + 1)) * 5;
    //         for(var j = flag; j < length; j++){
    //             arr[i].push(aLi[j]);
    //             if(arr[i].length == index){
    //                 flag = j + 1;
    //                 break;
    //             }
    //         }

    //         var xdeg = 360 / index;
    //         var ydeg = 90 / ((h + 1) / 2);
    //         for(var z = 0; z < index; z ++){
    //             arr[i][z].style.transform = `rotateY(${xdeg * z}deg) rotateX(${-(i - (h - 1) / 2) * ydeg}deg) translateZ(${hez}px)`;
    //         }
    //     }
    // }
    //球形
    function Sphere(){
        var arr = [1,12,14,20,31,20,14,12,1];
        for(var i = 0; i < length; i++){
            var numC = 0, numG = 0, arrSum = 0;
            for(var j = 0; j < arr.length; j++){
                arrSum +=arr[j];
                if(arrSum > i){
                    numC = j;
                    numG = arr[j] - (arrSum  -i);
                    break;
                }
            }
            var ydeg = 360 / arr[numC];
            var xdeg = 180 / (arr.length - 1);
            aLi[i].style.transform = `rotateY(${(numG - 1.3) * ydeg}deg) rotateX(${90 - numC * xdeg}deg) translateZ(800px)`;
        }
    }

    //元素周期表
    function Table(){
        var arr = [
            {x: 0, y: 0},
            {x: 17, y: 0},
            {x: 0, y: 1},
            {x: 1, y: 1},
            {x: 12, y: 1},
            {x: 13, y: 1},
            {x: 14, y: 1},
            {x: 15, y: 1},
            {x: 16, y: 1},
            {x: 17, y: 1},
            {x: 0, y: 2},
            {x: 1, y: 2},
            {x: 12, y: 2},
            {x: 13, y: 2},
            {x: 14, y: 2},
            {x: 15, y: 2},
            {x: 16, y: 2},
            {x: 17, y: 2},
        ];
        var disX = 180;
        var disY = 200;
        for(var i = 0; i < length; i++){
           var x, y;
           var midX = 18 / 2;
           var midY = Math.ceil(length / 18) / 2;
            if(i < 18){
                x = arr[i].x;
                y = arr[i].y;
            }else{
                x = i % 18;
                y = Math.floor(i / 18) + 2;
            }
            console.log(x, y)
            aLi[i].style.transform = `translate3D(${disX * (x - midX)}px, ${disY * (y - midY)}px, 0px)`;
        }
    }



    //鼠标拖拽
    var pers = -4800;
    var roX = 0;
    var roY = 0;
    document.onmousedown = function(e){
        var stX = e.clientX;
        var stY = e.clientY;
        var endX = roX;
        var endY = roY;
        document.onmousemove = function(e){
            //获取初始点击位置与最终值的差值
            var X_ = e.clientX - stX;
            var Y_ = e.clientY - stY;
            endY = roY + X_ / 5;
            endX = roX - Y_ / 5;
            oBox.style.transform = `translateZ(${pers}px) rotateX(${endX}deg) rotateY(${endY}deg)`;
        }
        document.onmouseup = function(){
            roX = endX;
            roY = endY;
            document.onmousemove = null;
        }
    }


    //滚轮放大缩小
    var scnum = 200;
    document.onmousewheel = function(e){
        pers += scnum * e.wheelDelta / 120;
        oBox.style.transform = `translateZ(${pers}px) rotateX(${roX}deg) rotateY(${roY}deg)`;
    }



    //点击切换效果图
    var arr = [Grid, Helix, Sphere, Table];
    for(var j = 0; j < bBtn.length; j++){
        (function(j){
            bBtn[j].onclick = arr[j];
        })(j)
        
    }
        
}