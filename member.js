function skillsMember(){
    return {
        name: "Member",
        description: "A member of the team with specific skills.",
        skills: [],
        addSkill: function(skill) {
            this.skills.push(skill);
        },
        listSkills: function() {
            return this.skills.join(", ");
        }
    };
    
}