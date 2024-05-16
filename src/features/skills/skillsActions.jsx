// SKILLS ACTIONS
export function addSkills(skills) {
  return { type: "skills/addSkills", payload: skills };
}

export function removeSkill(skill) {
  return { type: "skills/removeSkill", payload: skill };
}

export function removeAllSkills() {
  return { type: "skills/removeAllSkills"};
}
