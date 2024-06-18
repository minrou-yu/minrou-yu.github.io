// 创建 shadow root
const main1Container = document.getElementById('main1-container');
const shadowRoot = main1Container.attachShadow({ mode: 'open' });

// HTML 内容
const main1Html = `
    <style>
        
  
        #main1 {
          height: 95vh;
          width: 95vw;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 150px;
          margin-bottom: 200px;
        }
        

        #click-section {
          width: 35%;
          height: 100%;
          padding: 20px 0;
          position: relative;
        }
      
        #drawerboxes {
          margin-left: 10%;
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }
      
        #drawerboxes::before {
          content: "";
          width: 8px;
          height: 94%;
          position: absolute;
          left: -10px;
          top: 3%;
          z-index: 120;
        }
      
        .drawerbox {
          height: calc(100% / 5.5);
          width: 70%;
          
          z-index: 100;
          transform: translateX(-70%);
          transition: transform .5s ease-in-out;
        }
      
        .drawerbox.active {
          transform: translateX(0);
        }
      
        .drawer-btn {
          width: 100%;
          height: 100%;
          font: 800 30px '';
          background-color: #333;
          border: none;
          transition: background-color .5s ease-in-out;
          color: #33ff2400;
        }
      
        .drawer-btn.active {
          background-size: cover;
          color: rgb(109, 255, 42);
        }
      
        .drawer-btn:hover {
          cursor: pointer;
        }
      
        .drawer-head {
          position: absolute;
          color: rgb(109, 255, 42);
          font-size: 200px;
          font-weight: 700;
          right: -38px;
          top: calc(50% - 135px);
          text-shadow: 2px -1px 8px rgba(0, 98, 21, 0.323);
        }
      
        #slide-section {
         
          height: 120%;
          width: 65%;
          justify-content: center;
          padding: 0 50px;
          background: linear-gradient(to right bottom,
              rgba(255, 255, 255, .6),
              rgba(255, 255, 255, .3),
              rgba(255, 255, 255, .2));
          backdrop-filter: blur(11px);
        }
      
        #slide-bar {
          position: absolute;
          top: 10%;
          left: 40px;
          height: 90%;
          width: 1px;
          background-color: rgb(223, 223, 223);
        }
      
        #bar {
          position: absolute;
          height: calc(100% / 4);
          width: 5px;
          top: 0;
          left: -1.2px;
          background-color: rgb(109, 255, 42);
          transition: transform .5s ease-in-out;
        }
      
        #card-section {
          height: 100%;
          width: 80%;
          overflow: hidden;
          margin-left: 50px;
        }
      
        .card {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          padding: 5% 0;
          color: white;
          font-size: 30px;
          transition: transform .5s ease-in-out;
        }
      
        .card-small-title {
          font-size: 30px;
          font-weight: 600;
          padding-bottom: min(5%, 10px);
          color:rgb(109, 255, 42);
        }
      
        .card-title {
          font-size: 80px;
          font-weight: 700;
          padding-bottom: min(20%, 10px);
          color: rgb(109, 255, 42);
        }
      
        .card-content {
          font-size: 24px;
          font-weight: 400;
          color:  #333;
          margin-bottom: 30px;
          line-height: 50px; 
        }
      
        .card-img {
          width: 100%;
          height: 600px;
          overflow: hidden;
        }
      
        .card-img img {
          width: 100%;
        }

    </style>
    <div id="main1">
        <div id="click-section">
            <div id="drawerboxes">
                <div class="drawerbox active">
                    <button class="drawer-btn active" data-slide="1">課金派戀愛<span class="drawer-head">1</span></button>
                </div>
                <div class="drawerbox">
                    <button class="drawer-btn" data-slide="2">先把弟弟藏起來<span class="drawer-head">2</span></button>
                </div>
                <div class="drawerbox">
                    <button class="drawer-btn" data-slide="3">月刊少女野崎同學<span class="drawer-head">3</span></button>
                </div>
                <div class="drawerbox">
                    <button class="drawer-btn" data-slide="4">初戀補習班<span class="drawer-head">4</span></button>
                </div>
            </div>
        </div>
        <div id="slide-section">
            <div id="slide-bar">
                <div id="bar"></div>
            </div>
            <div id="card-section">
                <div id="card1" class="card">
                    <div class="card-title">課金派戀愛</div>
                    <div class="card-small-title">/Hom</div>
                    <div class="card-content">課金派戀愛一開始以虛擬實境交友APP為題，
                        一開始你會以為這只是在講關於愛情的紛紛擾擾，但看到最後會發現整部劇情圍繞在家庭
                        、對自我的認同、社會價值觀等很深度的地方。
                    </div>
                    <div class="card-img">
                        <img src="static/02/comic01.png" alt="">
                    </div>
                </div>
                <div id="card2" class="card">
                    <div class="card-title">先把弟弟藏起來</div>
                    <div class="card-small-title">/CHAEJIHOO & Chen Li & 茨木</div>
                    <div class="card-content">經典的穿書題材，但這部女主角十分清醒，不會因為男主角各種情緒勒索就妥協(例如被綁架後不會同情男主角)，
                        畫風好看細膩，劇情也不會拖拖拉拉，主角都有帶腦思考，看的會很暢快。
                    </div>
                    <div class="card-img">
                        <img src="static/02/comic02.png" alt="">
                    </div>
                </div>
                <div id="card3" class="card">
                    <div class="card-title">月刊少女野崎同學</div>
                    <div class="card-small-title">/椿泉</div>
                    <div class="card-content">經典的戀愛喜劇作品，與其看他們談戀愛更像是看他們在搞笑，十年過去了各個cp的進度就只有一點點，
                        會在好想要他們趕快在一起的同時，又覺得還是保持現在這種關係最對味。
                    </div>
                    <div class="card-img">
                        <img src="static/02/comic03.jpg" alt="">
                    </div>
                </div>
                <div id="card4" class="card">
                    <div class="card-title">初戀補習班</div>
                    <div class="card-small-title">/純kiki</div>
                    <div class="card-content">有看過奶酪陷阱的讀者絕對不可以錯過這一部，整體就如同名稱一樣，帶給人宛如「初戀」的各種味道，
                        基本上你會看到小鹿亂撞、臉紅心跳、掩嘴偷笑、摀著枕頭尖叫。
                    </div>
                    <div class="card-img">
                        <img src="static/02/comic04.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

// 将 HTML 内容插入到 shadow root
shadowRoot.innerHTML = main1Html;

(function(shadowRoot) {
    let chosenSlideNumber = 1; // 当前选择的幻灯片编号 
    let offset = 0; // 幻灯片偏移量 
    let barOffset = 0; // 导航条偏移量 
    let intervalID; // 定时器 ID 

    // 启动幻灯片轮播 
    startSlide();

    // 获取所有抽屉按钮，并为每个按钮添加点击事件监听器 
    const drawerBtns = Array.from(shadowRoot.querySelectorAll(".drawer-btn"));
    drawerBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            clearInterval(intervalID); // 清除定时器 
            const slideNumber = parseInt(e.currentTarget.getAttribute('data-slide'));
            slideTo(slideNumber); // 切换到指定的幻灯片
            startSlide(); // 重新启动幻灯片轮播 
        });
    });

    // 获取幻灯片区域 
    const slideSection = shadowRoot.querySelector("#slide-section");
    // 鼠标移入幻灯片区域时清除定时器 
    slideSection.addEventListener("mouseenter", () => {
        clearInterval(intervalID);
    });
    // 鼠标移出幻灯片区域时重新启动幻灯片轮播 
    slideSection.addEventListener("mouseleave", () => {
        startSlide();
    });

    // 切换到指定编号的幻灯片 
    function slideTo(slideNumber) {
        drawerboxToggle(slideNumber); // 切换抽屉面板状态 
        drawerbtnToggle(slideNumber); // 切换抽屉按钮状态 
        // 更新偏移量 
        let previousSlideNumber = chosenSlideNumber;
        chosenSlideNumber = slideNumber;
        offset += (chosenSlideNumber - previousSlideNumber) * (-100); // 计算幻灯片偏移量 
        barOffset += (chosenSlideNumber - previousSlideNumber) * (100); // 计算导航条偏移量 
        barSlide(barOffset); // 移动导航条 
        // 获取所有幻灯片，为每个幻灯片设置偏移量 
        const slides = shadowRoot.querySelectorAll(".card");
        Array.from(slides).forEach(slide => {
            slide.style.transform = `translateY(${offset}%)`;
        });
    }

    // 切换抽屉面板状态 
    function drawerboxToggle(drawerboxNumber) {
        let prevDrawerboxNumber = chosenSlideNumber;
        const drawerboxes = shadowRoot.querySelectorAll(".drawerbox");
        drawerboxes[prevDrawerboxNumber - 1].classList.toggle("active"); // 切换前一个抽屉面板的状态 
        drawerboxes[drawerboxNumber - 1].classList.toggle("active"); // 切换当前抽屉面板的状态 
    }

    // 切换抽屉按钮状态 
    function drawerbtnToggle(drawerBtnNumber) {
        let prevDrawerBtnNumber = chosenSlideNumber;
        const drawerBtns = shadowRoot.querySelectorAll(".drawer-btn");
        drawerBtns[prevDrawerBtnNumber - 1].classList.toggle("active"); // 切换前一个抽屉按钮的状态 
        drawerBtns[drawerBtnNumber - 1].classList.toggle("active"); // 切换当前抽屉按钮的状态 
    }

    // 移动导航条 
    function barSlide(barOffset) {
        const bar = shadowRoot.querySelector("#bar");
        bar.style.transform = `translateY(${barOffset}%)`;
    }

    // 启动幻灯片轮播 
    function startSlide() {
        intervalID = setInterval(() => {
            slideTo(chosenSlideNumber % 4 + 1); // 每次切换到下一个幻灯片 
        }, 3000); // 每隔 3 秒自动切换幻灯片 
    }

    // 暴露接口
    return {
        slideTo: slideTo
    };
})(shadowRoot);
