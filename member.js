function skillsMember() {
    var member = document.getElementsByName("member");
    var skill = document.getElementsByName("skill");
    var memberValue = member[0].value;
    var skillValue = skill[0].value;
    var memberSkills = memberValue + " " + skillValue;
    var memberSkillsElement = document.getElementById("memberSkills");
    memberSkillsElement.innerHTML = memberSkills;
}