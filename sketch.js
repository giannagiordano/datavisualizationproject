//creating variable mgr ("manager")
//mgr is used to set-up a base function set-up
var mgr;

//preload images
function preload(){
    img = loadImage('images/dollar.png');
    img2 = loadImage('images/percent.png');
    img3 = loadImage('images/map.png');
    img4 = loadImage('images/sudanflag.png');
    img5 = loadImage('images/sudanmap.png');
    img6 = loadImage('images/saudiarabiaflag.png');
    img7 = loadImage('images/saudiarabiamap.png');
    img8 = loadImage('images/omanflag.png');
    img9 = loadImage('images/omanmap.png');
}

//base function set-up
function setup()
{
    createCanvas(windowWidth, windowHeight);

    //referencing the SceneManager class
    mgr = new SceneManager();

    //adding eleven scenes to sketch
    //eleven different functions will be created for these scenes
    mgr.addScene ( Animation1 );
    mgr.addScene ( Animation2 );
    mgr.addScene ( Animation3 );
    mgr.addScene ( Animation4 );
    mgr.addScene ( Animation5 );
    mgr.addScene ( Animation6 );
    mgr.addScene ( Animation7 );
    mgr.addScene ( Animation8 );
    mgr.addScene ( Animation9 );
    mgr.addScene ( Animation10 );
    mgr.addScene ( Animation11 );

    //calling the showNextScene function
    mgr.showNextScene();
}


//base draw function
function draw()
{
    mgr.draw();
}

//base mousePressed function
function mousePressed()
{
    mgr.mousePressed();
}

//you can press BACKSPACE to go back to the first scene at any time
function keyPressed()
{
    
    if (keyCode === BACKSPACE) {
        mgr.showScene( Animation1 );
    } 

    //keyPressed function in SceneManager
    mgr.handleEvent("keyPressed");
}

// =============================================================
// =                         BEGIN SCENES                      = 
// =============================================================


//first scene
function Animation1()
{
    var textX;
    var textY;

    this.enter = function()
    {
        textX = 10;
        textY = 0;

        //creating a red background
        background(234, 43, 31);

        //putting text into variables
        let a = 'The Stockholm International Peace Research Institute (SIPRI) has a Military Expenditure Database containing the military spending of countries from 1949 to 2017.';
        let b = 'Click to learn more about military expenditure by country as a percentage of government spending in 2017...';

        //introducing SIPRI
        textAlign(CENTER);
        textFont('Abel');
        fill("white");
        textSize(55);
        text(a, width / 2 - 500, height / 2 - 250, 1000, 1000);

        //introducing data set (military expenditure by country as a percentage of government spending in 2017)
        textSize(30);
        text(b, width / 2 - 500, height / 2 + 150, 1000, 1000);
    }

    //you can click to the next scene
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

//second scene
function Animation2()
{
    
    this.draw = function()
    {
        //creating an orange background
        background(255, 174, 66);

        //for loop with dollar signs
        for (var i=0; i < 18; i++){
            image(img, i*70, 10, img.width/5, img.height/4);
        }

        //for loop with percentages
        for (var i=0; i < 18; i++){
            image(img2,i*70, 350, img.width/5, img.height/5);
        }

        //putting text into variables
        let c = 'Military spending as a percentage of government spending has the potential to show how much countries prioritize military expenditures over expenditures in other areas.';
        let d = 'Looking at military spending as a percentage of government spending has a different effect than looking at military spending in raw US dollars.';

        //hook sentence 1
        textSize(30);
        textAlign(CENTER);
        fill("white");
        text(c, width / 2 - 600, height / 2 - 100, 1200, 1200);

        //hook sentence 2
        textSize(30);
        textAlign(CENTER);
        fill("white");
        text(d, width / 2 - 500, height / 2 + 200, 1000, 1000);
    }

    //you can click to the next scene
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }

}

//third scene
function Animation3()
{
    this.draw = function()
    {
        //creating a dark green background
        background(12, 83, 14);

        //putting text into a variable
        let ghi = "Which countries do you think spend the highest percentages of their budgets on military expenditures?"
        let jkl = "Click to see if you're correct...";

        //large text
        textSize(70);
        textAlign(CENTER);
        fill("white");
        text(ghi, width / 2 - 400, height / 2 - 200, 800, 800);

        //small text
        textSize(30);
        text(jkl, width / 2 - 500, height / 2 + 200, 1000, 1000);
    }

    //you can click to the next scene
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

//fourth scene
function Animation4()
{
    this.draw = function()
    {
        //creating a white background
        background(255);

        //displaying map image
        image(img3, width / 2 - 400, height / 2 - 300, 950, img.height/2);

        //putting text into variables
        let e = 'What do you notice?';
        let f = 'Click to learn more about the 3 countries with the highest percentages of government spending allocated to military expenditures...';
        let def = 'Does this suprise you?';

        //sentence 1
        textSize(30);
        textAlign(CENTER);
        fill("black");
        text(def, width / 2 - 600, height/2, 1200, 1200);

        //sentence 2
        textSize(30);
        textAlign(CENTER);
        fill("black");
        text(e, width / 2 - 600, height / 2 + 100, 1200, 1200);

        //sentence 3
        textSize(30);
        textAlign(CENTER);
        fill("black");
        text(f, width / 2 - 500, height / 2 + 200, 1000, 1000);
    }

    //you can click to the next scene
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }

}

//fifth scene
//Sudan case study 
function Animation5()
{
    this.draw = function()
    {
        //creating a brown background
        background (97, 33, 15);

        //adding a title
        textSize(75);
        textAlign(CENTER);
        fill("white");
        text("#1: Sudan (30.9%)", width/2 - 30, height/2 - 200);

        //adding images (flag and map)
        image(img4, 200, 200, img4.width/5, img4.height/5);
        image(img5, 800, 200, img5.width/2, img5.height/2);

        //putting text into variables
        let q = '“If 100% of the State’s budget was allocated to the army to secure the country, then that is still not enough.” -Sudan President Omar al-Bashir, December 2015';
        let r = '“One of the reasons the Darfur region is facing war is due to years of neglect by the government, the total lack of support for certain communities here. If the government focused less on funding war and more on funding people, I bet these rebellions across the country wouldn’t be here in the first place.” -A resident in the West Darfur State';

        //when the CONTROL key is down, a quote by Sudan President Omar al-Bashir appears
        if (keyIsDown(CONTROL)) {
            textSize(30);
            textAlign(CENTER);
            fill("white");
            text(q, width/2 - 500, height/2 + 150, 1000, 1000);
        }

        //when the OPTION key is down, a quote by a resident in the West Darfur State appears
        if (keyIsDown(OPTION)) {
            textSize(30);
            textAlign(CENTER);
            fill("white");
            text(r, width/2 - 500, height/2 + 150, 1000, 1000);
        }

        //when the SHIFT key is down, a news headline appears
        if (keyIsDown(SHIFT)) {
            textSize(40);
            textAlign(CENTER);
            fill("white");
            text("Large spending on army: Economists criticise 2018 budget", width/2 - 450, height/2 + 150, 1000, 1000);
            textSize(30);
            text("Dabanga", width/2, height/2 +250);
            text("December 26, 2017", width/2, height/2 + 300);
        }

        //when the RETURN key is down, a news headline appears
        if (keyIsDown(RETURN)) {
            textSize(40);
            textAlign(CENTER);
            fill("white");
            text("Sudan could spend up to 70% of its budget on several war fronts this year", width/2 - 500, height/2 + 150, 1000, 1000);
            textSize(30);
            text("Quartz Africa", width/2, height/2 +290);
            text("February 12, 2016", width/2, height/2 + 340);
        }

        //when the ESCAPE key is down, a news headline appears
        if (keyIsDown(ESCAPE)) {
            textSize(40);
            textAlign(CENTER);
            fill("white");
            text("Sudan Spends Almost Everything on War", width/2 - 460, height/2 + 150, 1000, 1000);
            textSize(30);
            text("War Is Boring", width/2, height/2 +250);
            text("February 16, 2016", width/2, height/2 + 300);
        }

        //explanation of the features in this scene
        textSize(20);
        textAlign(LEFT);
        fill("white");
        text("Click the shift, escape, and return keys for news headlines!", 30, 30, 500, 500);
        textAlign(RIGHT);
        text("Click the control and option keys for quotes!", 750, 30, 500, 500)
    }

    //you can click to the next scene
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

//sixth scene
//Sudan case study
function Animation6()
{
    this.draw = function()
    {

        //putting text into variables
        let g = 'Location: north-eastern Africa, bordering the Red Sea, between Egypt and Eritrea';
        let h = 'Population: 43,120,843 (July 2018)';
        let i = 'Population growth rate: 2.93% (2018)';
        let j = 'Languages: Arabic (official)';
        let k = 'Government type: presidential republic';
        let l = 'Military branches: Sudanese Armed Force (SAF): Land Forces, Navy (includes Marines), Sudanese Air Force, Rapid Support Forces, Popular Defense Forces';
        
        let m = 'An increase in military expenditures in Sudan in 2017 drove an overall trend of increased military expenditure in Sub-Saharan Africa.';
        let n = 'This increase was primarily due to intensified fighting between the Sudanese Government and rebels.';
        let o = 'On the military, Sudan spends 25 times as much as it spends on health and more than 10 times as much as it spends on education.';
        let p = 'Economists say that even more military expenditures are hidden within other categories of expenditures such as “emergency expenditure.”';

        //If the mouse is to the right of the center line, the background is the flag of Sudan
        //and general information about Sudan is displayed
        //If the mouse is to the left of the center line, the background is Sudan on a map
        //and facts on military spending in Sudan are displayed
        if (mouseX > width/2){
            //flag of Sudan in the background
            background(img4);
            //general information about Sudan
            textSize(75);
            textAlign(CENTER);
            fill("white");
            text ("Sudan: General Information", width/2 - 20, height - 550);
            textSize(30);
            textAlign(LEFT);
            fill("white");
            text (g, width/2 - 500, height/2 - 160, 1200, 1200);
            fill("black");
            text (h, width/2 - 500, height/2 - 100, 1200, 1200);
            text (i, width/2 - 500, height/2 - 40, 1200, 1200);
            text (j, width/2 - 500, height/2 + 20, 1200, 1200);
            text (k, width/2 - 500, height/2 + 80, 1200, 1200);
            fill("white");
            text (l, width/2 - 500, height/2 + 140, 1000, 1200);
        }
        else if (mouseX < width/2){
            //Sudan on a map in the background
            background(img5);
            //facts on military spending in Sudan
            textSize(75);
            textAlign(CENTER);
            fill("black");
            text("Sudan: Facts on Military Spending", width/2 - 20, height - 550);
            textSize(30);
            textAlign(LEFT);
            fill("black");
            text (m, width/2 - 500, height/2 - 150, 1000, 1000);
            text (n, width/2 - 500, height/2 - 50, 1000, 1000);
            text (o, width/2 - 500, height/2 + 50, 1000, 1000);
            text (p, width/2 - 500, height/2 + 150, 1000, 1000);
        }
    }

     //you can click to the next scene
     this.mousePressed = function()
     {
         this.sceneManager.showNextScene();
     }
}

//seventh scene
//Saudi Arabia case study 
function Animation7()
{

    this.draw = function()
    {
        //creating a yellow background
        background (255, 241, 17);

        //adding a title
        textSize(75);
        textAlign(CENTER);
        fill("black");
        text("#2: Saudi Arabia (30.4%)", width/2 - 30, height/2 - 200);

        //adding images (flag and map)
        image(img6, 200, 200, img4.width/5, img4.height/5);
        image(img7, 800, 200, img5.width/2, img5.height/2);

        //when the SHIFT key is down, a news headline appears
        if (keyIsDown(SHIFT)) {
            textSize(40);
            textAlign(CENTER);
            fill("black");
            text("Military Spending Dominates Saudi Arabia’s Budget", width/2 - 450, height/2 + 150, 1000, 1000);
            textSize(30);
            text("Forbes", width/2, height/2 +250);
            text("October 17, 2018", width/2, height/2 + 300);
        }

        //when the RETURN key is down, a news headline appears
        if (keyIsDown(RETURN)) {
            textSize(40);
            textAlign(CENTER);
            fill("black");
            text("Saudi Arabia boosts military spending to record level ", width/2 - 500, height/2 + 150, 1000, 1000);
            textSize(30);
            text("CNN", width/2, height/2 +250);
            text("April 12, 2015", width/2, height/2 + 300);
        }

        //when the ESCAPE key is down, a news headline appears
        if (keyIsDown(ESCAPE)) {
            textSize(40);
            textAlign(CENTER);
            fill("black");
            text("Saudi Arabia is America’s No. 1 weapons customer", width/2 - 460, height/2 + 150, 1000, 1000);
            textSize(30);
            text("CBS News", width/2, height/2 +250);
            text("October 12, 2018", width/2, height/2 + 300);
        }

        //explanation of the features in this scene
        textSize(20);
        textAlign(LEFT);
        fill("black");
        text("Click the shift, escape, and return keys for news headlines!", 30, 30, 500, 500);
    }

    //you can click to the next scene
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
    
}

//eight scene
//Saudi Arabia case study
function Animation8()
{
    this.draw = function()
    {

        //putting text into variables
        let s = 'Location: Middle East, bordering the Persian Gulf and the Red Sea, north of Yemen';
        let t = 'Population: 33,091,113 (July 2018)';
        let u = 'Population growth rate: 1.63% (2018)';
        let v = 'Languages: Arabic (official), English (official), Nubian, Ta Bedawie, Fur';
        let w = 'Government type: absolute monarchy';
        let x = 'Military branches: Ministry of Defense: Royal Saudi Land Forces, Royal Saudi Naval Forces, Royal Saudi Air Force, Royal Saudi Air Defense Forces, Royal Saudi Strategic Rocket Forces, Ministry of the National Guard';
        
        let y = 'Saudi Arabia is by far the largest military spender in the Middle East.';
        let z = 'In 2018, Saudi Arabia spent more on military expenditures than education and health.';
        let ab = 'Saudi Arabia is the top consumer of U.S. weapons.';
        let cd = 'These weapons are largely being used in Yemen, where Saudi Arabia is leading a coalition of states against rebel forces.';
        let ef = 'Saudi Arabia also provides military support for rebel groups in Syria.';
        let gh = 'There is a lack of transparency when it comes to military matters in Saudi Arabia, making it hard to determine what exactly the military expenditures are going toward.';

        //If the mouse is to the right of the center line, the background is the flag of Saudi Arabia
        //and general information about Saudi Arabia is displayed
        //If the mouse is to the left of the center line, the background is Saudi Arabia on a map
        //and facts on military spending in Saudi Arabia are displayed
        if (mouseX > width/2){
            //flag of Saudi Arabia in the background
            background(img6);
            //general information about Saudi Arabia
            textSize(75);
            textAlign(CENTER);
            fill("white");
            text ("Saudi Arabia: General Information", width/2 - 20, height - 610);
            textSize(30);
            textAlign(LEFT);
            fill("white");
            text (s, width/2 - 500, height/2 - 220, 1200, 1200);
            text (t, width/2 - 500, height/2, 1200, 1200);
            text (u, width/2 - 500, height/2 + 50, 1200, 1200);
            text (v, width/2 - 500, height/2 + 100, 1200, 1200);
            text (w, width/2 - 500, height/2 + 170, 1200, 1200);
            text (x, width/2 - 500, height/2 + 220, 1000, 1200);
        }
        else if (mouseX < width/2){
            //Saudi Arabia on a map in the background
            background(img7);
            //facts on military spending in Saudi Arabia
            textSize(75);
            textAlign(CENTER);
            fill("black");
            text("Saudi Arabia: Facts on Military Spending", width/2 - 20, height - 610);
            textSize(30);
            textAlign(LEFT);
            fill("black");
            text (y, width/2 - 500, height/2 - 200, 1000, 1000);
            text (z, width/2 - 500, height/2 - 120, 1000, 1000);
            text (ab, width/2 - 500, height/2 - 40, 1000, 1000);
            text (cd, width/2 - 500, height/2 + 40, 1000, 1000);
            text (ef, width/2 - 500, height/2 + 140, 1000, 1000);
            text (gh, width/2 - 500, height/2 + 220, 1000, 1000);
        }
    }

     //you can click to the next scene
     this.mousePressed = function()
     {
         this.sceneManager.showNextScene();
     }
}

//ninth scene
//Oman case study 
function Animation9()
{

    this.draw = function()
    {
        //creating a cream background
        background (249, 237, 204);

        //adding a title
        textSize(75);
        textAlign(CENTER);
        fill("black");
        text("#3: Oman (26.3%)", width/2 - 30, height/2 - 200);

        //adding images (flag and map)
        image(img8, 200, 200, img4.width/5, img4.height/5);
        image(img9, 800, 200, img5.width/2, img5.height/2);

        //when the SHIFT key is down, a news headline appears
        if (keyIsDown(SHIFT)) {
            textSize(40);
            textAlign(CENTER);
            fill("black");
            text("With an eye on Iran, U.S. clinches strategic port deal with Oman", width/2 - 450, height/2 + 150, 1000, 1000);
            textSize(30);
            text("Reuters", width/2, height/2 +250);
            text("March 24, 2019", width/2, height/2 + 300);
        }

        //when the RETURN key is down, a news headline appears
        if (keyIsDown(RETURN)) {
            textSize(40);
            textAlign(CENTER);
            fill("black");
            text("Mattis, Omani Officials Discuss Defense Relationship in Muscat", width/2 - 500, height/2 + 150, 1000, 1000);
            textSize(30);
            text("U.S. Department of Defense", width/2, height/2 +250);
            text("March 13, 2018", width/2, height/2 + 300);
        }

        //when the ESCAPE key is down, a news headline appears
        if (keyIsDown(ESCAPE)) {
            textSize(40);
            textAlign(CENTER);
            fill("black");
            text("British Army and Oman participate in joint military exercise", width/2 - 460, height/2 + 150, 1000, 1000);
            textSize(30);
            text("Army Technology", width/2, height/2 +250);
            text("March 14, 2019", width/2, height/2 + 300);
        }

        //explanation of the features in this scene
        textSize(20);
        textAlign(LEFT);
        fill("black");
        text("Click the shift, escape, and return keys for news headlines!", 30, 30, 500, 500);
    }

    //you can click to the next scene
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
    
}

//tenth scene
//Oman case study
function Animation10()
{

    this.draw = function()
    {

        //putting text into variables
        let ij = 'Location: Middle East, bordering the Arabian Sea, Gulf of Oman, and Persian Gulf, between Yemen and the UAE';
        let kl = 'Population: 4,613,241 (July 2017)';
        let mn = 'Population growth rate: 2% (2018)';
        let op = 'Languages: Arabic (official), English, Baluchi, Urdu, Indian dialects';
        let qr = 'Government type: absolute monarchy';
        let st = 'Military branches: Sultan’s Armed Forces (SAF): Royal Army of Oman, Royal Navy of Oman, Royal Air Force of Oman';
        
        let uv = 'The Gulf states, including Saudi Arabia, Bahrain, Iraq, Kuwait, Oman, and the UAE, have spent more of their economies on defense than any major U.S. ally in Europe.';
        let wx = 'Chief Pentagon spokesperson, Dana W. White, said in a statement on March 13th, 2018 that Oman contributes to security efforts in the Middle East by participating in Gulf Cooperative Council counterterrorism efforts and maintaining freedom of navigation in the Strait of Hormuz.';
        let yz = 'Oman and the U.K. have a longstanding defense relationship.';
        let abc = 'A European former advisor to governments in the Gulf region explained that a large reason why countries in the Gulf region spend so much on the military is because it is essential to maintaining a stable military relationship with the United States.';

        //If the mouse is to the right of the center line, the background is the flag of Oman
        //and general information about Oman is displayed
        //If the mouse is to the left of the center line, the background is Oman on a map
        //and facts on military spending in Oman are displayed
        if (mouseX > width/2){
            //flag of Oman in the background
            background(img8);
            //general information about Oman
            textSize(75);
            textAlign(CENTER);
            fill("black");
            text ("Oman: General Information", width/2 + 120, height - 610);
            textSize(30);
            textAlign(LEFT);
            fill("white");
            text (ij, width/2 - 500, height/2 - 100, 1000, 1000);
            text (kl, width/2 - 500, height/2 - 10, 1200, 1200);
            text (mn, width/2 - 500, height/2 + 50, 1200, 1200);
            text (op, width/2 - 500, height/2 + 120, 1200, 1200);
            text (qr, width/2 - 500, height/2 + 190, 1200, 1200);
            text (st, width/2 - 500, height/2 + 260, 1000, 1200);
        }
        else if (mouseX < width/2){
            //Oman on a map in the background
            background(img9);
            //facts on military spending in Oman
            textSize(75);
            textAlign(CENTER);
            fill("black");
            text("Oman: Facts on Military Spending", width/2 - 20, height - 610);
            textSize(30);
            textAlign(LEFT);
            fill("black");
            text (uv, width/2 - 500, height/2 - 200, 1000, 1000);
            text (wx, width/2 - 500, height/2 - 100, 1000, 1000);
            text (yz, width/2 - 500, height/2 + 75, 1000, 1000);
            text (abc, width/2 - 500, height/2 + 150, 1000, 1000);
        }
    }

     //you can click to the next scene
     this.mousePressed = function()
     {
         this.sceneManager.showNextScene();
     }
}

//eleventh scene
function Animation11()
{
    //linking to map.html
    //put it in setup function so it doesn't continually draw
    this.setup = function(){
        let link =  createA('map.html', 'CLICK THIS LINK');
        link.position(width/2 - 70, 650)
    }
    
    this.draw = function()
    {
        //creating a red background
        background(234, 43, 31);

        //putting text into variables
        let def = 'Click one more time for an interactive map to further explore military expenditure as a percentage of government spending!';

        //text
        textSize(70);
        textAlign(CENTER);
        fill("white");
        text(def, width / 2 - 400, height / 2 - 200, 800, 800);
    }
    
}