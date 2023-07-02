import './public/translations/translator.js';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x000, 0);
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize', onWindowResize );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

camera.position.z = 5;

const loader = new GLTFLoader();

loader.load( '3D_Computer/source/ericsson_military_control_terminal.glb', function ( gltf ) {
    scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

/**
 * Materials
 */

// glass material
const glassMaterial = new THREE.MeshPhysicalMaterial({
    roughness: 0.15,
    transmission: 1,
    reflectivity: .5,
    thickness: 5,
})

const bgGeometry = new THREE.PlaneGeometry();
const bgTexture = new THREE.TextureLoader().load("background.jpg");
const bgMaterial = new THREE.MeshBasicMaterial({ map: bgTexture });
const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);

bgMesh.position.set(0, 0, -2);
bgMesh.scale.set(25, 10.8, 25)
scene.add(bgMesh);

const floorGeometry = new THREE.PlaneGeometry();
const floorTexture = new THREE.TextureLoader().load("background.jpg");
const floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture });
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);

floorMesh.position.set(0, -2, -4.68);
floorMesh.scale.set(25, 10.8, 25)
floorMesh.rotation.set(5, 0, 0)
scene.add(floorMesh);

// portfolio images
const portfolioGeometry = new THREE.PlaneGeometry();
const portfolioTexture = new THREE.TextureLoader().load("portfolio.png");
const portfolioMaterial = new THREE.MeshBasicMaterial({ map: portfolioTexture, transparent:true });
const portfolioMesh = new THREE.Mesh(portfolioGeometry, portfolioMaterial);

portfolioMesh.position.set(0, 0, 0);
portfolioMesh.scale.set(.75, .75, .75)
scene.add(portfolioMesh);
portfolioMesh.visible=false


// phone images
const phoneGeometry = new THREE.PlaneGeometry();
const phoneTexture = new THREE.TextureLoader().load("phoneEcommerce.png");
const phoneMaterial = new THREE.MeshBasicMaterial({ map: phoneTexture, transparent:true });
const phoneMesh = new THREE.Mesh(phoneGeometry, phoneMaterial);

phoneMesh.position.set(-5.25, .0, 1.95);
phoneMesh.rotation.set(.125, .25, .25);
phoneMesh.scale.set(.339, .735, .339)
scene.add(phoneMesh);
phoneMesh.visible=false

const phoneGeometry2 = new THREE.PlaneGeometry();
const phoneTexture2 = new THREE.TextureLoader().load("phoneBlog.png");
const phoneMaterial2 = new THREE.MeshBasicMaterial({ map: phoneTexture2, transparent:true });
const phoneMesh2 = new THREE.Mesh(phoneGeometry2, phoneMaterial2);

phoneMesh2.position.set(-4.9, .2, 2.25);
phoneMesh2.rotation.set(.125, -.25, .15);
phoneMesh2.scale.set(.339, .735, .339)
scene.add(phoneMesh2);
phoneMesh2.visible=false

const phoneGeometry3 = new THREE.PlaneGeometry();
const phoneTexture3 = new THREE.TextureLoader().load("phoneNews.png");
const phoneMaterial3 = new THREE.MeshBasicMaterial({ map: phoneTexture3, transparent:true });
const phoneMesh3 = new THREE.Mesh(phoneGeometry3, phoneMaterial3);

phoneMesh3.position.set(-4.55, .225, 2);
phoneMesh3.rotation.set(-.25, .25, -.25);
phoneMesh3.scale.set(.339, .735, .339)
scene.add(phoneMesh3);
phoneMesh3.visible=false


function getGeometry() {
    var randomNum = Math.floor(Math.random() * 5);
    if(randomNum == 0) {
        var randomGeometry = new THREE.IcosahedronGeometry(1, 0);
        var geometrySizes = [.35, .35, .35]
    }
    if(randomNum == 1) {
        var randomGeometry = new THREE.TorusGeometry(1, 0.5, 16, 100);
        var geometrySizes = [.25, .25, .25]
    }
    if(randomNum == 2) {
        var randomGeometry = new THREE.SphereGeometry(1, 32, 32);
        var geometrySizes = [.3, .3, .3]
    }
    if(randomNum == 3) {
        var randomGeometry = new THREE.TetrahedronGeometry(1);
        var geometrySizes = [.35, .35, .35]
    }
    if (randomNum == 4) {
        var randomGeometry = new THREE.TorusKnotGeometry(1, 0.4, 64, 16);
        var geometrySizes = [.25, .25, .25]
    }
    return [randomGeometry, geometrySizes]
}
/**
 * Geometries
 */

const firstGeometry = getGeometry()
const icosahedronGeometry = firstGeometry[0]
const cube = new THREE.Mesh(icosahedronGeometry, glassMaterial);
scene.add(cube);

var geometrySizes = firstGeometry[1]
cube.scale.set(geometrySizes[0], geometrySizes[1], geometrySizes[2]);
cube.rotation.set(-.25, .25, -.25);
cube.position.set(-1.5, 2.5, 0);

const secondGeometry = getGeometry()
const donutGeometry = secondGeometry[0]
const torus = new THREE.Mesh(donutGeometry, glassMaterial);
scene.add(torus);

var geometrySizes = secondGeometry[1]
torus.scale.set(geometrySizes[0], geometrySizes[1], geometrySizes[2])
torus.rotation.set(-.25, .25, -.25);
torus.position.set(1.25, .5, 2);

const thirdGeometry = getGeometry()
const sphereGeometry = thirdGeometry[0]
const sphere = new THREE.Mesh(sphereGeometry, glassMaterial);
scene.add(sphere);

var geometrySizes = thirdGeometry[1]
sphere.scale.set(geometrySizes[0], geometrySizes[1], geometrySizes[2])
sphere.position.set(1, -1, 1);

/**
 * Lights
 */
var color = 0xffffff;
var intensity = 2.5;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-5, 5, 9);
light.target.position.set(5, 0, 0);
scene.add(light);
scene.add(light.target);


color = 0x4D4DFF
intensity = 2
const light2 = new THREE.DirectionalLight(color, intensity);
light2.position.set(2, 4, 7);
light2.target.position.set(0, 0, 0);
scene.add(light2);
scene.add(light2.target);


let splash_opacity = 1
function decreaseOpacity() {
    var splashScreen = document.querySelector('.splashScreen');
    if (splash_opacity > 0) {
        splash_opacity -= 0.1;
        splashScreen.style.opacity = splash_opacity;
        setTimeout(decreaseOpacity, 100);
    } else {
         splashScreen.style.display = "none";
    }
}

let textsOpacity = 0
function increaseTextOpacity() {
    var textsVertical = document.querySelectorAll('.flutuantText');
    if (textsOpacity < 1) {
        textsOpacity += 0.1;
        textsVertical[0].style.opacity = textsOpacity;
        textsVertical[1].style.opacity = textsOpacity;
        textsVertical[2].style.opacity = textsOpacity;
        textsVertical[3].style.opacity = textsOpacity;
        setTimeout(increaseTextOpacity, 100);
    }
}

setTimeout(function() {
    decreaseOpacity()
}, 1000);

/**
 * Animations
 */

//Phones
function rotatePhoneAnimation()
{

    if (phoneMesh.rotation.y <= .5 && rotationPhoneUp == true)
    {
        phoneMesh.rotation.y += .0025
        phoneMesh.rotation.x += .00125

    }else 
    {
        rotationPhoneUp = false
        phoneMesh.rotation.y -= .0025
        phoneMesh.rotation.x -= .00125

        if (phoneMesh.rotation.y <= 0.05)
        {
            rotationPhoneUp = true
        }
    }
    if (phoneMesh2.rotation.y <= .125 && rotationPhone2Up == true)
    {
        phoneMesh2.rotation.y += .0025
        phoneMesh2.rotation.x += .00125

    }else 
    {
        rotationPhone2Up = false
        phoneMesh2.rotation.y -= .0025
        phoneMesh2.rotation.x -= .00125

        if (phoneMesh2.rotation.y <= -0.5)
        {
            rotationPhone2Up = true
        }
    }

    if (phoneMesh3.rotation.y <= .125 && rotationPhone3Up == true)
    {
        phoneMesh3.rotation.y += .0025
        phoneMesh3.rotation.x += .00125

    }else 
    {
        rotationPhone3Up = false
        phoneMesh3.rotation.y -= .0025
        phoneMesh3.rotation.x -= .00125

        if (phoneMesh3.rotation.y <= -0.5)
        {
            rotationPhone3Up = true
        }
    }

}
var cubeUp = true
var torusUp = true
function upAndDownAnimationGeometry()
{
    //cube
    cube.rotation.x += 0.01
    cube.rotation.y -= 0.005
    torus.rotation.x += 0.005
    torus.rotation.y -= 0.0025
    if(cube.position.y <= 3.5 && cubeUp == true)
    {
        cube.position.y += 0.0005
        sphere.position.y -= 0.0005
        sphere.position.x -= 0.0005
    }else {
        cubeUp = false
        cube.position.y -= 0.0005
        sphere.position.y += 0.0005
        sphere.position.x += 0.0005

        if(cube.position.y <= 2.5)
        {
            cubeUp = true
        } 
    }

    //torus
    
    if(torus.position.y <= 1.5 && torusUp == true)
    {
        torus.position.y += 0.0025
        torus.position.x -= 0.00125
    }else {
        torus.position.x += 0.00125

        torusUp = false
        torus.position.y -= 0.0025
        if(torus.position.y <= .5)
        {
            torusUp = true
        } 
    }
}

// Computer
function upAndDownAnimation()
{
    var computer = scene.getObjectByName( "Sketchfab_Scene" );
    
    if (actualSection == 1 || actualSection == 2)
    {

        if(computer.position.y <= 1 && computerUp == true)
        {
            computer.position.y += 0.005
        }else {
            computerUp = false
            computer.position.y -= 0.005
            if(computer.position.y <= .4)
            {
                computerUp = true
            } 
        }
    }
}

function rotationUpAnimation()
{
    var computer = scene.getObjectByName( "Sketchfab_Scene" );

    if(computer.rotation.x <= .75 && rotationUp == true)
    {
        computer.rotation.x += 0.002
    }else {
        rotationUp = false
        computer.rotation.x -= 0.002
        if(computer.rotation.x <= .15)
        {
            rotationUp = true
        } 
    }
}

var actualSection = 1
var sectionCounter1 = document.querySelector('.sectionCounter.v1');
var sectionCounter2 = document.querySelector('.sectionCounter.v2');
var sectionCounter3 = document.querySelector('.sectionCounter.v3');
var sectionCounter4 = document.querySelector('.sectionCounter.v4');
sectionCounter1.style.backgroundColor='white'
var animationConcluded = false
function section1Animation(reverse)
{
    var computer = scene.getObjectByName( "Sketchfab_Scene" );
    if (reverse)
    {
        
        //text sections
        var section = document.getElementById("section1")
        section.classList.remove('animated');
        section.style.display = 'block';
        var section12 = document.getElementById("section12")
        section12.classList.remove('animated');
        section12.style.display = 'block';

        var section2 = document.getElementById("section2")
        section2.classList.remove('animated');
        section2.style.display = 'none';

        sectionCounter1.style.backgroundColor='white'
        sectionCounter2.style.backgroundColor='rgb(133, 133, 133)'
        //animations
        if (computer.rotation.y > -2.5)
        {
            animationConcluded = false
            computer.rotation.y -= 0.1
            camera.position.z += .06
            
        }else
        {
            actualSection = 1
            animationConcluded = true
        }
    }
    else
    {
        //text sections
        var section = document.getElementById("section1")
        section.classList.remove('animated');
        section.style.display = 'none';
        var section12 = document.getElementById("section12")
        section12.classList.remove('animated');
        section12.style.display = 'none';

        var section2 = document.getElementById("section2")
        section2.classList.remove('animated');
        section2.style.display = 'block';
        
        sectionCounter2.style.backgroundColor='white'
        sectionCounter1.style.backgroundColor='rgb(133, 133, 133)'
        //animations
        if (computer.rotation.y < -.5)
        {
            animationConcluded = false
            computer.rotation.y += 0.05
            camera.position.z -= .03
        }else
        {
            actualSection = 2
            animationConcluded = true
        }
    }
}

function section2Animation(reverse)
{
    var computer = scene.getObjectByName( "Sketchfab_Scene" );
    if (reverse)
    {
        //text sections
        var section2 = document.getElementById("section2")
        section2.classList.remove('animated');
        section2.style.display = 'block';

        var section3 = document.getElementById("section3")
        section3.classList.remove('animated');
        section3.style.display = 'none';
        var section4 = document.getElementById("section4")
        section4.classList.remove('animated');
        section4.style.display = 'none';
        var section5 = document.getElementById("section5")
        section5.classList.remove('animated');
        section5.style.display = 'none';
        var section6 = document.getElementById("section6")
        section6.classList.remove('animated');
        section6.style.display = 'none';
        var section7 = document.getElementById("section7")
        section7.classList.remove('animated');
        section7.style.display = 'none';

        //change material
        var computerModel = scene.getObjectByName( "defaultMaterial" );
        computerModel.material = oldPCMaterial

        sectionCounter2.style.backgroundColor='white'
        sectionCounter3.style.backgroundColor='rgb(133, 133, 133)'
        //animations

        phoneMesh.visible = false
        phoneMesh2.visible = false
        phoneMesh3.visible = false
        phoneMesh.position.set(-5.25, .0, 1.95);
        phoneMesh2.position.set(-4.9, .2, 2.25);
        phoneMesh3.position.set(-4.55, .225, 2);

        portfolioMesh.visible = false
        if (computer.scale.x < 1)
        {
            animationConcluded = false
            computer.scale.x += 0.0125
            computer.scale.y += 0.0125
            computer.scale.z += 0.0125
            computer.position.x -= 0.0075
            computer.position.y += 0.05
            computer.rotation.y += 0.035

            bgMesh.material.color.r += 0.03
            bgMesh.material.color.g += 0.03
            bgMesh.material.color.b += 0.03

            floorMesh.material.color.r += 0.03
            floorMesh.material.color.g += 0.03
            floorMesh.material.color.b += 0.03
            bgMesh.visible=true
            floorMesh.visible=true

        }else
        {
            var textsVertical = document.querySelectorAll('.flutuantText');
            textsVertical[0].style.opacity = 0
            textsVertical[1].style.opacity = 0
            textsVertical[2].style.opacity = 0
            textsVertical[3].style.opacity = 0
            textsOpacity = 0
            actualSection = 2
            animationConcluded = true
        }
    }else
    {
        //text sections
        var section3 = document.getElementById("section3")
        section3.classList.remove('animated');
        section3.style.display = 'block';
        var section4 = document.getElementById("section4")
        section4.classList.remove('animated');
        section4.style.display = 'block';
        var section5 = document.getElementById("section5")
        section5.classList.remove('animated');
        section5.style.display = 'block';
        var section6 = document.getElementById("section6")
        section6.classList.remove('animated');
        section6.style.display = 'block';
        var section7 = document.getElementById("section7")
        section7.classList.remove('animated');
        section7.style.display = 'block';

        var section2 = document.getElementById("section2")
        section2.classList.remove('animated');
        section2.style.display = 'none';

        //change material
        var computerModel = scene.getObjectByName( "defaultMaterial" );
        computerModel.material = glassMaterial

        sectionCounter3.style.backgroundColor='white'
        sectionCounter2.style.backgroundColor='rgb(133, 133, 133)'
        //animations

        phoneMesh.visible = true
        phoneMesh2.visible = true
        phoneMesh3.visible = true
        if (computer.scale.x > .5)
        {
            animationConcluded = false
            computer.scale.x -= 0.00625
            computer.scale.y -= 0.00625
            computer.scale.z -= 0.00625
            computer.position.x += 0.00375
            computer.position.y -= 0.025
            computer.rotation.y -= 0.0175
            phoneMesh.position.x += .06
            phoneMesh2.position.x += .06
            phoneMesh3.position.x += .06

            bgMesh.material.color.r -= 0.015
            bgMesh.material.color.g -= 0.015
            bgMesh.material.color.b -= 0.015

            floorMesh.material.color.r -= 0.015
            floorMesh.material.color.g -= 0.015
            floorMesh.material.color.b -= 0.015
            
        }else
        {
            bgMesh.visible=false
            floorMesh.visible=false
            setTimeout(function() {
                increaseTextOpacity()
            }, 1000);
            actualSection = 3
            animationConcluded = true
        }
    }
}

function section3Animation(reverse)
{
    var xSpeed = 0.01

    portfolioMesh.visible = true
    if (reverse)
    {
        var portfolio = document.querySelector(".checkPortfolio")
        portfolio.style.display = 'none';

        var section13 = document.querySelector(".section13")
        section13.style.display = 'none';

        var section3 = document.getElementById("section3")
        section3.classList.remove('animated');
        section3.style.display = 'block';
        var section4 = document.getElementById("section4")
        section4.classList.remove('animated');
        section4.style.display = 'block';
        var section5 = document.getElementById("section5")
        section5.classList.remove('animated');
        section5.style.display = 'block';
        var section6 = document.getElementById("section6")
        section6.classList.remove('animated');
        section6.style.display = 'block';
        var section7 = document.getElementById("section7")
        section7.classList.remove('animated');
        section7.style.display = 'block';

        if (phoneMesh.position.z <= 1.95) {
            phoneMesh.position.z += phoneMesh.scale.z*0.05
            phoneMesh2.position.z += phoneMesh2.scale.z*0.05
            phoneMesh3.position.z += phoneMesh3.scale.z*0.05

            portfolioMesh.position.z -= 0.025
            
            if (phoneMesh.position.z <= 1.05) {
                phoneMesh.position.x += xSpeed
                phoneMesh2.position.x += xSpeed
                phoneMesh3.position.x += xSpeed
                portfolioMesh.position.x -= xSpeed
            } else {
                phoneMesh.position.x -= xSpeed
                phoneMesh2.position.x -= xSpeed
                phoneMesh3.position.x -= xSpeed
                portfolioMesh.position.x += xSpeed
            }
            
            animationConcluded = false
        }
        else {

            phoneMesh.position.x = -0.39
            phoneMesh2.position.x = -0.04
            phoneMesh3.position.x = 0.3

            actualSection = 3
            animationConcluded = true
        }
    }
    else 
    {
        var section3 = document.getElementById("section3")
        section3.classList.remove('animated');
        section3.style.display = 'none';
        var section4 = document.getElementById("section4")
        section4.classList.remove('animated');
        section4.style.display = 'none';
        var section5 = document.getElementById("section5")
        section5.classList.remove('animated');
        section5.style.display = 'none';
        var section6 = document.getElementById("section6")
        section6.classList.remove('animated');
        section6.style.display = 'none';
        var section7 = document.getElementById("section7")
        section7.classList.remove('animated');
        section7.style.display = 'none';
        if (phoneMesh.position.z >= 0.125) {
            phoneMesh.position.z -= phoneMesh.scale.z*0.05
            phoneMesh2.position.z -= phoneMesh2.scale.z*0.05
            phoneMesh3.position.z -= phoneMesh3.scale.z*0.05

            portfolioMesh.position.z += 0.025
            
            if (phoneMesh.position.z >= 1.025) {
                phoneMesh.position.x -= xSpeed
                phoneMesh2.position.x -= xSpeed
                phoneMesh3.position.x -= xSpeed
                portfolioMesh.position.x += xSpeed
            } else {
                phoneMesh.position.x += xSpeed
                phoneMesh2.position.x += xSpeed
                phoneMesh3.position.x += xSpeed
                portfolioMesh.position.x -= xSpeed
            }

            animationConcluded = false
        }
        else {
            var portfolio = document.querySelector(".checkPortfolio")
            portfolio.style.display = 'block';

            var section13 = document.querySelector(".section13")
            section13.style.display = 'block';

            portfolioMesh.position.x = 0

            actualSection = 4
            animationConcluded = true
        }
    }
}

function section4Animation(reverse)
{
    var computer = scene.getObjectByName( "Sketchfab_Scene" );
    if (reverse)
    {
        //text sections
        var section8 = document.getElementById("section8")
        section8.classList.remove('animated');
        section8.style.display = 'none';
        var section9 = document.getElementById("section9")
        section9.classList.remove('animated');
        section9.style.display = 'none';
        var section10 = document.getElementById("section10")
        section10.classList.remove('animated');
        section10.style.display = 'none';
        var section11 = document.getElementById("section11")
        section11.classList.remove('animated');
        section11.style.display = 'none';

        var section13 = document.querySelector(".section13")
        section13.style.display = 'block';

        sectionCounter3.style.backgroundColor='white'
        sectionCounter4.style.backgroundColor='rgb(133, 133, 133)'
        //animations
        phoneMesh.visible = true
        phoneMesh2.visible = true
        phoneMesh3.visible = true
        portfolioMesh.visible = true

        if (computer.scale.x > .5)
        {
            animationConcluded = false
            computer.scale.x -= 0.01
            computer.scale.y -= 0.01
            computer.scale.z -= 0.01
            computer.position.x += 0.01
            computer.position.y -= 0.003
            computer.rotation.y += 0.01
            phoneMesh.position.x += .095
            phoneMesh2.position.x += .095
            phoneMesh3.position.x += .095
            
            bgMesh.material.color.r -= 0.024
            bgMesh.material.color.g -= 0.024
            bgMesh.material.color.b -= 0.024

            floorMesh.material.color.r -= 0.024
            floorMesh.material.color.g -= 0.024
            floorMesh.material.color.b -= 0.024

            if (portfolioMesh.position.x < -0.1) {
                portfolioMesh.position.x +=0.1
            }
            else {
                portfolioMesh.position.x = 0
            }

        }else
        {
            bgMesh.visible=false
            floorMesh.visible=false
            setTimeout(function() {
                increaseTextOpacity()
            }, 1000);

            var portfolio = document.querySelector(".checkPortfolio")
            portfolio.style.display = 'block';

            bgMesh.visible=false
            floorMesh.visible=false
            actualSection = 4
            animationConcluded = true
        }
    }
    else
    {
        //text sections
        

        var portfolio = document.querySelector(".checkPortfolio")
        portfolio.style.display = 'none';

        var section13 = document.querySelector(".section13")
        section13.style.display = 'none';

        var section8 = document.getElementById("section8")
        section8.classList.remove('animated');
        section8.style.display = 'block';
        var section9 = document.getElementById("section9")
        section9.classList.remove('animated');
        section9.style.display = 'block';
        var section10 = document.getElementById("section10")
        section10.classList.remove('animated');
        section10.style.display = 'block';
        var section11 = document.getElementById("section11")
        section11.classList.remove('animated');
        section11.style.display = 'block';

        sectionCounter4.style.backgroundColor='white'
        sectionCounter3.style.backgroundColor='rgb(133, 133, 133)'
        //animations
        phoneMesh.visible = false
        phoneMesh2.visible = false
        phoneMesh3.visible = false
        portfolioMesh.visible = false
        phoneMesh.position.setX(-5.25);
        phoneMesh2.position.setX(-4.9);
        phoneMesh3.position.setX(-4.55);
        portfolioMesh.position.setX(-5);


        bgMesh.visible=true
        floorMesh.visible=true

        if (computer.scale.x < 1)
        {
            animationConcluded = false
            computer.scale.x += 0.005
            computer.scale.y += 0.005
            computer.scale.z += 0.005
            computer.position.x -= 0.005
            computer.position.y += 0.0015
            computer.rotation.y -= 0.005

            bgMesh.material.color.r += 0.012
            bgMesh.material.color.g += 0.012
            bgMesh.material.color.b += 0.012
            floorMesh.material.color.r += 0.012
            floorMesh.material.color.g += 0.012
            floorMesh.material.color.b += 0.012


        }else
        {
            var textsVertical = document.querySelectorAll('.flutuantText');
            textsVertical[0].style.opacity = 0
            textsVertical[1].style.opacity = 0
            textsVertical[2].style.opacity = 0
            textsVertical[3].style.opacity = 0
            textsOpacity = 0

            actualSection = 5
            animationConcluded = true
        }
    }
}

/**
 * Scroll commands
 */
var scroll_command = "no command"
function upAndDownController(ev)
{
    if(splash_opacity>0)
    {
        return
    }
    if(ev.deltaY < 0 && scroll_command == "no command")
    {
        scroll_command = "up"
    }
    if(ev.deltaY > 0 && scroll_command == "no command")
    {
        scroll_command = "down"
    }
}

window.addEventListener("wheel", upAndDownController);

var touchPos;
document.body.ontouchstart = function(e){
    touchPos = e.changedTouches[0].clientY;
}
document.body.ontouchmove = function(e){
    let newTouchPos = e.changedTouches[0].clientY;
    if(splash_opacity>0)
    {
        return
    }
    if(newTouchPos > touchPos && scroll_command == "no command") {
        scroll_command = "up"
    }
    if(newTouchPos < touchPos && scroll_command == "no command") {
        scroll_command = "down"
    }
}

document.onkeydown = checkKey;

function checkKey(e) {
    if(splash_opacity>0)
    {
        return
    }
    if (e.keyCode == '38'  && scroll_command == "no command") {
        scroll_command = "up"
    } else if (e.keyCode == '40'  && scroll_command == "no command")
    {
        scroll_command = "down"
    }
}

var computerUp = true
var rotationUp = true
var rotationPhoneUp = true
var rotationPhone2Up = true
var rotationPhone3Up = true

camera.position.z = 5

var oldPCMaterial = undefined

var initialSettings = false
function renderScene() {
    requestAnimationFrame( renderScene );
    renderer.render( scene, camera );
    if (splash_opacity >.9)
    {
        return
    }
    var computer = scene.getObjectByName( "Sketchfab_Scene" );

    if (!initialSettings)
    {
        computer.position.y = 1
        computer.rotation.y = -2.5
        initialSettings = true

        oldPCMaterial = scene.getObjectByName("defaultMaterial").material
    }
    
    rotationUpAnimation();
    
    upAndDownAnimation();

    upAndDownAnimationGeometry();

    rotatePhoneAnimation();

    if (actualSection != 3 && actualSection != 4 && textsOpacity != 0)
    {
        var textsVertical = document.querySelectorAll('.flutuantText');
        textsVertical[0].style.opacity = 0
        textsVertical[1].style.opacity = 0
        textsVertical[2].style.opacity = 0
        textsVertical[3].style.opacity = 0
        textsOpacity = 0
    }
    if (scroll_command != "no command")
    {
        if (scroll_command == "down")
        {
            if(actualSection == 1)
            {
                section1Animation(false)
            }
            else if(actualSection == 2)
            {
                section2Animation(false)
            }
            else if(actualSection == 3)
            {
                section3Animation(false)
            }
            else if(actualSection == 4)
            {
                section4Animation(false)
            }

        }else
        {
            if (actualSection == 1)
            {
                scroll_command = "no command"
            }
            if (actualSection == 2)
            {
                section1Animation(true)
            }
            else if (actualSection == 3)
            {
                section2Animation(true)
            }
            else if (actualSection == 4)
            {
                section3Animation(true)
            }
            else if (actualSection == 5)
            {
                section4Animation(true)
            }
            
        }
        if(animationConcluded == true)
        {
            scroll_command = "no command"
        }
    }
}

renderScene();
