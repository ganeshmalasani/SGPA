function semse(){
    
    
    let sem = parseInt((document.getElementById("select-sem")).value);
    
    
    
    switch(sem){
        case 1:
        location.reload();
        case 2:
        document.getElementById("formu").reset();
        s2();
        break;
        case 3:
        document.getElementById("formu").reset();
        s3();
        break;
        case 4:
        document.getElementById("formu").reset();
        s4();
        break;

        


    }   
    
    
}
function s2()
{
    document.getElementById("maths").innerHTML='Advanced Calculus and Numerical Methods';
    document.getElementById("mat").placeholder="21MAT21";
    
    document.getElementById("physics").innerHTML='Physics';
    document.getElementById("chem").placeholder="21PHY22";

    document.getElementById("pspp").innerHTML='Basic Electrical Engineering';
    document.getElementById("psp").placeholder="21ELE23";

    document.getElementById("elnn").innerHTML='Elements of Civil Engg';
    document.getElementById("eln").placeholder="21CIV24";

    document.getElementById("emee").innerHTML="Engineering Visualization";
    document.getElementById("eme").placeholder="21EVN25";

    document.getElementById("chelab").innerHTML="Physics Lab";
    document.getElementById("chel").placeholder="21PHYL26";

    document.getElementById("cplab").innerHTML="Electrical Lab";
    document.getElementById("cpl").placeholder="21ELEL27";

    document.getElementById("eng").innerHTML="English";
    document.getElementById("egh2").placeholder="21EGH28";

    document.getElementById("sfhh").innerHTML="Innovation and Design Thinking";
    document.getElementById("sfh").placeholder="21IDT29";


}
function s3()
{
    document.getElementById("maths").innerHTML='Transform Calculus, Fourier Series And Numerical Techniques';
    document.getElementById("mat").placeholder="21MAT31";
    
    document.getElementById("physics").innerHTML='Data Structures';
    document.getElementById("chem").placeholder="21CS32";

    document.getElementById("pspp").innerHTML='Analog and Digital Electronics';
    document.getElementById("psp").placeholder="21CS33";

    document.getElementById("elnn").innerHTML='Computer Organization';
    document.getElementById("eln").placeholder="21CS34";

    document.getElementById("emee").innerHTML="Java Laboratory";
    document.getElementById("eme").placeholder="21CSL35";

    document.getElementById("chelab").innerHTML="Social Connect and Responsibility";
    document.getElementById("chel").placeholder="21SCR36";

    document.getElementById("cplab").innerHTML="Balake/Samskruthika Kannada";
    document.getElementById("cpl").placeholder="21KSK/KBK37";

    document.getElementById("eng").innerHTML="Programming in C++";
    document.getElementById("egh2").placeholder="21CS382";

    let temp11=document.getElementById("sfhh");
    temp11.classList.add("hide-sub");
    let temp12=document.getElementById("sfh");
    temp12.classList.add("hide-sub");


    
}


function s4()
{
    document.getElementById("maths").innerHTML='Mathematical Foundations';
    document.getElementById("mat").placeholder="21MATCS41";
    
    document.getElementById("physics").innerHTML='Design & Analysis of Algorithm';
    document.getElementById("chem").placeholder="21CS42";

    document.getElementById("pspp").innerHTML='Microcontroller & Embedded Systems';
    document.getElementById("psp").placeholder="21CS43";

    document.getElementById("elnn").innerHTML='Operating Systems';
    document.getElementById("eln").placeholder="21CS44";

    document.getElementById("emee").innerHTML="Biology for ENgineers";
    document.getElementById("eme").placeholder="21BE45";

    document.getElementById("chelab").innerHTML="Python Lab";
    document.getElementById("chel").placeholder="21CSL46";

    document.getElementById("cplab").innerHTML="CIP";
    document.getElementById("cpl").placeholder="21CIP47";

    document.getElementById("eng").innerHTML="R PROGRAMMING";
    document.getElementById("egh2").placeholder="21CSL483";

    document.getElementById("sfhh").innerHTML="UHV";
    document.getElementById("sfh").placeholder="21UH49";

    console.log("SEM 4");

  

    
}



function calculate()
{
    let sem2 = parseInt((document.getElementById("select-sem")).value);
    switch(sem2)
    {
        case 1:
        case 2:
            var m1=get_grade(parseInt(document.getElementById("mat").value));
            var m2=get_grade(parseInt(document.getElementById("chem").value));
            var m3=get_grade(parseInt(document.getElementById("psp").value));
            var m4=get_grade(parseInt(document.getElementById("eln").value));
            var m5=get_grade(parseInt(document.getElementById("eme").value));
            var m6=get_grade(parseInt(document.getElementById("chel").value));
            var m7=get_grade(parseInt(document.getElementById("cpl").value));
            var m8=get_grade(parseInt(document.getElementById("egh2").value));
            var m9=get_grade(parseInt(document.getElementById("sfh").value));
            let temp=document.getElementById("popup");
            temp.classList.add("open-pop-up");
           
            var finalsgpa=(m1*3+m2*3+m3*3+m4*3+m5*3+m6+m7+m8*2+m9)/20;
            document.getElementById("display-sgpa").innerHTML = "SGPA: "+finalsgpa;
        break;
        case 3:
            var m1=get_grade(parseInt(document.getElementById("mat").value));
            var m2=get_grade(parseInt(document.getElementById("chem").value));
            var m3=get_grade(parseInt(document.getElementById("psp").value));
            var m4=get_grade(parseInt(document.getElementById("eln").value));
            var m5=get_grade(parseInt(document.getElementById("eme").value));
            var m6=get_grade(parseInt(document.getElementById("chel").value));
            var m7=get_grade(parseInt(document.getElementById("cpl").value));
            var m8=get_grade(parseInt(document.getElementById("egh2").value));
            let temp2=document.getElementById("popup");
            temp2.classList.add("open-pop-up");
           
            var finalsgpa=(m1*3+m2*4+m3*4+m4*3+m5*1+m6+m7+m8)/18;
            document.getElementById("display-sgpa").innerHTML = "SGPA: "+finalsgpa.toFixed(2);
        break;

        case 4:

        var m1=get_grade(parseInt(document.getElementById("mat").value));
            var m2=get_grade(parseInt(document.getElementById("chem").value));
            var m3=get_grade(parseInt(document.getElementById("psp").value));
            var m4=get_grade(parseInt(document.getElementById("eln").value));
            var m5=get_grade(parseInt(document.getElementById("eme").value));
            var m6=get_grade(parseInt(document.getElementById("chel").value));
            var m7=get_grade(parseInt(document.getElementById("cpl").value));
            var m8=get_grade(parseInt(document.getElementById("egh2").value));
            var m9=get_grade(parseInt(document.getElementById("extra").value));
            
            let temp3=document.getElementById("popup");
            temp3.classList.add("open-pop-up");
           
            var finalsgpa=(m1*3+m2*4+m3*4+m4*3+m5*2+m6+m7+m8+m9*2)/22;
            document.getElementById("display-sgpa").innerHTML = "SGPA: "+finalsgpa.toFixed(2);
        break;

        
    }
    
}

function closePop(){
    let temp=document.getElementById("popup");
    temp.classList.remove("open-pop-up");

}


function get_grade(marks)
{
    if(marks>=90)
    return 10;
    else if(marks>=80)
    return 9;
    else if(marks>=70)
    return 8;
    else if(marks>=60)
    return 7;
    else if(marks>=55)
    return 6;
    else if(marks>=50)
    return 5;
    else if(marks>=40)
    return 4;
    else
    return 0;
}
function resetmadu()
{
    document.getElementById("formu").reset();
}
