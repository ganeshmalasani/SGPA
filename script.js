function semse(){
    
    
    let sem = parseInt((document.getElementById("select-sem")).value);
    
    
    
    switch(sem){
        case 1:
        location.reload();
        case 2:
        document.getElementById("formu").reset();
        s2();
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






function calculate()
{
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
