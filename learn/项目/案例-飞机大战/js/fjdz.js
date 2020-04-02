let start = document.querySelector('.start'),
    map = document.querySelector('.map'),
    end = document.querySelector('.end'),
    btn = start.querySelectorAll('button'),
    zdAll = map.querySelector('.zd-all'),
    score = map.querySelector('.score'),
    grade = end.querySelector('.grade'),
    title = end.querySelector('.title'),
    newStart = end.querySelector('button'),
    titleAll = ['菜机翔','躲避机','歼灭大师','鹰击长空','这天空是我的'],
    w = start.clientWidth,
    h = start.clientHeight;
    //给每个按钮打上难度标记
    for(let i = 1,len = btn.length; i <= len; i++){
        btn[i-1].index = i;
    }

    //事件委托
    register(start,'touchstart',startGame);

    //游戏开始模块
    function startGame(e){
        let level;
        if(e.target.nodeName == 'BUTTON'){
            let btn = e.target;
            level = btn.index;
            bg(level);       //移动背景加载模块启动
            let oPlane = plane({          //友军生成模块启动
                x:e.changedTouches[0].clientX,
                y:e.changedTouches[0].clientY
            });
    
            enemy(level,oPlane)          //敌军生成模块启动
    
            bullet(oPlane);       //子弹生成模块
        }

    }


    //背景生成模块
    function bg(level){
        map.style.backgroundImage = `url('../img/dt${level}.jpg')`;
        clear(start,map);   //清除隐藏模块
        bgMove();   //背景移动模块启动
    }

    //背景移动模块
    function bgMove(){
        let bgpos = 0;
        //闭包
        (function move(){
            bgpos++;
            map.style.backgroundPositionY = `${bgpos}px`;
            map.bgId = requestAnimationFrame(move);
        })(bgpos)
    }




    //友军生成模块
    function plane(pos){
        let oPlane = new Image();
        oPlane.className = 'yj';
        oPlane.src = "../img/wj1.png";
        oPlane.width = 30;
        oPlane.height = 20;
        setTrans(oPlane,pos.x - oPlane.width/2,pos.y - oPlane.height/2);
        map.appendChild(oPlane);
        register(oPlane,'touchmove',planeMove);     //飞机移动模块启动


        return oPlane;
    }

    //飞机移动模块
    function planeMove(e){
        let left = e.changedTouches[0].clientX;
        let top = e.changedTouches[0].clientY;

        scope.call(this);   //启动飞机移动范围模块

        setTrans(this,left,top);


        function scope(){   //飞机移动范围模块
            let maxL = 0,
                minR = w - this.width,
                maxT = 0,
                minT = h - this.height;
            left = Math.min(left,minR),
            left = Math.max(left,maxL),
            top = Math.min(top,minT),
            top = Math.max(top,maxT);
        }
    }
    



    //敌军生成模块
    function enemy(level,oPlane){
        let count = 0;
        map.enemyId = setInterval(function(){
            count++;
            let lv = count%30 ? 1 : 2;      //敌军飞机等级
            let oEnemy = new Image();
            oEnemy.className = 'dj'
            oEnemy.src = `../img/dr${lv}.png`;    //飞机类型
            oEnemy.width = [30,60][lv - 1];        //飞机宽度
            oEnemy.height = [20,40][lv - 1];        //飞机高度
            oEnemy.speed = [1,2,3,4][level - 1]*(Math.random()*0.7 + 0.7); //飞机随机速度
            oEnemy.HP = [3,10][lv - 1]    //飞机血量
            let x = Math.floor(Math.random()*(w - oEnemy.width));
            let y = -oEnemy.height;
            
            map.appendChild(oEnemy);
            setTrans(oEnemy,x,y);

            map.djyd = requestAnimationFrame(enemyMove.bind(null,oEnemy,oPlane,lv));;      //敌军移动模块启动

        },[800,600,400,200][level-1])
    }
    
    //敌军移动模块
    function enemyMove(oEnemy,oPlane,lv){
        if(oEnemy.parentNode){
            let oE = setTrans(oEnemy);
            let oEt = oE.translateY + oEnemy.speed;
            setTrans(oEnemy,undefined,oEt);
            if(oEt > h){        //如果敌军飞机逃脱，则减分并清除该飞机
                score.children[0].innerText -= [2,10][lv - 1];
                map.removeChild(oEnemy);
            }else{
                for(let oZd of zdAll.children){
                    if(coll(oEnemy,oZd)){     //敌军与子弹碰撞检测
                        let wz = setTrans(oEnemy);
                        zdAll.removeChild(oZd);
                        oEnemy.HP--;
                        if(oEnemy.HP == 0){
                            score.children[0].innerText = score.children[0].innerText*1 + [1,5][lv - 1];
                            let oBoom = new Image();
                            oBoom.className = 'dj boom';
                            oBoom.src = `../img/bz${lv}.png`;
                            oBoom.width = oEnemy.width;
                            oBoom.height = oEnemy.height;
                            map.removeChild(oEnemy);
                            map.appendChild(oBoom);
                            setTrans(oBoom,wz.translateX,wz.translateY);
                            setTimeout(()=>{
                                map.removeChild(oBoom);
                                oBoom = null;
                            },1000)
                        }
                    }
                }
                if(coll(oEnemy,oPlane)){  //敌军与友军碰撞检测
                    // console.log(map)
                    map.removeChild(oEnemy);
                    oPlane.className = 'yj glitter';
                    gameOver(oPlane);
                }
            }
            map.djyd = requestAnimationFrame(enemyMove.bind(null,oEnemy,oPlane,lv));
        }
        
    }



    //子弹生成模块
    function bullet(oPlane){
        map.zdId = setInterval(function(){
            let wz = setTrans(oPlane);
            let oZd = new Image();
            oZd.src = '../img/zd.png';
            oZd.className = 'zd'
            oZd.width = 50;
            oZd.height = 50;
            let x = wz.translateX + oPlane.width/2 - oZd.width/2;
            let y = wz.translateY - oPlane.height;
            zdAll.appendChild(oZd);
            setTrans(oZd,x,y);
            map.zdMove = requestAnimationFrame(bulMove.bind(null,oZd));
        },200)
    }

    //子弹移动模块
    function bulMove(oZd){
        if(oZd.parentNode){
            let zdwz = setTrans(oZd);
            zdwz.translateY -= 3;
            setTrans(oZd,undefined,zdwz.translateY)
            if(zdwz.translateY < 0){
                zdAll.removeChild(oZd)
            }
            map.zdMove = requestAnimationFrame(bulMove.bind(null,oZd));
        }
        
    }


    //游戏结束模块
    function gameOver(oPlane){
        clear(0,end);
        grade.children[0].innerText = score.children[0].innerText;
        title.children[0].innerText = titleSelect();
        clear(score, 0);
        zdAll.innerHTML = "";
        clearTimeout(map.zdId);             //清除子弹生成模块
        cancelAnimationFrame(map.zdMove);   //清除子弹移动模块
        clearTimeout(map.enemyId)           //清除敌军生成模块
        unregister(oPlane,'touchmove')
    }

    register(newStart,'touchstart',newGame);
    //重新开始模块
    function newGame(){
        map.innerHTML = `<div class="zd-all"></div>
        <p class="score">你的分数为：<span>0</span></p>`;
        zdAll = document.querySelector('.zd-all');
        score = map.querySelector('.score');
        clear(map,score)
        clear(end,start);
        grade.children[0].innerText = 0;
        cancelAnimationFrame(map.bgId);
    }


    //称号判断模块
    function titleSelect(){
        let so = score.children[0].innerText;
        switch(true){
            case so < 50 :
                return titleAll[0];
            case so > 50 && so <= 100 :
                return titleAll[1];
            case so > 100 && so <= 200 :
                return titleAll[2];
            case so > 200 :
                return titleAll[3];
        }
    }












    //碰撞检测
     function coll(obj1,obj2){
         let hq1 = setTrans(obj1);
         let l1 = hq1.translateX;
         let r1 = hq1.translateX + obj1.width;
         let t1 = hq1.translateY;
         let b1 = hq1.translateY + obj1.height;
         let hq2 = setTrans(obj2);
         let l2 = hq2.translateX;
         let r2 = hq2.translateX + obj2.width;
         let t2 = hq2.translateY;
         let b2 = hq2.translateY + obj2.height;
        return !(b1 < t2 || r1 < l2 || l1 > r2 || t1 > b2);
     }




    //位置数据处理模块
        /*
            obj     处理对象
            x       水平偏移量
            y       处置偏移量
        */
    function setTrans(obj, x, y){
        if(!obj.transform){
            obj.transform = {}
        };
        //如果参数只有obj则视为获取，反之为设置
        if(arguments.length == 1){
            return obj.transform;
        }else{
            let str = "";
            if(x){
                obj.transform.translateX = x;
            };
            if(y){
                obj.transform.translateY = y;
            };
            
            for(let key in obj.transform){
                str += `${key}(${obj.transform[key]}px)`
            }
            obj.style.transform = str;
        }
    }




    //隐藏清理模块
    function clear(obj1,obj2){
        if(obj1){
            obj1.style.display = "none";
        }
        if(obj2){
            obj2.style.display = "block";
        }
        
    }
    //事件注册函数模块
    function register(obj,ev,fn,async=false){
        obj.addEventListener(ev,fn,async);
    }
    //事件解绑函数模块
    function unregister(obj,ev,fn){
        obj.removeEventListener(ev,fn);
    }