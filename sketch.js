    //dog
    var gridarr = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
      [6, 6, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
      [6, 6, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
      [1, 3, 1, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2,2],
      [3, 4, 1, 1, 4, 3, 5, 0, 0, 0, 0, 0, 0, 2, 2,0],
      [1, 1, 1, 1, 1, 1, 5, 5, 5, 0, 0, 0, 2, 2, 0,0],
      [1, 6, 7, 7, 6, 1, 5, 5, 5, 5, 5, 2, 2, 0, 0,0],
      [1, 6, 6, 6, 6, 1, 5, 5, 5, 5, 5, 5, 0, 0, 0,0],
      [1, 7, 7, 7, 7, 1, 5, 5, 5, 5, 5, 5, 0, 0, 0,0],
      [0, 8, 8, 5, 8, 8, 5, 5, 5, 9, 9, 5, 0, 0, 0,0],
      [0, 8, 8, 9, 8, 8, 5, 9, 9, 9, 9, 0, 0, 0, 0,0],
      [0, 8, 8, 0, 8, 8, 9, 9, 9, 0, 0, 0, 0, 0, 0,0],
      [0, 8, 8, 0, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
      ]; 

      //dogtext
      var textArr = [
        ["meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow"], 
        ["meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow"], 
        ["meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow", "meow"], 
        ["meow", "meow", "meow", "meow", "dog", "dog", "dog", "dog", "dog", "dog", "dog", "dog", "meow", "meow", "meow", "meow"], 
        ["meow", "meow", "alert", "dog", "dog", "dog", "dog", "dog", "dog", "dog", "dog", "dog", "dog", "alert", "meow", "meow"], 
        ["meow", "alert", "alert", "dog", "dog", "food?", "food?", "dog", "dog", "food?", "food?", "dog", "dog", "alert", "alert", "meow"], 
        ["meow", "alert", "meow", "dog", "dog", "food?", "food?", "dog", "dog", "food?", "food?", "dog", "dog", "meow", "alert", "meow"], 
        ["meow", "alert", "meow", "dog", "dog", "dog", "dog", "dog", "dog", "dog", "dog", "dog", "dog", "meow", "meow", "meow"], 
        ["meow", "meow", "meow", "dog", "dog", "dog", "dog", "sniff", "sniff", "dog", "dog", "dog", "dog", "meow", "meow", "meow"], 
        ["meow", "meow", "meow", "dog", "dog", "dog", "dog", "sniff", "sniff", "dog", "dog", "dog", "dog", "meow", "meow", "meow"], 
        ["meow", "meow", "meow", "dog", "dog", "woof", "dog", "dog", "dog", "dog", "woof", "dog", "dog", "meow", "meow", "meow"], 
        ["meow", "meow", "meow", "dog", "dog", "woof", "woof", "woof", "woof", "woof", "woof", "dog", "dog", "meow", "meow", "meow"], 
        ["meow", "meow", "meow", "meow", "dog", "dog", "dog", "dog", "dog", "dog", "dog", "dog", "meow", "meow", "meow", "meow"], 
        ["meow", "meow", "meow", "meow", "fluff", "fluff", "fluff", "fluff", "fluff", "fluff", "fluff", "fluff", "meow", "meow", "meow", "meow"], 
        ["meow", "meow", "meow", "meow", "fluff", "fluff", "fluff", "fluff", "fluff", "fluff", "fluff", "fluff", "meow", "meow", "meow", "meow"], 
        ["meow", "meow", "meow", "meow", "fluff", "fluff", "fluff", "fluff", "fluff", "fluff", "fluff", "fluff", "meow", "meow", "meow", "meow"], 

        ]; 

        //link
        var gridarrK = [
          [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], 
          [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
          [0, 0, 0, 3, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 3, 0], 
          [0, 0, 0, 3, 0, 2, 2, 3, 3, 3, 3, 2, 2, 0, 3, 0], 
          [0, 0, 0, 3, 3, 2, 3, 1, 3, 3, 1, 3, 2, 3, 3, 0], 
          [0, 0, 0, 3, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 3, 0], 
          [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0],
          [0, 0, 0, 0, 1, 1, 3, 3, 2, 2, 3, 3, 1, 1, 2, 0],
          [0, 0, 2, 2, 2, 2, 2, 3, 3, 3, 3, 1, 1, 2, 2, 2], 
          [0, 2, 2, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 3, 2, 2], 
          [0, 2, 3, 3, 3, 2, 2, 3, 2, 2, 1, 1, 3, 3, 3, 2], 
          [0, 2, 2, 3, 2, 2, 2, 3, 1, 2, 2, 2, 2, 3, 3, 3], 
          [0, 2, 2, 3, 2, 2, 2, 3, 2, 2, 1, 1, 1, 1, 3, 0], 
          [0, 2, 2, 2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 0, 0, 0], 
          [0, 0, 3, 3, 3, 3, 3, 2, 0, 0, 2, 2, 2, 0, 0, 0],
          [0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
          ]; 


          //pikachu
        var gridarrTextK = [
          ["white", "white", "white", "white", "white", "white", "white", "white", "white", "black", "black", "white", "white", "white", "white", "white"], 
          ["white", "white", "white", "white", "white", "white", "black", "black", "black", "black", "black", "black", "black", "black", "black", "white"], 
          ["white", "white", "white", "black", "black", "black", "yellow", "yellow", "black", "black", "black", "yellow", "yellow", "yellow", "black", "white"], 
          ["white", "white", "black", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "black", "yellow", "yellow", "yellow", "black", "white", "white"], 
          ["white", "black", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "black", "black", "yellow", "yellow", "black", "white", "white", "white"], 
          ["white", "black", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "black", "yellow", "yellow", "black", "white", "white", "white", "white"], 
          ["black", "yellow", "yellow", "black", "yellow", "yellow", "yellow", "yellow", "yellow", "black", "yellow", "black", "black", "black", "white", "white"],
          ["black", "yellow", "yellow", "yellow", "yellow", "red", "yellow", "yellow", "yellow", "black", "black", "yellow", "yellow", "black", "white", "white"],
          ["white", "black", "yellow", "yellow", "yellow", "yellow", "yellow", "brown", "brown", "brown", "black", "brown", "black", "white", "white", "white"], 
          ["white", "black", "yellow", "black", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "black", "brown", "brown", "black", "white", "white"], 
          ["white", "black", "yellow", "black", "black", "yellow", "yellow", "brown", "brown", "brown", "black", "brown", "black", "white", "white", "white"], 
          ["white", "black", "black", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "black", "black", "black", "white", "white", "white", "white"], 
          ["black", "yellow", "yellow", "black", "yellow", "yellow", "yellow", "yellow", "black", "black", "yellow", "black", "white", "white", "white", "white"], 
          ["white", "black", "black", "white", "black", "black", "black", "black", "yellow", "yellow", "black", "white", "white", "white", "white", "white"], 
          ["white", "white", "white", "white", "white", "white", "white", "white", "black", "black", "white", "white", "white", "white", "white", "white"],
          ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
          ]; 

          //amongus
          var gridarrI = [
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 2, 2, 1, 2, 2, 2, 1, 5, 4, 4, 6, 6, 1, 0],
            [0, 1, 3, 2, 1, 2, 2, 2, 1, 5, 5, 4, 4, 4, 1, 0],
            [0, 1, 3, 2, 1, 2, 2, 2, 1, 5, 5, 5, 5, 5, 1, 0],
            [0, 1, 3, 3, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 3, 3, 1, 2, 2, 2, 2, 3, 3, 3, 1, 0, 0, 0],
            [0, 1, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0],
            [0, 1, 3, 3, 1, 3, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 3, 3, 2, 2, 2, 2, 2, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 3, 3, 1, 1, 1, 2, 2, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 3, 3, 1, 0, 1, 3, 2, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 3, 3, 1, 0, 1, 3, 3, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0],
            ];

     let pikachuFamily = [];
      let pikachuCount = 10;
  
      var a = 0; 
      var b = 0;
      var c = 0; 
      var d = "white"; 
      var e = 0;

      let state = 0;

      let imgblackBone, imgChicken, imgBone, imgBread, imgSteak;
      let imagesMinecraft = new Array(6);

      //variable for chicken animate dog
      let num = 2;

      //variable for sunbeams scene 5
      let rotation = 0;

      function preload(){
        imgblackBone = loadImage("images/blackBone.png");
        imgChicken = loadImage("images/chicken.png");
        imgBone = loadImage("images/bone.png");
        imgBread = loadImage("images/bread.png");
        imgSteak = loadImage("images/steak.png");
        imgBlank = loadImage("images/blank.png");
      }
  
      function setup() { 
  
      createCanvas(1200, 900); 
 
      angleMode(DEGREES);
        
      imagesMinecraft[0] = imgblackBone;
      imagesMinecraft[1] = imgBone;
      imagesMinecraft[2] = imgChicken;
      imagesMinecraft[3] = imgBread;
      imagesMinecraft[4] = imgSteak;
      imagesMinecraft[5] = imgBlank

        //pikachu setup
        for(let i = 0; i < pikachuCount; i++){
          pikachuFamily[i] = new Pikachu(gridarrTextK);
        }
      }




      function draw(){

        //2 base sketches minecraft wolf and text dog
        if(state == 0){
          background(70,100,120);
          textSize(50);
          fill(255);
          text("My Dog Arrays",100,100);
          rcDoggo(700,200,-1.5,1.5,-10,100);
          rcDoggo(700,400,1,1,0,255); //doggo takes x,y,scale1,scale2,rotate,alpha
          rcDoggo(300,200,0.4,0.4,-10,255);
          rcDoggo(200,300,-0.6,0.6,20,255);
          
          
          textDog(700,-20,1,3);
          textDog(500,height-200,0.6,20);
          
        }

        //2 image dogs
        if(state == 1){
          background(70,100,120);
          rcDoggoToImage(100,100,2,2,0);

          textDogToImages(250,50,2.5);
          
          text("Dog Arrays using Minecraft Food",250,800);
        }

        //2 image array versions
        if(state == 2){
          background(70,100,120);

          rcDoggoRGBDotMatrix(50,0,1,1,0,255);
          rcDoggoMonoMorph(50,450,1,1,0,255);

          textDogSketchMix(650,420,1,0);
          textDogChickenAnimate(400,0,2,0);

          textSize(45);
          text("4 More", 550,250);
          text("Modified Arrays",470,300)
        }

        //2 or more codes from partners displayed
        if(state == 3){
          background(70,100,120);
          //title
          textSize(100);
          strokeWeight(3);
          stroke(0);
          fill(255, 169, 1);
          text("Bitmap Collaboration",150,250);
          text("Works",450,350);
          
            //image display
          textSize(25);
          fill(255);
          stroke(0);
          strokeWeight(2);

          link(50,height/2+50,0.7);
          text("Aakash Kumar 'Link'", 100,870);

          pikachu(500,height/2+50, 0.7);
          text("Aakash Kumar 'Pikachu'", 530,870);

          amongus(850,height/2+50,0.7);//600, 50, 0.7
          text("Ivana Gottwald 'AmongUs'", 900,870);//620,430
        }

        //partner code in action with my code
        if(state == 4){
          background(0);

          

          if(floor(frameCount) % 110){
            textDog(100,60,0.7,4,100);
            textDogChickenAnimate(350,130,2,-10,70);
            rcDoggoMonoMorph(900,600,0.5,0.5,0,140);
            rcDoggoMonoMorph(700,200,-0.4,0.4,210,100);
            textDogToImages(600,1700,0.5,-30,140); 
            textDogToImages(1600,0,0.5,30,140);  
            textDogSketchMix(900,400,0.5,10,160);
          }
          else{
            background(0);
          }
          amongus(1100,400,-0.6,0.6,0,150);
          link(0,400,0.9);
          
        }

        //heaven doggo
        if(state == 5){
          background(255, 178, 101);

    

          rotation += 0.3;
          sunBeams(250,500,rotation);
          image(imagesMinecraft[2],20,200,500,500);
          
          for(let i = 0; i < 1400; i=i+50){
            cloud(i+30,height-50,1.5,0);
            cloud(i,height,2,0);
          }

          cloud(700,600,2,30);
          halo(720,400,0.3);
          rcDoggoRGBDotMatrix(700,420,0.3,0.3,0,255);
          cloud(780,620,2,-15);

          halo(250,150,1);

         for(let i = 0; i < 640; i=i+80){
          rcDoggo(i+630,height-130,0.1,0.1,0,255);
          rcDoggo(i+590,height-120,0.15,0.15,0,255);
          rcDoggo(i+550,height-100,0.2,0.2,0,255);
          //rcDoggoToImage(i+550,height-100,0.2,0.2,0,255);
          
         }

         rcDoggoToImage(400,height-200,0.7,0.7,0,255);
          
        }

        //pika
        /*
        if(state == 6){
          background(137, 211, 252);
          
          //rcDoggoToImage
          //rcDoggoRGBDotMatrix
          //textDoggoSketchMix
          //textDogChickenAnimate
          //link
          //amongus
          
          for(let i = 0; i < pikachuFamily.length; i++){
            pikachuFamily[i].movePika();
            pikachuFamily[i].displayPika(0.1);
          }

        }*/
      }

 




//my sketch functions

function rcDoggo(x,y,s1,s2,r,alpha){
      push();
      translate(x,y)
      scale(s1,s2);
      rotate(r);
      
      noStroke();
     

      for (var i = 0; i < gridarr.length; i++) { 
          for (var j = 0; j < gridarr.length; j++) { 
              a = gridarr[i][j];
              if(a === 9){
                fill(196, 99, 2,alpha);//back legs
              }
              else if(a === 8){
                fill(239, 156, 73,alpha); //front legs
              }
              else if(a === 7){
                fill(120,alpha); //mouth and nose
              }
              else if (a === 6){
                 fill(258, 195, 107,alpha); //brown ears 
              }
              else if(a === 5){
                fill(143, 72, 0,alpha);//darker fur
              }
              else if (a === 4) { 
                fill(10,alpha);// eye pupil
               }
               else if (a === 3) { 
                fill(255,alpha); //eye
               }
               else if (a === 2) { 
                fill(238, 145, 67,alpha); //tail highlights
               }
              else if (a === 1) { 
                fill(217, 109, 7,alpha); //face brown fur
              } else{
                noFill();
              }
  
              rect((j * 30), (i * 30), 30, 30);
           }
        
       }
       pop();
      }

function textDog(x,y,s,r,alpha){
        push();
        textSize(11);
        stroke(0);
        strokeWeight(0.8);

        scale(s);
        rotate(r);
        translate(x,y);
        //array #2
        for (var i = 0; i < textArr.length; i++) { 
         for (var j = 0; j < textArr.length; j++) { 
             b = textArr[i][j];
             if(b === "fluff"){
               fill(169, 163, 157,alpha);
             }
             else if(b === "alert"){
               fill(228, 224, 221,alpha); //alert
             }
             else if (b === "woof"){
               fill(175, 165, 155,alpha); //woof
             }
              else if (b === "food?") { 
               fill(103, 102, 100,alpha); //food?
              }
              else if (b === "sniff") { 
               fill(30,alpha); //sniff
              }
             else if (b === "dog") { 
               fill(248, 235, 224,alpha);//dog
             } else{
               fill(130,alpha);
             }
 
             text(b,j*30,i*30);
          }
      }
      pop();
 
}

function rcDoggoToImage(x,y,s1,s2,r,alpha){
      push();
      translate(x,y)
      scale(s1,s2);
      rotate(r);
      stroke(1);
      strokeWeight(1);
      noStroke();
      tint(255,alpha);
      let numImg;
      for (var i = 0; i < gridarr.length; i++) { 
          for (var j = 0; j < gridarr.length; j++) { 
              let value = gridarr[i][j];
              if(value === 9){
                numImg = imagesMinecraft[1];//back legs
              }
              else if(value === 8){
                numImg = imagesMinecraft[1]; //front legs
              }
              else if(value === 7){
                numImg = imagesMinecraft[4]; //mouth and nose
              }
              else if (value === 6){
                numImg = imagesMinecraft[1]; //brown ears 
              }
              else if(value === 5){
                numImg = imagesMinecraft[0];//darker fur
              }
              else if (value === 4) { 
                numImg = imagesMinecraft[2];// eye pupil
               }
               else if (value === 3) { 
                numImg = imagesMinecraft[2];
               }
               else if (value === 2) { 
                numImg = imagesMinecraft[3];//tail highlights
               }
              else if (value === 1) { 
                numImg = imagesMinecraft[1];//face brown fur
              } else{
                numImg = imagesMinecraft[5];
              }
              
              image(numImg,j * 16, i * 16, 20, 20);
           }
        
       }
       pop();
}

function textDogToImages(x,y,s,r,alpha){

     push();
    textSize(11);
    stroke(0);
    strokeWeight(0.8);

    scale(s);
    rotate(r);
    translate(x,y);
    tint(255,alpha);
    let numImg;
    for (var i = 0; i < textArr.length; i++) { 
      for (var j = 0; j < textArr.length; j++) { 
       let value = textArr[i][j];
       if(value === "fluff"){
        numImg = imagesMinecraft[0];
       }
       else if(value === "alert"){
        numImg = imagesMinecraft[4]; //alert
       }
       else if (value === "woof"){
        numImg = imagesMinecraft[3]; //woof
       }
        else if (value === "food?") { 
          numImg = imagesMinecraft[2]; //food?
        }
        else if (value === "sniff") { 
          numImg = imagesMinecraft[3];//sniff
        }
       else if (value === "dog") { 
        numImg = imagesMinecraft[1];//dog
       } else{
         numImg = imagesMinecraft[5];
       }

       image(numImg,j * 12, i * 12, 15, 15);
    }
  }
  pop();
}

//4 more map functions
function rcDoggoRGBDotMatrix(x,y,s1,s2,r,alpha){
  push();
  translate(x,y)
  scale(s1,s2);
  rotate(r);
  
  noStroke();
 

  for (var i = 0; i < gridarr.length; i++) { 
      for (var j = 0; j < gridarr.length; j++) { 
          a = gridarr[i][j];
          if(a === 9){
            fill(random(0,255), random(0,255), random(0,255),alpha);//back legs
          }
          else if(a === 8){
            fill(random(0,255), random(0,255), random(0,255),alpha); //front legs
          }
          else if(a === 7){
            fill(random(0,255),alpha); //mouth and nose
          }
          else if (a === 6){
             fill(random(0,255), random(0,255), random(0,255),alpha); //brown ears 
          }
          else if(a === 5){
            fill(random(0,255), random(0,255), random(0,255),alpha);//darker fur
          }
          else if (a === 4) { 
            fill(random(0,255),alpha);// eye pupil
           }
           else if (a === 3) { 
            fill(random(0,255),alpha); //eye
           }
           else if (a === 2) { 
            fill(random(0,255), random(0,255), random(0,255),alpha); //tail highlights
           }
          else if (a === 1) { 
            fill(random(0,255), random(0,255), random(0,255),alpha); //face brown fur
          } else{
            noFill();
          }

          ellipse((j * random(30,34)), (i * random(30,34)), 20, 20);
       }
    
   }
   pop();
  }

function rcDoggoMonoMorph(x,y,s1,s2,r,alpha){
    push();
    translate(x,y)
    scale(s1,s2);
    rotate(r);
    
    noStroke();
   

    for (var i = 0; i < gridarr.length; i++) { 
        for (var j = 0; j < gridarr.length; j++) { 
            a = gridarr[i][j];
            if(a === 9){
              fill(196,alpha);//back legs
            }
            else if(a === 8){
              fill(239,alpha); //front legs
            }
            else if(a === 7){
              fill(120,alpha); //mouth and nose
            }
            else if (a === 6){
               fill(120,alpha); //brown ears 
            }
            else if(a === 5){
              fill(143,alpha);//darker fur
            }
            else if (a === 4) { 
              fill(10,alpha);// eye pupil
             }
             else if (a === 3) { 
              fill(255,alpha); //eye
             }
             else if (a === 2) { 
              fill(238,alpha); //tail highlights
             }
            else if (a === 1) { 
              fill(217,alpha); //face brown fur
            } else{
              noFill();
            }

            if(i < 4){
              ellipse((j * 30), (i * 25), 30, 20);
            }
            else if(i < 8){
              rect((j *25), (i * 30), 20, 30);
            }
            else{
              arc((j*27), (i*32), 20, 20, 0, 180);

            }
            
         }
      
     }
     pop();
    }

function textDogSketchMix(x,y,s,r,alpha){
    push();
    textSize(25);
    stroke(0);
    strokeWeight(0.8);

    scale(s);
    rotate(r);
    translate(x,y);
    //array #2
    for (var i = 0; i < textArr.length; i++) { 
      for (var j = 0; j < textArr.length; j++) { 
          b = textArr[i][j];
          if(b === "fluff"){
            fill(255,alpha);
            ellipse(j*30,i*30,30,30);
         }
         else if(b === "alert"){
            fill(228, 224, 221,alpha); //alert
            ellipse(j*30,i*30,30,30);
          }
          else if (b === "woof"){
            fill(175, 165, 155,alpha); //woof
            text(b,j*27,i*31);
         }
          else if (b === "food?") { 
           fill(103, 102, 100,alpha); //food?
           ellipse(j*30,i*30,30,30);
          }
          else if (b === "sniff") { 
           fill(30,alpha); //sniff
           text(b,j*27,i*32);
          }
         else if (b === "dog") { 
           fill(248, 235, 224,alpha);//dog
           arc((j*30), (i*30), 20, 20, 90, 180);
         } else{
            fill(random(100,130),alpha);
            text(b,j*30,i*30);
            rect(j*30,i*30,5,5);
            arc((j*31), (i*31), 10, 10, 0, 180);
         }

          
      }
   }
  pop();

}

function textDogChickenAnimate(x,y,s,r,alpha){

push();
 textSize(11);
 stroke(0);
 strokeWeight(0.8);

 scale(s);
 rotate(r);
 translate(x,y);
 tint(255,alpha);
 let numImg;
 for (var i = 0; i < textArr.length; i++) { 
   for (var j = 0; j < textArr.length; j++) { 
    let value = textArr[i][j];
    if(value === "fluff"){
     numImg = imagesMinecraft[3];//fluff
    }
    else if(value === "alert"){
     
     if(floor(frameCount) % 150 == 0){
      numImg = imagesMinecraft[2];//alert
     }
     else{
      numImg = imagesMinecraft[4]; //alert
     }
      

    }
    else if (value === "woof"){
  
      if (floor(frameCount) % 50 == 0){
        num = random(1,4);
        num = floor(num);
      }
      numImg = imagesMinecraft[num];
    }
     else if (value === "food?") { 
      if(floor(frameCount) % 15 == 0 ){
        numImg = imagesMinecraft[3];//food?
       }
       else{
        numImg = imagesMinecraft[4]; //food?
       }
     }
     else if (value === "sniff") { 
       numImg = imagesMinecraft[0];//sniff
     }
    else if (value === "dog") { 
     numImg = imagesMinecraft[2];//dog
    } else{
      numImg = imagesMinecraft[5];
    }

    image(numImg,j * 12, i * 12, 15, 15);
 }
}
pop();
}

//group sketches

function link(x,y,s){
 
  push();
  noStroke();
  translate(x,y)
 scale(s);

  for (var i = 0; i < gridarrK.length; i++) { 
      for (var j = 0; j < gridarrK.length; j++) { 
          a = gridarrK[i][j]; 
          if (a === 1) { 
           fill(157, 209, 117);
          } else if (a === 2){
          fill(87, 40, 24)
             } else if (a === 3){
          fill(209, 177, 109)
            
          } else {
          noFill();
          }
          rect((j * 30), (i * 30), 30, 30);
       }
   }
   pop();
      }

function pikachu (x,y,s){
  push();
  noStroke();
  translate(x,y);
  scale(s);
  for (var i = 0; i < gridarrTextK.length; i++) { 
      for (var j = 0; j < gridarrTextK.length; j++) { 
          d = gridarrTextK[i][j]; 
          if (d === "black") { 
           fill(0);
          } else if (d === "brown"){
          fill(87, 40, 24)
             } else if (d === "red"){
          fill(209, 0, 0)
        } else if (d === "yellow"){
           fill(255,255,0)
          } else {
          noFill();
          }
          rect((j * 30), (i * 30), 30, 30);
       }
   }
     pop();
      }

function amongus(x,y,s1,s2,r,alpha){
  push();
    noStroke(); 
    translate(x,y);
    scale(s1,s2);
    rotate(r);

    for (var i = 0; i < gridarrI.length; i++) {
     for (var j = 0; j < gridarrI.length; j++) {
      e = gridarrI[i][j];
      if (e === 1) {
        fill(0, 0, 0,alpha);
      } else if (e === 2){
        fill(200, 10, 20,alpha);
      } else if (e === 3){
        fill(150, 0, 0,alpha);
      } else if (e === 4){
        fill(170, 200, 250,alpha);
      } else if (e === 5){
        fill(100, 130, 175,alpha);
      } else if (e === 6){
        fill(250, 250, 250,alpha);
      } else {
        noFill();
      }

      rect(j * 30, i * 30, 30, 30);
    }
  }
  pop();
}

//illustration functions

function sunBeams(x,y,r){
  push();
  
  translate(x,y);
  rotate(r);

  fill(249, 226, 146,160);
  ellipse(0,0,20,20);
  triangle(0,0,-200,-1600,200,-1600);
  triangle(0,0,-200,1600,200,1600);
  triangle(0,0,1600,-200,1600,200);
  triangle(0,0,-1600,-200,-1600,200);
  triangle(0,0,-1600,-800,-1000,-800);
  triangle(0,0,1600,-800,1000,-800);
  triangle(0,0,-1600,800,-1000,800);
  triangle(0,0,1600,800,1000,800);

  pop();
}

function cloud(x,y,s,r){
  push();
  translate(x,y);
  scale(s);
  rotate(r);

  stroke(0);
  strokeWeight(1);
  fill(255, 244, 203);

  ellipse(20,-20,20,20);
  ellipse(-5,-25,20,20);
  ellipse(10,-30,25,25);
  ellipse(10,-10,20,20);
  ellipse(-5,-10,25,25);
  ellipse(5,-20,20,20);

  pop();
}

function halo(x,y,s){
  push();
  translate(x,y);
  scale(s);

    //halo
    fill(253, 255, 67,150);
    ellipse(0,0,300,150);
    fill(255, 178, 101);
     ellipse(0,0,220,75);
  pop();
}

function keyPressed(){
  if (keyIsPressed === true){
    let k = key;

    if(k == 0){
      state = 0
    }

    if(k== 1){
      state = 1;
    }

    if(k == 2){
      state = 2;
    }

    
    if(k == 3){
      state = 3;
    }

    if(k == 4){
      state = 4;
    }
    
    if(k == 5){
      state = 5;
    }

  }
}





class Pikachu{

  constructor(arr){
    this.x = random(0,width);
    this.y = random(0,height);
    this.xSpeed = random(1,3);
    this.ySpeed = random(1,3);
    this.arr = arr;
  }

  movePika(){
    if(this.x < 20 || this.x > width-20)
    this.xSpeed*=-1;
    if(this.y < 20 || this.y > height-20)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

  displayPika(s){
    push();
    translate(this.x,this.y);
    scale(s);
    noStroke();
    let d = 0;
    for (var i = 0; i < this.arr.length; i++) { 
      for (var j = 0; j < this.arr.length; j++) { 
          d = this.arr[i][j]; 
          if (d === "black") { 
           fill(0);
          } else if (d === "brown"){
          fill(87, 40, 24)
             } else if (d === "red"){
          fill(209, 0, 0)
        } else if (d === "yellow"){
           fill(255,255,0)
          } else {
          noFill();
          }
          rect((j * 30), (i * 30), 30, 30);
       }
   }
   pop();
  }
}


  