let Game = {
    oWrap: document.getElementById('wrap'),
    exe(){
        this.startGame();
        this.select();
    },
    level:0,
    stepNum:0,
    startGame(){
        this.stepNum = 0;
        this.step.box = []
        this.step.person = []
        this.step.src = []
        this.step.knock = []
        this.oWrap.innerHTML = '';
        let size = {
            x:16,
            y:16
        };
        let oDiv;
        let oImg;
        let moveObj;
        this.oWrap.style.cssText = `width:${size.x * 35}px;height:${size.y * 35}px`;
        for(let key in this.map[this.level]){
            switch(this.map[this.level][key]){
                case 1://树
                    product.call(this,'img/wall.png',key);
                    break;
                case 2://球
                    product.call(this,'img/ball.png',key);
                    oImg.className = "ball"
                    break;
                case 3://盒子
                    product.call(this,'img/box.png',key);
                    oImg.className = "box";
                    break;
                case 4://猴子
                    product.call(this,'img/down.png',key);
                    oImg.className = "person";
                    moveObj = oImg;
                    break;
            };
        };
        function product(img,key){
            oDiv = document.createElement('div');
            oImg = new Image();
            oDiv.x = key%size.x;
            oDiv.y = parseInt(key/size.y);
            oImg.src = img;
            oDiv.style.cssText = `left:${oDiv.x*35}px;top:${oDiv.y*35}px;z-index:${oDiv.y*16 + oDiv.x}`;
            oDiv.appendChild(oImg);
            this.oWrap.appendChild(oDiv);
        }
        this.moveDirection(moveObj);
    },
    //键盘控制猴子朝向
    moveDirection(ob){
        let This = this;
        this.step.src.push({src:ob.src});
        document.onkeydown = function(e){
            e = e || window.event;
            switch(e.keyCode){
                case 37://左
                    ob.src = 'img/left.png';
                    This.move(ob,{x:-1});
                    break;
                case 38://上
                    ob.src = 'img/up.png';
                    This.move(ob,{y:-1});
                    break;
                case 39://右
                    ob.src = 'img/right.png';
                    This.move(ob,{x:1});
                    break;
                case 40://下
                    ob.src = 'img/down.png';
                    This.move(ob,{y:1});
                    break;
            };
            return false;
        }
    },
    //移动
    move(ob,dir){
        let par = ob.parentNode;
        let boxObj;
        let box = this.node('box');
        let x = dir.x || 0;
        let y = dir.y || 0;
        let startX = par.x;
        let startY = par.y;
        let num = 0;
        //猴子下一个位置下标
        let arrIndex = this.map[this.level][((par.y + y) * 16 + par.x + x)];
        //盒子的下一个位置下标
        let arrBox = this.map[this.level][par.y*16 + par.x];
        //移动前先判断下一个位置是否为树，是则跳过移动阶段，否，则运行移动阶段
        //猴子与树的碰撞
        if( arrIndex != 1){
            par.x += x;
            par.y += y;
            for(let value of box){
                parDiv = value.parentNode;
                boxObj = parDiv;
                let startBoxX = parDiv.x;
                let startBoxY = parDiv.y;
                //猴子与盒子的碰撞
                if(parDiv.x == par.x && parDiv.y == par.y){
                    //盒子与树的碰撞
                    if(this.map[this.level][((parDiv.y + y) * 16 + parDiv.x + x)] != 1){
                        parDiv.x += x;
                        parDiv.y += y;
                        //箱子与箱子碰撞检测
                        for(let valueBox of box){
                            if(parDiv != valueBox.parentNode && parDiv.x == valueBox.parentNode.x && parDiv.y == valueBox.parentNode.y){
                                parDiv.x -= x;
                                parDiv.y -= y
                            }
                        }
                        //记录盒子位置
                        if(startBoxX != parDiv.x || startBoxY != parDiv.y){
                            this.step.box.push({x:parDiv.x-x,y:parDiv.y-y,box1:parDiv});
                        }
                        this.step.knock[this.stepNum] = 1
                        parDiv.style.left = parDiv.x * 35 + 'px';
                        parDiv.style.top = parDiv.y * 35 + 'px';
                        parDiv.style.zIndex = parDiv.y*16 + parDiv.x + 1;
                        
                    }
                }
                //猴子与盒子的二次碰撞检测
                if(parDiv.x == par.x && parDiv.y == par.y){
                    par.x -= x;
                    par.y -= y;
                };
                //记录每个盒子是否与球重合
                if(this.map[this.level][parDiv.y*16 + parDiv.x] == 2){
                    parDiv.flag = true;
                }else{
                    parDiv.flag = false;
                };
            }
            //判断猴子有没有移动，移动则步数加一
            if(startX != par.x || startY != par.y){
                this.stepNum++;
                // console.log(parDiv.y,par.y)
                this.step.person.push({x:par.x-x,y:par.y-y});
                this.step.src.push({src:ob.src});
            }
            //记录猴子位置
            // console.log(this.step)
            par.style.left = par.x * 35 + 'px';
            par.style.top = par.y * 35 + 'px';
            par.style.zIndex = par.y * 16 + par.x + 1;
            this.win(box);
        }else{
            return;
        };
        
    },
    num:0,
    //胜利函数
    win(box){
        let btn = document.getElementsByTagName("button");
        for(let value of box){
            if(value.parentNode.flag){
                this.num++;
            }else{
                this.num--;
            }
        }
        if(this.num == box.length){
            document.onkeydown = null;
            setTimeout(()=>{
                alert('你赢了!');
                btn[1].onclick();
            },300)
        }
        this.num = 0;
    },
    //跳关
    select(){
        let btn = document.getElementsByTagName("button");
        let person = this.node('person',this.oWrap)[0];
        let This = this;
        btn[0].onclick = function(){
            if(This.level > 0){
                This.level--;
                This.startGame();
                person = This.node('person',this.oWrap)[0];
            }
        };
        btn[1].onclick = function(){
            This.level++;
            This.startGame();
            person = This.node('person',this.oWrap)[0];
        };
        btn[2].onclick =function(){
            //步数大于0时才能执行
            if(This.stepNum > 0){
                //修改猴子的定位值
                console.log(person)
                person.parentNode.x = This.step.person[This.stepNum - 1].x;
                person.parentNode.y = This.step.person[This.stepNum - 1].y;
                //给猴子定位赋值
                person.parentNode.style.left = This.step.person[This.stepNum - 1].x * 35 + 'px';
                person.parentNode.style.top = This.step.person[This.stepNum - 1].y * 35 + 'px';
                person.parentNode.style.zIndex = This.step.person[This.stepNum - 1].y * 16 + This.step.person[This.stepNum - 1].x
                //给盒子定位赋值
                if(This.step.knock[This.stepNum - 1]){
                    // console.log(This.step.box)
                    This.step.box[This.step.box.length - 1].box1.x = This.step.box[This.step.box.length - 1].x;
                    This.step.box[This.step.box.length - 1].box1.y = This.step.box[This.step.box.length - 1].y;
                    This.step.box[This.step.box.length - 1].box1.style.left = This.step.box[This.step.box.length - 1].x * 35 + 'px';
                    This.step.box[This.step.box.length - 1].box1.style.top = This.step.box[This.step.box.length - 1].y * 35 + 'px';
                    This.step.box[This.step.box.length - 1].box1.style.zIndex = This.step.box[This.step.box.length - 1].y*16+This.step.box[This.step.box.length - 1].x
                    This.step.box.pop();
                    This.step.knock.pop();
                }
                person.src = This.step.src[This.stepNum - 1].src;
                This.stepNum--;
                This.step.person.pop();
                This.step.src.pop();
            }
        }
    },
    //记录上一步的位置
    step:{
        person:[

        ],
        box:[

        ],
        src:[

        ],
        knock:[

        ]
    },
    //拿到所有指定元素
    node(name, par){
        let parObj = par || document;
        let Par = parObj.getElementsByClassName(name);
        return Par;
    },
    //map地图
    map:[
        [
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,
            0,0,0,0,0,0,1,2,1,0,0,0,0,0,0,0,
            0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,
            0,0,0,0,1,1,1,3,0,3,2,1,0,0,0,0,
            0,0,0,0,1,2,0,3,4,1,1,1,0,0,0,0,
            0,0,0,0,1,1,1,1,3,1,0,0,0,0,0,0,
            0,0,0,0,0,0,0,1,2,1,0,0,0,0,0,0,
            0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        ],
        [
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,
            0,0,0,0,1,4,0,0,1,0,0,0,0,0,0,0,
            0,0,0,0,1,0,3,3,1,0,1,1,1,0,0,0,
            0,0,0,0,1,0,3,0,1,0,1,2,1,0,0,0,
            0,0,0,0,1,1,1,0,1,1,1,2,1,0,0,0,
            0,0,0,0,0,1,1,0,0,0,0,2,1,0,0,0,
            0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,
            0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,
            0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        ],
        [
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,
            0,0,0,0,0,1,0,0,0,1,2,0,1,0,0,0,
            0,0,0,0,1,1,0,0,3,2,2,2,1,0,0,0,
            0,0,0,0,1,0,0,3,0,1,0,2,1,0,0,0,
            0,0,0,1,1,0,1,1,3,1,0,1,1,0,0,0,
            0,0,0,1,0,0,0,3,0,0,3,0,1,0,0,0,
            0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,
            0,0,0,1,1,1,1,1,1,1,4,0,1,0,0,0,
            0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        ],
        [
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,
            0,0,0,0,1,1,1,1,1,1,4,1,1,0,0,0,
            0,0,0,0,1,2,2,2,2,1,3,0,1,1,0,0,
            0,0,0,0,1,2,2,2,2,1,0,3,0,1,0,0,
            0,0,0,0,1,2,2,2,2,0,3,0,0,1,0,0,
            0,0,0,0,1,0,2,2,2,1,0,0,0,1,0,0,
            1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,
            1,0,3,0,3,0,0,0,3,0,0,1,0,0,1,0,
            1,0,0,0,0,3,3,0,0,0,3,0,3,0,1,0,
            1,1,1,0,3,0,3,0,3,0,0,1,1,1,1,0,
            0,0,1,1,0,0,0,3,0,3,0,1,0,0,0,0,
            0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,
            0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        ],
        [   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,
            0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,
            0,1,0,0,0,2,1,1,1,0,1,0,0,0,0,0,
            0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,
            0,1,0,1,0,3,0,3,1,2,0,1,0,0,0,0,
            0,1,0,1,0,0,5,0,0,1,0,1,0,0,0,0,
            0,1,0,2,1,3,0,3,0,1,0,1,0,0,0,0,
            0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,
            0,0,1,0,1,1,1,2,0,0,0,0,4,1,0,0,
            0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,
            0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        ]
    ]
};
Game.exe();