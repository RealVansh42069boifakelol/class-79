nameOfStudentsArray = [];

function submitNames() 
{
    var name1 = document.getElementById("nameOfSudent1").value;
    var name2 = document.getElementById("nameOfSudent2").value;
    var name3 = document.getElementById("nameOfSudent3").value;
    var name4 = document.getElementById("nameOfSudent4").value;

    nameOfStudentsArray.push(name1);
    nameOfStudentsArray.push(name2);
    nameOfStudentsArray.push(name3);
    nameOfStudentsArray.push(name4);

    console.log(nameOfStudentsArray);

    document.getElementById("displayName").innerHTML = nameOfStudentsArray;
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";
}

function sortNames() 
{
    nameOfStudentsArray.sort();
    console.log(nameOfStudentsArray);
    document.getElementById("displayName").innerHTML = nameOfStudentsArray;
}